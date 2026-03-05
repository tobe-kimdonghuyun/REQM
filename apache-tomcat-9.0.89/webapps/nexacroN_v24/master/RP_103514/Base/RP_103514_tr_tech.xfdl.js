(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tr_tech");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input_param", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "inspClsfCode","type" : "STRING","size" : "32"},{"id" : "inspClsfNm","type" : "STRING","size" : "32"},{"id" : "_dynamicColumnList","type" : "STRING","size" : "32"},{"id" : "_status","type" : "STRING","size" : "32"},{"id" : "_checked","type" : "STRING","size" : "32"},{"id" : "_action","type" : "STRING","size" : "32"}]},"Rows" : [{"inspClsfCode" : "","inspClsfNm" : "All"},{"inspClsfCode" : "EFB","inspClsfNm" : "A.I 검사","_checked" : "0"},{"inspClsfCode" : "NFA","inspClsfNm" : "NAM 검사","_checked" : "0"},{"inspClsfCode" : "NFB","inspClsfNm" : "NAM 검사(NEW)","_checked" : "0"},{"inspClsfCode" : "NFC","inspClsfNm" : "PRI 검사","_checked" : "0"},{"inspClsfCode" : "EUB","inspClsfNm" : "[Bulk] 모니터링 검사","_checked" : "0"},{"inspClsfCode" : "EUA","inspClsfNm" : "[Bulk] 수치검사","_checked" : "0"},{"inspClsfCode" : "EUC","inspClsfNm" : "[Bulk] 실패사례","_checked" : "0"},{"inspClsfCode" : "EFZ","inspClsfNm" : "[JDM] 사양검사","_checked" : "0"},{"inspClsfCode" : "EFI","inspClsfNm" : "기본기능 확대 검사","_checked" : "0"},{"inspClsfCode" : "SFG","inspClsfNm" : "모니터링 검사","_checked" : "0"},{"inspClsfCode" : "EFP","inspClsfNm" : "방수검사","_checked" : "0"},{"inspClsfCode" : "EFQ","inspClsfNm" : "실패사례","_checked" : "0"},{"inspClsfCode" : "SFW","inspClsfNm" : "충전 검사","_checked" : "0"},{"inspClsfCode" : "SF1","inspClsfNm" : "카메라 성능 검사","_checked" : "0"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out1", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "inspClsfCode","type" : "STRING","size" : "32"},{"id" : "inspClsfNm","type" : "STRING","size" : "32"},{"id" : "_dynamicColumnList","type" : "STRING","size" : "32"},{"id" : "_status","type" : "STRING","size" : "32"},{"id" : "_checked","type" : "STRING","size" : "32"},{"id" : "_action","type" : "STRING","size" : "32"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out3", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "inspClsfCode","type" : "STRING","size" : "32"},{"id" : "inspClsfNm","type" : "STRING","size" : "32"},{"id" : "_dynamicColumnList","type" : "STRING","size" : "32"},{"id" : "_status","type" : "STRING","size" : "32"},{"id" : "_checked","type" : "STRING","size" : "32"},{"id" : "_action","type" : "STRING","size" : "32"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input_param1", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "inspClsfCode","type" : "STRING","size" : "32"},{"id" : "inspClsfNm","type" : "STRING","size" : "32"},{"id" : "_dynamicColumnList","type" : "STRING","size" : "32"},{"id" : "_status","type" : "STRING","size" : "32"},{"id" : "_checked","type" : "STRING","size" : "32"},{"id" : "_action","type" : "STRING","size" : "32"}]},"Rows" : [{"inspClsfCode" : "","inspClsfNm" : "All"},{"inspClsfCode" : "EFB","inspClsfNm" : "A.I 검사","_checked" : "0"},{"inspClsfCode" : "NFA","inspClsfNm" : "NAM 검사","_checked" : "0"},{"inspClsfCode" : "NFB","inspClsfNm" : "NAM 검사(NEW)","_checked" : "0"},{"inspClsfCode" : "NFC","inspClsfNm" : "PRI 검사","_checked" : "0"},{"inspClsfCode" : "EUB","inspClsfNm" : "[Bulk] 모니터링 검사","_checked" : "0"},{"inspClsfCode" : "EUA","inspClsfNm" : "[Bulk] 수치검사","_checked" : "0"},{"inspClsfCode" : "EUC","inspClsfNm" : "[Bulk] 실패사례","_checked" : "0"},{"inspClsfCode" : "EFZ","inspClsfNm" : "[JDM] 사양검사","_checked" : "0"},{"inspClsfCode" : "EFI","inspClsfNm" : "기본기능 확대 검사","_checked" : "0"},{"inspClsfCode" : "SFG","inspClsfNm" : "모니터링 검사","_checked" : "0"},{"inspClsfCode" : "EFP","inspClsfNm" : "방수검사","_checked" : "0"},{"inspClsfCode" : "EFQ","inspClsfNm" : "실패사례","_checked" : "0"},{"inspClsfCode" : "SFW","inspClsfNm" : "충전 검사","_checked" : "0"},{"inspClsfCode" : "SF1","inspClsfNm" : "카메라 성능 검사","_checked" : "0"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input_param2", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "inspClsfCode","type" : "STRING","size" : "32"},{"id" : "inspClsfNm","type" : "STRING","size" : "32"},{"id" : "_dynamicColumnList","type" : "STRING","size" : "32"},{"id" : "_status","type" : "STRING","size" : "32"},{"id" : "_checked","type" : "STRING","size" : "32"},{"id" : "_action","type" : "STRING","size" : "32"}]},"Rows" : [{"inspClsfCode" : "","inspClsfNm" : "All"},{"inspClsfCode" : "EFB","inspClsfNm" : "A.I 검사","_checked" : "0"},{"inspClsfCode" : "NFA","inspClsfNm" : "NAM 검사","_checked" : "0"},{"inspClsfCode" : "NFB","inspClsfNm" : "NAM 검사(NEW)","_checked" : "0"},{"inspClsfCode" : "NFC","inspClsfNm" : "PRI 검사","_checked" : "0"},{"inspClsfCode" : "EUB","inspClsfNm" : "[Bulk] 모니터링 검사","_checked" : "0"},{"inspClsfCode" : "EUA","inspClsfNm" : "[Bulk] 수치검사","_checked" : "0"},{"inspClsfCode" : "EUC","inspClsfNm" : "[Bulk] 실패사례","_checked" : "0"},{"inspClsfCode" : "EFZ","inspClsfNm" : "[JDM] 사양검사","_checked" : "0"},{"inspClsfCode" : "EFI","inspClsfNm" : "기본기능 확대 검사","_checked" : "0"},{"inspClsfCode" : "SFG","inspClsfNm" : "모니터링 검사","_checked" : "0"},{"inspClsfCode" : "EFP","inspClsfNm" : "방수검사","_checked" : "0"},{"inspClsfCode" : "EFQ","inspClsfNm" : "실패사례","_checked" : "0"},{"inspClsfCode" : "SFW","inspClsfNm" : "충전 검사","_checked" : "0"},{"inspClsfCode" : "SF1","inspClsfNm" : "카메라 성능 검사","_checked" : "0"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out2222", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "inspClsfCode","type" : "STRING","size" : "32"},{"id" : "inspClsfNm","type" : "STRING","size" : "32"},{"id" : "_dynamicColumnList","type" : "STRING","size" : "32"},{"id" : "_status","type" : "STRING","size" : "32"},{"id" : "_checked","type" : "STRING","size" : "32"},{"id" : "_action","type" : "STRING","size" : "32"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","26","60","389","160",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TR비정상");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","240","402","249",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_out1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"inspClsfCode\"/><Cell col=\"1\" text=\"inspClsfNm\"/><Cell col=\"2\" text=\"_dynamicColumnList\"/><Cell col=\"3\" text=\"_status\"/><Cell col=\"4\" text=\"_checked\"/><Cell col=\"5\" text=\"_action\"/></Band><Band id=\"body\"><Cell text=\"bind:inspClsfCode\"/><Cell col=\"1\" text=\"bind:inspClsfNm\"/><Cell col=\"2\" text=\"bind:_dynamicColumnList\"/><Cell col=\"3\" text=\"bind:_status\"/><Cell col=\"4\" text=\"bind:_checked\"/><Cell col=\"5\" text=\"bind:_action\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","418","240","402","249",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_out2222");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"inspClsfCode\"/><Cell col=\"1\" text=\"inspClsfNm\"/><Cell col=\"2\" text=\"_dynamicColumnList\"/><Cell col=\"3\" text=\"_status\"/><Cell col=\"4\" text=\"_checked\"/><Cell col=\"5\" text=\"_action\"/></Band><Band id=\"body\"><Cell text=\"bind:inspClsfCode\"/><Cell col=\"1\" text=\"bind:inspClsfNm\"/><Cell col=\"2\" text=\"bind:_dynamicColumnList\"/><Cell col=\"3\" text=\"bind:_status\"/><Cell col=\"4\" text=\"bind:_checked\"/><Cell col=\"5\" text=\"bind:_action\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","830","240","402","249",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_out3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"inspClsfCode\"/><Cell col=\"1\" text=\"inspClsfNm\"/><Cell col=\"2\" text=\"_dynamicColumnList\"/><Cell col=\"3\" text=\"_status\"/><Cell col=\"4\" text=\"_checked\"/><Cell col=\"5\" text=\"_action\"/></Band><Band id=\"body\"><Cell text=\"bind:inspClsfCode\"/><Cell col=\"1\" text=\"bind:inspClsfNm\"/><Cell col=\"2\" text=\"bind:_dynamicColumnList\"/><Cell col=\"3\" text=\"bind:_status\"/><Cell col=\"4\" text=\"bind:_checked\"/><Cell col=\"5\" text=\"bind:_action\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","451","50","389","160",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TR정상");
            obj.set_background("pink");
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
        this.registerScript("RP_103514_tr_tech.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	//
        // 	var objHeader = {
        // 		"X-Requested-With": "fetch"
        // 	};
        //
        // 	for (var key in objHeader) {
        // 		if (objHeader.hasOwnProperty(key)) {
        // 			nexacro.setHTTPHeaderVariable(key, objHeader[key]);
        // 		}
        // 	}

        	var sSvcID        = "svcReq";
        	var sURL          = "svcUrl_fetch";
        	var sInDatasets   = "ds_input_param=ds_input_param ds_input_param1=ds_input_param1 ds_input_param2=ds_input_param2";
        	var sOutDatasets  = "ds_out1=ds_input_param ds_out2 =ds_input_param1 ds_out3=ds_input_param2";
        	var sArgument     = "";
        	var sCallbackFunc = "fnCallback";
        	var bAsync        = true;

        	this.transaction( sSvcID ,"http://172.10.12.45:9090/service_jsp/RP_103514_dummyXML.jsp",sInDatasets,sOutDatasets,sArgument,sCallbackFunc,bAsync);
        };

        this.fnCallback = function(sSvcID, iErrorCode, sErrorMsg)
        {
        	trace(iErrorCode);
        	if(iErrorCode < 0){
        		return;
        	}

        	trace(this.ds_out1.saveXML());

        	trace(this.ds_out3.saveXML());
        };


        this.Button00_00_onclick = function(obj,e)
        {
        		var sSvcID        = "svcReq";
        	var sURL          = "svcUrl_fetch";
        	var sInDatasets   = "ds_input_param=ds_input_param ds_input_param1=ds_input_param1 ds_input_param2=ds_input_param2";
        	var sOutDatasets  = "ds_out1=ds_input_param ds_out2222=ds_input_param1 ds_out3=ds_input_param2";
        	var sArgument     = "";
        	var sCallbackFunc = "fnCallback";
        	var bAsync        = true;

        	this.transaction( sSvcID ,"http://172.10.12.45:9090/service_jsp/RP_103514_dummyXML.jsp",sInDatasets,sOutDatasets,sArgument,sCallbackFunc,bAsync);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("RP_103514_tr_tech.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
