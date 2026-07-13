(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_PopupMenu_P_navigationbuttonsize_01");
            this.set_scrollpropagation("true false");
            this.set_titletext("TA_PopupMenu_P_navigationbuttonsize_01");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_menu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "idcolumn","size" : "256","type" : "STRING"},{"id" : "captioncolumn","size" : "256","type" : "STRING"},{"id" : "levelcolumn","size" : "256","type" : "STRING"},{"id" : "iconcolumn","size" : "256","type" : "STRING"},{"id" : "enablecolumn","size" : "256","type" : "STRING"},{"id" : "checkboxcolumn","size" : "256","type" : "STRING"},{"id" : "hotkeycolumn","size" : "256","type" : "STRING"},{"id" : "userdatcolumn","size" : "256","type" : "STRING"}]},"Rows" : [{"idcolumn" : "1","captioncolumn" : "File","levelcolumn" : "0","checkboxcolumn" : "false","hotkeycolumn" : "F","iconcolumn" : "file","userdatcolumn" : "abc"},{"idcolumn" : "2","captioncolumn" : "New","levelcolumn" : "1","enablecolumn" : "true","hotkeycolumn" : "CTRL+N","iconcolumn" : "theme://images/signal_Green.png"},{"idcolumn" : "3","captioncolumn" : "Open","levelcolumn" : "1","hotkeycolumn" : "CTRL+O","enablecolumn" : "true","iconcolumn" : "open"},{"idcolumn" : "4","captioncolumn" : "추가1","levelcolumn" : "0"},{"idcolumn" : "5","captioncolumn" : "추가2","levelcolumn" : "0"},{"idcolumn" : "6","captioncolumn" : "추가3","levelcolumn" : "0"},{"idcolumn" : "7","captioncolumn" : "추가4","levelcolumn" : "0"},{"idcolumn" : "8","captioncolumn" : "추가5","levelcolumn" : "0"},{"idcolumn" : "4","captioncolumn" : "Project","levelcolumn" : "2","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+P","enablecolumn" : "true","iconcolumn" : "projectopen"},{"idcolumn" : "5","captioncolumn" : "File..","levelcolumn" : "2","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+F","enablecolumn" : "true","iconcolumn" : "fileopen"},{"idcolumn" : "6","captioncolumn" : "Save","levelcolumn" : "1","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+S","enablecolumn" : "true","iconcolumn" : "save"},{"idcolumn" : "7","captioncolumn" : "Exit","levelcolumn" : "1","enablecolumn" : "false","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+E","iconcolumn" : "exit"},{"idcolumn" : "8","captioncolumn" : "Edit","levelcolumn" : "0","enablecolumn" : "false","hotkeycolumn" : "E","iconcolumn" : "edit0"},{"idcolumn" : "9","captioncolumn" : "Cut","levelcolumn" : "1","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+X","enablecolumn" : "true","iconcolumn" : "cut"},{"idcolumn" : "10","captioncolumn" : "Copy","levelcolumn" : "1","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+C","enablecolumn" : "true","iconcolumn" : "copy"},{"idcolumn" : "11","captioncolumn" : "Undo","levelcolumn" : "1","checkboxcolumn" : "false","hotkeycolumn" : "CTRL+U","enablecolumn" : "true","iconcolumn" : "undo"},{"idcolumn" : "12","captioncolumn" : "1","levelcolumn" : "0","enablecolumn" : "true","iconcolumn" : "theme://images/signal_Red.png"},{"idcolumn" : "13","captioncolumn" : "1-1","levelcolumn" : "1","enablecolumn" : "true","iconcolumn" : "theme://images/signal_Red.png"},{"idcolumn" : "14","captioncolumn" : "1-2","levelcolumn" : "1","enablecolumn" : "true","iconcolumn" : "theme://images/signal_Red.png"},{"idcolumn" : "15","captioncolumn" : "1-2-1","levelcolumn" : "2","enablecolumn" : "true","iconcolumn" : "theme://images/signal_Red.png"},{"idcolumn" : "16","captioncolumn" : "1-2-2","levelcolumn" : "2","iconcolumn" : "theme://images/signal_Red.png","enablecolumn" : "true"},{"idcolumn" : "17","captioncolumn" : "1-2-2-1","levelcolumn" : "3","iconcolumn" : "theme://images/signal_Yellow.png","enablecolumn" : "true"},{"idcolumn" : "18","levelcolumn" : "0","captioncolumn" : "추가01"},{"idcolumn" : "19","levelcolumn" : "0","captioncolumn" : "추가02"},{"idcolumn" : "20","levelcolumn" : "0","captioncolumn" : "추가03"},{"idcolumn" : "21","levelcolumn" : "0","captioncolumn" : "추가04"},{"idcolumn" : "22","levelcolumn" : "0","captioncolumn" : "추가05"},{"idcolumn" : "23","captioncolumn" : "추가06","levelcolumn" : "0"},{"idcolumn" : "24","captioncolumn" : "추가07","levelcolumn" : "0"},{"idcolumn" : "25","captioncolumn" : "추가08","levelcolumn" : "0"},{"idcolumn" : "26","captioncolumn" : "추가09","levelcolumn" : "0"},{"idcolumn" : "27","captioncolumn" : "추가10","levelcolumn" : "0"},{"idcolumn" : "28","captioncolumn" : "추가11","levelcolumn" : "0"},{"idcolumn" : "29","captioncolumn" : "추가12","levelcolumn" : "0"},{"idcolumn" : "30","captioncolumn" : "추가13","levelcolumn" : "0"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","30","301","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[TA_PopupMenu_P_navigationbuttonsize_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.PopupMenu("pmnu00","16","502","174","37",null,null,null,null,"5","10",this);
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_innerdataset("ds_menu");
            obj.set_itemheight("80");
            obj.set_levelcolumn("levelcolumn");
            obj.set_popuptype("normal");
            obj.set_userdatacolumn("userdatcolumn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("trackPopup_btn","210","70","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("trackPopup -> click");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","340","70","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("trackPopup");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("A_PopupMenu_P_navigationbuttonsize_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : PopupMenu navigationbuttonsize Property
        * 작성일    : 2019.03.29
        * 작성자    : 주인희
        * 수정이력  :
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.29  주인희   최초 작성
        *     2022.10.14  한우진   [RP 94710] navigationbuttonsize 1 감소에 따른 수정.
        **********************************************************************
        */
        //include "lib::libCommon.xjs";
        //include "libevent::event.util.xjs";

        //var tapi = this.gfnLoadTestAPI(0.71);
        //this.dev_status = tapi.DEV_HOLD;

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.pmnu = this.pmnu00;
        this.btn = this.trackPopup_btn;
        this.dataset = this.ds_menu;


        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/


        /***********************************************************************
        * 04 : 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.TA_PopupMenu_P_navigationbuttonsize_01_onload = function(obj,e)
        {

        };

        /***********************************************************************
        * 05 : Runner API, Application Runner 띄우지 않고 실행하기 위함
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {

        };


        /***********************************************************************
        * 06 : 이벤트선언부
        ***********************************************************************/

        this.pmnu00_onmenuclick = function(obj,e)
        {

        };

        /***********************************************************************
        * 07 : 사용자정의함수선언부
        ***********************************************************************/
        this.trackPopup_btn_onclick = function(obj,e)
        {
        	//popupmenu 실행해서 메뉴 클릭하는 부분.
        	var comp = this.pmnu;
        	this.pmnu.trackPopup(300, 100);

        	//popupmenu 선택
        	nexacro.test.Event.nx_common_click(comp, 'lbutton', false, false, false, 25, 10);

        	setTimeout(function() {
        		nexacro.test.Event.nx_common_dispatchMouseEvent(comp, 'mousemove', '', false, false, false, 117, 35);
        		nexacro.test.Event.nx_common_dispatchMouseEvent(comp, 'mouseenter', '', false, false, false, 117, 35);
        		nexacro.test.Event.nx_common_click(comp, 'lbutton', false, false, false, 117, 35);

        		nexacro.test.Event.nx_common_dispatchMouseEvent(comp, 'mousemove', '', false, false, false, 236, 35);
        		nexacro.test.Event.nx_common_dispatchMouseEvent(comp, 'mouseenter', '', false, false, false, 236, 35);
        		nexacro.test.Event.nx_common_click(comp, 'lbutton', false, false, false, 236, 35);
        	}, 100);
        };


        //팝업메뉴 보기만할때
        this.btn01_onclick = function(obj,e)
        {
        	this.pmnu.trackPopup(300, 100);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_PopupMenu_P_navigationbuttonsize_01_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.pmnu00.addEventHandler("onmenuclick",this.pmnu00_onmenuclick,this);
            this.trackPopup_btn.addEventHandler("onclick",this.trackPopup_btn_onclick,this);
            this.trackPopup_btn.addEventHandler("onlbuttondown",this.trackPopup_btn_onlbuttondown,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("A_PopupMenu_P_navigationbuttonsize_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
