(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleChart");
            this.set_titletext("챠트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,484);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRspsRateList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"cat\" type=\"STRING\" size=\"256\"/><Column id=\"dayCnt\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dayCnt\">350000</Col><Col id=\"cat\">전일콜수</Col><Col id=\"select\">false</Col></Row><Row><Col id=\"cat\">전월콜수</Col><Col id=\"dayCnt\">135790</Col><Col id=\"select\">true</Col></Row><Row><Col id=\"cat\">전년콜수</Col><Col id=\"dayCnt\">2468964</Col><Col id=\"select\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRspsRateList00", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"cat\" type=\"STRING\" size=\"256\"/><Column id=\"dayCnt\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"monthCnt\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"yearCnt\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dayCnt\">35000</Col><Col id=\"cat\">콜수</Col><Col id=\"monthCnt\">135790</Col><Col id=\"yearCnt\">2468964</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("dcht00","22","12","408","469",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("dsRspsRateList");
            obj.getSetter("categorycolumn").set("bind:cat");
            this.addChild(obj.name, obj);

            obj = new BasicChart("dcht01","450","12","316","433",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("dsRspsRateList00");
            obj.getSetter("categorycolumn").set("bind:cat");
            obj.getSetter("border").set("0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new BasicChart("dcht02","794","12","316","469",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("binddataset").set("dsRspsRateList00");
            obj.getSetter("categorycolumn").set("bind:cat");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,484,this,function(p){});
            obj.set_mobileorientation("landscape");
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

        };
        this.loadIncludeScript("RP_86504_sampleBarChart_exam.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
