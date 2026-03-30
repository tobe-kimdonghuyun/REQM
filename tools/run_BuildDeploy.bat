@echo off
chcp 65001

REM 현재 스크립트의 위치를 고정 (cd 명령으로 위치가 바뀌어도 유지됨)
set "SCRIPT_HOME=%~dp0"
set "SCRIPT_NAME=%~nx0"

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
set "DEPLOY_DST=%SCRIPT_HOME%"

if exist "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar" del /Q "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar"
if exist "%DEPLOY_DST%log4j2.xml"              del /Q "%DEPLOY_DST%log4j2.xml"
copy /Y "%DEPLOY_SRC%\NexacroN_Deploy_JAVA.jar" "%DEPLOY_DST%NexacroN_Deploy_JAVA.jar" >nul
copy /Y "%DEPLOY_SRC%\log4j2.xml"              "%DEPLOY_DST%log4j2.xml"              >nul
echo     - NexacroN_Deploy_JAVA.jar, log4j2.xml 복사 완료 (기존 파일 삭제 후 복사)

REM ===== 자바 경로 설정 (시스템 변수 JAVA_HOME 우선 사용) =====
if not defined JAVA_HOME (
    set "JAVA_HOME=C:\microsoft-jdk-21.0.9-windows-x64\jdk-21.0.9+10"
)
REM JAVA_HOME 끝의 \ 여부와 무관하게 java.exe 경로를 직접 고정

for %%I in ("%JAVA_HOME%") do set "JAVA_BASE=%%~I"
set "JAVA_EXE=%JAVA_BASE%\bin\java.exe"

if not exist "%JAVA_EXE%" (
    echo [오류] JDK를 찾을 수 없습니다: %JAVA_EXE%
    pause
    exit /b 1
)
REM ===== deploy_config.txt 읽기 (Batch 전용 방식) =====
set "CONFIG=%SCRIPT_HOME%deploy_config.txt"
if not exist "%CONFIG%" (
    echo [오류] 설정 파일을 찾을 수 없습니다.
    echo        확인된 경로: "%CONFIG%"
    echo        이 파일은 배치 파일(%SCRIPT_NAME%^)과 같은 위치에 있어야 합니다.
    pause
    exit /b 1
)
echo [3/3] Nexacro 배포 시작...
cd /d "%DEPLOY_DST%"

powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_HOME%deploy_nexacro.ps1" -ConfigPath "%CONFIG%" -JavaExe "%JAVA_EXE%"

if errorlevel 1 (
    echo [오류] 배포 과정 중 오류가 발생했습니다.
    pause
    exit /b 1
)

echo [3/3] Nexacro 배포 완료
