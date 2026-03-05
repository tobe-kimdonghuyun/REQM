(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">NexacroNv24</Col></Row><Row><Col id=\"title\">NexacroN</Col></Row><Row><Col id=\"title\">Nexacro17</Col></Row><Row><Col id=\"title\">Nexacro14</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">교육공지</Col></Row><Row><Col id=\"title\">교육일정</Col></Row><Row><Col id=\"title\">교육신청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu3", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">공지사항</Col></Row><Row><Col id=\"title\">보안취약점</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubMenu1", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">서브메뉴1</Col></Row><Row><Col id=\"title\">서브메뉴2</Col></Row><Row><Col id=\"title\">서브메뉴3</Col></Row><Row><Col id=\"title\">서브메뉴4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","71","45","569","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TAB키로 이동 시 탭컴포넌트에 접근했을 때 \'브라우저\'만 읽음.");
            this.addChild(obj.name, obj);

            obj = new Tab("tabSearchIdPass","0","150","1300","653",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Tab0");
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_license");
            obj.set_accessibilitylabel("아이디비밀번호찾기 탭");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tabSearchIdPass);
            obj.set_text("아이디찾기");
            this.tabSearchIdPass.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","40","1300","72",null,null,null,null,null,null,this.tabSearchIdPass.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("• 회원가입 시 입력하신 ID, 성명, 이메일 주소를 입력하시기 바랍니다.\r\n• ID, 성명, 이메일 주소가 없는 경우는 1588-7895로 문의하시기 바랍니다.\r");
            obj.set_cssclass("sta_WF_viewDetail");
            obj.set_wordWrap("char");
            this.tabSearchIdPass.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","140","140","30",null,null,null,null,null,null,this.tabSearchIdPass.tabpage1.form);
            obj.set_initvalueid("iv_StaticE");
            obj.set_taborder("1");
            obj.set_text("성명 <fc v=\'#fb6d3a\'><b v=\'true\'>*</b></fc>");
            obj.set_cssclass("sta_WF_writeTitle");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.tabSearchIdPass.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","0","179","626","50",null,null,null,null,null,null,this.tabSearchIdPass.tabpage1.form);
            obj.set_initvalueid("iv_EditE");
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_reply");
            obj.set_displaynulltext("공백없이 입력해주세요.(예:홍길동)");
            obj.set_accessibilitylabel("성명");
            this.tabSearchIdPass.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","666","140","140","30",null,null,null,null,null,null,this.tabSearchIdPass.tabpage1.form);
            obj.set_initvalueid("iv_StaticE");
            obj.set_taborder("3");
            obj.set_text("이메일 <fc v=\'#fb6d3a\'><b v=\'true\'>*</b></fc>");
            obj.set_cssclass("sta_WF_writeTitle");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.tabSearchIdPass.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtEmail","666","179","626","50",null,null,null,null,null,null,this.tabSearchIdPass.tabpage1.form);
            obj.set_initvalueid("iv_EditE");
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_reply");
            obj.set_displaynulltext("회원가입 시 입력한 메일주소를 입력해주세요");
            obj.set_accessibilitylabel("이메일");
            this.tabSearchIdPass.tabpage1.addChild(obj.name, obj);

            obj = new Button("btnbtnCancel","496","289","150","65",null,null,null,null,null,null,this.tabSearchIdPass.tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_ask");
            this.tabSearchIdPass.tabpage1.addChild(obj.name, obj);

            obj = new Button("btnbtnSave","656","289","150","65",null,null,null,null,null,null,this.tabSearchIdPass.tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_list");
            obj.set_text("확인");
            this.tabSearchIdPass.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tabSearchIdPass);
            obj.set_text("비밀번호찾기");
            this.tabSearchIdPass.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","40","1300","72",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("• 회원가입 시 입력하신 ID, 성명, 이메일 주소를 입력하시기 바랍니다.    \r\n• ID, 성명, 이메일 주소가 없는 경우는 1588-7895로 문의하시기 바랍니다.\r");
            obj.set_cssclass("sta_WF_viewDetail");
            obj.set_wordWrap("char");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","140","140","30",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_StaticE");
            obj.set_taborder("1");
            obj.set_text("회원ID <fc v=\'#fb6d3a\'><b v=\'true\'>*</b></fc>");
            obj.set_cssclass("sta_WF_writeTitle");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_accessibilitylabel("회원아이디");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtUserId","0","179","626","50",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_EditE");
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_reply");
            obj.set_displaynulltext("공백없이 입력해주세요.(예:홍길동)");
            obj.set_accessibilitylabel("회원아이디");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","666","140","140","30",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_StaticE");
            obj.set_taborder("3");
            obj.set_text("성명 <fc v=\'#fb6d3a\'><b v=\'true\'>*</b></fc>");
            obj.set_cssclass("sta_WF_writeTitle");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","666","179","626","50",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_EditE");
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_reply");
            obj.set_displaynulltext("공백없이 입력해주세요.(예:홍길동)");
            obj.set_accessibilitylabel("성명");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01","0","254","140","30",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_StaticE");
            obj.set_taborder("5");
            obj.set_text("이메일 <fc v=\'#fb6d3a\'><b v=\'true\'>*</b></fc>");
            obj.set_cssclass("sta_WF_writeTitle");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtEmailId","0","293","626","50",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_EditE");
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_reply");
            obj.set_displaynulltext("회원가입 시 입력한 메일주소를 입력해주세요");
            obj.set_accessibilitylabel("이메일");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","670","254","140","30",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_StaticE");
            obj.set_taborder("7");
            obj.set_text("휴대폰번호 <fc v=\'#fb6d3a\'><b v=\'true\'>*</b></fc>");
            obj.set_cssclass("sta_WF_writeTitle");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtTelHp","670","293","626","50",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_EditE");
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_reply");
            obj.set_displaynulltext("회원가입 시 입력한 전화번호를 입력해주세요. 숫자만 입력해주세요.(예:01012345678)");
            obj.set_accessibilitylabel("휴대폰번호");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","0","368","190","30",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_StaticE");
            obj.set_taborder("9");
            obj.set_text("임시번호 수신방법 <fc v=\'#fb6d3a\'><b v=\'true\'>*</b></fc>");
            obj.set_cssclass("sta_WF_writeTitle");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Radio("radReciveType","220","368","240","30",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_initvalueid("iv_RadioE");
            obj.set_taborder("10");
            obj.set_innerdataset("ds_TempReciv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_search");
            obj.set_accessibilitylabel("임시번호 수신방법");
            obj.set_text("이메일");
            obj.set_value("email");
            obj.set_index("0");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Button("btnbtnCancel","496","458","150","65",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_ask");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);

            obj = new Button("btnbtnSave","656","458","150","65",null,null,null,null,null,null,this.tabSearchIdPass.tabpage2.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_list");
            this.tabSearchIdPass.tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabSearchIdPass.tabpage1.form
            obj = new Layout("default","",0,0,this.tabSearchIdPass.tabpage1.form,function(p){});
            this.tabSearchIdPass.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabSearchIdPass.tabpage2.form
            obj = new Layout("default","",0,0,this.tabSearchIdPass.tabpage2.form,function(p){});
            this.tabSearchIdPass.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabSearchIdPass.tabpage1.form.edtUserNm","value","ds_ParamId","user_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tabSearchIdPass.tabpage1.form.edtEmail","value","ds_ParamId","email_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tabSearchIdPass.tabpage2.form.edtTelHp","value","ds_ParamPass","tel_hp");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tabSearchIdPass.tabpage2.form.edtEmailId","value","ds_ParamPass","email_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tabSearchIdPass.tabpage2.form.edtUserNm","value","ds_ParamPass","user_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tabSearchIdPass.tabpage2.form.edtUserId","value","ds_ParamPass","user_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tabSearchIdPass.tabpage2.form.radReciveType","value","ds_ParamPass","receive_type");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("rp101458.xfdl", function() {

        this.divMenuInUse = "";

        this.fnIsNull = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null ) return true;

            var ChkStr = new String(sValue);

        	if (ChkStr == "null") return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        this.Button_onsetfocus = function(obj,e)
        {
        	//활성화 된 subMenu Div 숨기기
        	if (!this.fnIsNull(this.divMenuInUse) )
        	{
        		this.divMenuInUse.visible = false;
        		this.Div00.height = 150;
        	}

        	var id = obj.id.replace("Button0", "");
        	var objDs = "";
        	switch(id) {
        	case "1":
        		objDs = this.dsMenu1;
        		this.divMenuInUse = this.Div00.form.Div01;
        		break;
        	case "2":
        		objDs = this.dsMenu2;
        		this.divMenuInUse = this.Div00.form.Div02;
        		break;
        	case "3":
        		objDs = this.dsMenu3;
        		this.divMenuInUse = this.Div00.form.Div03;
        		break;
        	default:
        	}


        	//Div00 앞으로 보이게.
        	var elem = this.Div00.getElement();
        	if(elem)
        	{
        		elem.setElementZIndex(1);
        	}


        	//버튼 중복 생성을 방지하기 위해 destroy
        	for (var i = this.divMenuInUse.form.components.length - 1; i > -1; i--) {
        		var objComp = this.divMenuInUse.form.components[i];
        		if (objComp == "[object Button]")
        		{
        			var objDel = this.divMenuInUse.removeChild(this.divMenuInUse.form.components[i].name);
        			objDel.destroy();
        			objDel = null;
        		}
        	}

        	var nLeft = "";
        	var nTop = 33;
        	var nHGap = 43;
        	var objPrev = "";


        	var nCnt = objDs.rowcount;
        	for (var i = 0; i < nCnt; i++)
        	{
        		if(objPrev =="") objPrev = obj;
         		var sMenuNm = objDs.getColumn(i, "title");
        		var sMenuId = objDs.getColumn(i, "title");

        		// Creating page button
        		var objBtn = new Button();
        		objBtn.init("SUB1_" + sMenuNm, 65, nTop, 200, 36);
        		this.divMenuInUse.form.addChild(objBtn.name, objBtn);

        		objBtn.set_text(sMenuNm);

        		objBtn.set_cssclass("btn_TF_NaviSubR");
        		objBtn.set_accessibilitydescription("메뉴 확장");
        		objBtn.setEventHandler("onsetfocus", this.btnSub1Menu_onclick, this);

        		objBtn.menuid = sMenuId;
        		objBtn.show();
        		objPrev = objBtn;
        		nTop += nHGap;
        	}

        	this.Div00.height = 300;
        	this.Div00.form.resetScroll();
        	this.divMenuInUse.visible = true;
        };


        /**
         * @description sub2menu 셋팅
         */
        this.btnSub1Menu_onclick = function (obj, e)
        {
        	// Top 메뉴 복사
        	for (var i = this.divMenuInUse.form.components.length - 1; i > -1; i--) {
        		if(this.divMenuInUse.form.components[i].name.substr(0, 4) == "SUB2"
        		   || this.divMenuInUse.form.components[i].name.substr(0, 4) == "SUB3"){
        			var objDel = this.divMenuInUse.removeChild(this.divMenuInUse.form.components[i].name);
        			objDel.destroy();
        			objDel = null;
        		}
        	}

        	var nTop = 33;
        	var nHGap = 43;
        	var objPrev = "";
        	for (var i = 0; i < this.dsSubMenu1.getRowCount(); i++)
        	{
        		if(objPrev =="") objPrev = obj;
         		var sMenuNm = this.dsSubMenu1.getColumn(i, "title");
        		var sMenuId = this.dsSubMenu1.getColumn(i, "title");
        		// Creating page button
        		var objBtn = new Button();
        		objBtn.init("SUB2_" + sMenuNm, 260, nTop, 200, 36);
        		this.divMenuInUse.form.addChild(objBtn.name, objBtn);

        		objBtn.set_text(objPrev.id + sMenuNm);
        		objBtn.set_cssclass("btn_TF_NaviSubR");

        		objBtn.menuid = sMenuId;
        		objBtn.show();
        		objBtn.moveToPrev(objPrev);
        		objPrev = objBtn;
        		nTop += nHGap;
        	}
        };




        this.divMenu_onkillfocus = function(obj,e)
        {
            this.Div00.height = 150;
        	this.divMenuInUse.visible = false;
        	this.divMenuInUse = "";
        	this.Div00.form.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.tabSearchIdPass.tabpage1.form.btnbtnCancel.addEventHandler("onclick",this.tabSearchIdPass_tabpage1_btnbtnCancel_onclick,this);
            this.tabSearchIdPass.tabpage1.form.btnbtnSave.addEventHandler("onclick",this.tabSearchIdPass_tabpage1_btnbtnSave_onclick,this);
            this.tabSearchIdPass.tabpage2.form.btnbtnCancel.addEventHandler("onclick",this.tabSearchIdPass_tabpage1_btnbtnCancel_onclick,this);
            this.tabSearchIdPass.tabpage2.form.btnbtnSave.addEventHandler("onclick",this.tabSearchIdPass_tabpage1_btnbtnSave_onclick,this);
        };
        this.loadIncludeScript("rp101458.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
