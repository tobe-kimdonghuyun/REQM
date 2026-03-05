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
            obj.set_text("TAB키로 이동 후 엔터 눌렀을 때 cssclass가 제대로 반영되지 않음.");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","61","166","1179","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("aliceblue");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","43","0","176","72",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button01");
            obj.set_cssclass("btn_TF_NaviSubR");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","49","79","640","200",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("stcMenu","0","18","56","47",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("메뉴");
            obj.set_cssclass("img_MF_Txt28px");
            obj.set_accessibilitydescription("메뉴");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","403","0","176","72",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Button02");
            obj.set_cssclass("btn_TF_NaviSubR");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","383","78","576","200",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("stcMenu","0","18","56","47",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("메뉴");
            obj.set_cssclass("img_MF_Txt28px");
            obj.set_accessibilitydescription("메뉴");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button03","763","0","176","72",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Button03");
            obj.set_cssclass("btn_TF_NaviSubR");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03","713","79","466","200",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("stcMenu","0","18","56","47",null,null,null,null,null,null,this.Div00.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("메뉴");
            obj.set_cssclass("img_MF_Txt28px");
            obj.set_accessibilitydescription("메뉴");
            this.Div00.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div01","62","Div00:0","1168","268",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_background("antiquewhite");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form,function(p){});
            this.Div00.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div03.form
            obj = new Layout("default","",0,0,this.Div00.form.Div03.form,function(p){});
            this.Div00.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("rp101455.xfdl", function() {

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
            this.Div00.form.Button01.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.Div00.form.Div01.addEventHandler("onkillfocus",this.divMenu_onkillfocus,this);
            this.Div00.form.Button02.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.Div00.form.Div02.addEventHandler("onkillfocus",this.divMenu_onkillfocus,this);
            this.Div00.form.Button03.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.Div00.form.Div03.addEventHandler("onkillfocus",this.divMenu_onkillfocus,this);
        };
        this.loadIncludeScript("rp101455.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
