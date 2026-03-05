(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("transaction_promise");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","12","14","208","86",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("req.then(([errorcode,errormessage])");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","440","14","208","86",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("req.then(([errorcode,errormessage])");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","123","395","207",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","15","340","715","360",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","420","124","394","206",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","834","12","319","95",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button01");
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
        this.registerScript("transaction_promise.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	const serviceID = "promise_test1";
        	trace("start upload-promise1");
        	const req = this.transaction(serviceID,"http://172.10.12.45:9090/updown/ErrorCode_plus_1.do","","Dataset00=dsMenu","","");
        	trace("run upload-promise");
        	this.TextArea00.deleteText();
        	if (req)
        	{
        		req.then(([errorcode,errormessage]) => {
        			this.TextArea00.insertText("✅ 사용자 조회 완료: req.then 이후 확인 errorcode= ["+errorcode+"], errormessage = ["+errormessage +"]\n");
        			this.callbackFunction1(serviceID,errorcode, errormessage);

        		}).catch(err => this.TextArea00.insertText(sID+"  upload-promise error:"+ err.errorMsg+"\n"));

        	}
        	else
        		this.TextArea00.insertText("return upload-promise error req : "+req+"\n");
        };
        this.callbackFunction1 = function (serviceID, errorcode, errormessage)
        {

        	this.TextArea00.insertText("callbackFunction1 function serviceID : "+serviceID+", errorcode : "+errorcode+", errormessage : "+errormessage+"\n");
        	this.Grid00.createFormat();
        }
        this.callbackFunction2 = function (serviceID, errorcode, errormessage)
        {

        	this.TextArea00.insertText("callbackFunction2 function serviceID : "+serviceID+", errorcode : "+errorcode+", errormessage : "+errormessage+"\n");
        	this.Grid01.createFormat();
        	//this.Grid01.createFormat();
        }
        this.Button00_00_onclick = function(obj,e)
        {
        	const serviceID = "promise_test2";
        	this.TextArea00.deleteText();
        	var req = this.transaction(serviceID,"http://172.10.12.45:9090/updown/ErrorCode_plus_100.do","","Dataset01=dsMenu","","");

        	if (req)
        	{
        		req.then(res => {
        			this.TextArea00.insertText("✅ 사용자 조회 완료: req.then 이후 확인 res= ["+res+"]\n");
        			this.callbackFunction2(serviceID,errorcode, errormessage);

        		}).catch(err => this.TextArea00.insertText(serviceID+"  upload-promise error:"+err.errorMsg));

        	}
        	else
        		this.TextArea00.insertText("return upload-promise error req : "+req+"\n");
        };

        this.Button01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("transaction_promise.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
