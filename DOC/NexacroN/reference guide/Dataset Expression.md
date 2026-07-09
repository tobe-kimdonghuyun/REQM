# 339.Dataset Expression

# 339.1개요

```
Dataset Expression 스크립트는 Grid 와 바인딩 되어 있는 DataSet 의 Row 별로 임의의 지정된 동작을 수행하게 하기 위한 기능입니다.

Dataset Expression 스크립트는 일반적으로 "Expr" 설정이 가능한 Grid 또는 Cell 의 속성에 "expr:" 의 접두어를 사용하여 정의합니다.
또한, Dataset의 getCaseSum(), filter(), findRowExpr() 등의 메소드에서 Expression 스크립트가 인자로 사용될 수 있습니다.

Grid 에 Dataset 의 데이터가 표시될 때 각 행(Row) 별로 임의의 동작을 수행하여 그 결과값을 표시하거나 활용할 수 있습니다.
Dataset Expression 스크립트는 넥사크로 Form 스크립트 문법에 따라 작성합니다.
```

# 339.2Additional Expression & Objects

Dataset Expression 에는 Dataset 및 Column 을 처리하기 위해 다음과 같은 속성 및 예약어를 제공합니다.

## 339.2.1Additional Global Properties

### Object property

dataset property

Expression 을 보유하는 컴포넌트에 바인드된 Dataset 을 지정하는 Property 입니다.

```
<Cell text="expr:dataset.rowcount"/>       // dataset 은 바인드된 Dataset 을 지시함
<Cell text="expr:dataset.parent.func1()"/> // dataset 의 소속 parent(Form) 에 정의된 func1 함수를 실행함
```

comp property

Expression 을 보유하는 컴포넌트 자체를 지정하는 Property 입니다.

```
<Cell text="expr:comp.parent.func1()"/>    // comp 의 소속 parent(Form) 에 정의된 func1 함수를 실행함
```

### Dataset Row Iterator Properties

currow property

Dataset 에서 현재 Expression 을 실행하고 있는 Row Index.

```
<Cell text="expr:dataset.getColumn(--currow, 'Column0') - Column0"/>  // 이전 Row 와의 차이를 계산
```

this property

Expression 을 보유하는 오브젝트를 지정하는 Property 입니다.

```
<Band id="head" tooltiptext="expr:this.col"> // this 는 Band 오브젝트를 지시함
<Cell text="expr:this.col"/>                 // this 는 Cell 오브젝트를 지시함
```

## 339.2.2Column Identifier Reference

```
Expression 에 Dataset 의 Column ID 를 직접 사용할 수 있으며 그 결과는 Expression 을 실행하고 있는 Row 의 Column 값입니다.
단, 사칙, 비교 등의 연산을 수행하면 Primitive Value 로 변환하여 연산을 수행합니다.
```

# 339.3Execution Context

```
Dataset Expression 은 Form Context 를 실행 기반으로 하므로 Form 에서 사용 가능한 속성이나 함수를 모두 사용할 수 있습니다.

Dataset Expression 은 'eval' 스크립트처럼 동작하지만 Form 과 Expression 스크립트의 Context 는 서로 독립되어 있어 Expression 스크립트에서 선언된 변수가 Form Context 에 영향을 미치지 않는다는 점에서 차이가 있습니다.
단, Form Context 에 정의된 변수는 Dataset Expression 스크립트의 Context 에서 읽거나 쓸 수 있고 변경된 값은 Form Context 에도 영향을 미칩니다.
```
