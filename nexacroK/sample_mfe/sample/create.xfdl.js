(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("create");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","516","44","134","66",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","516","124","134","66",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo01","513","200","134","66",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("onclick").set("Combo01_onclick");
            obj.set_taborder("1");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]});
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","676","47","121","57",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("setTimer 01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02_00","676","120","121","57",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("setTimer 02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02_01","676","180","121","57",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("get NexaView01.mainframe");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("NexacroPortal01","100","300","500","300",null,null,null,null,null,null,this);
            obj.set_appkey("WWWW1");
            obj.set_apppath("http://172.10.12.23:8080/nexacro/XP17_Master/NKNAV_sample");
            obj.getSetter("onclick").set("NexaView01_onclick");
            obj.set_taborder("5");
            obj.getSetter("text").set("NexacroPortal01");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("NexacroPortal02","600","300","500","300",null,null,null,null,null,null,this);
            obj.set_appkey("WWWW");
            obj.set_apppath("http://172.10.12.23:8080/nexacro/XP17_Master/NKNAV_sample");
            obj.set_formurl("Contents::contents_Div.xfdl");
            obj.getSetter("onclick").set("NexaView01_onclick");
            obj.set_taborder("5");
            obj.getSetter("text").set("NexacroPortal02");
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
        this.registerScript("create.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {


        trace("nexacro.__peekCurrentEnvironment():"+ nexacro.__peekCurrentEnvironment ?  nexacro.__peekCurrentEnvironment().appkey : "noexist");
        trace("environment.appkey:"+ environment.appkey);
        //trace("application.id:"+ application.id);
        //trace("system.navigatorname:"+system.navigatorname);
        this.test();

        };

        this.test = function()
        {

        	var aa = new nexacro.Button;
          aa.initvalueid = "iv_Button0"
        	aa.text = "BUTTON";

        	aa.init("btn", 10, 10, 200, 200);
        	this.addChild(aa.id, aa);
        	aa.show();


        aa = new nexacro.Combo;
          aa.initvalueid = "iv_Button0"
        	aa.text = "BUTTON";

        	aa.init("Combo02", 10, 210, 200, 200);
        	this.addChild(aa.id, aa);
        	aa.show();
        }


        this.Button01_onclick = function(obj,e)
        {

        trace(this.Combo01 instanceof nexacro.Combo);
        trace(this.Combo02 instanceof nexacro.Combo);


        trace("environment.appkey:"+ environment.appkey);
        trace("application.id:"+ application.id);
        trace("system.navigatorname:"+system.navigatorname);

        var aa = new nexacro.Edit("aa",210, 210, 200, 200);
          aa.initvalueid = "iv_Edit0"
        	aa.value = "EDIT";

        //	aa.init("edit", 210, 210, 200, 200);
        	this.addChild(aa.id, aa);
        	aa.show();
        };


        this.create_ontimer = function(obj,e)
        {
        trace("environment.appkey:"+ environment.appkey);

        if (nexacro.__peekCurrentEnvironment)
          trace("nexacro.__peekCurrentEnvironment().appkey:" + nexacro.__peekCurrentEnvironment().appkey + " " + e.timerid);

          if (e.timerid > 0)
          {
            trace("ontimer:"+ e.timerid);
            this.killTimer(e.timerid);
          }

            // 간단한 Promise 샘플
          if (e.timerid == 1)
          {
            var that = this;
            var promiseSample = new Promise(function(resolve, reject) {
              // resolve, reject 를 this._resolve, th

              trace("Promise 시작");
              var result = true;	// 테스트용
              if(result) {
                  resolve("성공했습니다.");
              } else {
                reject("실패했습니다.");
              }
            });

            promiseSample
              .then(function(msg) {
                trace("Promise then: " + msg);
                  var aa = new nexacro.Button("then",210, 10, 200, 200);
              aa.initvalueid = "iv_Button0"
              aa.text = msg;
              that.addChild(aa.id+"_"+Math.random(), aa);
              aa.show();

            //   nexacro.__pushCurrentEnvironment(environment, "promiseSample");
              // that._resolve(msg + " " +  e.timerid);
            //   nexacro.__popCurrentEnvironment(environment, "promiseSample");
              })
              .catch(function(err) {
                trace("Promise catch: " + err);
            //   nexacro.__pushCurrentEnvironment(environment, "promiseSample");
                that._reject(err + " " +  e.timerid);
            //   nexacro.__popCurrentEnvironment(environment, "promiseSample");
              });
          }
          else if (e.timerid == 2)
          {
            var that = this;
            requestAnimationFrame(function() {
              trace("requestAnimationFrame: " + e.timerid);
              var a = new nexacro.Button;
              a.initvalueid = "iv_Button0"

              a.init("btn0000"+Math.random(), 10, 510, 200, 200);
              a.text = a.id + " " + "requestAnimationFrame";
            a.fittocontent = "width";
              that.addChild(a.id, a);
              a.show();
            });
          }
          else if (e.timerid == 3)
          {
            var that = this;
            queueMicrotask(() => {
              trace("queueMicrotask: " + e.timerid);
              var a = new nexacro.Button;
              a.initvalueid = "iv_Button0"

              a.init("btn_microtask_"+Math.random(), 10, 610, 200, 200);
              a.text = a.id + " " + "microtask";
              a.fittocontent = "width";
              that.addChild(a.id, a);
              a.show();
            });
          }
        };


        this._resolve = function(msg)
        {
          var env = nexacro.getEnvironment();
          if (env)
          trace("Promise resolve: " + env.appkey + " " + msg);
        else
          trace("Promise resolve: " + "no environment" + " " + msg);

          //trace("Promise resolve: " + msg);
          var a = new nexacro.Button;
          a.initvalueid = "iv_Button0"

          a.init("btn0000"+Math.random(), 10, 510, 200, 200);
          a.text = a.id + " " + msg;
          this.addChild(a.id, a);
          a.show();
        };

        this._reject = function(err)
        {
          trace("Promise _reject: " + err);
          var a = new nexacro.Button;
          a.initvalueid = "iv_Button0"

          a.init("btn0001"+Math.random(), 10, 710, 200, 200);
          a.text = a.id + " " + err;
          this.addChild(a.id, a);
          a.show();
        };



        this.Button02_onclick = function(obj,e)
        {
        	this.setTimer(1, 1000);
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.setTimer(2, 1000);
        };

        this.Button04_onclick = function(obj,e)
        {
        	trace(this.NexacroPortal01.mainframe.frame.id);
          trace(this.NexacroPortal02.form.id);
        };

        this.create_onload = function(obj,e)
        {
        	///this.setTimer(3, 1000);

          var aa = new nexacro.Button;
        aa.initvalueid = "iv_Button0"


        	aa.init("edit", 0, 0, 200, 200);
          	aa.text = aa.id + " " + "create_onload";
            aa.fittocontents = "width";
        	this.addChild(aa.id, aa);
        	aa.show();
        };

        this.create_oninit = function(obj,e)
        {
        	this.NexacroPortal01.appkey = "WWWW";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.create_oninit,this);
            this.addEventHandler("onload",this.create_onload,this);
            this.addEventHandler("ontimer",this.create_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button02_01.addEventHandler("onclick",this.Button04_onclick,this);
        };

        this.loadIncludeScript("create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
