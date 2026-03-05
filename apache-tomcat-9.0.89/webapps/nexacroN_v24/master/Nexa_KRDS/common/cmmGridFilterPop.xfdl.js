(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmGridFilterPop");
            this.set_titletext("필터팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeOperater", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "cd","type" : "STRING","size" : "256"},{"id" : "nm","type" : "STRING","size" : "256"},{"id" : "group","type" : "STRING","size" : "256"}]},"Rows" : [{"cd" : "none","nm" : "None","group" : "All"},{"cd" : "contains","nm" : "Contains","group" : "String"},{"cd" : "notContains","nm" : "notContains","group" : "String"},{"cd" : "startWith","nm" : "Start with","group" : "String"},{"cd" : "endWith","nm" : "End with","group" : "String"},{"cd" : "equal","nm" : "=","group" : "All"},{"cd" : "notEqual","nm" : "<>","group" : "All"},{"cd" : "greaterThan","nm" : ">","group" : "All"},{"cd" : "greaterThanOrEqual","nm" : ">=","group" : "All"},{"cd" : "lessThan","nm" : "<","group" : "All"},{"cd" : "lessThanOrEqual","nm" : "<=","group" : "All"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "INT","size" : "256"},{"id" : "val","type" : "STRING","size" : "256"},{"id" : "text","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GridFilterP");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFilter","40","268",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCombo","40","calFilter:16",null,"178","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_WF_GridFilter");
            obj.set_binddataset("dsCombo");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("10");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_selecttype("cell");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:text\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHeader","40","30","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("chk_WF_GridFilter");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFilter","40","chkHeader:16",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_displaynulltext("Search");
            this.addChild(obj.name, obj);

            obj = new Combo("cboOperater","40","edtFilter:16",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCodeOperater");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("nm");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply","40","cboOperater:16",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Apply");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",380,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmGridFilterPop.xfdl", function() {
        /**
         * Form onload event handler - 로드시 초기 지정
         * @param {Form} obj 대상 Form Component
         * @param {LoadEventInfo} e LoadEventInfo
         */
        this.cmmGridFilterPop_onload = function(obj,e)
        {
        	var imageSize = this.parent.parent.FILTER_ENABLE_IMAGE_SIZE;

        	//콤포는 포함으로 기본설정
        	this.cboOperater.set_index(1);

        	this.calFilter.set_left(this.edtFilter.left);
        	this.calFilter.set_top(this.edtFilter.top);
        	this.calFilter.set_height(this.edtFilter.height);
        	this.calFilter.set_right(this.edtFilter.right);
        };

        /**
         * 컴포넌트 내용 초기화
         */
        this.initValue = function ()
        {
        	this.edtFilter.set_value("");
        	this.cboOperater.set_index(-1);
        	this.calFilter.set_value("");
        };

        /**
         * 컴포넌트 위치 조정
         * @param {number} formW Form Width
         * @param {number} formH Form Height
         */
        this.resizeComps = function (formW, formH)
        {
        	var l,t,w,h,gap = 2;
        	var imageSize = this.parent.parent.FILTER_ENABLE_IMAGE_SIZE;

        	l = gap;
        	t = gap;
        	w = formW - (gap * 2) - imageSize[0];
        	h = formH - (gap * 2);

        	this.edtFilter.move(l, t, w, h);
        	this.calFilter.move(l, t, w, h);

        	l = l + w + gap;
        	t = Math.round((formH - imageSize[1]) / 2);
        };

        /**
         * filter type 별 형태/데이터 지정
         */
        this.setFilterType = function ()
        {
        	var grid = this.parent.grid;

        	var type = this.parent.filterType;
        	var column = this.parent.filterColumn;
        	var bodyCellIndex = this.parent.bodyCellIndex;
        	var filterData = this.parent.filterData;
        	var calFormat = this.parent.filterCalFormat;

        // 	this.edtFilter.set_visible(false);
        // 	this.calFilter.set_visible(false);
        //	this.cboOperater.set_visible(false);
        	this.edtFilter.set_enable(false);
        	this.calFilter.set_enable(false);
        	this.cboOperater.set_enable(false);

            //displaytype이 combo인경우에만,,필요
        	var dsName = grid.getCellProperty("body", bodyCellIndex, "combodataset");
        	var ds = this.gfn_Lookup(grid.parent, dsName);
        	var codeColumn = grid.getCellProperty("body", bodyCellIndex, "combocodecol");
        	var dataColumn = grid.getCellProperty("body", bodyCellIndex, "combodatacol");
        	this.dsCombo.set_enableevent(false);
        	this.dsCombo.deleteAll();

        	//데이터 distinct해서 넣기
        	var orginDataset = grid.getBindDataset();
        	var row = -1;
        	var defaultVal = this.gfnIsNull(filterData) ? true : false;
        	for (var i = 0,len = orginDataset.rowcount; i < len; i++)
        	{
        		var searchValue = orginDataset.getColumn(i, column);
        		row = this.dsCombo.findRow("val", searchValue);

        		if(row < 0)
        		{
        			row = this.dsCombo.addRow();
        		}

        		this.dsCombo.setColumn(row, "chk", (defaultVal ? 1 : filterData[i]));
        		this.dsCombo.setColumn(row, "text", orginDataset.getColumn(i, column));
        		this.dsCombo.setColumn(row, "val", orginDataset.getColumn(i, column));
        	}

        	//datatype에 맞겠금 그리드 셀타입 변경하기
         	this.grdCombo.setCellProperty("body", 1,"maskeditformat",grid.getCellProperty("body",bodyCellIndex,"maskeditformat"));
         	this.grdCombo.setCellProperty("body", 1,"maskedittype",grid.getCellProperty("body",bodyCellIndex,"maskedittype"));
         	this.grdCombo.setCellProperty("body", 1,"textAlign",grid.getCellProperty("body",bodyCellIndex,"textAlign"));

        	this.dsCombo.set_rowposition(-1);
        	this.dsCombo.set_enableevent(true);
        	if (type == "combocontrol" || type == "combotext")
        	{
        		this.edtFilter.set_visible(false);
        		this.calFilter.set_visible(false);
         		this.cboOperater.set_visible(false);
        		this.edtFilter.set_enable(false);
        		this.calFilter.set_enable(false);
        		this.cboOperater.set_enable(false);
        		this.chkHeader.set_visible(true);
        		this.grdCombo.set_visible(true);

        		var dsName = grid.getCellProperty("body", bodyCellIndex, "combodataset");
        		var ds = this.gfn_Lookup(grid.parent, dsName);
        		var codeColumn = grid.getCellProperty("body", bodyCellIndex, "combocodecol");
        		var dataColumn = grid.getCellProperty("body", bodyCellIndex, "combodatacol");

        		this.dsCombo.set_enableevent(false);
        		this.dsCombo.deleteAll();

        		var row;
        		var defaultVal = this.gfnIsNull(filterData) ? true : false;
        		var nRowcount = 0;
        		if(ds) nRowcount = ds.rowcount;
        		// for (var i = 0,len = ds.rowcount; i < len; i++)
        		for (var i = 0,len = nRowcount; i < len; i++)
        		{
        			row = this.dsCombo.addRow();
        			this.dsCombo.setColumn(row, "chk", (defaultVal ? 0 : filterData[i]));
        			this.dsCombo.setColumn(row, "text", ds.getColumn(i, dataColumn));
        			this.dsCombo.setColumn(row, "val", ds.getColumn(i, codeColumn));
        		}
        		this.dsCombo.set_rowposition(-1);
        		this.dsCombo.set_enableevent(true);
        	}
        	else if (type == "date")
        	{
         		this.edtFilter.set_visible(false);
        		this.calFilter.set_visible(true);
        		this.cboOperater.set_visible(true);
        		this.edtFilter.set_enable(false);
        		this.calFilter.set_enable(true);
        		this.cboOperater.set_enable(true);

        		this.calFilter.set_dateformat(calFormat);
        	}
        	else if (type == "number")
        	{
        		this.edtFilter.set_visible(true);
        		this.calFilter.set_visible(false);
        		this.edtFilter.set_enable(true);
        		this.edtFilter.set_inputtype("number");
        		this.calFilter.set_enable(false);
        		this.cboOperater.set_enable(true);
        	}
        	else
        	{
        		this.edtFilter.set_visible(true);
        		this.calFilter.set_visible(false);
        		this.edtFilter.set_enable(true);
        		this.edtFilter.set_inputtype("normal");
        		this.calFilter.set_enable(false);
        		this.cboOperater.set_enable(true);
        	}

        	if(grid.getCellProperty("body",bodyCellIndex,"displaytype") == "combocontrol" || grid.getCellProperty("body",bodyCellIndex,"displaytype") == "combotext")
        	{
        		this.chkHeader.set_visible(true);
        		this.grdCombo.set_visible(true);
        	}
        };

        /**
         * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * @public
         * @param {xpComp} p 찾을 대상
         * @param {string} name 찾을 대상 이름
         * @return {xpComp} 검색된 component, object
         * @example
         *
         * // this = Form
         * // Form 에 Button11 존재
         * trace(Base.XPComp.lookup(this, "Button11"));	// output : [object Button]
         *
         * // Button12 는 Div01 에 존재하지 않으나 Div01 의 상위 컴포넌트인 Form 에 존재
         * trace(Base.XPComp.lookup(Div01, "Button11"));	// output : [object Button]
         *
         * @memberOf Base.XPComp
         */
        this.gfn_Lookup = function (p, name)
        {
        	var o;
        	while (p)
        	{
        		o = p.components;
        		if (o && o[name])
        		{
        			return o[name];
        		}

        		o = p.objects;
        		if (o && o[name])
        		{
        			return o[name];
        		}

        		p = p.parent;
        	}
        	return null;
        };

        //닫기
        // this.btn_apply_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        this.btnApply_onclick = function(obj,e)
        {

        	var value;
        	if(this.parent.filterType == "date" || this.parent.filterTyp == "calendarcontrol")
        	{
        		value = this.calFilter.value;
        	}
        	else
        	{
        		value = this.edtFilter.value;
        	}


        	if(this.gfnIsNull(value))
        	{
        		this.cboOperater.set_index(0);
        	}

        	var filterData = value;
        	var filterDataArr = new Array();
        	//'||'로 죄다 엮어서 필터 테스트 하기
        	var grid = this.parent.grid;
        	var column = this.parent.filterColumn;
        	var headCellIndex = this.parent.headCellIndex;

        	var ds = this.gfn_Lookup(grid.parent, grid.binddataset);
        	var colType = ds.getColumnInfo(column).type.toUpperCase();
        	var filterString = "";
        	var str = "";

        	if(this.parent.filterType == "combocontrol" || this.parent.filterType == "combotext")
        	{
        		// grdCombo에 선택된 값들 다 '||'로 엮어버리기
        		var cnt = this.dsCombo.rowcount;
        		var j=0;

        		// 전체선택시 해제처리
        		var nChkRowCnt = this.dsCombo.getCaseCount("chk == '1'");
        		if(cnt <= nChkRowCnt)
        		{
        			filterString = "";
        			this.edtFilter.set_value("");
        			filterData = "";
        		}
        		else
        		{
        			for(var i = 0 ; i < cnt ; i++)
        			{
        				if(this.gfnIsNull(this.dsCombo.getColumn(i, "chk")) || this.dsCombo.getColumn(i, "chk")=="0") continue;
        				if (!this.gfnIsNull(filterString))
        				{
        					filterString += " || ";
        				}
        				filterString += column;
        				filterString += "==";
        				filterString += nexacro.wrapQuote(this.dsCombo.getColumn(i, "val"));
        				filterDataArr[j] = this.dsCombo.getColumn(i, "val");
        				j++;
        			}
        			filterData = filterDataArr;
        		}
        	}
        	else
        	{
        		operater = this.cboOperater.value;
        		switch (operater)
        		{
        			case 'equal':
        				filterString = (colType == "STRING"? "String("+column+").toUpperCase()" : column) + "==" + (colType == "STRING" ? nexacro.wrapQuote(value.toUpperCase()) : value);
        				break;
        			case 'notEqual':
        				filterString = (colType == "STRING"? "String("+column+").toUpperCase()" : column) + "!=" + (colType == "STRING" ? nexacro.wrapQuote(value.toUpperCase()) : value);
        				break;
        			case 'greaterThan':
        				filterString = (colType == "STRING"? "String("+column+").toUpperCase()" : column) + ">" + (colType == "STRING" ? nexacro.wrapQuote(value.toUpperCase()) : value);
        				break;
        			case 'greaterThanOrEqual':
        				filterString = (colType == "STRING"? "String("+column+").toUpperCase()" : column) + ">=" + (colType == "STRING" ? nexacro.wrapQuote(value.toUpperCase()) : value);
        				break;
        			case 'lessThan':
        				filterString = (colType == "STRING"? "String("+column+").toUpperCase()" : column) + "<" + (colType == "STRING" ? nexacro.wrapQuote(value.toUpperCase()) : value);
        				break;
        			case 'lessThanOrEqual':
        				filterString = (colType == "STRING"? "String("+column+").toUpperCase()" : column) + "<=" + (colType == "STRING" ? nexacro.wrapQuote(value.toUpperCase()) : value);
        				break;
        			case 'startWith':
        				filterString = "String("+column+").toUpperCase().substr(0, "+value.toUpperCase().length+") == '"+value.toUpperCase()+"'";
        				break;
        			case 'endWith':
        				//filterString = "String("+column+").toUpperCase().substr(String("+column+").toUpperCase().length-String("+value.toUpperCase()+").length) == '"+value.toUpperCase()+"'";
        				filterString = "String("+column+").toUpperCase().slice(-" + value.toUpperCase().length + ") == '"+value.toUpperCase()+"'";
        				break;
        			case 'contains':
        				filterString = "String("+column+").toUpperCase().indexOf('"+value.toUpperCase()+"') > -1";
        				break;
        			case 'notContains' : // devPro notContains 추가
        				filterString = "String("+column+").toUpperCase().indexOf('"+value.toUpperCase()+"') == -1";
        				break;
        			case 'none':
        				filterString = "";
        				this.edtFilter.set_value("");
        				filterData = "";
        				break;
        		}
        	}

        	// 필터 표시 이미지 변경
        	var baseCssclass;
        	var setCssclass;
        	if(grid.filterInfos[this.parent.filterColumn])
        	{
        		baseCssclass = grid.filterInfos[this.parent.filterColumn].baseCssclass;
        	}

        	if (this.gfnIsNull(filterString))
        	{
        		//해당 그리의 expand img를 변경..
        		if(!this.gfnIsNull(baseCssclass))
        		{
        			setCssclass = baseCssclass+","+this.FILTER_ENABLE_CSS;
        		}
        		else
        		{
        			setCssclass = this.FILTER_ENABLE_CSS;
        		}

        		if(grid.sortInfos)
        		{
        			if(grid.sortInfos[this.parent.filterColumn])
        			{
        				setCssclass = this.gfnFilterSortCssclass(baseCssclass, "N", grid.sortInfos[this.parent.filterColumn].status);
        			}
        		}

        		grid.setCellProperty( "head", headCellIndex, "cssclass", setCssclass);
        		grid.filterInfos[this.parent.filterColumn].status = "N";
        	}
        	else
        	{
        		filterString = "(" + filterString + ")";
        		if(!this.gfnIsNull(baseCssclass))
        		{
        			setCssclass = baseCssclass+","+this.FILTER_APPLY_CSS;
        		}
        		else
        		{
        			setCssclass = this.FILTER_APPLY_CSS;
        		}

        		if(grid.sortInfos)
        		{
        			if(grid.sortInfos[this.parent.filterColumn])
        			{
        				setCssclass = this.gfnFilterSortCssclass(baseCssclass, "S", grid.sortInfos[this.parent.filterColumn].status);
        			}
        		}

        		grid.setCellProperty( "head", headCellIndex, "cssclass", setCssclass);
        		grid.filterInfos[this.parent.filterColumn].status = "S";
        	}

        	// 부모화면 필터 실행
        	this.fnExecuteFilter(grid, headCellIndex, filterString, filterData);
        	this.parent.closePopup();
        	return;
        };

        //전체선택 및 해제
        // this.grdCombo_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        this.chkHeader_onclick = function(obj,e)
        {
        	//체크박스 아니면 return;
        	// if(e.cell != 0) return;

        	var objGrid = this.grdCombo;// obj;
        	var objDs = this.grdCombo.getBindDataset(); // obj.getBindDataset();

        	// var headValue = objGrid.getCellProperty("Head", e.cell, "text");
        	var headValue = this.chkHeader.value;
        	trace("this.chkHeader.value:"+this.chkHeader.value);
        	//전체선택
        	if(headValue == true || headValue == "1")
        	{
        		objDs.set_enableevent(false);
        		objDs.set_updatecontrol(false);
        		objGrid.set_enableevent(false);
        		objGrid.set_enableredraw(false);
        		for (var i = 0; i <= objDs.rowcount; i++)
        		{
        			objDs.setColumn(i, "chk", "1");
        		}
        		// objGrid.setCellProperty("Head", 0, "text", "0");
        		// this.chkHeader.set_value(false);
        		objGrid.set_enableevent(true);
        		objGrid.set_enableredraw(true);
        		objDs.set_enableevent(true);
        		objDs.set_updatecontrol(true);
        	}
        	else
        	{
        		objDs.set_enableevent(false);
        		objDs.set_updatecontrol(false);
        		objGrid.set_enableevent(false);
        		objGrid.set_enableredraw(false);
        		for (var i = 0; i <= objDs.rowcount; i++)
        		{
        			objDs.setColumn(i, "chk", "0");
        		}
        		// objGrid.setCellProperty("Head", 0, "text", "1");
        		// this.chkHeader.set_value(true);
        		objGrid.set_enableevent(true);
        		objGrid.set_enableredraw(true);
        		objDs.set_enableevent(true);
        		objDs.set_updatecontrol(true);
        	}
        };

        /**
        * 필터 실행
        * @param {Grid} grid 대상 Grid Component
        * @param {number} headCellIndex head cell index
        * @param {string} filterString 적용할 조건식
        * @param {*=} filterData filter 조건 데이터
        */
        this.fnExecuteFilter = function(grid, headCellIndex, filterString, filterData)
        {
        	var bodyCellIndex = this._gfnGridGetBodyCellIndex(grid, headCellIndex);
        	var column = this._gfnGridGetBindColumnNameByIndex(grid, bodyCellIndex);

            var ds = grid.getBindDataset();
            var filterItems = grid.filterItems;
            var filterItem = filterItems[column];

            // 선택 컬럼명의 필터정보 확인 및 지정
            if (this.gfnIsUndefined(filterItem))
            {
                filterItem = filterItems[column] = {
                    filterData: filterData,
                    filterString: filterString
                };
            }
            else
            {
                filterItem.filterData = filterData;
                filterItem.filterString = filterString;
            }

            // 필터정보에서 필터스트링 조합
            var resultString = "";
            var tempString = "";

            for (var p in filterItems)
            {
                if (!filterItems.hasOwnProperty(p)) return;

                filterItem = filterItems[p];
                tempString = filterItem.filterString;

        		if (!this.gfnIsNull(tempString))
                {
        			resultString += (this.gfnIsNull(resultString) ? "" : " && ") + tempString;
                }
            }

            // 필터 적용
            ds.filter(resultString);
        	ds.set_rowposition(-1); //포커스 빼기
        	ds.set_rowposition(0); //포커스 0으로 넣기

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmGridFilterPop_onload,this);
            this.calFilter.addEventHandler("oncloseup",this.cal_filter_oncloseup,this);
            this.chkHeader.addEventHandler("onclick",this.chkHeader_onclick,this);
            this.btnApply.addEventHandler("onclick",this.btnApply_onclick,this);
        };
        this.loadIncludeScript("cmmGridFilterPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
