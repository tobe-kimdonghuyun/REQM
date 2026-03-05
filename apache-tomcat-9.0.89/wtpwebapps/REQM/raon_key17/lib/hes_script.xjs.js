//XJS=hes_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * @fileoverview hes_script (학원민원)
         * @author 최경진
         */


        /**
         * @description 로그인확인
         */
        this.hesChkLogin = function(acaInstScCd, returnUrl){
        	var pass = true;
        	if(!this.smfIsLogin()){ //로그인을 하지 않은 경우
        		pass = false;
        	}else{
        		switch(acaInstScCd){
        			case "1" : //학원메뉴
        				if(this.hesGetAcaInstiScCd != "1"){
        					pass = false;
        				}
        			break;
        			case "2" : //교습소메뉴
        				if(this.hesGetAcaInstiScCd != "2" || this.hesGetInvlDsgnNo == "" || this.hesGetInvlDsgnNo == null){
        					pass = false;
        				}
        			break;
        			case "3" : //개인교습소메뉴
        				if(this.hesGetAcaInstiScCd != "3" || this.hesGetInvlDsgnNo == "" || this.hesGetInvlDsgnNo == null){
        					pass = false;
        				}
        			break;
        		}
        	}

        	if(!pass){
        		this.smfAlert("사용자 로그인이 필요합니다.", function() {
        			var sUrl = "pa_hes_lle_lv::hes_llelv00_m00.xfdl"; //로그인페이지

        			var params = {returnUrl: returnUrl};
        			this.smfSetWorkPage(sUrl, params);
        		});
        	}

        	return pass;
        }


        /**
         * @description 세션정보Get
         */
         /* 학원지정번호 */
         this.hesGetAcaDsgnNo = this.smfGetSessionValue("acaDsgnNo");
         /* 학원교습소구분코드 */
         this.hesGetAcaInstiScCd = this.smfGetSessionValue("acaInstiScCd");
         /* 개인지정번호 */
         this.hesGetInvlDsgnNo = this.smfGetSessionValue("invlDsgnNo");
         /* 시도교육청코드 */
         this.hesGetAtptOfcdcOrgCode = this.smfGetSessionValue("cteOfcdcCd");
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
