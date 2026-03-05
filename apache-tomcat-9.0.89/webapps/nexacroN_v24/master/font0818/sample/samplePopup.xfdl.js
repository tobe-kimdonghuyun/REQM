(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePopup");
            this.set_titletext("팝업 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "동해물과","Column1" : "무궁화"},{"Column0" : "백두산이","Column1" : "삼천리"},{"Column0" : "마르고","Column1" : "화려강산"},{"Column0" : "닳도록","Column1" : "대한사람"},{"Column0" : "하느님이","Column1" : "대한으로"},{"Column0" : "보우하사","Column1" : "길이 "},{"Column0" : "우리나라만세","Column1" : "보전하세"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBg00","2","0",null,"196","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","150","196",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모달팝업\r\n(callback - string)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaShowModal","staTitle00:4","5",null,"185","90",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("var sTitle = \"모달팝업(Default)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\ttop:100\n\t\t,left:100\t\t\t//top,left 지정하지않음 center,middle 적용\n\t\t,width:700\n\t\t,height:300\t\t\t//width,height 지정하지 않음 popup form size적용\n\t\t,popuptype:\"modal\"\t//modal,modaless\n\t\t,autosize:false\n\t\t,title:sTitle\n\t\t,resize:false\n\t\t,titlebar:true};\n\tvar sPopupCallBack = \"fnPopupCallback\";\n\tthis.gfnOpenPopup(\"popupModalDefault\", \"sample::samplePopupP.xfdl\", oArg, sPopupCallBack, oOption);");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModal",null,"5","60","185","25",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00_00","2","195",null,"196","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","0","195","150","196",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("모달팝업\r\n(callback -function)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaShowModal00","staTitle00_00:4","200",null,"185","90",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_value("var sTitle = \"모달팝업(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modal\"\t//modal,modaless\n\t\t,autosize:true\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:true};\n\tthis.gfnOpenPopup(\"popupModalFunc\", \"sample::samplePopupP.xfdl\", oArg, function(sPopupId, sRtn){\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvar rtn = JSON.parse(sRtn);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//trace(this.dsRtn.saveXML());\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}, oOption);");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModalFun",null,"200","60","185","25",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00_00_00","2","390",null,"196","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00","0","390","150","196",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("모달리스팝업\r\n(callback -String)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaShowModal00_00","154","395",null,"185","90",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_value("var sTitle = \"모달리스(Default)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\twidth:700\n\t\t,height:394\t\t\t//모달리스는 width,height 필수지정\n\t\t,popuptype:\"modeless\"\t//modal,modaless\n\t\t,dual:this.chkDualMonitor.value\n\t\t,autosize:false\n\t\t,title:sTitle\n\t\t,resize:false\n\t\t,titlebar:true};\n\tvar sPopupCallBack = \"fnPopupCallback\";\n\tthis.gfnOpenPopup(\"popupModaless\", \"sample::samplePopupP.xfdl\", oArg, sPopupCallBack, oOption);");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModaless",null,"395","60","185","25",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00_00_00_00","2","585",null,"196","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00_00","0","585","150","196",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("모달리스팝업\r\n(callback -Function)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaShowModal00_00_00","154","590",null,"185","90",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_value("var sTitle = \"모달리스(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modeless\"\t//modal,modaless\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:false};\n\tthis.gfnOpenPopup(\"popupModalessFunc\", \"sample::samplePopupP.xfdl\", oArg, function(sPopupId, sRtn){\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvar rtn = JSON.parse(sRtn);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//trace(this.dsRtn.saveXML());\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}, oOption);");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModalessFunc",null,"590","60","185","25",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowDebug","0","staTitle00_00_00_00:20","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("show debug");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,850,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePopup.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	samplePopup.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
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
        	this.gfnFormOnload(obj); //필수함수

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
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	if (!this.gfnIsNull(sRtn))
        	{
        		var objRtn = JSON.parse(sRtn);
        		if (this.gfnIsNull(objRtn)) return;

        		if (!this.gfnIsNull(objRtn.rtnId))
        		{
        			trace(" 1. rtnId : " + objRtn.rtnId);
        		}
        		if (!this.gfnIsNull(objRtn.rtnName))
        		{
        			trace(" 2. rtnName : " + objRtn.rtnName);
        		}
        		if (!this.gfnIsNull( objRtn.rtnDepartment))
        		{
        			trace(" 3. rtnDepartment : " + objRtn.rtnDepartment);
        		}
        		if (!this.gfnIsNull( objRtn.rtnDescription))
        		{
        			trace(" 4. rtnDescription : " + objRtn.rtnDescription);
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnShowModal_onclick = function(obj,e)
        {
        	var sTitle = "모달팝업(Default)";
        	var oArg   = {pvString:"abcdedd", pvNumber:555555, pvDataset:this.dsData};
        	var oOption = {
        		top:100
        		,left:100			//top,left 지정하지않음 center,middle 적용
        		,width:700
        		,height:394			//width,height 지정하지 않음 popup form size적용
        		,popuptype:"modal"	//modal,modaless
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("popupModalDefault", "sample::samplePopupP.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.btnShowModalFun_onclick = function(obj,e)
        {
        	var sTitle = "모달팝업(callback-Function)";
        	var oArg   = {pvString:"abcdedd", pvNumber:555555, pvDataset:this.dsData};
        	var oOption = {
        		popuptype:"modal"	//modal,modaless
        		,autosize:true
        		,title:sTitle
        		,resize:true
        		,titlebar:true};
        	this.gfnOpenPopup("popupModalFunc", "sample::samplePopupP.xfdl", oArg, function(sPopupId, sRtn){
        																				if(!this.gfnIsNull(sRtn))
        																				{
        																					var objRtn = JSON.parse(sRtn);
        																					if(this.gfnIsNull(objRtn)) return;

        																					if(!this.gfnIsNull(objRtn.rtnId))
        																					{
        																						trace(" 1. rtnId : " + objRtn.rtnId);
        																					}
        																					if(!this.gfnIsNull(objRtn.rtnName))
        																					{
        																						trace(" 2. rtnName : " + objRtn.rtnName);
        																					}
        																					if(!this.gfnIsNull( objRtn.rtnDepartment))
        																					{
        																						trace(" 3. rtnDepartment : " + objRtn.rtnDepartment);
        																					}
        																					if(!this.gfnIsNull( objRtn.rtnDescription))
        																					{
        																						trace(" 4. rtnDescription : " + objRtn.rtnDescription);
        																					}
        																				}
        																			}, oOption);
        };

        this.btnShowModaless_onclick = function(obj,e)
        {
        	var sTitle = "모달리스(Default)";
        	var oArg   = {pvString:"abcdedd", pvNumber:555555, pvDataset:this.dsData};
        	var oOption = {
        		width:700
        		,height:394			//모달리스는 width,height 필수지정
        		,popuptype:"modeless"
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true
        		};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("popupModaless", "sample::samplePopupP.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.btnShowModalessFunc_onclick = function(obj,e)
        {
        	var sTitle = "모달리스(callback-Function)";
        	var oArg   = {pvString:"abcdedd", pvNumber:555555, pvDataset:this.dsData};
        	var oOption = {
        		popuptype:"modeless"	//modal,modaless
        		,title:sTitle
        		,resize:true
        		,titlebar:false
        		};
        	this.gfnOpenPopup("popupModalessFunc", "sample::samplePopupP.xfdl", oArg, function(sPopupId, sRtn){
        																				if(!this.gfnIsNull(sRtn))
        																				{
        																					var objRtn = JSON.parse(sRtn);
        																					if(this.gfnIsNull(objRtn)) return;

        																					if(!this.gfnIsNull(objRtn.rtnId))
        																					{
        																						trace(" 1. rtnId : " + objRtn.rtnId);
        																					}
        																					if(!this.gfnIsNull(objRtn.rtnName))
        																					{
        																						trace(" 2. rtnName : " + objRtn.rtnName);
        																					}
        																					if(!this.gfnIsNull( objRtn.rtnDepartment))
        																					{
        																						trace(" 3. rtnDepartment : " + objRtn.rtnDepartment);
        																					}
        																					if(!this.gfnIsNull( objRtn.rtnDescription))
        																					{
        																						trace(" 4. rtnDescription : " + objRtn.rtnDescription);
        																					}
        																				}
        																			}, oOption);
        };

        this.btnShowDebug_onclick = function(obj,e)
        {
        	var oOption = {
        		popuptype:"modeless"	//modal,modaless
        		,title:"DEBUG"
        		,resize:true
        		,titlebar:true};
        	this.gfnOpenPopup("debug", "common::cmmDebug.xfdl", null, "", oOption);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnShowModal.addEventHandler("onclick",this.btnShowModal_onclick,this);
            this.btnShowModalFun.addEventHandler("onclick",this.btnShowModalFun_onclick,this);
            this.btnShowModaless.addEventHandler("onclick",this.btnShowModaless_onclick,this);
            this.btnShowModalessFunc.addEventHandler("onclick",this.btnShowModalessFunc_onclick,this);
            this.btnShowDebug.addEventHandler("onclick",this.btnShowDebug_onclick,this);
        };
        this.loadIncludeScript("samplePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
