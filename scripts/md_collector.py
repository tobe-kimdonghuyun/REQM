"""
마크다운 문서 수집기
- 사이트에 접속하여 왼쪽 메뉴를 순차적으로 탐색
- 각 페이지에서 마크다운 버튼 클릭 -> 마크다운으로 복사 클릭
- 클립보드의 내용을 .md 파일로 저장
- exe 로 배포 가능 (PyInstaller)
"""

import os
import sys
import time
import threading
import tkinter as tk
from tkinter import ttk, scrolledtext, filedialog, messagebox

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import (
    TimeoutException,
    NoSuchElementException,
    ElementClickInterceptedException,
    StaleElementReferenceException,
)

try:
    from webdriver_manager.chrome import ChromeDriverManager
    HAS_WDM = True
except ImportError:
    HAS_WDM = False

import pyperclip


# ── exe 패키징 시 기준 경로 ──────────────────────────────────
if getattr(sys, "frozen", False):
    BASE_DIR = os.path.dirname(sys.executable)
else:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ── 건너뛸 메뉴 목록 ──────────────────────────────────────────
SKIP_MENUS = {"Library Search", "저작권 면책조항"}


def _has_korean(text: str) -> bool:
    """텍스트에 한글이 포함되어 있으면 True"""
    return any(
        "가" <= ch <= "힣"   # 가-힣
        or "ᄀ" <= ch <= "ᇿ"  # 자모
        or "㄰" <= ch <= "㆏"  # 호환 자모
        for ch in text
    )


def _should_skip(title: str) -> bool:
    """건너뛰어야 할 메뉴이면 True (지정 메뉴 or 한글 포함)"""
    return title in SKIP_MENUS or _has_korean(title)


class MarkdownCollectorApp:
    """마크다운 수집기 GUI 앱"""

    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title("마크다운 문서 수집기")
        self.root.geometry("780x640")
        self.root.resizable(True, True)

        self.driver = None
        self.running = False
        self.stop_event = threading.Event()

        self._build_ui()

    # ──────────────────────────────────────────────
    # UI 구성
    # ──────────────────────────────────────────────
    def _build_ui(self):
        pad = {"padx": 8, "pady": 4}

        # ── URL 입력 ──
        frm_url = ttk.LabelFrame(self.root, text="사이트 URL")
        frm_url.pack(fill="x", **pad)

        ttk.Label(frm_url, text="URL:").grid(row=0, column=0, sticky="w", padx=4, pady=3)
        self.var_url = tk.StringVar(value="https://docs.tobesoft.com/nexacro_n_v24_ko")
        ttk.Entry(frm_url, textvariable=self.var_url, width=85).grid(
            row=0, column=1, sticky="ew", padx=4, pady=3
        )
        frm_url.columnconfigure(1, weight=1)

        # ── 저장 경로 ──
        frm_path = ttk.LabelFrame(self.root, text="저장 경로")
        frm_path.pack(fill="x", **pad)

        self.var_save_dir = tk.StringVar(value=r"D:\git_prj\REQM\레퍼런스가이드")
        ttk.Entry(frm_path, textvariable=self.var_save_dir, width=72).grid(
            row=0, column=0, sticky="ew", padx=4, pady=3
        )
        ttk.Button(frm_path, text="폴더 선택", command=self._browse_dir).grid(
            row=0, column=1, padx=4, pady=3
        )
        frm_path.columnconfigure(0, weight=1)

        # ── 버튼 ──
        frm_btn = ttk.Frame(self.root)
        frm_btn.pack(fill="x", **pad)

        self.btn_start = ttk.Button(
            frm_btn, text="▶  수집 시작", command=self._on_start, width=16
        )
        self.btn_start.pack(side="left", padx=4)
        self.btn_stop = ttk.Button(
            frm_btn, text="■  중지", command=self._on_stop, state="disabled", width=10
        )
        self.btn_stop.pack(side="left", padx=4)

        # ── 진행 상황 ──
        frm_prog = ttk.LabelFrame(self.root, text="진행 상황")
        frm_prog.pack(fill="x", **pad)

        self.var_status = tk.StringVar(value="대기 중...")
        ttk.Label(frm_prog, textvariable=self.var_status, anchor="w").pack(
            fill="x", padx=4, pady=2
        )

        self.progress = ttk.Progressbar(frm_prog, mode="determinate")
        self.progress.pack(fill="x", padx=4, pady=2)

        self.var_count = tk.StringVar(value="0 / 0")
        ttk.Label(frm_prog, textvariable=self.var_count, anchor="e").pack(
            anchor="e", padx=4, pady=2
        )

        # ── 로그 ──
        frm_log = ttk.LabelFrame(self.root, text="로그")
        frm_log.pack(fill="both", expand=True, **pad)

        self.log_text = scrolledtext.ScrolledText(
            frm_log, height=14, state="disabled", wrap="word", font=("Consolas", 9)
        )
        self.log_text.pack(fill="both", expand=True, padx=4, pady=4)

    # ──────────────────────────────────────────────
    # UI 이벤트
    # ──────────────────────────────────────────────
    def _browse_dir(self):
        d = filedialog.askdirectory(initialdir=self.var_save_dir.get())
        if d:
            self.var_save_dir.set(d)

    def _on_start(self):
        url = self.var_url.get().strip()
        save_dir = self.var_save_dir.get().strip()

        if not url:
            messagebox.showwarning("경고", "URL을 입력해주세요.")
            return
        if not save_dir:
            messagebox.showwarning("경고", "저장 경로를 입력해주세요.")
            return

        os.makedirs(save_dir, exist_ok=True)

        self.btn_start.config(state="disabled")
        self.btn_stop.config(state="normal")
        self.stop_event.clear()
        self.running = True
        self.progress["value"] = 0

        t = threading.Thread(target=self._worker, args=(url, save_dir), daemon=True)
        t.start()

    def _on_stop(self):
        self.stop_event.set()
        self.log("⚠ 사용자에 의해 중지 요청됨...")

    # ──────────────────────────────────────────────
    # 로그 / 상태 유틸
    # ──────────────────────────────────────────────
    def log(self, msg: str):
        def _append():
            self.log_text.config(state="normal")
            self.log_text.insert("end", f"[{time.strftime('%H:%M:%S')}] {msg}\n")
            self.log_text.see("end")
            self.log_text.config(state="disabled")

        self.root.after(0, _append)

    def set_status(self, msg: str):
        self.root.after(0, lambda: self.var_status.set(msg))

    def set_progress(self, current: int, total: int):
        def _update():
            self.var_count.set(f"{current} / {total}")
            self.progress["value"] = (current / total * 100) if total > 0 else 0

        self.root.after(0, _update)

    # ──────────────────────────────────────────────
    # 작업 스레드
    # ──────────────────────────────────────────────
    def _worker(self, url: str, save_dir: str):
        try:
            self._run_collection(url, save_dir)
        except Exception as e:
            self.log(f"[치명 오류] {e}")
        finally:
            self._cleanup()
            self.root.after(0, self._finish_ui)

    def _finish_ui(self):
        self.btn_start.config(state="normal")
        self.btn_stop.config(state="disabled")
        self.running = False

    def _cleanup(self):
        if self.driver:
            try:
                self.driver.quit()
            except Exception:
                pass
            self.driver = None

    # ──────────────────────────────────────────────
    # Chrome 드라이버 생성
    # ──────────────────────────────────────────────
    def _create_driver(self) -> webdriver.Chrome:
        options = Options()
        options.add_argument("--start-maximized")
        options.add_argument("--disable-gpu")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        # 클립보드 권한 자동 허용
        options.add_experimental_option(
            "prefs", {"profile.content_settings.exceptions.clipboard": {"*": {"setting": 1}}}
        )
        options.add_experimental_option("excludeSwitches", ["enable-logging"])

        if HAS_WDM:
            service = Service(ChromeDriverManager().install())
            return webdriver.Chrome(service=service, options=options)
        return webdriver.Chrome(options=options)

    # ──────────────────────────────────────────────
    # 수집 메인 로직
    # ──────────────────────────────────────────────
    def _run_collection(self, url: str, save_dir: str):
        self.set_status("Chrome 브라우저 실행 중...")
        self.log("Chrome 브라우저를 시작합니다...")

        try:
            self.driver = self._create_driver()
        except Exception as e:
            self.log(f"[오류] Chrome 드라이버 생성 실패: {e}")
            return

        driver = self.driver
        wait = WebDriverWait(driver, 20)

        # 1) 사이트 접속
        self.set_status("사이트 접속 중...")
        self.log(f"URL: {url}")
        driver.get(url)
        self._wait_page_load(driver, wait)

        # 2) 사이드바 메뉴 항목 수집
        self.set_status("메뉴 목록 수집 중...")
        self.log("왼쪽 사이드바에서 메뉴 목록을 수집합니다...")

        menu_items = self._get_sidebar_menus(driver)

        if not menu_items:
            self.log("[경고] 사이드바 메뉴를 찾지 못했습니다. 현재 페이지에서 직접 수집을 시도합니다.")
            count = self._collect_from_page(driver, wait, save_dir)
            self.set_status(f"완료! {count}개 파일 저장됨")
            return

        total = len(menu_items)
        self.log(f"총 {total}개 메뉴 항목 발견")
        self.set_progress(0, total)

        saved = 0
        for idx in range(total):
            if self.stop_event.is_set():
                self.log("중지됨")
                break

            # 매 반복마다 메뉴 요소를 다시 가져옴 (DOM 갱신 대비)
            menus = self._get_sidebar_menus(driver)
            if idx >= len(menus):
                self.log(f"  [{idx+1}] 메뉴 요소 없음 — 건너뜀")
                continue

            elem = menus[idx]
            title = elem.text.strip()
            if not title:
                continue

            # 건너뛸 메뉴 필터링 (지정 메뉴 or 한글 포함)
            if _should_skip(title):
                self.log(f"  [{idx+1}/{total}] 건너뜀: {title}")
                self.set_progress(idx + 1, total)
                continue

            self.set_status(f"[{idx+1}/{total}] {title}")
            self.log(f"\n[{idx+1}/{total}] {title}")

            # 메뉴 클릭
            if not self._safe_click(driver, elem):
                self.log("  → 클릭 실패, 건너뜀")
                continue

            self._wait_page_load(driver, wait)

            # 마크다운 복사
            md = self._copy_markdown(driver, wait)
            if md:
                fname = self._safe_filename(title) + ".md"
                fpath = os.path.join(save_dir, fname)
                # 중복 파일명 처리
                if os.path.exists(fpath):
                    base = self._safe_filename(title)
                    fpath = os.path.join(save_dir, f"{base}_{idx+1}.md")
                with open(fpath, "w", encoding="utf-8") as f:
                    f.write(md)
                self.log(f"  → 저장: {os.path.basename(fpath)}  ({len(md):,} bytes)")
                saved += 1
            else:
                self.log("  → 마크다운 없음 (건너뜀)")

            self.set_progress(idx + 1, total)

        self.set_status(f"완료! 총 {saved}개 파일 저장됨")
        self.log(f"\n{'='*50}")
        self.log(f"수집 완료 — {saved}/{total}개 파일 저장")
        self.log(f"저장 경로: {save_dir}")

    # ──────────────────────────────────────────────
    # 사이드바 메뉴 수집
    # ──────────────────────────────────────────────
    def _get_sidebar_menus(self, driver) -> list:
        """ui-tree 안의 클릭 가능한 메뉴 노드 반환 (빈 텍스트·숨김 요소 제외)"""

        # ui-tree 내 노드 — 클릭 대상이 a가 아닌 커스텀 요소일 수 있으므로
        # a 없이 노드 자체를 대상으로 함
        selectors = [
            "ui-tree ui-tree-node",       # 가장 구체적
            "ui-tree .tree-node",
            "ui-tree [class*='node']",
            "ui-tree li",
            "ui-tree a",                  # 링크 형태인 경우 폴백
        ]

        for sel in selectors:
            try:
                elems = driver.find_elements(By.CSS_SELECTOR, sel)
                filtered = [e for e in elems if e.text.strip() and e.is_displayed()]
                if filtered:
                    self.log(f"  메뉴 셀렉터 적중: '{sel}' → {len(filtered)}개")
                    return filtered
            except Exception:
                continue

        # 최후 폴백: ui-tree 하위 모든 요소에서 텍스트 있는 것 추출
        try:
            tree = driver.find_element(By.CSS_SELECTOR, "ui-tree")
            all_elems = tree.find_elements(By.XPATH, ".//*")
            filtered = [
                e for e in all_elems
                if e.text.strip()
                and e.is_displayed()
                and e.tag_name not in ("style", "script")
            ]
            if filtered:
                self.log(f"  폴백 셀렉터 적중: ui-tree 하위 전체 → {len(filtered)}개")
                return filtered
        except Exception:
            pass

        return []

    # ──────────────────────────────────────────────
    # 현재 페이지에서 직접 수집 (폴백)
    # ──────────────────────────────────────────────
    def _collect_from_page(self, driver, wait, save_dir: str) -> int:
        title = driver.title or "page"
        md = self._copy_markdown(driver, wait)
        if md:
            fname = self._safe_filename(title) + ".md"
            fpath = os.path.join(save_dir, fname)
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(md)
            self.log(f"저장: {fname}")
            return 1
        return 0

    # ──────────────────────────────────────────────
    # 마크다운 복사 로직
    # ──────────────────────────────────────────────
    def _copy_markdown(self, driver, wait) -> str | None:
        """마크다운 버튼 클릭 → 팝업에서 '마크다운으로 복사' 클릭 → 클립보드 반환"""

        # 클립보드 초기화
        try:
            pyperclip.copy("")
        except Exception:
            pass

        # ─ Step 1: 마크다운 버튼 찾기 ─
        md_btn = self._find_markdown_button(driver)
        if not md_btn:
            self.log("    마크다운 버튼을 찾지 못했습니다")
            return None

        # ─ Step 2: 마크다운 버튼 클릭 ─
        if not self._safe_click(driver, md_btn):
            return None

        time.sleep(1.2)

        # ─ Step 3: 팝업에서 '복사' 버튼 찾기 ─
        copy_btn = self._find_copy_button(driver)
        if not copy_btn:
            # 팝업 닫기 시도
            try:
                driver.find_element(By.TAG_NAME, "body").send_keys(Keys.ESCAPE)
            except Exception:
                pass
            return None

        # ─ Step 4: 복사 버튼 클릭 ─
        if not self._safe_click(driver, copy_btn):
            return None

        time.sleep(1.0)

        # ─ Step 5: 클립보드 읽기 ─
        try:
            content = pyperclip.paste()
            if content and content.strip():
                # 팝업 닫기
                try:
                    driver.find_element(By.TAG_NAME, "body").send_keys(Keys.ESCAPE)
                    time.sleep(0.3)
                except Exception:
                    pass
                return content.strip()
        except Exception as e:
            self.log(f"    클립보드 읽기 실패: {e}")

        return None

    def _find_markdown_button(self, driver):
        """마크다운 버튼 요소를 여러 방법으로 탐색"""
        # 방법1: ui-icon 중 title/data-action/text 에 'markdown' 포함
        try:
            icons = driver.find_elements(By.CSS_SELECTOR, "ui-icon.actionable, ui-icon[data-action]")
            for icon in icons:
                title = (icon.get_attribute("title") or "").lower()
                action = (icon.get_attribute("data-action") or "").lower()
                text = icon.text.strip().lower()
                if "markdown" in title or "마크다운" in title or "markdown" in action or "markdown" in text:
                    return icon
        except Exception:
            pass

        # 방법2: CSS 셀렉터 직접 시도
        for sel in [
            "ui-icon[data-action='markdown']",
            "button[data-action='markdown']",
            "[title*='Markdown']",
            "[title*='마크다운']",
            "[aria-label*='markdown']",
            "[aria-label*='마크다운']",
        ]:
            try:
                el = driver.find_element(By.CSS_SELECTOR, sel)
                if el.is_displayed():
                    return el
            except NoSuchElementException:
                continue

        # 방법3: XPath 텍스트 검색
        try:
            els = driver.find_elements(
                By.XPATH,
                "//*[contains(translate(text(),'MARKDOWN','markdown'),'markdown') "
                "or contains(text(),'마크다운')]",
            )
            for el in els:
                if el.is_displayed():
                    return el
        except Exception:
            pass

        return None

    def _find_copy_button(self, driver):
        """팝업 안에서 '마크다운으로 복사' 버튼 탐색"""
        # 방법1: 모달/팝업 컨테이너 내 버튼
        modal_selectors = [
            "ui-modal",
            "ui-popup",
            "dialog",
            "[role='dialog']",
            ".modal",
            "[class*='popup']",
            "[class*='dialog']",
        ]
        for modal_sel in modal_selectors:
            try:
                modal = driver.find_element(By.CSS_SELECTOR, modal_sel)
                btns = modal.find_elements(By.CSS_SELECTOR, "button, ui-icon.actionable, [role='button']")
                for btn in btns:
                    txt = btn.text.strip()
                    title = (btn.get_attribute("title") or "")
                    action = (btn.get_attribute("data-action") or "")
                    if any(k in txt or k in title or k in action
                           for k in ["복사", "copy", "copy_markdown"]):
                        if btn.is_displayed():
                            return btn
            except NoSuchElementException:
                continue

        # 방법2: CSS 셀렉터 직접
        for sel in [
            "button[data-action='copy_markdown']",
            "ui-icon[data-action='copy_markdown']",
            "[data-action='copy_markdown']",
            "button[title*='복사']",
            "button[title*='Copy']",
        ]:
            try:
                el = driver.find_element(By.CSS_SELECTOR, sel)
                if el.is_displayed():
                    return el
            except NoSuchElementException:
                continue

        # 방법3: XPath 텍스트로 탐색
        try:
            els = driver.find_elements(
                By.XPATH,
                "//*[contains(text(),'마크다운으로 복사') or contains(text(),'복사') "
                "or contains(translate(text(),'COPY','copy'),'copy')]",
            )
            for el in els:
                if el.is_displayed():
                    return el
        except Exception:
            pass

        return None

    # ──────────────────────────────────────────────
    # 헬퍼
    # ──────────────────────────────────────────────
    def _safe_click(self, driver, elem) -> bool:
        """스크롤 후 안전하게 클릭"""
        try:
            driver.execute_script("arguments[0].scrollIntoView({block:'center'});", elem)
            time.sleep(0.3)
            try:
                elem.click()
            except ElementClickInterceptedException:
                driver.execute_script("arguments[0].click();", elem)
            return True
        except StaleElementReferenceException:
            return False
        except Exception as e:
            self.log(f"    클릭 오류: {e}")
            return False

    def _wait_page_load(self, driver, wait, timeout: float = 2.5):
        """페이지 로드 대기 (document.readyState + 추가 대기)"""
        try:
            wait.until(lambda d: d.execute_script("return document.readyState") == "complete")
        except TimeoutException:
            pass
        time.sleep(timeout)

    @staticmethod
    def _safe_filename(name: str) -> str:
        """파일명으로 사용할 수 없는 문자 제거"""
        invalid = r'<>:"/\|?*'
        result = name
        for ch in invalid:
            result = result.replace(ch, "_")
        result = result.strip().strip(".")
        return result[:100] if len(result) > 100 else (result or "untitled")


# ──────────────────────────────────────────────
def main():
    root = tk.Tk()
    MarkdownCollectorApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()
