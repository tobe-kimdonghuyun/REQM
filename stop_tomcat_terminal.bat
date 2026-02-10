@echo off
setlocal

REM ===== Tomcat/JDK 경로 설정 =====
set "SCRIPT_DIR=%~dp0"
set "CATALINA_HOME=%SCRIPT_DIR%apache-tomcat-11.0.18"
set "JAVA_HOME=C:\microsoft-jdk-21.0.9-windows-x64\jdk-21.0.9+10"

REM ===== 필수 경로 확인 =====
if not exist "%CATALINA_HOME%\bin\shutdown.bat" (
    echo [ERROR] shutdown.bat 파일을 찾을 수 없습니다.
    echo         CATALINA_HOME=%CATALINA_HOME%
    exit /b 1
)

if not exist "%JAVA_HOME%\bin\java.exe" (
    echo [ERROR] java.exe 파일을 찾을 수 없습니다.
    echo         JAVA_HOME=%JAVA_HOME%
    exit /b 1
)

set "CATALINA_HOME=%CATALINA_HOME%"
set "JAVA_HOME=%JAVA_HOME%"

REM 터미널 한글 출력
chcp 65001 >nul

echo Stopping Tomcat server...
call "%CATALINA_HOME%\bin\shutdown.bat"
echo Tomcat server stop command executed.

endlocal
