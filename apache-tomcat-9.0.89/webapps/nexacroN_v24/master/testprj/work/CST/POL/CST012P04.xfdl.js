(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST012P04");
            this.set_titletext("물품정보 상세 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtySn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyPhotoFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"unitNm\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtySn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cmdtySn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"currentRow\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100.00%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            this.addChild(obj.name, obj);

            obj = new Grid("grdInfo","0","0","100.00%","452",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsInfo");
            obj.set_autofittype("col");
            obj.set_readonly("true");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"400\"/></Columns><Rows><Row size=\"48\"/><Row size=\"48\"/><Row size=\"48\"/><Row size=\"48\"/><Row size=\"48\"/><Row size=\"153\"/><Row size=\"48\"/></Rows><Band id=\"body\"><Cell cssclass=\"CellHead\" text=\"등록회사\"/><Cell col=\"1\" text=\"bind:coNm\" textAlign=\"left\" cssclass=\"CellEnd\"/><Cell row=\"1\" text=\"등록번호\" displaytype=\"text\" cssclass=\"CellHead\"/><Cell row=\"1\" col=\"1\" text=\"bind:cmdtySn\" displaytype=\"text\" cssclass=\"CellEnd\" textAlign=\"left\"/><Cell row=\"2\" cssclass=\"CellHead\" text=\"물품명\"/><Cell row=\"2\" col=\"1\" cssclass=\"CellEnd\" text=\"bind:cmdtyNm\" textAlign=\"left\"/><Cell row=\"3\" text=\"단위\" displaytype=\"text\" cssclass=\"CellHead\"/><Cell row=\"3\" col=\"1\" text=\"bind:unitNm\" displaytype=\"text\" cssclass=\"CellEnd\" textAlign=\"left\"/><Cell row=\"4\" cssclass=\"CellHead\" text=\"규격\"/><Cell row=\"4\" col=\"1\" cssclass=\"CellEnd\" text=\"bind:spcfctNm\" textAlign=\"left\"/><Cell row=\"5\" text=\"물품사진\" displaytype=\"text\" cssclass=\"CellHead\"/><Cell row=\"5\" col=\"1\" text=\"expr:dataset.getColumn(currow, &quot;orgnlFileNm&quot;)\" displaytype=\"text\" cssclass=\"CellEnd\" textAlign=\"left\"/><Cell row=\"6\" cssclass=\"CellHead\" text=\"등록자/등록일\"/><Cell row=\"6\" col=\"1\" cssclass=\"CellEnd\" textAlign=\"left\" text=\"expr:dataset.getColumn(currow, &quot;frstRegNm&quot;) + &quot; (&quot; + dataset.getColumn(currow, &quot;frstRegId&quot;) + &quot;)&quot; +&quot; / &quot; + dataset.getColumn(currow, &quot;frstRegDtm&quot;)\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","747","150","594","207",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_positionstep("0");
            obj.set_ExtensionArr("gif,png,jpg,jpge");
            obj.set_AllowDuplicationFile("1");
            obj.set_ImgPreView("1");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdInfo.set_taborder("0");
                p.grdInfo.set_binddataset("dsInfo");
                p.grdInfo.set_autofittype("col");
                p.grdInfo.set_readonly("true");
                p.grdInfo.set_useselcolor("false");
                p.grdInfo.move("0","0","100.00%","452",null,null);

                p.RaonkUpload.set_taborder("1");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.set_positionstep("0");
                p.RaonkUpload.set_ExtensionArr("gif,png,jpg,jpge");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_ImgPreView("1");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.move("747","150","594","207",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",800,490,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("물품정보 상세 조회");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("auto autoindicator");
                p.divForm.move("0","0","100.00%",null,null,"0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,489,this,
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
        this.addIncludeScript("CST012P04.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST012P04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST012P04.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/23
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/23			이규철						최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit()
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
        this.fnSearch = function (sCmdtySn) {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	// 유저정보를 셋팅한다.
        	const gdsUser = nexacro.getApplication().gdsUser;

        	this.dsSearch.setColumn(0, "coId", gdsUser.getColumn(0, "coId"));
        	this.dsSearch.setColumn(0, "userId", gdsUser.getColumn(0, "userId"));
        	this.dsSearch.setColumn(0, "cmdtySn", sCmdtySn);

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/pol/polCmdtyInfoInq.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsInfo=dsList dsAtfl=dsAtfl";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        		case "search" :
        			if (this.dsInfo.getRowCount() == 0) {
        				this.dsInfo.addRow();
        			} else {
        				// Empty
        			}

        			break;

        		default:
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	if (this.gfnIsNull(this.getOwnerFrame().cmdtySn)) return;

        	this.fnSearch(this.getOwnerFrame().cmdtySn);
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.dsAtfl_onload = function(obj,e)
        {
        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	if(this.divForm.form.RaonkUpload) {
        		if(this.dsAtfl.rowcount > 0) {
        			// RaonkUpload 초기화
        			this.divForm.form.RaonkUpload.ResetUpload();
        			this.gfnDownloadSetting(this.divForm.form.RaonkUpload, this.dsAtfl);

        			//그리드의 orgnlFileNm 생성
        			this.dsInfo.addColumn("orgnlFileNm", "string");
        		}
        	}

        	//첨부파일 정보 그리드의 orgnlFileNm에 세팅
        	for(var i = 0; i < this.dsAtfl.rowcount; i++) {
        		var colId = this.dsAtfl.getColumn(i, "aplyNo");
        		var orgnlFileNm = this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')';

        		var row = this.dsInfo.findRow("cmdtySn", colId);
        		this.dsInfo.setColumn(row, "orgnlFileNm", orgnlFileNm);

        	}

        	this.resetScroll();

        };

        this.divForm_grdInfo_oncellclick = function(obj,e)
        {
        	if(e.row == 0 && e.cell == 11) {
        		if(!this.gfnIsNull(this.dsInfo.getColumn(0, "orgnlFileNm"))) {
        			// 파일 다운로드
        			this.cfnFileDwnld(this.divForm.form.RaonkUpload, this.dsAtfl, this.dsAtfl.getColumn(0, "colId"), e);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.grdInfo.addEventHandler("oncellclick",this.divForm_grdInfo_oncellclick,this);
            this.divForm.form.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.divForm.form.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.divForm.form.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.divForm.form.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.divForm.form.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("CST012P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
