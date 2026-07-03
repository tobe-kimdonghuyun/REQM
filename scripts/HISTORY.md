# MD_Collector 작업 히스토리

## 목적
문서 사이트에 접속하여 왼쪽 메뉴를 순차적으로 클릭 →  
각 페이지의 마크다운 버튼 클릭 → 팝업에서 "마크다운으로 복사" 클릭 →  
클립보드 내용을 `.md` 파일로 저장 (`D:\git_prj\REQM\레퍼런스가이드\`)

---

## 파일 구성

```
scripts/
├── md_collector.py      ← 메인 Python 소스
├── requirements.txt     ← 필요 패키지 목록
├── build_exe.bat        ← exe 빌드 배치 파일
├── HISTORY.md           ← 이 파일
└── dist/
    └── MD_Collector.exe ← 빌드된 실행 파일 (49.7 MB)
```

---

## 기술 스택

| 항목 | 내용 |
|------|------|
| 언어 | Python 3.14 |
| GUI | tkinter + ttk |
| 브라우저 자동화 | selenium 4.45.0 |
| ChromeDriver 관리 | webdriver-manager |
| 클립보드 | pyperclip |
| exe 패키징 | PyInstaller 6.18.0 |

---

## 주요 기능

### UI 구성
- URL 입력 (기본값: `https://docs.tobesoft.com/nexacro_n_v24_ko`)
- 저장 경로 입력 (기본값: `D:\git_prj\REQM\레퍼런스가이드`)
- 수집 시작 / 중지 버튼
- 진행 상황 (상태 텍스트 + 프로그레스바 + N/전체 카운트)
- 로그 창 (시간 + 메시지)

### 수집 흐름
1. Chrome 브라우저 실행 (webdriver-manager로 자동 버전 맞춤)
2. 사이트 접속 후 페이지 로드 대기
3. `ui-tree` 내 메뉴 노드 목록 수집
4. 각 메뉴 클릭 → 페이지 이동 대기
5. 마크다운 버튼 찾기 → 클릭 → 팝업에서 복사 버튼 클릭
6. 클립보드에서 내용 읽어 `.md` 파일로 저장
7. 파일명 = 메뉴 제목 (특수문자 치환, 100자 제한, 중복 시 `_인덱스` 접미사)

---

## 메뉴 필터링 규칙

```python
# md_collector.py 상단 상수
SKIP_MENUS = {"Library Search", "저작권 면책조항"}

def _should_skip(title: str) -> bool:
    # 지정 메뉴 또는 한글 포함 메뉴는 건너뜀 (영어 메뉴만 수집)
    return title in SKIP_MENUS or _has_korean(title)
```

- `SKIP_MENUS` 에 문자열 추가하면 해당 메뉴 건너뜀
- 한글이 포함된 메뉴는 자동으로 건너뜀

---

## 사이드바 메뉴 셀렉터 (우선순위 순)

```
1. ui-tree ui-tree-node      ← 실제 사이트 DOM 구조 (ui-tree 안에 메뉴)
2. ui-tree .tree-node
3. ui-tree [class*='node']
4. ui-tree li
5. ui-tree a
6. (폴백) ui-tree 하위 전체 요소에서 텍스트 있는 것
```

> 사이트 확인 결과: `ui-tree` 컴포넌트 내 노드를 클릭하면 오른쪽 본문이 전환됨

---

## 마크다운 버튼 / 복사 버튼 탐색 전략

### 마크다운 버튼
```
1. ui-icon.actionable 중 title/data-action/text 에 'markdown' 포함
2. CSS: ui-icon[data-action='markdown'], [title*='Markdown'] 등
3. XPath: 텍스트에 'markdown' 또는 '마크다운' 포함
```

### 복사 버튼 (팝업 내)
```
1. ui-modal / ui-popup / dialog 내 버튼 중 '복사' / 'copy' 포함
2. CSS: [data-action='copy_markdown']
3. XPath: 텍스트에 '마크다운으로 복사' 또는 '복사' 포함
```

---

## 오류 이력 및 해결

### 1. `No module named 'selenium.webdriver.chrome.webdriver'`
- **원인**: PyInstaller가 selenium 서브모듈을 자동 감지 못함
- **해결**: 빌드 시 `--collect-all selenium` + `--hidden-import` 옵션 추가

```bat
pyinstaller --collect-all selenium ^
    --hidden-import "selenium.webdriver.chrome.webdriver" ^
    --hidden-import "selenium.webdriver.chrome.service" ^
    ... (전체 목록은 build_exe.bat 참조)
```

### 2. 한글 파일명 빌드 실패 (`PermissionError / 깨진 파일명`)
- **원인**: bat 파일에서 한글 `--name "MD수집기"` 처리 실패
- **해결**: 영문명 `--name "MD_Collector"` 으로 변경

### 3. 메뉴를 찾지 못하는 문제
- **원인**: 초기 코드가 `a` 태그만 탐색 → 커스텀 `ui-tree-node` 요소 미감지
- **해결**: `ui-tree ui-tree-node` 를 1순위 셀렉터로 변경

---

## exe 빌드 방법

### 방법 1: `build_exe.bat` 더블클릭
```
scripts/build_exe.bat 실행
→ dist/MD_Collector.exe 생성
```

### 방법 2: PowerShell 직접 실행
```powershell
$pyi = "C:\Users\sjrnfl13\AppData\Roaming\Python\Python314\Scripts\pyinstaller.exe"
cd "D:\git_prj\REQM\scripts"
& $pyi --onefile --windowed --name "MD_Collector" --clean `
    --collect-all selenium --collect-all webdriver_manager --collect-all pyperclip `
    --hidden-import "selenium.webdriver.chrome.webdriver" `
    --hidden-import "selenium.webdriver.chrome.service" `
    --hidden-import "selenium.webdriver.chrome.options" `
    --hidden-import "selenium.webdriver.support.expected_conditions" `
    --hidden-import "selenium.webdriver.support.ui" `
    --hidden-import "selenium.webdriver.common.by" `
    --hidden-import "selenium.webdriver.common.keys" `
    --hidden-import "selenium.common.exceptions" `
    --hidden-import "trio" --hidden-import "trio_websocket" --hidden-import "websocket" `
    md_collector.py
```

> **주의**: 빌드 전 실행 중인 `MD_Collector.exe` 를 반드시 종료할 것 (PermissionError 발생)

---

## 향후 수정 시 참고

| 수정 항목 | 위치 |
|-----------|------|
| 건너뛸 메뉴 추가 | `md_collector.py` 상단 `SKIP_MENUS` 집합 |
| 메뉴 셀렉터 변경 | `_get_sidebar_menus()` 함수 |
| 마크다운 버튼 셀렉터 변경 | `_find_markdown_button()` 함수 |
| 복사 버튼 셀렉터 변경 | `_find_copy_button()` 함수 |
| 기본 URL 변경 | `_build_ui()` 내 `self.var_url` 초기값 |
| 기본 저장 경로 변경 | `_build_ui()` 내 `self.var_save_dir` 초기값 |
| 페이지 로드 대기 시간 조정 | `_wait_page_load()` 의 `timeout` 파라미터 |
