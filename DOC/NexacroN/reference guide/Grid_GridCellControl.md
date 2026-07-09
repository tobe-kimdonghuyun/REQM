# 76.Grid > GridCellControl

76.1개요

76.2속성

```
Cell 은 Grid 가 출력되는 최소단위로 Band 내에서 고유한 위치에 표시되는 오브젝트입니다.
```

## 76.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 각 Cell 은 해당 Band 내에서 고유한 Cell 인덱스를 갖습니다.
   Cell 인덱스는 각 Band 별로 왼쪽에서 오른쪽으로 차례로 Cell 에 부여됩니다.
   SubRow 가 있으면 왼쪽에서 오른쪽으로 Cell 인덱스를 부여한 후 다음 SubRow 에 부여됩니다.
   MergeCell 과 SubCell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 공유합니다.
  
- Cell 인덱스는 바인드 된 DataSet 의 데이터 갯수와는 관계가 없으며, Grid 에 정의된 포맷과 관계가 있습니다.
  
- SubCell 은 관련 메소드(getSubCellProperty() 등)를 사용하여 각 Cell 을 별도의 Cell 로 처리할 수 있습니다.
   SubCell 의 각 Cell 은 별도의 SubCell 인덱스를 갖습니다.
   MergeCell 은 전체 Cell 을 하나의 Cell 로 처리하며 각 Cell 을 별도로 처리할 수 없습니다.
  
- Cell 의 일부 속성은 DataSet 의 Column 을 바인드 하거나 Expression 수식을 설정할 수 있습니다.
   Expression 수식에는 바인드 된 DataSet 의 메소드, Column ID, 접근가능한 영역에 정의된 함수 등을 사용할 수 있습니다.
  
- Expression 수식에 아래의 예약어를 사용하면 수식 실행 시 예약어에 상응하는 값으로 대체됩니다.
  > this : 수식이 정의된 Cell 오브젝트. ( Form 의 지시어가 아닙니다.)
  > comp : Cell 을 갖는 Grid 컴포넌트.
  > dataset : Grid 에 바인드된 DataSet 컴포넌트.
  > currow : 수식이 계산하고 있는 행(Row) 의 인덱스.
  > [Column ID] : 수식이 계산하고 있는 행(Row) 의 DataSet Column 값.
  > Grid 에 바인드 된 DataSet 의 속성과 메소드.
      ex) "dataset.rowcount", "dataset.colcount", "dataset.rowposition", "dataset.getCount()" 등
```

## 76.1.2Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| blinked | userstatus | 블링크 효과가 적용된 상태 |
| selected | userstatus | 컴포넌트의 특정 아이템이 선택된 상태 |
| invalidtext | userstatus | 유효하지 않은 값이 바인드 되거나 설정된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 76.1.3Control

| Name | | TypeName |
| --- | --- | --- |
| cellbutton | | nexacro.Button |
| cellcalendar | | nexacro.Calendar |
| cellcheckbox | | nexacro.CheckBox |
| cellcombo | | nexacro.Combo |
| celledit | | nexacro.Edit |
| cellmaskedit | | nexacro.MaskEdit |
| celltreeline | | nexacro.CellTreeLineControl |
| cellprogressbar | | nexacro.ProgressBar |
| celltextarea | | nexacro.TextArea |
| celltreeitem | | nexacro.CellTreeItemControl |
| subcell | | nexacro.CellSubCellControl |
| cellimage | | nexacro.ImageAreaControl |
| cellexpandbutton | | nexacro.Button |
| cellselection | | nexacro.GridSelectionControl |
| cellradioitem | | nexacro.RadioItemControl |
| cellmulticombo | | nexacro.MultiCombo |
