(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("promisetest_form_transaction");
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
            obj = new Grid("Grid00","36","29","564","311",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"IDX\"/><Cell col=\"1\" text=\"ObjectName\"/><Cell col=\"2\" text=\"ObjectID\"/><Cell col=\"3\" text=\"TestType\"/><Cell col=\"4\" text=\"TestObject\"/><Cell col=\"5\" text=\"TestValue\"/><Cell col=\"6\" text=\"ResultValue\"/></Band><Band id=\"body\"><Cell text=\"bind:IDX\"/><Cell col=\"1\" text=\"bind:ObjectName\"/><Cell col=\"2\" text=\"bind:ObjectID\"/><Cell col=\"3\" text=\"bind:TestType\"/><Cell col=\"4\" text=\"bind:TestObject\"/><Cell col=\"5\" text=\"bind:TestValue\"/><Cell col=\"6\" text=\"bind:ResultValue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","618","80","152","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("promise transaction");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","618","30","152","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("legacy transaction");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","618","130","152","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("await");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","618","180","152","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("NO");
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
        this.registerScript("RP_104118_promisetest_form_transaction1.xfdl", function() {

        this.callbackFunction1 = function(svcId, err, msg)
        {
        	trace("Form callbackFunction : ", "serviceId-"+svcId, "errorCode-"+err, "errorMsg-"+msg);
        };
        this.Button00_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";
        	const req = this.transaction("promise","http://172.10.12.45:9090/service_jsp/RP_104118_select_setrealrowsize_nexacrojsp.jsp","","Dataset03=output",sArgs, "", true,0, true);
        	trace("tran req before then - "+req);
        	// 결과 처리
        	if(req)
        	{
        		req.then(res => { //message
        			this.callbackFunction1(res);
        			trace("promise success!!");
        		}).catch(err => trace("실패:", err.errorMsg));
        	}
        	trace("tran req after then - "+req);
        };

        this.callbackFunction2 = function(svcId, err, msg)
        {
        	trace(this.Dataset03.rowcount);
        	this.Grid00.set_enableredraw(false);
        	if(this.Dataset03.getRowCount()!= 0 ) {
        		this.Grid00.setRealRowSize( 0, 10);
        	}
        	this.Grid00.set_enableredraw(true);
        	trace("Form callbackFunction : ", "serviceId-"+svcId, "errorCode-"+err, "errorMsg-"+msg);
        };
        this.Button00_00_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";
        	this.transaction("legacy","http://172.10.12.45:9090/service_jsp/RP_104118_select_setrealrowsize_nexacrojsp.jsp","","Dataset03=output",sArgs, "callbackFunction2", true,0, true);
        };

        async function loadData(form, isAsync)
        {
            try {
        		let sArgs = "userid="+ "blue";
        		sArgs += " username="+ "테스트";

                // transaction 호출 후 결과가 반환될 때까지 기다림
        		var res = null;
        		if (isAsync) {
        			res = await form.transaction("myservice01","http://172.10.12.45:9090/service_jsp/RP_104118_select_setrealrowsize_nexacrojsp.jsp","input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);
        			trace("await transaction : "+res);

        		} else {
        			res = form.transaction("myservice02","http://172.10.12.45:9090/service_jsp/RP_104118_select_setrealrowsize_nexacrojsp.jsp","input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);
        		}

                // 절차적으로 순서대로 실행됨
                trace("✅ 사용자 조회 완료:", res.serviceId, res.errorCode, res.errorMsg);

                // Dataset 활용 가능
                if (form.Dataset03.getRowCount() > 0) {
                    trace("첫 번째 사용자명:", form.Dataset03.getColumn(0, "IDX"));
                }
        		return res;
            } catch (err) {
                trace("❌ 사용자 조회 실패 :"+err);
            }
        }
        this.Button00_01_onclick = function(obj,e)
        {
        	var res = loadData(this, true);
        };


        this.Button01_onclick = function(obj,e)
        {
        	var res = loadData2(this, true);
        };
        async function loadData2(form, isAsync)
        {
            try {
        		let sArgs = "userid="+ "blue";
        		sArgs += " username="+ "테스트";

                // transaction 호출 후 결과가 반환될 때까지 기다림
        		var res = null;
        		if (isAsync) {
        			 res = form.transaction("myservice01","http://172.10.12.45:9090/service_jsp/RP_104118_select_setrealrowsize_nexacrojsp.jsp","input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);
        			trace(" form.transaction : "+res);

        		} else {
        			res = form.transaction("myservice02","http://172.10.12.45:9090/service_jsp/RP_104118_select_setrealrowsize_nexacrojsp.jsp","input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);
        		}

                // 절차적으로 순서대로 실행됨
                trace("✅ 사용자 조회 완료:", res.serviceId, res.errorCode, res.errorMsg);

                // Dataset 활용 가능
                if (form.Dataset03.getRowCount() > 0) {
                    trace("첫 번째 사용자명:", form.Dataset03.getColumn(0, "IDX"));
                }
        		return res;
            } catch (err) {
                trace("❌ 사용자 조회 실패 :"+err);
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_01.addEventHandler("onclick",this.Button00_01_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("RP_104118_promisetest_form_transaction1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
