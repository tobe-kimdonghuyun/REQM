(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("transaction_promise");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","12","14","198","86",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","15","123","715","297",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","253","16","390","90",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("transaction_promise.xfdl", function(nexacro, system, trace) {

        this.Button00_onclick = function(obj,e)
        {
        	const serviceID = "promise_test";
        	trace("start upload-promise");
        	const req = this.transaction(serviceID,"http://172.10.12.45:9090/updown/ErrorCode_plus_1.do","","Dataset00=dsMenu","","");
        	trace("run upload-promise");
        	if (req)
        	{
        		req.then(([errorcode,errormessage]) => {
        			trace("✅ 사용자 조회 완료: req.then 이후 확인 errorcode= [",errorcode,"], errormessage = [",errormessage ,"]");
        			this.callbackFunction1(serviceID,errorcode, errormessage);

        		}).catch(err => trace(sID,"  upload-promise error:", err.errorMsg));

        	}
        	else
        		trace("return upload-promise error");
        };
        this.callbackFunction1 = function (serviceID, errorcode, errormessage)
        {
        	this.TextArea00.deleteText()
        	this.TextArea00.insertText("serviceID : "+serviceID+", errorcode : "+errorcode+", errormessage : "+errormessage);
        	this.Grid00.createFormat();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("transaction_promise.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
