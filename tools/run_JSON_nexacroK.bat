@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM ===== 설정 파일 경로 설정 =====
set "CONFIG_FILE=%~dp0run_nexacroK_config.json"

if not exist "%CONFIG_FILE%" (
    echo [오류] JSON 설정 파일을 찾을 수 없습니다: %CONFIG_FILE%
    pause
    exit /b 1
)

REM ===== JSON에서 설정 읽기 (PowerShell 개별 호출로 안정성 확보) =====
echo [NexacroK Launcher] JSON 설정 정보를 읽는 중...

for /f "usebackq tokens=*" %%a in (`powershell -Command "(Get-Content '%CONFIG_FILE%' | ConvertFrom-Json).NexacroExePath"`) do set "EXE_PATH=%%a"
for /f "usebackq tokens=*" %%a in (`powershell -Command "(Get-Content '%CONFIG_FILE%' | ConvertFrom-Json).Key"`) do set "K_VAL=%%a"
for /f "usebackq tokens=*" %%a in (`powershell -Command "(Get-Content '%CONFIG_FILE%' | ConvertFrom-Json).ServiceUrl"`) do set "S_VAL=%%a"
for /f "usebackq tokens=*" %%a in (`powershell -Command "(Get-Content '%CONFIG_FILE%' | ConvertFrom-Json).DebugId"`) do set "D_VAL=%%a"

REM ===== 정보 출력 =====
echo --------------------------------------------------
echo NexacroExePath : !EXE_PATH!
echo Key (-K)       : !K_VAL!
echo Service (-S)   : !S_VAL!
echo Debug (-D)     : !D_VAL!
echo --------------------------------------------------

REM ===== 실행 파일 존재 확인 =====
if not exist "!EXE_PATH!" (
    echo [오류] Nexacro 실행 파일을 찾을 수 없습니다. JSON 설정의 경로를 확인해주세요.
    echo 확인된 경로: !EXE_PATH!
    pause
    exit /b 1
)

REM ===== Nexacro 실행 =====
echo Nexacro K를 실행합니다...
"!EXE_PATH!" -K "!K_VAL!" -S "!S_VAL!" -D !D_VAL!

if %ERRORLEVEL% neq 0 (
    echo.
    echo [참고] 프로그램이 종료되었거나 오류가 발생했습니다. (Exit Code: %ERRORLEVEL%)
    pause
)

endlocal
