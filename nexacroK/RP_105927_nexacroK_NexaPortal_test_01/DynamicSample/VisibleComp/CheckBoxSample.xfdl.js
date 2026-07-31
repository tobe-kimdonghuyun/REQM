(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CheckBoxSample");
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
            obj.set_text("CheckBox 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.CheckBox() 으로 동적 생성합니다. truevalue/falsevalue를 다양하게 설정할 수 있습니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","74","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CheckBox 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getValue","150","74","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택값 확인");
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
        this.registerScript("CheckBoxSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.nChkCount (Form 속성) 으로 관리 — var 클로저 변수 사용 금지
        var aChkTypes = [
            { text:"동의 여부 (Y/N)",       tv:"Y",    fv:"N"    },
            { text:"사용 여부 (1/0)",        tv:"1",    fv:"0"    },
            { text:"선택 여부 (true/false)", tv:"true", fv:"false"},
            { text:"활성화 (ON/OFF)",        tv:"ON",   fv:"OFF"  }
        ];

        this.CheckBoxSample_onload = function(obj, e)
        {
            this.nChkCount = 0;
        };

        this.btn_create_onclick = function(obj, e)
        {
            this.nChkCount++;
            var nRow  = Math.floor((this.nChkCount - 1) / 4);
            var nCol  = (this.nChkCount - 1) % 4;
            var nLeft = nCol * 310 + 5;
            var nTop  = nRow * 80 + 5;
            var tInfo = aChkTypes[(this.nChkCount - 1) % 4];

            // 레이블
            var objStc = new nexacro.Static("stc_chk_lbl_" + this.nChkCount, nLeft, nTop, 290, 22, null, null);
            objStc.set_text("truevalue=\"" + tInfo.tv + "\" falsevalue=\"" + tInfo.fv + "\"");
            objStc.set_color("#555555");
            this.div_area.addChild("stc_chk_lbl_" + this.nChkCount, objStc);
            objStc.show();

            // CheckBox 동적 생성
            var objChk = new nexacro.CheckBox("chk_dyn_" + this.nChkCount, nLeft, nTop + 26, 290, 30, null, null);
            objChk.set_text(tInfo.text + " [" + this.nChkCount + "]");
            objChk.set_truevalue(tInfo.tv);
            objChk.set_falsevalue(tInfo.fv);
            objChk.set_value(tInfo.fv);
            this.div_area.addChild("chk_dyn_" + this.nChkCount, objChk);
            objChk.show();
            objChk.addEventHandler("onclick", this.dynChk_onclick, this);

            this.stc_count.set_text("생성 수: " + this.nChkCount);
            this.stc_result.set_text("chk_dyn_" + this.nChkCount + " 생성 완료 (truevalue=" + tInfo.tv + ")");
        };

        this.dynChk_onclick = function(obj, e)
        {
            this.stc_result.set_text("[" + obj.id + "] 현재 값: " + obj.value + " (truevalue=" + obj.truevalue + " / falsevalue=" + obj.falsevalue + ")");
        };

        this.btn_getValue_onclick = function(obj, e)
        {
            var sResult = "";
            for (var i = 1; i <= this.nChkCount; i++) {
                var comp = this.div_area.form.all["chk_dyn_" + i];
                if (comp) sResult += "[chk_dyn_" + i + "] = " + comp.value + "  ";
            }
            if (sResult == "") sResult = "생성된 CheckBox가 없습니다.";
            this.stc_result.set_text(sResult);
            this.alert("CheckBox 값:\n" + sResult.split("  ").join("\n"));
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nChkCount; i++) {
                var cId = "chk_dyn_" + i; var sId = "stc_chk_lbl_" + i;
                var c = this.div_area.form.all[cId]; var s = this.div_area.form.all[sId];
                if (c) { this.div_area.removeChild(cId); c.destroy(); }
                if (s) { this.div_area.removeChild(sId); s.destroy(); }
            }
            this.nChkCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("전체 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CheckBoxSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_getValue.addEventHandler("onclick",this.btn_getValue_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("CheckBoxSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=CheckBoxSample.xfdl.js.map
