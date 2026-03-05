//XJS=lib_nfm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*include 된 페이지별 옵션 Object*/
        lib_nfm_form = {};

        /*현재 페이지의 옵션 Object*/
        lib_nfm_opt = {};

        /**
        * @description 	   : onload 페이지 parameter set
        * @param obj	   : opt : Object
        */
        this.nfm_onload = function() {
        	if(typeof lib_nfm_form[this.name] === 'undefined') {
        		lib_nfm_form[this.name] = {
        			'documentId' : 'divSearch'
        			, 'allAt' : 'Y'
        			, 'readonly' : 'N'
        		}

        	}

        	lib_nfm_opt = lib_nfm_form[this.name];
        }

        /**
        * @description 	   : 공통form 세팅 함수 설정
        * @param obj	   : documentId : string, allAt : string, readonly : string
        */
        this.nfmFormSetParams = function(documentId, allAt, readonly) {
        	lib_nfm_form[this.name] = {
        		'documentId' : documentId
        		, 'allAt' : allAt
        		, 'readonly' : readonly
        	}
        }

        /**
        * @description 	   : 카멜케이스 변환
        * @param obj	   : 변환대상문자
        * @return          : 카멜케이스 변환문자
        */
        this.nfmToCamelCase = function (str) {
        	return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        }

        /**
        * @description 	   : 숫자콤마형식 변환
        * @param obj	   : 변환대상숫자
        * @return          : 숫자콤마형식 변환문자
        */
        this.nfmToNmbrForm = function(num) {
        	return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }

        /**
        * @description 	   : 공통코드 Dataset 세팅
        * @param obj	   : 세팅할 코드 parameter
        */
        this.nfmCodeSet = function (codeArgs, callBack) {
        	/* 공통코드 조회 s */
        	this.removeChild("codeSetArgs");

        	var codeSetArgs = new Dataset();
        	codeSetArgs.name = "codeSetArgs";

        	// 컬럼 및 type 추가
        	codeSetArgs.addColumn("cdId", "string");
        	codeSetArgs.addColumn("upDtlCdId", "string");
        	codeSetArgs.addColumn("useYn", "string");
        	codeSetArgs.addColumn("defaultData", "string");
        	codeSetArgs.addColumn("rds", "string");
        	codeSetArgs.addColumn("rdsId", "string");
        	codeSetArgs.addColumn("addtiAttrbCn1", "string");
        	codeSetArgs.addColumn("hrrchSrchYn", "string");
        	this.addChild("codeSetArgs", codeSetArgs);

        	for(var i = 0; i < codeArgs.length; i++){
        		var arg = codeArgs[i];

        		if(Array.isArray(arg)) {
        			for(var j = 0; j < arg.length; j++){
        				var cdId = arg[j];
        				var rds = "DS_"+cdId;
        				var toCamel = this.nfmToCamelCase(rds);
        				codeSetArgs.addRow();
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "cdId", cdId);
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "upDtlCdId", "");
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "useYn", "Y");
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "rds", toCamel);
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "addtiAttrbCn1", "");
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "hrrchSrchYn", "");
        			}
        		} else {
        			var cdId = arg['cdId'];
        			var upDtlCdId = arg['upDtlCdId'];
        			var useYn = arg['useYn'];
        			var defaultData = arg['defaultData'];
        			var rds = arg['rds'];
        			var rdsId = arg['rdsId'];
        			var addtiAttrbCn1 = arg['addtiAttrbCn1'];
        			var hrrchSrchYn = arg['hrrchSrchYn'];

        			codeSetArgs.addRow();
        			codeSetArgs.setColumn(codeSetArgs.rowposition, "cdId", cdId);
        			if(typeof upDtlCdId !== 'undefined') {
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "upDtlCdId", upDtlCdId);
        			}

        			if(typeof useYn === 'undefined') {
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "useYn", "Y");
        			} else {
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "useYn", useYn);
        			}

        			if(typeof defaultData !== 'undefined') {
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "defaultData", defaultData);
        			}

        			if(typeof rds === 'undefined') {
        				var rds = "DS_"+cdId;
        				var toCamel = this.nfmToCamelCase(rds);
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "rds", toCamel);
        			} else {
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "rds", rds);
        			}

        			if(typeof addtiAttrbCn1 !== 'undefined') {
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "addtiAttrbCn1", addtiAttrbCn1);
        			}

        			if(typeof rdsId !== 'undefined') {
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "rdsId", rdsId);
        			}

        			if(typeof hrrchSrchYn !== 'undefined') {
        				codeSetArgs.setColumn(codeSetArgs.rowposition, "hrrchSrchYn", hrrchSrchYn);
        			}

        		}
        	}

        	if(typeof callBack === 'undefined') {
        		callBack = "fnCallback";
        	}

        	this.gfnCmmnnCode(codeSetArgs, callBack);
        	/* 공통코드 조회 e */
        }

        /**
        * @description 	   : NFM_공통검색항목 호출 FUNCTION
        * @param obj	   : dsName : 검색항목구분, selValue : 검색파라미터, callback : 콜백함수
        */
        this.nfmCmmnSearch = function(dsName, selValue, callback) {
        	this.nfm_onload();

        	if(selValue == null || typeof selValue === 'undefined') {
        		selValue = new Object();
        	}
        	if(callback == '' || typeof callback === 'undefined') {
        		callback = '';
        	}


        	this.removeChild("dsNfmCmmnSearch");

        	/** 검색 dataset 생성 STRAT */
        	var objSearchDs = new Dataset();
        	objSearchDs.name = "dsNfmCmmnSearch";
        	objSearchDs.addColumn("dsName", "string");
        	if(dsName == 'INTEN' || dsName == 'NTFRT_MNOFF') {
        		objSearchDs.addColumn("instTpcd", "string");
        	}
        	var selKeys = Object.keys(selValue);
        	for(var key of selKeys) {
        		objSearchDs.addColumn(key, "string");
        	}

        	this.addChild("dsNfmCmmnSearch", objSearchDs);

        	// 검색 dataset setting
        	objSearchDs.addRow();
        	objSearchDs.setColumn(0, "dsName", dsName);

        	if(dsName == 'INTEN' || dsName == 'NTFRT_MNOFF') {
        		objSearchDs.setColumn(0, "instTpcd", (dsName == "INTEN")? "20": "21");
        	}
        	var selKeys = Object.keys(selValue);
        	for(var key of selKeys) {
        		objSearchDs.setColumn(0, key, selValue[key]);
        	}

        	// 검색결과 dataset 설정
        	var outDatasets = '';
        	outDatasets += this.nfmToCamelCase("DS_" + dsName)+'=resultList';

        	var strSvcId    = dsName;
        	var strSvcUrl   = "/nfmCmmn/selectNfmCmmnSearch.do";
        	var inData      = "dsSearch=dsNfmCmmnSearch";
        	var outData     = outDatasets;
        	var strArg      = "";
        	var callBackFnc = "nfmCmmnSearchCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId + '@@' + callback , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        }

        /**
        * @description 	   : NFM_공통검색항목 호출 CALLBACK FUNCITON
        * @param obj	   : svcID, errorCode, errorMsg
        */
        this.nfmCmmnSearchCallback = function(svcID, errorCode, errorMsg) {
        	let arrSvcID = svcID.split('@@');

        	var svcID = arrSvcID[0];
        	var callback = arrSvcID[1];

        	// 화면 공통form 설정 오류시 재설정 하도록 처리
        	if(typeof lib_nfm_opt.documentId === 'undefined'){
        		this.nfm_onload();
        	}

        	switch(svcID){
        		case "INTEN" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsInten.insertRow(0);
        				this.dsInten.setColumn(row, "name", "전체");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbUpInstId.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsInten.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbUpInstId.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}

        			this.nfmCmmndivSearch_onitemchanged({id : 'cmbUpInstId', value:this[lib_nfm_opt.documentId].form.cmbUpInstId.value});
        			break;
        		case "NTFRT_MNOFF" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsNtfrtMnoff.insertRow(0);
        				this.dsNtfrtMnoff.setColumn(row, "name", "전체");
        				this.dsNtfrtMnoff.setColumn(row, "sname", "전체");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbInstId.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsNtfrtMnoff.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbInstId.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}

        			this.nfmCmmndivSearch_onitemchanged({id : 'cmbInstId', value:this[lib_nfm_opt.documentId].form.cmbInstId.value});
        			//this.nfmCmmndivMnfrsSearch_onitemchanged({id : 'cmbInstId', value:this[lib_nfm_opt.documentId].form.cmbInstId.value});
        			break;
        		case "WPLAR" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsWplar.insertRow(0);
        				this.dsWplar.setColumn(row, "name", "전체");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbWplarId.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsWplar.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbWplarId.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}
        			this.nfmCmmndivSearch_onitemchanged({id : 'cmbWplarId', value:this[lib_nfm_opt.documentId].form.cmbWplarId.value});
        			break;
        		case "MNFRS_WPLAR" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsMnfrsWplar.insertRow(0);
        				this.dsMnfrsWplar.setColumn(row, "name", "전체");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbMnfrsWplarId.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsMnfrsWplar.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbMnfrsWplarId.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}
        			break;
        		case "NXTRM" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsNxtrm.insertRow(0);
        				this.dsNxtrm.setColumn(row, "name", "전체");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbNxtrmNo.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsNxtrm.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbNxtrmNo.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}
        			this.nfmCmmndivSearch_onitemchanged({id : 'cmbNxtrmNo', value:this[lib_nfm_opt.documentId].form.cmbNxtrmNo.value});
        			break;
        		case "CMBLC" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsCmblc.insertRow(0);
        				this.dsCmblc.setColumn(row, "name", "전체");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbCmblcId.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsCmblc.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbCmblcId.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}
        			this.nfmCmmndivSearch_onitemchanged({id : 'cmbCmblcId', value:this[lib_nfm_opt.documentId].form.cmbCmblcId.value});
        			break;
        		case "SBLT" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsSblt.insertRow(0);
        				this.dsSblt.setColumn(row, "name", "전체");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbSbltId.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsSblt.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbSbltId.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}
        			break;
        		case "SIDO" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsSido.insertRow(0);
        				this.dsSido.setColumn(row, "name", "시/도");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbSido.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsSido.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbSido.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}
        			break;
        		case "SIGUNGU" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsSigungu.insertRow(0);
        				this.dsSigungu.setColumn(row, "name", "시/군/구");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbSigungu.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsSigungu.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbSigungu.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}
        			break;
        		case "EMD" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsEmd.insertRow(0);
        				this.dsEmd.setColumn(row, "name", "읍/면/동");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbEmd.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsEmd.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbEmd.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}
        			break;
        		case "RI" :
        			if(lib_nfm_opt['allAt'] == 'Y') {
        				var row = this.dsRi.insertRow(0);
        				this.dsRi.setColumn(row, "name", "리");
        			}

        			var tempVal = this[lib_nfm_opt.documentId].form.cmbRi.value;
        			if(tempVal == '' || typeof tempVal === 'undefined' || this.dsRi.findRow("value", tempVal) == -1) {
        				this[lib_nfm_opt.documentId].form.cmbRi.set_index(0);
        			}

        			if(callback != '' && typeof callback !== 'undefined' && this.lookupFunc(callback) != null ) {
        				this.lookupFunc(callback).call(svcID, errorCode, errorMsg);
        			}
        			break;
        	}
        }

        /**
        * @description 	   : NFM_공통검색항목 변경이벤트
        * @param obj	   : svcID, errorCode, errorMsg
        */
        this.nfmCmmndivSearch_onitemchanged = function(obj,e) {
        	if(obj.id == 'cmbUpInstId') {//지방청
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_inst(5);
        		} else {
        			this.nfmCmmnSearch("NTFRT_MNOFF", {"upInstId":obj.value}, 'fnNfmCmmnCallback');	// 산림경영 공통(국유림관리소 조회)
        		}
        	} else if(obj.id == 'cmbInstId') {//관리소
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_inst(4);
        			this.nfmSearchReset_mnfrs_inst(4);
        		} else {
        			this.nfmCmmnSearch("WPLAR", {"instId":obj.value}, 'fnNfmCmmnCallback');
        		}
        	} else if(obj.id == 'cmbWplarId') {//경영계획구
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_inst(3);
        		} else {
        			this.nfmCmmnSearch("NXTRM", {"wplarId":obj.value}, 'fnNfmCmmnCallback');
        		}
        	} else if(obj.id == 'cmbNxtrmNo') {//차기
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_inst(2);
        		} else {
        			this.nfmCmmnSearch("CMBLC", {"wplarId":this[lib_nfm_opt.documentId].form.cmbWplarId.value ,"nxtrmNo":this[lib_nfm_opt.documentId].form.cmbNxtrmNo.value}, 'fnNfmCmmnCallback');
        		}
        	} else if(obj.id == 'cmbCmblcId') {//임반
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_inst(1);
        		} else {
        			this.nfmCmmnSearch("SBLT", {"wplarId":this[lib_nfm_opt.documentId].form.cmbWplarId.value, "nxtrmNo":this[lib_nfm_opt.documentId].form.cmbNxtrmNo.value, "cmblcId": this[lib_nfm_opt.documentId].form.cmbCmblcId.value} , 'fnNfmCmmnCallback');
        		}
        	} else if(obj.id == 'cmbSbltId') {//소반

        	} else if(obj.id == 'cmbSido') { //시도
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_juso(3);
        		} else {
        			this.nfmSearchReset_juso(2);
        			this.nfmCmmnSearch("SIGUNGU", {sid_cd : this[lib_nfm_opt.documentId].form.cmbSido.value}, 'fnNfmCmmnCallback');	// 산림경영 공통(시도 조회)
        		}
        	} else if(obj.id == 'cmbSigungu') {//시군구
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_juso(2);
        		} else {
        			this.nfmSearchReset_juso(1);
        			this.nfmCmmnSearch("EMD", {sig_cd : this[lib_nfm_opt.documentId].form.cmbSigungu.value}, 'fnNfmCmmnCallback');	// 산림경영 공통(시도 조회)
        		}
        	} else if(obj.id == 'cmbEmd') {//읍면동
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_juso(1);
        		} else {
        			this.nfmCmmnSearch("RI", {emd_cd : this[lib_nfm_opt.documentId].form.cmbEmd.value}, 'fnNfmCmmnCallback');	// 산림경영 공통(시도 조회)
        		}
        	}
        };


        this.nfmCmmndivMnfrsSearch_onitemchanged = function(obj,e) {
        	if(obj.id == 'cmbUpInstId') {//지방청
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_mnfrs_inst(5);
        		} else {
        			this.nfmCmmnSearch("NTFRT_MNOFF", {"upInstId":obj.value}, 'fnNfmCmmnCallback');	// 산림경영 공통(국유림관리소 조회)
        		}
        	} else if(obj.id == 'cmbInstId') {//관리소
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_mnfrs_inst(4);
        		} else {
        			this.nfmCmmnSearch("MNFRS_WPLAR", {"instId":obj.value}, 'fnNfmCmmnCallback');
        		}
        	} else if(obj.id == 'cmbWplarId') {//경영계획구
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_mnfrs_inst(3);
        		} else {
        			this.nfmCmmnSearch("NXTRM", {"wplarId":obj.value}, 'fnNfmCmmnCallback');
        		}
        	} else if(obj.id == 'cmbNxtrmNo') {//차기
        		if(typeof obj.value === 'undefined' || obj.value == '') {
        			this.nfmSearchReset_inst(2);
        		} else {
        			this.nfmCmmnSearch("CMBLC", {"wplarId":this[lib_nfm_opt.documentId].form.cmbWplarId.value ,"nxtrmNo":this[lib_nfm_opt.documentId].form.cmbNxtrmNo.value}, 'fnNfmCmmnCallback');
        		}
        	}
        };

        /**
        * @description 	   : NFM_검색항목 주소 라디오 변경 이벤트
        * @param obj	   :
        */
        this.nfmCmmnJusoRdo_onitemchanged = function(obj,e){
        	this.nfm_onload();
        	if(obj.value == '1') {
        		this[lib_nfm_opt.documentId].form.cmbSido.set_index(0);
        		this.nfmCmmndivSearch_onitemchanged({id:'cmbSido', value:''}, null);
        		this[lib_nfm_opt.documentId].form.edtBonbun.set_value('');
        		this[lib_nfm_opt.documentId].form.edtBubun.set_value('');
        		this[lib_nfm_opt.documentId].form.chkMtn.set_value(0);
        		this[lib_nfm_opt.documentId].form.edtJuso.set_readonly(false);

        		this[lib_nfm_opt.documentId].form.cmbSido.set_readonly(true);
        		this[lib_nfm_opt.documentId].form.cmbSigungu.set_readonly(true);
        		this[lib_nfm_opt.documentId].form.cmbEmd.set_readonly(true);
        		this[lib_nfm_opt.documentId].form.cmbRi.set_readonly(true);
        		this[lib_nfm_opt.documentId].form.chkMtn.set_readonly(true);
        		this[lib_nfm_opt.documentId].form.edtBonbun.set_readonly(true);
        		this[lib_nfm_opt.documentId].form.edtBubun.set_readonly(true);
        	} else {
        		this[lib_nfm_opt.documentId].form.edtJuso.set_value('');
        		this[lib_nfm_opt.documentId].form.edtJuso.set_readonly(true);

        		this[lib_nfm_opt.documentId].form.cmbSido.set_readonly(false);
        		this[lib_nfm_opt.documentId].form.cmbSigungu.set_readonly(false);
        		this[lib_nfm_opt.documentId].form.cmbEmd.set_readonly(false);
        		this[lib_nfm_opt.documentId].form.cmbRi.set_readonly(false);
        		this[lib_nfm_opt.documentId].form.chkMtn.set_readonly(false);
        		this[lib_nfm_opt.documentId].form.edtBonbun.set_readonly(false);
        		this[lib_nfm_opt.documentId].form.edtBubun.set_readonly(false);
        	}
        };

        /**
        * @description 	   : NFM_검색조건초기화_경영계획 함수
        * @param obj	   : 초기화 레벨
        */
        this.nfmSearchReset_inst = function(lv) {
        	if(lv >= 6) {

        	}

        	if(lv >= 5) {
        		//관리소 초기화

        		if(typeof this['dsNtfrtMnoff'] === 'undefined') return false;
        		this.dsNtfrtMnoff.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsNtfrtMnoff.insertRow(0);
        			this.dsNtfrtMnoff.setColumn(row, "name", "전체");
        			this.dsNtfrtMnoff.setColumn(row, "sname", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbInstId.set_index(0);
        	}

        	if(lv >= 4) {
        		//경영계획구 초기화
        		if(typeof this['dsWplar'] === 'undefined') return false;
        		this.dsWplar.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsWplar.insertRow(0);
        			this.dsWplar.setColumn(row, "name", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbWplarId.set_index(0);
        	}

        	if(lv >= 3) {
        		//차기 초기화
        		if(typeof this['dsNxtrm'] === 'undefined') return false;
        		this.dsNxtrm.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsNxtrm.insertRow(0);
        			this.dsNxtrm.setColumn(row, "name", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbNxtrmNo.set_index(0);
        	}

        	if(lv >= 2) {
        		//임반 초기화
        		if(typeof this['dsCmblc'] === 'undefined') return false;
        		this.dsCmblc.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsCmblc.insertRow(0);
        			this.dsCmblc.setColumn(row, "name", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbCmblcId.set_index(0);
        	}

        	if(lv >= 1) {
        		//소반 초기화
        		if(typeof this['dsSblt'] === 'undefined') return false;
        		this.dsSblt.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsSblt.insertRow(0);
        			this.dsSblt.setColumn(row, "name", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbSbltId.set_index(0);
        	}
        }


        this.nfmSearchReset_mnfrs_inst = function(lv) {
        	if(lv >= 6) {

        	}

        	if(lv >= 5) {
        		//관리소 초기화
        		if(typeof this['dsNtfrtMnoff'] === 'undefined') return false;
        		this.dsNtfrtMnoff.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsNtfrtMnoff.insertRow(0);
        			this.dsNtfrtMnoff.setColumn(row, "name", "전체");
        			this.dsNtfrtMnoff.setColumn(row, "sname", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbInstId.set_index(0);
        	}

        	if(lv >= 4) {
        		if(typeof this['dsMnfrsWplar'] === 'undefined') return false;
        		this.dsMnfrsWplar.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsMnfrsWplar.insertRow(0);
        			this.dsMnfrsWplar.setColumn(row, "name", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbMnfrsWplarId.set_index(0);
        	}

        	/*if(lv >= 3) {
        		//차기 초기화
        		if(typeof this['dsNxtrm'] === 'undefined') return false;
        		this.dsNxtrm.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsNxtrm.insertRow(0);
        			this.dsNxtrm.setColumn(row, "name", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbNxtrmNo.set_index(0);
        	}

        	if(lv >= 2) {
        		//임반 초기화
        		if(typeof this['dsCmblc'] === 'undefined') return false;
        		this.dsCmblc.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsCmblc.insertRow(0);
        			this.dsCmblc.setColumn(row, "name", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbCmblcId.set_index(0);
        	}

        	if(lv >= 1) {
        		//소반 초기화
        		if(typeof this['dsSblt'] === 'undefined') return false;
        		this.dsSblt.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsSblt.insertRow(0);
        			this.dsSblt.setColumn(row, "name", "전체");
        		}
        		this[lib_nfm_opt.documentId].form.cmbSbltId.set_index(0);
        	}*/
        }

        /**
        * @description 	   : NFM_검색조건초기화_주소 함수
        * @param obj	   : 초기화 레벨
        */
        this.nfmSearchReset_juso = function(lv) {
        	if(lv >= 3) {
        		if(typeof this['dsSigungu'] === 'undefined') return false;
        		this.dsSigungu.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsSigungu.insertRow(0);
        			this.dsSigungu.setColumn(row, "name", "시/군/구");
        		}
        		this[lib_nfm_opt.documentId].form.cmbSigungu.set_index(0);
        	}

        	if(lv >= 2) {
        		if(typeof this['dsEmd'] === 'undefined') return false;
        		this.dsEmd.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsEmd.insertRow(0);
        			this.dsEmd.setColumn(row, "name", "읍/면/동");
        		}
        		this[lib_nfm_opt.documentId].form.cmbEmd.set_index(0);
        	}

        	if(lv >= 1) {
        		if(typeof this['dsRi'] === 'undefined') return false;
        		this.dsRi.clearData();
        		if(lib_nfm_opt['allAt'] == 'Y') {
        			var row = this.dsRi.insertRow(0);
        			this.dsRi.setColumn(row, "name", "리");
        		}
        		this[lib_nfm_opt.documentId].form.cmbRi.set_index(0);
        	}
        }

        /**
        * @description 	   : 사용자에 따른 NFM_검색조건 설정
        * @param obj	   : svcID : svcID, callback : 콜백함수
        */
        this.nfmUserAuthrtSrchCndtnStng = function(svcID, callback) {
        	const insttTpcd = app.gdsUserInfo.getColumn(0, 'insttTpcd'); //기관구분코드

        	this.nfmCmmnSearch("INTEN", {"upInstId":"KFS"});

        	if(app.gdsUserInfo.getColumn(0, 'upperInsttId') !== undefined){
        		if(insttTpcd == '20') {
        			this[lib_nfm_opt.documentId].form.cmbUpInstId.set_value(app.gdsUserInfo.getColumn(0, 'insttId'));			// 지방산림청 설정

        			if(lib_nfm_opt['readonly'] == 'Y'){
        				this[lib_nfm_opt.documentId].form.cmbUpInstId.set_readonly(true);
        			}
        		} else if(insttTpcd == '21') {
        			this[lib_nfm_opt.documentId].form.cmbUpInstId.set_value(app.gdsUserInfo.getColumn(0, 'upperInsttId'));	// 지방산림청 설정
        			this[lib_nfm_opt.documentId].form.cmbInstId.set_value(app.gdsUserInfo.getColumn(0, 'insttId'));			// 국유림관리소 설정

        			if(lib_nfm_opt['readonly'] == 'Y'){
        				this[lib_nfm_opt.documentId].form.cmbUpInstId.set_readonly(true);
        				this[lib_nfm_opt.documentId].form.cmbInstId.set_readonly(true);
        			}
        		}

        		//this.nfmCmmnSearch("NTFRT_MNOFF", {"upInstId":app.gdsUserInfo.getColumn(0, 'insttId')});
        	}

        	if(svcID == '' || typeof svcID === 'undefined'){
        		svcID = '';
        	}
        	if(callback == '' || typeof callback === 'undefined' || this.lookupFunc(callback) == null) {
        		callback = '';
        	} else {
        		this.lookupFunc(callback).call(svcID, 0, "SUCCESS");
        	}
        }

        /**
        * @description 	   : NFM_공통항목 호출 FUNCTION
        * @param obj	   : dsName : 검색항목구분, selValue : 검색파라미터, callback : 콜백함수
        */
        this.nfmCmmnService = function(dsName, selValue, callback) {
        	if(selValue == null || typeof selValue === 'undefined') {
        		selValue = new Object();
        	}
        	if(callback == '' || typeof callback === 'undefined') {
        		callback = '';
        	}


        	this.removeChild("dsNfmCmmnSearch");

        	/** 검색 dataset 생성 STRAT */
        	var objSearchDs = new Dataset();
        	objSearchDs.name = "dsNfmCmmnSearch";
        	objSearchDs.addColumn("dsName", "string");
        	if(dsName == 'INTEN' || dsName == 'NTFRT_MNOFF') {
        		objSearchDs.addColumn("instTpcd", "string");
        	}
        	var selKeys = Object.keys(selValue);
        	for(var key of selKeys) {
        		objSearchDs.addColumn(key, "string");
        	}

        	this.addChild("dsNfmCmmnSearch", objSearchDs);

        	// 검색 dataset setting
        	objSearchDs.addRow();
        	objSearchDs.setColumn(0, "dsName", dsName);
        	if(dsName == 'INTEN' || dsName == 'NTFRT_MNOFF') {
        		objSearchDs.setColumn(0, "instTpcd", (dsName == "INTEN")? "20": "21");
        	}
        	var selKeys = Object.keys(selValue);
        	for(var key of selKeys) {
        		objSearchDs.setColumn(0, key, selValue[key]);
        	}

        	// 검색결과 dataset 설정
        	var outDatasets = '';
        	outDatasets += this.nfmToCamelCase("DS_" + dsName)+'=resultList';

        	var strSvcId    = dsName;
        	var strSvcUrl   = "/nfmCmmn/selectNfmCmmnSearch.do";
        	var inData      = "dsSearch=dsNfmCmmnSearch";
        	var outData     = outDatasets;
        	var strArg      = "";
        	var callBackFnc = "nfmCmmnServiceCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId + '@@' + callback , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        }

        this.nfmCmmnServiceCallback = function(svcID, errorCode, errorMsg)
        {
        	let arrSvcID = svcID.split('@@');
        	this.lookupFunc(arrSvcID[1]).call(arrSvcID[0], errorCode, errorMsg);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
