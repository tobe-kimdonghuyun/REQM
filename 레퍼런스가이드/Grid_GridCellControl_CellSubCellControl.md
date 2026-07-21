# 77.Grid > GridCellControl > CellSubCellControl

77.1개요

77.2속성

```
SubCellControl 은 여러개의 Cell 이 합쳐져서 구성되는 컨트롤입니다.
```

## 77.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- CellSubCellControl 은 Grid Contents Editor 에서 "Merge Cells(Having child cells)" 메뉴로 Cell 을 병합하여 생성할 수 있습니다.
   병합된 SubCell 은 CellSubCellControl 에 속한 상태로 각 Cell 영역과 속성을 따로 갖습니다.

- Grid Contents Editor 에서 "Merge Cells(A big cell)" 메뉴를 사용하여 Cell 을 병합할 경우 일반 Cell 로 처리됩니다.
   병합된 MergeCell 은 하나의 Cell 이 되며 영역과 속성을 하나만 갖습니다.

- CellSubCellControl 에서 내부의 Cell 속성은 setSubCellProperty() 메소드로 설정할 수 있습니다.
   내부 Cell 의 속성값을 가져올 때는 getSubCellProperty() 메소드를 사용합니다.
   내부 Cell 은 Cell 마다 내부 인덱스를 가지고 있습니다.

- CellSubCellControl 에서 내부 Cell 은 GridCellControl 과 동일한 속성을 갖지만, CellSubCellControl 에 속해 있을 때는 적용되지 않는 속성이 있습니다.
   CellSubCellControl 에 속해 있을 때 적용되지 않는 속성을 유지하는 이유는
   Grid 의 splitContentsCell() 메소드를 사용하여 CellSubCellControl 을 일반 Cell 로 분할하면 모든 속성이 적용되기 때문입니다.

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

## 77.1.2Status

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

## 77.1.3Control

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
| cellimage | | nexacro.ImageAreaControl |
| cellexpandbutton | | nexacro.Button |
| cellselection | | nexacro.GridSelectionControl |
| cellradioitem | | nexacro.RadioItemControl |
| cellmulticombo | | nexacro.MultiCombo |
