(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMessage");
            this.set_titletext("메세지 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMsgType", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "CFN","name" : "확인"},{"code" : "INF","name" : "알림"},{"code" : "WAN","name" : "경고"},{"code" : "ERR","name" : "에러"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MSGE_CD","type" : "string","size" : "32"},{"id" : "MSGE_FLAG_CD","type" : "string","size" : "32"},{"id" : "KORN_MSGE","type" : "string","size" : "32"},{"id" : "ENGL_MSGE","type" : "string","size" : "32"},{"id" : "USED_YN","type" : "string","size" : "32"},{"id" : "INPT_ID","type" : "string","size" : "32"},{"id" : "CHGE_ID","type" : "string","size" : "32"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsToastMsgList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MSGE_CD","type" : "string","size" : "32"},{"id" : "MSGE_FLAG_CD","type" : "string","size" : "32"},{"id" : "KORN_MSGE","type" : "string","size" : "32"},{"id" : "ENGL_MSGE","type" : "string","size" : "32"},{"id" : "USED_YN","type" : "string","size" : "32"},{"id" : "INPT_ID","type" : "string","size" : "32"},{"id" : "CHGE_ID","type" : "string","size" : "32"}]},"Rows" : [{"MSGE_CD" : "msg.save.nodata","MSGE_FLAG_CD" : "INF","KORN_MSGE" : "저장 할 데이터가 없습니다."},{"MSGE_CD" : "msg.save.success","MSGE_FLAG_CD" : "INF","KORN_MSGE" : "저장되었습니다."},{"MSGE_CD" : "msg.session.timeout","MSGE_FLAG_CD" : "WAN","KORN_MSGE" : "세션이 종료되었습니다. 다시 로그인해주세요."},{"MSGE_CD" : "msg.err.updateafter","MSGE_FLAG_CD" : "ERR","KORN_MSGE" : "변경된 내역을 저장 후 작업하세요."},{"MSGE_CD" : "msg.general","MSGE_FLAG_CD" : "INF","KORN_MSGE" : "커스텀 메세지 입니다."}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","108","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메세지");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","123","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","139","0","149","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Message");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaGuide","0","100",null,"560","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("1. 메시지 팝업을 통해 사용자에게 알림, 확인창을 호출할 수 있습니다.\n\n2. 메시지는 서비스를 통해 가져온 AppVariables의 gdsMessage에 등록된 코드만 사용가능합니다.\n\n3. 업무화면에서 메시지는 아래와 같이 기술하여야 합니다.\n// {0} 이(가) {1} 와(과) 일치하지 않습니다.\n[팝업] this.gfnAlert(\"msg.err.validator.equalto\", [\"이름\", \"홍길동\"]);\t\n[토스트] this.gfnToast(\"msg.err.validator.equalto\", [\"이름\", \"홍길동\"]);\t\n\n4. 팝업 확인창에서는 버튼의 명칭과 버튼 클릭시 리턴된 값을 변경할 수 있습니다.\nthis.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback, [\"예\", \"아니오\", \"취소\"], [\"Y\", \"N\", \"C\"]);\n\n5. 토스트 메세지에서는 메세지가 표시될 위치를 변경 할 수 있습니다.\nthis.gfnToast(\"msg.err.validator.equalto\", [\"이름\", \"홍길동\"], \"RT\");\n\n6. 토스트 확인용 메세지 필터를 적용하여 타입별 메세지를 확인할 수 있습니다.\n  - 메세지 코드에 \"success\" 가 포함될 경우 success 타입\n  - 메세지 코드에 \"err\" 이 포함될 경우 error 타입\n  - 메세지 타입이 \"WAN\" 인 경우 warning 타입\n  - 그 외 메세지는 information 타입으로 표시 됩니다.");
            obj.set_scrolltype("horizontal");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","txaGuide:40",null,"192","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","24","24","400","112",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel00","24","24","310","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"cboMessageType\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","24","24","102","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("메세지 타입");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMessageType","126","24","220","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("0");
            obj.set_accessibilitylabel("[@staSearchTitle00]");
            var divSearch_form_cboMessageType_innerdataset = new nexacro.NormalDataset("divSearch_form_cboMessageType_innerdataset", obj);
            divSearch_form_cboMessageType_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "popup","datacolumn" : "popup message"},{"codecolumn" : "system","datacolumn" : "system message"}]});
            obj.set_innerdataset(divSearch_form_cboMessageType_innerdataset);
            obj.set_text("system message");
            obj.set_value("system");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel01","24","96","322","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMessagePosition\"/><PanelItem id=\"PanelItem01\" componentid=\"cboMessagePosition\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMessagePosition","24","96","102","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("메세지 위치");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMessagePosition","staMessagePosition:0","96","220","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            obj.set_flexgrow("0");
            obj.set_accessibilitylabel("[@staMessagePosition]");
            var divSearch_form_cboMessagePosition_innerdataset = new nexacro.NormalDataset("divSearch_form_cboMessagePosition_innerdataset", obj);
            divSearch_form_cboMessagePosition_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "C","datacolumn" : "중앙"},{"codecolumn" : "LT","datacolumn" : "왼쪽-위"},{"codecolumn" : "LB","datacolumn" : "왼쪽-아래"},{"codecolumn" : "RT","datacolumn" : "오른쪽-위"},{"codecolumn" : "RB","datacolumn" : "오른쪽-아래"}]});
            obj.set_innerdataset(divSearch_form_cboMessagePosition_innerdataset);
            obj.set_text("중앙");
            obj.set_value("C");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel02","370","96","287","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMessagePosition00\"/><PanelItem id=\"PanelItem01\" componentid=\"chkToaskFilter\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMessagePosition00","cboMessagePosition:24","96","190","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("토스트 확인용 메세지 필터");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkToaskFilter","staMessagePosition00:24","96","97","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("적용");
            obj.set_visible("false");
            obj.set_accessibilitylabel("[@staMessagePosition00]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","744","40","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_visible("true");
            obj.set_flexgrow("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg01","0","divSearch:40",null,"464","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Detailbox");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","40","divSearch:80",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("메세지 조회");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","40","staTitle:20",null,"324","40",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsMsgList");
            obj.set_autofittype("col");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"238\"/><Column size=\"581\"/><Column size=\"199\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"메세지아이디\"/><Cell col=\"1\" text=\"메세지 내용\"/><Cell col=\"2\" text=\"메세지타입\"/></Band><Band id=\"body\"><Cell text=\"bind:MSGE_CD\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\"/><Cell col=\"1\" text=\"bind:KORN_MSGE\"/><Cell col=\"2\" combodataset=\"dsMsgType\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:MSGE_FLAG_CD\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel03.set_taborder("0");
                p.Panel03.set_verticalgap("16");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_horizontalgap("24");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("24","24","400","112",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("24","24","310","48",null,null);

                p.staSearchTitle00.set_taborder("2");
                p.staSearchTitle00.set_text("메세지 타입");
                p.staSearchTitle00.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle00.set_fittocontents("width");
                p.staSearchTitle00.move("24","24","102","48",null,null);

                p.cboMessageType.set_taborder("3");
                p.cboMessageType.set_innerdataset(divSearch_form_cboMessageType_innerdataset);
                p.cboMessageType.set_codecolumn("codecolumn");
                p.cboMessageType.set_datacolumn("datacolumn");
                p.cboMessageType.set_flexgrow("0");
                p.cboMessageType.set_accessibilitylabel("[@staSearchTitle00]");
                p.cboMessageType.set_text("system message");
                p.cboMessageType.set_value("system");
                p.cboMessageType.set_index("0");
                p.cboMessageType.move("126","24","220","48",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_visible("false");
                p.Panel01.move("24","96","322","48",null,null);

                p.staMessagePosition.set_taborder("5");
                p.staMessagePosition.set_text("메세지 위치");
                p.staMessagePosition.set_cssclass("sta_WF_SchDetail");
                p.staMessagePosition.set_fittocontents("width");
                p.staMessagePosition.set_visible("false");
                p.staMessagePosition.move("24","96","102","48",null,null);

                p.cboMessagePosition.set_taborder("6");
                p.cboMessagePosition.set_innerdataset(divSearch_form_cboMessagePosition_innerdataset);
                p.cboMessagePosition.set_codecolumn("codecolumn");
                p.cboMessagePosition.set_datacolumn("datacolumn");
                p.cboMessagePosition.set_visible("false");
                p.cboMessagePosition.set_flexgrow("0");
                p.cboMessagePosition.set_accessibilitylabel("[@staMessagePosition]");
                p.cboMessagePosition.set_text("중앙");
                p.cboMessagePosition.set_value("C");
                p.cboMessagePosition.set_index("0");
                p.cboMessagePosition.move("staMessagePosition:0","96","220","48",null,null);

                p.Panel02.set_taborder("7");
                p.Panel02.set_visible("false");
                p.Panel02.move("370","96","287","48",null,null);

                p.staMessagePosition00.set_taborder("8");
                p.staMessagePosition00.set_text("토스트 확인용 메세지 필터");
                p.staMessagePosition00.set_cssclass("sta_WF_SchDetail");
                p.staMessagePosition00.set_fittocontents("width");
                p.staMessagePosition00.set_visible("false");
                p.staMessagePosition00.move("cboMessagePosition:24","96","190","48",null,null);

                p.chkToaskFilter.set_taborder("9");
                p.chkToaskFilter.set_text("적용");
                p.chkToaskFilter.set_visible("false");
                p.chkToaskFilter.set_accessibilitylabel("[@staMessagePosition00]");
                p.chkToaskFilter.move("staMessagePosition00:24","96","97","48",null,null);

                p.btnSearch.set_taborder("10");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("btn_WF_Sch");
                p.btnSearch.set_visible("true");
                p.btnSearch.set_flexgrow("0");
                p.btnSearch.move("744","40","120","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_horizontalgap("40");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("Layout0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSearch.set_flexgrow("1");
                p.btnSearch.move("24","cboMessageType:24","432","48",null,null);

                p.staMessagePosition00.move("126","168","190","48",null,null);

                p.chkToaskFilter.move("190","168","97","48",null,null);

                p.cboMessageType.set_flexgrow("1");
                p.cboMessageType.move("126","24","200","48",null,null);

                p.cboMessagePosition.set_flexgrow("1");
                p.cboMessagePosition.move("102","96","200","48",null,null);

                p.Panel01.set_flexgrow("1");

                p.Panel00.move("24","24","400","48",null,null);

                p.Panel03.move("24","24","400","176",null,null);

                p.Panel02.set_flexgrow("1");
            	}
            );
            obj.set_spacing("16px");
            obj.set_type("horizontal");
            obj.set_horizontalgap("40");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1440,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("메세지 샘플");

                p.Static00.set_taborder("0");
                p.Static00.set_text("메세지");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","108","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("123","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Message");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("139","0","149","60",null,null);

                p.txaGuide.set_taborder("3");
                p.txaGuide.set_value("1. 메시지 팝업을 통해 사용자에게 알림, 확인창을 호출할 수 있습니다.\n\n2. 메시지는 서비스를 통해 가져온 AppVariables의 gdsMessage에 등록된 코드만 사용가능합니다.\n\n3. 업무화면에서 메시지는 아래와 같이 기술하여야 합니다.\n// {0} 이(가) {1} 와(과) 일치하지 않습니다.\n[팝업] this.gfnAlert(\"msg.err.validator.equalto\", [\"이름\", \"홍길동\"]);\t\n[토스트] this.gfnToast(\"msg.err.validator.equalto\", [\"이름\", \"홍길동\"]);\t\n\n4. 팝업 확인창에서는 버튼의 명칭과 버튼 클릭시 리턴된 값을 변경할 수 있습니다.\nthis.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback, [\"예\", \"아니오\", \"취소\"], [\"Y\", \"N\", \"C\"]);\n\n5. 토스트 메세지에서는 메세지가 표시될 위치를 변경 할 수 있습니다.\nthis.gfnToast(\"msg.err.validator.equalto\", [\"이름\", \"홍길동\"], \"RT\");\n\n6. 토스트 확인용 메세지 필터를 적용하여 타입별 메세지를 확인할 수 있습니다.\n  - 메세지 코드에 \"success\" 가 포함될 경우 success 타입\n  - 메세지 코드에 \"err\" 이 포함될 경우 error 타입\n  - 메세지 타입이 \"WAN\" 인 경우 warning 타입\n  - 그 외 메세지는 information 타입으로 표시 됩니다.");
                p.txaGuide.set_scrolltype("horizontal");
                p.txaGuide.set_cssclass("txt_WF_Nochar");
                p.txaGuide.move("0","100",null,"560","0",null);

                p.divSearch.set_taborder("4");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.set_text("");
                p.divSearch.set_fittocontents("height");
                p.divSearch.set_accessibilityenable("false");
                p.divSearch.set_tabstop("false");
                p.divSearch.move("0","txaGuide:40",null,"192","0",null);

                p.staBg01.set_taborder("5");
                p.staBg01.set_cssclass("sta_WF_Detailbox");
                p.staBg01.set_accessibilityenable("false");
                p.staBg01.move("0","divSearch:40",null,"464","0",null);

                p.staTitle.set_taborder("6");
                p.staTitle.set_text("메세지 조회");
                p.staTitle.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle.set_accessibilityrole("heading4");
                p.staTitle.move("40","divSearch:80",null,"40","40",null);

                p.grdList.set_taborder("7");
                p.grdList.set_binddataset("dsMsgList");
                p.grdList.set_autofittype("col");
                p.grdList.set_tabstop("false");
                p.grdList.set_maxheight("");
                p.grdList.set_maxwidth("");
                p.grdList.move("40","staTitle:20",null,"324","40",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1560,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTitle.move("16","divSearch:46",null,"40","16",null);

                p.grdList.move("16","staTitle:10",null,"392","16",null);

                p.divSearch.set_text("");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.move("0","txaGuide:24",null,"280","0",null);

                p.staBg01.move("0","divSearch:24",null,"476","0",null);

                p.txaGuide.move("0","104",null,"560","0",null);
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
        this.registerScript("sampleMessage.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleMessage.xfdl
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
        	nexacro.setEnvironmentVariable("evMessagePopup", "true");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        this.cfnRefresh = function ()
        {
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function ()
        {
        	this.dsMsgList.clear();
        	this.dsMsgList.copyData(nexacro.getApplication().gdsMessage);
        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	trace("message id : " + sMsgId + " // return value : " + sRtn);
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function ()
        {
        	this.dsMsgList.clearData();
        };

        this.fnMsgFilter = function ()
        {
        	var isCheck = this.divSearch.form.chkToaskFilter.value;

        	if (isCheck)
        	{
        		this.grdList.setBindDataset(this.dsToastMsgList);
        	}
        	else
        	{
        		this.grdList.setBindDataset(this.dsMsgList);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.grdList_oncelldblclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var nRow = e.row;
        	var sMsgId = objDs.getColumn(nRow,"MSGE_CD");
        	var sPopId = sMsgId;
        	var sCallback = "fnMsgCallback";
        	var arrArg = ["test1","test2","test3"];

        	var sMsgType = objDs.getColumn(nRow, "MSGE_FLAG_CD");

        	// Toast
        	if (this.divSearch.form.cboMessageType.value == "toast")
        	{
        		this.gfnToast(sMsgId, arrArg, this.divSearch.form.cboMessagePosition.value);
        		return;
        	};

        	// Confirm일 때
        	if (sMsgType == "CFN")
        	{
        		this.gfnAlert(sMsgId, arrArg, sPopId, sCallback, ["예", "아니오", "취소"], ["Y", "N", "C"]);
        	// Alert일 때
        	} else
        	{
        		this.gfnAlert(sMsgId, arrArg, sPopId, sCallback);
        	}


        };

        this.divSearch_cboMessageType_onitemchanged = function(obj,e)
        {
        	var sPopupMsgYN = "true";
        	if(e.postvalue == "system") sPopupMsgYN = "false";

        	if (e.postvalue == "toast")
        	{
        		this.divSearch.form.staMessagePosition.set_visible(true);
        		this.divSearch.form.cboMessagePosition.set_visible(true);
        		this.divSearch.form.staMessagePosition00.set_visible(true);
        		this.divSearch.form.chkToaskFilter.set_visible(true);
        	}
        	else
        	{
        		this.divSearch.form.staMessagePosition.set_visible(false);
        		this.divSearch.form.cboMessagePosition.set_visible(false);
        		this.divSearch.form.staMessagePosition00.set_visible(false);
        		this.divSearch.form.chkToaskFilter.set_visible(false);
        		this.divSearch.form.chkToaskFilter.set_value(false);
        	};

        	this.fnMsgFilter();
        	nexacro.setEnvironmentVariable("evMessagePopup", sPopupMsgYN);
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.divSearch_chkToaskFilter_onchanged = function(obj,e)
        {
        	this.fnMsgFilter();
        };
        this.divSearch_chkToaskFilter_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboMessageType.addEventHandler("onitemchanged",this.divSearch_cboMessageType_onitemchanged,this);
            this.divSearch.form.chkToaskFilter.addEventHandler("onchanged",this.divSearch_chkToaskFilter_onchanged,this);
            this.divSearch.form.chkToaskFilter.addEventHandler("onclick",this.divSearch_chkToaskFilter_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.dsMsgList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("sampleMessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
