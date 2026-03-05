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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">20271212</Col></Row><Row><Col id=\"Column0\">20271212</Col></Row></Rows>");
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
            obj.set_autofittype("col");
            obj.set_binddataset("dsItem");
            obj.set_cssclass("grd_notice_M");
            obj.set_selecttype("cell");
            obj.set_accessibilitylabel("항목을 선택후 닫기버튼을 클릭해주세요");
            obj.set_fillareatype("controlrow");
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
        this.registerScript("comm_extCombo_copy0_copy0.xfdl", function() {

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");
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
        this.loadIncludeScript("comm_extCombo_copy0_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
