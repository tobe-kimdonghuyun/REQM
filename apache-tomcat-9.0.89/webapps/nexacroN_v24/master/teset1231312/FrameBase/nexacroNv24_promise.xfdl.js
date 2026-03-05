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
            obj = new Button("Button00","40","38","240","82",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("promise");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","309","40","301","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","38","142","588","337",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
        this.registerScript("nexacroNv24_promise.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var sID = "test"
        	const req = this.transaction(sID,"http://172.10.12.45:9090/updown/ErrorCode_plus_100.do","","","");

        	if (req)
        	{
        		req.then(res => {
        			this.TextArea00.insertText("✅ 사용자 조회 완료: req.then 이후 확인 res= ["+res+"]\n");
        			this.fn_callback(sID,res[0], res[1]);

        		}).catch(err => this.TextArea00.insertText(sID+"  upload-promise error:"+ err.errorMsg));

        	}
        	else
        		this.TextArea00.insertText("return upload-promise error\n");

        };
        this.fn_callback = function(sID,ErrorCode,ErrorMsg)
        {
        	this.TextArea00.insertTexte("sID = "+sID+", errorcode = "+ErrorCode+", errormsg = "+ErrorMsg+"\n");
        }
        this.Button01_onclick = function(obj,e)
        {
        	const req = this.transaction("test_promise2","http://172.10.12.45:9090/updown/ErrorCode_minus_100.do","","","");

        	if (req)
        	{
        		req.then(([ErrorCode,ErrorMsg]) => {
        			trace("✅ 사용자 조회 완료: req.then 이후 확인 errorcode= [",ErrorCode,"], errormessage = [",ErrorMsg ,"]");
        			this.fn_callback(ErrorCode, ErrorMsg);

        		}).catch(err => trace("  upload-promise error:", err.errorMsg));

        	}
        	else
        		trace("return upload-promise error");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("nexacroNv24_promise.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
