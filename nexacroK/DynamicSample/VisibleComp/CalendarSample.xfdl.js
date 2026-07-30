(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CalendarSample");
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
            obj.set_text("Calendar 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.Calendar() 로 Calendar를 동적 생성하고 날짜 선택 이벤트를 연결합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_normal","10","74","160","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일반(팝업) Calendar");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_spin","180","74","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("스핀 Calendar");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","320","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_count","424","80","120","22",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_taborder("5");
            obj.set_text("생성 수: 0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","10","114","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_area_label","10","140","300","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("7");
            obj.set_text("▼ 동적 생성 영역");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div_area","10","164","1250","486",null,null,null,null,null,null,this);
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
        this.registerScript("CalendarSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.nCalCount (Form 속성) 으로 관리 — var 클로저 변수 사용 금지
        // fn_createCal 도 this.fn_createCal (Form 메서드) 로 정의

        this.CalendarSample_onload = function(obj, e)
        {
            this.nCalCount = 0;
        };

        this.fn_createCal = function(sType)
        {
            this.nCalCount++;
            var nCol  = (this.nCalCount - 1) % 4;
            var nRow  = Math.floor((this.nCalCount - 1) / 4);
            var nLeft = nCol * 312 + 5;
            var nTop  = nRow * 90 + 5;

            // 레이블
            var sLabel = sType == "spin" ? "스핀 Calendar " : "일반(팝업) Calendar ";
            var objStc = new nexacro.Static("stc_cal_lbl_" + this.nCalCount, nLeft, nTop, 295, 22, null, null);
            objStc.set_text(sLabel + this.nCalCount + " (new nexacro.Calendar)");
            this.div_area.addChild("stc_cal_lbl_" + this.nCalCount, objStc);
            objStc.show();

            // Calendar 동적 생성
            var objCal = new nexacro.Calendar("cal_dyn_" + this.nCalCount, nLeft, nTop + 26, 295, 36, null, null);
            objCal.set_type(sType == "spin" ? "spin" : "normal");
            objCal.set_dateformat("yyyy-MM-dd");
            objCal.set_editformat("yyyy-MM-dd ddd");
        	var objDate = new nexacro.Date();
            objCal.value="20260729";

            this.div_area.addChild("cal_dyn_" + this.nCalCount, objCal);
            objCal.show();
            objCal.addEventHandler("oncloseup", this.dynCal_oncloseup, this);

            this.stc_count.set_text("생성 수: " + this.nCalCount);
            this.stc_result.set_text("cal_dyn_" + this.nCalCount + " (" + sLabel.trim() + ") 생성 완료");
        };

        this.btn_normal_onclick = function(obj, e) { this.fn_createCal("normal"); };
        this.btn_spin_onclick   = function(obj, e) { this.fn_createCal("spin"); };

        this.dynCal_oncloseup = function(obj, e)
        {
            this.stc_result.set_text("[" + obj.id + "] 날짜 선택: " + obj.value);
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nCalCount; i++) {
                var cId = "cal_dyn_" + i; var sId = "stc_cal_lbl_" + i;
                var c = this.div_area.form.all[cId]; var s = this.div_area.form.all[sId];
                if (c) { this.div_area.removeChild(cId); c.destroy(); }
                if (s) { this.div_area.removeChild(sId); s.destroy(); }
            }
            this.nCalCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("전체 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CalendarSample_onload,this);
            this.btn_normal.addEventHandler("onclick",this.btn_normal_onclick,this);
            this.btn_spin.addEventHandler("onclick",this.btn_spin_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("CalendarSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=CalendarSample.xfdl.js.map
