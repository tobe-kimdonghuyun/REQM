(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006P21");
            this.set_titletext("담당지이관");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"jobGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsnTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"souProcsId\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"rsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"jobGroupId\">WOGTSCWSO010</Col><Col id=\"rsnTypeCd\">WRS01</Col><Col id=\"souProcsId\">TSC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"jobGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"jobGroupNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobPic", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"jobGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","20",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","227","85","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("기타 작업그룹");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","657","85","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","227","85","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd","0","50","100.00%","520",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100.00%","30",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("작업그룹을 지정하려면 좌측의 작업그룹을 선택하시고, 개인을 지정하려면 좌측 작업그룹을 선택한 후, 우측에 나오는 리스트 중에서 선택을 선택하시면 됩니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:10",null,"40","20",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("작업그룹 : ");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdJobPic","280","Static01:0",null,null,"20","223",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsJobPic");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"회사\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"이메일\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:userId\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:userNm\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:coNm\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:deptNm\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:eml\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("div00","20",null,null,"213","20","0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.divGrd.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("이관사유");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divGrd.form.div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","46","100%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form.div00.form);
            obj.set_taborder("1");
            this.divForm.form.divGrd.form.div00.addChild(obj.name, obj);

            obj = new Grid("grdJobGroup","20","Static01:0","250",null,null,"div00:10",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_fillareatype("none");
            obj.set_binddataset("dsJobGroup");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/></Columns><Rows><Row size=\"44\"/></Rows><Band id=\"body\"><Cell text=\"bind:jobGroupNm\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn","20","divForm:0",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnIdnty","457.00","30","68","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divGrd.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("0");
                p.Static02.set_text("이관사유");
                p.Static02.set_cssclass("sta_WF_Label");
                p.Static02.move("0","0","100%","46",null,null);

                p.TextArea00.set_taborder("1");
                p.TextArea00.move("0","46","100%",null,null,"0");
            	}
            );
            this.divForm.form.divGrd.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form.div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00.move("0","46","100%","167",null,null);
            	}
            );
            this.divForm.form.divGrd.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("작업그룹을 지정하려면 좌측의 작업그룹을 선택하시고, 개인을 지정하려면 좌측 작업그룹을 선택한 후, 우측에 나오는 리스트 중에서 선택을 선택하시면 됩니다.");
                p.Static00.set_cssclass("sta_WF_Des004");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","0","100.00%","30",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("작업그룹 : ");
                p.Static01.set_cssclass("sta_WF_Txt60018");
                p.Static01.move("20","Static00:10",null,"40","20",null);

                p.grdJobPic.set_taborder("3");
                p.grdJobPic.set_autofittype("col");
                p.grdJobPic.set_binddataset("dsJobPic");
                p.grdJobPic.move("280","Static01:0",null,null,"20","223");

                p.div00.set_taborder("4");
                p.div00.set_text("div00");
                p.div00.set_visible("true");
                p.div00.move("20",null,null,"213","20","0");

                p.grdJobGroup.set_taborder("2");
                p.grdJobGroup.set_fillareatype("none");
                p.grdJobGroup.set_binddataset("dsJobGroup");
                p.grdJobGroup.set_autofittype("col");
                p.grdJobGroup.move("20","Static01:0","250",null,null,"div00:10");
            	}
            );
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdJobPic.set_autofittype("none");
                p.grdJobPic.move("20","424",null,"300","20",null);

                p.grdJobGroup.move("20","Static01:0",null,"300","20",null);

                p.div00.set_fittocontents("height");
                p.div00.move("20","grdJobPic:10",null,"213","20",null);

                p.Static00.move("0","0","100.00%","64",null,null);
            	}
            );
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle02_00.set_taborder("0");
                p.staSubTitle02_00.set_text("기타 작업그룹");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("227","85","50%","50",null,null);

                p.Panel01_02.set_taborder("1");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("657","85","50%","50",null,null);

                p.sub_tit01.set_taborder("2");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("227","85","100%","50",null,null);

                p.divGrd.set_taborder("3");
                p.divGrd.set_text("div00");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","50","100.00%","520",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("30");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.set_fittocontents("height");
                p.divGrd.move("0","50","100%","950",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("30");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnIdnty.set_taborder("1");
                p.btnIdnty.set_text("확인");
                p.btnIdnty.set_cssclass("btn_WF_Yes");
                p.btnIdnty.move("457.00","30","68","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",920,650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("담당지이관");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("20","20",null,null,"20","60");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("20","divForm:0",null,"60","20",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_fittocontents("none");
                p.divForm.move("20","20",null,null,"20","60");

                p.divPopBtn.move("20",null,null,"60","20","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divGrd.form.div00.form.TextArea00","value","dsSearch","rsnCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST006P21.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST006P21.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST006P21.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/24
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/24			김주화					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 전달 값 확인
        	this.dsSearch.setColumn(0, "souId", this.getOwnerFrame().pvAplyNo);  // 신청번호
        	this.dsSearch.setColumn(0, "jobCd", this.getOwnerFrame().pvTaskCd);  // 작업코드

        	// 작업그룹조회
        	this.cfnSrvcCall(this.divForm.form.divGrd.form.grdJobGroup.name);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.cfnSrvcCall = function(srvcId) {
        	var strSrvcId   = srvcId;         // transaction을 구분하기 위한 svc id값
        	var strSvcUrl   = "";             // trabsaction을 요청할 주소
        	var inData      = "";             // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	var outData     = "";             // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	var strArg      = "";             // 입력값으로 보낼 arguments, strFormData="20120607"
        	var callBackFnc = "fnCallback";   // transaction의 결과를 받을 Function 이름
        	var isAsync   	= true;           // 비동기통신 여부 [생략가능]

        	switch(strSrvcId)
        	{
        		case this.divForm.form.divGrd.form.grdJobGroup.name :  // 작업그룹조회
        			strSvcUrl = "jobWtpl/selectJobGroup.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsJobGroup=dsJobGroup";

        			break;

        		case this.divForm.form.divGrd.form.grdJobPic.name :  // 작업담당자조회
        			strSvcUrl = "jobWtpl/selectJobPic.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsJobPic=dsJobPic";

        			break;
        		case this.divPopBtn.form.btnIdnty.name :  // 확인(저장)
        		    strSvcUrl = "jobWtpl/savePicChg.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "";

        			break;
        	}

        	this.gfnTransaction( strSrvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(srvcId) {
        		case this.divForm.form.divGrd.form.grdJobGroup.name :  // 작업그룹조회

        			break;
        		case this.divForm.form.divGrd.form.grdJobPic.name :  // 작업담당자조회

        			break;

        		case this.divPopBtn.form.btnIdnty.name :  // 확인(저장)
        		    // 정상적으로 처리되었습니다.
        			this.gfnAlertMsg("CST_003", "CST_003", [], function() {
        			    //this.close(JSON.stringify(this.cfnGetToJson(this.dsSearch)));
        			});
        			this.close(JSON.stringify(this.cfnGetToJson(this.dsSearch)));

        			break;
        	}

            // reset
            this.divForm.form.divGrd.form.resetScroll();
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	this.divPopBtn.form.btnIdnty.click();  // 확인
        };

        this.divPopBtn_btnIdnty_onclick = function(obj,e)
        {
            if(this.dsJobPic.rowposition == -1) {
        		// 선택된 내용이 없습니다.
        		this.gfnAlertMsg("MSG_006", "MSG_006");
        	} else {
        		// 담당자변경
        		// {0} 을(를) 하시겠습니까?
        		this.gfnConfirmMsg("CST_001", "CST_001", function(sPopupId, sRtn) {
        		    if(JSON.parse(sRtn).result == "Y") {
        				this.dsSearch.setColumn(0, "jobGroupId", this.dsJobPic.getColumn(this.dsJobPic.rowposition, "jobGroupId"));  // 작업그룹ID
        				this.dsSearch.setColumn(0, "userId"    , this.dsJobPic.getColumn(this.dsJobPic.rowposition, "userId"    ));  // 사용자ID
        				this.dsSearch.setColumn(0, "deptId"    , this.dsJobPic.getColumn(this.dsJobPic.rowposition, "deptId"    ));  // 부서ID

        				this.cfnSrvcCall(this.divPopBtn.form.btnIdnty.name);
        			}
        		}, ["확인", "취소"], ["Y", "N"], "", ["담당자 변경"]);
        	}
        };

        this.dsList_onload = function(obj,e)
        {
        	this.divForm.form.divGrd.form.staTotalCnt.text = this.dsList.rowcount;
        };

        this.dsJobGroup_onload = function(obj,e)
        {
            if(this.dsJobGroup.rowcount > 0) {
        		this.dsJobGroup.rowposition = 0;
        		this.dsSearch.setColumn(0, "jobGroupId", this.dsJobGroup.getColumn(this.dsJobGroup.rowposition, "jobGroupId"));

        		// 작업담당자조회
        		this.cfnSrvcCall(this.divForm.form.divGrd.form.grdJobPic.name);
        	}
        };

        this.dsJobPic_onrowposchanged = function(obj,e)
        {
        	if(this.getFocus().name != this.divForm.form.divGrd.form.grdJobPic.name) {
        		obj.rowposition = -1;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divGrd.form.grdJobPic.addEventHandler("oncelldblclick",this.divForm_divGrd_grdList_oncelldblclick,this);
            this.divPopBtn.form.btnIdnty.addEventHandler("onclick",this.divPopBtn_btnIdnty_onclick,this);
            this.dsJobGroup.addEventHandler("onload",this.dsJobGroup_onload,this);
            this.dsJobPic.addEventHandler("onrowposchanged",this.dsJobPic_onrowposchanged,this);
            this.dsJobPic.addEventHandler("onvaluechanged",this.dsJobPic_onvaluechanged,this);
        };
        this.loadIncludeScript("CST006P21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
