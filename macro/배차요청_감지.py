# -*- coding: utf-8 -*-
"""
배차요청관리 화면 글자 깨짐 감지기
- nexacro 창에 ESC 를 반복 전송하여 화면을 재호출
- 지정 영역의 이미지 변화(글자 깨짐)를 감지하면 자동 중지
"""

import sys
import ctypes
import tkinter as tk
import pyautogui
import time
import os
import threading
import numpy as np
from PIL import ImageGrab, Image
import win32gui
import win32con

# ── DPI 인식 설정 (tkinter Tk() 생성 전에 반드시 호출) ────────────────
# Per-Monitor DPI Aware: tkinter 좌표계 = 물리 픽셀 좌표계
# → ImageGrab.grab() 도 물리 픽셀 사용 → 별도 스케일 변환 불필요
try:
    ctypes.windll.shcore.SetProcessDpiAwareness(2)
except Exception:
    try:
        ctypes.windll.user32.SetProcessDPIAware()
    except Exception:
        pass

if getattr(sys, 'frozen', False):
    SCRIPT_DIR = os.path.dirname(sys.executable)
else:
    SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))


def _virtual_screen() -> tuple:
    """가상 화면 전체 범위 반환 (멀티모니터 포함, 물리 픽셀)
    Returns: (vx, vy, vw, vh)  — vx/vy 는 음수일 수 있음"""
    u = ctypes.windll.user32
    return (
        u.GetSystemMetrics(76),   # SM_XVIRTUALSCREEN
        u.GetSystemMetrics(77),   # SM_YVIRTUALSCREEN
        u.GetSystemMetrics(78),   # SM_CXVIRTUALSCREEN
        u.GetSystemMetrics(79),   # SM_CYVIRTUALSCREEN
    )


class WatcherApp:

    DEFAULT_DELAY     = 3.0
    DEFAULT_THRESHOLD = 3.0

    def __init__(self):
        self.running        = False
        self.monitor_region = None   # 선택된 영역 좌표 (물리 픽셀, 절대 좌표)
        self.base_image     = None
        self.loop_count     = 0
        self.thread         = None

        self.root = tk.Tk()
        self.root.title("배차요청관리 화면 깨짐 감지기")
        self.root.geometry("560x490")
        self.root.resizable(False, False)
        self.root.attributes('-topmost', True)

        self._build_ui()
        self.root.protocol("WM_DELETE_WINDOW", self._on_close)
        self.root.mainloop()

    # ── UI 구성 ───────────────────────────────────────────
    def _build_ui(self):
        fs = tk.LabelFrame(self.root, text=" 상태 ", padx=10, pady=6)
        fs.pack(fill=tk.X, padx=12, pady=6)

        self.lbl_region = tk.Label(fs, text="감지 영역: 미선택", fg='gray')
        self.lbl_region.pack(anchor='w')
        self.lbl_preview = tk.Label(fs, text="미리보기 캡처: 없음", fg='gray')
        self.lbl_preview.pack(anchor='w')
        self.lbl_base   = tk.Label(fs, text="기준 이미지: 없음", fg='gray')
        self.lbl_base.pack(anchor='w')
        self.lbl_status = tk.Label(fs, text="● 대기 중",
                                   font=('맑은 고딕', 10, 'bold'), fg='#2980B9')
        self.lbl_status.pack(anchor='w')
        self.lbl_count  = tk.Label(fs, text="반복 횟수: 0", fg='gray')
        self.lbl_count.pack(anchor='w')

        fc = tk.LabelFrame(self.root, text=" 설정 ", padx=10, pady=6)
        fc.pack(fill=tk.X, padx=12, pady=4)

        tk.Label(fc, text="ESC 후 대기 시간 (초):").grid(row=0, column=0, sticky='w')
        self.spin_delay = tk.Spinbox(
            fc, from_=1.0, to=30.0, increment=0.5, width=8, format="%.1f")
        self.spin_delay.delete(0, tk.END)
        self.spin_delay.insert(0, str(self.DEFAULT_DELAY))
        self.spin_delay.grid(row=0, column=1, padx=8, sticky='w')

        tk.Label(fc, text="변경 감지 임계값 (%):").grid(row=1, column=0, sticky='w', pady=4)
        self.spin_threshold = tk.Spinbox(
            fc, from_=0.5, to=50.0, increment=0.5, width=8, format="%.1f")
        self.spin_threshold.delete(0, tk.END)
        self.spin_threshold.insert(0, str(self.DEFAULT_THRESHOLD))
        self.spin_threshold.grid(row=1, column=1, padx=8, sticky='w')

        tk.Label(fc, text="※ 임계값이 낮을수록 민감하게 감지합니다",
                 fg='gray', font=('맑은 고딕', 8)
                 ).grid(row=2, column=0, columnspan=2, sticky='w')

        fb1 = tk.Frame(self.root)
        fb1.pack(fill=tk.X, padx=12, pady=4)

        self.btn_region = tk.Button(
            fb1, text="① 감지 영역 선택", width=18,
            bg='#2980B9', fg='white', command=self._select_region)
        self.btn_region.pack(side=tk.LEFT, padx=4)

        self.btn_capture = tk.Button(
            fb1, text="② 정상 화면 기준 캡처", width=20,
            bg='#8E44AD', fg='white', state='disabled',
            command=self._capture_base)
        self.btn_capture.pack(side=tk.LEFT, padx=4)

        fb2 = tk.Frame(self.root)
        fb2.pack(fill=tk.X, padx=12, pady=2)

        self.btn_start = tk.Button(
            fb2, text="▶  시작  (F6)", width=18,
            bg='#27AE60', fg='white', state='disabled',
            command=self._start)
        self.btn_start.pack(side=tk.LEFT, padx=4)

        self.btn_stop = tk.Button(
            fb2, text="■  중지  (F7)", width=18,
            bg='#C0392B', fg='white', state='disabled',
            command=self._stop)
        self.btn_stop.pack(side=tk.LEFT, padx=4)

        fl = tk.LabelFrame(self.root, text=" 로그 ", padx=6, pady=4)
        fl.pack(fill=tk.BOTH, expand=True, padx=12, pady=6)

        self.log_box = tk.Text(
            fl, height=8, state='disabled', font=('Consolas', 9))
        sb = tk.Scrollbar(fl, command=self.log_box.yview)
        self.log_box.configure(yscrollcommand=sb.set)
        self.log_box.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        sb.pack(side=tk.RIGHT, fill=tk.Y)

        try:
            import keyboard
            keyboard.add_hotkey('F6', self._start)
            keyboard.add_hotkey('F7', self._stop)
            self._log("핫키 등록: F6=시작, F7=중지")
        except Exception:
            self._log("keyboard 모듈 없음 — 핫키 비활성화")

        self._log("━━ 사용 순서 ━━")
        self._log("1. nexacro 배차요청관리 화면을 열어둔 상태에서 실행")
        self._log("2. ① 감지 영역 선택 → 주소 컬럼 행 부분을 드래그")
        self._log("   └ 선택 직후 region_preview.png 저장 — 영역이 맞는지 확인 가능")
        self._log("3. ② 정상 화면 기준 캡처 → 정상 상태일 때 캡처")
        self._log("4. ▶ 시작 — ESC 반복 전송 → 깨짐 감지 시 자동 중지")

    def _log(self, msg):
        self.log_box.configure(state='normal')
        self.log_box.insert(tk.END, f"[{time.strftime('%H:%M:%S')}] {msg}\n")
        self.log_box.see(tk.END)
        self.log_box.configure(state='disabled')

    # ── 영역 선택 ─────────────────────────────────────────
    def _select_region(self):
        self.root.withdraw()
        self.root.update()

        # 가상 화면 전체 범위 (싱글/멀티 모니터, DPI 배율 무관)
        vx, vy, vw, vh = _virtual_screen()

        top = tk.Toplevel(self.root)
        top.overrideredirect(True)          # 타이틀바 제거
        top.attributes('-topmost', True)
        top.attributes('-alpha', 0.25)
        top.configure(bg='black')
        # 가상 화면 전체를 덮는 창 (음수 좌표 포함, 모든 모니터 커버)
        top.geometry(f"{vw}x{vh}+{vx}+{vy}")
        top.update()
        top.focus_force()

        canvas = tk.Canvas(top, cursor='cross', bg='black', highlightthickness=0)
        canvas.pack(fill=tk.BOTH, expand=True)
        canvas.update()
        canvas.focus_set()

        canvas.create_text(
            vw // 2, 40,
            text="모니터링할 영역을 드래그하여 선택하세요  (ESC: 취소)",
            font=('맑은 고딕', 14, 'bold'), fill='white'
        )

        region = [None]
        start  = [0, 0]
        rect   = [None]

        def on_press(e):
            start[0], start[1] = e.x, e.y
            if rect[0]:
                canvas.delete(rect[0])

        def on_drag(e):
            if rect[0]:
                canvas.delete(rect[0])
            rect[0] = canvas.create_rectangle(
                start[0], start[1], e.x, e.y,
                outline='#FF4444', width=2, fill='#4488FF', stipple='gray25'
            )

        def on_release(e):
            x1 = min(start[0], e.x)
            y1 = min(start[1], e.y)
            x2 = max(start[0], e.x)
            y2 = max(start[1], e.y)
            if x2 - x1 > 10 and y2 - y1 > 10:
                # 캔버스 좌표(창 기준) + 가상 화면 원점 = 절대 화면 물리 픽셀 좌표
                # DPI 배율 보정 없이 그대로 사용:
                #   SetProcessDpiAwareness(2) 덕분에 tkinter와 ImageGrab이
                #   동일한 물리 픽셀 좌표계를 공유하므로 추가 변환 불필요
                region[0] = (x1 + vx, y1 + vy, x2 + vx, y2 + vy)
            top.destroy()

        canvas.bind('<ButtonPress-1>',   on_press)
        canvas.bind('<B1-Motion>',       on_drag)
        canvas.bind('<ButtonRelease-1>', on_release)
        canvas.bind('<Escape>',          lambda e: top.destroy())
        top.bind('<Escape>',             lambda e: top.destroy())

        self.root.wait_window(top)
        self.root.deiconify()
        self.root.update()

        if region[0]:
            self.monitor_region = region[0]
            x1, y1, x2, y2 = region[0]
            self.lbl_region.configure(
                text=f"감지 영역: ({x1},{y1}) ~ ({x2},{y2})", fg='#27AE60')

            try:
                preview = ImageGrab.grab(bbox=region[0], all_screens=True)
                preview_path = os.path.join(SCRIPT_DIR, "region_preview.png")
                preview.save(preview_path)
                self.lbl_preview.configure(
                    text=f"미리보기: {os.path.basename(preview_path)} (열어서 확인)",
                    fg='#E67E22')
                self._log(f"영역 선택 완료: {region[0]}")
                self._log(f"▶ region_preview.png 를 열어 영역이 맞는지 확인하세요")
            except Exception as ex:
                self._log(f"미리보기 캡처 오류: {ex}")

            self.btn_capture.configure(state='normal')
        else:
            self._log("영역 선택 취소")

    # ── 기준 이미지 캡처 ──────────────────────────────────
    def _capture_base(self):
        if not self.monitor_region:
            return
        self._log("2초 후 캡처합니다... (데이터 조회 대기)")
        self.btn_capture.configure(state='disabled')
        self.root.update()

        self.root.withdraw()
        self.root.update()
        time.sleep(2.0)

        self.base_image = ImageGrab.grab(bbox=self.monitor_region, all_screens=True)

        self.root.deiconify()
        self.root.update()

        path = os.path.join(SCRIPT_DIR, "base_capture.png")
        self.base_image.save(path)
        self.lbl_base.configure(
            text=f"기준 이미지: {os.path.basename(path)}", fg='#27AE60')
        self.btn_capture.configure(state='normal')
        self.btn_start.configure(state='normal')
        self.lbl_status.configure(text="● 준비 완료 — 시작 가능", fg='#27AE60')
        self._log(f"기준 이미지 저장: {path}")

    # ── 이미지 차이 계산 ──────────────────────────────────
    @staticmethod
    def _diff_pct(img1: Image.Image, img2: Image.Image) -> float:
        a1 = np.array(img1.convert('RGB'), dtype=np.float32)
        a2 = np.array(img2.convert('RGB').resize(img1.size), dtype=np.float32)
        changed = np.sum(np.abs(a1 - a2).sum(axis=2) > 30)
        return (changed / (a1.shape[0] * a1.shape[1])) * 100.0

    # ── nexacro 창 핸들 탐색 ──────────────────────────────
    @staticmethod
    def _find_nexacro_hwnd():
        found = []

        def _cb(hwnd, _):
            if not win32gui.IsWindowVisible(hwnd):
                return
            title = win32gui.GetWindowText(hwnd)
            if title and ('nexacro' in title.lower()
                          or 'KCP'  in title
                          or 'CONS' in title
                          or 'ncps' in title.lower()):
                found.append(hwnd)

        win32gui.EnumWindows(_cb, None)
        return found[0] if found else None

    # ── 메인 반복 루프 ─────────────────────────────────────
    def _loop(self):
        delay     = float(self.spin_delay.get())
        threshold = float(self.spin_threshold.get())
        self._log(f"시작 — 대기={delay}s / 임계값={threshold:.1f}%")

        while self.running:
            self.loop_count += 1
            cnt = self.loop_count
            self.root.after(
                0, lambda n=cnt: self.lbl_count.configure(text=f"반복 횟수: {n}"))

            hwnd = self._find_nexacro_hwnd()
            if hwnd:
                try:
                    win32gui.ShowWindow(hwnd, win32con.SW_RESTORE)
                    win32gui.SetForegroundWindow(hwnd)
                    time.sleep(0.2)
                except Exception as ex:
                    self._log(f"창 포커스 실패: {ex}")
            else:
                self._log("⚠ nexacro 창 미발견 — ESC 그대로 전송")

            pyautogui.press('escape')
            self._log(f"[{cnt:3d}회] ESC 전송 → {delay}s 대기 중...")

            waited = 0.0
            while waited < delay and self.running:
                time.sleep(0.2)
                waited += 0.2

            if not self.running:
                break

            try:
                current = ImageGrab.grab(bbox=self.monitor_region, all_screens=True)
                pct = self._diff_pct(self.base_image, current)
                self._log(f"[{cnt:3d}회] 화면 차이: {pct:.2f}%")

                if pct > threshold:
                    save_path = os.path.join(SCRIPT_DIR, f"detected_{cnt:04d}.png")
                    current.save(save_path)
                    self._log(f"★★★ 글자 깨짐 감지! 차이={pct:.2f}% — ESC 전송 중지")
                    self._log(f"  저장: {os.path.basename(save_path)}")
                    self._log(f"  nexacro 화면을 그대로 확인하세요.")
                    # 포커스를 빼앗지 않고 앱 상태만 업데이트
                    self.root.after(0, self._on_detected)
                    break
            except Exception as ex:
                self._log(f"캡처/비교 오류: {ex}")

        self._log(f"루프 종료 (총 {self.loop_count}회 실행)")

    # ── 시작 / 중지 ────────────────────────────────────────
    def _start(self):
        if self.running:
            return
        if not self.base_image:
            self._log("기준 이미지가 없습니다. ② 기준 캡처를 먼저 실행하세요.")
            return

        self.running    = True
        self.loop_count = 0
        self.lbl_status.configure(text="● 실행 중...", fg='#E74C3C')
        self.btn_start.configure(state='disabled')
        self.btn_stop.configure(state='normal')
        self.btn_region.configure(state='disabled')
        self.btn_capture.configure(state='disabled')

        self.thread = threading.Thread(target=self._loop, daemon=True)
        self.thread.start()

    def _stop(self):
        if not self.running:
            return
        self.running = False
        self.lbl_status.configure(text="● 중지됨", fg='#2980B9')
        self.btn_start.configure(state='normal')
        self.btn_stop.configure(state='disabled')
        self.btn_region.configure(state='normal')
        self.btn_capture.configure(state='normal')

    def _on_detected(self):
        """글자 깨짐 감지 시 — ESC 중지, nexacro 화면 포커스 유지"""
        self.running = False
        self.lbl_status.configure(text="★ 글자 깨짐 감지됨!", fg='#E74C3C')
        self.btn_start.configure(state='normal')
        self.btn_stop.configure(state='disabled')
        self.btn_region.configure(state='normal')
        self.btn_capture.configure(state='normal')

    def _on_close(self):
        self.running = False
        try:
            import keyboard
            keyboard.unhook_all()
        except Exception:
            pass
        self.root.destroy()


if __name__ == '__main__':
    pyautogui.FAILSAFE = True
    WatcherApp()
