(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wplbkMaster");
            this.set_titletext("경영계획부 마스터화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,6030);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tabWplbk","0","0",null,"6010","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Tab0");
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_preload("false");
            obj.set_visible("true");
            obj.set_tabposition("top");
            obj.set_selectchangetype("up");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.tabWplbk);
            obj.set_text("경영계획부");
            obj.set_url("business::mngmtPlan/wplbk/wplbkView.xfdl");
            this.tabWplbk.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.tabWplbk);
            obj.set_text("사업실적");
            obj.set_url("business::mngmtPlan/wplbk/wplbkBizPrfmncView.xfdl");
            this.tabWplbk.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.tabWplbk);
            obj.set_text("이력");
            obj.set_url("business::mngmtPlan/wplbk/wplbkChgHstryView.xfdl");
            this.tabWplbk.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabWplbk.tab1
            obj = new Layout("default","",0,0,this.tabWplbk.tab1.form,function(p){});
            this.tabWplbk.tab1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabWplbk.tab2
            obj = new Layout("default","",0,0,this.tabWplbk.tab2.form,function(p){});
            this.tabWplbk.tab2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabWplbk.tab3
            obj = new Layout("default","",0,0,this.tabWplbk.tab3.form,function(p){});
            this.tabWplbk.tab3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1240,6030,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","business::mngmtPlan/wplbk/wplbkView.xfdl");
            this._addPreloadList("fdl","business::mngmtPlan/wplbk/wplbkBizPrfmncView.xfdl");
            this._addPreloadList("fdl","business::mngmtPlan/wplbk/wplbkChgHstryView.xfdl");
        };
        
        // User Script
        this.addIncludeScript("wplbkMaster.xfdl","lib::lib_nfm.xjs");
        this.registerScript("wplbkMaster.xfdl", function() {
        /**
        *  경영계획부 마스터
        *  @MenuPath    경영계획 > 경영계획부 관리 > 경영계획부 마스터
        *  @FileName 	wplbkMaster.xfdl
        *  @Creator 	hdh
        *  @CreateDate 	2024.08.30
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2024.08.30     		hdh(svn user) 	        최초 생성
        *******************************************************************************
        */
        this.executeIncludeScript("lib::lib_nfm.xjs"); /*include "lib::lib_nfm.xjs"*/;
        const publicArgs = this.gfnGetMdiRootDiv() ? this.gfnGetMdiRootDiv().arguments.menuParam : this.getOwnerFrame();

        this.form_onload = function(obj,e) {
        	this.gfnFormOnLoad(obj,e); //필수함수
        };


        this.tabWplbk_onchanged = function(obj,e){
        	if(e.postindex == 0) {
        		obj.setOffsetHeight(6010);
        		//this.gfnResizeFrameHeight(this.form, true);

        		if(publicArgs.formType == 'POPUP') {
        			this.parent.parent.fn_setHeight(6010);
        		}
        	} else if(e.postindex == 1) {
        		obj.setOffsetHeight(1900);
        		//this.gfnResizeFrameHeight(this.form, true);

        		if(publicArgs.formType == 'POPUP') {
        			this.parent.parent.fn_setHeight(1900);
        		}
        	} else if(e.postindex == 2) {
        		obj.setOffsetHeight(1420);
        		//this.gfnResizeFrameHeight(this.form, true);

        		if(publicArgs.formType == 'POPUP') {
        			this.parent.parent.fn_setHeight(1420);
        		}
        	}
        	this.gfnResizeFrameHeight(this.form, true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.tabWplbk.addEventHandler("onchanged",this.tabWplbk_onchanged,this);
        };
        this.loadIncludeScript("wplbkMaster.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
