(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("floatbase");
            this.set_titletext("New Form");
            this.getSetter("_isTimeData").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"DATETIME\" size=\"256\"/><Column id=\"to\" type=\"DATETIME\" size=\"256\"/><Column id=\"percent\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">제우스</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201700</Col><Col id=\"percent\">인사총무팀</Col></Row><Row><Col id=\"Browser\">아프로디테</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">제품구현그룹</Col></Row><Row><Col id=\"Browser\">포세이돈</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">제품관리그룹</Col></Row><Row><Col id=\"Browser\">아테나</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">NX14팀</Col></Row><Row><Col id=\"Browser\">아테나</Col><Col id=\"from\">201102201300</Col><Col id=\"to\">201102201500</Col><Col id=\"percent\">연구개발본부</Col></Row><Row><Col id=\"Browser\">아테나</Col><Col id=\"from\">201102201630</Col><Col id=\"to\">201102201800</Col><Col id=\"percent\">제품구현1그룹</Col></Row><Row><Col id=\"Browser\">헤르메스</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">융합기술개발팀</Col></Row><Row><Col id=\"Browser\">에스티아</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201700</Col><Col id=\"percent\">일본사업팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FloatChart("FloatChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("isdatetimevalue").set("true");
            obj.getSetter("rotateaxis").set("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("floatbase_plan_hour.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("floatbase_plan_hour.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
