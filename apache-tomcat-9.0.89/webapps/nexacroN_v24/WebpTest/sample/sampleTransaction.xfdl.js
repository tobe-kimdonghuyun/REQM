(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleTransaction");
            this.set_titletext("트랜잭션 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"srchCond1\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DESCRIPTION\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DEPARTMENT\" type=\"string\" size=\"32\"/><Column id=\"ID\" type=\"string\" size=\"32\"/><Column id=\"NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"54","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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
            obj.set_taborder("6");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"11","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Search");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchId","0","12","74","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtId","staSearchId:0","12","140","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchNm","edtId:0","12","62","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNm","staSearchNm:0","12","140","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","0","97",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("uFunction").set("sort");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"290\"/><Column size=\"217\"/><Column size=\"229\"/><Column size=\"414\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","54","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사용자 정보 조회");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtId","value","dsSearch","srchCond1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtNm","value","dsSearch","srchCond2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleTransaction.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	sampleTransaction.xfdl
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
        //추가
        this.cfnAdd = function ()
        {
        	this.dsList.addRow();

        	this.grdList.setCellPos(0);
        	this.grdList.showEditor(true);
        };

        //삭제
        this.cfnDel = function ()
        {
        	var nRow = this.dsList.rowposition;
        	if (nRow<0) return;

        	this.dsList.deleteRow(nRow);
        };

        //저장
        this.cfnSave = function ()
        {	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false)
        	{	// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        };

        //조회
        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnSearch = function ()
        {
        	var strSvcId 	= "searchSampleList";
        	var strSvcUrl 	= "samplefile/searchSampleList.xml";
        	var inData 		= "";
        	var outData 	= "dsList=outDs";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);

        };

        //저장
        this.fnSave = function ()
        {
        return;
        	var strSvcId 	= "saveSampleList";
        	var strSvcUrl 	= "saveSampleList.do";
        	var inData 		= "inDs=dsList:U";
        	var outData 	= "";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (svcId, nErrCd, sErrMsg)
        {
        	switch(svcId)
        	{
        		case "searchSampleList":
        			break;
        		case "saveSampleList":
        			this.fnSearch();
        			break;
        		default:break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	if (sMsgId == "save")
        	{
        		if (sRtn)
        		{
        			this.fnSave();
        		}
        		else
        		{
        			return;
        		}
        	}
        	else if (sMsgId == "validId")
        	{
        		this.dsList.setColumn(this.dsList.rowposition, "ID", "");
        		this.grdList.setCellPos(0);
        		this.grdList.showEditor(true);
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회버튼클릭
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        //ID중복체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if (e.columnid=="ID")
        	{
        		if (this.gfnIsNull(e.newvalue)) return;

        		var nRow = this.dsList.findRow("ID", e.newvalue);
        		if (nRow > -1)
        		{
        			this.gfnAlert("msg.exist", ["입력하신 아이디"],"validId","fnMsgCallback");
        			return;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("sampleTransaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
