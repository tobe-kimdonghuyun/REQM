/**
*  devPro Library
*  @FileName 	Comp.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2020.11.24
*  @Description
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2020.11.24			TOBESOFT				Component Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
* @class 공통코드콤보설정(Combo/Grid) <br>
* @param {Array} param - 콤보 파라미터
* @param {String} [sLocale] - 언어(KO, EN)
* @param {String} [sLocalGubun] - 로컬코드 사용 여부 
* @return N/A
* @example 
* var param = [
		  {biztype:"Combo", code:"0000",  objid: this.divSearch.cboSys} 		//시스템구분
		, {biztype:"Radio", code:"0228",  objid: this.rdoVtMenuYn} 			//가상메뉴여부 
		, {biztype:"Combo", code:"0288", selecttype:"A",  objid: this.div_Search.cbo_UseYn} 	//사용여부
    ];
    
	this.gfn_getCommonCode(param);
*/  
pForm.gfnGetCommonCode = function(param, sLocale)
{
    var objApp = nexacro.getApplication();
	var objDs =  objApp.gdsCommCode;	// 서버 조회 데이터;
	
	// QuickView
	if (nexacro._quickview_formurl) {
		var strSvcId    = "searchQuickViewCommCodeList";
		var strSvcUrl   = "searchQuickViewCommCodeList.do";
		var inData      = "";
		var outData     = "gdsCommCode=dsComboData";
		var strArg      = "";	
		var callBackFnc = "fnCallback";
		
		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
							strSvcUrl , 	// trabsaction을 요청할 주소
							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
							callBackFnc,
							false);   // 통신방법 정의 [생략가능]
	}

	// 다국어 처리
	var v_sLang = "ko";
    for (var idx in param)
	{
        if (!this.gfnIsNull(param[idx].objid)) 
		{
            // 여기는 무조건 단일값
            var bizType 	 = param[idx].biztype;
            var code 		 = param[idx].code;
			
			// Code Column 추가
            var codecol		 = param[idx].codecol==undefined?"SSC_CD":param[idx].codecol;
            var data 		 = param[idx].data==undefined?"SSC_CD_KORN_NM":param[idx].data;
            var selecttype   = param[idx].selecttype==undefined?"":param[idx].selecttype;
            var bindcolumn   = param[idx].bindcolumn;
            var edit		 = param[idx].edit;
            var sortcolumn	 = param[idx].sortcolumn==undefined ? "SORT_ORDR" : param[idx].sortcolumn;
            var sortmethod	 = param[idx].sortmethod==undefined ? "asc" : param[idx].sortmethod;
            var filterstring = param[idx].filterstring==undefined ? "" : param[idx].filterstring;
            var direction    = param[idx].direction==undefined ? "horizontal" : param[idx].direction;
            var align 		 = param[idx].align==undefined?"center":param[idx].align;
            
            var componentName = this._gfnGetComponentFullName(param[idx].objid);

            if (this.gfnIsNull(componentName))
			{
                return;
            }
            var dsName = "ds_"+componentName+"_"+code;
            var dsComboName = this._gfnGetDataSet(dsName);

            //값복사 시작
            if (this.gfnIsNull(filterstring))
			{
				objDs.filter("HCL_CD == '"+code+"'");
            }
            else 
			{
				objDs.filter("HCL_CD == '"+code+"' && ("+filterstring + ")");
            }

			var nRowCnt = dsComboName.copyData(objDs,true);

			//2016.07.14 아래에서 전체에 % 가 추가됐다는 구분을 하기 위해서 별도의 컬럼을 추가한다. (TYPE)
			//			 TYPE = 0 = false, 1 = true
			var sColNm = "SEL_TYPE";
			dsComboName.addColumn(sColNm, "string");
            //alert("nRowCnt : "+nRowCnt);
			objDs.filter(filterstring);
            if (dsComboName.rowcount == 0)
			{
                continue;
            }
            //정렬
            if (!this.gfnIsNull(sortcolumn))
			{
                if (!this.gfnIsNull(sortmethod))
				{
                    sortmethod = "asc";
                }
                dsComboName.keystring = "S:"+(sortmethod=="asc"?"+":"-")+sortcolumn;
                dsComboName.updateSortGroup();
            }
			
            //초기값 설정
            if (!this.gfnIsNull(selecttype))
			{
                switch (selecttype)
				{
                    case "A": 
						if(param[idx].objid instanceof Radio)
						{
							this._gfnInsertDefaultRow(dsComboName, "전체", data, selecttype, codecol);
						}
						else
						{
							this._gfnInsertDefaultRow(dsComboName, "- 전체 -", data, selecttype, codecol, "");
						}
                        break;
                    case "S": 
						this._gfnInsertDefaultRow(dsComboName, "- 선택 -", data, selecttype, codecol);
                        break;
                    case "N": 
                        if (param[idx].objid instanceof Combo || param[idx].objid instanceof MultiCombo)
						{
                            this._gfnInsertDefaultRow(dsComboName, "", data, selecttype, codecol);
                        }
                        break;
                }
            }
            if (param[idx].objid instanceof Combo || param[idx].objid instanceof MultiCombo)
			{
                param[idx].objid.set_innerdataset(dsComboName);
				param[idx].objid.set_codecolumn(codecol);

                if (this.gfnIsNull(param[idx].data)){
					param[idx].objid.set_datacolumn("SSC_CD_KORN_NM");
				} else {
					param[idx].objid.set_datacolumn(param[idx].data);
				}
				//2016.08.04 공통코드 셋팅이전에 값이 없을 경우에 index=0 을 반영한다.
				if(this.gfnIsNull(param[idx].objid.value))
					param[idx].objid.set_index(0);

            } 
			else if (param[idx].objid instanceof Radio)
			{
				var bEnabe = param[idx].objid.enable;
				param[idx].objid.set_enable(true);
                param[idx].objid.set_innerdataset(dsComboName);
                //2016.08.11 KSK 잠금처리되어있던 부분 다시 활성화 처리함
				param[idx].objid.set_codecolumn(codecol);
//                param[idx].objid.set_codecolumn("COMM_CODE");
                if (this.gfnIsNull(param[idx].data)){
					param[idx].objid.set_datacolumn("SSC_CD_KORN_NM");
				} else {
					param[idx].objid.set_datacolumn(param[idx].data);
				}
				
                if (direction == "horizontal"){
					param[idx].objid.set_columncount(dsComboName.rowcount);
                } else if (direction == "vertical"){
					param[idx].objid.set_direction("vertical");            
                }
                if(!bEnabe)
				{
					param[idx].objid.set_enable(bEnabe);
				}
            } 
			else if (param[idx].objid instanceof Grid)
			{
                var nCellIdx = this._gfnGetCellIdx(param[idx].objid, bindcolumn);
                if (this.gfnIsNull(bindcolumn) || nCellIdx == -1)
				{
                    return;
                }
                //실제로 해당되는 컬럼 display, edit type 변경 및 Dataset 바인딩
                if (!this.gfnIsNull(edit) && edit == "true")
				{
					var sDisplay = param[idx].objid.getCellProperty("body", nCellIdx, "displaytype");
					var sEdit = param[idx].objid.getCellProperty("body", nCellIdx, "edittype");
					if( this.gfnIsNull(sDisplay) || sDisplay=="normal") sDisplay = "combocontrol";
					if( this.gfnIsNull(sEdit) || sEdit=="none") sEdit = "combo";
					
					param[idx].objid.setCellProperty("body", nCellIdx, "displaytype", sDisplay);
                    param[idx].objid.setCellProperty("body", nCellIdx, "edittype", sEdit);
                }
				else
				{
					param[idx].objid.setCellProperty("body", nCellIdx, "displaytype", "combotext");
				}
				
                param[idx].objid.setCellProperty("body", nCellIdx, "combodataset", dsComboName.name);
                param[idx].objid.setCellProperty("body", nCellIdx, "combocodecol", codecol);
				
                if (this.gfnIsNull(param[idx].data))
				{
					param[idx].objid.setCellProperty("body", nCellIdx, "combodatacol", "SSC_CD_KORN_NM");
				} 
				else 
				{
					param[idx].objid.setCellProperty("body", nCellIdx, "combodatacol", param[idx].data);
				}
                param[idx].objid.setCellProperty("body", nCellIdx, "textAlign", align);
            } 
			else if (param[idx].objid instanceof Dataset)
			{
				param[idx].objid.copyData(dsComboName);
			}
			
        }
		else 
		{
			trace(param[idx].objid.name + " ==> 전달된 Component가 유효하지 않습니다");
		}
    }
	try
	{
		if (typeof(this.afterCommCodeLoad) == "function")
		{
			this.afterCommCodeLoad();
		}
	} 
	catch(e) 
	{
	
	}
};


/**
* @class  바인드되어 있는 Dataset에 해당되는 ColumnId 를 가지고 있는 Cell의 Index 반환 <br>
* @param {Object} objGrid - 그리드 Object
* @param {String} strCompColumnId - 컴포넌트 컬럼 ID
* @return {int} i - 컬럼 Index (못찾는 경우 -1)
* @example this._gfnGetCellIdx(param[idx].objid, bindcolumn);
*/  
pForm._gfnGetCellIdx = function(objGrid, strCompColumnId) 
{
    var nCellCnt = objGrid.getCellCount("body");
    for (var i=0; i<nCellCnt; i++){
		var strTemp = objGrid.getCellProperty("body",i,"text");
		
		if (this.gfnIsNull(strTemp))
		{
			continue;
		}		
		var nIdx = strTemp.indexOf(":");
		var strColumnId = strTemp.substr(nIdx+1, strTemp.length);
        if (strColumnId == strCompColumnId){
            return i;
        }
    }
    return -1;
};

/**
* @class DataSet이 존재하면 그대로 리턴하고 없으면 생성해서 리턴함 <br>
* @param {String} sDatasetNm - DataSet Name
* @return {Object} 생성된 데이터셋
* @example this._gfnGetDataSet("dsName");
*/ 
pForm._gfnGetDataSet = function(sDatasetNm, columnInfo)
{
	var objDataset;
	if (!this.isValidObject(sDatasetNm)){
		objDataset = new Dataset();
		objDataset.set_name(sDatasetNm);
		this.addChild(sDatasetNm, objDataset);
        if (this.gfnIsNotNull(columnInfo)) {
            for(var i=0; i<columnInfo.length; i++) {
                objDataset.addColumn(columnInfo[i],"string");
            }
        }		
		
	} else {
		objDataset = this.objects[sDatasetNm];
	}
	
	return objDataset;
};

/**
* @class  현재 컴포넌트 전체이름(경로)을 반환 <br>
* @param {String} objComp - Component Object id
* @return {String} Object Component 전체 경로
* @example this._gfnGetComponentFullName(objId);
*/ 
pForm._gfnGetComponentFullName = function(objComp)
{
    var sFullName = "";
    while(!this.gfnIsNull(objComp.parent.name) 
       && (objComp.parent.toString().toUpperCase() != "[OBJECT CHILDFRAME]")) 
    {
        sFullName = objComp.name + (this.gfnIsNull(sFullName)?"":"_") + sFullName;
        objComp = objComp.parent;
    }
    return sFullName;
};

/**
* @class  첫번째 Row 행추가 <br>
* @param {Object} Object - 추가할 데이터셋 Object
* @param {String} value - 추가할 데이터 값
* @param {Dataset} datacolumn - 추가할 데이터셋 데이터 컬럼
* @param {String} selecttype - 추가하는 Type
* @param {String} [codecolumn] - 추가할 데이터셋 코드 컬럼
* @param {String} [sCodeVal] - 추가할 데이터셋 코드 값
* @return {String} value - cn
* @example this._gfnInsertDefaultRow(dsComboName, "전체", data, selecttype);
*/  
pForm._gfnInsertDefaultRow = function(ds, value, datacolumn, selecttype, codecolumn, sCodeVal)
{
	if(this.gfnIsNull(codecolumn))
		codecolumn = "SSC_CD";
	
    if (ds.insertRow(0) != -1){
		ds.setColumn(0, "SEL_TYPE", selecttype);
		
		switch(selecttype){
			case "A":
				if(this.gfnIsNull(sCodeVal)){
					sCodeVal = "";
				}
				
				ds.setColumn(0, codecolumn, sCodeVal);
				
			break;
			case "S":
			case "N":
			case "":
				if(this.gfnIsNull(sCodeVal)){
					sCodeVal = "";
				}
				
				ds.setColumn(0, codecolumn, sCodeVal);
			break;
		}

		if (this.gfnIsNull(datacolumn)){
			ds.setColumn(0,"SSC_CD_KORN_NM",value);
		}else {
			ds.setColumn(0,datacolumn,value);
		}
    }
};

/**
* @class 공통코드콤보설정 서버조회방식  <br>
* @param {Array} param - 콤보 파라미터
* @return N/A
* @example 
* var param = [
		  {biztype:"Combo", code:"0000", objid: this.divSearch.cboSys} 						//시스템구분
		, {biztype:"Radio", code:"0228", objid: this.rdoVtMenuYn} 							//가상메뉴여부 
		, {biztype:"Combo", code:"0288", objid: this.div_Search.cbo_UseYn, selecttype:"A"} 	//사용여부
    ];
    
	this.gfnGetCommonCodeEx(param);
*/  
pForm.gfnGetCommonCodeEx = function(param)
{
    var columnInfo = ["comboName", "dsName", "codeGroup", "style", "dsOut"];
	var dsReq = this._gfnGetDataSet("dsComboRequest", columnInfo);
	dsReq.clearData();
	var inDS = "input1=" + dsReq.name + " ";
	var outDS = "";	
	var nCnt = 1;
    for (var idx in param)
	{
        if (!this.gfnIsNull(param[idx].objid)) 
		{
            var code 		 = param[idx].code;
            var bizType 	 = param[idx].biztype;			
			// Code Column 추가
            var codecol		 = param[idx].codecol==undefined?"SSC_CD":param[idx].codecol;
            var data 		 = param[idx].data==undefined?"SSC_CD_KORN_NM":param[idx].data;
            var bindcolumn   = param[idx].bindcolumn;            
            var componentName = this._gfnGetComponentFullName(param[idx].objid);
			var selecttype   = param[idx].selecttype==undefined?"":param[idx].selecttype;//S : -선택-, A -전체-, R: 전체, N : ""
			var edit		 = param[idx].edit;
			
            if (this.gfnIsNull(componentName)){
                return;
            }
            var dsName = "ds_"+componentName+"_"+code;
            var dsComboName = this._gfnGetDataSet(dsName);

            switch(bizType){
                case "Combo" :
                    param[idx].objid.set_displayrowcount(20);
                case "Radio" :
					param[idx].objid.set_innerdataset(dsComboName);
					param[idx].objid.set_codecolumn(codecol);
					param[idx].objid.set_datacolumn(data);
						
					outDS += dsComboName.name + "=output" + nCnt + " ";	
                    break;
                case "Grid" : 
					var nCellIdx = this._gfnGetCellIdx(param[idx].objid, bindcolumn);
					if (this.gfnIsNull(bindcolumn) || nCellIdx == -1){
						return;
					}
					param[idx].objid.setCellProperty("Body", nCellIdx, "combodisplayrowcount", 10);
					
					if (!this.gfnIsNull(edit) && edit == "true"){
						var sDisplay = param[idx].objid.getCellProperty("body", nCellIdx, "displaytype");
						var sEdit = param[idx].objid.getCellProperty("body", nCellIdx, "edittype");
						if( this.gfnIsNull(sDisplay) || sDisplay=="normal") sDisplay = "combocontrol";
						if( this.gfnIsNull(sEdit) || sEdit=="none") sEdit = "combo";
						
						param[idx].objid.setCellProperty("body", nCellIdx, "displaytype", sDisplay);
						param[idx].objid.setCellProperty("body", nCellIdx, "edittype", sEdit);
					}else{
						param[idx].objid.setCellProperty("body", nCellIdx, "displaytype", "combotext");
					}

					param[idx].objid.setCellProperty("body", nCellIdx, "combodataset", dsComboName.name);
					param[idx].objid.setCellProperty("body", nCellIdx, "combocodecol", codecol);
					param[idx].objid.setCellProperty("body", nCellIdx, "combodatacol", data);
					outDS += dsComboName.name + "=output" + nCnt + " ";
                    break;
					
                case "Dataset" :
					outDS += param[idx].objid + "=output" + nCnt + " ";	
                    break;					

                default : 
                    trace(param[idx].objid.name + " ==> 전달된 Component가 유효하지 않습니다");
                    continue;
            }

            var rowNum = dsReq.addRow();
            dsReq.setColumn(rowNum, "dsName"	, dsComboName.name);
			dsReq.setColumn(rowNum, "dsOut"		, "output" + nCnt);
            dsReq.setColumn(rowNum, "codeGroup"	, code);
            dsReq.setColumn(rowNum, "style"		, selecttype);			
			
			nCnt++;

        }
		else {
			trace(param[idx].objid.name + " ==> 전달된 Component가 유효하지 않습니다");
		}
    }

	if (dsReq.rowcount > 0){
		
		var strSvcId    = "searchCodeDataList";
		var strSvcUrl   = "searchCodeDataList.do";
		var strArg      = "";	
		var callBackFnc = "gfnCommCodeCallback";
		
		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
							strSvcUrl , 	// trabsaction을 요청할 주소
							inDS , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
							outDS , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
							callBackFnc);   // 통신방법 정의 [생략가능]		
	}
};

/**
* @class 공통코드콤보설정 서버조회방식용 콜백 호출  <br>
* @param {String} svcID - 서비스ID.
* @param {Number} errorCode - 에러코드.
* @param {Number} errorMsg - 에러메시지.
* @return N/A
* @example this.gfnCommCodeCallback(svcID, errorCode, errorMsg);
*/
pForm.gfnCommCodeCallback = function(svcID, errorCode, errorMsg)
{
	// 에러 공통 처리
	if(errorCode != 0)
	{
		switch(errorCode)
		{
			case -1 :
				// 서버 오류입니다.\n관리자에게 문의하세요.
				this.gfnAlert("msg.server.error");
				return;
				// return; 서버 에러 와 업무 에러 코드 분리시에 return 처리 결정
				break;
				
			case -2463215:
				//@todo : 임의 에러코드  처리
				//return false;
				break;
		}
	}

	// form에 callback 함수가 있을때
	if (this["fnAfterCommCodeLoad"]) this.lookupFunc("fnAfterCommCodeLoad").call( errorCode, errorMsg);
	
};

/**
* @class dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
* @param {Object} objDs - 대상 dataset
* @param {String} sIdCol - 키칼럼
* @param {String} sId - 키값
* @param {String} sSubCol - 서브키칼럼
* @param {String} sSubId - 서브 키값
* @return {Number} rowpostion
* @example this.gfnFindData(this.dsMenu, "MENUID", "1000");
*/ 
pForm.gfnFindData = function (objDs, sIdCol, sId, sSubCol, sSubId)
{
	var arrArgument = this.gfnFindData.arguments;
	
	if (this.gfnIsNull(sSubCol)) 
	{
		return objDs.findRow(sIdCol, sId);
	}
	
	return objDs.findRowExpr(sIdCol + " == '" + sId + "' && " + sSubCol + " == '" + sSubId + "'");
};

/**
* @class dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
* @param {Object} objDs - 대상 dataset
* @param {String} sIdCol - 키칼럼
* @param {String} strId - 키값
* @param {String} sInfo - dataSet 칼럼
* @param {String} sSubCol - 서브키칼럼
* @param {String} sSubId - 서브 키값
* @return {Object} 칼럼값
* @example this.gfnGetLookupData(this.dsMenu, "MENUID", "1000", "WINID");
*/ 
pForm.gfnGetLookupData = function (objDs, sIdCol, strId, sInfo, sSubCol, sSubId)
{
	var sVal;
	var nCurRow = this.gfnFindData(objDs, sIdCol, strId, sSubCol, sSubId);
	if (nCurRow < 0) 
	{
		return "";
	}
	
	sVal = objDs.getColumn(nCurRow, sInfo);
	if (this.gfnIsNull(sVal)) 
	{
		return "";
	}

	return sVal;
};

/**
* @class text 넓이 및 높이를 구하는 함수
* @param {String} sText - text
* @return {Array} text 넓이 및 높이 배열
* @example this.gfnGetTextSize("타이틀1");
*/ 
pForm.gfnGetTextSize = function(sText) 
{
	var objStatic  = new nexacro.Static();
	objStatic.init("objStatic", 0, 0, 0, 0);
	this.addChild("objStatic", objStatic); 
	objStatic.set_text(sText);
	objStatic.set_fittocontents("both");
	objStatic.set_visible(false);
	objStatic.show(); 
	
	var width = 0, height = 0;
	
	width  = objStatic.getOffsetWidth();
	height = objStatic.getPixelHeight();
	
	this.removeChild("objStatic"); 
	objStatic.destroy();
	objStatic = null;
	
	return [width, height];
};


pForm.gfnTrace = function (sTxt)
{
	if(this.gfnIsNull(sTxt)) return;
	
	var bEnvLog = nexacro.getEnvironmentVariable("evErrLog");
	if( bEnvLog == "true"){
		var objDate = new Date();
		//var sStartDate = objDate.toString();
// 		var sStartDate = objDate.getYear()
// 							+"-"+String(objDate.getMonth()).padLeft(2, '0')
// 							+"-"+String(objDate.getDate()).padLeft(2, '0')
// 							+" "+String(objDate.getHours()).padLeft(2, '0')
// 							+":"+String(objDate.getMinutes()).padLeft(2, '0')
// 							+":"+String(objDate.getSeconds()).padLeft(2, '0')
// 							+" "+objDate.getMilliseconds(); 		
		var objApp = nexacro.getApplication();
		var sWinId = "";
		var objActiveFrame = objApp.gvFrsWork.getActiveFrame();
		if( objActiveFrame!=null){
			sWinId = objActiveFrame.name;
		}
		var sMenuId = "";
		var sPrgmId = "";
		var sFormUrl = "";
		var sMenuNm = "";
		
		if( !this.gfnIsNull(sWinId)){
			var nFindRow = objApp.gdsOpenMenu.findRow("WIN_ID", sWinId );
			if( nFindRow > -1 ){
				sMenuId = objApp.gdsOpenMenu.getColumn(nFindRow, "MENU_ID" );
				sMenuNm = objApp.gdsOpenMenu.getColumn(nFindRow, "MENU_NM" );
				sPrgmId = objApp.gdsOpenMenu.getColumn(nFindRow, "PRGM_ID" );
				sFormUrl = objApp.gdsOpenMenu.getColumn(nFindRow, "MENU_URL" );
			}
		}else{
			sMenuId = "FRAME";
			sMenuNm = "FRAME";
			sPrgmId = "FRAME";
			sFormUrl = "FRAME";
		}
		
		var oDs = objApp.gdsUserLog;
		var nRow = objApp.gdsUserLog.addRow();
		objApp.gdsUserLog.setColumn(nRow, "SYTM_FLAG_CD", objApp.gvSytmFlagCd);
		objApp.gdsUserLog.setColumn(nRow, "USER_ID" 	, objApp.gdsUser.getColumn(0, "USER_ID"));
		objApp.gdsUserLog.setColumn(nRow, "LOG_TYPE"	, "U");
		objApp.gdsUserLog.setColumn(nRow, "ALOG_DTTM"	, objDate);
		objApp.gdsUserLog.setColumn(nRow, "MENU_ID"		, sMenuId);
		objApp.gdsUserLog.setColumn(nRow, "MENU_NM"		, sMenuId);
		objApp.gdsUserLog.setColumn(nRow, "PRGM_ID"		, sPrgmId);
		objApp.gdsUserLog.setColumn(nRow, "PRGM_PATH"	, sFormUrl);
		objApp.gdsUserLog.setColumn(nRow, "ERR_TYPE"	, "UserLog");
		objApp.gdsUserLog.setColumn(nRow, "ERR_MSG" 	, sTxt);
	}
	
	trace(sTxt);
};

pForm = null;