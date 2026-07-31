(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EditSample");
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
            obj.set_text("Edit 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("버튼 클릭 시 new nexacro.Edit()으로 다양한 유형의 Edit 컴포넌트를 동적 생성합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_normal","10","74","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일반 Edit 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_password","160","74","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("패스워드 Edit 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_readonly","310","74","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("읽기전용 Edit 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getValue","460","74","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("값 모두 읽기");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","580","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_count","684","80","120","22",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_taborder("7");
            obj.set_text("생성 수: 0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","10","114","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_area_label","10","140","300","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("9");
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
        this.registerScript("EditSample.xfdl", function(nexacro, system, trace, environment, application) {

        this.EditSample_onload = function(obj, e)
        {
            this.nEditCount = 0;
        };

        this.btn_normal_onclick = function(obj, e)
        {
            this.fn_createEdit("normal");
        };

        this.btn_password_onclick = function(obj, e)
        {
            this.fn_createEdit("password");
        };

        this.btn_readonly_onclick = function(obj, e)
        {
            this.fn_createEdit("readonly");
        };

        this.fn_createEdit = function(sType)
        {
            this.nEditCount++;
            var nRow  = Math.floor((this.nEditCount - 1) / 3);
            var nCol  = (this.nEditCount - 1) % 3;
            var nLeft = nCol * 420 + 5;
            var nTop  = nRow * 80 + 5;

            var sLabel = sType == "normal" ? "일반 Edit " : (sType == "password" ? "패스워드 Edit " : "읽기전용 Edit ");

            // 레이블 생성
            var objStc = new nexacro.Static("stc_lbl_" + this.nEditCount, nLeft, nTop, 400, 22, null, null);
            objStc.set_text(sLabel + this.nEditCount + " (new nexacro.Edit)");
            this.div_area.addChild("stc_lbl_" + this.nEditCount, objStc);
            objStc.show();

            // Edit 동적 생성
            var objEdit = new nexacro.Edit("edt_dyn_" + this.nEditCount, nLeft, nTop + 26, 400, 32, null, null);
            if (sType == "password") {
                objEdit.set_password(true);
                objEdit.set_value("password123");
            } else if (sType == "readonly") {
                objEdit.set_readonly(true);
                objEdit.set_value("읽기전용 값 " + this.nEditCount);
            } else {
                objEdit.set_value("입력값 " + this.nEditCount);
            }
            this.div_area.addChild("edt_dyn_" + this.nEditCount, objEdit);
            objEdit.show();

            this.stc_count.set_text("생성 수: " + this.nEditCount);
            this.stc_result.set_text("edt_dyn_" + this.nEditCount + " (" + sLabel.trim() + ") 생성 완료");
        };

        this.btn_getValue_onclick = function(obj, e)
        {
            var sResult = "";
            for (var i = 1; i <= this.nEditCount; i++) {
                var comp = this.div_area.form.all["edt_dyn_" + i];
                if (comp) sResult += "[edt_dyn_" + i + "] = " + comp.value + "\n";
            }
            if (sResult == "") { this.stc_result.set_text("생성된 Edit이 없습니다."); return; }
            this.stc_result.set_text("값 읽기 완료 (alert 확인)");
            this.alert("읽은 값:\n" + sResult);
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nEditCount; i++) {
                var sEId = "edt_dyn_" + i;
                var sSId = "stc_lbl_" + i;
                var edt  = this.div_area.form.all[sEId];
                var stc  = this.div_area.form.all[sSId];
                if (edt) { this.div_area.removeChild(sEId); edt.destroy(); }
                if (stc) { this.div_area.removeChild(sSId); stc.destroy(); }
            }
            this.nEditCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("전체 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EditSample_onload,this);
            this.btn_normal.addEventHandler("onclick",this.btn_normal_onclick,this);
            this.btn_password.addEventHandler("onclick",this.btn_password_onclick,this);
            this.btn_readonly.addEventHandler("onclick",this.btn_readonly_onclick,this);
            this.btn_getValue.addEventHandler("onclick",this.btn_getValue_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("EditSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=EditSample.xfdl.js.map
