(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePaging");
            this.set_titletext("페이징 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "SAMPLE_FILE_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "srchCond1","type" : "STRING","size" : "256"},{"id" : "srchCond2","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_FILE_ID","type" : "string","size" : "32"},{"id" : "SAMPLE_DEPT_NM","type" : "string","size" : "32"},{"id" : "SAMPLE_DESC","type" : "string","size" : "32"},{"id" : "SAMPLE_NM","type" : "string","size" : "32"},{"id" : "SAMPLE_ID","type" : "string","size" : "32"}]},"Rows" : [{"SAMPLE_FILE_ID" : "FILE_df2b1c57c55146c59a687274f8b1c0ff","SAMPLE_DEPT_NM" : "인사부","SAMPLE_DESC" : "연간 직원 성과 평가","SAMPLE_NM" : "김철수","SAMPLE_ID" : "1"},{"SAMPLE_FILE_ID" : "FILE_c11ecffa80204315b4a03a55275c6caf","SAMPLE_DEPT_NM" : "마케팅부","SAMPLE_DESC" : "2024년 2분기 마케팅 계획 및 예산 배정","SAMPLE_NM" : "이영희","SAMPLE_ID" : "2"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "영업부","SAMPLE_DESC" : "2024년 4월 월간 판매 보고서","SAMPLE_NM" : "박민수","SAMPLE_ID" : "3"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "제품개발부","SAMPLE_DESC" : "신제품 X 출시 계획","SAMPLE_NM" : "최지우","SAMPLE_ID" : "4"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "재무부","SAMPLE_DESC" : "2024년 1분기 내부 감사 보고서","SAMPLE_NM" : "장미영","SAMPLE_ID" : "5"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "IT부","SAMPLE_DESC" : "업데이트된 IT 보안 정책 문서","SAMPLE_NM" : "홍길동","SAMPLE_ID" : "6"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "고객서비스부","SAMPLE_DESC" : "2024년 5월 고객 피드백 종합","SAMPLE_NM" : "유재석","SAMPLE_ID" : "7"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "구매부","SAMPLE_DESC" : "사무용품 신규 공급업체 계약서","SAMPLE_NM" : "신동엽","SAMPLE_ID" : "8"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "교육부","SAMPLE_DESC" : "2024년 6월 직원 교육 일정","SAMPLE_NM" : "박나래","SAMPLE_ID" : "9"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "연구개발부","SAMPLE_DESC" : "신기술 동향에 대한 연구 논문","SAMPLE_NM" : "정우성","SAMPLE_ID" : "10"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "프로젝트관리부","SAMPLE_DESC" : "프로젝트 Z에 대한 상세 계획","SAMPLE_NM" : "기므태희","SAMPLE_ID" : "11"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "재무부","SAMPLE_DESC" : "2025년 회계연도 예산 전망","SAMPLE_NM" : "이병헌","SAMPLE_ID" : "12"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "운영부","SAMPLE_DESC" : "주간 팀 회의록","SAMPLE_NM" : "송혜교","SAMPLE_ID" : "13"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "물류부","SAMPLE_DESC" : "2024년 2분기 분기별 재고 보고서","SAMPLE_NM" : "하정우","SAMPLE_ID" : "14"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "준법감시부","SAMPLE_DESC" : "2024년 규제 준수 체크리스트","SAMPLE_NM" : "공유","SAMPLE_ID" : "15"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "인사부","SAMPLE_DESC" : "업데이트된 인사 정책 및 절차","SAMPLE_NM" : "김혜수","SAMPLE_ID" : "16"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "영업부","SAMPLE_DESC" : "2024년 업데이트된 제품 카탈로그","SAMPLE_NM" : "전지현","SAMPLE_ID" : "17"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "마케팅부","SAMPLE_DESC" : "향후 무역 박람회를 위한 이벤트 계획","SAMPLE_NM" : "주지훈","SAMPLE_ID" : "18"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "인사부","SAMPLE_DESC" : "신규 직원 핸드북","SAMPLE_NM" : "배수지","SAMPLE_ID" : "19"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "고객서비스부","SAMPLE_DESC" : "최신 고객 만족도 조사 결과","SAMPLE_NM" : "손예진","SAMPLE_ID" : "20"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "구매부","SAMPLE_DESC" : "연간 공급업체 평가 보고서","SAMPLE_NM" : "유아인","SAMPLE_ID" : "21"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "영업부","SAMPLE_DESC" : "2024년 1분기 성과 지표","SAMPLE_NM" : "이준기","SAMPLE_ID" : "22"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "연구개발부","SAMPLE_DESC" : "신제품 Y에 대한 기술 사양서","SAMPLE_NM" : "한효주","SAMPLE_ID" : "23"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "경영진","SAMPLE_DESC" : "5개년 전략 계획","SAMPLE_NM" : "고소영","SAMPLE_ID" : "24"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "인사부","SAMPLE_DESC" : "2024년 직원 복리후생 개요","SAMPLE_NM" : "이동욱","SAMPLE_ID" : "25"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "재무부","SAMPLE_DESC" : "2024년 리스크 평가 보고서","SAMPLE_NM" : "김우빈","SAMPLE_ID" : "26"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "운영부","SAMPLE_DESC" : "분기별 부서 성과 검토","SAMPLE_NM" : "수현","SAMPLE_ID" : "27"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "마케팅부","SAMPLE_DESC" : "마케팅 캠페인 성과 분석","SAMPLE_NM" : "김지원","SAMPLE_ID" : "28"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "법무부","SAMPLE_DESC" : "신규 발명 특허 신청서","SAMPLE_NM" : "박서준","SAMPLE_ID" : "29"},{"SAMPLE_FILE_ID" : "","SAMPLE_DEPT_NM" : "안전관리부","SAMPLE_DESC" : "2024년 연간 작업장 안전 보고서","SAMPLE_NM" : "정해인","SAMPLE_ID" : "30"},{"SAMPLE_DEPT_NM" : "","SAMPLE_DESC" : "","SAMPLE_NM" : "성명테스트","SAMPLE_ID" : "31"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 페이징");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","149","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid Paging");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","100",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","452","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","360","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","0","40","100","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","staSearchTitle00:0","40","100%","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("[@staSearchTitle00]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel01","226","0","360","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle01","Edit00_00:0","40","100","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","staSearchTitle01:0","40","100%","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","977","40","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_visible("true");
            obj.set_flexgrow("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","0","divSearch:40","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사용자 정보 조회");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle:20",null,"584","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj.set_autoenter("key");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SAMPLE_ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SAMPLE_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:SAMPLE_DEPT_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SAMPLE_DESC\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:40",null,"48","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_url("common::cmmPaging.xfdl");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","980","685","30","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_taborder("0");
                p.Panel02.set_horizontalgap("24");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.move("0","0","452","48",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_flexgrow("0");
                p.Panel00.move("0","0","360","48",null,null);

                p.staSearchTitle00.set_taborder("2");
                p.staSearchTitle00.set_text("아이디");
                p.staSearchTitle00.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle00.set_fittocontents("width");
                p.staSearchTitle00.move("0","40","100","48",null,null);

                p.Edit00_00.set_taborder("3");
                p.Edit00_00.set_accessibilitylabel("[@staSearchTitle00]");
                p.Edit00_00.move("staSearchTitle00:0","40","100%","48",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.move("226","0","360","48",null,null);

                p.staSearchTitle01.set_taborder("5");
                p.staSearchTitle01.set_text("성명");
                p.staSearchTitle01.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle01.set_fittocontents("width");
                p.staSearchTitle01.move("Edit00_00:0","40","100","48",null,null);

                p.Edit00.set_taborder("6");
                p.Edit00.move("staSearchTitle01:0","40","100%","48",null,null);

                p.btnSearch.set_taborder("7");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("btn_WF_Sch");
                p.btnSearch.set_visible("true");
                p.btnSearch.set_flexgrow("0");
                p.btnSearch.move("977","40","120","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px");
            obj.set_verticalgap("16");
            obj.set_flexcrossaxisalign("center");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("Layout0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSearch.set_flexgrow("1");

                p.Panel00.set_flexgrow("1");
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px");
            obj.set_verticalgap("16");
            obj.set_flexcrossaxisalign("center");
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1100,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("페이징 샘플");

                p.Static00.set_taborder("0");
                p.Static00.set_text("그리드 페이징");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","220","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Grid Paging");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","149","60",null,null);

                p.divSearch.set_taborder("3");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.set_text("");
                p.divSearch.set_fittocontents("height");
                p.divSearch.set_accessibilityenable("false");
                p.divSearch.move("0","100",null,"128","0",null);

                p.staTitle.set_taborder("4");
                p.staTitle.set_text("사용자 정보 조회");
                p.staTitle.set_cssclass("sta_WF_H4_pc");
                p.staTitle.set_accessibilityrole("heading3");
                p.staTitle.move("0","divSearch:40","342","43",null,null);

                p.grdList.set_taborder("5");
                p.grdList.set_binddataset("ds00");
                p.grdList.set_autofittype("col");
                p.grdList.set_autoenter("key");
                p.grdList.move("0","staTitle:20",null,"584","0",null);

                p.divPaging.set_taborder("6");
                p.divPaging.set_text("div00");
                p.divPaging.set_url("common::cmmPaging.xfdl");
                p.divPaging.set_accessibilityenable("false");
                p.divPaging.move("0","grdList:40",null,"48","20",null);

                p.Static04_01.set_taborder("7");
                p.Static04_01.set_cssclass("sta_WF_GSize");
                p.Static04_01.set_visible("false");
                p.Static04_01.set_text("H10");
                p.Static04_01.move("980","685","30","10",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1100,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.move("0","100",null,"192","0",null);

                p.staTitle.move("0","divSearch:40","190","43",null,null);

                p.divPaging.set_text("div00");
                p.divPaging.move("0","1023",null,"48","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.Edit00_00","value","dsSearch","srchCond1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.Edit00","value","dsSearch","srchCond2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("samplePaging.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	samplePaging.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/11
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/11			TOBESOFT					최초생성
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
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnAdd = function ()
        {
        	this.dsList.addRow();
        };

        this.cfnDel = function ()
        {
        	var nRow = this.dsList.rowposition;
        	var nDataType = this.dsList.getRowType(nRow);
        	if( nDataType == 2){
        		//추가된 로우는 그냥 삭제
        		this.dsList.deleteRow(nRow);
        	}else{
        		this.gfnAlert("confirm.before.delete");//삭제하시겠습니까?
        	}
        };

        this.cfnSave = function ()
        {
        	if(!this.gfnDsIsUpdated(this.dsList)){
        		this.gfnAlert("msg.save.nochange");//변경된 데이터가 없습니다.
        		return;
        	}

        	var rtnValid = this.fnValidation(this.dsList);
        	if(rtnValid){
        		this.gfnAlert("confirm.before.save");//저장하시겠습니까?
        	}
        };

        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        this.cfnRefresh = function ()
        {
        	this.fnSearchCondInit();
        	this.fnInit();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function ()
        {
         	var strSvcId 	= "searchSampleList";
        // 	var strSvcUrl 	= "searchSampleList.do";
        // 	var inData 		= "inDs=dsSearch";
        // 	var outData 	= "dsList=outDs";
        // 	var strArg 		= "";
        // 	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        	this.fnCallback(strSvcId,0);
        };

        this.fnSave = function ()
        {
        	var strSvcId 	= "saveSample";
        	var strSvcUrl 	= "saveSample.do";
        	var inData 		= "inDs=dsList:U";
        	var outData 	= "";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (svcId, nErrCd, sErrMsg)
        {
        	switch(svcId) {
        		case "searchSampleList":
        			this.fnPageCallback(1, 10);
        			break;
        		case "saveSample":
        			this.fnSearch();
        			break;
        		default:break;
        	}
        };

        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	if(sMsgId=="confirm.before.save"){
        		if(sRtn){
        			this.fnSave();
        		}else{
        			return;
        		}
        	}else if(sMsgId=="confirm.before.delete"){
        		if(sRtn){
        			this.dsList.deleteRow(this.dsList.rowposition);
        			//this.fnDelSave();
        		}else{
        			return;
        		}
        	}
        };

        this.fnPageCallback = function (nPage, nRecrod)
        {
        	var nRow = (nPage-1) * nRecrod ;
        	this.ds00.clearData();
        	for( var i=nRow; i<nRecrod*nPage; i++){
        		if( i >= this.dsList.rowcount ) break;

        		var nTarget = this.ds00.addRow();
        		this.ds00.copyRow(nTarget, this.dsList, i);
        	}
        	this.divPaging.form.fnCreatePage(this.grdList, "fnPageCallback", nPage, "", this.dsList.getRowCount());
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function ()
        {
        	this.dsList.clearData();
        };

        this.fnSearchCondInit = function ()
        {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        };

        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "SAMPLE_ID", "아이디"	, "required,minlength:3,maxlength:13,engnum");
        	this.gfnSetValidation(this.dsList, "SAMPLE_NM", "이름"		, "required,korean");

         	// Dataset의 변경된 Row Validation check
          	if (this.gfnValidation(this.dsList, "U") == false) return false;

        	var nRowType = -1;
        	var nRow 	 = -1;
        	for( var i=0; i<this.dsList.getRowCount(); i++){
        		nRowType = this.dsList.getRowType(i);
        		if( nRowType != 2 ) continue;

        		nRow = this.gfnChkDuplicateData(this.dsList, "SAMPLE_ID", i);
        		if (nRow > -1) {
        			this.gfnAlert("msg.err.validator.duplcation",["아이디"]);
        			this.dsList.set_rowposition(i);
        			this.grdList.setCellPos(0);
        			this.grdList.showEditor(true);
        			return false;
        		}
        	}
        	return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
        };
        this.loadIncludeScript("samplePaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
