(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list01", this);
            obj.set_preload("false");
            obj.set_enableevent("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "_CHK","type" : "STRING","size" : "255"},{"id" : "SUBSIDIARY","type" : "STRING","size" : "255"},{"id" : "SUBSIDIARYNM","type" : "STRING","size" : "255"},{"id" : "PRODUCTGROUP","type" : "STRING","size" : "255"},{"id" : "PRODUCT","type" : "STRING","size" : "255"},{"id" : "SIMUL_VERSION","type" : "STRING","size" : "255"},{"id" : "PLANWEEK","type" : "STRING","size" : "255"},{"id" : "SIMUL_VERSION_DESCRIP","type" : "STRING","size" : "255"},{"id" : "SIMUL_VERSION_NM","type" : "STRING","size" : "255"},{"id" : "SCORE01","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE02","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE03","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE04","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE05","type" : "STRING","size" : "255"},{"id" : "TOTALSCORE","type" : "STRING","size" : "255"},{"id" : "BESTSYSTEM","type" : "STRING","size" : "255"},{"id" : "BESTUSER","type" : "STRING","size" : "255"},{"id" : "SORD","type" : "INT","size" : "255"},{"id" : "CHKUSER","type" : "STRING","size" : "255"},{"id" : "CONFIRMED","type" : "STRING","size" : "255"}]},"Rows" : [{"_CHK" : "","SUBSIDIARY" : "","SUBSIDIARYNM" : "","PRODUCTGROUP" : "","PRODUCT" : "","SIMUL_VERSION" : "202533-AR-HHP-A-008","PLANWEEK" : "","SIMUL_VERSION_DESCRIP" : "Normal Scenario (Due Week)","SIMUL_VERSION_NM" : "202533-AR-HHP-A-008\n\rNormal Scenario (Due Week)","SCORE01" : "","SCORE02" : "","SCORE03" : "","SCORE04" : "","SCORE05" : "","TOTALSCORE" : "","BESTSYSTEM" : "","BESTUSER" : "","SORD" : "","CHKUSER" : "","CONFIRMED" : ""},{"_CHK" : "","SUBSIDIARY" : "","SUBSIDIARYNM" : "","PRODUCTGROUP" : "","PRODUCT" : "","SIMUL_VERSION" : "202533-AR-HHP-A-008","PLANWEEK" : "","SIMUL_VERSION_DESCRIP" : "Normal Scenario (Due Week)","SIMUL_VERSION_NM" : "202533-AR-HHP-A-008\n\rNormal Scenario (Due Week)","SCORE01" : "","SCORE02" : "","SCORE03" : "","SCORE04" : "","SCORE05" : "","TOTALSCORE" : "","BESTSYSTEM" : "","BESTUSER" : "","SORD" : "","CHKUSER" : "","CONFIRMED" : ""}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01_00", this);
            obj.set_preload("false");
            obj.set_enableevent("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "_CHK","type" : "STRING","size" : "255"},{"id" : "SUBSIDIARY","type" : "STRING","size" : "255"},{"id" : "SUBSIDIARYNM","type" : "STRING","size" : "255"},{"id" : "PRODUCTGROUP","type" : "STRING","size" : "255"},{"id" : "PRODUCT","type" : "STRING","size" : "255"},{"id" : "SIMUL_VERSION","type" : "STRING","size" : "255"},{"id" : "PLANWEEK","type" : "STRING","size" : "255"},{"id" : "SIMUL_VERSION_DESCRIP","type" : "STRING","size" : "255"},{"id" : "SIMUL_VERSION_NM","type" : "STRING","size" : "255"},{"id" : "SCORE01","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE02","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE03","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE04","type" : "BIGDECIMAL","size" : "255"},{"id" : "SCORE05","type" : "STRING","size" : "255"},{"id" : "TOTALSCORE","type" : "STRING","size" : "255"},{"id" : "BESTSYSTEM","type" : "STRING","size" : "255"},{"id" : "BESTUSER","type" : "STRING","size" : "255"},{"id" : "SORD","type" : "INT","size" : "255"},{"id" : "CHKUSER","type" : "STRING","size" : "255"},{"id" : "CONFIRMED","type" : "STRING","size" : "255"}]},"Rows" : [{"_CHK" : "","SUBSIDIARY" : "","SUBSIDIARYNM" : "","PRODUCTGROUP" : "","PRODUCT" : "","SIMUL_VERSION" : "202533-AR-HHP-A-008","PLANWEEK" : "","SIMUL_VERSION_DESCRIP" : "Normal Scenario (Due Week)","SIMUL_VERSION_NM" : "202533-AR-HHP-A-008\n\rNormal Scenario (Due Week)","SCORE01" : "","SCORE02" : "","SCORE03" : "","SCORE04" : "","SCORE05" : "","TOTALSCORE" : "","BESTSYSTEM" : "","BESTUSER" : "","SORD" : "","CHKUSER" : "","CONFIRMED" : ""},{"_CHK" : "","SUBSIDIARY" : "","SUBSIDIARYNM" : "","PRODUCTGROUP" : "","PRODUCT" : "","SIMUL_VERSION" : "202533-AR-HHP-A-008","PLANWEEK" : "","SIMUL_VERSION_DESCRIP" : "Normal Scenario (Due Week)","SIMUL_VERSION_NM" : "202533-AR-HHP-A-008\n\rNormal Scenario (Due Week)","SCORE01" : "","SCORE02" : "","SCORE03" : "","SCORE04" : "","SCORE05" : "","TOTALSCORE" : "","BESTSYSTEM" : "","BESTUSER" : "","SORD" : "","CHKUSER" : "","CONFIRMED" : ""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","70","290","220","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("클릭");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_headerList","0","0","30.15625%","205",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list01");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"53\"/><Column size=\"50\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"53\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"Scenario\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" colspan=\"3\"/><Cell col=\"12\" rowspan=\"2\" text=\"Scenario\" suppress=\"4\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\" text=\"User\"/></Band><Band id=\"body\"><Cell text=\"bind:SUBSIDIARYNM\" suppress=\"1\" textAlign=\"left\" border=\"1px solid red\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:PRODUCT\" suppress=\"3\" textAlign=\"left\" border=\"1px solid red\"/><Cell col=\"2\" text=\"bind:SIMUL_VERSION_NM\" suppressalign=\"middle\" textAlign=\"right\" verticalAlign=\"middle\" border=\"1px solid red\"/><Cell col=\"3\" displaytype=\"mask\" text=\"expr:dataset.parent.gfn_isNull(SCORE01)?0:SCORE01\" textAlign=\"right\" verticalAlign=\"middle\" maskeditformat=\"expr:SORD==&apos;0&apos;?&apos;##0.0&apos;:&apos;##0.00&apos;\" maskeditpostfixtext=\"expr:SORD==&apos;0&apos;?&apos;%&apos;:&apos;&apos;\" border=\"1px solid red\"/><Cell col=\"4\" displaytype=\"mask\" text=\"expr:dataset.parent.gfn_isNull(SCORE02)?0:SCORE02\" textAlign=\"right\" maskeditformat=\"expr:SORD==&apos;0&apos;?&apos;##0.0&apos;:&apos;##0.00&apos;\" maskeditpostfixtext=\"expr:SORD==&apos;0&apos;?&apos;%&apos;:&apos;&apos;\" border=\"1px solid red\"/><Cell col=\"5\" displaytype=\"mask\" text=\"expr:dataset.parent.gfn_isNull(SCORE03)?0:SCORE03\" textAlign=\"right\" maskeditformat=\"expr:SORD==&apos;0&apos;?&apos;##0.0&apos;:&apos;##0.00&apos;\" maskeditpostfixtext=\"expr:SORD==&apos;0&apos;?&apos;%&apos;:&apos;&apos;\" border=\"1px solid red\"/><Cell col=\"6\" displaytype=\"mask\" text=\"expr:dataset.parent.gfn_isNull(SCORE04)?0:SCORE04\" textAlign=\"right\" maskeditformat=\"expr:SORD==&apos;0&apos;?&apos;##0.0&apos;:&apos;##0.00&apos;\" maskeditpostfixtext=\"expr:SORD==&apos;0&apos;?&apos;%&apos;:&apos;&apos;\" border=\"1px solid red\"/><Cell col=\"7\" displaytype=\"mask\" text=\"expr:dataset.parent.gfn_isNull(SCORE05)?0:SCORE05\" textAlign=\"right\" maskeditformat=\"expr:SORD==&apos;0&apos;?&apos;##0.0&apos;:&apos;##0.00&apos;\" maskeditpostfixtext=\"expr:SORD==&apos;0&apos;?&apos;%&apos;:&apos;&apos;\" border=\"1px solid red\"/><Cell col=\"8\" displaytype=\"mask\" text=\"bind:TOTALSCORE\" textAlign=\"right\" maskeditformat=\"expr:SIMUL_VERSION==&apos;WEIGHT&apos;?&apos;&apos;:&apos;!#,###,###,##0.000&apos;\" verticalAlign=\"top\" suppress=\"6\" suppressalign=\"middle\" border=\"1px solid red\"/><Cell col=\"9\" text=\"bind:BESTSYSTEM\" textAlign=\"center\" verticalAlign=\"top\" suppress=\"7\" suppressalign=\"middle\" border=\"1px solid red\"/><Cell col=\"10\" edittype=\"expr:SIMUL_VERSION==&apos;WEIGHT&apos;?&apos;none&apos;:&apos;checkbox&apos;\" text=\"bind:CHKUSER\" textAlign=\"center\" verticalAlign=\"top\" suppress=\"7\" suppressalign=\"middle\" displaytype=\"expr:SIMUL_VERSION==&apos;WEIGHT&apos;?&apos;none&apos;:&apos;checkboxcontrol&apos;\" border=\"1px solid red\"/><Cell col=\"11\" displaytype=\"expr:SIMUL_VERSION==&apos;WEIGHT&apos;?&apos;none&apos;:&apos;normal&apos;\" text=\"bind:BESTUSER\" textAlign=\"center\" verticalAlign=\"top\" suppress=\"7\" suppressalign=\"middle\"/><Cell col=\"12\" text=\"bind:SIMUL_VERSION_NM\" suppressalign=\"middle\" textAlign=\"right\" verticalAlign=\"middle\" suppress=\"4\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","87","378","347","101",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
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
        this.registerScript("Form_Work.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
        		var objGrd 	= this.grd_headerList;
        		objGrd.setBindDataset( this.ds_list01 );
        		this.fn_merge(objGrd, this.ds_list01, 2, 	"SIMUL_VERSION", 	this.ds_list01.getColumn(0, "SIMUL_VERSION"));
        };

        this.fn_merge = function(objGrd, objDs, nCol, sColNm, sData)
        {
        	var objGrd = this.grd_headerList;
        	objGrd.setBindDataset( this.ds_list01 );
        	// suppress 문제로 예외처리
        	var nStartRow 	= 0;
        	for(var i=0;i<objDs.rowcount;i++) {
        		var simulversion = objDs.getColumn(i, sColNm);
        		if(sData != simulversion) {
        			sData = simulversion;
        			objGrd.mergeCell(nCol, nCol, nStartRow, i-1, true);
        			nStartRow = i;
        		} else {
        			if(i == objDs.rowcount-1) {
        				objGrd.mergeCell(nCol, nCol, nStartRow, i,true);
        			}
        		}
        	}
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.ds_list01.copyData(this.ds_list01_00);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.np700574_gird_cellmerge_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.ds_list01.addEventHandler("oncolumnchanged",this.ds_list01_oncolumnchanged,this);
            this.ds_list01_00.addEventHandler("oncolumnchanged",this.ds_list01_oncolumnchanged,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
