param(
    [string]$ConfigPath,
    [string]$JavaExe
)

$ErrorActionPreference = 'Stop'

# 설정 파일 존재 확인
if (!(Test-Path -LiteralPath $ConfigPath)) {
    Write-Error "[오류] 설정 파일을 찾을 수 없습니다: $ConfigPath"
    exit 1
}

# 설정 파일 읽기 (key=value 및 단독 플래그 라인 모두 처리)
$props = @{}
$configFlags = @()
Get-Content -LiteralPath $ConfigPath -Encoding UTF8 | ForEach-Object {
    $line = $_.Trim()
    if ($line -eq '' -or $line.StartsWith('#')) { return }
    if ($line -match '=') {
        $k, $v = $line.Split('=', 2)
        $props[$k.Trim()] = $v.Trim()
    } else {
        $configFlags += $line
    }
}

# 필수값 검증
$requiredKeys = @('ProjectPath', 'OutputPath', 'NexacroLibPath', 'GenerateRule')
$missingKeys = @()
foreach ($key in $requiredKeys) {
    if (-not $props.ContainsKey($key) -or [string]::IsNullOrWhiteSpace($props[$key])) {
        $missingKeys += $key
    }
}
if ($missingKeys.Count -gt 0) {
    Write-Host ""
    Write-Host "[오류] deploy_config.txt 에 아래 필수 항목이 누락되었습니다:"
    $missingKeys | ForEach-Object { Write-Host "       - $_" }
    Write-Host ""
    Write-Host "       deploy_config.txt 경로: $ConfigPath"
    Write-Host "       필수 항목을 추가한 후 다시 실행하세요."
    exit 1
}

Write-Host "    - ProjectPath    : $($props.ProjectPath)"
Write-Host "    - OutputPath     : $($props.OutputPath)"
Write-Host "    - NexacroLibPath : $($props.NexacroLibPath)"
Write-Host "    - GenerateRule   : $($props.GenerateRule)"

# LogFile 또는 LogFil 키 처리 (둘 다 허용)
$logFile = if ($props.ContainsKey('LogFile')) { $props['LogFile'] }
           elseif ($props.ContainsKey('LogFil')) { $props['LogFil'] }
           else { $null }

if ($logFile) {
    Write-Host "    - LogFile        : $logFile"
    $logDir = Split-Path -Parent $logFile
    if ($logDir -and !(Test-Path -LiteralPath $logDir)) {
        New-Item -ItemType Directory -Path $logDir -Force | Out-Null
        Write-Host "    - 로그 디렉토리 생성: $logDir"
    }
}

# DeployPath 처리
if ($props.ContainsKey('DeployPath')) {
    Write-Host "    - DeployPath     : $($props.DeployPath)"
}

# 플래그 출력
if ($configFlags.Count -gt 0) {
    Write-Host "    - Flags          : $($configFlags -join ' ')"
}

# JAR 파일 존재 확인
if (!(Test-Path -LiteralPath 'NexacroN_Deploy_JAVA.jar')) {
    Write-Error "[오류] NexacroN_Deploy_JAVA.jar 파일을 찾을 수 없습니다."
    exit 1
}

# Nexacro 배포 실행
$javaArgs = @(
    "-Dlog4j.configurationFile=.\log4j2.xml",
    "-jar", "NexacroN_Deploy_JAVA.jar",
    "-P", $props.ProjectPath,
    "-O", $props.OutputPath,
    "-B", $props.NexacroLibPath,
    "-GENERATERULE", $props.GenerateRule
)
if ($logFile) {
    $javaArgs += @("-L", $logFile)
}
if ($props.ContainsKey('DeployPath')) {
    $javaArgs += @("-D", $props.DeployPath)
}
if ($props.ContainsKey('Route') -and -not [string]::IsNullOrWhiteSpace($props['Route'])) {
    $routeVal = $props.Route.Trim('"').Trim("'")
    Write-Host "    - Route          : $routeVal"
    $javaArgs += @("-ROUTE", $routeVal)
}
if ($configFlags.Count -gt 0) {
    $javaArgs += $configFlags
}
& $JavaExe @javaArgs

exit $LASTEXITCODE
