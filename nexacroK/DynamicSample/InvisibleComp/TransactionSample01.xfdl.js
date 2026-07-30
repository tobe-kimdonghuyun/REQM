(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TransactionSample01");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("stc_title","10","10","900","28",null,null,null,null,null,null,this);
            obj.set_color("#065f46");
            obj.set_font("bold 14 \'Malgun Gothic\'");
            obj.set_taborder("0");
            obj.set_text("[비가시적] transaction — Promise (.then/.catch) 방식");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_url","10","42","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_taborder("1");
            obj.set_text("JSP: http://172.10.12.45:7070/jsp/test_100_XML.jsp  |  출력 Dataset: output (SAMPLE_NM, SAMPLE_ID, SAMPLE_DESC, SAMPLE_DEPT_NM)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","66","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("2");
            obj.set_text("this.transaction() 반환값(Promise)에 .then(res => ...).catch(err => ...)를 체이닝합니다. 콜백 인수를 빈 문자열로 전달하면 Promise가 반환됩니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","96","160","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Dataset + Grid 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_search","180","96","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회 (Promise)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","330","96","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_status","10","138","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("6");
            obj.set_text("① [Dataset+Grid 생성] → ② [조회 (Promise)] 순서로 실행하세요.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_log_label","10","166","400","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("7");
            obj.set_text("▼ 결과 로그 (ErrorCode / ErrorMsg / 건수)");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_log","10","188","1240","80",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div_grid","10","276","1250","384",null,null,null,null,null,null,this);
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
        this.registerScript("TransactionSample01.xfdl", function(nexacro, system, trace, environment, application) {

        this.TransactionSample01_onload = function(obj, e)
        {
            this.bCreated = false;
            this.stc_status.set_text("① [Dataset+Grid 생성] → ② [조회 (Promise)] 순서로 실행하세요.");
        };

        this.btn_create_onclick = function(obj, e)
        {
            if (this.bCreated) { this.stc_status.set_text("이미 생성되어 있습니다. [초기화] 후 다시 시도하세요."); return; }

            // Dataset 동적 생성 — JSP output Dataset 컬럼과 동일하게 정의
            var ds = new nexacro.Dataset("ds_output", this);
            this.addChild("ds_output", ds);
            ds.addColumn("SAMPLE_NM",      "String", 255);
            ds.addColumn("SAMPLE_ID",      "String", 255);
            ds.addColumn("SAMPLE_DESC",    "String", 255);
            ds.addColumn("SAMPLE_DEPT_NM", "String", 255);

            // Grid 동적 생성 + Dataset 바인딩
            var grd = new nexacro.Grid("grd_result", 5, 5, 1230, 365, null, null);
            this.div_grid.addChild("grd_result", grd);
            grd.show();
            grd.set_binddataset("ds_output");
            grd.createFormat();

            this.bCreated = true;
            this.stc_status.set_text("✔ new nexacro.Dataset() + new nexacro.Grid() 생성 완료! [조회 (Promise)] 버튼을 클릭하세요.");
            this.txt_log.set_value("Dataset 컬럼: SAMPLE_NM / SAMPLE_ID / SAMPLE_DESC / SAMPLE_DEPT_NM");
        };

        this.btn_search_onclick = function(obj, e)
        {
            var ds = this["ds_output"];
            if (!ds) { this.stc_status.set_text("먼저 [Dataset+Grid 생성] 버튼을 클릭하세요."); return; }

            this.txt_log.set_value("조회 중...");
            this.stc_status.set_text("서버 요청 중...");

            var sArgs = "ag1=1 userid=sample";
            var svrid = "TR_PROMISE";

            // 콜백 인수를 빈 문자열로 전달하면 Promise가 반환됨
            var req = this.transaction(
                svrid,
                "http://172.10.12.45:7070/jsp/test_100_XML.jsp",
                "",                  // inDs: 없음
                "ds_output=output",  // outDs: 서버 output → 로컬 ds_output
                sArgs,
                "",                  // 콜백 없음 → Promise 반환
                false                 // bAsync: 비동기
            );

            if (req)
            {
                req.then(res => {
                    // res[0]=ErrorCode, res[1]=ErrorMsg
                    this.fn_afterSearch(svrid, res[0], res[1]);
                })
                .catch(err => {
                    this.stc_status.set_text("통신 실패");
                    this.txt_log.set_value("catch 발생: " + err);
                });
            }
        };

        this.fn_afterSearch = function(svrid, errCode, errMsg)
        {
            var ds    = this["ds_output"];
            var nRows = ds ? ds.rowcount : 0;

            // JSP 반환: ErrorCode=1 성공 / ErrorCode=-2 실패 (nexacro 표준: 0=성공, 음수=오류)
            if (errCode < 0)
            {
                this.stc_status.set_text("시스템 오류 [" + errCode + "]: " + errMsg);
            }
            else
            {
                this.stc_status.set_text("✔ 조회 완료: " + nRows + "건");
            }

            this.txt_log.set_value(
                "svrid    = " + svrid   + "\n" +
                "errCode  = " + errCode + "\n" +
                "errMsg   = " + errMsg  + "\n" +
                "조회건수 = " + nRows   + "\n" +
                "(JSP 기준: ErrorCode=1 성공 / ErrorCode=-2 실패)"
            );
        };

        this.btn_clear_onclick = function(obj, e)
        {
            var grd = this.div_grid.form.all["grd_result"];
            var ds  = this["ds_output"];
            if (grd) { this.div_grid.removeChild("grd_result"); grd.destroy(); }
            if (ds)  { this.removeChild("ds_output"); ds.destroy(); }
            this.bCreated = false;
            this.stc_status.set_text("초기화 완료. ① [Dataset+Grid 생성] → ② [조회 (Promise)] 순서로 실행하세요.");
            this.txt_log.set_value("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TransactionSample01_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("TransactionSample01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=TransactionSample01.xfdl.js.map
