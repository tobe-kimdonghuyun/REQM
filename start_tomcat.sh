#!/usr/bin/env bash
# start_tomcat.sh - Start Tomcat in current shell (for WSL/Git-Bash/Unix)
# Adjust the paths below to match your environment (WSL paths used as example).

CATALINA_HOME="/mnt/d/git_prj/REQM/apache-tomcat-11.0.18"
export CATALINA_HOME

JAVA_HOME="/mnt/c/Program Files/Java/jdk-21"
export JAVA_HOME

echo "Starting Tomcat server in this terminal..."

if [ -x "$CATALINA_HOME/bin/catalina.sh" ]; then
  exec "$CATALINA_HOME/bin/catalina.sh" run
else
  echo "catalina.sh not found or not executable. Trying Windows batch via cmd.exe..."
  cmd.exe /c "\"$CATALINA_HOME\\bin\\catalina.bat\" run"
fi
