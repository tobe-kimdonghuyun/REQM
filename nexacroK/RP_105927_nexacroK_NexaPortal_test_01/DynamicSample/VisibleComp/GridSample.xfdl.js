(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridSample");
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
            obj.set_text("Grid 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.Grid() + new nexacro.Dataset() 동적 생성 후 바인딩. 행 추가/삭제 가능.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","74","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid+Dataset 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_addRow","170","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행 추가");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_delRow","270","74","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택행 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","380","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Grid 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","484","80","760","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div_area","10","116","1250","534",null,null,null,null,null,null,this);
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
        this.registerScript("GridSample.xfdl", function(nexacro, system, trace, environment, application) {

        this.GridSample_onload = function(obj, e)
        {
            this.bCreated = false;
            this.nRowNum  = 0;
        };

        this.btn_create_onclick = function(obj, e)
        {
            if (this.bCreated) {
                this.stc_result.set_text("이미 생성되어 있습니다. 먼저 삭제하세요.");
                return;
            }

            // ── Dataset 동적 생성 ──────────────────────────────────
            var ds = new nexacro.Dataset("ds_grid", this);
            this.addChild("ds_grid", ds);
            ds.addColumn("NO",    "String", 10);
            ds.addColumn("NAME",  "String", 50);
            ds.addColumn("DEPT",  "String", 30);
            ds.addColumn("SCORE", "String", 10);

            var aNames = ["김민준","이서연","박지훈","최수아","정도윤"];
            var aDepts = ["개발팀","기획팀","디자인팀","QA팀","운영팀"];
            for (var i = 0; i < 5; i++) {
                this.nRowNum++;
                var r = ds.addRow();
                ds.setColumn(r, "NO",    this.nRowNum);
                ds.setColumn(r, "NAME",  aNames[i]);
                ds.setColumn(r, "DEPT",  aDepts[i]);
                ds.setColumn(r, "SCORE", Math.floor(Math.random() * 40 + 60));
            }

            // ── Grid 동적 생성 ──────────────────────────────────────
            var grd = new nexacro.Grid("grd_dyn", 5, 5, 1230, 490, null, null);
            this.div_area.addChild("grd_dyn", grd);
            grd.show();
            grd.set_binddataset("ds_grid");
            grd.createFormat();

            this.bCreated = true;
            this.stc_result.set_text("new nexacro.Grid() + new nexacro.Dataset() 생성 완료! 행 수: " + ds.rowcount);
        };

        this.btn_addRow_onclick = function(obj, e)
        {
            var ds = this["ds_grid"];
            if (!ds) { this.stc_result.set_text("먼저 Grid를 생성하세요."); return; }

            this.nRowNum++;
            var aNames = ["홍길동","임꺽정","장길산","일지매","전우치"];
            var aDepts = ["신규팀","파견팀","외주팀","협력팀","지원팀"];
            var idx = (this.nRowNum - 1) % 5;
            var r = ds.addRow();
            ds.setColumn(r, "NO",    this.nRowNum);
            ds.setColumn(r, "NAME",  aNames[idx]);
            ds.setColumn(r, "DEPT",  aDepts[idx]);
            ds.setColumn(r, "SCORE", Math.floor(Math.random() * 40 + 60));
            this.stc_result.set_text("행 추가 완료. 전체 행 수: " + ds.rowcount);
        };

        this.btn_delRow_onclick = function(obj, e)
        {
            var ds  = this["ds_grid"];
            var grd = this.div_area.form.all["grd_dyn"];
            if (!ds || !grd) { this.stc_result.set_text("먼저 Grid를 생성하세요."); return; }

            var nSel = grd.currentrow;
            if (nSel < 0) { this.stc_result.set_text("삭제할 행을 선택하세요."); return; }
            ds.deleteRow(nSel);
            this.stc_result.set_text("행 삭제 완료. 전체 행 수: " + ds.rowcount);
        };

        this.btn_clear_onclick = function(obj, e)
        {
            var grd = this.div_area.form.all["grd_dyn"];
            var ds  = this["ds_grid"];
            if (grd) { this.div_area.removeChild("grd_dyn"); grd.destroy(); }
            if (ds)  { this.removeChild("ds_grid"); ds.destroy(); }
            this.bCreated = false;
            this.nRowNum  = 0;
            this.stc_result.set_text("Grid / Dataset 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("GridSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=GridSample.xfdl.js.map
