(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DataObjectSample");
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
            obj.set_text("[비가시적] DataObject 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_api_url","10","44","800","22",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_taborder("1");
            obj.set_text("API: GET https://jsonplaceholder.typicode.com/posts");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc2","10","66","1200","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("2");
            obj.set_text("new nexacro.DataObject() + new nexacro.Dataset() + new nexacro.Grid() 를 모두 동적으로 생성하고 REST API를 호출합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","96","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("DataObject 동적 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_search","190","96","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("게시글 조회 (GET)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_users","350","96","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용자 조회 (GET)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","510","96","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_status","614","102","600","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("7");
            obj.set_text("DataObject 미생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","10","136","1240","22",null,null,null,null,null,null,this);
            obj.set_color("#333333");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div_grid","10","164","1250","496",null,null,null,null,null,null,this);
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
        this.registerScript("DataObjectSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.bCreated (Form 속성) 으로 관리 — var 클로저 변수 사용 금지
        // Div 내 동적 생성 컴포넌트 접근: this.div_grid.form.all["grd_result"]

        this.DataObjectSample_onload = function(obj, e)
        {
            this.bCreated = false;
            this.stc_status.set_text("① [DataObject 동적 생성] 버튼 클릭 → ② [게시글 조회] 클릭 순서로 실행하세요.");
        };

        this.btn_create_onclick = function(obj, e)
        {
            if (this.bCreated) { this.stc_status.set_text("이미 생성되어 있습니다. 삭제 후 다시 시도하세요."); return; }

            // ────── DataObject 동적 생성 ──────────────────────────
            var dobj = new nexacro.DataObject("dobj_api", this);
            this.addChild("dobj_api", dobj);
            dobj.addEventHandler("onsuccess", this.dobj_api_onsuccess, this);
            dobj.addEventHandler("onload",    this.dobj_api_onload,    this);
            dobj.addEventHandler("onerror",   this.dobj_api_onerror,   this);

            // ────── Dataset 동적 생성 ─────────────────────────────
            var ds = new nexacro.Dataset("ds_result", this);
            this.addChild("ds_result", ds);

            // ────── Grid 동적 생성 ────────────────────────────────
            var grd = new nexacro.Grid("grd_result", 5, 5, 1230, 480, null, null);
            this.div_grid.addChild("grd_result", grd);
            grd.show();

            this.bCreated = true;
            this.stc_status.set_text("✔ new nexacro.DataObject() + new nexacro.Dataset() + new nexacro.Grid() 동적 생성 완료!");
            this.stc_result.set_text("이제 [게시글 조회] 또는 [사용자 조회] 버튼을 클릭하세요.");
        };

        this.btn_search_onclick = function(obj, e)
        {
            var dobj = this["dobj_api"];
            if (!dobj) { this.stc_status.set_text("먼저 DataObject를 동적 생성하세요."); return; }
            this.stc_status.set_text("조회 중... (GET /posts)");
            dobj.request("SEARCH_POSTS", "GET", "https://jsonplaceholder.typicode.com/posts");
        };

        this.btn_users_onclick = function(obj, e)
        {
            var dobj = this["dobj_api"];
            if (!dobj) { this.stc_status.set_text("먼저 DataObject를 동적 생성하세요."); return; }
            this.stc_status.set_text("조회 중... (GET /users)");
            dobj.request("SEARCH_USERS", "GET", "https://jsonplaceholder.typicode.com/users");
        };

        this.dobj_api_onsuccess = function(obj, e)
        {
            trace("[onsuccess] serviceid=" + e.serviceid + " / statuscode=" + e.statuscode);
            if (e.statuscode > 200)
            {
                e.preventDefault();
                this.stc_status.set_text("통신 오류: HTTP " + e.statuscode);
            }
        };

        this.dobj_api_onload = function(obj, e)
        {
            // DataObject.REASON_REQUEST 는 동적 생성 환경에서 undefined가 되므로 nexacro 전체 경로 사용
            if (e.reason != nexacro.DataObject.REASON_REQUEST) return;

            var ds  = this["ds_result"];
            // Div 내 동적 생성 컴포넌트는 div.form.all[id] 로 접근
            var grd = this.div_grid.form.all["grd_result"];
            if (!ds || !grd) return;

            if (!(obj.data instanceof Array) || obj.data.length == 0)
            {
                this.stc_status.set_text("조회된 데이터가 없습니다.");
                return;
            }

            // 컬럼·행 전체 초기화 (엔드포인트 전환 시 컬럼 중복 방지)
            ds.clear();
            var objSample = obj.data[0];
            for (var key in objSample)
            {
                var colInfo = new ColumnInfo();
                colInfo.type     = "String";
                colInfo.datapath = "@." + key;
                ds.addColumnInfo(key.toUpperCase(), colInfo);
            }
            this.ds_result.binddataobject = obj.id;
            this.ds_result.dataobjectpath = "$.data[*]";
            grd.binddataset = this.ds_result.name;
            grd.createFormat();
            grd.autofittype = "col";
            this.stc_status.set_text("✔ 조회 완료: " + ds.rowcount + "건 / 컬럼 수: " + ds.getColCount());
            this.stc_result.set_text("serviceid=" + e.serviceid + " | 첫 번째 컬럼: " + ds.getColumn(0, 0));
        };

        this.dobj_api_onerror = function(obj, e)
        {
            trace("[onerror] " + e.statuscode + ":" + e.errormsg);
            this.stc_status.set_text("통신 오류: " + e.statuscode + " / " + e.errormsg);
        };

        this.btn_clear_onclick = function(obj, e)
        {
            // Div 내 동적 생성 컴포넌트는 div.form.all[id] 로 접근
            var grd  = this.div_grid.form.all["grd_result"];
            var ds   = this["ds_result"];
            var dobj = this["dobj_api"];
            if (grd)  { this.div_grid.removeChild("grd_result"); grd.destroy(); }
            if (ds)   { this.removeChild("ds_result"); ds.destroy(); }
            if (dobj) { this.removeChild("dobj_api");  dobj.destroy(); }
            this.bCreated = false;
            this.stc_status.set_text("DataObject / Dataset / Grid 삭제 완료");
            this.stc_result.set_text("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DataObjectSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_users.addEventHandler("onclick",this.btn_users_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("DataObjectSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=DataObjectSample.xfdl.js.map
