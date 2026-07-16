(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Dataset_M_addRow_DnR_QA_01");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column1" : "2"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "size","size" : "256","type" : "STRING"},{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{},{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static00","0","0","440","8",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","0","0","8","552",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","0","76","440","8",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","172","0","8","552",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","0.63%","8","12.73%","68",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("M_Dataset_M_addRow_DnR_QA_01.xfdl","lib::libCommon.xjs");
        this.registerScript("M_Dataset_M_addRow_DnR_QA_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : addRow DnR
        * 작성일    : 2018.09.14
        * 작성자    : 윤재식
        * 수정이력  :
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2018.09.14  윤재식   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;

        /***********************************************************************
        * 01 : 이벤트 선언부
        ***********************************************************************/
        this.A_Dataset_M_addRow_DnR_QA_01_onload = function(obj,e)
        {
        	this.gfnInitDnR();
        };

        /***********************************************************************
        * 02 : Test Case, validator 선언부
        ***********************************************************************/
        /***********************************************************************
        * 모든 TC 실행
        ***********************************************************************/
        this.testAll = function ()
        {
        	//기본
        	var runner = this.gfnGetRunner();

        	runner._testAll();
        };

        /***********************************************************************
        * initialize 함수(TestCase 실행시 최초 1회 발생)
        ***********************************************************************/
        this.initialize = function()
        {
        	this.ds00.clearData();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Dataset_M_addRow_DnR_QA_01_onload,this);
        };

        this.loadIncludeScript("M_Dataset_M_addRow_DnR_QA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
