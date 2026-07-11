# 87.ListView > ListViewCellControl

87.1개요

87.2속성

```
Cell 은 ListView 가 출력되는 최소단위로 Band 내에 표시되는 오브젝트입니다.
```

## 87.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 각 Cell 은 해당 Band 내에서 고유한 Cell 인덱스를 갖습니다.
  
- Cell 인덱스는 바인드 된 DataSet 의 데이터 갯수와는 관계가 없으며, ListView 에 정의된 포맷과 관계가 있습니다.
  
- Cell 의 일부 속성은 DataSet 의 Column 을 바인드 하거나 Expression 수식을 설정할 수 있습니다.
   Expression 수식에는 바인드 된 DataSet 의 메소드, Column ID, 접근가능한 영역에 정의된 함수 등을 사용할 수 있습니다.
  
- Expression 수식에 아래의 예약어를 사용하면 수식 실행 시 예약어에 상응하는 값으로 대체됩니다.
  > this : 수식이 정의된 Cell 오브젝트. ( Form 의 지시어가 아닙니다.)
  > comp : Cell 을 갖는 ListView 컴포넌트.
  > dataset : ListView 에 바인드된 DataSet 컴포넌트.
  > currow : 수식이 계산하고 있는 아이템의 인덱스.
  > [Column ID] : 수식이 계산하고 있는 아이템의 DataSet Column 값.
  > ListView 에 바인드 된 DataSet 의 속성과 메소드.
      ex) "dataset.rowcount", "dataset.colcouont", "dataset.rowposition", "dataset.getCount()" 등
```

## 87.1.2Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| invalidtext | userstatus | 유효하지 않은 값이 바인드 되거나 설정된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 87.1.3Control

| Name | | TypeName |
| --- | --- | --- |
| cellmaskedit | | nexacro.MaskEdit |
| cellprogressbar | | nexacro.ProgressBar |
| celltextarea | | nexacro.TextArea |
| cellimage | | nexacro.ImageAreaControl |
| cellexpandbutton | | nexacro.Button |
| cellbutton | | nexacro.Button |
| cellcalendar | | nexacro.Calendar |
| cellcheckbox | | nexacro.CheckBox |
| cellcombo | | nexacro.Combo |
| celledit | | nexacro.Edit |
| cellmulticombo | | nexacro.MultiCombo |
