@echo off
chcp 65001

REM ===== 배포 파일 REQM 폴더로 복사 후 Nexacro 배포 =====
echo [1/2] 배포 관련 파일 복사 중...
set "DEPLOY_SRC=E:\git\VSCODE_WORK900\WORK900\dist\deploy"
set "DEPLOY_DST=%~dp0"

copy /Y "%DEPLOY_SRC%\NexacroN_Deploy_JAVA.jar" "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar" >nul
copy /Y "%DEPLOY_SRC%\log4j2.xml"              "%DEPLOY_DST%log4j2.xml"              >nul
echo     - NexacroN_Deploy_JAVA.jar, log4j2.xml 복사 완료

REM ===== JAVA_HOME 설정 (상대 경로) =====
set "JAVA_HOME=%~dp0JDK"
if not exist "%JAVA_HOME%\bin\java.exe" (
    echo [오류] JDK 폴더를 찾을 수 없거나 java.exe가 존재하지 않습니다: %JAVA_HOME%
    pause
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

echo [2/2] Nexacro 배포 시작...
cd /d "%DEPLOY_DST%"
"%JAVA_HOME%\bin\java.exe" "-Dlog4j.configurationFile=.\log4j2.xml" -jar "NexacroN_Deploy_JAVA.jar" -P "%ARG_P%" -O "%ARG_O%" -B "%ARG_B%" -GENERATERULE "%ARG_GR%"
echo [2/2] Nexacro 배포 완료
