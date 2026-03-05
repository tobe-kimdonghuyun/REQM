(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chap4_Form");
            this.set_titletext("Exe2_Chap4_Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"EMP_NAME" : "Olivia","POS_CD" : "02","HIRE_DATE" : "20101003","SALARY" : "83490000","GENDER" : "W","MARRIED" : "1","MEMO" : "ivory","DEPT_CD" : "01","EMP_ID" : "KR180"},{"EMP_NAME" : "John","POS_CD" : "02","HIRE_DATE" : "20051011","SALARY" : "76010000","GENDER" : "M","MARRIED" : "0","MEMO" : "greenyellow","DEPT_CD" : "02","EMP_ID" : "KR190"},{"EMP_NAME" : "Dillon","POS_CD" : "03","HIRE_DATE" : "20150401","SALARY" : "62540000","GENDER" : "M","MARRIED" : "1","MEMO" : "lightpink","DEPT_CD" : "03","EMP_ID" : "JP110"},{"EMP_NAME" : "Jackson","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "99050000","GENDER" : "M","MARRIED" : "1","MEMO" : "aliceblue","DEPT_CD" : "02","EMP_ID" : "JP390"},{"EMP_NAME" : "Joseph","POS_CD" : "03","HIRE_DATE" : "20070304","SALARY" : "61220000","GENDER" : "W","MARRIED" : "1","MEMO" : "lightgray","DEPT_CD" : "05","EMP_ID" : "CN300"},{"EMP_NAME" : "Maia","POS_CD" : "01","HIRE_DATE" : "20090512","SALARY" : "63030000","GENDER" : "W","MARRIED" : "0","MEMO" : "ivory","DEPT_CD" : "04","EMP_ID" : "KR310"},{"EMP_NAME" : "Adam","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "88450000","GENDER" : "W","MARRIED" : "1","MEMO" : "greenyellow","DEPT_CD" : "04","EMP_ID" : "KR350"},{"EMP_NAME" : "Ray","POS_CD" : "01","HIRE_DATE" : "20160202","SALARY" : "67420000","GENDER" : "W","MARRIED" : "1","MEMO" : "lightpink","DEPT_CD" : "02","EMP_ID" : "CN160"},{"EMP_NAME" : "Cameron","POS_CD" : "03","HIRE_DATE" : "20010303","SALARY" : "86250000","GENDER" : "M","MARRIED" : "1","MEMO" : "aliceblue","DEPT_CD" : "03","EMP_ID" : "KR260"},{"EMP_NAME" : "Aladdin","POS_CD" : "04","HIRE_DATE" : "20161003","SALARY" : "67390000","GENDER" : "W","MARRIED" : "1","MEMO" : "lightgray","DEPT_CD" : "05","EMP_ID" : "JP140"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset3", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"}]},"Rows" : [{"EMP_ID" : "AA001","EMP_NAME" : "Olivia","DEPT_CD" : "01","SALARY" : "3000"},{"EMP_ID" : "AA002","EMP_NAME" : "John","DEPT_CD" : "02","SALARY" : "6000"},{"EMP_ID" : "BB001","EMP_NAME" : "Jackson","DEPT_CD" : "03","SALARY" : "3000"},{"EMP_ID" : "BB002","EMP_NAME" : "Maia","DEPT_CD" : "04","SALARY" : "4000"},{"EMP_ID" : "CC001","EMP_NAME" : "Adam","DEPT_CD" : "01","SALARY" : "8000"},{"EMP_ID" : "DD001","EMP_NAME" : "Ray","DEPT_CD" : "02","SALARY" : "5000"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","50","280","101","47",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104088_Promise__async_function.xfdl", function() {

        this.Button00_onclick = async function(obj,e)
        {
        	trace("log");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_104088_Promise__async_function.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
