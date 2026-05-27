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
            this.set_titletext("CRUD멀티");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "INT","size" : "256"},{"id" : "employee_name","type" : "STRING","size" : "256"},{"id" : "employee_salary","type" : "INT","size" : "256"},{"id" : "employee_age","type" : "INT","size" : "256"},{"id" : "employee_col04","type" : "STRING","size" : "256"},{"id" : "employee_col05","type" : "STRING","size" : "256"},{"id" : "employee_col06","type" : "STRING","size" : "256"},{"id" : "employee_col07","type" : "STRING","size" : "256"},{"id" : "employee_col08","type" : "STRING","size" : "256"},{"id" : "employee_col09","type" : "STRING","size" : "256"},{"id" : "employee_col10","type" : "STRING","size" : "256"},{"id" : "employee_col11","type" : "STRING","size" : "256"},{"id" : "employee_col12","type" : "STRING","size" : "256"},{"id" : "employee_col13","type" : "STRING","size" : "256"},{"id" : "employee_col14","type" : "STRING","size" : "256"},{"id" : "employee_col15","type" : "STRING","size" : "256"},{"id" : "employee_col16","type" : "STRING","size" : "256"},{"id" : "employee_col17","type" : "STRING","size" : "256"},{"id" : "employee_col18","type" : "STRING","size" : "256"},{"id" : "employee_col19","type" : "STRING","size" : "256"},{"id" : "employee_col20","type" : "STRING","size" : "256"},{"id" : "employee_col21","type" : "STRING","size" : "256"},{"id" : "employee_col22","type" : "STRING","size" : "256"},{"id" : "employee_col23","type" : "STRING","size" : "256"},{"id" : "employee_col24","type" : "STRING","size" : "256"},{"id" : "employee_col25","type" : "STRING","size" : "256"},{"id" : "employee_col26","type" : "STRING","size" : "256"},{"id" : "employee_col27","type" : "STRING","size" : "256"},{"id" : "employee_col28","type" : "STRING","size" : "256"},{"id" : "employee_col29","type" : "STRING","size" : "256"},{"id" : "employee_col30","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_boardList2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "string","size" : "256"},{"id" : "employee_name","type" : "string","size" : "256"},{"id" : "employee_salary","type" : "string","size" : "256"},{"id" : "employee_age","type" : "string","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "pageIndex","type" : "STRING","size" : "256"},{"id" : "pageSize","type" : "STRING","size" : "256"}]},"Rows" : [{"pageIndex" : "1","pageSize" : "10"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_search",null,"17","70","40","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list00","20",null,null,"400","20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_boardList2");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"employee_name\"/><Cell col=\"2\" text=\"employee_salary\"/><Cell col=\"3\" text=\"employee_age\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:employee_name\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:employee_salary\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:employee_age\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","70",null,null,"20","grd_list00:10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_boardList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"employee_name\"/><Cell col=\"2\" text=\"employee_salary\"/><Cell col=\"3\" text=\"employee_age\"/><Cell col=\"4\" text=\"employee_col04\"/><Cell col=\"5\" text=\"employee_col05\"/><Cell col=\"6\" text=\"employee_col06\"/><Cell col=\"7\" text=\"employee_col07\"/><Cell col=\"8\" text=\"employee_col08\"/><Cell col=\"9\" text=\"employee_col09\"/><Cell col=\"10\" text=\"employee_col10\"/><Cell col=\"11\" text=\"employee_col11\"/><Cell col=\"12\" text=\"employee_col12\"/><Cell col=\"13\" text=\"employee_col13\"/><Cell col=\"14\" text=\"employee_col14\"/><Cell col=\"15\" text=\"employee_col15\"/><Cell col=\"16\" text=\"employee_col16\"/><Cell col=\"17\" text=\"employee_col17\"/><Cell col=\"18\" text=\"employee_col18\"/><Cell col=\"19\" text=\"employee_col19\"/><Cell col=\"20\" text=\"employee_col20\"/><Cell col=\"21\" text=\"employee_col21\"/><Cell col=\"22\" text=\"employee_col22\"/><Cell col=\"23\" text=\"employee_col23\"/><Cell col=\"24\" text=\"employee_col24\"/><Cell col=\"25\" text=\"employee_col25\"/><Cell col=\"26\" text=\"employee_col26\"/><Cell col=\"27\" text=\"employee_col27\"/><Cell col=\"28\" text=\"employee_col28\"/><Cell col=\"29\" text=\"employee_col29\"/><Cell col=\"30\" text=\"employee_col30\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:employee_name\"/><Cell col=\"2\" text=\"bind:employee_salary\"/><Cell col=\"3\" text=\"bind:employee_age\"/><Cell col=\"4\" text=\"bind:employee_col04\"/><Cell col=\"5\" text=\"bind:employee_col05\"/><Cell col=\"6\" text=\"bind:employee_col06\"/><Cell col=\"7\" text=\"bind:employee_col07\"/><Cell col=\"8\" text=\"bind:employee_col08\"/><Cell col=\"9\" text=\"bind:employee_col09\"/><Cell col=\"10\" text=\"bind:employee_col10\"/><Cell col=\"11\" text=\"bind:employee_col11\"/><Cell col=\"12\" text=\"bind:employee_col12\"/><Cell col=\"13\" text=\"bind:employee_col13\"/><Cell col=\"14\" text=\"bind:employee_col14\"/><Cell col=\"15\" text=\"bind:employee_col15\"/><Cell col=\"16\" text=\"bind:employee_col16\"/><Cell col=\"17\" text=\"bind:employee_col17\"/><Cell col=\"18\" text=\"bind:employee_col18\"/><Cell col=\"19\" text=\"bind:employee_col19\"/><Cell col=\"20\" text=\"bind:employee_col20\"/><Cell col=\"21\" text=\"bind:employee_col21\"/><Cell col=\"22\" text=\"bind:employee_col22\"/><Cell col=\"23\" text=\"bind:employee_col23\"/><Cell col=\"24\" text=\"bind:employee_col24\"/><Cell col=\"25\" text=\"bind:employee_col25\"/><Cell col=\"26\" text=\"bind:employee_col26\"/><Cell col=\"27\" text=\"bind:employee_col27\"/><Cell col=\"28\" text=\"bind:employee_col28\"/><Cell col=\"29\" text=\"bind:employee_col29\"/><Cell col=\"30\" text=\"bind:employee_col30\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_searchTime","20","27",null,"20","btn_search:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("서버/네트워크시간 <fc v=\'#d7381e\'>0</fc> 초, 렌더링시간 <fc v=\'#d7381e\'>0</fc> 초, 총 <fc v=\'#d7381e\'>0</fc> 건");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("largeData.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        sample > CRUD단일
        *  @FileName 		crudSample.xfdl
        *  @Creator 		consulting
        *  @CreateDate 		2022.11.17
        *  @Desction        CRUD단일 셈플
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.11.17     		consulting 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /*
        gfn_dsFetch Arguments
        	url   	 - [필수] method::그룹::uri
        	inDs  	 - [옵션] dataset  입력 ([key=]inDS:{sType||rownum}) (GET 메소드 사용시 queryString으로 변환)
        	outDs 	 - [옵션] dataset  출력 (outDS=key)
        	args  	 - [옵션] argument 입력 (key=val)
        */
        this.SVC_SEARCH_LARGE = {
        	url   : "GET::app01::large-data"
        	, inDs  : ""
        	, outDs : "ds_boardList=result"
        }
        this.SVC_SEARCH_USER = {
        	url   : "GET::app01::user"
        	, inDs  : "ds_param"
        	, outDs : "ds_boardList2=result"
        }
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        };

        /***********************************************************************************
        /* Common Library
        /***********************************************************************************/

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
        * @description 데이터 조회
        * @param {Number} pageNum 출력될 페이저 번호
        * @return N/A
        */
        this.fn_search = async function ()
        {
        	// 시간측정
        	this.sta_searchTime.set_text("서버/네트워크시간 <fc v='#d7381e'>0</fc> 초, 렌더링시간 <fc v='#d7381e'>0</fc> 초, 조회건수 <fc v='#d7381e'>0</fc> 건");
        	this.starttime = new Date();

        	// 프로미스 RestAPI 통신 (병렬통신)
        	try {
        		let func01 = this.gfn_dsFetch(this.SVC_SEARCH_LARGE);
        		let func02 = this.gfn_dsFetch(this.SVC_SEARCH_USER);

        		let [res01, res02] = await Promise.all([func01, func02]);

        		var totalDataCount = this.ds_boardList.rowcount;
        		var endtime = new Date();
        		var totaltime = nexacro.round((endtime - this.starttime) / 1000, 3);
        		var elapsedTime = res01.elapsedTime;

        		this.sta_searchTime.set_text("서버/네트워크시간 <fc v='#d7381e'>" + elapsedTime + "</fc> 초, 렌더링시간 <fc v='#d7381e'>" + nexacro.round(totaltime - elapsedTime, 3) + "</fc> 초, 총 <fc v='#d7381e'>" +  this.gfn_appendComma(totalDataCount) + "</fc>" + " 건")

        	} catch (err) {
        		console.error(err);
        	}

        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 조회버튼 클릭 시 이벤트
        */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_list00.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
        };
        this.loadIncludeScript("largeData.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
