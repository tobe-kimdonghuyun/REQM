@echo off
REM stop_tomcat.bat - Stop Tomcat from the current CMD/Terminal
setlocal
set "CATALINA_HOME=%~dp0..\apache-tomcat-9.0.89"
set "JAVA_HOME=%~dp0JDK"
set "PATH=%JAVA_HOME%\bin;%PATH%"

echo Stopping Tomcat server...
"%CATALINA_HOME%\bin\shutdown.bat"
echo Tomcat server stopped.

endlocal
exit /b %ERRORLEVEL%
