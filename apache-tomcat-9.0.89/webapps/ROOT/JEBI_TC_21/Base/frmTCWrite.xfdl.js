(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTCWrite");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTC", this);
            obj._setContents("<ColumnInfo><Column id=\"testscript_no\" type=\"STRING\" size=\"256\"/><Column id=\"testscript_id\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"browser\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"element\" type=\"STRING\" size=\"256\"/><Column id=\"dictionaryKey\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"input\" type=\"STRING\" size=\"256\"/><Column id=\"zoom\" type=\"STRING\" size=\"256\"/><Column id=\"ime\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"compareType\" type=\"STRING\" size=\"256\"/><Column id=\"resultValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectUI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowser", this);
            obj._setContents("<ColumnInfo><Column id=\"browserCode\" type=\"STRING\" size=\"256\"/><Column id=\"browserName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"browserCode\">1</Col><Col id=\"browserName\">ALL</Col></Row><Row><Col id=\"browserCode\">2</Col><Col id=\"browserName\">Chrome</Col></Row><Row><Col id=\"browserCode\">3</Col><Col id=\"browserName\">Edge</Col></Row><Row><Col id=\"browserCode\">4</Col><Col id=\"browserName\">Safari</Col></Row><Row><Col id=\"browserCode\">5</Col><Col id=\"browserName\">Opera</Col></Row><Row><Col id=\"browserCode\">6</Col><Col id=\"browserName\">Windows_NRE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAction", this);
            obj._setContents("<ColumnInfo><Column id=\"actionCode\" type=\"STRING\" size=\"256\"/><Column id=\"actionData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"actionCode\">0</Col><Col id=\"actionData\">click</Col></Row><Row><Col id=\"actionCode\">1</Col><Col id=\"actionData\">input</Col></Row><Row><Col id=\"actionData\">tab</Col><Col id=\"actionCode\">2</Col></Row><Row><Col id=\"actionData\">scroll</Col><Col id=\"actionCode\">3</Col></Row><Row><Col id=\"actionData\">sleep</Col><Col id=\"actionCode\">4</Col></Row><Row><Col id=\"actionData\">compare</Col><Col id=\"actionCode\">5</Col></Row><Row><Col id=\"actionData\">screenShot</Col><Col id=\"actionCode\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompareType", this);
            obj._setContents("<ColumnInfo><Column id=\"typeCode\" type=\"STRING\" size=\"256\"/><Column id=\"typeData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"typeData\">textValue</Col><Col id=\"typeCode\">0</Col></Row><Row><Col id=\"typeData\">comboValue</Col><Col id=\"typeCode\">2</Col></Row><Row><Col id=\"typeData\">ui</Col><Col id=\"typeCode\">3</Col></Row><Row><Col id=\"typeData\">checkStatus</Col><Col id=\"typeCode\">4</Col></Row><Row><Col id=\"typeData\">positon</Col><Col id=\"typeCode\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staLabel00","13","91","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("테스트 스트립트");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDescript","128","91","388","102",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01","13","202","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("테스트 브라우저");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBrowser","128","202","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsBrowser");
            obj.set_codecolumn("browserCode");
            obj.set_datacolumn("browserName");
            obj.set_text("ALL");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel02","13","251","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("테스트 action");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbAction","128","251","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsAction");
            obj.set_codecolumn("actionCode");
            obj.set_datacolumn("actionData");
            obj.set_text("click");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTarget","13","42","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("테스트 Node ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edtId","128","42","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03","13","302","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("테스트 수행 횟수");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCount","128","300","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_inputfilter("alpha");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel04","13","351","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Action 수행시간");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTime","128","349","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05","13","400","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("테스트 입력값");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInputValue","128","398","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel06","13","449","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Key 입력값");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInputKey","128","447","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel07","13","496","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("비교타입(compareType)");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Combo("cbmCompareType","128","496","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("dsCompareType");
            obj.set_codecolumn("typeCode");
            obj.set_datacolumn("typeData");
            obj.set_text("textValue");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel08","13","547","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("테스트 기대값");
            this.addChild(obj.name, obj);

            obj = new Edit("edtExpectValue","128","545","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","80","0","266","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("테스트 케이스 입력");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","341","3","79","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("TC 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnExit","441","3","79","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",530,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtId","value","dsTC","element");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","txtDescript","value","dsTC","description");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtCount","value","dsTC","count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtTime","value","dsTC","time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtInputValue","value","dsTC","input");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtInputKey","value","dsTC","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtExpectValue","value","dsTC","expectValue");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cmbBrowser","value","dsTC","browser");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cmbAction","value","dsTC","action");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTCWrite.xfdl", function() {
        this.btnExit_onclick = function(obj,e)
        {
        	this.close();
        };

        this.frmTCWrite_onload = function(obj,e)
        {

        	this.edtId.value = this.getOwnerFrame().seledted_id;
        };

        // TC를 저장한다.
        this.btnSave_onclick = function(obj,e)
        {
        	var opener = this.getOwnerFrame().opener;



        	opener.saveTC(this.dsTC);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmTCWrite_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnExit.addEventHandler("onclick",this.btnExit_onclick,this);
        };
        this.loadIncludeScript("frmTCWrite.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
