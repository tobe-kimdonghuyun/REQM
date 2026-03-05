(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S20");
            this.set_titletext("신청정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","20","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("표는 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_EsentialTxt");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","0","staSubTitle:0","100.00%","2120",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divTat","0","0","100.00%","982",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_url("work::CST/SUB/CST002S21.xfdl");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("divTat00","0","826","100.00%","1114",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_url("work::CST/SUB/CST002S22.xfdl");
            this.div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_00.form.divTat
            obj = new Layout("default","",0,0,this.div00_00.form.divTat.form,function(p){});
            this.div00_00.form.divTat.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form.divTat00
            obj = new Layout("default","",0,0,this.div00_00.form.divTat00.form,function(p){});
            this.div00_00.form.divTat00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form
            obj = new Layout("default","",0,0,this.div00_00.form,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::CST/SUB/CST002S21.xfdl");
            this._addPreloadList("fdl","work::CST/SUB/CST002S22.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CST002S20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
