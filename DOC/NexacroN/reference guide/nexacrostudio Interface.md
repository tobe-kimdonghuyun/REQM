# 336.nexacrostudio Interface

336.1findinFileText

336.2getFormImage

336.3paste

336.4request

텍스트로 편집할 수 있는 파일 내의 지정된 라인에 캐럿을 위치시키는 메서드입니다.

## 336.1.1문법

```
nexacrostudio.findinFileText(prefixurl, line[, findText])
```

## 336.1.2파라미터

| Parameters | Description |
| --- | --- |
| prefixurl | TypeDefinition의 Service에 정의된 Prefix를 포함한 파일 경로를 설정합니다.  프로젝트 내 텍스트로 편집할 수 있는 파일을 설정할 수 있습니다.  - Base::test.xfdl  - theme::blue\\theme.xcss |
| line | 캐럿이 위치할 파일 내의 라인 값을 설정합니다. |
| findText | line 값에 해당하는 라인 내에서 탐색할 텍스트를 설정합니다. |

## 336.1.3참고

```
- 넥사크로 스튜디오 내에서 Add on 형태로 실행하는 경우에만 사용할 수 있습니다.

- prefixurl 값에 해당하는 파일이 열려 있지 않을 경우 편집 상태로 열고 캐럿을 지정한 위치로 이동합니다.

- line 값만 설정한 경우 해당 라인 맨 앞에 캐럿이 위치합니다.
  findText 값을 설정한 경우 해당하는 텍스트를 블럭으로 지정하고 캐럿은 텍스트 마지막 위치에 놓입니다.
```
