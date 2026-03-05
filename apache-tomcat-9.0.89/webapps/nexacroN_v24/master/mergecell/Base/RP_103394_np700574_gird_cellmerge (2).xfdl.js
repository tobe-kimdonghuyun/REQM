(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("np700574_gird_cellmerge");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "202533-AR-HHP-A-008\n\t\n\tNormal Scenario(Due Week)","Column1" : "a","Column2" : "1"},{"Column0" : "202533-AR-HHP-A-008\n\t\n\tNormal Scenario(Due Week)","Column1" : "b","Column2" : "2"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00_00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "compcd","type" : "string","size" : "32"},{"id" : "compnm","type" : "string","size" : "32"},{"id" : "empNo","type" : "string","size" : "32"},{"id" : "empNm","type" : "string","size" : "32"},{"id" : "email","type" : "string","size" : "32"},{"id" : "deptcd","type" : "string","size" : "32"},{"id" : "deptnm","type" : "string","size" : "32"},{"id" : "grpjoindt","type" : "string","size" : "32"},{"id" : "jobgrdcd","type" : "string","size" : "32"},{"id" : "jobgrdnm","type" : "string","size" : "32"},{"id" : "titleCd","type" : "string","size" : "32"},{"id" : "titleNm","type" : "string","size" : "32"},{"id" : "incumbcd","type" : "string","size" : "32"},{"id" : "retappntdt","type" : "string","size" : "32"},{"id" : "jobGrade","type" : "string","size" : "32"},{"id" : "joinSts","type" : "string","size" : "32"},{"id" : "joinStsNm","type" : "string","size" : "32"},{"id" : "addr","type" : "string","size" : "32"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00_01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "202533-AR-HHP-A-008\n\t\n\tNormal Scenario(Due Week)","Column1" : "a","Column2" : "1"},{"Column0" : "202533-AR-HHP-A-008\n\t\n\tNormal Scenario(Due Week)","Column1" : "b","Column2" : "2"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","54","70","373","243",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"114\"/><Column size=\"88\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"102\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" verticalAlign=\"middle\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","153","360","157","82",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","397","365","223","67",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","723","358","213","90",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","567","67","373","243",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00_00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"compcd\"/><Cell col=\"1\" text=\"compnm\"/><Cell col=\"2\" text=\"empNo\"/><Cell col=\"3\" text=\"empNm\"/><Cell col=\"4\" text=\"email\"/><Cell col=\"5\" text=\"deptcd\"/><Cell col=\"6\" text=\"deptnm\"/><Cell col=\"7\" text=\"grpjoindt\"/><Cell col=\"8\" text=\"jobgrdcd\"/><Cell col=\"9\" text=\"jobgrdnm\"/><Cell col=\"10\" text=\"titleCd\"/><Cell col=\"11\" text=\"titleNm\"/><Cell col=\"12\" text=\"incumbcd\"/><Cell col=\"13\" text=\"retappntdt\"/><Cell col=\"14\" text=\"jobGrade\"/><Cell col=\"15\" text=\"joinSts\"/><Cell col=\"16\" text=\"joinStsNm\"/><Cell col=\"17\" text=\"addr\"/></Band><Band id=\"body\"><Cell text=\"bind:compcd\"/><Cell col=\"1\" text=\"bind:compnm\"/><Cell col=\"2\" text=\"bind:empNo\"/><Cell col=\"3\" text=\"bind:empNm\"/><Cell col=\"4\" text=\"bind:email\"/><Cell col=\"5\" text=\"bind:deptcd\"/><Cell col=\"6\" text=\"bind:deptnm\"/><Cell col=\"7\" text=\"bind:grpjoindt\"/><Cell col=\"8\" text=\"bind:jobgrdcd\"/><Cell col=\"9\" text=\"bind:jobgrdnm\"/><Cell col=\"10\" text=\"bind:titleCd\"/><Cell col=\"11\" text=\"bind:titleNm\"/><Cell col=\"12\" text=\"bind:incumbcd\"/><Cell col=\"13\" text=\"bind:retappntdt\"/><Cell col=\"14\" text=\"bind:jobGrade\"/><Cell col=\"15\" text=\"bind:joinSts\"/><Cell col=\"16\" text=\"bind:joinStsNm\"/><Cell col=\"17\" text=\"bind:addr\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103394_np700574_gird_cellmerge (2).xfdl", function() {

        this.np700574_gird_cellmerge_onload = function(obj,e)
        {
        	this.Grid00.mergeCell(0,0,0,1,true);
        	this.Grid00.mergeCell(1,2,0,0,true);
        	this.Grid00_00.mergeCell(0,0,0,1,true);
        	this.Grid00_00.mergeCell(1,2,0,0,true);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset00.copyData(this.Dataset00_00);
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.transaction("svcid","http://172.10.12.45:9090/RP_88938_tr_test1.xml","","Dataset00_00=userInfo","","fn_callback")
        	//this.transaction( "MyService01","DataSrv::samplexml.jsp","input1=Dataset02","Dataset03=output1","a=b","callbackFunction",false,0, true);

        };
        this.fn_callback = function(a,b,c)
        {
        	trace(a+","+b+","+c);
        	this.Grid00_00.createFormat();
        	trace(this.Dataset00_00.saveXML());
        }
        this.Button02_onclick = function(obj,e)
        {
        	this.TextArea00.insertText(this.Dataset00.saveXML());
        };

        this.np700574_gird_cellmerge_onerror = function(obj,e)
        {
        	trace("np700574_gird_cellmerge_onerror");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.np700574_gird_cellmerge_onload,this);
            this.addEventHandler("onerror",this.np700574_gird_cellmerge_onerror,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("RP_103394_np700574_gird_cellmerge (2).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
