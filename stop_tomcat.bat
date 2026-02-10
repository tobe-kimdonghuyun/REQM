@echo off
REM stop_tomcat.bat - Stop Tomcat from the current CMD/Terminal
setlocal
set "CATALINA_HOME=D:\git_prj\REQM\apache-tomcat-11.0.18"
set "JAVA_HOME=C:\microsoft-jdk-21.0.9-windows-x64\jdk-21.0.9+10"
set "PATH=%JAVA_HOME%\bin;%PATH%"

echo Stopping Tomcat server...
"%CATALINA_HOME%\bin\shutdown.bat"
echo Tomcat server stopped.

endlocal
exit /b %ERRORLEVEL%
