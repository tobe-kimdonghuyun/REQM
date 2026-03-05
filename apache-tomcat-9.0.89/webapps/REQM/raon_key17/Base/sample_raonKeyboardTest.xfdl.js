(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("raonKeyboard");
            this.set_titletext("가상키보드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","20","16",null,"105","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1. 키보드 보안 적용 : Add User Property   Name : useRaon\r\n2. 가상키보드 적용 :  Add User Property   Name : e2e (E2E를 지정하면 기본적으로 키보안이 적용되므로 useRaon 미적용 해도 됨)\r\n ");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","76","136","407","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일반입력");
            obj.set_font("bold 12px/normal \"맑은 고딕\"");
            obj.set_background("beige");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","512","135","243","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","195","51","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("PC");
            obj.set_textAlign("center");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","76","191","407","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("키보안 + 가상키 + Password + MaxLength(15) + qwerty");
            obj.set_font("bold 12px/normal \"맑은 고딕\"");
            obj.set_background("beige");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_transkey01","512","190","243","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("비밀번호입력");
            obj.set_maxlength("15");
            obj.getSetter("useRaon").set("Y");
            obj.getSetter("e2e").set("");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","690","190","65","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전송");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_key01","771","198","102","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("마우스입력");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","867","190","84","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("txtArea\r\n출력");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","10","251","51","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("PC");
            obj.set_textAlign("center");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","76","246","407","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("키보안 + 가상키 + Password + MaxLength(8) + number");
            obj.set_font("bold 12px/normal \"맑은 고딕\"");
            obj.set_background("beige");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_transkey02","512","246","243","42",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maxlength("8");
            obj.set_displaynulltext("비밀번호입력");
            obj.set_inputtype("number");
            obj.getSetter("useRaon").set("Y");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_key02","771","256","102","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("마우스입력");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","867","245","84","42",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("txtArea\r\n출력");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","1053","202","51","33",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Mobile");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","1119","196","407","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("키보안 + 가상키 + Password + MaxLength(8) + qwerty");
            obj.set_font("bold 12px/normal \"맑은 고딕\"");
            obj.set_background("beige");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_transkey03","1553","197","243","42",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_password("true");
            obj.set_displaynulltext("비밀번호입력");
            obj.set_maxlength("8");
            obj.getSetter("e2e").set("{ \"enc\" : \"on\", \"maxLength\" : 8, \"kbdType\" : \"qwerty\" }");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_key03","1814","205","102","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("마우스입력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","1926","199","84","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("txtArea\r\n출력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","1053","252","51","33",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Mobile");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","1117","251","407","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("키보안 + 가상키 + Password + MaxLength(8) + number");
            obj.set_font("bold 12px/normal \"맑은 고딕\"");
            obj.set_background("beige");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_transkey04","1553","251","243","42",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_password("true");
            obj.set_displaynulltext("비밀번호입력");
            obj.set_maxlength("8");
            obj.getSetter("e2e").set("{ \"enc\" : \"on\", \"maxLength\" : 8, \"kbdType\" : \"number\"}");
            obj.set_inputtype("number");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_key04","1814","261","102","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("마우스입력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","1926","254","84","42",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("txtArea\r\n출력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","33","320","934","291",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_padding("10px");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","975","190","84","42",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","ScreenDeskTop",1024,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("가상키보드");

                p.sta00.set_taborder("0");
                p.sta00.set_text("1. 키보드 보안 적용 : Add User Property   Name : useRaon\r\n2. 가상키보드 적용 :  Add User Property   Name : e2e (E2E를 지정하면 기본적으로 키보안이 적용되므로 useRaon 미적용 해도 됨)\r\n ");
                p.sta00.set_wordWrap("char");
                p.sta00.move("20","16",null,"105","20",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("일반입력");
                p.Static00.set_font("bold 12px/normal \"맑은 고딕\"");
                p.Static00.set_background("beige");
                p.Static00.set_padding("0px 0px 0px 10px");
                p.Static00.move("76","136","407","40",null,null);

                p.edt01.set_taborder("2");
                p.edt01.move("512","135","243","42",null,null);

                p.sta01.set_taborder("3");
                p.sta01.set_text("PC");
                p.sta01.set_textAlign("center");
                p.sta01.set_background("pink");
                p.sta01.move("10","195","51","33",null,null);

                p.Static05.set_taborder("4");
                p.Static05.set_text("키보안 + 가상키 + Password + MaxLength(15) + qwerty");
                p.Static05.set_font("bold 12px/normal \"맑은 고딕\"");
                p.Static05.set_background("beige");
                p.Static05.set_padding("0px 0px 0px 10px");
                p.Static05.move("76","191","407","40",null,null);

                p.edt_transkey01.set_taborder("5");
                p.edt_transkey01.set_displaynulltext("비밀번호입력");
                p.edt_transkey01.set_maxlength("15");
                p.edt_transkey01.getSetter("useRaon").set("Y");
                p.edt_transkey01.getSetter("e2e").set("");
                p.edt_transkey01.set_password("true");
                p.edt_transkey01.move("512","190","243","42",null,null);

                p.Button10.set_taborder("6");
                p.Button10.set_text("전송");
                p.Button10.set_font("bold 14px/normal \"Gulim\"");
                p.Button10.move("690","190","65","42",null,null);

                p.st_key01.set_taborder("7");
                p.st_key01.set_text("마우스입력");
                p.st_key01.move("771","198","102","25",null,null);

                p.Button01.set_taborder("8");
                p.Button01.set_text("txtArea\r\n출력");
                p.Button01.move("867","190","84","42",null,null);

                p.sta01_00.set_taborder("9");
                p.sta01_00.set_text("PC");
                p.sta01_00.set_textAlign("center");
                p.sta01_00.set_background("pink");
                p.sta01_00.move("10","251","51","33",null,null);

                p.Static04.set_taborder("10");
                p.Static04.set_text("키보안 + 가상키 + Password + MaxLength(8) + number");
                p.Static04.set_font("bold 12px/normal \"맑은 고딕\"");
                p.Static04.set_background("beige");
                p.Static04.set_padding("0px 0px 0px 10px");
                p.Static04.move("76","246","407","40",null,null);

                p.edt_transkey02.set_taborder("11");
                p.edt_transkey02.set_maxlength("8");
                p.edt_transkey02.set_displaynulltext("비밀번호입력");
                p.edt_transkey02.set_inputtype("number");
                p.edt_transkey02.getSetter("useRaon").set("Y");
                p.edt_transkey02.set_password("true");
                p.edt_transkey02.move("512","246","243","42",null,null);

                p.st_key02.set_taborder("12");
                p.st_key02.set_text("마우스입력");
                p.st_key02.move("771","256","102","25",null,null);

                p.Button02.set_taborder("13");
                p.Button02.set_text("txtArea\r\n출력");
                p.Button02.move("867","245","84","42",null,null);

                p.sta01_00_00.set_taborder("14");
                p.sta01_00_00.set_text("Mobile");
                p.sta01_00_00.set_textAlign("center");
                p.sta01_00_00.set_background("pink");
                p.sta01_00_00.set_visible("false");
                p.sta01_00_00.move("1053","202","51","33",null,null);

                p.Static04_00.set_taborder("15");
                p.Static04_00.set_text("키보안 + 가상키 + Password + MaxLength(8) + qwerty");
                p.Static04_00.set_font("bold 12px/normal \"맑은 고딕\"");
                p.Static04_00.set_background("beige");
                p.Static04_00.set_padding("0px 0px 0px 10px");
                p.Static04_00.set_visible("false");
                p.Static04_00.move("1119","196","407","40",null,null);

                p.edt_transkey03.set_taborder("16");
                p.edt_transkey03.set_password("true");
                p.edt_transkey03.set_displaynulltext("비밀번호입력");
                p.edt_transkey03.set_maxlength("8");
                p.edt_transkey03.getSetter("e2e").set("{ \"enc\" : \"on\", \"maxLength\" : 8, \"kbdType\" : \"qwerty\" }");
                p.edt_transkey03.set_visible("false");
                p.edt_transkey03.move("1553","197","243","42",null,null);

                p.st_key03.set_taborder("17");
                p.st_key03.set_text("마우스입력");
                p.st_key03.set_visible("false");
                p.st_key03.move("1814","205","102","25",null,null);

                p.Button03.set_taborder("18");
                p.Button03.set_text("txtArea\r\n출력");
                p.Button03.set_visible("false");
                p.Button03.move("1926","199","84","42",null,null);

                p.sta01_00_00_00.set_taborder("19");
                p.sta01_00_00_00.set_text("Mobile");
                p.sta01_00_00_00.set_textAlign("center");
                p.sta01_00_00_00.set_background("pink");
                p.sta01_00_00_00.set_visible("false");
                p.sta01_00_00_00.move("1053","252","51","33",null,null);

                p.Static02.set_taborder("20");
                p.Static02.set_text("키보안 + 가상키 + Password + MaxLength(8) + number");
                p.Static02.set_font("bold 12px/normal \"맑은 고딕\"");
                p.Static02.set_background("beige");
                p.Static02.set_padding("0px 0px 0px 10px");
                p.Static02.set_visible("false");
                p.Static02.move("1117","251","407","40",null,null);

                p.edt_transkey04.set_taborder("21");
                p.edt_transkey04.set_password("true");
                p.edt_transkey04.set_displaynulltext("비밀번호입력");
                p.edt_transkey04.set_maxlength("8");
                p.edt_transkey04.getSetter("e2e").set("{ \"enc\" : \"on\", \"maxLength\" : 8, \"kbdType\" : \"number\"}");
                p.edt_transkey04.set_inputtype("number");
                p.edt_transkey04.set_visible("false");
                p.edt_transkey04.move("1553","251","243","42",null,null);

                p.st_key04.set_taborder("22");
                p.st_key04.set_text("마우스입력");
                p.st_key04.set_visible("false");
                p.st_key04.move("1814","261","102","25",null,null);

                p.Button04.set_taborder("23");
                p.Button04.set_text("txtArea\r\n출력");
                p.Button04.set_visible("false");
                p.Button04.move("1926","254","84","42",null,null);

                p.TextArea00.set_taborder("24");
                p.TextArea00.set_padding("10px");
                p.TextArea00.set_font("bold 12px/normal \"Gulim\"");
                p.TextArea00.set_wordWrap("char");
                p.TextArea00.move("33","320","934","291",null,null);

                p.btn00.set_taborder("25");
                p.btn00.set_text("초기화");
                p.btn00.move("975","190","84","42",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","mobile,tablet",640,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00.set_font("16px/normal \"Gulim\"");
                p.TextArea00.move("22","585",null,"515","18",null);

                p.edt_transkey04.set_password("true");
                p.edt_transkey04.set_visible("true");
                p.edt_transkey04.move("22","485","363","55",null,null);

                p.st_key04.set_visible("true");
                p.st_key04.move("417","495","102","40",null,null);

                p.Button04.set_visible("true");
                p.Button04.move("538","488","84","55",null,null);

                p.sta01_00_00_00.set_visible("true");
                p.sta01_00_00_00.move("22","426","51","33",null,null);

                p.Static02.set_visible("true");
                p.Static02.move("sta01_00_00_00:25","425",null,"40","18",null);

                p.edt_transkey03.set_password("true");
                p.edt_transkey03.set_visible("true");
                p.edt_transkey03.move("22","351","363","55",null,null);

                p.st_key03.set_visible("true");
                p.st_key03.move("417","359","102","40",null,null);

                p.Button03.set_visible("true");
                p.Button03.move("538","353","84","55",null,null);

                p.sta01_00_00.set_visible("true");
                p.sta01_00_00.move("22","293","51","33",null,null);

                p.Static04_00.set_visible("true");
                p.Static04_00.move("sta01_00_00:25","287",null,"40","18",null);

                p.edt_transkey02.set_visible("false");
                p.edt_transkey02.move("665","502","363","55",null,null);

                p.st_key02.set_visible("false");
                p.st_key02.move("1060","512","102","40",null,null);

                p.Button02.set_visible("false");
                p.Button02.move("1181","501","84","55",null,null);

                p.sta01_00.set_visible("false");
                p.sta01_00.move("665","438","51","33",null,null);

                p.Static04.set_visible("false");
                p.Static04.move("sta01_00:25","433",null,"40","-625",null);

                p.edt_transkey01.set_visible("false");
                p.edt_transkey01.move("665","351","363","55",null,null);

                p.Button10.set_visible("false");
                p.Button10.move("edt_transkey01:580","351","65","55",null,null);

                p.st_key01.set_visible("false");
                p.st_key01.move("1060","359","102","40",null,null);

                p.Button01.set_visible("false");
                p.Button01.move("1181","351","84","55",null,null);

                p.sta01.set_visible("false");
                p.sta01.move("665","282","51","33",null,null);

                p.Static05.set_visible("false");
                p.Static05.move("sta01:25","278",null,"40","-625",null);

                p.edt01.move("20","200","243","55",null,null);

                p.Static00.move("20","136",null,"40","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample_raonKeyboardTest.xfdl", function() {
        /**
        *  라온 가상키보드 예제
        *  @MenuPath    샘플 > popup
        *  @FileName 	samplePopup.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2022.01.04
        *  @Desction    popup 샘플
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2022.01.04     	consulting 	                최초 생성
        *******************************************************************************
        */


        /*
        //--------------------------------------------------------------------------
        // Edit component 속성 적용 필요.
        //--------------------------------------------------------------------------
        // e2e 추가 { "enc" : "on", "maxLength" : 8, "kbdType" : "qwerty", "dataType" : "n" }
        // 	enc : 적용여부
        //  maxLength : max Length
        //  kbdType : 라온 키보드 타입  ******> 라온 메뉴얼 확인data-tk-kbdType
        			-"number”:숫자 전용 키보드
        			-"qwerty”:문자/숫자 qwerty형 키보드
        //  dataType : 라온 데이터 타입 ******> 라온 메뉴얼 확인data-tk-dataType
        			-“a”: 소문자+숫자
        			-“A”: 대문자+숫자
        			-“@”: 특수문자
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	var objOption1 = {};
        	var objOption2 = {};

        	//PC
        	if( !this.smfIsMobile())
        	{
        		objOption1 = {
        					target : this.edt_transkey01, // 대상 Edit 컴포넌트 [필수]
        					targetKey : this.st_key01,  // Edit와 쌍으로 있는 마우스입력 체크박스(static) [필수]
        					bshow 	: true, //  마우스입력 체크박스 보이기 여부 (default = false) [선택]
        					maxLength : 8, // maxLength (default = 8) [선택]
        					kbdType : "qwerty", //라온 키보드 타입 number/qwerty (default = qwerty)[선택)
        				}

        		objOption2 = {
        					target : this.edt_transkey02, // 대상 Edit 컴포넌트 [필수]
        					targetKey : this.st_key02,  // Edit와 쌍으로 있는 마우스입력 체크박스(static) [필수]
        					bshow 	: true, //  마우스입력 체크박스 보이기 여부 (default = false) [선택]
        					maxLength : 8, // maxLength (default = 8) [선택]
        					kbdType : "number", //라온 키보드 타입 number/qwerty (default = qwerty)[선택)
        				}
        	}
        	//모바일
        	else {
        		objOption1 = {
        					target : this.edt_transkey03, // 대상 Edit 컴포넌트 [필수]
        					targetKey : this.st_key03,  // Edit와 쌍으로 있는 마우스입력 체크박스(static) [필수]
        				}

        		objOption2 = {
        					target : this.edt_transkey04, // 대상 Edit 컴포넌트 [필수]
        					targetKey : this.st_key04,  // Edit와 쌍으로 있는 마우스입력 체크박스(static) [필수]
        				}
        	}

        	// 가상키보드 사용 지정
        	this.smfInitTranskey(objOption1);
        	this.smfInitTranskey(objOption2);
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        //PC
        this.fn_nxTestPC = function(obj)
        {
        	var sRtnVal = this.smfGetValueTranskey(obj);
        	var sVal    = "";

        	//--------------------------------------------------------------------------------------------
        	// raon_GetEncData
        	//
        	// E2E 및 가상키보안 적용된 암호화값을 읽어 transaction parameter로 return한다. (가상키 + E2E)
        	//--------------------------------------------------------------------------------------------
        	// param
        	//		1. arrComp		: 대상 Component List
        	//		2. arrRenameCol	: 대상 Component List로 return string의 component 대체 text - 생략시 1번의 component name으로 설정.
        	// return
        	//		1. transaction parameter
        	//		param 구성 예):
        	//			this.raon_GetEncData([this.edit00]);
        	//			return : edit00_e2e=Y edit00_tk_col_check= ......
        	//--------------------------------------------------------------------------------------------
        	//마우스입력
        	if(sRtnVal == "transkey"){	//선택
        		var arrComp = [obj];  //대상 Edit component List: array [필수]
        		var sVal    = this.smfGetEncDataTranskey(arrComp);

        	}else if(sRtnVal == "e2e"){ //미선택
        		sVal= obj.value;
        	}

        	var sInputVal = obj.value;

        	this.fn_wTextArea(sVal, sInputVal);
        }

        //모바일
        this.fn_nxTestM = function(obj)
        {
        	var arrComp = [obj];
        	var sVal = this.smfGetEncDataTranskey(arrComp);
        	var sInputVal = obj.value;
        	this.fn_wTextArea(sVal, sInputVal);
        }


        /**
        * txt 출력
        */
        this.fn_wTextArea = function(sVal, sInputVal)
        {
        	this.TextArea00.set_value("============= input 값 : " + sInputVal  + "\n ======= EncData : " + sVal);
        }


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        //버튼 클릭 시
        this.Button01_onclick = function(obj,e)
        {
        	this.fn_nxTestPC(this.edt_transkey01);
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.fn_nxTestPC(this.edt_transkey02);
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.fn_nxTestM(this.edt_transkey03);
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.fn_nxTestM(this.edt_transkey04);
        };


        /**
        * RaonKey 가상키 초기화
        * @param obj - 대상 Edit Component (필수)
        * this.raon_ClearTranskey(obj)
        **/
        this.btn00_onclick = function(obj,e)
        {
        	this.smfClearTranskey(this.edt_transkey01);
        };


        /**
        * 트랜잭션 호출
        */
        this.Button10_onclick = function(obj,e)
        {

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
        	//추가
        	if( this.smfIsMobile()){
        		this.addEventHandler("onvscroll",function(){if(mtk!=undefined&&mtk!=null){mtk.setPosition()}},this);
        		this.parent.parent.addEventHandler("onvscroll",function(){if(mtk!=undefined&&mtk!=null){mtk.setPosition()}},this);
        	}else {
        		this.parent.parent.addEventHandler("onvscroll",function(){if(tk!=undefined&&tk!=null){tk.setPosition()}},this);
        	}
            this.addEventHandler("onload",this.form_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.Button10.addEventHandler("onclick",this.Button10_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("sample_raonKeyboardTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
