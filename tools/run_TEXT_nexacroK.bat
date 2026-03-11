@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM ===== 설정 파일 경로 설정 =====
set "CONFIG_FILE=%~dp0run_nexacroK_config.txt"

if not exist "%CONFIG_FILE%" (
    echo [오류] 설정 파일을 찾을 수 없습니다: %CONFIG_FILE%
    pause
    exit /b 1
)

REM ===== 설정 읽기 (지연된 확장을 사용하여 괄호/공백 문제 방지) =====
echo [NexacroK Launcher] 설정 정보를 읽는 중...
for /f "usebackq tokens=1* delims==" %%a in ("%CONFIG_FILE%") do (
    set "key=%%a"
    set "val=%%b"
    if /i "!key!"=="NexacroExePath" set "EXE_PATH=!val!"
    if /i "!key!"=="Key" set "K_VAL=!val!"
    if /i "!key!"=="ServiceUrl" set "S_VAL=!val!"
    if /i "!key!"=="DebugId" set "D_VAL=!val!"
)

REM ===== 정보 출력 =====
echo --------------------------------------------------
echo NexacroExePath : !EXE_PATH!
echo Key (-K)       : !K_VAL!
echo Service (-S)   : !S_VAL!
echo Debug (-D)     : !D_VAL!
echo --------------------------------------------------

REM ===== 실행 파일 존재 확인 =====
if not exist "!EXE_PATH!" (
    echo [오류] Nexacro 실행 파일을 찾을 수 없습니다. 설정 파일의 경로를 확인해주세요.
    echo 확인된 경로: !EXE_PATH!
    pause
    exit /b 1
)

REM ===== Nexacro 실행 =====
echo Nexacro K를 실행합니다...
REM 모든 인자와 경로를 지연된 확장 변수로 감싸서 특수문자 문제를 방지합니다.
"!EXE_PATH!" -K "!K_VAL!" -S "!S_VAL!" -D !D_VAL!

if %ERRORLEVEL% neq 0 (
    echo.
    echo [참고] 프로그램이 종료되었거나 오류가 발생했습니다. (Exit Code: %ERRORLEVEL%)
    pause
)

endlocal
