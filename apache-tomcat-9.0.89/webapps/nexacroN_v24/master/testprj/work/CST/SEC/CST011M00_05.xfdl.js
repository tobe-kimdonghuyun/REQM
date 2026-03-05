(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST011M00_05");
            this.set_titletext("위해물품 목록 등록(보호구역)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLabelType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0","100.00%","680",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"divGrd\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("위해물품 목록 등록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","20","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","1020","0","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","750.00","32","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","730.00","33","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSample","540.00","150","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsSample");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"85\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"92\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"물품사진\"/><Cell col=\"2\" text=\"물품명&#13;&#10;(장비명)\"/><Cell col=\"3\" text=\"총보유수량&#13;&#10;(장비 P/N)\"/><Cell col=\"4\" text=\"단위&#13;&#10;(관리번호)\"/><Cell col=\"5\" text=\"관리번호&#13;&#10;(승인 후 자동생성)\"/><Cell col=\"6\" text=\"규격\"/><Cell col=\"7\" text=\"보관장소&#13;&#10;(구체적 장소)\"/><Cell col=\"8\" text=\"출력방법\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"1,2,3…\" displaytype=\"text\" wordWrap=\"char\"/><Cell col=\"1\" text=\"물품사진\" displaytype=\"text\" wordWrap=\"char\"/><Cell col=\"2\" text=\"물품명&#13;&#10;(구체적으로 기재)\" displaytype=\"text\" wordWrap=\"char\"/><Cell col=\"3\" text=\"신청수량\" displaytype=\"text\" wordWrap=\"char\"/><Cell col=\"4\" text=\"개\" displaytype=\"text\" wordWrap=\"char\"/><Cell col=\"5\" text=\"업체명-부서명-회사전화번호-위해물품명-규격-총보유수량-순번수량-단위-신청번호-사용종료일\" displaytype=\"text\" wordWrap=\"char\"/><Cell col=\"6\" text=\"10cm*50cm*20cm / 10kg\" displaytype=\"text\" wordWrap=\"char\"/><Cell col=\"7\" text=\"제1여객터미널 AS 1층&#13;&#10;동편 OO게이트&#13;&#10;OO회사 사무실 내 서랍\" displaytype=\"text\" wordWrap=\"char\"/><Cell col=\"8\" text=\"스티커 /레이져\" cssclass=\"CellEnd\" displaytype=\"text\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1015.00","Panel03:0","100.00%","160",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdSample\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","30.00","244","96.88%","126",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","1020","Panel02:0","100.00%","147",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","60.00","272","100%","142",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("O 수기 등록으로 25개 이상 신청 시 [임시저장] 후 연속하여 신청이 가능합니다.\r\nO 위험물의 경우 구격란에 용량(ex. 100ml, 100g) 으로 기재\r\nO 셋트 물품의 경우 최소단위까지의 규격(ex. 10/12/14cm)를 모두 기재\r\nO 각 물품별 총 보유 수량은 전체 물품 합계 25,000개 이하로 작성해주시길 바랍니다\r\nO 물품정보에 ‘&’ 은 사용하실수 없습니다\r\n※ 항공사 항공기 정비위해물품 등록 시 한 개의 순번에 한 개의 장비 등록이 원칙이며 물품명, 총보유수량, 단위칸에는 괄호안의 정보를 기재하여\r\n   주시길 바랍니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divGrd","1020","pan00:0","100.00%","265",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnCmdtyUpload","871","20","150","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("물품목록일괄업로드");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnMyPool","774.00","10","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("나의물품");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","470","0","100%","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCmdtyUpload\"/><PanelItem id=\"PanelItem06\" componentid=\"btnMyPool\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdCsafList","20","panGrdBtn:20","100%","240",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCsaf");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"184\"/><Column size=\"106\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"순번\" cssclass=\"CellE\"/><Cell col=\"1\" colspan=\"2\" text=\"물품사진\"/><Cell col=\"3\" text=\"물품명&#13;&#10;(장비명)\" cssclass=\"CellE\"/><Cell col=\"4\" text=\"총보유수량&#13;&#10;(장비 P/N)\" cssclass=\"CellE\"/><Cell col=\"5\" text=\"단위&#13;&#10;(관리번호)\" cssclass=\"CellE\"/><Cell col=\"6\" text=\"관리번호&#13;&#10;(승인 후 자동생성)\"/><Cell col=\"7\" text=\"규격\" cssclass=\"CellE\"/><Cell col=\"8\" text=\"보관장소&#13;&#10;(구체적 장소)\" cssclass=\"CellE\"/><Cell col=\"9\" text=\"출력방법\" cssclass=\"CellEnd,CellE\"/></Band><Band id=\"body\"><Cell displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditlimitbymask=\"both\" maskeditformat=\"#,###,###,###,###,###,###,###\" text=\"bind:sn\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:orgnlFileNm\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" text=\"expr:dataset.parent.gfnIsNull(orgnlFileNm) ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.gfnIsNull(orgnlFileNm) ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" edittype=\"button\"/><Cell col=\"3\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:cmdtyNm\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"normal\" maskeditlimitbymask=\"both\" maskeditformat=\"#,###,###,###\" textAlign=\"right\" text=\"bind:thldQty\" editmaxlength=\"3\" editinputtype=\"digit\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:unitVl\"/><Cell col=\"6\" text=\"bind:mngNo\"/><Cell col=\"7\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:spcfctVl\"/><Cell col=\"8\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:mngPlcCn\"/><Cell col=\"9\" cssclass=\"CellEnd\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:otptMthdSeCd\" combodataset=\"dsLabelType\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","72","150","648","200",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_positionstep("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCmdtyUpload.set_taborder("5");
                p.btnCmdtyUpload.set_text("물품목록일괄업로드");
                p.btnCmdtyUpload.set_cssclass("btn_WF_FileUp");
                p.btnCmdtyUpload.set_fittocontents("width");
                p.btnCmdtyUpload.set_visible("true");
                p.btnCmdtyUpload.move("871","20","150","34",null,null);

                p.btnGrdAdd.set_taborder("2");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdDel.set_taborder("4");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);

                p.btnMyPool.set_taborder("3");
                p.btnMyPool.set_text("나의물품");
                p.btnMyPool.set_cssclass("btn_WF_Small");
                p.btnMyPool.set_visible("true");
                p.btnMyPool.set_fittocontents("width");
                p.btnMyPool.move("774.00","10","80","34",null,null);

                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move("470","0","100%","34",null,null);

                p.grdCsafList.set_taborder("0");
                p.grdCsafList.set_binddataset("dsCsaf");
                p.grdCsafList.getSetter("uFunction").set("checkbox");
                p.grdCsafList.set_autoenter("select");
                p.grdCsafList.move("20","panGrdBtn:20","100%","240",null,null);
            	}
            );
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdCsafList.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");

                p.btnMyPool.set_visible("false");
            	}
            );
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST011M00_05.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST011M00_05.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST011M00_05.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvParent = this.parent.parent;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
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

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsLabelType:"LABELTYPE:S" });
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 추가
        this.divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	const oTargetGrid = this.divGrd.form.grdCsafList;
        	const oTargetDs = oTargetGrid.getBindDataset();

        	//orgnlFileNm 파일관련 정보
        	if (oTargetDs.getColumnInfo("orgnlFileNm") == null) {
        		oTargetDs.addColumn("orgnlFileNm");
        	}

        	const nAddRow = oTargetDs.addRow();
        	oTargetDs.setColumn(nAddRow, "otptMthdSeCd", ""); //출력방법
        };

        // 삭제
        this.divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	const oTargetDs = this.divGrd.form.grdCsafList.getBindDataset();
        	const nRows = oTargetDs.extractRows("chk == '1'");
        	if (this.gfnIsNull(nRows) || nRows == -1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["선택된 내역이 존재하지 않습니다."]);
        		return;
        	}

        	nRows.reverse().forEach(nRow =>{
        		this.RaonkUpload.upatflinfo = {colid : oTargetDs.getColumn(nRow, "sn")};
        		this.RaonkUpload.cfnDelAtfl();	//파일 삭제
        		oTargetDs.deleteRow(nRow);		//그리드의 row 삭제
        	});
        };


        // 나의물품
        this.divGrd_btnMyPool_onclick = function(obj,e)
        {
        	const sTitle = "나의등록물품조회";
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		//, autosize  : true
        		, title     : sTitle
        		//, resize    : true
        		, titlebar  : true
        		, width     : 900
        		, height    : 760
        	};
        	const sPopupCallBack = "fnPopupCallback";
        	let sameCnt = 0;
        	this.gfnOpenPopup("myPool", "work::CST/POL/CST012P06.xfdl", {}, (sPopId, sRtn) => {
        		if (this.gfnIsNull(sRtn)) return;

        		//팝업 callback이 2번 실행되서 별도 count를 세어서 반복되지 않도록 처리
        		if(sameCnt > 0) {
        			return;
        		}

        		var objRtn = JSON.parse(sRtn);

        		// 물품명, 단위, 규격
        		const oTargetDs = this.divGrd.form.grdCsafList.getBindDataset();

        		objRtn.forEach(oRtn => {
        			const nAddRow = oTargetDs.addRow();
        			oTargetDs.setColumn(nAddRow, "cmdtyNm", oRtn.cmdtyNm);
        			oTargetDs.setColumn(nAddRow, "unitVl", oRtn.unitNm);
        			oTargetDs.setColumn(nAddRow, "spcfctVl", oRtn.spcfctNm);
        			oTargetDs.setColumn(nAddRow, "otptMthdSeCd", ""); //출력방법
        		});

        		sameCnt++;

        	}, objOption);
        };

        // 그리드 셀 클릭
        this.divGrd_grdCsafList_oncellclick = function(obj,e)
        {
        	const dsCsaf = obj.getBindDataset();
        	var dsCmdtyAtfl = this.fvParent.dsCmdtyAtfl;

        	//그리드 내부 셀 클릭
        	if(e.col == 2) {
        		//물품사진 선택한 경우 다운로드(등록된 파일 있는 경우), row의 상태가 변경없음(초기행상태)일 때
        		if(dsCsaf.getRowType() == 1 && !this.gfnIsNull(obj.getBindDataset().getColumn(e.row, "orgnlFileNm"))) {
        			//var oSn = dsCsaf.getColumn(e.row, "sn");
        			//var oRow = dsCmdtyAtfl.findRow("colId", oSn);
        			var oColId = dsCsaf.getColumn(e.row, "cmdtyPhotoPath");
        			var oRow = dsCmdtyAtfl.findRow("atflMngNo", oColId);
        			var originName = dsCmdtyAtfl.getColumn(oRow, "orgnlFileNm");
        			var size = dsCmdtyAtfl.getColumn(oRow, "fileSz");

        			//파일 다운로드 cfnFileDwnld로는 여러파일 중 마지막에 업로드한 파일만 접근가능해서 직접 호출해서 다운로드 진행
        			//this.cfnFileDwnld(this.RaonkUpload, dsCmdtyAtfl, dsCsaf.getColumn(e.row, "sn"), e);

        			if(this.RaonkUpload.GetListInfo().mergeFile) {
        				for(let i = 0; i < this.RaonkUpload.GetListInfo().mergeFile.length; i++) {
        					if(this.RaonkUpload.GetListInfo().mergeFile[i].originalName == originName &&
        					   this.RaonkUpload.GetListInfo().mergeFile[i].size == size) {
        						this.RaonkUpload.SetSelectFile(i, '0');
        						this.RaonkUpload.DownloadFile();
        					}
        				}
        			}
        		}
        	} else if(e.col == 3) {
        		if(obj.getCellPropertyValue(e.row, e.col, "edittype") != "none") {
        			//순번정보가 입력되지 않은 경우 return;
        			var sn = dsCsaf.getColumn(e.row, "sn");
        			if(this.gfnIsNull(sn)) {
        				this.gfnAlertMsg("msg", "MSG_011", ["순번을 먼저 입력하세요."]);
        				return;
        			}

        			if(obj.getCellPropertyValue(e.row, e.col, "cssclass") == "CellFileUp") {  // 파일찾기
        				// 첨부파일 선택 창 열기
        				// ! key 값으로 sn을 사용 : 데이터셋에서 sn 변경 시에 같이 변경되도록 함
        				this.RaonkUpload.upatflinfo = {colid : dsCsaf.getColumn(e.row, "sn")};
        				this.RaonkUpload.OpenFileDialog();	//upatflinfo를 별도로 설정한 경우는 cfnSetAtflInfo를 사용하지 않음
        			} else if(obj.getCellPropertyValue(e.row, e.col, "cssclass") == "CellFileDel") {  // 파일삭제
        				// 첨부 파일 삭제
        				this.RaonkUpload.upatflinfo = {colid : dsCsaf.getColumn(e.row, "sn")};
        				this.RaonkUpload.cfnDelAtfl();	//upatflinfo를 별도로 설정한 경우는 cfnSetAtflInfo를 사용하지 않음
        			}
        		}
        	}
        };

        //파일 업로드 관련(2024-12-04)
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	trace(" >>> Cmdty RaonkUpload_RAONKUPLOAD_CreationComplete");

        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CST/SEC/YYYY/MM/DD/');
        	var dsCsaf = this.fvParent.dsCsaf;				//그리드와 연결된 DS
        	var dsCmdtyAtfl = this.fvParent.dsCmdtyAtfl;	//청부파일 정보
        	var dsCmdtyFile = this.fvParent.dsCmdtyFile;

        	// (그리드) 파일 첨부 추가 함수
        	obj.cfnAddAtfl = function(oFile) {
        		// 이미 첨부된 파일이 있으면 기존 파일 삭제
        		this.cfnDelAtfl();

        		// RaonkUpload에 컬럼ID 설정(sn 값으로 설정)
        		this.SetFileCustomValue(-1, JSON.stringify({ "strCustomValue" : this.upatflinfo.colid }));

        		// 첨부파일 DS에 추가
        		var nRow = dsCmdtyAtfl.findRow("colId", this.upatflinfo.colid);
        			nRow = Math.max(nRow, 0) ? nRow : dsCmdtyAtfl.addRow();
        		dsCmdtyAtfl.setColumn(nRow, "colId", this.upatflinfo.colid);  // 컬럼ID-그리드에 매핑

        		// 첨부 파일 표출용 DS 설정 - 그리드와 연결된 DS
        		var oRow = dsCsaf.findRow("sn", this.upatflinfo.colid);
        		dsCsaf.setColumn(oRow, "orgnlFileNm", oFile.userdata.strName + '(' + oFile.userdata.nSize + ')');
        	};

        	// (그리드) 파일 삭제 함수
        	obj.cfnDelAtfl = function() {

        		// 존재하지 않으면 돌아감
        		var nRow = dsCmdtyAtfl.findRow("colId", this.upatflinfo.colid);
        		if(nRow == -1) { return; }

        		// RaonkUpload mergeFile 삭제
        		if(this.GetListInfo().mergeFile) {
        		    var RaonkUpload       = this;
        			var cfnGetCustomValue = this.parent.cfnGetCustomValue;
        			this.GetListInfo().mergeFile.forEach(function(v, i, o) {
        				//JSON.parse(v.customValue) 는 저장된 파일 찾아서 삭제,
        				//cfnGetCustomValue(v.customValue) 는 저장 전 파일 찾아서 삭제
        				if(JSON.parse(v.customValue) == RaonkUpload.upatflinfo.colid
        				  || cfnGetCustomValue(v.customValue) == RaonkUpload.upatflinfo.colid) {
        					RaonkUpload.SetSelectFile(i, '0');
        					RaonkUpload.DeleteSelectedFile();
        				}
        			});
        		}


        		console.log("Cmdty RaonkUpload.GetListInfo().mergeFile========" + this.GetListInfo().mergeFile);
        		if(this.GetListInfo().mergeFile) {
        			console.log("Cmdty RaonkUpload.GetListInfo().mergeFile.length=" + this.GetListInfo().mergeFile.length);
        		}

        		// 첨부파일 DS 삭제
        		dsCmdtyAtfl.deleteRow(dsCmdtyAtfl.findRow("colId", this.upatflinfo.colid));

        		// 첨부 파일 표출용 DS 설정 - 그리드와 연결된 DS
        		var oRow = dsCsaf.findRow("sn", this.upatflinfo.colid);
        		dsCsaf.setColumn(oRow, "orgnlFileNm", "");  // 파일풀명
        	};
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	trace(" >>> Cmdty RaonkUpload_RAONKUPLOAD_BeforeAddFile");
        	console.log(paramObj);

        	return true;
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {
        	trace(" >>> Cmdty RaonkUpload_RAONKUPLOAD_AfterAddFile");

        	// 첨부 파일 추가
        	obj.cfnAddAtfl(e);
        };

        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	trace(" >>> Cmdty RaonkUpload_RAONKUPLOAD_OnError");
        	trace(paramObj.userdata.strMessage);

            // 파일 업로드 중 오류가 발생했습니다!
        	this.gfnAlertMsg(this.RaonkUpload.name, "MSG_007", [paramObj.userdata.strMessage]);
        };

        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, e)
        {
        	trace(" >>> Cmdty RaonkUpload_RAONKUPLOAD_UploadComplete");
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	console.log(allListArray);

        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수(e.eventid를 찾으면 divForm03의 파일 업로드를 향하게 되어서 별도 명칭 부여)
        	this.gfnUploadComplete.call(this.fvParent, "dtlFile", allListArray, "dsCmdtyAtchRslt", "fnCallback");
        	//this.gfnUploadComplete(e.eventid, allListArray, "dsCmdtyAtchRslt", "fnCallback");
        };

        //물품목록 일괄 업로드
        this.divGrd_btnCmdtyUpload_onclick = function(obj,e)
        {
        	const sTitle = "물품목록업로드";
        	const oArg = {}
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		, title     : sTitle
        		, titlebar  : true
        		, width     : 1000
        		, height    : 820
        		// , autosize  : true
        		// , resize    : true
        	};

        	let sameCnt = 0;
        	this.gfnOpenPopup("cmdtyExcel", "work::CST/SEC/CST011P16.xfdl", {}, (sPopId, sRtn) => {
        		if (this.gfnIsNull(sRtn)) return;

        		//팝업 callback이 2번 실행되서 별도 count를 세어서 반복되지 않도록 처리
        		if(sameCnt > 0) {
        			return;
        		}

        		var objRtn = JSON.parse(sRtn);

        		// 물품명, 단위, 규격 등
        		const oTargetDs = this.divGrd.form.grdCsafList.getBindDataset();

        		//기존값과 중복체크
        		for(let k=0; k<objRtn.length; k++) {
        			const nAddRow = oTargetDs.addRow();

        			var vSn = objRtn[k].sn;
        			if(oTargetDs.extractRows("sn == '" + vSn + "'").length > 1) {
        				break;
        			} else {
        				oTargetDs.setColumn(nAddRow, "sn", objRtn[k].sn);
        			}
        			oTargetDs.setColumn(nAddRow, "cmdtyNm", objRtn[k].cmdtyNm);
        			oTargetDs.setColumn(nAddRow, "thldQty", objRtn[k].thldQty);
        			oTargetDs.setColumn(nAddRow, "unitVl", objRtn[k].unitVl);
        			oTargetDs.setColumn(nAddRow, "spcfctVl", objRtn[k].spcfctVl);
        			oTargetDs.setColumn(nAddRow, "mngPlcCn", objRtn[k].mngPlcCn);
        			oTargetDs.setColumn(nAddRow, "otptMthdSeCd", objRtn[k].otptMthdSeCd);
        		}
        		sameCnt++;

        	}, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.staLabel00.addEventHandler("onclick",this.divForm_div00_01_01_00_00_00_staLabel00_onclick,this);
            this.divGrd.form.btnCmdtyUpload.addEventHandler("onclick",this.divGrd_btnCmdtyUpload_onclick,this);
            this.divGrd.form.btnGrdAdd.addEventHandler("onclick",this.divGrd_btnGrdAdd_onclick,this);
            this.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divGrd_btnGrdDel_onclick,this);
            this.divGrd.form.btnMyPool.addEventHandler("onclick",this.divGrd_btnMyPool_onclick,this);
            this.divGrd.form.grdCsafList.addEventHandler("oncellclick",this.divGrd_grdCsafList_oncellclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
        };
        this.loadIncludeScript("CST011M00_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
