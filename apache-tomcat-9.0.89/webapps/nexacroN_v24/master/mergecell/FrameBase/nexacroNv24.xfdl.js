(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dasfadsfasdf");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list01", this);
            obj.set_preload("false");
            obj.set_enableevent("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "_CHK","type" : "STRING","size" : "255"},{"id" : "SUBSIDIARY","type" : "STRING","size" : "255"},{"id" : "SUBSIDIARYNM","type" : "STRING","size" : "255"},{"id" : "PRODUCTGROUP","type" : "STRING","size" : "255"},{"id" : "PRODUCT","type" : "STRING","size" : "255"},{"id" : "SIMUL_VERSION","type" : "STRING","size" : "255"},{"id" : "PLANWEEK","type" : "STRING","size" : "255"},{"id" : "SIMUL_VERSION_DESCRIP","type" : "STRING","size" : "255"},{"id" : "SIMUL_VERSION_NM","type" : "STRING","size" : "255"},{"id" : "SCORE01","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE02","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE03","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE04","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE05","type" : "STRING","size" : "255"},{"id" : "TOTALSCORE","type" : "STRING","size" : "255"},{"id" : "BESTSYSTEM","type" : "STRING","size" : "255"},{"id" : "BESTUSER","type" : "STRING","size" : "255"},{"id" : "SORD","type" : "INT","size" : "255"},{"id" : "CHKUSER","type" : "STRING","size" : "255"},{"id" : "CONFIRMED","type" : "STRING","size" : "255"}]},"Rows" : [{"_CHK" : "202533-AR-HHP-A-008","SUBSIDIARY" : "202533-AR-HHP-A-008","SUBSIDIARYNM" : "202533-AR-HHP-A-008","PRODUCTGROUP" : "202533-AR-HHP-A-008","PRODUCT" : "202533-AR-HHP-A-008","SIMUL_VERSION" : "202533-AR-HHP-A-008","PLANWEEK" : "202533-AR-HHP-A-008","SIMUL_VERSION_DESCRIP" : "Normal Scenario (Due Week)","SIMUL_VERSION_NM" : "202533-AR-HHP-A-008\n\rNormal Scenario (Due Week)","SCORE01" : "202533-AR-HHP-A-008","SCORE02" : "202533-AR-HHP-A-008","SCORE03" : "202533-AR-HHP-A-008","SCORE04" : "202533-AR-HHP-A-008","SCORE05" : "202533-AR-HHP-A-008","TOTALSCORE" : "202533-AR-HHP-A-008","BESTSYSTEM" : "202533-AR-HHP-A-008","BESTUSER" : "202533-AR-HHP-A-008","SORD" : "202533-AR-HHP-A-008","CHKUSER" : "202533-AR-HHP-A-008","CONFIRMED" : "202533-AR-HHP-A-008"},{"_CHK" : "202533-AR-HHP-A-008","SUBSIDIARY" : "202533-AR-HHP-A-008","SUBSIDIARYNM" : "202533-AR-HHP-A-008","PRODUCTGROUP" : "202533-AR-HHP-A-008","PRODUCT" : "202533-AR-HHP-A-008","SIMUL_VERSION" : "202533-AR-HHP-A-008","PLANWEEK" : "202533-AR-HHP-A-008","SIMUL_VERSION_DESCRIP" : "Normal Scenario (Due Week)","SIMUL_VERSION_NM" : "202533-AR-HHP-A-008\n\rNormal Scenario (Due Week)","SCORE01" : "202533-AR-HHP-A-008","SCORE02" : "202533-AR-HHP-A-008","SCORE03" : "202533-AR-HHP-A-008","SCORE04" : "202533-AR-HHP-A-008","SCORE05" : "202533-AR-HHP-A-008","TOTALSCORE" : "202533-AR-HHP-A-008","BESTSYSTEM" : "202533-AR-HHP-A-008","BESTUSER" : "202533-AR-HHP-A-008","SORD" : "202533-AR-HHP-A-008","CHKUSER" : "202533-AR-HHP-A-008","CONFIRMED" : "202533-AR-HHP-A-008"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","62","69",null,"214","190",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"_CHK\"/><Cell col=\"1\" text=\"SUBSIDIARY\"/><Cell col=\"2\" text=\"SUBSIDIARYNM\"/><Cell col=\"3\" text=\"PRODUCTGROUP\"/><Cell col=\"4\" text=\"PRODUCT\"/><Cell col=\"5\" text=\"SIMUL_VERSION\"/><Cell col=\"6\" text=\"PLANWEEK\"/><Cell col=\"7\" text=\"SIMUL_VERSION_DESCRIP\"/><Cell col=\"8\" text=\"SIMUL_VERSION_NM\"/><Cell col=\"9\" text=\"SCORE01\"/><Cell col=\"10\" text=\"SCORE02\"/><Cell col=\"11\" text=\"SCORE03\"/><Cell col=\"12\" text=\"SCORE04\"/><Cell col=\"13\" text=\"SCORE05\"/><Cell col=\"14\" text=\"TOTALSCORE\"/><Cell col=\"15\" text=\"BESTSYSTEM\"/><Cell col=\"16\" text=\"BESTUSER\"/><Cell col=\"17\" text=\"SORD\"/><Cell col=\"18\" text=\"CHKUSER\"/><Cell col=\"19\" text=\"CONFIRMED\"/></Band><Band id=\"body\"><Cell text=\"bind:_CHK\"/><Cell col=\"1\" text=\"bind:SUBSIDIARY\"/><Cell col=\"2\" text=\"bind:SUBSIDIARYNM\"/><Cell col=\"3\" text=\"bind:PRODUCTGROUP\"/><Cell col=\"4\" text=\"bind:PRODUCT\"/><Cell col=\"5\" text=\"bind:SIMUL_VERSION\"/><Cell col=\"6\" text=\"bind:PLANWEEK\"/><Cell col=\"7\" text=\"bind:SIMUL_VERSION_DESCRIP\"/><Cell col=\"8\" text=\"bind:SIMUL_VERSION_NM\"/><Cell col=\"9\" text=\"bind:SCORE01\"/><Cell col=\"10\" text=\"bind:SCORE02\"/><Cell col=\"11\" text=\"bind:SCORE03\"/><Cell col=\"12\" text=\"bind:SCORE04\"/><Cell col=\"13\" text=\"bind:SCORE05\"/><Cell col=\"14\" text=\"bind:TOTALSCORE\"/><Cell col=\"15\" text=\"bind:BESTSYSTEM\"/><Cell col=\"16\" text=\"bind:BESTUSER\"/><Cell col=\"17\" text=\"bind:SORD\"/><Cell col=\"18\" text=\"bind:CHKUSER\"/><Cell col=\"19\" text=\"bind:CONFIRMED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","82","310","237","128",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",630,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacroNv24.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        // 	for(var i = 0 ; i<6; i++)
        // 		this.Grid00.setFormatColProperty(i,"band","left");
         	for(var i = 0 ; i<6; i++)
        		this.Grid00.setFormatColProperty(i,"band","left");

        	//this.Grid00.width = 550;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.ds_list01.addEventHandler("oncolumnchanged",this.ds_list01_oncolumnchanged,this);
        };
        this.loadIncludeScript("nexacroNv24.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
