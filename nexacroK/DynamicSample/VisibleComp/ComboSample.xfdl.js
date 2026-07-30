(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ComboSample");
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
            obj.set_text("Combo 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.Combo() + new nexacro.Dataset() 으로 Combo와 이너 Dataset을 동적 생성합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","74","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Combo 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getValue","130","74","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택값 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","250","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_count","354","80","120","22",null,null,null,null,null,null,this);
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
            //-- Default Layout : this.div_area.form
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
        this.registerScript("ComboSample.xfdl", function(nexacro, system, trace, environment, application) {

        this.ComboSample_onload = function(obj, e)
        {
            this.nCmbCount = 0;
        };

        this.btn_create_onclick = function(obj, e)
        {
            this.nCmbCount++;
            var nRow  = Math.floor((this.nCmbCount - 1) / 3);
            var nCol  = (this.nCmbCount - 1) % 3;
            var nLeft = nCol * 420 + 5;
            var nTop  = nRow * 90 + 5;

            // 이너 Dataset 동적 생성
            var dsId = "ds_cmb_" + this.nCmbCount;
            var ds   = new nexacro.Dataset(dsId, this);
            this.addChild(dsId, ds);
            ds.addColumn("CODE", "String", 10);
            ds.addColumn("NAME", "String", 40);
            var aData = [["A","항목A-"+this.nCmbCount],["B","항목B-"+this.nCmbCount],["C","항목C-"+this.nCmbCount],["D","항목D-"+this.nCmbCount]];
            for (var i = 0; i < aData.length; i++) {
                var r = ds.addRow();
                ds.setColumn(r, "CODE", aData[i][0]);
                ds.setColumn(r, "NAME", aData[i][1]);
            }

            // 레이블
            var objStc = new nexacro.Static("stc_cmb_lbl_" + this.nCmbCount, nLeft, nTop, 400, 22, null, null);
            objStc.set_text("Combo " + this.nCmbCount + " (new nexacro.Combo + new nexacro.Dataset)");
            this.div_area.addChild("stc_cmb_lbl_" + this.nCmbCount, objStc);
            objStc.show();

            // Combo 동적 생성
            var objCmb = new nexacro.Combo("cmb_dyn_" + this.nCmbCount, nLeft, nTop + 26, 400, 32, null, null);
            objCmb.set_innerdataset(dsId);
            objCmb.set_codecolumn("CODE");
            objCmb.set_datacolumn("NAME");
            this.div_area.addChild("cmb_dyn_" + this.nCmbCount, objCmb);
            objCmb.show();
            objCmb.addEventHandler("onitemchanged", this.dynCmb_onitemchanged, this);

            this.stc_count.set_text("생성 수: " + this.nCmbCount);
            this.stc_result.set_text("cmb_dyn_" + this.nCmbCount + " 생성 완료");
        };

        this.dynCmb_onitemchanged = function(obj, e)
        {
            this.stc_result.set_text("[" + obj.id + "] 선택 변경 → CODE: " + obj.value + " / NAME: " + obj.text);
        };

        this.btn_getValue_onclick = function(obj, e)
        {
            var sResult = "";
            for (var i = 1; i <= this.nCmbCount; i++) {
                var comp = this.div_area.form.all["cmb_dyn_" + i];
                if (comp) sResult += "[cmb_dyn_" + i + "] = " + comp.value + "(" + comp.text + ")\n";
            }
            if (sResult == "") { this.stc_result.set_text("생성된 Combo가 없습니다."); return; }
            this.stc_result.set_text("값 읽기 완료 (alert 확인)");
            this.alert("선택 값:\n" + sResult);
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nCmbCount; i++) {
                var cId = "cmb_dyn_" + i; var sId = "stc_cmb_lbl_" + i; var dId = "ds_cmb_" + i;
                var c = this.div_area.form.all[cId]; var s = this.div_area.form.all[sId]; var d = this[dId];
                if (c) { this.div_area.removeChild(cId); c.destroy(); }
                if (s) { this.div_area.removeChild(sId); s.destroy(); }
                if (d) { this.removeChild(dId); d.destroy(); }
            }
            this.nCmbCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("전체 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ComboSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_getValue.addEventHandler("onclick",this.btn_getValue_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("ComboSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=ComboSample.xfdl.js.map
