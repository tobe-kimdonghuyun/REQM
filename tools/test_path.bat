@echo off
pushd "%~dp0"
echo Current Dir: %CD%
if exist "deploy_config.txt" (
    echo [OK] deploy_config.txt found.
) else (
    echo [ERROR] deploy_config.txt NOT found.
    dir /b
)
popd
pause
