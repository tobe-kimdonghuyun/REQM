(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmFindData");
            this.set_titletext("그리드 내용 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,288);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsColumnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"edittype\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divFind","25","20",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divFind.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFind.addChild(obj.name, obj);

            obj = new Static("staBg01","0","staBg00:-1",null,"34","0",null,null,null,null,null,this.divFind.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFind.addChild(obj.name, obj);

            obj = new Static("staBg02","0","staBg01:-1",null,"34","0",null,null,null,null,null,this.divFind.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFind.addChild(obj.name, obj);

            obj = new Static("staBg03","0","staBg02:-1",null,"34","0",null,null,null,null,null,this.divFind.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFind.addChild(obj.name, obj);

            obj = new Static("staBg05","0","staBg03:-1",null,null,"0","0",null,null,null,null,this.divFind.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFind.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","108","34",null,null,null,null,null,null,this.divFind.form);
            obj.set_taborder("5");
            obj.set_text("대상컬럼");
            obj.set_cssclass("sta_WF_Label");
            this.divFind.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","staTitle00:-1","108","34",null,null,null,null,null,null,this.divFind.form);
            obj.set_taborder("6");
            obj.set_text("찾을 문자열");
            obj.set_cssclass("sta_WF_Label");
            this.divFind.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","staTitle01:-1","108","34",null,null,null,null,null,null,this.divFind.form);
            obj.set_taborder("7");
            obj.set_text("찾을 방향");
            obj.set_cssclass("sta_WF_Label");
            this.divFind.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","staTitle02:-1","108","34",null,null,null,null,null,null,this.divFind.form);
            obj.set_taborder("8");
            obj.set_text("찾을 위치");
            obj.set_cssclass("sta_WF_Label");
            this.divFind.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","staTitle03:-1","108",null,null,"0",null,null,null,null,this.divFind.form);
            obj.set_taborder("9");
            obj.set_text("찾을 조건");
            obj.set_cssclass("sta_WF_Label");
            this.divFind.addChild(obj.name, obj);

            obj = new Combo("cboColumn","staTitle00:4","5",null,"24","4",null,null,null,null,null,this.divFind.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsColumnInfo");
            obj.set_codecolumn("index");
            obj.set_datacolumn("name");
            obj.set_text("cbo00");
            this.divFind.addChild(obj.name, obj);

            obj = new Edit("edtFindTxt","staTitle01:4","cboColumn:9",null,"24","4",null,null,null,null,null,this.divFind.form);
            obj.set_taborder("11");
            this.divFind.addChild(obj.name, obj);

            obj = new Radio("rdoDirection","staTitle02:4","edtFindTxt:9",null,"24","4",null,null,null,null,null,this.divFind.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divFind_form_rdoDirection_innerdataset = new nexacro.NormalDataset("divFind_form_rdoDirection_innerdataset", obj);
            divFind_form_rdoDirection_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">prev</Col><Col id=\"datacolumn\">이전</Col></Row><Row><Col id=\"codecolumn\">next</Col><Col id=\"datacolumn\">다음</Col></Row></Rows>");
            obj.set_innerdataset(divFind_form_rdoDirection_innerdataset);
            obj.set_text("다음");
            obj.set_value("next");
            obj.set_index("1");
            this.divFind.addChild(obj.name, obj);

            obj = new Radio("rdoPosition","staTitle03:4","rdoDirection:9",null,"24","4",null,null,null,null,null,this.divFind.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divFind_form_rdoPosition_innerdataset = new nexacro.NormalDataset("divFind_form_rdoPosition_innerdataset", obj);
            divFind_form_rdoPosition_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">current</Col><Col id=\"datacolumn\">현재위치</Col></Row><Row><Col id=\"codecolumn\">first</Col><Col id=\"datacolumn\">처음부터</Col></Row></Rows>");
            obj.set_innerdataset(divFind_form_rdoPosition_innerdataset);
            obj.set_text("현재위치");
            obj.set_value("current");
            obj.set_index("0");
            this.divFind.addChild(obj.name, obj);

            obj = new Radio("rdoCondition","staTitle05:4","rdoPosition:9",null,"24","4",null,null,null,null,null,this.divFind.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divFind_form_rdoCondition_innerdataset = new nexacro.NormalDataset("divFind_form_rdoCondition_innerdataset", obj);
            divFind_form_rdoCondition_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">equal</Col><Col id=\"datacolumn\">일치</Col></Row><Row><Col id=\"codecolumn\">inclusion</Col><Col id=\"datacolumn\">포함</Col></Row></Rows>");
            obj.set_innerdataset(divFind_form_rdoCondition_innerdataset);
            obj.set_text("포함");
            obj.set_value("inclusion");
            obj.set_index("1");
            this.divFind.addChild(obj.name, obj);

            obj = new CheckBox("chkGubun","staTitle05:4","rdoCondition:9","123","20",null,null,null,null,null,null,this.divFind.form);
            obj.set_taborder("15");
            obj.set_text("대/소문자 구분");
            this.divFind.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"48","28","25","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnFind",null,null,"50","28","btnCancel:3","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("찾기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFind.form
            obj = new Layout("default","",0,0,this.divFind.form,function(p){});
            this.divFind.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",370,288,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmFindData.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmFindData.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/03/17
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/03/17			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvGrid = "";
        this.fvDs = "";
        this.fvSelectRow = 0;
        this.fvCellname = "";
        this.fvCellindex = 0;
        this.fvSelectType = "cell";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvGrid 	  = this.getOwnerFrame().pvGrid;
        	this.fvDs 		  = this.fvGrid.getBindDataset();
        	this.fvSelectRow  = this.getOwnerFrame().pvStrartRow;
        	this.fvSelectType = this.getOwnerFrame().pvSelectType;
        	this.fvCellindex  = this.getOwnerFrame().pvSelectCell;

        	this.fvGrid.set_selecttype("cell");
        	this.fnGetHeadText(this.fvGrid);
        };

        //F3으로 검색
        this.form_keyup = function(obj,e)
        {
        	//F3..114
        	if(e.keycode == 114){
        		if(this.gfnIsNull(this.divFind.form.edtFindTxt.value)) return;
        		this.btnFind.click();
        	}
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
         * @description 그리드의 헤드정보를 받아와 콤보 세팅(userHeader prop 사용)
        */
        this.fnGetHeadText =  function ()
        {
        	this.dsColumnInfo.clearData();
        	// 바디의 갯수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for(var i=0; i<this.fvGrid.getCellCount("body"); i++)
            {
                if( this.fvGrid.getCellProperty("body", i, "displaytype") != "image" )
                {
        			var sText = this.fvGrid.getCellProperty("body", i, "text");
        			if( sText == "bind:gridcmmcheck") continue; //공통체크박스 제외

        			var sBind;
        			if ( !this.gfnIsNull(sText)){
        				sBind = sText.substr(0, 5);
        			}else {
        				sBind = "";
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.dsColumnInfo.addRow();

        				this.dsColumnInfo.setColumn(nrow, "body"		, this.fvGrid.getCellProperty("body", i, "text"));
        				this.dsColumnInfo.setColumn(nrow, "displaytype" , this.fvGrid.getCellProperty("body", i, "displaytype"));
        				this.dsColumnInfo.setColumn(nrow, "edittype"	, this.fvGrid.getCellProperty("body", i, "edittype"));
        				this.dsColumnInfo.setColumn(nrow, "index"		, i);
        			}
                }
            }
        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
            for(var n=0; n<this.fvGrid.getCellCount("Head"); n++)
            {
                var title  = this.fvGrid.getCellProperty("Head", n, "text");
                var col    = this.fvGrid.getCellProperty("Head", n, "col");
                var body   = this.fvGrid.getCellProperty("body", n, "text");


                var nrow = this.dsColumnInfo.findRow("body", body);
                if( nrow != -1 )
                {
                    //this.ds00.setColumn(nrow, "index",   col);
                    this.dsColumnInfo.setColumn(nrow, "name" , title);
                }
            }

        	// 현재 선택된 셀을 선택하도록
        	// 현재 선택된 셀이 검색/바꾸기에 해당되지 않을 경우 INDEX=0으로 세팅
        	var nRow = this.dsColumnInfo.findRow("index", this.fvCellindex);
        	if( nRow > -1 ){
        		this.divFind.form.cboColumn.set_value(this.dsColumnInfo.getColumn(nRow,"index"));
        	}else{
        		this.divFind.form.cboColumn.set_index(0);
        	}
        	this.fvCellindex = this.divFind.form.cboColumn.value;
        };

        //선택한 옵션값을 리턴
        this.fnGetFindOption = function()
        {
        	var option = {
        		'direction'	: this.divFind.form.rdoDirection.value,
        		'position'	: this.divFind.form.rdoPosition.value,
        		'scope'		: 'col',
        		'condition' : this.divFind.form.rdoCondition.value,
        		'strict'	: this.divFind.form.chkGubun.value,
        		'cell'		: this.divFind.form.cboColumn.value,
        	};

        	return option;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //취소버튼클릭
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fvGrid.set_selecttype(this.fvSelectType);
        	this.close();
        };
        //찾기버튼클릭
        this.btnFind_onclick = function(obj,e)
        {
        	var txt 		= this.divFind.form.edtFindTxt.value;
        	if( this.gfnIsNull(txt)) return;

        	var option 		= this.fnGetFindOption();
        	var findRowCell = this.gfnFindGridText(this.fvGrid, txt, option);

        	var findRow  = findRowCell[0];
        	var findCell = findRowCell[1];

        	if ( findRow > -1 && findCell > -1 ){
        		this.fvDs.set_rowposition(findRow);
        		this.fvGrid.setCellPos(findCell);
        	}else{
        		this.gfnAlert("msg.search.nodata", "", "nodata");
        	}
        };


        this.divFind_rdoPosition_onitemchanged = function(obj,e)
        {
        	this.fvGrid.lastFindRow = null;
        	this.fvGrid.lastFindCell = null;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_keyup,this);
            this.divFind.form.rdoPosition.addEventHandler("onitemchanged",this.divFind_rdoPosition_onitemchanged,this);
            this.btnCancel.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnFind.addEventHandler("onclick",this.btnFind_onclick,this);
        };
        this.loadIncludeScript("cmmFindData.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
