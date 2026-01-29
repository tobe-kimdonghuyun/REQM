(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,1270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "idx","type" : "STRING","size" : "256"},{"id" : "ymd","type" : "STRING","size" : "256"},{"id" : "goods","type" : "STRING","size" : "256"},{"id" : "version","type" : "STRING","size" : "256"}]},"Rows" : [{"idx" : "722","ymd" : "20241029","goods" : "043","version" : "2024.10.29.1","gubun" : "001"},{"idx" : "550","ymd" : "20210902","goods" : "043","version" : "2021.09.02","gubun" : "001"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","71","45","839","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("static에 usedecorate속성이 적용되어 링크로 이동될 때 탭키로 접근 가능해야 함.");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","70.00","170","447","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_font("54px/normal \"NotoSansKR\",\"Noto Sans KR\"");
            obj.set_usedecorate("true");
            obj.set_text("복지로  <l v=\'https://www.bokjiro.go.kr\'>바로가기</l>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","73","302","205","66",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1300,1270,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
        };
        this.loadIncludeScript("RP_104351_RP_101517_Form_Work (1) (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
