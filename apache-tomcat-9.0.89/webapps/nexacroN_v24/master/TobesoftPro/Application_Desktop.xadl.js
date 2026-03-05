(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PARM\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_APP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">DP00001</Col><Col id=\"MENU_URL\">prst::prstIntrdDevPro.xfdl</Col><Col id=\"PRGM_FILE_NM\">prstIntrdDevPro.xfdl</Col><Col id=\"MENU_NM\">DEVPRO</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"MENU_YN\">1</Col><Col id=\"PARM\">dev</Col><Col id=\"TOP_GUBUN\">1</Col><Col id=\"USE_APP\">EXPERIEN,INQUIRY</Col></Row><Row><Col id=\"MENU_ID\">UXP00001</Col><Col id=\"MENU_URL\">prst::prstIntrdUXPro.xfdl</Col><Col id=\"PRGM_FILE_NM\">prstIntrdUXPro.xfdl</Col><Col id=\"MENU_NM\">UXPRO</Col><Col id=\"MENU_ORDR\">2</Col><Col id=\"MENU_YN\">1</Col><Col id=\"PARM\">ux</Col><Col id=\"TOP_GUBUN\">1</Col><Col id=\"USE_APP\">EXPERIEN,INQUIRY</Col></Row><Row><Col id=\"MENU_ID\">PRG00001</Col><Col id=\"MENU_URL\">prst::prstIntrdProGen.xfdl</Col><Col id=\"PRGM_FILE_NM\">prstIntrdProGen.xfdl</Col><Col id=\"MENU_NM\">PROGEN</Col><Col id=\"MENU_ORDR\">3</Col><Col id=\"MENU_YN\">1</Col><Col id=\"PARM\">prg</Col><Col id=\"TOP_GUBUN\">1</Col><Col id=\"USE_APP\">INQUIRY</Col></Row><Row><Col id=\"MENU_ID\">APP00001</Col><Col id=\"MENU_URL\">prst::prstAppinExprn.xfdl</Col><Col id=\"PRGM_FILE_NM\">prstAppinExprn.xfdl</Col><Col id=\"MENU_NM\">APP</Col><Col id=\"MENU_ORDR\">4</Col><Col id=\"MENU_YN\">0</Col><Col id=\"TOP_GUBUN\">0</Col><Col id=\"USE_APP\">EXPERIEN,INQUIRY</Col></Row><Row><Col id=\"MENU_ID\">APP00099</Col><Col id=\"MENU_URL\">prst::prstAppinCmplt.xfdl</Col><Col id=\"PRGM_FILE_NM\">prstAppinCmplt.xfdl</Col><Col id=\"MENU_NM\">APPDONE</Col><Col id=\"MENU_ORDR\">5</Col><Col id=\"MENU_YN\">0</Col><Col id=\"TOP_GUBUN\">0</Col><Col id=\"USE_APP\"/></Row><Row><Col id=\"MENU_ID\">INFO00001</Col><Col id=\"MENU_URL\">prst::prstInfo.xfdl</Col><Col id=\"PRGM_FILE_NM\">prstInfo.xfdl</Col><Col id=\"MENU_NM\">INFO</Col><Col id=\"MENU_ORDR\">8</Col><Col id=\"MENU_YN\">0</Col><Col id=\"TOP_GUBUN\">0</Col></Row><Row><Col id=\"MENU_ID\">MAIN00001</Col><Col id=\"MENU_URL\">prst::prstMain.xfdl</Col><Col id=\"PRGM_FILE_NM\">prstMain.xfdl</Col><Col id=\"MENU_NM\">HOME</Col><Col id=\"MENU_ORDR\">0</Col><Col id=\"MENU_YN\">1</Col><Col id=\"TOP_GUBUN\">0</Col><Col id=\"USE_APP\">EXPERIEN,INQUIRY</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCommCode", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_ORDR\" type=\"int\" size=\"4\"/><Column id=\"SSC_NUMB\" type=\"string\" size=\"32\"/><Column id=\"SSC_CD_ENGL_NM\" type=\"string\" size=\"32\"/><Column id=\"USED_YN\" type=\"string\" size=\"32\"/><Column id=\"SSC_CD_KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CD_1\" type=\"string\" size=\"32\"/><Column id=\"SSC_CD\" type=\"string\" size=\"32\"/><Column id=\"HCL_CD\" type=\"string\" size=\"32\"/><Column id=\"GRP_CD_2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SORT_ORDR\">1</Col><Col id=\"SSC_NUMB\">00000664</Col><Col id=\"SSC_CD_ENGL_NM\">DevPro</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">DevPro</Col><Col id=\"GRP_CD_1\">0000000009</Col><Col id=\"SSC_CD\">DP</Col><Col id=\"HCL_CD\">PR01</Col></Row><Row><Col id=\"SORT_ORDR\">2</Col><Col id=\"SSC_NUMB\">00000665</Col><Col id=\"SSC_CD_ENGL_NM\">UXPro</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">UXPro</Col><Col id=\"GRP_CD_1\">0000000009</Col><Col id=\"SSC_CD\">UXP</Col><Col id=\"HCL_CD\">PR01</Col></Row><Row><Col id=\"SORT_ORDR\">3</Col><Col id=\"SSC_NUMB\">00000817</Col><Col id=\"SSC_CD_ENGL_NM\">ProGen</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">ProGen</Col><Col id=\"GRP_CD_1\">0000000009</Col><Col id=\"SSC_CD\">PRG</Col><Col id=\"HCL_CD\">PR01</Col><Col id=\"GRP_CD_2\">INQUIRY</Col></Row><Row><Col id=\"SORT_ORDR\">1</Col><Col id=\"SSC_NUMB\">00000666</Col><Col id=\"SSC_CD_ENGL_NM\">체험하기</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">체험하기</Col><Col id=\"SSC_CD\">EXPERIEN</Col><Col id=\"HCL_CD\">PR02</Col></Row><Row><Col id=\"SORT_ORDR\">2</Col><Col id=\"SSC_NUMB\">00000667</Col><Col id=\"SSC_CD_ENGL_NM\">문의하기</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">문의하기</Col><Col id=\"SSC_CD\">INQUIRY</Col><Col id=\"HCL_CD\">PR02</Col></Row><Row><Col id=\"SORT_ORDR\">1</Col><Col id=\"SSC_NUMB\">00000651</Col><Col id=\"SSC_CD_ENGL_NM\">금융</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">금융</Col><Col id=\"SSC_CD\">FN</Col><Col id=\"HCL_CD\">PR03</Col></Row><Row><Col id=\"SORT_ORDR\">2</Col><Col id=\"SSC_NUMB\">00000652</Col><Col id=\"SSC_CD_ENGL_NM\">부품/제조</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">부품/제조</Col><Col id=\"SSC_CD\">PRTMNF</Col><Col id=\"HCL_CD\">PR03</Col></Row><Row><Col id=\"SORT_ORDR\">3</Col><Col id=\"SSC_NUMB\">00000653</Col><Col id=\"SSC_CD_ENGL_NM\">유통/서비스</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">유통/서비스</Col><Col id=\"SSC_CD\">DISTSVC</Col><Col id=\"HCL_CD\">PR03</Col></Row><Row><Col id=\"SORT_ORDR\">4</Col><Col id=\"SSC_NUMB\">00000654</Col><Col id=\"SSC_CD_ENGL_NM\">공공</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">공공</Col><Col id=\"SSC_CD\">PBLC</Col><Col id=\"HCL_CD\">PR03</Col></Row><Row><Col id=\"SORT_ORDR\">5</Col><Col id=\"SSC_NUMB\">00000655</Col><Col id=\"SSC_CD_ENGL_NM\">기타</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">기타</Col><Col id=\"SSC_CD\">GTR</Col><Col id=\"HCL_CD\">PR03</Col></Row><Row><Col id=\"SORT_ORDR\">1</Col><Col id=\"SSC_NUMB\">00000671</Col><Col id=\"SSC_CD_ENGL_NM\">견적 요청</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">견적 요청</Col><Col id=\"GRP_CD_1\">DevPro</Col><Col id=\"SSC_CD\">IQDP01</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">3</Col><Col id=\"SSC_NUMB\">00000673</Col><Col id=\"SSC_CD_ENGL_NM\">추가 기능 개발 문의</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">추가 기능 개발 문의</Col><Col id=\"GRP_CD_1\">DevPro</Col><Col id=\"SSC_CD\">IQDP03</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">4</Col><Col id=\"SSC_NUMB\">00000674</Col><Col id=\"SSC_CD_ENGL_NM\">디자인 변경 문의</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">디자인 변경 문의</Col><Col id=\"GRP_CD_1\">DevPro</Col><Col id=\"SSC_CD\">IQDP04</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">5</Col><Col id=\"SSC_NUMB\">00000675</Col><Col id=\"SSC_CD_ENGL_NM\">교육 문의</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">교육 문의</Col><Col id=\"GRP_CD_1\">DevPro</Col><Col id=\"SSC_CD\">IQDP05</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">6</Col><Col id=\"SSC_NUMB\">00000676</Col><Col id=\"SSC_CD_ENGL_NM\">기술 지원 문의</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">기술 지원 문의</Col><Col id=\"GRP_CD_1\">DevPro</Col><Col id=\"SSC_CD\">IQDP06</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">7</Col><Col id=\"SSC_NUMB\">00000686</Col><Col id=\"SSC_CD_ENGL_NM\">도입 문의</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">도입 문의</Col><Col id=\"GRP_CD_1\">UXPro</Col><Col id=\"SSC_CD\">IQUXP01</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">8</Col><Col id=\"SSC_NUMB\">00000687</Col><Col id=\"SSC_CD_ENGL_NM\">기획 문의</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">기획 문의</Col><Col id=\"GRP_CD_1\">UXPro</Col><Col id=\"SSC_CD\">IQUXP02</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">9</Col><Col id=\"SSC_NUMB\">00000688</Col><Col id=\"SSC_CD_ENGL_NM\">디자인 문의</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">디자인 문의</Col><Col id=\"GRP_CD_1\">UXPro</Col><Col id=\"SSC_CD\">IQUXP03</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">10</Col><Col id=\"SSC_NUMB\">00000689</Col><Col id=\"SSC_CD_ENGL_NM\">퍼블리싱 문의</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">퍼블리싱 문의</Col><Col id=\"GRP_CD_1\">UXPro</Col><Col id=\"SSC_CD\">IQUXP04</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">11</Col><Col id=\"SSC_NUMB\">00000818</Col><Col id=\"SSC_CD_ENGL_NM\">견적 요청</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">견적 요청</Col><Col id=\"GRP_CD_1\">ProGen</Col><Col id=\"SSC_CD\">IQPRG01</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">12</Col><Col id=\"SSC_NUMB\">00000819</Col><Col id=\"SSC_CD_ENGL_NM\">제품 소개</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">제품 소개</Col><Col id=\"GRP_CD_1\">ProGen</Col><Col id=\"SSC_CD\">IQPRG02</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">13</Col><Col id=\"SSC_NUMB\">00000820</Col><Col id=\"SSC_CD_ENGL_NM\">교육 요청</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">교육 요청</Col><Col id=\"GRP_CD_1\">ProGen</Col><Col id=\"SSC_CD\">IQPRG03</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">14</Col><Col id=\"SSC_NUMB\">00000821</Col><Col id=\"SSC_CD_ENGL_NM\">기술 지원</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">기술 지원</Col><Col id=\"GRP_CD_1\">ProGen</Col><Col id=\"SSC_CD\">IQPRG04</Col><Col id=\"HCL_CD\">PR04</Col></Row><Row><Col id=\"SORT_ORDR\">15</Col><Col id=\"SSC_NUMB\">00000690</Col><Col id=\"SSC_CD_ENGL_NM\">기타</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">기타</Col><Col id=\"GRP_CD_1\"/><Col id=\"SSC_CD\">OTH001</Col><Col id=\"HCL_CD\">PR04</Col><Col id=\"GRP_CD_2\">COMMPro</Col></Row><Row><Col id=\"SORT_ORDR\">1</Col><Col id=\"SSC_NUMB\">00000691</Col><Col id=\"SSC_CD_ENGL_NM\">미확인</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">미확인</Col><Col id=\"SSC_CD\">00</Col><Col id=\"HCL_CD\">PR05</Col></Row><Row><Col id=\"SORT_ORDR\">2</Col><Col id=\"SSC_NUMB\">00000695</Col><Col id=\"SSC_CD_ENGL_NM\">제외</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">제외</Col><Col id=\"SSC_CD\">10</Col><Col id=\"HCL_CD\">PR05</Col></Row><Row><Col id=\"SORT_ORDR\">3</Col><Col id=\"SSC_NUMB\">00000692</Col><Col id=\"SSC_CD_ENGL_NM\">진행중</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">진행중</Col><Col id=\"SSC_CD\">50</Col><Col id=\"HCL_CD\">PR05</Col></Row><Row><Col id=\"SORT_ORDR\">4</Col><Col id=\"SSC_NUMB\">00000693</Col><Col id=\"SSC_CD_ENGL_NM\">완료</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">완료</Col><Col id=\"SSC_CD\">99</Col><Col id=\"HCL_CD\">PR05</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"KORN_MSGE\" type=\"STRING\" size=\"32\"/><Column id=\"MSGE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MSGE_FLAG_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"KORN_MSGE\">{0} (은)는 필수 입력사항입니다.</Col><Col id=\"MSGE_CD\">msg.err.validator.required</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 양식을 확인해주세요.</Col><Col id=\"MSGE_CD\">msg.err.validator.phone</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 항목은 유효하지 않은 이메일 주소입니다.</Col><Col id=\"MSGE_CD\">msg.err.validator.email</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col></Row><Row><Col id=\"KORN_MSGE\">{0} (은)는 필수 선택사항입니다.</Col><Col id=\"MSGE_CD\">msg.err.validator.requiredS</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}(을)를 작성해 주세요.</Col><Col id=\"MSGE_CD\">msg.err.validator.requiredR</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"MSGE_CD\">msg.general</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"MSGE_CD\">msg.err.validator.general</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gvAppType","EXPERIEN");
            this._addVariable("gvInfoType","Terms");
            this._addVariable("gvIntroType","");
            this._addVariable("gvFormCommCode","");
            this._addVariable("gvMobileSize","890");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen,Mobile_screen");
            this.set_licenseurl("license::NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","900",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("proPortal");
            mainframe.set_openalign("center middle");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new ChildFrame("baseChildFrame",null,null,null,null,null,null,"frame::frmBase.xfdl",this);
            frame0.set_showtitlebar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("frame::frmBase.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.application_onload,this);
            this.mainframe.addEventHandler("onsize",this.mainframe_onsize,this);
            this.mainframe.baseChildFrame.addEventHandler("onorientationchange",this.mainframe_baseChildFrame_onorientationchange,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        /**
        *  devPro Library
        *  @FileName 	application
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025.02.21
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2025.02.21			TOBESOFT				application
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/
        this.gvRunMode  = "";					// 실행환경 S : Studio, L : local, D : 개발, R : 운영

        /* 각 프레임에 해당되는 객체 참조 변수 */
        this.gvBase;

        /* 프레임 관련 변수*/
        this.BASE_FROM_PATH = "frame::frmBase.xfdl";

        //this.gvFrameStat = "login";				// 프레임상태(login,main,sub)
        //this.gvIsComBtnUse = true;				// 공통 버튼 사용유무
        //this.gvTitlebarHeight = 0;				// 차일드프레임 타이틀바 높이

        /* 초기메뉴 변수*/
        this.gvInitSevice = "";

        /* grid 관련 */
        //this.gvUseGridContextMenu = true;		// 그리드 Context Menu 사용 여부

        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        this.application_onload = function(obj,e)
        {
        	// QuikView 여부 설정
        	nexacro.setEnvironmentVariable("evQuikView", "N");

        	// 각 프레임에 해당되는 객체 참조 변수 설정
        	this.gvBase = this.mainframe.baseChildFrame; // base 프레임

        	// 경로 값 선언
        	var sRunMode = "S";  // S : Studio, L : local, D : 개발, R : 운영
        	var objEnv	 = nexacro.getEnvironment();
        	var objSrv   = objEnv.services["svcUrl"];

        	// 런타임 접속
        	if (system.navigatorname == "nexacro") {
        		var sXadl = nexacro.getProjectPath();

        		// 로컬(Studio)
        		if (sXadl.indexOf("file://") != -1) {
        			sRunMode = "S";
        			this.mainframe.set_titletext("로컬(Studio) - " + this.mainframe.titletext);
        			objSrv.set_url("http://localhost:8080/");
        		}
        		else if (sXadl.indexOf("pro-dev") == -1) {
        			sRunMode = "R";
        			objSrv.set_url("http://pro.tobesoft.com:82/");
        			this.mainframe.set_titletext("TOBESOFT Pro");
        		}

        		// Runtime 실행할때 TitleBar 크기(30px) 만큼 높이를 조정
        		this.mainframe.set_height(932);

        		// Runtime 실행할때 border 보이도록 설정
        		this.mainframe.set_border("1px solid #111111");
        	}
        	//WEB 접속
        	else {
        		var urlPath = window.location.protocol + "//" + window.location.host;

        		//서비스  URL 세팅
         		objSrv.set_url(urlPath+"/");
        		// 로컬(웹)
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 ) {
        			sRunMode = "L";
        			this.mainframe.set_titletext("로컬(웹)  - " + this.mainframe.titletext);
        			objSrv.set_url(urlPath+"/");
        		}
        		// 운영
        		else if (objSrv.url.indexOf("pro-dev") == -1) {
        			sRunMode = "R";
        			var srUrlPath = urlPath + ":82"; // 포트번호는 하드코딩
        			objSrv.set_url(srUrlPath+"/");
        			this.mainframe.set_titletext("TOBESOFT Pro");
        		}
        		// 개발(웹)
        		else {
        			sRunMode = "D";
        			var srUrlPath = urlPath;
        			objSrv.set_url(srUrlPath+"/");
        		}

        		// 현재 페이지 URL의 쿼리 문자열을 가져옴
        		var queryString = window.location.search;
        		// 쿼리 문자열을 파싱하여 객체로 변환
        		var params = new URLSearchParams(queryString);
        		// serviceName 매개변수의 값을 가져옴
        		var serviceName = params.get('service');
        		this.gvInitSevice = serviceName // DevPro, UXPro
        	}
        	this.gvRunMode = sRunMode;
         	trace("========== 접속경로 : " + nexacro.getProjectPath() + " / 실행환경(nRunMode) : " + this.gvRunMode + " / 서비스URL : " + objSrv.url + " ================");

        };

        // 기계 방향 전환 시 이용약관/개인정보 팝업 떠있으면 fnResize() 함수 호출
        this.mainframe_baseChildFrame_onorientationchange = function(obj,e)
        {

        	var oFrameList = nexacro.getPopupFrames();
        	var targetFrameNmArr = ["prstPrivacyPopup", "prstMrktnPopup"];


        	for(var i = 0; i < oFrameList.length; i++)
        	{
        		if(oFrameList[i].id == targetFrameNmArr[0] ||
        			oFrameList[i].id == targetFrameNmArr[1])
        			{
        				oFrameList[i].form.fnResize();
        			}
        	}
        };

        this.mainframe_onsize = function(obj,e)
        {
        	var objFrame = nexacro.getPopupFrames();
        	var nLeft = 0;
        	var nTop = 0;
        	for (var i = objFrame.length-1; i >= 0; i--)
        	{
        		if (objFrame[i]._modaltype == "center")
        		{
        			nLeft = (nexacro.getApplication().mainframe.width - objFrame[i].width)/2;
        			nTop = (nexacro.getApplication().mainframe.height - objFrame[i].height)/2;
        			objFrame[i].move(nLeft, nTop);
        		}
        	}
        };

        });
        this.checkLicense("license::NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
