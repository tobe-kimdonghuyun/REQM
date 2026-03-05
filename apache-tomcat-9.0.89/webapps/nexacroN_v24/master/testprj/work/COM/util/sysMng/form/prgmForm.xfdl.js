(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prgmForm");
            this.set_titletext("Single-Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"progrmFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progrmStrePath\" type=\"STRING\" size=\"256\"/><Column id=\"progrmKoreanNm\" type=\"STRING\" size=\"256\"/><Column id=\"progrmDc\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"progrmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","10","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("프로그램 추가/상세");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00","0","53",null,null,"20","40","1030",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","75",null,null,"0","321","1030",null,null,null,this.div01_00.form);
            obj.set_taborder("2");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","75","108",null,null,"321",null,null,null,null,this.div01_00.form);
            obj.set_taborder("0");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new TextArea("txa00","112.00","80",null,null,"5","326",null,null,null,null,this.div01_00.form);
            obj.set_taborder("1");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","9",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07_01","0","42",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_01","0","42","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("5");
            obj.set_text("URL");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10_00","0","9","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("6");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00","112","14","270","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn00_02","510",null,"80","23",null,"263",null,null,null,null,this.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_visible("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","410",null,"80","23",null,"263",null,null,null,null,this.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","771","9","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("10");
            obj.set_text("타입");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","883","14","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_form_cbo00_00_00_innerdataset = new nexacro.NormalDataset("div01_00_form_cbo00_00_00_innerdataset", obj);
            div01_00_form_cbo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">nexacro</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">web</Col><Col id=\"datacolumn\">web</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_cbo00_00_00_innerdataset);
            obj.set_text("nexacro");
            obj.set_value("nexacro");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10_00_00","385","9","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("12");
            obj.set_text("한글명");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00_00","497","14","270","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("13");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00_01","112","47","912","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("14");
            obj.set_text("");
            this.div01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div01_00.form
            obj = new Layout("default","",0,0,this.div01_00.form,function(p){});
            this.div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div01_00.form.edt05_00","value","dsGet","progrmFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div01_00.form.edt05_00_00","value","dsGet","progrmKoreanNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div01_00.form.cbo00_00_00","value","dsGet","progrmStrePath");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div01_00.form.edt05_00_01","value","dsGet","url");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div01_00.form.txa00","value","dsGet","progrmDc");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prgmForm.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp01.xfdl
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
        this.objApp = nexacro.getApplication();
        this.progrmNo;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //삭제
        this.cfnClose = function ()
        {
        	trace('cfnClose');
        };
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
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

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.saveTran = function() {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/updatePrgm.do";
        	var inData      = "dsGet=dsGet:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);
        }

        this.selectTran = function() {

        	var strSvcId    = "select";
        	var strSvcUrl   = "sysMng/selectPrgm.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = this.progrmNo;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);

        }


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		console.log(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "save":
        			// 저장 되었습니다.
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, "", "", "alertCallback");
        			break;
        	}
        };

        this.alertCallback = function(sPopupId, sRtn) {
        	if(sPopupId == "save")
        	{
        		this.closeMenu();
        	}

        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.closeMenu = function() {
        	var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId.hi;
        	this.objApp.gvFrmMdi.form.fnCloseMenu(cMenuId + '01', false);
        }

        this.fnInit = function()
        {
        	this.progrmNo = this.getOwnerFrame().form.fvObjArgs;
        	if (!this.gfnIsNull(this.progrmNo))
        	{
        		this.selectTran();
        	} else {
        		this.div01_00.form.edt05_00.set_enable(true);
        	}
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btn00_02_onclick = function(obj,e)
        {
        	this.closeMenu();
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	this.saveTran();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div01_00.form.btn00_02.addEventHandler("onclick",this.btn00_02_onclick,this);
            this.div01_00.form.btn00_00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.div01_00.form.cbo00_00_00.addEventHandler("onitemchanged",this.div01_00_cbo00_00_00_onitemchanged,this);
        };
        this.loadIncludeScript("prgmForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
