/**
*  devPro Library
*  @FileName 	Rest.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.04.18
*  @Description
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2023.04.18			TOBESOFT				RestAPI Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
* @class 서비스 호출 공통함수 <br>
*		Dataset의 값을 갱신하기 위한 서비스를 호출하고, 트랜젝션이 완료되면 콜백함수을 수행하는 함수
* @param {object} objForm - Form Object
* @param {object} objReqData - Transaction data Object
* 					{String} objReqData.serviceid - serviceid의 고유 ID
* 					{object} objReqData.dataobject - Dataobject
* 					{String} objReqData.method - method
* 					{String} objReqData.requesturl - requesturl
* 					{object} objReqData.postdata - postdata
* @param {String | function} fncCallback - callback 콜백함수
* @return {Boolean} true/false	
* @example this.gfnSetOpenPopup(sPopId, sPopupCallback, arg);
*/
pForm.gfnRequestDataObject = function(objForm, objReqData, fncCallback)
{
	if (this.gfnIsEmpty(objReqData))	return;
	
	var pThis = this.gfnNvl(objForm, this);
	var objFrame = pThis.getOwnerFrame();
	pThis.setWaitCursor(true, true);
	if (objFrame.form.divMsg)
	{
		objFrame.form.divMsg.form.stcMsq.set_text("");
	}
	
	var strServiceid = this.gfnNvl(objReqData["serviceid"], "");
	var dataobj = objReqData["dataobject"];
	var strMethod = this.gfnTrim(this.gfnNvl(objReqData["method"], "GET")).toUpperCase();
	var strRequestUrl = this.gfnTrim(objReqData["requesturl"]);
	var objData = objReqData["postdata"];

	var objHeader = this.gfnGetHeaders();

	var strUrl = nexacro.getEnvironment().services["svcUrl"].url + strRequestUrl;
	
	var objParam = {
					httpheader : objHeader,
					async : true
	};
	
	if (objData)
	{
		switch(strMethod)
		{
			case "GET" :
				var strParams = this.gfnToQueryString(objData);
				if (strUrl.includes('?'))
				{
					strUrl += '&' + strParams;
				}
				else
				{
					strUrl += '?' + strParams;
				}
				break;
			case "DELETE" :
				var strParams = this.gfnToQueryString(objData);
				if (strUrl.includes('?'))
				{
					strUrl += '&' + strParams;
				}
				else
				{
					strUrl += '?' + strParams;
				}
				objParam["postdata"] = JSON.stringify(objData);
				break;
			default :
				objParam["postdata"] = JSON.stringify(objData);
				break;	
		}
	}
	
	dataobj.setEventHandler("onsuccess", function(_obj, _e) {
		pThis.setWaitCursor(false, true);
		
		if (_e.statuscode == 200)
		{
//         trace(_obj.getAllResponseHeaders())
//         trace(_obj.getResponse())
		}
		else if (_e.statuscode > 200)
		{
			_e.preventDefault();
		}
		/*
		var objResponseData = this.gfnParseResponseData(_obj);
	
		if (pThis.getOwnerFrame().form.divMsg)
		{
			pThis.getOwnerFrame().form.divMsg.form.stcMsq.set_text("정상처리");
		}	
	
		var objResolve = {
							url : _e.url,
							status : _e.statuscode,
							data : objResponseData
		};
	
		pThis._gfnExecuteCallbackDataObject(pThis, _e.serviceid, 0, objResolve, fncCallback);
		*/
	}, pThis);
	
	dataobj.setEventHandler("onerror", function(_obj, _e) {
		pThis.setWaitCursor(false, true);
		
		var objResponseData = this.gfnParseResponseData(_obj);
	
		var errors = objResponseData.errors;
		var errMsg = "";
		
		if (errors && errors.length)
		{
			errMsg = _e.statuscode + " 오류발생";
		}
	
		this.alert(errMsg);
	
		if (pThis.getOwnerFrame().form.divMsg)
		{
			pThis.getOwnerFrame().form.divMsg.form.stcMsq.set_text("오류발생");
		}	
	
		var objResolve = {
							url : _e.url,
							status : _e.statuscode,
							data : objResponseData
		};
	
	//	pThis._gfnExecuteCallbackDataObject(pThis, _e.serviceid, -1, objResolve, fncCallback);
	
	}, pThis);
	
// 	dataobj.setEventHandler("onload", function(_obj, _e) {
// 		pThis.setWaitCursor(false, true);
// 		pThis._gfnExecuteCallbackDataObject(pThis, _e.serviceid, 0, "", fncCallback);
// 	
// 	}, pThis);	
	
	//20230705 1500 버전부터 사용가능
	dataobj.setEventHandler("onloaddatasets", function(_obj, _e) {
		pThis._gfnExecuteCallbackDataObject(pThis, "" 		, 0, "", fncCallback);
	
	}, pThis);		
	
	
	dataobj.request(strServiceid, strMethod, strUrl, objParam);
}

/**
* @class 공통 콜백 함수
* @param {object} objForm - Form Object
* @param {String} strSvcId - serviceid
* @param {String} nErrorcode
* @param {object} objResolve
* @param {String | function} fncCallback - callback 콜백함수
* @return N/A
* @example this._gfnExecuteCallbackDataObject(this, "serviceid", 0, objResolve, fncCallback);
*/
pForm._gfnExecuteCallbackDataObject = function(objForm, strSvcId, nErrorcode, objResolve, fncCallback)
{
	//에러가 발생해도 각 Form 의 callbackk은 호출한다
	if (this.gfnIsEmpty(fncCallback))	return;
	
	if (typeof fncCallback == "function")
	{
		fncCallback.call(objForm, strSvcId, nErrorcode, objResolve);
	}
	else if (typeof fncCallback == "string")
	{
		if (!objForm.gfnIsFunction(objForm[fncCallback]))	return;
		
		objForm[fncCallback].call(objForm, strSvcId, nErrorcode, objResolve);
	}
}

/**
* @class ResponseData 파싱
* @param {object} dtObj - DataObject
* @return {object} ResponseData JSON -> object 로 변경
* @example this.gfnParseResponseData(_obj);
*/
pForm.gfnParseResponseData = function(dtObj)
{
	var objResponseData = dtObj.getResponse();
	var contentType = dtObj.getResponseHeader("content-Type") || "";
	if (contentType.indexOf("application/json") > -1 && objResponseData)
	{
		objResponseData = JSON.parse(objResponseData);
	}
	return objResponseData;
}

/**
* @class 공통 http Headers 정보 
* @param  none
* @return {object} Headers 정보
* @example this.gfnGetHeaders();
*/
pForm.gfnGetHeaders = function()
{
	var objApp = nexacro.getApplication();
	var accessToken = objApp.gvAccessToken;
	var objRtn = {
					"Content-Type" : "application/json; charset=UTF-8",
					"Access-Control-Allow-Origin" : "*"
	};
	
	if (!this.gfnIsEmpty(accessToken))
	{
		objRtn["Authorization"] = "Bearer" + accessToken;
	}
	
	return objRtn;	
}

/**
* @class  데이터를 QueryString 형태로 전환
* @param {Object} objData -JSON
* @return {String} QueryString
* @example this.gfnToQueryString(objData);
*/
pForm.gfnToQueryString = function(objData)
{
	if (this.gfnIsEmpty(objData))
	{
		return "";		
	}
	
	return Object.entries(objData).map(function(entry) {
		return entry[0] + "=" + (entry[1] || "");	
	}).join("&");
}

/**
* @class  원본 object에 object를 Merge한다
* @param {object} objTo - 원본 object
* @param {object} objFrom - 추가 object
* @param {String} bClear - Merge 전 원본 Object 초기화여부
* @return {object} Merge된 Object
* @example this.gfnObject2Object(objTo, objFrom, bClear);
*/
pForm.gfnObject2Object = function(objTo, objFrom, bClear)
{
	if (bClear)
	{
		for (var strToId in objTo)
		{
			objTo[strId] = null;
		}
	}
	
	for (var strFromId in objForm)
	{
		objTo[strFromId] = objFrom[strFromid];
	}
	
	return objTo;
}

/**
* @class  데이터셋 전체를 JSON으로 변환
* @param {object} objDs - 원본 Dataset
* @return {Array} JSON Object
* @example this.gfnDataset2JSON(this.dsList4, nRow);
*/
pForm.gfnDataset2JSON = function(objDs, nRow, strColList)
{
	var arrColId = new Array();
	
	if (this.gfnIsEmpty(strColList == false))
	{
		arrColId = strColList.split(",");
	}
	else
	{
		for (var j = 0; j < objDs.getColCount(); j++)
		{
			arrColId.push(objDs.getColID(j));
		}
	}
	
	nRow = this.gfnNvl(nRow, 0);
	
	if (arrColId.length <= 0 || objDs.getRowCount() <= nRow)	return;
	
	var arrRowData = new Array();
	
	for (var j = 0; j <arrColId.length; j++)
	{
		var strColId = this.gfnTrim(arrColId[j]);
		arrRowData[j] = nexacro.wrapQuote(strColId) + ":" + nexacro.wrapQuote(this.gfnNvl(objDs.getColumn(nRow, strColId), ""));
	}
	return JSON.parse("{" + arrRowData.join(",") + "}");
}

/**
* @class  데이터셋 전체를 JSON으로 변환한다(gfnDataset2JSONList 내부에서 사용)
* @param {object} objDs - 원본 Dataset
* @param {object} nRow - 로우인덱스
* @param {Array} arrColId - 컬럼명
* @return {Array} JSON Object
* @example this.gfnDatasetRow2JSON(objDs, i, arrColId);
*/
pForm.gfnDatasetRow2JSON = function(objDs, nRow, arrColId)
{
	var arrRowData = new Array();
	var nCnt = arrColId.length
	for (var j = 0; j < nCnt; j++)
	{
		var strColId = this.gfnTrim(arrColId[j]);
		arrRowData[j] = nexacro.wrapQuote(strColId) + ":" + nexacro.wrapQuote(this.gfnNvl(objDs.getColumn(nRow, strColId), ""));
	}
	
	return arrRowData;
}

/**
* @class  데이터셋을 조건에 맞춰 JSON으로 변환한다
* @param {object} objDs - 원본 Dataset
* @param {string} sType - U, A, N
					"U" I, U, D, Status
					"A" I, U, D, N, Status
					"N" I, U, N
* @param {string} strColList - 변경대상 컬럼
* @return {Array} JSON - Object
* @example
* arrList = this.gfnDataset2JSONList(objDs, "A", "column1,column2");		
* arrList = this.gfnDataset2JSONList(objDs, "U");		
* arrList = this.gfnDataset2JSONList(objDs, "N");				
* arrList = this.gfnDataset2JSONList(objDs);	
*/
pForm.gfnDataset2JSONList = function(objDs, sType, strColList)
{
	var arrColId = new Array();
	
	if (this.gfnIsEmpty(strColList) == false)
	{
		arrColId = strColList.split(",");
	}
	else
	{
		for (var j = 0; j < objDs.getColCount(); j++)
		{
			arrColId.push(objDs.getColID(j));
		}
	}
	
	if (arrColId.length <= 0 || objDs.getRowCount() <= 0)	return;
	
	if (this.gfnIsNull(sType))
	{
		sType = "N";
	}
	else
	{
		sType = sType.toUpperCase();
	}
	
	var arrRowData = new Array();
	var arrListData  = new Array();
	
	//삭제데이터
	if (sType != "N")
	{
		var nDelCnt = objDs.getDeletedRowCount();
		for (var i = 0; i < nDelCnt; i++)
		{
			for (var j = 0; j <arrColId.length; j++)
			{
				var strColId = this.gfnTrim(arrColId[j]);
				arrRowData[j] = nexacro.wrapQuote(strColId) + ":" + nexacro.wrapQuote(this.gfnNvl(objDs.getDeletedColumn(i, strColId), ""));
			}
			arrRowData[j] = nexacro.wrapQuote("rowtype") + ":" + nexacro.wrapQuote("D");
			arrListData.push(JSON.parse("{" + arrRowData.join(",") + "}"));
		}
	}	
	
	//삭제 외 데이터
	for (var i = 0; i < objDs.rowcount; i++)
	{
		var nType = objDs.getRowType(i);
		
		if (nType == Dataset.ROWTYPE_INSERT) //추가데이터
		{
			arrRowData = this.gfnDatasetRow2JSON(objDs, i, arrColId);
			if (sType != "N")
			{
				arrRowData[arrRowData.length] = nexacro.wrapQuote("rowtype") + ":" + nexacro.wrapQuote("I");
			}
			arrListData.push(JSON.parse("{" + arrRowData.join(",") + "}"));

		}
		else if (nType == Dataset.ROWTYPE_UPDATE)  //수정데이터
		{
			arrRowData = this.gfnDatasetRow2JSON(objDs, i, arrColId);
			if (sType != "N")
			{
				arrRowData[arrRowData.length] = nexacro.wrapQuote("rowtype") + ":" + nexacro.wrapQuote("U");
			}
			arrListData.push(JSON.parse("{" + arrRowData.join(",") + "}"));

		}	
		else if (nType == Dataset.ROWTYPE_NORMAL) // 초기행
		{			
			if (sType != "U")
			{
				arrRowData = this.gfnDatasetRow2JSON(objDs, i, arrColId);
				arrListData.push(JSON.parse("{" + arrRowData.join(",") + "}"));
			}
		}
	}
	
	return arrListData;	
}

/**
* @class  JSON을 Dataset으로 변경
* @param {object} objData - JSON
* @param {object} objDs - 대상 Dataset
* @param {Boolean} bCheckCol - Column 체크여부(true 면 존재하는 컬럼에만 setColumn)
* @param {Boolean} bCtrlEnable - enableevent 사용여부
* @return N/A
* @example this.gfnObject2Dataset(objResolveData["data"].data, this.dsList4);
*/
pForm.gfnObject2Dataset = function(objData, objDs, bCheckCol, bCtrlEnable)
{
	bCtrlEnable = this.gfnNvl(bCtrlEnable, true) == false ? false : true;
	var bEnableEvent = objDs.enableevent;
	if (bCtrlEnable == true && bEnableEvent == true)
	{
		objDs.set_enableevent(false);
	}
	
	objDs.clearData();
	this.gfnAddRowFromObject(objDs, objData, bCheckCol);
//	this.gfn_setFirstRow(objDs);	//첫번째 row로 이동
	objDs.set_rowposition(0);
	if (bCtrlEnable == true && bEnableEvent == true)
	{
		objDs.set_enableevent(true);
	}	
}

/**
* @class  데이터셋 전체를 JSON으로 변환한다
* @param {Dataset} objDs - Target Dataset
* @param {Object} objData - source JSON Object or JSON Object Array
* @param {Boolean} bCheckCol - Column 체크여부(true 면 존재하는 컬럼에만 setColumn)
* @return N/A
* @example this.gfnAddRowFromObject(objDs, objData, bCheckCol);
*/
pForm.gfnAddRowFromObject = function(objDs, objData, bCheckCol)
{
	var arrData = new Array();
	if (this.gfnIsArray(objData) == true)
	{
		arrData = objData;
	}
	else
	{
		arrData.push(objData);
	}
	
	for (var i = 0; i < arrData.length; i++)
	{
		if (!this.gfnIsObject(arrData[i]) || this.gfnIsEmpty(arrData[i]))	continue;
		var nRow = objDs.getRowCount();
		for (var strId in arrData[i])
		{
			if (bCheckCol != true || this.gfnIsExitColumn(objDs, strId) == true)
			{
				this.gfnAddSetColumnRow(objDs, nRow, strId, arrData[i][strId]);
			}
		}
	}
}

/**
* @class  컬럼존재유무
* @param {Dataset} objDs - Target Dataset
* @param {string} strColId - 컬럼명
* @return {Boolean} true/false	
* @example this.gfnIsExitColumn(objDs, strId)
*/
pForm.gfnIsExitColumn = function(objDs, strColId)
{

}

/**
* @class  Dataset에 column 이 없으면 생성
* @param {Dataset} objDs - Target Dataset
* @param {String} strColId - 컬럼아이디
* @param {String} strColType - 컬럼타입
* @param {Number} nColSize - 컬럼사이즈
* @return N/A
* @example this.gfnAddColumn(objDs, strColId, "string");
*/
pForm.gfnAddColumn = function(objDs, strColId, strColType, nColSize)
{
	if (objDs.getColumnInfo(strColId) == null)
	{
		strColType = this.gfnNvl(strColType, "string");
		nColSize = this.gfnNvl(nColSize, 256);
		
		objDs.addColumn(strColId, strColType, nColSize);
	}
}

/**
* @class  Dataset에 행추가 후 값 설정
* @param {Dataset} objDs - Target Dataset
* @param {String} strColId - 컬럼아이디
* @param {String} strValue - 값
* @return N/A
* @example 	this.gfnAddSetColumn(objDs, strColId, strValue);
*/
pForm.gfnAddSetColumn = function(objDs, strColId, strValue)
{
	//Dataset에 column 이 없으면 생성
	this.gfnAddColumn(objDs, strColId, "string");
	
	var nRow = 0;
	if (objDs.getRowCount() <= 0)
	{
		nRow = objDs.addRow();
	}
	
	objDs.setColumn(nRow, strColId, strValue);
}

/**
* @class Dataset의 마지막행부터 행추가 후 값 설정
* @param {Dataset} objDs - Target Dataset
* @param {Number} nRow - 추가행수
* @param {String} strColId - 컬럼아이디
* @param {Array} strValue - 값
* @return N/A
* @example 	this.gfnAddSetColumnRow(objDs, nRow, strId, arrData[i][strId]);
*/
pForm.gfnAddSetColumnRow = function(objDs, nRow, strColId, strValue)
{
	//Dataset에 column 이 없으면 생성
	this.gfnAddColumn(objDs, strColId, "string");
	
	objDs.set_updatecontrol(false);
	for (var i = objDs.getRowCount(); i <= nRow; i++)
	{
		nAddRow = objDs.addRow();
	}
	
	objDs.setColumn(nRow, strColId, strValue);
	objDs.set_updatecontrol(true);
}

pForm = null;