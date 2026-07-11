# 137.Dataset

137.1개요

137.2속성

137.3메서드

137.4이벤트

```
데이터를 테이블 형태로 저장하는 오브젝트입니다.

엔진과 밀접하게 연관되어 있으며 내부에서 사용하는 데이터는 Dataset 형태를 사용합니다.
컴포넌트와 바인딩한 Dataset 을 이용해 데이터의 변경사항을 공유합니다. 
통신시에도 데이터를 주고 받는 형식으로 사용합니다. 

Dataset 의 Column 이나 레코드를 추가/삭제/수정하는 메소드, 레코드 그룹, 정렬, 필터 기능, 통계 메소드(Sum, Max, Min, Avg, Count)를 지원합니다.
또한 다른 Dataset 을 합치거나 추가하거나 복사하는 기능을 지원합니다.

filterstr 속성에 Expression 을 지정하면 Dataset 의 레코드가 필터링됩니다.
keystring 속성을 통해 데이터를 그룹으로 묶거나 정렬할 수 있습니다.
```

## 137.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Dataset 은 수정/삭제된 레코드의 변경전 내용을 확인할 수 있는 getDeletedRowset(), getOrgColumn() 등의 메소드를 지원합니다.
   또한 필터링된 레코드들과 필터링되지 않은 레코드들을 제어할수 있는 메소드를 따로 제공하고 있습니다.

- Dataset 은 상황에 따라 이벤트가 발생합니다.
   특히 onload 이벤트는 여러 상황에서 발생되므로 이벤트 오브젝트의 reason 속성값으로 구분하여 처리하도록 합니다.

- Dataset 의 Column 명은 공백이 포함될 수 없습니다.

- Dataset 의 copyData(), assign() 등의 메소드에서 Dataset 을 파라미터로 지정할수 있습니다.
   이때 해당 Form 에 지정된 Dataset 이 없을 경우 상위 Form 에서 검색하게 됩니다.
   하위 Form 의 Dataset 을 지정하기 위해서는 명시적으로 SubForm.Dataset 오브젝트를 인수로 주어야 합니다.

- 넥사크로 라이브러리에서 Dataset 오브젝트의 실제 클래스명은 NormalDataset입니다.
   그러나, 사용자 편의를 위해 넥사크로 스튜디오와 도움말 등에서는 오브젝트 이름을 "Dataset"으로 표기하며, 스크립트에서 오브젝트를 생성할 때도 new Dataset처럼 사용할 수 있습니다.
   내부적으로는 nexacro.NormalDataset 클래스로 처리되기 때문에, 넥사크로 스튜디오에서 자동으로 생성되는 이벤트 핸들러 함수나 도움말 등에서 "nexacro.NormalDataset"라는 클래스명이 노출될 수 있습니다.
   예를 들어, Dataset 오브젝트의 이벤트 핸들러 함수 생성 시에는 Parameters 항목이 아래와 같이 표시되는 것은 정상적인 동작입니다.
   this.Dataset00_onrowposchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo)
```

## 137.1.2생성자

|  |
| --- |
| ``` // Create Object var ds = new Dataset;  ds.url = "http://1.10.10.1:8080/service/test.jsp"; ds.load();  objParentForm.addChild("DatasetID", ds); ``` |
