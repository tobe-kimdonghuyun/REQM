(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST009M00");
            this.set_titletext("도면대출신청(Step)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCadMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnStgRbprsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnStgRbprsnMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"arptPbcprtPicChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"arptPbcprtPicSpvsrId\" type=\"STRING\" size=\"256\"/><Column id=\"dstrtnPrnmntDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnLoanVwsAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyVwsAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"dataMngVwsAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRltwfCadList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnAplyListNo\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnAplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"mngNo\" type=\"STRING\" size=\"256\"/><Column id=\"prslBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"prslEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"usePrpsCn\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"sttsIdntyYnCd1\" type=\"STRING\" size=\"256\"/><Column id=\"sttsIdntyYnCd2\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"fileShapeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfEmps", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"wfeEmpId\" type=\"STRING\" size=\"256\"/><Column id=\"wfeEmpNm\" type=\"STRING\" size=\"256\"/><Column id=\"use\" type=\"STRING\" size=\"256\"/><Column id=\"wfeId\" type=\"STRING\" size=\"256\"/><Column id=\"wfeJobCd\" type=\"STRING\" size=\"256\"/><Column id=\"wfeSrcEntId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkFlow", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCadBleCombo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTsccopaCombo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttrCn", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"seqNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tabStep","0","60",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabStep);
            obj.set_text("신청자정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabStep);
            obj.set_text("신청정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tabStep);
            obj.set_text("신청도면목록");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tabStep);
            obj.set_text("서약서");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.tabStep);
            obj.set_text("전달사항");
            this.tabStep.addChild(obj.name, obj);

            obj = new Div("divFrom","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/CAD/CST009M00_01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divFrom01","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/CAD/CST009M00_02.xfdl");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("divFrom02","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/CAD/CST009M00_03.xfdl");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("divFrom03","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/CAD/CST009M00_04.xfdl");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Div("divFrom04","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/CAD/CST009M00_05.xfdl");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_CkBg");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","687","59","64","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabStep.Tabpage1
            obj = new Layout("default","",0,0,this.tabStep.Tabpage1.form,function(p){});
            this.tabStep.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage2
            obj = new Layout("default","",0,0,this.tabStep.Tabpage2.form,function(p){});
            this.tabStep.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage3
            obj = new Layout("default","",0,0,this.tabStep.Tabpage3.form,function(p){});
            this.tabStep.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage4
            obj = new Layout("default","",0,0,this.tabStep.Tabpage4.form,function(p){});
            this.tabStep.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage6.form
            obj = new Layout("default","",0,0,this.tabStep.Tabpage6.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabStep.Tabpage6.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabStep.Tabpage6.form
            obj = new Layout("mobile","",0,0,this.tabStep.Tabpage6.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabStep.Tabpage6.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divFrom
            obj = new Layout("default","",0,0,this.divFrom.form,function(p){});
            this.divFrom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrom01
            obj = new Layout("default","",0,0,this.divFrom01.form,function(p){});
            this.divFrom01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrom02
            obj = new Layout("default","",0,0,this.divFrom02.form,function(p){});
            this.divFrom02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrom03
            obj = new Layout("default","",0,0,this.divFrom03.form,function(p){});
            this.divFrom03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrom04
            obj = new Layout("default","",0,0,this.divFrom04.form,function(p){});
            this.divFrom04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("도면대출신청(Step)");

                p.tabStep.set_taborder("5");
                p.tabStep.set_tabindex("0");
                p.tabStep.move("0","60",null,"50","60",null);

                p.tabStep.Tabpage1.set_text("신청자정보");
                p.tabStep.Tabpage1.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage2.set_text("신청정보");
                p.tabStep.Tabpage2.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage3.set_text("신청도면목록");
                p.tabStep.Tabpage3.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage4.set_text("서약서");
                p.tabStep.Tabpage4.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage6.set_text("전달사항");

                p.divFrom.set_taborder("0");
                p.divFrom.set_text("Div00");
                p.divFrom.set_formscrollbartype("auto autoindicator");
                p.divFrom.set_url("work::CST/CAD/CST009M00_01.xfdl");
                p.divFrom.move("0","110",null,null,"60","70");

                p.divFrom01.set_taborder("1");
                p.divFrom01.set_text("Div00");
                p.divFrom01.set_formscrollbartype("auto autoindicator");
                p.divFrom01.set_url("work::CST/CAD/CST009M00_02.xfdl");
                p.divFrom01.set_positionstep("1");
                p.divFrom01.move("0","110",null,null,"60","70");

                p.divFrom02.set_taborder("2");
                p.divFrom02.set_text("Div00");
                p.divFrom02.set_formscrollbartype("auto autoindicator");
                p.divFrom02.set_url("work::CST/CAD/CST009M00_03.xfdl");
                p.divFrom02.set_positionstep("2");
                p.divFrom02.move("0","110",null,null,"60","70");

                p.divFrom03.set_taborder("3");
                p.divFrom03.set_text("Div00");
                p.divFrom03.set_formscrollbartype("auto autoindicator");
                p.divFrom03.set_url("work::CST/CAD/CST009M00_04.xfdl");
                p.divFrom03.set_positionstep("3");
                p.divFrom03.move("0","110",null,null,"60","70");

                p.divFrom04.set_taborder("4");
                p.divFrom04.set_text("Div00");
                p.divFrom04.set_formscrollbartype("auto autoindicator");
                p.divFrom04.set_url("work::CST/CAD/CST009M00_05.xfdl");
                p.divFrom04.set_positionstep("4");
                p.divFrom04.move("0","110",null,null,"60","70");

                p.divBtn.set_taborder("6");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.move("0",null,null,"60","60","0");

                p.divTitle.set_taborder("7");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_maxheight("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.Button00.set_taborder("8");
                p.Button00.set_text("4");
                p.Button00.move("687","59","64","35",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("5");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.tabStep.move("20","60",null,"50","20",null);

                p.divFrom.move("20","110",null,null,"20","70");

                p.divFrom01.move("20","110",null,null,"20","70");

                p.divFrom02.move("20","110",null,null,"20","70");

                p.divFrom03.move("20","110",null,null,"20","70");

                p.divFrom04.move("20","110",null,null,"20","70");

                p.divBtn.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("5");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::CST/CAD/CST009M00_01.xfdl");
            this._addPreloadList("fdl","work::CST/CAD/CST009M00_02.xfdl");
            this._addPreloadList("fdl","work::CST/CAD/CST009M00_03.xfdl");
            this._addPreloadList("fdl","work::CST/CAD/CST009M00_04.xfdl");
            this._addPreloadList("fdl","work::CST/CAD/CST009M00_05.xfdl");
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST009M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST009M00.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST009M00.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/11
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/11			Ajh							최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.stepitemsize = 0;   // 스텝이미지사이즈
        	var pvJobCd = this.getOwnerFrame().jobCd;
        	trace("test : " +pvJobCd);
        	this.pvView = this.getOwnerFrame().view;


        	if(this.gfnIsNull(pvJobCd)){pvJobCd = "TAS10373"}else{pvJobCd}

        	this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, inqCnd : { jobPrcsPrgrsSeCd:pvJobCd} });
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:"TSPCAD010" });

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCadBleCombo:"CADBLD:S" });
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsTsccopaCombo:"CADWORK:S" });

        	this.gvUserId = this.objApp.gdsUser.getColumn(0,"userId");
        	this.gvUserNm = this.objApp.gdsUser.getColumn(0,"userNm");
        	this.gvCoId   = this.objApp.gdsUser.getColumn(0,"coId");
        	this.gvCoNm   = this.objApp.gdsUser.getColumn(0,"coNm");
        	this.gvTelNo  = this.objApp.gdsUser.getColumn(0, "userMblTelno");


        	// 파라미터 확인
        	var pvAplyNo = this.getOwnerFrame().aplyNo;   // 신청번호

        	if (this.gfnIsNull(pvAplyNo)) {
        	    this.dsCadMaster.addRow();
        		this.dsCadMaster.setColumn(0,"rgtrId",this.gvUserId);
        		this.dsCadMaster.setColumn(0,"rgtrIdNm",this.gvUserNm);
        		this.dsCadMaster.setColumn(0,"rgtrCoNm",this.gvCoNm);
        		this.dsCadMaster.setColumn(0,"flrplnStgRbprsnNm",this.gvUserNm);
        		this.dsCadMaster.setColumn(0,"rgtrMblTelno",this.gvTelNo);
        		this.dsCadMaster.setColumn(0,"flrplnStgRbprsnMblTelno",this.gvTelNo);
        		this.dsCadMaster.setColumn(0,"rgtrDeptCd",this.gvCoId);
        		this.dsCadMaster.setColumn(0,"rgtrInstCd",this.gvCoId);

        		this.dsCadMaster.setColumn(0,"rgnSeCd",1);
        		this.dsCadBleCombo.filter("cdId == '' || cdId == 'CADBLD001' || cdId == 'CADBLD002' || cdId == 'CADBLD003'  || cdId == 'CADBLD004'  || cdId == 'CADBLD005' || cdId == 'CADBLD006' || cdId == 'CADBLD007' || cdId == 'CADBLD008' || cdId == 'CADBLD009' || cdId == 'CADBLD010'");
        		this.dsRltwfCadList.addRow();
        		this.divFrom.form.div00.form.pan00.visible = false;
        	} else {
        		this.divTitle.destroy();  // 프로그램 타이틀 제거
        		this.tabStep.top = 10;    // tap 위치 조정
        		this.divFrom.top = parseInt(this.tabStep.top)
        		                 + parseInt(this.tabStep.height)
        						 + 10;    // 신청자 정보 div 위치 조정
        		this.divFrom01.top = parseInt(this.tabStep.top)
        		                 + parseInt(this.tabStep.height)
        						 + 10;    // 신청자 정보 div 위치 조정
        		this.divFrom02.top = parseInt(this.tabStep.top)
        		                 + parseInt(this.tabStep.height)
        						 + 10;    // 신청자 정보 div 위치 조정
        		this.divFrom03.top = parseInt(this.tabStep.top)
        		                 + parseInt(this.tabStep.height)
        						 + 10;    // 신청자 정보 div 위치 조정
        		this.divFrom04.top = parseInt(this.tabStep.top)
        		                 + parseInt(this.tabStep.height)
        						 + 10;    // 신청자 정보 div 위치 조정
        		this.resetScroll();
        		this.dsSearch.setColumn(0, "aplyNo", pvAplyNo);
        		this.fnSearch();  // 조회
        	}

        };

        /*******************************************************************************************************************************
         * 공통함수영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /**************************************************************************
         * @name : fnSearch
         * @description : 조회
         ***************************************************************************/
        this.fnSearch = function()
        {
        	//조회할떄 IP정보를 가져올까..... 공통에서 넘겨주나......
        	var strSvcId    = "search";
        	var strSvcUrl   = "cad/selectFlrplnAplyTmprInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsCadMaster=dsCadMaster dsRltwfCadList=dsRltwfCadList dsWfEmps=dsWfEmps dsCnvyMttrCn=dsCnvyMttrCn";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnSave
         * @description : 신청 및 임시저장
         ***************************************************************************/
        this.fnSave = function(strSvcId, strSvcUrl)
        {
        	var inData      = "dsSearch=dsSearch dsCadMaster=dsCadMaster dsWfEmps=dsWfEmps dsRltwfCadList=dsRltwfCadList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnFlrplnAplyEnd
         * @description : 종료
         ***************************************************************************/
        this.fnFlrplnAplyEnd = function()
        {
        	var strSvcId    = "flrplnAplyEnd";
        	var strSvcUrl   = "cad/flrplnAplyEnd.do";
        	var inData      = "dsCadMaster=dsCadMaster:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search": //조회
        			var vArptPbcprtPicChcYn = this.dsCadMaster.getColumn(0,"arptPbcprtPicChcYn");
        			var vJobCd = this.dsCadMaster.getColumn(0,"jobCd");

        			if(vArptPbcprtPicChcYn == 0)
        			{
        				this.divFrom01.form.div00.form.pan06_00.visible = true;
        				for(i=0; i < this.dsWfEmps.rowcount; i++)
        				{
        					this.divFrom01.form.div00.form.divEdtPop01.form.mtiArptPicId.setSelect(i,true);
        				}
        			}
        			if(vJobCd != "TAS10373" && vJobCd != "TAS10390" )//신청, 임시저장
        			{
        				this.fnFormEnable();
        			}

        			break;

        		case "flrplnAplyTmprStrg" :
        			this.gfnAlertMsg("save", "CST_003");//정상적으로 처리되었습니다.
        			this.gfnCloseMenu("MNG_0000000295");//도면신청화면
        			this.gfnCloseMenu("MNG_0000000144");//도면신청목록화면
        			this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');
        			if(this.pvView == "popup")this.close("reflash");
        			break;

        		case "getAplySeNm" :  // 공통코드(신청구분)
        			this.dsSearch.setColumn(0, "aplySeCd", "TSPCAD010");
        			this.dsCadMaster.setColumn(0, "aplySeCd", "TSPCAD010");
        			this.dsSearch.setColumn(0, "aplySeNm", this.cfnGvbkAplySeNm());
        			break;
        		default :
        			break;
        	}
        };


        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "plcSch") // 담당자 찾기
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		var sUserId = objRtn.rUserId;
        		var sUserNm = objRtn.rUserNm;

        		if (!this.gfnIsNull(sUserId))
        		{
        			for(i=0; i < this.dsWfEmps.rowcount; i++)
        			{
        				var vDsUserId = this.dsWfEmps.getColumn(i,"wfeEmpId");
        				if(vDsUserId == sUserId)
        				{
        					this.divFrom01.form.div00.form.divEdtPop01.form.mtiArptPicId.setSelect(i,true);
        					return;
        				}
        			}
        			nRow = this.dsWfEmps.addRow();
        			this.dsWfEmps.setColumn(nRow, "wfeEmpId" , sUserId);
        			this.dsWfEmps.setColumn(nRow, "wfeEmpNm" , sUserNm);
        			this.dsWfEmps.setColumn(nRow, "wfeSrcEntId" , "CAD");
        			this.dsWfEmps.setColumn(nRow, "wfeJobCd" , "TAS10373");

        			this.divFrom01.form.div00.form.divEdtPop01.form.mtiArptPicId.setSelect(nRow,true);
        		}
        	}
        }


        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnFormEnable
         * @description : 화면Components 비활성화
         ***************************************************************************/
        this.fnFormEnable = function()
        {
        	var vJobCd = this.dsCadMaster.getColumn(0,"jobCd");

        	[this.divFrom, this.divFrom01, this.divFrom02, this.divFrom03].forEach(oDiv => {
         		fnEnable.call(this, oDiv.form, true);
        	});

        	// 내부함수호출
        	function fnEnable (oComps, bEnable) {
        		Array.from(oComps.components).forEach(oComp => {
         			if (oComp instanceof nexacro.Div) {
        				fnEnable.call(this, oComp.form, true);
        			} else {
        				if (oComp instanceof nexacro.Static) return;
        				if (oComp instanceof nexacro.Panel) return;
        				if (oComp instanceof nexacro.TextArea) return;
        				if (oComp.name == "btnFold") return;

        				try {
        					if (oComp instanceof nexacro.Button)
        					{
        						oComp.enable = false;
        					}else{
        						oComp.readonly = bEnable;
        					}
        				} catch(e) {
        					trace ("enable속성없음");
        				}
        			}
        		});
        	}
        }

        /**************************************************************************
         * @name : fnValiChk
         * @description : Validation Check
         ***************************************************************************/
        this.fnValiChk = function()
        {
        	var vFlrplnStgRbprsnNm = this.dsCadMaster.getColumn(0,"flrplnStgRbprsnNm");// 도면보관 책임자
        	var vFlrplnStgRbprsnMblTelno = this.dsCadMaster.getColumn(0,"flrplnStgRbprsnMblTelno");// 도면보관 책임자 휴대폰번호
        	var vArptPbcprtPicChcYn = this.dsCadMaster.getColumn(0,"arptPbcprtPicChcYn");// 공항공사 담당자 선택유무
        	var vDstrtnPrnmntDt = this.dsCadMaster.getColumn(0,"dstrtnPrnmntDt");// 파기예정일
        	var vRgnSeCd = this.dsCadMaster.getColumn(0,"rgnSeCd");// 지역구분
        	var vFlrplnLoanVwsAgreYn = this.dsCadMaster.getColumn(0,"flrplnLoanVwsAgreYn");// 도면대출서약 동의여부
        	var vScrtyVwsAgreYn = this.dsCadMaster.getColumn(0,"scrtyVwsAgreYn");// 보안서약동의 여부
        	var vDataMngVwsAgreYn = this.dsCadMaster.getColumn(0,"dataMngVwsAgreYn");// 자료관리서약 동의 여부

        	if(this.gfnIsNull(vFlrplnStgRbprsnNm))
        	{
        		this.gfnAlertMsg("msg", "MSG_009", ["도면보관 책임자 \n"]);
        		this.setStepIndex(0);
        		return false;
        	}

        	if(this.gfnIsNull(vFlrplnStgRbprsnMblTelno))
        	{
        		this.gfnAlertMsg("msg", "MSG_009", ["도면보관 책임자 휴대폰번호 \n"]);
        		this.setStepIndex(0);
        		return false;
        	}

        	if(this.gfnIsNull(vArptPbcprtPicChcYn))
        	{
        		this.gfnAlertMsg("msg", "MSG_009", ["공항공사 담당자 선택 유무 \n"]);
        		this.setStepIndex(1);
        		return false;
        	}

        	var vWfEmp = this.dsWfEmps.findRow("use","Y");
        	if(vArptPbcprtPicChcYn == 0 && vWfEmp == -1)
        	{
        		this.gfnAlertMsg("msg", "MSG_009", ["공항공사 담당자(감독자) \n"]);
        		this.setStepIndex(1);
        		return false;
        	}

        	if(this.gfnIsNull(vDstrtnPrnmntDt))
        	{
        		this.gfnAlertMsg("msg", "MSG_009", ["파기예정일"]);
        		this.setStepIndex(1);
        		return false;
        	}

        	var vToday = this.gfnGetDate();
        	if(vDstrtnPrnmntDt  <= vToday)
        	{
        		this.gfnAlertMsg("msg", "MSG_013", ["파기예정일,현재일시 \n"]);
        		this.setStepIndex(1);
        		return false;
        	}

        	if(this.gfnIsNull(vRgnSeCd))
        	{
        		this.gfnAlertMsg("msg", "MSG_009", ["지역구분"]);
        		this.setStepIndex(1);
        		return false;
        	}

        	var vRltwfCadCnt = this.dsRltwfCadList.rowcount;
        	if(vRltwfCadCnt <= 0)
        	{
        		this.gfnAlertMsg("msg", "MSG_011", ["신청도면목록 을 입력하십시오."]);
        		this.setStepIndex(2);
        		return false;
        	}else{
        		for(i = 0; i < vRltwfCadCnt; i++)
        		{
        			var vBldgNm = this.dsRltwfCadList.getColumn(i,"bldgNm"); // 건물위치
        			var vRnb = this.dsRltwfCadList.getColumn(i,"rnb"); // 룸번호
        			var vUsePrpsCn = this.dsRltwfCadList.getColumn(i,"usePrpsCn"); // 사용목적
        			var vCstrnKndFldCd = this.dsRltwfCadList.getColumn(i,"cstrnKndFldCd"); // 공종분야

        			if(this.gfnIsNull(vBldgNm))
        			{
        				this.gfnAlertMsg("msg", "MSG_009", ["건물위치"]);
        				this.setStepIndex(2);
        				return false;
        			}
        			if(this.gfnIsNull(vRnb))
        			{
        				this.gfnAlertMsg("msg", "MSG_009", ["룸번호"]);
        				this.setStepIndex(2);
        				return false;
        			}
        			if(this.gfnIsNull(vUsePrpsCn))
        			{
        				this.gfnAlertMsg("msg", "MSG_009", ["사용목적"]);
        				this.setStepIndex(2);
        				return false;
        			}
        			if(this.gfnIsNull(vCstrnKndFldCd))
        			{
        				this.gfnAlertMsg("msg", "MSG_009", ["공종분야"]);
        				this.setStepIndex(2);
        				return false;
        			}
        		}
        	}

        	if(this.gfnIsNull(vFlrplnLoanVwsAgreYn))
        	{
        		this.gfnAlertMsg("msg", "MSG_009", ["도면대출서약 동의여부 \n"]);
        		this.setStepIndex(3);
        		return false;
        	}

        	if(this.gfnIsNull(vScrtyVwsAgreYn))
        	{
        		this.gfnAlertMsg("msg", "MSG_009", ["보안서약동의 여부 \n"]);
        		this.setStepIndex(3);
        		return false;
        	}

        	if(this.gfnIsNull(vDataMngVwsAgreYn))
        	{
        		this.gfnAlertMsg("msg", "MSG_009", ["자료관리서약 동의 여부 \n"]);
        		this.setStepIndex(3);
        		return false;
        	}


        	var vIp  = this.objApp.gdsUser.getColumn(0, "ip"); // local Ip
        	var vFlrplnPrmIp = this.objApp.gdsUser.getColumn(0, "flrplnPrmIp"); // 도면신청 Ip

        	//IP 체크 하기//  개발끝나고 주석 풀기!
        	/*if(this.gfnIsNull(vFlrplnPrmIp)){
        		this.gfnAlertMsg("msg", "CAD_001", "");//계정에 등록된 IP가 없습니다.\n배정도면신청 서비스는 보안을 위해 계정에 등록된 IP에서만 신청 및 열람이 가능합니다.\n※ 문의처 : 입주자서비스센터 (T1)741-3301~2 (T2)741-3535~6
        		return false;
        	}
        	if(vIp != vFlrplnPrmIp){
        		this.gfnAlertMsg("msg", "CAD_002", "");//계정에 등록된 IP가 상이합니다.\n배정도면신청 서비스는 보안을 위해 계정에 등록된 IP에서만 신청 및 열람이 가능합니다.\n계정에 등록된 IP에서 접속하여 주시기 바랍니다.
        		return false;
        	}*/

        	return true;
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnArptPbcprtPicSpvsrId_onclick
         * @description : 담당자 찾기 팝업
         ***************************************************************************/
        this.btnArptPbcprtPicSpvsrId_onclick = function()
        {
        		var sTitle = "담당자찾기";

        		var objArg   = {
        			"gubun" : "CAD"
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("plcSch", "work::CST/COM/CST006P20.xfdl", objArg, sPopupCallBack, objOption);
        };

        /**************************************************************************
         * @name : btnArptPbcprtPicChc_onclick
         * @description : 입주자 시설 담당부서 현황 팝업
         ***************************************************************************/
        this.btnArptPbcprtPicChc_onclick = function()
        {
        	var sTitle = "입주자 시설 담당부서 현황";

        		var objArg   = {
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 1150
        			, height: 700			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("ArptPbcprtPicChc", "work::CST/CAD/CST009P11.xfdl", objArg, sPopupCallBack, objOption);
        };

        /**************************************************************************
         * @name : Button_onclick
         * @description : Button Click Event
         ***************************************************************************/
        this.Button_onclick = function(obj,e)
        {
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);
        	var vBtnNm = wfInfo.prcsSeCdNm;
        	this.dsCadMaster.setColumn(0,"jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	var vArptPbcprtPicChcYn = this.dsCadMaster.getColumn(0,"arptPbcprtPicChcYn");
        	trace(JSON.stringify(this.cfnGetWfInfo(obj.name)));

        	for(j = 0; j < this.dsWfEmps.rowcount; j++)
        	{
        		if(vArptPbcprtPicChcYn == 1)
        		{
        			this.dsWfEmps.setColumn(j,"use","N");
        		}else{
        			var vVal = this.divFrom01.form.div00.form.divEdtPop01.form.mtiArptPicId.getSelect(j);

        			if(vVal){
        				this.dsWfEmps.setColumn(j,"use","Y");
        			}else{
        				this.dsWfEmps.setColumn(j,"use","N");
        			}
        		}
        	}

        	if(vBtnNm == "임시저장")
        	{
        		var vStrSvcId  = "flrplnAplyTmprStrg";
        		var vStrSvcUrl = "cad/flrplnAply.do";
        	}
        	else
        	{
        		if(vBtnNm == "신청" || vBtnNm == "재신청" ){
        			if(!this.fnValiChk()){return;}
        		}
        		var vStrSvcId  = "flrplnAplyTmprStrg";
        		var vStrSvcUrl = "cad/flrplnAply.do";
        	}

        	// {0}을(를) 하시겠습니까?
        	this.gfnConfirmMsg("save_confirm", "CST_001", function(sPopupId, sRtn) {
        		if(JSON.parse(sRtn).result == "Y") {
        			this.fnSave(vStrSvcId, vStrSvcUrl);
        		}
        	}, ["확인", "취소"], ["Y" , "N" ], "", [wfInfo.prcsSeCdNm]);


        };

        this.tabStep_onchanged = function(obj,e)
        {
        	this.setStepIndex(obj.tabindex);
        };

        this.CST009M00_onstepchanged = function(obj,e)
        {
        	this.divBtn.positionstep     = e.postindex;  // 버튼
        	this.tabStep.positionstep    = e.postindex;  // 스텝
        	this.tabStep.tabindex        = this.getStepIndex();
        };

        this.CST009M00_onkeydown = function(obj,e)
        {
        	if(e.shiftkey && e.altkey) {
        		if(e.keycode == 37) {
        			this.setStepIndex(this.getStepIndex() == 0 ? this.getStepCount() - 1 : this.getStepIndex() - 1);
        		} else if(e.keycode == 39) {
        			this.setStepIndex(this.getStepIndex() == this.getStepCount() - 1 ? 0 : this.getStepIndex() + 1);
        		}
        	}
        };

        this.CST009M00_onsize = function(obj,e)
        {
        	this.resetScroll();
        };


        this.dsCnvyMttrCn_onload = function(obj,e)
        {
        	this.divFrom04.form.fnGridSize();
        };


        this.dsRltwfCadList_onload = function(obj,e)
        {
        	//this.divFrom02.form.fnListSize();
        };

        this.form_onload2 = function(obj,e)
        {

        };

        this.Button00_onclick = function(obj,e)
        {
        var pvJobCd = this.getOwnerFrame().jobCd;
        this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, inqCnd : { jobPrcsPrgrsSeCd:pvJobCd} });
        	this.divBtn.form.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.CST009M00_onsize,this);
            this.addEventHandler("onstepchanged",this.CST009M00_onstepchanged,this);
            this.tabStep.addEventHandler("onchanged",this.tabStep_onchanged,this);
            this.tabStep.addEventHandler("onkeydown",this.CST009M00_onkeydown,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.dsRltwfCadList.addEventHandler("onload",this.dsRltwfCadList_onload,this);
            this.dsCnvyMttrCn.addEventHandler("onload",this.dsCnvyMttrCn_onload,this);
        };
        this.loadIncludeScript("CST009M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
