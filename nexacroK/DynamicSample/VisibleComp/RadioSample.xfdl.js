(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RadioSample");
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
            obj.set_text("Radio 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.Radio() + new nexacro.Dataset() 으로 Radio와 이너 Dataset을 동적 생성합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create_h","10","74","160","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("가로배치 Radio 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create_v","180","74","160","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("세로배치 Radio 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getValue","350","74","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택값 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","470","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_count","574","80","120","22",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_taborder("6");
            obj.set_text("생성 수: 0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","10","114","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_area_label","10","140","300","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("8");
            obj.set_text("▼ 동적 생성 영역");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div_area","10","164","1250","486",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","633","190","120","50",null,null,null,null,null,null,this.div_area.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.div_area.addChild(obj.name, obj);

            obj = new nexacro.Radio("Radio00","717","149","280","50",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("10");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{},{},{}]});
            obj.set_innerdataset(Radio00_innerdataset);
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
        this.registerScript("RadioSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.nRadCount (Form 속성) 으로 관리 — var 클로저 변수 사용 금지

        this.RadioSample_onload = function(obj, e)
        {
            this.nRadCount = 0;
        };

        this.fn_createRadio = function(sDir)
        {
            this.nRadCount++;
            var nRow  = Math.floor((this.nRadCount - 1) / 2);
            var nCol  = (this.nRadCount - 1) % 2;
            var nLeft = nCol * 620 + 5;
            var nTop  = nRow * 120 + 5;

            // 이너 Dataset 동적 생성
            var dsId = "ds_rad_" + this.nRadCount;
            var ds   = new nexacro.Dataset(dsId, this);
            this.addChild(dsId, ds);
            ds.addColumn("CODE", "String", 10);
            ds.addColumn("NAME", "String", 40);
            var aItems = [["M","남성"],["F","여성"],["N","미선택"]];
            if (this.nRadCount % 2 == 0) aItems = [["A","매우만족"],["B","만족"],["C","보통"],["D","불만족"]];
            for (var i = 0; i < aItems.length; i++) {
                var r = ds.addRow();
                ds.setColumn(r, "CODE", aItems[i][0]);
                ds.setColumn(r, "NAME", aItems[i][1]);
            }

            // 레이블
            var objStc = new nexacro.Static("stc_rad_lbl_" + this.nRadCount, nLeft, nTop, 600, 22, null, null);
            objStc.set_text("Radio " + this.nRadCount + " [" + (sDir == "H" ? "가로" : "세로") + " 배치] (new nexacro.Radio + new nexacro.Dataset)");
            this.div_area.addChild("stc_rad_lbl_" + this.nRadCount, objStc);
            objStc.show();

            // Radio 동적 생성
            var nHeight = sDir == "H" ? 30 : (aItems.length * 28 + 5);
            var objRad  = new nexacro.Radio("rad_dyn_" + this.nRadCount, nLeft, nTop + 26, 600, nHeight, null, null);

            this.div_area.addChild("rad_dyn_" + this.nRadCount, objRad);
            objRad.show();
            objRad.addEventHandler("onitemchanged", this.dynRad_onitemchanged, this);
        	objRad.set_innerdataset(dsId);
            objRad.set_codecolumn("CODE");
            objRad.set_datacolumn("NAME");
            if (sDir == "H") {
                objRad.set_rowcount(1);
            } else {
                objRad.set_columncount(1);
            }
            this.stc_count.set_text("생성 수: " + this.nRadCount);
            this.stc_result.set_text("rad_dyn_" + this.nRadCount + " 생성 완료 (" + (sDir == "H" ? "가로" : "세로") + " 배치)");
        };

        this.btn_create_h_onclick = function(obj, e) { this.fn_createRadio("H"); };
        this.btn_create_v_onclick = function(obj, e) { this.fn_createRadio("V"); };

        this.dynRad_onitemchanged = function(obj, e)
        {
            this.stc_result.set_text("[" + obj.id + "] 선택: CODE=" + obj.value + " / NAME=" + obj.text);
        };

        this.btn_getValue_onclick = function(obj, e)
        {
            var sResult = "";
            for (var i = 1; i <= this.nRadCount; i++) {
                var comp = this.div_area.form.all["rad_dyn_" + i];
                if (comp) sResult += "[rad_dyn_" + i + "] = " + comp.value + "  ";
            }
            if (sResult == "") sResult = "생성된 Radio가 없습니다.";
            this.stc_result.set_text(sResult);
            this.alert("Radio 값:\n" + sResult.split("  ").join("\n"));
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nRadCount; i++) {
                var rId = "rad_dyn_" + i; var sId = "stc_rad_lbl_" + i; var dId = "ds_rad_" + i;
                var r = this.div_area.form.all[rId]; var s = this.div_area.form.all[sId]; var d = this[dId];
                if (r) { this.div_area.removeChild(rId); r.destroy(); }
                if (s) { this.div_area.removeChild(sId); s.destroy(); }
                if (d) { this.removeChild(dId); d.destroy(); }
            }
            this.nRadCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("전체 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.RadioSample_onload,this);
            this.btn_create_h.addEventHandler("onclick",this.btn_create_h_onclick,this);
            this.btn_create_v.addEventHandler("onclick",this.btn_create_v_onclick,this);
            this.btn_getValue.addEventHandler("onclick",this.btn_getValue_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.div_area.form.Button00.addEventHandler("onclick",this.div_area_Button00_onclick,this);
        };

        this.loadIncludeScript("RadioSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=RadioSample.xfdl.js.map
