(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("bbrssMngmeDtl");
            this.set_titletext("게시판관리상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"taskTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstOtptCnt\" type=\"STRING\" size=\"256\"/><Column id=\"ansUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"ntcSkillFg\" type=\"STRING\" size=\"256\"/><Column id=\"ntcSntnPrmsoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchPsbltyFileNo\" type=\"STRING\" size=\"256\"/><Column id=\"atchPsbltyFileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileExtnLmtYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileExtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileStrgPath\" type=\"STRING\" size=\"256\"/><Column id=\"dwnldYn\" type=\"STRING\" size=\"256\"/><Column id=\"edtrUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"bfrSntnNextSntnUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"srchCndtnOtptArtclCn\" type=\"STRING\" size=\"256\"/><Column id=\"newSntnIndctDcnt\" type=\"STRING\" size=\"256\"/><Column id=\"ctgryUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsUpendCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsLwprtCn\" type=\"STRING\" size=\"256\"/><Column id=\"regSntnCnt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsIntrdCn\" type=\"STRING\" size=\"256\"/><Column id=\"secrtSntnSkillUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"mainUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"defaultData\" type=\"STRING\" size=\"256\"/><Column id=\"rds\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">BBS_TYPE_CD</Col><Col id=\"useYn\">Y</Col><Col id=\"defaultData\"/><Col id=\"rds\">dsBbsTypeCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbsTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_00",null,"10","220","32","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("<fc v=\"#ed5151\">*</fc>는 필수입력사항 입니다.");
            obj.set_cssclass("sta_help_linebox_red");
            obj.set_color("black");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","0","Static01_00_00:12",null,"260","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("StaBbrssTpeCd","0","0","160","37",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("게시판유형 <fc v=\"#ed5151\">*</fc>");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBbrssNm","0","37","160","37",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_text("게시판명 <fc v=\"#ed5151\">*</fc>");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static10","0","74",null,"74","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_rowAll");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBbrssIntrdCont","0","74","160","74",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_text("게시판 설명 <fc v=\"#ed5151\">*</fc>");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("bbsNm","staBbrssNm:10","41",null,"28","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("N");
            this.divContents.addChild(obj.name, obj);

            obj = new TextArea("bbsIntrdCn","staBbrssIntrdCont:10","78",null,"66","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("StaUseYn","0","148","160","37",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_text("사용여부 <fc v=\"#ed5151\">*</fc>");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("StaAnsrTchncUsgYn","0","185","160","37",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("13");
            obj.set_text("답글 <fc v=\"#ed5151\">*</fc>");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("StaSecrtSntnTchncUsgYn","350","185","160","37",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("14");
            obj.set_text("비밀글 <fc v=\"#ed5151\">*</fc>");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("useYn","StaUseYn:10","153","135","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var divContents_form_useYn_innerdataset = new nexacro.NormalDataset("divContents_form_useYn_innerdataset", obj);
            divContents_form_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divContents_form_useYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("ansUseYn","StaAnsrTchncUsgYn:10","190","135","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var divContents_form_ansUseYn_innerdataset = new nexacro.NormalDataset("divContents_form_ansUseYn_innerdataset", obj);
            divContents_form_ansUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divContents_form_ansUseYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("secrtSntnSkillUseYn","StaSecrtSntnTchncUsgYn:10","190","135","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var divContents_form_secrtSntnSkillUseYn_innerdataset = new nexacro.NormalDataset("divContents_form_secrtSntnSkillUseYn_innerdataset", obj);
            divContents_form_secrtSntnSkillUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divContents_form_secrtSntnSkillUseYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divContents.addChild(obj.name, obj);

            obj = new MaskEdit("newSntnIndctDcnt","520","226","88","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_format("###,###");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("StrBbrssNticEstbsCnt00","newSntnIndctDcnt:7","227","33","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("15");
            obj.set_text("개");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("StaAttchFilePssblYn","0","222","160","37",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("16");
            obj.set_text("첨부파일 <fc v=\"#ed5151\">*</fc>");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("attchFilePssblYn","StaAttchFilePssblYn:10","226","135","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var divContents_form_attchFilePssblYn_innerdataset = new nexacro.NormalDataset("divContents_form_attchFilePssblYn_innerdataset", obj);
            divContents_form_attchFilePssblYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divContents_form_attchFilePssblYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("StaAttchFilePssblYn00","350","222","160","37",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("17");
            obj.set_text("첨부가능파일 개수 <fc v=\"#ed5151\">*</fc>");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("StaAttchFilePssblYn00_00","680","222","160","37",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("18");
            obj.set_text("첨부가능파일 크기 <fc v=\"#ed5151\">*</fc>");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            this.divContents.addChild(obj.name, obj);

            obj = new MaskEdit("newSntnIndctDcnt00","850","226","90","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_format("###,###");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"divContents:16","78","32","8",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_common01");
            this.addChild(obj.name, obj);

            obj = new Radio("bbsTypeCd","170","59","462","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var bbsTypeCd_innerdataset = new nexacro.NormalDataset("bbsTypeCd_innerdataset", obj);
            bbsTypeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">첨부파일게시판</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">펼침게시판</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">답변형게시판</Col></Row></Rows>");
            obj.set_innerdataset(bbsTypeCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,380,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContents.form.bbsId","value","dsList","bbsId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.duyTpcd","value","dsList","taskTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.bbrssTpeCd","value","dsList","bbrssTpeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.bbsNm","value","dsList","bbsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContents.form.bbsIntrdCn","value","dsList","bbsIntrdCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContents.form.useYn","value","dsList","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContents.form.ansUseYn","value","dsList","ansUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContents.form.pstOtptCnt","value","dsList","pstOtptCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContents.form.secrtSntnSkillUseYn","value","dsList","secrtSntnSkillUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContents.form.bfrSntnNextSntnUseYn","value","dsList","bfrSntnNextSntnUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContents.form.newSntnIndctDcnt","value","dsList","atchPsbltyFileNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContents.form.bbrssUpendCont","value","dsList","bbrssUpendCont");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContents.form.bbrssLwprtCont","value","dsList","bbrssLwprtCont");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContents.form.attchFilePssblYn","value","dsList","atchFileUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divContents.form.attchPssblFileNo","value","dsList","attchPssblFileNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divContents.form.mainUseYn","value","dsList","mainUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","bbsTypeCd","value","dsList","bbsTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divContents.form.useYn00","value","dsList","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divContents.form.useYn00","innerdataset","dsList","bbsTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divContents.form.secrtSntnSkillUseYn00","value","dsList","secrtSntnSkillUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divContents.form.attchFilePssblYn00","value","dsList","attchFilePssblYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divContents.form.newSntnIndctDcnt00","value","dsList","atchPsbltyFileSz");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("bbsMngReg.xfdl", function() {
        /**
        *  게시판관리 상세
        *  @MenuPath    시스템관리 > 게시판관리 > 게시판관리 상세
        *  @FileName 	bbrssMngmeDtl.xfdl
        *  @Creator 	jjl
        *  @CreateDate 	2023.10.18
        *  @Desction    프로그램관리 상세
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023.10.18     		jjl 	           		최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
        * include 선언부
         ************************************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * @description 조회
        */
        this.fnSearch = function ()
        {
        	// 조회조건 설정
        // 	this.dsSearch.setColumn(0, "searchCondition", this.divSearch.form.cboCondition.value);
        //	this.dsSearch.setColumn(0, "searchKeyword"  , this.divSearch.form.edtKeyword.value);

         	var strSvcId    = "search";
        	var strSvcUrl   = "/cmmnn/sysMng/bbsMng/readBbsMngList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        };

        /**
         * @description 저장
        */
        this.fnSave = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "/cmmnn/sysMng/bbsMng/insertBbsMng.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)

        };

        /**
         * @description 저장
        */
        this.fnDelete = function()
        {
        	var strSvcId    = "delete";
        	var strSvcUrl   = "cmns/sysMng/bbsMng/deleteBBSMng.do";
        	var inData      = "dsList=dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)

        };

        this.fnUpload = function()
        {
        }

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) {

        		switch(errorCode) {
        			case -888888888:
        				break;
        		}
        	} else {

        		switch(svcID) {
        			case "search":

        				break;

        			case "save":
        				// 저장 되었습니다.
        				//this.gfnAlert("msg.save.success");
        				this.gfnAlert("msg.save.success", "", "msg.save.success", "fnMsgCallback");
        				break;

        			case "delete":
        				// 삭제 되었습니다.
        				//this.gfnAlert("msg.save.success");
        				this.gfnAlert("msg.delete.success", "", "msg.delete.success", "fnMsgCallback");
        				break;
        		}
        	}
        };

        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (strId, strVal)
        {
            //trace("strId >> " + strId + "   strVal >> " + strVal);
            if(strId == "confirm.save") {
                //trace("strVal : " + strVal);
                if(strVal) {
        			this.fnSave();
                }
            }

            //trace("strId >> " + strId + "   strVal >> " + strVal);
            if(strId == "confirm.before.delete") {
                //trace("strVal : " + strVal);
                if(strVal) {
        			this.fnDelete();
                }
            }

            if(strId == "msg.save.success" || strId == "msg.delete.success") {
                //trace("strVal : " + strVal);
                if(strVal) {

        			this.ClosePage();
        		}
            }
        };

        this.fnCodeCallback = function(svcID,errorCode,errorMsg)
        {
        	var params = this.gfnGetMdiRootDiv().arguments.menuParam;

        	if (this.gfnIsNull(params.bbrssId))
        	{
        		this.dsList.addRow();

        		this.btnDel.set_visible(false);
        		this.btnSave.set_right(Number(this.btnCancel.width) + 6);

        		this.formInit();
        	} else {
        		this.dsSearch.clearData();
        		this.dsSearch.addRow();
        		this.dsSearch.setColumn(0, "bbsId", params.bbsId);
        		this.fnSearch();
        	}
        }
         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.formInit = function()
        {
        	this.dsList.setColumn(0, 'bbsTypeCd', '01');
        	this.dsList.setColumn(0, 'useYn', 'Y');
        	this.dsList.setColumn(0, 'taskTpcd', 'MRV');
        	this.dsList.setColumn(0, 'attchPssblFileMgntdVal', '10000');
        	this.setBbsTypcdChange('01');
        }

        this.saveValidate = function() {

        	var bbsTypeCd = this.dsList.getColumn(0, 'bbsTypeCd');
        	if (this.gfnIsNull(bbsTypeCd)) {
        		this.gfnAlert("게시판 유형을 선택해주세요.");
        		return false;
        	}

        	let bbsNm = this.dsList.getColumn(0, 'bbsNm');
        	if (this.gfnIsNull(bbsNm)) {
        		this.gfnAlert("게시판명을 입력해주세요.");
        		return false;
        	}

        	var bbsIntrdCn = this.dsList.getColumn(0, 'bbsIntrdCn');
        	if (this.gfnIsNull(bbsIntrdCn)) {
        		this.gfnAlert("게시판 설명을 입력해주세요.");
        		return false;
        	}

        	var useYn = this.dsList.getColumn(0, 'useYn');
        	if (this.gfnIsNull(useYn)) {
        		this.gfnAlert("사용여부를 입력해주세요.");
        		return false;
        	}

        	var useYn = this.dsList.getColumn(0, 'useYn');
        	if (this.gfnIsNull(useYn)) {
        		this.gfnAlert("사용여부를 입력해주세요.");
        		return false;
        	}


        	var ansUseYn = this.dsList.getColumn(0, 'ansUseYn');
        	if (this.gfnIsNull(ansUseYn)) {
        		this.gfnAlert("답글여부를 입력해주세요.");
        		return false;
        	}

        	var secrtSntnSkillUseYn = this.dsList.getColumn(0, 'secrtSntnSkillUseYn');
        	if (this.gfnIsNull(secrtSntnSkillUseYn)) {
        		this.gfnAlert("비밀글여부를 입력해주세요.");
        		return false;
        	}



        	// 첨부파일 사용여부
        	var atchFileUseYn = this.dsList.getColumn(0, 'atchFileUseYn');
        	if (this.gfnIsNull(atchFileUseYn)) {
        		this.gfnAlert("첨부파일사용여부를 입력해주세요.");
        		return false;
        	}

        	var atchPsbltyFileNo = this.dsList.getColumn(0, 'atchPsbltyFileNo');
        	if (this.gfnIsNull(atchPsbltyFileNo)) {
        		this.gfnAlert("첨부파일 개수를 입력해주세요.");
        		return false;
        	}

        	if(!(atchPsbltyFileNo > 0 && atchPsbltyFileNo < 6)){
        		this.gfnAlert("첨부파일 개수를 1~5개로 입력해주세요.");
        		return false;
        	}

        	var atchPsbltyFileSz = this.dsList.getColumn(0, 'atchPsbltyFileSz');
        	if (this.gfnIsNull(atchPsbltyFileSz)) {
        		this.gfnAlert("첨부파일 가능 크기를 입력해주세요.");
        		return false;
        	}

        	return true;
        }

        this.setBbsTypcdChange = function(arg)
        {

        	if (arg == '01') // 첨부파일
        	{
        		// 답글 ansrTchncUsgYn
        		this.dsList.setColumn(0, 'ansrTchncUsgYn', 'N');
        		this.divContents.form.ansrTchncUsgYn.set_enable(false);

        		// 비밀글 secrtSntnTchncUsgYn
        		this.dsList.setColumn(0, 'secrtSntnTchncUsgYn', 'N');
        		this.divContents.form.secrtSntnTchncUsgYn.set_enable(false);

        		// 공지게시글 bbrssNticEstbsCnt
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'bbrssNticEstbsCnt')))
        		{
        			this.dsList.setColumn(0, 'bbrssNticEstbsCnt', 1);
        		}
        		this.divContents.form.bbrssNticEstbsCnt.set_enable(true);

        		// 첨부파일 attchFilePssblYn
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'attchFilePssblYn')))
        		{
        			this.dsList.setColumn(0, 'attchFilePssblYn', 'Y');
        		}
        		this.divContents.form.attchFilePssblYn.set_enable(true);

        		// 첨부파일 수 attchPssblFileNo
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'attchPssblFileNo')))
        		{
        			this.dsList.setColumn(0, 'attchPssblFileNo', 1);
        		}
        		this.divContents.form.attchPssblFileNo.set_enable(true);

        		// 새글 표시기간 nwSntnIndcnDcnt
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'nwSntnIndcnDcnt')))
        		{
        			this.dsList.setColumn(0, 'nwSntnIndcnDcnt', 1);
        		}
        		this.divContents.form.nwSntnIndcnDcnt.set_enable(true);

        		// 이전글 다음글 bfrSntnNextSntnUseYn
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'bfrSntnNextSntnUseYn')))
        		{
        			this.dsList.setColumn(0, 'bfrSntnNextSntnUseYn', 'Y');
        		}
        		this.divContents.form.bfrSntnNextSntnUseYn.set_enable(true);

        	}
        	else if (arg == '02')	// 펼침
        	{
        		// 답글 ansrTchncUsgYn
        		this.dsList.setColumn(0, 'ansrTchncUsgYn', 'N');
        		this.divContents.form.ansrTchncUsgYn.set_enable(false);

        		// 비밀글 secrtSntnTchncUsgYn
        		this.dsList.setColumn(0, 'secrtSntnTchncUsgYn', 'N');
        		this.divContents.form.secrtSntnTchncUsgYn.set_enable(false);

        		// 공지게시글 bbrssNticEstbsCnt
        		this.dsList.setColumn(0, 'bbrssNticEstbsCnt', 0);
        		this.divContents.form.bbrssNticEstbsCnt.set_enable(false);

        		// 첨부파일 attchFilePssblYn
        		this.dsList.setColumn(0, 'attchFilePssblYn', 'N');
        		this.divContents.form.attchFilePssblYn.set_enable(false);

        		// 첨부파일 수 attchPssblFileNo
        		this.dsList.setColumn(0, 'attchPssblFileNo', 1);
        		this.divContents.form.attchPssblFileNo.set_enable(false);

        		// 새글 표시기간 nwSntnIndcnDcnt
        		this.dsList.setColumn(0, 'nwSntnIndcnDcnt', 1);
        		this.divContents.form.nwSntnIndcnDcnt.set_enable(false);

        		// 이전글 다음글 bfrSntnNextSntnUseYn
        		this.dsList.setColumn(0, 'bfrSntnNextSntnUseYn', 'N');
        		this.divContents.form.bfrSntnNextSntnUseYn.set_enable(false);

        	}
        	else if (arg == '03') // 답변
        	{
        		// 답글 ansrTchncUsgYn
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'ansrTchncUsgYn')))
        		{
        			this.dsList.setColumn(0, 'ansrTchncUsgYn', 'Y');
        		}
        		this.divContents.form.ansrTchncUsgYn.set_enable(true);

        		// 비밀글 secrtSntnTchncUsgYn
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'secrtSntnTchncUsgYn')))
        		{
        			this.dsList.setColumn(0, 'secrtSntnTchncUsgYn', 'Y');
        		}
        		this.divContents.form.secrtSntnTchncUsgYn.set_enable(true);

        		// 공지게시글 bbrssNticEstbsCnt
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'bbrssNticEstbsCnt')))
        		{
        			this.dsList.setColumn(0, 'bbrssNticEstbsCnt', 1);
        		}
        		this.divContents.form.bbrssNticEstbsCnt.set_enable(true);

        		// 첨부파일 attchFilePssblYn
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'attchFilePssblYn')))
        		{
        			this.dsList.setColumn(0, 'attchFilePssblYn', 'Y');
        		}
        		this.divContents.form.attchFilePssblYn.set_enable(true);

        		// 첨부파일 수 attchPssblFileNo
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'attchPssblFileNo')))
        		{
        			this.dsList.setColumn(0, 'attchPssblFileNo', 1);
        		}
        		this.divContents.form.attchPssblFileNo.set_enable(true);

        		// 새글 표시기간 nwSntnIndcnDcnt
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'nwSntnIndcnDcnt')))
        		{
        			this.dsList.setColumn(0, 'nwSntnIndcnDcnt', 1);
        		}
        		this.divContents.form.nwSntnIndcnDcnt.set_enable(true);

        		// 이전글 다음글 bfrSntnNextSntnUseYn
        		if (this.gfnIsNull(this.dsList.getColumn(0, 'bfrSntnNextSntnUseYn')))
        		{
        			this.dsList.setColumn(0, 'bfrSntnNextSntnUseYn', 'Y');
        		}
        		this.divContents.form.bfrSntnNextSntnUseYn.set_enable(true);

        	}

        }

        this.ClosePage = function()
        {
        		this.close(true);
        }
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	this.saveValidate()

        	if(this.saveValidate() == true ){
        		var sMsgId = "confirm.save";                         		//메세지ID
        		var arrArg = "";                                                //메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;                                            //메세지팝업ID[생략가능]    *해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";                             //메세지콜백[생략가능]         * confirm성 메시지를 사용 시 반드시 필요

        		// 변경된 내역을 저장 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback, ["예", "아니오"], [true, false]);
        	}else{
        		return
        	};


        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.ClosePage();
        };

        this.btnDel_onclick = function(obj,e)
        {

        	if (Number(this.dsList.getColumn(0, 'ntartTotCnt')) > 0)
        	{
        		this.gfnAlert("게시물이 존재하는 게시판은 \n 삭제할 수 없습니다.");
        		return;
        	}

        //	this.gfnAlert(this, "C", "확인하세요");
        	var sMsgId = "confirm.before.delete";                       		//메세지ID
        	var arrArg = "";                                                //메세지취환될값 배열[생략가능]
        	var sPopId = sMsgId;                                            //메세지팝업ID[생략가능]    *해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";                             //메세지콜백[생략가능]         * confirm성 메시지를 사용 시 반드시 필요

        	// 선택된 자료를 삭제하시겠습니까?
        	this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        };
        this.divContents_bbrssTpeCd_canitemchange = function(obj,e)
        {
        	this.setBbsTypcdChange(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divContents.form.newSntnIndctDcnt.addEventHandler("onchanged",this.divContents_newSntnIndctDcnt_onchanged,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("bbsMngReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
