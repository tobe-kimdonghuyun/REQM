@echo off
setlocal enabledelayedexpansion

:: deploy_config.txt 경로 (bat 파일과 동일 디렉토리)
set CONFIG_FILE=%~dp0deploy_config.txt

:: OutputPath 읽기
for /f "tokens=1,2 delims==" %%A in (%CONFIG_FILE%) do (
    if "%%A"=="OutputPath" set OUTPUT_PATH=%%B
)

:: REQM 이후 경로 추출 (*REQM 은 REQM 포함 앞 전체를 제거)
set "AFTER_REQM=!OUTPUT_PATH:*REQM=!"

:: 백슬래시를 슬래시로 변환
set "URL_PATH=!AFTER_REQM:\=/!"

:: URL 조합 (AFTER_REQM 앞에 / 가 있으므로 그대로 붙임)
set "BASE_URL=http://172.10.12.45:9091!URL_PATH!"
set "JSON_URL=!BASE_URL!/start.json"

echo [INFO] BASE_URL : !BASE_URL!
echo [INFO] JSON_URL : !JSON_URL!
echo.

:: Nexacro K 실행
"C:\Program Files (x86)\TOBESOFT\Nexacro K\26\Nexacro.exe" -K "!BASE_URL!" -S "!JSON_URL!" -D 1234
