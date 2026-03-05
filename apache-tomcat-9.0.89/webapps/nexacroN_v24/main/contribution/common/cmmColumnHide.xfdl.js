(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmColumnHide");
            this.set_titletext("그리드 컬럼숨김");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,415);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"columnText\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"columnIndex\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/><Column id=\"orgSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","25","20",null,null,"25","52",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsColumn");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"225\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"컬럼선택\" expandchar=\"popup.columnselect\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:columnText\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOrg","710","18","339","344",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","295","373","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","355","373","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,415,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmColumnHide.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	samplePost.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/22
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/22			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvTargetGrid; 	  //대상그리드 OBJECT

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//초기값 설정
        	this.fvTargetGrid = this.getOwnerFrame().pvGrid;

        	// Grid 현재 포맷 기억
        	if (this.gfnIsNull(this.fvTargetGrid.orgformat)) {
        		this.fvTargetGrid.orgformat = this.fvTargetGrid.getCurFormatString();
        	}

        	// 비교대상 원래 Grid 설정
        	this.fnSetOrgGrd();

        	// 현재 Grid cell 추출
        	this.fnGetHeadText();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 비교대상 원래 Grid 설정
        */
        this.fnSetOrgGrd = function()
        {
        	this.grdOrg.set_enableredraw(false);
        	this.grdOrg.set_formats(this.fvTargetGrid.orgformat);
        	this.grdOrg.set_enableredraw(true);
        };

        /**
         * @description 그리드의 헤드정보를 받아와 데이타셋 구성
        */
        this.fnGetHeadText = function ()
        {
        	var objGrid = this.fvTargetGrid;

        	var nColCnt = objGrid.getFormatColCount();
        	var nHead   = objGrid.getCellCount("head");

        	this.grdList.set_enableredraw(false);
        	this.dsColumn.set_enableevent(false);

        	for (var i=0; i<nColCnt; i++)
        	{
        		var columnText = "";
        		var nchk = 1;
        		for (var j=nHead-1; j>0; j--)
        		{
        			var nCol  = objGrid.getCellProperty("head", j, "col");
        			var nRow  = objGrid.getCellProperty("head", j, "row");
        			var sText = objGrid.getCellProperty("head", j, "text");

        			if (nCol == i)
        			{
        				if (nRow == 0 && this.gfnIsNull(sText) == false)
        				{
        					columnText = sText;
        				} else
        				{
        					columnText = this.fnGetFullColumnText(objGrid, nCol, nRow);
        				}
        				break;
        			}
        		}

        		if (this.gfnIsNull(columnText))
        		{
        			columnText = this.fnGetFullColumnText(objGrid, i, 0);
        		}

        		// column size가 0일때 체크해제
        		if (objGrid.getRealColSize(i) == 0)
        		{
        			nchk = 0;
        		} else
        		{
        			nchk = 1;
        		}

        		// 동적으로 추가한 check, 상태, 순번은 제외
        		if (columnText == "순번" || columnText == "상태") continue;
        		if (columnText == "0" && objGrid.getCellProperty("Body", i, "text") == "bind:chk") continue;

        		var nRow = this.dsColumn.addRow();
        		this.dsColumn.setColumn(nRow, "columnIndex", i);
        		this.dsColumn.setColumn(nRow, "columnText",  columnText);
        		this.dsColumn.setColumn(nRow, "chk",  		 nchk);
        	}

        	this.dsColumn.set_enableevent(true);
        	this.grdList.set_enableredraw(true);
        };

        /**
         * @description 그리드의 해당 칼럼의 상단부터의 전체 텍스트를 가져온다
        */
        this.fnGetFullColumnText = function(obj, nNowCol, nNowRow)
        {
        	var sRtn = "";

        	var arrText = [];
        	for (var i=nNowRow; i>=0; i--)
        	{
        		var sText = this.gfnReplaceAll(this.fnGetColumnText(obj, nNowCol, i),"\n", "");
        		if (arrText[arrText.length-1] != sText && this.gfnIsNull(sText) == false)
        		{
        			arrText.push(sText);
        		}
        	}
        	// 역순으로 등록한 배열 수정 후 text 추출
        	arrText.reverse();
        	sRtn = arrText.join(" > ");

        	return sRtn;
        };

        /**
         * @description 그리드의 해당 칼럼의 cell 텍스트를 가져온다
        */
        this.fnGetColumnText = function (obj, nNowCol, nNowRow)
        {
        	var sRtn = "";

        	var nCellCnt  = obj.getCellCount("head");
        	for (var i=nCellCnt-1; i>=0; i--)
        	{
        		var nCol  = obj.getCellProperty("head", i, "col");
        		var nRow  = obj.getCellProperty("head", i, "row");
        		var sText = obj.getCellProperty("head", i, "text");

        		if (nNowCol >= nCol && nNowRow >= nRow)
        		{
        			sRtn = obj.getCellProperty("head", i, "text");
        			break;
        		}
        	}

        	return sRtn;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소
         */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        /**
         * @description 적용
         */
        this.btnOk_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsColumn) == false) this.close();

        	this.fvTargetGrid.set_enableredraw(false);

        	var nRowCnt = this.dsColumn.getRowCount();

        	var nSize;
        	var nChk;
        	var nColIdx;

        	for (var i=0; i<nRowCnt; i++)
        	{
        		nColIdx = nexacro.toNumber(this.dsColumn.getColumn(i, "columnIndex"));
        		nChk   = this.dsColumn.getColumn(i, "chk");
        		if (nChk == 1)
        		{
        			nSize = this.grdOrg.getFormatColSize(nColIdx);
        		} else
        		{
        			nSize = 0;
        		}
        		this.fvTargetGrid.setFormatColProperty(nColIdx, "size", nSize );
        	}

        	this.fvTargetGrid.set_enableredraw(true);
        	this.gfnClosePopup();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsColumn.addEventHandler("oncolumnchanged",this.dsFilter_oncolumnchanged,this);
        };
        this.loadIncludeScript("cmmColumnHide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
