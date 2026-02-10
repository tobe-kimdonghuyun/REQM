$CATALINA_HOME = "D:\git_prj\REQM\apache-tomcat-11.0.18"
$env:CATALINA_HOME = $CATALINA_HOME
$env:JAVA_HOME = "C:\microsoft-jdk-21.0.9-windows-x64\jdk-21.0.9+10"

# 터미널 한글 출력을 위해 UTF-8 설정
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "Starting Tomcat server in this terminal..." -ForegroundColor Cyan
# 'run' 인자를 사용하여 새 창 없이 현재 터미널에서 실행
& "$CATALINA_HOME\bin\catalina.bat" run
