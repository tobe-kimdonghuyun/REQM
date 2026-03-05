(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comm_extCombo");
            this.set_titletext("모바일 콤보");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,364);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsItem", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">우리나라</Col></Row><Row><Col id=\"Column0\">우리나라</Col></Row><Row><Col id=\"Column0\">우리나라</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","2","0",null,null,"2","80",null,null,null,null,this);
            obj.set_initvalueid("ivDivAccessibilityOff");
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdComboList","0","-4",null,null,"0","0",null,null,null,null,this.divList.form);
            obj.set_initvalueid("ivGrdAccessibilityOn");
            obj.set_taborder("0");
            obj.set_fillareatype("controlrow");
            obj.set_autofittype("col");
            obj.set_binddataset("ds00");
            obj.set_cssclass("grd_notice_M");
            obj.set_selecttype("cell");
            obj.set_accessibilitylabel("항목을 선택후 닫기버튼을 클릭해주세요");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"540\"/></Columns><Rows><Row size=\"72\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnClose","0",null,null,"80","0","0",null,null,null,null,this);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_borderRadius("0px");
            obj.set_cssclass("btn_POP_UserCombo_M");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","mobileP,mobileScr",640,364,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comm_extCombo.xfdl", function() {
        /**
        * Combo Overriding
        * @MenuPath    	comm
        * @FileName 	comm_extCombo.xfdl
        * @Creator 		RHS
        * @CreateDate 	2023.3.07
        * @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          	Modifier            Description
        *******************************************************************************
        *  2023.3.07     	RHS 	        최초 생성
        *******************************************************************************
        1. 모바일에서 User Combo를 사용하기 위해서는 해당 콤보에 userProperty를 생성한다. useItemHeight = 70
         - 1 Row 높이
         - xadl 에서 Combo - Prototype을 생성하여 사용함
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.comm_extCombo_onload = function(obj,e)
        {

        //	this.divList.form.grdComboList.vscrollbar.set_width(1);
        	this.fv = {};
        	this.set_titletext("타이틀");
        	// Dataset Object
        	this.fv.Data = this.getOwnerFrame().data;

            this.dsItem.set_enableevent(false);
        	this.dsItem.copyData(this.fv.Data, true);	//2021.12.17 hj 필터복사 적용
        	this.dsItem.set_enableevent(true);

            // Dataset Column Info String
        	this.fv.ColCd = this.getOwnerFrame().cdCol;
        	this.fv.ColNm = this.getOwnerFrame().nmCol;
        	this.fv.combo = this.getOwnerFrame().objcombo;
        	this.fv.text = this.getOwnerFrame().sText;
        	this.fv.frame = this.getOwnerFrame().name;

        	// 2023.07.20 1440버전에서 에러나는 상황 대비
        //	this.fv._grid     = this.fv.combo._grid    ;
        //	this.fv._cellinfo = this.fv.combo._cellinfo;

        	this.fv.nUnitItemHeight = this.getOwnerFrame().nUnitItemHeight;
        	this.fv.nFullDispCount = this.getOwnerFrame().nFullDispCount;

        	if (this.fv.text != "")
        	{
            //trace("========"+ this.fv.text +"===========");
        //	this.stcTitle.set_text(this.fv.text);
        //	this.stcTitle.set_visible(true);
        	}
        	//for(var k in this.fv) trace("-->"+k +"::"+this.fv[k]);

        	//Grid extCombo일 경우 수행
        	if (this.fv.combo._type_name != "Combo")
        	{
        		this.fv.pDS = this.getOwnerFrame().pDS;
        		this.fv.pGrid = this.getOwnerFrame().uGrid;
        		this.fv.uGridBand = this.getOwnerFrame().uGridBand;
        		this.fv.uGridComboControl = this.getOwnerFrame().uGridComboControl;
        		this.fv.uGridComboControl_bindexpr = this.getOwnerFrame().uGridbindexpr;
        	}

        	if (!this.fv.Data) this.close("");

        	this.fnResizeGrid(this.fv);
        	//this.setTimer(0,200);
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fnResizeGrid = function(objInfo)
        {
        	this.divList.form.grdComboList.set_binddataset("dsItem");
        	this.divList.form.grdComboList.setCellProperty("Body",0,"text","bind:"+objInfo.ColNm);

        	//var rtn = this.dsItem.rowcount*this.fv.nUnitItemHeight;
        	//this.divList.form.grdComboList.setOffsetHeight(rtn);
        	//this.divList.form.resetScroll();
        	this.resetScroll();

        	var objCombo = objInfo.combo;
        	var val = objCombo.value;
        	var nIndex = objCombo.index;

        	if (this.fv.combo._type_name != "Combo")
        	{
        		nIndex = objInfo.uGridComboControl.index;
        		val = objInfo.uGridComboControl.value;
        	}

        	var nRow = this.dsItem.findRow(objInfo.ColCd , val);

        	if (nIndex>-1)
        	{
        		this.dsItem.set_rowposition(nRow );
        		this.divList.form.vscrollbar.set_pos((nRow-1)*this.fv.nUnitItemHeight);
        	}
        };

        /*
        this.fnCallFrameResize = function()
        {
        	var cf = this.getOwnerFrame();
        	var srcWidth  = nexacro.getApplication().mainframe.getOffsetWidth();
        	var srcHeight = nexacro.getApplication().mainframe.getOffsetHeight();

        	var nWidth = this.width;	//srcWidth-60;
        	var nFullDispCount = parseInt((srcHeight-80)/this.fv.nUnitItemHeight);
        	//var nHeight = this.fv.nUnitItemHeight*(this.dsCopy.rowcount>nFullDispCount?nFullDispCount:this.dsCopy.rowcount)+75 ;
        	var nHeight = this.parent.orgPopHeight;
        	var nTop = this.parent.orgPopTop;
        	var nLeft = (srcWidth - this.width)/2;

        	if (srcHeight <= this.height) {
        		nHeight = srcHeight-30;
        		nTop = 15;
        		//nTop = (srcHeight - nHeight)/2;
        	}

        	//cf.move(nLeft,nTop,nWidth,nHeight);
        };
        */

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");

            var rtnFuncObj = this.lookupFunc("fnConfirm");
        	if(!this.smfIsNull(rtnFuncObj)){
        		rtnFuncObj.call("HB");	//컴퍼넌트 ID 리턴
        	}
        };

        this.grdComboList_oncellclick = function(obj, e)
        {
        	// post값을 세팅해서 ExtCombo로 넘기는 용도
        	this.fv.value = this.dsItem.getColumn(e.row,this.fv.ColCd);
        	this.fv.text = this.dsItem.getColumn(e.row,this.fv.ColNm);
        	this.fv.index = this.dsItem.rowposition;

        	var objCombo = this.fv.combo;
        	var arr = null;
        	// set_item
        	// 콤보에 값을 세팅하고 리스트팝업을 닫는다.
        	if (this.fv.combo._type_name == "Combo")
        	{
        		objCombo.set_item(this.fv);
        		arr = "Combo";
        	 	var rtnFuncObj = this.fv.combo.parent.lookupFunc("fnConfirm");
        		if(!this.smfIsNull(rtnFuncObj)){
        	 		rtnFuncObj.call();
        	 	}
        		this.close(arr);
        	}
        	else
        	{
        		arr = "ComboControl" 						+ ","
        			+ this.fv.pGrid.autoupdatetype 			+ ","
        			+ this.fv.uGridBand 					+ ","
        			+ this.fv.uGridComboControl_bindexpr 	+ ","
        			+ this.fv.value;
        		this.close(arr);
        	}
        // 	objCombo.set_item(this.fv);
        //
        // 	var rtnFuncObj = this.lookupFunc("fnConfirm");
        // 	if(!this.smfIsNull(rtnFuncObj)){
        // 		rtnFuncObj.call();
        // 	}
        //
        //
        // 	// 접근성시 오류로 timer설정하여 팝업종료함.
        // 	if (nexacro.getApplication().enableaccessibility)
        // 	{
        // 		this.setTimer(1,200);
        // 	}else
        // 	{
        // 		this.close("");
        // 	}
        };

        this.grdComboList_onsetfocus = function(obj, e)
        {
        	this.divList.form.grdComboList.set_useselcolor(true);
        };

        this.grdComboList_onkillfocus = function(obj, e)
        {
        	this.divList.form.grdComboList.set_useselcolor(false);
        };


        this.comm_extCombo_ontimer = function(obj,e)
        {
        	this.killTimer(e.timerid);
        	if (e.timerid == 0)
        	{
        		this.dsItem.set_rowposition(0);	//접근성 모드에서 로우포지션이 아래에 있음
        	}
        	else if (e.timerid == 1)
        	{
        		this.close("");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comm_extCombo_onload,this);
            this.addEventHandler("ontimer",this.comm_extCombo_ontimer,this);
            this.divList.form.grdComboList.addEventHandler("onkillfocus",this.grdComboList_onkillfocus,this);
            this.divList.form.grdComboList.addEventHandler("onsetfocus",this.grdComboList_onsetfocus,this);
            this.divList.form.grdComboList.addEventHandler("oncellclick",this.grdComboList_oncellclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("comm_extCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
