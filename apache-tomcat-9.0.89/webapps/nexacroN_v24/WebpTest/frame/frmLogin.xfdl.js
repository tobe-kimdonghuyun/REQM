(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("LoginFrame");
            this.set_cssclass("frm_LOGIN_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LOGIN_Pattern");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","430","95","400","500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("div_LOGIN_Bg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staUserId","70","160",null,"40","70",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_LOGIN_Id");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staPassword","70","232",null,"40","70",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_LOGIN_Pw");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin",null,null,"260","48","70","50",null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("시작하기");
            obj.set_cssclass("btn_LOGIN_Start");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtUserId","105","160","210","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_text("");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPassword","105","232","210","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_password("true");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_visible("true");
            obj.set_text("");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static00","70","28",null,"98","70",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_LOGIN_Logo");
            this.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("chkSaveId",null,"286","81","30","161",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("아이디저장");
            obj.set_cssclass("chk_LOGIN_Id");
            obj.set_falsevalue("false");
            obj.set_truevalue("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta00",null,"295","1","13","150",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_BF_Line");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn00",null,"286","70","30","70",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("8");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_LOGIN_Pw");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta01","71","145","42","15",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("9");
            obj.set_text("User ID");
            obj.set_cssclass("sta_LOGIN_Label");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta01_00","71","217","51","15",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("10");
            obj.set_text("Password");
            obj.set_cssclass("sta_LOGIN_Label");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divLogin.form.edtUserId","value","dsCond","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divLogin.form.edtPassword","value","dsCond","USER_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	frmLogin.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	// form size 변경시 divLogin size 변경
        	this.fnDivLoginResize();
        };

        /**
         * @description 화면 리사이징
         */
        this.frmLogin_onsize = function(obj,e)
        {
        	// form size 변경시 divLogin size 변경
        	this.fnDivLoginResize();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description form size 변경시 divLogin size 변경
         */
        this.fnDivLoginResize = function()
        {
          	var nLeft = (nexacro.getApplication().mainframe.width / 2) - Math.round((this.divLogin.getOffsetWidth()) / 2);
          	var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round((this.divLogin.getOffsetHeight()) / 2);

        	if(nLeft <= 0){
        		this.divLogin.setOffsetLeft(0);
        	}else{
            	this.divLogin.setOffsetLeft(nLeft);
        		this.divLogin.setOffsetTop(nTop);
        	}
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 로그인 버튼 클릭 이벤트
         */
        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	this.gfnSetLogin(); // 메인화면 세팅
        };

        this.edt_keyup = function(obj,e)
        {
        	if( e.keycode == 13){
        		this.gfnSetLogin(); // 메인화면 세팅
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.frmLogin_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
            this.divLogin.form.edtUserId.addEventHandler("onkeyup",this.edt_keyup,this);
            this.divLogin.form.edtPassword.addEventHandler("onkeyup",this.edt_keyup,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
