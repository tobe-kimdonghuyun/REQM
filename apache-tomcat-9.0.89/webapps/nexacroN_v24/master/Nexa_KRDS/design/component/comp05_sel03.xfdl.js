(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sel03");
            this.set_titletext("선택_셀렉트");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","110","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("셀렉트");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","15","79","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Select");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("셀렉트는 사용자에게 여러 개의 옵션 목록을 팝업으로 제공하여 그 중 한 개의 값을 선택할 수 있도록 하는 경우에 사용한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLB01","0","Static00_01_00_02:80","320","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","staLB01:0","320","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택해주세요.");
            obj.set_accessibilitylabel("셀렉트");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "Combo01"},{"codecolumn" : "1","datacolumn" : "Combo02"},{"codecolumn" : "2","datacolumn" : "Combo03"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("staLB02","0","Combo00:40","320","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","0","staLB02:0","320","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택해주세요.");
            obj.set_enable("false");
            obj.set_accessibilitylabel("[@staLB02]셀렉트");
            var Combo00_01_innerdataset = new nexacro.NormalDataset("Combo00_01_innerdataset", obj);
            Combo00_01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "Combo01"},{"codecolumn" : "1","datacolumn" : "Combo02"},{"codecolumn" : "2","datacolumn" : "Combo03"}]});
            obj.set_innerdataset(Combo00_01_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("staLB03","0","Combo00_01:40","320","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","0","staLB03:0","320","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("error");
            obj.set_displaynulltext("선택해주세요.");
            obj.set_accessibilitylabel("셀렉트");
            var Combo00_00_innerdataset = new nexacro.NormalDataset("Combo00_00_innerdataset", obj);
            Combo00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "Combo01"},{"codecolumn" : "1","datacolumn" : "Combo02"},{"codecolumn" : "2","datacolumn" : "Combo03"}]});
            obj.set_innerdataset(Combo00_00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Combo00_00:40","320","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","Static02:0","320","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_Infor13");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","0","Static03:8","320","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택해주세요.");
            obj.set_accessibilitylabel("셀렉트");
            var Combo00_02_innerdataset = new nexacro.NormalDataset("Combo00_02_innerdataset", obj);
            Combo00_02_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "Combo01"},{"codecolumn" : "1","datacolumn" : "Combo02"},{"codecolumn" : "2","datacolumn" : "Combo03"}]});
            obj.set_innerdataset(Combo00_02_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","Combo00_02:0","320","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("메시지를 입력해 주세요");
            obj.set_cssclass("sta_WF_help");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","Static04:20","320","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("메시지를 입력해 주세요");
            obj.set_cssclass("sta_WF_helpvaild");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","0","Static04_00:20","320","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("메시지를 입력해 주세요");
            obj.set_cssclass("sta_WF_helpinvaild");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","0","Static04_00_00:80","320","48",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_showselectallcheckbox("true");
            obj.set_displaynulltext("선택해주세요.");
            obj.set_accessibilitylabel("셀렉트");
            obj.set_accessibilityrole("combobox");
            var MultiCombo00_innerdataset = new nexacro.NormalDataset("MultiCombo00_innerdataset", obj);
            MultiCombo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "MuitiCombolist01"},{"codecolumn" : "1","datacolumn" : "MuitiCombolist02"},{"codecolumn" : "2","datacolumn" : "MuitiCombolist03","readonlycolumn" : "true"},{"codecolumn" : "3","datacolumn" : "MuitiCombolist04"}]});
            obj.set_innerdataset(MultiCombo00_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_00","0","MultiCombo00:38","320","98",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_showselectallcheckbox("true");
            obj.set_edittype("singletag");
            obj.set_buttonsize("48");
            obj.set_tagbuttonsize("24 24");
            obj.set_accessibilitylabel("셀렉트");
            obj.set_accessibilityrole("combobox");
            var MultiCombo00_00_innerdataset = new nexacro.NormalDataset("MultiCombo00_00_innerdataset", obj);
            MultiCombo00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "MuitiCombolist01"},{"codecolumn" : "1","datacolumn" : "MuitiCombolist02"},{"codecolumn" : "2","datacolumn" : "MuitiCombolist03","readonlycolumn" : "true"},{"codecolumn" : "3","datacolumn" : "MuitiCombolist04"}]});
            obj.set_innerdataset(MultiCombo00_00_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_00_00","0","MultiCombo00_00:30","320","98",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_showselectallcheckbox("true");
            obj.set_edittype("multitag");
            obj.set_buttonsize("48");
            obj.set_tagbuttonsize("24 24");
            obj.set_accessibilitylabel("셀렉트");
            obj.set_accessibilityrole("combobox");
            var MultiCombo00_00_00_innerdataset = new nexacro.NormalDataset("MultiCombo00_00_00_innerdataset", obj);
            MultiCombo00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "MuitiCombolist01"},{"codecolumn" : "1","datacolumn" : "MuitiCombolist02"},{"codecolumn" : "2","datacolumn" : "MuitiCombolist03","readonlycolumn" : "true"},{"codecolumn" : "3","datacolumn" : "MuitiCombolist04"}]});
            obj.set_innerdataset(MultiCombo00_00_00_innerdataset);
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_02","0","MultiCombo00_00_00:80","81","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("레이블");
            obj.set_cssclass("btn_WF_SeletTxt");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","0","Button00_01_00_02:8","175","205",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("셀렉트");
            var ListBox00_innerdataset = new nexacro.NormalDataset("ListBox00_innerdataset", obj);
            ListBox00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "옵션  default"},{"codecolumn" : "1","datacolumn" : "옵션 selected"},{"codecolumn" : "2","datacolumn" : "옵션  default"}]});
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_text("ComboList02");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp05_sel03.xfdl", function() {

        this.sel03_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sel03_onload,this);
            this.staH2.addEventHandler("onclick",this.Div01_01_Static00_onclick,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp05_sel03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
