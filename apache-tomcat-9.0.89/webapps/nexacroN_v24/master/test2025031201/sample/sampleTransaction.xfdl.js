(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleTransaction");
            this.set_titletext("트랜잭션 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"srchCond1\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"DESCRIPTION\" type=\"string\" size=\"32\"/><Column id=\"DEPARTMENT\" type=\"string\" size=\"32\"/><Column id=\"ID\" type=\"string\" size=\"32\"/><Column id=\"NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DESCRIPTION\">4</Col><Col id=\"DEPARTMENT\">3</Col><Col id=\"ID\">여기부터 작성</Col><Col id=\"NAME\">2</Col></Row><Row><Col id=\"DESCRIPTION\">1234</Col><Col id=\"DEPARTMENT\">1234</Col><Col id=\"ID\">test0101</Col><Col id=\"NAME\">1234</Col></Row><Row><Col id=\"DESCRIPTION\">231</Col><Col id=\"DEPARTMENT\">test511</Col><Col id=\"ID\">1</Col><Col id=\"NAME\">111233342224</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2111</Col><Col id=\"ID\">6</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">7</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">8</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"DESCRIPTION\">test5</Col><Col id=\"DEPARTMENT\">test5</Col><Col id=\"ID\">9</Col><Col id=\"NAME\">test5</Col></Row><Row><Col id=\"DESCRIPTION\">111</Col><Col id=\"DEPARTMENT\">11</Col><Col id=\"ID\">10</Col><Col id=\"NAME\">111</Col></Row><Row><Col id=\"DESCRIPTION\">test1</Col><Col id=\"DEPARTMENT\">test1</Col><Col id=\"ID\">11</Col><Col id=\"NAME\">test1</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2</Col><Col id=\"ID\">12</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">13</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">14</Col><Col id=\"NAME\">11111</Col></Row><Row><Col id=\"DESCRIPTION\">111</Col><Col id=\"DEPARTMENT\">test5</Col><Col id=\"ID\">15</Col><Col id=\"NAME\">test5</Col></Row><Row><Col id=\"DESCRIPTION\">111</Col><Col id=\"DEPARTMENT\">11</Col><Col id=\"ID\">16</Col><Col id=\"NAME\">111</Col></Row><Row><Col id=\"DESCRIPTION\">test1</Col><Col id=\"DEPARTMENT\">test1</Col><Col id=\"ID\">17</Col><Col id=\"NAME\">test1</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2</Col><Col id=\"ID\">18</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">19</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">20</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"DESCRIPTION\">111</Col><Col id=\"DEPARTMENT\">11</Col><Col id=\"ID\">21</Col><Col id=\"NAME\">111</Col></Row><Row><Col id=\"DESCRIPTION\">test1</Col><Col id=\"DEPARTMENT\">test1</Col><Col id=\"ID\">22</Col><Col id=\"NAME\">test1</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2</Col><Col id=\"ID\">23</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">24</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">25</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"DESCRIPTION\">test5</Col><Col id=\"DEPARTMENT\">test5</Col><Col id=\"ID\">26</Col><Col id=\"NAME\">test5</Col></Row><Row><Col id=\"DESCRIPTION\">111</Col><Col id=\"DEPARTMENT\">11</Col><Col id=\"ID\">27</Col><Col id=\"NAME\">111</Col></Row><Row><Col id=\"DESCRIPTION\">test1</Col><Col id=\"DEPARTMENT\">test1</Col><Col id=\"ID\">28</Col><Col id=\"NAME\">test1</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2</Col><Col id=\"ID\">29</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">30</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">31</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"DESCRIPTION\">test5</Col><Col id=\"DEPARTMENT\">test5</Col><Col id=\"ID\">32</Col><Col id=\"NAME\">test5</Col></Row><Row><Col id=\"DESCRIPTION\">111</Col><Col id=\"DEPARTMENT\">11</Col><Col id=\"ID\">33</Col><Col id=\"NAME\">111</Col></Row><Row><Col id=\"DESCRIPTION\">test1</Col><Col id=\"DEPARTMENT\">test1</Col><Col id=\"ID\">34</Col><Col id=\"NAME\">test1</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2</Col><Col id=\"ID\">35</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">36</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">37</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"DESCRIPTION\">test1</Col><Col id=\"DEPARTMENT\">test1</Col><Col id=\"ID\">39</Col><Col id=\"NAME\">test1</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2</Col><Col id=\"ID\">40</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">41</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">1111</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">42</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"DESCRIPTION\">test5</Col><Col id=\"DEPARTMENT\">test5</Col><Col id=\"ID\">43</Col><Col id=\"NAME\">test5</Col></Row><Row><Col id=\"DESCRIPTION\">111</Col><Col id=\"DEPARTMENT\">11</Col><Col id=\"ID\">44</Col><Col id=\"NAME\">111</Col></Row><Row><Col id=\"DESCRIPTION\">test1</Col><Col id=\"DEPARTMENT\">test1</Col><Col id=\"ID\">45</Col><Col id=\"NAME\">test1</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2</Col><Col id=\"ID\">46</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">47</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">48</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"DESCRIPTION\">test5</Col><Col id=\"DEPARTMENT\">test5</Col><Col id=\"ID\">49</Col><Col id=\"NAME\">test5</Col></Row><Row><Col id=\"DESCRIPTION\">111</Col><Col id=\"DEPARTMENT\">11</Col><Col id=\"ID\">50</Col><Col id=\"NAME\">111</Col></Row><Row><Col id=\"DESCRIPTION\">test1</Col><Col id=\"DEPARTMENT\">test1</Col><Col id=\"ID\">51</Col><Col id=\"NAME\">test1</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2</Col><Col id=\"ID\">52</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">53</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">54</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"DESCRIPTION\">test5</Col><Col id=\"DEPARTMENT\">test5</Col><Col id=\"ID\">55</Col><Col id=\"NAME\">test5</Col></Row><Row><Col id=\"DESCRIPTION\">111</Col><Col id=\"DEPARTMENT\">11</Col><Col id=\"ID\">56</Col><Col id=\"NAME\">111</Col></Row><Row><Col id=\"DESCRIPTION\">test1</Col><Col id=\"DEPARTMENT\">test1</Col><Col id=\"ID\">57</Col><Col id=\"NAME\">test1</Col></Row><Row><Col id=\"DESCRIPTION\">test2</Col><Col id=\"DEPARTMENT\">test2</Col><Col id=\"ID\">58</Col><Col id=\"NAME\">test2</Col></Row><Row><Col id=\"DESCRIPTION\">test3</Col><Col id=\"DEPARTMENT\">test3</Col><Col id=\"ID\">59</Col><Col id=\"NAME\">test3</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">60</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"DESCRIPTION\">test4</Col><Col id=\"DEPARTMENT\">test4</Col><Col id=\"ID\">61</Col><Col id=\"NAME\">test4</Col></Row><Row><Col id=\"ID\">63</Col><Col id=\"NAME\">1</Col></Row><Row><Col id=\"DESCRIPTION\">789</Col><Col id=\"DEPARTMENT\">456</Col><Col id=\"ID\">64</Col><Col id=\"NAME\">123</Col></Row><Row><Col id=\"DESCRIPTION\">1234</Col><Col id=\"DEPARTMENT\">1234</Col><Col id=\"ID\">1234</Col><Col id=\"NAME\">1234</Col></Row><Row><Col id=\"DESCRIPTION\">123123124123213</Col><Col id=\"DEPARTMENT\">3123124</Col><Col id=\"ID\">1234123</Col><Col id=\"NAME\">12312314</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","30","412",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","330",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Boundary");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","30","Static03_00:30",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자 정보 조회");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","30","30","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","30","70",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00_00","30","130","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","30","170",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","30","edt00_00:20",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Full");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt00","value","dsSearch","srchCond1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt00_00","value","dsSearch","srchCond2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleTransaction.xfdl", function() {
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
        	var strSvcId 	= "searchSampleList";
        	var strSvcUrl 	= "samplefile/searchSampleList.xml";
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
