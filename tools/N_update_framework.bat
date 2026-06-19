@echo off
chcp 65001 > nul
setlocal
set "BRANCH=%~1"
if "%BRANCH%"=="" set /p BRANCH="branch 명을 입력하세요: "
if "%BRANCH%"=="" echo [ERROR] No branch name provided. & pause & exit /b 1

set "SOURCE_DIR=E:\git\VSCODE_WORK900\WORK900"
set "FRAMEWORK_SRC=%SOURCE_DIR%\Lib\FrameworkJS"
set "PROJECT_ROOT=%~dp0.."
set "DEST_DIR=%PROJECT_ROOT%\nexacrolib\nexacrolib"
set "GENERATERULE_SRC1=%SOURCE_DIR%\Tools\Lib\TiMetainfoLib\res"
set "GENERATERULE_SRC2=%SOURCE_DIR%\Tools\Lib\TiGenerateLib\Template\24"
set "GENERATERULE_DEST=%PROJECT_ROOT%\nexacrolib\generate"

echo [1/1] Updating source repository: %SOURCE_DIR% (Branch: %BRANCH%) ...
pushd "%SOURCE_DIR%"
git checkout %BRANCH%
if %ERRORLEVEL% neq 0 echo [ERROR] Failed to checkout branch: %BRANCH% & popd & pause & exit /b %ERRORLEVEL%


git stash
git pull origin %BRANCH%
if %ERRORLEVEL% neq 0 echo [ERROR] Git pull failed for branch: %BRANCH% & git stash pop & popd & pause & exit /b %ERRORLEVEL%
git stash pop
for /f %%H in ('git rev-parse HEAD') do set "COMMIT_HASH=%%H"
popd
echo [DONE] Branch: %BRANCH% / Commit: %COMMIT_HASH%

REM ===== [마지막] NexacroLibPath / GenerateRule → engine\nexacroK 복사 =====
set "CONFIG=%~dp0deploy_config.txt"
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
robocopy "%NEXACRO_LIB%" "%ENGINE_BASE%\nexacrolib" /E /NP /NFL /NDL > nul
if %errorlevel% leq 7 set errorlevel=0

if exist "%ENGINE_BASE%\generate" (
    echo [엔진] 기존 generate 폴더 삭제 중...
    rmdir /s /q "%ENGINE_BASE%\generate"
)
echo [엔진] GenerateRule 복사 중: %GENERATE_RULE% -^> %ENGINE_BASE%\generate
robocopy "%GENERATE_RULE%" "%ENGINE_BASE%\generate" /E /NP /NFL /NDL > nul
if %errorlevel% leq 7 set errorlevel=0

echo [엔진] engine\nexacroK 업데이트 완료
endlocal
