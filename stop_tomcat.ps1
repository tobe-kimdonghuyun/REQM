$CATALINA_HOME = "D:\git_prj\REQM\apache-tomcat-11.0.18"
$env:CATALINA_HOME = $CATALINA_HOME
$env:JAVA_HOME = "C:\microsoft-jdk-21.0.9-windows-x64\jdk-21.0.9+10"

Write-Host "Stopping Tomcat server..." -ForegroundColor Yellow
Start-Process -FilePath "$CATALINA_HOME\bin\shutdown.bat" -WorkingDirectory "$CATALINA_HOME\bin" -Wait
Write-Host "Tomcat server stopped." -ForegroundColor Green
