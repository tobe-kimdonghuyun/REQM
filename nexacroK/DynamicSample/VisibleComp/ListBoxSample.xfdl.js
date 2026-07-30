(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ListBoxSample");
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
            obj.set_text("ListBox 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.ListBox() + new nexacro.Dataset() 으로 ListBox와 이너 Dataset을 동적 생성합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","74","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("ListBox 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getValue","140","74","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택값 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","260","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_count","364","80","120","22",null,null,null,null,null,null,this);
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
        this.registerScript("ListBoxSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.nLstCount (Form 속성) 으로 관리 — var 클로저 변수 사용 금지
        var aListData = [
            ["Seoul","서울"],["Busan","부산"],["Daegu","대구"],
            ["Incheon","인천"],["Gwangju","광주"],["Daejeon","대전"],["Ulsan","울산"]
        ];

        this.ListBoxSample_onload = function(obj, e)
        {
            this.nLstCount = 0;
        };

        this.btn_create_onclick = function(obj, e)
        {
            this.nLstCount++;
            var nCol  = (this.nLstCount - 1) % 4;
            var nRow  = Math.floor((this.nLstCount - 1) / 4);
            var nLeft = nCol * 312 + 5;
            var nTop  = nRow * 220 + 5;

            // 이너 Dataset 동적 생성
            var dsId = "ds_lst_" + this.nLstCount;
            var ds   = new nexacro.Dataset(dsId, this);
            this.addChild(dsId, ds);
            ds.addColumn("CODE", "String", 20);
            ds.addColumn("NAME", "String", 40);
            for (var i = 0; i < aListData.length; i++) {
                var r = ds.addRow();
                ds.setColumn(r, "CODE", aListData[i][0]);
                ds.setColumn(r, "NAME", aListData[(i + this.nLstCount - 1) % aListData.length][1]);
            }

            // 레이블
            var objStc = new nexacro.Static("stc_lst_lbl_" + this.nLstCount, nLeft, nTop, 295, 22, null, null);
            objStc.set_text("ListBox " + this.nLstCount + " (new nexacro.ListBox)");
            this.div_area.addChild("stc_lst_lbl_" + this.nLstCount, objStc);
            objStc.show();

            // ListBox 동적 생성
            var objLst = new nexacro.ListBox("lst_dyn_" + this.nLstCount, nLeft, nTop + 26, 295, 180, null, null);
            objLst.set_innerdataset(dsId);
            objLst.set_codecolumn("CODE");
            objLst.set_datacolumn("NAME");
            this.div_area.addChild("lst_dyn_" + this.nLstCount, objLst);
            objLst.show();
            objLst.addEventHandler("onitemchanged", this.dynLst_onitemchanged, this);

            this.stc_count.set_text("생성 수: " + this.nLstCount);
            this.stc_result.set_text("lst_dyn_" + this.nLstCount + " 생성 완료 (" + aListData.length + "개 항목)");
        };

        this.dynLst_onitemchanged = function(obj, e)
        {
            this.stc_result.set_text("[" + obj.id + "] 선택: CODE=" + obj.value + " / NAME=" + obj.text);
        };

        this.btn_getValue_onclick = function(obj, e)
        {
            var sResult = "";
            for (var i = 1; i <= this.nLstCount; i++) {
                var comp = this.div_area.form.all["lst_dyn_" + i];
                if (comp) sResult += "[lst_dyn_" + i + "] = " + comp.value + "(" + comp.text + ")  ";
            }
            if (sResult == "") sResult = "생성된 ListBox가 없습니다.";
            this.stc_result.set_text(sResult);
            this.alert("ListBox 선택값:\n" + sResult.split("  ").join("\n"));
        };

        this.btn_clear_onclick = function(obj, e)
        {
            for (var i = 1; i <= this.nLstCount; i++) {
                var lId = "lst_dyn_" + i; var sId = "stc_lst_lbl_" + i; var dId = "ds_lst_" + i;
                var l = this.div_area.form.all[lId]; var s = this.div_area.form.all[sId]; var d = this[dId];
                if (l) { this.div_area.removeChild(lId); l.destroy(); }
                if (s) { this.div_area.removeChild(sId); s.destroy(); }
                if (d) { this.removeChild(dId); d.destroy(); }
            }
            this.nLstCount = 0;
            this.stc_count.set_text("생성 수: 0");
            this.stc_result.set_text("전체 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ListBoxSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_getValue.addEventHandler("onclick",this.btn_getValue_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("ListBoxSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=ListBoxSample.xfdl.js.map
