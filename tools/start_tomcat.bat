@echo off
REM start_tomcat.bat - Start Tomcat in the current CMD/Terminal (no new window)
REM Update the paths below if your Tomcat or JDK are installed elsewhere.

setlocal
set "CATALINA_HOME=%~dp0..\apache-tomcat-9.0.89"
REM ===== 자바 경로 설정 (시스템 변수 JAVA_HOME 우선 사용) =====
if "%JAVA_HOME%"=="" (
    if exist "%~dp0JDK" (
        set "JAVA_HOME=%~dp0JDK"
    ) else (
        echo [WARNING] JDK folder not found in tools directory. Using system default Java.
    )
)
set "PATH=%JAVA_HOME%\bin;%PATH%"

REM Try to use UTF-8 output in the terminal
chcp 65001 >nul

echo Starting Tomcat server in this terminal...
"%CATALINA_HOME%\bin\catalina.bat" run

endlocal
exit /b %ERRORLEVEL%
