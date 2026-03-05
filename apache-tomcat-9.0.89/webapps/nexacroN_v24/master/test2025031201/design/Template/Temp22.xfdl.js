(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp21");
            this.set_titletext("Search+Detai+List");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,1494);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">06</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">07</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">08</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">09</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">11</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">12</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">13</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">14</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","852",null,"592","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제품\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"가격\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","290",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Boundary");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","30","732","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("콤보");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","30","632","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("캘린더");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","30","532","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("체크박스");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","30","432","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("에디트");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","332","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelE");
            obj.set_text("필수에디트");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","30","372",null,"50","34",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","30","472",null,"50","34",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","30","672",null,"50","34",null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","30","772",null,"50","34",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("유형선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","30","572","170","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var CheckBoxSet00_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_innerdataset", obj);
            CheckBoxSet00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/><Column id=\"readonlycolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"datacolumn\">B</Col></Row></Rows>");
            obj.set_innerdataset(CheckBoxSet00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("Button00","30","200",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Full");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","30","30","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","30","70",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09_00_00","30","130",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("TOBESOFT");
            obj.set_text("TOBESOFT");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,1494,this,function(p){});
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
        this.loadIncludeScript("Temp22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
