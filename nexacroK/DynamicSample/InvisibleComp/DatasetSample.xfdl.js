(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DatasetSample");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("stc_title","10","10","700","28",null,null,null,null,null,null,this);
            obj.set_color("#065f46");
            obj.set_font("bold 14 \'Malgun Gothic\'");
            obj.set_taborder("0");
            obj.set_text("[비가시적] Dataset 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","1200","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.Dataset() 으로 Dataset을 동적 생성하고 컬럼/행을 추가한 뒤 new nexacro.Grid()와 바인딩합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_createDs","10","74","160","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Dataset + Grid 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_addRow","180","74","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행 추가");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_delRow","270","74","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택행 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_editRow","380","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("첫행 수정");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_filter","480","74","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("점수 80↑ 필터");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clearFilter","610","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("필터 해제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","710","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_info","10","114","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_taborder("9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","10","138","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("10");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_log_label","10","166","200","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("11");
            obj.set_text("▼ Dataset 상태");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_log","10","186","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#333333");
            obj.set_taborder("12");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div_grid","10","214","1250","446",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div_grid
            obj = new nexacro.Layout("default","",0,0,this.div_grid.form,function(p){});
            this.div_grid.form.addLayout(obj.name, obj);

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
        this.registerScript("DatasetSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.bCreated, this.nRowNum (Form 속성) 으로 관리 — var 클로저 변수 사용 금지
        // Div 내 동적 생성 컴포넌트 접근: this.div_grid.form.all["grd_emp"]
        var aNamesAll = ["김민준","이서연","박지훈","최수아","정도윤","홍길동","이영희","박철수","김영수","최지영"];
        var aDeptAll  = ["개발팀","기획팀","디자인팀","QA팀","운영팀","영업팀","인사팀","총무팀","재무팀","마케팅팀"];

        this.DatasetSample_onload = function(obj, e)
        {
            this.bCreated = false;
            this.nRowNum  = 0;
            this.stc_info.set_text("버튼을 클릭하여 new nexacro.Dataset()과 new nexacro.Grid()를 동적 생성하세요.");
        };

        this.btn_createDs_onclick = function(obj, e)
        {
            if (this.bCreated) { this.stc_result.set_text("이미 생성되어 있습니다. 삭제 후 다시 시도하세요."); return; }

            // ────── Dataset 동적 생성 ──────────────────────────────
            var ds = new nexacro.Dataset("ds_emp", this);
            this.addChild("ds_emp", ds);
            ds.addColumn("NO",    "String", 5);
            ds.addColumn("NAME",  "String", 20);
            ds.addColumn("DEPT",  "String", 20);
            ds.addColumn("SCORE", "String", 5);
            ds.addColumn("GRADE", "String", 2);

            ds.updatecontrol = false;
            for (var i = 0; i < 10; i++) {
                this.nRowNum++;
                var r     = ds.addRow();
                var score = Math.floor(Math.random() * 40 + 60);
                ds.setColumn(r, "NO",    this.nRowNum);
                ds.setColumn(r, "NAME",  aNamesAll[i % aNamesAll.length]);
                ds.setColumn(r, "DEPT",  aDeptAll[i % aDeptAll.length]);
                ds.setColumn(r, "SCORE", score);
                ds.setColumn(r, "GRADE", score >= 90 ? "A" : (score >= 80 ? "B" : (score >= 70 ? "C" : "D")));
            }
            ds.updatecontrol = true;

            // ────── Grid 동적 생성 + Dataset 바인딩 ───────────────
            var grd = new nexacro.Grid("grd_emp", 5, 5, 1230, 430, null, null);
            this.div_grid.addChild("grd_emp", grd);
            grd.show();
            grd.set_binddataset("ds_emp");
            grd.createFormat();

            this.bCreated = true;
            this.fn_updateInfo();
            this.stc_result.set_text("new nexacro.Dataset() + new nexacro.Grid() 생성 완료! 컬럼: NO/NAME/DEPT/SCORE/GRADE");
        };

        this.btn_addRow_onclick = function(obj, e)
        {
            var ds = this["ds_emp"];
            if (!ds) { this.stc_result.set_text("먼저 Dataset을 생성하세요."); return; }
            this.nRowNum++;
            var score = Math.floor(Math.random() * 40 + 60);
            var r = ds.addRow();
            ds.setColumn(r, "NO",    this.nRowNum);
            ds.setColumn(r, "NAME",  aNamesAll[(this.nRowNum - 1) % aNamesAll.length]);
            ds.setColumn(r, "DEPT",  aDeptAll[(this.nRowNum - 1) % aDeptAll.length]);
            ds.setColumn(r, "SCORE", score);
            ds.setColumn(r, "GRADE", score >= 90 ? "A" : (score >= 80 ? "B" : (score >= 70 ? "C" : "D")));
            this.fn_updateInfo();
            this.stc_result.set_text("행 추가 완료 (rowType=INSERT). 전체 행 수: " + ds.rowcount);
        };

        this.btn_delRow_onclick = function(obj, e)
        {
            var ds  = this["ds_emp"];
            // Div 내 동적 생성 컴포넌트는 div.form.all[id] 로 접근
            var grd = this.div_grid.form.all["grd_emp"];
            if (!ds || !grd) { this.stc_result.set_text("먼저 Dataset을 생성하세요."); return; }
            var nSel = grd.currentrow;
            if (nSel < 0) { this.stc_result.set_text("삭제할 행을 Grid에서 선택하세요."); return; }
            var sName = ds.getColumn(nSel, "NAME");
            ds.deleteRow(nSel);
            this.fn_updateInfo();
            this.stc_result.set_text("[" + sName + "] 행 삭제 완료. 남은 행 수: " + ds.rowcount);
        };

        this.btn_editRow_onclick = function(obj, e)
        {
            var ds = this["ds_emp"];
            if (!ds || ds.rowcount == 0) { this.stc_result.set_text("수정할 행이 없습니다."); return; }
            var score = Math.floor(Math.random() * 40 + 60);
            ds.setColumn(0, "SCORE", score);
            ds.setColumn(0, "GRADE", score >= 90 ? "A" : (score >= 80 ? "B" : (score >= 70 ? "C" : "D")));
            ds.setColumn(0, "NAME",  ds.getColumn(0, "NAME") + "*");
            this.fn_updateInfo();
            this.stc_result.set_text("첫 번째 행 수정 완료 (rowType=UPDATE). SCORE=" + score);
        };

        this.btn_filter_onclick = function(obj, e)
        {
            var ds = this["ds_emp"];
            if (!ds) { this.stc_result.set_text("먼저 Dataset을 생성하세요."); return; }
            ds.setFilter("SCORE >= '80'");
            this.fn_updateInfo();
            this.stc_result.set_text("필터 적용: SCORE >= 80 → 표시 행 수: " + ds.rowcount);
        };

        this.btn_clearFilter_onclick = function(obj, e)
        {
            var ds = this["ds_emp"];
            if (!ds) { this.stc_result.set_text("먼저 Dataset을 생성하세요."); return; }
            ds.setFilter("");
            this.fn_updateInfo();
            this.stc_result.set_text("필터 해제. 전체 행 수: " + ds.rowcount);
        };

        this.btn_clear_onclick = function(obj, e)
        {
            // Div 내 동적 생성 컴포넌트는 div.form.all[id] 로 접근
            var grd = this.div_grid.form.all["grd_emp"];
            var ds  = this["ds_emp"];
            if (grd) { this.div_grid.removeChild("grd_emp"); grd.destroy(); }
            if (ds)  { this.removeChild("ds_emp"); ds.destroy(); }
            this.bCreated = false;
            this.nRowNum  = 0;
            this.stc_info.set_text("");
            this.stc_log.set_text("");
            this.stc_result.set_text("Dataset / Grid 삭제 완료");
        };

        // Form 메서드로 정의 — 전역 함수(function fn_xxx) 사용 금지
        this.fn_updateInfo = function()
        {
            var ds = this["ds_emp"];
            if (!ds) return;
            var nI = 0, nU = 0, nD = 0, nN = 0;
            for (var i = 0; i < ds.rowcount; i++) {
                var rt = ds.getRowType(i);
                if (rt == Dataset.ROWTYPE_INSERT)      nI++;
                else if (rt == Dataset.ROWTYPE_UPDATE)  nU++;
                else if (rt == Dataset.ROWTYPE_DELETE)  nD++;
                else                                    nN++;
            }
            this.stc_info.set_text("전체 행: " + ds.rowcount + " | 합계: " + ds.getSum("SCORE") + " | 평균: " + Math.round(ds.getAvg("SCORE") * 10) / 10);
            this.stc_log.set_text("rowType ▶ NORMAL=" + nN + " / INSERT=" + nI + " / UPDATE=" + nU + " / DELETE=" + nD);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DatasetSample_onload,this);
            this.btn_createDs.addEventHandler("onclick",this.btn_createDs_onclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.btn_editRow.addEventHandler("onclick",this.btn_editRow_onclick,this);
            this.btn_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.btn_clearFilter.addEventHandler("onclick",this.btn_clearFilter_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("DatasetSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=DatasetSample.xfdl.js.map
