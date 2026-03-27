@echo off
REM stop_tomcat.bat - Stop Tomcat from the current CMD/Terminal
setlocal
set "CATALINA_HOME=%~dp0..\apache-tomcat-9.0.89"
REM ===== 자바 경로 설정 (시스템 변수 기반 명시적 설정) =====
set "JAVA_HOME=C:\microsoft-jdk-21.0.9-windows-x64\jdk-21.0.9+10"
set "JRE_HOME=C:\microsoft-jdk-21.0.9-windows-x64\jdk-21.0.9+10"

set "PATH=%JAVA_HOME%\bin;%PATH%"

echo Stopping Tomcat server...
"%CATALINA_HOME%\bin\shutdown.bat"
echo Tomcat server stopped.

endlocal
exit /b %ERRORLEVEL%
