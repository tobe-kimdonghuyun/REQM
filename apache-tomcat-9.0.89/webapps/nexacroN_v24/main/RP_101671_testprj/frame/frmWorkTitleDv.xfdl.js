(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWorkTitleDv");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_MainTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","65.00","270","90","39",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Search");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            obj.set_taborder("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divAddBtn","237","256",null,"28","256",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGuide","1407.00","175","263","195",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu00","43","41","40","40",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Bookmark_S");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnMyMenu01","93","41","40","40",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Bookmark");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnInfo",null,"10","30","30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu",null,"10","30","30","btnInfo:10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Bookmark_S");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAddBtn.form
            obj = new Layout("default","",0,0,this.divAddBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divAddBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divAddBtn.form
            obj = new Layout("mobile","",0,0,this.divAddBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divAddBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnMyMenu00.set_taborder("0");
                p.btnMyMenu00.set_cssclass("btn_WF_Bookmark_S");
                p.btnMyMenu00.move("43","41","40","40",null,null);

                p.btnMyMenu01.set_taborder("1");
                p.btnMyMenu01.set_cssclass("btn_WF_Bookmark");
                p.btnMyMenu01.move("93","41","40","40",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("Layout0","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,50,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("none none");
                p.set_scrolltype("none");
                p.set_background("#ffffff");

                p.staTitle.set_taborder("4");
                p.staTitle.set_text("타이틀");
                p.staTitle.set_cssclass("sta_WF_MainTitle");
                p.staTitle.move("0","0",null,null,"0","0");

                p.btn00.set_cssclass("btn_WF_Search");
                p.btn00.set_text("조회");
                p.btn00.set_fittocontents("width");
                p.btn00.set_taborder("1");
                p.btn00.set_visible("false");
                p.btn00.move("65.00","270","90","39",null,null);

                p.divAddBtn.set_taborder("2");
                p.divAddBtn.set_text("");
                p.divAddBtn.set_visible("false");
                p.divAddBtn.set_maxwidth("");
                p.divAddBtn.move("237","256",null,"28","256",null);

                p.divGuide.set_taborder("5");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1407.00","175","263","195",null,null);

                p.btnInfo.set_taborder("3");
                p.btnInfo.set_cssclass("btn_WF_Info");
                p.btnInfo.move(null,"10","30","30","0",null);

                p.btnMyMenu.set_taborder("0");
                p.btnMyMenu.set_cssclass("btn_WF_Bookmark_S");
                p.btnMyMenu.move(null,"10","30","30","btnInfo:10",null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,44,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTitle.set_cssclass("sta_WF_MainTitleM");
                p.staTitle.move("0","0",null,null,"0","0");

                p.btnInfo.move(null,"10","30","30","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmWorkTitleDv.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	frmWorkTitleDv.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction   	업무화면의 타이틀&공통버튼 영역
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvMenuId = "";						// 화면 ID
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	this.fvMenuId = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);
        	//추가버튼조회
        // 	var oDs = nexacro.getApplication().gdsAddBtn;
        // 	oDs.filter("MENU_ID=='"+this.fvMenuId+"'");
        // 	this.dsAddBtn.copyData(oDs,true);
        // 	oDs.filter("");

        	// 마이메뉴 버튼 셋팅
        	/*this.fnSetMyMenuBtn();	*/
        };


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 마이메뉴버튼 css 셋팅<br>
        	즐겨찾기되어있는 화면 -> ★ <br>
        	즐겨찾기가안되있는화면 -> ☆
        */
        this.fnSetMyMenuBtn = function ()
        {
        	var objDs = this.objApp.gvFrmLeft.form.dsMyMenu;
        	var nRow = objDs.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);

        	if( nRow < 0 ) {
        		this.btnMyMenu.cssclass = "btn_WF_Bookmark";
        	}
        	else {
        		this.btnMyMenu.cssclass = "btn_WF_Bookmark_S";
        	}
        };

        /**
         * @description 추가버튼생성
        */
        this.fnMakeAddBtn = function (nLen)
        {
        	var sId 	= "";
        	var sTxt 	= "";
        	var sCss 	= "";
        	var nRight 	= 0;
        	var nWidth	= 40;
        	var nHeight = 40;
        	var oBtn 	= null;

        	for( var i=0; i<nLen;i++)
        	{
        		sId  = this.dsAddBtn.getColumn(i, "BTTN_ID");
        		sTxt = this.dsAddBtn.getColumn(i, "BTTN_NM");
        		sCss = this.dsAddBtn.getColumn(i, "BTTN_STYLE");

        		oBtn = new nexacro.Button;
        		oBtn.init(sId, null, 0, nWidth, nHeight, nRight, 0);
        		this.divAddBtn.addChild(sId, oBtn);

        		oBtn.addEventHandler("onclick", this.addBtn_onclick, this);
        		oBtn.set_cssclass(sCss);
        		oBtn.set_text(sTxt);
        		oBtn.set_fittocontents("width");
        		oBtn.show();

        		this.divAddBtn.form.resetScroll();

        		nRight += oBtn.getOffsetWidth() + 0;
        	}

        	this.divAddBtn.set_visible(true);
        };
        /**
         * @description  북마크버튼 css 변경
         * @param {Object} objBtn - 북마크 버튼
        */
        this.fnSetBookmarkCss = function(objBtn)
        {
        	if (this.gfnIsNull(objBtn)) return;

        	var sCssclass = objBtn.cssclass;

        	if (sCssclass == "btn_WF_Bookmark")
        	{
        		objBtn.set_cssclass("btn_WF_Bookmark_S");
        	} else
        	{
        		objBtn.set_cssclass("btn_WF_Bookmark");
        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);

        	switch(sPopupId)
        	{
        		case "myMenu_confirm":
        			if(oRtn.result == "Y") {
        				var sRow = this.objApp.gvFrmLeft.form.dsMyMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);
        				if(sRow == -1) {
        					var nRow = this.objApp.gdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);

        					var moduleCd = this.objApp.gdsMenu.getColumn(nRow, "MODULE_CD");
        					var displayPath = this.objApp.gdsMenu.getColumn(nRow, "DISPLAY_PATH");
        					var menuSeq = this.objApp.gdsMenu.getColumn(nRow, "MENU_SEQ");
        					var menuId = this.objApp.gdsMenu.getColumn(nRow, "MENU_ID");
        					var menuUrl = this.objApp.gdsMenu.getColumn(nRow, "MENU_URL");
        					var menuLvl = this.objApp.gdsMenu.getColumn(nRow, "MENU_LVL");
        					var menuNm = this.objApp.gdsMenu.getColumn(nRow, "MENU_NM");
        					var upMenuId = this.objApp.gdsMenu.getColumn(nRow, "UP_MENU_ID");
        					var prgrmId = this.objApp.gdsMenu.getColumn(nRow, "PRGM_ID");
        					var prgrmNm = this.objApp.gdsMenu.getColumn(nRow, "PRGM_NM");


        					var cRow = this.objApp.gvFrmLeft.form.dsMyMenu.insertRow();
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "MODULE_CD", moduleCd);
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "DISPLAY_PATH", displayPath);
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "MENU_SEQ", menuSeq);
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "MENU_ID", menuId);
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "MENU_URL", menuUrl);
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "MENU_LVL", menuLvl);
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "MENU_NM", menuNm);
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "UP_MENU_ID", upMenuId);
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "PRGM_ID", prgrmId);
        					this.objApp.gvFrmLeft.form.dsMyMenu.setColumn(cRow, "PRGM_NM", prgrmNm);

        				}

        				this.fnSetMyMenuBtn();
        			}
        			break;
        		case "myMenu_del_confirm":
        			var sRow = this.objApp.gvFrmLeft.form.dsMyMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);
        			this.objApp.gvFrmLeft.form.dsMyMenu.deleteRow(sRow);

        			this.fnSetMyMenuBtn();
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역x
        *******************************************************************************************************************************/
        this.btnMyMenu_onclick = function(obj,e)
        {
         	var nRow = this.objApp.gdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);
        	var menuNm = this.objApp.gdsMenu.getColumn(nRow, "MENU_NM");

        	var sRow = this.objApp.gvFrmLeft.form.dsMyMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);
        	if(sRow == -1) {
        		this.gfnConfirmMsg("myMenu_confirm", "MSG_015", "msgCallback", ["확인", "취소"], ["Y", "N"], "", [menuNm]);
        	} else {
        		this.gfnConfirmMsg("myMenu_del_confirm", "MSG_016", "msgCallback", ["확인", "취소"], ["Y", "N"], "", [menuNm]);
        	}




        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.divGuide.form.btnMyMenu00.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.divGuide.form.btnMyMenu01.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.btnInfo.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
        };
        this.loadIncludeScript("frmWorkTitleDv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
