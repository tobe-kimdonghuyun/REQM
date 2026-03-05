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
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "IDX","type" : "string","size" : "5"},{"id" : "ObjectName","type" : "string","size" : "100"},{"id" : "ObjectID","type" : "string","size" : "200"},{"id" : "TestType","type" : "string","size" : "8"},{"id" : "TestObject","type" : "string","size" : "10"},{"id" : "TestValue","type" : "string","size" : "100"},{"id" : "ResultValue","type" : "string","size" : "10"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","54","100","166","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Legacy Form TR");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","236","93","344","311",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"IDX\"/><Cell col=\"1\" text=\"ObjectName\"/><Cell col=\"2\" text=\"ObjectID\"/><Cell col=\"3\" text=\"TestType\"/><Cell col=\"4\" text=\"TestObject\"/><Cell col=\"5\" text=\"TestValue\"/><Cell col=\"6\" text=\"ResultValue\"/></Band><Band id=\"body\"><Cell text=\"bind:IDX\"/><Cell col=\"1\" text=\"bind:ObjectName\"/><Cell col=\"2\" text=\"bind:ObjectID\"/><Cell col=\"3\" text=\"bind:TestType\"/><Cell col=\"4\" text=\"bind:TestObject\"/><Cell col=\"5\" text=\"bind:TestValue\"/><Cell col=\"6\" text=\"bind:ResultValue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","50","10","709","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회 1 버튼으로 조회 하고, 조회2 버튼으로 재조회시 row가 0 건인 경우 서비스가 error 로 처리됩니다.");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","50","232","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("transactionpromise");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","50","298","170","68",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("await / async ");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","53","172","165","52",null,null,null,null,null,null,this);
            obj.set_taborder("5");
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
        this.registerScript("RP_103906_promisetest_trasaction.xfdl", function() {
        this.callbackFunction = function(svcId, err, msg)
        {

        	trace(this.Dataset03.rowcount);
        	this.Grid00.set_enableredraw(false);
        	if(this.Dataset03.getRowCount()!= 0 ) {
        		this.Grid00.setRealRowSize( 0, 10);
        	}
        	this.Grid00.set_enableredraw(true);
        	trace("callbackFunction : ", svcId, err, msg);


        };

        this.callbackFunction2 = function(svcId, err)
        {

        	trace(this.Dataset03.rowcount);
        	this.Grid00.set_enableredraw(false);
        	if(this.Dataset03.getRowCount()!= 0 ) {
        		this.Grid00.setRealRowSize( 0, 10);
        	}
        	this.Grid00.set_enableredraw(true);
        	trace("callbackFunction : ", svcId, err);


        };

        this.Button00_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";

        	//this.transaction( "MyService01","http://172.10.12.36:8080/testJSP/test1.jsp","input1=Dataset02","Dataset03=output",sArgs,"callbackFunction",false,0, true);
        	trace("check sync");
        	this.transaction( "MyService01","http://172.10.12.36:8080/testJSP/test1.jsp","input1=Dataset02","Dataset03=output",sArgs,"callbackFunction",true,0, true);
        trace("check sync2");
        };

        this.Button02_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";
        	const req = this.transaction("MyService01","http://172.10.12.36:8080/testJSP/test1.jsp","input1=Dataset02","Dataset03=output",sArgs, "", false,0, true);
        	if(req)
        	{
        		req.then(res => { //message
        			this.callbackFunction("MyService01", res);
        		})
        			.catch(err => trace("실패:", err));
        	}
        };


        async function loadData(form)
        {
            try {
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";
                // transaction 호출 후 결과가 반환될 때까지 기다림
                const res = await form.transaction("MyService01","http://172.10.12.36:8080/testJSP/test1.jsp","input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);

                // 절차적으로 순서대로 실행됨
                trace("✅ 사용자 조회 완료:", res.serviceId, res.errorCode, res.errorMsg);

                // Dataset 활용 가능
                if (form.Dataset03.getRowCount() > 0) {
                    trace("첫 번째 사용자명:", form.Dataset03.getColumn(0, "IDX"));
                }
        		return res;
            } catch (err) {
                trace("❌ 사용자 조회 실패");
            }
        }

        this.Button03_onclick = function(obj,e)
        {
        	var res = loadData(this);

        	trace(this.Dataset03.rowcount);
        	this.Grid00.set_enableredraw(false);
        	if(this.Dataset03.getRowCount()!= 0 ) {
        		this.Grid00.setRealRowSize( 0, 10);
        	}
        	this.Grid00.set_enableredraw(true);
        	trace("callbackFunction : ", res.svcid, res.errstatus, res.message);
        };


        this.Button06_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";
        	const req = nexacro.getApplication().transaction("MyService01","http://172.10.12.36:8080/testJSP/test1.jsp","input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);

        	// 결과 처리
        	req.then(res => { //message
                this.callbackFunction(res.svcid, res.errstatus, res.message);
            })
        		.catch(err => trace("실패:", err.message));
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
        };
        this.loadIncludeScript("RP_103906_promisetest_trasaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
