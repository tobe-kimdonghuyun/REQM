(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TextAreaSample");
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
            obj.set_text("TextArea 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.TextArea() 로 여러 줄 텍스트 입력 컴포넌트를 동적 생성합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","74","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TextArea 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getValue","140","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("값 읽기");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","240","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_count","344","80","120","22",null,null,null,null,null,null,this);
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
        this.registerScript("TextAreaSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.nTxaCount (Form 속성) 으로 관리 — var 클로저 변수 사용 금지

        this.TextAreaSample_onload = function(obj, e)
        {
            this.nTxaCount = 0;
        };

        this.btn_create_onclick = function(obj, e)
        {
            this.nTxaCount++;
            var nCol  = (this.nTxaCount - 1) % 3;
            var nRow  = Math.floor((this.nTxaCount - 1) / 3);
            var nLeft = nCol * 416 + 5;
            var nTop  = nRow * 180 + 5;

            // 레이블
            var objStc = new nexacro.Static("stc_txa_lbl_" + this.nTxaCount, nLeft, nTop, 400, 22, null, null);
            objStc.set_text("TextArea " + this.nTxaCount + " (new nexacro.TextArea)");
            this.div_area.addChild("stc_txa_lbl_" + this.nTxaCount, objStc);
            objStc.show();

            // TextArea 동적 생성
            var objTxa = new nexacro.TextArea("txa_dyn_" + this.nTxaCount, nLeft, nTop + 26, 400, 140, null, null);
            objTxa.wordWrap = "char";

            objTxa.set_value("TextArea " + this.nTxaCount + " 초기 내용입니다.\nnew nexacro.TextArea()로 동적 생성.\nEnter 키로 줄바꿈 가능합니다.");
            this.div_area.addChild("txa_dyn_" + this.nTxaCount, objTxa);
            objTxa.show();

            this.stc_count.set_text("생성 수: " + this.nTxaCount);
            this.stc_result.set_text("txa_dyn_" + this.nTxaCount + " 생성 완료");
        };

        this.btn_getValue_onclick = function(obj, e)
        {
            var sResult = "";
            for (var i = 1; i <= this.nTxaCount; i++) {
                var comp = this.div_area.form.all["txa_dyn_" + i];
                if (comp) {
                    var lines = comp.value.split("\n").length;
                    sResult += "[txa_dyn_" + i + "] " + lines + "줄  ";
                }
            }
            if (sResult == "") { this.stc_result.set_text("생성된 TextArea가 없습니다."); return; }
            this.stc_result.set_text(sResult);
            var sFull = "";
            for (var j = 1; j <= this.nTxaCount; j++) {
                var c = this.div_area.form.all["txa_dyn_" + j];
                if (c) sFull += "=== txa_dyn_" + j + " ===\n" + c.value + "\n\n";
            }
            this.alert(sFull);
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nTxaCount; i++) {
                var tId = "txa_dyn_" + i; var sId = "stc_txa_lbl_" + i;
                var t = this.div_area.form.all[tId]; var s = this.div_area.form.all[sId];
                if (t) { this.div_area.removeChild(tId); t.destroy(); }
                if (s) { this.div_area.removeChild(sId); s.destroy(); }
            }
            this.nTxaCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("전체 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TextAreaSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_getValue.addEventHandler("onclick",this.btn_getValue_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("TextAreaSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=TextAreaSample.xfdl.js.map
