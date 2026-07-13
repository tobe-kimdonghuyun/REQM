@echo off
chcp 65001 > nul
setlocal

set "BRANCH=%~1"
if "%BRANCH%"=="" set /p BRANCH="branch 명을 입력하세요: "
if "%BRANCH%"=="" echo [ERROR] branch 명을 입력해야 합니다. & pause & exit /b 1

REM ===== 경로 설정 =====
set "SOURCE_DIR=E:\git\VSCODE_WORK900\WORK900"
set "FRAMEWORK_SRC=%SOURCE_DIR%\Lib\FrameworkJS"
set "GENERATERULE_SRC=%SOURCE_DIR%\tools\resource\generate"
set "PROJECT_ROOT=%~dp0.."
set "DEST_DIR=%PROJECT_ROOT%\nexacrolib\nexacrolib"
set "GENERATERULE_DEST=%PROJECT_ROOT%\nexacrolib\generate"
set "ENGINE_BASE=D:\git_prj\REQM\engine\nexacroK"

REM ===== deploy_config.txt 우선 적용 (없으면 내부 기본값 사용) =====
set "CONFIG=%~dp0deploy_config.txt"
set "EFFECTIVE_FRAMEWORK_SRC=%FRAMEWORK_SRC%"
set "EFFECTIVE_GENERATERULE_SRC=%GENERATERULE_SRC%"
if exist "%CONFIG%" (
    for /f "usebackq tokens=1,* delims==" %%A in ("%CONFIG%") do (
        if /i "%%A"=="NexacroLibPath" if not "%%B"=="" set "EFFECTIVE_FRAMEWORK_SRC=%%B"
        if /i "%%A"=="GenerateRule"   if not "%%B"=="" set "EFFECTIVE_GENERATERULE_SRC=%%B"
    )
)
echo [설정] NexacroLibPath = %EFFECTIVE_FRAMEWORK_SRC%
echo [설정] GenerateRule   = %EFFECTIVE_GENERATERULE_SRC%

REM ===== 소스 경로 유효성 검사 =====
if not exist "%SOURCE_DIR%"                 echo [ERROR] 소스 디렉토리 없음: %SOURCE_DIR% & pause & exit /b 1
if not exist "%EFFECTIVE_FRAMEWORK_SRC%"    echo [ERROR] NexacroLib 경로 없음: %EFFECTIVE_FRAMEWORK_SRC% & pause & exit /b 1
if not exist "%EFFECTIVE_GENERATERULE_SRC%" echo [ERROR] GenerateRule 경로 없음: %EFFECTIVE_GENERATERULE_SRC% & pause & exit /b 1

REM ===== [1/3] 소스 저장소 git pull =====
echo.
echo [1/3] 소스 저장소 업데이트: %SOURCE_DIR%  (Branch: %BRANCH%)
pushd "%SOURCE_DIR%"
git checkout %BRANCH%
if %ERRORLEVEL% neq 0 echo [ERROR] checkout 실패: %BRANCH% & popd & pause & exit /b %ERRORLEVEL%
git stash
git pull origin %BRANCH%
if %ERRORLEVEL% neq 0 echo [ERROR] pull 실패: %BRANCH% & git stash pop & popd & pause & exit /b %ERRORLEVEL%
git stash pop
for /f %%H in ('git rev-parse HEAD') do set "COMMIT_HASH=%%H"
popd
echo [OK] Branch: %BRANCH%  /  Commit: %COMMIT_HASH%

REM ===== [2/3] NexacroLib → nexacrolib\nexacrolib =====
echo.
echo [2/3] NexacroLib 복사: %EFFECTIVE_FRAMEWORK_SRC%
echo       -^> %DEST_DIR%
robocopy "%EFFECTIVE_FRAMEWORK_SRC%" "%DEST_DIR%" /E /NP /NFL /NDL /XD node_modules > nul
if %errorlevel% gtr 7 echo [ERROR] NexacroLib 복사 실패 ^(errorlevel=%errorlevel%^) & pause & exit /b %errorlevel%
set errorlevel=0
echo [OK] NexacroLib 복사 완료

REM ===== [3/3] GenerateRule → nexacrolib\generate =====
echo.
echo [3/3] GenerateRule 복사: %EFFECTIVE_GENERATERULE_SRC%
echo       -^> %GENERATERULE_DEST%
robocopy "%EFFECTIVE_GENERATERULE_SRC%" "%GENERATERULE_DEST%" /E /NP /NFL /NDL > nul
if %errorlevel% gtr 7 echo [ERROR] GenerateRule 복사 실패 ^(errorlevel=%errorlevel%^) & pause & exit /b %errorlevel%
set errorlevel=0
echo [OK] GenerateRule 복사 완료

REM ===== [마지막] engine\nexacroK 업데이트 =====
echo.
echo [엔진] engine\nexacroK 업데이트 시작...

if exist "%ENGINE_BASE%\nexacrolib" (
    echo [엔진] 기존 nexacrolib 삭제 중...
    rmdir /s /q "%ENGINE_BASE%\nexacrolib"
)
echo [엔진] nexacrolib 복사: %DEST_DIR% -^> %ENGINE_BASE%\nexacrolib
robocopy "%DEST_DIR%" "%ENGINE_BASE%\nexacrolib" /E /NP /NFL /NDL /XD node_modules > nul
if %errorlevel% gtr 7 echo [ERROR] 엔진 nexacrolib 복사 실패 ^(errorlevel=%errorlevel%^) & pause & exit /b %errorlevel%
set errorlevel=0

if exist "%ENGINE_BASE%\generate" (
    echo [엔진] 기존 generate 삭제 중...
    rmdir /s /q "%ENGINE_BASE%\generate"
)
echo [엔진] generate 복사: %GENERATERULE_DEST% -^> %ENGINE_BASE%\generate
robocopy "%GENERATERULE_DEST%" "%ENGINE_BASE%\generate" /E /NP /NFL /NDL > nul
if %errorlevel% gtr 7 echo [ERROR] 엔진 generate 복사 실패 ^(errorlevel=%errorlevel%^) & pause & exit /b %errorlevel%
set errorlevel=0

echo.
echo ============================================
echo  업데이트 완료
echo  Branch : %BRANCH%
echo  Commit : %COMMIT_HASH%
echo ============================================
endlocal
pause
