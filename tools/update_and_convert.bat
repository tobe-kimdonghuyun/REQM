@echo off
setlocal enabledelayedexpansion

REM ==============================================================================
REM  Framework Update and UTF-8 BOM Convert Tool
REM
REM  [SVN Backup Addresses]
REM  - nexacroN v24, v21: https://rnd-docu.tobesoft.com:8443/svn/WORKDOCLAB/CMMI/
REM  - nexacroK:          https://rnd-docu.tobesoft.com:8443/svn/WORKDOCLAB/CMMI/
REM ==============================================================================

if "%~1"=="--help" goto SHOW_HELP
if "%~1"=="-h"     goto SHOW_HELP
if "%~1"=="/?"     goto SHOW_HELP

set "PROJECT_ROOT=%~dp0.."
set "DEFAULT_WORK800_DIR=E:\git\VSCODE_WORK800\WORK800"
set "DEFAULT_WORK900_DIR=E:\git\VSCODE_WORK900\WORK900"
set "WORK800_REPO=https://tfs2.tobesoft.com:9443/tfs/XPLATFORM/_git/WORK800"
set "WORK900_REPO=https://tfs2.tobesoft.com:9443/tfs/XPLATFORM/_git/WORK900"
set "TEMPFILE=%TEMP%\uc_branches_tmp.txt"
set "PS_HELPER=%TEMP%\uc_getinput.ps1"

REM ======================================================================
REM  Write PowerShell ESC-aware input helper to temp file
REM ======================================================================
echo $chars = @^(^) > "%PS_HELPER%"
echo while ^($true^) { >> "%PS_HELPER%"
echo     $k = [Console]::ReadKey^($true^) >> "%PS_HELPER%"
echo     if ^($k.Key -eq [ConsoleKey]::Escape^) { >> "%PS_HELPER%"
echo         [Console]::WriteLine^(^) >> "%PS_HELPER%"
echo         "__ESC__" ^| Out-File -FilePath $args[0] -Encoding ASCII >> "%PS_HELPER%"
echo         break >> "%PS_HELPER%"
echo     } elseif ^($k.Key -eq [ConsoleKey]::Enter^) { >> "%PS_HELPER%"
echo         [Console]::WriteLine^(^) >> "%PS_HELPER%"
echo         if ^($chars.Count -gt 0^) { ^($chars -join ''^) ^| Out-File -FilePath $args[0] -Encoding ASCII } >> "%PS_HELPER%"
echo         else { "__EMPTY__" ^| Out-File -FilePath $args[0] -Encoding ASCII } >> "%PS_HELPER%"
echo         break >> "%PS_HELPER%"
echo     } elseif ^($k.Key -eq [ConsoleKey]::Backspace^) { >> "%PS_HELPER%"
echo         if ^($chars.Count -gt 0^) { >> "%PS_HELPER%"
echo             $chars = $chars[0..^($chars.Count-2^)] >> "%PS_HELPER%"
echo             [Console]::Write^([char]8 + ' ' + [char]8^) >> "%PS_HELPER%"
echo         } >> "%PS_HELPER%"
echo     } else { >> "%PS_HELPER%"
echo         $chars += $k.KeyChar >> "%PS_HELPER%"
echo         [Console]::Write^($k.KeyChar^) >> "%PS_HELPER%"
echo     } >> "%PS_HELPER%"
echo } >> "%PS_HELPER%"

REM ======================================================================
REM  MAIN MENU
REM ======================================================================
:MENU
cls
echo.
echo  =====================================================
echo    Framework Update and Copy Tool
echo  =====================================================
echo.
echo    1. nexacroN  (v21 / v24)   WORK800
echo    2. nexacroK                WORK900
echo    0. Exit
echo.
echo    [ESC] Exit anytime
echo  =====================================================
echo|set /p DUMMY="  Select (0-2): "
call :GET_INPUT
if "!INPUT_RESULT!"=="__ESC__" goto EXIT_PROC
set "MENU_SEL=!INPUT_RESULT!"

if "!MENU_SEL!"=="1" goto PROC_WORK800
if "!MENU_SEL!"=="2" goto PROC_WORK900
if "!MENU_SEL!"=="0" goto EXIT_PROC
if "!MENU_SEL!"==""  goto MENU
echo  [!] Invalid selection.
timeout /t 2 >nul
goto MENU

REM ======================================================================
REM  WORK800
REM ======================================================================
:PROC_WORK800
cls
echo.
echo  === [nexacroN] Local Repository Path ===
echo.
set "SELECTED_REPO=%WORK800_REPO%"
set "SELECTED_LOCAL_PATH=%DEFAULT_WORK800_DIR%"
set "DEST_DIR=%PROJECT_ROOT%\engine\nexacroN v24\nexacrolib"
set "SRC_SUBDIR=Lib\FrameworkJS"
echo|set /p DUMMY="  Local path (Enter=default ^(!DEFAULT_WORK800_DIR!^)): "
call :GET_INPUT
if "!INPUT_RESULT!"=="__ESC__" goto EXIT_PROC
if not "!INPUT_RESULT!"=="" set "SELECTED_LOCAL_PATH=!INPUT_RESULT!"
goto ENSURE_REPO

REM ======================================================================
REM  WORK900
REM ======================================================================
:PROC_WORK900
cls
echo.
echo  === [nexacroK] Local Repository Path ===
echo.
set "SELECTED_REPO=%WORK900_REPO%"
set "SELECTED_LOCAL_PATH=%DEFAULT_WORK900_DIR%"
set "DEST_DIR=%PROJECT_ROOT%\engine\nexacroK\nexacrolib"
set "SRC_SUBDIR=nexacrolib"
echo|set /p DUMMY="  Local path (Enter=default ^(!DEFAULT_WORK900_DIR!^)): "
call :GET_INPUT
if "!INPUT_RESULT!"=="__ESC__" goto EXIT_PROC
if not "!INPUT_RESULT!"=="" set "SELECTED_LOCAL_PATH=!INPUT_RESULT!"
goto ENSURE_REPO

REM ======================================================================
REM  ENSURE REPO: Clone or fetch
REM ======================================================================
:ENSURE_REPO
echo.
if not exist "!SELECTED_LOCAL_PATH!\.git" (
    echo  [INFO] Repository not found locally. Cloning...
    git clone !SELECTED_REPO! "!SELECTED_LOCAL_PATH!"
    if !ERRORLEVEL! neq 0 (
        echo  [ERROR] Git clone failed.
        pause & goto MENU
    )
) else (
    echo  [INFO] Fetching latest branch list from remote...
    pushd "!SELECTED_LOCAL_PATH!"
    git fetch --all --prune >nul 2>&1
    popd
)

if exist "%TEMPFILE%" del "%TEMPFILE%"
pushd "!SELECTED_LOCAL_PATH!"
git branch -r --sort=-committerdate > "%TEMPFILE%" 2>&1
popd

REM ======================================================================
REM  BRANCH CATEGORY MENU (Level 1)
REM ======================================================================
:SELECT_BRANCH_CATEGORY
cls
echo.
echo  =====================================================
echo    Select Branch
echo  =====================================================
echo.
echo    -- Direct branches --
echo    1.  main
echo    2.  main_21
echo    3.  master
echo    4.  master_21
echo.
echo    -- Browse by category --
echo    5.  RELEASE    ^(sub-list^)
echo    6.  SITE       ^(sub-list^)
echo    7.  Dev        ^(sub-list^)
echo    8.  FEATURE    ^(sub-list^)
echo.
echo    [0] Back to main menu
echo    [keyword] Search all branches
echo    [ESC] Exit
echo  =====================================================
echo|set /p DUMMY="  Enter number or keyword: "
call :GET_INPUT
if "!INPUT_RESULT!"=="__ESC__" goto EXIT_PROC
set "BRANCH_INPUT=!INPUT_RESULT!"

if "!BRANCH_INPUT!"=="0"  goto MENU
if "!BRANCH_INPUT!"=="1"  set "SEARCH_BRANCH=main"        & goto CHECK_DIRECT_BRANCH
if "!BRANCH_INPUT!"=="2"  set "SEARCH_BRANCH=main_21"     & goto CHECK_DIRECT_BRANCH
if "!BRANCH_INPUT!"=="3"  set "SEARCH_BRANCH=master"      & goto CHECK_DIRECT_BRANCH
if "!BRANCH_INPUT!"=="4"  set "SEARCH_BRANCH=master_21"   & goto CHECK_DIRECT_BRANCH
if "!BRANCH_INPUT!"=="5"  set "BRANCH_FILTER=RELEASE"     & goto SHOW_BRANCH_SUBLIST
if "!BRANCH_INPUT!"=="6"  set "BRANCH_FILTER=SITE"        & goto SHOW_BRANCH_SUBLIST
if "!BRANCH_INPUT!"=="7"  set "BRANCH_FILTER=Dev"         & goto SHOW_BRANCH_SUBLIST
if "!BRANCH_INPUT!"=="8"  set "BRANCH_FILTER=FEATURE"     & goto SHOW_BRANCH_SUBLIST
if "!BRANCH_INPUT!"==""   goto SELECT_BRANCH_CATEGORY
set "BRANCH_FILTER=!BRANCH_INPUT!"
goto SHOW_BRANCH_SUBLIST

REM ======================================================================
REM  CHECK_DIRECT_BRANCH: Exact match for 1~4
REM ======================================================================
:CHECK_DIRECT_BRANCH
set "FOUND_BRANCH="
for /f "usebackq tokens=* delims= " %%B in ("%TEMPFILE%") do (
    set "TMP=%%B"
    set "TMP=!TMP: =!"
    if /i "!TMP!"=="origin/!SEARCH_BRANCH!" set "FOUND_BRANCH=!TMP!"
)
if "!FOUND_BRANCH!"=="" (
    echo.
    echo  [WARN] 'origin/!SEARCH_BRANCH!' not found. Showing similar branches...
    set "BRANCH_FILTER=!SEARCH_BRANCH!"
    timeout /t 2 >nul
    goto SHOW_BRANCH_SUBLIST
)
set "CHOSEN_BRANCH=!FOUND_BRANCH!"
set "CHOSEN_BRANCH_LOCAL=!SEARCH_BRANCH!"
goto DO_PULL

REM ======================================================================
REM  SHOW_BRANCH_SUBLIST: Filtered branch list (Level 2)
REM ======================================================================
:SHOW_BRANCH_SUBLIST
cls
echo.
echo  =====================================================
echo    Branches matching: [!BRANCH_FILTER!]
echo  =====================================================
echo.

set "BRANCH_COUNT=0"
for /f "usebackq tokens=* delims= " %%B in ("%TEMPFILE%") do (
    set "RAW=%%B"
    set "RAW=!RAW: =!"
    echo !RAW! | findstr /i "HEAD" >nul
    if !ERRORLEVEL! neq 0 (
        echo !RAW! | findstr /i "!BRANCH_FILTER!" >nul
        if !ERRORLEVEL!==0 (
            set /a BRANCH_COUNT+=1
            set "SUB_BRANCH_!BRANCH_COUNT!=!RAW!"
            echo    !BRANCH_COUNT!.  !RAW!
        )
    )
)

if !BRANCH_COUNT!==0 (
    echo  [!] No branches found matching '!BRANCH_FILTER!'
    echo.
    echo  Press any key to go back...
    pause >nul
    goto SELECT_BRANCH_CATEGORY
)

echo.
echo    [0] Back    [keyword] Filter further    [ESC] Exit
echo  =====================================================
echo|set /p DUMMY="  Enter number or keyword: "
call :GET_INPUT
if "!INPUT_RESULT!"=="__ESC__" goto EXIT_PROC
set "SUB_INPUT=!INPUT_RESULT!"

if "!SUB_INPUT!"=="0" goto SELECT_BRANCH_CATEGORY
if "!SUB_INPUT!"==""  goto SHOW_BRANCH_SUBLIST

set "SUB_NUM=0"
set /a SUB_NUM=!SUB_INPUT! 2>nul

if !SUB_NUM! geq 1 (
    if !SUB_NUM! leq !BRANCH_COUNT! (
        set "CHOSEN_BRANCH=!SUB_BRANCH_%SUB_NUM%!"
        set "CHOSEN_BRANCH_LOCAL=!CHOSEN_BRANCH:origin/=!"
        goto DO_PULL
    )
)

set "BRANCH_FILTER=!SUB_INPUT!"
goto SHOW_BRANCH_SUBLIST

REM ======================================================================
REM  DO_PULL: Checkout and pull
REM ======================================================================
:DO_PULL
echo.
echo  [INFO] Checking out: !CHOSEN_BRANCH_LOCAL!
pushd "!SELECTED_LOCAL_PATH!"

git checkout "!CHOSEN_BRANCH_LOCAL!" 2>nul
if !ERRORLEVEL! neq 0 (
    git checkout -b "!CHOSEN_BRANCH_LOCAL!" "!CHOSEN_BRANCH!" 2>nul
    if !ERRORLEVEL! neq 0 (
        echo  [ERROR] Failed to checkout '!CHOSEN_BRANCH_LOCAL!'
        popd & pause & goto SELECT_BRANCH_CATEGORY
    )
)

git pull origin "!CHOSEN_BRANCH_LOCAL!"
if !ERRORLEVEL! neq 0 (
    echo  [WARNING] Git pull failed. Proceeding with current local state.
)

for /f %%H in ('git rev-parse HEAD') do set "COMMIT_HASH=%%H"
popd
echo  [OK] Branch: !CHOSEN_BRANCH_LOCAL! / Commit: !COMMIT_HASH!

REM ======================================================================
REM  Adjust destination folder based on framework and branch name
REM ======================================================================
if "!MENU_SEL!"=="1" (
    echo !CHOSEN_BRANCH_LOCAL! | findstr "21" >nul
    if !ERRORLEVEL!==0 (
        set "DEST_DIR=%PROJECT_ROOT%\engine\nexacroN v21\nexacrolib"
    ) else (
        set "DEST_DIR=%PROJECT_ROOT%\engine\nexacroN v24\nexacrolib"
    )
)

REM ======================================================================
REM  COPY FILES
REM ======================================================================
set "SRC_DIR=!SELECTED_LOCAL_PATH!\!SRC_SUBDIR!"
if not exist "!SRC_DIR!\" (
    echo  [ERROR] Source folder not found: !SRC_DIR!
    pause & goto MENU
)

echo.
echo  [INFO] Copying files...
echo         FROM : !SRC_DIR!
echo         TO   : !DEST_DIR!
if not exist "!DEST_DIR!" mkdir "!DEST_DIR!"
xcopy "!SRC_DIR!\*" "!DEST_DIR!\" /E /Y /I >nul
if !ERRORLEVEL! neq 0 (
    echo  [ERROR] File copy failed.
    pause & goto MENU
)

REM ======================================================================
REM  CONVERT ENCODING TO UTF-8 BOM
REM ======================================================================
echo  [INFO] Converting files to UTF-8 BOM encoding...
powershell -NoProfile -Command "Get-ChildItem -Path '!DEST_DIR!' -Recurse -File | ForEach-Object { try { $c = [System.IO.File]::ReadAllText($_.FullName); [System.IO.File]::WriteAllText($_.FullName, $c, [System.Text.Encoding]::UTF8) } catch {} }; Write-Host '[DONE] Encoding done.'"

echo.
echo  =====================================================
echo   COMPLETED
echo   Branch : !CHOSEN_BRANCH_LOCAL!
echo   Commit : !COMMIT_HASH!
echo   Target : !DEST_DIR!
echo  =====================================================
echo.
echo  Press any key to return to main menu...
pause >nul
goto MENU

REM ======================================================================
REM  GET_INPUT: ESC-aware input via PowerShell helper
REM  Result stored in INPUT_RESULT
REM  If ESC pressed -> program exits immediately
REM ======================================================================
:GET_INPUT
set "INPUT_RESULT="
set "OUT_VAL_FILE=%TEMP%\uc_val.txt"
if exist "%OUT_VAL_FILE%" del "%OUT_VAL_FILE%" >nul 2>&1
powershell -NoProfile -ExecutionPolicy Bypass -File "%PS_HELPER%" "%OUT_VAL_FILE%"
if exist "%OUT_VAL_FILE%" (
    for /f "usebackq delims=" %%R in ("%OUT_VAL_FILE%") do set "INPUT_RESULT=%%R"
    del "%OUT_VAL_FILE%" >nul 2>&1
)
if "!INPUT_RESULT!"=="__EMPTY__" set "INPUT_RESULT="
goto :eof

REM ======================================================================
REM  EXIT
REM ======================================================================
:EXIT_PROC
if exist "%PS_HELPER%" del "%PS_HELPER%" >nul 2>&1
if exist "%TEMPFILE%"  del "%TEMPFILE%"  >nul 2>&1
cls
echo.
echo  Exiting. Goodbye!
echo.
endlocal
exit /b 0

REM ======================================================================
REM  HELP
REM ======================================================================
:SHOW_HELP
echo.
echo =======================================================================
echo  [Usage] update_and_convert.bat [Options]
echo =======================================================================
echo  Pulls latest framework from Git, copies to project folder,
echo  and converts all files to UTF-8 BOM encoding.
echo.
echo  [Options]
echo    --help, -h, /?    Show this help message.
echo.
echo  [Step 1] Select Framework
echo    1. nexacroN (WORK800)
echo    2. nexacroK (WORK900)
echo.
echo  [Step 2] Select Branch Category
echo    1. main          4. master_21
echo    2. main_21       5. RELEASE  (sub-list)
echo    3. master        6. SITE     (sub-list)
echo                     7. Dev      (sub-list)
echo                     8. FEATURE  (sub-list)
echo    [keyword] Search across all branches
echo    [ESC]     Exit the program immediately
echo.
echo  [Step 3] Sub-list (categories 5-8)
echo    Select by number or type keyword to filter further.
echo    [ESC] Exit the program immediately
echo.
echo  [Copy Targets]
echo    nexacroN (main/master 등):
echo           -> [Project Root]\engine\nexacroN v24\nexacrolib
echo    nexacroN (main_21/master_21 등):
echo           -> [Project Root]\engine\nexacroN v21\nexacrolib
echo    nexacroK (WORK900):
echo           -> [Project Root]\engine\nexacroK\nexacrolib
echo.
echo  [Encoding]
echo    All copied files are auto-converted to UTF-8 BOM.
echo =======================================================================
endlocal
exit /b 0
