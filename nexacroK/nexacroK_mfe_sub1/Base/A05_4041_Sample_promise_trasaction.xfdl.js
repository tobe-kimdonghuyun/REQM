(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("select_setrealrowsize");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset02", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset03", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "DOMAIN","size" : "255","type" : "string"},{"id" : "MODEL","size" : "255","type" : "string"},{"id" : "DESCRIPTION","size" : "255","type" : "string"},{"id" : "DATASOURCE","size" : "255","type" : "string"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","54","100","166","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Legacy Form TR");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","236","93","344","211",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset03");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DOMAIN\"/><Cell col=\"1\" text=\"MODEL\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"DATASOURCE\"/></Band><Band id=\"body\"><Cell text=\"bind:DOMAIN\"/><Cell col=\"1\" text=\"bind:MODEL\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:DATASOURCE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","50","172","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("transactionpromise");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","50","238","170","68",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("await / async ");
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
        this.registerScript("A05_4041_Sample_promise_trasaction.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue ";
        	sArgs += " username="+ "테스트";
        	trace("check sync");
        	this.transaction( "MyService01","https://support.tobesoft.co.kr/Next_JSP/Test/EduServiceList.jsp","input1=Dataset02","Dataset03=output",sArgs,"callbackFunction");
        	trace("check sync2");
        };

        this.Button02_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue ";
        	sArgs += " username="+ "테스트";
        	var svrid = "MyService01"
        	const req = this.transaction(svrid,"https://support.tobesoft.co.kr/Next_JSP/Test/EduServiceList.jsp","input1=Dataset02","Dataset03=output",sArgs, "");
        	// 결과 처리
        	if(req)
        	{
        		req.then(([code,msg]) => { //message
        			//this.callbackFunction(svrid, res[0],res[1]);
        			this.callbackFunction(svrid, code, msg);
        		})
        			.catch(([code,msg]) => trace("실패:", code, msg));
        	}
        };

        this.Button03_onclick = function(obj,e)
        {
        	var res = loadData(this);
        };

        async function loadData(form)
        {
            try {
        		let sArgs = "userid="+ "blue";
        		sArgs += " username="+ "테스트";
                // transaction 호출 후 결과가 반환될 때까지 기다림
                const [code,msg] = await form.transaction("MyService01","https://support.tobesoft.co.kr/Next_JSP/Test/EduServiceList.jsp","input1=Dataset02","Dataset03=output",sArgs, "");
                // 절차적으로 순서대로 실행됨
                trace("✅ 사용자 조회 완료:", code, msg);
            } catch (err) {
                trace("❌ 사용자 조회 실패:");
            }
        }

        this.callbackFunction = function(svrid, err, msg)
        {
        	trace("callbackFunction > svrid :",svrid,", err : ", err,", msg : "+msg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };

        this.loadIncludeScript("A05_4041_Sample_promise_trasaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
