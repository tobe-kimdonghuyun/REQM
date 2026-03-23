@echo off
REM stop_tomcat.bat - Stop Tomcat from the current CMD/Terminal
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

echo Stopping Tomcat server...
"%CATALINA_HOME%\bin\shutdown.bat"
echo Tomcat server stopped.

endlocal
exit /b %ERRORLEVEL%
