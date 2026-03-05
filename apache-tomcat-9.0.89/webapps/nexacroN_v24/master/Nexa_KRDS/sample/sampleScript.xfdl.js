(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleScript");
            this.set_titletext("스크립트샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,2578);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스크립트 표준");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","119","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Script");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","100",null,"2346","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_spacing("40px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","41","126","100%","2264",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("code snippet에 아래 내용 추가 후 사용\n\n/**\n*  devPro\n*  @FileName \t$FILE_BASE$.$FILE_EXT$\n*  @Creator \tTOBESOFT\n*  @CreateDate \t$DATE$\n*  @Description \n************** 소스 수정 이력 ***********************************************\n* Date\t\t\t\t\tModifier\t\t\t\t\tDescription\n*******************************************************************************\n* $DATE$\t\t\tTOBESOFT\t\t\t\t\t최초생성\n*******************************************************************************\n*/\n\n/***********************************************************************************************\n * FORM 변수 선언 영역\n***********************************************************************************************/\n\n/***********************************************************************************************\n * FORM EVENT 영역(onload, onbeforeclose..)\n***********************************************************************************************/\nthis.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)\n{\n\tthis.gfnFormOnload(obj,e); //필수함수\n\t$end$\n};\n\n/************************************************************************************************\n * 공통함수영역\n(cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)\n************************************************************************************************/\n//조회\nthis.cfnSearch = function ()\n{\n\t//TODO..\n};\n\n//추가\nthis.cfnAdd = function ()\n{\n\t//TODO..\n};\n\n//삭제\nthis.cfnDel = function ()\n{\n\t//TODO..\n};\n\n//저장\nthis.cfnSave = function ()\n{\n\t//TODO..\n};\n\n//추가버튼1\nthis.cfnbtnAdd1 = function ()\n{\n\tthis.gfnAlert(\"msg.general\", [\"추가버튼1입니다.\"]);\n\treturn;\n};\n\n//추가버튼2\nthis.cfnbtnAdd2 = function ()\n{\n\tthis.gfnAlert(\"msg.general\", [\"추가버튼2입니다.\"]);\n\treturn;\n};\n\n/***********************************************************************************************\n * Transaction 서비스호출 처리 영역\n***********************************************************************************************/\n\n/***********************************************************************************************\n * Callback 영역 (Transaction, popup, message..)\n***********************************************************************************************/\n\n/***********************************************************************************************\n * 사용자 Function 영역\n***********************************************************************************************/\n\n/**********************************************************************************************\n * 각 COMPONENT 별 EVENT 영역\n************************************************************************************************/");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"Panel00:40","90","48","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("복사");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,2578,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("스크립트샘플");

                p.Static00.set_taborder("0");
                p.Static00.set_text("스크립트 표준");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","220","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Script");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","119","60",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_cssclass("pnl_WF_Detailbox");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_spacing("40px");
                p.Panel00.move("0","100",null,"2346","0",null);

                p.TextArea00.set_taborder("4");
                p.TextArea00.set_value("code snippet에 아래 내용 추가 후 사용\n\n/**\n*  devPro\n*  @FileName \t$FILE_BASE$.$FILE_EXT$\n*  @Creator \tTOBESOFT\n*  @CreateDate \t$DATE$\n*  @Description \n************** 소스 수정 이력 ***********************************************\n* Date\t\t\t\t\tModifier\t\t\t\t\tDescription\n*******************************************************************************\n* $DATE$\t\t\tTOBESOFT\t\t\t\t\t최초생성\n*******************************************************************************\n*/\n\n/***********************************************************************************************\n * FORM 변수 선언 영역\n***********************************************************************************************/\n\n/***********************************************************************************************\n * FORM EVENT 영역(onload, onbeforeclose..)\n***********************************************************************************************/\nthis.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)\n{\n\tthis.gfnFormOnload(obj,e); //필수함수\n\t$end$\n};\n\n/************************************************************************************************\n * 공통함수영역\n(cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)\n************************************************************************************************/\n//조회\nthis.cfnSearch = function ()\n{\n\t//TODO..\n};\n\n//추가\nthis.cfnAdd = function ()\n{\n\t//TODO..\n};\n\n//삭제\nthis.cfnDel = function ()\n{\n\t//TODO..\n};\n\n//저장\nthis.cfnSave = function ()\n{\n\t//TODO..\n};\n\n//추가버튼1\nthis.cfnbtnAdd1 = function ()\n{\n\tthis.gfnAlert(\"msg.general\", [\"추가버튼1입니다.\"]);\n\treturn;\n};\n\n//추가버튼2\nthis.cfnbtnAdd2 = function ()\n{\n\tthis.gfnAlert(\"msg.general\", [\"추가버튼2입니다.\"]);\n\treturn;\n};\n\n/***********************************************************************************************\n * Transaction 서비스호출 처리 영역\n***********************************************************************************************/\n\n/***********************************************************************************************\n * Callback 영역 (Transaction, popup, message..)\n***********************************************************************************************/\n\n/***********************************************************************************************\n * 사용자 Function 영역\n***********************************************************************************************/\n\n/**********************************************************************************************\n * 각 COMPONENT 별 EVENT 영역\n************************************************************************************************/");
                p.TextArea00.set_cssclass("txt_WF_Nochar");
                p.TextArea00.move("41","126","100%","2264",null,null);

                p.Button00.set_taborder("5");
                p.Button00.set_text("복사");
                p.Button00.move(null,"Panel00:40","90","48","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,2578,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_spacing("16px");

                p.TextArea00.move("17","117","99.55357142857143%","2313",null,null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleScript.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleScript.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/30
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/30			TOBESOFT					최초생성
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
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가버튼1
        this.cfnbtnAdd1 = function ()
        {
        	this.gfnAlert("msg.general", ["추가버튼1입니다."]);
        	return;
        };

        //추가버튼2
        this.cfnbtnAdd2 = function ()
        {
        	this.gfnAlert("msg.general", ["추가버튼2입니다."]);
        	return;
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.TextArea00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.TextArea00.addEventHandler("onchanged",this.TextArea00_onchanged,this);
        };
        this.loadIncludeScript("sampleScript.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
