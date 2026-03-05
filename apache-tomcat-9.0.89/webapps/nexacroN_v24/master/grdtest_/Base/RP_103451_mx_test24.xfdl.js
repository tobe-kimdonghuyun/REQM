(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mx_test24");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dbasePoGrdList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "_CHK","type" : "STRING","size" : "256"},{"id" : "SALES_ORG","type" : "STRING","size" : "256"},{"id" : "SITE_FROM","type" : "STRING","size" : "256"},{"id" : "SITE_FROM_NM","type" : "STRING","size" : "256"},{"id" : "SITE_FROM_ACRM","type" : "STRING","size" : "256"},{"id" : "CLIENT","type" : "STRING","size" : "256"},{"id" : "CLIENT_NM","type" : "STRING","size" : "256"},{"id" : "CLIENT_ACRM","type" : "STRING","size" : "256"},{"id" : "PO_NO","type" : "STRING","size" : "256"},{"id" : "PO_EX_NO","type" : "STRING","size" : "256"},{"id" : "PO_ITEM","type" : "STRING","size" : "256"},{"id" : "DESTNT","type" : "STRING","size" : "256"},{"id" : "PO_TYPE","type" : "STRING","size" : "256"},{"id" : "PO_DATE","type" : "STRING","size" : "256"},{"id" : "PO_STATUS","type" : "STRING","size" : "256"},{"id" : "DEALQ","type" : "STRING","size" : "256"},{"id" : "DEAL_NO","type" : "STRING","size" : "256"},{"id" : "MODEL","type" : "STRING","size" : "256"},{"id" : "ACCOUNTID","type" : "STRING","size" : "256"},{"id" : "MAIN_MODEL","type" : "STRING","size" : "256"},{"id" : "DEAL_SUB_VER","type" : "BIGDECIMAL","size" : "256"},{"id" : "WEEK","type" : "STRING","size" : "256"},{"id" : "PO_VER","type" : "BIGDECIMAL","size" : "256"},{"id" : "LAST_PO_AMD_REQ_DATE","type" : "STRING","size" : "256"},{"id" : "LAST_PO_AMD_REQ_NO","type" : "STRING","size" : "256"},{"id" : "LAST_PO_AMD_REQ_USER","type" : "STRING","size" : "256"},{"id" : "LAST_PO_AMD_APPRV_STATUS","type" : "STRING","size" : "256"},{"id" : "LAST_PO_AMD_APPRV_DATE","type" : "DATETIME","size" : "256"},{"id" : "LAST_PO_AMD_APPRV_USER","type" : "STRING","size" : "256"},{"id" : "CLTNPRC_LIST_ID","type" : "STRING","size" : "256"},{"id" : "CMS_COND","type" : "STRING","size" : "256"},{"id" : "TIER","type" : "STRING","size" : "256"},{"id" : "INCOTERMS1","type" : "STRING","size" : "256"},{"id" : "INCOTERMS2","type" : "STRING","size" : "256"},{"id" : "PAYTERM","type" : "STRING","size" : "256"},{"id" : "SHIPPING_TYPE","type" : "STRING","size" : "256"},{"id" : "EARLY_SHIP_YN","type" : "STRING","size" : "256"},{"id" : "PARTIAL_SHIP_YN","type" : "STRING","size" : "256"},{"id" : "REFER_NO","type" : "STRING","size" : "256"},{"id" : "FR_CURR","type" : "STRING","size" : "256"},{"id" : "TO_CURR","type" : "STRING","size" : "256"},{"id" : "EXCH_RATE","type" : "STRING","size" : "256"},{"id" : "PO_QTY","type" : "BIGDECIMAL","size" : "256"},{"id" : "DLV_QTY","type" : "BIGDECIMAL","size" : "256"},{"id" : "DLV_BAL_QTY","type" : "BIGDECIMAL","size" : "256"},{"id" : "PO_CANCEL_QTY","type" : "BIGDECIMAL","size" : "256"},{"id" : "DLV_REMAIN_QTY","type" : "BIGDECIMAL","size" : "256"},{"id" : "DS_QTY","type" : "BIGDECIMAL","size" : "256"},{"id" : "UNIT_PRICE","type" : "BIGDECIMAL","size" : "256"},{"id" : "CURRENCY","type" : "STRING","size" : "256"},{"id" : "PO_CANCEL_LMF","type" : "STRING","size" : "256"},{"id" : "PI_ASGN_QTY","type" : "STRING","size" : "256"},{"id" : "REMARK","type" : "STRING","size" : "256"},{"id" : "HIS_YN","type" : "STRING","size" : "256"},{"id" : "CREATEDATE","type" : "DATETIME","size" : "256"},{"id" : "CREATEUSER","type" : "STRING","size" : "256"},{"id" : "UPDATEDATE","type" : "DATETIME","size" : "256"},{"id" : "UPDATEUSER","type" : "STRING","size" : "256"},{"id" : "AVAIL_QTY","type" : "STRING","size" : "256"},{"id" : "DS_YN","type" : "STRING","size" : "256"},{"id" : "TEMP_CHK","type" : "STRING","size" : "256"},{"id" : "DEAL_STATUS","type" : "STRING","size" : "256"},{"id" : "DEAL_QTY","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","26","15","1149","691",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autosizingtype("col");
            obj.set_binddataset("ds_dbasePoGrdList");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"_CHK\"/><Cell col=\"1\" text=\"SALES_ORG\"/><Cell col=\"2\" text=\"SITE_FROM\"/><Cell col=\"3\" text=\"SITE_FROM_NM\"/><Cell col=\"4\" text=\"SITE_FROM_ACRM\"/><Cell col=\"5\" text=\"CLIENT\"/><Cell col=\"6\" text=\"CLIENT_NM\"/><Cell col=\"7\" text=\"CLIENT_ACRM\"/><Cell col=\"8\" text=\"PO_NO\"/><Cell col=\"9\" text=\"PO_EX_NO\"/><Cell col=\"10\" text=\"PO_ITEM\"/><Cell col=\"11\" text=\"DESTNT\"/><Cell col=\"12\" text=\"PO_TYPE\"/><Cell col=\"13\" text=\"PO_DATE\"/><Cell col=\"14\" text=\"PO_STATUS\"/><Cell col=\"15\" text=\"DEALQ\"/><Cell col=\"16\" text=\"DEAL_NO\"/><Cell col=\"17\" text=\"MODEL\"/><Cell col=\"18\" text=\"ACCOUNTID\"/><Cell col=\"19\" text=\"MAIN_MODEL\"/><Cell col=\"20\" text=\"DEAL_SUB_VER\"/></Band><Band id=\"body\"><Cell text=\"bind:_CHK\"/><Cell col=\"1\" text=\"bind:SALES_ORG\"/><Cell col=\"2\" text=\"bind:SITE_FROM\"/><Cell col=\"3\" text=\"bind:SITE_FROM_NM\"/><Cell col=\"4\" text=\"bind:SITE_FROM_ACRM\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"5\" text=\"bind:CLIENT\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"6\" text=\"bind:CLIENT_NM\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"7\" text=\"bind:CLIENT_ACRM\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"8\" text=\"bind:PO_NO\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"9\" text=\"bind:PO_EX_NO\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"10\" text=\"bind:PO_ITEM\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"11\" text=\"bind:DESTNT\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"12\" text=\"bind:PO_TYPE\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"13\" text=\"bind:PO_DATE\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"14\" text=\"bind:PO_STATUS\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"15\" text=\"bind:DEALQ\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"16\" text=\"bind:DEAL_NO\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"17\" text=\"bind:MODEL\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"18\" text=\"bind:ACCOUNTID\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"19\" text=\"bind:MAIN_MODEL\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/><Cell col=\"20\" text=\"bind:DEAL_SUB_VER\" cssclass=\"expr:SITE_FROM_NM == &quot;KOREA&quot; || SITE_FROM_NM == &quot;AMERICA&quot; ? &quot;cell_Line&quot; : &quot;cell_Default&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1180","130","83","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("로우셋팅");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1183","188","85","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("fix");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103451_mx_test24.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Grid00.enableredraw = false;
        	for(var i = 0 ; i< 1000 ; i++)
        	{
        		this.ds_dbasePoGrdList.addRow();
        		this.ds_dbasePoGrdList.setColumn(i,"SITE_FROM_NM","KOREA");
        	}
        	this.Grid00.enableredraw = true;
        };

        this.fn_setGrdFixColumn = function(objGrd, nCell)
        {
        	objGrd.set_enableredraw(false);

        	for(var i=0;i<objGrd.getCellCount("body");i++) {
        		objGrd.setFormatColProperty(i,"band","body");
        		var sCssClass = objGrd.getCellProperty("body", i, "cssclass");
        		if(!this.fn_isNull(sCssClass) && sCssClass == "cell_Fixed") objGrd.setCellProperty("body", i, "cssclass", "");
        	}

        	for(var i=0;i<=nCell;i++)
        	{
        		objGrd.setFormatColProperty(i,"band","left");

        		var sCssClass = objGrd.getCellProperty("body", i, "cssclass");

        		if(this.fn_isNull(sCssClass)) {
        			objGrd.setCellProperty("body", i, "cssclass", "cell_Fixed");
        		}
        	}

        	objGrd.set_enableredraw(true);
        }


        this.fn_isNull = function(sValue){
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.fn_setGrdFixColumn(this.Grid00, 3);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("RP_103451_mx_test24.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
