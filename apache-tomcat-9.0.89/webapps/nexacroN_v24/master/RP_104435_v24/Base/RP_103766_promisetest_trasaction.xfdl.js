(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("select_setrealrowsize");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset02", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset03", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DOMAIN","type" : "string","size" : "255"},{"id" : "MODEL","type" : "string","size" : "255"},{"id" : "DESCRIPTION","type" : "string","size" : "255"},{"id" : "DATASOURCE","type" : "string","size" : "255"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","54","100","166","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Legacy Form TR");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","236","93","344","311",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DOMAIN\"/><Cell col=\"1\" text=\"MODEL\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"DATASOURCE\"/></Band><Band id=\"body\"><Cell text=\"bind:DOMAIN\"/><Cell col=\"1\" text=\"bind:MODEL\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:DATASOURCE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","50","232","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("transactionpromise");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","50","298","170","68",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("await / async ");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","53","172","165","52",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("application tr");
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
        this.registerScript("RP_103766_promisetest_trasaction.xfdl", function() {
        this.callbackFunction = function(svrid, err, msg)
        {
        	trace("callbackFunction : svrid ",svrid,", err : ", err,", msg : "+msg)
        };

        this.Button00_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue ";
        	sArgs += " username="+ "테스트";
        	trace("check sync");
        	this.transaction( "MyService01","https://support.tobesoft.co.kr/Next_JSP/Test/EduServiceList.jsp","input1=Dataset02","Dataset03=output",sArgs,"callbackFunction",true);
        	trace("check sync2");
        };

        this.Button02_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue ";
        	sArgs += " username="+ "테스트";
        	var svrid = "MyService01"
        	const req = this.transaction(svrid,"http://172.10.12.45:9090/service_jsp/B_TR_XML.jsp","input1=Dataset02","Dataset03=output",sArgs, "", false);
        	trace(req);
        	// 결과 처리
        	if(req)
        	{
        		req.then(res=> { //message
        			//this.callbackFunction(svrid, res[0],res[1]);
        			this.callbackFunction(svrid, res.a[0],res.a[1]);
        		})
        			.catch(([code,msg]) => trace("실패:", code, msg));
        	}

        };

        async function loadData(form)
        {
            try {
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";
                // transaction 호출 후 결과가 반환될 때까지 기다림
                const res = await form.transaction("MyService01","https://support.tobesoft.co.kr/Next_JSP/Test/EduServiceList.jsp","input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);
                // 절차적으로 순서대로 실행됨
                trace("✅ 사용자 조회 완료:", res.serviceId, res.errorCode, res.errorMsg);
        		return res;
            } catch (err) {
                trace("❌ 사용자 조회 실패");
            }
        }

        this.Button03_onclick = function(obj,e)
        {
        	var res = loadData(this);
        	trace("1111111 callbackFunction : code ",code,", msg : ", msg);
        };

        this.Button06_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";
        	const req = nexacro.getApplication().transaction("MyService01","https://support.tobesoft.co.kr/Next_JSP/Test/EduServiceList.jsp","input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);

        	// 결과 처리
        	req.promise.then(res => { //message
                this.callbackFunction(res.svcid, res.errstatus, res.message);
            })
        		.catch(err => trace("실패:", err.message));
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
        };
        this.loadIncludeScript("RP_103766_promisetest_trasaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
