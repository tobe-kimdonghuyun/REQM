//XJS=afs_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * @fileoverview afs_script (방과후)
         * @author 임대성
         */

        /**
         * @description 세션셋팅
         * @param : obj      - 호출한 컴포넌트
         * @param : callback - callback 함수
         * @param : params   - 전달 파라미터
         */
        this.afsfSetSession = function (obj, callback, params) {
        	//컬럼정보확인 및 추가
        	if(this.smfIsNull( this.dsSearch.getColumnInfo("cddcCd"))){ //시도교육청코드
        		this.dsSearch.addColumn("cddcCd", "string");
        	}
        	if(this.smfIsNull( this.dsSearch.getColumnInfo("cntnCtpvScCd"))){ //접속시도코드
        		this.dsSearch.addColumn("cntnCtpvScCd", "string");
        	}
        	if(this.smfIsNull( this.dsSearch.getColumnInfo("insrRrno"))){ //인력주민등록번호
        		this.dsSearch.addColumn("insrRrno", "string");
        	}
        	if(this.smfIsNull( this.dsSearch.getColumnInfo("userId"))){ //사용자id
        		this.dsSearch.addColumn("userId", "string");
        	}
        	if(this.smfIsNull( this.dsSearch.getColumnInfo("insrScCd"))){ //인력주민등록번호
        		this.dsSearch.addColumn("insrScCd", "string");
        	}
        	if(this.smfIsNull( this.dsSearch.getColumnInfo("brno"))){ //사업자등록번호
        		this.dsSearch.addColumn("brno", "string");
        	}
        	if(this.smfIsNull( this.dsSearch.getColumnInfo("cnsgnComyId"))){ //위탁업체ID
        		this.dsSearch.addColumn("cnsgnComyId", "string");
        	}
        	if(this.smfIsNull( this.dsSearch.getColumnInfo("scaSysScCd"))){ //위탁업체ID
        		this.dsSearch.addColumn("scaSysScCd", "string");
        	}

        	this.dsSearch.setColumn(0, "cntnCtpvScCd", "K10");
        	this.dsSearch.setColumn(0, "cddcCd",       "K100000001");
        	var url = obj._orgurl.substring(0, 13);
        	if(url == "pa_afs_ats_cm"){
        		this.dsSearch.setColumn(0, "brno",     "1234567895");
        	}else if(url == "pa_afs_ats_tc"){
        		this.dsSearch.setColumn(0, "insrRrno", "8411151024312");
        	}
        	this.smfDynService(
        		  "selectSession"
        		, {
        			  url: "/afs_cmm_cm00_006.do"
        			, inDatasets: "dsSearch=dsSearch"
        			, outDatasets: "dsSearch=dsSearch"
        		  })
        		  .callback(function(callbackParams){
        			   console.log("callbackParams:"+callbackParams);
        			   if(callbackParams.errors){
        				   return;
        			   }
        		   })
        		  .run()
        		;

        }

        /**
         * @description 주소검색 팝업
         * @param : obj      - 호출한 컴포넌트
         * @param : callback - callback 함수
         * @param : params   - 전달 파라미터
         */
        this.afsfPopupAddr = function (obj, callback, params) {

        	if ( this.isNil(params) || typeof params != typeof {} ) {
        		params = {};
        	}

        	if ( this.isNil(params.procType) ) {
        		params.procType = 'search';
        	}

        	// 팝업을 동작에 필요한 파라메터 지정
        	var popupParams = {
        		callback: callback, // 콜백함수 지정
        		sender: obj, 		// sender 지정
        		params: params      // 팝업 전달 파라메터 지정
        	};

        	// 모달팝업 실행
        	this.smfDialog("_auto", "commpop::commpop_rdn_zip.xfdl", popupParams);
        }


        /**
         * @description 학교검색 팝업
         * @param : obj      - 호출한 컴포넌트
         * @param : callback - callback 함수
         * @param : params   - 전달 파라미터( kornOrgNm : 학교명 )
         */
        this.afsfPopupShl = function (obj, callback, params) {

        	if ( this.isNil(params) || typeof params != typeof {} ) {
        		params = {};
        	}

        	if ( this.isNil(params.procType) ) {
        		params.procType = 'search';
        	}

        	// 팝업을 동작에 필요한 파라메터 지정
        	var popupParams = {
        		callback: callback, // 콜백함수 지정
        		sender: obj, 		// sender 지정
        		params: params      // 팝업 전달 파라메터 지정
        	};

        	if ( params["sender"] ) delete params["sender"];
        	// 모달팝업 실행
        	//this.smfDialog("_auto", "commpop::commpop_school.xfdl", popupParams);
        	this.smfDialog("_auto", "pa_afs_cmm_cm::afs_cmmcm00_p02.xfdl", popupParams);
        }

        /**
         * @description 신청학교검색 팝업
         * @param : obj      - 호출한 컴포넌트
         * @param : callback - callback 함수
         * @param : params   - 전달 파라미터( kornOrgNm : 학교명 )
         */
        this.afsfPopupAplyShl = function (obj, callback, params) {

        	/*if ( this.isNil(params) || typeof params != typeof {} ) {
        		params = {};
        	}*/

        	if ( this.isNil(params.procType) ) {
        		params.procType = 'search';
        	}

        	// 팝업을 동작에 필요한 파라메터 지정
        	var popupParams = {
        		callback: callback, // 콜백함수 지정
        		sender: obj, 		// sender 지정
        		params: params      // 팝업 전달 파라메터 지정
        	};
        	if ( params["sender"] ) delete params["sender"];
        	// 모달팝업 실행
        	this.smfDialog("_auto", "pa_afs_cmm_cm::afs_cmmcm00_p01.xfdl", popupParams);
        }

        /**
         * @description 전화번호 '-' 분리하여 데이터셋 컬럼에 셋팅
         * @param : ds    - 데이터셋
         * @param : colNm - 컬럼명

         */
        this.afsfSplitTelno = function (ds, colNm) {
        	ds.set_updatecontrol(false);
        	if ( this.smfIsEmptyObject(ds) ) return;
        	if ( this.smfIsNull(colNm) ) return;

        	if ( !this.smfIsNull(ds.getColumn(0, colNm)) ) {
        		var sTelno = ds.getColumn(0, colNm).split("-");
        		ds.setColumn(0, colNm+"1", sTelno[0]);
        		ds.setColumn(0, colNm+"2", sTelno[1]);
        		ds.setColumn(0, colNm+"3", sTelno[2]);
        	}
        	ds.set_updatecontrol(true);
        }


        /**
         * @description 조회 callback 공백제거
         * @param : callbackParams - service callback parameter
         */
        this.afsfCallbackTrim = function (callbackParams) {
        	//해당 서비스ID의 outDataset을 찾아서 dataset에 설정한 UserProperty cboColumn을 찾아 trim
        	var nRowIdx = this.dsService.findRow("id",callbackParams.serviceId);
        	var outDs = this.dsService.getColumn(nRowIdx,"outDatasets").split(" ");
        	var arrDs = [];
        	for (var i=0; i < outDs.length ;i++) {
        		arrDs.push(outDs[i].split("=")[0]);
        	}

        	for (var j=0; j < arrDs.length ;j++) {
        		var objDs = this.lookup(arrDs[j]);
        		if ( this.isNotNil(objDs.cboColumn) ) {
        			var arrCboColNm = objDs.cboColumn.split(",");
        			for( var y=0; y < arrCboColNm.length ;y++) {
        				for(var z=0; z < objDs.rowcount ; z++) {
        					var tmpVal = objDs.getColumn(z,arrCboColNm[y]);
        					if ( this.smfIsNull(tmpVal) ) {
        						objDs.setColumn(z,arrCboColNm[y],"");
        					} else {
        						objDs.setColumn(z,arrCboColNm[y],tmpVal.trim());
        					}
        				}
        			}
        		}
        	}
        }


        /**
         * 공통코드조회
         *
         * @param  serviceId : callback함수에서 받을 서비스명
         * @param  aryDataset : 공통코드 조회용 데이타셋
         * @return void
         * @see    afsfCodeList(dataset);
         */
        this.afsfCodeList = function(ds){

        	var tmpDs = new Dataset;

        	if (! this["tmpDs"] ){
        		this.addChild("tmpDs",  tmpDs);

        		tmpDs.assign(ds);
        		tmpDs.clearData();
        	}else{
        		tmpDs = this["tmpDs"];
        		tmpDs.assign(ds);
        		tmpDs.clearData();
        	}

        	for(var i=0; i<ds.rowcount; i++){
        		var orgDs = this.lookup(ds.getColumn(i, "outDs"));
        		orgDs.clearData();

        		tmpDs.clearData();

        		tmpDs.addRow();
        		tmpDs.copyRow(0, ds, i);
        		var sOutDs = ds.getColumn(i, "outDs");

        		if(!this.isNil(ds.getColumn(i, "clfCdValue"))){
        			sOutDs = "clfCd0";
        		}
        		this.smfDynService(
        		      ds.getColumn(i, "id")
        			, {
        				  url: ds.getColumn(i, "url")
        				, inDatasets: "clfCdList=tmpDs"
        				, outDatasets: ds.getColumn(i, "outDs")+"="+sOutDs
        			  })
        			  .callback(function(callbackParams){
        				   console.log("callbackParams:"+callbackParams);
        			       if(callbackParams.errors){
        				       return;
        				   }else{

        					   var Idx = ds.findRow("id", callbackParams.serviceId);
        					   if(ds.getColumn(Idx, "allYn") == "Y" ){
        				           var cdDs = this.lookup(ds.getColumn(Idx, "outDs"));
        						   cdDs.filter("");
        					       cdDs.insertRow(0);
        					       cdDs.setColumn(0, "unyCdValueNm", "- 전체 -");
        					       cdDs.setColumn(0, "unyCdValue", "");
        					   }else if(ds.getColumn(Idx, "allYn") == "N" ){
        						   var cdDs = this.lookup(ds.getColumn(Idx, "outDs"));
        						   cdDs.filter("");
        					       cdDs.insertRow(0);
        					       cdDs.setColumn(0, "unyCdValueNm", "- 선택 -");
        					       cdDs.setColumn(0, "unyCdValue", "");
        					   }

        					   console.log(cdDs.saveXML());
        				   }
        		       })
        			  .run()
        			;
        	}
        };

        /**
         * dataset row 복사
         *
         * @param  dataset : 원본 데이타셋
         * @param  index 리스트 : 복사하려고 하는 인덱스의 리스트
         * @return void
         * @see    afsfCopyRow('code', [dsSchulCrseScCode, dsSchulFaScCode, dsSchulGrgdScCode, dsSchulKndScCode]);
         */
        this.afsfCopyRow = function(ds, arrIdxList){
        	var tmpDs = new Dataset;
        	tmpDs.assign(ds);
        	tmpDs.clearData();

        	for(var nIdx=0; nIdx<arrIdxList.length; nIdx++){
        		tmpDs.addRow();
        		tmpDs.copyRow(tmpDs.rowcount-1, ds, arrIdxList[nIdx]);
        	}

        	return tmpDs;
        }

        /**
         * from, to 사이의 년월 생성
         *
         * @param  dataset : 년월을 셋팅할 데이타셋
         * @param  cdNm : 코드 컬럼명
         * @param  dataNm : 코드명 컬럼명
         * @param  fromDt : 시작일
         * @param  toDt : 종료일
         * @param  inclsYn : 시작월 포함여부
         * @param  allYn : 전체 여부
         * @return void
         * @see    afsfMakeYm('', '');
         */
        this.afsfMakeYm = function(ds, cdNm, dataNm, fromDt, toDt, inclsYn, allYn){
        	ds.clearData();
        	if(this.isNil(cdNm)){
        		cdNm = "unyCdValue";
        	}

        	if(this.isNil(dataNm)){
        		dataNm = "unyCdValueNm";
        	}

        	if(this.isNil(inclsYn)){
        		inclsYn = 1;
        	}

        	if(this.isNil(fromDt) || this.isNil(toDt)){
        		return;
        	}

        	if(fromDt > toDt){
        		return;
        	}
        	var diffYear  = (toDt.substring(0, 4) - fromDt.substring(0, 4)) * 12;
        	var diffMonth = (toDt.substring(4, 6) - fromDt.substring(4, 6)) + inclsYn;
        	var diff      = diffYear !=0 ? diffYear + diffMonth : Math.abs(diffMonth);

        	for(var nIdx=0; nIdx<diff; nIdx++){
        		var tmpYm = new nexacro.Date();
        		tmpYm.setFullYear(fromDt.substring(0, 4));
        		tmpYm.setMonth(fromDt.substring(4, 6)-1);
        		tmpYm.addMonth(nIdx);
        		ds.addRow();
        		ds.setColumn(ds.rowcount-1, cdNm,   tmpYm.getFullYear()+""+String(tmpYm.getMonth()+1).padLeft(2, "0"));
        		ds.setColumn(ds.rowcount-1, dataNm, tmpYm.getFullYear()+"년 "+String(tmpYm.getMonth()+1).padLeft(2, "0")+"월");
        	}

        	if(allYn == "Y" ){
        	    ds.insertRow(0);
        	    ds.setColumn(0, dataNm, "- 전체 -");
        	    ds.setColumn(0, cdNm,   "");
            }else if(allYn == "N" ){
        	    ds.insertRow(0);
        	    ds.setColumn(0, dataNm, "- 선택 -");
        	    ds.setColumn(0, cdNm,   "");
            }
        }

        /**
         * 시간 생성
         *
         * @param  dataset : 년월을 셋팅할 데이타셋
         * @param  cdNm : 코드 컬럼명
         * @param  dataNm : 코드명 컬럼명
         * @param  allYn : 전체 여부
         * @return void
         * @see    afsfMakeYm('', '');
         */
        this.afsfMakeHour = function(ds, cdNm, dataNm, allYn){
        	ds.clearData();
        	if(this.isNil(cdNm)){
        		cdNm = "unyCdValue";
        	}

        	if(this.isNil(dataNm)){
        		dataNm = "unyCdValueNm";
        	}

        	for(var nIdx=0; nIdx<24; nIdx++){
        		ds.addRow();
        		ds.setColumn(ds.rowcount-1, cdNm,   String(nIdx).padLeft(2, "0"));
        		ds.setColumn(ds.rowcount-1, dataNm, String(nIdx).padLeft(2, "0"));
        	}

        	if(allYn == "Y" ){
        	    ds.insertRow(0);
        	    ds.setColumn(0, dataNm, "- 전체 -");
        	    ds.setColumn(0, cdNm,   "");
            }else if(allYn == "N" ){
        	    ds.insertRow(0);
        	    ds.setColumn(0, dataNm, "- 선택 -");
        	    ds.setColumn(0, cdNm,   "");
            }
        }

        /**
         * 분 생성
         *
         * @param  dataset : 년월을 셋팅할 데이타셋
         * @param  cdNm : 코드 컬럼명
         * @param  dataNm : 코드명 컬럼명
         * @param  allYn : 전체 여부
         * @return void
         * @see    afsfMakeYm('', '');
         */
        this.afsfMakeMin = function(ds, cdNm, dataNm, allYn){
        	ds.clearData();
        	if(this.isNil(cdNm)){
        		cdNm = "unyCdValue";
        	}

        	if(this.isNil(dataNm)){
        		dataNm = "unyCdValueNm";
        	}

        	for(var nIdx=0; nIdx<60; nIdx++){
        		ds.addRow();
        		ds.setColumn(ds.rowcount-1, cdNm,   String(nIdx).padLeft(2, "0"));
        		ds.setColumn(ds.rowcount-1, dataNm, String(nIdx).padLeft(2, "0"));
        	}

        	if(allYn == "Y" ){
        	    ds.insertRow(0);
        	    ds.setColumn(0, dataNm, "- 전체 -");
        	    ds.setColumn(0, cdNm,   "");
            }else if(allYn == "N" ){
        	    ds.insertRow(0);
        	    ds.setColumn(0, dataNm, "- 선택 -");
        	    ds.setColumn(0, cdNm,   "");
            }
        }

        /**
         * 해당날짜의 요일 리턴
         *
         * @param  날짜
         * @return 요일
         * @see    afsfDfk('20220101');
         */
        this.afsfGetDfk = function(dt){
        	var rtnDft = 0;

        	if(this.isNil(dt)){
        		return;
        	}

        	if(dt.length < 8){
        		return;
        	}

        	var year  = dt.substring(0, 4);
        	var month = parseInt(dt.substring(4, 6))-1;
        	var day   = dt.substring(6, 8);
        	var tmpDt = new nexacro.Date(year, month, day);

        	var rtnDft  = tmpDt.getDay();
        	if(rtnDft == 0){ // 일요일일 경우 7로 리턴
        		rtnDft = 7;
        	}

        	return rtnDft;
        }

        /**
         * 해당날짜의 요일 리턴
         *
         * @param  날짜
         * @return 요일
         * @see    afsfDfk('20220101');
         */
        this.afsfGetDfkNm = function(dt){
        	var arrDfk = ["일", "월", "화", "수", "목", "금", "토"];
        	var rtnDft = 0;

        	if(this.isNil(dt)){
        		return;
        	}

        	if(dt.length < 8){
        		return;
        	}

        	var year  = dt.substring(0, 4);
        	var month = parseInt(dt.substring(4, 6))-1;
        	var day   = dt.substring(6, 8);
        	var tmpDt = new nexacro.Date(year, month, day);

        	var rtnDft  = tmpDt.getDay();

        	return arrDfk[rtnDft];

        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
