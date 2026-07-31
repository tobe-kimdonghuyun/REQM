(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("StaticSample");
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
            obj.set_text("Static 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.Static() 으로 다양한 스타일(폰트, 색상, 정렬)의 Static을 동적 생성합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","74","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_updateAll","130","74","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("텍스트 일괄변경");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","270","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_count","374","80","120","22",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_taborder("5");
            obj.set_text("생성 수: 0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","508","80","740","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_area_label","10","114","300","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("7");
            obj.set_text("▼ 동적 생성 영역");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div_area","10","138","1250","512",null,null,null,null,null,null,this);
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
        this.registerScript("StaticSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.nStcCount (Form 속성) 으로 관리 — var 클로저 변수 사용 금지
        var aStyles = [
            { font:"bold 18 'Malgun Gothic'",  fc:"#1a56db", bc:"#eff6ff", text:"굵게 + 파랑 배경" },
            { font:"italic 16 'Malgun Gothic'",fc:"#cc0000", bc:"#fff5f5", text:"이탤릭 + 빨강 글자" },
            { font:"bold 14 'Malgun Gothic'",  fc:"#065f46", bc:"#d1fae5", text:"굵게 + 초록 배경" },
            { font:"16 'Malgun Gothic'",       fc:"#7c3aed", bc:"#f5f3ff", text:"기본 + 보라 글자" },
            { font:"bold italic 20 'Malgun Gothic'", fc:"#92400e", bc:"#fffbeb", text:"굵게+이탤릭+황금" }
        ];

        this.StaticSample_onload = function(obj, e)
        {
            this.nStcCount = 0;
        };

        this.btn_create_onclick = function(obj, e)
        {
            this.nStcCount++;
            var nRow  = Math.floor((this.nStcCount - 1) / 3);
            var nCol  = (this.nStcCount - 1) % 3;
            var nLeft = nCol * 416 + 5;
            var nTop  = nRow * 60 + 5;
            var style = aStyles[(this.nStcCount - 1) % aStyles.length];

            // Static 동적 생성
            var objStc = new nexacro.Static("stc_dyn_" + this.nStcCount, nLeft, nTop, 400, 48, null, null);
            objStc.set_text("[" + this.nStcCount + "] " + style.text + " (new nexacro.Static)");
            objStc.set_font(style.font);
            objStc.set_color(style.fc);
            objStc.set_background("color:" + style.bc);
            this.div_area.addChild("stc_dyn_" + this.nStcCount, objStc);
            objStc.show();

            this.stc_count.set_text("생성 수: " + this.nStcCount);
            this.stc_result.set_text("stc_dyn_" + this.nStcCount + " 생성 완료");
        };

        this.btn_updateAll_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nStcCount; i++) {
                var comp = this.div_area.form.all["stc_dyn_" + i];
                if (comp) comp.set_text("[" + i + "] 텍스트 변경됨 - " + nexacro.getDate("YYYY-MM-DD") + " " + nexacro.getTime("HH:MM:SS"));
            }
            this.stc_result.set_text(this.nStcCount + "개 Static 텍스트 일괄 변경");
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nStcCount; i++) {
                var sId = "stc_dyn_" + i;
                var comp = this.div_area.form.all[sId];
                if (comp) { this.div_area.removeChild(sId); comp.destroy(); }
            }
            this.nStcCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("전체 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.StaticSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_updateAll.addEventHandler("onclick",this.btn_updateAll_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("StaticSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=StaticSample.xfdl.js.map
