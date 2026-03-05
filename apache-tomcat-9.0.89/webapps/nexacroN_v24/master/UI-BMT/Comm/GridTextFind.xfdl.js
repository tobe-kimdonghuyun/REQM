(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_initvalueid("iv_FormPop");
            this.set_name("GridTextFind");
            this.set_titletext("데이터찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Column", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "index","type" : "STRING","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"},{"id" : "displaytype","type" : "STRING","size" : "256"},{"id" : "edittype","type" : "STRING","size" : "256"},{"id" : "body","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Direction", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "prev","data" : "이전"},{"code" : "next","data" : "다음"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Position", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "current","data" : "현재위치"},{"code" : "first","data" : "처음부터"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Condition", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "equal","data" : "일치"},{"code" : "inclusion","data" : "포함"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Find","118","266","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("찾기");
            obj.getSetter("uWord").set("popup.find");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close","203","266","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_popBtn01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","5","5",null,"252","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_label03");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","5","5","110","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("대상칼럼");
            obj.set_cssclass("sta_WF_label02");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_Column","119","10","271","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_Column");
            obj.set_codecolumn("index");
            obj.set_datacolumn("name");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","5","48","110","44",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("찾을 문자열");
            obj.set_cssclass("sta_WF_label02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FindText","119","51","271","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","5","91","110","44",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("찾을 방향");
            obj.set_cssclass("sta_WF_label02");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_direction","125","95","160","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_Direction");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("다음");
            obj.set_value("next");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","5","134","110","80",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("찾을 위치");
            obj.set_cssclass("sta_WF_label02");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_position","125","139","160","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_Position");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("처음부터");
            obj.set_value("first");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","5","213","110","44",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("찾을 조건");
            obj.set_cssclass("sta_WF_label02");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_condition","125","174","160","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_Condition");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_value("equal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_Upper","125","217","160","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("대/소문자구분");
            obj.getSetter("uWord").set("popup.casesensitive");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,316,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GridTextFind.xfdl", function() {
        this.fv_PrgmId = "";
        this.fv_TargetGrid = "";
        this.fv_TargetDs = "";
        this.fv_CellIdx = "";
        this.fv_RowIdx = "";
        this.fv_SelectType = "";

        /************************************************************************
         * 화면 onload 이벤트
         ************************************************************************/
        this.GridTextFind_onload = function(obj,e)
        {
        	this.fv_TargetGrid = this.getOwnerFrame().grid;
        	this.fv_TargetDs = this.fv_TargetGrid.getBindDataset();
        	this.fv_CellIdx = this.getOwnerFrame().cellIndex;
        	this.fv_RowIdx = this.getOwnerFrame().rowIndex;
        	this.fv_SelectType = this.getOwnerFrame().selectType;
        	this.fv_TargetGrid.set_selecttype("cell"); // cell 단위로 데이터를 찾아야하므로

        	this.fn_setInit();
        };

        /************************************************************************
         * 화면 초기설정
         ************************************************************************/
        this.fn_setInit = function ()
        {
        	this.ds_Column.clearData();

        	// 바디의 수만큼 디스플레이정보, 콤보정보 설정
            for (var i=0; i<this.fv_TargetGrid.getCellCount("body"); i++)
        	{
        		if ( this.fv_TargetGrid.getCellProperty("body", i, "displaytype") != "image" )
        		{
        			var sText = this.fv_TargetGrid.getCellProperty("body", i, "text");
        			var sBind = "";
        			if (!this.gfn_isNull(sText))
        			{
        				sBind = sText.substr(0, 5);
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.ds_Column.addRow();

        				this.ds_Column.setColumn(nrow, "body", this.fv_TargetGrid.getCellProperty("body", i, "text"));
        				this.ds_Column.setColumn(nrow, "displaytype", this.fv_TargetGrid.getCellProperty("body", i, "displaytype"));
        				this.ds_Column.setColumn(nrow, "edittype", this.fv_TargetGrid.getCellProperty("body", i, "edittype"));
        				this.ds_Column.setColumn(nrow, "index", i);
        				this.ds_Column.setColumn(nrow, "name", this.fv_TargetGrid.getCellProperty("head", i, "text"));
        			}
                }
            }

        	// 현재 선택된 셀을 선택하도록
        	// 현재 선택된 셀이 검색/바꾸기에 해당되지 않을 경우 INDEX=0으로 세팅
        	var nRow = this.ds_Column.findRow("index", this.fv_CellIdx);
        	if ( nRow > -1 )
        	{
        		this.cbo_Column.set_value(this.ds_Column.getColumn(nRow,"index"));
        	}
        	else
        	{
        		this.cbo_Column.set_index(0);
        	}

        	this.fv_CellIdx = this.cbo_Column.value;
        }

        /************************************************************************
         * 찾기 버튼 onclick 이벤트
         ************************************************************************/
        this.btn_Find_onclick = function(obj,e)
        {
        	var findText = this.edt_FindText.value;
        	var option = {
        		'direction': this.rdo_direction.value,
        		'position': this.rdo_position.value,
        		'scope': 'col',
        		'condition': this.rdo_condition.value,
        		'strict': this.chk_Upper.value,
        		'cell': this.cbo_Column.value,
        	};
        	if (this.gfn_isNull(findText)) return;

        	var findRowCell = this.fn_FindGridText(findText, option);
        	var findRow = findRowCell[0];
        	var findCell = findRowCell[1];

        	if ( findRow > -1 && findCell > -1 )
        	{
        		this.fv_TargetDs.set_rowposition(findRow);
        		this.fv_TargetGrid.setCellPos(findCell);
        	}
        	else
        	{
        		alert("데이터가 존재하지 않습니다.");
        	}
        };


        /************************************************************************
         * 그리드에서 찾은 text 의 cell 정보 return
         ************************************************************************/
        this.fn_FindGridText = function (findText, option)
        {
        	this.fv_TargetGrid.lastFindText = findText;
        	this.fv_TargetGrid.lastFindOption = option;

        	// 찾을 옵션
        	var direction = option.direction; // 방향
        	var position = option.position; // 위치
        	var scope = option.scope; // col
        	var condition = option.condition; // 일치,포함
        	var strict = option.strict; // 대문자여부

        	var dataset = this.fv_TargetDs;
        	this.fv_TargetGrid.lastFindCell = this.gfn_isNull(this.fv_TargetGrid.lastFindCell)?this.fv_TargetGrid.currentcell:this.fv_TargetGrid.lastFindCell;
        	this.fv_TargetGrid.lastFindRow = this.gfn_isNull(this.fv_TargetGrid.lastFindRow)?0:this.fv_TargetGrid.lastFindRow;

        	var startCell = ( position == "current" ? this.fv_TargetGrid.currentcell : this.fv_TargetGrid.lastFindCell );
        	var startRow = ( position == "current" ? this.fv_TargetGrid.currentrow : this.fv_TargetGrid.lastFindRow );

        	// 바꾸기에서 호출시 (option.cell 은 바꾸기에서만 지정)
        	if ( scope == "col" && !this.gfn_isNull(option.cell) )
        	{
        		startCell = option.cell;
        	}

        	var findRow = findCell = -1;
        	var rowCnt = dataset.rowcount;
        	var bodyCellCnt = this.fv_TargetGrid.getCellCount("body");

        	// 대소문자 구분
        	if ( !strict )
        	{
        		findText = findText.toUpperCase();
        	}

        	if ( direction == "prev" )
        	{
        		startRow -= 1;
        		if ( startRow < 0 )
        		{
        			startRow = rowCnt-1;
        		}
        	}
        	else
        	{
        		startRow += 1;
        		if ( startRow >= rowCnt )
        		{
        			startRow = 0;
        		}
        	}

        	var loopCnt = rowCnt;
        	while ( loopCnt > 0 )
        	{
        		var cellText = this.fv_TargetGrid.getCellText(startRow, startCell);

        		// 대소문자 구분
        		if (!strict)
        		{
        			cellText = cellText.toUpperCase();
        		}

        		// 일치/포함
        		if ( condition == "equal" )
        		{
        			if ( findText == cellText )
        			{
        				findRow = startRow;
        				findCell = startCell;
        				break;
        			}
        		}
        		else
        		{
        			if ( cellText.indexOf(findText) > -1 )
        			{
        				findRow = startRow;
        				findCell = startCell;
        				break;
        			}
        		}

        		// 방향 (이전, 다음)
        		if ( direction == "prev" )
        		{
        			startRow -= 1;
        			if ( startRow < 0 )
        			{
        				startRow = rowCnt-1;
        			}
        		}
        		else
        		{
        			startRow += 1;
        			if ( startRow > (rowCnt-1) )
        			{
        				startRow = 0;
        			}
        		}

        		loopCnt--;
        	}
        	// 마지막 찾은 위치 지정
        	// 팝업에서 찾을 방향을 "처음부터" 로 변경 시 초기화
        	if ( findRow > -1 && findCell > -1 )
        	{
        		this.fv_TargetGrid.lastFindRow = findRow;
        		this.fv_TargetGrid.lastFindCell = findCell;
        	}

         	return [findRow, findCell];
        };

        /************************************************************************
         * 화면 onclose 이벤트
         ************************************************************************/
        this.fn_Close = function ()
        {
        	this.fv_TargetGrid.set_selecttype(this.fv_SelectType); // selecttype을 cell -> 기존타입으로 변경
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridTextFind_onload,this);
            this.addEventHandler("onclose",this.fn_Close,this);
            this.btn_Find.addEventHandler("onclick",this.btn_Find_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.fn_Close,this);
        };
        this.loadIncludeScript("GridTextFind.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
