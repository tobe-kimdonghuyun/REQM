(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameLogin");
            this.set_cssclass("Login");
            this.set_background("#F2F3FF");
            this.set_titletext("로그인프레임");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoginResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staVersion","7","4","102","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtId","30","220",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_LOGIN_Id");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPw","30","290",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edt_LOGIN_Pw");
            obj.set_password("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSaveId","30","370",null,"30","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("자동로그인");
            obj.set_cssclass("chk_LOGIN_SaveId");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogin","0",null,null,"80","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_cssclass("btn_LOGIN");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","75",null,"70","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_LOGIN_Logo");
            obj.set_text("");
            obj.set_border("1px solid green");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtId","value","dsCond","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtPw","value","dsCond","USER_PASSWORD");
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
        *  Mobile 프로젝트
        *  @FileName 	frmLogin.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
         this.objApp = nexacro.getApplication();
         /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fnLogin = function()
        {
        	this.objApp.gvBase.divMenu.form.fnsetDsBtnMenu();
        	this.parent.parent.parent.form.divMain.set_url("frame::frmMainPage.xfdl");
        	this.objApp.gvBase.fnAction("LOGIN", true);
        }
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnLogin_onclick = function(obj,e)
        {
        	this.fnLogin();
        };

        this.edtKeyup = function(obj,e)
        {
        	if( e.keycode == 13){
        		this.fnLogin();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameLogin_onload,this);
            this.edtId.addEventHandler("onkeyup",this.edtKeyup,this);
            this.edtPw.addEventHandler("onkeyup",this.edtKeyup,this);
            this.chkSaveId.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.btnLogin.addEventHandler("onclick",this.btnLogin_onclick,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
