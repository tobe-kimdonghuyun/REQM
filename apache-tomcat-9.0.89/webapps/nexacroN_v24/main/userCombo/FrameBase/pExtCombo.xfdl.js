(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pExtCombo");
            this.set_visible("true");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divList","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdComboList","0","0",null,null,"0","0",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_POP_Combo");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"362\"/></Columns><Rows><Row size=\"60\"/></Rows><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnClose","0","divList:0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_Confirm");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",420,200,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pExtCombo.xfdl", function() {
        /**
        *  Nexacro Accessibility
        *  @FileName 	pExtCombo.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2022.12.15
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.12.15     		TOBESOFT		  		최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        // fv json구조를 변경하지 마세요,
        //    항목추가는 가능합니다.
        this.fv = {};

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.pExtCombo_onload = function(obj, e)
        {
        // 	this.divList.vscrollbar.set_width(1);
        // 	this.divList.set_scrollbars("none");
        //	this.divList.form.grdComboList.vscrollbar.set_width(1);
        	this.fv = {};
        	this.set_titletext("타이틀");
        	// Dataset Object
        	this.fv.Data = this.getOwnerFrame().data;

        	this.dsCopy.set_enableevent(false);
        	this.dsCopy.copyData(this.fv.Data, true);	//2021.12.17 hj 필터복사 적용
        	this.dsCopy.set_enableevent(true);

        	// Dataset Column Info String
        	this.fv.ColCd = this.getOwnerFrame().cdCol;
        	this.fv.ColNm = this.getOwnerFrame().nmCol;
        	this.fv.combo = this.getOwnerFrame().objcombo;
        	this.fv.text = this.getOwnerFrame().sText;
        	this.fv.frame = this.getOwnerFrame().name;
        	this.fv.nUnitItemHeight = this.getOwnerFrame().nUnitItemHeight;
        	this.fv.nFullDispCount = this.getOwnerFrame().nFullDispCount;

        	if (this.fv.text != "")
        	{

        	//trace("========"+ this.fv.text +"===========");
        //		this.stcTitle.set_text(this.fv.text);
        //		this.stcTitle.set_visible(true);
        	}
        	//for(var k in this.fv) trace("-->"+k +"::"+this.fv[k]);
        	if (!this.fv.Data) this.close("");

        	this.fnResizeGrid(this.fv);
        	//this.setTimer(0,200);
        }


        this.pExtCombo_ontimer = function(obj, e)
        {
        	this.killTimer(e.timerid);
        	if (e.timerid == 0)
        	{
        		this.dsCopy.set_rowposition(0);	//접근성 모드에서 로우포지션이 아래에 있음
        	}
        	else if (e.timerid == 1)
        	{
        		this.close("");
        	}
        }

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fnResizeGrid = function(objInfo)
        {
        	this.divList.form.grdComboList.set_binddataset("dsCopy");
        	this.divList.form.grdComboList.setCellProperty("Body",0,"text","bind:"+objInfo.ColNm);
        	//trace(this.dsCopy.rowcount*this.fv.nUnitItemHeight);
        	//trace(this.divList.height);
        	var rtn = this.dsCopy.rowcount*this.fv.nUnitItemHeight;
        	this.divList.form.grdComboList.setOffsetHeight(rtn);

        	this.divList.form.resetScroll();
        	this.resetScroll();

        	var objCombo = objInfo.combo;
        	var val = objCombo.value;
        	var nIndex = objCombo.index;
        	var nRow = this.dsCopy.findRow(objInfo.ColCd , val);

        	if (nIndex>-1)
        	{
        		this.dsCopy.set_rowposition(nRow );
        		this.divList.form.vscrollbar.set_pos((nRow-1)*this.fv.nUnitItemHeight);

        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnClose_onclick = function(obj,  e)
        {
        	this.close("");
        }

        this.grdComboList_oncellclick = function(obj, e)
        {
        	// post값을 세팅해서 ExtCombo로 넘기는 용도
        	this.fv.value = this.dsCopy.getColumn(e.row,this.fv.ColCd);
        	this.fv.text = this.dsCopy.getColumn(e.row,this.fv.ColNm);
        	this.fv.index = this.dsCopy.rowposition;

        	var objCombo = this.fv.combo;

        	// set_item
        	// 콤보에 값을 세팅하고 리스트팝업을 닫는다.
        	objCombo.set_item(this.fv);

        	// 접근성시 오류로 timer설정하여 팝업종료함.
        	if (nexacro.getApplication().enableaccessibility)
        	{
        		this.setTimer(1,200);
        	}
        	else
        	{
        		this.close("");
        	}

        	var rtnFuncObj = this.lookupFunc("fnConfirm");
        }


        this.divList_grdComboList_onsetfocus = function(obj, e)
        {
        	//trace("divList_grdComboList_onsetfocus");
        	this.divList.form.grdComboList.set_useselcolor(true);
        }

        this.divList_grdComboList_onkillfocus = function(obj, e)
        {
        	//trace("divList_grdComboList_onkillfocus");
        	this.divList.form.grdComboList.set_useselcolor(false);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pExtCombo_onload,this);
            this.addEventHandler("ontimer",this.pExtCombo_ontimer,this);
            this.divList.form.grdComboList.addEventHandler("oncellclick",this.grdComboList_oncellclick,this);
            this.divList.form.grdComboList.addEventHandler("onkillfocus",this.divList_grdComboList_onkillfocus,this);
            this.divList.form.grdComboList.addEventHandler("onsetfocus",this.divList_grdComboList_onsetfocus,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("pExtCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
