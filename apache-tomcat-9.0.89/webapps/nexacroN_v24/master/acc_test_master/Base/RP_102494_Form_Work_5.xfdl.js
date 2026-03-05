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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"nm\">A</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"nm\"/></Row><Row><Col id=\"no\">3</Col><Col id=\"nm\">C</Col></Row><Row><Col id=\"no\">4</Col><Col id=\"nm\"/></Row><Row><Col id=\"no\">5</Col><Col id=\"nm\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divArea","0","11",null,"277","80",null,null,null,null,null,this);
            obj.set_initvalueid("ivDivAccessibilityOn");
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_formscrollbartype("none none");
            obj.set_accessibilitylabel("시도교육청선택");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","0","0","240","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("0");
            obj.set_text("서울특별시교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("B100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn01","239","0","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("1");
            obj.set_text("부산광역시교육청");
            obj.getSetter("ogdpOfcdcCd").set("C100000001");
            obj.set_cssclass("btn_WF_area");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn02","479","0","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("2");
            obj.set_text("대구광역시교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("D100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn03","959","0","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("4");
            obj.set_text("광주광역시교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("F100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn04","719","0","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("3");
            obj.set_text("인천광역시교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("E100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn05","0","69","240","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("5");
            obj.set_text("대전광역시교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("G100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn06","239","69","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("6");
            obj.set_text("울산광역시교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("H100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn07","479","69","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("7");
            obj.set_text("세종특별자치시교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("I100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn08","719","69","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("8");
            obj.set_text("경기도교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("J100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn09","959","69","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("9");
            obj.set_text("강원도교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("K100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn10","0","138","240","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("10");
            obj.set_text("충청북도교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("M100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn11","239","138","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("11");
            obj.set_text("충청남도교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("N100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn12","479","138","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("12");
            obj.set_text("전라북도교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("P100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn13","719","138","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("13");
            obj.set_text("전라남도교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("Q100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn14","959","138","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("14");
            obj.set_text("경상북도교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("R100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn15","0","207","240","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("15");
            obj.set_text("경상남도교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("S100000001");
            this.divArea.addChild(obj.name, obj);

            obj = new Button("btn16","239","207","241","70",null,null,null,null,null,null,this.divArea.form);
            obj.set_initvalueid("ivBtnAccessibilityButton");
            obj.set_taborder("16");
            obj.set_text("제주특별자치도교육청");
            obj.set_cssclass("btn_WF_area");
            obj.getSetter("ogdpOfcdcCd").set("T100000001");
            this.divArea.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divArea.form
            obj = new Layout("default","",0,0,this.divArea.form,function(p){});
            this.divArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_102494_Form_Work_5.xfdl", function() {

        this.Button_onsetfocus = function(obj,e)
        {
        	var objComps = this.divArea.form.components;
        	for(var i=0;i<objComps.length;i++)
        	{
        		var objComp = objComps[i];
        		objComp.set_cssclass("btn_WF_area");
        	}
        	obj.set_cssclass("btn_WF_area_S");
        	obj.set_accessibilitylabel("선택된 "+ obj.text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.divArea.form.btn00.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn01.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn01.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn02.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn02.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn03.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn03.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn04.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn04.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn05.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn05.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn06.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn06.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn07.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn07.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn08.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn08.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn09.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn09.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn10.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn10.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn11.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn11.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn12.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn12.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn13.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn13.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn14.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn14.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn15.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn15.addEventHandler("onclick",this.divAreaButton_onclick,this);
            this.divArea.form.btn16.addEventHandler("onsetfocus",this.Button_onsetfocus,this);
            this.divArea.form.btn16.addEventHandler("onclick",this.divAreaButton_onclick,this);
        };
        this.loadIncludeScript("RP_102494_Form_Work_5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
