(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmMultiCombo");
            this.set_titletext("멀티콤보");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,29);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCbo",null,"0","29",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Down");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCbo","0","0",null,null,"28","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_displaynulltext("선택하세요");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCbo","0","29",null,"251","0",null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GBg01");
            obj.set_text("");
            this.pdvCbo.addChild(obj.name, obj);

            obj = new Grid("grdMultiCombo","0","0",null,null,"0","28",null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"limitmax\" text=\"0\"/><Cell col=\"1\" text=\"code\"/><Cell col=\"2\" text=\"value\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"limitmax\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:value\"/></Band></Format></Formats>");
            this.pdvCbo.addChild(obj.name, obj);

            obj = new Button("btnOk","0",null,null,"28","0","0",null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.pdvCbo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCbo.form
            obj = new Layout("default","",0,0,this.pdvCbo.form,function(p){});
            this.pdvCbo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",200,29,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmMultiCombo.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmMultiCombo.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/02			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.comboinnerdataset;
        this.combocodecolumn;
        this.combodatacolumn;
        this.headname;
        this.callbackfunc;
        this.multiCheck = true;

        this.displayrowcount = 10;
        this.fvHeadHeight    = 28;
        this.fvRowHeight     = 28;
        this.fvWidth         = null;

        this.fvAll           = false;
        this.fvAllDisplay    = "";

        this.fvbReadOnly    = false;

        this.fvOpenCount = 0;
        //this.objApp = this.gfnGetApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fvOpenCount = 0;
        	var oDiv = this.parent;

        	// combo 표시 건수 설정
        	if (this.gfnIsNull(oDiv.uDisplayrowcount) == false) {
        		this.displayrowcount = oDiv.uDisplayrowcount;
        	}
        	// combo 초기 전체 선택 여부
        	if (this.gfnIsNull(oDiv.uAll) == false) {
        		this.fvAll = oDiv.uAll;
        	}
        	// combo 전체 시 표시 값
        	if (this.gfnIsNull(oDiv.uAllDisplay) == false) {
        		this.fvAllDisplay = oDiv.uAllDisplay;
        	}
        	// popupDiv width 값
        	if (this.gfnIsNull(oDiv.uWidth) == false) {
        		this.fvWidth = oDiv.uWidth;
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
         * @description  멀티콤보 Dataset 및 Grid 설정
         * @param {Dataset} objDs - 멀티콤보에 표시할 Dataset
         * @param {String} sCodeColumn - code 칼럼 명
         * @param {String} sDataColumn - data 칼럼 명
         * @param {String} sHeadName - chk, 칼럼[1], 칼럼[2]
         * @param {String} [sCallBack] - 콜백함수
         * @return N/A
         */
        this.setDataset = function (objDs, sCodeColumn, sDataColumn, sHeadName, sCallBack)
        {
        	this.comboinnerdataset = objDs;
        	this.combocodecolumn   = sCodeColumn;
        	this.combodatacolumn   = sDataColumn;
        	this.headname    	   = sHeadName;
        	this.callbackfunc 	   = sCallBack;

        	// chk 미사용 시 1건 선택
        	if (this.headname.indexOf("chk") == -1) {
        		this.multiCheck = false;
        		this.pdvCbo.form.grdMultiCombo.set_bottom(0);
        		this.pdvCbo.form.btnOk.set_visible(false);
        	}

        	//데이터셋에  chk컬럼 없을 경우 생성
        	this.comboinnerdataset.set_enableevent(false);
        	var oColInfo = this.comboinnerdataset.getColumnInfo("chk");
        	if( this.gfnIsNull(oColInfo)) {
        		this.comboinnerdataset.addColumn("chk", "STRING");
        	}

        	//checkbox값 세팅
        	var nIdx = this.comboinnerdataset.getRowCount();
        	for (var j=0; j<nIdx; j++){

        		if (this.fvAll) { // 초기에 전체 선택이면
        			this.comboinnerdataset.setColumn(j, "chk", 1);
        		}else {
        			this.comboinnerdataset.setColumn(j, "chk", 0);
        		}
        	}
        	this.comboinnerdataset.set_rowposition(0);
        	this.comboinnerdataset.set_enableevent(true);

        	// Grid format 및 Cell 설정
        	var oGrd = this.pdvCbo.form.grdMultiCombo;

        	oGrd.set_enableevent(false);
        	oGrd.set_enableredraw(false);

        	//oGrd.setFormatColProperty(0, "size", "48");
        	oGrd.setCellProperty("body", 0, "text", "bind:chk");
        	oGrd.setCellProperty("body", 1, "text", "bind:"+this.combocodecolumn);
        	oGrd.setCellProperty("body", 2, "text", "bind:"+this.combodatacolumn);

        	// chk 사용 미사용시 그리드 check 칼럼 삭제
        	if (this.multiCheck == false && oGrd.getCellProperty("head", 0, "displaytype")=="checkboxcontrol") {
        		var rtn = oGrd.deleteContentsCol("body", 0);
        	}
        	// 칼럼수에 따른 text 설정
        	var arrHeadList = this.headname.split(",");

        	for (var i=0;i<arrHeadList.length; i++) {
        		oGrd.setCellProperty("head", i, "text", arrHeadList[i]);
        	}
        	oGrd.set_binddataset(this.comboinnerdataset);
        	oGrd.set_enableevent(true);
        	oGrd.set_enableredraw(true);
        	this.pdvCbo.form.resetScroll();

        	this.fnSyncValue();
        };

        this.fnSyncValue = function ()
        {
        	var arrTextList  = [];
        	var arrValueList = [];

        	if(this.multiCheck==false){
        		arrValueList.push(this.comboinnerdataset.getColumn(this.comboinnerdataset.rowposition, this.combocodecolumn));
        		arrTextList.push(this.comboinnerdataset.getColumn(this.comboinnerdataset.rowposition, this.combodatacolumn));
        		this.fnSetComboText(arrValueList, arrTextList);
        		return;
        	}

        	var nRowCount = this.comboinnerdataset.getRowCount();
        	var nChkCount = this.comboinnerdataset.getCaseCount("chk=='1'");

        	if( nRowCount == nChkCount){
        		//전체선택
        		this.pdvCbo.form.grdMultiCombo.setCellProperty("head", 0, "text", 1);
        	}else{
        		this.pdvCbo.form.grdMultiCombo.setCellProperty("head", 0, "text", 0);
        	}

        	// 초기에 전체 선택이면
        	for (var i=0; i<nRowCount; i++) {
        		var sChkValue = this.comboinnerdataset.getColumn(i, "chk");
        		if (sChkValue == "1") {
        			arrValueList.push(this.comboinnerdataset.getColumn(i, this.combocodecolumn));
        			arrTextList.push(this.comboinnerdataset.getColumn(i, this.combodatacolumn));
        		}
        	}
        	this.fnSetComboText(arrValueList, arrTextList);
        };

        /**
         * @description  선택된 Text Edit에 표시
        */
        this.fnSetComboText = function(arrValueList, arrTextList)
        {
        	var sComboText = arrTextList.toString();

        	this.edtCbo.uRetrunvalue = arrValueList;
        	this.edtCbo.uReturntext  = sComboText;

        	if (this.gfnIsNull(sComboText)) {
        		this.edtCbo.set_value(null);
        	}else {
        		if (this.gfnIsNull(this.fvAllDisplay)) {
        			this.edtCbo.set_value(sComboText);
        		}else {
        			if (arrValueList.length == this.comboinnerdataset.rowcount) {
        				this.edtCbo.set_value(this.fvAllDisplay);
        				this.resetScroll();
        			}else {
        				this.edtCbo.set_value(sComboText);
        			}
        		}
        	}
        };


        /**
         * @description  전체선택 해제 및 선택한 값 초기화
        */
        this.fnInit = function ()
        {
        	var objDs = this.comboinnerdataset;
        	objDs.set_enableevent(false);
        	for (var i=0; i<objDs.rowcount; i++) {
        		objDs.setColumn(i, "chk", "0");
        	}
        	objDs.set_enableevent(true);

        	this.edtCbo.set_value(null);
        	this.edtCbo.uRetrunvalue = null;
        	this.edtCbo.uReturntext  = null;
        };

        /**
         * @description  필수여부 css 변경
        */
        this.setRequired = function(bValue)
        {
        	if (bValue) {
        		this.edtCbo.set_cssclass("essential");
        	}else {
        		this.edtCbo.set_cssclass("");
        	}
        };

        /**
         * @description  ReadOnly여부 변경
        */
        this.setReadOnly = function(bValue)
        {
        	this.fvbReadOnly = bValue;
        	this.btnCbo.set_enable(!bValue);
        };

        /**
         * @description  멀티콤보 value 가져오기
        */
        this.getValue = function()
        {
        	return this.edtCbo.uRetrunvalue;
        };


        /**
         * @description  멀티콤보 text 가져오기
        */
        this.getText = function()
        {
        	return this.edtCbo.uReturntext;
        };


        /**
         * @description  멀티콤보 값 세팅
        */
        this.setValue = function(sValue)
        {
        	// 선택된 값 초기화
        	this.fnInit();

        	if (this.gfnIsNull(sValue)) return;

        	var nFindRow;
        	var arrTextList = [];
        	var arrValueList = (""+sValue).split(",");

        	var objDs = this.comboinnerdataset;
        	objDs.set_enableevent(false);
        	for (var i=0; i<arrValueList.length; i++) {
        		nFindRow = objDs.findRow(this.combocodecolumn, arrValueList[i]);
        		if (nFindRow != -1) {
        			arrTextList.push(objDs.getColumn(nFindRow, this.combodatacolumn));
        			objDs.setColumn(nFindRow, "chk", "1");
        		}

        	}

        	objDs.set_enableevent(true);
        	objDs.set_rowposition(nFindRow);
        	this.fnSyncValue();
        };


        /**
         * @description  전체선택
        */
        this.fnSelectAll = function (bVal)
        {
        	var objDs = this.comboinnerdataset;

        	objDs.set_enableevent(false);
        	for (var i=0; i<objDs.rowcount; i++) {
        		objDs.setColumn(i, "chk", bVal);
        	}
        	objDs.set_enableevent(true);

        	this.fnSyncValue();
        };

        /**
         * @description   Popup Div Open
        */
        this.fnOpenCombo = function()
        {
        	if (this.comboinnerdataset.getRowCount() <= 0) {
        		trace("멀티콤보에 표시할 Data가 없습니다. fnSetDataset으로 Dataset을 지정하세요!");
        		return;
        	}
        	else {
        		// PopupDiv width size 조정
        		if (!this.gfnIsNull(this.fvWidth)) {
        			this.pdvCbo.set_width(this.fvWidth);
        		}
        		this.fnSyncValue();
        		// pdv size 계산
        		var nRowCount = this.comboinnerdataset.getRowCount();
        		var nSize = this.displayrowcount;
        		if (nSize > nRowCount) nSize = nRowCount;
        		var nHeight = this.fvHeadHeight + (this.fvRowHeight  * nSize) + 2 + 30;
        		this.pdvCbo.set_height(nHeight);

        		this.pdvCbo.trackPopupByComponent(this.edtCbo, 0, this.edtCbo.getOffsetHeight()-1);


        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.edtCbo_oneditclick = function(obj,e)
        {
        	if(this.fvbReadOnly == false) {
        		this.fnOpenCombo();
        	}
        };

        this.btnCbo_onclick = function(obj,e)
        {
        	this.fnOpenCombo();
        };

        this.pdvCbo_grdMultiCombo_onheadclick = function(obj,e)
        {

        	if(this.multiCheck==false){
        		return;
        	}
        	var nCell = e.cell;
        	if(nCell==0){
        		var bVal = obj.getCellProperty("head", nCell, "text");
        		if( bVal == "1"){
        			bVal = "0";
        		}else{
        			bVal = "1";
        		}
        		this.fnSelectAll(bVal);
        	}
        };

        this.pdvCbo_grdMultiCombo_oncellclick = function(obj,e)
        {
        	var objDs = this.comboinnerdataset;

        	// chk 사용 미사용 시
        	if (this.multiCheck == false) {
        		var sVal = objDs.getColumn(e.row, this.combocodecolumn);
        		this.setValue(sVal);
        		this.pdvCbo.closePopup();
        	}else{
        		if( e.cell > 0){
        			if (objDs.getColumn(e.row, "chk") == "1") {
        				objDs.setColumn(e.row, "chk", "0");
        			}else {
        				objDs.setColumn(e.row, "chk", "1");
        			}
        		}
        		this.fnSyncValue();
        	}
        };


        this.pdvCbo_oncloseup = function(obj,e)
        {
        	this.fnSyncValue();

        	if (!this.gfnIsNull(this.callbackfunc)) {
        		this.lookupFunc(this.callbackfunc).call(this.parent.name, this.edtCbo.uRetrunvalue, this.edtCbo.uReturntext);
        	}
        };

        this.pdvCbo_btnOk_onclick = function(obj,e)
        {
        	this.pdvCbo.closePopup();
        	this.edtCbo.setFocus();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnCbo.addEventHandler("onclick",this.btnCbo_onclick,this);
            this.edtCbo.addEventHandler("oneditclick",this.edtCbo_oneditclick,this);
            this.pdvCbo.addEventHandler("oncloseup",this.pdvCbo_oncloseup,this);
            this.pdvCbo.form.grdMultiCombo.addEventHandler("onheadclick",this.pdvCbo_grdMultiCombo_onheadclick,this);
            this.pdvCbo.form.grdMultiCombo.addEventHandler("oncellclick",this.pdvCbo_grdMultiCombo_oncellclick,this);
            this.pdvCbo.form.btnOk.addEventHandler("onclick",this.pdvCbo_btnOk_onclick,this);
        };
        this.loadIncludeScript("cmmMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
