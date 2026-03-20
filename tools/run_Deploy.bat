@echo off
chcp 65001

REM ===== 배포 파일 REQM 폴더로 복사 후 Nexacro 배포 =====
echo [1/2] 배포 관련 파일 복사 중...
set "DEPLOY_SRC=E:\git\VSCODE_WORK900\WORK900\dist\deploy"
set "DEPLOY_DST=%~dp0"

if exist "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar" del /Q "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar"
if exist "%DEPLOY_DST%log4j2.xml"              del /Q "%DEPLOY_DST%log4j2.xml"
copy /Y "%DEPLOY_SRC%\NexacroN_Deploy_JAVA.jar" "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar" >nul
copy /Y "%DEPLOY_SRC%\log4j2.xml"              "%DEPLOY_DST%log4j2.xml"              >nul
echo     - NexacroN_Deploy_JAVA.jar, log4j2.xml 복사 완료 (기존 파일 삭제 후 복사)

REM ===== 자바 경로 설정 (시스템 변수 JAVA_HOME 우선 사용) =====
if "%JAVA_HOME%"=="" (
    set "JAVA_HOME=%~dp0JDK"
)
if not exist "%JAVA_HOME%\bin\java.exe" (
    echo [오류] JDK 폴더를 찾을 수 없거나 java.exe가 존재하지 않습니다: %JAVA_HOME%
    pause
    exit /b 1
)

REM ===== deploy_config.txt 읽기 (PowerShell UTF-8 방식) =====
set "CONFIG=%~dp0deploy_config.txt"
if not exist "%CONFIG%" (
    echo [오류] 설정 파일을 찾을 수 없습니다: %CONFIG%
    exit /b 1
)


echo [2/2] Nexacro 배포 시작...
cd /d "%DEPLOY_DST%"
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$ErrorActionPreference = 'Stop';" ^
    "$cfg = @{}; Get-Content -LiteralPath '%CONFIG%' -Encoding UTF8 | ForEach-Object { if ($_ -match '=') { $k,$v = $_.Split('=', 2); $cfg[$k.Trim()] = $v.Trim() } };" ^
    "Write-Host ('    - ProjectPath    : ' + $cfg.ProjectPath);" ^
    "Write-Host ('    - OutputPath     : ' + $cfg.OutputPath);" ^
    "& '%JAVA_HOME%\bin\java.exe' '-Dlog4j.configurationFile=.\log4j2.xml' '-jar' 'NexacroN_Deploy_JAVA.jar' '-P' $cfg.ProjectPath '-O' $cfg.OutputPath '-B' $cfg.NexacroLibPath '-GENERATERULE' $cfg.GenerateRule;" ^
    "exit $LASTEXITCODE"

if errorlevel 1 (
    echo [오류] Nexacro 배포 중 오류가 발생했습니다.
    exit /b 1
)

echo [2/2] Nexacro 배포 완료
