(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TabSample");
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
            obj.set_text("Tab 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","900","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.Tab() 으로 Tab을 동적 생성하고 insertTabpage()로 탭 페이지를 추가합니다.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_create","10","74","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Tab 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_addPage","120","74","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("탭 페이지 추가");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_delPage","250","74","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("탭 페이지 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","380","74","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Tab 삭제");
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
        this.registerScript("TabSample.xfdl", function(nexacro, system, trace, environment, application) {

        // this.bCreated, this.nPageCount (Form 속성) 으로 관리 — var 클로저 변수 사용 금지

        this.TabSample_onload = function(obj, e)
        {
            this.bCreated   = false;
            this.nPageCount = 0;
        };

        this.btn_create_onclick = function(obj, e)
        {
            if (this.bCreated) { this.stc_result.set_text("이미 생성되어 있습니다. 먼저 삭제하세요."); return; }

            // Tab 동적 생성
            var objTab = new nexacro.Tab("tab_dyn", 5, 5, 1230, 510, null, null);
            this.div_area.addChild("tab_dyn", objTab);
            objTab.show();

            // 초기 탭 페이지 3개 추가
            for (var i = 1; i <= 3; i++)
            {
                this.nPageCount++;
                var pageId = "TabPage" + this.nPageCount;
                objTab.insertTabpage(pageId, -1);
                var page = objTab.tabpages[this.nPageCount - 1];
                if (page)
                {
                    page.set_text("탭 " + this.nPageCount);
                    var stc = new nexacro.Static("stc_page_" + this.nPageCount, 20, 20, 600, 40, null, null);
                    stc.set_text("탭 " + this.nPageCount + " 의 내용입니다. (new nexacro.Tab + insertTabpage로 동적 생성)");
                    stc.set_font("14 'Malgun Gothic'");
                    page.form.addChild("stc_page_" + this.nPageCount, stc);
                    stc.show();
                }
            }
            objTab.addEventHandler("onchanged", this.dynTab_onchanged, this);

            this.bCreated = true;
            this.stc_result.set_text("new nexacro.Tab() 생성 완료! 초기 탭 수: " + this.nPageCount);
        };

        this.btn_addPage_onclick = function(obj, e)
        {
            var objTab = this.div_area.form.all["tab_dyn"];
            if (!objTab) { this.stc_result.set_text("먼저 Tab을 생성하세요."); return; }

            this.nPageCount++;
            var pageId = "TabPage" + this.nPageCount;
            objTab.insertTabpage(pageId, -1);
            var page = objTab.tabpages[objTab.getTabpageCount() - 1];
            if (page)
            {
                page.set_text("탭 " + this.nPageCount);
                var stc = new nexacro.Static("stc_page_" + this.nPageCount, 20, 20, 600, 40, null, null);
                stc.set_text("탭 " + this.nPageCount + " 동적 추가 (insertTabpage)");
                stc.set_font("14 'Malgun Gothic'");
                page.form.addChild("stc_page_" + this.nPageCount, stc);
                stc.show();
            }
            this.stc_result.set_text("탭 페이지 추가 완료. 전체 탭 수: " + objTab.getTabpageCount());
        };

        this.btn_delPage_onclick = function(obj, e)
        {
            var objTab = this.div_area.form.all["tab_dyn"];
            if (!objTab || objTab.getTabpageCount() == 0) { this.stc_result.set_text("삭제할 탭이 없습니다."); return; }
            var nLast = objTab.getTabpageCount() - 1;
            objTab.deleteTabpage(nLast);
            this.stc_result.set_text("마지막 탭 삭제 완료. 남은 탭 수: " + objTab.getTabpageCount());
        };

        this.dynTab_onchanged = function(obj, e)
        {
            this.stc_result.set_text("탭 전환: " + e.preindex + " → " + e.postindex);
        };

        this.btn_clear_onclick = function(obj, e)
        {
            var objTab = this.div_area.form.all["tab_dyn"];
            if (objTab) { this.div_area.removeChild("tab_dyn"); objTab.destroy(); }
            this.bCreated   = false;
            this.nPageCount = 0;
            this.stc_result.set_text("Tab 삭제 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TabSample_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_addPage.addEventHandler("onclick",this.btn_addPage_onclick,this);
            this.btn_delPage.addEventHandler("onclick",this.btn_delPage_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("TabSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=TabSample.xfdl.js.map
