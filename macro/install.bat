@echo off
chcp 65001 > nul
echo [배차요청 감지기] 패키지 설치 중...
pip install pyautogui Pillow numpy keyboard pywin32
echo.
echo 설치 완료. 아래 명령으로 실행하세요:
echo   python 배차요청_감지.py
pause
