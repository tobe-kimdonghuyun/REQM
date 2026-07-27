/**
*  Mobile 프로젝트 Library
*  @FileName 	Util.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023/10/30
*  @Desction   
************** 소스 수정 이력 ***********************************************
* Date					Modifier					Description
*******************************************************************************
* 2023/10/30			TOBESOFT					최초생성
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
* @class 현재 오픈되어 있는 메뉴 ID를 가져온다. <br>
* @param N/A
* @return {String} sMenuId - 현재 오픈되어 있는 메뉴 ID
* @example this.gfnGetCurMenuId();
*/
pForm.gfnGetCurMenuId = function()
{
	var sMenuId;
	if(this.getOwnerFrame().form.name == "frameMain")
	{
		sMenuId = this.gfnGetUserInfo("userHomeMnuCd");		
	}
	else if(this.getOwnerFrame().form.name == "frameWork")
	{
		sMenuId = this.getOwnerFrame().arguments["menuId"];
	}	
	if(this.gfnIsNull(sMenuId)) sMenuId = "";
	
	return sMenuId;
};

/**
* @class dataSet의 Row 중에서 변경된 내용이 있는지 여부
* @param {Object} objDs - 확인 대상 Dataset
* @return {boolean} 
* @example this.gfnDsIsUpdated(this.dsList)
*/   
pForm.gfnDsIsUpdated = function (objDs)
{
	if (objDs.getDeletedRowCount() > 0) 
	{
		return true;
	}
	
	for(var i = 0 ; i < objDs.getRowCountNF() ; i++)
	{
		if(objDs.getRowTypeNF(i) == 2 || objDs.getRowTypeNF(i) == 4 || objDs.getRowTypeNF(i) == 8)
		{
			return true;
		}
	}
	return false;
};
/************************************************************************************************
* 문자/숫자 관련 Util
************************************************************************************************/
/**
* @class null값 확인
* @param {String} sValue - 확인 대상
* @return {boolean} Null이면 true
* @example this.gfnIsNull(sValue) 
*/   
pForm.gfnIsNull = function(sValue)
{
    if (new String(sValue).valueOf() == "undefined") return true;
    if (sValue == null) return true;
    
    var ChkStr = new String(sValue);

    if (ChkStr == null) return true;
    if (ChkStr.toString().length == 0 ) return true;
    return false;
};

/**
* @class null값 확인
* @param {String} sValue - 확인 대상
* @return {boolean} Null이 아니면 true
* @example this.gfnIsNotNull(sValue) 
*/  
pForm.gfnIsNotNull = function (sValue) 
{
	var chk = this.gfnIsNull(sValue);
	if (chk) {
		return false;
	}

	return true;
}

/**
* @class 입력값을 체크하여 Null인경우 지정한 값을 리턴
* @param {String} inVal
* @param {String} nullVal	- Null인경우 대치값
* @return {String} 입력값이 Null인경우 지정한값, Null이 아닌경우 입력값
* @example this.gfnNvl(nRow, 0);
*/
pForm.gfnNvl = function(inVal, nullVal)
{
	if(inVal == null) {
		inVal = nullVal;
	}
	return inVal;
};


/**
* @class 정규식을 이용한 trim 구현 - 문자열 양 옆의 공백 제거 <br>
* @param {String} sValue - 변경하려는 값
* @return {String} 문자열
* @example this.gfnTrim(sValue);
*/
pForm.gfnTrim = function(sValue)
{
    if (this.gfnIsNull(sValue)) return "";
	return nexacro.trim(sValue);
};

/**
* @class 주어진 nexacro 개체의 type 을 반환 <br>
* @param {*} obj Object, Component, Frame, .. 등 nexacro 모든 개체
* @return {String} 개체의 type
* @example
* trace(this.gfnTypeOf(Button00));	// output : Button
* trace(this.gfnTypeOf(Tab00));	// output : Tab
* trace(this.gfnTypeOf(Tab00.tabpage1));	// output : Tabpage
* trace(this.gfnTypeOf(Dataset00));	// output : Dataset
*/
pForm.gfnTypeOf = function(obj)
{
	var type;
	if ( obj && (typeof obj == "object"))
	{
		var s = obj.toString();
		if(s == "[object Object]") return type;
		
		type = s.substr(8, s.length-9);
	}
	else {
		type = typeof(obj)
	}
	return type;
};


/**
* @class 문자열 byte 길이를 조회
* @param {String} sVal - 문자열
* @return {Integer} 문자열 byte 길이
* @example this.gfnLengthByte(val);
*/
pForm.gfnLengthByte = function (val)
{
	var byteLength = 0;
	var chr;
	
	if( this.gfnIsNull(val) ) return 0;
	
 	for(var valIdx = 0; valIdx < val.length; valIdx++) {
 		chr = escape(val.charAt(valIdx));
		
		if (chr.length == 1) {
			byteLength ++;
		} else if (chr.indexOf("%u") != -1)  {
			byteLength += 3;
		} else if (chr.indexOf("%") != -1)  {
			byteLength += chr.length/3;
		}
 	}
 	return byteLength;
};
/************************************************************************************************
* Date 관련 Util
************************************************************************************************/

/**
* @class 현재일자를 구한다. <br>
* @param {String} [sGubn] - date/null : 일자, time : 일자+시간, milli : Milliseconds
* @param {Boolean} [bFormat] - format 지정 여부
* @return {String} 날짜및시간 문자열
* @example this.gfnGetDate()
*/
pForm.gfnGetDate = function(sGubn, bFormat) 
{
	if (this.gfnIsNull(sGubn)) sGubn = "date";
	if (this.gfnIsNull(bFormat)) {
		bFormat = false;
		var sDFormat = "";
		var sTFormat = "";
		var sSplit = "";
	}
	else {
		bFormat = true;
		var sDFormat = "-";	
		var sTFormat = ":";
		var sSplit = " ";
	}	
	
	var s;	
	
	var d = new Date();	
	if (sGubn == "date") {
		s = d.getFullYear() + sDFormat
		  + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
		  + (d.getDate() + "").padLeft(2, '0');
	}
	else if (sGubn == "day") {
		s = d.getFullYear() + sDFormat
		  + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
		  + (d.getDate() + "").padLeft(2, '0') + sSplit
		  + this.gfnGetDayKor(d.getFullYear()+((d.getMonth() + 1) + "").padLeft(2, '0')+(d.getDate() + "").padLeft(2, '0'));
	}
	else if (sGubn == "time") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + sSplit
	      + (d.getHours() + "").padLeft(2, '0') + sTFormat
	      + (d.getMinutes() + "").padLeft(2, '0') + sTFormat
	      + (d.getSeconds() + "").padLeft(2, '0');
	}
	else if (sGubn == "milli") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + sSplit
	      + (d.getHours() + "").padLeft(2, '0') + sTFormat
	      + (d.getMinutes() + "").padLeft(2, '0') + sTFormat
	      + (d.getSeconds() + "").padLeft(2, '0') + sTFormat
		  + (d.getMilliseconds() + "").padLeft(3, '0');
	}
	return (s);
};

/**
* @class 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함 <br>
* @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
* @param {Number} nOffSet - 날짜로부터 증가 감소값.
* @return {String} date의 문자열 (ex. 20080821)
* @example this.gfnAddDate(sToday,-7)
*/
pForm.gfnAddDate = function(strDate, nOffSet)
{
	var date = new Date();
	
    var iYear = parseInt(strDate.substr(0, 4));
    var iMonth = parseInt(strDate.substr(4, 2) - 1);
    var iDate = parseInt(strDate.substr(6, 2)-(nOffSet*-1));
    
	date.setFullYear(iYear,iMonth,iDate);	
	
	return this.gfnDateToStr(date);
};

/**
* @class 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함
* @param {String} strDate - String Date Format
* @param {Number} OffSet - Integer Format
* @return {String} date
* @example this.gfnAddMonth(sToday, +1)
*/ 
pForm.gfnAddMonth = function(strDate, OffSet) 
{	
	var date, d, s, mon, val;

	/**
	 * @class 입력일자 해당월의 마지막 일 <br>
	 * @param {String} strMonth - 'yyyyMMdd' 형태로 표현된 날짜.
	 * @return {Number} 해당월의 마지막일자 2자리
	 */
	var gfnGetMonthLastDate = function(strMonth) {
		var iLastDay;
		var iYear  = parseInt(strMonth.substr(0, 4),10) ;
		var iMonth = parseInt(strMonth.substr(4, 2),10);
		switch(iMonth)
		{
			case 2 :
				if( ((iYear%4)==0) && ((iYear%100)!=0) || ((iYear%400)==0) )
					iLastDay = 29;
				else
					iLastDay = 28;			
				break;
			case 4 :
			case 6 :
			case 9 :
			case 11 :
				iLastDay = 30;
				break;
			default:
				iLastDay = 31;
				break;
		}
		
		return iLastDay;
	};

    if (strDate) {
        date = this.gfnStrToDate(strDate);
        d = (new Date(date)).addMonth(OffSet);
    } else {
    	date = this.gfnStrToDate(this.gfnGetDate());
		d = (new Date(date)).addMonth(OffSet);
    }
    
    if (gfnGetMonthLastDate(strDate) == date.getDate()) {
    	var sY = new Date(d).getFullYear();
    	var sM = new Date(d).getMonth();
    	var eY = date.getFullYear();
    	var eM = date.getMonth();
    	
    	mon = -((eY - sY)* 12 + (eM - sM));
    	
    	if (mon != OffSet) {
   			val = OffSet - mon;
    		d = (new Date(d)).addMonth(-1);
    	}
    	
    	var ld = new Date((new Date(d)).getFullYear() 
    			, (new Date(d)).getMonth()
    			, gfnGetMonthLastDate(this.gfnDateToStr(new Date(d))));
    	
    	s = (new Date(ld)).getFullYear()
		   + (((new Date(ld)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(ld)).getDate()) + "").padLeft(2, '0');
    } else {
    	s = (new Date(d)).getFullYear()
		   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(d)).getDate()) + "").padLeft(2, '0');
    }
	
	return (s);
};

/**
* @class 법정공휴일 구하기 <br>
* @param {Number} nYear - yyyy
* @return {Array} 휴일정보
* @example this.gfnGetHolidays(2002) 
*/
pForm.gfnGetHolidays = function(nYear)
{
	var aHoliday = new Array();
	var bLeapYear = false;
	
	// 윤달 체크 
	bLeapYear = (nYear % 4 ==0 && nYear % 100 != 0 || nYear % 400 == 0) ? true : false;

	/////// 음력 체크
	// 구정
	aHoliday[0] = this.gfnLunarToSolar(nYear + "0101", bLeapYear) + "설날";		// 설 당일
	aHoliday[1] = this.gfnAddDate(aHoliday[0].substring(0, 8), -1) + "설날";	// 설 전일
	aHoliday[2] = this.gfnAddDate(aHoliday[0].substring(0, 8), 1) + "설날";		// 설 다음날
	// 석가탄신일
	aHoliday[3] = this.gfnLunarToSolar(nYear + "0408", bLeapYear) + "석가탄신일";
	// 추석
	aHoliday[4] = this.gfnLunarToSolar(nYear + "0815", bLeapYear) + "추석";		// 추석 당일
	aHoliday[5] = this.gfnAddDate(aHoliday[4].substring(0, 8), -1) + "추석";	// 추석 전일
	aHoliday[6] = this.gfnAddDate(aHoliday[4].substring(0, 8), 1) + "추석";		// 추석 다음날

	/////// 양력 체크
	aHoliday[7] = nYear+"0101" + "신정";
	aHoliday[8] = nYear+"0301" + "삼일절";
	aHoliday[9] = nYear+"0505" + "어린이날";	
	aHoliday[10] = nYear+"0606" + "현충일";		
	aHoliday[11] = nYear+"0815" + "광복절";	
	aHoliday[12] = nYear +"1003" + "개천절";
	aHoliday[13] = nYear +"1009" + "한글날";
	aHoliday[14] = nYear+"1225" + "성탄절";			
	return aHoliday.sort();
};
/**
* @class 양력을 음력으로 변환해주는 함수.<br>
* [주의사항]<br>
*  1. return값이 8자리가 아니고 9자리임에 주의<br>
*  2. 처리가능 기간  1841 - 2043년
* @param {String | Date} value - yyyyMMdd형태의 양력일자 ( 예 : "20121122" )
* @return {String} Flag(평달 = "0", 윤달 = "1") + 'yyyyMMdd'형태의 음력일자
* @example
* var dt = this.gfnStr2Date("20130331");
* var str = this.solarToLunar(dt);
* trace(str); // output : 020130220
* var str1 = "20130331";
* var str = this.solarToLunar(str1);
* trace(str); // output : 020130220
*/		
pForm.gfnSolarToLunar =  function(value) 
{
	var sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
	var arrMd       = [];
	var arrBaseInfo = [];
	var arrDt       = [];	// 매년의 음력일수를 저장할 배열 변수
	var nTd;		    			// 음력일을 계산하기 위해 양력일과의 차이를 저장할 변수
	var nTd1;			    		// 1840년까지의 날수
	var nTd2;				    	// 현재까지의 날수
	var nTemp;					    // 임시변수
	var nLy, nLm, nLd;			    // 계산된 음력 년, 월, 일을 저장할 변수
	var sLyoon;					    // 현재월이 윤달임을 표시

	var nY, nM, nD;

	nY = parseInt(value.substr(0,4), 10);
	nM = parseInt(value.substr(4,2), 10);
	nD = parseInt(value.substr(6,2), 10);
	
	
	if (nY < 1841 || nY > 2043)	
	{
		return null;
	}

	arrBaseInfo = this.gfnSolarBase();
	arrMd       = sMd.split(",");
	arrMd[1]    = 28;
		
	//윤년여부 확인
	if ((nY % 4) == 0) 
	{
		if ((nY % 100) != 0 || (nY % 400) == 0)
		{ 
			arrMd[1] = 29;
		}
	} 

	// 672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수
	nTd1 = 672069; 	 
		
	// 1841년부터 작년까지의 날수
	nTd2 = (nY - 1) * 365 + parseInt((nY - 1)/4) - parseInt((nY - 1)/100) + parseInt((nY - 1)/400);
		
	// 전월까지의 날수를 더함
	for (var i = 0; i <= nM - 2; i++)
	{
		nTd2 = nTd2 + parseInt(arrMd[i]);
	}

	// 현재일까지의 날수를 더함
	nTd2 = nTd2 + nD;

	// 양력현재일과 음력 1840년까지의 날수의 차이
	nTd = nTd2 - nTd1 + 1;
	
	// 1841년부터 음력날수를 계산
	for (var i = 0; i <= nY - 1841; i++)
	{
		arrDt[i] = 0;
		for (var j = 0; j <= 11; j++)
		{
			switch (parseInt(arrBaseInfo[i * 12 + j]))
			{
				case 1 : nTemp = 29;
						 break;
				case 2 : nTemp = 30;
						 break;				
				case 3 : nTemp = 58;	// 29 + 29
						 break;				
				case 4 : nTemp = 59;	// 29 + 30
						 break;				
				case 5 : nTemp = 59;	// 30 + 29
						 break;				
				case 6 : nTemp = 60;	// 30 + 30
						 break;				
			}
			
			arrDt[i] = arrDt[i] + nTemp;
		}
	}
		
	// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
	nLy = 0;
	do
	{
		nTd = nTd - arrDt[nLy];
		nLy = nLy + 1;
	}
	while(nTd > arrDt[nLy]);
	
	nLm    = 0;
	sLyoon = "0";	// 현재월이 윤달임을 표시할 변수 - 기본값 평달
	do
	{

		if (parseInt(arrBaseInfo[nLy * 12 + nLm]) <= 2)
		{
			nTemp = parseInt(arrBaseInfo[nLy * 12 + nLm]) + 28;
			if (nTd > nTemp)
			{
				nTd = nTd - nTemp;
				nLm = nLm + 1;
			}
			else
			{
				break;
			}
		}
		else
		{
			switch (parseInt(arrBaseInfo[nLy * 12 + nLm]))
			{
				case 3 :
					m1 = 29;
					m2 = 29;
					break;
				case 4 : 
					m1 = 29;
					m2 = 30;
					break;					
				case 5 : 
					m1 = 30;
					m2 = 29;
					break;					
				case 6 : 
					m1 = 30;
					m2 = 30;
					break;					
			}

			if (nTd > m1)
			{
				nTd = nTd - m1;
				if (nTd > m2)
				{
					nTd = nTd - m2;
					nLm = nLm + 1;
				}
				else
				{
					sLyoon = "1";
				}
			}
			else
			{
				break;
			}
		}
	}
	while(1);
	
	nLy = nLy + 1841;
	nLm = nLm + 1;
	nLd = nTd;

	var sRtn = sLyoon + nLy; 
	sRtn = sRtn + nLm.toString().padLeft(2, "0"); 
	sRtn = sRtn + nLd.toString().padLeft(2, "0");    
	return sRtn;
};		

/**
* @class 음력을 양력으로 변환. <br>
* @param {String | Date} value - yyyyMMdd형태의 음력일자 ( 예 : "20121122" ).
* @param {Boolean} leapMonth - 윤달 여부.
* @return {String} 'yyyyMMdd'형태의 양력일자
* @example this.gfnLunarToSolar("20020815", true) 
*/
pForm.gfnLunarToSolar = function(value, leapMonth)
{

	var sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
	var arrMd       = [];	
	var arrBaseInfo = [];
	var nTd         = 0;
	var nSy, nSm, nSd;			    // 계산된 양력 년, 월, 일을 저장할 변수
	var nY1, nM1, nY2, nY3, nTemp;	// 임시변수	
	var nLeap;    
		
	var nLy, nLm, nLd;

	nLy = parseInt(value.substr(0,4), 10);
	nLm = parseInt(value.substr(4,2), 10);
	nLd = parseInt(value.substr(6,2), 10);
	

	if (nLy < 1841 || nLy > 2043)	
	{
		return null;
	}	

	arrBaseInfo = this.gfnSolarBase();
	arrMd       = sMd.split(",");
	arrMd[1]    = 28;
	
	//윤년여부 확인
	if ((nLy % 4) == 0) 
	{
		if ((nLy % 100) != 0 || (nLy % 400) == 0)
		{ 
			arrMd[1] = 29;
		}
	} 
		
	nY1   = nLy - 1841; //176
	nM1   = nLm - 1; //02
	nLeap = 0;
	
	if (parseInt(arrBaseInfo[nY1 * 12 + nM1]) > 2)
	{
		//윤년여부 확인
		if ((nLy % 4) == 0) 
		{
			if ((nLy % 100) != 0 || (nLy % 400) == 0)
			{ 
				nLeap = 1;
			}
		} 
	}
	if (nLeap == 1)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTemp = 29;
					 break;
			case 4 : nTemp = 30;
					 break;			
			case 5 : nTemp = 29;
					 break;			
			case 6 : nTemp = 30;
					 break;
		}
	}
	else
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 1 : nTemp = 29;
					 break;			
			case 2 : nTemp = 30;
					 break;			
			case 3 : nTemp = 29;
					 break;			
			case 4 : nTemp = 29;
					 break;			
			case 5 : nTemp = 30;
					 break;			
			case 6 : nTemp = 30;
					 break;			
		}
	}
	
	var tempY1 = nY1 - 1;
	for (var i = 0; i <= tempY1; i++)
	{
		for (var j = 0; j <= 11; j++)
		{
			switch (parseInt(arrBaseInfo[i * 12 + j]))
			{
				case 1 : nTd = nTd + 29;
						 break;
				case 2 : nTd = nTd + 30;
						 break;				
				case 3 : nTd = nTd + 58;
						 break;				
				case 4 : nTd = nTd + 59;
						 break;				
				case 5 : nTd = nTd + 59;
						 break;				
				case 6 : nTd = nTd + 60;
						 break;				
			}
		}
	}

	var tempM1 = nM1 - 1;
	for (var j = 0; j <= tempM1; j++)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + j]))
		{
			case 1 : nTd = nTd + 29;
					 break;			
			case 2 : nTd = nTd + 30;
					 break;						
			case 3 : nTd = nTd + 58;
					 break;						
			case 4 : nTd = nTd + 59;
					 break;						
			case 5 : nTd = nTd + 59;
					 break;						
			case 6 : nTd = nTd + 60;
					 break;						
		}
	}

	if (nLeap == 1)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTemp = 29;
					 break;						
			case 4 : nTemp = 29;
					 break;						
			case 5 : nTemp = 30;
					 break;						
			case 6 : nTemp = 30;
					 break;						
		}
	}
	
	nTd = nTd + nLd + 22;
	
	if (leapMonth)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTd = nTd + 29;
					 break;						
			case 4 : nTd = nTd + 30;
					 break;						
			case 5 : nTd = nTd + 29;
					 break;						
			case 6 : nTd = nTd + 30;
					 break;						
		}
	}
	
	nY1 = 1840;
	do
	{
		nY1 = nY1 + 1;
		
		nLeap = 0;
		
		//윤년여부 확인
		if ((nY1 % 4) == 0) 
		{
			if ((nY1 % 100) != 0 || (nY1 % 400) == 0)
			{ 
				nLeap = 1;
			}
		} 

		if (nLeap == 1)
		{
			nY2 = 366;
		}
		else
		{
			nY2 = 365;
		}

		if( nTd <= nY2 )
		{
			break;
		}
			
		nTd = nTd - nY2;
	}
	while(1);

	nSy      = nY1;
	arrMd[1] = nY2 - 337;
	nM1      = 0;
	
	do
	{
		nM1 = nM1 + 1;
		if (nTd <= parseInt(arrMd[nM1-1]))
		{
			break;
		}
		nTd = nTd - parseInt(arrMd[nM1-1]);
	}
	while(1);
	
	nSm = nM1;
	nSd = nTd;
	nY3 = nSy;
	nTd = nY3 * 365 + parseInt(nY3/4) - parseInt(nY3/100) + parseInt(nY3/400);
	
	var tempSm = nSm - 1;
	for (var i = 0; i <= tempSm; i++)
	{
		nTd = nTd + parseInt(arrMd[i]);
	}

	nTd = nTd + nSd;

	var sRtn = nY3;
	sRtn = sRtn + nSm.toString().padLeft(2, "0"); 
	sRtn = sRtn + nSd.toString().padLeft(2, "0");    

	return sRtn;	
};

/**
* @class 각 월별 음력 기준 정보 (처리가능 기간  1841 - 2043년)
* @param  none
* @return {String}
* @example this.gfnSolarBase();
*/	 
pForm.gfnSolarBase = function ()
{
	var sBase;
			
	//1841
	sBase = "1,2,4,1,1,2,1,2,1,2,2,1,";
	sBase += "2,2,1,2,1,1,2,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,4,1,2,1,2,1,";
	sBase += "2,2,1,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,5,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,3,2,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	//1851
	sBase += "2,2,1,2,1,1,2,1,2,1,5,2,";
	sBase += "2,1,2,2,1,1,2,1,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,5,2,1,2,1,2,";
	sBase += "1,1,2,1,2,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,5,2,1,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,6,1,1,2,1,1,2,1,2,2,";
	//1861
	sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
	sBase += "2,1,2,1,2,2,1,2,2,3,1,2,";
	sBase += "1,2,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,4,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,1,2,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,3,2,1,1,2,1,2,2,1,";
	sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,5,2,1,";
	//1871
	sBase += "2,2,1,2,2,1,2,1,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,4,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,5,1,2,1,2,2,1,2,";
	sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,4,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
	//1881
	sBase += "1,2,1,2,1,2,5,2,2,1,2,1,";
	sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,3,2,1,2,2,1,2,2,";
	sBase += "2,1,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,5,2,1,1,2,1,2,1,2,";
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,5,2,1,2,2,1,2,1,2,1,2,";
	//1891
	sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,5,2,2,1,2,2,2,";
	sBase += "1,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,5,1,2,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,5,2,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,5,2,2,1,2,";
	//1901
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,3,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,4,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	//1911
	sBase += "2,1,2,1,1,5,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,5,1,2,1,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,3,2,1,2,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,5,2,2,1,2,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	//1921
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,2,2,3,2,1,1,2,1,2,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
	sBase += "2,1,2,1,2,2,1,2,1,2,1,1,";
	sBase += "2,1,2,5,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,5,1,2,1,1,2,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,1,1,5,1,2,1,2,2,1,";
	//1931
	sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,6,1,2,1,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,4,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,2,1,4,1,2,2,1,2,";
	sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	//1941
	sBase += "2,2,1,2,2,4,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,1,2,4,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
	sBase += "2,5,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,3,2,1,2,1,2,";
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	//1951
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,4,2,1,2,1,2,1,2,";
	sBase += "1,2,1,1,2,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
	sBase += "2,1,4,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,5,2,1,2,2,";
	sBase += "1,2,2,1,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,5,2,1,2,1,2,1,";
	//1961
	sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,2,3,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,5,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,5,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
	//1971
	sBase += "1,2,1,1,5,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,1,2,2,2,1,";
	sBase += "2,2,1,5,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,5,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,1,";
	sBase += "2,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,1,6,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	//1981
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,3,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,2,2,1,1,2,1,1,5,2,2,";
	sBase += "1,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,2,2,1,2,1,2,1,1,";
	sBase += "2,1,2,2,1,5,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,2,1,1,5,1,2,1,2,2,2,2,";
	//1991
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,1,1,2,1,1,2,1,2,2,";
	sBase += "1,2,5,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,2,2,1,5,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,3,2,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,2,1,1,2,1,2,2,1,";
	//2001
	sBase += "2,2,2,3,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,1,2,2,1,2,1,1,2,1,2,";
	sBase += "1,5,2,2,1,2,1,2,2,1,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,5,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
	sBase += "2,2,1,1,5,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	//2011
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,6,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,1,2,5,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
	sBase += "2,1,1,2,3,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,1,2,5,2,1,1,2,1,2,1,2,";
	//2021
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,2,1,2,1,2,1,2,";
	sBase += "1,5,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,2,1,1,5,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,1,2,2,2,";
	sBase += "1,2,2,1,5,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,1,2,2,";
	sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
	//2031
	sBase += "2,1,5,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,2,1,1,2,1,5,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,4,1,1,2,1,2,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,2,1,1,2,1,";
	sBase += "2,2,1,2,5,2,1,2,1,2,1,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,2,1,";
	//2041
	sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2";
	
	var arrBase = [];
	arrBase = sBase.split(",");
	
	return arrBase;
};

/**
* @class 문자를 날짜로 변환. <br>
* @param {String} strDate - String Date Format
* @return {Date} date
* @example gfnStrToDate("20020101");
*/
pForm.gfnStrToDate = function(inDate)
{
  var date =  new Date(parseInt(inDate.substr(0,4)),parseInt(inDate.substr(4,2))-1,parseInt(inDate.substr(6,2)));
  return date;
};

/**
* @class Date Type을 String으로 변환 <br>
* @param {Date} date
* @return {String} 'yyyyMMdd' 형태로 표현된 날짜
* @example this.gfnDateToStr(new Date);
*/
pForm.gfnDateToStr = function(date)
{
	var strYear = date.getYear().toString();
	var strMonth = (date.getMonth()+1).toString();
	var strDate = date.getDate().toString();
	
	if(strYear.length==2)
		strYear = '19'+strYear;
	else if(strYear.length==1)
		strYear = '190'+strYear;
		
	if(strMonth.length==1)
		strMonth = '0'+strMonth;
	if(strDate.length==1)
		strDate = '0'+strDate;
	
	return strYear+strMonth+strDate;
};

/**
* @class 입력된 날자로부터 요일을 구함 <br>
* @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
* @return {Number} 0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 -1 Return.
* @example this.gfnGetDay("20020101");
*/
pForm.gfnGetDay = function(strDate)
{
    var date = new Date();

    var iYear = parseInt(strDate.substr(0, 4));
    var iMonth = parseInt(strDate.substr(4, 2) - 1);
    var iDate = parseInt(strDate.substr(6, 2));
    
	date.setFullYear(iYear,iMonth,iDate);
    return date.getDay();
};

/**
* @class 입력된 날자로부터 한글 요일을 구함 <br>
* @param {String} dateVal - 'yyyyMMdd' 형태로 표현된 날짜.
* @return {String} 0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 "" Return.
* @example this.gfnGetDayKor("20020101");
*/
pForm.gfnGetDayKor = function(dateVal) 
{
	var nDay = -1;
	var dayKorArray = ["일", "월", "화", "수", "목", "금", "토"];
	
	nDay = this.gfnGetDay(dateVal);
	
	if( nDay < 0 ) return "";
	
	return dayKorArray[nDay];
};

/**
* @class 날짜 여부를 확인한다.(년월 or 년월일)
* @param {String} strDate - 입력스트링(YYYYMM or YYYYMMDD)
* @return {Boolean}
* @example this.gfnIsDate("20020101"); 
*/
pForm.gfnIsDate = function(strDate)
{
	if (this.gfnIsNull(strDate)) return false;
	
	var retVal;
	switch(strDate.length)
	{
		case 6://년월
			retVal =  this.gfnIsYM(strDate);
			break;
		case 8://년월일
			retVal =  this.gfnIsYMD(strDate);
			break;
		default:
			retVal = false; 
			break;
	}

	return retVal;
};

/**
* @class 날짜 여부를 확인한다 -  gfnIsDate내부용
* @param {String} strDate - 8자리의 숫자로 된 날짜(YYYYMMDD)
* @return {Boolean}
* @example this.gfnIsYMD("20020101");  
*/
pForm.gfnIsYMD = function(strDate)
{
	var retVal = this.gfnGetDigit(strDate);
	
	if (retVal.length != 8) {
		return false;
	}

	var strYM = strDate.substr(0,6);	//년월
	if (!this.gfnIsYM(strYM)) {
		return false;
	}
	var nDay   = Number(strDate.substr(6,2));	// 일자
	var nLastDay = Number(this.gfnGetLastDate(strYM).substr(6,2));//gfnGetLastDay에서 전체 20170331값이 넘어와서 .substr(6,2)추가 20170313
	if (nDay < 1 || nDay > nLastDay) {
		return false;
	}
	return true;
};


/**
* @class 날짜 여부를 확인한다 -  gfnIsDate내부용
* @param {String} strDate - 6자리의 숫자로 된 날짜(YYYYMM)
* @return {Boolean}
* @example this.gfnIsYM("200201");  
*/
pForm.gfnIsYM = function(strDate)
{
	var retVal = this.gfnGetDigit(strDate);

	if (retVal.length != 6) {
		return false;
	}

	var nYear  = Number(strDate.substr(0,4));	//년도값을 숫자로
	var nMonth = Number(strDate.substr(4,2));	//월을 숫자로

	if((nMonth < 1) || (nMonth > 12)) {
		return false;
	}

	return true;
};


/**
* @class 년월을 입력받아 마지막 일를 반환한다(년월) <br>
* @param {String} strDate - 6 / 8 자리의 숫자로 된 날짜(YYYYMM)
* @return {String} 해당월의 마지막날 8자리
* @example this.gfnGetLastDate("20020101");  
*/
pForm.gfnGetLastDate = function(strDate)
{
	var s = "";
    if (strDate == null) {
	    var date = (new Date()).addMonth(1);
    }
    else {
	    var date = new Date(parseInt(strDate.substr(0,4)),parseInt(strDate.substr(4,2)),1);
    }

	date = (new Date(date)).addDate((new Date(date)).getDate()*-1);

	s = (new Date(date)).getFullYear()
	  + (((new Date(date)).getMonth() + 1) + "").padLeft(2, '0')
	  + ((new Date(date)).getDate() + "").padLeft(2, '0');

	return (s);
};

/**
* @class 주민번호 뒷 첫번째 자리로 년대를 return 한다. <br>
* @param {String} sJuminNo	생년 월일 또는 주민 번호
* @return {String} 주민번호 뒷 첫번째 자리로 년대를 return 한다.
* @example this.gfnGetBirthYear("70012251024657") 
*/
pForm.gfnGetBirthYear = function(sJuminNo)
{
	if (sJuminNo.toString().length != 13){
		return "N";
	}
	
	if (!(sJuminNo).match(/^\d{6}\d{7}$/)){
		return "N";
	}

	var vGb = sJuminNo.substr(6,1);

	if (vGb == '1' || vGb == '2' || vGb == '5' || vGb == '6') {
		return '19';
	} else if (vGb == '3' || vGb == '4' || vGb == '7' || vGb == '8') {
		return '20';
	}
};

/**
* @class 입력받은 date로 week(주차)를 리턴한다. <br>
* @param {String}  date
* @return {String} week
* @example this.gfnDateToWeek(value);
*/
pForm.gfnDateToWeek = function (v)
{
	var year  = nexacro.toNumber(v.substr(0, 4));
    var month = nexacro.toNumber(v.substr(4, 2));
    var day   = nexacro.toNumber(v.substr(6, 2));

    var week = this.gfnCalculateWeek(year, month, day);

    if ((month == 1) && (week > 50)){
      year--;
    }else if ((month == 12) && (week < 2)){
      year++;
    }

    return year.toString() + week.toString().padLeft(2, '0');	
};

/**
* @class 입력받은 date로 week(주차)를 리턴한다. <br>
* @param {String}  year
* @param {String}  month
* @param {String}  day
* @return {String} week
* @example this.gfnCalculateWeek("2002", "12", "25") 
*/
pForm.gfnCalculateWeek = function(year, month, day)
{
	var a = Math.floor((14 - month) / 12);
	var y = year + 4800 - a;
	var m = month + 12 * a - 3;
	var b = Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);
	var J = day + Math.floor((153 * m + 2) / 5) + 365 * y + b - 32045;
	var d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
	var L = Math.floor(parseInt(d4) / 1460);
	var d1 = ((d4 - L) % 365) + L;

	week = Math.floor(d1 / 7) + 1;

	return week;
};

/**
* @class 날짜(Date) 해당 월의 최대 주수(주차) 구하기
* @param {String} dateStr - 6 / 8 자리의 숫자로 된 날짜(YYYYMM)
* @return {String} week
* @example this.gfnGetWeekCountOfMonth("20020101") 
*/
pForm.gfnGetWeekCountOfMonth = function(dateStr)
{
	var year  = Number(dateStr.substring(0, 4));
	var month = Number(dateStr.substring(4, 6));
	
	var nowDate = new Date(year, month-1, 1);

	var lastDate = new Date(year, month, 0).getDate();
	var monthSWeek = nowDate.getDay();

	var weekSeq = parseInt((parseInt(lastDate) + monthSWeek - 1)/7) + 1;

	return weekSeq;
}

/**
* @class 두 일자간의 차이 일수 계산 <br>
* @param {String} sStartDate - yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
* @param {String} sEndDate - yyyyMMdd형태의 To 일자   ( 예 : "20121202" )
* @return {Number} 숫자 형태의 차이일수( 예 : 10 ) 단, sEndDate < sStartDate이면 음수가 return된다.
* @example this.gfnGetDiffDate(sFrom, sTo)
*/
pForm.gfnGetDiffDate = function(sStartDate, sEndDate)
{
    var vFromDate = new Date(parseInt(sEndDate.substring(0,4),  10), parseInt(sEndDate.substring(4,6)-1,  10), parseInt(sEndDate.substring(6,8), 10));
    var vToDate = new Date(parseInt(sStartDate.substring(0,4),  10), parseInt(sStartDate.substring(4,6)-1,  10), parseInt(sStartDate.substring(6,8), 10));
    
    return parseInt((vFromDate - vToDate)/(1000*60*60*24));
};

/***************************************************************************************************************
validation check용
*****************************************************************************************************************/
/**
* @class 문자형 여부 체크
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnIsString(val) 
*/
pForm.gfnIsString = function(val) {
	return typeof val == "string";
}

/**
* @class 숫자체크
* @param {String} sValue
* @return {Boolean}
* @example this.gfnIsDigit("123")  
*/
pForm.gfnIsDigit = function(sNum)
{
	var c;
	var point_cnt=0;
	var ret=true;

	if ( this.gfnIsNull(sNum) )	return false;

	for (var i=0; i<sNum.length; i++)
	{
		c = sNum.charAt(i);
		if (i == 0 && (c == "+" || c == "-"));
		else if (c >= "0" && c <= "9");
		else if (c == ".")
		{
			point_cnt++;
			if ( point_cnt > 1 )
			{
				ret = false;
				break;
			}
		}
		else
		{
			ret = false;
			break;
		}
	}
	return ret;
};

/**
* @class 한글만으로 되어 있는지 Check한다. <br>
* @param {String} strValue
* @return {Boolean}
* @example this.gfnIsKoreanChar("테스트")   
*/
pForm.gfnIsKoreanChar = function(strValue)
{
	var retVal = true;
	
	for (i = 0; i < strValue.length; i++){
		if (!((strValue.charCodeAt(i) > 0x3130 && strValue.charCodeAt(i) < 0x318F) || (strValue.charCodeAt(i) >= 0xAC00 && strValue.charCodeAt(i) <= 0xD7A3))){
			retVal = false;
		}
	}
	
	return retVal;
};

/**
* @class 특수문자가 있는지 Check한다. <br>
* @param {String} strValue
* @return {Boolean}
* @example this.gfnIsSpecialChar("테스트")    
*/
pForm.gfnIsSpecialChar = function(val)
{
	var sCheckRegexp = /[\{\}\[\]\/\?.,;:\(\)*~`!^\-_+<>@\#$%&\\\=\'\"]/gi;
	return sCheckRegexp.test(val);
};

/**
* @class 문자열이 영문인지 Check한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnIsEng("test")     
*/
pForm.gfnIsEng = function(val) {
	var sCheckRegexp = /^([A-Za-z]+)$/;
	return sCheckRegexp.test(val);
};

/**
* @class 문자열이 영문+숫자인지 Check한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnIsEngNum("test123")      
*/
pForm.gfnIsEngNum = function(val) {
	var sCheckRegexp = /^([A-Za-z0-9]+)$/;
	return sCheckRegexp.test(val);
};

/**
* @class 문자열에 숫자가 포함되어 있는지 체크한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnHasNumber("test123")       
*/
pForm.gfnHasNumber = function(val) 
{
	if(this.gfnIsNull(val)) return false;
	
	for(var valIdx=0;valIdx<val.length;valIdx++) {
		if( this.gfnIsDigit(val.charAt(valIdx)) ) {
			return true;
		}
	}
	
	return false;
};

/**
* @class 문자열에 한글이 포함되어 있는지 체크한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnHasKor("테스트123")      
*/
pForm.gfnHasKor = function(val) 
{
	if(this.gfnIsNull(val)) return false;
	
	for(var valIdx=0;valIdx<val.length;valIdx++) {
		if( this.gfnIsKoreanChar(val.charAt(valIdx)) ) {
			return true;
		}
	}
	
	return false;
};

/**
* @class 문자열에 영문이 포함되어 있는지 체크한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnHasEng("test123")       
*/
pForm.gfnHasEng = function(val) 
{
	if(this.gfnIsNull(val)) return false;
	
	for(var valIdx=0;valIdx<val.length;valIdx++) {
		if( this.gfnIsEng(val.charAt(valIdx)) ) {
			return true;
		}
	}
	
	return false;
};

/**
* @class 주민등록번호 여부를 확인한다. <br>
* @param {String} sJuminNo - 입력문자열(주민번호 13자리)
* @return {Boolean}
* @example this.gfnIsSSN("70012251024567")     
*/
pForm.gfnIsSSN = function(sJuminNo)
{
	var birthYear = this.gfnGetBirthYear(sJuminNo);
	
	birthYear += sJuminNo.substr(0, 2);
	var birthMonth = sJuminNo.substr(2, 2)-1;
	var birthDate = sJuminNo.substr(4, 2);
	var birth = new Date(birthYear, birthMonth, birthDate);

	if ( birth.getYear() % 100 != sJuminNo.substr(0, 2) ||
		birth.getMonth() != birthMonth ||
		birth.getDate() != birthDate) 
	{
		return false;
	}

	// Check Sum 코드의 유효성 검사
	buf = new Array(13);
	for (i = 0; i < 6; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	for (i = 6; i < 13; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	  
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

	if ((11 - (sum % 11)) % 10 != buf[12]) {
		return false;
	}else{
		return true;
	}
};

/**
* @class 외국인 등록번호 여부를 확인한다. <br>
* @param {String} strNo - 입력문자열(등록번호13자리)
* @return {Boolean}
* @example this.gfnIsFrnrIdNo("70012251024567")      
*/
pForm.gfnIsFrnrIdNo = function(strNo)
{
	if (strNo.length != 13 || !this.gfnIsDigit(strNo)) return false;
	
	var month = Number(strNo.substr(2, 2));
	var day	  = Number(strNo.substr(4, 2));
		
	if (month < 1 || month > 12) return false;
	if (day < 1 || day > 31) return false;
	
	var sum = 0;
	var odd = 0;
	var buf = array(13);
	var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	
	for (var i=0; i<13; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	if (buf[11] < 6) return false;
	
	odd = buf[7] * 10 + buf[8];
	if((odd%2) != 0) return false;
	
	for (var i=0; i<12; i++) {
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = 11 - (sum % 11);
	
	if (sum >= 10) sum -= 10;
	sum += 2;
	if (sum >= 10) sum -= 10;
	
	if (buf[12] == sum) {
		return true;
	} else {
		return false;
	}
};

/**
* @class 사업자 등록번호 여부를 확인한다.
* @param {String} strCustNo - 입력문자열(등록번호10자리)
* @return {Boolean}
* @example this.gfnIsBzIdNo("2118661000")       
*/
pForm.gfnIsBzIdNo = function(strCustNo)
{
	if (strCustNo.length != 10) {
		return false;
	}
	else {		
		var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
		var tmpcustNo, i, chkSum=0, c2, remander;

		for (i=0; i<=7; i++) chkSum += checkID[i] * strCustNo.charAt(i);

		c2 = "0" + (checkID[8] * strCustNo.charAt(8));
		c2 = c2.substring(c2.length - 2, c2.length);

		chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));

		remander = (10 - (chkSum % 10)) % 10 ;

		if (Math.floor(strCustNo.charAt(9)) == remander) return true; // OK!
		return false;
	}

	return true;
};

/**
* @class 법인 등록번호 여부를 확인한다. <br>
* @param {String} strNo - 입력문자열(법인번호13자리)
* @return {Boolean}
* @example this.gfnIsFirmIdNo("1101117635243")     
*/
pForm.gfnIsFirmIdNo = function(strNo)
{
	if (strNo.length != 13 || !this.gfnIsDigit(strNo)) return false;

	var sum = 0;
	var buf = new Array(13);
	var multipliers = [1,2,1,2,1,2,1,2,1,2,1,2];
	
	for (var i=0; i<13; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	for (var i=0; i<12; i++) {
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = (10 - (sum % 10)) % 10;
	
	if (buf[12] == sum) {
		return true;
	} else {
		return false;
	}
};

/**
* @class 신용카드번호 여부를 확인한다. <br>
* @param {String} strNo - 카드번호16자리
* @return {Boolean}
* @example this.gfnIsCardNo("1234567812345678")      
*/
pForm.gfnIsCardNo = function(strNo)
{
	if (strNo.length < 13 || strNo.length > 19 || !nexacro.isNumeric(strNo)) return false;
	
	var sum = 0;
	var buf = new Array();
	
	for (var i=0; i<strNo.length; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	var temp;
	for (var i=buf.length-1, j=0; i>=0; i--, j++) {
		temp = buf[i] * ((j%2) + 1);
		if (temp >= 10) {
			temp = temp - 9;
		}
		sum += temp;
	}
	
	if ((sum % 10) == 0) {
		return true;
	} else {
		return false;
	}
};

/**
* @class 이메일 형식에 맞는지 Check한다.
* @param {String} strValue
* @return {Boolean}
* @example this.gfnIsEmail("tobe@tobesoft.com")      
*/
pForm.gfnIsEmail = function(strValue)
{
	var retVal = false;
	var sTmp = "";
	var sRegExp = "[a-z0-9]+[a-z0-9.,]+@[a-z0-9]+[a-z0-9.,]+\\.[a-z0-9]+";

	var regexp = new RegExp(sRegExp,"ig");
	sTmp = regexp.exec(strValue);

	if (sTmp == null) {
		retVal = false;
	} 
	else {
		if (( sTmp.index == 0 ) && (sTmp[0].length == strValue.length )) {
			retVal = true;
		} else {
			retVal = false;
		}
	}
	return retVal;
};

/**
* @class 전화번호or핸드폰 번호를 체크한다. <br>
* @param {String} telNumVal - 전화번호
* @return {Boolean}
* @example this.gfnIsPhoneNum("01012345678")       
*/
pForm.gfnIsPhoneNum = function(telNumVal) 
{
	var rtn = true;
	if (!this.gfnIsTelNum(telNumVal) && !this.gfnIsMobileNum(telNumVal)) {
		rtn = false;
	}
	return rtn;
};

/**
* @class 전화번호를 체크한다. <br>
* @param {String} telNumVal - 전화번호
* @return {Boolean}
* @example this.gfnIsTelNum("0221407700")       
*/
pForm.gfnIsTelNum = function(telNumVal) 
{
	var sCheckRegexp = /^0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4])-?\d{3,4}-?\d{4}$/
	return sCheckRegexp.test(telNumVal);
};

/**
* @class 핸드폰번호를 체크한다. <br>
* @param {String} telNumVal - 전화번호
* @return {Boolean}
* @example this.gfnIsMobileNum("01012345678")       
*/
pForm.gfnIsMobileNum = function(mobileVal) 
{
	var sCheckRegexp = /^(?:(010-?\d{4}|(01[1|6|7|8|9]-?\d{3,4})))-?\d{4}$/
	return sCheckRegexp.test(mobileVal);
};

/**
* @class  Grid에서 expression으로  표현할때 decode 문처럼 사용할 수 있는 기능
* @param  arguments - Decode 수행할 아규먼트(가변)
* @return {String} varRtnValue - 반환된 문자열
* @example this.gfnDecode(sortInfo.status, 1, this.MARKER[0], 2, this.MARKER[1], "");	
*/
pForm.gfnDecode = function ()
{
	var varRtnValue = null;

	var arrArgument = this.gfnDecode.arguments;
	var varValue = arrArgument[0];
	var bIsDefault = false;
	var nCount = 0;

	if ((arrArgument.length % 2) == 0) 
	{
		nCount = arrArgument.length - 1;
		bIsDefault = true;
	}
	else 
	{
		nCount = arrArgument.length;
		bIsDefault = false;
	}

	for (var i = 1; i < nCount; i += 2) 
	{
		if (varValue == arrArgument[i]) 
		{
			varRtnValue = arrArgument[i + 1];
			i = nCount;
		}
	}

	if (varRtnValue == null && bIsDefault) 
	{
		varRtnValue = arrArgument[arrArgument.length - 1];
	}

	return varRtnValue;
};

/**
* @class 로그 출력(실행환경이 넥사크로스튜디오, 로컬, 개발일 경우만)
* @param  {String} sMsg - 로그 출력 문자열
* @param  {String} sType - 로그 타입
* @return N/A
* @example this.gfnLog(e.message ,"error");
*/
pForm.gfnLog = function(sMsg, sType)
{
	var objApp = nexacro.getApplication();
	
	var arrLogLevel = ["debug","info","warn","error"];
	
	if (objApp.gvRunMode == "R") 	
	{
		return;
	}
	
	if (this.gfnIsNull(sType)) 		
	{
		sType = "debug";
	}
	
	if (system.navigatorname == "nexacro") 
	{
		if (sMsg instanceof Object) 
		{
			for(var x in sMsg)
			{
				trace("[" + sType + "] " + x + " : " + sMsg[x]);
			}
		} else 
		{
			trace("[" + sType + "] " + sMsg);
		}
	} else 
	{
		console.log(sMsg);
	}
}

/**
* @class Array 여부 반환
* @param {*} 확인할 값
* @return {Boolean}
* @example this.gfnIsArray(objData)
*/
pForm.gfnIsArray = function(value)
{
	if (Array.isArray)
	{
		return Array.isArray(value);
	}
	else
	{
		return Object.prototype.toString.call(value) === '[object Array]';
	}
}

/**
* @class value의 boolean 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} boolean 여부.
* @example
* trace(this.gfnIsBoolean(true));	// output : true
* trace(this.gfnIsBoolean("true"));	// output : false	
*/
pForm.gfnIsBoolean = function(value) 
{
	return typeof value == 'boolean';
}

/**
* @class value의 Date 여부 반환.
* @param {date} value 확인할 value.
* @return {boolean} Date 여부.
* @example
* var a = new Date();
* trace(this.gfnIsDate2(a));	// output : true
* var a = "20130501";
* trace(this.gfnIsDate2(a));	// output : false 	 
*/
pForm.gfnIsDate2 = function(value) 
{
	return Object.prototype.toString.call(value) === '[object Date]';
}


/**
* @class value의 number 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} number 여부.
* @example
* trace(this.gfnIsNumber(1234));	// output : true
* trace(this.gfnIsNumber("1234"));	// output : false	
*/		
pForm.gfnIsNumber = function(value) {
	return typeof value === 'number' && isFinite(value);
}
 
/**
* @class value의 Object 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} Object 여부.
* @example
* var o = new Object();
* trace(this.gfnIsObject(o));	// output : true
* var o = {};
* trace(this.gfnIsObject(o));	// output : true
* var o = [1,2,3];
* trace(this.gfnIsObject(o));	// output : false
* var o = new Button();
* trace(this.gfnIsObject(o));	// output : false
* var o = new Rect();
* trace(this.gfnIsObject(o));	// output : false
*/
pForm.gfnIsObject = function(value)
{
	if ( value === null || value === undefined ) return false;
	
	// nexacro Component
	if (this.gfnIsXComponent(value)) return false;
	
	// nexacro Object (e.g. Dataset)
	if( value instanceof nexacro.Object ) return false;
	
	return typeof value == "object" && 
		   'constructor' in value &&
		   value.constructor === Object;
},		

/**
* @class value의 nexacro component 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} nexacro component 여부.
* @example
* var a = new Button();
* trace(this.gfnIsXComponent(a));	// output : true
* var a = new Dataset();
* trace(this.gfnIsXComponent(a));	// output : false
* var a = new String();
* trace(this.gfnIsXComponent(a));	// output : false
*/
pForm.gfnIsXComponent = function(value) 
{
	if ( value === null || value === undefined  ) return false;	
	return value instanceof nexacro.Component;
},

/**
* @class value의 Function 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} Function 여부.
* @example
* trace(this.gfnIsFunction(this.isFunction));	// output : true
* this.testFunction = function()
* {
* }
* trace(this.gfnIsFunction(this.testFunction));	// output : true
*/
pForm.gfnIsFunction = function(value)
{
	return Object.prototype.toString.call( value ) === '[object Function]';
}

/**
* @class value의 빈값 여부 반환.<br>
* 1. null, undefined type : true 반환<br>
* 2. string, array type : length 가 0인 경우 true 반환<br>
* 3. object type : 하위 속성이 존재할 경우 true 반환<br>
* 4. boolean, number, date type : false 반환
* @param {*} value 확인할 value.
* @return {boolean} empty 여부.
* @example
* var a;	// undefined
* trace(this.gfnIsEmpty(a));	// output : true
* var a = null;	// null
* trace(this.gfnIsEmpty(a));	// output : true
* var a = "";	// string
* trace(this.gfnIsEmpty(a));	// output : true
* var a = "abc";	// string
* trace(this.gfnIsEmpty(a));	// output : false
* var a = [];	// array
* trace(this.gfnIsEmpty(a));	// output : true
* var a = [1,2,3];	// array
* trace(this.gfnIsEmpty(a));	// output : false
* var a = new Array();	// array
* trace(this.gfnIsEmpty(a));	// output : true
* var a = new Array(3);	// array
* trace(this.gfnIsEmpty(a));	// output : false
* var a = {};	// object
* trace(this.gfnIsEmpty(a));	// output : true
* var a = {a:'1', b:'2'};	// object
* trace(this.gfnIsEmpty(a));	// output : false
* var a = new Object();	// object
* trace(this.gfnIsEmpty(a));	// output : true
* var a = new Object();	// object
* a.test = "abc";
* trace(this.gfnIsEmpty(a));	// output : false
* var a = true;	// boolean
* trace(this.gfnIsEmpty(a));	// output : false
* var a = 0;	// number
* trace(this.gfnIsEmpty(a));	// output : false
* var a = new Date();	// date
* trace(this.gfnIsEmpty(a));	// output : false
*/
pForm.gfnIsEmpty = function(value)
{
	// null, undefined ==> true
	if ( value == null ) return true;
	
	// String, Array ==> length == 0
	if ( this.gfnIsString(value) )
	{
		return value.trim().length == 0 ? true : false;
	}
	else if ( this.gfnIsArray(value) )
	{
		return value.length == 0 ? true : false;
	}
	else if ( this.gfnIsObject(value) )
	{
		for (var p in value) 
		{
			if ( value.hasOwnProperty(p) )
			{
				return false;
			}
		}
		return true;
	}
	
	return false;
},

/**
* @class 파라미터로 여러개의 Object 를 검사할 때 하나라도 empty 이면 true 리턴한다.
* @param {*} value 확인할 value.
* gfnIsEmpty(GRID) : binddataset 이 empty인지 검사
* gfnIsEmpty(DATASET) : rowcount 가 0 인지 검사
* gfnIsEmpty(String) : trim().length 가 0인지 검사
* gfnIsEmpty(ARRAY) : length 가 0 인지 검사
* gfnIsEmpty(object) : value 가 empty 인지 검사
* gfnIsEmpty(null) : true 리턴
* @return {boolean} empty 여부.
* @example this.gfnIsEmpty2(obj.value)
*/
pForm.gfnIsEmpty2 = function () 
{
	for (var i = 0; i < arguments.length; i++) 
	{
		var obj = arguments[i];
		if (this.gfnIsNull(obj)) 
		{
			return true;
		}
		var objType = this.gfnGetObjectType(obj);
		switch (objType) 
		{
			case "Array":
				if (obj.length <= 0) 
				{
					return true;
				}
				break;
			case "String":
				if (obj.trim().length <= 0) 
				{
					return true;
				}
				break;
			case "Dataset":
				if (obj.rowcount <= 0) 
				{
					return true;
				}
				break;
			case "Grid":
				if (obj.binddataset.rowcount <= 0) 
				{
					return true;
				}
				break;
			case "Function":
			case "Boolean":
			case "Number":
			case "Date":
				//Pass
				break;
			default:
				if (this.gfnIsObject(obj)) 
				{
					return this.gfnIsEmpty(obj);
				}                    

				if (this.gfnIsEmpty2(obj.value)) 
				{
					return true;
				}
		}
	}
	return false;
}

/**
* @class not empty 여부 확인.
* @param {*} value 확인할 value.
* @return {boolean} empty 여부.
* @example this.gfnIsNotEmpty2(obj.value)
*/
pForm.gfnIsNotEmpty2 = function () 
{
	for (var i=0; i<arguments.length; i++) 
	{
		var obj = arguments[i];
		var chk = this.gfnIsEmpty2(obj);
		if (chk) 
		{
			return false;
		}
	}
	return true;
}

/**
* @class 오브젝트 유형을 문자열로 리턴한다. 
* @param obj 오브젝트
* @return 오브젝트의 유형
* @example this.gfnGetObjectType(obj)
*/    
pForm.gfnGetObjectType = function(obj) 
{
	if (this.gfnIsNull(obj)) {
		return null;
	} else if(this.gfnIsArray(obj)) {
		return "Array";
	} else if(this.gfnIsString(obj)) {
		return "String";
	} else if(this.gfnIsFunction(obj)) {
		return "Function";
	} else if(this.gfnIsBoolean(obj)) {
		return "Boolean";
	} else if(this.gfnIsDate2(obj)) {
		return "Date";
	} else if(this.gfnIsNumber(obj) || (typeof(obj) == "object" && typeof(obj.valueOf()) == "number")) { //BigDecimal 인 경우 처리
		return "Number";
	} else if(obj instanceof nexacro.Date){
		return "nexacro.Date";
	} else if(obj instanceof nexacro.Decimal){
		return "nexacro.Decimal";
	} else if(this.gfnTypeOf(obj)) {
		return this.gfnTypeOf(obj);
	}
	return "Object";
}

/**
* @class nexacro 객체의 type 반환.
* @param {*} obj Object, Component, Frame, .. 등 nexacro platform 모든 개체.
* @return {string} 객체 type.
* @example
* trace(this.gfnTypeOf(Button00));	// output : Button
* trace(this.gfnTypeOf(Tab00));	// output : Tab
* trace(this.gfnTypeOf(Tab00.tabpage1));	// output : TabpageControl
* trace(this.gfnTypeOf(Dataset00));	// output : Dataset
*/
pForm.gfnTypeOf = function(obj)
{
	var type;
	if ( obj && (typeof obj == "object"))
	{
		var s = obj.toString();
		if(s == "[object Object]") return type;
		
		type = s.substr(8, s.length-9);
	}
	return type;
}

/**
* @class form의 object가 있으면 해당 object를 반환하는 함수
* @param {Object} form  form object 객체
* @param {String} findObjName  검색 대상 object name
* @return {Object}
* @example this.gfnGetFormFindObj(objGrid.parent, objGrid.makeCompList[i])
*/    
pForm.gfnGetFormFindObj = function (obj, findObjName)
{	
	var pObj = obj;
	do 
	{
		if (this.gfnIsNull(pObj.all) == false)
		{
			if (this.gfnIsNull(pObj.all[findObjName]) == false) 
			{
				return pObj.all[findObjName];			
			}
		}
		pObj = pObj.parent;
	} while (!this.gfnIsNull(pObj));
}

/**
* 화면내 value의 Function 유무 반환
* @param {*} value 확인할 value.
* @return {boolean} Function 유무.
* @example this.gfnExistFunction("fnInit")
*/ 
pForm.gfnExistFunction = function(sValue)
{	
	if (this[sValue] == undefined) 
	{
		return false;
	} 
	else 
	{
		if (typeof(this[sValue]) == "function")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}


/**
* 안드로이드에서 웹브라우저가 zorder 최상위라 숨김
* @param {Object} objForm - Form 객체
* @param {Boolean} sVisible - 숨김여부
* @return N/A
* @example this.webBrowserVisible(this.form, true);
*/
pForm.webBrowserVisible = function(objForm, sVisible)
{
	if (system.navigatorname == "nexacro" && system.osversion.indexOf("Android") > -1)
	{
		var arrComp = objForm.components;
		if (this.gfnIsNull(arrComp)) return;
		
		for (var i = 0 ; i < arrComp.length ; i++)
		{
			if (arrComp[i] instanceof nexacro.Div)
			{
				this.webBrowserVisible(arrComp[i].form ,sVisible);//재귀함수
			}
			else if (arrComp[i] instanceof nexacro.WebBrowser)
			{
				arrComp[i].set_visible(sVisible);
			}
			else if (arrComp[i] instanceof nexacro.WebView)
			{
				arrComp[i].set_visible(sVisible);
			}
		}
	}
};

/**
* @class 입력 문자열중 숫자값만 남긴다.
* @param {String} strValue - 입력문자열
* @return {String} 숫자문자열
* @example this.gfnGetDigit(strDate);
*/
pForm.gfnGetDigit = function(strValue)
{
	var regExp = new RegExp("\\D","g");
	var strRet = strValue.replace(regExp,"");

	return strRet;
};

/**
* @class 왼쪽 문자 채우기
* @param {String} val - 문자열
* @param {String} pad - 채울 문자열(default : " "(공백) )
* @param {Number} len - 전체 문자 길이(default : 1 )
* @return {String}
* @example this.gfnLPad("1", 0, 2);
*/
pForm.gfnLPad = function(val, pad, len) 
{
	var sRet = "";
	var strVal = "";

	if (this.gfnIsNull(val)) return "";
	if (this.gfnIsNull(pad)) pad = " ";
	if (this.gfnIsNull(len)) len = 1;
	
	strVal = new String(val);
	
	if( strVal.length >= len ) return strVal;

	for(var valIdx = 0; valIdx < len - strVal.length; valIdx++) {
		sRet += pad;
	}

	sRet += strVal;
	
	return sRet;
};

/**
* @class 오른쪽 문자 채우기 <br>
* @param {String} val - 문자열
* @param {String} pad - 채울 문자열(default : " "(공백) )
* @param {Number} len - 전체 문자 길이(default : 1 )
* @return {String}
* @example this.gfnLPad("1", 0, 2);
*/
pForm.gfnRPad = function(val, pad, len) 
{
	var sRet = "";
	var strVal = val;

	if (this.gfnIsNull(val)) return "";
	if (this.gfnIsNull(pad)) pad = " ";
	if (this.gfnIsNull(len)) len = 1;
	
	if( strVal.length >= len ) return val;
	
	sRet = new String(val);

	for(var valIdx = 0; valIdx < len - strVal.length; valIdx++) {
		sRet += pad;
	}
	
	return sRet;
};

/**
* @class 소수점 반올림을 한다. <br>
* @param {Number} numVal - 숫자
* @param {Number} decimalPlaces - 반올림 자릿수
* @return {Number}
* @example
this.gfnRound("10.56", 1) ==> 10.6
this.gfnRound(10.56, 1)   ==> 10.6
*/
pForm.gfnRound = function(numVal, decimalPlaces) 
{
	var nNum;
	if( this.gfnIsNull(numVal) ) return 0;
	if( this.gfnIsNull(decimalPlaces) ) decimalPlaces = 0;
	
	nNum = Number(numVal);
	
	if( isNaN(nNum) ) return 0;
	
	return Number(nNum.toFixed(decimalPlaces));
};

pForm = null;