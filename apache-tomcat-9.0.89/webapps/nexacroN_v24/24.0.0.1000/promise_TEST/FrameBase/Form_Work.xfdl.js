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

            
            // UI Components Initialize
            obj = new Button("Button00","26","30","349","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("req.then(res => ");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","26","130","349","470",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","486","30","349","90",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","486","130","614","470",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","940","39","199","79",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button02");
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
        this.registerScript("Form_Work.xfdl", function() {
        this.saveUrl = "http://172.10.12.45:9090/updown/";
        this.Button00_onclick = function(obj,e)
        {
        	this.TextArea00.insertText("start transaction-promise\n");
        	const req = this.transaction("list1", this.saveUrl + "ErrorCode_plus_1.do", "", "", "", "", "false", "0");
        	this.TextArea00.insertText("run transaction promise\n");
        	// 결과 처리
        	if(req)
        	{
        		req.then(res => { //message
        			//this.callback_transaction(res.serviceId, res.errorCode, res.errorMsg);
        			this.TextArea00.insertText("transaction success res => "+res+"\n");
        		}).catch(err => this.TextArea00_00.insertText("catch 실패:", err.errorMsg+"\n"));

        	}
        	else
        		this.TextArea00.insertText("return error \n");
        };

        this.Button01_onclick = function(obj,e)
        {
        	const serviceId = "list2";
        	this.TextArea00_00.insertText("start transaction-promise\n");
        	const req = this.transaction(serviceId, this.saveUrl + "ErrorCode_plus_100.do", "", "", "", "", "false", "0");
        	this.TextArea00_00.insertText("run transaction promise\n");
        	// 결과 처리
        	if(req)
        	{
        		req.then(([errorCode, errorMsg]) => {
        			this.TextArea00_00.insertText("transaction success code : "+errorCode+", msg : "+errorMsg+"\n");
        			this.callback_transaction(serviceId, errorCode, errorMsg);
        		}).catch(err => this.TextArea00_00.insertText("catch 실패:", err.errorMsg,"\n"));

        		this.TextArea00_00.insertText("return download-promise end\n");
        	}
        	else
        		this.TextArea00_00.insertText("return error\n");
        };
        this.callback_transaction = function(serviceId, errorCode, errorMsg)
        {
        	this.TextArea00_00.insertText("callback_transaction 실행 serviceId : "+serviceId+", errorCode : "+errorCode+", errorMsg : "+errorMsg+"\n");
        }
        this.Button02_onclick = function(obj,e)
        {
        	alert(system.navigatorfullname+"\n"+system.navigatorname+"\n"+system.navigatorversion+"\n");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
