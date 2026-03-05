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
                this._setFormPosition(480,1150);
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
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CD\" type=\"string\" size=\"32\"/><Column id=\"MSGE_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"KORN_MSGE\" type=\"string\" size=\"32\"/><Column id=\"ENGL_MSGE\" type=\"string\" size=\"32\"/><Column id=\"USED_YN\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","30","470",null,"170","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","0","0","160","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("메세지 타입");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMessageType","0","40",null,"50","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboMessageType_innerdataset = new nexacro.NormalDataset("divSearch_form_cboMessageType_innerdataset", obj);
            divSearch_form_cboMessageType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">popup</Col><Col id=\"datacolumn\">popup message</Col></Row><Row><Col id=\"codecolumn\">system</Col><Col id=\"datacolumn\">system message</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboMessageType_innerdataset);
            obj.set_text("system message");
            obj.set_value("system");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","0","cboMessageType:20",null,"60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Full");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","0","divSearch:30",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Boundary");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","30","Static03:30",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메세지조회");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","30","staTitle:0",null,null,"30","50",null,null,"170",null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMsgList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"303\"/><Column size=\"68\"/></Columns><Rows><Row size=\"54\"/><Row size=\"54\"/><Row size=\"54\"/></Rows><Band id=\"body\"><Cell text=\"ID\"/><Cell col=\"1\" colspan=\"2\" text=\"bind:MSGE_CD\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\"/><Cell row=\"1\" text=\"내용\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"bind:KORN_MSGE\" displaytype=\"editcontrol\"/><Cell row=\"2\" text=\"TYPE\"/><Cell row=\"2\" col=\"1\" displaytype=\"combocontrol\" text=\"bind:MSGE_FLAG_CD\" combodataset=\"dsMsgType\" combocodecol=\"code\" combodatacol=\"name\"/><Cell row=\"2\" col=\"2\" displaytype=\"buttoncontrol\" text=\"확인\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","30",null,"420","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1. 메시지 팝업을 통해 사용자에게 알림, 확인창을 호출할 수 있습니다.\n\n2. 메시지는 서비스를 통해 가져온 AppVariables의 gdsMessage에 등록된 코드만 사용가능합니다.\n\n3. 업무화면에서 메시지는 아래와 같이 기술하여야 합니다.\n// {0} 이(가) {1} 와(과) 일치하지 않습니다.\nthis.gfnAlert(\"msg.err.validator.equalto\", [\"이름\", \"홍길동\"]);\t\n\n4. 확인창에서는 버튼의 명칭과 버튼 클릭시 리턴된 값을 변경할 수 있습니다.\nthis.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback, [\"예\", \"아니오\", \"취소\"], [\"Y\", \"N\", \"C\"]);");
            obj.set_cssclass("sta_WF_GB");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,1150,this,function(p){});
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
        *  Mobile 프로젝트
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
        	this.gfnFormOnLoadM(obj); //필수함수
        	nexacro.setEnvironmentVariable("evMessagePopup", "true");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnSearch = function ()
        {
        	this.fnSearch();
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
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

        this.grdList_oncellclick = function(obj,e)
        {
        	if (e.cell == "6")
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
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboMessageType.addEventHandler("onitemchanged",this.divSearch_cboMessageType_onitemchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.dsMsgList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("sampleMessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
