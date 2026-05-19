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

if not exist "%SOURCE_DIR%\" (
    echo [ERROR] Source directory not found: %SOURCE_DIR%
    pause & exit /b 1
)

echo [1/1] Updating source repository: %SOURCE_DIR% (Branch: %BRANCH%) ...
pushd "%SOURCE_DIR%"

git fetch origin
if %ERRORLEVEL% neq 0 echo [ERROR] Git fetch failed & popd & pause & exit /b %ERRORLEVEL%

git checkout %BRANCH%
if %ERRORLEVEL% neq 0 echo [ERROR] Failed to checkout branch: %BRANCH% & popd & pause & exit /b %ERRORLEVEL%

git reset --hard origin/%BRANCH%
if %ERRORLEVEL% neq 0 echo [ERROR] Git reset failed for branch: %BRANCH% & popd & pause & exit /b %ERRORLEVEL%

for /f %%H in ('git rev-parse HEAD') do set "COMMIT_HASH=%%H"
popd
echo [DONE] Branch: %BRANCH% / Commit: %COMMIT_HASH%
endlocal
