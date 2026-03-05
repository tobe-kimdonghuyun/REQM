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
                this._setFormPosition(1300,1270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"ymd\" type=\"STRING\" size=\"256\"/><Column id=\"goods\" type=\"STRING\" size=\"256\"/><Column id=\"version\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idx\">722</Col><Col id=\"ymd\">20241029</Col><Col id=\"goods\">043</Col><Col id=\"version\">2024.10.29.1</Col><Col id=\"gubun\">001</Col></Row><Row><Col id=\"idx\">550</Col><Col id=\"ymd\">20210902</Col><Col id=\"goods\">043</Col><Col id=\"version\">2021.09.02</Col><Col id=\"gubun\">001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","71","45","839","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("maskedit 접근 시 커서가 맨 끝에 붙어 입력이 되지 않는 현상.");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","79","216","381","74",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_displaynulltext("사업자 등록번호 입력");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_accessibilitylabel("사업자 등록번호 입력");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","78","341","227","89",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1300,1270,this,function(p){});
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
        };
        this.loadIncludeScript("RP_101515_Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
