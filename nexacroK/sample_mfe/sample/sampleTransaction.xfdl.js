(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleTransaction");
            this.set_titletext("트랜잭션 샘플");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "srchCond1","size" : "256","type" : "STRING"},{"id" : "srchCond2","size" : "256","type" : "STRING"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "ID","size" : "256","type" : "STRING"},{"id" : "NAME","size" : "256","type" : "STRING"},{"id" : "DEPARTMENT","size" : "256","type" : "STRING"},{"id" : "DESCRIPTION","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsSample", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "DESCRIPTION","size" : "32","type" : "string"},{"id" : "DEPARTMENT","size" : "32","type" : "string"},{"id" : "ID","size" : "32","type" : "string"},{"id" : "NAME","size" : "32","type" : "string"}]},"Rows" : [{"DESCRIPTION" : "4","DEPARTMENT" : "3","ID" : "여기부터 작성","NAME" : "2"},{"DESCRIPTION" : "1234","DEPARTMENT" : "1234","ID" : "test0101","NAME" : "1234"},{"DESCRIPTION" : "231","DEPARTMENT" : "test511","ID" : "1","NAME" : "111233342224"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2111","ID" : "6","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "7","NAME" : "test3"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "8","NAME" : "test4"},{"DESCRIPTION" : "test5","DEPARTMENT" : "test5","ID" : "9","NAME" : "test5"},{"DESCRIPTION" : "111","DEPARTMENT" : "11","ID" : "10","NAME" : "111"},{"DESCRIPTION" : "test1","DEPARTMENT" : "test1","ID" : "11","NAME" : "test1"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2","ID" : "12","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "13","NAME" : "test3"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "14","NAME" : "11111"},{"DESCRIPTION" : "111","DEPARTMENT" : "test5","ID" : "15","NAME" : "test5"},{"DESCRIPTION" : "111","DEPARTMENT" : "11","ID" : "16","NAME" : "111"},{"DESCRIPTION" : "test1","DEPARTMENT" : "test1","ID" : "17","NAME" : "test1"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2","ID" : "18","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "19","NAME" : "test3"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "20","NAME" : "test4"},{"DESCRIPTION" : "111","DEPARTMENT" : "11","ID" : "21","NAME" : "111"},{"DESCRIPTION" : "test1","DEPARTMENT" : "test1","ID" : "22","NAME" : "test1"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2","ID" : "23","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "24","NAME" : "test3"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "25","NAME" : "test4"},{"DESCRIPTION" : "test5","DEPARTMENT" : "test5","ID" : "26","NAME" : "test5"},{"DESCRIPTION" : "111","DEPARTMENT" : "11","ID" : "27","NAME" : "111"},{"DESCRIPTION" : "test1","DEPARTMENT" : "test1","ID" : "28","NAME" : "test1"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2","ID" : "29","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "30","NAME" : "test3"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "31","NAME" : "test4"},{"DESCRIPTION" : "test5","DEPARTMENT" : "test5","ID" : "32","NAME" : "test5"},{"DESCRIPTION" : "111","DEPARTMENT" : "11","ID" : "33","NAME" : "111"},{"DESCRIPTION" : "test1","DEPARTMENT" : "test1","ID" : "34","NAME" : "test1"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2","ID" : "35","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "36","NAME" : "test3"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "37","NAME" : "test4"},{"DESCRIPTION" : "test1","DEPARTMENT" : "test1","ID" : "39","NAME" : "test1"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2","ID" : "40","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "41","NAME" : "test3"},{"DESCRIPTION" : "1111","DEPARTMENT" : "test4","ID" : "42","NAME" : "test4"},{"DESCRIPTION" : "test5","DEPARTMENT" : "test5","ID" : "43","NAME" : "test5"},{"DESCRIPTION" : "111","DEPARTMENT" : "11","ID" : "44","NAME" : "111"},{"DESCRIPTION" : "test1","DEPARTMENT" : "test1","ID" : "45","NAME" : "test1"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2","ID" : "46","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "47","NAME" : "test3"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "48","NAME" : "test4"},{"DESCRIPTION" : "test5","DEPARTMENT" : "test5","ID" : "49","NAME" : "test5"},{"DESCRIPTION" : "111","DEPARTMENT" : "11","ID" : "50","NAME" : "111"},{"DESCRIPTION" : "test1","DEPARTMENT" : "test1","ID" : "51","NAME" : "test1"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2","ID" : "52","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "53","NAME" : "test3"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "54","NAME" : "test4"},{"DESCRIPTION" : "test5","DEPARTMENT" : "test5","ID" : "55","NAME" : "test5"},{"DESCRIPTION" : "111","DEPARTMENT" : "11","ID" : "56","NAME" : "111"},{"DESCRIPTION" : "test1","DEPARTMENT" : "test1","ID" : "57","NAME" : "test1"},{"DESCRIPTION" : "test2","DEPARTMENT" : "test2","ID" : "58","NAME" : "test2"},{"DESCRIPTION" : "test3","DEPARTMENT" : "test3","ID" : "59","NAME" : "test3"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "60","NAME" : "test4"},{"DESCRIPTION" : "test4","DEPARTMENT" : "test4","ID" : "61","NAME" : "test4"},{"ID" : "63","NAME" : "1"},{"DESCRIPTION" : "789","DEPARTMENT" : "456","ID" : "64","NAME" : "123"},{"DESCRIPTION" : "1234","DEPARTMENT" : "1234","ID" : "1234","NAME" : "1234"},{"DESCRIPTION" : "123123124123213","DEPARTMENT" : "3123124","ID" : "1234123","NAME" : "12312314"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Grid("grdList","30","412",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"50\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" editautoselect=\"true\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\" text=\"bind:ID\"/><Cell col=\"1\" displaytype=\"editcontrol\" editautoselect=\"true\" edittype=\"text\" text=\"bind:NAME\"/><Cell col=\"2\" displaytype=\"editcontrol\" editautoselect=\"true\" edittype=\"text\" text=\"bind:DEPARTMENT\"/><Cell col=\"3\" displaytype=\"editcontrol\" editautoselect=\"true\" edittype=\"text\" text=\"bind:DESCRIPTION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03_00","0","330",null,"12","0",null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_Boundary");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("staTitle","30","Static03_00:30",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_taborder("1");
            obj.set_text("사용자 정보 조회");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("staSearchTitle00","30","30","160","40",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_taborder("3");
            obj.set_text("아이디");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","30","70",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("staSearchTitle00_00","30","130","160","40",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_taborder("4");
            obj.set_text("성명");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00_00","30","170",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnSearch","30","edt00_00:20",null,"60","30",null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Full");
            obj.set_taborder("6");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",480,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","edt00","value","dsSearch","srchCond1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","edt00_00","value","dsSearch","srchCond2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleTransaction.xfdl", function(nexacro, system, trace, environment, application) {
        /*
        *  Mobile 프로젝트
        *  @FileName 	sampleTransaction.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
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
        	this.gfnFormOnLoadM(obj); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //추가
        this.cfnAdd = function ()
        {
        	this.dsList.addRow();

        	this.grdList.setCellPos(0);
        	this.grdList.showEditor(true);
        };

        //삭제
        this.cfnDel = function ()
        {
        	var nRow = this.dsList.rowposition;
        	if( nRow<0 ) return;

        	this.dsList.deleteRow(nRow);
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        };

        //조회
        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnSearch = function ()
        {
        this.PARAM1 = "100";
        	var strSvcId 	= "searchSampleList";
        	//var strSvcUrl 	= "samplefile/searchSampleList.xml";
        	var strSvcUrl 	= "searchSampleList.xml";
        	var inData 		= "";
        	var outData 	= "dsList=outDs";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };

        //저장
        this.fnSave = function ()
        {	return;
        	var strSvcId 	= "saveSampleList";
        	var strSvcUrl 	= "saveSampleList.do";
        	var inData 		= "inDs=dsList:U";
        	var outData 	= "";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (svcId, nErrCd, sErrMsg)
        {
        	switch(svcId) {
        		case "searchSampleList":
        			break;
        		case "saveSampleList":
        			this.fnSearch();
        			break;
        		default:break;
        	}

        	alert(this.PARAM1);
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	if(sMsgId=="save"){
        		if(sRtn){
        			this.fnSave();
        		}else{
        			return;
        		}
        	}else if( sMsgId=="validId"){
        		this.dsList.setColumn(this.dsList.rowposition, "ID", "");
        		this.grdList.setCellPos(0);
        		this.grdList.showEditor(true);
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회버튼클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        //ID중복체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="ID"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = this.dsList.findRow("ID", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 아이디"],"validId","fnMsgCallback");
        			return;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };

        this.loadIncludeScript("sampleTransaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
