(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("doUserList", this);
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj.set_binddataobject("doUserList");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [{"datapath" : "@.id","id" : "USER_ID","size" : "256","type" : "STRING"},{"datapath" : "@.name","id" : "USER_NM","size" : "256","type" : "STRING"},{"datapath" : "@.username","id" : "USER_LOGIN_ID","size" : "256","type" : "STRING"},{"datapath" : "@.email","id" : "EMAIL","size" : "256","type" : "STRING"},{"datapath" : "@.phone","id" : "PHONE","size" : "256","type" : "STRING"},{"datapath" : "@.website","id" : "WEBSITE","size" : "256","type" : "STRING"},{"datapath" : "@.address.city","id" : "CITY","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","20","20","600","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("DataObject REST API 샘플 (JSONPlaceholder)");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoad","20","60","160","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자 목록 조회");
            this.addChild(obj.name, obj);

            obj = new Static("staStatus","200","60","500","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserList","20","110",null,null,"20","20",null,null,null,null,this);
            obj.set_binddataset("dsUserList");
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"170\"/><Column size=\"150\"/><Column size=\"140\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"사용자ID\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"전화번호\"/><Cell col=\"5\" text=\"웹사이트\"/><Cell col=\"6\" text=\"도시\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:USER_NM\"/><Cell col=\"2\" text=\"bind:USER_LOGIN_ID\"/><Cell col=\"3\" text=\"bind:EMAIL\"/><Cell col=\"4\" text=\"bind:PHONE\"/><Cell col=\"5\" text=\"bind:WEBSITE\"/><Cell col=\"6\" text=\"bind:CITY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("main.xfdl", function() {

        /*******************************************************************************
         * FORM EVENT
        *******************************************************************************/
        this.main_onload = function(obj,e)
        {
        	this.staStatus.set_text("");
        };

        /*******************************************************************************
         * COMPONENT EVENT
        *******************************************************************************/
        this.btnLoad_onclick = function(obj,e)
        {
        	this.staStatus.set_text("조회 중...");
        	this.doUserList.request("SEARCH", "GET", "https://jsonplaceholder.typicode.com/users", null);
        };

        this.doUserList_onsuccess = function(obj,e)
        {
        	if (e.statuscode != 200)
        	{
        		e.preventDefault();
        		this.staStatus.set_text("통신 실패: " + e.statuscode);
        	}
        };

        this.doUserList_onerror = function(obj,e)
        {
        	this.staStatus.set_text("오류: " + e.errormsg);
        };

        this.dsUserList_onload = function(obj,e)
        {
        	this.staStatus.set_text("조회 완료 (" + obj.rowcount + "건)");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_onload,this);
            this.btnLoad.addEventHandler("onclick",this.btnLoad_onclick,this);
            this.doUserList.addEventHandler("onerror",this.doUserList_onerror,this);
            this.doUserList.addEventHandler("onsuccess",this.doUserList_onsuccess,this);
            this.dsUserList.addEventHandler("onload",this.dsUserList_onload,this);
        };

        this.loadIncludeScript("main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
