(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MaskEditSample");
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
            obj.set_text("MaskEdit 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","1200","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.MaskEdit() 로 전화번호/날짜/금액/주민번호 등 다양한 format의 MaskEdit을 동적 생성합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","74","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("MaskEdit 세트 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getValue","170","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("값 읽기");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","270","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","374","80","880","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_area_label","10","114","300","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("6");
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
        this.registerScript("MaskEditSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.nSetCount (Form 속성) 으로 관리 — var 클로저 변수 사용 금지
        var aMaskTypes = [
            { label:"전화번호",   type:"string", format:"###-####-####",   init:"01012345678" },
            { label:"날짜(YYYY-MM-DD)", type:"string", format:"####-##-##", init:"20260101" },
            { label:"금액(천단위)", type:"number", format:"#,###",          init:"12345678" },
            { label:"주민번호",   type:"string", format:"######-#{######}", init:"9001011234567" },
            { label:"우편번호",   type:"string", format:"#####",            init:"12345" },
            { label:"코드(영문+숫자)", type:"string", format:"aaaa-#####",  init:"CODE12345" }
        ];

        this.MaskEditSample_onload = function(obj, e)
        {
            this.nSetCount = 0;
        };

        this.btn_create_onclick = function(obj, e)
        {
            this.nSetCount++;
            var nTopBase = (this.nSetCount - 1) * 180 + 5;

            // 세트 레이블
            var objTitle = new nexacro.Static("stc_set_title_" + this.nSetCount, 5, nTopBase, 1230, 24, null, null);
            objTitle.set_text("── 세트 " + this.nSetCount + " (new nexacro.MaskEdit) ──────────────");
            objTitle.set_color("#1a56db");
            this.div_area.addChild("stc_set_title_" + this.nSetCount, objTitle);
            objTitle.show();

            for (var i = 0; i < aMaskTypes.length; i++)
            {
                var nCol  = i % 3;
                var nRow  = Math.floor(i / 3);
                var nLeft = nCol * 415 + 5;
                var nTop  = nTopBase + nRow * 72 + 30;
                var mt    = aMaskTypes[i];
                var mId   = "msk_dyn_" + this.nSetCount + "_" + (i + 1);

                // 레이블
                var objStc = new nexacro.Static("stc_msk_lbl_" + this.nSetCount + "_" + (i+1), nLeft, nTop, 400, 22, null, null);
                objStc.set_text(mt.label + " (format: " + mt.format + ")");
                objStc.set_color("#555555");
                this.div_area.addChild("stc_msk_lbl_" + this.nSetCount + "_" + (i+1), objStc);
                objStc.show();

                // MaskEdit 동적 생성
                var objMsk = new nexacro.MaskEdit(mId, nLeft, nTop + 25, 400, 32, null, null);
                objMsk.set_type(mt.type);
                objMsk.set_format(mt.format);
                objMsk.set_value(mt.init);
                this.div_area.addChild(mId, objMsk);
                objMsk.show();
            }
            this.stc_result.set_text("세트 " + this.nSetCount + " 생성 완료 (" + aMaskTypes.length + "개 MaskEdit)");
        };

        this.btn_getValue_onclick = function(obj, e)
        {
            var sAll = "";
            for (var s = 1; s <= this.nSetCount; s++) {
                for (var i = 1; i <= aMaskTypes.length; i++) {
                    var mId  = "msk_dyn_" + s + "_" + i;
                    var comp = this.div_area.form.all[mId];
                    if (comp) sAll += "[" + mId + "] = " + comp.value + "\n";
                }
            }
            if (sAll == "") { this.stc_result.set_text("생성된 MaskEdit이 없습니다."); return; }
            this.stc_result.set_text("값 읽기 완료 (alert 확인)");
            this.alert("MaskEdit 값:\n" + sAll);
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var s = 1; s <= this.nSetCount; s++) {
                var ttId = "stc_set_title_" + s;
                var tt = this.div_area.form.all[ttId];
                if (tt) { this.div_area.removeChild(ttId); tt.destroy(); }
                for (var i = 1; i <= aMaskTypes.length; i++) {
                    var mId = "msk_dyn_" + s + "_" + i;
                    var lId = "stc_msk_lbl_" + s + "_" + i;
                    var m = this.div_area.form.all[mId]; var l = this.div_area.form.all[lId];
                    if (m) { this.div_area.removeChild(mId); m.destroy(); }
                    if (l) { this.div_area.removeChild(lId); l.destroy(); }
                }
            }
            this.nSetCount = 0;
            this.stc_result.set_text("전체 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MaskEditSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_getValue.addEventHandler("onclick",this.btn_getValue_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("MaskEditSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=MaskEditSample.xfdl.js.map
