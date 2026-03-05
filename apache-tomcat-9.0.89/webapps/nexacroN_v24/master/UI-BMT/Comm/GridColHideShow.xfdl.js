(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridColHideShow");
            this.set_titletext("컬럼 숨기기/보이기");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Filter", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "columnText","type" : "STRING","size" : "256"},{"id" : "chk","type" : "STRING","size" : "256"},{"id" : "columnIndex","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_List","5","5",null,null,"5","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Filter");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"400\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"컬럼명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:columnText\" font=\"normal 14px/normal &quot;Malgun Gothic&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm","110",null,"80","30",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","330","74","243","116",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,420,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GridColHideShow.xfdl", function() {
        this.fv_TargetGrid = ""; // 그리드
        this.fv_TargetDs = ""; // 데이터셋
        this.isCheckAll = 0; // 그리드 전체 체크 여부

        /************************************************************************
         * 화면 onload 이벤트
         ************************************************************************/
        this.GridFilter_onload = function(obj,e)
        {
        	this.fv_TargetGrid = this.getOwnerFrame().grid;
        	this.fv_TargetDs = this.fv_TargetGrid.getBindDataset();

        	this.Grid00.set_enableredraw(false);
        	this.Grid00.set_formats(this.fv_TargetGrid.orgFormat);
        	this.Grid00.set_enableredraw(true);

        	this.fn_setInit(this.fv_TargetGrid);
        };

        /************************************************************************
         * 화면 초기설정
         ************************************************************************/
        this.fn_setInit = function (objGrid)
        {
        	objGrid.set_enableredraw(false);
        	for( var i=0; i<objGrid.getFormatColCount(); i++) // Grid 에 표시되고 있는 포맷에 정의된 Column 의 갯수를 반환하는 메소드
        	{
        		var columnText = "";//i + "번째 컬럼 ";

        		for (var j=0; j<objGrid.getCellCount("head"); j++)
        		{
        			var maxHeadRow = objGrid.getCellProperty("head", j, "row");
        			var nRow = parseInt(objGrid.getCellProperty("head", j, "row"));
        			var nCol = parseInt(objGrid.getCellProperty("head", j, "col"));
        			var headText = objGrid.getCellProperty("head", j, "text");
        			if( nRow == maxHeadRow && nCol == i ) columnText += "[" + headText + "]";
        		}

        		var nchk = 1;
        		var columnIndex = i;
        		if (objGrid.getRealColSize(columnIndex) == 0 ) nchk = 0;

        		var nRow = this.ds_Filter.addRow();
        		this.ds_Filter.setColumn(nRow, "columnText", columnText);
        		this.ds_Filter.setColumn(nRow, "chk", nchk);
        		this.ds_Filter.setColumn(nRow, "columnIndex", columnIndex);
        	}

        	this.grd_List.setCellProperty("head", 0, "text", 1);
        	objGrid.set_enableredraw(true);
        };


        /************************************************************************
         * 적용 버튼 onclick 이벤트
         ************************************************************************/
        this.btn_Confirm_onclick = function(obj,e)
        {
        	this.fv_TargetGrid.set_enableredraw(false);

        	for (var i=0;i<this.ds_Filter.rowcount;i++)
        	{
        		var nChk = this.ds_Filter.getColumn(i, "chk");
        		var colidx  = nexacro.toNumber(this.ds_Filter.getColumn(i, "columnIndex"));
        		var nSize = 0;
        		if (nChk == 1)
        		{
        			nSize = this.Grid00.getFormatColSize(i);
        		}

        		this.fv_TargetGrid.setFormatColProperty(colidx, "size", nSize);
        	}


        	var nFindRow = this.ds_Filter.findRow("chk", 0);
        	// 숨기는 컬럼이 하나라도 있으면
        	if (nFindRow > -1)
        	{
        		this.fv_TargetGrid.set_autofittype("none");// 기존 autofittype 설정 해제
        	}
        	else
        	{
        		this.fv_TargetGrid.set_autofittype(this.fv_TargetGrid.orgAutoFitType);
        	}

        	this.fv_TargetGrid.set_enableredraw(true);
        	this.fn_Close();
        };

        this.grd_List_onheadclick = function(obj,e)
        {
            if (e.col == 0)
            {
        		var colID = obj.getCellProperty("body", e.cell, "text").replace(/bind:/i,"");

        		this.isCheckAll = (this.isCheckAll ? 0 : 1);

        		var i;
        		for(i = 0; i < obj.getBindDataset().getRowCount(); ++i){
        			obj.getBindDataset().setColumn(i, colID, this.isCheckAll);
        		}

        		obj.setCellProperty("head", 0, "text", this.isCheckAll);
            }
        };

        this.grd_List_oncellclick = function(obj,e)
        {
        	if(e.cell == 0){
        		var colID = obj.getCellProperty("body", e.cell, "text").replace(/bind:/i, "");

        		var allchk = this.fnIsAllChk(colID, obj.getBindDataset());

        		if(allchk){
        			this.isCheckAll = 1;
        		} else {
        			this.isCheckAll = 0;
        		}

        		obj.setCellProperty("head", 0, "text", this.isCheckAll);
        	}
        };

        /************************************************************************
         * 화면 onclose 이벤트
         ************************************************************************/
        this.fn_Close = function ()
        {
        	this.close();
        };

        this.fnIsAllChk = function (colID, ds)
        {
        	var allRow = ds.getRowCount();
        	var i, chk;

        	for (i = 0; i < allRow; ++i)
        	{
        		chk = ds.getColumn(i, colID);

        		if (chk == 0) return false;
        	}

        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridFilter_onload,this);
            this.grd_List.addEventHandler("oncellclick",this.grd_List_oncellclick,this);
            this.grd_List.addEventHandler("onheadclick",this.grd_List_onheadclick,this);
            this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);
        };
        this.loadIncludeScript("GridColHideShow.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
