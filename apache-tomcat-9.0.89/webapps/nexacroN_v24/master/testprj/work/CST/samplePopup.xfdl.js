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
                this._setFormPosition(1050,1070);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">동해물과</Col><Col id=\"Column1\">무궁화</Col></Row><Row><Col id=\"Column0\">백두산이</Col><Col id=\"Column1\">삼천리</Col></Row><Row><Col id=\"Column0\">마르고</Col><Col id=\"Column1\">화려강산</Col></Row><Row><Col id=\"Column0\">닳도록</Col><Col id=\"Column1\">대한사람</Col></Row><Row><Col id=\"Column0\">하느님이</Col><Col id=\"Column1\">대한으로</Col></Row><Row><Col id=\"Column0\">보우하사</Col><Col id=\"Column1\">길이 </Col></Row><Row><Col id=\"Column0\">우리나라만세</Col><Col id=\"Column1\">보전하세</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">동해물과</Col><Col id=\"Column1\">무궁화</Col><Col id=\"Column2\">&#10;&#10;&#10;&#10;&#10;&#10;Column2</Col><Col id=\"Column3\">Column3</Col><Col id=\"Column4\">Column4</Col><Col id=\"Column5\">Column5</Col><Col id=\"Column6\">Column6</Col><Col id=\"Column7\">Column7</Col><Col id=\"Column8\">Column8</Col><Col id=\"Column9\">Column9</Col><Col id=\"Column10\">Column10</Col><Col id=\"Column11\">Column11</Col><Col id=\"Column12\">Column12</Col><Col id=\"Column13\">Column13</Col><Col id=\"Column14\">Column14</Col></Row><Row><Col id=\"Column0\">백두산이</Col><Col id=\"Column1\">삼천리</Col><Col id=\"Column2\">Column2</Col><Col id=\"Column3\">Column3</Col><Col id=\"Column4\">Column4</Col><Col id=\"Column5\">Column5</Col><Col id=\"Column6\">Column6</Col><Col id=\"Column7\">Column7</Col><Col id=\"Column8\">Column8</Col><Col id=\"Column9\">Column9</Col><Col id=\"Column10\">Column10</Col><Col id=\"Column11\">Column11</Col><Col id=\"Column12\">Column12</Col><Col id=\"Column13\">Column13</Col><Col id=\"Column14\">Column14</Col></Row><Row><Col id=\"Column0\">마르고</Col><Col id=\"Column1\">화려강산</Col><Col id=\"Column2\">Column2</Col><Col id=\"Column3\">Column3</Col><Col id=\"Column4\">Column4</Col><Col id=\"Column5\">Column5</Col><Col id=\"Column6\">Column6</Col><Col id=\"Column7\">Column7</Col><Col id=\"Column8\">Column8</Col><Col id=\"Column9\">Column9</Col><Col id=\"Column10\">Column10</Col><Col id=\"Column11\">Column11</Col><Col id=\"Column12\">Column12</Col><Col id=\"Column13\">Column13</Col><Col id=\"Column14\">Column14</Col></Row><Row><Col id=\"Column0\">닳도록</Col><Col id=\"Column1\">대한사람</Col><Col id=\"Column2\">Column2</Col><Col id=\"Column3\">Column3</Col><Col id=\"Column4\">Column4</Col><Col id=\"Column5\">Column5</Col><Col id=\"Column6\">Column6</Col><Col id=\"Column7\">Column7</Col><Col id=\"Column8\">Column8</Col><Col id=\"Column9\">Column9</Col><Col id=\"Column10\">Column10</Col><Col id=\"Column11\">Column11</Col><Col id=\"Column12\">Column12</Col><Col id=\"Column13\">Column13</Col><Col id=\"Column14\">Column14</Col></Row><Row><Col id=\"Column0\">하느님이</Col><Col id=\"Column1\">대한으로</Col><Col id=\"Column2\">Column2</Col><Col id=\"Column3\">Column3</Col><Col id=\"Column4\">Column4</Col><Col id=\"Column5\">Column5</Col><Col id=\"Column6\">Column6</Col><Col id=\"Column7\">Column7</Col><Col id=\"Column8\">Column8</Col><Col id=\"Column9\">Column9</Col><Col id=\"Column10\">Column10</Col><Col id=\"Column11\">Column11</Col><Col id=\"Column12\">Column12</Col><Col id=\"Column13\">Column13</Col><Col id=\"Column14\">Column14</Col></Row><Row><Col id=\"Column0\">보우하사</Col><Col id=\"Column1\">길이 </Col><Col id=\"Column2\">Column2</Col><Col id=\"Column3\">Column3</Col><Col id=\"Column4\">Column4</Col><Col id=\"Column5\">Column5</Col><Col id=\"Column6\">Column6</Col><Col id=\"Column7\">Column7</Col><Col id=\"Column8\">Column8</Col><Col id=\"Column9\">Column9</Col><Col id=\"Column10\">Column10</Col><Col id=\"Column11\">Column11</Col><Col id=\"Column12\">Column12</Col><Col id=\"Column13\">Column13</Col><Col id=\"Column14\">Column14</Col></Row><Row><Col id=\"Column0\">우리나라만세</Col><Col id=\"Column1\">보전하세</Col><Col id=\"Column2\">Column2</Col><Col id=\"Column3\">Column3</Col><Col id=\"Column4\">Column4</Col><Col id=\"Column5\">Column5</Col><Col id=\"Column6\">Column6</Col><Col id=\"Column7\">Column7</Col><Col id=\"Column8\">Column8</Col><Col id=\"Column9\">Column9</Col><Col id=\"Column10\">Column10</Col><Col id=\"Column11\">Column11</Col><Col id=\"Column12\">Column12</Col><Col id=\"Column13\">Column13</Col><Col id=\"Column14\">Column14</Col></Row></Rows>");
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
            obj.set_value("var sTitle = \"모달팝업(Default)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\ttop:100\n\t\t,left:100\t\t\t//top,left 지정하지않음 center,middle 적용\n\t\t,width:700\n\t\t,height:300\t\t\t//width,height 지정하지 않음 popup form size적용\n\t\t,popuptype:\"modal\"\t//modal,modaless\n\t\t,autosize:false\n\t\t,title:sTitle\n\t\t,resize:false\n\t\t,titlebar:true};\n\tvar sPopupCallBack = \"fnPopupCallback\";\n\tthis.gfnOpenPopup(\"popupModalDefault\", \"work::popup/prgmPopup.xfdl\", oArg, sPopupCallBack, oOption);");
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
            obj.set_value("var sTitle = \"모달팝업(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modal\"\t//modal,modaless\n\t\t,autosize:true\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:true};\n\tthis.gfnOpenPopup(\"popupModalFunc\", \"work::popup/prgmPopup.xfdl\", oArg, function(sPopupId, sRtn){\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvar rtn = JSON.parse(sRtn);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//trace(this.dsRtn.saveXML());\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}, oOption);");
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
            obj.set_value("var sTitle = \"모달리스(Default)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\twidth:700\n\t\t,height:394\t\t\t//모달리스는 width,height 필수지정\n\t\t,popuptype:\"modeless\"\t//modal,modaless\n\t\t,dual:this.chkDualMonitor.value\n\t\t,autosize:false\n\t\t,title:sTitle\n\t\t,resize:false\n\t\t,titlebar:true};\n\tvar sPopupCallBack = \"fnPopupCallback\";\n\tthis.gfnOpenPopup(\"popupModaless\", \"work::popup/prgmPopup.xfdl\", oArg, sPopupCallBack, oOption);");
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
            obj.set_value("var sTitle = \"모달리스(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modeless\"\t//modal,modaless\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:false};\n\tthis.gfnOpenPopup(\"popupModalessFunc\", \"work::popup/prgmPopup.xfdl\", oArg, function(sPopupId, sRtn){\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvar rtn = JSON.parse(sRtn);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//trace(this.dsRtn.saveXML());\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}, oOption);");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModalessFunc",null,"590","60","185","25",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowDebug","0","staTitle00_00_00_00:20","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("show debug");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","859",null,"159","25",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("dsTest");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" upIsDefault=\"true\"/><Cell col=\"1\" text=\"Column1\" upIsDefault=\"true\"/><Cell col=\"2\" text=\"Column2\" upIsDefault=\"true\"/><Cell col=\"3\" text=\"Column3\" upIsDefault=\"true\"/><Cell col=\"4\" text=\"Column4\" upIsDefault=\"true\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\" upIsDefault=\"true\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/><Cell col=\"11\" text=\"Column11\"/><Cell col=\"12\" text=\"Column12\"/><Cell col=\"13\" text=\"Column13\"/><Cell col=\"14\" text=\"Column14\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/><Cell col=\"12\" text=\"bind:Column12\"/><Cell col=\"13\" text=\"bind:Column13\"/><Cell col=\"14\" text=\"bind:Column14\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" upIsDefault=\"true\"/><Cell col=\"1\" text=\"Column1\" upIsDefault=\"true\"/><Cell col=\"2\" text=\"Column2\" upIsDefault=\"true\"/><Cell col=\"3\" text=\"Column3\" upIsDefault=\"true\"/><Cell col=\"4\" text=\"Column4\" upIsDefault=\"true\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\" upIsDefault=\"true\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/><Cell col=\"11\" text=\"Column11\"/><Cell col=\"12\" text=\"Column12\"/><Cell col=\"13\" text=\"Column13\"/><Cell col=\"14\" text=\"Column14\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/><Cell col=\"12\" text=\"bind:Column12\"/><Cell col=\"13\" text=\"bind:Column13\"/><Cell col=\"14\" text=\"bind:Column14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnTest",null,"801","75","28","25",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("설정_X");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,1070,this,function(p){});
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
        	this.gfnOpenPopup("popupModalDefault", "work::popup/prgmPopup.xfdl", oArg, sPopupCallBack, oOption);
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
        	this.gfnOpenPopup("popupModalFunc", "work::popup/prgmPopup.xfdl", oArg, function(sPopupId, sRtn){
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
        	this.gfnOpenPopup("popupModaless", "work::popup/prgmPopup.xfdl", oArg, sPopupCallBack, oOption);
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
        	this.gfnOpenPopup("popupModalessFunc", "work::popup/prgmPopup.xfdl", oArg, function(sPopupId, sRtn){
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

        this.btnTest_onclick = function(obj,e)
        {
        	//console.log("COL:" + this.grdList.deleteContentsCol("body", 5));

        	var sTitle = "그리드 설정";
        	var oArg   = {pvGrid:this.grdList};
        	var oOption = {
        		top:100
        		,left:750			//top,left 지정하지않음 center,middle 적용
        		,width:500
        		,height:500			//width,height 지정하지 않음 popup form size적용
        		,popuptype:"modal"	//modal,modaless
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("popupModalDefault", "work::CST/setGridFormat.xfdl", oArg, sPopupCallBack, oOption);
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
            this.btnTest.addEventHandler("onclick",this.btnTest_onclick,this);
        };
        this.loadIncludeScript("samplePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
