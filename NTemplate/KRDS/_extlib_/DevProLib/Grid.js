/**
*  devPro Library
*  @FileName 	Grid.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2020.11.24
*  @Description
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2020.11.24			TOBESOFT				Grid Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

pForm.FILTER_SORT_SIZE = 36;					// 필터,소트 적용시 Expand Size
pForm.FILTER_ENABLE_CSS = "cell_WF_FilterNo";		// 필터대상 Head cssclass
pForm.FILTER_APPLY_CSS = "cell_WF_FilterS";		// 필터적용된 Head cssclass
pForm.FILTER_ENABLE_IMAGE_SIZE = [36, 30]; 
pForm.GridConfig = {
	"popmenulist" : ["sort","colfix","rowfix","filter","filterNew","find","colhide","colhideNew","scroll","select","cellcopypaste","initial"],	// 전체 메뉴
	"defaultmenulist" : ["sort","cellcopypaste"],	// default 메뉴	
	"sort" : 	{
					sortTogleCancel		: true ,	// 헤더 클릭시 정렬 false= 오름/내림 true= 오름/내림/없음
					ascText  			: "▲"  ,	// ascending text
					descText 			: "▼"  ,	// descending text
					cellInfo			: []		// 내부용
				}
};
pForm.OPEN_SEL_POPMENU;

/**
* @class Grid 생성시 호출됨 - CompOverride.js에서 호출
* @param {Object} objGrid	- 대상그리드
* @return N/A
* @example this.gfnGridOnload(this.grdMain);	
*/
pForm.gfnGridOnload = function(objGrid)
{
	this.gfnSetGrid(objGrid);
};

/**
* @class Grid 파기시 호출됨 - CompOverride.js에서 호출 / 매달린 객체 제거 위함.
* @param {Object} objGrid	- 대상그리드
* @return N/A
* @example this.gfnGridOnload(this.grdMain);	
*/
pForm.gfnGridOnUnload = function(objGrid)
{
	if(objGrid.popupMenu)
	{
		var objDS = objGrid.popupMenu.getInnerDataset();
		if(objDS) 
		{
			try {
				this.removeChilde(objDS.name);
				objDS.destroy();
				objDS = null;
			} catch(e) {}				
		}
		objGrid.popupMenu.grid = null;
		try {
			this.removeChilde(objGrid.popupMenu.id);
			objGrid.popupMenu.destroy();
		} catch(e) {}
		objGrid.popupMenu = null;
	}
	if(objGrid.arrprop) objGrid.arrprop = null;
	if(objGrid.orgformat2) objGrid.orgformat2 = null;
};

/**
* @class  그리드 설정 내부함수<br>
	   그리드에 유저프로퍼티를 Array형태로 반환한다.
* @param  {Object}objGrid	- 대상그리드
* @return {Array} user property
* @example this._getGridUserProperty(this.grdMain);	
*/
pForm._getGridUserProperty = function (objGrid)
{
	var sProp = objGrid.uFunction;
	
	var arrdefault = this.GridConfig.defaultmenulist.slice();
	var arrprop = [];
	
	if (!this.gfnIsNull(sProp)) {
		arrprop = sProp.split(",");
		for (var i=0; i<arrprop.length; i++) {
			if (arrprop[i].indexOf("!") == 0 ) {
				//DEFAULT에서 제거
				for (var j=0; j<arrdefault.length; j++){
					if (arrdefault[j] == arrprop[i].substr(1) ) {
						arrdefault[j] = "";
					}
				}
				arrprop[i] = "";
			}
		}
	}
	
	var arrmyprop = [];
	for (var i=0; i< arrdefault.length; i++) {
		if (!this.gfnIsNull(arrdefault[i])) {
			arrmyprop.push(arrdefault[i]);
		}
	}
	
	for (var i=0; i< arrprop.length; i++) {
		if (!this.gfnIsNull(arrprop[i])) {
			arrmyprop.push(arrprop[i]);
		}
	}
	
	//trace(objGrid.name + " - arrmyprop : " + arrmyprop);
	return arrmyprop;
};

/**
* @class  그리드헤드클릭 이벤트 [Sort, Checkbox]
* @param {Object} objGrid - 대상그리드
* @param {Evnet}  e	   - 헤드클릭이벤트
* @return  N/A
* @example objGrid.addEventHandler("onheadclick", this.gfnGrid_onheadclick, this);
*/
pForm.gfnGrid_onheadclick = function(objGrid, e)
{
	if (this.gfnGridSelectAllCheckbox(objGrid, e)) return;	// 체크박스인 경우
	
	// sort
	if (objGrid.uFun_sort === true) {
		if(objGrid._appendHeadRowIndex == e.subrow) return;	// find용 row

		var multiple = false;
		if (e.ctrlkey) multiple = true; // Ctrl 키
		var rtn = this._gfnGridSetSortStatus(objGrid, e.cell, multiple);
		if (rtn) {
			this._gfnGridExecuteSort(objGrid);
		}
	}
};

/**
* @class 정렬가능여부리턴
* @param {Object} grid - 대상그리드
* @param {Number} headCellIndex - 대상셀INDEX
* @param {Boolean} multiple - 멀티소트여부 
* @param {Number} sortStatus - 소트상태  
* @return{Boolean} sort 가능/불가능 여부
* @example this._gfnGridSetSortStatus(obj, e.cell, multiple);	
*/
pForm._gfnGridSetSortStatus = function(grid, headCellIndex, isMultiple, sortStatus, bodyCellIndex)
{
	// head cell index 에 해당하는 body cell index
	if( this.gfnIsNull(bodyCellIndex)){
		bodyCellIndex = this._gfnGridGetBodyCellIndex(grid, headCellIndex);
	}
	if ( bodyCellIndex < 0 ) return false;
	
	// body cell index 에 해당하는 바인드 컬럼명
	var columnName = this.gfnGetBindColName(grid, bodyCellIndex);
	if (this.gfnIsNull(columnName)) {
		trace("bind가 되지 않은 cell은 sort가 되지 않습니다.");
		return false;
	}
	
	if ( this.gfnIsNull(isMultiple) ) isMultiple = false;
	if ( this.gfnIsNull(sortStatus) ) sortStatus = -1;
	
	// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
	if ( this.gfnIsNull(grid.sortInfos) ){
		grid.sortInfos = {};
	}
	
	// 정렬대상컬럼 (순서중요)
	if ( this.gfnIsNull(grid.sortItems) ){
		grid.sortItems = [];
	}
	
	var sortInfos = grid.sortInfos,
		sortItems = grid.sortItems,
		sortInfo = sortInfos[columnName],
		sortItem,
		status;
	
	if (this.gfnIsNull(sortInfo)) {
		var headText = grid.getCellText(-1, headCellIndex);
		
		// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
		// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다. 		
		var refCell = this._gfnGridGetGridCellObject(grid, "head", headCellIndex);
		sortInfo = sortInfos[columnName] = { status: 0, text: headText, refCell: refCell};
	}
	// set sort status
	if ( isMultiple ) {		
		status = sortInfo.status;
		if ( sortStatus == -1 ) {
			if ( status == 0 ) {
				sortInfo.status = 1;
			} 
			else if ( status == 1 ) {
				sortInfo.status = 2;
			} 
			else if ( status == 2 ) {
				sortInfo.status = ( this.GridConfig.sort.sortTogleCancel ? 0 : 1);
			}
		}
		else {
			sortInfo.status = sortStatus;
		}
	}
	else {
		for (var p in sortInfos) {
			if ( sortInfos.hasOwnProperty(p) )
			{
				sortInfo = sortInfos[p];
				if ( p == columnName ) {
					status = sortInfo.status;
					if ( sortStatus == -1 ) {
						if ( status == 0 ) {
							sortInfo.status = 1;
						} 
						else if ( status == 1 ) {
							sortInfo.status = 2;
						} 
						else if ( status == 2) {
							sortInfo.status = ( this.GridConfig.sort.sortTogleCancel ? 0 : 1);
						}
					}else {
						sortInfo.status = sortStatus;
					}
				}else {
					sortInfo.status = 0;
				}
				if ( sortInfo.status == 0 ){
					for (var j=0, len2=sortItems.length; j<len2; j++) {
						if ( sortItems[j] !== columnName ) {
							sortItems.splice(j, 1);
							break;
						}
					}
				}
			}
		}
	}
	
	// 컬럼정보 등록
	var hasItem = false;
	for (var i=0, len=sortItems.length; i<len; i++) {
		if ( sortItems[i] == columnName ) {
			hasItem = true;
			break;
		}
	}	
	if (!hasItem) {
		sortItems.push(columnName);
	}
	return true;
}; 

/**
* @class 소트를 실행한다
* @param {Object}  grid 대상 Grid Component
* @return{String}  N/A
* @example this._gfnGridExecuteSort(obj);	
*/  
pForm._gfnGridExecuteSort = function(grid) 
{
	var sortInfo, 
		sortItem,
		sortInfos = grid.sortInfos,
		sortItems = grid.sortItems,
		columnName,
		status,
		cell,
		sortString = "";
		
	if ( this.gfnIsNull(sortInfos) || this.gfnIsNull(sortItems) ) return;

	// keystring 조합
	for (var i=0; i<sortItems.length; i++) {
		columnName = sortItems[i];
		sortInfo = sortInfos[columnName];
		status = sortInfo.status;
		cell = sortInfo.refCell;
		
		// 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
		// 확인하여 없으면 제거해 준다.
		if ( this.gfnIsNull(cell) || grid.getBindCellIndex("body", columnName) < 0 ){
			// 컬럼정보제거
			sortItems.splice(i, 1);
			sortInfos[columnName] = null;
			delete sortInfos[columnName];
			
			i--;
		}
		else if ( status > 0 ) {
			sortString += (status == 1 ? "+" : "-") + columnName;
		}
	}
	
	var ds = grid.getBindDataset();
	
	// keystring 확인
	var curKeyString = ds.keystring;
	var groupKeyString = "";
	
	if (curKeyString.length > 0 && curKeyString.indexOf(",") < 0) {
		var sIndex = curKeyString.indexOf("S:");
		var gIndex = curKeyString.indexOf("G:");

		if (sIndex > -1) {
			groupKeyString = "";
		}
		else {
			if (gIndex < 0) {
				groupKeyString = "G:"+curKeyString;
			}
			else {
				groupKeyString = curKeyString;
			}
		}
	}
	else {
		var temps = curKeyString.split(",");
		var temp;
		for (var i=0,len=temps.length; i<len; i++) {
			temp = temps[i];
			if (temp.length > 0 && temp.indexOf("S:") < 0) {
				if (temp.indexOf("G:") < 0) {
					groupKeyString = "G:"+temp;
				}
				else {
					groupKeyString = temp;
				}
			}
		}
	}
	
	grid.set_enableevent(false);
	grid.set_enableredraw(false);
	
	if (sortString.length > 0) {
		var sortKeyString = "S:"+sortString;
		
		if ( groupKeyString.length > 0 ) {
			ds.set_keystring(groupKeyString + "," +  sortKeyString);
		} 
		else {
			ds.set_keystring(sortKeyString);
		}
		
		grid.sortKeyString = sortKeyString;
	}
	else {
		ds.set_keystring(groupKeyString);
		grid.sortKeyString = "";
	}

	// 정렬표시
	var index, marker;
	for (var p in sortInfos) {
		if ( sortInfos.hasOwnProperty(p) )
		{
			sortInfo = sortInfos[p];			
			cell = sortInfo.refCell;
			if ( cell )
			{
				index = cell._cellidx;
				marker = this.gfnDecode(sortInfo.status, 1, this.GridConfig.sort.ascText, 2, this.GridConfig.sort.descText, "");
				grid.setCellProperty( "head", index, "text", sortInfo.text + marker);
			}
		}
	}
	
	// rowposition을 최상단으로 이동 필요시
	//ds.set_rowposition(0);
	
	grid.set_enableevent(true);
	grid.set_enableredraw(true);
};

/**
* @class  마우스 우클릭 이벤트
* @param  {Object} objGrid	- 대상그리드
* @param  {Event}  e		- 우클릭이벤트 
* @return  N/A
* @example objGrid.addEventHandler("onrbuttondown", this.gfnGrid_onrbuttondown, this);
*/
pForm.gfnGrid_onrbuttondown = function (objGrid, e)
{
	var objApp = nexacro.getApplication();
	if(!objGrid.popupMenu) return;
	// 대상 그리드와 셀 정보를 추가
	objGrid.popupMenu.grid = objGrid;
	objGrid.popupMenu.cellindex = e.cell;
	objGrid.popupMenu.rowindex = e.row;
	objGrid.popupMenu.colindex = e.col;	
	
	var popDs = objGrid.popupMenu.getInnerDataset();
	if (e.row < 0) 
	{
		popDs.filter("enable=='true' && bandtype=='head'");
	} else {
		popDs.filter("enable=='true' && bandtype!='head'");
	}
	if(popDs.rowcount == 0) return;
	
	//20230315 필터, 컬럼 기능 추가 시작
	var objParentForm = objGrid.parent;
	var objPopupDs = popDs;
	var colNm = "colhidefreeNew";	
	var rowPos = objPopupDs.findRow("id", colNm);
	var rowPos2 = objPopupDs.findRow("id", "colhideNew");
	
	if (rowPos > -1)
	{
		var colHide = "true";
		//col찾기
		if(e.row < 0) //헤더행일경우
		{
			var col = objGrid.getCellProperty("Head", e.cell, "col");	
			objGrid.popupMenu.colindex = col; //col index
			
			var nColspan = parseInt(objGrid.getCellProperty("head", e.cell, "colspan"));
			if(nColspan > 1 )
			{
				colHide = "false";
			}
		}
		else //데이타행일경우
		{
			objGrid.popupMenu.colindex = e.cell; //col index
		}

		//숨긴 컬럼 존재 시 컬럼 정보 재구성 (dataset이 생기는 위치는 objGrid의 parent로 생김. 현재 this는 최상단이기때문에 dataset생성위치 기준을 맞춤)
		var sDatasetNm = "ds_colinfo_" + objGrid.id + "_" + objGrid.formatid;
		var hidingInfos;
		if (!objParentForm.isValidObject(sDatasetNm)){
			hidingInfos = new Dataset(sDatasetNm);
			hidingInfos.name = sDatasetNm;
			objParentForm.addChild(sDatasetNm, hidingInfos);
		} else {
			hidingInfos = objParentForm.objects[sDatasetNm];
		}
		
		objPopupDs.setColumn(rowPos, "enableMenu", "false");	 	
		objPopupDs.setColumn(rowPos2, "enableMenu", colHide);
		if(colHide == "false")
		{
			objPopupDs.setColumn(rowPos, "enableMenu", colHide);			
		}
		else
		{
			if (hidingInfos.rowcount > 0) 
			{					
				//----- 숨긴 칼럼 정보 재구성		
				//show column영역 활성화
				objPopupDs.setColumn(rowPos, "enableMenu", "true");	 
				//show all column 영역 추가
				rowPos = objPopupDs.insertRow(rowPos + 1);
				objPopupDs.setColumn(rowPos, "id", colNm + "_all");
				objPopupDs.setColumn(rowPos, "grp", "colhideNew");
				objPopupDs.setColumn(rowPos, "level", "1");
				objPopupDs.setColumn(rowPos, "caption", "Show All Column"); //SHOW ALL COLUMN
				objPopupDs.setColumn(rowPos, "enableMenu", "true");
				
				//숨김 처리된 컬럼명
				for (var i = 0, len = hidingInfos.rowcount; i < len; i++) 
				{
					rowPos = objPopupDs.insertRow(rowPos + 1);
					objPopupDs.setColumn(rowPos, "id", colNm + "_" + hidingInfos.getColumn(i,"idx"));
					objPopupDs.setColumn(rowPos, "level", "1");
					objPopupDs.setColumn(rowPos, "caption", hidingInfos.getColumn(i,"text"));
					objPopupDs.setColumn(rowPos, "enableMenu", "true");
				}
			}
		}
	}

	//filter 활성화 비활성화 start
	var sRow = objPopupDs.findRow("id", "showcolfilter");
	var hRow = objPopupDs.findRow("id", "hidecolfilter");
	var bFilterHide = false;
	var curHeadCell = -1;
	if (e.row < 0) //헤더행일경우
	{
		curHeadCell = e.cell;
		
		//병합처리 된것은 동작안한다.
		var nColspan = parseInt(objGrid.getCellProperty("head", e.cell, "colspan"));
		if(nColspan > 1 ) 
		{
			bFilterHide =  true;
		}
		
		//head가 2줄이상 인경우에는 body와 마찬가지로 하위cell에서만 처리추가
		if (e.cell != this._gfngetHeadCellIdxByBodyCol(objGrid, e.col)) 
		{
			bFilterHide =  true;
		}
	}
	else 
	{
		curHeadCell = this._gfngetHeadCellIdxByBodyCol(objGrid , e.col);
		objGrid.popupMenu.cellindex = curHeadCell; //재셋팅
	}	

	if (bFilterHide) 
	{
		objPopupDs.setColumn(sRow, "enableMenu",  false);
		objPopupDs.setColumn(hRow, "enableMenu",  false);
	}
	else  
	{
		var curCss = String(objGrid.getCellProperty("head", curHeadCell, "cssclass")).toUpperCase() ;
		if (curCss.indexOf("FILTER") > -1) //css 명중 filter 체크 
		{	
			objPopupDs.setColumn(sRow, "enableMenu",  false);
			objPopupDs.setColumn(hRow, "enableMenu",  true);
		}
		else {
			objPopupDs.setColumn(sRow, "enableMenu",  true);
			objPopupDs.setColumn(hRow, "enableMenu",  false);
		}
	}
	//20230315 필터, 컬럼 기능 추가 끝
	
	// trackPopupByComponent 이용
	var x = nexacro.toNumber(system.getCursorX()) - nexacro.toNumber(system.clientToScreenX(objGrid, 0));
	var y = nexacro.toNumber(system.getCursorY()) - nexacro.toNumber(system.clientToScreenY(objGrid, 0));
	
	// 스튜디오 사용시 팝업메뉴 위치 조정
// 	var sRunMode = objApp.gvRunMode;
// 	if (sRunMode == "S" || this.gfnIsNull(sRunMode)) {
// 		y += 83;
// 	}
	
	this.OPEN_SEL_POPMENU = objGrid.popupMenu;
	objGrid.popupMenu.trackPopupByComponent(objGrid, x, y, null, false);
};

/**
* @class  그리드 expand 다운 이벤트
* @param  {Object} objGrid	- 대상그리드
* @param  {Event}  e		- 우클릭이벤트 
* @return  N/A
* @example objGrid.addEventHandler("onexpanddown", this._gfnGrid_onexpanddown, this);
*/
pForm._gfnGrid_onexpanddown = function (obj, e)
{
	if(e.row >= 0) return;
	if(obj._appendHeadRowIndex < 0) return;
	nexacro._OnceCallbackTimer.callonce(this, function () {
		this._gfnHeadFindExecute(obj);
	}, 50);	
	
	//20230315 필터, 컬럼 기능 추가 시작
	// head click 에는 gfnGrid_onheadclick 처리하지 않게 변수처리 추가
	obj.expanddown = true;
	
	var i = e.cell;
	var grid = obj;
	
	// 업무화면의 body 영역의 onexpanddown 이벤트 중복실행 방지용
	if(e.row > -1 ) return;
	
	//filter 표시가 안되어 있으면 return; // sort표시도 expand영역에 표시하기 때문에 이벤트 발생
	if (String(obj.getCellProperty("head", e.cell, "cssclass")).toUpperCase().indexOf("FILTER") == -1)  return;
	
	
	//팝업위치
    var rect = [];
    var cellCnt = obj.getCellCount("head");
    var bodyCellIndex, column, comp, name, type;
    var l, t, w, h;
    var gridLeftPos = obj.getOffsetLeft();
    var gridTopPos = obj.getOffsetTop();
    var gridPos = [gridLeftPos, gridTopPos, gridLeftPos + grid.getOffsetWidth(), gridTopPos + grid.getOffsetBottom()];
    var first = true;
    var col, band, pivotIndex;
	
	col = grid.getCellProperty("head", e.cell, "col");
	band = grid.getFormatColProperty(col, "band");
	rect = grid.getCellRect(-1, e.cell, pivotIndex);
	bodyCellIndex = this.gfnGetBodyCellIndex(grid, e.cell);
	
	column = this._gfnGridGetBindColumnNameByIndex(grid, bodyCellIndex);
	rect = obj.getCellRect(-1, e.cell);
	
	//----------------------------------------------------------------------------------------------
	//filter적용후 cell moving 시 cellfilter 적용유지 추가 start
	//----------------------------------------------------------------------------------------------	
	name = this.gfnGetObjString(pForm, obj) + "_headAppendComp" + column;
	var pdiv = this.components[name];
	//trace("name>["+name+"]" + pdiv);
	//var pdiv = this.components[ this.gfnGetObjString(this, obj) + "_headAppendComp" + e.cell];
	//----------------------------------------------------------------------------------------------
	//filter적용후 cell moving 시 cellfilter 적용유지 추가 end
	//----------------------------------------------------------------------------------------------
	
	//미존재시 pdiv 생성
	if(!pdiv) {
		var form = this;
		var type = obj.getCellProperty("body", bodyCellIndex, "displaytype");
		var calFormat = obj.getCellProperty("body", bodyCellIndex, "calendardateformat");
		
		var list = obj.makeCompList;		
		list.push(name);		
		
		//필터
		var comp;
		comp = new PopupDiv(name);
		comp.form.set_scrollbartype("none");
		comp.form.set_scrolltype("none");
		comp.set_async(false);
		comp.set_visible(false);
		var nIdx = form.addChild(comp.name, comp);		
		comp.set_cssclass("pdiv_LF_pop");
		comp.set_url("common::cmmGridFilterPop.xfdl");
		comp.show();
		
		// 대상 그리드와 셀 정보를 추가
		comp.grid = obj;
		comp.cellindex = e.cell;
		comp.headCellIndex = e.cell;
		comp.bodyCellIndex = bodyCellIndex;
		comp.filterType = type;
		comp.filterColumn = column;
		comp.filterCalFormat = calFormat;
		var filterItems = obj.filterItems;
		var filterItem = filterItems[column];
		// if (!nexacro.isEmpty(filterItem))
		if (!this.gfnIsNull(filterItem))
		{
			comp.filterData = filterItem.filterData;
		}
		
		// 필터타입 지정
		comp.form.setFilterType();
		
		obj.makeCompList = list;	
		
		pdiv = this.components[name];
	}
	//생성을 이쪽으로 변경
	
	
	if(pdiv)
	{
		if(pdiv.isPopup())
		{
			pdiv.closePopup();
			return;
		}
		
		//----------------------------------------------------------------------------------------------
		//filter적용후 cell moving 시 cellfilter 적용유지 추가 start
		//----------------------------------------------------------------------------------------------	
		// cell moving 될 경우 index는 변함으로 filter pdv에 참고값을 갱신해준다.
		pdiv.headCellIndex = e.cell;
		pdiv.bodyCellIndex = bodyCellIndex;
		//----------------------------------------------------------------------------------------------
		//filter적용후 cell moving 시 cellfilter 적용유지 추가 end
		//----------------------------------------------------------------------------------------------
		
		if(obj.filterItems[pdiv.filterColumn])
		{
			if(pdiv.filterType == "combocontrol" || pdiv.filterType == "combotext")
			{
				pdiv.form.setFilterType();
				var i, len;
				var sValue;
				for(i=0;i<pdiv.form.dsCombo.getRowCount();i++)
				{
					pdiv.form.dsCombo.setColumn(i, "chk", 0);
				}
				// pdiv.form.grdCombo.setCellProperty("Head", 0, "text", 0);
				// 체크박스
				pdiv.form.chkHeader.set_value(0);
				
				if(obj.filterItems[pdiv.filterColumn].filterData.length > 0)
				{
					for(i=0;i<pdiv.form.dsCombo.getRowCount();i++)
					{
						sValue = pdiv.form.dsCombo.getColumn(i, "val");
						if(obj.filterItems[pdiv.filterColumn].filterData.indexOf(sValue) > -1)
						{
							pdiv.form.dsCombo.setColumn(i, "chk", 1);
						}
					}
				}
			}
			else if(pdiv.filterType == "date" || pdiv.filterType == "calendarcontrol")
			{
				pdiv.form.calFilter.set_value(obj.filterItems[pdiv.filterColumn].filterData);
				if(pdiv.form.cboOperater.index == 0) pdiv.form.cboOperater.set_index(1);
			}
			else
			{
				pdiv.form.edtFilter.set_value(obj.filterItems[pdiv.filterColumn].filterData);
				if(pdiv.form.cboOperater.index == 0) pdiv.form.cboOperater.set_index(1);
			}
		}
		else
		{
			if(pdiv.filterType == "combocontrol" || pdiv.filterType == "combotext")
			{
				pdiv.form.setFilterType();
				var i, len;
				var sValue;
				for(i=0;i<pdiv.form.dsCombo.getRowCount();i++)
				{
					pdiv.form.dsCombo.setColumn(i, "chk", 0);
				}
				// pdiv.form.grdCombo.setCellProperty("Head", 0, "text", 0);
				// 체크박스
				pdiv.form.chkHeader.set_value(0);
			}
			else
			{
				pdiv.form.edtFilter.set_value("");
				pdiv.form.calFilter.set_value("");
				if(pdiv.form.cboOperater.index == 0) pdiv.form.cboOperater.set_index(1);
			}
		}		
		
		// 팝업창
		var nPdvHeight = 40;
		var nPdvWidth = 380;
		if(pdiv.filterType == "combocontrol" || pdiv.filterType == "combotext")
		{
			nPdvHeight = 190;
			nPdvWidth = 250;
		}
		
		pdiv.trackPopupByComponent(obj, rect.left, rect.top + rect.height, nPdvWidth, nPdvHeight);
	}
	//20230315 필터, 컬럼 기능 추가 끝
	
};

/**
* @class  헤더에서검색 적용
* @param  {Object} objGrid	- 대상그리드
* @return  N/A
* @example this._gfnHeadFindExecute(this.grdMain);	
*/
pForm._gfnHeadFindExecute = function (objGrid)
{
	var headInfo = objGrid._headFilterInfo;
	var headTxt, cond;
	var filterstr = "";	
	
	if(this.gfnIsNull(headInfo)) return;
	
	for(var i=0;i<headInfo.length;i++) {
		if(!headInfo[i]) continue;
		headTxt = objGrid.getCellProperty("head", i, "text");
		if(headInfo[i].col && (headTxt && headTxt != "")) {
			if(filterstr!="") filterstr += "&&";
			filterstr += "(" + headInfo[i].col + ".indexOf('" + headTxt + "')>-1)";
		}
	}
	var dsGrd = objGrid.getBindDataset();
	dsGrd.filter(filterstr);
};


/**
* @class  마우스우클릭시 표현될 팝업메뉴생성 / 그리드 이벤트 생성
* @param  {Object} objGrid	- 대상그리드
* @param  {Array} arrProp	- 제공 옵션 배열
* @return  N/A
* @example this._gfnMakeGridPopupMenu(this.grdMain, arrProp);	
*/
pForm._gfnMakeGridPopupMenu = function (objGrid, arrProp)
{
	var objApp 		 = nexacro.getApplication();
	var objMenuDs 	 = objApp.gdsGridPopupMenu;
	var objParentForm= objGrid.parent;
	
	objGrid.orgformat2 = objGrid.getFormatString();
	
	// 팝업메뉴 생성용 데이터셋 추가
	var sPopupDsMenu = "dsPopupMenu_" + objGrid.name + "_" + this.name;
	var objPopupDs 	 = this[sPopupDsMenu];
	if(!objPopupDs)
	{
		objPopupDs = new Dataset(sPopupDsMenu);
		this.addChild(sPopupDsMenu, objPopupDs); 
	}
	objPopupDs.set_updatecontrol(false);
	objPopupDs.set_enableevent(false);
	objPopupDs.filter("");
	objPopupDs.copyData(objApp.gdsGridPopupMenu);
	var sMenu;
	for (var i=0; i<arrProp.length; i++) 
	{
		if(arrProp[i] == "colfix" && objGrid.autofittype == "col") continue;
		
		for (var j=0; j<objPopupDs.rowcount; j++)
		{
			sMenu = objPopupDs.getColumn(j, "grp");
			if (sMenu == arrProp[i])
			{
				//20230726 팝업메뉴에서 메뉴에 대한 설정과 해제가 반전되도록 처리
				//objPopupDs.setColumn(j, "enable", "true");
				//20230726 시작
				var grdMenuId = objPopupDs.getColumn(j, "id");
		
				//"sort"는 기본기능이라면 초기에는 sortfree(정렬안함)을 보여준다.
				if (grdMenuId=="sort") {
					objPopupDs.setColumn(j, "enable",     "false");
					objPopupDs.setColumn(j, "enableMenu", "false");	
				}else if (grdMenuId=="sortfree") {
					objPopupDs.setColumn(j, "enable",     "true");
					objPopupDs.setColumn(j, "enableMenu", "true");	
				}else {
		
					//id에 "free" 들어있는 메뉴는 처음에 보이지 않게 설정하기 - 2023.07.20 추가함
					if (!this.gfnIsNull(grdMenuId) && grdMenuId.indexOf("free")>-1 && grdMenuId.indexOf("filter")<0) {
						//colhidefreeNew :예외처리
						if (grdMenuId=="colhidefreeNew")
							objPopupDs.setColumn(j, "enable", "true");
					}else {
						objPopupDs.setColumn(j, "enable", "true");		
					}
				}
				//20230726 끝
			}
		}
	}
	objPopupDs.filter("enable=='true'");					
	var sPopMenu = "popMenu_"+objGrid.name+"_"+this.name;
	var objPopMenu 	 = this[sPopMenu];
	if(!objPopMenu) {
		objPopMenu = new PopupMenu(sPopMenu, 0, 0, 100, 100);
		this.addChild(sPopMenu, objPopMenu);
		objPopMenu.set_innerdataset(sPopupDsMenu);
		objPopMenu.set_captioncolumn("caption");
		objPopMenu.set_enablecolumn("enableMenu");
		objPopMenu.set_idcolumn("id");
		objPopMenu.set_levelcolumn("level");
		objPopMenu.addEventHandler("onmenuclick", this.gfnPopupmenu_onmenuclick, this);
		objPopMenu.show();
		objPopMenu.set_itemheight(57);
	}
	
	//20230315 필터, 컬럼 기능 추가 시작
	// col hide 속성
	if(arrProp.indexOf("colhide") < 0)
	{
		for (var i = objPopupDs.rowcount - 1; i > -1; i--) 
		{
			if (objPopupDs.getColumn(i, "lineDiv") == "colhide" ) {
				objPopupDs.deleteRow(i);
			}
		}
	}	
	
	//col hide 관련 재조합
	for(var i=0; i<arrProp.length; i++){
		for(var j=0; j<objPopupDs.rowcount; j++){
			var sMenu = objPopupDs.getColumn(j,"id");
			var sWordkey = null;
			if( this.gfnIsNull(sMenu) ) continue;
			
			if(!this.gfnIsNull(sWordkey)){
				//var nUpRow = objPopupDs.findRow("id", sWordkey);
				//objPopupDs.setColumn(j, "caption", this.gfnGetWord(sWordkey,"G"));
				objPopupDs.setColumn(j, "caption", "Show All Column");
			}
			if( sMenu.indexOf(arrProp[i]) > -1 ){
				if(sMenu == "colhidefree") //show 컬럼은 기본 enable이 false. 숨겨져있는 컬럼이 존재하는 경우 리스트로 나와야 함.
				{
					objPopupDs.setColumn(j, "enableMenu", "false");								
				}
				
				
				if( objPopupDs.getColumn(j, "level") == 1){
					var sUpMenu = objPopupDs.getColumn(j, "upmenu");
					var nUpRow = objPopupDs.findRow("id", sUpMenu);
					if(nUpRow > -1) objPopupDs.setColumn(nUpRow, "enableMenu", "true");
				}
			}
		}
	}
	//20230315 필터, 컬럼 기능 추가 끝
	objPopMenu.grid = objGrid;
	objGrid.popupMenu = objPopMenu;
	objPopupDs.set_enableevent(true);
	
	if(objPopupDs.findRow("bandtype", "head")>=0)
	{
		objGrid.addEventHandler("onheadclick", this.gfnGrid_onheadclick, this);
	}

	objGrid.addEventHandler("onrbuttondown", this.gfnGrid_onrbuttondown, this);
	
	
	//현재 gdsGridPopupMenu에 없는 컬럼임
	var nFindRow = objPopupDs.findRow("id", "filterhead");
	if(nFindRow>=0) {
		var nCnt = objGrid.getFormatRowCount();
		var nBodyCnt = 0;
		for(var i=0;i<nCnt;i++) {
			if(objGrid.getFormatRowProperty(i, "band") == "body") {
				nBodyCnt++;
				objGrid._bodyrowsize = objGrid.getFormatRowProperty(i, "size");
			}
		}
		objGrid._bodyrowcnt = nBodyCnt;
		if(nBodyCnt == 1) {
			objGrid.addEventHandler("onexpanddown", this._gfnGrid_onexpanddown, this);
		} else {
			objPopupDs.setColumn(nFindRow, "enable", "false");
		}
	}
};

/**
* @class Grid에 기능 추가
* @param {Object} objGrid	- 대상그리드
* @return N/A
* @example this.gfnSetGrid(this.grdMain);	
*/
pForm.gfnSetGrid = function(objGrid)
{
	var objApp = nexacro.getApplication();
	if(objApp.gvUseGridContextMenu != true) return;
	
	// Grid의 UserProperty 설정
	var arrProp = this._getGridUserProperty(objGrid);
	// 설정할 속성이 없을땐 리턴
	if(this.gfnIsNull(arrProp)) return;
	
	objGrid.arrprop = arrProp;
	if(arrProp.indexOf("sort")>=0) objGrid.uFun_sort = true;
	this._gfnGridAddProp(objGrid);	//20230315 필터, 컬럼 기능 추가 
	
	// 복사&붙여넣기 여부에 따라 관련 셋팅
	if(arrProp.indexOf("cellcopypaste")>=0) this.gfnSetGridCopyPaste(this, objGrid);
	
	// 그리드가 tree 이면 treestate 컬럼 지정
	if (this.gfnIsNotNull(objGrid._treeCellinfo))
	{
		if (this.gfnIsNotNull(objGrid._treeCellinfo.treelevel._value))
		{
			this.gfnSetGridBindTreeState(this, objGrid);
		}
	}
	
	// popupmenu 생성 및 Event 생성 : 성능을 위해 timer로 처리
	nexacro._OnceCallbackTimer.callonce(this, function () {
		this._gfnMakeGridPopupMenu(objGrid, arrProp);
	}, 10);
};	


/**
* @class Grid에 Sort, Filter, 전체선택 초기화
* @param {Object} objGrid	- 대상그리드
* @return N/A
* @example this.gfnClearUserFunction(this.grdMain);	
*/
pForm.gfnClearUserFunction = function (objGrid) 
{
	objGrid.set_enableevent(false);

	var nColCnt = objGrid.getCellCount("head");
	var sText , sRepText;
	var filterInfos = objGrid.filterInfos;

	for (var ii = 0; ii < nColCnt; ii++) 
	{
		//체크박스 초기화
		if (objGrid.getCellProperty("head", ii, "displaytype") == "checkboxcontrol" && objGrid.getCellProperty("head", ii, "text") == "1") 
		{
			objGrid.setCellProperty("head", ii, "text", "0");
		}

		//소트 이미지 초기화
		sText = objGrid.getCellProperty("head", ii, "text");
		if (sText) 
		{
			sRepText = objGrid.getCellProperty("head",ii,"text").replace(this.GridConfig.sort.ascText,"").replace(this.GridConfig.sort.descText, "");
			objGrid.setCellProperty("head", ii, "text", sRepText);
		}
	}

	// filterNew 필터상태 초기화.
    for (var p in filterInfos)
    {
        if (!filterInfos.hasOwnProperty(p))
		{
			objGrid.set_enableevent(true);
			return;
		}	
	
        filterInfo = filterInfos[p];
 
		if (filterInfo.show == "Y") 
		{
			//header가 2줄일때 merge될때 처리 
			//컬럼(p) --> body cell index
			var nIndex = objGrid.getBindCellIndex( "body", p);
			//body index -> body col
			var nBodyCol  = objGrid.getCellProperty("body", nIndex, "col");		
			//body col -> head index
			nCell = this._gfngetHeadCellIdxByBodyCol(objGrid , nBodyCol);

 			objGrid.setCellProperty("head", nCell, "expandshow", "hide");
 			objGrid.setCellProperty("head", nCell, "expandsize", 0);
 			objGrid.setCellProperty("head", nCell, "cssclass", filterInfo.baseCssclass);
		}		
    }	
	
	objGrid.filterItems = {};	
	this._gfnGridExpandInit(objGrid);

	var objDs = objGrid.getBindDataset();
	objDs.set_keystring("");		
	objDs.set_filterstr("");
	
	objGrid.set_enableevent(true);
};

/**
* @class Grid에 Sort 취소
* @param {Object} objGrid	- 대상그리드
* @param {Number} nCell - 컬럼인덱스
* @return N/A
* @example this.gfnClearSortMark(this.grdMain, 0);	
*/
pForm.gfnClearSortMark = function (objGrid, nCell) {
	var nColCnt = objGrid.getCellCount("head");
	var sText , sRepText;
	
	if(nCell === null || nCell === undefined) this._issortmark = false;

	for (var ii=0; ii < nColCnt; ii++) 
	{
		if (objGrid.getCellProperty("head", ii, "displaytype") == "checkboxcontrol" ||
			objGrid.getCellProperty("head", ii, "edittype") == "checkbox") continue;
		
		sText = objGrid.getCellProperty("head", ii, "text");
		if(sText) {
			sRepText = objGrid.getCellProperty("head",ii,"text").replace(this.GridConfig.sort.ascText,"").replace(this.GridConfig.sort.descText, "");
			objGrid.setCellProperty("head", ii, "text", sRepText);
		}
	}
};

/**
* @class  그리드헤드클릭시 체크박스인 경우 전체 선택
* @param {Object} objGrid - 대상그리드
* @param {Evnet}  e	   - 헤드클릭이벤트
* @return  N/A
* @example objGrid.gfnGridSelectAllCheckbox(obj, e);
*/
pForm.gfnGridSelectAllCheckbox = function(objGrid, e)
{
	if (objGrid.readonly == true) return true;
	var nCell = e.cell;
	var nCol = e.col;
	if (objGrid.getCellProperty("head", nCell, "edittype") != "checkbox") return false;
	if (objGrid.getCellProperty("body", nCol, "edittype") != "checkbox") return false;
	
	var dsObj = objGrid.getBindDataset();
	var strChkCol = objGrid.getCellProperty("body", nCol, "text");
	if(!strChkCol || strChkCol == "" || (strChkCol.indexOf("bind:") < 0)) return false;
	strChkCol = strChkCol.split("bind:").join("");
	
	var strVal;
	var sTxt = objGrid.getCellProperty("head", nCell, "text");
	if(	!sTxt || sTxt == "" || sTxt == "0" ) {
		strVal = "1";
	} else {
		strVal = "0";
	}
	objGrid.setCellProperty( "head", nCell, "text", strVal);
	dsObj.set_enableevent(false); 
	for ( var r = 0 ; r < dsObj.getRowCount() ; r++ ) {
		dsObj.setColumn(r, strChkCol, strVal);  
	}
	/*
	if(!dsObj._ischeckevent) {
		// check column이 uncheck되면 head check도 변경한다.	- check box는 1개만 있다는 가정임
		dsObj._ischeckevent = true;
		dsObj.addEventHandler("oncolumnchanged",
								function(obj,e) {
									if(e.columnid == strChkCol && e.newvalue!="1") {
										objGrid.setCellProperty( "head", nCell, "text", e.newvalue);
									}
								},
								this);
	}
	*/
	dsObj.set_enableevent(true);	
	dsObj = null;
	
	return true;
};

// 그리드 우클릭 메뉴 선택 후
pForm.gfnSelectPopupmenu = function (sSelectId, oDs)
{
	if (this.gfnIsNull(sSelectId))	return;
	
	var dsFilterstr = oDs.filterstr;	//그리드우클릭메뉴 filterstr
	oDs.filter("");

	var nRow = oDs.findRow("id", sSelectId);
	oDs.setColumn(nRow,"enable", "false");
	oDs.setColumn(nRow,"enableMenu", "false");

	var bFlag = "true";
	var unSelectId;
	if (sSelectId.indexOf("free")>-1) {
		unSelectId = sSelectId.replace("free","");
	}else {	
		unSelectId = sSelectId+"free";
	}
	
	nRow = oDs.findRow("id", unSelectId);
	oDs.setColumn(nRow,"enable", bFlag);
	oDs.setColumn(nRow,"enableMenu", bFlag);
	//trace("sortfree:"+nRow,  oDs.getColumn(nRow,"enableMenu") );

	oDs.filter(dsFilterstr);
};		
			
/**
* @class  gfnCreatePopupMenu 내부함수로 팝업메뉴 클릭 시 발생하는 이벤트
* @param {Object} objGrid	- 대상그리드
* @param {Evnet}  e 		- 팝업메뉴클릭이벤트
* @return N/A
* @example objPopMenu.addEventHandler("onmenuclick", this.gfnPopupmenu_onmenuclick, this);
*/
pForm.gfnPopupmenu_onmenuclick = function (objMenu, e)
{
	var sSelectId   = e.id;
	var objGrid 	= objMenu.grid;
	var nCellIndex 	= objMenu.cellindex;	
	var nRowIndex  	= objMenu.rowindex;
	var nColIndex  = objMenu.colindex;
	var popDs = objGrid.popupMenu.getInnerDataset();
	//var dsFilterstr = popDs.filterstr;	//그리드우클릭메뉴 filterstr

	switch(sSelectId) 
	{
		case "sort":	//sort
			objGrid.uFun_sort = true;
			
			this.gfnSelectPopupmenu(sSelectId, popDs);
			break;
		case "sortfree":	//cell 선택
			objGrid.uFun_sort = false;
			this.gfnClearSortMark(objGrid, nCellIndex);
			this.gfnSelectPopupmenu(sSelectId, popDs);
			break;			
		case "colfix":	//틀고정 열
			this._gfnGridcellFix(objGrid, nCellIndex, nRowIndex);
			this.gfnSelectPopupmenu(sSelectId, popDs);
			break;
		case "colfixfree":	//틀고정 열 해제
			this._gfnGridCellFree(objGrid);
			this.gfnSelectPopupmenu(sSelectId, popDs);
			break;
		case "rowfix":	//틀고정 행
			if(nRowIndex >=0) {
				objGrid.setFixedRow(nRowIndex);
				this.gfnSelectPopupmenu(sSelectId, popDs);
			}
			break;
		case "rowfixfree":	//틀고정 행 해제
			objGrid.setFixedRow(-1);
			this.gfnSelectPopupmenu(sSelectId, popDs);
			break;
		case "filter":		//필터팝업
			this._gfnGridFilter(objGrid);
			//this.gfnSelectPopupmenu(sSelectId, popDs);
			break;
		case "filterfree":	//필터팝업해제
			this._gfnGridCellFilterFree(objGrid);
			//this.gfnSelectPopupmenu(sSelectId, popDs);
			break;
		//20230315 필터, 컬럼 기능 추가 시작	
		case "filterfreeNew"://필터 전체 해제
			this._gfnGridCellFilterFreeApplyCss(objGrid);
			break;
		case "showcolfilter"://필터 컬럼 설정
			this._gfnGridFilterShowCell(objGrid, objMenu.cellindex);
			break;
		case "hidecolfilter"://필터 컬럼 해제
			this._gfnGridFilterHideCell(objGrid , objMenu.cellindex);
			break;	
		case "colhideNew":	//컬럼 숨기기
			this._gfnSelectColHide(objGrid, nCellIndex, nColIndex)
			break;
		case "colhidefreeNew"://컬럼 숨기기 해제
			this._gfnGridColHideFree(objGrid);
			break;	
		//20230315 필터, 컬럼 기능 추가 끝	
		case "colhide":	//컬럼숨기기 팝업
			this._gfnGridColHideShow(objGrid, nRowIndex);
			break;			
		case "find":	//데이터찾기
			this._gfnGridDataFind(objGrid, nColIndex, nRowIndex);
			break;			
		case "scrolldefault":	//스크롤기본
			objGrid.set_fastvscrolltype("default");
			break;	
		case "scrollmiddle":	//스크롤 중앙
			objGrid.set_fastvscrolltype("centerdisplay");
			break;	
		case "scrollall":	//스크롤 top,center,bottom
			objGrid.set_fastvscrolltype("topcenterbottomdisplay");
			break;	
		case "scrollpos":	//스크롤 top,center,bottom
			objGrid.set_fastvscrolltype("trackbarfollow");
			break;	
		case "selectrow":	//cell 선택
			objGrid.set_selecttype("row");
			break;	
		case "selectcell":	//cell 선택
			objGrid.set_selecttype("cell");
			break;	
		case "selectmultirow":	//cell 선택
			objGrid.set_selecttype("multirow");
			break;	
		case "selectarea":	//cell 선택
			objGrid.set_selecttype("area");
			break;	
		case "initial":	//초기화
			objGrid.set_formats("<Formats>" + objGrid.orgformat2 + "</Formats>");
			this.gfnSetGrid(objGrid);
			break;
		default:
		//20230315 필터, 컬럼 기능 추가 시작
			//컬럼별 숨기기 해제
			if(sSelectId.substr(0,15) == "colhidefreeNew_")
				{
					// 칼럼 숨기기 취소
					var showIndex = sSelectId.substr(15);
					if (showIndex == "all") {
						this._gfnGridColHideFree(objGrid);
					} else {
						showIndex = parseInt(showIndex);
						this._gfnGridColHideFreeIdx(objGrid, showIndex);
					}
				}
		//20230315 필터, 컬럼 기능 추가 끝
		break;
	}
};

/**
* @class body cell index로 binding 된 컬럼명을 얻어온다.
* @param {Object}  objGrid - 대상 Grid Component
* @param {Number}  nIndex - grid cell index
* @return{String} column id
* @example this.gfnGetBindColName(obj, e.cell);	
*/  
pForm.gfnGetBindColName = function(objGrid, nIndex) 
{
	var text = "";
	var columnid = "";
	var subCell = objGrid.getCellProperty("body", nIndex, "subcell");
	if ( subCell > 0 )
	{
		text = objGrid.getSubCellProperty("body", nIndex, 0, "text");
	} else 
	{
		text = objGrid.getCellProperty("body", nIndex, "text");
	}
	
	if (!this.gfnIsNull(text) )
	{
		if ( text.search(/^BIND\(/) > -1 ) 
		{	
			columnid = text.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length-1);
		} else if ( text.search(/^bind:/) > -1 ) 
		{
			columnid = text.replace(/^bind:/, "");
		}
	}
	return columnid;
};

/**
* @class 유저헤더사용여부반환
* @param {Object} objGrid - 대상그리드
* @return true/false
* @example this._gfnGridUserHeaderFlg(this.grdMain);
*/
pForm._gfnGridUserHeaderFlg = function (objGrid)
{
	var arr = objGrid.arrprop;
	var bUserHeader = false;
	for (var i=0; i<arr.length; i++) 
	{
		if (arr[i] == "userheader") 
		{
			bUserHeader = true;
		}
	}
	return bUserHeader;
};

//////////////////////////////////////////////////////////////////////////Popupmenu//////////////////////////////////////////////////////////////////////////
/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	  셀고정(colfix)
* @param {Object} objGrid  - 대상그리드
* @param {Number} nCellIdx - 셀고정 셀인덱스
* @param {Number} nRowIdx  - 셀고정 로우 인덱스
* @return N/A
* @example this._gfnGridcellFix(this.grdMain, 1, 2);	
*/
pForm._gfnGridcellFix = function (objGrid, nCellIdx, nRowIdx)
{
	var sBandType;
	
	if(nRowIdx == -1) sBandType = "Head";
	else if(nRowIdx == -2) sBandType = "Summary";
	else sBandType = "Body";
	
	var nCol 	 = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "col"));
	var nColSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "colspan"));
	var nRowSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "rowspan"));

	var nMaxCol = 0;
	var i;
	var nRealCol;
	var nRealColSpan;
	var nRealCol_end;
	
	objGrid.set_enableredraw(false);
	
	objGrid.setFormatColProperty(0, "band", "body");	
	
	for (i=0; i<objGrid.getCellCount("Head"); i++)
	{
		nRealCol = nexacro.toNumber(objGrid.getCellProperty("Head", i, "col"));
		nRealColSpan = nexacro.toNumber(objGrid.getCellProperty("Head", i, "colspan"));
		nRealCol_end = nRealCol+nRealColSpan-1;
		if ( nRealCol == nCol||nRealCol_end==nCol)
		{
			if(nRealColSpan>1)
			{
				nCol = nRealCol_end;
			} else
			{
				nCol = nRealCol_end;
			}
		} else
		{
			objGrid.setCellProperty("Head", i, "line", "");
		}
	}
	
	for (i=0; i<objGrid.getCellCount("Body"); i++)
	{
		if (objGrid.getCellProperty("Body", i, "col") == nCol)
		{	//기존 css 영향도가 높아 border만 변경함
			objGrid.setCellProperty("Body", i, "border", "0px none, 1px solid #d7d9e3, 1px solid #eeeeee, 0px none");
		}
		else
		{
			objGrid.setCellProperty("Body", i, "border", "");
		}
	}	
			
	objGrid.setCellProperty("Head", nCol, "border", "1px solid #d7d9e3");		
	objGrid.setFormatColProperty(nCol, "band", "left");	
	objGrid.set_enableredraw(true);
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	  셀고정해제(colfree)
* @param {Object} objGrid - 대상그리드
* @return N/A
* @example this._gfnGridCellFree(this.grdMain);	
*/
pForm._gfnGridCellFree = function(objGrid)
{
	for(i=0; i< objGrid.getFormatColCount(); i++)
	{		
		objGrid.setFormatColProperty(i, "band", "body");	
	}
		
	for (i=0; i<objGrid.getCellCount("Body"); i++)
	{
		objGrid.setCellProperty("Body", i, "border", "");
	}	
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	  셀필터(cellFilter)
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example this._gfnGridFilter(this.grdMain);	
*/
pForm._gfnGridFilter = function(objGrid)
{
	var sTitle = "그리드 필터 설정 팝업";
	var objArg = {pvGrid:objGrid};
	
	var objOption = {title:sTitle,
					titlebar:true};
	var sPopupCallBack = "gfnGridFilterCallback";
	this.gfnOpenPopup( "cmmGridFilter", "common::cmmGridFilter.xfdl", objArg, sPopupCallBack, objOption);	
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	  셀필터해제(cellfilterfree)
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example this._gfnGridCellFilterFree(this.grdMain);	
*/
pForm._gfnGridCellFilterFree = function(objGrid)
{
    if(objGrid._appendHeadRowIndex >=0) {
        objGrid.deleteContentsRow("head", objGrid._appendHeadRowIndex);
		objGrid._appendHeadRowIndex = null;
	}
	var objDs = objGrid.getBindDataset();
	objDs.set_filterstr("");
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	  컬럼 숨기기/보이기
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example this._gfnGridColHideShow(this.grdMain);	
*/
pForm._gfnGridColHideShow = function(objGrid)
{
	var sTitle = "그리드 컬럼 숨기기/보이기";
	
	var objArg = {pvGrid:objGrid};
	var objOption = {title:sTitle,
					titlebar:true};
	var sPopupCallBack = "gfnColumnHidCallback";
	this.gfnOpenPopup( "cmmColumnHide","common::cmmColumnHide.xfdl", objArg, sPopupCallBack, objOption);	
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	  데이터 찾기
* @param {Object} objGrid - 대상그리드	
* @param {Number} nColIndex - 대상컬럼인덱스
* @param {Number} nRowIdx - 시작로우인덱스
* @return N/A
* @example this._gfnGridDataFind(this.grdMain);	
*/
pForm._gfnGridDataFind = function (objGrid, nColIndex, nRowIdx)
{
	var sTitle = "그리드 데이터 찾기";
	var orgselecttype = objGrid.selecttype;
	
	var oArg = {pvGrid:objGrid, pvStrartRow:nRowIdx, pvSelectCell:nColIndex, pvSelectType:orgselecttype};
	
	var objOption = {title:sTitle,
					titlebar:true};
	var sPopupCallBack = "gfnDataFindCallback";
	this.gfnOpenPopup( "cmmFindData","common::cmmFindData.xfdl", oArg, sPopupCallBack, objOption);
};

//////////////////////////////////////////////////////////////////////////POPUPMENU CALLBACK///////////////////////////////////////////////////////////
/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	  그리드 필터 팝업 콜백
* @param {String} sId - popupid	
* @param {String} sReturn - return value	 
* @return N/A	
* @example this.gfnGridFilterCallback(sId, sReturn);	
*/
pForm.gfnGridFilterCallback = function (sId, sReturn)
{
	//TODO
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	  그리드 컬럼숨기기/보이기 팝업 콜백
* @param {String} sId - popupid	
* @param {String} sReturn - return value	 
* @return N/A	
* @example this.gfnColumnHidCallback(sId, sReturn);	
*/
pForm.gfnColumnHidCallback = function (sId, sReturn)
{
	//TODO
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	 그리드 데이터 찾기 콜백
* @param {String} sId - popupid	
* @param {String} sReturn - return value	 
* @return N/A	
* @example this.gfnDataFindCallback(sId, sReturn);	
*/
pForm.gfnDataFindCallback = function (sId, sReturn)
{
	//TODO
};

/**
* @class head cell에 match되는 body cell을 얻어온다
* @param {Object}  objGrid - 대상 Grid Component
* @param {Number} nHeadCellIndex - head cell index
* @param {Number} bUseColspan - Colsapn 사용여부
* @return{Number}  body cell index
* @example this._gfnGridGetBodyCellIndex(this.grid, 0);
*/ 
pForm._gfnGridGetBodyCellIndex = function(objGrid, nHeadCellIndex, bUseColspan) 
{
	if (this.gfnIsNull(bUseColspan)) bUseColspan=false;
	
	// Max Head Row Index
	var nMaxHeadRow = 0;
	for (var i=0, len=objGrid.getCellCount("head"); i<len; i++) 
	{
		var row = objGrid.getCellProperty("head", i, "row");
		if (nMaxHeadRow < row) 
		{
			nMaxHeadRow = row;
		}
	}
	
	// Max Body Row Index
	var nMaxBodyRow = 0;
	for (var i=0, len=objGrid.getCellCount("body"); i<len; i++) 
	{
		var row = objGrid.getCellProperty("body", i, "row");
		if (nMaxBodyRow < row) 
		{
			nMaxBodyRow = row;
		}
	}
	
	if (nMaxHeadRow == 0 && nMaxBodyRow == 0) 
	{
		bUseColspan = true;
	}
	
	// Body Row 가 1개 이상일 경우
	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.			
	var nCellIndex = -1;
	var sRow = -1;
	var nRow = parseInt(objGrid.getCellProperty("head", nHeadCellIndex, "row"));
	var nCol = parseInt(objGrid.getCellProperty("head", nHeadCellIndex, "col"));
	var nColspan = parseInt(objGrid.getCellProperty("head", nHeadCellIndex, "colspan"));				
	
	if (nMaxHeadRow > nMaxBodyRow) 
	{
		sRow = nRow - (nMaxHeadRow - nMaxBodyRow);
		sRow = (sRow < 0 ? 0 : sRow);
	} else 
	{
		sRow = nRow;
	}
	
	var cRow, cCol, cColspan, cRowspan;
	
	for (var i=0, len=objGrid.getCellCount("body"); i<len; i++) 
	{
		cRow = parseInt(objGrid.getCellProperty("body", i, "row"));
		cCol = parseInt(objGrid.getCellProperty("body", i, "col"));	
		cColspan = parseInt(objGrid.getCellProperty("body", i, "colspan"));					
		cRowspan = parseInt(objGrid.getCellProperty("body", i, "rowspan"));
		if( cRowspan > 1 ) 
		{
			if (bUseColspan) 
			{
				if (sRow >= cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					nCellIndex = i;
					break;
				}		
			} else 
			{
				if (sRow >= cRow && nCol == cCol && nColspan == cColspan) 
				{		
					nCellIndex = i;
					break;
				}
			}
		} else 
		{	
			if (bUseColspan) 
			{
				if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					nCellIndex = i;
					break;
				}		
			} else 
			{
				if (sRow == cRow && nCol == cCol && nColspan == cColspan) 
				{		
					nCellIndex = i;
					break;
				}
			}
		}
	}
	return nCellIndex;
};

/**
* @class Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
* @param {Object} objGrid - 대상 Grid Component
* @param {String} sBand - 얻고자 하는 cell 의 band (head/body/summ);
* @param {Number} nIndex - 얻고자 하는 cell 의 index
* @return {Object} cell object
* @example this._gfnGridGetGridCellObject(grid, "head", headCellIndex);
*/
pForm._gfnGridGetGridCellObject = function(objGrid, sBand, nIndex)
{
	// 내부속성을 통해 얻어온다.
	var objCell;
	
	var format = objGrid._curFormat;
	if (format) 
	{
		if (sBand == "head") 
		{
			objCell = format._headcells[nIndex];
		} else if (sBand == "body") 
		{
			objCell = format._bodycells[nIndex];
		} else if (sBand == "summ" || sBand == "summary") 
		{
			objCell = format._summcells[nIndex];
		}
	}
	return objCell;
};

/************************************************************************************************
*  Grid CELL COPY AND PASTE 처리
************************************************************************************************/
/**
* @class  Grid 복사&붙여넣기 설정
* @param {Object} objForm - Form 객체
* @param {Object} cell object
* @return N/A
* @example this.gfnSetGridCopyPaste(this, objGrid);
*/
pForm.gfnSetGridCopyPaste = function (objForm, objGrid)
{
	var objConfig = {objGrid : objGrid};
	objForm.config = objConfig;

	if (system.navigatorname == "nexacro" || system.navigatorname == "IE" && system.navigatorversion < 12) 
	{
		objForm.config.colSeperator = "\t"; 

		objForm.config.objGrid.addEventHandler("onkeydown", this._gfnGrdCopyPasteStateChk, objForm);
		objForm.config.objGrid.addEventHandler("onkeyup"  , this._gfnGrdCopyPaste        , objForm);  
	} else
	{
		objForm.config.colSeperator = "\t";  
		objForm.config.targetGrid  = undefined;
		objForm.config.targetEvent = undefined;

		objForm.addEventHandler("ontimer", this._gfnBlinkTimerHandler, objForm); 
		objForm.config.objGrid.addEventHandler("onkeydown", this._gfnGrdCopyPasteEtc, objForm);
	}
}

/**
* @class  Grid 붙여넣기
* @param {Object} objForm - Form 객체
* @param {String} clipText - 붙여넣기 할 값
* @return N/A
* @example this.gfnSetPasteData(this, objGrid);
*/
pForm.gfnSetPasteData =  function(objForm, clipText)
{
	var obj = objForm.config.targetGrid;
	var e = objForm.config.targetEvent;

	obj.set_enableevent(false);
	obj.set_enableredraw(false); 

	var ds = obj.getBindDataset();
	ds.set_enableevent(false); 

	var grdCellCount = obj.getCellCount("body");
	var rowCount = ds.getRowCount();

	var objRowCol = this.gfnGetGridSelRowCol(obj);
	var startrow = objRowCol.selectstartrow;
	var endrow   = objRowCol.selectendrow;
	var startcol = objRowCol.selectstartcol;
	var endcol   = objRowCol.selectendcol; 

	var currRow = startrow;
	var cellIndex = startcol;

	copyData = clipText;
	var seperator = objForm.config.colSeperator;

	var rowData = copyData.split(/[\n\f\r]/); 
	var rowDataCount = rowData.length - 1;
	var checkIndex = {}; 

	for (var i = 0; i < rowDataCount; i++) 
	{
		if(rowCount <= currRow)
		{
			ds.addRow();
		}

		var columnData = rowData[i].split(seperator);
		var columnLoopCount = cellIndex + columnData.length;

		if(columnLoopCount > grdCellCount) 
		{
			columnLoopCount = grdCellCount;
		}

		var k = 0;
		for(var j = cellIndex; j < columnLoopCount; j++)
		{
			var colid = obj.getCellProperty("body", j, "text").substr(5);
			var tempValue = columnData[k];
			
			if(!this.gfnIsNull(tempValue))
			{
				ds.setColumn(currRow, colid, tempValue);
			}

			k++;         
		}

		currRow++;
	}         

	ds.rowposition = currRow; 

	endrow = endrow + rowDataCount - 1;
	endcol = columnLoopCount - 1;  
		 
	obj.set_enableredraw(true);
	obj.set_enableevent(true);
	ds.set_enableevent(true); 

	obj.selectArea(startrow, startcol, endrow, endcol);
		 
	objForm.config.targetEvent = undefined;   
}

/**
* @class  클립보드 대체 textarea 생성
* @param {String} clipText - 붙여넣기 할 값
* @return {Object} textarea
* @example this.gfnCreateElementTextarea(text);
*/
pForm.gfnCreateElementTextarea = function(innerText)
{
	var txtValue = document.createElement('textarea');
	
	txtValue.style.position = 'absolute';
	txtValue.style.left = '-1000px';
	txtValue.style.top = document.body.scrollTop + 'px';
	txtValue.value = innerText;
	document.body.appendChild(txtValue);
	txtValue.select();

	return txtValue;
}

/**
* @class empty target grid 
* @param {Object} objForm - Form 객체
* @return N/A
* @example this.gfnInitBlinkData(obj);
*/
pForm.gfnInitBlinkData = function(objFrom)
{
	var grid = objFrom.config.targetGrid; 
	grid.targetGrid = null;
}

/**
* @class  주어진 문자열을 그리드에서 찾는다.
* @param {Object} grid - 대상그리드	
* @param {String} findText - 찾을 문자열	
* @param {Object} option - 찾기옵션	
* @return {Object} 찾은 열과행
* @example this.gfnFindGridText(this.fv_grid, txt, option);
*/
pForm.gfnFindGridText = function (grid, findText, option)
{
	grid.lastFindText = findText;
	grid.lastFindOption = option;

	// 찾을 옵션
	var direction = option.direction;
	var position = option.position;
	var scope = option.scope;
	var condition = option.condition;
	var strict = option.strict;

	var dataset = grid.getBindDataset();
	if(this.gfnIsNull(grid.lastFindRow)) grid.lastFindRow = 0;
	if(this.gfnIsNull(grid.lastFindCell)) grid.lastFindCell = option.cell;
	
	var startCell = ( position == "current" ? grid.currentcell : grid.lastFindCell );
	var startRow = ( position == "current" ? grid.currentrow : grid.lastFindRow );
	
	// 바꾸기에서 호출시 (option.cell 은 바꾸기에서만 지정)
	if ( scope == "col" && !this.gfnIsNull(option.cell) )
	{
		startCell = option.cell;
	}
	
	var findRow = findCell = -1;
	var rowCnt = dataset.rowcount;
	var bodyCellCnt = grid.getCellCount("body");
			
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
		// 문자열 비교
		if ( this._compareFindText(grid, startRow, startCell, findText, condition, strict) )
		{
			findRow = startRow;
			findCell = startCell;
			break;
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
		grid.lastFindRow = findRow;
		grid.lastFindCell = findCell;
	}
	
	return [findRow, findCell];
};

/**
* @class   주어진 행, 셀 인덱스에 해당하는 그리드 데이터와 <br>
		문자열을 비교하여 찾아진 결과를 반환
* @param {Object} grid - 대상 Grid Component
* @param {Number} row - 찾을 행 인덱스
* @param {Number} cell - 찾을 셀 인덱스
* @param {String} findText - 찾을 문자열
* @param {String} condition - 찾을 조건(equal/inclusion)
* @param {Boolean} strict - 대소문자 구분 (true/false)
* @return {Boolean} - 찾기 여부
* @example this._compareFindText(grid, startRow, startCell, findText, condition, strict) 
*/
pForm._compareFindText = function(grid, row, cell, findText, condition, strict)
{
	var cellText = grid.getCellText(row, cell);
	if( this.gfnIsNull(cellText))return;
	var displayType = grid.getCellProperty("body", cell, "displaytype");
		
	// displayType 이 normal일 경우
	// dataType 을 체크하여 displayType 을 변경
	if ( this.gfnIsNull(displayType) || displayType == "normal" )
	{
		var dataType = this.gfnGetBindColumnType(grid, cell);
		switch(dataType)
		{
			case 'INT' :
			case 'FLOAT' :
			case 'BIGDECIMAL' :
				displayType = "number";
				break;
			case 'DATE' :
			case 'DATETIME' :
			case 'TIME' :
				displayType = "date";
				break;
			default :
				displayType = "string";
		}
	}
	
	// currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 비교
	if ( displayType == "currency" )
	{
		var code = cellText.charCodeAt(0);
		if ( code == 65510 || code == 92 )
		{
			cellText = cellText.substr(1);
		}
		
		code = findText.charCodeAt(0);
		if ( code == 65510 || code == 92 )
		{
			findText = findText.substr(1);
		}
	}

	// 대소문자 구분
	if ( !strict )
	{
		cellText = cellText.toUpperCase();
	}
	// 일치/포함
	if ( condition == "equal" )
	{
		if ( findText == cellText )
		{
			return true;
		}
	}
	else 
	{
		if ( cellText.indexOf(findText) > -1 )
		{			
			return true;
		}
	}

	return false;
};

/**
* @class   데이터의 타입반환
* @param {Object} grid - 대상 Grid Component
* @param {Number} cell - 찾을 셀 
* @return {Object} - 데이터의 타입.
* @example this.gfnGetBindColumnType(grid, cell);
*/
pForm.gfnGetBindColumnType = function(grid, cell)
{
	var dataType = null;
	var dataset = grid.getBindDataset();//this.gfnLookup(grid.parent, grid.binddataset);
	var bindColid = grid.getCellProperty("body", cell, "text");
		bindColid = bindColid.replace("bind:", "");
	
	if ( !this.gfnIsNull(bindColid) )
	{
		var colInfo = dataset.getColumnInfo(bindColid);
		if ( !this.gfnIsNull(colInfo) )
		{
			dataType = colInfo.type;
		}
	}
	
	return dataType;
};

/**************************************************************************
* 각 COMPONENT 별 EVENT 영역
**************************************************************************/
/**
* @class   ctrl and c or v key down check  ( for nexacro & less than ie 11 )
* @param {Object} objGrid - 대상그리드
* @param {Evnet}  e	      - 키이벤트
* @return N/A
* @example objForm.config.objGrid.addEventHandler("onkeydown", this._gfnGrdCopyPasteStateChk, objForm);
*/
pForm._gfnGrdCopyPasteStateChk = function(obj,  e)
{
	if(obj.getCurEditType() != "none") return; //에디트가 아닌 경우만 동작
			
	var keycode = e.keycode;
	// MacOS 에서는 command로 변경
	var keyCtrl = system.osversion.indexOf("Mac") > -1 ? e.metakey : e.ctrlkey;
	//only ctrl key down
	if(keyCtrl && !e.shiftkey && !e.altkey)
	{
		//ctrl + c
		if(keycode == 67)
		{
			obj.bGridCopy = true;
		//ctrl + v
		} else if(keycode == 86)
		{
			obj.bGridPaste = true;
		}
	}
};

/**
* @class  ctrl and c or v key down excute  ( for nexacro & less than ie 11 )
* @param {Object} objGrid - 대상그리드
* @param {Evnet}  e	      - 키이벤트
* @return N/A
* @example objForm.config.objGrid.addEventHandler("onkeyup"  , this._gfnGrdCopyPaste        , objForm);  
*/
pForm._gfnGrdCopyPaste = function(obj,e)
{
	if(obj.getCurEditType() != "none") return; //에디트가 아닌 경우만 동작
	
	var objForm = obj.parent;
	var keycode = e.keycode;
	
	//ctrl + c
	if(obj.bGridCopy == true)
	{
		obj.bGridCopy = false;

		var objRowCol = this.gfnGetGridSelRowCol(obj);
		var startrow = objRowCol.selectstartrow;
		var endrow   = objRowCol.selectendrow;
		var startcol = objRowCol.selectstartcol;
		var endcol   = objRowCol.selectendcol;   

		var copyData = "";
		var colSeperator = objForm.config.colSeperator;

		objForm.config.targetGrid = null;
			  
		for (var i = startrow; i <= endrow; i++) 
		{
			for (var j = startcol; j <= endcol; j++) 
			{       
				var value = obj.getCellValue(i,j);

				if(!this.gfnIsNull(value))
				{
					if (j < endcol) 
					{
						copyData += obj.getCellValue(i,j) + colSeperator;
					} else 
					{
						copyData += obj.getCellValue(i,j);
					}
				}
			}

			if (i < obj.selectendrow)
			{
				copyData += "\r\n";
			}
		}

		copyData += "\r\n";

		//clipboard
		system.clearClipboard();
		system.setClipboard("CF_TEXT",copyData);

		objForm.config.targetGrid = obj;
	
	//ctrl + v
	} else if(obj.bGridPaste == true)
	{
		obj.bGridPaste = false;
		//clipboard
		var copyData = system.getClipboard("CF_TEXT");
		copyData = new String(copyData);
		var colSeperator = objForm.config.colSeperator;
		var rowData = copyData.split("\r\n");
		var rowDataCount = rowData.length - 1;

		if(rowDataCount < 1)
		{
			e.stopPropagation();
			return;
		}

		obj.set_enableevent(false);
		obj.set_enableredraw(false); 
		  
		var ds = obj.getBindDataset();
		ds.set_enableevent(false); 

		var grdCellCount = obj.getCellCount("body");
		var rowCount = ds.getRowCount();

		var objRowCol = this.gfnGetGridSelRowCol(obj);
		var startrow = objRowCol.selectstartrow;
		var endrow   = objRowCol.selectendrow;
		var startcol = objRowCol.selectstartcol;
		var endcol   = 0; //objRowCol.selectendcol;

		var currRow = startrow;
		var cellIndex = startcol;
		var maxColumnCount = 0;
		  
		//check current cell editType 
		for (var i = 0; i < rowDataCount; i++)
		{
			if(rowCount <= currRow)
			{
				ds.addRow();
			}

			var columnData = rowData[i].split(colSeperator);
			var columnLoopCount = cellIndex + columnData.length;

			if(columnLoopCount > grdCellCount) 
			{
				columnLoopCount = grdCellCount;
			}

			if(maxColumnCount < columnLoopCount)
			{
				maxColumnCount = columnLoopCount;
			}

			var k = 0;
			for(var j = cellIndex; j < columnLoopCount; j++)
			{           
				var colid = obj.getCellProperty("body", j, "text").substr(5);      
				var tempValue = columnData[k];

				if(!this.gfnIsNull(tempValue))
				{
					ds.setColumn(currRow, colid, tempValue);
				}

				k++;         
			}
	
			currRow++;
		}         

		ds.rowposition = currRow; 

		endrow = endrow + rowDataCount - 1;
		endcol = maxColumnCount - 1;

		//system.clearClipboard();
			  
		obj.set_enableredraw(true);
		obj.set_enableevent(true);
		ds.set_enableevent(true); 

		obj.selectArea(startrow, startcol, endrow, endcol);    

		objForm.config.targetGrid = obj;
			  
		//grid enableredraw가 false일 경우 
		//event 전파과정에서 error발생을 막기위한 처리.2015.02.25 버전.
		e.stopPropagation(); 
	} 
};

/**
* @class  ctrl and c or v key down check  ( for edge : more than ie 12 & chrome, firefox .. )
* @param {Object} objGrid - 대상그리드
* @param {Evnet}  e	      - 키이벤트
* @return N/A
* @example objForm.config.objGrid.addEventHandler("onkeydown", this._gfnGrdCopyPasteEtc, objForm);
*/
pForm._gfnGrdCopyPasteEtc = function(obj,e)
{
	if(obj.getCurEditType() != "none") return; //에디트가 아닌 경우만 동작

	var objForm = this;
	var keycode = e.keycode;
	
	// MacOS 에서는 command로 변경
	var keyCtrl = system.osversion.indexOf("Mac") > -1 ? e.metakey : e.ctrlkey;
	
	//ctrl + c
	if(keyCtrl && !e.shiftkey && !e.altkey)
	{
		if(keycode == 67)
		{
			var objRowCol = this.gfnGetGridSelRowCol(obj);
			var startrow = objRowCol.selectstartrow;
			var endrow   = objRowCol.selectendrow;
			var startcol = objRowCol.selectstartcol;
			var endcol   = objRowCol.selectendcol;
			var arrRow = objRowCol.arrSelectRow;

			objForm.config.targetGrid = undefined;

			var clipText = "";
			var colSeperator = objForm.config.colSeperator;
			var copyData = [];
			var styleData = [];
					
			if (this.gfnIsNull(arrRow))
			{
				for (var i = startrow; i <= endrow; i++) 
				{
					for (var j = startcol; j <= endcol; j++)
					{
						 var value = obj.getCellValue(i,j);
						 copyData.push(value);
						 
						 if (j < endcol) 
						 {
							clipText += value + colSeperator;
						 } else 
						 {
							clipText += value;
						 }      
					}

					clipText += "\r\n";
				}
			}
			else
			{
				for(i in arrRow) {
					for (var j = startcol; j <= endcol; j++)
					{
						var nRow = arrRow[i];
						var value = obj.getCellValue(nRow,j);
						copyData.push(value);
						
						if (j < endcol) 
						{
							clipText += value + colSeperator;
						} 
						else 
						{
							clipText += value;
						}      
					}

					clipText += "\r\n";
				}
			}

			objForm.config.targetGrid = obj;  

			var ta = this.gfnCreateElementTextarea(clipText);        
			objForm.config.targetGrid["ta"] = ta;  
			   
			objForm.setTimer(777, 100);

			if(!this.gfnIsNull(clipText)) 
			{
				objForm.setTimer(1000, 110);
			}
				   
			e.stopPropagation();    
        //ctrl + v
		} else if(keycode == 86)
		{
			objForm.config.targetGrid = obj;
			objForm.config.targetEvent = e;

			var ta = this.gfnCreateElementTextarea('');
			objForm.config.targetGrid["ta"] = ta;  
			   
			objForm.setTimer(888, 100);  

			e.stopPropagation();   
		}
	}
}

/**
* @class  delay processing data time
* @param {Object} objForm - Form 객체
* @param {Evnet}  e	      - 타이머이벤트
* @return N/A
* @example objForm.addEventHandler("ontimer", this._gfnBlinkTimerHandler, objForm); 
*/
pForm._gfnBlinkTimerHandler = function(obj,e)
{
	var timerid = e.timerid;
	obj.killTimer(timerid);

	if(timerid >= 1000) 
	{
		var remainder = timerid%1000;   
		if(remainder > 8) 
		{
			this.gfnInitBlinkData(obj);
		}
	} else 
	{
		//after copy 
		if(timerid == 777) 
		{   
			var ta = obj.config.targetGrid["ta"];
			if(!ta)
			{
				return; 
			}

			document.body.removeChild(ta);
			obj.config.targetGrid["ta"] = undefined;    
		//after paste
		} else if(timerid == 888)
		{ 
			var ta = obj.config.targetGrid["ta"];    
			if(!ta)
			{
				return; 
			}

			var clipText = ta.value;
			document.body.removeChild(ta);
			this.gfnSetPasteData(obj,clipText);
			obj.config.targetGrid["ta"] = undefined;
		}
	}  
}

/**
* @class copy 및 paste할 row, col 값 얻기
* @param {Object} grid - 대상그리드
* @return{object} json(row, col)
* @example this.gfnGetGridSelRowCol(objGrid);	
*/
pForm.gfnGetGridSelRowCol = function(obj)
{
	var selecttype = obj.selecttype;
	var objRowCol  = {};
	
	if (selecttype == "row") 
	{
		objRowCol.selectstartrow = nexacro.toNumber(obj.currentrow);
		objRowCol.selectendrow   = nexacro.toNumber(obj.currentrow);
		objRowCol.selectstartcol = 0;
		objRowCol.selectendcol   = nexacro.toNumber(obj.getCellCount("body")-1);
	} else if (selecttype == "multirow")
	{
		objRowCol.arrSelectRow	 = obj.getSelectedRows();
		objRowCol.selectstartcol = 0;
		objRowCol.selectendcol   = nexacro.toNumber(obj.getCellCount("body")-1);
	} else if (selecttype == "cell")
	{
		objRowCol.selectstartrow = nexacro.toNumber(obj.currentrow);
		objRowCol.selectendrow   = nexacro.toNumber(obj.currentrow);
		objRowCol.selectstartcol = nexacro.toNumber(obj.currentcol);
		objRowCol.selectendcol   = nexacro.toNumber(obj.currentcol);
	} else if (selecttype == "area")
	{
		objRowCol.selectstartrow = nexacro.toNumber(obj.selectstartrow);
		objRowCol.selectendrow   = nexacro.toNumber(obj.selectendrow);
		objRowCol.selectstartcol = nexacro.toNumber(obj.selectstartcol);
		objRowCol.selectendcol   = nexacro.toNumber(obj.selectendcol);
	} else if (selecttype == "multiarea")
	{
		trace("grid.selecttype=multiarea 기능에서는 copy & paste를 사용할 수 없습니다");
		objRowCol.selectstartrow = -1;
		objRowCol.selectendrow   = -1;
		objRowCol.selectstartcol = -1;
		objRowCol.selectendcol   = -1;
	}
	return objRowCol;
}

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
	  셀필터해제(cellfilterfree) cssclass 적용처리
* @param {Object} objGrid - 대상그리드
* @return N/A
* @example this._gfnGridCellFilterFreeApplyCss(objGrid);
*/
pForm._gfnGridCellFilterFreeApplyCss = function(objGrid)
{		
	objGrid.set_enableevent(false);
	
	var baseCssclass;
	var setCssclass;
	var filterInfos = objGrid.filterInfos;
	var filterInfo;
	var i;
	var sColumn;
	var nCell;
	if(this.gfnIsNull(filterInfos))
	{
		objGrid.set_enableevent(true);
		return;
	}
	var sStatus = "";
	
	/* ------------------------------------------------------------------
	//head cell 일괄변경 (무조건 초기화:필터이미지 미표시) START 
	---------------------------------------------------------------------
	// 필터상태 초기화.
    for (var p in filterInfos)
    {
		sStatus = "";
        if (!filterInfos.hasOwnProperty(p))
		{
			objGrid.set_enableevent(true);
			return;
		}
		sStatus = "";
        filterInfo = filterInfos[p];
		filterInfo.show = "N";	//표시
		filterInfo.status = "";	//해당필터정보 미사용
	}
	
	//head cell 일괄변경
	for (var i=0, len=objGrid.getCellCount("head"); i<len; i++) {
		var cssclass = objGrid.getCellProperty("head", i, "cssclass");		
		cssclass = cssclass.replace(this.FILTER_ENABLE_SORTASC_CSS, this.SORT_ASC_CSS);
		cssclass = cssclass.replace(this.FILTER_APPLY_SORTASC_CSS, this.SORT_ASC_CSS);
		cssclass = cssclass.replace(this.FILTER_ENABLE_SORTDESC_CSS, this.cellWFSortD);
		cssclass = cssclass.replace(this.FILTER_APPLY_SORTDESC_CSS, this.cellWFSortD);		
		cssclass = cssclass.replace(this.FILTER_ENABLE_CSS, "");
		cssclass = cssclass.replace(this.FILTER_APPLY_CSS, "");
		objGrid.setCellProperty("head", i, "cssclass", cssclass);
		
		//sort 정보만 존재시 
		if (String(cssclass).toUpperCase().indexOf("SORT") > -1) {
			//trace(i + "> not FILTER>" + cssclass );
			objGrid.setCellProperty("head", i, "expandshow", "show");
			objGrid.setCellProperty("head", i, "expandsize", this.FILTER_ENABLE_IMAGE_SIZE[1]);
		}
		//filter, sort 미존재시 
		else {
			//trace(i + ">hide>" + cssclass );
			objGrid.setCellProperty("head", i, "expandshow", "hide");
			objGrid.setCellProperty("head", i, "expandsize", 0);
		}
	}
	------------------------------------------------------------------
	// head cell 일괄변경 (무조건 초기화:필터이미지 미표시) END
	------------------------------------------------------------------
	*/
	
	//------------------------------------------------------------------
	// head cell FILTER 정보만 삭제(FILTER 사용여부는 유지) START 
	//------------------------------------------------------------------
	// 필터상태 초기화.
    for (var p in filterInfos)
    {
		sStatus = "";
        if (!filterInfos.hasOwnProperty(p))
		{
			objGrid.set_enableevent(true);
			return;
		}
		sStatus = "";
        filterInfo = filterInfos[p];
		
		//빈값일때는 셋팅하지 않음(filter가 고정이 아님)
		if (filterInfo.status == "S") {
			filterInfo.status = "N";
		}
		
		baseCssclass = filterInfo.baseCssclass;
		setCssclass = baseCssclass;
		if (filterInfo.show == "Y") {
			if(!this.gfnIsNull(baseCssclass))
			{
				setCssclass = baseCssclass+","+this.FILTER_ENABLE_CSS;
			}
			else
			{
				setCssclass = this.FILTER_ENABLE_CSS;
			}
		}
		else {
			if(!this.gfnIsNull(baseCssclass))
			{
				setCssclass = baseCssclass;
			}
			else
			{
				setCssclass = "";
			}
		}
		
		var bSort = false;
		if(objGrid.sortInfos)
		{
			if(objGrid.sortInfos[p] && objGrid.sortInfos[p].status > 0)
			{
				setCssclass = this.gfnFilterSortCssclass(baseCssclass, filterInfo.status, objGrid.sortInfos[p].status);
				bSort = true;
			}
		}
		
		//header가 2줄일때 merge될때 처리 
		//컬럼(p) --> body cell index
		var nIndex = objGrid.getBindCellIndex( "body", p);
		//body index -> body col
		var nBodyCol  = objGrid.getCellProperty("body", nIndex, "col");		
		//body col -> head index
		nCell = this._gfngetHeadCellIdxByBodyCol(objGrid , nBodyCol);
		
		//trace(p + "-->bSort>>>"+bSort + "setCssclass>>>" + setCssclass + "=====" + baseCssclass + " cell:" + nCell +"="+ filterInfo.cell);
		//filter 존재시
		if (String(setCssclass).toUpperCase().indexOf("FILTER") > -1) {
			//trace(nCell + ">FILTER>" + setCssclass );
			objGrid.setCellProperty("head", nCell, "expandshow", "show");
			objGrid.setCellProperty("head", nCell, "expandsize", this.FILTER_ENABLE_IMAGE_SIZE[0]);
			objGrid.setCellProperty("head", nCell, "cssclass", setCssclass);
		}
		//sort 정보만 존재시 
		else if(bSort) {
			//trace(nCell + "> not FILTER>" + setCssclass );
			objGrid.setCellProperty("head", nCell, "expandshow", "show");
			objGrid.setCellProperty("head", nCell, "expandsize", this.FILTER_ENABLE_IMAGE_SIZE[1]);
			objGrid.setCellProperty("head", nCell, "cssclass", setCssclass);
		}
		//filter, sort 미존재시 
		else {
			//trace(nCell + ">hide>" + setCssclass );
			objGrid.setCellProperty("head", nCell, "expandshow", "hide");
			objGrid.setCellProperty("head", nCell, "expandsize", 0);
			objGrid.setCellProperty("head", nCell, "cssclass", setCssclass);
		}
    }	
	
	var pdiv;
    var filterItems = objGrid.filterItems;
    var filterItem;	
	for(i=0;i<objGrid.makeCompList.length;i++)
	{
		//pdiv = objGrid.parent.getOwnerFrame().form.divWork.form[objGrid.makeCompList[i]];
		pdiv = this.gfnGetFormFindObj(objGrid.parent, objGrid.makeCompList[i]);
		if(pdiv)
		{
			pdiv.filterData = "";
			filterItem = filterItems[pdiv.filterColumn];
			if(filterItem)
			{
				filterItem.filterData = "";
				filterItem.filterString = "";
			}
		}
	}
	
	var objDs = objGrid.getBindDataset();
	//objDs.set_enableevent(false);  //사용하면 특정화면에서 단축키입력 시 오동작
	var fixFilter = this.gfnNvl(objDs.fixfilter)
	objDs.set_filterstr(fixFilter);	
	objGrid.set_enableevent(true);
	//objDs.set_enableevent(true); 
	
	//objDs.set_rowposition(-1); //포커스 빼기
	//objDs.set_rowposition(0); //포커스 0으로 넣기
};

/**
* @class 체크대상 컴포넌트의 기준화면에서 부터 전체 경로의 full명칭 리턴
* @param {object} 	objForm- 기준 화면 Form
* @param {object} 	objComp- 체크대상 component object
* @param {boolean}	bUseFormNm- Form객체 name사용여부(기본값은 true로 Form객체의 명으로 적용되며 false의 경우 ".form"으로 사용됨)
* @return {String} 	objComp 의 전체 fullname (ex. this.divSearch.form.btnSearch)
* @example this.gfnGetObjString(pForm, obj);
*/ 
pForm.gfnGetObjString = function(objForm, objComp, bUseFormNm)
{
	var sRetValue	= "";									// 반환대상 문자
	
	// 유효성체크
	var sType	= this.gfnTypeOf(bUseFormNm);				// bFormName 객체타입 확인
	
	if (sType!="BOOLEAN")									// BOOLEAN객체가 아닌경우(true,false 외 값)
	{
		bUseFormNm	= true;									// 기본값 true 적용
	}
	
	// objComp기준으로 상위Component명칭 적용 : objForm의 하위오브젝트의 명칭까지
	var objParent	= objComp;								// 상위 오브젝트(대상오브젝트를 기본 설정)
	while (objParent && objParent != objForm)				// 상위form이 될때까지 반복
	{
		var sObjNm	= objParent.name;						// 오브젝트명
		sType		= this.gfnTypeOf(objParent);			// objParent 객체타입 확인
		if (sType=="FORM")									// FORM객체의 경우
		{
			if (!bUseFormNm)								//  Form객체 name미사용건
			{
				sObjNm	= "form";							// form으로 설정
			}
		}
		
		if(this.gfnIsNull(sRetValue))						// 반환값 미존재건(초기설정)
		{
			sRetValue = sObjNm;								// Component명 적용
		}
		else												// 반환값 존재건
		{
			sRetValue = sObjNm+"_"+sRetValue;				// 상위오브젝트명+"."+기존명칭
		}
		objParent = objParent.parent;						// 상위오브젝트변경
	}
	
	// objForm에 대한 명칭 삽입(Dext5,rMate에서 사용하는 부분이 있어 this삽입 유지)
	if(this.gfnIsNull(sRetValue))
	{
		sRetValue	= "this";								// "this"
	}
	else
	{
		sRetValue	= "this_"+sRetValue;					// "this."+기존명칭
	}

	return sRetValue;										// 반환
};

/**
* @class  그리드 셀 우측 클릭 컬럼 row, cell index 반환
* @param  {Object} objGrid	    - 대상그리드
* @param  {Number} bodyColIdx	- 우클릭 col index
* @return {row, cell}
* @example this.gfnHeaderColByCellIndexAndRow(objGrid, bodyColIdx);
*/
pForm.gfnHeaderColByCellIndexAndRow = function(objGrid, bodyColIdx)
{
	var nCol = objGrid.getCellCount("head");
	var retRow = -1, retHeadCellIdx = -1;
	var nRow, nHeadCellIdx;
	for (var j=0; j<nCol; j++)
	{
		var col = objGrid.getCellProperty("Head", j, "col");	
		if(col == bodyColIdx)
		{
			nHeadCellIdx = j;
			nRow = objGrid.getCellProperty("Head", j, "row");	
			if(nRow > retRow)
			{
				retRow = nRow;	
			}
			
			if(nHeadCellIdx > retHeadCellIdx)
			{
				retHeadCellIdx = nHeadCellIdx;
			}
		}
	}
	
	return {row:retRow, cell:retHeadCellIdx};
};


/**
* @class body col으로 headcell index 리턴
*        body에서 col기준으로 head를 가져오며 제약조건은 merge가 된 경우 뒤(마지막)을 리턴한다.
* @param {Object} objGrid - 대상그리드
* @param {number} nBodyCol - Body cell
* @return head cell
* @example this._gfngetHeadCellIdxByBodyCol(objGrid , nBodyCol);
*/
pForm._gfngetHeadCellIdxByBodyCol = function(objGrid , nBodyCol)
{
	var nHeadCol  = -1;
	var nCol = nBodyCol;
	for (var i = objGrid.getCellCount("head")-1 ; i > -1; i--) {
		var nHeadCol  = objGrid.getCellProperty("head", i, "col");
		
		//trace(nHeadCell  +"=="+ nCol +"=="+ i);
		if (nHeadCol  == nCol) {
			//trace("리턴="+i);
			return i;
		}
	}
}

/**
* @class 필터 가능한 cell (bind 로 연결된 cell) 은 expand : show 처리하고 필터 가능 이미지 표시
* @param {Object} obj - 대상그리드
* @return N/A
* @example this._gfnGridExpandInit(objGrid);
*/
pForm._gfnGridExpandInit = function (objGrid)
{
	// 대상 grid 에 필터정보를 가지는 사용자 속성 확인/추가
	if ( this.gfnIsNull(objGrid.filterInfos) ){
		objGrid.filterInfos = {};
	}
	
	var sHeadDisplaytype = "";
	var columnName;
	var i;
	var nCellIndex;
	var baseCssclass;
	var setCssclass;
	var filterInfos = objGrid.filterInfos;
	var filterInfo;
	for (i=0; i<objGrid.getCellCount("Head"); i++)
	{
		nCellIndex = this.gfnGetBodyCellIndex(objGrid, i);
		// body cell index 에 해당하는 바인드 컬럼명 , Head 가 checkboxcontrol 인 경우 제외
		//col찾기
		var col = objGrid.getCellProperty("Head", i, "col");	
		//sHeadDisplaytype = objGrid.getCellProperty("body", i, "displaytype");
		sHeadDisplaytype = objGrid.getCellProperty("Head", i, "displaytype");
			
		columnName = this._gfnGridGetBindColumnNameByIndex(objGrid, nCellIndex);
		filterInfo = filterInfos[columnName];
		if(nCellIndex > -1 && !this.gfnIsNull(columnName) && sHeadDisplaytype != "checkboxcontrol")
		{
			baseCssclass = objGrid.getCellProperty("head", i, "cssclass");
			
 			//초기값은 적재가 필요
			filterInfos[columnName] = {"baseCssclass" : baseCssclass , "status" : "", cell : i};
 		}
	}
	
	 // 필터영역(Div) 를 담아둘 속성 추가
    if (this.gfnIsUndefined(objGrid.makeCompList))
    {
        objGrid.makeCompList = [];
    }
	
    // 필터적용 정보를 담아둘 속성 추가
    if (this.gfnIsUndefined(objGrid.filterItems))
    {
        objGrid.filterItems = {};
    }	
};

/**
* @class  숨겨진 컬럼 모두 보이기 기능
* @param {Object} objGrid	- 대상그리드
* @return N/A
* @example this._gfnGridColHideFree(objGrid);
*/
pForm._gfnGridColHideFree = function(objGrid)
{
	var objDsFree = this._gfnGetDataSet("ds_colinfo_" + objGrid.id + "_" + objGrid.formatid);
	
	for(var i=0; i < objDsFree.rowcount;i++){
		var nIdx = objDsFree.getColumn(i,"idx");
		var nSize = objDsFree.getColumn(i,"size");
		objGrid.setRealColSize("head",parseInt(nIdx),nSize);
	}
	objDsFree.clearData();
};

/**
* @class  숨겨져 있는 일부 컬럼 보이기 기능
* @param {Object} objGrid	- 대상그리드
* @param {Number} idx	- 대상 index
* @return N/A
* @example this._gfnGridColHideFreeIdx(objGrid, showIndex);
*/
pForm._gfnGridColHideFreeIdx = function(objGrid, idx)
{
	var objDsFree = this._gfnGetDataSet("ds_colinfo_" + objGrid.id + "_" + objGrid.formatid);
	//해제하는 idx값을 데이터셋에서 제거 및 그리드의 사이즈 되돌리기
	for (var i = objDsFree.rowcount - 1; i > -1; i--) {
		if (objDsFree.getColumn(i, "idx") == idx) 
		{
			var nIdx = objDsFree.getColumn(i,"idx");
			var nSize = objDsFree.getColumn(i,"size");
			objGrid.setRealColSize("head",parseInt(nIdx),nSize);
			objDsFree.deleteRow(i);
		}
	}
};

/**
* @class  컬럼 숨기기 기능 함수
* @param {Object} objGrid	- 대상그리드
* @param {Number} nCell	- 대상 cell index
* @param {Number} nCol	    - 대상 col index 
* @return N/A
* @example this._gfnSelectColHide(objGrid, nCellIndex, nColIndex);
*/
pForm._gfnSelectColHide = function(objGrid, nCell, nCol)
{
	if (this.gfnIsNull(nCol))
	{
		return;
	}

	objGrid.set_enableredraw(false);
	var nSize = objGrid.getRealColSize(nCol);
	
	var nText = "";
	//header
	var headerInfo = this.gfnHeaderColByCellIndexAndRow(objGrid, nCol);
	var row = this.gfnNvl(headerInfo.row, -1);
	var colArgs = [];
	colArgs.push(headerInfo.cell);
	if(row > 0)
	{
		for(i=row-1; i>=0;i--) //row 아래부터 위로 반대로 검색하여 push. 
		{
			
			var nextCell = this.gfnNvl(this.gfnHeaderColByCellIndex(objGrid, nCol, i), -1);
			colArgs.push(nextCell);
		}
	}
	for (i=0; i<objGrid.getCellCount("Head"); i++)
	{
		if (colArgs.indexOf(i) != -1)
		{
			//헤더인경우 해당 boy의 cellIndex와 동일한 col을 가진 header를 찾아서 해당 header의 cellindex를 열고정 표현을 한다.
			if(this.gfnNvl(nText, "") != "")
			{
				nText += " ";			
			}			
			nText += objGrid.getCellProperty("Head", i, "text");			
		}		
	}	
	
	var objDs = this._gfnGetDataSet("ds_colinfo_" + objGrid.id + "_" + objGrid.formatid);
    objDs.addColumn("idx", "string"); //cell index (cell index는 헤더기준에서 col index와 달라짐)
    objDs.addColumn("size", "string");
	objDs.addColumn("text", "string");

 	objDs.set_enableevent(false);
    var nRow = objDs.addRow();
 	objDs.setColumn(nRow, "idx", nCol);
 	objDs.setColumn(nRow, "size", nSize);
	objDs.setColumn(nRow, "text", nText);
	
 	objDs.set_enableevent(true);
	objGrid.set_enableredraw(true);
	objGrid.setRealColSize("head",nCol,0);
};

/**
* @class  head cell에 match되는 body cell을 얻어온다
* @param {Grid} objGrid	- 대상그리드
* @param {Number} nCell	- 대상 cell index
* @return N/A
* @example this.gfnGetBodyCellIndex(objGrid, nHeadCell);		
*/
pForm.gfnGetBodyCellIndex = function(grid, headCellIndex)
{
    // Max Head Row Index
    var maxHeadRow = 0;
    for (var i = 0, len = grid.getCellCount("head"); i < len; i++)
    {
        var row = grid.getCellProperty("head", i, "row");
        if (maxHeadRow < row)
        {
            maxHeadRow = row;
        }
    }
    // Max Body Row Index
    var maxBodyRow = 0;
    for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
    {
        var row = grid.getCellProperty("body", i, "row");
        if (maxBodyRow < row)
        {
            maxBodyRow = row;
        }
    }
	
    if (maxHeadRow == 0 && maxBodyRow == 0)
    {
        return headCellIndex;
    }
	
    // Body Row 가 1개 이상일 경우
    // Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
    // Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.            
    var cellIndex = -1;
    var sRow = -1;
    var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
    var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
    var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));
	
    if (maxHeadRow > maxBodyRow)
    {
        sRow = nRow - (maxHeadRow - maxBodyRow);
        sRow = (sRow < 0 ? 0 : sRow);
    }
    else
    {
        sRow = nRow;
    }
	
    var cRow, cCol, cColspan;
    for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
    {
        cRow = parseInt(grid.getCellProperty("body", i, "row"));
        cCol = parseInt(grid.getCellProperty("body", i, "col"));
        cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));
        // 실제로 매칭되는 body cell 이 없지만 colspan으로 첫번째 항목을 찾을 경우..
        //if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
        if (sRow == cRow && nCol == cCol && nColspan == cColspan)
        {
            cellIndex = i;
            break;
        }
    }
    return cellIndex;
};

/**
* @class body cell index로 binding 된 컬럼명을 얻어온다.
* @param {Object}  grid 대상 Grid Component
* @param {Number} eadCellIndex head cell index
* @return{String} column id
* @example this._gfnGridGetBindColumnNameByIndex(obj, e.cell);	
*/  
pForm._gfnGridGetBindColumnNameByIndex = function(grid, index) 
{
	var text = "";
	var columnid = "";
	var subCell = grid.getCellProperty("body", index, "subcell");
	if ( subCell > 0 ){
		text = grid.getSubCellProperty("body", index, 0, "text");
	}
	else{
		text = grid.getCellProperty("body", index, "text");
	}
	
	// if ( !this.gfnIsNull(text) ){
	if(!this.gfnIsNull(text) && text != "null" && (new String(text).valueOf() != "null")) {
		if ( text.search(/^BIND\(/) > -1 ) {	
			columnid = text.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length-1);
		} 
		else if ( text.search(/^bind:/) > -1 ) {
			columnid = text.replace(/^bind:/, "");
		}
	}
	return columnid;
};

/**
* @class value의 undefined 여부 반환.
* @param {*} value - 확인할 value
* @return {boolean} undefined 여부.
* @example this.gfnIsUndefined(objGrid.filterItems);
*/
pForm.gfnIsUndefined = function(value)
{
	return value === undefined;
};

/**
* @class col filter 표시 
* @param {Object} objGrid - 대상그리드
* @param {number} nHeadCell - head cell
* @return N/A
* @example this._gfnGridFilterShowCell(objGrid, objMenu.cellindex);
*/
pForm._gfnGridFilterShowCell = function (objGrid, nHeadCell)
{
	// 대상 grid 에 필터정보를 가지는 사용자 속성 확인/추가
	if ( this.gfnIsNull(objGrid.filterInfos) ){
		objGrid.filterInfos = {};
	}
	
	var sHeadDisplaytype = "";
	var columnName;
	var i;
	var nCellIndex;
	var baseCssclass;
	var setCssclass;
	var filterInfos = objGrid.filterInfos;
	var filterInfo;
	var nFilterStatus;
	
	nCellIndex = this.gfnGetBodyCellIndex(objGrid, nHeadCell);
	
	// body cell index 에 해당하는 바인드 컬럼명 , Head 가 checkboxcontrol 인 경우 제외
	//col찾기
	var i = nHeadCell;
	var col = objGrid.getCellProperty("Head", i, "col");	
	//sHeadDisplaytype = objGrid.getCellProperty("body", i, "displaytype");
	sHeadDisplaytype = objGrid.getCellProperty("Head", i, "displaytype");
				
	columnName = this._gfnGridGetBindColumnNameByIndex(objGrid, nCellIndex);
	filterInfo = filterInfos[columnName];
	if(nCellIndex > -1 && !this.gfnIsNull(columnName) && sHeadDisplaytype != "checkboxcontrol") {
		//필터초기화
		if (!objGrid.sortInfos) {
			objGrid.sortInfos = {};
		}
		if (!objGrid.sortInfos[columnName]) {
			objGrid.sortInfos[columnName] = {status:0};
		}
		
		var sortInfo = objGrid.sortInfos[columnName];
		
		if(objGrid.filterInfos) {
			if(objGrid.filterInfos[columnName]) {
				objGrid.filterInfos[columnName].show = "Y";	//표시
				objGrid.filterInfos[columnName].status = "N";	//초기
				baseCssclass = objGrid.filterInfos[columnName].baseCssclass;
				nFilterStatus = objGrid.filterInfos[columnName].status;
				setCssclass = this.gfnFilterSortCssclass(baseCssclass, nFilterStatus, sortInfo.status);
			}
		}
		
		objGrid.setCellProperty("head", i, "cssclass", setCssclass);
		objGrid.setCellProperty("head", i, "expandsize", this.FILTER_SORT_SIZE);
		objGrid.setCellProperty("head", i, "expandshow", "show");
	}
	
	 // 필터영역(Div) 를 담아둘 속성 추가
    if (this.gfnIsUndefined(objGrid.makeCompList)) {
        objGrid.makeCompList = [];
    }
	
    // 필터적용 정보를 담아둘 속성 추가
    if (this.gfnIsUndefined(objGrid.filterItems)) {
        objGrid.filterItems = {};
    }
}

/**
* @class Grid 헤드 필터 사용 시 expand 기능 추가
* @param {Object} objGrid	- 대상그리드
* @return N/A
* @example this._gfnGridAddProp(this.grdMain);	
*/
pForm._gfnGridAddProp = function (objGrid)
{
	var sortCnt = 0;
	var filterCnt = 0;
	
	var arrProp = objGrid.arrprop;
	var objDs = objGrid.getBindDataset();
	
	if(arrProp.indexOf("sort") != -1) sortCnt++;	
	if(arrProp.indexOf("filterNew") != -1) filterCnt++;	

	if(sortCnt + filterCnt <= 0)
	{
		return;
	}
	
	if(filterCnt > 0)
	{
		//★★★ 이벤트 생성 ★★★ Cell 에 표시된 확장버튼을 마우스 왼쪽버튼으로 눌렀을 때 이벤트 추가 (필터 동작처리용)
		objGrid.addEventHandler("onexpanddown", this._gfnGrid_onexpanddown, this); 	
	}
	
	var len = objGrid._format_str.length;
	for(var k=len-1; k>=0; k--)
	{
		//sort만 존재시에도 _gfnGridExpandInit 에서 적재한 default:css를 사용함
		if(filterCnt > 0 || sortCnt > 0)
		{
			objGrid.set_formatid(objGrid._format_str[k]);
			// 필터 가능한 cell (bind 로 연결된 cell) 은 expand : show 처리하고 필터 가능 이미지 표시
			this._gfnGridExpandInit(objGrid);
		}
	}
	
};

/**
* @class 상태에 맞는 cssclass 정보 리턴
* @param {String} 	sBaseCssclass- 기본 적용된 cssclass
* @param {String} 	sFilter - filter 상태
* @param {Number}	nSort - sort 상태
* @return {String} 	적용할 cssclass
* @example this.gfnFilterSortCssclass(baseCssclass, nFilterStatus, sortInfo.status);
*/ 
pForm.gfnFilterSortCssclass = function(sBaseCssclass, sFilter, nSort)
{
	var setCssclass = "";
	
	if(this.gfnIsNull(sBaseCssclass)) sBaseCssclass = "";
	if(this.gfnIsNull(sFilter)) sFilter = "";
	if(this.gfnIsNull(nSort)) nSort = 0;
	
	//hj	20230406 소트css 사용하지 않아 주석처리함
/*	
	if(nSort == 0)
	{
		if(sFilter == "N")
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.FILTER_ENABLE_CSS;
			}
			else
			{
				setCssclass = this.FILTER_ENABLE_CSS;
			}
		}
		else if(sFilter == "S")
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.FILTER_APPLY_CSS;
			}
			else
			{
				setCssclass = this.FILTER_APPLY_CSS;
			}
		}
		else
		{
			setCssclass = sBaseCssclass;
		}
	}
	else if(nSort == 1)
	{
		if(sFilter == "N")
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.FILTER_ENABLE_SORTASC_CSS;
			}
			else
			{
				setCssclass = this.FILTER_ENABLE_SORTASC_CSS;
			}
		}
		else if(sFilter == "S")
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.FILTER_APPLY_SORTASC_CSS;
			}
			else
			{
				setCssclass = this.FILTER_APPLY_SORTASC_CSS;
			}
		}
		else
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.SORT_ASC_CSS;
			}
			else
			{
				setCssclass = this.SORT_ASC_CSS;
			}
		}
	}
	else if(nSort == 2)
	{
		if(sFilter == "N")
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.FILTER_ENABLE_SORTDESC_CSS;
			}
			else
			{
				setCssclass = this.FILTER_ENABLE_SORTDESC_CSS;
			}
		}
		else if(sFilter == "S")
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.FILTER_APPLY_SORTDESC_CSS;
			}
			else
			{
				setCssclass = this.FILTER_APPLY_SORTDESC_CSS;
			}
		}
		else
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.SORT_DESC_CSS;
			}
			else
			{
				setCssclass = this.SORT_DESC_CSS;
			}
		}
	}
	else
	{*/
		if(sFilter == "N")
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.FILTER_ENABLE_CSS;
			}
			else
			{
				setCssclass = this.FILTER_ENABLE_CSS;
			}
		}
		else if(sFilter == "S")
		{
			if(!this.gfnIsNull(sBaseCssclass))
			{
				setCssclass = sBaseCssclass+","+this.FILTER_APPLY_CSS;
			}
			else
			{
				setCssclass = this.FILTER_APPLY_CSS;
			}
		}
		else
		{
			setCssclass = sBaseCssclass;
		}
//	}
	
	return setCssclass;
};

/**
* @class col filter 표시 해제 
* @param {Object} objGrid - 대상그리드
* @param {number} nHeadCell - head cell
* @return N/A
* @example this._gfnGridFilterHideCell(objGrid , objMenu.cellindex);
*/
pForm._gfnGridFilterHideCell = function(objGrid , nHeadCell)
{
	//head로 bind된 column 찾기(cellmovingtype 대응) 
	var nCellIndex = this.gfnGetBodyCellIndex(objGrid, nHeadCell);		
	var columnName = this._gfnGridGetBindColumnNameByIndex(objGrid, nCellIndex);
		
	var baseCssclass;
	var setCssclass;
	var filterInfos = objGrid.filterInfos;
	var filterInfo;
	var i;
	var sColumn;
	var nCell;
	if(this.gfnIsNull(filterInfos)) return;
	var sStatus = "";
	
	// 필터상태 초기화.
    sStatus = "";
	if (!filterInfos.hasOwnProperty(columnName)) return;
	sStatus = "";
	filterInfo = filterInfos[columnName];
	filterInfo.show = "N";	//표시
	filterInfo.status = "";	//해당필터정보 미사용
	baseCssclass = filterInfo.baseCssclass;
	
	if (!this.gfnIsNull(baseCssclass)) {
		setCssclass = baseCssclass;
	}
	else {
		setCssclass = '';
	}
	
	
// 	var bSort = false;
// 	if(objGrid.sortInfos) {
// 		if(objGrid.sortInfos[columnName] && objGrid.sortInfos[columnName].status > 0) {
// 			setCssclass = this.gfnFilterSortCssclass(baseCssclass, filterInfo.status, objGrid.sortInfos[columnName].status);
// 			bSort = true;
// 		}
// 	}
// 	
// 	if (bSort) {
// 		objGrid.setCellProperty("head", nHeadCell, "cssclass", setCssclass);
// 		objGrid.setCellProperty("head", nHeadCell, "expandsize", this.FILTER_ENABLE_IMAGE_SIZE[1]);	//SORT만
// 		objGrid.setCellProperty("head", nHeadCell, "expandshow", "show");
// 	}
// 	else {
		objGrid.setCellProperty("head", nHeadCell, "cssclass", setCssclass);
		objGrid.setCellProperty("head", nHeadCell, "expandshow", "hide");
//	}	
	
	var pdiv;
    var filterItems = objGrid.filterItems;
    var filterItem;	
	for(i=0;i<objGrid.makeCompList.length;i++) {		
		var hname = this.gfnGetObjString(pForm, objGrid) + "_headAppendComp" + columnName;	//full이름으로 비교(div depth마다 발췌 방지)
		
		if (objGrid.makeCompList[i] != hname) continue;
		
		pdiv = this.gfnGetFormFindObj(objGrid.parent, objGrid.makeCompList[i]);
		if(pdiv)
		{
			pdiv.filterData = "";
			filterItem = filterItems[pdiv.filterColumn];
			if(filterItem)
			{
				filterItem.filterData = "";
				filterItem.filterString = "";
			}
		}
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
	//trace("resultString>>" + resultString);
	
    // 필터 적용
	var objDs = objGrid.getBindDataset();
    objDs.filter(resultString);
	objDs.set_rowposition(-1); //포커스 빼기
	objDs.set_rowposition(0); //포커스 0으로 넣기
};

/**
* @class  Grid treestate 바인드 설정 - onload 이벤트 추가
* @param {Object} objForm - Form 객체
* @param {Object} objGrid - 대상그리드
* @return N/A
* @example this.gfnSetGridBindTreeState(this, objGrid);
*/
pForm.gfnSetGridBindTreeState = function (objForm, objGrid)
{
	// 데이터셋 
	var objDs = objGrid.getBindDataset();
	objDs.bindgrid = objGrid;
	
	objGrid.addEventHandler("ontreestatuschanged", this.gfnGrid_ontreestatuschanged, this);
 	objDs.addEventHandler("onload", this.gfnGridDs_onload, this);
};

/**
* @class  그리드 트리상태 변경 이벤트
* @param {Object} objGrid - 대상그리드
* @param {Evnet}  e	   - 온로드이벤트
* @return  N/A
* @example objDs.addEventHandler("ontreestatuschanged", this.gfnGrid_ontreestatuschanged, this);
*/
pForm.gfnGrid_ontreestatuschanged = function (objGrid, e)
{
	var objDs = objGrid.getBindDataset();
	
	this.gfnSaveTreeStatus(objDs);
};

/**
* @class  Grid treestatus 저장
* @param {Object} objDs - 대상데이터셋
* @param {String} sKey - 키값
* @return N/A
* @example this.gfnSaveTreeStatus(obj, this.fvPkColNm);
*/
pForm.gfnSaveTreeStatus = function (objDs, sKey)
{
	var sDsName = "dsTreeState";
	var objDynamicDs = this.all[sDsName];
	var objGrid = objDs.bindgrid;
	
	if (this.gfnIsNull(sKey)) return;
	
	// 데이터셋 동적 생성
	if (this.gfnIsNull(objDynamicDs))
	{
		var objDynamicDs = new Dataset();
		objDynamicDs.name = sDsName;
		this.addChild("dsTreeState", objDynamicDs);
		
		objDynamicDs.addColumn("TREE_STATE", "string");
		objDynamicDs.addColumn(sKey, "string");
		objDynamicDs.key = sKey;
	}
	
	// 현재 tree 상태 값 저장 
	objDynamicDs.clearData();
	for (var i = 0; i < objGrid.rowcount; i++) {
		var nRow = objDynamicDs.addRow();
		var nDsRow = objGrid.getDatasetRow(i);
		var nTreeStatus = objGrid.getTreeStatus(i);
		var sKeyData = objDs.getColumn(nDsRow, sKey);
		
		objDynamicDs.setColumn(nRow, "TREE_STATE", nTreeStatus);
		objDynamicDs.setColumn(nRow, sKey, sKeyData);
	}
};

/**
* @class  데이터셋 온로드 이벤트
* @param {Object} objDs - 대상데이터셋
* @param {Evnet}  e	   - 온로드이벤트
* @return  N/A
* @example objDs.addEventHandler("onload", this.gfnGridDs_onload, this);
*/
pForm.gfnGridDs_onload = function(objDs, e)
{
	var sDsName = "dsTreeState";
	var objDynamicDs = this.all[sDsName];
	var objGrid = objDs.bindgrid;
	var nTreeIdx = objGrid._treeCellinfo._cellidx;
	
	if (this.gfnIsNotNull(objDynamicDs))
	{
		objDs.addColumn("TREE_STATE", "string");
		objDs.set_updatecontrol(false);
		objDs.set_enableevent(false);
		for (var i = 0; i < objDynamicDs.rowcount; i++) {
			var sKeyData = objDynamicDs.getColumn(i, objDynamicDs.key);
			var nTreeStatus = objDynamicDs.getColumn(i, "TREE_STATE");
			var nFindRow = objDs.findRow(objDynamicDs.key, sKeyData);
			
			nTreeStatus = (nTreeStatus == 0 || nTreeStatus == 1) ? nTreeStatus : 3;
			objDs.setColumn(nFindRow, "TREE_STATE", nTreeStatus);
		}
		objDs.set_enableevent(true);
		objDs.set_updatecontrol(true);
	
		objGrid.setCellProperty("body", nTreeIdx,"treestate", "bind:TREE_STATE");
		this.removeChild(sDsName);
	}
	else
	{
		objGrid.set_treeinitstatus("expand,null");
	}
};

/**
* @class 그리드 User Properties 적용 <br>
* @param {Array} arrComp - 컴포넌트 배열.
* @return rtnValue
* @example this._gfnGridSetUserPorperties(arrComp, arrItem);
*/
pForm._gfnGridSetUserPorperties = function (arrComp)
{
	for (var i = 0; i < arrComp.length; i++) {
		var objComp = this.components[arrComp[i]];
		var objDs = objComp.getBindDataset();
		
		if(this.gfnIsNull(objDs)) continue;
		
		// cleargird 활성여부
		var isCheck = true;

		// 그리드의 fixrow 속성이 Y이면
		if (objComp.fixrow == "Y")
		{
			var nRowCnt = objDs.getRowCount();
			
			if (nRowCnt > 0)
			{
				for (var j = 0; j < nRowCnt; j++) {
					var nType = objDs.getRowType(j);
					// 행의 상태가 변한 경우, 해당 행을 저장
					if (nType >= 2)
					{
						isCheck = false;
						var sRowposition = objDs.id + ":" + objDs.rowposition;
						this._fvRowposition = sRowposition;
					}
				}
			}
			else
			{
				if (this.gfnIsNotNull(this._fvRowposition)) this._fvRowposition += ":N";
			}
		}

		// 그리드의 cleargrid 속성이 Y이면
		if (objComp.cleargrid == "Y")
		{
			// 그리드 설정 초기화 
			if (isCheck) this.gfnClearUserFunction(objComp);
		}
	}
};

pForm = null;
