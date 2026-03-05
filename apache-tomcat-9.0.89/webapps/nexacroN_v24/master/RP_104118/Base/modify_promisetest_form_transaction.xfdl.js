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
            obj.set_text("NO_await");
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
        this.registerScript("RP_104118_promisetest_form_transaction1_copy0.xfdl", function() {
        this.sURL = "http://172.10.12.45:9090/service_jsp/RP_104118_select_setrealrowsize_nexacrojsp.jsp";
        this.callbackFunction1 = function(errorcode, errormessage)
        {
        	//trace("Promise Form callbackFunction : ", "serviceId-"+svcId, "errorCode-"+err, "errorMsg-"+msg);
        	trace("Promise Form callbackFunction : ", "errorcode-",errorcode, "errormessage-",errormessage);
        };
        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset03.clearData();
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";
        	let sID = "promise";
        	const req = this.transaction(sID,this.sURL,"","Dataset03=output",sArgs, "", true,0, true);
        	trace("tran req before then - "+req);
        	// 결과 처리
        	if(req)
        	{
        		req.then(([errorcode,errormessage]) => {
        			this.callbackFunction1(errorcode, errormessage);
        			trace("✅ 사용자 조회 완료:errorcode= [",errorcode,"], errormessage = [",errormessage ,"]");
        		}).catch(err => trace(sID," Promise 실패:", err.errorMsg));
        	}
        	trace(sID," Promise tran req after then - "+req);
        };

        this.callbackFunction2 = function(svcId, err, msg)
        {
        	trace(svcId, "Legacy Form callbackFunction : ", "serviceId-"+svcId, "errorCode-"+err, "errorMsg-"+msg);
        };
        this.Button00_00_onclick = function(obj,e)
        {
        	this.Dataset03.clearData();
        	let sArgs = "userid="+ "blue";
        	sArgs += " username="+ "테스트";
        	let sID = "legacy";
        	this.transaction(sID,this.sURL,"","Dataset03=output",sArgs, "callbackFunction2", true,0, true);
        };
        this.Button00_01_onclick = function(obj,e)
        {
        	this.Dataset03.clearData();
        	var res = loadData(this, true,obj.text);
        };
        this.Button01_onclick = function(obj,e)
        {
        	this.Dataset03.clearData();
        	var res = loadData(this, true,obj.text);
        };
        async function loadData(form, isAsync,sText)
        {
        	let pURL ="http://172.10.12.45:9090/service_jsp/RP_104118_select_setrealrowsize_nexacrojsp.jsp" ;
        	if(sText == "await")
        	{
        		try {
        			let sArgs = "userid="+ "blue";
        			sArgs += " username="+ "테스트";

        			// transaction 호출 후 결과가 반환될 때까지 기다림
        			var res = null;
        			if (isAsync) {
        				const [errorcode, errormessage] = await form.transaction(sText,pURL,"input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);

        				trace("1. await transaction : "+res);
        				trace("✅ 사용자 조회 완료:errorcode= [",errorcode,"], errormessage = [",errormessage ,"]");

        			} else {
        				res = form.transaction(sText,this.sURL,"input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);
        			}

        			// 절차적으로 순서대로 실행됨


        			// Dataset 활용 가능
        			if (form.Dataset03.getRowCount() > 0) {
        				trace("1. await첫 번째 사용자명:", form.Dataset03.getColumn(0, "IDX"));
        			}
        			return res;
        		} catch (err) {
        			trace("1. await❌ 사용자 조회 실패 :"+err);
        		}
        	}else if(sText =="NO_await")
        	{
        		try
        		{
        			let sArgs = "userid="+ "blue";
        			sArgs += " username="+ "테스트";

        			// transaction 호출 후 결과가 반환될 때까지 기다림
        			var res = null;
        			if (isAsync) {
        				 res = form.transaction(sText,pURL,"input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);
        				 //위구문은 promise로 동작(transaction 메뉴얼 return 참고), aync 동작으로 통신은 완료되지 않았기 때문에  promise객체만 넘어오고 code msg는 없는게 정상
        				 // return을 받고자 하면 req.then 처리해야함
        				trace(sText,"2. NO_await form.transaction : "+res);
        				//trace("사용자 조회 완료: res[0]= [",res[0],"], res[1] = [",res[1] ,"]");

        			} else {
        				res = form.transaction(sText,pURL,"input1=Dataset02","Dataset03=output",sArgs, "", true,0, true);
        			}

        			// 절차적으로 순서대로 실행

        			// Dataset 활용 가능
        			if (form.Dataset03.getRowCount() > 0) {
        				trace("2. NO_await 첫 번째 사용자명:", form.Dataset03.getColumn(0, "IDX"));
        			}
        			return res;
        		} catch (err) {
        			trace("❌ 사용자 조회 실패 :"+err);
        		}
        	}
        }
        this.callbackFunction3= function(result)
        {
        	//trace("Promise Form callbackFunction : ", "serviceId-"+svcId, "errorCode-"+err, "errorMsg-"+msg);
        	trace("Promise Form callbackFunction : ", "result[0]-"+result[0], "result[1]-"+result[1]);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_01.addEventHandler("onclick",this.Button00_01_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("RP_104118_promisetest_form_transaction1_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
