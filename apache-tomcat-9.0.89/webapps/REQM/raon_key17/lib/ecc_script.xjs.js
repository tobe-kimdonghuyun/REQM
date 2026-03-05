//XJS=ecc_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * @fileoverview ecc_script (초등돌봄교실)
         * @author
         */


        /**
         * @description 주소검색 팝업
         * @param : obj      - 호출한 컴포넌트
         * @param : callback - callback 함수
         * @param : params   - 전달 파라미터
         */
        this.eccfPopupAddr = function (obj, callback, params) {

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
        this.eccfPopupShl = function (obj, callback, params) {

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
        	this.smfDialog("_auto", "commpop::commpop_school.xfdl", popupParams);
        }

        /**
         * @description 전화번호 '-' 분리하여 데이터셋 컬럼에 셋팅
         * @param : ds    - 데이터셋
         * @param : colNm - 컬럼명

         */
        this.eccfSplitTelno = function (ds, colNm) {
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
        this.eccfCallbackTrim = function (callbackParams) {
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
         * dataset row 복사
         *
         * @param  serviceId : callback함수에서 받을 서비스명
         * @param  dataset : 원본 데이타셋
         * @param  index 리스트 : 복사하려고 하는 인덱스의 리스트
         * @return void
         * @see    eccfCopyRow('code', [dsSchulCrseScCode, dsSchulFaScCode, dsSchulGrgdScCode, dsSchulKndScCode]);
         */
        this.eccfCopyRow = function(ds, arrIdxList){
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
         * 돌봄인력기본정보 설정
         *
         * @param  strServiceId : 서비스id
                 , dsObj : 데이터셋객체
                 , strCallBackFuncName : 콜백함수 명(스트링)
         */
        this.eccfSetHnfInfo = function(strServiceId, dsObj, strCallBackFuncName){
        	var strDsName= dsObj.name;
        	console.log(this.dsSearch.saveXML());

        	//컬럼정보확인 및 추가
        	if(this.smfIsNull( dsObj.getColumnInfo("cddcCd"))){ //시도교육청코드
        		dsObj.addColumn("cddcCd", "string");
        	}
        	if(this.smfIsNull( dsObj.getColumnInfo("hnfRrno"))){ //인력주민등록번호
        		dsObj.addColumn("hnfRrno", "string");
        	}
        	if(this.smfIsNull( dsObj.getColumnInfo("cntnCtpvScCd"))){ //접속시도코드
        		dsObj.addColumn("cntnCtpvScCd", "string");
        	}
        	if(this.smfIsNull( dsObj.getColumnInfo("userId"))){ //사용자id
        		dsObj.addColumn("userId", "string");
        	}
        	if(this.smfIsNull( dsObj.getColumnInfo("shlCd"))){ //학교코드
        		dsObj.addColumn("shlCd", "string");
        	}

        	//호출
        	this.smfDynService(
        		  strServiceId
        		, {
        			  url: "/ecc_cmn_cm01_001.do"
        			, inDatasets: "dsSearch="+strDsName
        			, outDatasets: strDsName+"=dsSearch"
        		  })
        		  .callback(function(callbackParams){
        			   console.log("callbackParams:"+callbackParams);
        			   if(callbackParams.errors){
        				   return;
        			   }
        			   //콜백호출
        			   if( !this.smfIsNull(strCallBackFuncName)){
        				  this[strCallBackFuncName].call();
        			   }
        		   })
        		  .run()
        		;
        }





        /**
         * 돌봄인력기본정보 설정_old
         *
         * @param  strServiceId : 서비스id
                 , dsObj : 데이터셋객체
                 , strCallBackFuncName : 콜백함수 명(스트링)
         * @return 요일
         * @see    ;
         */
        this.eccfSetHnfInfoOld = function(strServiceId, dsObj, strCallBackFuncName){
        	var strDsName= dsObj.name;
        	//alert(strDsName);
        	console.log(this.dsSearch.saveXML());

        	//컬럼정보확인 및 추가
        	if(this.smfIsNull( dsObj.getColumnInfo("cddcCd"))){ //시도교육청코드
        		dsObj.addColumn("cddcCd", "string");
        	}
        	if(this.smfIsNull( dsObj.getColumnInfo("hnfRrno"))){ //인력주민등록번호
        		dsObj.addColumn("hnfRrno", "string");
        	}
        	if(this.smfIsNull( dsObj.getColumnInfo("cntnCtpvScCd"))){ //접속시도코드
        		dsObj.addColumn("cntnCtpvScCd", "string");
        	}
        	if(this.smfIsNull( dsObj.getColumnInfo("userId"))){ //사용자id
        		dsObj.addColumn("userId", "string");
        	}
        	if(this.smfIsNull( dsObj.getColumnInfo("shlCd"))){ //학교코드
        		dsObj.addColumn("shlCd", "string");
        	}

        	console.log(this.dsSearch.saveXML());
        	//임시설정 : 세션에 값 없음: ECCEECRM001LT(인력신청내역)테이블에서 가져옴
        	/*******************************************************************************************/
        	var cddcCd       = ""; //시도교육청
        	var userId       = ""; //사용자id
        	var hnfRrno      = ""; //주민등록번호
        	var cntnCtpvScCd = ""; //접속시도코드

        	if(this.smfIsNull(cddcCd)){
        		cddcCd ="K100000001";
        	}
        	if(this.smfIsNull(userId)){
        		userId ="K100000001";
        	}
        	if(this.smfIsNull(hnfRrno)){
        		hnfRrno ="8601011234567"; //주민등록번호는 화면세션에는 설정되지 않음. 서버세션에서 가져와야함
        	}
        	if(this.smfIsNull(cntnCtpvScCd)){
        		cntnCtpvScCd ="K10";
        	}

        	dsObj.setColumn(0,"cddcCd",cddcCd);
        	dsObj.setColumn(0,"userId",userId);
        	dsObj.setColumn(0,"hnfRrno",hnfRrno);
        	dsObj.setColumn(0,"cntnCtpvScCd",cntnCtpvScCd);
        	/*******************************************************************************************/

        	this.smfDynService(
        		  strServiceId
        		, {
        			  url: "/ecc_cmn_cm01_001.do"
        			, inDatasets: "dsSearch="+strDsName
        			, outDatasets: strDsName+"=dsSearch"
        		  })
        		  .callback(function(callbackParams){
        			   console.log("callbackParams:"+callbackParams);
        			   if(callbackParams.errors){
        				   return;
        			   }
        			   //콜백호출
        			   if( !this.smfIsNull(strCallBackFuncName)){
        				  this[strCallBackFuncName].call();
        			   }

        		   })
        		  .run()
        		;

        }



        /**
         * 년도 콤보 세팅
         *
         * @param psBindDm 		dataset 데이터셋
         * @param psBindCode 	String  데이터셋 code 컬럼 Id
         * @param psBindValue 	String  데이터셋 value 컬럼 Id
         * @param psYr  		number 	세팅할 산정 년도 (현재년도 + psYr)
         * @param psBef 		number 	현재년도 기준으로 이전 년도를 세팅해야할 경우 산정 년도를 적는다. 이전년도 세팅 안하면 안적는다 (현재년도-psBef)
         *
         * @ex    this.cmbSetAyr(this.dsAyr, "code", "value", 2, 2);
         *        this.cmbSetAyr(this.dsAyr, "code", "value", 5);
         */
        this.eccCmbSetAyr = function(psBindDm, psBindCode, psBindValue, psYr, psBef){
        	//① 현재년도 구하기 = 세션의 학년도
        	var yy = this.smfGetSessionValue("ayr");

        	//테스트데이터
        	if(this.smfIsNull(yy)){
        		yy = this.smfToday();
        		yy = yy.dateFormat("yyyy");
        	}


        	//현재년도 기준으로 이전 년도를 세팅할 경우
        	if(!this.smfIsNull(psBef)){
        		yy = Number(yy) - psBef;
        	}

        	//② 현재년도+psYr ~ 현재년도-psYr 세팅
        	for(var i=psYr ; i>=0 ; i--){
        		psBindDm.insertRow(psYr-i);
        		psBindDm.setColumn(psYr-i, psBindCode, Number(yy)+i);
        		psBindDm.setColumn(psYr-i, psBindValue, Number(yy)+i);
        	}
        }



        /**
         * [돌봄학기, 돌봄구분, 교실] 콤보 세팅
         * @param svId	 string			콜백명
         * @param inDs 	 dataset 		in데이터셋(파라미터)
         * @param outDs  dataset 		out데이터셋
         * @param msBack 콜백메서드 	메세지 콜백
         * @param uri	 string			자바단 호출할 uri 한글자 (2:돌봄학기, 3:돌봄구분, 4:교실)
         * @ex    this.eccComboSet("selectEccSem", this.dsSearch, this.dsEccSem, this.fnMessageCallback, "3");
         */
        this.eccComboSet = function(svId, inDs, outDs, msBack, uri){

        	//파라미터 null 체크
        	if(this.smfIsNull(inDs.getColumn(0, "cntnCtpvScCd"))){
        		this.smfAlert("CM006", ["접속시도코드"], msBack); // {0}은(는) 필수 입력입니다.
        		return;
        	}
        	if(this.smfIsNull(inDs.getColumn(0, "shlCd"))){
        		this.smfAlert("CM006", ["학교코드"], msBack); // {0}은(는) 필수 입력입니다.
        		return;
        	}
        	if(this.smfIsNull(inDs.getColumn(0, "ayr"))){
        		this.smfAlert("CM006", ["학년도"], msBack); // {0}은(는) 필수 입력입니다.
        		return;
        	}
        	if(uri == "3"){ //돌봄구분콤보 세팅시
        		if(this.smfIsNull(inDs.getColumn(0, "eccSem"))){
        			this.smfAlert("CM006", ["돌봄학기"], msBack); // {0}은(는) 필수 입력입니다.
        			return;
        		}
        	}
        	//eccScCd(돌봄구분)은 NULL체크 안함. 왜냐하면 교실명(4) 조회하는 쿼리에서 AND A.ECC_SC_CD = NVL(#{eccScCd}, A.ECC_SC_CD) 이렇게 함. 일지등록팝업 조회할때 이렇게 해야함


        	//호출
        	this.smfDynService(
        		  svId
        		, {
        			  url: "/ecc_cmn_cm01_00"+ uri +".do"
        			, inDatasets: "dsSearch="+inDs.name
        			, outDatasets: outDs.name+"=dsList"
        		  })
        		  .callback(function(callbackParams){
        			   console.log("callbackParams:"+callbackParams);
        			   if(callbackParams.errors){
        				   return;
        			   }
        			   //콜백호출
        			   if( !this.smfIsNull(strCallBackFuncName)){
        				  this[strCallBackFuncName].call();
        			   }
        		   })
        		  .run()
        		;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
