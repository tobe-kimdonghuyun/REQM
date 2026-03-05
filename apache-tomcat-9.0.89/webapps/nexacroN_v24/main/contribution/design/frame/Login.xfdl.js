(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_titletext("New Form");
            this.set_cssclass("frm_LOGIN_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divLogin","440","195","400","510",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("div_LOGIN_Bg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staUserId","30","160",null,"50","30",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LOGIN_Id");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staPassword","30","230","340","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Pw");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","0",null,null,"70","0","0",null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("시작하기");
            obj.set_cssclass("btn_LOGIN_Start");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staPassword00","30","300","340","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_LOGIN_Language");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtUserId","153","170","210","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_value("999999");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_text("999999");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPassword","153","240","210","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_value("1111");
            obj.set_password("true");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_text("1111");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static00","74","28","273","98",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_LOGIN_Logo");
            this.divLogin.addChild(obj.name, obj);

            obj = new Combo("Combo00","153","305","212","38",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("7");
            obj.set_cssclass("cbo_LOGIN_Input");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divLogin_form_Combo00_innerdataset = new nexacro.NormalDataset("divLogin_form_Combo00_innerdataset", obj);
            divLogin_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">한국어</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">English</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">日本語</Col></Row></Rows>");
            obj.set_innerdataset(divLogin_form_Combo00_innerdataset);
            obj.set_text("한국어");
            obj.set_value("0");
            obj.set_index("0");
            this.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","33","376","84","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("8");
            obj.set_text("아이디저장");
            obj.set_cssclass("chk_LOGIN_Id");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("Button00","135","376","87","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("9");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("btn_LOGIN_Pw");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static01","123","386","1","10",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_LOGIN_Line");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divLogin.form.edtUserId","value","dsSearch","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divLogin.form.edtPassword","value","dsSearch","USER_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Login.xfdl", function() {
        /**************************************************************************************************
        * Form Event
        ***************************************************************************************************/
        /*-------------------------------------------------------------------------------------------------+
        >>  form load 시 처리
        +-------------------------------------------------------------------------------------------------*/
        this.Login_onload = function(obj, e)
        {
        	this.fn_divLogin_onsize();
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  form size 변경 시 처리
        +-------------------------------------------------------------------------------------------------*/
        this.Login_onsize = function(obj, e)
        {
        	this.fn_divLogin_onsize();
        }
        /**************************************************************************************************
        * Etc User Function (사용자 정의)
        ***************************************************************************************************/
        /*-------------------------------------------------------------------------------------------------+
        >>  form size 변경시 divLogin size 변경
        +-------------------------------------------------------------------------------------------------*/
        this.fn_divLogin_onsize = function()
        {
          	var nLeft = (nexacro.getApplication().mainframe.width / 2) - Math.round((this.divLogin.getOffsetWidth()) / 2);
          	var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round((this.divLogin.getOffsetHeight()) / 2);

        	if(nLeft <= 0)
        	{
        		this.divLogin.setOffsetLeft(0);
        	}
        	else
        	{
            	this.divLogin.setOffsetLeft(nLeft);
        		this.divLogin.setOffsetTop(nTop);
        	}
        }

        this.divLogin_btnLogin_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Login_onload,this);
            this.addEventHandler("onsize",this.Login_onsize,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
        };
        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
