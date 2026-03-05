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
            obj.set_text("TAB키로 이동 시 동적생성 된 이미지뷰어 음성출력되지 않음.");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","73","164","1108","196",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("stcMenu","0","18","196","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("생성되어 있음.");
            obj.set_cssclass("img_MF_Txt28px");
            obj.set_accessibilitydescription("메뉴");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.registerScript("rp101453.xfdl", function() {

        this.Form_Work_onload = function(obj,e)
        {
        	var objImg = new ImageViewer();
        	objImg.init("stcMenu1", 0, 80, 200, 47);
        	this.Div00.form.addChild(objImg.name, objImg);
        	objImg.show();
        	objImg.text = "동적생성됨.";
        	objImg.accessibilitydescription = "메뉴";
        	objImg.cssclass = "img_MF_Txt28px";



        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
        };
        this.loadIncludeScript("rp101453.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
