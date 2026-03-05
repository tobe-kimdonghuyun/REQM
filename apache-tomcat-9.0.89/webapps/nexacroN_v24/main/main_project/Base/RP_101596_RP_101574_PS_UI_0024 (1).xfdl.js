(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PS_UI_0024");
            this.set_titletext("공지사항 게시판 리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1126,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"본부\" type=\"STRING\" size=\"256\"/><Column id=\"사업소\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">공지</Col><Col id=\"상태\"/><Col id=\"본부\"/><Col id=\"사업소\"/><Col id=\"lev\">0</Col></Row><Row><Col id=\"NO\">1</Col><Col id=\"상태\"/><Col id=\"본부\"/><Col id=\"사업소\"/></Row><Row><Col id=\"NO\">2</Col></Row><Row><Col id=\"NO\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">0</Col><Col id=\"TITLE\">공지사항첫번째</Col></Row><Row><Col id=\"NO\">1</Col><Col id=\"TITLE\">공지사항두번째</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00_00","24","30",null,"203","76",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00_00");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_accessibilitylabel("공지사항표");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"600\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"전체선택\"/><Cell col=\"1\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" accessibilitylabel=\"bind:TITLE\"/><Cell col=\"1\" text=\"bind:TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","24","243",null,"203","76",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00_00");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_accessibilitylabel("공지사항표");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"600\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell accessibilitylabel=\"전체선택\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" accessibilitylabel=\"bind:TITLE\"/><Cell col=\"1\" text=\"bind:TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","24","469","480","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1126,900,this,function(p){});
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

        };
        this.loadIncludeScript("RP_101596_RP_101574_PS_UI_0024 (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
