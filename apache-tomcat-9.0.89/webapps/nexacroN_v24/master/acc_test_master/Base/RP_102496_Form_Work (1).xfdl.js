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
                this._setFormPosition(1280,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dc_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"체크박스\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Text\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/><Column id=\"ProgressBar\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"radio\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">0</Col><Col id=\"Number\">1500000</Col><Col id=\"Text\">가나다라마</Col><Col id=\"체크박스\">1</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">01</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">0</Col><Col id=\"radio\"/></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">0</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">02</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">1</Col><Col id=\"radio\"/></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">1</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">03</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">2</Col><Col id=\"radio\"/></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"체크박스\"/><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">2</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">04</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">3</Col><Col id=\"radio\"/></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">3</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">05</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">4</Col><Col id=\"radio\"/></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">0</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">06</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">5</Col><Col id=\"radio\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"체크박스\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Text\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/><Column id=\"ProgressBar\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"radio\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">0</Col><Col id=\"Number\">1500000</Col><Col id=\"Text\">가나다라마</Col><Col id=\"체크박스\">1</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">01</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">0</Col><Col id=\"radio\">1</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">0</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">02</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">1</Col><Col id=\"radio\">0</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">1</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">03</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">2</Col><Col id=\"radio\">1</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"체크박스\"/><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">2</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">04</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">3</Col><Col id=\"radio\">0</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">3</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">05</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">4</Col><Col id=\"radio\">1</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">0</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">06</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">5</Col><Col id=\"radio\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","26","18","579","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 - 라디오 cell");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","26","137",null,"283","234",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dc_grd");
            obj.set_autoenter("select");
            obj.set_createrowstype("all");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"48\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"Edit\"/><Cell col=\"2\" colspan=\"2\" text=\"Radio라디오\" cssclass=\"cell_WF_NoLine\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:Edit\" displaytype=\"editcontrol\"/><Cell col=\"2\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:radio\" radioitemcodevalue=\"1\" radioitemsize=\"15\"/><Cell col=\"3\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:radio\" radioitemcodevalue=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","30","440",null,"283","230",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dc_grd00");
            obj.set_autoenter("select");
            obj.set_createrowstype("all");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"48\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"Edit\"/><Cell col=\"2\" colspan=\"2\" text=\"Radio라디오\" cssclass=\"cell_WF_NoLine\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:Edit\" displaytype=\"editcontrol\"/><Cell col=\"2\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:radio\" radioitemcodevalue=\"1\" radioitemsize=\"15\"/><Cell col=\"3\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:radio\" radioitemcodevalue=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,970,this,function(p){});
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
            this.addEventHandler("ontimer",this.Form_Work_ontimer,this);
            this.Grid01.addEventHandler("onheadclick",this.Grid01_onheadclick,this);
            this.Grid01.addEventHandler("onkeydown",this.Grid01_onkeydown,this);
            this.Grid01_00.addEventHandler("onheadclick",this.Grid01_onheadclick,this);
            this.Grid01_00.addEventHandler("onkeydown",this.Grid01_onkeydown,this);
        };
        this.loadIncludeScript("RP_102496_Form_Work (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
