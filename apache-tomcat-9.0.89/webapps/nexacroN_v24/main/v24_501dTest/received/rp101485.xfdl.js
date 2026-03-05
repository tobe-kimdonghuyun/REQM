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
                this._setFormPosition(1300,1090);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_feedback", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","71","45","839","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TAB키로 이동 시 내용없는 그리드에서 \'편집창\' 이라고 읽음");
            this.addChild(obj.name, obj);

            obj = new Tab("tabProduct","0","150","1300","66",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Tab0");
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_product");
            obj.set_accessibilitylabel("접수현황");
            obj.set_focusacceptable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabProduct);
            obj.set_text("Nexacro N");
            obj.set_accessibilityenable("false");
            this.tabProduct.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabProduct);
            obj.set_text("nexacro 17");
            obj.set_accessibilityenable("false");
            this.tabProduct.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tabProduct);
            obj.set_text("nexacro 14");
            this.tabProduct.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tabProduct);
            obj.set_text("XPLATFORM");
            obj.set_accessibilityenable("false");
            this.tabProduct.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","241","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("접수현황");
            obj.set_cssclass("sta_WF_eduTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEduCondition","0","291",null,"257","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_EduRegList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("교육 신청 내역이 없습니다.");
            obj.set_accessibilitylabel("접수현황");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"55\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" accessibilityenable=\"false\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"교육방식\"/><Cell col=\"2\" text=\"교육회차\"/><Cell col=\"3\" text=\"교육과정\"/><Cell col=\"4\" text=\"교육시작일\"/><Cell col=\"5\" text=\"교육종료일\"/><Cell col=\"6\" text=\"교육구분\"/><Cell col=\"7\" text=\"정보수정\"/></Band><Band id=\"body\" accessibilityenable=\"false\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:EDU_METHOD_NAME\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:ES_SEQ\"/><Cell col=\"3\" text=\"bind:EDU_DET_NAME\"/><Cell col=\"4\" text=\"bind:START_DATE\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:END_DATE\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:STATUS_CD_NAME\"/><Cell col=\"7\" text=\"수정\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ProdDelete",null,"241","150","40","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신청취소");
            obj.set_cssclass("btn_LOGIN");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle00","0","588","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("수강이력");
            obj.set_cssclass("sta_WF_eduTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEduHistory","0","638",null,"417","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_RegHistory");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("교육 수강 이력이 없습니다.");
            obj.set_accessibilitylabel("수강이력");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"55\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" accessibilityenable=\"false\"><Cell text=\"교육방식\"/><Cell col=\"1\" text=\"교육회차\"/><Cell col=\"2\" text=\"교육과정\"/><Cell col=\"3\" text=\"교육시작일\"/><Cell col=\"4\" text=\"교육종료일\"/><Cell col=\"5\" text=\"수강여부\"/><Cell col=\"6\" text=\"수료증발급\"/></Band><Band id=\"body\" accessibilityenable=\"false\"><Cell text=\"bind:EDU_METHOD_NAME\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:ES_SEQ\"/><Cell col=\"2\" text=\"expr:PRODUCT_NAME + &quot; &quot; + EDU_DET_NAME + &quot;과정&quot;\"/><Cell col=\"3\" text=\"bind:START_DATE\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:END_DATE\" displaytype=\"date\"/><Cell col=\"5\" text=\"expr:ATTEND_FLAG == &quot;1&quot; ? &quot;수강&quot; : &quot;미수강&quot;\" cssclass=\"expr:ATTEND_FLAG==&apos;0&apos;?&apos;grd_WF_schRed&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"expr:ATTEND_FLAG == &apos;1&apos; ? &apos;내려받기&apos; : &apos;&apos;\" displaytype=\"expr:ATTEND_FLAG == &apos;1&apos; ? &apos;buttoncontrol&apos; : &apos;none&apos;\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabProduct.Tabpage1.form
            obj = new Layout("default","",0,0,this.tabProduct.Tabpage1.form,function(p){});
            this.tabProduct.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabProduct.Tabpage2
            obj = new Layout("default","",0,0,this.tabProduct.Tabpage2.form,function(p){});
            this.tabProduct.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabProduct.Tabpage3
            obj = new Layout("default","",0,0,this.tabProduct.Tabpage3.form,function(p){});
            this.tabProduct.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabProduct.Tabpage4
            obj = new Layout("default","",0,0,this.tabProduct.Tabpage4.form,function(p){});
            this.tabProduct.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1300,1090,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.tabProduct.addEventHandler("onchanged",this.tabProduct_onchanged,this);
            this.grdEduCondition.addEventHandler("oncellclick",this.grdEduCondition_oncellclick,this);
            this.grdEduCondition.addEventHandler("onheadclick",this.grdEduCondition_onheadclick,this);
            this.btn_ProdDelete.addEventHandler("onclick",this.btn_ProdDelete_onclick,this);
            this.grdEduHistory.addEventHandler("oncellclick",this.grdEduHistory_oncellclick,this);
        };
        this.loadIncludeScript("rp101485.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
