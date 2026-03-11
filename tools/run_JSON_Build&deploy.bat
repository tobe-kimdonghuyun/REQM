@echo off
chcp 65001

REM ===== [1단계] Git master 브랜치 최신화 =====
echo [1/3] Git pull - master 브랜치 최신화 시작...
cd /d "E:\git\VSCODE_WORK900\WORK900"
git checkout master
if errorlevel 1 (
    echo [오류] git checkout master 실패
    pause
    exit /b 1
)
git pull origin master
if errorlevel 1 (
    echo [오류] git pull 실패
    pause
    exit /b 1
)
echo [1/3] Git pull 완료

REM ===== [2단계] npm build:dev 빌드 =====
echo [2/3] npm build:dev 시작...
call npm run build:dev
if errorlevel 1 (
    echo [오류] npm build:dev 실패
    pause
    exit /b 1
)
echo [2/3] npm build:dev 완료

REM ===== [3단계] 배포 파일 REQM 폴더로 복사 후 Nexacro 배포 =====
echo [3/3] 배포 관련 파일 복사 중...
set "DEPLOY_SRC=E:\git\VSCODE_WORK900\WORK900\dist\deploy"
set "DEPLOY_DST=%~dp0"

if exist "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar" del /Q "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar"
if exist "%DEPLOY_DST%log4j2.xml"              del /Q "%DEPLOY_DST%log4j2.xml"
copy /Y "%DEPLOY_SRC%\NexacroN_Deploy_JAVA.jar" "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar" >nul
copy /Y "%DEPLOY_SRC%\log4j2.xml"              "%DEPLOY_DST%log4j2.xml"              >nul
echo     - NexacroN_Deploy_JAVA.jar, log4j2.xml 복사 완료 (기존 파일 삭제 후 복사)

REM ===== JAVA_HOME 설정 (상대 경로) =====
set "JAVA_HOME=%~dp0JDK"
if not exist "%JAVA_HOME%\bin\java.exe" (
    echo [오류] JDK 폴더를 찾을 수 없거나 java.exe가 존재하지 않습니다: %JAVA_HOME%
    pause
    exit /b 1
)

REM ===== deploy_config.json 읽기 =====
set "CONFIG=%~dp0deploy_config.json"
if not exist "%CONFIG%" (
    echo [오류] 설정 파일을 찾을 수 없습니다: %CONFIG%
    exit /b 1
)

echo [3/3] Nexacro 배포 시작...
cd /d "%DEPLOY_DST%"

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$ErrorActionPreference = 'Stop';" ^
    "$props = Get-Content -Raw -LiteralPath '%CONFIG%' -Encoding UTF8 | ConvertFrom-Json;" ^
    "Write-Host ('    - ProjectPath    : ' + $props.ProjectPath);" ^
    "Write-Host ('    - OutputPath     : ' + $props.OutputPath);" ^
    "& '%JAVA_HOME%\bin\java.exe' '-Dlog4j.configurationFile=.\log4j2.xml' '-jar' 'NexacroN_Deploy_JAVA.jar' '-P' $props.ProjectPath '-O' $props.OutputPath '-B' $props.NexacroLibPath '-GENERATERULE' $props.GenerateRule"

echo [3/3] Nexacro 배포 완료
