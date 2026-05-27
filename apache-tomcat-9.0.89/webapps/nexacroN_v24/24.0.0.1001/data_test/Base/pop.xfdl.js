(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "recpDt","type" : "STRING","size" : "256"},{"id" : "recpNo","type" : "STRING","size" : "256"},{"id" : "tstCd","type" : "STRING","size" : "256"},{"id" : "tstNm","type" : "STRING","size" : "256"},{"id" : "state","type" : "STRING","size" : "256"},{"id" : "dt","type" : "STRING","size" : "256"},{"id" : "tm","type" : "STRING","size" : "256"},{"id" : "upurId","type" : "STRING","size" : "256"},{"id" : "userNm","type" : "STRING","size" : "256"},{"id" : "deptNm","type" : "STRING","size" : "256"},{"id" : "custCd","type" : "STRING","size" : "256"},{"id" : "custNm","type" : "STRING","size" : "256"},{"id" : "totCnt","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","836","3","250","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("load");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","55","2","275","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("프리픽스셋팅 + 쿼리스트링");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","594","2","237","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("URL셋팅");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","332","2","258","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("프리픽스셋팅");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","103","263","277","87",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("트랜잭션");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","424","264","291","87",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("requestUrl");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","101","377","285","98",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("트랜잭션 url");
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
        this.registerScript("pop.xfdl", function() {
        this.sUrl = "http://tech.tobesoft.com:8080/temp/RC/recpRsltDaily/recpTstDayList.do";

        this.sPrefixUrl = "serviceprefix::RC/recpRsltDaily/recpTstDayList.do";
        this.nQueryCount = 0;

        this.Button01_onclick = function(obj,e)
        {
        	this.DataObject00.load();
        };

        //프리픽스셋팅 + 쿼리스트링셋팅
        this.Button00_onclick = function(obj,e)
        {
        	 this.nQueryCount++;

            // Prefix + 쿼리스트링 조합
            var sNewUrl = this.sPrefixUrl + "?cnt=" + this.nQueryCount;

            // DataObject URL 설정
            this.DataObject00.url = sNewUrl;

            trace("Prefix URL 설정됨: " + sNewUrl);
        };

        //프리픽스셋팅
        this.Button03_onclick = function(obj,e)
        {
        	this.DataObject00.url = "serviceprefix::RC/recpRsltDaily/recpTstDayList.do";
        };

        this.Button00_onclick = function(obj,e)
        {
        	 this.nQueryCount++;

            // Prefix + 쿼리스트링 조합
            var sNewUrl = this.sPrefixUrl + "?cnt=" + this.nQueryCount;

            // DataObject URL 설정
            this.DataObject00.url = sNewUrl;

            trace("Prefix URL 설정됨: " + sNewUrl);
        };

        //URL셋팅
        this.Button02_onclick = function(obj,e)
        {
        	this.DataObject00.url = this.sUrl;
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.transaction( "MyService01","serviceprefix::RC/recpRsltDaily/recpTstDayList.do","","","","",true,0, true);
        };

        this.Button05_onclick = function(obj,e)
        {
        	var header = {"Content-Type" : "application/json"};
        	var json_param = {
        			"httpheader" : header,
        			"postdata" : "test",
        			"async" : true
        		}
        	var sUrl  =
        	this.DataObject00.request("requestTest","GET","http://172.10.12.45:9091/api/RP_105454_data_sample_dataobject_01.jsp", json_param);
        };

        this.Button06_onclick = function(obj,e)
        {
        	this.transaction( "MyService01",this.sUrl,"","","","",true,0, true);
        };

        this.DataObject00_onsuccess = function(obj,e)
        {
        	trace("DataObject00_onerror");
        	trace(e.response);
        };

        this.DataObject00_onerror = function(obj,e)
        {
        	trace("DataObject00_onerror");
        	trace(e.errordata);
        	trace(e.statuscode);
        	trace(e.requesturi);
        	trace(e.errormsg);
        	trace(obj.getResponse());
        	this.alert("Aaa");


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.DataObject00.addEventHandler("onsuccess",this.DataObject00_onsuccess,this);
            this.DataObject00.addEventHandler("onerror",this.DataObject00_onerror,this);
        };
        this.loadIncludeScript("pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
