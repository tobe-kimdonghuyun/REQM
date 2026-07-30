(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ButtonSample");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("stc_title","10","10","500","28",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_font("bold 14 \'Malgun Gothic\'");
            obj.set_taborder("0");
            obj.set_text("Button 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("[Button 생성] 클릭 → new nexacro.Button()으로 동적 생성. 생성된 버튼 클릭 시 동작 확인.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","74","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","130","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_count","234","80","120","22",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_taborder("4");
            obj.set_text("생성 수: 0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","370","80","700","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_area_label","10","116","400","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("6");
            obj.set_text("▼ 동적 생성 영역 (버튼 클릭 시 알림 발생)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div_area","10","140","1250","510",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","540","21","133","39",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Button0");
            obj.set_taborder("8");
            obj.set_text("iv_Button0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","690","20","128","37",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Button1");
            obj.set_taborder("9");
            obj.set_text("iv_Button1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div_area
            obj = new nexacro.Layout("default","",0,0,this.div_area.form,function(p){});
            this.div_area.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ButtonSample.xfdl", function(nexacro, system, trace, environment, application) {

        // var 선언 대신 this.nBtnCount (Form 속성)으로 관리
        // 이유: nexacro 이벤트 핸들러는 this=Form 컨텍스트로 실행되므로
        //       var 클로저 변수는 핸들러 간 공유가 보장되지 않음

        this.ButtonSample_onload = function(obj, e)
        {
            this.nBtnCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("");
        };

        this.btn_create_onclick = function(obj, e)
        {
            this.nBtnCount++;
            var nCol  = (this.nBtnCount - 1) % 6;
            var nRow  = Math.floor((this.nBtnCount - 1) / 6);
            var nLeft = nCol * 205 + 5;
            var nTop  = nRow * 50 + 5;

            // new nexacro.Button() 으로 동적 생성
            var objBtn = new nexacro.Button("btn_dyn_" + this.nBtnCount, nLeft, nTop, 190, 38, null, null);
            objBtn.set_text("동적버튼 " + this.nBtnCount);
            this.div_area.addChild("btn_dyn_" + this.nBtnCount, objBtn);
        	if((this.nBtnCount % 2)==0)
        		objBtn.initvalueid = "iv_Button0";
        	else
        		objBtn.initvalueid = "iv_Button1";
            objBtn.show();
            objBtn.addEventHandler("onclick", this.dynBtn_onclick, this);



            this.stc_count.set_text("생성 수: " + this.nBtnCount);
            this.stc_result.set_text("btn_dyn_" + this.nBtnCount + " 생성 완료 (new nexacro.Button)");
        };

        this.dynBtn_onclick = function(obj, e)
        {
            this.stc_result.set_text("[" + obj.id + "] 클릭! — new nexacro.Button()으로 동적 생성된 버튼");
            this.alert("[" + obj.id + "] 클릭!\n\nnew nexacro.Button()으로 동적 생성된 버튼입니다.");
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nBtnCount; i++)
            {
                var sId  = "btn_dyn_" + i;
                var comp = this.div_area.form.all[sId];
                if (comp)
                {
                    this.div_area.removeChild(sId);
                    comp.destroy();
                }
            }
            this.nBtnCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("전체 삭제 완료");
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.stc_result.text ="";
        	this.stc_result.text ="initvaleu에서 설정된 defaultbutton속성으로 클릭동작생성 showmodal 실행 ";
        	var objFrame = new nexacro.ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal0012312312", 0, 0, 500, 500 );
        	objFrame.formurl = "VisibleComp::etc.xfdl";
        	objFrame.showModal( objParentFrame, {a:'aaa', b:'bbb'}, this,this.fn_callback  )
        };

        this.Button01_onclick = function(obj,e)
        {
        	 nexacro.open("promise_open_test1","VisibleComp::etc.xfdl", this.getOwnerFrame(),"", "resizable=false showstatusbar=true", 150, 150)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ButtonSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("ButtonSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=ButtonSample.xfdl.js.map
