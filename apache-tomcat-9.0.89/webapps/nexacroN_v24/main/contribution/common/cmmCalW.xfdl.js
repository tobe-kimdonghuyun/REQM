(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalW");
            this.set_titletext("주달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(140,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"INT\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonth", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">01</Col></Row><Row><Col id=\"month\">02</Col></Row><Row><Col id=\"month\">03</Col></Row><Row><Col id=\"month\">04</Col></Row><Row><Col id=\"month\">05</Col></Row><Row><Col id=\"month\">06</Col></Row><Row><Col id=\"month\">07</Col></Row><Row><Col id=\"month\">08</Col></Row><Row><Col id=\"month\">09</Col></Row><Row><Col id=\"month\">10</Col></Row><Row><Col id=\"month\">11</Col></Row><Row><Col id=\"month\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCal", this);
            obj._setContents("<ColumnInfo><Column id=\"d0\" type=\"STRING\" size=\"10\"/><Column id=\"d1\" type=\"STRING\" size=\"10\"/><Column id=\"d2\" type=\"STRING\" size=\"10\"/><Column id=\"d3\" type=\"STRING\" size=\"10\"/><Column id=\"d4\" type=\"STRING\" size=\"10\"/><Column id=\"d5\" type=\"STRING\" size=\"10\"/><Column id=\"d6\" type=\"STRING\" size=\"10\"/><Column id=\"d7\" type=\"STRING\" size=\"10\"/><Column id=\"css0\" type=\"STRING\" size=\"256\"/><Column id=\"css1\" type=\"STRING\" size=\"256\"/><Column id=\"css2\" type=\"STRING\" size=\"256\"/><Column id=\"css3\" type=\"STRING\" size=\"256\"/><Column id=\"css4\" type=\"STRING\" size=\"256\"/><Column id=\"css5\" type=\"STRING\" size=\"256\"/><Column id=\"css6\" type=\"STRING\" size=\"256\"/><Column id=\"css7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calW","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivCal","2","40","234","302",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GBg01");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnPrev","0","5","29","29",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalLeft");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Combo("cboYear","54","5","70","29",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("year");
            obj.set_datacolumn("year");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Combo("cboMonth","129","5","60","29",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("month");
            obj.set_datacolumn("month");
            obj.set_text("01");
            obj.set_value("01");
            obj.set_index("0");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"5","29","29","0",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_CalRight");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Grid("grdCal","0","cboYear:5",null,null,"0","0",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCal");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"주차\"/><Cell col=\"1\" text=\"월\"/><Cell col=\"2\" text=\"화\"/><Cell col=\"3\" text=\"수\"/><Cell col=\"4\" text=\"목\"/><Cell col=\"5\" text=\"금\"/><Cell col=\"6\" text=\"토\"/><Cell col=\"7\" text=\"일\"/></Band><Band id=\"body\"><Cell text=\"bind:d0\" cssclass=\"bind:css0\"/><Cell col=\"1\" text=\"bind:d1\" cssclass=\"bind:css1\"/><Cell col=\"2\" text=\"bind:d2\" cssclass=\"bind:css2\"/><Cell col=\"3\" text=\"bind:d3\" cssclass=\"bind:css3\"/><Cell col=\"4\" text=\"bind:d4\" cssclass=\"bind:css4\"/><Cell col=\"5\" text=\"bind:d5\" cssclass=\"bind:css5\"/><Cell col=\"6\" text=\"bind:d6\" cssclass=\"bind:css6\"/><Cell col=\"7\" text=\"bind:d7\" cssclass=\"bind:css7\"/></Band></Format></Formats>");
            this.pdivCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdivCal.form
            obj = new Layout("default","",0,0,this.pdivCal.form,function(p){});
            this.pdivCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",140,28,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalW.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmCalW.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/03			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvLastDays = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

        this.fvIntThisYear  = -1;
        this.fvIntThisMonth = -1;
        this.fvIntThisDay   = -1;
        this.fvYear		    = -1;
        this.fvMonth 	    = -1;
        this.fvDay	 	    = -1;
        this.fvIntPrevYear  = -1;
        this.fvIntPrevMonth = -1;
        this.fvIntNextYear  = -1;
        this.fvIntNextMonth = -1;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        	this.fnSetYear();
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

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSetYear = function ()
        {
        	for (var i = 1900; i < 2050; i++){
        		nRow = this.dsYear.addRow();
        		this.dsYear.setColumn(nRow, "year", i);
        	}
        };

        /**
         * @description  return date
        */
        this.getDate = function ()
        {
        	return this.calW.value;
        };

        /**
         * @description  return week
        */
        this.getWeek = function ()
        {
        	return this.calW.uWeek;
        };

        /**
         * @description date setting
        */
        this.setDate = function (value)
        {
        	this.calW.set_value(value);
        	this.calW.uWeek = this.gfnDateToWeek(value);
        };

        /**
         * @description  필수여부 css 변경
        */
        this.setRequired = function(bValue)
        {
        	if (bValue) {
        		this.calW.set_cssclass("essential");
        	}else {
        		this.calW.set_cssclass("");
        	}
        };

        /**
         * @description  ReadOnly여부 변경
        */
        this.setReadOnly = function(bValue)
        {
        	this.calW.set_readonly(bValue);
        };

        this.fnOpenPopupdiv = function ()
        {
        	this.pdivCal.trackPopupByComponent(this.calW, 0, this.calW.getOffsetHeight());
        };

        this.fnShowCalendarData = function(sYear, sMonth, sDay, bCmbProc, bType)
        {
        	this.dsCal.clearData();

        	var sDate = sYear + sMonth + sDay;

        	if (sDate == "000"){
        	  var sToday = this.gfnGetDate();
        	  sYear = sToday.substr(0, 4);
        	  sMonth = sToday.substr(4, 2);
        	  sDay = sToday.substr(6, 2);
        	  sDate = sYear + sMonth + sDay;
        	}

        	this.fvIntThisYear  = parseInt(sYear);
        	this.fvIntThisMonth = parseInt(sMonth);
        	this.fvIntThisDay   = parseInt(sDay);

        	if (bType){
        	  this.fvYear = this.fvIntThisYear;
        	  this.fvMonth = this.fvIntThisMonth;
        	  this.fvDay = this.fvIntThisDay;
        	}

        	if (bCmbProc)
        	{
        	  this.pdivCal.form.cboYear.set_value(this.fvIntThisYear);
        	  this.pdivCal.form.cboMonth.set_index(this.fvIntThisMonth - 1);
        	}

        	switch (this.fvIntThisMonth)
        	{
        	  case 1:
        		this.fvIntPrevYear = this.fvIntThisYear - 1;
        		this.fvIntPrevMonth = 12;
        		this.fvIntNextYear = this.fvIntThisYear;
        		this.fvIntNextMonth = 2;
        		break;
        	  case 12:
        		this.fvIntPrevYear = this.fvIntThisYear;
        		this.fvIntPrevMonth = 11;
        		this.fvIntNextYear = this.fvIntThisYear + 1;
        		this.fvIntNextMonth = 1;
        		break;
        	  default:
        		this.fvIntPrevYear = this.fvIntThisYear;
        		this.fvIntPrevMonth = parseInt(this.fvIntThisMonth) - 1;
        		this.fvIntNextYear = this.fvIntThisYear;
        		this.fvIntNextMonth = parseInt(this.fvIntThisMonth) + 1;
        		break;
        	}

        	var d = new Date();
        	d.setFullYear(parseInt(sYear), parseInt(sMonth) - 1, 1);
        	d.setHours(0, 0, 0);
        	d.setMilliseconds(0);

        	var seq = d.getDay();
        	var stopFlag = 0;

        	// 4년마다 1번이면 (사로나누어 떨어지면)
        	if ((this.fvIntThisYear % 4) == 0)
        	{
        	  if ((this.fvIntThisYear % 100) == 0)
        	  {
        		if ((this.fvIntThisYear % 400) == 0)
        		{
        		  this.fvLastDays[intPrevMonth] = "29";
        		}
        		else
        		  this.fvLastDays[1] = "28";
        	  }
        	  else
        	  {
        		this.fvLastDays[1] = "29";
        	  }
        	}
        	else
        	{
        	  this.fvLastDays[1] = "28";
        	}

        	var preStartDay = parseInt(this.fvLastDays[this.fvIntPrevMonth - 1]);

        	if (this.fvIntThisDay > parseInt(this.fvLastDays[this.fvIntThisMonth - 1]))
        	  this.fvIntThisDay = this.fvLastDays[this.fvIntThisMonth - 1];

        	var i, j;
        	var Day = 1;
        	var ColSel;
        	var RowSel;
        	var lastDay = 0;
        	var PreDay;

        	//일요일 일경우 7로 셋팅
        	if (seq == 0) seq = 7;

        	//오늘일자
        	var today = this.gfnGetDate();
        	var nYear = parseInt(today.substr(0, 4));
        	var nMonth = parseInt(today.substr(4, 2));
        	var nDay = parseInt(today.substr(6, 2));

        	for (i = 0; i < 6; i++)
        	{
        	  if (stopFlag == 0)
        	  {
        		this.dsCal.addRow();
        		this.dsCal.setColumn(this.dsCal.rowposition, "d0", this.gfnCalculateWeek(this.fvIntThisYear, this.fvIntThisMonth, Day));
        		this.dsCal.setColumn(this.dsCal.rowposition, "css0", "CalendarWeekWeekColor");
        	  }
        	  for (j = 1; j < 8; j++)
        	  {
        		if (stopFlag == 1)
        		{
        		  this.dsCal.setColumn(i, "css" + (j), "CalendarWeekGrayColor");
        		  this.dsCal.setColumn(i, "d" + (j), lastDay);
        		}
        		else
        		{
        		  if (i == 0)
        		  {
        			if (seq <= j)
        			{
        			  if (j == 7) //일요일
        				this.dsCal.setColumn(i+1, "css" + (j), "CalendarWeekSunColor");
        			  else if (j == 6) //토요일
        				this.dsCal.setColumn(i, "css" + (j), "CalendarWeekSatColor");
        			  else
        				this.dsCal.setColumn(i, "css" + (j), "CalendarWeekDayColor");

        			  //오늘일자 표시
        			  if (nYear == this.pdivCal.form.cboYear.value && nMonth == this.pdivCal.form.cboMonth.value && nDay == Day)
        				this.dsCal.setColumn(i, "css" + (j), "CalendarWeekTodayColor");

        			  if (this.fvYear == this.fvIntThisYear && this.fvMonth == this.fvIntThisMonth && this.fvDay == Day)
        				this.dsCal.setColumn(i, "css" + (j), "CalendarWeekSelectColor");
        			  else
        				this.dsCal.setColumn(i, "css" + (j), null);

        			  this.dsCal.setColumn(i, "d" + (j), Day);
        			  Day++;
        			}
        			else
        			{
        			  preDay = preStartDay - (seq - j - 1);
        			  this.dsCal.setColumn(i, "css" + (j), "CalendarWeekGrayColor");
        			  this.dsCal.setColumn(i, "d" + (j), preDay);
        			}
        		  }
        		  else
        		  {
        			if (j == 7) //일요일
        			  this.dsCal.setColumn(i+1, "css" + (j), "CalendarWeekSunColor");
        			else if (j == 6) //토요일
        			  this.dsCal.setColumn(i, "css" + (j), "CalendarWeekSatColor");
        			else
        			  this.dsCal.setColumn(i, "css" + (j), "CalendarWeekDayColor");

        			//오늘일자 표시
        			if (nYear == this.pdivCal.form.cboYear.value && nMonth == this.pdivCal.form.cboMonth.value && nDay == Day)
        			  this.dsCal.setColumn(i, "css" + (j), "CalendarWeekSunColor");
        			if (this.fvYear == this.fvIntThisYear && this.fvMonth == this.fvIntThisMonth && this.fvDay == Day)
        			  this.dsCal.setColumn(i, "css" + (j), "CalendarWeekSelectColor");
        			else
        			  this.dsCal.setColumn(i, "css" + (j), null);

        			this.dsCal.setColumn(i, "d" + (j), Day);
        			Day++;
        		  }
        		}

        		if (parseInt(this.fvLastDays[this.fvIntThisMonth - 1]) < Day)
        		{
        		  stopFlag = 1;
        		  lastDay++;
        		}
        	  }
        	}

        	var nGrdHeight = 37 + (this.dsCal.rowcount * 37 ) + 2;
        	var nPdivHeight = nGrdHeight + 39;
        	this.pdivCal.set_height(nPdivHeight);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.calW_oneditclick = function(obj,e)
        {
        	obj.uOrgValue = obj.value;
        	this.fnOpenPopupdiv();
        };

        this.calW_ondropdown = function(obj,e)
        {
        	obj.uOrgValue = obj.value;
        	this.fnOpenPopupdiv();
        };

        this.calW_onchanged = function(obj,e)
        {
        	obj.uWeek = this.gfnDateToWeek(e.postvalue);
        };

        this.pdivCal_onpopup = function(obj,e)
        {
        	var sDate = this.calW.value;
        	if(this.gfnIsNull(sDate)){
        		sDate = this.gfnGetDate();
        	}

        	var sYear  = sDate.substr(0, 4);
            var sMonth = sDate.substr(4, 2);
            var sDay   = sDate.substr(6, 2);

        	this.fnShowCalendarData(sYear, sMonth, sDay, true, true);
        };

        this.pdivCal_btnPrev_onclick = function(obj,e)
        {
        	if (this.pdivCal.form.cboMonth.index == 0) {
              this.pdivCal.form.cboMonth.set_index(this.pdivCal.form.cboMonth.getCount() - 1);
              if (this.pdivCal.form.cboYear.index > 0)
              {
                this.pdivCalr.form.cboYear.set_index(this.pdivCal.form.cboYear.index - 1);
              }
            }else{
              this.pdivCal.form.cboMonth.set_index(this.pdivCal.form.cboMonth.index - 1);
            }
            this.fnShowCalendarData(this.pdivCal.form.cboYear.value, this.pdivCal.form.cboMonth.value, this.fvIntThisDay, true);
        };

        this.pdivCal_btnNext_onclick = function(obj,e)
        {
        	 if (this.pdivCal.form.cboMonth.index >= (this.pdivCal.form.cboMonth.getCount() - 1))
            {
              this.pdivCal.form.cboMonth.set_index(0);
              if (this.pdivCal.form.cboYear.index < (this.pdivCal.form.cboYear.getCount() - 1))
              {
                this.pdivCal.form.cboYear.set_index(this.pdivCal.form.cboYear.index + 1);
              }
            }
            else
            {
              this.pdivCal.form.cboMonth.set_index(this.pdivCal.form.cboMonth.index + 1);
            }
            this.fnShowCalendarData(this.pdivCal.form.cboYear.value, this.pdivCal.form.cboMonth.value, this.fvIntThisDay, true);
        };

        this.pdivCal_cboYear_onitemchanged = function(obj,e)
        {
        	 this.fnShowCalendarData(e.postvalue, this.pdivCal.form.cboMonth.value, this.fvIntThisDay, true);
        };

        this.pdivCal_cboMonth_onitemchanged = function(obj,e)
        {
        	this.fnShowCalendarData(this.pdivCal.form.cboYear.value, e.postvalue, this.fvIntThisDay, true);
        };

        this.pdivCal_grdCal_oncellclick = function(obj,e)
        {
        	if( e.cell == 0 ) return;

        	var retval = "";
        	if (this.dsCal.getColumn(e.row, "css" + (e.cell)) == "CalendarWeekGrayColor"){
              if (e.row == 0){
                retval = this.fvIntPrevYear.toString() + this.fvIntPrevMonth.toString().padLeft(2, '0') + this.dsCal.getColumn(e.row, "d" + (e.cell)).padLeft(2, '0');
              } else {
                retval = this.fvIntNextYear.toString() + this.fvIntNextMonth.toString().padLeft(2, '0') + this.dsCal.getColumn(e.row, "d" + (e.cell)).padLeft(2, '0');
              }
            }else{
              retval = this.fvIntThisYear.toString() + this.fvIntThisMonth.toString().padLeft(2, '0') + this.dsCal.getColumn(e.row, "d" + (e.cell)).padLeft(2, '0');
            }
        	this.calW.set_value(retval);
        	this.calW.uWeek = this.gfnDateToWeek(retval);
        	this.pdivCal.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calW.addEventHandler("oneditclick",this.calW_oneditclick,this);
            this.calW.addEventHandler("ondropdown",this.calW_ondropdown,this);
            this.calW.addEventHandler("onchanged",this.calW_onchanged,this);
            this.pdivCal.addEventHandler("onpopup",this.pdivCal_onpopup,this);
            this.pdivCal.form.btnPrev.addEventHandler("onclick",this.pdivCal_btnPrev_onclick,this);
            this.pdivCal.form.cboYear.addEventHandler("onitemchanged",this.pdivCal_cboYear_onitemchanged,this);
            this.pdivCal.form.cboMonth.addEventHandler("onitemchanged",this.pdivCal_cboMonth_onitemchanged,this);
            this.pdivCal.form.btnNext.addEventHandler("onclick",this.pdivCal_btnNext_onclick,this);
            this.pdivCal.form.grdCal.addEventHandler("oncellclick",this.pdivCal_grdCal_oncellclick,this);
        };
        this.loadIncludeScript("cmmCalW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
