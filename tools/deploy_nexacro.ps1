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

# 설정 파일 읽기 (key=value 형식)
$props = @{}
Get-Content -LiteralPath $ConfigPath -Encoding UTF8 | ForEach-Object {
    if ($_ -match '=') {
        $k, $v = $_.Split('=', 2)
        $props[$k.Trim()] = $v.Trim()
    }
}

Write-Host "    - ProjectPath    : $($props.ProjectPath)"
Write-Host "    - OutputPath     : $($props.OutputPath)"
Write-Host "    - NexacroLibPath : $($props.NexacroLibPath)"
Write-Host "    - GenerateRule   : $($props.GenerateRule)"

# JAR 파일 존재 확인
if (!(Test-Path -LiteralPath 'NexacroN_Deploy_JAVA.jar')) {
    Write-Error "[오류] NexacroN_Deploy_JAVA.jar 파일을 찾을 수 없습니다."
    exit 1
}

# Nexacro 배포 실행
& $JavaExe `
    "-Dlog4j.configurationFile=.\log4j2.xml" `
    "-jar" "NexacroN_Deploy_JAVA.jar" `
    "-P" $props.ProjectPath `
    "-O" $props.OutputPath `
    "-B" $props.NexacroLibPath `
    "-GENERATERULE" $props.GenerateRule

exit $LASTEXITCODE
