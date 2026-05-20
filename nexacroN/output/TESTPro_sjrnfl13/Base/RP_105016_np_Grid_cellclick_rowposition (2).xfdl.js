(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Grid_Format_Paging_onvscroll");
            this.set_titletext("Paging_onvscroll");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data0", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "COL0","type" : "INT","size" : "256"},{"id" : "COL1","type" : "STRING","size" : "256"}]},"Rows" : [{"COL0" : "1","COL1" : "data1"},{"COL0" : "2","COL1" : "data2"},{"COL0" : "3","COL1" : "data3"},{"COL0" : "4","COL1" : "data4"},{"COL0" : "5","COL1" : "data5"},{"COL0" : "6","COL1" : "data6"},{"COL0" : "7","COL1" : "data7"},{"COL0" : "8","COL1" : "data8"},{"COL0" : "9","COL1" : "data9"},{"COL0" : "10","COL1" : "data10"},{"COL0" : "11","COL1" : "data11"},{"COL0" : "12","COL1" : "data12"},{"COL0" : "13","COL1" : "data13"},{"COL0" : "14","COL1" : "data14"},{"COL0" : "15","COL1" : "data15"},{"COL0" : "16","COL1" : "data16"},{"COL0" : "17","COL1" : "data17"},{"COL0" : "18","COL1" : "data18"},{"COL0" : "19","COL1" : "data19"},{"COL0" : "20","COL1" : "data20"},{"COL0" : "21","COL1" : "data21"},{"COL0" : "22","COL1" : "data22"},{"COL0" : "23","COL1" : "data23"},{"COL0" : "24","COL1" : "data24"},{"COL0" : "25","COL1" : "data25"},{"COL0" : "26","COL1" : "data26"},{"COL0" : "27","COL1" : "data27"},{"COL0" : "28","COL1" : "data28"},{"COL0" : "29","COL1" : "data29"},{"COL0" : "30","COL1" : "data30"},{"COL0" : "31","COL1" : "data31"},{"COL0" : "32","COL1" : "data32"},{"COL0" : "33","COL1" : "data33"},{"COL0" : "34","COL1" : "data34"},{"COL0" : "35","COL1" : "data35"},{"COL0" : "36","COL1" : "data36"},{"COL0" : "37","COL1" : "data37"},{"COL0" : "38","COL1" : "data38"},{"COL0" : "39","COL1" : "data39"},{"COL0" : "40","COL1" : "data40"},{"COL0" : "41","COL1" : "data41"},{"COL0" : "42","COL1" : "data42"},{"COL0" : "43","COL1" : "data43"},{"COL0" : "44","COL1" : "data44"},{"COL0" : "45","COL1" : "data45"},{"COL0" : "46","COL1" : "data46"},{"COL0" : "47","COL1" : "data47"},{"COL0" : "48","COL1" : "data48"},{"COL0" : "49","COL1" : "data49"},{"COL0" : "50","COL1" : "data50"},{"COL0" : "51","COL1" : "data51"},{"COL0" : "52","COL1" : "data52"},{"COL0" : "53","COL1" : "data53"},{"COL0" : "54","COL1" : "data54"},{"COL0" : "55","COL1" : "data55"},{"COL0" : "56","COL1" : "data56"},{"COL0" : "57","COL1" : "data57"},{"COL0" : "58","COL1" : "data58"},{"COL0" : "59","COL1" : "data59"},{"COL0" : "60","COL1" : "data60"},{"COL0" : "61","COL1" : "data61"},{"COL0" : "62","COL1" : "data62"},{"COL0" : "63","COL1" : "data63"},{"COL0" : "64","COL1" : "data64"},{"COL0" : "65","COL1" : "data65"},{"COL0" : "66","COL1" : "data66"},{"COL0" : "67","COL1" : "data67"},{"COL0" : "68","COL1" : "data68"},{"COL0" : "69","COL1" : "data69"},{"COL0" : "70","COL1" : "data70"},{"COL0" : "71","COL1" : "data71"},{"COL0" : "72","COL1" : "data72"},{"COL0" : "73","COL1" : "data73"},{"COL0" : "74","COL1" : "data74"},{"COL0" : "75","COL1" : "data75"},{"COL0" : "76","COL1" : "data76"},{"COL0" : "77","COL1" : "data77"},{"COL0" : "78","COL1" : "data78"},{"COL0" : "79","COL1" : "data79"},{"COL0" : "80","COL1" : "data80"},{"COL0" : "81","COL1" : "data81"},{"COL0" : "82","COL1" : "data82"},{"COL0" : "83","COL1" : "data83"},{"COL0" : "84","COL1" : "data84"},{"COL0" : "85","COL1" : "data85"},{"COL0" : "86","COL1" : "data86"},{"COL0" : "87","COL1" : "data87"},{"COL0" : "88","COL1" : "data88"},{"COL0" : "89","COL1" : "data89"},{"COL0" : "90","COL1" : "data90"},{"COL0" : "91","COL1" : "data91"},{"COL0" : "92","COL1" : "data92"},{"COL0" : "93","COL1" : "data93"},{"COL0" : "94","COL1" : "data94"},{"COL0" : "95","COL1" : "data95"},{"COL0" : "96","COL1" : "data96"},{"COL0" : "97","COL1" : "data97"},{"COL0" : "98","COL1" : "data98"},{"COL0" : "99","COL1" : "data99"},{"COL0" : "100","COL1" : "data100"},{"COL0" : "101","COL1" : "data101"},{"COL0" : "102","COL1" : "data102"},{"COL0" : "103","COL1" : "data103"},{"COL0" : "104","COL1" : "data104"},{"COL0" : "105","COL1" : "data105"},{"COL0" : "106","COL1" : "data106"},{"COL0" : "107","COL1" : "data107"},{"COL0" : "108","COL1" : "data108"},{"COL0" : "109","COL1" : "data109"},{"COL0" : "110","COL1" : "data110"},{"COL0" : "111","COL1" : "data111"},{"COL0" : "112","COL1" : "data112"},{"COL0" : "113","COL1" : "data113"},{"COL0" : "114","COL1" : "data114"},{"COL0" : "115","COL1" : "data115"},{"COL0" : "116","COL1" : "data116"},{"COL0" : "117","COL1" : "data117"},{"COL0" : "118","COL1" : "data118"},{"COL0" : "119","COL1" : "data119"},{"COL0" : "120","COL1" : "data120"},{"COL0" : "121","COL1" : "data121"},{"COL0" : "122","COL1" : "data122"},{"COL0" : "123","COL1" : "data123"},{"COL0" : "124","COL1" : "data124"},{"COL0" : "125","COL1" : "data125"},{"COL0" : "126","COL1" : "data126"},{"COL0" : "127","COL1" : "data127"},{"COL0" : "128","COL1" : "data128"},{"COL0" : "129","COL1" : "data129"},{"COL0" : "130","COL1" : "data130"},{"COL0" : "131","COL1" : "data131"},{"COL0" : "132","COL1" : "data132"},{"COL0" : "133","COL1" : "data133"},{"COL0" : "134","COL1" : "data134"},{"COL0" : "135","COL1" : "data135"},{"COL0" : "136","COL1" : "data136"},{"COL0" : "137","COL1" : "data137"},{"COL0" : "138","COL1" : "data138"},{"COL0" : "139","COL1" : "data139"},{"COL0" : "140","COL1" : "data140"},{"COL0" : "141","COL1" : "data141"},{"COL0" : "142","COL1" : "data142"},{"COL0" : "143","COL1" : "data143"},{"COL0" : "144","COL1" : "data144"},{"COL0" : "145","COL1" : "data145"},{"COL0" : "146","COL1" : "data146"},{"COL0" : "147","COL1" : "data147"},{"COL0" : "148","COL1" : "data148"},{"COL0" : "149","COL1" : "data149"},{"COL0" : "150","COL1" : "data150"},{"COL0" : "151","COL1" : "data151"},{"COL0" : "152","COL1" : "data152"},{"COL0" : "153","COL1" : "data153"},{"COL0" : "154","COL1" : "data154"},{"COL0" : "155","COL1" : "data155"},{"COL0" : "156","COL1" : "data156"},{"COL0" : "157","COL1" : "data157"},{"COL0" : "158","COL1" : "data158"},{"COL0" : "159","COL1" : "data159"},{"COL0" : "160","COL1" : "data160"},{"COL0" : "161","COL1" : "data161"},{"COL0" : "162","COL1" : "data162"},{"COL0" : "163","COL1" : "data163"},{"COL0" : "164","COL1" : "data164"},{"COL0" : "165","COL1" : "data165"},{"COL0" : "166","COL1" : "data166"},{"COL0" : "167","COL1" : "data167"},{"COL0" : "168","COL1" : "data168"},{"COL0" : "169","COL1" : "data169"},{"COL0" : "170","COL1" : "data170"},{"COL0" : "171","COL1" : "data171"},{"COL0" : "172","COL1" : "data172"},{"COL0" : "173","COL1" : "data173"},{"COL0" : "174","COL1" : "data174"},{"COL0" : "175","COL1" : "data175"},{"COL0" : "176","COL1" : "data176"},{"COL0" : "177","COL1" : "data177"},{"COL0" : "178","COL1" : "data178"},{"COL0" : "179","COL1" : "data179"},{"COL0" : "180","COL1" : "data180"},{"COL0" : "181","COL1" : "data181"},{"COL0" : "182","COL1" : "data182"},{"COL0" : "183","COL1" : "data183"},{"COL0" : "184","COL1" : "data184"},{"COL0" : "185","COL1" : "data185"},{"COL0" : "186","COL1" : "data186"},{"COL0" : "187","COL1" : "data187"},{"COL0" : "188","COL1" : "data188"},{"COL0" : "189","COL1" : "data189"},{"COL0" : "190","COL1" : "data190"},{"COL0" : "191","COL1" : "data191"},{"COL0" : "192","COL1" : "data192"},{"COL0" : "193","COL1" : "data193"},{"COL0" : "194","COL1" : "data194"},{"COL0" : "195","COL1" : "data195"},{"COL0" : "196","COL1" : "data196"},{"COL0" : "197","COL1" : "data197"},{"COL0" : "198","COL1" : "data198"},{"COL0" : "199","COL1" : "data199"},{"COL0" : "200","COL1" : "data200"},{"COL0" : "201","COL1" : "data201"},{"COL0" : "202","COL1" : "data202"},{"COL0" : "203","COL1" : "data203"},{"COL0" : "204","COL1" : "data204"},{"COL0" : "205","COL1" : "data205"},{"COL0" : "206","COL1" : "data206"},{"COL0" : "207","COL1" : "data207"},{"COL0" : "208","COL1" : "data208"},{"COL0" : "209","COL1" : "data209"},{"COL0" : "210","COL1" : "data210"},{"COL0" : "211","COL1" : "data211"},{"COL0" : "212","COL1" : "data212"},{"COL0" : "213","COL1" : "data213"},{"COL0" : "214","COL1" : "data214"},{"COL0" : "215","COL1" : "data215"},{"COL0" : "216","COL1" : "data216"},{"COL0" : "217","COL1" : "data217"},{"COL0" : "218","COL1" : "data218"},{"COL0" : "219","COL1" : "data219"},{"COL0" : "220","COL1" : "data220"},{"COL0" : "221","COL1" : "data221"},{"COL0" : "222","COL1" : "data222"},{"COL0" : "223","COL1" : "data223"},{"COL0" : "224","COL1" : "data224"},{"COL0" : "225","COL1" : "data225"},{"COL0" : "226","COL1" : "data226"},{"COL0" : "227","COL1" : "data227"},{"COL0" : "228","COL1" : "data228"},{"COL0" : "229","COL1" : "data229"},{"COL0" : "230","COL1" : "data230"},{"COL0" : "231","COL1" : "data231"},{"COL0" : "232","COL1" : "data232"},{"COL0" : "233","COL1" : "data233"},{"COL0" : "234","COL1" : "data234"},{"COL0" : "235","COL1" : "data235"},{"COL0" : "236","COL1" : "data236"},{"COL0" : "237","COL1" : "data237"},{"COL0" : "238","COL1" : "data238"},{"COL0" : "239","COL1" : "data239"},{"COL0" : "240","COL1" : "data240"},{"COL0" : "241","COL1" : "data241"},{"COL0" : "242","COL1" : "data242"},{"COL0" : "243","COL1" : "data243"},{"COL0" : "244","COL1" : "data244"},{"COL0" : "245","COL1" : "data245"},{"COL0" : "246","COL1" : "data246"},{"COL0" : "247","COL1" : "data247"},{"COL0" : "248","COL1" : "data248"},{"COL0" : "249","COL1" : "data249"},{"COL0" : "250","COL1" : "data250"},{"COL0" : "251","COL1" : "data251"},{"COL0" : "252","COL1" : "data252"},{"COL0" : "253","COL1" : "data253"},{"COL0" : "254","COL1" : "data254"},{"COL0" : "255","COL1" : "data255"},{"COL0" : "256","COL1" : "data256"},{"COL0" : "257","COL1" : "data257"},{"COL0" : "258","COL1" : "data258"},{"COL0" : "259","COL1" : "data259"},{"COL0" : "260","COL1" : "data260"},{"COL0" : "261","COL1" : "data261"},{"COL0" : "262","COL1" : "data262"},{"COL0" : "263","COL1" : "data263"},{"COL0" : "264","COL1" : "data264"},{"COL0" : "265","COL1" : "data265"},{"COL0" : "266","COL1" : "data266"},{"COL0" : "267","COL1" : "data267"},{"COL0" : "268","COL1" : "data268"},{"COL0" : "269","COL1" : "data269"},{"COL0" : "270","COL1" : "data270"},{"COL0" : "271","COL1" : "data271"},{"COL0" : "272","COL1" : "data272"},{"COL0" : "273","COL1" : "data273"},{"COL0" : "274","COL1" : "data274"},{"COL0" : "275","COL1" : "data275"},{"COL0" : "276","COL1" : "data276"},{"COL0" : "277","COL1" : "data277"},{"COL0" : "278","COL1" : "data278"},{"COL0" : "279","COL1" : "data279"},{"COL0" : "280","COL1" : "data280"},{"COL0" : "281","COL1" : "data281"},{"COL0" : "282","COL1" : "data282"},{"COL0" : "283","COL1" : "data283"},{"COL0" : "284","COL1" : "data284"},{"COL0" : "285","COL1" : "data285"},{"COL0" : "286","COL1" : "data286"},{"COL0" : "287","COL1" : "data287"},{"COL0" : "288","COL1" : "data288"},{"COL0" : "289","COL1" : "data289"},{"COL0" : "290","COL1" : "data290"},{"COL0" : "291","COL1" : "data291"},{"COL0" : "292","COL1" : "data292"},{"COL0" : "293","COL1" : "data293"},{"COL0" : "294","COL1" : "data294"},{"COL0" : "295","COL1" : "data295"},{"COL0" : "296","COL1" : "data296"},{"COL0" : "297","COL1" : "data297"},{"COL0" : "298","COL1" : "data298"},{"COL0" : "299","COL1" : "data299"},{"COL0" : "300","COL1" : "data300"},{"COL0" : "301","COL1" : "data301"},{"COL0" : "302","COL1" : "data302"},{"COL0" : "303","COL1" : "data303"},{"COL0" : "304","COL1" : "data304"},{"COL0" : "305","COL1" : "data305"},{"COL0" : "306","COL1" : "data306"},{"COL0" : "307","COL1" : "data307"},{"COL0" : "308","COL1" : "data308"},{"COL0" : "309","COL1" : "data309"},{"COL0" : "310","COL1" : "data310"},{"COL0" : "311","COL1" : "data311"},{"COL0" : "312","COL1" : "data312"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "COL0","type" : "INT","size" : "256"},{"id" : "COL1","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_output","18","40","403","147",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_data0");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"COL0\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"COL1\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:COL0\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:COL1\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL0\"/><Cell col=\"1\" text=\"COL1\"/></Band><Band id=\"body\"><Cell text=\"bind:COL0\"/><Cell col=\"1\" text=\"bind:COL1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute","428","40","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("execute");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_105016_np_Grid_cellclick_rowposition (2).xfdl", function() {

        this.grd_output_oncellclick = function(obj,e)
        {
        	//trace(e.canvasx);
        	trace(e.canvasy);
        	if(e.canvasy >= 123)
        	{
        		this.ds_data0.set_rowposition(e.row + 1);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_output.addEventHandler("onvscroll",this.grd_output_onvscroll,this);
            this.grd_output.addEventHandler("oncellclick",this.grd_output_oncellclick,this);
            this.btn_execute.addEventHandler("onclick",this.btn_execute_onclick,this);
        };
        this.loadIncludeScript("RP_105016_np_Grid_cellclick_rowposition (2).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
