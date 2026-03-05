(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popupList");
            this.set_titletext("샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn01","60.00","60","152","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자회사 처리자 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00","420.00","60","172","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("즐겨찾기 관리 (관리자)");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","230.00","60","172","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("즐겨찾기 관리 (신청자)");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00_01","610","60","192","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("계정/작업그룹/권한 이력");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("샘플");

                p.btn01.set_taborder("0");
                p.btn01.set_text("자회사 처리자 등록");
                p.btn01.move("60.00","60","152","40",null,null);

                p.btn01_00.set_taborder("1");
                p.btn01_00.set_text("즐겨찾기 관리 (관리자)");
                p.btn01_00.move("420.00","60","172","40",null,null);

                p.btn01_00_00.set_taborder("2");
                p.btn01_00_00.set_text("즐겨찾기 관리 (신청자)");
                p.btn01_00_00.move("230.00","60","172","40",null,null);

                p.btn01_00_01.set_taborder("3");
                p.btn01_00_01.set_text("계정/작업그룹/권한 이력");
                p.btn01_00_01.move("610","60","192","40",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popupList.xfdl", function() {
        this.objApp = nexacro.getApplication();

        // 자회사 처리자 등록
        this.btn01_onclick = function(obj,e)
        {
        	var sTitle = "자회사 처리자 등록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		//, width: 1400
        		//, height: 1000
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("COM024P082", "work::COM/sysMng/COM024P082.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.btn01_00_onclick = function(obj,e)
        {
        	var sTitle = "즐겨찾기 관리";
        	var objArg   = {};

        	var mngrYn = this.objApp.gdsUser.getColumn(0, "userId"); // 관리자여부
        	if(mngrYn == "Y") {
        		sTitle = "(관리자) 즐겨찾기 관리";
        	}

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 1100
        		, height: 600
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("COM041P04", "work::COM/bkmk/COM041P04.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.btn01_00_00_onclick = function(obj,e)
        {
        	var sTitle = "신청자 즐겨찾기 등록/관리";
        	var objArg   = { "menuId" : this.objApp.gvFrmLeft.form.currsMenuId
        	               , "menuNm" : this.objApp.gdsOpenMenu.getColumn(this.objApp.gdsOpenMenu.findRow("MENU_ID", this.objApp.gvFrmLeft.form.currsMenuId), "MENU_NM")
        				   };

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 900
        		, height: 660
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("COM041P02", "work::COM/bkmk/COM041P02.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.btn01_00_01_onclick = function(obj,e)
        {
        	var userNm = this.objApp.gdsUser.getColumn(0, "userNm");
        	var sTitle = "계정/작업그룹/권한 이력 (" + userNm + ")";
        	var objArg   = { "userId" : this.objApp.gdsUser.getColumn(0, "userId")
        				   };

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		//, width: 1000
        		//, height: 1100
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("COM041P02", "work::COM/sysMng/COM024P062.xfdl", objArg, sPopupCallBack, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn01_00.addEventHandler("onclick",this.btn01_00_onclick,this);
            this.btn01_00_00.addEventHandler("onclick",this.btn01_00_00_onclick,this);
            this.btn01_00_01.addEventHandler("onclick",this.btn01_00_01_onclick,this);
        };
        this.loadIncludeScript("popupList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
