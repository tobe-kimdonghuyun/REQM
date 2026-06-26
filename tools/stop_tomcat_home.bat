@echo off
REM stop_tomcat.bat - Stop Tomcat from the current CMD/Terminal
setlocal
set "CATALINA_HOME=%~dp0..\apache-tomcat-9.0.89"
REM ===== 자바 경로 설정 (시스템 변수 기반 명시적 설정) =====
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-25.0.3.9-hotspot"
set "JRE_HOME=C:\Program Files\Eclipse Adoptium\jdk-25.0.3.9-hotspot"

set "PATH=%JAVA_HOME%\bin;%PATH%"

echo Stopping Tomcat server...
"%CATALINA_HOME%\bin\shutdown.bat"
echo Tomcat server stopped.

endlocal
exit /b %ERRORLEVEL%
