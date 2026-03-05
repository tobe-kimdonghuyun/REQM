//XJS=sqa_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * @fileoverview sqa_script (검정고시)
         * @author 박가혜
         */
        //세션에서 불러오는 값
        this.sTrprRrno;
        this.sKornFlnm;
        this.sCddcCd;

        //변수로 쓰일 값
        this.fv_enfcYr = "";
        this.fv_enfcTme = "";
        this.fv_sqeScCd = "";
        this.fv_rcptNo = "";
        this.fv_cddcCd = "";
        this.fv_menuId = "";
        this.fv_schDivCd = "";

        this.mberNm = "";
        this.mberRrn = "";
        this.msgVal = "";

        // 로그인 확인
        this.ChkLogin = function(gubun) {

        	this.sTrprRrno = this.smfGetTrprRrno();
        	this.sKornFlnm = this.smfGetKornFlnm();
        	this.sCddcCd = this.smfGetCddcCode();

        	var sqeScNm = "";
        if(this.fv_sqeScCd == "1") {sqeScNm = "초졸"}
        if(this.fv_sqeScCd == "2") {sqeScNm = "중졸"}
        if(this.fv_sqeScCd == "3") {sqeScNm = "고졸"}
        trace("**************현 회차 구분 : "+this.fv_enfcYr+"년도 " + this.fv_enfcTme + " 회차 - " +  sqeScNm +"검정고시")

        //로그인 안되어있을때
        	if(this.smfIsNull(this.smfGetTrprRrno())) {
        		if(this.fv_menuId == "4000"){ //4000.온라인접수일때
        			this.smfSearchService("selectIdCheck")
        				.run()
        				.callback(function(callbackParams){
        					if(callbackParams.errors) return;

        					if(this.dsMain.rowcount == 0){
        						//접수정보가 없는 경우 (개인정보처리 동의 N)
        						params={
        							cddcCd : this.smfGetCddcCode(),
        							enfcYr : this.fv_enfcYr,
        							enfcTme: this.fv_enfcTme,
        							sqeScCd : this.fv_sqeScCd,
        							menuId : this.fv_menuId
        							}

        						var url = "pa_sqa_oar_or::sqa_oaror01_m00.xfdl";
        						this.fnCheckDate(gubun, url, params); //온라인접수일때는 원서접수기간체크 후 개인정보처리동의 페이지로 이동

        					}else{
        						//접수정보가 있는경우 (개인정보처리 동의 Y)
        						var url = "pa_sqa_cmm_cm::sqa_cmmcm03_m00.xfdl"; //본인인증페이지로 이동
        						this.fnCheckDate(gubun, url, params);

        					}
        				});

        		}else{
        			this.smfAlert("PA049", [] , function() { //(PA049 : 사용자 로그인이 필요합니다.) 로그인화면으로 이동

        				var sUrl = "pa_sqa_cmm_cm::sqa_cmmcm03_m00.xfdl"; //로그인화면

        				var params = {
        							cddcCd : this.smfGetCddcCode(),
        							enfcYr : this.fv_enfcYr,
        							enfcTme: this.fv_enfcTme,
        							sqeScCd : this.fv_sqeScCd,
        							menuId : this.fv_menuId};
        				this.smfSetWorkPage(sUrl, params);
        			});
        		}

        //로그인되어있을때
        	}else{
        		var params = {};

        		 this.dsSearch.setColumn(0,"trprRrno",this.smfGetTrprRrno())   //세션저장정보
        		 this.dsSearch.setColumn(0,"kornFlnm",this.smfGetKornFlnm())	//세션저장정보
        		 this.dsSearch.setColumn(0, "menuId", this.fv_menuId);

        		if(this.fv_menuId == "4000"){ //온라인접수일때

        			this.smfSearchService("selectIdCheck")
        				.run()
        				.callback(function(callbackParams){
        					if(callbackParams.errors) return;

        					if(this.dsMain.rowcount == 0){
        						//접수정보가 없는 경우 (개인정보처리 동의 N)
        						params={
        							kornFlnm : this.smfGetKornFlnm(),
        							cddcCd : this.smfGetCddcCode(),
        							enfcYr : this.fv_enfcYr,
        							enfcTme: this.fv_enfcTme,
        							sqeScCd : this.fv_sqeScCd,
        							menuId : this.fv_menuId,
        							sbmsnYn : "N"}

        						var url = "pa_sqa_oar_or::sqa_oaror01_m00.xfdl";
        						this.fnCheckDate(gubun, url, params); //sqa_oaror01_m00 : 개인정보페이지로 이동

        					}else{
        						//접수정보가 있는경우 (개인정보처리 동의 Y)
        						if(this.fnCheckDate(gubun,"",params)){  //일자 체크 후 계속 진행
        							this.fnCheckOnlineAccept();
        						}
        					}
        				});
        		}else if(this.fv_menuId == "5000"){ //원서조회
        			this.fnOnlineApplication();
        		}else if(this.fv_menuId == "6000"){ //수험표출력
        			this.fnOarEo();
        		}else if(this.fv_menuId == "7000"){ //성적조회
        			this.fnApplpScore();
        		}else if(this.fv_menuId == "8000"){ //마이페이지
        			var params = {};
        		this.smfSetWorkPage("pa_sqa_mpg_mp::sqa_mpgmp00_m00.xfdl", params);
        		}else{
        			//메뉴아이디 없을땐 (상단바 로그인) 메인화면으로 이동
        			var objFrame = this.getOwnerFrame();

        			if(objFrame.form.divAll)
        			{
        				var sMainUrl = objFrame.form.fv_mainformUrl;

        				if(!this.smfIsNull(sMainUrl))
        				{
        					objFrame.form.fnSetMainpage(sMainUrl);
        				}
        			}
        		}
        	}
        }
        /**
         * @description 기존 접수건 조회 (시작-공통)
        */
        this.fnCheckOnlineAccept = function(obj){

        	trace("================================================2.기존접수건조회")

        	this.dsSearch.setColumn(0, "enfcYr",  this.fv_enfcYr);
        	this.dsSearch.setColumn(0, "enfcTme",  this.fv_enfcTme);
        	this.dsSearch.setColumn(0, "sqeScCd",  this.fv_sqeScCd);
        	this.dsSearch.setColumn(0, "menuId", this.fv_menuId);
        	this.dsSearch.setColumn(0, "cddcCd", this.smfGetCddcCode());
        	this.dsSearch.setColumn(0, "trprRrno", this.smfGetSessionValue("trprRrno"));
        	this.dsSearch.setColumn(0, "kornFlnm", this.smfGetSessionValue("kornFlnm"));

        	this.smfSearchService("selectPbancYmd")
        		.run()
        		.callback(function(callbackParams){

        			if(callbackParams.errors) return;

        				this.dsSearch.setColumn(0,"pbancYmd", this.dsMain.getColumn(0,"pbancYmd")); //공고일 조회. 핸드폰번호 조회해올때 같이 조회 해옴(listPhoneNumber)

        				this.smfSearchService("selectIdCheck")
        				// 실행
        				.run()

        				// 콜백
        				.callback(function(callbackParams){
        					if(callbackParams.errors) return;
        					this.fnCheckOnlineAcceptCallBackSuccess();
        				});

        		});



        }

        /**
         * @description 기존 접수건 조회 후 callback (trans)
        */
        this.fnCheckOnlineAcceptCallBackSuccess = function(){
        	this.fv_rcptNo = this.dsMain.getColumn(0, "rcptNo");
        	//성공하면 if()
        		if(this.dsMain.rowcount == 0){
        		 //기존 접수건이 없는 경우
        			this.dsSearch.setColumn(0,"rcptNo", "imsiNo");
        			this.dsSearch.setColumn(0, "kornFlnm", this.smfGetKornFlnm());
        			this.dsSearch.setColumn(0, "trprRrno", this.smfGetTrprRrno());
        			this.dsSearch.setColumn(0, "sbmsnYn", "N");
        			this.dsSearch.setColumn(0, "trnsfYn", "N");

        		}else{
        		//기존 접수건이 있는 경우
        			this.dsSearch.setColumn(0, "rcptNo", this.dsMain.getColumn(0, "rcptNo"));
        			this.dsSearch.setColumn(0, "kornFlnm", this.dsMain.getColumn(0, "kornFlnm"));
        			this.dsSearch.setColumn(0, "sbmsnYn", this.dsMain.getColumn(0, "sbmsnYn"));
        			this.dsSearch.setColumn(0, "trnsfYn", this.dsMain.getColumn(0, "trnsfYn"));
        		}

        		if(this.fv_menuId == "4000"){  //4000 : 온라인원서접수
        			this.fnOnlineAccept();
        		}
        		else if(this.fv_menuId == "5000"){  //5000 : 원서조회
        			this.fnOnlineApplication();
        		}
        		else if(this.fv_menuId == "6000"){  //6000 : 수험표출력
        			this.fnOarEo();
        		}
        		else if(this.fv_menuId == "7000"){ //7000 : 성적조회
        			this.fnApplpScore();
        		}
        		else if(this.fv_menuId == "8000"){ //8000 .마이페이지
        			var params = {};
        			this.smfSetWorkPage("pa_sqa_mpg_mp::sqa_mpgmp00_m00.xfdl", params);
        		}else{

        			var objFrame = this.getOwnerFrame();

        			if(objFrame.form.divAll)
        			{
        				var sMainUrl = objFrame.form.fv_mainformUrl;

        				if(!this.smfIsNull(sMainUrl))
        				{
        					objFrame.form.fnSetMainpage(sMainUrl);
        				}
        			}
        		}
        }

        /**
         * @description 온라인 접수 메뉴 이동
        */
        this.fnOnlineAccept = function(param){

        	if (this.fv_sqeScCd != "") {
        		if (this.fv_sqeScCd == "1") {
        			gubunVal = "초등학교 졸업학력 검정고시";
        		} else if(this.fv_sqeScCd == "2"){
        			gubunVal = "중학교 졸업학력 검정고시";
        		} else if (this.fv_sqeScCd == "3") {
        			gubunVal = "고등학교 졸업학력 검정고시";
        		}
        	}

        	msgVal =  this.fv_enfcYr + "년 " +  this.fv_enfcTme + "회차 " + gubunVal;

        	//자격제한자 조회
        	this.smfSearchService("selectQlf")
        		.run()
        		.callback(function(callbackParams){
        			if(callbackParams.errors) return;
        			this.fnOnlineAcceptSuccess();
        		});

        };
        /**
         * @description 온라인 접수 callback
        */
        this.fnOnlineAcceptSuccess = function(param) {
        	trace("5.자격제한자체크" + this.dsQlf.rowcount)


        	//자격제한 체크
        	if(this.dsQlf.rowcount > 0){
        		this.smfAlert(this.smfToday()+"일 현재 자격제한자이므로 원서접수를 하실수 없습니다.\n\n자격제한자가 아니라면 해당 교육청으로 문의하시기 바랍니다.")
        	}else{

        		var sbmsnYn = this.dsSearch.getColumn(0, "sbmsnYn")
        		var trnsfYn = this.dsSearch.getColumn(0, "trnsfYn")

        		if(sbmsnYn == "Y" && trnsfYn != "Y"){ //제출완료, 이관미완료

        			msgText = "제출된 내역입니다. 담당자가 확인처리전까지 수정이 가능합니다.\n\n" + msgVal + " 접수정보를 수정하시겠습니까?"

        		} else { //제출안한경우

        			msgText = msgVal + "에 접수하시겠습니까?"

        		}

        		this.smfConfirm(msgText,function(confirmParams){

        			if(confirmParams.confirmResult){
        				//신규지원자이면, 접수번호 등록 후 다음으로
        				if(this.dsSearch.getColumn(0,"rcptNo") == "imsiNo"){

        					this.dsSearch.setColumn(0,"rrnoCeckYn","Y");

        					this.smfSearchService("selectRcptNo")
        					.run()
        					.callback(function(callbackParams){
        						if(callbackParams.errors) return;

        						this.fnOnlineAcceptSuccessNew();
        					});


        				}else{
        				//제출여부 확인
        					this.smfSearchService("selectSqaSbmtYn")
        					.run()
        					.callback(function(callbackParams){
        						if(callbackParams.errors) return;
        						this.fnOnlineAcceptSuccessExist();
        					});
        				}
        			}else{
         				var params = {menuId:this.fv_menuId}
         				this.smfSetWorkPage("pa_sqa_cmm_cm::sqa_cmmcm04_m00.xfdl", params); //sqa_cmmcm04_m00 : 초중고선택화면
        				return false;
        			}
        		})


        	}
        }
        /**
         * @description 온라인 접수 callback _ 신규지원자일 경우
        */
        this.fnOnlineAcceptSuccessNew = function(){
        	if(this.dsMain.rowcount > 0){
        		this.dsSearch.setColumn(0,"downLoadYn",  "N");

        		var params = {
        						enfcYr	:	this.fv_enfcYr,
        						enfcTme	:	this.fv_enfcTme,
        						sqeScCd	:	this.fv_sqeScCd,
        						cddcCd	: 	this.smfGetCddcCode(),
        						rcptNo	:	this.dsMain.getColumn(0,"rcptNo"),
        						kornFlnm:	this.dsMain.getColumn(0,"kornFlnm"),
        						sbmsnYn :	 "N" //제출안함(신규)
        						}
        	}
        	this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror02_m00.xfdl", params);

        }
        /**
         * @description 온라인 접수 callback _ 기존 지원자 일 경우
        */
        this.fnOnlineAcceptSuccessExist = function(){

        	if(this.dsMain.getColumn(0,"trnsfYn") != "Y"){ //이관안됫을때
        		this.dsSearch.setColumn(0,"downLoadYn",  "N");

        		var params = {
        						enfcYr	:	this.fv_enfcYr,
        						enfcTme	:	this.fv_enfcTme,
        						sqeScCd	:	this.fv_sqeScCd,
        						cddcCd	:  	this.smfGetCddcCode(),
        						rcptNo	:	this.dsMain.getColumn(0,"rcptNo"),
        						kornFlnm:	this.smfGetSessionValue("kornFlnm"),
        						sbmsnYn : 	this.dsMain.getColumn(0,"sbmsnYn") //제출여부
        					}
        		this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror02_m00.xfdl", params);

        	}else{

        		this.smfAlert("이미 " + msgVal + " 원서가 제출되어\n이관완료되었습니다.\n\n제출한 원서내용은 원서조회 메뉴에서 확인하시기 바랍니다.", function(){
        				var params = {
        							enfcYr	:	this.fv_enfcYr,
        							enfcTme	:	this.fv_enfcTme,
        							sqeScCd	:	this.fv_sqeScCd,
        							cddcCd	:	this.smfGetCddcCode(),
        							rcptNo	:	this.dsMain.getColumn(0,"rcptNo"),
        						}
        			this.smfSetWorkPage("pa_sqa_oar_oi::sqa_oaroi00_m00.xfdl", params);
        		});


        	}
        }


        /**
         * @description 성적조회
        */
        this.fnApplpScore = function(){
        	this.dsApplpInfo.clearData();
        	//성적조회
        	this.smfSearchService("selectEnfcYrChk")
        		// 실행
        		.run()

        		// 콜백
        		.callback(function(callbackParams){
        			if(callbackParams.errors) return;
        			this.fnApplpScoreSuccess();
        		});
        }
        /**
         * @description 성적조회 callback
        */
        this.fnApplpScoreSuccess = function(){

        	var screInqBgngYmdtm 	= this.smfTrim(this.dsEnfcYrChk.getColumn(0,"screInqBgngYmdtm"))
        	var screInqEndYmdtm 	= this.smfTrim(this.dsEnfcYrChk.getColumn(0,"screInqEndYmdtm"))
        	var screInqBgngYmd 		= this.smfTrim(this.dsEnfcYrChk.getColumn(0,"screInqBgngYmd"))
        	var screInqBgngTm 		= this.smfTrim(this.dsEnfcYrChk.getColumn(0,"screInqBgngTm"))
        	var screInqEndYmd 		= this.smfTrim(this.dsEnfcYrChk.getColumn(0,"screInqEndYmd"))
        	var screInqEndTm 		= this.smfTrim(this.dsEnfcYrChk.getColumn(0,"screInqEndTm"))
        	var toDateChar 			= this.smfTrim(this.dsEnfcYrChk.getColumn(0,"toDateChar"))


        //***오프라인 접수자의 성적도 조회해야 하므로 온라인접수내역 조회할 필요 없음
        // 	if(this.dsApplpInfo == null || this.dsApplpInfo.rowcount == 0){
        // 		this.smfAlert("입력 정보에 대한 온라인 접수 내역을 찾을 수 없습니다. \n\n※ 기합격자의 경우 접수 방식과 상관없이 정부24 를 통해 증명서 발급이 가능합니다.");
        //
        // 	}else{
        		if(this.dsEnfcYrChk == null || this.dsEnfcYrChk.rowcount == 0){
        			this.smfAlert("성적조회기간이 아닙니다. 시도담당자에게 문의 바랍니다! \n\n※ 기 합격자인 경우 정부24 온라인발급신청을 이용하세요.")
        		}else{
        			if(screInqBgngYmdtm.length != 10 && screInqEndYmdtm.length != 10){
        				this.smfAlert("성적조회기간이 잘못되어있습니다. 시도담당자에게 문의 바랍니다!!! \n\n ※ 기 합격자인 경우 정부24 온라인발급신청을 이용하세요.")
        			}else if(screInqBgngYmdtm <= toDateChar && screInqEndYmdtm > toDateChar){

        				if(this.dsApplpInfo.rowcount == 0){ //dsApplpInfo size가 0인경우 : 오프라인에도 정보가 없는 경우

        					this.smfAlert("PA068", [] , function(){ //입력 정보에 대한 사용자 정보가 없습니다. 다시 한번 확인 바랍니다.
        						var params ={menuId : this.fv_menuId}
        						this.smfSetWorkPage("pa_sqa_cmm_cm::sqa_cmmcm04_m00.xfdl", params);
        					})

        				}else{

        					var params = {
        								enfcYr :  this.dsApplpInfo.getColumn(0,"enfcYr"),
        								enfcTme : this.dsApplpInfo.getColumn(0,"enfcTme"),
        								sqeScCd : this.dsApplpInfo.getColumn(0,"sqeScCd"),
        								cddcCd : this.smfGetSessionValue("cddcCd"),
        								rcptNo : this.dsApplpInfo.getColumn(0,"rcptNo"),
        								sqeExmtNo : this.dsApplpInfo.getColumn(0,"sqeExmtNo"),
        								kornFlnm : this.smfGetSessionValue("kornFlnm")
        							};

        					this.smfSetWorkPage("pa_sqa_ari_si::sqa_arisi00_m00.xfdl", params);
        				}
        			}else if(screInqBgngYmdtm > toDateChar || screInqEndYmdtm <= toDateChar){

        				this.smfAlert("성적조회기간이 아닙니다. 시도담당자에게 문의 바랍니다!!\n\n" +
        				"성적조회기간 : " + this.dateFormat(screInqBgngYmd) + " " + screInqBgngTm + "시 ~ " + this.dateFormat(screInqEndYmd) + " " + screInqEndTm + "시\n\n"
        				+ "※ 기 합격자인 경우 정부24 온라인발급신청을 이용하세요.")

        			}else{

        				this.smfAlert("성적조회기간이 아닙니다. 시도담당자에게 문의 바랍니다!! \n\n※ 기 합격자인 경우 정부24 온라인발급신청을 이용하세요.")
        			}

        		}
        	//}
        }

        this.dateFormat = function(sDate){

         var sYear = sDate.substr(0,4)
         var sMonth = sDate.substr(4,2)
         var sDay = sDate.substr(6,2)

         return sYear+"."+sMonth+"."+sDay
        }
        /**
         * @description 원서 조회
        */
        this.fnOnlineApplication = function(){

        	//원서조회
        	this.smfSearchService("selectEnfcYrChk")
        		.run()
        		.callback(function(callbackParams){
        			if(callbackParams.errors) return;
        			this.fnOnlineApplicationSuccess();
        		});
        }
        /**
         * @description 원서 조회 callback
        */
        this.fnOnlineApplicationSuccess = function(){


        	if(this.dsApplpInfo == null || this.dsApplpInfo.rowcount == 0){

        		this.smfAlert("PA068", [], function(){ //입력 정보에 대한 사용자 정보가 없습니다. 다시 한번 확인 바랍니다.
        			var params ={menuId : this.fv_menuId}
        			this.smfSetWorkPage("pa_sqa_cmm_cm::sqa_cmmcm04_m00.xfdl", params);
        		})


        	}else{

        			this.dsSearch.deleteAll();
        			this.dsSearch.addRow();
        			this.dsSearch.setColumn(0,"enfcYr", this.dsApplpInfo.getColumn(0, "enfcYr"))
        			this.dsSearch.setColumn(0, "enfcTme", this.dsApplpInfo.getColumn(0, "enfcTme"));
        			this.dsSearch.setColumn(0, "sqeScCd", this.dsApplpInfo.getColumn(0, "sqeScCd"));
        			this.dsSearch.setColumn(0, "cddcCd", this.dsApplpInfo.getColumn(0, "cddcCd"));
        			this.dsSearch.setColumn(0, "rcptNo", this.dsApplpInfo.getColumn(0, "rcptNo"));
        			this.dsSearch.setColumn(0, "trprRrno", this.smfGetSessionValue("trprRrno"));
        			this.dsSearch.setColumn(0, "kornFlnm", this.smfGetSessionValue("kornFlnm"));

        			this.smfSearchService("selectSqaSbmtYn")
        			// 실행
        			.run()

        			// 콜백
        			.callback(function(callbackParams){
        				if(callbackParams.errors) return;

        				if(this.dsMain.getColumn(0,"sbmsnYn") != "Y"){

        					this.smfAlert("PA069", [] ,function(){ //원서 접수중인 지원자입니다. 원서를 제출후 조회하세요.
        						var params ={menuId : this.fv_menuId}
        						this.smfSetWorkPage("pa_sqa_cmm_cm::sqa_cmmcm04_m00.xfdl", params);
        					});

        				}else{

        					var params = {
        								enfcYr 	: this.dsApplpInfo.getColumn(0,"enfcYr"),
        								enfcTme : this.dsApplpInfo.getColumn(0,"enfcTme"),
        								sqeScCd : this.dsApplpInfo.getColumn(0,"sqeScCd"),
        								cddcCd 	: this.dsApplpInfo.getColumn(0,"cddcCd"),
        								rcptNo 	: this.dsApplpInfo.getColumn(0,"rcptNo")
        							};

        					this.smfSetWorkPage("pa_sqa_oar_oi::sqa_oaroi00_m00.xfdl", params);
        				}


        			});
        	}
        }
        /**
         * @description 수험표출력
        */
        this.fnOarEo = function(){

        	//수험표출력전 조회
        	this.smfSearchService("selectEnfcYrChk")
        		.run()
        		.callback(function(callbackParams){
        			if(callbackParams.errors) return;
        			this.fnOarEoSuccess();
        		});
        }
        /**
         * @description 수험표출력 callback
        */
        this.fnOarEoSuccess = function(){

        	if(this.dsApplpInfo == null || this.dsApplpInfo.rowcount == 0){
        		this.smfAlert("접수자 정보가 존재하지 않습니다.\n온라인 접수인 경우 원서를 제출한 교육청이 맞는지 확인해주시기 바라며\n현장 접수인 경우에는 온라인 발급이 불가하오니 접수처로 문의바랍니다.",function(){
        			var params ={menuId : this.fv_menuId}
        			this.smfSetWorkPage("pa_sqa_cmm_cm::sqa_cmmcm04_m00.xfdl", params);
        		})


        	}else if(this.dsApplpInfo.getColumn(0,"chulNo") == "N"){

        		var vStartYear = this.dsEnfcYrChk.getColumn(0,"eiOtptBgngYmd").substring(0, 4);
        		var vStartMonth = this.dsEnfcYrChk.getColumn(0,"eiOtptBgngYmd").substring(4, 6);
        		var vStartDay = this.dsEnfcYrChk.getColumn(0,"eiOtptBgngYmd").substring(6, 8);
        		var vEndYear = this.dsEnfcYrChk.getColumn(0,"eiOtptEndYmd").substring(0, 4);
        		var vEndMonth = this.dsEnfcYrChk.getColumn(0,"eiOtptEndYmd").substring(4, 6);
        		var vEndDay = this.dsEnfcYrChk.getColumn(0,"eiOtptEndYmd").substring(6, 8);


        		this.smfAlert("수험표 출력일이 아닙니다.\n출력일은 "+vStartYear+"년 "+vStartMonth+"월 "+vStartDay+"일 "+" ~ "+vEndYear+"년 "+vEndMonth+"월 "+vEndDay+"일 "+" 입니다.", function(){
        			var params ={menuId : this.fv_menuId}
        			this.smfSetWorkPage("pa_sqa_cmm_cm::sqa_cmmcm04_m00.xfdl", params);
        		})
        	}else{
        		if(this.dsApplpInfo.getColumn(0,"sbmsnYn") == "Y"){ //제출완료
        			if(this.dsApplpInfo.getColumn(0,"sqeExmtNo") == null ){
        				this.smfAlert("원서제출후 담당자 처리중입니다. 수험번호 발부후 출력가능합니다.\n\n처리상황은 원서조회에서 확인가능합니다.",function(){
        					var params ={menuId : this.fv_menuId}
        					this.smfSetWorkPage("pa_sqa_cmm_cm::sqa_cmmcm04_m00.xfdl", params);
        				});
        			}else{
        				if(this.dsApplpInfo.getColumn(0,"sqeExmtNo") == ""){
        					this.smfAlert("원서제출후 담당자 처리중입니다. 수험번호 발부후 출력가능합니다.\n\n처리상황은 원서조회에서 확인가능합니다.",function(){
        						var params ={menuId : this.fv_menuId}
        						this.smfSetWorkPage("pa_sqa_cmm_cm::sqa_cmmcm04_m00.xfdl", params);
        					});
        				}else{
        					var params = {
        								enfcYr :  this.dsApplpInfo.getColumn(0,"enfcYr"),
        								enfcTme : this.dsApplpInfo.getColumn(0,"enfcTme"),
        								sqeScCd : this.dsApplpInfo.getColumn(0,"sqeScCd"),
        								cddcCd : this.dsApplpInfo.getColumn(0,"cddcCd"),
        								rcptNo : this.dsApplpInfo.getColumn(0,"rcptNo")
        							};

        					this.smfSetWorkPage("pa_sqa_oar_eo::sqa_oareo00_m00.xfdl", params);
        				}
        			}
        		}else{
        			this.smfAlert("수험번호 발부후 출력가능합니다.\n\n처리상황은 원서조회에서 확인가능합니다.\n\n※ 현재상태: 미제출(제출 필요)");
        		}
        	}
        }




        this.fnSetInitParam = function(param){

        	this.fv_enfcYr = param.enfcYr;
        	this.fv_enfcTme = param.enfcTme;
        	this.fv_sqeScCd = param.sqeScCd;
        	this.fv_menuId = param.menuId;
        	this.fv_rcptNo = param.rcptNo;
        	this.fv_cddcCd =  this.smfGetCddcCode();

        }
        /**
        * 접수가능기간 체크
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        */
        this.fnCheckDate = function(gubun, url, params){

        	this.fnSetParam(gubun);
        	var text = "";
        	if(gubun == "1"){text = "초등학교"}
        	if(gubun == "2"){text = "중학교"}
        	if(gubun == "3"){text = "고등학교"}

        	var toDateMm = this.dsResult.getColumn(0, "toDateMm");

        	//원서접수가능기간 체크
        	if(itnRcptBgngYmdtm != null && itnRcptBgngYmdtm != ""){

        		if(itnRcptBgngYmdtm.length == 10 && itnRcptEndYmdtm.length == 10){

        			if(itnRcptBgngYmdtm <= toDateMm && itnRcptEndYmdtm > toDateMm){


        				//페이지 구분 1:온라인원서접수 2:원서조회 3:수험표출력 4:성적조회
        				//gubun : 1: 초졸, 2:중졸, 3:고졸
        				if(url != ""){
        					this.smfSetWorkPage(url, params);
        				}else{
        					return true;
        				}
        			}else{
        				//원서접수불가 팝업

        				// 팝업을 동작에 필요한 파라메터 지정
        				var popupParams = {
        					callback: this.fnPopupCallback, // 콜백함수 지정
        					sender: obj, // sender 지정

        					// 팝업 전달 파라메터 지정
        					params: {
        						// 처리타입 지정
        						procType: "notice",
        						// 파라메터 전달
        						beginYmd: this.fnGetWeekDateFormat(itnRcptBgngYmdtm),
        						endYmd: this.fnGetWeekDateFormat(itnRcptEndYmdtm),
        						enfcYr: this.fv_enfcYr,
        						enfcTme: this.fv_enfcTme,
        						id : "btnMeq"
        					},
        				};

        				this.popUp_open("pa_sqa_oar_or::sqa_oaror01_p01.xfdl", popupParams);
        				return false;
        			}
        		}else{
        			this.smfAlert("PA070",[text]) //해당 시도는 {0} 졸업학력 검정고시 온라인 접수를 실시하지 않습니다. 현장접수해주시기 바랍니다.
        			return false;
        		}
        	}else{
        		this.smfAlert("PA070",[text]) //해당 시도는 {0} 졸업학력 검정고시 온라인 접수를 실시하지 않습니다. 현장접수해주시기 바랍니다.
        		return false;
        	}
        };

        /**
        * popUp_open :  팝업 오픈
        * @param  : popupParams
        * @return : N/A
        */
        this.popUp_open = function(url, popupParams)
        {
        	// 모달리스팝업 실행
        	this.smfOpen("_auto", url, popupParams);
        };

        /**
         * 팝업의 콜백함수 지정한다
         * @param : e - 팝업에서 전달한 파라메터
         * @param : sender - 팝업호출시 전달한 팝업호출객체
         */
        this.fnPopupCallback = function(e, sender){
        	// 업무콜백 처리
        	this.smfAlert("응답결과 ==>"+e.row.Column0+", "+e.row.Column1+", "+e.row.Column2+", "+e.row.Column3);
        };

        /**
         * 날짜포멧 변경 (2022092030 -> 2022.9.20(화) 30:00 으로 변환)
         * @param :
         * @param :
         */
        this.fnGetWeekDateFormat = function(sDate){

        	var yy = parseInt(sDate.substr(0,4), 10);
        	var mm = parseInt(sDate.substr(4,2), 10);
        	var dd = parseInt(sDate.substr(6,2), 10);
        	var tt = parseInt(sDate.substr(8,2), 10);
        	var d = new Date(yy, mm-1, dd);

        	var weekdayArr = ['일','월','화','수','목','금','토'];
        	var weekday = weekdayArr[d.getDay()];

        	var returnStr = mm +'. '+ dd + "("+weekday +")";
        	if(sDate.length == 10){
        		returnStr += " " + tt + ":00";
        	}
        	return returnStr;

        };
        /**
         * 상단 스탭박스(응시자정보) 클릭 시 이동 이벤트
         * @param :
         * @param :
         */
        this.div00_btnOarOr02_onclick = function(obj,e)
        {
        	var params = {enfcYr:this.fv_enfcYr,
        					enfcTme:this.fv_enfcTme,
        					sqeScCd:this.fv_sqeScCd,
        					cddcCd: this.fv_cddcCd,
        					rcptNo:this.fv_rcptNo,
        					trprRrno:this.sTrprRrno,
        					kornFlnm:this.sKornFlnm,
        					subTitle : this.imgSubTitle.text,
        					sbmsnYn : "Y"
        					}

        	this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror02_m00.xfdl", params);
        };

        /**
         * 상단 스탭박스(학력과목정보) 클릭 시 이동 이벤트
         * @param :
         * @param :
         */
        this.div00_btnOarOr03_onclick = function(obj,e)
        {

        	var params = {
        					enfcYr:this.fv_enfcYr,
        					enfcTme:this.fv_enfcTme,
        					sqeScCd:this.fv_sqeScCd,
        					cddcCd: this.fv_cddcCd,
        					rcptNo:this.fv_rcptNo,
        					trprRrno:this.sTrprRrno,
        					kornFlnm:this.sKornFlnm,
        					subTitle : this.imgSubTitle.text,
        					sbmsnYn : "Y"
        					}

        	this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror03_m00.xfdl", params);
        };


        /**
         * 상단 스탭박스(고사장선택) 클릭 시 이동 이벤트
         * @param :
         * @param :
         */
        this.div00_btnOarOr04_onclick = function(obj,e)
        {
        	var params = {
        					enfcYr:this.fv_enfcYr,
        					enfcTme:this.fv_enfcTme,
        					sqeScCd:this.fv_sqeScCd,
        					cddcCd: this.fv_cddcCd,
        					rcptNo:this.fv_rcptNo,
        					trprRrno:this.sTrprRrno,
        					kornFlnm:this.sKornFlnm,
        					subTitle : this.imgSubTitle.text,
        					sbmsnYn : "Y"
        					}

        	this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror04_m00.xfdl", params);
        };

        /**
         * 상단 스탭박스(제출완료) 클릭 시 이동 이벤트
         * @param :
         * @param :
         */
        // this.div00_btnOarOr05_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var params = {enfcYr:this.fv_enfcYr,
        // 					enfcTme:this.fv_enfcTme,
        // 					sqeScCd:this.fv_sqeScCd,
        // 					cddcCd: this.fv_cddcCd,
        // 					rcptNo:this.fv_rcptNo,
        // 					trprRrno:this.sTrprRrno,
        // 					kornFlnm:this.sKornFlnm,
        // 					subTitle : this.imgSubTitle.text,
        // 					sbmsnYn : "Y"
        // 					}
        // 	if(obj.id == "btnOarOr02"){
        // 		this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror02_m00.xfdl", params);
        // 	}else if(obj.id == "btnOarOr03"){
        // 		this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror03_m00.xfdl", params);
        // 	}else if(obj.id == "btnOarOr04"){
        // 		this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror04_m00.xfdl", params);
        // 	}else if(obj.id == "btnOarOr05"){
        // 		this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror05_m00.xfdl", params);
        // 	}
        //
        // };

        this.fnStep_onclick = function(obj,e)
        {
        	if(this.fnChkValidate()){

        		var params = {enfcYr:this.fv_enfcYr,
        					enfcTme:this.fv_enfcTme,
        					sqeScCd:this.fv_sqeScCd,
        					cddcCd: this.fv_cddcCd,
        					rcptNo:this.fv_rcptNo,
        					trprRrno:this.sTrprRrno,
        					kornFlnm:this.sKornFlnm,
        					subTitle : this.imgSubTitle.text,
        					sbmsnYn : "Y"
        						}
        		if(obj.id == "btnOarOr02"){
        			this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror02_m00.xfdl", params);
        		}else if(obj.id == "btnOarOr03"){
        			this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror03_m00.xfdl", params);
        		}else if(obj.id == "btnOarOr04"){
        			this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror04_m00.xfdl", params);
        		}else if(obj.id == "btnOarOr05"){
        			this.smfSetWorkPage("pa_sqa_oar_or::sqa_oaror05_m00.xfdl", params);
        		}
        	}
        }

        // 로그인 확인
        this.UepChkLogin = function(menuId) {

        //로그인 안되어있을때
        	if(this.smfGetTrprRrno().length == 0 || this.smfGetTrprRrno() == null) {

        			this.smfAlert("PA049", [], function() { //PA049: 사용자 로그인이 필요합니다. ) 로그인화면으로 이동

        			var sUrl = "pa_sqa_cmm_cm::sqa_cmmcm03_m00.xfdl"; //로그인화면

        			var params = {trprRrno: this.smfGetTrprRrno(),
        						kornFlnm :this.smfGetKornFlnm(),
        						cddcCd : this.smfGetCddcCode(),
        						menuId : menuId};

        			this.smfSetWorkPage(sUrl, params);
        		});


        //로그인되어있을때
        	}else{

        		return true;
        	}
        }

        ///////////////////////////////////대입전형자료제공 Start//////////////////////////////////////

        // /**
        //  * @description 검정고시대입전형 임시 세션
        //  */
        // this.sqafTempSession = function(){
        // 	var objSessionDs = nexacro.getApplication().gdsSession;
        //
        // 	objSessionDs.setColumn(0,"userId", "test0374K"); 			//사용자ID
        // 	objSessionDs.setColumn(0,"orgCd", "K100004038"); 			//기관코드
        // 	objSessionDs.setColumn(0,"orgNm", "테스트대학교");		//기관명
        // 	objSessionDs.setColumn(0,"coaAyr", "2023"); 				//대입학년도
        // 	objSessionDs.setColumn(0,"coaRcritScCd", "2"); 				//대입모집구분코드
        // 	objSessionDs.setColumn(0,"apprIpAddr", "172.16.12.59"); 	//ip주소
        // 	objSessionDs.setColumn(0,"userNm", "테스트"); 				//사용자명
        // }
        //
        // this.sqafTempSession();

        /**
         * @description 검정고시대입전형 공통 코드정보 조회
         * @param objGrd 그리드
         * @param objDsValid 유효성검증Ds
         * @param strCol 메시지를 설정할 컬럼아이디(검증결과)
         * @param msgAlertYn 메시지 alert 유무
         */
        this.fnOnloadSearch = function(obj, ary){

        	var outDs = "";

        	for(var i = 0 ; i < ary.length ; i++ ) {
        		if(i == 0 ) {
        			outDs += ary[i] + "=" + ary[i];
        		} else {
        			outDs += " " + ary[i] + "=" + ary[i];
        		}
        	}

        	//호출
        	this.smfDynService(
        		  "listCoaCmmCd"
        		, {
        			  url: "/sqa_cmm_cm99_001.do"
        			, inDatasets: "dsSearch=dsSearch"
        			, outDatasets: outDs
        		  })
        		  .callback(function(callbackParams){
        			   if(callbackParams.errors) return;

        			   //콜백호출
        			   this.fnOnloadSearchCallback();
        		   })
        		  .run();
        };

        /**
         * @description 검정고시대입전형모집구분명 값 조회
         * @param : coaRcritScCd - 대입모집구분코드
         * @return : coaRcritScNm - 대입모집구분명
         */
        this.fnGetCoaRcritScNm = function(pv_coaRcritScCd){
        	var coaRcritScNm = "";
        	var coaRcritScCd = pv_coaRcritScCd;
        	if(this.smfIsNull(coaRcritScCd)){
        		coaRcritScCd = this.smfIsNull(nexacro.getApplication().gdsSession.getColumn(0, "coaRcritScCd")) ? "" : nexacro.getApplication().gdsSession.getColumn(0, "coaRcritScCd");
        	}
        	switch (coaRcritScCd) {
        		case "1":
        			coaRcritScNm = "정시";
        		break;
        		case "2":
        			coaRcritScNm = "수시";
        		break;
        		case "3":
        			coaRcritScNm = "정시(사전운영)";
        		break;
        		case "4":
        			coaRcritScNm = "수시(사전운영)";
        		break;
        		default:
        			coaRcritScNm = "";
        		break;
        	}
        	return coaRcritScNm;
        };

        /**
         * @description 검정고시대입전형 변수
         */
        this.sqav_coaAyr = this.smfIsNull(nexacro.getApplication().gdsSession.getColumn(0, "coaAyr")) ? "" : nexacro.getApplication().gdsSession.getColumn(0, "coaAyr");
        this.sqav_coaRcritScCd = this.smfIsNull(nexacro.getApplication().gdsSession.getColumn(0, "coaRcritScCd")) ? "" : nexacro.getApplication().gdsSession.getColumn(0, "coaRcritScCd");
        this.sqav_coaRcritScNm = this.fnGetCoaRcritScNm();
        this.sqav_uvstOrgCd = this.smfIsNull(nexacro.getApplication().gdsSession.getColumn(0, "orgCd")) ? "" : nexacro.getApplication().gdsSession.getColumn(0, "orgCd");
        this.sqav_coaDataPathValue = "rcgnUnivDataPath"+ this.sqav_coaAyr + this.sqav_coaRcritScCd;
        this.sqav_coaDataDownDir = "1.전형자료수신";
        this.sqav_coaDataDecDir = "2.전형자료복호화";

        /**
        * @description 검정고시대입전형 컬럼의 타이틀 생성
         *
         * 유효성 데이터셋의 title
         * 그리드의 bind 컬럼의 head text
         *
         * @param  grd       		그리드
         * @param  dsValid   		유효성 데이터셋
         * @return void
         */
        this.fnGetColTitle = function(grd, dsValid){
        	var colTitle = {};

        	if(dsValid){
        		for(var i = 0; i < dsValid.getColCount(); i++){
        			var ruleExpression = this.smfStr(dsValid.getColumn(0, i));
        			var aRule = ruleExpression.match(/(?<=title\:)(.*?)(?=\,|$)/gi);
        			if(aRule instanceof Array){
        				var id = this.smfStr(dsValid.getColID(i));
        				var title = this.smfStr(aRule[0]).trim();
        				if(!this.smfIsNull(id) && !this.smfIsNull(title)){
        					colTitle[id] = title;
        				}
        			}
        		}
        	}

        	for(var i = 0; i < grd.getCellCount('body'); i++){
        		var id = this.smfStr(grd.getCellProperty('body', i, 'text').replace('bind:',''));
        		var title = this.smfStr(grd.getCellProperty('head', i, 'text')).trim();
        		if(!this.smfIsNull(id) && !this.smfIsNull(title) && this.smfIsNull(colTitle[id])){
        			colTitle[id] = title.trim();
        		}
        	}

        	return colTitle;
        }

        /**
         * @description 검정고시대입전형 유효성검사
         * @param  grd       		그리드
         * @param  dsValid   		유효성 데이터셋
         * @param  errorCallback    유효성 에러 콜백
         * @param  successCallback  유효성 검사 성공 콜백
         * @param  failCallback     유효성 검사 실패 콜백
         * @return void
         */
        this.fnExcelCeck = function(grd, dsValid, initCallback, errorCallback, successCallback, finalCallback){
        	if(this.smfIsFunc(initCallback)) initCallback.call(this);

        	var datasetOfGrid = grd.getBindDataset()
        	var invalidResult = {};
        	var isValidate = true;

        	for(var nRow = 0; nRow < datasetOfGrid.getRowCount(); nRow++){
        		for(var nCol = 0; nCol < datasetOfGrid.getColCount(); nCol++){
        			var rtnVal = this._svcfItemCheck(nRow, nCol, grd, datasetOfGrid, dsValid, invalidResult);
        			if(rtnVal !== true){
        				isValidate = false;
        				if(this.smfIsFunc(errorCallback)) errorCallback.call(this, nRow, nCol, datasetOfGrid, rtnVal);
        				break;
        			}
        		}
        	}

        	//유효성검사 성공
        	if(isValidate && this.smfIsFunc(successCallback)) successCallback.call(this);

        	if(this.smfIsFunc(finalCallback)) finalCallback.call(this);

        	return isValidate;
        };

        /**
         * @description 검정고시대입전형 컬럼 중복검사
         * @param  ds       		중복검사할 데이터셋
         * @param  aryColumn   		중복검사할 컬럼
         * @param  sColumnMessage   에러 메세지의 컬럼 타이틀
         * @param  initCallback     유효성 초기화 콜백
         * @param  errorCallback    유효성 에러 콜백
         * @param  successCallback  유효성 검사 성공 콜백
         * @param  failCallback     유효성 검사 실패 콜백
         * @return void
         */
        this.fnExcelDupCeck = function(ds, aryColumn, sColumnMessage, initCallback, errorCallback, successCallback, finalCallback){
            var isDup = false;

        	if(this.smfIsFunc(initCallback)) initCallback.call(this);

        	for(var i=ds.rowcount-1; i>0; i--){
        		var sSearchText = '';
        		for(var n = 0, size2 = aryColumn.length; n < size2; n++){
        			sSearchText += "dataset.parent.smfStr(" + aryColumn[n] + ") == '" + this.smfStr(ds.getColumn(i, aryColumn[n])) + "' ||";
        		}
        		sSearchText = sSearchText.substr(0, sSearchText.length-3);

        		var nRow = ds.findRowExpr(sSearchText, 0, i);
        		if(nRow > -1){
        			var rtnVal = this.format('{0}의 {1}행과 {2}행이 중복됩니다.', [sColumnMessage, nRow + 1, i + 1]);
        			if(this.smfIsFunc(errorCallback)) errorCallback.call(this, nRow, i, ds, rtnVal);
        			isDup = true;
        		}
        	}

        	//중복이 없으면
        	if(!isDup && this.smfIsFunc(successCallback)) successCallback.call(this);

        	if(this.smfIsFunc(finalCallback)) finalCallback.call(this);

        	return isDup;
        };

        /**
         * @description 검정고시전형자료경로 조회
         * @return : coaDataPath - 대입전형자료경로
         */
        this.sqafGetCoaDataPath = function(){
        	return nexacro.getPrivateProfile(this.sqav_coaDataPathValue);
        }

        /**
         * @description 검정고시대입전형자료수신경로 조회
         * @return : coaDataPath - 대입전형자료경로
         */
        this.sqafGetCoaDataDownPath = function(){
        	return nexacro.getPrivateProfile(this.sqav_coaDataPathValue) + "\\" + this.sqav_coaDataDownDir + "\\";
        }

        /**
         * @description 검정고시대입전형자료복호화경로 조회
         * @return : coaDataPath - 대입전형자료경로
         */
        this.sqafGetCoaDataDecPath = function(){
        	return nexacro.getPrivateProfile(this.sqav_coaDataPathValue) + "\\" + this.sqav_coaDataDecDir + "\\";
        }

        /**
         * @description 검정고시대입전형자료상세경로 조회
         * @return : coaDataDtlPath  대입전형자료상세경로
         */
        this.sqafGetCoaDataDtlPath = function(coaDataPath) {
        	var coaDataDtlPath = "";

        	if(this.smfIsNull(coaDataPath)){
        		coaDataPath = nexacro.getPrivateProfile(this.sqav_coaDataPathValue);
        	}
        	// coaDataDtlPath += "[2024학년도 수시 전형자료경로]";
        	coaDataDtlPath += "- 전형자료수신경로 : " + coaDataPath + "\\" + this.sqav_coaDataDownDir + "\\";
        	coaDataDtlPath += "\n- 전형자료복호화 : " + coaDataPath + "\\" + this.sqav_coaDataDecDir + "\\";

        	return coaDataDtlPath;
        }

        /**
         * @description 검정고시대입전형자료경로 설정
         * @return : coaDataDtlPath - 대입전형자료상세경로
         */
        this.sqafSetCoaDataPath = function(coaDataPath) {

        	nexacro.setPrivateProfile(this.sqav_coaDataPathValue, coaDataPath);

        	var objExtCommon = this.smfCreateExtCommonAPI();

        	var return1 = objExtCommon._ext_getCheckDir(this.divMain.form.edtCoaDataPath.text + "\\" + this.sqav_coaDataDownDir, 1);
        	var return2 = objExtCommon._ext_getCheckDir(this.divMain.form.edtCoaDataPath.text + "\\" + this.sqav_coaDataDecDir, 1);

        	objExtCommon = null;
        }

        /**
         * @description 검정고시대입전형 보고서 출력정보
         * @return : otptInfo - 출력정보(기관명/금일/IP/사용자명)
         */
        this.getOtptInfo = function() {
        	var ip = nexacro.getApplication().gdsSession.getColumn(0, "apprIpAddr");						//IP
        	var maskIp = ip.replace(/(\d+)(\.)(\d+)(\.)(\d+)(\.)(\d+)/g, "$1.*.*.$7");						//MASKIP
        	var orgNm = nexacro.getApplication().gdsSession.getColumn(0, "orgNm");							//기관명
        	var userNm = nexacro.getApplication().gdsSession.getColumn(0, "userNm");						//사용자명
        	var today = new nexacro.Date().toString().substr(0, 14).dateFormat("yyyy.MM.dd hh:mm:ss");		//금일
        	var otptInfo = orgNm + "/" + today + "/" + maskIp+  "/" + userNm;

        	return otptInfo;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
