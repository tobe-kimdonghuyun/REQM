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

REM ===== deploy_config.txt 읽기 (PowerShell UTF-8 방식) =====
set "CONFIG=%~dp0deploy_config.txt"
if not exist "%CONFIG%" (
    echo [오류] 설정 파일을 찾을 수 없습니다: %CONFIG%
    exit /b 1
)


echo [2/2] Nexacro 배포 시작...
cd /d "%DEPLOY_DST%"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy_nexacro.ps1" -ConfigPath "%CONFIG%" -JavaExe "%JAVA_EXE%"

if errorlevel 1 (
    echo [오류] Nexacro 배포 중 오류가 발생했습니다.
    exit /b 1
)

echo [2/2] Nexacro 배포 완료

REM ===== deploy_config.txt에서 OutputPath 읽어 Chrome 실행 =====
for /f "usebackq tokens=1,* delims==" %%A in ("%CONFIG%") do (
    if /i "%%A"=="OutputPath" set "OUTPUT_PATH=%%B"
)

REM OutputPath에서 REQM 이후 경로 추출 (backslash → forward slash)
for /f "tokens=2 delims==" %%A in ('echo %OUTPUT_PATH%^| powershell -NoProfile -Command "$input | ForEach-Object { $idx = $_.IndexOf('REQM'); if ($idx -ge 0) { $_.Substring($idx + 4).TrimStart('\').Replace('\','/') } }"') do set "URL_PATH=%%A"
powershell -NoProfile -Command ^
    "$p = '%OUTPUT_PATH%'; $idx = $p.IndexOf('REQM'); if ($idx -ge 0) { $rel = $p.Substring($idx + 4).TrimStart('\').Replace('\','/'); $url = 'http://172.10.12.45:9091/' + $rel + '/index.html'; Write-Host '[3/3] Chrome 실행:' $url; Start-Process 'chrome.exe' $url } else { Write-Host '[경고] OutputPath에서 REQM 경로를 찾을 수 없습니다.' }"

REM ===== [마지막] NexacroLibPath / GenerateRule → engine\nexacroK 복사 =====
set "NEXACRO_LIB="
set "GENERATE_RULE="
for /f "usebackq tokens=1,* delims==" %%A in ("%CONFIG%") do (
    if /i "%%A"=="NexacroLibPath" set "NEXACRO_LIB=%%B"
    if /i "%%A"=="GenerateRule"   set "GENERATE_RULE=%%B"
)
set "ENGINE_BASE=D:\git_prj\REQM\engine\nexacroK"

if exist "%ENGINE_BASE%\nexacrolib" (
    echo [엔진] 기존 nexacrolib 폴더 삭제 중...
    rmdir /s /q "%ENGINE_BASE%\nexacrolib"
)
echo [엔진] NexacroLibPath 복사 중: %NEXACRO_LIB% -^> %ENGINE_BASE%\nexacrolib
robocopy "%NEXACRO_LIB%" "%ENGINE_BASE%\nexacrolib" /E /NP /NFL /NDL /XD node_modules > nul
if %errorlevel% leq 7 set errorlevel=0

if exist "%ENGINE_BASE%\generate" (
    echo [엔진] 기존 generate 폴더 삭제 중...
    rmdir /s /q "%ENGINE_BASE%\generate"
)
echo [엔진] GenerateRule 복사 중: %GENERATE_RULE% -^> %ENGINE_BASE%\generate
robocopy "%GENERATE_RULE%" "%ENGINE_BASE%\generate" /E /NP /NFL /NDL > nul
if %errorlevel% leq 7 set errorlevel=0

echo [엔진] engine\nexacroK 업데이트 완료
