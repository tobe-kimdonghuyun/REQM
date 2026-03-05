//XJS=trc_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        // TRACER API 적용을 위한 서버 정보
        // TRACER 서버 IP, PORT 정보 입력

        //TRACER 서버 정보
        this.TracerIp1 = "172.16.12.89";  // 172.16.12.89
        this.TracerPort1 = "8180";

        //TRACER API 서비스 타입
        this.service_type = "http";
        this.tracer_cookie_domain = '172.16.12.89';

        this.strServerIp = "";
        this.strServerPort = "";
        this.strInputServerUrl = "/TRACERAPI/inputQueue.do"
        this.strOutServerUrl = "/TRACERAPI/outQueue.do"

        this.closeFlag = 0;
        //

        // API에 필요한 변수 모음
        this.wcHost = "";
        this.wcIp = "";
        this.wcLoginId = "";
        this.wcPort = "";
        this.wcPageUrl = "";
        this.wcReturnCallback=null;
        //

        //Transaction 결과 변수
        this.host = "";
        this.ip = "";
        this.loginId = "";
        this.port = "";
        this.pageUrl = "";
        this.isWait = "";
        this.waitCnt = "";
        //


        // 암호화 함수
        function SHA256(s){

                var chrsz   = 8;
                var hexcase = 0;

                function safe_add (x, y) {
                    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
                    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                    return (msw << 16) | (lsw & 0xFFFF);
                }

                function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
                function R (X, n) { return ( X >>> n ); }
                function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
                function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
                function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
                function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
                function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
                function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

                function core_sha256 (m, l) {

                    var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1,
                        0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
                        0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786,
                        0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
                        0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147,
                        0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
                        0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B,
                        0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
                        0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A,
                        0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
                        0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);

                    var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);

                    var W = new Array(64);
                    var a, b, c, d, e, f, g, h, i, j;
                    var T1, T2;

                    m[l >> 5] |= 0x80 << (24 - l % 32);
                    m[((l + 64 >> 9) << 4) + 15] = l;

                    for ( var i = 0; i<m.length; i+=16 ) {
                        a = HASH[0];
                        b = HASH[1];
                        c = HASH[2];
                        d = HASH[3];
                        e = HASH[4];
                        f = HASH[5];
                        g = HASH[6];
                        h = HASH[7];

                        for ( var j = 0; j<64; j++) {
                            if (j < 16) W[j] = m[j + i];
                            else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

                            T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                            T2 = safe_add(Sigma0256(a), Maj(a, b, c));

                            h = g;
                            g = f;
                            f = e;
                            e = safe_add(d, T1);
                            d = c;
                            c = b;
                            b = a;
                            a = safe_add(T1, T2);
                        }

                        HASH[0] = safe_add(a, HASH[0]);
                        HASH[1] = safe_add(b, HASH[1]);
                        HASH[2] = safe_add(c, HASH[2]);
                        HASH[3] = safe_add(d, HASH[3]);
                        HASH[4] = safe_add(e, HASH[4]);
                        HASH[5] = safe_add(f, HASH[5]);
                        HASH[6] = safe_add(g, HASH[6]);
                        HASH[7] = safe_add(h, HASH[7]);
                    }
                    return HASH;
                }

                function str2binb (str) {
                    var bin = Array();
                    var mask = (1 << chrsz) - 1;
                    for(var i = 0; i < str.length * chrsz; i += chrsz) {
                        bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
                    }
                    return bin;
                }

                function Utf8Encode(string) {
                    string = string.replace(/\r\n/g,"\n");
                    var utftext = "";

                    for (var n = 0; n < string.length; n++) {

                        var c = string.charCodeAt(n);

                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        }
                        else if((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }
                        else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }

                    }

                    return utftext;
                }

                function binb2hex (binarray) {
                    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
                    var str = "";
                    for(var i = 0; i < binarray.length * 4; i++) {
                        str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
                        hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
                    }
                    return str;
                }

                s = Utf8Encode(s);
                return binb2hex(core_sha256(str2binb(s), s.length * chrsz));

        }
        //


        // 쿠키생성
        function makeCookieKey(loginId) {
            var start=10000;
            var end=99999;

            var rand = Math.floor((Math.random() * (end-start+1)) + start);
            loginId = loginId + "_T_" + rand + "_WC";

            var date = new Date();
            date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));

            loginId = SHA256(loginId);

            setCookie_Tracer("wcCookie",loginId,date,"/",this.tracer_cookie_domain);

            return loginId;
        }

        function setCookie_Tracer(cookieName, cookieValue, cookieExpire, cookiePath, cookieDomain, cookieSecure){
            var cookieText=escape(cookieName)+'='+escape(cookieValue);
            cookieText+=(cookieExpire ? '; EXPIRES='+cookieExpire.toGMTString() : '');
            cookieText+=(cookiePath ? '; PATH='+cookiePath : '');
            cookieText+=(cookieDomain ? '; DOMAIN='+cookieDomain : '');
            cookieText+=(cookieSecure ? '; SECURE' : '');

        	if(system.navigatorname.indexOf("nexacro")>-1)
        	{ // Runtime
        		nexacro.setCookieVariable(cookieName,cookieValue);
        	}
        	else
        	{
        		document.cookie=cookieText;
        	}
        }

        function getCookie(cookieName){
            var cookieValue=null;
        	if(system.navigatorname.indexOf("nexacro")>-1)
        	{ // Runtime
        		cookieValue = nexacro.getCookieVariable(cookieName);
        	}
        	else
        	{ // html5
        		if(document.cookie){
        			var array=document.cookie.split((escape(cookieName)+'='));
        			if(array.length >= 2){
        				var arraySub=array[1].split(';');
        				cookieValue=unescape(arraySub[0]);
        			}
        		}
        	}
            return cookieValue;
        }

        function getCookieKey(loginId) {
        	var cookie= getCookie('wcCookie');
            return cookie;
        }

        this.bMakeCookie=false;


        //순번 대기 시작시 호출
        this.WC_CheckWaitCnt = function (host, ip, port, loginId, pageUrl, returnCallback)
        {
        	// TRACE서버의 접속정보를 가져온다
        	var oServerInfo    = this._smfGetTracerServerInfo();
        	this.strServerIp          = oServerInfo.ip;
        	this.strServerPort        = oServerInfo.port;
        	this.service_type         = oServerInfo.protocol;
        	this.tracer_cookie_domain = oServerInfo.cookie_domain;

        	// 쿠키체크
        	 var cookie = getCookie('wcCookie');

             if ( cookie == null || cookie == '' ) {
        		this.bMakeCookie = true;
        		this.loginId = makeCookieKey(loginId);
        	 }
             else {
        		this.bMakeCookie = false;
        		this.loginId = cookie;
             }

        	this.closeFlag = 0;

        	if (host == null || host == "undefined")
        	{
        		this.wcHost = "-";
        	}
        	else
        	{
        		this.wcHost = host;
        	}

        	if (ip == null || ip == "undefined")
        	{
        		this.wcIp = "-";
        	}
        	else
        	{
        		this.wcIp = ip;
        	}

        	// 로그인 아이디
        	if (loginId == null || loginId == "undefined")
        	{
        		this.wcLoginId = "-";
        	}
        	else
        	{
        		this.wcLoginId = cookie;
        	}

        	if (port == null || port == "undefined")
        	{
        		this.wcPort = "-";
        	}
        	else
        	{
        		this.wcPort = port;
        	}

        	if (pageUrl == null || pageUrl == "undefined")
        	{
        		this.wcPageUrl = "-";
        	}
        	else
        	{
        		this.wcPageUrl = pageUrl;
        	}

        	if(returnCallback== null || returnCallback=="undefined")
        	{
        		this.wcReturnCallback = "-";
        	}
        	else
        	{
        		this.wcReturnCallback = returnCallback;
        	}

        	this.WC_SendServerData(this.wcHost, this.wcIp, this.wcPort, this.wcLoginId, this.wcPageUrl);
        };

        //API로 호출 하는 메소드
        this.WC_SendServerData = function (host, ip, port, loginId, pageUrl)
        {
        	var strId = "WCWaitTransaction";

        	var strUrl = this.service_type + "://" + this.strServerIp + ":" + this.strServerPort + this.strInputServerUrl;

        	var getterParam = "?host=" + host + "&ip=" + ip + "&loginId=" + loginId + "&port=" + port + "&pageUrl=" + pageUrl;

        	var strInDs = "";

        	var strOutDs = "";

        	var strParam = "";

        	var strCallback = "WC_SendCallback";

        	var strUrlGet = strUrl + getterParam;

        	this.transaction(strId, strUrlGet, strInDs, strOutDs, strParam, strCallback, false);
        };

        //WC_SendServerData 메소드의 Transaction 결과를 호출 받는 곳
        this.WC_SendCallback = function(strId, nErrorCode, strErrorMsg)
        {
        	//Transaction 결과 값
        	var host = this.host;
        	var ip = this.ip;
        	var loginId = this.loginId;
        	var port = this.port;
        	var pageUrl = this.pageUrl;
        	var isWait = this.isWait;
        	var waitCnt = this.waitCnt;
        	//
        	trace("WC_SendCallback");
        	// 서버통신 에러시 bypass
        	if(nErrorCode < 0 || strId != "WCWaitTransaction"){
        		this.WC_ReturnCallback(true);
        	}
        	else{
        		this.closeFlag = 0;

        		if (isWait == "T")
        		{
        			//Modal
        			var objChildFrame = new ChildFrame();

        			objChildFrame.init("wait_popup", 0, 0, 600, 400, null, null, "comm::comm_tracer_wait.xfdl");

        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_showtitlebar(false);

        			objChildFrame.showModal(this.getOwnerFrame(), {host:this.wcHost, ip:this.wcIp, loginId:this.wcLoginId, port:this.wcPort, pageUrl:this.wcPageUrl, submitForm:this.wcSubmitForm, isWait:isWait, waitCnt:waitCnt}, this, "WC_ModalCloseCallback");
        			trace("showModal - after");
        		}
        		else
        		{
        			this.WC_ReturnCallback(true);
        		}
        	}
        };
        //

        // 순번 대기 Popup에서 호출 - callback은 TRACER_WAIT form에 존재(WC_ModalServerCallback)
        this.WC_ModalServerData = function (host, ip, port, loginId, pageUrl, errorSearchCnt)
        {
        	var strId = "ModalWCWaitTransaction";
        	//1번 서버와 통신이 되지 않으면 2번 서버와 통신을 시도한다.
        	if (errorSearchCnt < 5)
        	{
        		// TRACE서버의 접속정보를 가져온다
        		var oServerInfo    = this._smfGetTracerServerInfo();
        		this.strServerIp          = oServerInfo.ip;
        		this.strServerPort        = oServerInfo.port;
        		this.service_type         = oServerInfo.protocol;
        		this.tracer_cookie_domain = oServerInfo.cookie_domain;
        	}

        	var strUrl = this.service_type + "://" + this.strServerIp + ":" + this.strServerPort + this.strInputServerUrl;

        	var getterParam = "?host=" + host + "&ip=" + ip + "&loginId=" + loginId + "&port=" + port + "&pageUrl=" + pageUrl;

        	var strInDs = "";

        	var strOutDs = "";

        	var strParam = "";

        	var strCallback = "WC_ModalServerCallback";

        	strUrl = strUrl + getterParam;

        	this.transaction(strId, strUrl, strInDs, strOutDs, strParam, strCallback, false);
        };

        //Modal Close Callback 때 호출
        //Modal 창이 닫힐 때 호출
        this.WC_ModalCloseCallback = function(id, ret)
        {
        	//id는 ChildFrame init 할 때 준 wait_popup이고 ret는 Modal이 Close 할 때 주는 값(Y/N)이다.
        	if (ret == "Y")
        	{
        		this.WC_ReturnCallback(true);
        	}
        	else
        	{
        		this.WC_ReturnCallback(false);
        	}
        };

        // 순번 대기 완료시 호출
        this.WC_FinishWait = function(host, ip, port, loginId, pageUrl,returnCallback)
        {
        	// TRACE서버의 접속정보를 가져온다
        	var oServerInfo    = this._smfGetTracerServerInfo();
        	this.strServerIp          = oServerInfo.ip;
        	this.strServerPort        = oServerInfo.port;
        	this.service_type         = oServerInfo.protocol;
        	this.tracer_cookie_domain = oServerInfo.cookie_domain;

        	// 쿠키체크
        	 var cookie = getCookie('wcCookie');
             if ( cookie == null || cookie == '' ) {
        		this.bMakeCookie = true;
        		this.loginId = makeCookieKey(loginId);
        	 }
             else {
        		this.bMakeCookie = false;
        		this.loginId = cookie;
             }

        	this.closeFlag = 0;

        	if (host == null || host == "undefined")
        	{
        		this.wcHost = "-";
        	}
        	else
        	{
        		this.wcHost = host;
        	}

        	if (ip == null || ip == "undefined")
        	{
        		this.wcIp = "-";
        	}
        	else
        	{
        		this.wcIp = ip;
        	}

        	if (loginId == null || loginId == "undefined")
        	{
        		this.wcLoginId = "-";
        	}
        	else
        	{
        		this.wcLoginId = cookie;
        	}

        	if (port == null || port == "undefined")
        	{
        		this.wcPort = "-";
        	}
        	else
        	{
        		this.wcPort = port;
        	}

        	if (pageUrl == null || pageUrl == "undefined")
        	{
        		this.wcPageUrl = "-";
        	}
        	else
        	{
        		this.wcPageUrl = pageUrl;
        	}

        	if(returnCallback== null || returnCallback=="undefined")
        	{
        		this.wcReturnCallback = "-";
        	}
        	else
        	{
        		this.wcReturnCallback = returnCallback;
        	}

        	this.WC_FinishServerData(host, ip, port, this.wcLoginId, pageUrl);
        };

        //순번대기 완료 Transaction 메소드
        this.WC_FinishServerData = function(host, ip, port, loginId, pageUrl)
        {
        	var strId = "WCFinishTransaction";

        	var strUrl = this.service_type + "://" + this.strServerIp + ":" + this.strServerPort + this.strOutServerUrl;

        	var getterParam = "?host=" + host + "&ip=" + ip + "&loginId=" + loginId + "&port=" + port + "&pageUrl=" + pageUrl;

        	var strInDs = "";

        	var strOutDs = "";

        	var strParam = "";

        	var strCallback = "WC_FinishCallback";

        	var strUrlGet = strUrl + getterParam;

        	this.transaction(strId, strUrlGet, strInDs, strOutDs, strParam, strCallback, false);
        };

        //순번대기 완료 Transaction 결과를 받는 메소드
        this.WC_FinishCallback = function(strId, nErrorCode, strErrorMsg)
        {
        	var host = this.host;
        	var ip = this.ip;
        	var loginId = this.loginId;
        	var port = this.port;
        	var pageUrl = this.pageUrl;
        	var isWait = this.isWait;
        	var waitCnt = this.waitCnt;

        	//1번 서버와 통신이 되지 않으면 2번 서버와 통신을 시도한다.
        	if (nErrorCode < 0 || strId != "WCFinishTransaction")
        	{
        		if (this.closeFlag < 5)
        		{
        			this.closeFlag = this.closeFlag + 1;

        			this.WC_FinishServerData(this.wcHost, this.wcIp, this.wcPort, this.wcLoginId, this.wcPageUrl, this.wcSubmitForm);
        		}
        		else
        		{
        			this.WC_ReturnCallback(false);
        		}
        	}
        	else
        	{
        			this.WC_ReturnCallback(true);
        	}
        };
        //

        this.WC_ReturnCallback = function(bResult)
        {
        	if(this.wcReturnCallback!="-")
        	{
        		this.wcReturnCallback.call(this,bResult,this.wcPageUrl);
        	}
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
