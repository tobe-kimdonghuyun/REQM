//XJS=ore_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * @fileoverview ore_script (온라인채용)
         * @author
         */

        /**
         * 서브메인이동
         */
        this.fnMoveSubMain = function()
        {
         		var params = {};
        		var sUrl = "frame::ore/frameSubMain.xfdl";
        		var bShowHead = false;
        		this.smfSetWorkPage(sUrl,params,bShowHead);
        }


         /**
        *  간편인증(휴대전화) 필수 세션 로그인 체크
        *  주민번호 사용 불가로 이름, 생년월일, 휴대전화번호를 키로 사용 하는 메뉴 체크
        *
        * 교육공무직 :  (5001)채용후보자등록 , (6002)전자근로계약서는 주민번호 필수
        * 계약제교원 :  (4001)경력합산신청서 , (4002)전자근로계약서는 주민번호 필수
        * 그외 메뉴 및, 교원, 지방공무원은 주민번호 필수
        */
        this.isEssenMblTelnoLogin = function(logInChkParam) {

        	var sMblTelNo = this.smfGetSessionValue('mblTelNo');// 휴대전화번호
        	var sUserNm   = this.smfGetSessionValue('userNm');  // 성명
        	if((this.smfIsNull(sMblTelNo))||(this.smfIsNull(sUserNm))){
        		if(this.smfIsLogin()){
        			this.smfAlert('해당 메뉴는 휴대전화 인증이 필요한 서비스 입니다.\n재인증 후 이용 해주세요') ;
        		}
        		var params = {
        				resendUrl : logInChkParam.redirectUrl // 선택메뉴 URL
        				,resendMenuId : logInChkParam.redirectMenuId // 선택메뉴 ID
        		};
        		var bShowHead = false;
        		// 본인인증 PAGE
        		this.smfSetWorkPage("pa_ore_oew_co::ore_oewco00_m00.xfdl", params, false);
        	}
        }

        /**
        *  주민번호 필수 세션 로그인 체크
        *  [미사용] 20230314  : 공통 메뉴영역에서 처리로변경
        *	frameMenu.xfdl : isNeedLogin, isNeedRrNo 데이터셋설정에 따른 본인인증 화면 구성
        *	isNeedLogin : 본인인증 필수여부
        *	isNeedRrNo : 주민번호 필수여부
        *
        * 교육공무직 :  (5001)채용후보자등록 , (6002)전자근로계약서는 주민번호 필수
        * 계약제교원 :  (4001)경력합산신청서 , (4002)전자근로계약서는 주민번호 필수
        * 그외 메뉴 및, 교원, 지방공무원은 주민번호 필수
        */
        this.isRrnoEssenLogin = function(logInChkParam) {
        	// 주민번호
        	var applpRrno =  this.smfGetSessionValue('userRrno');
        	// 성명
        	var applpFlnm = this.smfGetSessionValue('userNm');


        	// 세션여부
        	var isSession = 'N'
        	if(!this.smfIsNull(applpRrno) && !this.smfIsNull(applpFlnm)) {
        		isSession = 'Y';
        	}

        	// 주민번호 세션정보가 없을경우
        	if(isSession != 'Y'){
        		this.smfAlert('주민번호 인증이 필요한 서비스 입니다.') ;
        		var params = {
        			resendUrl : logInChkParam.redirectUrl // 선택메뉴 URL
        			,resendMenuId : logInChkParam.redirectMenuId // 선택메뉴 ID
        		};
        		var bShowHead = false;
        		// 본인인증 PAGE
        		this.smfSetWorkPage("pa_ore_oew_co::ore_oewco00_m00.xfdl", params, false);

        	}
        }

        /**
        * [미사용] 20230314  : 공통 메뉴영역에서 처리로변경
        * 업무별, 메뉴별  필수 세션값을 체크
        */
        this.isOreLogin = function(param) {

        	// 시도교육청코드
        	var cddcCd = this.smfGetCddcCode();
        	// 임용시험구분코드
        	var appoExamScCd = this.smfGetAppoExamScCd();

        	// 주민번호
        	var applpRrno =  this.smfGetSessionValue('userRrno');
        	// 성명
        	var applpFlnm = this.smfGetSessionValue('userNm');
        	// 생년월일
        	var applpBrdt =  this.smfGetSessionValue('brdt');

        	// 주민번호 필수 여부 (유초등교원,중등교원,지방공무원은 주민번호 필수, 교육공무직,계제교원은 일부메뉴 필수)
        	var isEssenRrno = 'N';
        	// 메뉴  아이디
        	var menu = param.resendMenuId;
        	// 세션여부
        	var isSession = 'N'

        	// 임용시험 구분에 따라 체크 분기 : 유초등교원,중등교원,지방공무원은 주민번호 필수
        	if(appoExamScCd === '1' || appoExamScCd === '2' || appoExamScCd === '3'){
        		// 유초등교원(1) ,중등교원(2), 지방공무원(3) = 주민번호+이름체크
        		if(!this.smfIsNull(applpRrno) && !this.smfIsNull(applpFlnm)) {
        			isSession = 'Y';
        		}

        	// 교육공무직,계약제교원은 일부메뉴 주민번호 필수
        	}else if(appoExamScCd === '4' || appoExamScCd === '5' ){
        		// 교육공무직 :  (5001)채용후보자등록 , (6002)전자근로계약서는 주민번호 필수
        		if('4' === appoExamScCd && ('5001' === menu || '6002' === menu)){
        			isEssenRrno ='Y'
        		}
        		// 계약제교원 :  (4001)경력합산신청서 , (4002)전자근로계약서는 주민번호 필수
        		if('5' === appoExamScCd && ('4001' === menu || '4002' === menu)){
        			isEssenRrno ='Y'
        		}

        		// 주민번호 필수 여부에 따른 메뉴체크
        		if( isEssenRrno != 'Y'){
        			// 교육공무직(4) , 계약제교원(5) = 생년월일+이름체크
        			if(!this.smfIsNull(applpBrdt) && !this.smfIsNull(applpFlnm)) {
        				isSession = 'Y';
        			}
        		}else{
        			//  교육공무직(4) , 계약제교원(5) = 주민번호+이름체크
        			if(!this.smfIsNull(applpRrno) && !this.smfIsNull(applpFlnm)) {
        				isSession = 'Y';
        			}
        		}


        	}

        	// 세션정보가 없을경우
        	if(isSession != 'Y'){
        		/*
        		this.smfAlert('본인 인증이 필요한 서비스 입니다.', function() {
        			var params = {
        				prevUrl: this.getOwnerFrame().form.fv_mainformUrl
        			};
        			// 본인인증 PAGE
        			this.smfSetWorkPage("pa_ore_oew_co::ore_oewco00_m00.xfdl", params, false);
        		});

        		var params = {
        			returnPage: this.getOwnerFrame().form.fv_mainformUrl
        		};
        		var bShowHead = false;
        		// 본인인증 PAGE
        		this.smfSetWorkPage("pa_ore_oew_co::ore_oewco00_m00.xfdl", params,  bShowHead);
        		*/
        	}
        }
        /**
        * 주민번호 체크
        */
        this.checkOreRrno = function(applpRrno) {

        	// 주민등록번호 자리수가 맞는가를 확인
        	if (applpRrno.length != 13){
        		return false;

        	}
        	// 앞자리가 날짜 형태인지 검증한다
        	var leftRrn = applpRrno.substring(0, 6);
        	if(! this.smfIsDate("20" + leftRrn)) {
        		return false;
        	}

        	// 성별 (외국인 포함)
        	var chr6 = applpRrno.charAt(6);
        	if(!(chr6 == '1' || chr6 == '2' || chr6 == '3' || chr6 == '4' || chr6 == '5' || chr6 == '6' || chr6 == '7' || chr6 == '8')){
        		return false;
        	}

        	return true;
        }

        /**
        * 주민번호로 YYYYMMDD 반환
        */
        this.applpRrnoToBrdt = function(applpRrno) {
        	// 성별 :  default 여
        	var sxdsCd = "2";
        	// 주민번호 뒷자리 [남성] 1,3,5(외국인),7(외국인) [여성] 2,4,6(외국인),8(외국인)
        	var sxdsNo = applpRrno.slice(6,7);
        	if(sxdsNo === "1" || sxdsNo === "3" || sxdsNo === "5" || sxdsNo === "7"){
        		sxdsCd = "1";
        	}
        	// 출생년도 앞 2자리 처리
        	var applpBrdtYY = "19";
        	// 주민번호 뒷자리 3,4,7(외국인),8(외국인)  = 2000년대 출생
        	if(sxdsNo === "3" || sxdsNo === "4" || sxdsNo === "7" || sxdsNo === "8"){
        		applpBrdtYY ="20";
        	}
        	return applpBrdtYY+applpRrno.slice(0,6);
        }

        /**
        * 주민번호로 성별코드 반환
        */
        this.applpRrnoToSxdsCd = function(applpRrno) {
        	// 성별 :  default 여
        	var sxdsCd = "2";
        	// 주민번호 뒷자리 [남성] 1,3,5(외국인),7(외국인) [여성] 2,4,6(외국인),8(외국인)
        	var sxdsNo = applpRrno.slice(6,7);
        	if(sxdsNo === "1" || sxdsNo === "3" || sxdsNo === "5" || sxdsNo === "7"){
        		sxdsCd = "1";
        	}
        	return sxdsCd;
        }

        /**
        * 주민번호로 하이픈
        */
        this.applpRrnoHyphen= function(applpRrno){
        	if(applpRrno.length !=  13){
        		return applpRrno;
        	}
        	return applpRrno.substring(0,6) + '-' + applpRrno.substring(6)
        }


        /**
        * 초등 접수문의 정보
        */
        this.elvRcptInquiryInfo= function(rcptQustTelNo){
        	// 시도교육청 구분 코드
        	var cddcScCd = this.smfGetCddcCode().slice(0,3);
        	var rcptQustTxt = '09:00~18:00   |   점심시간 12시 ~ 13시 제외';
        	if(this.smfIsNull(rcptQustTelNo) || "undefined" === rcptQustTelNo){
        		rcptQustTelNo = "";
        	}else{
        		rcptQustTelNo =  rcptQustTelNo + "   |   ";
        	}
        	/* 전화번호 설정이 없을경우
        	if(this.smfIsNull(rcptQustTelNo)){
        		if(cddcScCd === 'B10'){ // 서울
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'C10'){ //부산
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'D10'){ // 대구
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'E10'){  //인천
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'F10'){ //광주
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'G10'){ //대전
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'H10'){ //울산
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'I10'){ //세종
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'J10'){ //경기
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'K10'){ //강원
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'M10'){ //충북
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'B10'){ //충남
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'P10'){ //전북
        			rcptQustTelNo = '' ;
        		}else if(cddcScCd === 'Q10'){ //전남
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'R10'){ //경북
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'S10'){ //경남
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'T10'){ //제주
        			rcptQustTelNo = '';
        		}
        		rcptQustTelNo =  rcptQustTelNo + "   |   ";
        	}
        	*/
        	return rcptQustTelNo+ rcptQustTxt;
        }

        /**
        * 중등 접수문의 정보
        */
        this.mlvRcptInquiryInfo= function(rcptQustTelNo){
        // 시도교육청 구분 코드
        	var cddcScCd = this.smfGetCddcCode().slice(0,3);
        	var rcptQustTxt = '09:00~18:00   |   점심시간 12시 ~ 13시 제외';
        	if(this.smfIsNull(rcptQustTelNo) || "undefined" === rcptQustTelNo){
        		rcptQustTelNo = "";
        	}else{
        		rcptQustTelNo =  rcptQustTelNo + "   |   ";
        	}
        	/* 전화번호 설정이 없을경우
        	if(this.smfIsNull(rcptQustTelNo) || "" ===  rcptQustTelNo || "undefined" === rcptQustTelNo){
        		if(cddcScCd === 'B10'){ // 서울
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'C10'){ //부산
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'D10'){ // 대구
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'E10'){  //인천
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'F10'){ //광주
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'G10'){ //대전
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'H10'){ //울산
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'I10'){ //세종
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'J10'){ //경기
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'K10'){ //강원
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'M10'){ //충북
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'B10'){ //충남
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'P10'){ //전북
        			rcptQustTelNo = '' ;
        		}else if(cddcScCd === 'Q10'){ //전남
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'R10'){ //경북
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'S10'){ //경남
        			rcptQustTelNo = '';
        		}else if(cddcScCd === 'T10'){ //제주
        			rcptQustTelNo = '';
        		}
        		rcptQustTelNo =  rcptQustTelNo + "   |   ";
        	}
        	*/
        	return rcptQustTelNo+ rcptQustTxt;
        }

        /**
        * 지방공무원 접수문의 정보
        */
        this.lcltyRcptInquiryInfo= function(rcptQustTelNo){
        	// 시도교육청 구분 코드
        	var cddcScCd = this.smfGetCddcCode().slice(0,3);
        	var rcptQustTxt = '09:00~18:00   |   점심시간 12시 ~ 13시 제외';
        	if(this.smfIsNull(rcptQustTelNo) || "undefined" === rcptQustTelNo){
        		rcptQustTelNo = "";
        	}else{
        		rcptQustTelNo =  rcptQustTelNo + "   |   ";
        	}
        	/* 전화번호 설정이 없을경우
        	if(this.smfIsNull(rcptQustTelNo)){
        		if(cddcScCd === 'B10'){ // 서울
        			rcptQustTelNo = '02-399-9016~7';
        		}else if(cddcScCd === 'C10'){ //부산
        			rcptQustTelNo = '051-860-0139~140   |   051-860-0614,0618';
        		}else if(cddcScCd === 'D10'){ // 대구
        			rcptQustTelNo = '053-231-0564   |   053-231-0567';
        		}else if(cddcScCd === 'E10'){  //인천
        			rcptQustTelNo = '032-420-8189   |   032-420-8408';
        		}else if(cddcScCd === 'F10'){ //광주
        			rcptQustTelNo = '062-380-4119~20';
        		}else if(cddcScCd === 'G10'){ //대전
        			rcptQustTelNo = '042-616-8552~6';
        		}else if(cddcScCd === 'H10'){ //울산
        			rcptQustTelNo = '052-210-5727,5725';
        		}else if(cddcScCd === 'I10'){ //세종
        			rcptQustTelNo = '044-320-3121,3123';
        		}else if(cddcScCd === 'J10'){ //경기
        			rcptQustTelNo = '031-249-0316,0318';
        		}else if(cddcScCd === 'K10'){ //강원
        			rcptQustTelNo = '033-258-5237~8';
        		}else if(cddcScCd === 'M10'){ //충북
        			rcptQustTelNo = '043-290-2513,2515';
        		}else if(cddcScCd === 'B10'){ //충남
        			rcptQustTelNo = '041-640-8025~8   |   041-640-1912';
        		}else if(cddcScCd === 'P10'){ //전북
        			rcptQustTelNo = '063-239-3444,3453   |   063-239-3449 ' ;
        		}else if(cddcScCd === 'Q10'){ //전남
        			rcptQustTelNo = '061-260-0713~4';
        		}else if(cddcScCd === 'R10'){ //경북
        			rcptQustTelNo = '054-805-3626,3629';
        		}else if(cddcScCd === 'S10'){ //경남
        			rcptQustTelNo = '055-268-1355,1358';
        		}else if(cddcScCd === 'T10'){ //제주
        			rcptQustTelNo = '064-710-0622,0626';
        		}
        		rcptQustTelNo =  rcptQustTelNo + "   |   ";
        	}
        	*/
        	return rcptQustTelNo+ rcptQustTxt;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
