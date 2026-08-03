# nexacroN V24 — Dataset

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 167개

---

## Data Objects

### Data Objects

> Data Objects

**Description**

데이터를 처리하기 위한 오브젝트입니다.


---

## Data Objects > ColumnInfo

### ColumnInfo

> Data Objects > ColumnInfo

**Description**

Dataset의 Column 정보를 갖는 오브젝트입니다.

**Remark**

- 생성된 ColumnInfo 오브젝트는 addColumnInfo() 메소드를 사용하여 DataSet 에 추가할 수 있습니다.
   addColumnInfo() 메소드 실행 시 Column ID 로 TypeName, ClassName, 스크립트 예약어를 사용하면 오동작할 수 있습니다.

- DataSet 의 getColumnInfo() 메소드를 사용하여 ColumnInfo 오브젝트를 반환 받을 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| datapath | Dataset 오브젝트의 컬럼에서 가져올 데이터에 해당하는 datapath를 설정하는 속성입니다. |
| name | ColumnInfo 의 이름을 갖는 읽기전용 속성입니다. |
| prop | keystring 속성에 의해 그룹핑되면 생성되는 논리적 레코드에 표시될 값의 유형을 설정하는 속성입니다. |
| size | DataSet 의 Column 에 저장할 수 있는 데이터의 최대길이를 설정하는 속성입니다. |
| sumtext | Column 의 prop 속성값이 "TEXT" 일 때 논리적 레코드의 해당 컬럼에 표시되는 값을 설정하는 속성입니다. |
| type | DataSet 의 Column 에 저장되는 데이터의 형식을 설정하는 속성입니다. |


---

### 속성 (Properties)

### datapath

> Data Objects > ColumnInfo > Property > datapath

**Description**

Dataset 오브젝트의 컬럼에서 가져올 데이터에 해당하는 datapath를 설정하는 속성입니다.

**Syntax**

```javascript
ColumnInfo.datapath [=strDatapath]
```

**Setting Syntax**

```javascript
Dataset00.getColumnInfo(0).datapath = "@.id";
```
- **`strDatapath`** — 데이터에서 컬럼 값으로 가져올 datapath를 설정합니다.

**Remark**

- 넥사크로 스튜디오에서 Dataset 오브젝트의 dataobjectpath 속성을 선택하고 Data Path Editor를 실행하면 Json Contents에서 컬럼으로 추가할 항목을 선택하고 추가하면 datapath 속성값을 자동으로 설정합니다.

- datapath 속성값을 $형태로 설정한 경우 column 정보가 변경되고 이벤트 발생 시 변경 정보에서 dataobjectpath = "", index = -1, key=datapath로 전달됩니다. 
  DataObject, Dataset 오브젝트의 데이터는 정상적으로 처리되지만 변경된 정보를 받는 Dataset 오브젝트에서 변경 정보를 정확하게 확인할 수 없어 Dataset 오브젝트는 DataObject 오브젝트로부터 reload를 수행하게 됩니다.


---

### name

> Data Objects > ColumnInfo > Property > name

**Description**

ColumnInfo 의 이름을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ColumnInfo.name
```

**Remark**

- getColumnInfo() 메소드로 반환된 ColumnInfo 오브젝트는 DataSet 의 Column ID 가 설정됩니다.

**See Also**

Dataset.addColumnInfoDataset.getColumnInfo


---

### prop

> Data Objects > ColumnInfo > Property > prop

**Description**

keystring 속성에 의해 그룹핑되면 생성되는 논리적 레코드에 표시될 값의 유형을 설정하는 속성입니다.

**Syntax**

```javascript
ColumnInfo.prop[= enumProp]
```

**Setting Syntax**

- **`"NONE"`** — 논리적 레코드(Logical Record) 의 해당 컬럼의 타입이 문자일 경우 값을 표시하지 않습니다.
논리적 레코드(Logical Record) 의 해당 컬럼의 타입이 숫자일 경우 그룹의 합계값을 표시합니다.
논리적 레코드(Logical Record) 의 해당 컬럼의 타입이 날짜일 경우 "0000-01-01"을 표시합니다.
- **`"AVG"`** — 논리적 레코드(Logical Record) 의 해당 컬럼에 그룹의 평균값을 표시합니다.
- **`"COUNT"`** — 논리적 레코드(Logical Record) 의 해당 컬럼에 그룹의 Row 갯수를 표시합니다.
- **`"MAX"`** — 논리적 레코드(Logical Record) 의 해당 컬럼에 그룹의 최대값을 표시합니다.
- **`"MIN"`** — 논리적 레코드(Logical Record) 의 해당 컬럼에 그룹의 최소값을 표시합니다.
- **`"SUM"`** — 논리적 레코드(Logical Record) 의 해당 컬럼에 그룹의 합계값을 표시합니다.
- **`"TEXT"`** — 논리적 레코드(Logical Record) 의 해당 컬럼에 sumtext 속성값을 표시합니다.

**Remark**

- prop 속성값을 설정하지 않으면 "NONE" 으로 적용됩니다.

**See Also**

Dataset.keystring


---

### size

> Data Objects > ColumnInfo > Property > size

**Description**

DataSet 의 Column 에 저장할 수 있는 데이터의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
ColumnInfo.size[= nColSize]
```

**Setting Syntax**

- **`nColSize`** — Column 에 저장할 수 있는 데이터의 최대길이를 숫자로 설정합니다.


---

### sumtext

> Data Objects > ColumnInfo > Property > sumtext

**Description**

Column 의 prop 속성값이 "TEXT" 일 때 논리적 레코드의 해당 컬럼에 표시되는 값을 설정하는 속성입니다.

**Syntax**

```javascript
ColumnInfo.sumtext[= strSumtext]
```

**Setting Syntax**

- **`strSumtext`** — Grid 에 표시되는 Row 가 논리적 레코드일 때 해당 컬럼에 표시되는 값을 문자열로 설정합니다.

**Remark**

- prop 속성값이 "TEXT" 일 때만 유효한 속성입니다.

- Array 속성으로 사용하는 "constructor","length","prototype" 항목은 값으로 지정할 수 없습니다.

- 논리적 레코드(Logical Record)는 keystring 속성에 의해 데이터가 그룹핑되었을 때 생성되는 Row 입니다.


---

### type

> Data Objects > ColumnInfo > Property > type

**Description**

DataSet 의 Column 에 저장되는 데이터의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ColumnInfo.type[= strType]
```

**Setting Syntax**

- **`"STRING"`** — Primitive Type, 문자열
- **`"INT"`** — Primitive Type, 정수형
- **`"FLOAT"`** — Primitive Type, 실수형
- **`"BIGDECIMAL"`** — Object Type(nexacro.Decimal)
실수형 (십진수 기준으로 최대 31자리 표현 가능하며, 정수부는 최대 24자리, 소수부는 최대 15자리까지 지원)
자세한 내용은 Script > Nexacro Objects > Decimal 설명을 참고하세요.
- **`"DATE"`** — Object Type(nexacro.Date)
날짜 : YYYYMMDD (0000/01/01 ~ 9999/12/31)
- **`"TIME"`** — Object Type(nexacro.Date)
시간 : HHmmssuuu (msec 포함가능)
- **`"DATETIME"`** — Object Type(nexacro.Date)
일시 : YYYYMMDDHHmmssuuu (msec 포함가능)
- **`"BLOB"`** — 바이너리 데이터, 대용량 데이터

* NRE 만 지원합니다.
* 넥사크로 X-API 사용 시 BLOB 타입 Column에 이미지 데이터를 설정하는 경우 Data URI 형태는 지원하지 않으며 Base64 인코딩 데이터만 설정할 수 있습니다.
 (X) data:image/png;base64,iVBORw0~...
 (O) iVBORw0~....

**Remark**

- type 속성값을 설정하지 않으면 "STRING" 으로 적용됩니다.

- Column 에 데이터가 존재하지 않을 경우 undefined 로 적용됩니다.


---

## Data Objects > Dataset

### Dataset

> Data Objects > Dataset

**Description**

데이터를 테이블 형태로 저장하는 오브젝트입니다.

엔진과 밀접하게 연관되어 있으며 내부에서 사용하는 데이터는 Dataset 형태를 사용합니다.
컴포넌트와 바인딩한 Dataset 을 이용해 데이터의 변경사항을 공유합니다. 
통신시에도 데이터를 주고 받는 형식으로 사용합니다. 

Dataset 의 Column 이나 레코드를 추가/삭제/수정하는 메소드, 레코드 그룹, 정렬, 필터 기능, 통계 메소드(Sum, Max, Min, Avg, Count)를 지원합니다.
또한 다른 Dataset 을 합치거나 추가하거나 복사하는 기능을 지원합니다.

filterstr 속성에 Expression 을 지정하면 Dataset 의 레코드가 필터링됩니다.
keystring 속성을 통해 데이터를 그룹으로 묶거나 정렬할 수 있습니다.

**Remark**

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

**Property**

| Name | Description |
| --- | --- |
| arguments | DataSet 의 url 속성에 설정된 Business Service 에 전달할 인수를 설정하는 속성입니다. |
| binddataobject | Dataset 오브젝트와 바인드되는 DataObject 오브젝트의 ID를 설정하는 속성입니다. |
| colcount | DataSet 에 정의된 Column 의 갯수를 갖는 읽기전용 속성입니다. |
| colinfos | DataSet 에 정의된 Column 정보를 Collection 형태로 갖는 읽기전용 속성입니다. |
| collation | 데이터 정렬 방식을 결정하는 유형을 설정하는 속성입니다. |
| constcount | DataSet 에 정의된 Const Column (상수 컬럼)의 갯수를 갖는 읽기전용 속성업니다. |
| dataobjectbindmode | 바인딩된 DataObject 오브젝트와의 통신 방식을 설정하는 속성입니다. |
| dataobjectpath | 바인딩된 DataObject 오브젝트의 전체 데이터 경로에서 새로운 루트 정보를 지정합니다. |
| enableevent | DataSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| filterstr | DataSet 에 로드된 데이터를 필터링할 조건식을 설정하는 속성입니다. |
| keystring | Dataset 오브젝트에 로드된 데이터를 그룹화 하거나 정렬할 기준이 되는 조건식을 설정하는 속성입니다. |
| loadfiltermode | DataSet 에 데이터를 로드하거나 트랜잭션을 수행할 때 filterstr 속성값의 적용방법을 설정하는 속성입니다. |
| loadkeymode | DataSet 에 데이터를 로드하거나 트랜잭션을 수행할 때 keystring 속성값의 적용방법을 설정하는 속성입니다. |
| name | Dataset 의 이름을 설정하는 속성입니다. |
| preload | DataSet 의 url 속성을 설정한 경우 DataSet 에 데이터를 로드하는 시점을 설정하는 속성입니다. |
| progressload | 서버로부터 데이터를 Chunked 방식으로 여러번에 걸쳐서 받을 경우에 대한 처리방법을 설정하는 속성입니다. |
| reversesubsum | DataSet 이 keystring 속성에 의해 그룹핑 되었을 때 그룹소계가 표시될 위치를 설정하는 속성입니다. |
| rowcount | DataSet 에 로드된 데이터의 갯수를 갖는 읽기전용 속성입니다. |
| rowposition | DataSet 에서 현재 선택된 데이터의 Row 인덱스를 갖는 속성입니다. |
| saveinfinity | DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 처리 방법을 설정하는 속성입니다. |
| saveinvaliddate | DataSet 에서 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 처리 방법을 설정하는 속성입니다. |
| savenan | DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 처리 방법을 설정하는 속성입니다. |
| serverdatasetid | DataSet 의 url 속성에 설정된 Business Service 를 통해 전달된 DataSet 중 실제 사용될 DataSet 의 ID를 설정하는 속성입니다. |
| updatecontrol | DataSet 의 데이터가 Insert/Update/Delete 되었을 경우 각 RowType 을 자동으로 변경할 지 설정하는 속성입니다. |
| url | DataSet 에 Business Service 를 연결하는 경우 해당 서비스의 경로(URL)을 설정하는 속성입니다. |
| useclientlayout | 트랜잭션을 수행하여 수신된 DataSet 의 Column Layout 을 적용할 지 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addColumn | DataSet 에 Column 을 추가하는 메소드입니다. |
| addColumnInfo | DataSet 에서 ColumnInfo 객체를 사용하여 Column 을 추가하는 메소드입니다. |
| addConstColumn | DataSet 에 Const Column(상수 컬럼)을 추가하는 메소드입니다. |
| addEvent | Dataset 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | Dataset 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 Dataset 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| addRow | DataSet 의 마지막 Row 에 새로운 데이터(Row)를 추가하는 메소드입니다. |
| append | 인수로 전달된 서비스경로(URL)에서 데이터를 로드하여 현재 DataSet 의 마지막 Row 뒤에 추가하는 메소드입니다. |
| appendData | 현재 Dataset 의 마지막 Row 다음에 지정한 Dataset 의 데이터(Row)를 추가하는 메소드입니다. |
| applyChange | DataSet 오브젝트의 Row의 타입을  "Dataset.ROWTYPE_NORMAL"로 바꾸는 메소드입니다. |
| assign | 현재 DataSet 에 지정한 DataSet 의 Row, Column 정보와 모든 데이터를 부여하는 메소드입니다. |
| clear | DataSet 의 Row, Column 정보와 데이터를 모두 삭제하는 메소드입니다. |
| clearData | DataSet 의 Column 정보 이외에 모든 데이터(Row) 를 삭제하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| copyData | 현재 DataSet 에 지정한 DataSet 의 데이터(Row)를 복사하는 메소드입니다. |
| copyRow | 현재 Dataset 의 특정 데이터(Row)를 지정한 Dataset 의 데이터(Row)로 갱신하는 메소드입니다. |
| createDataset | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환하는 메소드입니다. |
| createDatasetNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환하는 메소드입니다. |
| deleteAll | DataSet 의 모든 데이터(Row)를 삭제하는 메소드입니다. |
| deleteColumn | DataSet 에서 지정한 Column 또는 Const Column 을 삭제하는 메소드입니다. |
| deleteMultiRows | 배열로 된 Row 목록을 입력 받아 해당 Row 들을 삭제하는 메소드입니다. |
| deleteRow | DataSet 에서 지정한 데이터(Row)를 삭제하는 메소드입니다. |
| exchangeRow | DataSet 에서 지정된 두 Row 의 위치(RowPosition)를 서로 바꾸는 메소드입니다. |
| extractRows | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다. |
| extractRowsNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다. |
| filter | DataSet 에 로드된 데이터를 조건에 만족하는 데이터(Row) 만 보이게 필터링하는 메소드입니다. |
| filterRow | DataSet 에서 특정 Row 를 보이지 않게 필터링하는 메소드입니다. |
| findEventHandler | Dataset 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| findMaxLengthRow | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 의 데이터 길이가 가장 긴 Row 의 인덱스를 반환하는 메소드입니다. |
| findMaxLengthRowNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 의 데이터 길이가 가장 긴 Row 의 인덱스를 반환하는 메소드입니다. |
| findNFRowIndex | 필터링 된 DataSet 의 Row 인덱스를 필터링 되지 않은 DataSet 의 Row 인덱스로 반환하는 메소드입니다. |
| findRow | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달된 값과 일치하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다. |
| findRowAs | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달된 값으로 시작되는 첫번째 Row 의 인덱스를 반환하는 메소드입니다. |
| findRowAsNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달된 값으로 시작되는 첫번째 Row 의 인덱스를 반환하는 메소드입니다. |
| findRowExpr | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다. |
| findRowExprNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다. |
| findRowNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달된 값과 일치하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다. |
| getAvg | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| getAvgNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| getCaseAvg | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| getCaseAvgNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| getCaseCount | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 Row 의 전체 갯수를 반환하는 메소드입니다. |
| getCaseCountNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 Row 의 전체 갯수를 반환하는 메소드입니다. |
| getCaseMax | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| getCaseMaxNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| getCaseMin | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| getCaseMinNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| getCaseSum | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다. |
| getCaseSumNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 합계값를 반환하는 메소드입니다. |
| getColCount | DataSet 에서 Const Column 을 포함한 전체 Column 의 갯수를 구하는 메소드입니다. |
| getColID | DataSet 에서 전달된 인덱스에 해당하는 Column 의 ID 를 반환하는 메소드입니다. |
| getColIndex | DataSet 에서 전달된 ID 에 해당하는 Column 의 인덱스를 반환하는 메소드입니다. |
| getColumn | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 Row 와 Column 의 현재값을 반환하는 메소드입니다. |
| getColumnInfo | DataSet 에서 지정한 Column 의 ColumnInfo 객체를 반환하는 메소드입니다. |
| getColumnNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 Row 와 Column 의 현재값을 반환하는 메소드입니다. |
| getConstColID | DataSet 에서 전달된 인덱스에 해당하는 Const Column 의 ID 를 반환하는 메소드입니다. |
| getConstColIndex | DataSet 에서 전달된 ID 에 해당하는 Const Column 의 인덱스를 반환하는 메소드입니다. |
| getConstColumn | DataSet 에서 지정한 Const Column 의 값을 구하는 메소드입니다. |
| getConstCount | DataSet 에 정의된 Const Column 의 갯수를 구하는 메소드입니다. |
| getCount | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다. |
| getCountNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다. |
| getDeletedColumn | DataSet 에서 삭제된 Row 중에서 지정된 Row 의 Column 값을 구하는 메소드입니다. |
| getDeletedRowCount | Dataset 오브젝트에서 삭제된 Row의 개수를 구하는 메서드입니다. |
| getDeletedRowset | Dataset 오브젝트에서 삭제된 전체 Row를 배열로 반환하는 메서드입니다. |
| getEventHandler | Dataset 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getGroupRangeCount | DataSet 이 그룹화되어 있을 때 그룹정보를 포함하고 있는 Row 가 참조한 Row 의 갯수를 구하는 메소드입니다. |
| getGroupRangeStart | DataSet 이 그룹화되어 있을 때 그룹정보를 포함하고 있는 Row 가 참조한 Row 의 시작 인덱스를 구하는 메소드입니다. |
| getMax | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| getMaxNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| getMin | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| getMinNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| getOrgColumn | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 Row 와 Column 의 초기값을 반환하는 메소드입니다. |
| getOrgColumnNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 Row 와 Column 의 초기값을 반환하는 메소드입니다. |
| getRowCount | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 Row 의 전체 갯수를 반환하는 메소드입니다. |
| getRowCountNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 Row 의 전체 갯수를 반환하는 메소드입니다. |
| getRowLevel | DataSet 이 그룹화되어 있을 경우에 지정한 Row 의 레벨을 구하는 메소드입니다. |
| getRowsAvg | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 % Row 의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| getRowsAvgNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| getRowsCount | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 중 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다. |
| getRowsCountNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 중 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다. |
| getRowsMax | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| getRowsMaxNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| getRowsMin | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| getRowsMinNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| getRowsSum | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다. |
| getRowsSumNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다. |
| getRowType | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정된 Row 의 타입을 반환하는 메소드입니다. |
| getRowTypeNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정된 Row 의 타입을 반환하는 메소드입니다. |
| getSum | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다. |
| getSumNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다. |
| insertEventHandler | Dataset 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| insertRow | DataSet 에서 지정된 Row 의 위치에 새로운 Row 를 삽입하는 메소드입니다. |
| load | DataSet 의 url 속성에 설정된 Business Service 에서 데이터를 로드하는 메소드입니다. |
| loadBIN | DataSet 에 Binary 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| loadCSV | DataSet 에 CSV 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| loadFromDataObject | binddataobject, dataobjectpath 속성에 설정된 값을 Dataset 오브젝트에 즉시 반영시키는 메소드입니다. |
| loadJSON | Dataset 오브젝트에 JSON 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| loadSSV | DataSet 에 SSV 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| loadXML | DataSet 에 XML 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| lookup | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달값과 일치하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다. |
| lookupAs | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달값으로 시작하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다. |
| lookupAsNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달값으로 시작하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다. |
| lookupNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달값과 일치하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다. |
| mergeData | 현재 Dataset 에 지정한 Dataset 을 통합하는 메소드입니다. |
| moveRow | DataSet 에서 지정한 Row 를 특정 위치로 이동하는 메소드입니다. |
| removeEvent | Dataset 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | Dataset 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | Dataset 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| reset | DataSet 의 데이터를 마지막 저장 상태로 복구하는 메소드입니다. |
| saveBIN | DataSet 의 데이터를 Binary 형식으로 반환하는 메소드입니다. |
| saveCSV | DataSet 의 데이터를 CSV 형식으로 반환하는 메소드입니다. |
| saveJSON | Dataset 오브젝트의 데이터를 JSON 형식으로 반환하는 메소드입니다. |
| saveSSV | DataSet 의 데이터를 SSV 형식으로 반환하는 메소드입니다. |
| saveXML | DataSet 의 데이터를 XML 형식으로 반환하는 메소드입니다. |
| setColumn | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값을 변경하는 메소드입니다. |
| setColumnNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값을 변경하는 메소드입니다. |
| setConstColumn | DataSet 에 정의된 Const Column 의 상수값을 변경하는 메소드입니다. |
| setContents | Dataset 의 내부 구성 컨텐츠를 동적으로 설정하는 메소드입니다. |
| setEventHandler | Dataset 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | Dataset 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setRowType | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 타입값을 변경하는 메소드입니다. |
| setRowTypeNF | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 타입값을 변경하는 메소드입니다. |
| updateColID | Const Column 을 포함하여 DataSet 에 정의된 Column 의 ID 를 변경하는 메소드입니다. |
| updateConstColID | DataSet 에서 지정한 Const Column 의 ID를 변경하는 메소드입니다. |
| updateSortGroup | DataSet 에 로드된 데이터를 그룹핑 또는 정렬하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| cancolumnchange | DataSet 의 Column 값이 변경될 때 발생하는 이벤트입니다. |
| canrowposchange | Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경될 때 발생하는 이벤트입니다. |
| oncolumnchanged | DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다. |
| onload | DataSet 에 데이터 로딩이 완료된 후 발생하는 이벤트입니다. |
| onrowposchanged | Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경된 후 발생하는 이벤트입니다. |
| onrowsetchanged | DataSet 에 데이터가 Insert, Delete 되거나 Row 의 위치, 상태 등이 변경된 후 발생하는 이벤트입니다. |
| onvaluechanged | DataSet 의 데이터가 Insert, Delete, Update 되거나 Row 의 위치, 상태 등이 변경될 때 마지막에 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### arguments

> Data Objects > Dataset > Property > arguments

**Description**

DataSet 의 url 속성에 설정된 Business Service 에 전달할 인수를 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.arguments[= strArgument]
```

**Setting Syntax**

```javascript
this.Dataset00.arguments = "dept_cd=02 type_cd=A";
```
- **`strArgument`** — Business Service 에 보낼 정보를 문자열로 설정합니다.
"변수ID=변수값" 형식으로 설정하며 빈칸으로 구분하여 여러개의 인수값을 보낼 수 있습니다.

ex) "argu0=test argu1=30"

**Remark**

- arguments 속성값은 Business Service 호출시 통신 DataSet 레이아웃의 Param 정보로 들어갑니다.


---

### binddataobject

> Data Objects > Dataset > Property > binddataobject

**Description**

Dataset 오브젝트와 바인드되는 DataObject 오브젝트의 ID를 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.binddataobject[= strDataobject]
```

**Setting Syntax**

```javascript
this.Dataset00.binddataobject = "DataObject00"
```
- **`strDataobject`** — 바인딩할 DataObject 오브젝트의 ID를 문자열로 설정합니다.


---

### colcount

> Data Objects > Dataset > Property > colcount

**Description**

DataSet 에 정의된 Column 의 갯수를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Dataset.colcount
```

**Setting Syntax**

```javascript
var n = this.Dataset00.colcount
```

**Remark**

- DataSet 에 Constant Column (상수 컬럼) 이 정의되어 있다면 Constant Column 갯수도 포함됩니다.


---

### colinfos

> Data Objects > Dataset > Property > colinfos

**Description**

DataSet 에 정의된 Column 정보를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Dataset.colinfos
```

**Setting Syntax**

```javascript
var objCol0 = this.Dataset00.colinfos[0].name;
```

**Remark**

- colinofs 속성은 Collection 접근방식을 사용할 수 있습니다.
  this.Dataset00.colinfos[0], this.Dataset00.colinfos["ColID"], this.Dataset00.colinfos.length 등의 방법을 사용합니다.


---

### collation

> Data Objects > Dataset > Property > collation

**Description**

데이터 정렬 방식을 결정하는 유형을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.collation[= strCollation]
```

**Setting Syntax**

```javascript
this.Dataset00.collation = "systemlanguage";
this.Dataset00.collation = "aa-DJ";
this.Dataset00.collation = "aa_DJ";
```
- **`strCollation`** — - "none" : 기존 정렬 방식을 그대로 사용합니다.
- "systemlanguage" : 운영체제 또는 브라우저 설정 언어 정보를 기반으로 정렬 방식을 결정합니다.
- "currentlocale" : 컴포넌트, 폼, Environment에 설정된 locale 정보를 기반으로 정렬 방식을 결정합니다.
- [localecode] : ISO 639-1에서 정의하고 있는 2-알파벳 언어 코드와 ISO 3166-1에서 정의하고 있는 2-알파벳 국가 코드를 조합하여 "언어[_국가]" 또는 "언어[-국가]" 형식의 문자열로 설정합니다.

**Remark**

- Dataset 오브젝트의 Column type이 "String"일 경우에 적용됩니다.


---

### constcount

> Data Objects > Dataset > Property > constcount

**Description**

DataSet 에 정의된 Const Column (상수 컬럼)의 갯수를 갖는 읽기전용 속성업니다.

**Syntax**

```javascript
Dataset.constcount
```

**Setting Syntax**

```javascript
var count = this.Dataset00.constcount;
```


---

### dataobjectbindmode

> Data Objects > Dataset > Property > dataobjectbindmode

**Description**

바인딩된 DataObject 오브젝트와의 통신 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.dataobjectbindmode[= strDataobjectbindmode]
```

**Setting Syntax**

```javascript
strDataobjectbindmode ::= "oneway" | "twoway"
```
```javascript
this.Dataset00.dataobjectbindmode = "twoway";
```
- **`strDataobjectbindmode`** — "oneway" 단방향 통신. DataObject 오브젝트의 데이터를 로드하는 동작만 지원합니다.
"twoway" 양방향 통신. Dataset 오브젝트 설정에 따라 데이터 변경 시 DataObject 오브젝트에 변경 정보를 전달합니다.

**Remark**

- 속성값을 설정하지 않으면 "oneway"로 동작합니다.

- dataobjectbindmode 속성값을 "twoway"로 설정하고 Dataset 오브젝트 데이터 변경 시 아래와 같이 바인딩 된 DataObject의 이벤트가 발생합니다.

 * 데이터 추가, 삭제, 위치 변경 등 Row 단위 변경
    ondatachanged 이벤트가 발생합니다.
    - updatecontrol = true
        applyChange 메소드 실행 시 이벤트 발생
    - updatecontrol = false
        Row 단위 변경 발생 시 이벤트 발생
        여러 Row를 변경하는 메소드 실행 시에는 2번 이상 이벤트가 발생합니다.
        예를 들어 exchangeRow 메소드 실행 시 메소드는 한 번 실행되지만 2개 Row의 위치가 변경되어 2개 Row 데이터가 변경되는 것이므로 ondatachanged 이벤트는 2번 발생합니다.

 * 특정 Row의 Column 값 변경
    updatecontrol 속성값에 따라 발생하는 이벤트가 달라집니다.
    - updatecontrol = true
        Column 값 변경 후 applyChange 메소드 실행 시 ondatachanged 이벤트가 발생합니다.
        특정 Column 값만 변경하고 applyChange 메소드를 실행했더라도 Row 단위 변경으로 처리하기 때문에 onvaluechanged 이벤트가 아닌 ondatachanged 이벤트가 발생합니다.
    - updatecontrol = false
        Column 값 변경 시 onvaluechanged 이벤트가 발생합니다.

- dataobjectpath 속성 설정 시 필터 스크립트를 적용한 경우에는 양방향 통신을 지원하지 않습니다. 예를 들어 dataobjectpath 속성값 설정 시 "$.data[?(@.employee_age==31)]" 형식으로 필터 스크립트를 적용한 경우입니다. 
  양방향 통신을 하면서 데이터 필터링이 필요한 경우에는 filterstr 속성을 사용해주세요.


---

### dataobjectpath

> Data Objects > Dataset > Property > dataobjectpath

**Description**

바인딩된 DataObject 오브젝트의 전체 데이터 경로에서 새로운 루트 정보를 지정합니다.

**Syntax**

```javascript
Dataset.dataobjectpath[= strDataobjectpath]
```

**Setting Syntax**

```javascript
this.Dataset00.dataobjectpath = "$.data[*]";
```
- **`strDataobjectpath`** — 바인딩된 DataObject 오브젝트의 전체 데이터 경로에서 새로운 루트 정보를 지정합니다.

**Remark**

- strDataobjectpath 파라미터의 상세한 문법은 아래 링크를 참고하세요.
https://github.com/dchester/jsonpath#jsonpath-syntax


---

### enableevent

> Data Objects > Dataset > Property > enableevent

**Description**

DataSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.Dataset00.enableevent = true;this.Dataset00.enableevent = false;
```
- **`true`** — DataSet 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — DataSet 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableevent 속성값이 true 일 때 많은 양의 데이터를 변경할 경우 DataSet 에 작업을 할 때마다 이벤트가 발생합니다.
  이 경우 enableevent 속성값을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.

- enableevent 속성값을 true로 변경하면 onrowsetchanged, onvaluechanged 이벤트가 발생합니다.


---

### filterstr

> Data Objects > Dataset > Property > filterstr

**Description**

DataSet 에 로드된 데이터를 필터링할 조건식을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.filterstr[= strFilter]
```

**Setting Syntax**

```javascript
this.Dataset00.filterstr = "column0 == 'test'";
```
- **`strFilter`** — DataSet 의 데이터를 필터링 할 조건을 문자열로 설정합니다.

**Remark**

- 조건식에 해당하는 데이터만 DataSet 에 필터링되어 로드됩니다.
  필터링이 완료된 후에는 onrowsetchanged 이벤트가 발생하며 e.reason 값은 "REASON_FILTER" 가 됩니다.

- 이미 필터링된 데이터셋의 filterstr을 재설정하면 전체 데이터를 다시 필터링하여 기존에 필터링된 내역은 유지되지 않습니다.

- DataSet 을 다시 로드하거나 트랜잭션을 수행할 때 filterstr 속성은 loadfiltermode 속성의 영향을 받습니다.
  자세한 내용은 loadfiltermode 속성 설명을 참조하시기 바랍니다.


---

### keystring

> Data Objects > Dataset > Property > keystring

**Description**

Dataset 오브젝트에 로드된 데이터를 그룹화 하거나 정렬할 기준이 되는 조건식을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.keystring[= strKeystring]
```

**Setting Syntax**

```javascript
strKeystring ::= <Key> [',' <Key>] [',' <OrderKey>]

<Key> ::= [<group-type> ':'] <group-col>

<group-type> ::= 'G' | 'S'
<group-col> ::= [<sort-type>] <column-id> [[','] <group-col>]

<sort-type> ::= '+' | '-'

<OrderKey> ::= 'O:'<column-id>'['<locale code>']'[<locale option>]
```
```javascript
this.Dataset00.keystring = "column0";this.Dataset00.keystring = "G:column0";this.Dataset00.keystring = "G:+column0-column1";this.Dataset00.keystring = "S:column0+column0";this.Dataset00.keystring = "G:+column0, S:-column1";this.Dataset00.keystring = "S:column0, O:column0['en-US']";this.Dataset00.keystring = "S:column0-column1, O:column0['en-US']{ 'sensitivity' : 'base', 'ignorePunctuation' : true }";
```
- **`<group-type>`** — 그룹화 할 작업의 종류를 설정합니다.

"G" 설정 시 데이터를 그룹화합니다.
"S" 설정 시 데이터를 정렬합니다.

값을 생략하면 "G"로 적용됩니다.
- **`<sort-type>`** — 그룹화 시 정렬 방법을 설정합니다.

"+" 설정 시 오름차순으로 정렬합니다.
"-" 설정 시 내림차순으로 정렬합니다.

값을 생략하면 "+"로 적용됩니다.
- **`<column-id>`** — 그룹화 시 기준이 되는 Column 의 ID 를 설정합니다.
- **`<OrderKey>`** — 설정한 locale code, locale option에 따라 기준 Column의 정렬 방식을 결정합니다.
<group-col>에서 설정한 column id만 <OrderKey>에서 column id로 설정할 수 있습니다.
- **`<locale code>`** — locale 정보를 직접 입력하고 입력한 locale 정보를 기반으로 정렬 방식을 결정합니다.
BCP 47 Language Tags 표준에 따라 입력할 수 있습니다.
- **`<locale option>`** — 설정 언어에 따라 상세 옵션을 JSON 형태로 설정할 수 있습니다.
- sensitivity: 문자열 정렬에 대한 옵션을 설정합니다. default 값은 "variant"입니다.
  * "base": 기본 문자가 다른 문자열만 다른 것으로 처리합니다.
  * "accent": 기본 문자는 같지만, accent 부호가 있는 경우 다른 것으로 처리합니다.
  * "case": 기본 문자나 대소문자가 다른 경우 다른 것으로 처리합니다.
  * "variant": 기본 문자는 같지만 accent 부호가 있는 경우와 대소문자가 다른 경우 다른 것으로 처리합니다.
- ignorePunctuation: 구두점을 무시할지 여부를 설정합니다. default 값은 false입니다.
- numeric: 문자열 타입의 숫자인 경우 숫자로 처리할지 여부를 설정합니다. default 값은 false입니다.
- caseFirst: 대소문자 정렬 옵션을 설정합니다. default 값은 "false"입니다.
  * "upper": 대문자의 우선순위가 높습니다.
  * "lower": 소문자의 우선순위가 높습니다.
  * "false": 로케일 기본 설정에 따라 처리합니다.

**Remark**

- keystring 속성이 설정되면 설정된 조건으로 그룹화/정렬이 수행된 후 onrowsetchanged 이벤트가 발생합니다.
   이때 onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_SORTGROUP" 이 됩니다.

- keystring 속성을 설정 시 아래와 같은 방법을 사용할 수 있습니다.
"," 를 이용하면 그룹에 레벨을 줄 수 있습니다.
예를 들어, "G:column1,column2" 은 데이터를 column1 으로 그룹화한 후 그룹 내에서 column2 로 다시 그룹화한다는 의미입니다.
컬럼명에는 공백이 포함할 수 있으므로 "," 의 앞과 뒤에는 공백이 없어야 합니다.
"," 를 사용하지 않으면 두 개 이상의 열을 하나의 그룹키(Group Key)로 병합하여 사용할 수 있습니다.
예를 들어, "G:+column1-column2" 형식으로 입력하면 column1 과 column2 의 값을 합쳐 그룹화 값으로 사용하겠다는 뜻이 됩니다.
첫 글자로 "S:" 를 사용하면 그룹화 없이 정렬(Sorting)만 할 수 있습니다.
예를 들어 "S:+column1-column2" 형식으로 입력하면 column1 을 오름차순으로 정렬하고, column1 이 같은 레코드들은 column2 를 내림차순으로 정렬하겠다는 뜻이 됩니다.
만약, <group-type> 이 생략되면 "G" 옵션이 적용됩니다.
- 그룹화되면 Dataset 오브젝트에 논리적 레코드(Logical Record)가 생성됩니다.
   논리적 레코드는 Dataset 오브젝트에 열을 구성할 경우 prop 속성을 통해서 그룹화한 레코드들이 어떤 값을 가질지 설정할 수 있습니다.
   prop 속성값으로는 Count, Sum, Max, Min, Avg, Text 가 있습니다.
   keystring 으로 설정된 열은 prop 속성값의 대상에서 제외됩니다.

- Dataset 오브젝트를 로드하거나 트랜잭션을 수행할 경우 적용할 keystring 값은 loadkeymode 의 영향을 받습니다.
   자세한 사항은 loadkeymode 속성의 설명을 참조하시기 바랍니다.

- datatyperule 속성값이 "2.0" 인 경우 정렬 시 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
Column 타입이 "STRING" 이면 EmptyString("") < [Value] < undefined==null==NaN 순서로 정렬됩니다.
Column 타입이 "INT", "FLOAT", "BIGDECIMAL" 이면 -Infinity < [-Number] < 0 < [+Number] < Infinity < EmptyString("") < undefined==null==NaN 순서로 정렬됩니다.
Column 타입이 "DATE", "TIME", "DATETIME" 이면 EmptyString("") < [Date] < [Invalid Date] < undefined==null==NaN 순서로 정렬됩니다.
- OrderKey 설정 시에는 아래와 같은 제약이 있습니다.
locale code로 설정한 값을 브라우저에서 지원하지 않을 경우 운영체제 또는 브라우저 설정 언어 정보를 기반으로 동작하고 경고 메시지를 출력합니다.
locale code에서 설정한 속성 중 locale option에서 설정한 속성과 중복되는 속성이 있으면 locale option 설정값이 적용됩니다.
collation 속성을 설정했더라도 해당 컬럼 처리 시에는 locale code 설정값이 적용됩니다.
예를 들어 collation 속성값은 "en-US"으로 설정하고 keystring 속성값은 ""S:column0,O:column0['ja-JP']"으로 설정한 경우에는 keystring에서 설정한 "ja-JP" locale code가 적용됩니다.

**See Also**

Dataset.loadkeymode


---

### loadfiltermode

> Data Objects > Dataset > Property > loadfiltermode

**Description**

DataSet 에 데이터를 로드하거나 트랜잭션을 수행할 때 filterstr 속성값의 적용방법을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.loadfiltermode[= enumMode]
```

**Setting Syntax**

```javascript
enumMode ::= 'keep' | 'reset'
```
```javascript
this.Dataset00.loadfiltermode = "keep";this.Dataset00.loadfiltermode = "reset";
```
- **`"keep"`** — 데이터 로드 시 filterstr 속성에 마지막으로 설정된 값이 적용됩니다.
- **`"reset"`** — 데이터 로드 시 filterstr 속성에 디자인 시 설정된 값이 적용됩니다.

변경된 filterstr 속성값은 무시되고 초기값이 적용됩니다.

**Remark**

- loadfiltermode 속성값을 설정하지 않으면 "keep"으로 적용됩니다.

- filterstr 속성의 초기값은 DataSet이 생성될 때 filterstr 의 값으로 설정됩니다.

- filterstr 속성은 스크립트 등에 의해 사용 중 계속 변경이 발생할 수 있습니다.
  변경이 발생한 상태에서 트랜잭션 등을 사용하여 다시 로드하는 경우 filterstr 초기값이 적용된 것과는 다른 결과가 발생할 수 있습니다.
  만약, 데이터셋을 다시 로드할 때 filterstr 초기값이 적용되기를 원한다면 이 속성의 값을 'reset'으로 설정합니다.


---

### loadkeymode

> Data Objects > Dataset > Property > loadkeymode

**Description**

DataSet 에 데이터를 로드하거나 트랜잭션을 수행할 때 keystring 속성값의 적용방법을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.loadkeymode[= enumMode]
```

**Setting Syntax**

```javascript
enumMode ::= 'keep' | 'reset'
```
```javascript
this.Dataset00.loadkeymode = "keep";this.Dataset00.loadkeymode = "reset";
```
- **`"keep"`** — 데이터 로드 시 keystring 속성에 마지막으로 설정된 값이 적용됩니다.
- **`"reset"`** — 데이터 로드 시 keystring 속성에 디자인 시 설정된 값이 적용됩니다.

변경된 keystring 속성값은 무시되고 초기값이 적용됩니다.

**Remark**

- loadfiltermode 속성값을 설정하지 않으면 "keep"으로 적용됩니다.

- keystring 속성의 초기값은 DataSet 이 생성될 때 keystring 의 값으로 설정됩니다.

- keystring 속성은 스크립트 등에 의해 사용 중 계속 변경이 발생할 수 있습니다.
  변경이 발생한 상태에서 트랜잭션 등을 사용하여 다시 로드하는 경우 keystring 초기값이 적용된 것과는 다른 결과가 발생할 수 있습니다.
  만약, 데이터셋을 다시 로드할 때 keystring 초기값이 적용되기를 원한다면 이 속성의 값을 'reset'으로 설정합니다.


---

### name

> Data Objects > Dataset > Property > name

**Description**

Dataset 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### preload

> Data Objects > Dataset > Property > preload

**Description**

DataSet 의 url 속성을 설정한 경우 DataSet 에 데이터를 로드하는 시점을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.preload[= bPreload]
```

**Setting Syntax**

```javascript
bPreload ::= 'true' | 'false'
```
```javascript
this.Dataset00.preload = true;
```
- **`"true"`** — 화면이 로드되기 전에 DataSet 의 url 에 설정된 서비스로 데이터를 먼저 로드합니다.

Form 의 onload 이벤트가 발생하기 전에 DataSet 의 데이터가 로드됩니다.
- **`"false"`** — DataSet 의 url 에 설정된 서비스로 데이터를 자동으로 로드하지 않습니다.

데이터 로드를 하려면 DataSet 의 load() 메소드나 transaction() 메소드를 호출하여야 합니다.

**Remark**

- preload 속성값을 설정하지 않으면 "false"로 적용됩니다.


---

### progressload

> Data Objects > Dataset > Property > progressload

**Description**

서버로부터 데이터를 Chunked 방식으로 여러번에 걸쳐서 받을 경우에 대한 처리방법을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.progressload[= bPLoad]
```

**Setting Syntax**

```javascript
bPLoad ::= 'true' | 'false'
```
```javascript
this.Dataset00.progressload = true;
```
- **`true`** — Chunked 된 데이터가 수신되면 DataSet 에 데이터를 바로 로드합니다.

DataSet 에 데이터가 로드되면 onload 이벤트가 발생합니다.
- **`false`** — Chunked 된 데이터가 마지막까지 모두 수신되면 DataSet 에 데이터를 로드 합니다.

DataSet 에 데이터가 로드되면 onload 이벤트가 한번 발생합니다.

**Remark**

- progressload 속성값을 설정하지 않으면 false 로 적용됩니다.

- 성능 문제로 인하여 DataSet 에서 onload 가 발생하는 횟수는 Chunked 데이터가 로딩된 횟수와 다를 수 있습니다.
   또한, 브라우저에 따라 onload 이벤트가 발생하는 횟수가 달라질 수 있습니다.

- Chunked 된 데이터를 수신중에 onload 이벤트가 발생하면 DSLoadEventInfo 의 reason 속성값에 1 이 전달됩니다.
   데이터를 모두 수신하여 onload 이벤트가 발생하면 DSLoadEventInfo 의 reason 속성값에 0 이 전달됩니다.

- Chunked 된 첫번째 데이터를 수신하면 rowposition 속성값이 변경되고 onrowposchanged 이벤트가 발생합니다.
   이후 Chunked 된 나머지 데이터를 수신할 때는 rowposition 속성이 변경되지 않습니다.

◆ 제약

- 서버에서 받는 데이터 형식이 JSON인 경우에는 progressload 속성이 적용되지 않습니다.


---

### reversesubsum

> Data Objects > Dataset > Property > reversesubsum

**Description**

DataSet 이 keystring 속성에 의해 그룹핑 되었을 때 그룹소계가 표시될 위치를 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.reversesubsum[= bSubsum]
```

**Setting Syntax**

```javascript
bSubsum ::= 'true' | 'false'
```
```javascript
this.Dataset00.reversesubsum = true;
```
- **`"true"`** — 그룹 소계가 그룹의 첫번째 Row 위에 표시됩니다.
- **`"false"`** — 그룹 소계가 그룹의 마지막 Row 아래에 표시됩니다.

**Remark**

- reversesubsum 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- getGroupRangeStart() 메소드에 의해 반환되는 그룹 범위의 시작위치는 이 속성과 무관합니다.


---

### rowcount

> Data Objects > Dataset > Property > rowcount

**Description**

DataSet 에 로드된 데이터의 갯수를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Dataset.rowcount
```

**Setting Syntax**

```javascript
var n = this.Dataset00.rowcount;
```

**Remark**

- 필터링 되거나 삭제된 데이터(Row)는 제외됩니다.


---

### rowposition

> Data Objects > Dataset > Property > rowposition

**Description**

DataSet 에서 현재 선택된 데이터의 Row 인덱스를 갖는 속성입니다.

**Syntax**

```javascript
Dataset.rowposition[= nRow]
```

**Setting Syntax**

```javascript
this.Dataset00.rowposition = 1;
```
- **`nRow`** — DataSet 에 로드된 데이터 중 선택할 데이터의 Row 인덱스를 설정합니다.

첫번째 Row 의 인덱스는 0 입니다.

**Remark**

- DataSet 에 데이터가 없을 경우에는 -1 값을 갖습니다.

- rowposition 속성을 변경시키면 DataSet 에서 canrowposchange 이벤트가 발생합니다.
  만약 canrowposchange 이벤트의 반환값을 false 로 설정하면 rowposition 속성값을 변경하지 않습니다.
  canrowposchange 이벤트의 반환값을 true 로 설정하거나 반환값이 없는 경우에는 rowposition 속성값을 변경하고 onrowposchanged 이벤트가 발생합니다.

- Grid 의 selectype 속성값이 "row" 또는 "cell" 일 때 바인드 된 DataSet 의 rowposition 속성값을 변경하면 Grid 의 해당 Row 가 선택처리됩니다.

- Grid 의 selecttype 속성값이 "row", "cell" 이외의 값일 때는 바인드 된 DataSet 의 rowposition 속성값을 변경해도 Grid 의 선택이 변경되지 않고 기존값을 유지합니다.
   이 때, DataSet 의 rowposition 값과 Grid 에 표시된 선택의 위치가 달라지므로 사용에 주의하여야 합니다.


---

### saveinfinity

> Data Objects > Dataset > Property > saveinfinity

**Description**

DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 처리 방법을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.saveinfinity[= enumSave]
```

**Setting Syntax**

```javascript
enumSave ::= 'include' | 'exclude'
```
```javascript
this.Dataset00.saveinfinity = "exclude";
```
- **`"include"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 Infinity 값으로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 infinity 값으로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 infinity 값으로 처리합니다.
- **`"exclude"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 빈문자열("")로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 빈문자열("")로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 빈문자열("")로 처리합니다.

**Remark**

- saveinfinity 속성값을 설정하지 않으면 undefined 가 설정되고 Environment 의 datasetsaveinfinity 속성값으로 동작합니다.


---

### saveinvaliddate

> Data Objects > Dataset > Property > saveinvaliddate

**Description**

DataSet 에서 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 처리 방법을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.saveinvaliddate[= enumSave]
```

**Setting Syntax**

```javascript
enumSave ::= 'include' | 'exclude'
```
```javascript
this.Dataset00.saveinvaliddate = "include";
```
- **`"include"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 "Invalid Date" 문자열로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 "Invalid Date" 문자열로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 "Invalid Date" 문자열로 처리합니다.
- **`"exclude"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 빈문자열("")로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 빈문자열("")로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 빈문자열("")로 처리합니다.

**Remark**

- saveinvaliddate 속성값을 설정하지 않으면 undefined 가 설정되고 Environment 의 datasetsaveinvaliddate 속성값으로 동작합니다.


---

### savenan

> Data Objects > Dataset > Property > savenan

**Description**

DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 처리 방법을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.savenan[= enumSave]
```

**Setting Syntax**

```javascript
enumSave ::= 'include' | 'exclude'
```
```javascript
this.Dataset00.savenan = "include";
```
- **`"include"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 NaN 값으로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 NaN 값으로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 NaN 값으로 처리합니다.
- **`"exclude"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 빈문자열("")로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 빈문자열("")로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 빈문자열("")로 처리합니다.

**Remark**

- savenan 속성값을 설정하지 않으면 undefined 가 설정되고 Environment 의 datasetsavenan 속성값으로 동작합니다.


---

### serverdatasetid

> Data Objects > Dataset > Property > serverdatasetid

**Description**

DataSet 의 url 속성에 설정된 Business Service 를 통해 전달된 DataSet 중 실제 사용될 DataSet 의 ID를 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.serverdatasetid[= strDatasetID]
```

**Setting Syntax**

```javascript
this.Dataset00.serverdatasetid = "ds_sawon";
```
- **`strDatasetID`** — Business Service 를 통해 전달된 DataSet 중 실제로 사용할 DataSet 의 ID를 문자열로 설정합니다.

**Remark**

- DataSet 을 선택하기 위해서는 Business Service 에 기술되어 있는 DataSet ID를 지정해야 합니다.
  설정된 ID가 Business Service 내에 존재하지 않는다면 데이터가 로드되지 않습니다.


---

### updatecontrol

> Data Objects > Dataset > Property > updatecontrol

**Description**

DataSet 의 데이터가 Insert/Update/Delete 되었을 경우 각 RowType 을 자동으로 변경할 지 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.updatecontrol[= bUpdatecontrol]
```

**Setting Syntax**

```javascript
bUpdatecontrol ::= 'true' | 'false'
```
```javascript
this.Dataset00.updatecontrol = true;
```
- **`"true"`** — 변경된 데이터(Row)에 대해 RowType 을 자동으로 변경합니다.
- **`"false"`** — 변경된 데이터(Row)에 대해 RowType 을 자동으로 변경하지 않습니다.

**Remark**

- updatecontrol 속성값을 설정하지 않으면 true 로 적용됩니다.

- updatecontrol 속성값이 false 일 경우만 setRowType() 메소드를 사용할 수 있습니다.

- updatecontrol 속성값을 false 로 사용하다가 true 로 변경하면 DataSet 이 오동작 할 수 있습니다.
   따라서 updatecontrol 속성값의 변경은 true 에서 false 로만 변경해 사용하여야 합니다.


---

### url

> Data Objects > Dataset > Property > url

**Description**

DataSet 에 Business Service 를 연결하는 경우 해당 서비스의 경로(URL)을 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.url[= strUrl]
```

**Setting Syntax**

```javascript
strUrl ::= <absolute-url> | <relative-url>
```
```javascript
this.DataSet00.url = "http://localhost:8080/Prj/BService/Serv00.jsp";     // 절대경로
this.DataSet00.url = "../BService/Serv00.jsp";                                     // 상대경로this.DataSet00.url = "Service1::Serv00.jsp";                                         // TypeDefinition의 Services 경로
```
- **`<absolute-url>`** — Business Service 가 제공되는 경로를 "http://경로/서비스명", "https://경로/서비스명" 형식의 절대경로로 설정합니다.

웹에 접근 가능한 환경이어야 하고, Cross Domain 상황이면 사용에 제한이 있습니다.
- **`<relative-url>`** — TypeDefinition 영역의 Services 에 정의된 Prefix를 사용한 형식으로 설정합니다.

또는 현재 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- DataSet 의 preload 속성이 "false"로 설정되어도 DataSet 의 load() 메소드를 수행하면 url 속성값에 설정된 서비스로 DataSet 을 로드합니다.

- DataSet 에 데이터가 로드되면 DataSet 에서 onload 이벤트가 발생합니다.


◆ 서비스(Service Prefix)

- Business Service 를 호출하기 위해 공통되는 접근경로를 TypeDefinition 에 정의하고, 
  컴포넌트의 속성이나 스크립트에 TypeDefinition에 정의된 Preifx를 기술하여 경로 정보를 간단히 표현할 수 있는 기능입니다.


---

### useclientlayout

> Data Objects > Dataset > Property > useclientlayout

**Description**

트랜잭션을 수행하여 수신된 DataSet 의 Column Layout 을 적용할 지 설정하는 속성입니다.

**Syntax**

```javascript
Dataset.useclientlayout[= bUseclient]
```

**Setting Syntax**

```javascript
bUseclient ::= 'true' | 'false'
```
```javascript
this.Dataset00.useclientlayout = true;
```
- **`"true"`** — DataSet 에 정의된 레이아웃을 유지하고 수신된 데이터만 로드합니다.

서버로부터 수신받은 데이터 중 클라이언트 DataSet 에 존재하는 Column의 값들만 로드됩니다.
- **`"false"`** — 서버로부터 수신된 DataSet 의 레이아웃과 데이터를 모두 로드합니다.

클라이언트 DataSet 에 존재하던 레이아웃은 삭제됩니다.

**Remark**

- useclientlayout 속성값을 설정하지 않으면 "false" 로 적용됩니다.


---

### 메서드 (Methods)

### addColumn

> Data Objects > Dataset > Method > addColumn

**Description**

DataSet 에 Column 을 추가하는 메소드입니다.

**Syntax**

```javascript
Dataset.addColumn( strColID, strColType [,nColSize [, strDatapath]] )
```

**Parameters**

```
DataSet 에 추가할 Column 의 ID 를 문자열로 설정합니다.
```

**Return**

DataSet 에 추가된 Column 의 인덱스를 반환합니다.
만약, Column 의 추가에 실패하면 "-1" 을 반환합니다.

**Remark**

- Column 의 ID 생성 규칙은 JavaScript Id 생성규칙과 동일합니다.

- Column 의 추가에 성공하면 onrowsetchanged 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- Column 의 추가에 실패하면 onrowsetchanged 이벤트가 발생하지 않습니다.

- 넥사크로 스튜디오에서 Dataset 오브젝트의 dataobjectpath 속성을 선택하고 Data Path Editor를 실행하면 Json Contents에서 컬럼으로 추가할 항목을 선택하고 추가하면 datapath 속성값을 자동으로 설정합니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### addColumnInfo

> Data Objects > Dataset > Method > addColumnInfo

**Description**

DataSet 에서 ColumnInfo 객체를 사용하여 Column 을 추가하는 메소드입니다.

**Syntax**

```javascript
Dataset.addColumnInfo( strID, objColInfo )
```

**Parameters**

```
DataSet 에 추가할 Column 의 ID 를 문자열로 설정합니다.
```

**Return**

DataSet 에 추가된 Column 의 인덱스를 반환합니다.
만약, Column 의 추가에 실패하면 "-1" 을 반환합니다.

**Remark**

- ColumnInfo 객체는 Column 의 ID, Type, Size 정보를 갖습니다.

- Column 의 추가에 성공하면 onrowsetchanged 이벤트가 발생합니다.
  이 때 onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.
  만약, 실패하면 Event가 발생하지 않습니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### addConstColumn

> Data Objects > Dataset > Method > addConstColumn

**Description**

DataSet 에 Const Column(상수 컬럼)을 추가하는 메소드입니다.

**Syntax**

```javascript
Dataset.addConstColumn( strColID, varVal [, strColType [, nColSize [, strDatapath]]] )
```

**Parameters**

```
DataSet 에 추가할 Const Column 의 ID 를 문자열로 설정합니다.

설정한 값과 동일한 Const Column 이 이미 존재하면 해당 Const Column 의 값을 변경합니다.
```

**Return**

DataSet 에 추가된 Const Column 의 인덱스를 반환합니다.

Const Column 의 추가에 실패하면 -1 을 반환합니다.

**Remark**

- Const Column 추가에 성공하면 onrowsetchanged 이벤트가 발생합니다.
   이 때, onnrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- 넥사크로 스튜디오에서 Dataset 오브젝트의 dataobjectpath 속성을 선택하고 Data Path Editor를 실행하면 Json Contents에서 컬럼으로 추가할 항목을 선택하고 추가하면 datapath 속성값을 자동으로 설정합니다.
- varVal, strDatapath 파라미터가 같이 설정된 경우에는 varVal 파라미터 값은 무시합니다.


---

### addEvent

> Data Objects > Dataset > Method > addEvent

**Description**

Dataset 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
Dataset.addEvent( strEventID )
```

**Parameters**

```
Dataset 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- Dataset 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Data Objects > Dataset > Method > addEventHandler

**Description**

Dataset 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
Dataset.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 -1 을 반환합니다.


---

### addEventHandlerLookup

> Data Objects > Dataset > Method > addEventHandlerLookup

**Description**

함수를 검색하여 Dataset 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
Dataset.addEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
  검색된 함수가 있다면 이벤트에 핸들러 함수로 추가합니다.


---

### addRow

> Data Objects > Dataset > Method > addRow

**Description**

DataSet 의 마지막 Row 에 새로운 데이터(Row)를 추가하는 메소드입니다.

**Syntax**

```javascript
Dataset.addRow()
```

**Parameters**

var nRow = this.Dataset00.addRow();

**Return**

DataSet 에 추가된 Row 의 인덱스를 반환합니다.
만약, Row 의 추가에 실패하면 "-1" 을 반환합니다.

**Remark**

- DataSet 에 Column 이 정의되어 있지 않다면 메소드는 수행되지 않습니다.

- 새로운 Row 추가 후 onrowsetchanged → canrowposchange → onrowposchanged → onvaluechanged 순서로 이벤트가 발생됩니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_APPEND" 가 됩니다.

- updatecontrol 속성값이 "true"이면 추가된 Row 의 타입은 "ROWTYPE_INSERT"가 되고, "false"이면 "ROWTYPE_NORMAL" 이 됩니다.

- 새로운 Row 가 추가되면 rowposition 속성값이 추가된 Row로 변경되고 canrowposchange 이벤트가 발생합니다.
  canrowposchange 이벤트에서 "false"를 반환하면 rowposition 속성이 변경되지 않습니다.
  canrowposchange 이벤트에서 "true"를 반환하면 rowposition 속성이 변경되고 onrowposchanged 이벤트가 발생합니다.

**See Also**

Dataset.getRowTypeDataset.setRowTypeDSRowsetChangeEventInfo.reason


---

### append

> Data Objects > Dataset > Method > append

**Description**

인수로 전달된 서비스경로(URL)에서 데이터를 로드하여 현재 DataSet 의 마지막 Row 뒤에 추가하는 메소드입니다.

**Syntax**

```javascript
Dataset.append([strUrl])
```

**Parameters**

```
데이터를 로드하기 위한 서비스경로(URL)을 설정합니다.
허용되는 형식은 DataSet 의 url 속성을 참고하시기 바랍니다.

값을 설정하지 않을 경우 DataSet 의 url 속성값이 적용됩니다.
```

**Return**

없음

**Remark**

- 데이터 로드를 위한 통신 중 에러가 발생하면 Application 의 onerror 이벤트가 발생합니다.

- strUrl 값이 생략되었을 때 DataSet 의 url 속성값이 설정되어 있지 않으면 onload 이벤트가 발생하며 e.errorcode, e.errormsg 에 에러 내역이 전달됩니다.

- 데이터 로드에 성공하면 onload 이벤트가 발생하며 e.reason 속성값은 "REASON_APPEND" 가 됩니다.

- 데이터 추가 시 DataSet 상태에 따라 아래와 같이 동작합니다.

  1) 현재 DataSet 에 Column 정보가 없다면 추가할 DataSet 의 Column 정보가 현재 DataSet 에 복사되고 모든 데이터가 추가됩니다.
  2) 현재 DataSet 에 Column 정보가 있다면 추가할 DataSet 의 Column 명과 현재 DataSet 의 Column 명이 일치하는 Column 에만 데이터가 추가됩니다.

**See Also**

Dataset.url


---

### appendData

> Data Objects > Dataset > Method > appendData

**Description**

현재 Dataset 의 마지막 Row 다음에 지정한 Dataset 의 데이터(Row)를 추가하는 메소드입니다.

**Syntax**

```javascript
Dataset.appendData( objDataset [,bCheckCol [,bUpdateConstCol]] )
```

**Parameters**

```
추가될 데이터(Row)를 갖고 있는 DataSet 을 오브젝트로 설정합니다.
```

**Return**

새로 추가된 데이터를 포함하여 현재 Dataset 의 전체 Row 갯수를 반환합니다.

**Remark**

- appendData() 메소드는 bCheckCol, bUpdateConstCol 매개변수의 설정에 따라 아래와 같이 동작합니다.

  1) bUpdateConstCol 이 false 이고, bCheckCol 이 true 이면
      objDataset 과 현재 Dataset 의 Column ID 를 비교하여 같은 ID 를 가진 Column 에만 데이터를 추가합니다.
      만약 같은 ID 를 가진 Column 이 없으면 추가되지 않습니다.

  2) bUpdateConstCol 이 false 이고, bCheckCol 이 false 이면
      Column ID 와는 상관없이 Column 의 인덱스 순서에 따라 순차적으로 데이터를 추가합니다.

  3) bUpdateConstCol 이 true 이고, bCheckCol 이 true 이면
      objDataset 과 현재 Dataset 의 Const Column ID 를 비교하여 같은 ID 를 가진 Const Column 의 값을 변경합니다.
      만약 같은 ID 를 가진 Const Column 이 없으면 Const Column 의 값이 변경되지 않습니다.

  4) bUpdateConstCol 이 true 이고, bCheckCol 이 false 이면
      Const Column ID 와는 상관없이 Const Column 의 인덱스 순서에 따라 순차적으로 데이터를 추가합니다.


- 현재 Dataset 에 Const Column 을 포함한 어떤 Column 도 정의되어 있지 않으면 objDataset 의 모든 Column 이 추가됩니다.
   단, Const Column 은 bUpdateConstCol 속성값이 true 일 때만 추가됩니다.

- appendData() 메소드가 수행된 후에는 onrowsetchanged 이벤트가 발생합니다.
   이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_APPEND" 가 됩니다.

- appendData() 메소드는 rowposition 속성의 값을 변경하지 않습니다. 
   다만 메소드를 수행하기 전의 rowposition 속성값이 -1 인 경우는 rowposition 을 0 으로 변경하기 위해 canrowposchange 이벤트를 호출합니다.

- canrowposchange 이벤트에서 true 를 반환하면 새로운 Row 위치로 변경하고 onrowposchanged 이벤트가 호출됩니다.
   그러나 false 를 반환하면 rowposition 속성이 변경되지 않습니다.

- canrowposchange 이벤트는 onrowsetchanged 이벤트가 수행된 후 호출됩니다.

- keystring 또는 filterstr 속성으로 그룹핑/정렬/필터링 되어 있는 경우 appendData() 메소드 수행 후 자동으로 재적용되지 않습니다.
   따라서 그룹핑/정렬/필터링을 재적용하려면 updateSortGroup() 또는 filter() 메소드를 명시적으로 수행하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### applyChange

> Data Objects > Dataset > Method > applyChange

**Description**

DataSet 오브젝트의 Row의 타입을  "Dataset.ROWTYPE_NORMAL"로 바꾸는 메소드입니다.

**Syntax**

```javascript
Dataset.applyChange()
```

**Parameters**

this.Dataset00.applyChange();

**Return**

없음

**Remark**

- Row 의 타입을 "Dataset.ROWTYPE_NORMAL (1)"로 변경합니다.
  만약 특정한 Row 의 타입만 변경하려면 DataSet 의 setRowType() 메소드를 사용하시기 바랍니다.
  단, Row 의 타입이 다음과 같은 경우에는 "Dataset.ROWTYPE_NORMAL"로 변경되지 않고 현재 상태를 유지합니다.
  - Dataset.ROWTYPE_EMPTY (0)
  - Dataset.ROWTYPE_DELETE (8)
  - Dataset.ROWTYPE_GROUP (16)

- applyChange 메소드가 처리되고 onrowsetchanged 이벤트가 발생합니다.

**See Also**

Dataset.setRowType


---

### assign

> Data Objects > Dataset > Method > assign

**Description**

현재 DataSet 에 지정한 DataSet 의 Row, Column 정보와 모든 데이터를 부여하는 메소드입니다.

**Syntax**

```javascript
Dataset.assign( objDataset )
```

**Parameters**

```
Row, Column 정보와 모든 데이터를 가져올 DataSet 을 오브젝트로 설정합니다.
```

**Return**

현재 DataSet 에 부여된 Row 의 갯수를 반환합니다.

**Remark**

- assign() 메소드를 수행하면 대상 DataSet 의 모든 Row, Column 정보는 삭제됩니다.

- assign() 메소드는 수행 시 onrowsetchanged → canrowposchange → onrowposchanged → onvaluechanged 순서로 이벤트가 발생합니다.

- onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_ASSIGN" 가 됩니다.
  onrowsetchanged 이벤트가 수행된 후 rowposition 속성값은 "-1" 로 설정됩니다.

- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값을 "0"으로 설정하기 위해 canrowposchange 이벤트를 호출합니다.

- canrowposchange 이벤트에서 "false"를 반환하는 경우에는 rowposition 속성값은 변경되지 않습니다.
  canrowposchange 이벤트에서 "true"를 반환하는 경우에는 새로운 rowposition 속성값을 "0" 으로 변경하고 onrowposchanged 이벤트를 호출합니다.

- DataSet 의 Row, Column 정보를 제외한 필터, 그룹 정보 등은 부여되지 않습니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### clear

> Data Objects > Dataset > Method > clear

**Description**

DataSet 의 Row, Column 정보와 데이터를 모두 삭제하는 메소드입니다.

**Syntax**

```javascript
Dataset.clear()
```

**Parameters**

var nRowCnt = this.Dataset00.clear();

**Return**

삭제된 데이터(Row) 의 갯수를 반환합니다.

**Remark**

- clear() 메소드를 수행하면 현재 DataSet 의 모든 정보는 삭제되므로 reset() 메소드를 수행하여도 복구할 수 없습니다.
  만약, DataSet 의 데이터(Row) 만 삭제하려면 clearData() 메소드를 사용하시기 바랍니다.
  clearData() 메소드는 Column 정보는 삭제하지 않습니다.

- clear() 메소드의 수행이 완료되면 onrowsetchanged 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CLEAR" 가 됩니다.
- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값은 "-1" 로 설정됩니다. 
  rowposition 속성값이 "-1" 로 설정된 후 onrowposchanged 이벤트를 호출합니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### clearData

> Data Objects > Dataset > Method > clearData

**Description**

DataSet 의 Column 정보 이외에 모든 데이터(Row) 를 삭제하는 메소드입니다.

**Syntax**

```javascript
Dataset.clearData()
```

**Parameters**

var nRowCnt = this.Dataset00.clearData();

**Return**

삭제된 데이터(Row) 의 갯수를 반환합니다.

**Remark**

- clearData() 메소드가 수행되고 나면 모든 데이터(Row)가 제거되므로 reset() 메소드를 수행하여도 복구할 수 없습니다.
  만약, 다시 복구할 필요가 있다면 deleteAll() 메소드를 사용하시기 바랍니다.

- clearData() 메소드가 수행되면 onrowsetchanged 이벤트가 발생합니다. 
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CLEARDATA" 가 됩니다.
- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값은 "-1"이 됩니다.  
  rowposition 속성값이 "-1" 로 설정된 후 onrowposchanged 이벤트를 호출합니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### clearEventHandler

> Data Objects > Dataset > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
Dataset.clearEventHandler( strEventID )
```

**Parameters**

```
모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**

- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.


---

### copyData

> Data Objects > Dataset > Method > copyData

**Description**

현재 DataSet 에 지정한 DataSet 의 데이터(Row)를 복사하는 메소드입니다.

**Syntax**

```javascript
Dataset.copyData( objDataset [, bFilteredOnly] )
```

**Parameters**

```
복사할 데이터(Row)를 갖고 있는 DataSet 을 오브젝트로 설정합니다.
```

**Return**

복사된 데이터(Row) 의 갯수를 반환합니다.
복사된 데이터(Row) 가 없다면 "null" 을 반환합니다.

**Remark**

- copyData() 메소드를 수행하면 현재 DataSet 의 모든 Row, Column 정보는 삭제됩니다.
  DataSet 이 복사될 때 삭제된 데이터(Row)는 복사하지 않습니다.
  또한, copyData() 메소드를 수행하여 복사된 데이터(Row)의 타입은 "ROWTYPE_NORMAL" 가 됩니다.

- copyData() 메소드를 수행하면 onrowsetchanged → canrowposchange → onrowposchanged → onvaluechanged 순서로 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 상태값은 "REASON_COPY" 가 됩니다.

- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값을 "0" 으로 설정하기 위해 canrowposchange 이벤트를 호출합니다.

- canrowposchange 이벤트에서 "false" 를 반환하면 rowposition 속성이 변경되지 않습니다.
  그리고 "true" 를 반환하면 새로운 Row 의 위치로 변경하고 onrowposchanged 이벤트를 호출합니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### copyRow

> Data Objects > Dataset > Method > copyRow

**Description**

현재 Dataset 의 특정 데이터(Row)를 지정한 Dataset 의 데이터(Row)로 갱신하는 메소드입니다.

**Syntax**

```javascript
Dataset.copyRow( nToRow, objDataset, nFromRow [,strColInfo] )
```

**Parameters**

```
새로운 데이터로 갱신될 현재 DataSet 의 Row 인덱스를 설정합니다.
```

**Return**

메소드 수행에 성공하면 true 를 반환합니다.
메소드 수행에 실패하면 false 를 반환합니다.

**Remark**

- 복사할 Column 이 서로 다를 경우 복사될 Column 을 지정할 수 있습니다.
   매개변수인 strColInfo를 설정하면 지정된 Column 만 복사합니다.
   만약 Column 을 지정하지 않으면 같은 ID 를 가진 모든 Column 의 값을 복사합니다.

- copyRow() 메소드가 성공하면 oncolumnchanged 이벤트가 발생합니다.
   이 때, oncolumnchanged 이벤트의 DSColChangeEventInfo 객체 속성 중 Row 관련 속성만 유효합니다.

- updatecontrol 속성값이 true 이면 복사된 Row 의 타입은 "ROWTYPE_UPDATE" 가 되고, false 이면 "ROWTYPE_NORMAL" 가 됩니다.

- copyRow() 메소드는 지정된 위치의 Row 를 변경하므로, 복사하여 추가하기 위해서는 addRow() 메소드를 사용하여 새로운 Row 를 생성한 후 copyRow() 메소드를 수행해야 합니다.

- 매개변수인 nToRow 또는 nFromRow 에 undefined, null 등의 NaN 값을 입력하면 ECMA 정수 변환 규칙에 따라 0 이 되므로 주의하여야 합니다.

- nToRow가 현재 선택된 Row 인 경우 onvaluechanged 이벤트가 발생합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

**See Also**

DSColChangeEventInfo.row


---

### createDataset

> Data Objects > Dataset > Method > createDataset

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.createDataset( strDatasetID, arrColList [ , strWhereExpr [ , nStartIdx [ , nEndIdx ] ] ] )
```

**Parameters**

```
새로 생성될 Dataset 의 ID 를 설정합니다.
```

**Return**

설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환합니다.

Dataset 을 생성할 수 없는 경우에는 null 을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 createDatasetNF() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### createDatasetNF

> Data Objects > Dataset > Method > createDatasetNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.createDatasetNF( strDatasetID, arrColList [ , strWhereExpr [ , nStartIdx [ , nEndIdx ] ] ] )
```

**Parameters**

```
새로 생성될 Dataset 의 ID 를 설정합니다.
```

**Return**

설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환합니다.

Dataset 을 생성할 수 없는 경우에는 null 을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 createDataset() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### deleteAll

> Data Objects > Dataset > Method > deleteAll

**Description**

DataSet 의 모든 데이터(Row)를 삭제하는 메소드입니다.

**Syntax**

```javascript
Dataset.deleteAll()
```

**Parameters**

var nRowCnt = this.Dataset00.deleteAll();

**Return**

삭제된 데이터(Row) 의 갯수를 반환합니다.

**Remark**

- deleteAll() 메소드가 수행되면 모든 데이터가 삭제되므로 rowposition 속성값은 "-1" 이 됩니다.

- updatecontrol 속성값이 "true"이면 삭제된 Row 의 타입은 "ROWTYPE_DELETE"가 되고, "false"이면 원본 데이터가 삭제되므로 복구할 수 없습니다.

- deleteAll() 메소드가 성공하면 onrowsetchanged 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_DELETEALL" 가 됩니다.
- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값을 "-1" 로 설정합니다. 
  rowposition 속성값이 "-1" 로 설정된 후 onrowposchanged 이벤트를 호출합니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### deleteColumn

> Data Objects > Dataset > Method > deleteColumn

**Description**

DataSet 에서 지정한 Column 또는 Const Column 을 삭제하는 메소드입니다.

**Syntax**

```javascript
Dataset.deleteColumn(nCol)
Dataset.deleteColumn(strColID)
```

**Parameters**

```
삭제할 Column 의 인덱스를 설정합니다.
```

**Return**

Column 삭제에 성공하면 "true"를 반환합니다.
Column 삭제에 실패하면 "false"를 반환합니다.

**Remark**

- deleteColumn() 메소드는 원본 데이터를 삭제하기 때문에 updatecontrol 속성값이 "false"일 때만 동작합니다.
  만약 updatecontrol 속성값이 "true"면 지정한 Column 을 삭제하지 않습니다.

- 지정한 Column 이 삭제되면 onrowsetchanged 이벤트가 발생합니다.
  이때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- 만약, 모든 Column 이 삭제되었으면 rowposition 속성값은 "-1" 이 됩니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### deleteMultiRows

> Data Objects > Dataset > Method > deleteMultiRows

**Description**

배열로 된 Row 목록을 입력 받아 해당 Row 들을 삭제하는 메소드입니다.

**Syntax**

```javascript
Dataset.deleteMultiRows( arrRowlist );
```

**Parameters**

```
Row 인덱스값을 배열 형태로 설정합니다.
```

**Return**

없음

**Remark**

- Grid 의 getSelectedDatasetRows() 메소드 결과값을 인수로 사용할 수 있습니다.


---

### deleteRow

> Data Objects > Dataset > Method > deleteRow

**Description**

DataSet 에서 지정한 데이터(Row)를 삭제하는 메소드입니다.

**Syntax**

```javascript
Dataset.deleteRow(nRow)
```

**Parameters**

```
삭제할 데이터의 Row 인덱스 값을 설정합니다.
```

**Return**

데이터(Row) 삭제에 성공하면 "true" 를 반환합니다.
데이터(Row) 삭제에 실패하면 "false" 를 반환합니다.

**Remark**

- deleteRow() 메소드가 성공하면 onrowsetchanged 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_DELETE" 가 됩니다.
- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값이 변경됩니다.
- 마지막 위치의 Row가 삭제되었으면 rowposition 속성값은 새로운 마지막 Row 를 가리키게 됩니다.
  만약 모든 Row 가 삭제되었으면 rowposition 속성값은 "-1" 이 됩니다.
- rowposition의 변경상태에 관계없이 canrowposchange 이벤트는 발생하지 않고 onrowposchanged 이벤트가 발생합니다.

- updatecontrol 속성값이 "true" 인 경우에 삭제된 Row 의 타입은 "ROWTYPE_DELETE" 가 되고, "false" 인 경우에는 원본 데이터가 삭제되므로 복구할 수 없습니다.

- nRow에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### exchangeRow

> Data Objects > Dataset > Method > exchangeRow

**Description**

DataSet 에서 지정된 두 Row 의 위치(RowPosition)를 서로 바꾸는 메소드입니다.

**Syntax**

```javascript
Dataset.exchangeRow(nRow1,nRow2)
```

**Parameters**

```
위치를 교환할 첫번째 데이터의 Row 인덱스를 설정합니다.
```

**Return**

위치 교환에 성공하면 "true"를 반환합니다.
위치 교환에 실패하면 "false"를 반환합니다.

**Remark**

- exchangeRow() 메소드는 교환된 Row의 타입을 변경하지 않습니다.

- 성공하면 onrowsetchanged 이벤트가 각 Row 별로 두 번 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_EXCHANGE" 가 됩니다.

- nRow1, nRow2 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### extractRows

> Data Objects > Dataset > Method > extractRows

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.extractRows( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

- 조건표현식에 일치하는 Row의 인덱스 배열을 반환합니다.
  조건표현식에 일치하는 Row가 없는 경우 빈 배열을 반환합니다.

- 아래와 같은 경우에는 -1을 반환합니다.
  - 조건표현식에 문법적인 오류가 있는 경우
  - Dataset 오브젝트에 Row가 없는 경우
  - nEndIdx 값이 nStartIdx 값보다 크지 않은 경우

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
  필터링 된 Row 를 검색대상에 포함하려면 extractRowsNF 메서드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### extractRowsNF

> Data Objects > Dataset > Method > extractRowsNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.extractRowsNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

- 조건표현식에 일치하는 Row의 인덱스 배열을 반환합니다.
  조건표현식에 일치하는 Row가 없는 경우 빈 배열을 반환합니다.

- 아래와 같은 경우에는 -1을 반환합니다.
  - 조건표현식에 문법적인 오류가 있는 경우
  - Dataset 오브젝트에 Row가 없는 경우
  - nEndIdx 값이 nStartIdx 값보다 크지 않은 경우

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
  필터링 된 Row 를 검색대상에서 제외하려면 extractRows 메서드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### filter

> Data Objects > Dataset > Method > filter

**Description**

DataSet 에 로드된 데이터를 조건에 만족하는 데이터(Row) 만 보이게 필터링하는 메소드입니다.

**Syntax**

```javascript
Dataset.filter([strFilterExpr])
```

**Parameters**

```
DataSet 의 데이터가 필터링 될 조건을 문자열로 설정합니다.

빈 문자열("") 설정 시 필터링 조건이 해제됩니다.
값 생략 시 filterstr 속성값에 설정된 조건식을 사용합니다.
```

**Return**

없음

**Remark**

- filter() 메소드를 수행하면 DataSet 의 filterstr 속성값이 strFilterExpr 인자에 설정된 값으로 변경됩니다.
   strFilterExpr 인자값을 생략하면 filterstr 속성값이 filter() 메소드의 인자값으로 사용됩니다.

- filter() 메소드를 수행하면 onrowsetchanged 이벤트가 발생하며 e.reason 속성값은 "REASON_FILTER" 가 됩니다.

- filter() 메소드 수행 후 rowposition 속성값은 필터링하기 이전 값에 해당하는 위치로 이동하며, 만일 이전 값이 없으면 "-1"로 바뀝니다.

- 이미 필터링되어 있는 DataSet 에 filter() 메소드를 수행하면 전체 데이터에서 strFilterExpr 조건으로 다시 필터링됩니다.

- strFilterExpr 은 조건식의 수행결과가 "true" 또는 "false" 이어야 합니다.

- Grid 의 selecttype 속성값이 "row" 의 동작에 의한 필터링 후 currentrow 의 select 가 "true" 로 설정되면서 onrowsetchanged가 발생 합니다.
   이때 e.reason이 40(stat:row type [select])인것과 31(filter)인 것이 이어서 두번 발생되는데 이는 정상적인 동작입니다.
   그러나 Multi Select가 그리드에 의해 자동 재설정될 때는 DataSet select에 의한 이벤트가 발생 하지 않습니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### filterRow

> Data Objects > Dataset > Method > filterRow

**Description**

DataSet 에서 특정 Row 를 보이지 않게 필터링하는 메소드입니다.

**Syntax**

```javascript
Dataset.filterRow(nRow)
```

**Parameters**

```
필터링할 Row 의 인덱스를 설정합니다.
```

**Return**

없음

**Remark**

- filterRow() 메소드를 수행하면 onrowsetchanged 이벤트가 발생하며 e.reason 속성값은 "REASON_FILTER" 가 됩니다.
  만약, 필터링된 행을 다시 보이게 하려면 filter() 메소드를 참조하시기 바랍니다.

- nRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.


---

### findEventHandler

> Data Objects > Dataset > Method > findEventHandler

**Description**

Dataset 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 찾을 이벤트의 ID를 설정합니다.
```

**Return**

특정 이벤트에서 찾은 핸들러 함수의 인덱스를 반환합니다.

특정 이벤트에 찾으려는 핸들러 함수가 존재하지 않으면 -1 을 반환합니다.

**Remark**

- 핸들러 함수의 인덱스는 0 부터 시작합니다.


---

### findMaxLengthRow

> Data Objects > Dataset > Method > findMaxLengthRow

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 의 데이터 길이가 가장 긴 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findMaxLengthRow( strColID [ ,nStartIdx [ , nEndIdx] ] )
```

**Parameters**

```
Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다.
```

**Return**

특정 Column 값 중 데이터 길이가 가장 긴 Row 의 인덱스를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 findMaxLengthRowNF() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### findMaxLengthRowNF

> Data Objects > Dataset > Method > findMaxLengthRowNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 의 데이터 길이가 가장 긴 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findMaxLengthRowNF( strColID [ ,nStartIdx [ , nEndIdx] ] )
```

**Parameters**

```
Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다.
```

**Return**

특정 Column 값 중 데이터 길이가 가장 긴 Row 의 인덱스를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 findMaxLengthRow() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### findNFRowIndex

> Data Objects > Dataset > Method > findNFRowIndex

**Description**

필터링 된 DataSet 의 Row 인덱스를 필터링 되지 않은 DataSet 의 Row 인덱스로 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findNFRowIndex( nRowPos )
```

**Parameters**

```
필터링 된 DataSet 을 기준으로 한 Row 인덱스를 설정합니다.
```

**Return**

필터링되지 않은 데이터를 기준으로 한 Row 인덱스를 반환합니다.

잘못된 nRowPos 값을 인수로 전달했을 경우 -1 을 반환합니다.

**Remark**

- 필터링 된 DataSet 에서 특정 Row 가 갖는 인덱스값을 전달하면 해당 Row 가 필터링 되지 않은 원본 DataSet 에서 갖는 인덱스값을 반환합니다.

- 필터링 되지 않은 DataSet 에서는 전달된 값과 동일한 값을 반환합니다.


---

### findRow

> Data Objects > Dataset > Method > findRow

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달된 값과 일치하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findRow( strColID, strVal [ ,nStartIdx [ ,nEndIdx ] ] )
```

**Parameters**

```
Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다.
```

**Return**

전달된 값과 일치하는 데이터를 갖는 첫번째 Row 의 인덱스를 반환합니다.

만약 일치하는 데이터가 없을 경우에는 -1 을 반환합니다.
검색대상이 되는 Column 이 Const Column 인 경우 nStartIdx 값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 findRowNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### findRowAs

> Data Objects > Dataset > Method > findRowAs

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달된 값으로 시작되는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findRowAs( strColID, strVal, [ ,nStartIdx [ ,nEndIdx ] ] )
```

**Parameters**

```
Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다.
```

**Return**

전달된 값으로 시작되는 Column 값을 갖는 첫번째 Row 의 인덱스를 반환합니다.

만약 일치하는 데이터가 없을 경우에는 -1 을 반환합니다.
검색대상이 되는 Column 이 Const Column 인 경우 nStartIdx 값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 findRowAsNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### findRowAsNF

> Data Objects > Dataset > Method > findRowAsNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달된 값으로 시작되는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findRowAsNF( strColID, strVal, [ ,nStartIdx [ ,nEndIdx ] ] )
```

**Parameters**

```
Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다.
```

**Return**

전달된 값으로 시작되는 Column 값을 갖는 첫번째 Row 의 인덱스를 반환합니다.

만약 일치하는 데이터가 없을 경우에는 -1 을 반환합니다.
검색대상이 되는 Column 이 Const Column 인 경우 nStartIdx 값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 findRowAs() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### findRowExpr

> Data Objects > Dataset > Method > findRowExpr

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findRowExpr( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs] ] ])
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

주어진 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환합니다.

주어진 조건표현식을 만족하는 Row 가 없을 경우에는 -1 을 반환합니다.
주어진 조건표현식이 Const Column 을 대상으로 한 경우 nStartIdx 값을 반환합니다.

**Remark**

- findRowExpr() 메소드는 설정한 조건표현식을 만족하는 Row 를 찾아 그 중 첫번째 Row 의 인덱스를 반환합니다.

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 findRowExprNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### findRowExprNF

> Data Objects > Dataset > Method > findRowExprNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findRowExprNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs] ] ])
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

주어진 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환합니다.

주어진 조건표현식을 만족하는 Row 가 없을 경우에는 -1 을 반환합니다.
주어진 조건표현식이 Const Column 을 대상으로 한 경우 nStartIdx 값을 반환합니다.

**Remark**

- findRowExprNF() 메소드는 설정한 조건표현식을 만족하는 Row 를 찾아 그 중 첫번째 Row 의 인덱스를 반환합니다.

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 findRowExpr() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### findRowNF

> Data Objects > Dataset > Method > findRowNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달된 값과 일치하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.findRowNF( strColID, strVal [ ,nStartIdx [ ,nEndIdx ] ] )
```

**Parameters**

```
Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다.
```

**Return**

전달된 값과 일치하는 데이터를 갖는 첫번째 Row 의 인덱스를 반환합니다.

만약 일치하는 데이터가 없을 경우에는 -1 을 반환합니다.
검색대상이 되는 Column 이 Const Column 인 경우 nStartIdx 값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 findRow() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.


---

### getAvg

> Data Objects > Dataset > Method > getAvg

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getAvg( strExpr [ ,nStartIdx [ ,nEndIdx [ ,bExcludeNaN [ ,arrArgs ] ] ] ] )
```

**Parameters**

```
Dataset 에서 평균을 구할 Column 의 ID 또는 계산식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값의 평균값을 반환합니다.

평균값을 구할 수 없는 경우에는 NaN 값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getAvgNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getAvgNF

> Data Objects > Dataset > Method > getAvgNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getAvgNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,bExcludeNaN [ ,arrArgs ] ] ] ] )
```

**Parameters**

```
Dataset 에서 평균을 구할 Column 의 ID 또는 계산식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값의 평균값을 반환합니다.

평균값을 구할 수 없는 경우에는 NaN 값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getAvg() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getCaseAvg

> Data Objects > Dataset > Method > getCaseAvg

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseAvg( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,bExcludeNaN [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] ] )
```

**Parameters**

```
Dataset 에서 대상 Row 를 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값의 평균값을 반환합니다.

평균값을 구할 수 없는 경우에는 NaN 값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getCaseAvgNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getCaseAvgNF

> Data Objects > Dataset > Method > getCaseAvgNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseAvgNF( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,bExcludeNaN [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] ] )
```

**Parameters**

```
Dataset 에서 대상 Row 를 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값의 평균값을 반환합니다.

평균값을 구할 수 없는 경우에는 NaN 값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getCaseAvg() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getCaseCount

> Data Objects > Dataset > Method > getCaseCount

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 Row 의 전체 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseCount( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

주어진 조건표현식을 만족하는 Row 의 전체 갯수를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getCaseCountNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.


---

### getCaseCountNF

> Data Objects > Dataset > Method > getCaseCountNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 Row 의 전체 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseCountNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

주어진 조건표현식을 만족하는 Row 의 전체 갯수를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getCaseCount() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.


---

### getCaseMax

> Data Objects > Dataset > Method > getCaseMax

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseMax( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값 중 최대값을 반환합니다.

최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getCaseMaxNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strValExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strValExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getCaseMaxNF

> Data Objects > Dataset > Method > getCaseMaxNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseMaxNF( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값 중 최대값을 반환합니다.

최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getCaseMax() 메소드를 사용하여야 합니다..

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strValExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strValExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getCaseMin

> Data Objects > Dataset > Method > getCaseMin

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseMin( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값 중 최소값을 반환합니다.

최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getCaseMinNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strValExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strValExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getCaseMinNF

> Data Objects > Dataset > Method > getCaseMinNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseMinNF( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값 중 최소값을 반환합니다.

최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getCaseMin() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 일 때 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 일 때 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strValExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strValExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getCaseSum

> Data Objects > Dataset > Method > getCaseSum

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseSum( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값의 합계값을 반환합니다.

합계값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getCaseSumNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 합계값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getCaseSumNF

> Data Objects > Dataset > Method > getCaseSumNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 합계값를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCaseSumNF( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

```
Dataset 에서 검색할 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값의 합계값을 반환합니다.

합계값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getCaseSum() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 합계값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getColCount

> Data Objects > Dataset > Method > getColCount

**Description**

DataSet 에서 Const Column 을 포함한 전체 Column 의 갯수를 구하는 메소드입니다.

**Syntax**

```javascript
Dataset.getColCount()
```

**Parameters**

var nColCnt = this.Dataset00.getColCount();

**Return**

DataSet 에 정의된 전체 Column 의 갯수를 반환합니다.


---

### getColID

> Data Objects > Dataset > Method > getColID

**Description**

DataSet 에서 전달된 인덱스에 해당하는 Column 의 ID 를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getColID( nColIdx )
```

**Parameters**

```
ID 를 구하려는 Column 의 인덱스를 설정합니다.

Const Column 에 해당하는 인덱스를 설정할 수 있습니다.
```

**Return**

전달된 인덱스에 해당하는 Column 의 ID 를 반환합니다.

해당하는 Column 이 없을 경우에는 "undefined" 를 반환합니다.

**Remark**

- Column 의 인덱스값은 추가된 순서에 따라 0 부터 1 씩 증가합니다.

- getColID() 메소드는 일반 Column 과 Const Column 을 합한 인덱스를 사용합니다.
   Const Column 만으로 정의된 인덱스를 사용하여 Const Column 의 ID 를 구하려면 getConstColID() 메소드를 사용하여야 합니다.

- Const Column 은 일반 Column 다음에 순서대로 추가됩니다.
   따라서, Const Column 의 인덱스는 마지막 일반 Column 의 인덱스에서 순서대로 1씩 증가한 값을 갖습니다.

- nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.


---

### getColIndex

> Data Objects > Dataset > Method > getColIndex

**Description**

DataSet 에서 전달된 ID 에 해당하는 Column 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getColIndex( strColID )
```

**Parameters**

```
인덱스를 구하려는 일반 Column 또는 Const Column 의 ID 를 설정합니다.
```

**Return**

전달된 ID 에 해당하는 Column 의 인덱스를 반환합니다.

해당하는 Column 이 없을 경우에는 "-1" 을 반환합니다.

**Remark**

- Column 의 인덱스값은 추가된 순서에 따라 0 부터 1 씩 증가합니다.

- getColIndex() 메소드는 일반 Column 과 Const Column 을 합한 인덱스를 사용합니다.
   Const Column 만으로 정의된 인덱스를 구하려면 getConstColIndex() 메소드를 사용하여야 합니다.

- Const Column 은 일반 Column 다음에 순서대로 추가됩니다.
   따라서, Const Column 의 인덱스는 마지막 일반 Column 의 인덱스에서 순서대로 1씩 증가한 값을 갖습니다.


---

### getColumn

> Data Objects > Dataset > Method > getColumn

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 Row 와 Column 의 현재값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getColumn( nRow, nColIdx )
Dataset.getColumn( nRow, strColID )
```

**Parameters**

```
DataSet 에서 값을 구하려는 Row 의 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 "0" 입니다.
```

**Return**

지정한 Row 와 Column 의 현재값을 반환합니다.

지정한 Row 와 Column 이 존재하지 않으면 "undefined" 를 반환합니다.

**Remark**

- Const Column 과 일반 Column 의 값을 모두 구할 수 있습니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 의 Column 값도 구할 수 있습니다.

- keystring 속성을 사용하여 정렬한 경우, nRow 는 정렬된 순서를 가리킵니다.

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 getColumnNF() 메소드를 사용하여야 합니다.

- 매개변수인 nRow, nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.


---

### getColumnInfo

> Data Objects > Dataset > Method > getColumnInfo

**Description**

DataSet 에서 지정한 Column 의 ColumnInfo 객체를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getColumnInfo( nColIdx )
Dataset.getColumnInfo( strColName )
```

**Parameters**

```
대상 Column 의 인덱스를 설정합니다.
```

**Return**

지정한 인덱스 또는 ID 에 해당하는 Column 의 ColumnInfo 객체를 반환합니다.

지정한 인덱스 또는 ID 에 해당하는 Column 이 없을 경우에는 undefined 를 반환합니다.

**Remark**

- 인자값으로 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 으로 변환됩니다.
   사용 시 주의하시기 바랍니다.

**See Also**

ColumnInfo.size


---

### getColumnNF

> Data Objects > Dataset > Method > getColumnNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 Row 와 Column 의 현재값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getColumnNF( nRow, nColIdx )
Dataset.getColumnNF( nRow, strColID )
```

**Parameters**

```
DataSet 에서 값을 구하려는 Row 의 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 "0" 입니다.
```

**Return**

지정한 Row 와 Column 의 현재값을 반환합니다.

지정한 Row 와 Column 이 존재하지 않으면 "undefined" 를 반환합니다.

**Remark**

- Const Column 과 일반 Column 의 값을 모두 구할 수 있습니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 의 Column 값도 구할 수 있습니다.

- keystring 속성을 사용하여 정렬한 경우, nRow 는 정렬된 순서를 가리킵니다.

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 getColumn() 메소드를 사용하여야 합니다.

- 매개변수인 nRow, nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.


---

### getConstColID

> Data Objects > Dataset > Method > getConstColID

**Description**

DataSet 에서 전달된 인덱스에 해당하는 Const Column 의 ID 를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getConstColID( nColIdx )
```

**Parameters**

```
ID 를 구하려는 Const Column 의 인덱스를 설정합니다.
```

**Return**

전달된 인덱스에 해당하는 Const Column 의 ID 를 반환합니다.

해당하는 Const Column 이 없을 경우에는 "undefined" 를 반환합니다.

**Remark**

- Const Column 의 인덱스값은 추가된 순서에 따라 0 부터 1 씩 증가합니다.

- getConstColID() 메소드는 Const Column 만으로 정의된 인덱스를 사용합니다.
   일반 Column 과 Const Column 을 합한 인덱스를 사용하여 전체 Column 의 ID 를 구하려면 getColID() 메소드를 사용하여야 합니다.

- nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.


---

### getConstColIndex

> Data Objects > Dataset > Method > getConstColIndex

**Description**

DataSet 에서 전달된 ID 에 해당하는 Const Column 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getConstColIndex( strColID )
```

**Parameters**

```
인덱스를 구하려는 Const Column 의 ID 를 설정합니다.
```

**Return**

전달된 ID 에 해당하는 Const Column 의 인덱스를 반환합니다.

해당하는 Const Column 이 없을 경우에는 "-1" 을 반환합니다.

**Remark**

- Const Column 의 인덱스값은 추가된 순서에 따라 0 부터 1 씩 증가합니다.

- getConstColIndex() 메소드는 Const Column 만으로 정의된 인덱스를 반환합니다.
   일반 Column 과 Const Column 을 합한 인덱스를 구하려면 getColIndex() 메소드를 사용하여야 합니다.


---

### getConstColumn

> Data Objects > Dataset > Method > getConstColumn

**Description**

DataSet 에서 지정한 Const Column 의 값을 구하는 메소드입니다.

**Syntax**

```javascript
Dataset.getConstColumn(nColIdx)
Dataset.getConstColumn(strColID)
```

**Parameters**

```
DataSet 에서 값을 구하려는 Const Column 의 인덱스를 설정합니다.
```

**Return**

지정한 Const Column 의 값을 반환합니다.
만약, 지정한 Const Column 이 존재하지 않으면 "undefined"를 반환합니다.

**Remark**

- 매개변수인 nColIdx 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.


---

### getConstCount

> Data Objects > Dataset > Method > getConstCount

**Description**

DataSet 에 정의된 Const Column 의 갯수를 구하는 메소드입니다.

**Syntax**

```javascript
Dataset.getConstCount()
```

**Parameters**

var nConstCnt = this.Dataset00.getConstCount();

**Return**

DataSet 에 정의된 Const Column 의 갯수를 반환합니다.


---

### getCount

> Data Objects > Dataset > Method > getCount

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCount( [ strColID [ ,nStartIdx [ ,nEndIdx ] ] ] )
```

**Parameters**

```
데이터의 유무를 확인하려는 Column 의 ID 또는 인덱스를 설정합니다.
```

**Return**

특정 Column 의 값이 null 이 아닌 Row 의 갯수를 반환합니다.

Column 의 ID 나 인덱스를 설정하지 않으면 Row 의 전체 갯수를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getCountNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.


---

### getCountNF

> Data Objects > Dataset > Method > getCountNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getCountNF( [ strColID [ ,nStartIdx [ ,nEndIdx ] ] ] )
```

**Parameters**

```
데이터의 유무를 확인하려는 Column 의 ID 또는 인덱스를 설정합니다.
```

**Return**

특정 Column 의 값이 null 이 아닌 Row 의 갯수를 반환합니다.

Column 의 ID 나 인덱스를 설정하지 않으면 Row 의 전체 갯수를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getCount() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.


---

### getDeletedColumn

> Data Objects > Dataset > Method > getDeletedColumn

**Description**

DataSet 에서 삭제된 Row 중에서 지정된 Row 의 Column 값을 구하는 메소드입니다.

**Syntax**

```javascript
Dataset.getDeletedColumn(nRow,nColIdx)
Dataset.getDeletedColumn(nRow,strColID)
```

**Parameters**

```
삭제된 Row 중에서 값을 구하려는 Row 의 인덱스를 설정합니다.
```

**Return**

삭제된 Row 중에서 지정된 Row, Column 에 해당하는 값을 반환합니다.
해당하는 Row 나 Column 이 존재하지 않는 경우에는 "undefined"를 반환합니다.

**Remark**

- getDeletedColumn() 메소드는 삭제된 Row 중에서 지정된 Row 의 Column 에 해당하는 값을 구할 수 있습니다.
  단, updatecontrol 속성값이 "true" 일 경우 삭제된 Row 만을 대상으로 합니다.


---

### getDeletedRowCount

> Data Objects > Dataset > Method > getDeletedRowCount

**Description**

Dataset 오브젝트에서 삭제된 Row의 개수를 구하는 메서드입니다.

**Syntax**

```javascript
Dataset.getDeletedRowCount()
```

**Parameters**

var nRowCnt = this.Dataset00.getDeletedRowCount();

**Return**

Dataset 오브젝트에서 삭제된 Row의 개수를 반환합니다.

**Remark**

- Dataset 오브젝트의 updatecontrol 속성값이 true로 설정된 경우 Row를 삭제해 Row 타입이 Dataset.ROWTYPE_DELETE(8)로 변경된 Row가 대상입니다.
getDeletedRowset 메서드 실행 시 반환되는 배열의 length 속성값과 같습니다.


---

### getDeletedRowset

> Data Objects > Dataset > Method > getDeletedRowset

**Description**

Dataset 오브젝트에서 삭제된 전체 Row를 배열로 반환하는 메서드입니다.

**Syntax**

```javascript
Dataset.getDeletedRowset()
```

**Parameters**

var objArr = this.Dataset00.getDeletedRowset();

**Return**

삭제된 전체 Row의 내용을 배열 오브젝트로 반환합니다.

**Remark**

- Dataset 오브젝트의 updatecontrol 속성값이 true로 설정된 경우 Row를 삭제해 Row 타입이 Dataset.ROWTYPE_DELETE(8)로 변경된 Row가 대상입니다.

- 반환값은 [Row][Column] 형식의 2차원 배열입니다.
  예를 들어 0번째 index Row, 1번째 index Column 데이터는 아래와 같은 형태로 접근할 수 있습니다.
  this.Dataset.getDeletedRowset()[0][1]


◆ addRow, insertRow 메서드

- addRow, insertRow 메서드를 실행해 추가한 Row를 삭제한 경우에는 추가 작업이 취소되며 데이터가 삭제되기 때문에 getDeletedRowset 메서드 실행 시 반환되는 배열에 포함되지 않습니다.

- addRow, insertRow 메서드 실행 후 applyChange 메서드를 실행한 경우에는 Row 타입이 Dataset.ROWTYPE_NORMAL(1)로 변경되며 그 후 해당 Row를 삭제하면 Row 타입이 Dataset.ROWTYPE_DELETE(8)로 처리되기 때문에 getDeletedRowset 메서드 실행 시 반환되는 배열에 포함됩니다.


---

### getEventHandler

> Data Objects > Dataset > Method > getEventHandler

**Description**

Dataset 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getGroupRangeCount

> Data Objects > Dataset > Method > getGroupRangeCount

**Description**

DataSet 이 그룹화되어 있을 때 그룹정보를 포함하고 있는 Row 가 참조한 Row 의 갯수를 구하는 메소드입니다.

**Syntax**

```javascript
Dataset.getGroupRangeCount(nRow)
```

**Parameters**

```
대상 Row 의 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 "0" 입니다.
```

**Return**

그룹소계 Row 의 참조 대상이 된 Row 의 갯수를 반환합니다.
만약, 지정한 Row 가 존재하지 않으면 "0" 을 반환합니다.

**Remark**

- DataSet 이 그룹화되어 있을 경우 그룹 정보를 포함하고 있는 Row 가 참조하는 Row 의 갯수를 반환합니다.
  만약, 지정한 Row 가 그룹 정보를 포함하고 있는 Row 가 아니면 "1" 을 반환합니다.
  그룹화에 대해서는 keystring 속성을 참조하시기 바랍니다.

- getGroupRangeStart() 메소드와 함께 사용하여 참조 대상이 된 Row 의 범위를 구할 수 있습니다.

- nRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**

Dataset.getGroupRangeStart


---

### getGroupRangeStart

> Data Objects > Dataset > Method > getGroupRangeStart

**Description**

DataSet 이 그룹화되어 있을 때 그룹정보를 포함하고 있는 Row 가 참조한 Row 의 시작 인덱스를 구하는 메소드입니다.

**Syntax**

```javascript
Dataset.getGroupRangeStart(nRow)
```

**Parameters**

```
대상 Row 의 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 "0" 입니다.
```

**Return**

그룹소계 Row 의 참조 대상이 된 Row 의 시작 인덱스를 반환합니다.
지정한 Row 가 그룹 정보를 포함하고 있는 Row 가 아닐 경우에는 Row 의 인덱스를 반환합니다.
만약, 지정한 Row 가 존재하지 않으면 "-1" 을 반환합니다.

**Remark**

- getRroupRangeStart() 메소드는 DataSet 이 그룹화되어 있을 경우 그룹 정보를 포함하고 있는 Row 가 참조하는 Row 의 시작위치를 구합니다.
  만약, 지정한 Row 가 그룹 정보를 포함하고 있는 Row 가 아니면 지정한 Row 의 인덱스를 반환합니다.
  그룹화에 대해서는 keystring 속성을 참조하시기 바랍니다.

- getGroupRangeCount() 메소드와 함께 사용하여 참조 대상이 된 Row 의 범위를 구할 수 있습니다.

- 매개변수인 nRow에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**

Dataset.getGroupRangeCount


---

### getMax

> Data Objects > Dataset > Method > getMax

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getMax( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

```
Dataset 에서 최대값을 구할 Column 의 ID 또는 계산식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrValArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값 중 최대값을 반환합니다.

최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getMaxNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getMaxNF

> Data Objects > Dataset > Method > getMaxNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getMaxNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

```
Dataset 에서 최대값을 구할 Column 의 ID 또는 계산식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrValArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값 중 최대값을 반환합니다.

최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getMax() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getMin

> Data Objects > Dataset > Method > getMin

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getMin( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

```
Dataset 에서 최소값을 구할 Column 의 ID 또는 계산식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrValArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값 중 최소값을 반환합니다.

최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getMinNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getMinNF

> Data Objects > Dataset > Method > getMinNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getMinNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

```
Dataset 에서 최소값을 구할 Column 의 ID 또는 계산식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrValArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값 중 최소값을 반환합니다.

최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getMin() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getOrgColumn

> Data Objects > Dataset > Method > getOrgColumn

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 Row 와 Column 의 초기값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getOrgColumn( nRow ,nColIdx )
Dataset.getOrgColumn( nRow ,strColID )
```

**Parameters**

```
초기값을 구하려는 Row 의 인덱스를 설정합니다.
```

**Return**

지정한 Row 와 Column 의 초기값을 반환합니다.

지정한 Row 와 Column 이 존재하지 않으면 undefined 를 반환합니다.

**Remark**

- 초기값은 transaction(), load() 와 같은 메소드를 사용하여 DataSet 에 처음으로 설정된 값을 의미합니다.

- 지정한 Row 가 수정되지 않았으면(Row 의 타입값이 "ROWTYPE_NORMAL"이면) 현재값을 반환합니다.
   지정한 Row 가 추가된 Row 인 경우(Row 의 타입값이 "ROWTYPE_INSERT"이면) 현재값을 반환합니다.

- updatecontrol 속성이 false 인 경우는 데이터를 변경하여도 Row 의 타입값이 "ROWTYPE_NORMAL" 로 유지됩니다.
   타입값이 "ROWTYPE_NORMAL" 인 Row 는 변경되지 않은 것으로 처리되어 초기값을 구할 수 없으므로 현재값을 반환합니다.

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 getOrgColumnNF() 메소드를 사용하여야 합니다.

- Const Column 이나 그룹정보를 포함하고 있는 논리적 Row 에 대한 초기값은 구할 수 없습니다.

- 매개변수인 nRow, nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 되므로 사용 시 주의하여야 합니다.


---

### getOrgColumnNF

> Data Objects > Dataset > Method > getOrgColumnNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 Row 와 Column 의 초기값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getOrgColumnNF( nRow ,nColIdx )
Dataset.getOrgColumnNF( nRow ,strColID )
```

**Parameters**

```
초기값을 구하려는 Row 의 인덱스를 설정합니다.
```

**Return**

지정한 Row 와 Column 의 초기값을 반환합니다.

지정한 Row 와 Column 이 존재하지 않으면 undefined 를 반환합니다.

**Remark**

- 초기값은 transaction(), load() 와 같은 메소드를 사용하여 DataSet 에 처음으로 설정된 값을 의미합니다.

- 지정한 Row 가 수정되지 않았으면(Row 의 타입값이 "ROWTYPE_NORMAL"이면) 현재값을 반환합니다.
   지정한 Row 가 추가된 Row 인 경우(Row 의 타입값이 "ROWTYPE_INSERT"이면) 현재값을 반환합니다.
  
- updatecontrol 속성이 "false" 인 경우는 데이터를 변경하여도 Row 의 타입값이 "ROWTYPE_NORMAL" 로 유지됩니다.
   타입값이 "ROWTYPE_NORMAL" 인 Row 는 변경되지 않은 것으로 처리되어 초기값을 구할 수 없으므로 현재값을 반환합니다.

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 getOrgColumn() 메소드를 사용하여야 합니다.

- Const Column 이나 그룹정보를 포함하고 있는 논리적 Row 에 대한 초기값은 구할 수 없습니다.

- 매개변수인 nRow, nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 되므로 사용 시 주의하여야 합니다.


---

### getRowCount

> Data Objects > Dataset > Method > getRowCount

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 Row 의 전체 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowCount()
```

**Parameters**

var nRowCount = this.Dataset00.getRowCount();

**Return**

DataSet 에서 Row 의 전체 갯수를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 갯수에서 제외합니다.
   필터링 된 Row 를 갯수에 포함하려면 getRowCountNF() 메소드를 사용하여야 합니다.

- 삭제된 Row 는 갯수에서 제외합니다.


---

### getRowCountNF

> Data Objects > Dataset > Method > getRowCountNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 Row 의 전체 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowCountNF()
```

**Parameters**

var nRowCount = this.Dataset00.getRowCountNF();

**Return**

DataSet 에서 Row 의 전체 갯수를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 갯수에 포함합니다.
   필터링 된 Row 를 갯수에서 제외하려면 getRowCount() 메소드를 사용하여야 합니다.

- 삭제된 Row 는 갯수에서 제외합니다.


---

### getRowLevel

> Data Objects > Dataset > Method > getRowLevel

**Description**

DataSet 이 그룹화되어 있을 경우에 지정한 Row 의 레벨을 구하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowLevel(nRow)
```

**Parameters**

```
대상 Row 의 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 "0" 입니다.
```

**Return**

DataSet 에서 지정한 Row 의 레벨값을 반환합니다.
만약 지정한 Row 가 없으면 "0" 을 반환합니다.

**Remark**

- 지정한 Row 가 그룹 정보를 포함하고 있는 Row (즉, ROWTYPE_GROUP 타입의 Row)가 아니면 "0" 을 반환합니다.
  그렇지않고 keystring 속성에서 하나 또는 여러 개의 키를 사용하여 그룹화된 경우 ROW_GROUP 타입의 Row 의 레벨은 "1" 이상입니다.

- 매개변수인 nRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.


---

### getRowsAvg

> Data Objects > Dataset > Method > getRowsAvg

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 % Row 의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsAvg( arrRows, strColExpr [ ,bExcludeNaN [ ,arrArgs ] ] )
```

**Parameters**

```
평균값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

특정 Row 의 Column 값 또는 계산값의 평균값을 반환합니다.

평균값을 구할 수 없는 경우에는 POSITIVE_INFINITY 값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getRowsAvgNF() 메소드를 사용하여야 합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getRowsAvgNF

> Data Objects > Dataset > Method > getRowsAvgNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsAvgNF( arrRows, strColExpr [ ,bExcludeNaN [ ,arrArgs ] ] )
```

**Parameters**

```
평균값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

특정 Row 의 Column 값 또는 계산값의 평균값을 반환합니다.

평균값을 구할 수 없는 경우에는 POSITIVE_INFINITY  값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getRowsAvg() 메소드를 사용하여야 합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getRowsCount

> Data Objects > Dataset > Method > getRowsCount

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 중 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsCount( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

```
특정 Column 의 데이터 유무를 확인할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

전달된 Row 에서 특정 Column 의 값이 null 이 아닌 Row 의 갯수를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getRowsCountNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.


---

### getRowsCountNF

> Data Objects > Dataset > Method > getRowsCountNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 중 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsCountNF( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

```
특정 Column 의 데이터 유무를 확인할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

전달된 Row 에서 특정 Column 의 값이 null 이 아닌 Row 의 갯수를 반환합니다.

* datatyperule 속성값이 "2.0" 인 경우 undefined, null, EmptyString(""), NaN, "invalid date" 를 제외한 Row 의 갯수를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getRowsCount() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.


---

### getRowsMax

> Data Objects > Dataset > Method > getRowsMax

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsMax( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

```
최대값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

전달된 Row 에서 Column 값 또는 계산값 중 최대값을 반환합니다.

최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getRowsMaxNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strColExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strColExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getRowsMaxNF

> Data Objects > Dataset > Method > getRowsMaxNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsMaxNF( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

```
최대값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

전달된 Row 에서 Column 값 또는 계산값 중 최대값을 반환합니다.

최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getRowsMaxNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strColExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strColExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getRowsMin

> Data Objects > Dataset > Method > getRowsMin

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsMin( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

```
최소값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

전달된 Row 에서 Column 값 또는 계산값 중 최소값을 반환합니다.

최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getRowsMinNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strColExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strColExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getRowsMinNF

> Data Objects > Dataset > Method > getRowsMinNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsMinNF( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

```
최소값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

전달된 Row 에서 Column 값 또는 계산값 중 최소값을 반환합니다.

최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getRowsMin() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strColExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strColExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.


---

### getRowsSum

> Data Objects > Dataset > Method > getRowsSum

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsSum( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

```
합계값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

전달된 Row 에서 Column 값 또는 계산값의 합계값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getRowsSumNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getRowsSumNF

> Data Objects > Dataset > Method > getRowsSumNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowsSumNF( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

```
합계값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다.
```

**Return**

전달된 Row 에서 Column 값 또는 계산값의 합계값을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getRowsSum() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getRowType

> Data Objects > Dataset > Method > getRowType

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정된 Row 의 타입을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowType( nRow )
```

**Parameters**

```
대상 Row 의 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 "0" 입니다.
```

**Return**

DataSet 에서 지정된 Row 의 타입을 반환합니다.

지정한 Row 가 존재하지 않으면 "ROWTYPE_EMPTY" 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 getRowTypeNF() 메소드를 사용하여야 합니다.

- Row 의 타입은 다음과 같습니다.

	
		Constant
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	

 
- nRow  에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.


---

### getRowTypeNF

> Data Objects > Dataset > Method > getRowTypeNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정된 Row 의 타입을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getRowTypeNF( nRow )
```

**Parameters**

```
대상 Row 의 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 "0" 입니다.
```

**Return**

DataSet 에서 지정된 Row 의 타입을 반환합니다.

지정한 Row 가 존재하지 않으면 "ROWTYPE_EMPTY" 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 getRowType() 메소드를 사용하여야 합니다..

- Row 의 타입은 다음과 같습니다.

	
		Constant
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	

 
- nRow  에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.


---

### getSum

> Data Objects > Dataset > Method > getSum

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getSum( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

```
Dataset 에서 합계를 구할 Column 의 ID 또는 계산식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값의 합계값을 반환합니다.

합계값을 구할 수 없는 경우에는 0 을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getSumNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 합계값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.


---

### getSumNF

> Data Objects > Dataset > Method > getSumNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.getSumNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

```
Dataset 에서 합계를 구할 Column 의 ID 또는 계산식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

특정 Column 값 또는 계산값의 합계값을 반환합니다.

합계값을 구할 수 없는 경우에는 0 을 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getSum() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 합계값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.


---

### insertEventHandler

> Data Objects > Dataset > Method > insertEventHandler

**Description**

Dataset 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
Dataset.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 삽입될 이벤트의 ID 를 설정합니다.
```

**Return**

이벤트에 삽입된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.

핸들러 함수가 정상적으로 삽입되지 않은 경우에는 -1 을 반환합니다.

**Remark**

- 첫번째 핸들러 함수의 인덱스는 0 입니다.


---

### insertRow

> Data Objects > Dataset > Method > insertRow

**Description**

DataSet 에서 지정된 Row 의 위치에 새로운 Row 를 삽입하는 메소드입니다.

**Syntax**

```javascript
Dataset.insertRow(nRow)
```

**Parameters**

```
삽입할 위치의 Row 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 "0" 입니다.
```

**Return**

DataSet 에 삽입된 Row 의 인덱스를 반환합니다.
만약, Row 의 삽입에 실패하면 "-1" 을 반환합니다.

**Remark**

- Row 를 삽입하기 전에 하나 이상의 Column 이 정의되어 있어야 합니다.
  지정한 삽입 위치가 전체 Row 의 개수보다 크거나 같으면 맨 끝에 새 Row 를 추가합니다.

- 그룹 소계 Row 를 선택하여 삽입하면 해당 그룹의 맨 끝에 추가됩니다.
  만약, 선택한 그룹 하위의 데이터가 그룹이면 새로운 그룹을 추가하고 추가된 그룹에 삽입합니다.

- insertRow() 메소드를 수행하면 onrowsetchanged → canrowposchange → onrowposchanged → onvaluechanged  순서로 이벤트가 발생합니다.
  이때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_APPEND" 가 됩니다.

- 만약 updatecontrol 속성이 "true"인 경우에는 추가된 Row 의 타입은 "ROWTYPE_INSERT"가 되고, "false"이면 "ROWTYPE_NORMAL"이 됩니다.

- Row 의 타입들은 다음과 같습니다.

	
		Constant
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	


- nRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### load

> Data Objects > Dataset > Method > load

**Description**

DataSet 의 url 속성에 설정된 Business Service 에서 데이터를 로드하는 메소드입니다.

**Syntax**

```javascript
Dataset.load( [bAsync [, bBinary]] )
```

**Parameters**

```
true 설정 시 비동기(Async)로 데이터를 로드합니다.
false 설정 시 동기(Sync)로 데이터를 로드합니다.

값 생략 시 true 로 적용됩니다.
```

**Return**

없음

**Remark**

- 만약, 현재 DataSet 이 다른 DataSet 정보를 포함하고 있었다면 이전의 DataSet 정보는 삭제됩니다.

- load() 메소드로 로딩된 데이터가 없거나 정상적으로 완료되지 않으면 onload 이벤트가 발생하지 않습니다.
   load() 메소드로 데이터 로딩이 정상적으로 완료되면 onload 이벤트가 발생하며
   onload 이벤트의 e.reason 속성은 "REASON_LOAD", e.errorcode 속성은 0 값을 갖습니다.

- DataSet 의 url 속성값을 설정하지 않고 load() 메소드를 실행한 경우 onload 이벤트는 발생하지만 
   onload 이벤트의 e.errorcode 속성은 -1, e.errormsg 속성은 "empty url" 값을 갖습니다.

- load() 메소드 실행 시 serverdatasetid 속성에 설정된 DataSet 이 유효하다면 아래의 경우 데이터가 로드되고 onload 이벤트가 발생할 수 있습니다.
   > 수신된 에러코드가 음수이지만 Environment 의 datasetloadtype 속성값이 "errorallow" 인 경우
   > 데이터가 로딩중 중단되어 일부 데이터만 파싱되었지만 수신된 에러코드가 0 이상 인 경우


◆ Get/Post 방식 관련 참고사항

1. strArgument 와 strInDatasets 이 "" 이고, Environment 의 Cookies 영역에 변수가 없으면 GET 방식으로 동작합니다.

2. strArgument 나 strInDatasets 에 값이 있거나 Environment 의 Cookies 영역에 변수가 있으면 POST로 동작합니다.

3. 위 1번의 상태에서 addcookietovariable 값이 true 이면 서버와의 첫 통신시에는 GET 방식으로 동작하고 이후부터는 서버에서 유입되는
    Cookie 의 유무에 따라 Cookie 가 있으면 POST 없으면 GET 방식으로 동작합니다.
    (addcookietovariable 값이 true 이면 Cookie가 Environment 의 Cookies 영역에 변수로 자동 추가 되기 때문.)

**See Also**

DSLoadEventInfo.errorcodeDSLoadEventInfo.reason


---

### loadBIN

> Data Objects > Dataset > Method > loadBIN

**Description**

DataSet 에 Binary 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**

```javascript
Dataset.loadBIN(varBinData)
```

**Parameters**

```
Binary 형식으로 만들어진 데이터를 설정합니다.
```

**Return**

Dataset 에 로드된 데이터의 갯수를 반환합니다.

**Remark**

- 만약, 현재 Dataset 이 다른 Dataset 정보를 포함하고 있었다면 이전의 Dataset 정보는 Clear 됩니다.
   Dataset 의 id 속성값은 변경되지 않습니다.

- loadBIN 메서드가 실행될 때 onload Event가 발생합니다. 
   이 때, e.reason 속성값은 "REASON_LOAD" 가 됩니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.


---

### loadCSV

> Data Objects > Dataset > Method > loadCSV

**Description**

DataSet 에 CSV 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**

```javascript
Dataset.loadCSV(varCsvData[,bClear])
```

**Parameters**

```
CSV 형식으로 만들어진 데이터를 설정합니다.

"Dataset:Dataset_id" 형식으로 시작하며, Column 정보를 헤더로 가지는 CSV 데이터를 설정해야 합니다.
"Dataset_id" 와 "Column Infos" 는 CR/LF 또는 LF 로 구분합니다.
```

**Return**

DataSet 에 로드된 데이터의 갯수를 반환합니다.

**Remark**

- loadCSV() 메소드를 수행하면 onload 이벤트가 발생합니다.
   두 번째 인수 bClear가 true 이면 e.reason 속성값은 "REASON_LOAD"가 되고, false 이면 "REASON_APPEND"가 됩니다.

- bClear 가 false 인 경우 Dataset 에 새로 입력받은 데이터를 추가합니다.
   데이터를 추가할 때 Dataset 에 추가될 데이터의 Column 이 없는 경우 Column 을 생성한 후 데이터를 추가합니다. 
   id 속성은 변경되지 않습니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.

- 멀티바이트 문자를 처리하기 위해서는 이진(Binary) 형태로 저장된 CSV 데이터를 인수로 설정해야 합니다.

- CSV/SSV에서 "UTF-8" 만 지원합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.


---

### loadFromDataObject

> Data Objects > Dataset > Method > loadFromDataObject

**Description**

binddataobject, dataobjectpath 속성에 설정된 값을 Dataset 오브젝트에 즉시 반영시키는 메소드입니다.

**Syntax**

```javascript
DataObject00.loadFromDataObject()
```

**Return**

없음

**Remark**

- DataObject 오브젝트의 data 속성값을 직접 수정하는 경우 수정된 값을 Dataset에 반영하기 위해 사용합니다.


---

### loadJSON

> Data Objects > Dataset > Method > loadJSON

**Description**

Dataset 오브젝트에 JSON 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**

```javascript
Dataset.loadJSON(strJsonData[,bClear]])
```

**Parameters**

```
JSON 형식으로 만들어진 데이터를 설정합니다.
```

**Return**

DataSet 에 로드된 데이터의 갯수를 반환합니다.

**Remark**

- loadJSON() 메소드를 수행하면 onload 이벤트가 발생합니다. 
   두 번째 인수 bClear가 true 이면 e.reason 속성값은 "REASON_LOAD"가 되고, false 이면 "REASON_APPEND"가 됩니다.

- bClear 가 false 인 경우 Dataset 오브젝트에 새로 입력받은 데이터를 추가합니다.
   데이터를 추가할 때 Dataset 오브젝트에 추가될 데이터의 Column 이 없는 경우 Column 을 생성한 후 데이터를 추가합니다. 
   id 속성은 변경되지 않습니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.


---

### loadSSV

> Data Objects > Dataset > Method > loadSSV

**Description**

DataSet 에 SSV 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**

```javascript
Dataset.loadSSV ( varSsvData [,bClear] )
```

**Parameters**

```
SSV 형식으로 만들어진 데이터를 설정합니다.
```

**Return**

DataSet 에 로드된 데이터의 갯수를 반환합니다.

**Remark**

- loadSSV() 메소드를 수행하면 onload 이벤트가 발생합니다.
   두 번째 인수 bClear가 true 이면 e.reason 속성값은 "REASON_LOAD"가 되고, false 이면 "REASON_APPEND"가 됩니다.

- bClear 가 false 인 경우 Dataset 에 새로 입력받은 데이터를 추가합니다.
   데이터를 추가할 때 Dataset 에 추가될 데이터의 Column 이 없는 경우 Column 을 생성한 후 데이터를 추가합니다. 
   id 속성은 변경되지 않습니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.

- 멀티바이트 문자를 처리하기 위해서는 이진(Binary) 형태로 저장된 SSV 데이터를 인수로 설정해야 합니다.

- CSV/SSV 에서 "UTF-8" 만 지원합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.


---

### loadXML

> Data Objects > Dataset > Method > loadXML

**Description**

DataSet 에 XML 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**

```javascript
Dataset.loadXML(strXmlData[,bClear]])
```

**Parameters**

```
XML 형식으로 만들어진 데이터를 설정합니다.
```

**Return**

DataSet 에 로드된 데이터의 갯수를 반환합니다.

**Remark**

- loadXML() 메소드를 수행하면 onload 이벤트가 발생합니다. 
   두 번째 인수 bClear가 true 이면 e.reason 속성값은 "REASON_LOAD"가 되고, false 이면 "REASON_APPEND"가 됩니다.

- bClear 가 false 인 경우 Dataset 에 새로 입력받은 데이터를 추가합니다.
   데이터를 추가할 때 Dataset 에 추가될 데이터의 Column 이 없는 경우 Column 을 생성한 후 데이터를 추가합니다. 
   id 속성은 변경되지 않습니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.


---

### lookup

> Data Objects > Dataset > Method > lookup

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달값과 일치하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.lookup( varCol, varCmpVal, strOutputColID [ ,arrArgs ] )
```

**Parameters**

```
DataSet 에서 varCmpVal 값과 비교할 Column 의 ID, Index 또는 조건표현식을 설정합니다.

"$ + 숫자" 형식의 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

주어진 조건에 만족하는 첫번째 Row 의 지정된 Column 값을 반환합니다.

값을 구할 수 없을 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 lookupNF() 메소드를 사용하여야 합니다.

- lookup() 메소드는 Column 값과 전달된 값이 일치하는 Row 를 찾습니다.
   Column 값이 전달된 값으로 시작하는 Row 를 찾기 위해서는 lookupAs() 메소드를 사용하여야 합니다.

- 검색 결과가 여러개 있을 경우에는 첫 번째 Row 에서 지정된 Column 의 값을 구합니다.


---

### lookupAs

> Data Objects > Dataset > Method > lookupAs

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달값으로 시작하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.lookupAs( varCol, varCmpVal, strOutputColID [ ,arrArgs ] )
```

**Parameters**

```
DataSet 에서 varCmpVal 값과 비교할 Column 의 ID, Index 또는 조건표현식을 설정합니다.

"$ + 숫자" 형식의 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

주어진 조건에 만족하는 첫번째 Row 의 지정된 Column 값을 반환합니다.

값을 구할 수 없을 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 lookupAsNF() 메소드를 사용하여야 합니다.

- lookupAs() 메소드는 Column 값이 전달된 값으로 시작하는 Row 를 찾습니다.
   Column 값과 전달된 값이 일치하는 Row 를 찾기 위해서는 lookup() 메소드를 사용하여야 합니다.

- 검색 결과가 여러개 있을 경우에는 첫 번째 Row 에서 지정된 Column 의 값을 구합니다.


---

### lookupAsNF

> Data Objects > Dataset > Method > lookupAsNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달값으로 시작하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.lookupAsNF( varCol, varCmpVal, strOutputColID [ ,arrArgs ] )
```

**Parameters**

```
DataSet 에서 varCmpVal 값과 비교할 Column 의 ID, Index 또는 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

주어진 조건에 만족하는 첫번째 Row 의 지정된 Column 값을 반환합니다.

값을 구할 수 없을 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 lookupAs() 메소드를 사용하여야 합니다.

- lookupAsNF() 메소드는 Column 값이 전달된 값으로 시작하는 Row 를 찾습니다.
   Column 값과 전달된 값이 일치하는 Row 를 찾기 위해서는 lookupNF() 메소드를 사용하여야 합니다.

- 검색 결과가 여러개 있을 경우에는 첫 번째 Row 에서 지정된 Column 의 값을 구합니다.


---

### lookupNF

> Data Objects > Dataset > Method > lookupNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달값과 일치하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.lookupNF( varCol, varCmpVal, strOutputColID [ ,arrArgs ] )
```

**Parameters**

```
DataSet 에서 varCmpVal 값과 비교할 Column 의 ID, Index 또는 조건표현식을 설정합니다.

"$ + 숫자" 형식으로 치환문을 사용할 수 있습니다.
치환문은 arrArgs 에 정의된 값으로 치환됩니다.
```

**Return**

주어진 조건에 만족하는 첫번째 Row 의 지정된 Column 값을 반환합니다.

값을 구할 수 없을 경우에는 undefined 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 lookup() 메소드를 사용하여야 합니다.

- lookupNF() 메소드는 Column 값과 전달된 값이 일치하는 Row 를 찾습니다.
   Column 값이 전달된 값으로 시작하는 Row 를 찾기 위해서는 lookupAsNF() 메소드를 사용하여야 합니다.

- 검색 결과가 여러개 있을 경우에는 첫 번째 Row 에서 지정된 Column 의 값을 구합니다.


---

### mergeData

> Data Objects > Dataset > Method > mergeData

**Description**

현재 Dataset 에 지정한 Dataset 을 통합하는 메소드입니다.

**Syntax**

```javascript
Dataset.mergeData( objDataset )
```

**Parameters**

```
현재 Dataset 에 통합할 Dataset 을 오브젝트로 설정합니다.
```

**Return**

메소드 수행 후 Dataset 의 Row 갯수를 반환합니다.

**Remark**

- mergeData() 메소드를 호출하면 기존 Dataset 의 마지막 부분에 합치려는 Dataset 의 모든 Row 가 추가됩니다.

- 합쳐질 Dataset 과 기존 Dataset 에서 서로 같은 Column ID 에 한해서만 Row 가 합쳐집니다.
   다른 Column 의 ID 값은 무시되고, Const Column 값은 변경되지 않습니다.

- mergeData() 메소드의 수행이 완료되면 Dataset 의 onrowsetchanged 이벤트가 발생합니다.
   이때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_MERGE" 가 됩니다.
   rowposition 속성값은 변경되지 않습니다. 
   다만 메소드를 수행하기 전의 rowposition 속성값이 -1 인 경우는 rowposition 을 0 으로 변경하기 위해 canrowposchange 이벤트를 호출합니다.

- canrowposchange 이벤트에서 true 를 반환하면 새로운 Row 위치로 변경하고 onrowposchanged 이벤트가 호출됩니다.
   그러나 false 를 반환하면 rowposition 속성이 변경되지 않습니다.

- canrowposchange 이벤트는 onrowsetchanged 이벤트가 수행된 후 호출됩니다.

- keystring 또는 filterstr 속성으로 그룹핑/정렬/필터링 되어 있는 경우 mergeData() 메소드 수행 후 자동으로 재적용되지 않습니다.
   따라서 그룹핑/정렬/필터링을 재적용하려면 updateSortGroup() 또는 filter() 메소드를 명시적으로 수행하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### moveRow

> Data Objects > Dataset > Method > moveRow

**Description**

DataSet 에서 지정한 Row 를 특정 위치로 이동하는 메소드입니다.

**Syntax**

```javascript
Dataset.moveRow(nOldRow,nNewRow)
```

**Parameters**

```
위치를 이동하려고 하는 Row 의 현재 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 "0" 입니다.
```

**Return**

Row 이동에 성공하면 새로운 위치의 Row 인덱스를 반환합니다.
Row 이동에 실패하면 "-1" 을 반환합니다.

**Remark**

- moveRow() 메소드를 수행하면 DataSet 의 onrowsetchanged 이벤트가 발생되며 e.reason 상태값은 "REASON_MOVE" 가 됩니다.

- 매개변수인 nOldRow가 nNewRow보다 큰 경우에는 nOldRow와 nNewRow사이의 Row 들은 하나씩 아래로 이동합니다.
  nOldRow가 nNewRow보다 작은 경우에는 nOldRow와 nNewRow사이의 Row 들은 하나씩 위로 이동합니다.
  이동된 RowType은 변경되지 않습니다.

- nOldRow,nNewRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용시 주의하시기 바랍니다.


---

### removeEvent

> Data Objects > Dataset > Method > removeEvent

**Description**

Dataset 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
Dataset.removeEvent( strEventID )
```

**Parameters**

```
Dataset 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- Dataset 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- Dataset 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Data Objects > Dataset > Method > removeEventHandler

**Description**

Dataset 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Dataset.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 1 을 반환합니다.

핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### removeEventHandlerLookup

> Data Objects > Dataset > Method > removeEventHandlerLookup

**Description**

Dataset 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Dataset.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 1 을 반환합니다.

핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### reset

> Data Objects > Dataset > Method > reset

**Description**

DataSet 의 데이터를 마지막 저장 상태로 복구하는 메소드입니다.

**Syntax**

```javascript
Dataset.reset()
```

**Parameters**

this.Dataset00.reset();

**Return**

없음

**Remark**

- updatecontrol 속성값이 "false" 일 경우 Insert, Delete, Update 된 데이터는 복구되지 않습니다.

- reset() 메소드가 수행되면 onload 이벤트가 발생합니다.
  이 때, onload 이벤트의 e.reason 속성값은 "REASON_RESET" 가 됩니다.

- rowposition 속성값은 변경되지 않습니다.
  단, rowposition의 값이 reset() 메소드 수행 후의 Row 개수보다 크거나 같으면 rowposition 속성값은 "0" 이 됩니다.

- applyChange() 메소드가 수행된 후에 변경 작업이 이루어 졌을 때, reset() 메소드를 호출하면 초기 로드되었던 DataSet 의 상태로 되돌리는게 아니라 applyChange() 메소드를 통해 적용된 DataSet 의 최종 상태로 되돌립니다.


---

### saveBIN

> Data Objects > Dataset > Method > saveBIN

**Description**

DataSet 의 데이터를 Binary 형식으로 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.saveBIN( [strID [, strSaveType [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]]] )
```

**Parameters**

```
Binary 형식의 파일 내부에 정의될 DataSet ID 를 설정합니다.
실제 DataSet ID 와 저장 시 사용할 ID 를 다르게 사용할 때 설정합니다.

값 생략 시 현재 DataSet 의 ID 가 적용됩니다.
```

**Return**

DataSet 의 데이터를 Binary 형식으로 변환한 문자열을 반환합니다.

**Remark**

- Binary 파일포맷은 Column 정보 및 데이터를 XML이 아닌 Binary 행태로 가집니다.

- Binary 파일로 저장하고자 할때에는 File을 Binary 형태로 Open 하여 Binary 로 저장해야 합니다.

- 저장된 Binary 파일의 데이타는 LoadBIN() 메소드를 사용하여 DataSet 에 로드할 수 있습니다.


---

### saveCSV

> Data Objects > Dataset > Method > saveCSV

**Description**

DataSet 의 데이터를 CSV 형식으로 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.saveCSV( [strID [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]] )
```

**Parameters**

```
CSV 형식의 파일 내부에 정의될 DataSet ID 를 설정합니다.
실제 DataSet ID 와 저장 시 사용할 ID 를 다르게 사용할 때 설정합니다.

값 생략 시 현재 DataSet 의 ID가 적용됩니다.
```

**Return**

DataSet 의 데이터를 CSV 형식으로 변환한 문자열을 반환합니다.

**Remark**

- CSV는 Column 정보를 헤더로 갖는 포맷입니다.

- CSV 파일로 저장하고자 할 경우에는 파일을 Binary 형태로 열어 Binary 형태로 저장해야 한글 등의 멀티바이트코드가 보존됩니다.

- 저장된 CSV 파일을 로드하고자 할 경우에는 loadCSV() 메소드를 사용합니다.

- CSV 로 저장하는 경우에는 "Normal" 타입으로만 가능합니다.

- CSV/SSV 에서 "UTF-8" 만 지원합니다.

- Const Column 은 CSV 형식으로 저장되지 않습니다.


---

### saveJSON

> Data Objects > Dataset > Method > saveJSON

**Description**

Dataset 오브젝트의 데이터를 JSON 형식으로 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.saveJSON( [strID [, strSaveType [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]]] )
```

**Parameters**

```
JSON 형식의 파일 내부에 정의될 Dataset 오브젝트 ID를 설정합니다.
실제 Dataset 오브젝트 ID와 저장 시 사용할 ID를 다르게 사용할 때 설정합니다.

값 생략 시 현재 Dataset 오브젝트의 ID가 적용됩니다.
```

**Return**

Dataset 오브젝트의 데이터를 JSON 형식으로 변환한 문자열을 반환합니다.


---

### saveSSV

> Data Objects > Dataset > Method > saveSSV

**Description**

DataSet 의 데이터를 SSV 형식으로 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.saveSSV( [strID [, strSaveType [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]]] )
```

**Parameters**

```
SSV 형식의 파일 내부에 정의될 DataSet ID 를 설정합니다.
실제 DataSet ID 와 저장 시 사용할 ID 를 다르게 사용할 때 설정합니다.

값 생략 시 현재 DataSet 의 ID가 적용됩니다.
```

**Return**

DataSet 의 데이터를 SSV 형식으로 변환한 문자열을 반환합니다.

**Remark**

- 매개변수인 strSaveType은 4가지 종류 중 하나로 설정할 수 있습니다.
  (View 타입을 제외한 나머지 타입은 필터링된 레코드를 포함합니다. 
  그리고 물리적으로 데이터가 들어가 있는 순서대로 문자열로 변환됩니다)

    1) Normal 타입인 경우에는 Insert, Update된 레코드를 포함합니다.
       레코드별 열의 형태는 원래 데이터셋 구성과 같습니다.

    2) All 타입인 경우에는 Insert, Update, Delete된 모든 레코드를 포함합니다. 
       Record 태그에 Type 속성(attribute)이 추가되어 있습니다.
       Insert된 레코드는 Type이 Insert, Update된 레코드는 Type이 Update, Delete된 레코드는 Type이 Delete로 표현됩니다.
       그리고 Update된 레코드는 Org_Record 태그가 추가되어 있어 변경사항을 알 수 있습니다.

    3) Update 타입인 경우에는 변경된 레코드만 포함합니다.
       Record 태그에 Type 속성이 추가되어 있습니다.
       Insert된 레코드는 Type이 Insert, Update된 레코드는 Type이 Update, Delete된 레코드는 Type이 Delete로 표현됩니다.
       그리고 Update된 레코드는 Org_Record 태그가 추가되어 있어 변경사항을 알 수 있습니다.

    4) View 타입인 경우에는 현재 보이는 레코드 순서대로 Normal 형식으로 저장해 줍니다.


---

### saveXML

> Data Objects > Dataset > Method > saveXML

**Description**

DataSet 의 데이터를 XML 형식으로 반환하는 메소드입니다.

**Syntax**

```javascript
Dataset.saveXML( [strID [, strSaveType [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]]] )
```

**Parameters**

```
XML 형식의 파일 내부에 정의될 DataSet ID 를 설정합니다.
실제 DataSet ID 와 저장 시 사용할 ID 를 다르게 사용할 때 설정합니다.

값 생략 시 현재 DataSet 의 ID가 적용됩니다.
```

**Return**

DataSet 의 데이터를 XML 형식으로 변환한 문자열을 반환합니다.

**Remark**

- 저장시 XML의 인코딩은 "utf-8" 형식으로 합니다.

- 매개변수인 strSaveType은 4가지 종류 중 하나로 설정할 수 있습니다.
  (View 타입을 제외한 나머지 타입은 필터링된 레코드를 포함합니다. 
  그리고 물리적으로 데이터가 들어가 있는 순서대로 문자열로 변환됩니다)

    1) Normal 타입인 경우에는 Insert, Update된 레코드를 포함합니다.
       레코드별 열의 형태는 원래 데이터셋 구성과 같습니다.

    2) All 타입인 경우에는 Insert, Update, Delete된 모든 레코드를 포함합니다. 
       Record 태그에 Type 속성(attribute)이 추가되어 있습니다.
       Insert된 레코드는 Type이 Insert, Update된 레코드는 Type이 Update, Delete된 레코드는 Type이 Delete로 표현됩니다.
       그리고 Update된 레코드는 Org_Record 태그가 추가되어 있어 변경사항을 알 수 있습니다.

    3) Update 타입인 경우에는 변경된 레코드만 포함합니다.
       Record 태그에 Type 속성이 추가되어 있습니다.
       Insert된 레코드는 Type이 Insert, Update된 레코드는 Type이 Update, Delete된 레코드는 Type이 Delete로 표현됩니다.
       그리고 Update된 레코드는 Org_Record 태그가 추가되어 있어 변경사항을 알 수 있습니다.

    4) View 타입인 경우에는 현재 보이는 레코드 순서대로 Normal 형식으로 저장해 줍니다.


---

### setColumn

> Data Objects > Dataset > Method > setColumn

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값을 변경하는 메소드입니다.

**Syntax**

```javascript
Dataset.setColumn( nRow, nColIdx, varVal )
Dataset.setColumn( nRow, strColID, varVal )
```

**Parameters**

```
값을 변경하려는 Column 의 Row 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 0 입니다.
```

**Return**

Column 값 변경에 성공하면 true 를 반환합니다.

Column 값 변경에 실패하면 false 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 변경 대상에서 제외합니다.
   필터링 된 Row 를 변경 대상에 포함하려면 setColumnNF() 메소드를 사용하여야 합니다.

- setColumn() 메소드는 특정 Row 에 Column 이 존재하는 경우에만 정상적으로 실행됩니다.
   새로운 Row 를 추가하려면 addRow() 또는 InsertRow() 메소드를 사용하여야 합니다.

- nRow 에 설정한 인덱스값이 유효할 경우 setColumn() 메소드로 Const Column 의 값을 변경할 수 있습니다.

- keystring 속성을 사용하여 그룹화한 경우 그룹정보를 가진 논리적 Row 의 Column 값은 변경할 수 없습니다.

- setColumn() 메소드로 Column 값이 변경되면 cancolumnchange → oncolumnchanged 순서로 이벤트가 발생합니다.
   단, 기존 Column 값과 동일한 값을 설정하면 변경처리가 되지 않으므로 이벤트가 발생하지 않습니다.

- cancolumnchange 이벤트에서 false 를 리턴하면 oncolumnchanged 이벤트가 발생하지 않으며 
   Column 값이 변경되지 않으므로 setColumn() 메소드도 false 를 반환합니다.

- nRow, nColIdx 에 undefined, null 와 같은 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 일 때 유효하지 않은 값을 설정하면 Column 값이 변경되지 않고 false 를 반환합니다.


---

### setColumnNF

> Data Objects > Dataset > Method > setColumnNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값을 변경하는 메소드입니다.

**Syntax**

```javascript
Dataset.setColumnNF( nRow, nColIdx, varVal )
Dataset.setColumnNF( nRow, strColID, varVal )
```

**Parameters**

```
값을 변경하려는 Column 의 Row 인덱스를 설정합니다.

첫번째 Row 의 인덱스값은 0 입니다.
```

**Return**

Column 값 변경에 성공하면 true 를 반환합니다.

Column 값 변경에 실패하면 false 를 반환합니다.

**Remark**

- 필터링 되어 보이지 않는 Row 는 변경 대상에 포함합니다.
   필터링 된 Row 를 변경 대상에서 제외하려면 setColumn() 메소드를 사용하여야 합니다.

- setColumnNF() 메소드는 특정 Row 에 Column 이 존재하는 경우에만 정상적으로 실행됩니다.
   새로운 Row 를 추가하려면 addRow() 또는 InsertRow() 메소드를 사용하여야 합니다.

- nRow 에 설정한 인덱스값이 유효할 경우 setColumnNF() 메소드로 Const Column 의 값을 변경할 수 있습니다.

- keystring 속성을 사용하여 그룹화한 경우 그룹정보를 가진 논리적 Row 의 Column 값은 변경할 수 없습니다.

- setColumnNF() 메소드로 Column 값이 변경되면 cancolumnchange → oncolumnchanged 순서로 이벤트가 발생합니다.
   단, 기존 Column 값과 동일한 값을 설정하면 변경처리가 되지 않으므로 이벤트가 발생하지 않습니다.

- cancolumnchange 이벤트에서 false 를 리턴하면 oncolumnchanged 이벤트가 발생하지 않으며 
   Column 값이 변경되지 않으므로 setColumnNF() 메소드도 false 를 반환합니다.

- nRow, nColIdx 에 undefined, null 와 같은 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 일 때 유효하지 않은 값을 설정하면 Column 값이 변경되지 않고 false 를 반환합니다.


---

### setConstColumn

> Data Objects > Dataset > Method > setConstColumn

**Description**

DataSet 에 정의된 Const Column 의 상수값을 변경하는 메소드입니다.

**Syntax**

```javascript
Dataset.setConstColumn(nColIdx,varVal)
Dataset.setConstColumn(strColID,varVal)
```

**Parameters**

```
값을 변경할 Const Column 의 인덱스를 설정합니다.
```

**Return**

상수값 변경에 성공하면 true 를 반환합니다.
상수값 변경에 실패하면 false 를 반환합니다.

**Remark**

- setConstColumn() 메서드가 호출되면 Dataset 오브젝트에서 다음과 같이 이벤트가 발생합니다. 
  cancolumnchange 이벤트에서 true를 반환하면 oncolumnchanged 이벤트가 발생합니다. 
  cancolumnchange 이벤트에서 false를 반환하면 값은 변경되지 않으므로 oncolumnchanged 이벤트가 발생하지 않습니다. 
  이때, setConstColumn() 메서드의 반환값도 false 가 됩니다. 
  같은 값으로 변경하면 변경처리가 되지 않으므로 Dataset 오브젝트의 이벤트가 발생하지 않습니다. 

- nColIdx에 undefined, null 등의 NaN 값을 입력하면 ECMA 정수 변환 규칙에 따라 0이 되므로 주의해야 합니다.


---

### setContents

> Data Objects > Dataset > Method > setContents

**Description**

Dataset 의 내부 구성 컨텐츠를 동적으로 설정하는 메소드입니다.

**Syntax**

```javascript
Dataset.setContents( strContents );
```

**Parameters**

```
Dataset 의 내부 구성 컨텐츠 정보를 XML 형태의 문자열로 설정합니다.

"<ColumnInfo> ... </ColumnInfo> <Rows> ... </Rows>" 형태로 ColumnInfo 와 Rows 태그를 포함하여 설정하여야 합니다.
```

**Return**

컨텐츠 생성에 성공하면 true 를 반환합니다.
컨텐츠 생성에 실패하면 false 를 반환합니다.

문자열 파싱 중 오류가 발생하거나 잘못된 태그(오타 포함) 정의에 의해 오류가 발생할 경우 컨텐츠 생성에 실패하게 됩니다.

**Remark**

- setContents() 메소드는 동기(Sync)로 수행되며 메소드 수행이 완료될 때까지 스크립트 수행이 중단됩니다.

- 컨텐츠 생성에 성공하면 기존의 Column 정보와 데이터(Row)는 삭제되고 strCont 에 설정한 컨텐츠가 Dataset 에 로드됩니다.


---

### setEventHandler

> Data Objects > Dataset > Method > setEventHandler

**Description**

Dataset 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
Dataset.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.

첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**

- 인덱스가 0 번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.


---

### setEventHandlerLookup

> Data Objects > Dataset > Method > setEventHandlerLookup

**Description**

Dataset 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
Dataset.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.

첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**

- 인덱스가 0 번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.


---

### setRowType

> Data Objects > Dataset > Method > setRowType

**Description**

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 타입값을 변경하는 메소드입니다.

**Syntax**

```javascript
Dataset.setRowType( nRow, nRowType )
Dataset.setRowType( nRow, strRowType )
```

**Parameters**

```
타입을 변경할 Row 의 인덱스를 설정합니다.
```

**Return**

타입 변환에 성공하면 "true" 를 반환합니다.
타입 변환에 실패하면 "false"를 반환합니다.

**Remark**

- setRowType() 메소드는 updatecontrol 속성값이 "false" 일 때만 동작합니다.
   updatecontrol 속성이 "true" 이면 setRowType() 메소드는 항상 "false" 를 반환합니다.

- 필터링 되어 보이지 않는 Row 는 변경대상에서 제외합니다.
   필터링 된 Row 를 변경대상에 포함하려면 setRowTypeNF() 메소드를 사용하여야 합니다.

- setRowType() 메소드로 Row  의 타입을 변경하면 onrowsetchanged 이벤트가 발생합니다.
   이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGESTATUS"가 됩니다.

- nRowType 또는 strRowType 에는 다음과 같은 값을 지정할 수 있습니다.

	
		Constant
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	


- 매개변수인 nRow 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

**See Also**

Dataset.setRowTypeNF


---

### setRowTypeNF

> Data Objects > Dataset > Method > setRowTypeNF

**Description**

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 타입값을 변경하는 메소드입니다.

**Syntax**

```javascript
Dataset.setRowTypeNF( nRow, nRowType )
Dataset.setRowTypeNF( nRow, strRowType )
```

**Parameters**

```
타입을 변경할 Row 의 인덱스를 설정합니다.
```

**Return**

타입 변환에 성공하면 "true" 를 반환합니다.
타입 변환에 실패하면 "false"를 반환합니다.

**Remark**

- setRowTypeNF() 메소드는 updatecontrol 속성값이 "false" 일 때만 동작합니다.
   updatecontrol 속성이 "true" 이면 setRowTypeNF() 메소드는 항상 "false" 를 반환합니다.

- 필터링 되어 보이지 않는 Row 를 변경대상에 포함합니다.
   필터링 된 Row 를 변경대상에서 제외하려면 setRowType() 메소드를 사용하여야 합니다.

- setRowTypeNF() 메소드로 Row 의 타입을 변경하면 onrowsetchanged 이벤트가 발생합니다.
   이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGESTATUS"가 됩니다.

- nRowType 또는 strRowType 에는 다음과 같은 값을 지정할 수 있습니다.

	
		Constant
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	


- 매개변수인 nRow 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

**See Also**

Dataset.setRowType


---

### updateColID

> Data Objects > Dataset > Method > updateColID

**Description**

Const Column 을 포함하여 DataSet 에 정의된 Column 의 ID 를 변경하는 메소드입니다.

**Syntax**

```javascript
Dataset.updateColID(nCol, strNewColID)
Dataset.updateColID(strOldColID, strNewColID)
```

**Parameters**

```
ID 를 변경할 Column 의 인덱스를 설정합니다.

첫번째 Column 의 인덱스값은 "0" 입니다.
```

**Return**

ID 가 변경된 Column 의 인덱스를 반환합니다.
만일 지정한 Column 이 존재하지 않거나 ID 가 동일한 Column 이 있을 경우 "-1" 을 반환합니다.

**Remark**

- 지정한 Column 이 존재하는 경우에만 수행됩니다.

- Const Column 과 일반 Column 모두를 대상으로 합니다.
  때문에 지정한 Column 이 Const Column 일 경우 반환되는 Column 의 인덱스는 
  "일반 Column 갯수" + "Const Column" 의 위치입니다.

- ID 변경이 성공하면 onrowsetchanged 이벤트가 발생하며 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- nCol 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용시 주의하시기 바랍니다.


---

### updateConstColID

> Data Objects > Dataset > Method > updateConstColID

**Description**

DataSet 에서 지정한 Const Column 의 ID를 변경하는 메소드입니다.

**Syntax**

```javascript
Dataset.updateConstColID(nCol, strNewColID)
Dataset.updateConstColID(strOldColID, strNewColID)
```

**Parameters**

```
ID 를 변경할 Const Column 의 인덱스를 설정합니다.

첫번째 Column 의 인덱스값은 "0" 입니다.
```

**Return**

ID 가 변경된 Const Column 의 인덱스를 반환합니다.
만일 지정한 Const Column 이 존재하지 않거나 ID 가 동일한 Const Column 이 있을 경우 "-1" 을 반환합니다.

**Remark**

- 지정한 Const Column 이 존재하는 경우에만 수행됩니다.

- Const Column 의 ID 변경이 성공하면 onrowsetchanged 이벤트가 발생하며 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- nCol 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용시 주의하시기 바랍니다.


---

### updateSortGroup

> Data Objects > Dataset > Method > updateSortGroup

**Description**

DataSet 에 로드된 데이터를 그룹핑 또는 정렬하는 메소드입니다.

**Syntax**

```javascript
Dataset.updateSortGroup( [strKeyString] )
```

**Parameters**

```
그룹핑 또는 정렬의 기준이 되는 조건식을 문자열로 설정합니다.

값 생략 시 keystring 속성에 설정된 값이 조건식으로 적용됩니다.
```

**Return**

그룹핑 또는 정렬에 성공하면 true 를 반환합니다.
그룹핑 또는 정렬에 실패하면 false 를 반환합니다.

두개 이상의 파라미터를 지정한 경우 false 를 반환합니다.
keystring 속성값이 설정되지 않은 상태에서 파라미터를 생략하면 false 를 반환합니다.

**Remark**

- <strKeyString> 파라미터의 조건식 작성방법은 "keystring" 속성을 참고하세요.

- updateSortGroup() 메소드 실행으로 데이터가 그룹핑 또는 정렬되면 onrowsetchanged 이벤트가 발생합니다.
   이 때, onrowsetchanged 이벤트에 전달되는 DSRowsetChangeEventInfo 의 reason 속성은 "REASON_SORTGROUP" 값을 갖습니다.

- datatyperule 속성값이 "2.0" 인 경우 정렬 시 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "STRING" 이면 EmptyString("") < [Value] < undefined==null==NaN 순서로 정렬됩니다.
   > Column 타입이 "INT", "FLOAT", "BIGDECIMAL" 이면 -Infinity < [-Number] < 0 < [+Number] < Infinity < EmptyString("") < undefined==null==NaN 순서로 정렬됩니다.
   > Column 타입이 "DATE", "TIME", "DATETIME" 이면 EmptyString("") < [Date] < [Invalid Date] < undefined==null==NaN 순서로 정렬됩니다.


◆ web runtime environment 제약

- 조건식에 사용된 Column 의 데이터형이 "String" 인 경우 데이터 정렬 시 웹브라우저에서 제공하는 javascript 내장함수 localCompare() 메소드를 사용합니다.
   웹브라우저에서 제공하는 내장함수를 사용하므로 웹브라우저에 따라 정렬결과에 차이가 날 수 있습니다.


---

### 이벤트 (Events)

### cancolumnchange

> Data Objects > Dataset > Event > cancolumnchange

**Description**

DataSet 의 Column 값이 변경될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
cancolumnchange(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 "true" 를 반환하면 Column 값이 변경되고, oncolumnchanged 이벤트가 발생합니다.
이벤트에서 리턴값으로 "false" 를 반환하면 Column 값이 변경되지 않고, oncolumnchanged 이벤트가 발생하지 않습니다.

이벤트에서 리턴값을 생략하면 "true" 로 적용됩니다.

**Remark**

- DataSet 을 바인딩 한 컴포넌트에서 값이 변경되면, DataSet 에 변경된 Column 값이 반영되기 전에 발생하는 이벤트입니다.

- setColumn() 또는 setConstColumn() 메소드로 Column 값을 변경하면 발생하는 이벤트입니다.

- cancolumnchange 이벤트 내에서 setColumn() 메소드 사용 시 Stack OverFlow 와 같은 치명적인 시스템 에러가 발생할 수 있습니다.
  따라서 cancolumnchange 이벤트 내에서 setColumn() 메소드를 실행할 수 없습니다.


---

### canrowposchange

> Data Objects > Dataset > Event > canrowposchange

**Description**

Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
canrowposchange(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 "true" 를 반환하면 rowposition 속성값이 변경되고, onrowposchanged 이벤트가 발생합니다.
이벤트에서 리턴값으로 "false" 를 반환하면 rowposition 속성값이 변경되지 않고, onrowposchanged 이벤트가 발생하지 않습니다.

이벤트에서 리턴값을 생략하면 "true" 로 적용됩니다.

**Remark**

- DataSet 을 바인딩 한 컴포넌트에서 Row 선택이 변경되면, DataSet 의 rowposition 속성에 변경된 값이 반영되기 전에 발생하는 이벤트입니다.

- addRow(), filter(), deleteRow() 메소드 수행 시 canrowposchange 이벤트가 발생합니다.

- clear(), clearData(), deleteAll(), deleteRow(), filterRow() 메소드를 수행한 결과 모든 Row 가 삭제되거나 표시되는 Row 가 없다면
  canrowposchange 이벤트는 발생하지 않습니다.

- Dataset 에서 데이터 로드로 인해 rowposition 속성값이 "-1" 에서 "0" 으로 변경된 경우는 canrowposchange 이벤트가 발생하지 않습니다.


---

### oncolumnchanged

> Data Objects > Dataset > Event > oncolumnchanged

**Description**

DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
oncolumnchanged(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- cancolumnchange 이벤트에서 리턴값으로 "false" 를 반환하면 oncolumnchanged 이벤트는 발생하지 않습니다.

- DataSet 을 바인딩 한 컴포넌트에서 값이 변경되면, DataSet 에 변경된 Column 값을 반영한 후 발생하는 이벤트입니다.

- setColumn() 또는 setConstColumn() 메소드로 Column 값을 변경한 후 발생하는 이벤트입니다.

- oncolumnchanged 이벤트 내에서 setColumn() 메소드 사용 시 Stack OverFlow 와 같은 치명적인 시스템 에러가 발생할 수 있습니다.
  따라서 oncolumnchanged 이벤트 내에서 setColumn() 메소드를 사용하면 cancolumnchange 이벤트만 발생합니다.


---

### onload

> Data Objects > Dataset > Event > onload

**Description**

DataSet 에 데이터 로딩이 완료된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onload(obj:nexacro.NormalDataset,e:nexacro.DSLoadEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onload 이벤트가 종료된 후 rowposition 속성값은 "0" 으로 변경됩니다.
	
- onload이벤트가 발생한 원인은 e 오브젝트(DSLoadEventInfo)의 reason 속성값을 참조하시기 바랍니다.

**See Also**

DSLoadEventInfo.reason


---

### onrowposchanged

> Data Objects > Dataset > Event > onrowposchanged

**Description**

Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onrowposchanged(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- canrowposchange 이벤트에서 리턴값으로 "false" 를 반환하면 onrowposchanged 이벤트는 발생하지 않습니다.

- DataSet 을 바인딩 한 컴포넌트에서 Row 선택이 변경되면, DataSet 의 rowposition 속성에 변경된 값이 반영된 후 발생하는 이벤트입니다.


---

### onrowsetchanged

> Data Objects > Dataset > Event > onrowsetchanged

**Description**

DataSet 에 데이터가 Insert, Delete 되거나 Row 의 위치, 상태 등이 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onrowsetchanged(obj:nexacro.NormalDataset,e:nexacro.DSRowsetChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onrowsetchanged 이벤트가 발생한 원인은 DSRowsetChangeEventInfo 오브젝트의 reason 속성값을 참조하시기 바랍니다.

◆ 주의

- onrowsetchanged 이벤트 핸들러 함수 내에서 Dataset 오브젝트의 enableevent 속성값을 false로 변경했다가 다시 true로 변경하면 이벤트가 반복해서 발생하며 무한 루프에 빠집니다.

**See Also**

DSRowsetChangeEventInfo.reason


---

### onvaluechanged

> Data Objects > Dataset > Event > onvaluechanged

**Description**

DataSet 의 데이터가 Insert, Delete, Update 되거나 Row 의 위치, 상태 등이 변경될 때 마지막에 발생하는 이벤트입니다.

**Syntax**

```javascript
onvaluechanged(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

아래와 같은 경우 onvaluechanged 이벤트가 발생합니다.
- Dataset 오브젝트에 데이터가 로드될 때
- setColumn 메소드를 실행해 데이터가 변경될 때
- enableevent 속성값이 true로 변경될 때

◆ 주의

- onvaluechanged 이벤트 핸들러 함수 내에서 Dataset 오브젝트의 enableevent 속성값을 false로 변경했다가 다시 true로 변경하면 이벤트가 반복해서 발생하며 무한 루프에 빠집니다.


---
