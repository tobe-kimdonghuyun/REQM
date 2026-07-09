# 138.Date

138.1개요

138.2메서드

```
Date 정보를 처리하기 위해 제공되는 오브젝트입니다.
```

## 138.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 스크립트의 Date 오브젝트에서 toLocaleDateString(), toLocaleString(), toLocaleTimeString () 메소드를 추가로 제공합니다.

- 넥사크로에서 제공하는 Date 오브젝트로 생성 시 "nexacro" 를 사용하여야 합니다.

- Date 오브젝트를 생성할 때 시간을 지정하지 않으면 시,분,초 값이 모두 0 으로 설정됩니다.

- datatyperule 속성값이 "2.0" 일 때 Invalid Value 를 가진 Date 오브젝트를 생성하려면 파라미터로 undefined 를 설정하여야 합니다.
```

## 138.1.2생성자

```
new nexacro.Date( [nYear [, nMonth [, nDay [, nHours [, nMinutes [, nSeconds [,nMillisecond]]]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| nYear | Number | 네자리 년도(Year)값을 설정합니다.    0부터 99까지의 값을 입력하는 경우 1900 을 더한 값으로 처리됩니다. |
| nMonth | Number | 0 (1월) 부터 11 (12월) 사이의 월(Month) 코드값을 설정합니다. |
| nDay | Number | 1 부터 31 사이의 날짜 값을 설정합니다. |
| nHours | Number | 0 부터 23 까지의 시(Hour)값을 설정합니다.    0 은 자정, 23 은 오후 11 시를 의미합니다. |
| nMinutes | Number | 0 부터 59 사이의 분(Minute)값을 설정합니다. |
| nSeconds | Number | 0 부터 59 사이의 초(Second)값을 설정합니다. |
| nMillisecond | Number | 0 부터 999 사이의 밀리초(MilliSecond)값을 설정합니다. |

|  |
| --- |
| ``` // Create Object (Valid Value) var objDate1 = new nexacro.Date(); var objDate2 = new nexacro.Date( 2000,1,1 ); var objDate3 = new nexacro.Date( 2000,1,1,9,0,0,0 );  // Create Object (Invalid Value) var objDate4 = new nexacro.Date( undefined ); ``` |
