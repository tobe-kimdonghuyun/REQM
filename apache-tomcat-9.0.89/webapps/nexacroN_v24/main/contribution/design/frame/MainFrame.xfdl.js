(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMain");
            this.set_titletext("Main");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,772);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다라마바사아</Col><Col id=\"Column1\">2021-06-08</Col></Row><Row><Col id=\"Column0\">가나다라마바사아</Col><Col id=\"Column1\">2021-06-08</Col></Row><Row><Col id=\"Column0\">가나다라마바사아</Col><Col id=\"Column1\">2021-06-08</Col></Row><Row><Col id=\"Column0\">가나다라마바사아</Col><Col id=\"Column1\">2021-06-08</Col></Row><Row><Col id=\"Column0\">가나다라마바사아</Col><Col id=\"Column1\">2021-06-08</Col></Row><Row><Col id=\"Column0\">가나다라마바사아</Col><Col id=\"Column1\">2021-06-08</Col></Row><Row><Col id=\"Column0\">가나다라마바사아</Col><Col id=\"Column1\">2021-06-08</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">10:20</Col><Col id=\"Column0\">theme://images/grd_MF_Dot01.png</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">10:20</Col><Col id=\"Column0\">theme://images/grd_MF_Dot02.png</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">10:20</Col><Col id=\"Column0\">theme://images/grd_MF_Dot03.png</Col></Row><Row><Col id=\"Column0\">theme://images/grd_MF_Dot03.png</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">10:20</Col></Row><Row><Col id=\"Column0\">theme://images/grd_MF_Dot03.png</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">10:20</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","0","0",null,"199","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme://images/img_MF_Banner.png\')");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00","20","138","330","290",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_Box,box1");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00",null,"21","48","41","22",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_More");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","28","11","159","45",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MF_tile");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Grid("grd00","25","68","281","202",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"172\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" edittype=\"date\" cssclass=\"cell_WF_Right,cell_WF_DecoNo\"/></Band></Format></Formats>");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Div("divCalendar","370","138","680","290",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_MF_Box2,box2");
            obj.set_background("");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00","33","20",null,null,"400","20",null,null,null,null,this.div00.form.divCalendar.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            obj.set_cssclass("cal_MF_Cal");
            obj.set_usetrailingday("true");
            obj.set_weekformat("S M T W T F S");
            this.div00.form.divCalendar.addChild(obj.name, obj);

            obj = new Div("divTodolost","680","138","370","290",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_MF_BoxColor,box3");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","28","11","159","45",null,null,null,null,null,null,this.div00.form.divTodolost.form);
            obj.set_taborder("0");
            obj.set_text("TODOLIST");
            obj.set_cssclass("sta_MF_tile2");
            this.div00.form.divTodolost.addChild(obj.name, obj);

            obj = new Grid("grd00","25","68",null,null,"25","20",null,null,null,null,this.div00.form.divTodolost.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_MF_Todo");
            obj.set_autofittype("col");
            obj.set_binddataset("ds01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"23\"/><Column size=\"211\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"cell_WF_Right,cell_WF_DecoNo\"/></Band></Format></Formats>");
            this.div00.form.divTodolost.addChild(obj.name, obj);

            obj = new Button("btn00",null,"15","48","41","22",null,null,null,null,null,this.div00.form.divTodolost.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MF_New");
            this.div00.form.divTodolost.addChild(obj.name, obj);

            obj = new Div("divTodo","541","448","505","304",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_MF_Box,box5");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","0","0","169",null,null,"152",null,null,null,null,this.div00.form.divTodo.form);
            obj.set_taborder("0");
            obj.set_text("개발가이드 다운로드");
            obj.set_cssclass("btn_MF_Quick01");
            this.div00.form.divTodo.addChild(obj.name, obj);

            obj = new Button("btn00_00","169","0","168",null,null,"152",null,null,null,null,this.div00.form.divTodo.form);
            obj.set_taborder("1");
            obj.set_text("디자인가이드 다운로드");
            obj.set_cssclass("btn_MF_Quick02");
            this.div00.form.divTodo.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","337","0","168",null,null,"152",null,null,null,null,this.div00.form.divTodo.form);
            obj.set_taborder("2");
            obj.set_text("아이디어 게시판");
            obj.set_cssclass("btn_MF_Quick03");
            this.div00.form.divTodo.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","337","152","168","152",null,null,null,null,null,null,this.div00.form.divTodo.form);
            obj.set_taborder("3");
            obj.set_text("기술지원");
            obj.set_cssclass("btn_MF_Quick06");
            this.div00.form.divTodo.addChild(obj.name, obj);

            obj = new Button("btn00_00_01","169","152","168","152",null,null,null,null,null,null,this.div00.form.divTodo.form);
            obj.set_taborder("4");
            obj.set_text("플레이넥사");
            obj.set_cssclass("btn_MF_Quick05");
            this.div00.form.divTodo.addChild(obj.name, obj);

            obj = new Button("btn00_01","0","152","169","152",null,null,null,null,null,null,this.div00.form.divTodo.form);
            obj.set_taborder("5");
            obj.set_text("투비소프트");
            obj.set_cssclass("btn_MF_Quick04");
            this.div00.form.divTodo.addChild(obj.name, obj);

            obj = new Div("divLoginLog","20","448","505","304",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("OS/브라우저/해상도별 접속 현황");
            obj.set_cssclass("div_MF_Box,box4");
            obj.set_url("frame::frmMainLogDv.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.divCalendar.form
            obj = new Layout("default","",0,0,this.div00.form.divCalendar.form,function(p){});
            this.div00.form.divCalendar.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.divTodolost.form
            obj = new Layout("default","",0,0,this.div00.form.divTodolost.form,function(p){});
            this.div00.form.divTodolost.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.divTodo.form
            obj = new Layout("default","",0,0,this.div00.form.divTodo.form,function(p){});
            this.div00.form.divTodo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLoginLog
            obj = new Layout("default","",0,0,this.divLoginLog.form,function(p){});
            this.divLoginLog.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,772,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmMainLogDv.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div00.form.divCalendar.addEventHandler("ondrag",this.div_ondrag,this);
            this.div00.form.divTodolost.addEventHandler("ondrag",this.div_ondrag,this);
            this.div00.form.divTodo.addEventHandler("ondrag",this.div_ondrag,this);
            this.divLoginLog.addEventHandler("ondrag",this.div_ondrag,this);
        };
        this.loadIncludeScript("MainFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
