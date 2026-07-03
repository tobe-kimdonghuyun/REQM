@echo off
chcp 65001 > nul
echo =====================================================
echo  MD수집기 EXE 빌드
echo =====================================================

cd /d "%~dp0"

:: pyinstaller 경로 (user Scripts 우선, 없으면 PATH 탐색)
set "PYI=%APPDATA%\Python\Python314\Scripts\pyinstaller.exe"
if not exist "%PYI%" set "PYI=pyinstaller"

:: 패키지 설치
echo [1/3] 필요 패키지 설치 확인...
pip install selenium webdriver-manager pyperclip pyinstaller --quiet
if %ERRORLEVEL% NEQ 0 (echo [오류] pip install 실패 & pause & exit /b 1)

:: 이전 결과 정리
echo [2/3] 이전 빌드 삭제...
if exist "dist"  rmdir /s /q "dist"
if exist "build" rmdir /s /q "build"

:: 빌드
echo [3/3] exe 빌드 중... (2~3분 소요)
"%PYI%" ^
    --onefile ^
    --windowed ^
    --name "MD_Collector" ^
    --clean ^
    --collect-all selenium ^
    --collect-all webdriver_manager ^
    --collect-all pyperclip ^
    --hidden-import "selenium.webdriver.chrome.webdriver" ^
    --hidden-import "selenium.webdriver.chrome.service" ^
    --hidden-import "selenium.webdriver.chrome.options" ^
    --hidden-import "selenium.webdriver.support.expected_conditions" ^
    --hidden-import "selenium.webdriver.support.ui" ^
    --hidden-import "selenium.webdriver.common.by" ^
    --hidden-import "selenium.webdriver.common.keys" ^
    --hidden-import "selenium.common.exceptions" ^
    --hidden-import "trio" ^
    --hidden-import "trio_websocket" ^
    --hidden-import "websocket" ^
    md_collector.py

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [오류] 빌드 실패
    pause & exit /b 1
)

echo.
echo =====================================================
echo  완료: scripts\dist\MD_Collector.exe
echo =====================================================
start "" "dist"
pause
