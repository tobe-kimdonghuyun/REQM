# 135.ColumnInfo

135.1개요

135.2속성

```
Dataset의 Column 정보를 갖는 오브젝트입니다.
```

## 135.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 생성된 ColumnInfo 오브젝트는 addColumnInfo() 메소드를 사용하여 DataSet 에 추가할 수 있습니다.
   addColumnInfo() 메소드 실행 시 Column ID 로 TypeName, ClassName, 스크립트 예약어를 사용하면 오동작할 수 있습니다.

- DataSet 의 getColumnInfo() 메소드를 사용하여 ColumnInfo 오브젝트를 반환 받을 수 있습니다.
```

## 135.1.2생성자

```
new ColumnInfo( [name, type, size] );
```

|  |
| --- |
| ``` // Create Object var colinfo = new ColumnInfo( "column00", "string", 120 );  // add new column information to Dataset 'Dataset00' this.Dataset00.addColumnInfo( "ColId00", colinfo ); ``` |
