(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(248,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sidemnu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Lev","type" : "STRING","size" : "256"},{"id" : "MENU_1depth","type" : "STRING","size" : "256"},{"id" : "MENU_2depth","type" : "STRING","size" : "256"},{"id" : "MENU_3depth","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_1depth" : "1Depth-title","Lev" : "0","MENU_3depth" : "3Depth","MENU_2depth" : "2Depth"},{"MENU_1depth" : "1Depth-title","Lev" : "1","MENU_3depth" : "3Depth","MENU_2depth" : "2Depth"},{"MENU_1depth" : "1Depth-title","Lev" : "2","MENU_3depth" : "3Depth"},{"MENU_1depth" : "1Depth-title","Lev" : "2","MENU_3depth" : "3Depth"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "MENU_LV","type" : "STRING","size" : "256"},{"id" : "HIPO_MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"},{"id" : "MODULE_CD","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",248,1200,this,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        /**
        *  KRDS
        *  @FileName 	frmLeft.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/03/24
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/03/24			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvBtnPrefix 	= "LEFT_";
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	this.fnLoad(this.objApp.gdsMenu.getColumn(0,this.FRAME_MENUCOLUMNS.menuId));
        };

        /**
         * @description menu를 dsMenu로 copy
         */
        this.fvGroupId = "";
        this.fvMenuId = "";
        this.fnLoad = function (sGroupId, sWorkMenuId)
        {
        	this.fvGroupId = sGroupId;
        	this.fvMenuId = sWorkMenuId;
        	//trace("sGroupId : " + sGroupId);
        	var sFilter = this.FRAME_MENUCOLUMNS.groupId + " == '" + sGroupId + "' ";
        	this.objApp.gdsMenu.filter(sFilter);
        	// Top 메뉴 복사
        	this.dsMenu.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");
        	// Top 메뉴 셋팅
        	this.fnSetMenu(sWorkMenuId);
        };

        /**
         * @description menu 셋팅
         */
        this.fnSetMenu = function (sWorkMenuId)
        {
        	for (var i = this.components.length - 1; i > -1; i--) {
        		var objDel = this.removeChild(this.components[i].name);
        		objDel.destroy();
        		objDel = null;
        	}
        	//for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	{
        		var sMenuId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var sMenuName = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm);
        		var sUpMenuId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.upMenuId);
        		var sMenuUrl = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuUrl);
        		//var sGroupId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.groupId);
        		var nMenuLevel = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuLevel);
        		this.fnCreateMenu(sMenuId, sMenuName, nMenuLevel, sUpMenuId, sMenuUrl, i);
        	}
            //if(s2DepId) this.components[this.fvBtnPrefix+s2DepId].click();
        	var nHeight=0;
        	for (var i = 0; i < this.components.length; i++)
        	{
        		var objComp = this.components[i];
        		//trace("objComp.name : " + objComp.name + " obj.menuid : " + obj.menuid + " objComp.upmenuid : " + objComp.upmenuid);
        		if(objComp.visible) {
        		    //trace("objComp.name : " + objComp.name);
        			nHeight+=nexacro.toNumber(objComp.height);
        		}
        	}

        	//trace("nHeight : " + nHeight);
        	this.parent.height = nHeight;
        	this.resetScroll();
        };

        /**
         * @description menu creation
         */
        this.fnCreateMenu = function (sMenuId, sMenuName, nMenuLevel, sUpMenuId, sMenuUrl, index)
        {
        	//trace("sMenuId : " + sMenuId + " sMenuName : " + sMenuName + " nMenuLevel : " + nMenuLevel + " sUpMenuId : " + sUpMenuId + " sMenuUrl : " + sMenuUrl + " index : " + index);
        	var sClass = "";
        	if(nMenuLevel == 0){
        		var objComp = new Static();
        		objComp.init(this.fvBtnPrefix + sMenuId, 0, 0, "248", "76", null, null);
        		sClass = "sta_WF_Side1dpe";
        		objComp.accessibilityrole = "heading2";
        	}else if(nMenuLevel == 1){
        		var objComp = new Button();
        		objComp.init(this.fvBtnPrefix + sMenuId, 0, 0, "248", "58", null, null);
        		if(this.dsMenu.findRow( this.FRAME_MENUCOLUMNS.upMenuId, sMenuId ) > -1){
        		    sClass = "btn_WF_Side2depExp";
        			objComp.accessibilitydescription = "펼침";
        		}else{
        		    sClass = "btn_WF_Side2dep";
        		}
        		objComp.setEventHandler("onclick", this.btnLeftMenu_onclick, this);
        	}else if(nMenuLevel == 2){
        		var objComp = new Button();
        		objComp.init(this.fvBtnPrefix + sMenuId, 0, 0, "248", "42", null, null);
        		sClass = "btn_WF_SideLastdep";
        		//objComp.visible = false;
        		var sUpMenuId2 = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId, this.FRAME_MENUCOLUMNS.upMenuId);
        		//if(sUpMenuId == sUpMenuId2) {
        		//	objComp.visible = true;
        		//}else{
        		//    objComp.visible = false;
        		//}
        		objComp.accessibilityrole = "link";
        		objComp.setEventHandler("onclick", this.btnLeftMenu_onclick, this);
        	}

        	this.addChild(objComp.name, objComp);
        	objComp.set_text(sMenuName);
        	objComp.cssclass = sClass;
        	objComp.menuid = sMenuId;
        	objComp.upmenuid = sUpMenuId;
        	objComp.menuurl = sMenuUrl;
        	objComp.show();
        };

        this.btnLeftMenu_onclick = function (obj, e)
        {
        	//trace("btnLeftMenu_onclick : obj.menuurl : " + obj.menuurl);
        	if(obj.cssclass == "btn_WF_SideLastdep") {
        		this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        		return;
        	}else if(obj.cssclass == "btn_WF_Side2dep") {
        		this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        		return;
        	}else {
        		if(obj.cssclass == "btn_WF_Side2depColl"){
        			obj.cssclass = "btn_WF_Side2depExp";
        			obj.accessibilitydescription = "펼침";
        		}else{
        			obj.cssclass = "btn_WF_Side2depColl";
        			obj.accessibilitydescription = "접기";
        		}
        	}
        	var nHeight=0;
        	for (var i = 0; i < this.components.length; i++)
        	{
        		var objComp = this.components[i];
        		if(objComp.upmenuid == obj.menuid) {
        			objComp.visible = !objComp.visible;
        		}
        		if(objComp.visible) {
        			nHeight+=nexacro.toNumber(objComp.height);
        		}
        	}

        	//trace("nHeight : " + nHeight);
        	this.parent.height = nHeight;
        	this.resetScroll();
        	//this.parent.parent.parent.parent.resetScroll();
        	this.getOwnerFrame().form.resetScroll();

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
