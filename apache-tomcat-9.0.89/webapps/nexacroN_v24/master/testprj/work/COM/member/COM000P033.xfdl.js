(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000P033");
            this.set_titletext("아이디 중복체크");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"staMsg\" type=\"STRING\" size=\"256\"/><Column id=\"btnMsg\" type=\"STRING\" size=\"256\"/><Column id=\"chkedId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"btnMsg\">중복체크 버튼을 클릭해주세요</Col><Col id=\"staMsg\">중복체크 버튼을 클릭해주세요</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100.00%","240",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("0.11100000143051147em dashed #d8d8d8,0px none,0.11100000143051147em dashed #d8d8d8,0px none");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","4.00","-5","100%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan04\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem06\" componentid=\"btn00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staId","232","381","100%","25",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtId","222","425","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_password("false");
            obj.set_displaynulltext("아이디 입력");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnChk","418","386","130","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("중복 체크");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","17","405","100.00%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtId\"/><PanelItem id=\"PanelItem01\" componentid=\"btnChk\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("5~12자의 영문 소문자, 숫자만 사용 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan06","316","337","100%","75",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan04","172","321","100.00%","100",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staId\"/><PanelItem id=\"PanelItem04\" componentid=\"pan06\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btn00","18","320","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("중복체크 버튼을 클릭해주세요");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_enable("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel05_01","70.00","230","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_fittocontents("height");
            obj.set_text("중복체크 버튼을 클릭해주세요");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","60","100.00%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("8");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexmainaxisalign("start");
                p.Panel00.move("4.00","-5","100%","200",null,null);

                p.staId.set_taborder("0");
                p.staId.set_text("아이디");
                p.staId.set_cssclass("sta_WF_LoginLabel");
                p.staId.move("232","381","100%","25",null,null);

                p.edtId.set_taborder("1");
                p.edtId.set_password("false");
                p.edtId.set_displaynulltext("아이디 입력");
                p.edtId.move("222","425","100%","40",null,null);

                p.btnChk.set_taborder("2");
                p.btnChk.set_text("중복 체크");
                p.btnChk.set_fittocontents("width");
                p.btnChk.move("418","386","130","40",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("17","405","100.00%","40",null,null);

                p.sta00.set_taborder("4");
                p.sta00.set_text("5~12자의 영문 소문자, 숫자만 사용 가능합니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("200.00","383","100%","30",null,null);

                p.pan06.set_taborder("5");
                p.pan06.set_type("vertical");
                p.pan06.set_verticalgap("5");
                p.pan06.set_fittocontents("height");
                p.pan06.move("316","337","100%","75",null,null);

                p.pan04.set_taborder("6");
                p.pan04.set_type("vertical");
                p.pan04.set_fittocontents("height");
                p.pan04.move("172","321","100.00%","100",null,null);

                p.btn00.set_taborder("7");
                p.btn00.set_text("중복체크 버튼을 클릭해주세요");
                p.btn00.set_cssclass("btn_WF_Yes");
                p.btn00.set_enable("false");
                p.btn00.move("18","320","100%","40",null,null);

                p.staLabel05_01.set_taborder("9");
                p.staLabel05_01.set_textAlign("center");
                p.staLabel05_01.set_fittocontents("height");
                p.staLabel05_01.set_text("중복체크 버튼을 클릭해주세요");
                p.staLabel05_01.move("70.00","230","100%","40",null,null);

                p.pan04_00.set_taborder("10");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.set_flexcrossaxisalign("center");
                p.pan04_00.set_flexmainaxisalign("center");
                p.pan04_00.move("0","60","100.00%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("20");
            obj.set_spacing("20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_verticalgap("8");
                p.Panel00.move("4.00","-5","100%","196",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("20");
            obj.set_spacing("20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,240,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("아이디 중복체크");

                p.divForm.set_taborder("3");
                p.divForm.set_text("Div01");
                p.divForm.set_border("0.11100000143051147em dashed #d8d8d8,0px none,0.11100000143051147em dashed #d8d8d8,0px none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.move("0","0","100.00%","240",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,236,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("0","0","100.00%","236",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divForm.form.edtId","value","dsSearch","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","staLabel05_01","text","dsGet","staMsg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.staLabel05_01","text","dsGet","staMsg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.btn00","text","dsGet","btnMsg");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM000P033.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM000P033.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/09/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/30				조규완						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "member/userIdDpcnSrch.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			this.divForm.form.btn00.enable = true;
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {

        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_btnChk_onclick = function(obj,e)
        {
        	this.getSearchTransaction();
        };

        this.divForm_btn00_onclick = function(obj,e)
        {
        	var userId = this.dsSearch.getColumn(0, "userId");
        	var chkedId = this.dsGet.getColumn(0, "chkedId");
        	var btnMsg = this.dsGet.getColumn(0, "btnMsg");

        	if (userId == chkedId) {
        		if (btnMsg == "닫기") {
        			this.close();
        		} else {
        			var objRet = {
        				"userId" : this.divForm.form.edtId.value
        			}

        			this.close(JSON.stringify(objRet));
        		}
        	} else {
        		this.dsGet.setColumn(0, "staMsg", "중복체크 버튼을 클릭해주세요.");
        		this.dsGet.setColumn(0, "btnMsg", "중복체크 버튼을 클릭해주세요.");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divForm.addEventHandler("onkeyup",this.divForm_onkeyup,this);
            this.divForm.form.edtId.addEventHandler("onkeyup",this.divLogin_Div00_pswd_onkeyup,this);
            this.divForm.form.btnChk.addEventHandler("onclick",this.divForm_btnChk_onclick,this);
            this.divForm.form.btn00.addEventHandler("onclick",this.divForm_btn00_onclick,this);
        };
        this.loadIncludeScript("COM000P033.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
