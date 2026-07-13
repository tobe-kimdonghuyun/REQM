(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Dataset_P_keystring_46609_01_v2");
            this.set_titletext("Dataset_P_keystring_46609_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data6", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "그룹코드","size" : "256","type" : "STRING"},{"id" : "부서코드","size" : "256","type" : "STRING"},{"id" : "이름","size" : "256","type" : "STRING"},{"id" : "연봉","prop" : "","size" : "256","sumtext" : "1","type" : "INT"},{"id" : "비고","prop" : "","size" : "256","sumtext" : "","type" : "STRING"}]},"Rows" : [{"그룹코드" : "가","이름" : "원빈","연봉" : "4000","비고" : "","부서코드" : "111a"},{"그룹코드" : "A","이름" : "장동건","연봉" : "5000","비고" : "","부서코드" : "112a"},{"그룹코드" : "b","이름" : "현빈","연봉" : "6000","비고" : "","부서코드" : "111b"},{"그룹코드" : "C","이름" : "이병헌","연봉" : "7000","비고" : "","부서코드" : "113a"},{"그룹코드" : "!","이름" : "이나영","연봉" : "8000","비고" : "","부서코드" : "114c"},{"그룹코드" : "8","이름" : "김태희","연봉" : "9000","비고" : "","부서코드" : "114c"},{"그룹코드" : "山","이름" : "비","연봉" : "10000","비고" : "","부서코드" : "112b"},{"그룹코드" : "♥","부서코드" : "111a","이름" : "원빈","연봉" : "4000"},{"그룹코드" : "￦","부서코드" : "112a","이름" : "장동건","연봉" : "5000"},{"그룹코드" : "€","부서코드" : "111b","이름" : "현빈","연봉" : "6000"},{"그룹코드" : "￥","부서코드" : "113a","이름" : "이병헌","연봉" : "7000"},{"그룹코드" : "ä","부서코드" : "114c","이름" : "이나영","연봉" : "8000"},{"그룹코드" : "aå","부서코드" : "114c","이름" : "김태희","연봉" : "9000"},{"그룹코드" : "à","부서코드" : "112b","이름" : "비","연봉" : "10000"},{"그룹코드" : "ă","부서코드" : "111a","이름" : "원빈","연봉" : "4000"},{"그룹코드" : "ā","부서코드" : "112a","이름" : "장동건","연봉" : "5000"},{"그룹코드" : "ad","부서코드" : "111b","이름" : "현빈","연봉" : "6000"},{"그룹코드" : "af","부서코드" : "113a","이름" : "이병헌","연봉" : "7000"},{"그룹코드" : "á","부서코드" : "114c","이름" : "이나영","연봉" : "8000"},{"그룹코드" : "a","부서코드" : "114c","이름" : "김태희","연봉" : "9000"},{"그룹코드" : "a-d","부서코드" : "112b","이름" : "비","연봉" : "10000"},{"그룹코드" : "10","부서코드" : "111a","이름" : "이병헌","연봉" : "8000"},{"그룹코드" : "2","부서코드" : "112a","이름" : "이나영","연봉" : "9000"},{"그룹코드" : "a d","부서코드" : "111b","이름" : "김태희","연봉" : "10000"},{"그룹코드" : "â","부서코드" : "113a","이름" : "비","연봉" : "5000"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Dataset_P_keystring_46609_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","368","298","74",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","364","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_keystring","314","200","131","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("S:+그룹코드,G:+부서코드,O:그룹코드[zh-Hans-CN]{\'numeric\':true, \"caseFirst\" : \"upper\"}");
            obj.set_text("S:+그룹코드,G:+부서코드,O:그룹코드[zh-Hans-CN]{\'numeric\':true, \"caseFirst\" : \"upper\"}");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","243","70","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("keystring");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_keystring","323","240","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_keystring","367","240","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_current","85","274","132","24",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","13","279","67","14",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_text("current");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","13","311","67","14",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_text("default");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_default","85","306","132","24",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_current","229","273","35","27",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_current","269","273","35","27",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_default","229","304","35","27",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_default","269","304","35","27",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_loadkeymode","203","335","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_loadkeymode","243","335","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","5","335","99","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("loadkeymode ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","2","119","302","371",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data6");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"연봉\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:그룹코드\"/><Cell col=\"1\" text=\"bind:부서코드\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:연봉\"/><Cell col=\"4\" text=\"bind:비고\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","75","89","85","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("deleteRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","2","87","67","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("addRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","166","89","122","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("transaction()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","7","56","89","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("Dataset옵션");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cb_loadkeymode","104","333","93","27",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            var cb_loadkeymode_innerdataset = new nexacro.NormalDataset("cb_loadkeymode_innerdataset", obj);
            cb_loadkeymode_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "keep"},{"codecolumn" : "2","datacolumn" : "reset"}]});
            obj.set_innerdataset(cb_loadkeymode_innerdataset);
            obj.set_text("keep");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("c_opt","114","58","122","28",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            var c_opt_innerdataset = new nexacro.NormalDataset("c_opt_innerdataset", obj);
            c_opt_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : ":N","datacolumn" : ":N"},{"codecolumn" : ":A","datacolumn" : ":A"},{"codecolumn" : ":U","datacolumn" : ":U"}]});
            obj.set_innerdataset(c_opt_innerdataset);
            obj.set_text(":N");
            obj.set_value(":N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_data6");
        };
        
        // User Script
        this.addIncludeScript("A_Dataset_P_keystring_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_keystring_02.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_keystring_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset keystring Property
          locale 추가
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2021.03.29  함경곤   최초 작성
        *     2021.09.15  함경곤   locale _ 케이스 추가 RP 92912
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        //this.dev_status = tapi.DEV_HOLD;

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data6;
        this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset keystring Property Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//onrowsetchanged 확인용
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("onrowsetchanged", this.ds_data6_onrowsetchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['keystring'] = function(strKeystring) {
        	//this.dataset.set_keystring("");
        	this.dataset.set_keystring(strKeystring);
        };

        // tc1.task['transaction'] = function() {
        // 	// 대기 상태 시작
        // 	var vdAdt = tapi.getVdAdaptor();
        // 	vdAdt.beginWait(5000);
        //
        // 	this.transaction("test","servicejsp::TA_Dataset_P_keystring_01_v2.jsp","dsIn=ds_data9","ds_data8=ds_boder","","fn_callback", true);
        // };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);

        	return result;
        };

        tc1.task['getCellText'] = function() {
        	var vdAdt = tapi.getVdAdaptor();
        	var result = [];
        	var len = this.dataset.getRowCount();
        	for(var i=0; i<len; i++)
        	{
        			result.push(this.grid.getCellText(i, 0));
        	}

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "keystring 설정",
        	autoTaskFlow : ["keystring", "eventChk", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strKeystring, ev : 이벤트 정보, getCellText
        				//array.sort
        				{vc: [[tapi.VBT_NORMAL,"S:그룹코드"]],  ev: ["onrowsetchanged","30","!","10","2","8","A","C","a","a d","a-d","ad","af","aå","b","à","á","â","ä","ā","ă","€","♥","山","가","￥","￦"]},
        				//예외- locale에 없는 column명
        				{vc: [[tapi.VBT_NORMAL,"S:그룹코드,O:그룹코드1[ko-KR]"]],  ev: ["onrowsetchanged","30","!","10","2","8","A","C","a","a d","a-d","ad","af","aå","b","à","á","â","ä","ā","ă","€","♥","山","가","￥","￦"]},
        				//기본 locale
        				{vc: [[tapi.VBT_NORMAL,"S:-그룹코드,O:그룹코드[ko-KR]"]],  ev: ["onrowsetchanged","30","C","b","af","ad","aå","a-d","a d","ā","ä","â","ă","à","á","A","a","山","가","8","2","10","€","￦","￥","♥","!"]},
        				//없는 locale -> system (runtime과 HTML5버젼 V8엔진 차이로 보류)
        				//{vc: [[tapi.VBT_NORMAL,"S:-그룹코드,O:그룹코드[co-KR]"]],  ev: ["onrowsetchanged","30","C","b","af","ad","aå","a-d","a d","ā","ä","â","ă","à","á","A","a","山","가","8","2","10","€","￦","￥","♥","!"]},
        				//다른 언어
        				{vc: [[tapi.VBT_NORMAL,"S:+그룹코드,O:그룹코드[en-US]"]],  ev: ["onrowsetchanged","30","!","♥","￥","￦","€","10","2","8","a","A","á","à","ă","â","ä","ā","a d","a-d","aå","ad","af","b","C","가","山"]},
        				//파싱 테스트
        				{vc: [[tapi.VBT_NORMAL,"O:그룹코드[en-US],S:+그룹코드"]],  ev: ["onrowsetchanged","30","!","♥","￥","￦","€","10","2","8","a","A","á","à","ă","â","ä","ā","a d","a-d","aå","ad","af","b","C","가","山"]},
        				//locale option 테스트
        				{vc: [[tapi.VBT_NORMAL,"S:+그룹코드,O:그룹코드[zh-Hans-CN]{'numeric':true}"]],  ev: ["onrowsetchanged","30","!","♥","￥","￦","€","2","8","10","山","ā","á","à","a","A","ă","â","ä","a d","a-d","aå","ad","af","b","C","가"]},
        				//파싱 테스트
        				{vc: [[tapi.VBT_NORMAL,"O:그룹코드[zh-Hans-CN]{'numeric':true, \"caseFirst\" : \"upper\"},S:+그룹코드"]],  ev: ["onrowsetchanged","30","!","♥","￥","￦","€","2","8","10","山","ā","á","à","A","a","ă","â","ä","a d","a-d","aå","ad","af","b","C","가"]},
        				//복합 케이스
        				{vc: [[tapi.VBT_NORMAL,"S:+그룹코드,G:+부서코드,O:그룹코드[zh-Hans-CN]{'numeric':true, \"caseFirst\" : \"upper\"}"]],  ev: ["onrowsetchanged","30","!","!","♥","♥","￥","￥","￦","￦","€","€","2","2","8","8","10","10","山","山","ā","ā","á","á","à","à","A","A","a","a","ă","ă","â","â","ä","ä","a d","a d","a-d","a-d","aå","aå","ad","ad","af","af","b","b","C","C","가","가"]},
        				//복합 파싱 테스트
        				{vc: [[tapi.VBT_NORMAL,"S:그룹코드,O:그룹코드[zh-Hans-CN]{'numeric':true, \"caseFirst\" : \"upper\"},G:+부서코드"]],  ev: ["onrowsetchanged","30","!","!","♥","♥","￥","￥","￦","￦","€","€","2","2","8","8","10","10","山","山","ā","ā","á","á","à","à","A","A","a","a","ă","ă","â","â","ä","ä","a d","a d","a-d","a-d","aå","aå","ad","ad","af","af","b","b","C","C","가","가"]},
        				//{vc: [[tapi.VBT_NORMAL,"S:-그룹코드,O:그룹코드[zh-Hans-CN]{\'numeric':true}"]],  ev: ["onrowsetchanged","30","114","113","112","111","17,000","7,000","15,000","10,000"]},
        				//영향도 테스트
        				//그룹핑
        				{vc: [[tapi.VBT_NORMAL,"G:그룹코드"]],  ev: ["onrowsetchanged","30","!","!","10","10","2","2","8","8","A","A","C","C","a","a","a d","a d","a-d","a-d","ad","ad","af","af","aå","aå","b","b","à","à","á","á","â","â","ä","ä","ā","ā","ă","ă","€","€","♥","♥","山","山","가","가","￥","￥","￦","￦"]},
        				{vc: [[tapi.VBT_NORMAL,"G:그룹코드,O:그룹코드1[ko-KR]"]],  ev: ["onrowsetchanged","30","!","!","10","10","2","2","8","8","A","A","C","C","a","a","a d","a d","a-d","a-d","ad","ad","af","af","aå","aå","b","b","à","à","á","á","â","â","ä","ä","ā","ā","ă","ă","€","€","♥","♥","山","山","가","가","￥","￥","￦","￦"]},
        				{vc: [[tapi.VBT_NORMAL,"G:그룹코드,O:그룹코드[ko-KR]"]],  ev: ["onrowsetchanged","30","!","!","♥","♥","￥","￥","￦","￦","€","€","10","10","2","2","8","8","가","가","山","山","a","a","A","A","á","á","à","à","ă","ă","â","â","ä","ä","ā","ā","a d","a d","a-d","a-d","aå","aå","ad","ad","af","af","b","b","C","C"]},
        				{vc: [[tapi.VBT_NORMAL,"G:그룹코드,O:그룹코드[ja_JP]"]],  ev: ["onrowsetchanged","30","!","!","♥","♥","￥","￥","￦","￦","€","€","10","10","2","2","8","8","a","a","A","A","á","á","à","à","ă","ă","â","â","ä","ä","ā","ā","a d","a d","a-d","a-d","aå","aå","ad","ad","af","af","b","b","C","C","山","山","가","가"]},
        				{vc: [[tapi.VBT_NORMAL,"G:그룹코드,O:그룹코드[ja-JP]"]],  ev: ["onrowsetchanged","30","!","!","♥","♥","￥","￥","￦","￦","€","€","10","10","2","2","8","8","a","a","A","A","á","á","à","à","ă","ă","â","â","ä","ä","ā","ā","a d","a d","a-d","a-d","aå","aå","ad","ad","af","af","b","b","C","C","山","山","가","가"]},

        		]
        	},
        	prepare: function () {


        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var strKeystring = vdAdt.getValue(0);

        		switch(taskName) {
        		case "keystring":
        			tc1.task['keystring'].call(this, strKeystring);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			rtn = tc1.task['getCellText'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue, expectedValue) {
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        		this.dataset.set_keystring();
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.result = [];
        	}
        };

        /***********************************************************************
        * 03 : 생성된 Test Case
        ***********************************************************************/
        var tcInfo = {
        	// tcInfo.tcList : 모든 browser에서 실행할 tc 목록
        	tcList : [tc1],
        	// tcInfo.deny : 특정 browser에서 제외할 tc 목록(browser : 'nexacro'/'IE'/'Chrome'/'Gecko'/'Safari')
        	deny : [
        			  { tc: tc1, browser: ['IE'] },
        	],
        	// tcInfo.allow : 특정 browser에서 추가할 tc 목록(browser : 'nexacro'/'IE'/'Chrome'/'Gecko'/'Safari')
        	allow : [
        			 //{ tc: tc2, browser: ['nexacro'] },
        	],
        	// tcInfo.adjustTcInfo : browser 버전 및 os 환경에 따른 실행 여부를 결정할 tc 목록
           adjustTcInfo : function() {
        	}
        };

        /***********************************************************************
        * 04 : 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.Dataset_P_keystring_46609_01_v2_onload = function(obj,e)
        {
           // debug mode : log level에서 지정한 모든 메시지 제공
           tapi.systemDebugOn();          // Runner를 debug mode로 실행
           tapi.debugOn();                  // 응용을 debug mode로 실행
           // Runner Load
           tapi.init(tcInfo, this);
          	//LogViewer 미팝업용
        	var runner = tapi.getRunner();

        	if (runner.isTestMode() == false){
         		var logger = new tapi.ConsoleLogger();
         		runner.setLogger(logger);
        	}
        };

        /***********************************************************************
        * 05 : Runner API, Application Runner 띄우지 않고 실행하기 위함
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {
        	// Runner 획득
           var runner = tapi.getRunner();
           //------------ 선택 작업 Begin ------------------------------
           // 메시지를 log로 기록할 수준 지정
        	// log level = [ FATAL | ERROR | WARN | INFO | DEBUG | TRACE | TRACE2 ]
        	//runner.setLogLevel(tapi. INFO);
           //------------ 선택 작업 End ------------------------------
           runner.executeTest();
        };

        /***********************************************************************
        * 06 : 이벤트 선언부
        ***********************************************************************/
        /***********************************************************************
        * onrowsetchanged
        ***********************************************************************/
        this.ds_data6_onrowsetchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.reason);
        };

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        // this.fn_callback = function(sId, nErrCode, sErrMsg)
        // {
        // 	//대기상태 해제
        // 	var vdAdt = tapi.getVdAdaptor();
        // 	vdAdt.releaseWait();
        // }

        this.btn_set_keystring_onclick = function(obj,e)
        {
        	this.ds_data6.set_keystring(this.edt_keystring.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Dataset_P_keystring_46609_01_v2_onload,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_set_keystring.addEventHandler("onclick",this.btn_set_keystring_onclick,this);
            this.btn_get_keystring.addEventHandler("onclick",this.btn_get_keystring_onclick,this);
            this.btn_set_current.addEventHandler("onclick",this.btn_set_current_onclick,this);
            this.btn_get_current.addEventHandler("onclick",this.btn_get_current_onclick,this);
            this.btn_set_default.addEventHandler("onclick",this.btn_set_default_onclick,this);
            this.btn_get_default.addEventHandler("onclick",this.btn_get_default_onclick,this);
            this.btn_set_loadkeymode.addEventHandler("onclick",this.btn_set_loadkeymode_onclick,this);
            this.btn_get_loadkeymode.addEventHandler("onclick",this.btn_get_loadkeymode_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.ds_data6.addEventHandler("onrowsetchanged",this.ds_data6_onrowsetchanged,this);
        };

        this.loadIncludeScript("A_Dataset_P_keystring_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
