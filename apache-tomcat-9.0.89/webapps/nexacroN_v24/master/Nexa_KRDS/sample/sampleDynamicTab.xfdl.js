(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDynamicTab");
            this.set_titletext("Tabpage 동적 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","0","0","316","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Tabpage 동적생성");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00_00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","213","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("DynamicTabpage");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","100","888","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("탭페이지");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00:16",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_horizontalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTabpageMove\"/><PanelItem id=\"PanelItem01\" componentid=\"btnAddTabpageM\"/><PanelItem id=\"PanelItem02\" componentid=\"btnDelTabpage\"/><PanelItem id=\"PanelItem03\" componentid=\"btnAddTabpage\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnTabpageMove",null,"50","231","48","819",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("현재탭을 제일앞으로 이동");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddTabpageM",null,"50","234","48","577",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("특정위치에 Tabpage  생성");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelTabpage",null,"50","136","48","433",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("TabPage 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddTabpage",null,null,"130","48","20","688",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TabPage생성");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","0","Panel00:24",null,"790","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabMain);
            obj.set_text("Tabpage1");
            obj.set_url("sample::sampleDynamicTabLink.xfdl");
            this.tabMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabMain.Tabpage1
            obj = new Layout("default","",0,0,this.tabMain.Tabpage1.form,function(p){});
            this.tabMain.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1100,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::sampleDynamicTabLink.xfdl");
        };
        
        // User Script
        this.registerScript("sampleDynamicTab.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleDynamicTab.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/14
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/14			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnGetMaxCnt = function ()
        {
        	var nMax = -1;
        	for( var i=0; i<this.tabMain.getTabpageCount(); i++){
        		var sCompaId = parseInt(this.tabMain.tabpages[i].id.replace("Tabpage",""));
        		if( sCompaId > nMax) nMax = sCompaId;
        	}
        	return nMax;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnAddTabpage_onclick = function(obj,e)
        {
        	var nMax = this.fnGetMaxCnt() + 1;
        	var sNewId = "Tabpage"+nMax;
        	var nIndex = this.tabMain.insertTabpage(sNewId, -1);
        	if (nIndex > -1) this.tabMain.tabpages[nIndex].set_url("sample::sampleDynamicTabLink.xfdl");
        };

        this.btnDelTabpage_onclick = function(obj,e)
        {
        	this.tabMain.removeTabpage(this.tabMain.tabindex);
        };

        this.btnAddTabpageM_onclick = function(obj,e)
        {
        	var nMax = this.fnGetMaxCnt() + 1;
        	var sNewId = "Tabpage"+nMax;

        	var nIndex = this.tabMain.insertTabpage(sNewId, 1);
        	if (nIndex > -1) this.tabMain.tabpages[nIndex].set_url("sample::sampleDynamicTabLink.xfdl");
        };

        this.tabMain_onextrabuttonclick = function(obj,e)
        {
        	var nIdx = e.index;
        	this.tabMain.removeTabpage(nIdx);
        };

        this.btnTabpageMove_onclick = function(obj,e)
        {
        	var nIdx = this.tabMain.tabindex;
        	this.tabMain.moveTabpage(nIdx, 0);
        };

        //drag & drop으로 index변경
        this.tabMain_ondrop = function(obj,e)
        {
        	var nEndIdx = this.tabMain.getIndex(e.clientx, e.clienty);
        	var nStartIdx = e.userdata;
        	if( nEndIdx == -1 ){
        		nEndIdx = this.tabMain.getTabpageCount() -1;
        	}
        	this.tabMain.moveTabpage(nStartIdx, nEndIdx);
        };

        this.tabMain_ondrag = function(obj,e)
        {
        	var nStartIdx = this.tabMain.getIndex(e.canvasx, e.canvasy);
        	e.set_userdata(nStartIdx);
        	return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnTabpageMove.addEventHandler("onclick",this.btnTabpageMove_onclick,this);
            this.btnAddTabpageM.addEventHandler("onclick",this.btnAddTabpageM_onclick,this);
            this.btnDelTabpage.addEventHandler("onclick",this.btnDelTabpage_onclick,this);
            this.btnAddTabpage.addEventHandler("onclick",this.btnAddTabpage_onclick,this);
            this.tabMain.addEventHandler("onextrabuttonclick",this.tabMain_onextrabuttonclick,this);
            this.tabMain.addEventHandler("ondrop",this.tabMain_ondrop,this);
            this.tabMain.addEventHandler("ondrag",this.tabMain_ondrag,this);
        };
        this.loadIncludeScript("sampleDynamicTab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
