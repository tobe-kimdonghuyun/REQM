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

copy /Y "%DEPLOY_SRC%\start-jar.bat"           "%DEPLOY_DST%start-jar.bat"           >nul
copy /Y "%DEPLOY_SRC%\NexacroN_Deploy_JAVA.jar" "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar" >nul
copy /Y "%DEPLOY_SRC%\log4j2.xml"              "%DEPLOY_DST%log4j2.xml"              >nul
echo     - start-jar.bat, NexacroN_Deploy_JAVA.jar, log4j2.xml 복사 완료

REM ===== JAVA_HOME 확인 =====
if "%JAVA_HOME%" == "" (
    echo [오류] 환경 변수 JAVA_HOME 이 설정되지 않았습니다.
    exit /b 1
)

REM ===== deploy_config.txt 읽기 (Batch 전용 방식) =====
set "CONFIG=%DEPLOY_DST%deploy_config.txt"
if not exist "%CONFIG%" (
    echo [오류] 설정 파일을 찾을 수 없습니다: %CONFIG%
    exit /b 1
)

for /f "usebackq tokens=1,2 delims==" %%a in ("%CONFIG%") do set "%%a=%%b"

set "ARG_P=%ProjectPath%"
set "ARG_O=%OutputPath%"
set "ARG_B=%NexacroLibPath%"
set "ARG_GR=%GenerateRule%"

echo     - ProjectPath    : %ARG_P%
echo     - OutputPath     : %ARG_O%

echo [3/3] Nexacro 배포 시작...
cd /d "%DEPLOY_DST%"
"%JAVA_HOME%\bin\java.exe" "-Dlog4j.configurationFile=.\log4j2.xml" -jar "NexacroN_Deploy_JAVA.jar" -P "%ARG_P%" -O "%ARG_O%" -B "%ARG_B%" -GENERATERULE "%ARG_GR%"
echo [3/3] Nexacro 배포 완료
