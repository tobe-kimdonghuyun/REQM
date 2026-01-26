# Nexacro Deploy

Nexacro 프로젝트 배포 자동화 도구

## 설치

```bash
cd nexacrodeploy
pip install -r requirements.txt
```

## 실행

```bash
python main.py
```

## 설정

`config.json` 파일에서 설정 변경:

```json
{
  "source_dir": "../NexaroDesktopDMI_output",
  "target_dir": "./output"
}
```

## 프로젝트 구조

```
nexacrodeploy/
├── main.py           # 메인 실행 파일
├── config.json       # 설정 파일
├── requirements.txt  # 의존성 패키지
├── utils/            # 유틸리티 모듈
│   └── __init__.py
└── README.md         # 문서
```
