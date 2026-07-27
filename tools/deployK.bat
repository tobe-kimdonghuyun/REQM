@echo off
setlocal

set "CONFIG_FILE=%~dp0generate_config.txt"

for /f "usebackq tokens=1,* delims==" %%A in ("%CONFIG_FILE%") do (
    if /i "%%A"=="ProjectPath"    set "ProjectPath=%%B"
    if /i "%%A"=="OutputPath"     set "OutputPath=%%B"
    if /i "%%A"=="NexacroLibPath" set "NexacroLibPath=%%B"
    if /i "%%A"=="GenerateRule"   set "GenerateRule=%%B"
    if /i "%%A"=="RoutePath"      set "RoutePath=%%B"
)

echo [deployK] Starting deploy...
echo   ProjectPath   : %ProjectPath%
echo   NexacroLibPath: %NexacroLibPath%
echo   OutputPath    : %OutputPath%
echo   GenerateRule  : %GenerateRule%
echo   RoutePath     : %RoutePath%
echo.

if defined RoutePath (
    echo. | call "%~dp0start-jar.bat" -P "%ProjectPath%" -B "%NexacroLibPath%" -O "%OutputPath%" -GENERATERULE "%GenerateRule%" -ROUTE "%RoutePath%"
) else (
    echo. | call "%~dp0start-jar.bat" -P "%ProjectPath%" -B "%NexacroLibPath%" -O "%OutputPath%" -GENERATERULE "%GenerateRule%"
)

endlocal