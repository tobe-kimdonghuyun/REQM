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
            obj = new Dataset("ds_ScheduleList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EDU_PRODUCT_CODE","type" : "string","size" : "255"},{"id" : "EDU_PRODUCT_NAME","type" : "string","size" : "255"},{"id" : "EDU_PRODUCT_NAME_ENG","type" : "string","size" : "255"},{"id" : "ES_SEQ","type" : "int","size" : "11"},{"id" : "START_DATE","type" : "string","size" : "255"},{"id" : "END_DATE","type" : "string","size" : "255"},{"id" : "EDU_TYPE","type" : "string","size" : "255"},{"id" : "EDU_TYPE_DET","type" : "string","size" : "255"},{"id" : "EDU_TYPE_DET_NAME","type" : "string","size" : "255"},{"id" : "EDU_AREA_CODE","type" : "string","size" : "255"},{"id" : "EDU_AREA_NAME","type" : "string","size" : "255"},{"id" : "ONLINE_OPEN_FLAG","type" : "string","size" : "255"},{"id" : "ONLINE_NUM","type" : "int","size" : "11"},{"id" : "SALES_NUM","type" : "int","size" : "11"},{"id" : "ICOUNT","type" : "int","size" : "11"},{"id" : "CURR_DATE","type" : "string","size" : "255"},{"id" : "START_DATE_MONTH","type" : "string","size" : "255"},{"id" : "CHK","type" : "string","size" : "255"},{"id" : "EX_FLAG","type" : "STRING","size" : "256"}]},"Rows" : [{"ES_SEQ" : "1","CHK" : "1","EX_FLAG" : "N"},{"ES_SEQ" : "2","CHK" : "0","EX_FLAG" : "N"},{"ES_SEQ" : "3","CHK" : "1","EX_FLAG" : ""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","71","45","569","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("displaytype, edittype  expr로 설정할 경우 체크박스 상태 읽어주지 않는 현상.");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","64","145","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("교육과정");
            obj.set_cssclass("sta_WF_eduTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","64","195",null,"195","525",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_ScheduleList");
            obj.set_autofittype("col");
            obj.set_nodatatext("신청 가능한 교육과정이 없습니다.");
            obj.set_scrolltype("none");
            obj.set_selectscrollmode("select");
            obj.set_scrollbartype("none none");
            obj.set_accessibilitylabel("교육과정");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"55\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" accessibilityenable=\"false\"><Cell text=\"교육회차\"/><Cell col=\"1\" text=\"교육과정\"/><Cell col=\"2\" text=\"교육일자\"/><Cell col=\"3\" text=\"정원\"/><Cell col=\"4\" text=\"신청인원\"/><Cell col=\"5\" text=\"신청\"/><Cell col=\"6\" text=\"온라인&#13;&#10;신청인원\"/><Cell col=\"7\" text=\"온라인&#13;&#10;참여신청\"/></Band><Band id=\"body\" accessibilityenable=\"false\"><Cell text=\"bind:ES_SEQ\"/><Cell col=\"1\" text=\"bind:EDU_TYPE_DET_NAME\"/><Cell col=\"2\" text=\"bind:START_DATE\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:ONLINE_NUM\"/><Cell col=\"4\" text=\"bind:ICOUNT\"/><Cell col=\"5\" cssclass=\"expr:EX_FLAG==&apos;Y&apos;?STATUS_CD==&apos;1&apos;?&apos;grd_WF_uncheck&apos;:&apos;grd_WF_discheck&apos;:&quot;&quot;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" displaytype=\"expr:EX_FLAG!=&apos;N&apos;?&apos;normal&apos;:&quot;checkboxcontrol&quot;\" edittype=\"expr:EX_FLAG!=&apos;N&apos;?&apos;none&apos;:&apos;checkbox&apos;\" expr=\"EX_FLAG!=&apos;N&apos;?&quot;마감&quot;:CHK\" text=\"bind:CHK\"/><Cell col=\"6\" text=\"bind:ONCOUNT\"/><Cell col=\"7\" text=\"bind:CHK_ON\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:EX_FLAG==&apos;Y&apos;?STATUS_CD==&apos;7&apos;?&apos;grd_WF_uncheck&apos;:&apos;grd_WF_discheck&apos;:&quot;&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","60","430","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("displaytype, edittype checkbox로 설정");
            obj.set_cssclass("sta_WF_eduTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","64","465",null,"195","525",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_ScheduleList");
            obj.set_autofittype("col");
            obj.set_nodatatext("신청 가능한 교육과정이 없습니다.");
            obj.set_scrolltype("none");
            obj.set_selectscrollmode("select");
            obj.set_scrollbartype("none none");
            obj.set_accessibilitylabel("교육과정");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"55\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\" accessibilityenable=\"false\"><Cell text=\"교육회차\"/><Cell col=\"1\" text=\"교육과정\"/><Cell col=\"2\" text=\"교육일자\"/><Cell col=\"3\" text=\"정원\"/><Cell col=\"4\" text=\"신청인원\"/><Cell col=\"5\" text=\"신청\"/><Cell col=\"6\" text=\"온라인&#13;&#10;신청인원\"/><Cell col=\"7\" text=\"온라인&#13;&#10;참여신청\"/></Band><Band id=\"body\" accessibilityenable=\"false\"><Cell text=\"bind:ES_SEQ\"/><Cell col=\"1\" text=\"bind:EDU_TYPE_DET_NAME\"/><Cell col=\"2\" text=\"bind:START_DATE\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:ONLINE_NUM\"/><Cell col=\"4\" text=\"bind:ICOUNT\"/><Cell col=\"5\" cssclass=\"expr:EX_FLAG==&apos;Y&apos;?STATUS_CD==&apos;1&apos;?&apos;grd_WF_uncheck&apos;:&apos;grd_WF_discheck&apos;:&quot;&quot;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"EX_FLAG!=&apos;N&apos;?&quot;마감&quot;:CHK\" text=\"bind:CHK\"/><Cell col=\"6\" text=\"bind:ONCOUNT\"/><Cell col=\"7\" text=\"bind:CHK_ON\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:EX_FLAG==&apos;Y&apos;?STATUS_CD==&apos;7&apos;?&apos;grd_WF_uncheck&apos;:&apos;grd_WF_discheck&apos;:&quot;&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.Grid01_00.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
