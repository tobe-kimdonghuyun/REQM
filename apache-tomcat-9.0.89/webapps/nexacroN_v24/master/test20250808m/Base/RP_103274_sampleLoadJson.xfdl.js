(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleLoadJson");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1358,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column8","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds01", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","35","36","135","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("saveXML");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","34","106","141","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("saveJson");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","35","176","214","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("loadXml");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","36","240","214","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("loadJson");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa01","280","30","416","557",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1358,740,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103274_sampleLoadJson.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	let txt = this.ds00.saveXML();
        	//alert(txt);
        	this.txa01.value = txt;
        };

        this.btn01_onclick = function(obj,e)
        {
        	let txt = this.ds00.saveJSON();
        	//alert(txt);
        	this.txa01.value = txt;
        };

        this.btn02_onclick = function(obj,e)
        {
        	let cnt = this.ds01.loadXML(this.ds00.saveXML());
        	alert( "loadXML... " + cnt);
        };

        this.btn03_onclick = function(obj,e)
        {
        	let cnt = this.ds01.loadJSON(this.ds00.saveJSON());
        	alert( "loadJSON... " + cnt);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
        };
        this.loadIncludeScript("RP_103274_sampleLoadJson.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
