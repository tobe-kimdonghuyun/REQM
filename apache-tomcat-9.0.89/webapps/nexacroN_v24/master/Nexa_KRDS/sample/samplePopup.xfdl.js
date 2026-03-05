(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePopup");
            this.set_titletext("팝업 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,3660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "동해물과","Column1" : "무궁화"},{"Column0" : "백두산이","Column1" : "삼천리"},{"Column0" : "마르고","Column1" : "화려강산"},{"Column0" : "닳도록","Column1" : "대한사람"},{"Column0" : "하느님이","Column1" : "대한으로"},{"Column0" : "보우하사","Column1" : "길이 "},{"Column0" : "우리나라만세","Column1" : "보전하세"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("팝업");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","109","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Popup");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","100",null,"580","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_spacing("40px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"TextArea00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnShowModal\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","40","125","600","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("모달팝업<fs v=\'12\'>(callback - string)</fs>");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_usedecorate("true");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModal",null,"125","90","48","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","848","231","100%","420",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("var sTitle = \"모달팝업(Default)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\ttop:100\n\t\t,left:100\t\t\t//top,left 지정하지않음 center,middle 적용\n\t\t,width:700\n\t\t,height:300\t\t\t//width,height 지정하지 않음 popup form size적용\n\t\t,popuptype:\"modal\"\t//modal,modaless\n\t\t,autosize:false\n\t\t,title:sTitle\n\t\t,resize:false\n\t\t,titlebar:true};\n\tvar sPopupCallBack = \"fnPopupCallback\";\n\tthis.gfnOpenPopup(\"popupModalDefault\", \"sample::samplePopupP.xfdl\", oArg, sPopupCallBack, oOption);");
            obj.set_scrolltype("horizontal");
            obj.set_scrollbartype("default none");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","Panel02:40",null,"622","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_spacing("40px");
            obj.set_verticalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","0","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnShowModalFun\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","40","724","500","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("모달팝업<fs v=\'12\'>(callback -function)</fs>");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_usedecorate("true");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModalFun",null,"724","90","48","40",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","767","851","100%","472",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("var sTitle = \"모달팝업(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modal\"\t//modal,modaless\n\t\t,autosize:true\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:true};\n\tthis.gfnOpenPopup(\"popupModalFunc\", \"sample::samplePopupP.xfdl\", oArg, function(sPopupId, sRtn){\n\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\tvar rtn = JSON.parse(sRtn);\n\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t//trace(this.dsRtn.saveXML());\n    }, oOption);");
            obj.set_scrolltype("horizontal");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","Panel04:40",null,"596","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel08\"/><PanelItem id=\"PanelItem00\" componentid=\"TextArea02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","40","1396","99.75186104218362%","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","40","1521","396","42",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("16");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"chkDualMonitor\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00","40","1521","273","42",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("모달리스팝업<fs v=\'12\'>(callback -String)</fs>");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_usedecorate("true");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDualMonitor","273","1525","123","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("듀얼 모니터");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","600","1518","218","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnShowModaless\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCallPopup\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModaless",null,"1518","90","48","168",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new Button("btnCallPopup",null,"1518","120","48","40",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("팝업 호출");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","40","40","100%","446",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("var sTitle = \"모달리스(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modeless\"\t//modal,modaless\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:false};\n\tthis.gfnOpenPopup(\"popupModalessFunc\", \"sample::samplePopupP.xfdl\", oArg, function(sPopupId, sRtn){\n\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\tvar rtn = JSON.parse(sRtn);\n\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t\t//trace(this.dsRtn.saveXML());\n\t}, oOption);");
            obj.set_scrolltype("horizontal");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","Panel09:40",null,"596","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_verticalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10","40","2036","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnShowModalessFunc\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00_00","40","2036","293","42",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("모달리스팝업<fs v=\'12\'>(callback -Function)</fs>");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_usedecorate("true");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModalessFunc",null,"2046","90","48","40",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","831","2186","100%","446",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("var sTitle = \"모달리스(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modeless\"\t//modal,modaless\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:false};\n\tthis.gfnOpenPopup(\"popupModalessFunc\", \"sample::samplePopupP.xfdl\", oArg, function(sPopupId, sRtn){\n\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\tvar rtn = JSON.parse(sRtn);\n\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t\t//trace(this.dsRtn.saveXML());\n\t}, oOption);");
            obj.set_scrolltype("horizontal");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13","0","Panel11:40",null,"768","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel12\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12","40","2810","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitleShowModalPromise\"/><PanelItem id=\"PanelItem01\" componentid=\"btnShowModalPromise\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleShowModalPromise","40","2810","295","42",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("모달팝업<fs v=\'12\'>(Promise)</fs>");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_usedecorate("true");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowModalPromise",null,"2810","90","48","40",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("show");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04","847","2753","100%","618",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_value("var sTitle = \"모달팝업(Promise)\";\nvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\nvar oOption = {\n\ttop:100\n\t,left:100\t\t\t//top,left 지정하지않음 center,middle 적용\n\t,width:700\n\t,height:394\t\t\t//width,height 지정하지 않음 popup form size적용\n\t,popuptype:\"modal\"\t//modal,modaless\n\t,autosize:false\n\t,title:sTitle\n\t,resize:false\n\t,titlebar:true };\n\n// Promise 객체 return 받은 뒤 .then() \nvar oProm = this.gfnOpenPopupPromise(\"popupModalDefault\", \"sample::samplePopupPPromise.xfdl\", oArg, null, oOption);\noProm.then(function(e) {\n\tvar resultDate = e.data;\n\tif(e.data) {\n\t\ttrace(\"e.data.text ::: \" + e.data.text);\n\t}\n\t}\n);");
            obj.set_scrolltype("horizontal");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);

            obj = new Static("staBg05","0","Panel13:40",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Detailbox");
            obj.set_accessibilityenable("false");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowDebug",null,"Panel13:80","200","48","40",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("show debug");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,3660,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("팝업 샘플");

                p.staH2.set_taborder("0");
                p.staH2.set_text("팝업");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","70","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("staH2:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Popup");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","109","60",null,null);

                p.Panel02.set_taborder("3");
                p.Panel02.set_spacing("40px");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_cssclass("pnl_WF_Detailbox");
                p.Panel02.set_verticalgap("20");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","100",null,"580","0",null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("16");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","0","100%","48",null,null);

                p.staTitle00.set_taborder("5");
                p.staTitle00.set_text("모달팝업<fs v=\'12\'>(callback - string)</fs>");
                p.staTitle00.set_cssclass("sta_WF_H4_pc");
                p.staTitle00.set_usedecorate("true");
                p.staTitle00.set_flexgrow("1");
                p.staTitle00.set_accessibilityrole("heading4");
                p.staTitle00.move("40","125","600","42",null,null);

                p.btnShowModal.set_taborder("6");
                p.btnShowModal.set_text("show");
                p.btnShowModal.move(null,"125","90","48","40",null);

                p.TextArea00.set_taborder("7");
                p.TextArea00.set_value("var sTitle = \"모달팝업(Default)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\ttop:100\n\t\t,left:100\t\t\t//top,left 지정하지않음 center,middle 적용\n\t\t,width:700\n\t\t,height:300\t\t\t//width,height 지정하지 않음 popup form size적용\n\t\t,popuptype:\"modal\"\t//modal,modaless\n\t\t,autosize:false\n\t\t,title:sTitle\n\t\t,resize:false\n\t\t,titlebar:true};\n\tvar sPopupCallBack = \"fnPopupCallback\";\n\tthis.gfnOpenPopup(\"popupModalDefault\", \"sample::samplePopupP.xfdl\", oArg, sPopupCallBack, oOption);");
                p.TextArea00.set_scrolltype("horizontal");
                p.TextArea00.set_scrollbartype("default none");
                p.TextArea00.set_cssclass("txt_WF_Nochar");
                p.TextArea00.move("848","231","100%","420",null,null);

                p.Panel04.set_taborder("8");
                p.Panel04.set_spacing("40px");
                p.Panel04.set_verticalgap("20");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_cssclass("pnl_WF_Detailbox");
                p.Panel04.set_fittocontents("height");
                p.Panel04.move("0","Panel02:40",null,"622","0",null);

                p.Panel05.set_taborder("9");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_verticalgap("16");
                p.Panel05.move("0","0","100%","48",null,null);

                p.staTitle00_00.set_taborder("10");
                p.staTitle00_00.set_text("모달팝업<fs v=\'12\'>(callback -function)</fs>");
                p.staTitle00_00.set_cssclass("sta_WF_H4_pc");
                p.staTitle00_00.set_usedecorate("true");
                p.staTitle00_00.set_flexgrow("1");
                p.staTitle00_00.set_accessibilityrole("heading4");
                p.staTitle00_00.move("40","724","500","42",null,null);

                p.btnShowModalFun.set_taborder("11");
                p.btnShowModalFun.set_text("show");
                p.btnShowModalFun.move(null,"724","90","48","40",null);

                p.TextArea01.set_taborder("12");
                p.TextArea01.set_value("var sTitle = \"모달팝업(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modal\"\t//modal,modaless\n\t\t,autosize:true\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:true};\n\tthis.gfnOpenPopup(\"popupModalFunc\", \"sample::samplePopupP.xfdl\", oArg, function(sPopupId, sRtn){\n\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\tvar rtn = JSON.parse(sRtn);\n\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t//trace(this.dsRtn.saveXML());\n    }, oOption);");
                p.TextArea01.set_scrolltype("horizontal");
                p.TextArea01.set_cssclass("txt_WF_Nochar");
                p.TextArea01.move("767","851","100%","472",null,null);

                p.Panel09.set_taborder("13");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_spacing("40px");
                p.Panel09.set_cssclass("pnl_WF_Detailbox");
                p.Panel09.set_verticalgap("20");
                p.Panel09.set_fittocontents("height");
                p.Panel09.move("0","Panel04:40",null,"596","0",null);

                p.Panel08.set_taborder("14");
                p.Panel08.set_verticalgap("16");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_fittocontents("height");
                p.Panel08.move("40","1396","99.75186104218362%","48",null,null);

                p.Panel06.set_taborder("15");
                p.Panel06.set_flexcrossaxisalign("center");
                p.Panel06.set_horizontalgap("16");
                p.Panel06.set_flexgrow("1");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.move("40","1521","396","42",null,null);

                p.staTitle00_00_00.set_taborder("16");
                p.staTitle00_00_00.set_text("모달리스팝업<fs v=\'12\'>(callback -String)</fs>");
                p.staTitle00_00_00.set_cssclass("sta_WF_H4_pc");
                p.staTitle00_00_00.set_usedecorate("true");
                p.staTitle00_00_00.set_accessibilityrole("heading4");
                p.staTitle00_00_00.move("40","1521","273","42",null,null);

                p.chkDualMonitor.set_taborder("17");
                p.chkDualMonitor.set_text("듀얼 모니터");
                p.chkDualMonitor.move("273","1525","123","34",null,null);

                p.Panel07.set_taborder("18");
                p.Panel07.set_horizontalgap("8");
                p.Panel07.set_flexgrow("0");
                p.Panel07.move("600","1518","218","48",null,null);

                p.btnShowModaless.set_taborder("19");
                p.btnShowModaless.set_text("show");
                p.btnShowModaless.move(null,"1518","90","48","168",null);

                p.btnCallPopup.set_taborder("20");
                p.btnCallPopup.set_text("팝업 호출");
                p.btnCallPopup.move(null,"1518","120","48","40",null);

                p.TextArea02.set_taborder("21");
                p.TextArea02.set_value("var sTitle = \"모달리스(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modeless\"\t//modal,modaless\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:false};\n\tthis.gfnOpenPopup(\"popupModalessFunc\", \"sample::samplePopupP.xfdl\", oArg, function(sPopupId, sRtn){\n\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\tvar rtn = JSON.parse(sRtn);\n\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t\t//trace(this.dsRtn.saveXML());\n\t}, oOption);");
                p.TextArea02.set_scrolltype("horizontal");
                p.TextArea02.set_cssclass("txt_WF_Nochar");
                p.TextArea02.move("40","40","100%","446",null,null);

                p.Panel11.set_taborder("22");
                p.Panel11.set_verticalgap("20");
                p.Panel11.set_flexwrap("wrap");
                p.Panel11.set_spacing("40px");
                p.Panel11.set_cssclass("pnl_WF_Detailbox");
                p.Panel11.set_fittocontents("height");
                p.Panel11.move("0","Panel09:40",null,"596","0",null);

                p.Panel10.set_taborder("23");
                p.Panel10.set_verticalgap("16");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.set_fittocontents("height");
                p.Panel10.move("40","2036","100%","48",null,null);

                p.staTitle00_00_00_00.set_taborder("24");
                p.staTitle00_00_00_00.set_text("모달리스팝업<fs v=\'12\'>(callback -Function)</fs>");
                p.staTitle00_00_00_00.set_cssclass("sta_WF_H4_pc");
                p.staTitle00_00_00_00.set_usedecorate("true");
                p.staTitle00_00_00_00.set_flexgrow("1");
                p.staTitle00_00_00_00.set_accessibilityrole("heading4");
                p.staTitle00_00_00_00.move("40","2036","293","42",null,null);

                p.btnShowModalessFunc.set_taborder("25");
                p.btnShowModalessFunc.set_text("show");
                p.btnShowModalessFunc.move(null,"2046","90","48","40",null);

                p.TextArea03.set_taborder("26");
                p.TextArea03.set_value("var sTitle = \"모달리스(callback-Function)\";\n\tvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\n\tvar oOption = {\n\t\tpopuptype:\"modeless\"\t//modal,modaless\n\t\t,title:sTitle\n\t\t,resize:true\n\t\t,titlebar:false};\n\tthis.gfnOpenPopup(\"popupModalessFunc\", \"sample::samplePopupP.xfdl\", oArg, function(sPopupId, sRtn){\n\t\ttrace(\"callback 함수를 function object로 지정\");\n\t\tvar rtn = JSON.parse(sRtn);\n\t\tthis.dsRtn.loadXML(rtn.rtnPvDataset);\n\t\ttrace(\"sPopupId : \" + sPopupId +\" 2. rtnPvString : \" + rtn.rtnPvString + \" 3. rtnPvNumber : \" + rtn.rtnPvNumber);\n\t\t//trace(this.dsRtn.saveXML());\n\t}, oOption);");
                p.TextArea03.set_scrolltype("horizontal");
                p.TextArea03.set_cssclass("txt_WF_Nochar");
                p.TextArea03.move("831","2186","100%","446",null,null);

                p.Panel13.set_taborder("27");
                p.Panel13.set_spacing("40px");
                p.Panel13.set_cssclass("pnl_WF_Detailbox");
                p.Panel13.set_flexwrap("wrap");
                p.Panel13.set_fittocontents("height");
                p.Panel13.set_verticalgap("20");
                p.Panel13.move("0","Panel11:40",null,"768","0",null);

                p.Panel12.set_taborder("28");
                p.Panel12.set_fittocontents("height");
                p.Panel12.set_flexwrap("wrap");
                p.Panel12.set_verticalgap("16");
                p.Panel12.move("40","2810","100%","48",null,null);

                p.staTitleShowModalPromise.set_taborder("29");
                p.staTitleShowModalPromise.set_text("모달팝업<fs v=\'12\'>(Promise)</fs>");
                p.staTitleShowModalPromise.set_cssclass("sta_WF_H4_pc");
                p.staTitleShowModalPromise.set_usedecorate("true");
                p.staTitleShowModalPromise.set_flexgrow("1");
                p.staTitleShowModalPromise.set_accessibilityrole("heading4");
                p.staTitleShowModalPromise.move("40","2810","295","42",null,null);

                p.btnShowModalPromise.set_taborder("30");
                p.btnShowModalPromise.set_text("show");
                p.btnShowModalPromise.move(null,"2810","90","48","40",null);

                p.TextArea04.set_taborder("31");
                p.TextArea04.set_value("var sTitle = \"모달팝업(Promise)\";\nvar oArg   = {pvString:\"abcdedd\", pvNumber:555555, pvDataset:this.dsData};\nvar oOption = {\n\ttop:100\n\t,left:100\t\t\t//top,left 지정하지않음 center,middle 적용\n\t,width:700\n\t,height:394\t\t\t//width,height 지정하지 않음 popup form size적용\n\t,popuptype:\"modal\"\t//modal,modaless\n\t,autosize:false\n\t,title:sTitle\n\t,resize:false\n\t,titlebar:true };\n\n// Promise 객체 return 받은 뒤 .then() \nvar oProm = this.gfnOpenPopupPromise(\"popupModalDefault\", \"sample::samplePopupPPromise.xfdl\", oArg, null, oOption);\noProm.then(function(e) {\n\tvar resultDate = e.data;\n\tif(e.data) {\n\t\ttrace(\"e.data.text ::: \" + e.data.text);\n\t}\n\t}\n);");
                p.TextArea04.set_scrolltype("horizontal");
                p.TextArea04.set_cssclass("txt_WF_Nochar");
                p.TextArea04.move("847","2753","100%","618",null,null);

                p.staBg05.set_taborder("32");
                p.staBg05.set_cssclass("sta_WF_Detailbox");
                p.staBg05.set_accessibilityenable("false");
                p.staBg05.set_accessibilityrole("none");
                p.staBg05.move("0","Panel13:40",null,"128","0",null);

                p.btnShowDebug.set_taborder("33");
                p.btnShowDebug.set_text("show debug");
                p.btnShowDebug.set_cssclass("btn_WF_Custom");
                p.btnShowDebug.move(null,"Panel13:80","200","48","40",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,3620,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnShowModaless.move(null,"959","120","48","168",null);

                p.btnCallPopup.move(null,"959","120","48","40",null);

                p.Panel02.set_spacing("23px");
                p.Panel02.move("0","100",null,"594","0",null);

                p.Panel00.set_flexgrow("1");
                p.Panel00.move("0","0","432","48",null,null);

                p.staTitle00_00.set_text("모달팝업<fs v=\'12\'>(callback -function)</fs>");
                p.staTitle00_00.move("40","724","64.81481481481481%","42",null,null);

                p.Panel04.set_spacing("23px");
                p.Panel04.move("0","Panel02:40",null,"646","0",null);

                p.Panel05.set_flexgrow("1");
                p.Panel05.move("0","0","432","48",null,null);

                p.Panel09.set_spacing("23px");
                p.Panel09.move("0","Panel04:40",null,"620","0",null);

                p.Panel08.set_flexgrow("1");
                p.Panel08.move("40","1396","432","106",null,null);

                p.Panel11.set_spacing("23px");

                p.Panel10.set_flexgrow("1");
                p.Panel10.move("40","2036","100%","48",null,null);

                p.Panel13.set_spacing("23px");
                p.Panel13.move("0","Panel11:40",null,"734","0",null);

                p.staTitle00.move("40","125","64.81481481481481%","42",null,null);

                p.staTitle00_00_00.move(null,null,"63.19444444444444%",null,null,null);

                p.staTitle00_00_00_00.move(null,null,"67.82407407407408%",null,null,null);

                p.staTitleShowModalPromise.move(null,null,"68.28703703703704%",null,null,null);

                p.Panel12.set_flexgrow("1");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePopup.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	samplePopup.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/26
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/26			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	if(!this.gfnIsNull(sRtn))
        	{
        		var objRtn = JSON.parse(sRtn);
        		if(this.gfnIsNull(objRtn)) return;

        		if(!this.gfnIsNull(objRtn.rtnId))
        		{
        			trace(" 1. rtnId : " + objRtn.rtnId);
        		}
        		if(!this.gfnIsNull(objRtn.rtnName))
        		{
        			trace(" 2. rtnName : " + objRtn.rtnName);
        		}
        		if(!this.gfnIsNull( objRtn.rtnDepartment))
        		{
        			trace(" 3. rtnDepartment : " + objRtn.rtnDepartment);
        		}
        		if(!this.gfnIsNull( objRtn.rtnDescription))
        		{
        			trace(" 4. rtnDescription : " + objRtn.rtnDescription);
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnChildCallee = function()
        {
        	trace("나는 부모 " + arguments);
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnShowModal_onclick = function(obj,e)
        {
        	var sTitle = "모달팝업(Default)";
        	var oArg   = {pvString:"abcdedd", pvNumber:555555, pvDataset:this.dsData};
        	var oOption = {
        		top:100
        		,left:100			//top,left 지정하지않음 center,middle 적용
        		,width:800
        		,height:685			//width,height 지정하지 않음 popup form size적용
        		,popuptype:"modal"	//modal,modaless
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("popupModalDefault", "sample::samplePopupP.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.btnShowModalFun_onclick = function(obj,e)
        {
        	var sTitle = "모달팝업(callback-Function)";
        	var oArg   = {pvString:"abcdedd", pvNumber:555555, pvDataset:this.dsData};
        	var oOption = {
        		popuptype:"modal"	//modal,modaless
        		,autosize:true
        		,title:sTitle
        		,resize:true
        		,titlebar:true};
        	this.gfnOpenPopup("popupModalFunc", "sample::samplePopupP.xfdl", oArg, function(sPopupId, sRtn){
        																				if(!this.gfnIsNull(sRtn))
        																				{
        																					var objRtn = JSON.parse(sRtn);
        																					if(this.gfnIsNull(objRtn)) return;

        																					if(!this.gfnIsNull(objRtn.rtnId))
        																					{
        																						trace(" 1. rtnId : " + objRtn.rtnId);
        																					}
        																					if(!this.gfnIsNull(objRtn.rtnName))
        																					{
        																						trace(" 2. rtnName : " + objRtn.rtnName);
        																					}
        																					if(!this.gfnIsNull( objRtn.rtnDepartment))
        																					{
        																						trace(" 3. rtnDepartment : " + objRtn.rtnDepartment);
        																					}
        																					if(!this.gfnIsNull( objRtn.rtnDescription))
        																					{
        																						trace(" 4. rtnDescription : " + objRtn.rtnDescription);
        																					}
        																				}
        																			}, oOption);
        };

        this.btnShowModaless_onclick = function(obj,e)
        {
        	var sTitle = "모달리스(Default)";
        	var oArg   = {pvString:"abcdedd", pvNumber:555555, pvDataset:this.dsData};
        	var oOption = {
        		width:800
        		,height:685			//모달리스는 width,height 필수지정
        		,popuptype:"modeless"
        		,dual:this.chkDualMonitor.value
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true
        		};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("popupModaless", "sample::samplePopupP.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.btnCallPopup_onclick = function(obj,e)
        {
        	var oOption = {
        		pvString :"123"
        		}
        	nexacro.getPopupFrames()["popupModaless"].form.fnParentCallee(oOption, 456);

        };

        this.btnShowModalessFunc_onclick = function(obj,e)
        {
        	var sTitle = "모달리스(callback-Function)";
        	var oArg   = {pvString:"abcdedd", pvNumber:555555, pvDataset:this.dsData};
        	var oOption = {
        		popuptype:"modeless"	//modal,modaless
        		,title:sTitle
        		,resize:true
        		,titlebar:false
        		};
        	this.gfnOpenPopup("popupModalessFunc", "sample::samplePopupP.xfdl", oArg, function(sPopupId, sRtn){
        																				if(!this.gfnIsNull(sRtn))
        																				{
        																					var objRtn = JSON.parse(sRtn);
        																					if(this.gfnIsNull(objRtn)) return;

        																					if(!this.gfnIsNull(objRtn.rtnId))
        																					{
        																						trace(" 1. rtnId : " + objRtn.rtnId);
        																					}
        																					if(!this.gfnIsNull(objRtn.rtnName))
        																					{
        																						trace(" 2. rtnName : " + objRtn.rtnName);
        																					}
        																					if(!this.gfnIsNull( objRtn.rtnDepartment))
        																					{
        																						trace(" 3. rtnDepartment : " + objRtn.rtnDepartment);
        																					}
        																					if(!this.gfnIsNull( objRtn.rtnDescription))
        																					{
        																						trace(" 4. rtnDescription : " + objRtn.rtnDescription);
        																					}
        																				}
        																			}, oOption);
        };

        this.btnShowDebug_onclick = function(obj,e)
        {
        	var oOption = {
        		popuptype:"modeless"	//modal,modaless
        		,title:"DEBUG"
        		,resize:true
        		,titlebar:true};
        	this.gfnOpenPopup("debug", "common::cmmDebug.xfdl", null, "", oOption);
        };


        this.btnShowModalPromise_onclick = function(obj,e)
        {
        	var sTitle = "모달팝업(Promise)";
        	var oArg   = {pvString:"abcdedd", pvNumber:555555, pvDataset:this.dsData};
        	var oOption = {
        		top:100
        		,left:100			//top,left 지정하지않음 center,middle 적용
        		,width:800
        		,height:685			//width,height 지정하지 않음 popup form size적용
        		,popuptype:"modal"	//modal,modaless
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true };

        	// Promise 객체 return 받은 뒤 .then()
        	var oProm = this.gfnOpenPopupPromise("popupModalDefault", "sample::samplePopupPPromise.xfdl", oArg, null, oOption);
        	oProm.then(function(e) {
        		var resultData = e.data;
        		if(resultData) {
        			for(var key in resultData.rtnValue) {
        				trace("data :: " + resultData.rtnValue[key]);
        			}
        		}
        		}
        	);
        };

        this.txaShowModal00_00_00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnShowModal.addEventHandler("onclick",this.btnShowModal_onclick,this);
            this.btnShowModalFun.addEventHandler("onclick",this.btnShowModalFun_onclick,this);
            this.btnShowModaless.addEventHandler("onclick",this.btnShowModaless_onclick,this);
            this.btnCallPopup.addEventHandler("onclick",this.btnCallPopup_onclick,this);
            this.btnShowModalessFunc.addEventHandler("onclick",this.btnShowModalessFunc_onclick,this);
            this.btnShowModalPromise.addEventHandler("onclick",this.btnShowModalPromise_onclick,this);
            this.btnShowDebug.addEventHandler("onclick",this.btnShowDebug_onclick,this);
        };
        this.loadIncludeScript("samplePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
