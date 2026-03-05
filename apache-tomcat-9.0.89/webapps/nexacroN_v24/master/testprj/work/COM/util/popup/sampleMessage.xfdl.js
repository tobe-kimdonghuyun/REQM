(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMessage");
            this.set_titletext(" 메세지 오픈 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMsgType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">CFN</Col><Col id=\"name\">확인</Col></Row><Row><Col id=\"code\">INF</Col><Col id=\"name\">알림</Col></Row><Row><Col id=\"code\">WAN</Col><Col id=\"name\">경고</Col></Row><Row><Col id=\"code\">ERR</Col><Col id=\"name\">에러</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"KORN_MSGE\" type=\"string\" size=\"32\"/><Column id=\"ENGL_MSGE\" type=\"string\" size=\"32\"/><Column id=\"MSGE_CD\" type=\"string\" size=\"32\"/><Column id=\"MSGE_FLAG_CD\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgListGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txaGuide","0","0",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("1. 메시지 팝업을 통해 사용자에게 알림, 확인창을 호출할 수 있습니다.\n\n2. 메시지는 서비스를 통해 가져온 AppVariables의 gdsMessage에 등록된 코드만 사용가능합니다.\n\n3. 업무화면에서 메시지는 아래와 같이 기술하여야 합니다.\n// {0} 이(가) {1} 와(과) 일치하지 않습니다.\nthis.gfnAlert(\"msg.err.validator.equalto\", [\"이름\", \"홍길동\"]);\t\n\n4. 확인창에서는 버튼의 명칭과 버튼 클릭시 리턴된 값을 변경할 수 있습니다.\nthis.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback, [\"예\", \"아니오\", \"취소\"], [\"Y\", \"N\", \"C\"]);");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","txaGuide:0",null,"54","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo02_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset", obj);
            divSearch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo03_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset", obj);
            divSearch_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"11","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Search");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","0","12","102","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("메세지 타입");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMessageType","staSearchTitle00:0","12","150","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboMessageType_innerdataset = new nexacro.NormalDataset("divSearch_form_cboMessageType_innerdataset", obj);
            divSearch_form_cboMessageType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">popup</Col><Col id=\"datacolumn\">popup message</Col></Row><Row><Col id=\"codecolumn\">system</Col><Col id=\"datacolumn\">system message</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboMessageType_innerdataset);
            obj.set_text("system message");
            obj.set_value("system");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","0","divSearch:43",null,null,"20","0",null,null,"350",null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMsgList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"238\"/><Column size=\"581\"/><Column size=\"199\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"메세지아이디\"/><Cell col=\"1\" text=\"메세지 내용\"/><Cell col=\"2\" text=\"메세지타입\"/></Band><Band id=\"body\"><Cell text=\"bind:MSGE_CD\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\"/><Cell col=\"1\" text=\"bind:KORN_MSGE\"/><Cell col=\"2\" combodataset=\"dsMsgType\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:MSGE_FLAG_CD\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","divSearch:0","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메세지조회");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleMessage.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	sampleMessage.xfdl
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
        	nexacro.setEnvironmentVariable("evMessagePopup", "true");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        this.cfnRefresh = function ()
        {
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function ()
        {
        	this.dsMsgList.clear();
        	this.dsMsgList.copyData(nexacro.getApplication().gdsMessage);
        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	trace("message id : " + sMsgId + " // return value : " + sRtn);
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function ()
        {
        	this.dsMsgList.clearData();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.grdList_oncelldblclick = function(obj,e)
        {
        	var nRow = e.row;
        	var sMsgId = this.dsMsgList.getColumn(nRow,"MSGE_CD");
        	var sPopId = sMsgId;
        	var sCallback = "fnMsgCallback";
        	var arrArg = ["test1","test2","test3"];

        	var sMsgType = this.dsMsgList.getColumn(nRow, "MSGE_FLAG_CD");

        	// Confirm일 때
        	if (sMsgType == "CFN")
        	{
        		this.gfnAlert(sMsgId, arrArg, sPopId, sCallback, ["예", "아니오", "취소"], ["Y", "N", "C"]);
        	// Alert일 때
        	} else
        	{
        		this.gfnAlert(sMsgId, arrArg, sPopId, sCallback);
        	}


        };

        this.divSearch_cboMessageType_onitemchanged = function(obj,e)
        {
        	var sPopupMsgYN = "true";
        	if(e.postvalue == "system") sPopupMsgYN = "false";

        	nexacro.setEnvironmentVariable("evMessagePopup", sPopupMsgYN);
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.cboMessageType.addEventHandler("onitemchanged",this.divSearch_cboMessageType_onitemchanged,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.dsMsgList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("sampleMessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
