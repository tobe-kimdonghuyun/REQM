#!/bin/sh

PRG="$0"
while [ -h "$PRG" ] ; do
  ls=`ls -ld "$PRG"`
  link=`expr "$ls" : '.*-> \(.*\)$'`
  if expr "$link" : '/.*' > /dev/null; then
    PRG="$link"
  else
    PRG=`dirname "$PRG"`/"$link"
  fi
done

PRGDIR=`dirname "$PRG"`

#set JAVA_HOME
#JAVA_HOME=
if [ -z "$JAVA_HOME" ] ; then
    echo environment variable JAVA_HOME is not defined.
    exit;
fi

#define
BUILD_HOME=`cd "$PRGDIR/.." ; pwd`

echo BUILD_HOME:$BUILD_HOME
echo JAVA_HOME:$JAVA_HOME

JAVA=$JAVA_HOME/bin/java
JAVA_OPTS="-Dlog4j.configurationFile=$BUILD_HOME/log4j2.xml"
STARTUP_CLASS=com.nexacro.build.cli.Main

for jarname in `ls $BUILD_HOME/libs`; do
    CLASSPATH=$BUILD_HOME/libs/$jarname:$CLASSPATH
done

exec "$JAVA" "$JAVA_OPTS" -classpath "$CLASSPATH" $STARTUP_CLASS "$@"


