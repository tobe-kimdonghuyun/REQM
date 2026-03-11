@echo off
chcp 65001 >nul
setlocal

REM ===== [1단계] 접근성 검증 (Validate) =====
echo [1/2] Nexacro N v24 접근성 검증 실행 중...
cd /d "%~dp0..\NTemplate\config"

REM validate.args를 사용하여 검증 수행 (출력을 실시간으로 표시하며 완료 메시지 감지 시 종료)
echo 검증 작업 진행 중...
powershell -Command "$pinfo = New-Object System.Diagnostics.ProcessStartInfo; $pinfo.FileName = '.\validator-cli.exe'; $pinfo.Arguments = '@.\command\validate.args'; $pinfo.RedirectStandardOutput = $true; $pinfo.UseShellExecute = $false; $pinfo.CreateNoWindow = $true; $p = New-Object System.Diagnostics.Process; $p.StartInfo = $pinfo; $p.Start() | Out-Null; while (!$p.StandardOutput.EndOfStream) { $line = $p.StandardOutput.ReadLine(); Write-Host $line; if ($line -match 'runValidate done.') { Start-Sleep -Seconds 2; if (!$p.HasExited) { $p.Kill() }; break } } if (!$p.HasExited) { $p.WaitForExit(5000) }"

echo.
echo 검증 작업(Validate)이 완료되었습니다.

REM ===== [2단계] 리포트 생성 및 서버 실행 (Report) =====
echo [2/2] 리포트 생성 및 서버 실행 중...

REM Windows Terminal(wt.exe)을 사용하여 새 탭에서 리포트 서버 실행
echo Windows Terminal의 새 탭에서 리포트 서버를 시작합니다.
wt -d . new-tab cmd /c "title A11y Report Server && validator-cli.exe @.\command\report.args"

REM 서버가 정상적으로 실행될 때까지 잠시 대기 (5초)
echo 리포트 서버 대기 중 (5초)...
timeout /t 5 /nobreak >nul

REM ===== [3단계] 브라우저 실행 =====
echo 크롬 브라우저를 통해 리포트를 확인합니다...
start chrome "http://localhost:3000/reports/project_template/latest/static-report/index.html"

echo.
echo 모든 작업이 완료되었습니다.
echo 리포트 서버는 Windows Terminal의 새 탭에서 실행 중입니다.
echo 이 창은 자동으로 닫힙니다.
timeout /t 3 >nul
exit
