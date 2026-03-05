(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmGridFilter");
            this.set_titletext("그리드 필터");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilterType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"code\">=</Col><Col id=\"name\">같은</Col></Row><Row><Col id=\"code\">&gt;</Col><Col id=\"name\">보다 큰</Col></Row><Row><Col id=\"code\">&lt;</Col><Col id=\"name\">보다 작은</Col></Row><Row><Col id=\"code\">!=</Col><Col id=\"name\">같지않는</Col></Row><Row><Col id=\"code\">like</Col><Col id=\"name\">포함하는</Col></Row><Row><Col id=\"code\">nolike</Col><Col id=\"name\">포함하지 않는</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilter", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"filtertype\" type=\"STRING\" size=\"256\"/><Column id=\"columid\" type=\"STRING\" size=\"256\"/><Column id=\"filtervalue\" type=\"STRING\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"combocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"combodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"combodataset\" type=\"STRING\" size=\"256\"/><Column id=\"col\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"col\" type=\"INT\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/><Column id=\"filtertype\" type=\"STRING\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"edittype\" type=\"STRING\" size=\"256\"/><Column id=\"combodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"combocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"combodataset\" type=\"STRING\" size=\"256\"/><Column id=\"filtervalue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdFilterList","25","60",null,null,"25","52",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFilter");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/><Column size=\"66\"/><Column size=\"190\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"컬럼명\" expandchar=\"popup.columnname\"/><Cell col=\"1\" text=\"필터기준\" expandchar=\"popup.filtercriteria\"/><Cell col=\"2\" text=\"찾을조건\" expandchar=\"popup.findcondition\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsFilterCol\" combodatacol=\"columnName\" combocodecol=\"columnId\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsFilterType\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:filtertype\"/><Cell col=\"2\" text=\"bind:filtervalue\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown",null,"22","29","29","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Down");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp",null,"22","29","29","btnDown:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Up");
            this.addChild(obj.name, obj);

            obj = new Button("btnFilterCancel",null,"22","90","28","btnUp:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("필터취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFilter","230",null,"50","28",null,"14",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","290",null,"50","28",null,"14",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmGridFilter.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmGridFilter.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/02
        *  @Desction    그리드 필터를 수행할 공통팝업
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/02			TOBESOFT					최초생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvTargetGrid; 	  //대상그리드 OBJECT
        this.fvTargetDataset; //대상데이터셋 OBJECT

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvTargetGrid = this.getOwnerFrame().pvGrid;
        	this.fvTargetDataset = this.fvTargetGrid.getBindDataset();

        	var bUserHeader = this._gfnGridUserHeaderFlg(this.fvTargetGrid);
        	if (!bUserHeader) {
        		this.fnGetHeadText(this.fvTargetGrid);
        	} else{
        		this.fnGetUserHeader(this.fvTargetGrid);
        	}
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅(userHeader prop 사용)
        */
        this.fnGetUserHeader = function (objGrid)
        {
        	var nheadcnt = objGrid.getCellCount("head");

        	for( var i=0; i<nheadcnt; i++)
        	{
        		var bindcol = objGrid.getCellProperty("head", i, "calendarweekformat");
        		if( this.gfnIsNull(bindcol)) continue;

        		for( var j=0; j<objGrid.getCellCount("body"); j++)
        		{
        			var nCell =0;
        			if( bindcol == objGrid.getCellProperty("body", j,"text"))
        			{
        				nCell = j;
        				var columname = objGrid.getCellProperty("body", nCell, "text");
        				var nRow = this.dsTemp.addRow();
        				var displaytype = objGrid.getCellProperty("body", nCell, "displaytype");

        				if( displaytype == "combotext" || displaytype == "combocontrol")
        				{
        					displaytype = "combo";
        					columname = objGrid.getCellProperty("body", nCell, "text").substring(5);
        					this.fvTargetDataset.set_enableevent(false);
        					this.fvTargetDataset.set_updatecontrol(false);
        					this.fvTargetDataset.addColumn(columname+"_text");
        					for(var n=0; n<this.fvTargetDataset.getRowCount(); n++)
        					{
        						this.fvTargetDataset.setColumn(n, columname+"_text", this.fvTargetGrid.getCellText(n, j));
        					}
        					this.fvTargetDataset.set_enableevent(true);
        					this.fvTargetDataset.set_updatecontrol(true);

        					this.dsTemp.setColumn(nRow, "body", "bind:"+columname+"_text");
        				} else
        				{
        					this.dsTemp.setColumn(nRow, "body", columname);
        				}
        				this.dsTemp.setColumn(nRow, "col", j);
        				this.dsTemp.setColumn(nRow, "displaytype",  displaytype);
        				this.dsTemp.setColumn(nRow, "combocodecol", objGrid.getCellProperty("body", j, "combocodecol"));
        				this.dsTemp.setColumn(nRow, "combodatacol", objGrid.getCellProperty("body", j, "combodatacol"));
        				this.dsTemp.setColumn(nRow, "combodataset", objGrid.getCellProperty("body", j, "combodataset"));
        				this.dsTemp.setColumn(nRow, "title", objGrid.getCellProperty("head", i, "text"));
        			}
        		}
        	}
        	this.fnFilterSetup();
        };

        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅(defualt)
        */
        this.fnGetHeadText = function (objGrid)
        {
        	// 바디의 갯수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for(var i=0;i<objGrid.getCellCount("Body");i++)
            {
                if( objGrid.getCellProperty("Body", i, "displaytype") != "image" )
                {
        			var sText = objGrid.getCellProperty("Body", i, "text");
        			var sBind;
        			if ( this.gfnIsNull(sText) == false ){
        				sBind = sText.substr(0, 5);
        			}else {
        				sBind = "";
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.dsTemp.addRow();

        				var displaytype = "text";
        				if( objGrid.getCellProperty("Body", i, "displaytype") == "combotext" ||objGrid.getCellProperty("Body", i, "displaytype") == "combocontrol")
        				{
        					displaytype = "combo";

        					// 콤보의 경우는 TEXT로 필터링이 되질않기 때문에 해당 _text 를 동적으로 생성해서 그 값을 이용하도록 한다.
        					var columname = objGrid.getCellProperty("Body", i, "text").substring(5);
        					if( this.gfnIsNull(this.fvTargetDataset.getColumnInfo(columname+"_text")) )
        					{
        						this.fvTargetDataset.set_enableevent(false);
        						this.fvTargetDataset.set_updatecontrol(false);
        						this.fvTargetDataset.addColumn(columname+"_text");
        						for(var j=0;j<this.fvTargetDataset.getRowCount();j++)
        						{
        							this.fvTargetDataset.setColumn(j, columname+"_text", this.fvTargetGrid.getCellText(j, i));
        						}
        						this.fvTargetDataset.set_enableevent(true);
        						this.fvTargetDataset.set_updatecontrol(true);
        					}

        					this.dsTemp.setColumn(nrow, "body", "bind:"+columname+"_text");
        				}
        				else
        				{
        					this.dsTemp.setColumn(nrow, "body", objGrid.getCellProperty("Body", i, "text"));
        				}

        				this.dsTemp.setColumn(nrow, "col", i);
        				this.dsTemp.setColumn(nrow, "displaytype",  displaytype);
        				this.dsTemp.setColumn(nrow, "combocodecol", objGrid.getCellProperty("Body", i, "combocodecol"));
        				this.dsTemp.setColumn(nrow, "combodatacol", objGrid.getCellProperty("Body", i, "combodatacol"));
        				this.dsTemp.setColumn(nrow, "combodataset", objGrid.getCellProperty("Body", i, "combodataset"));
        			}
                }
            }
        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
            for(var i=0; i<objGrid.getCellCount("Head");i++)
            {
                var title  = objGrid.getCellProperty("Head", i,   "text");
                var col    = objGrid.getCellProperty("Head", i,   "col");
                var body   = objGrid.getCellProperty("Body", i,   "text");

                //  콤보일때는 _text 로 처리한다.
                var display = objGrid.getCellProperty("Body", col, "displaytype");
                if( display == "combotext" || display=="combocontrol")
                {
                    body = "bind:"+body.substring(5)+"_text";
                }

                var nrow = this.dsTemp.findRow("body", body);
                if( nrow != -1 ){
                    this.dsTemp.setColumn(nrow, "title", title);
                }
            }

        	this.fnFilterSetup();
        };


        this.fnFilterSetup = function ()
        {
        	var filterlist= new Array();
            var filterstr = this.fvTargetDataset.filterstr;
            var tempbuff  = filterstr.split("&&");
            for(var i=0;i<tempbuff.length;i++)
            {
                var columinfo = tempbuff[i].trim();
                var columname   = "";
                var condition   = "";
                var filtertype  = "";
                var filtervalue = columinfo.split("'")[1];

                for(var j=0;j<columinfo.length;j++)
                {
                    if( "1234567890_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(columinfo.charAt(j)) == -1 )
                    {
                        columname = columinfo.substring(0, j);
                        condition = columinfo.substring(j);
                        break;
                    }
                }

                // 포함여부
                if( condition.indexOf("indexOf") != -1 )
                {
        			// ITO : 필터 선택 콤보 오류
                    if( condition.indexOf("==") != -1 )
                    {
                        filtertype = "notlike";
                    }
                    else
                    {
                        filtertype = "like";
                    }
                }
                else
                {
                    if( condition.indexOf("==") != -1 )
                    {
                        filtertype = "=";
                    }
                    else if( condition.indexOf("!=") != -1 )
                    {
                        filtertype = "!=";
                    }
                    else if( condition.indexOf(">") != -1 )
                    {
                        filtertype = ">";
                    }
                    else if( condition.indexOf("<") != -1 )
                    {
                        filtertype = "<";
                    }
                }

                filterlist.push({body:"bind:"+columname, filtertype:filtertype, filtervalue:filtervalue});
            }

        	// 이전의 필터조건을 이용해서 설정하고 소팅처리한다.
            for(var i=0;i<filterlist.length;i++)
            {
                var nRow = this.dsTemp.findRow("body", filterlist[i].body);
                this.dsTemp.setColumn(nRow, "col",       -(filterlist.length-i)     );
                this.dsTemp.setColumn(nRow, "filtertype",  filterlist[i].filtertype );
                this.dsTemp.setColumn(nRow, "filtervalue", filterlist[i].filtervalue);
            }

            this.dsTemp.set_keystring("S:col");
            for(var i=0;i<this.dsTemp.getRowCount();i++)
            {
                var body = this.dsTemp.getColumn(i, "body").substring(5);
                var sTitle = this.dsTemp.getColumn(i, "title");
        		if ( this.gfnIsNull(sTitle) == false )
        	    {
        			var nRow = this.dsFilter.addRow();
        			this.dsFilter.setColumn(nRow, "title",       sTitle);
        			this.dsFilter.setColumn(nRow, "filtertype",  this.dsTemp.getColumn(i, "filtertype"));
        			this.dsFilter.setColumn(nRow, "filtervalue", this.dsTemp.getColumn(i, "filtervalue"));
        			this.dsFilter.setColumn(nRow, "columid",     body);
        			this.dsFilter.setColumn(nRow, "displaytype", this.dsTemp.getColumn(i, "displaytype"));
        			this.dsFilter.setColumn(nRow, "combocodecol",this.dsTemp.getColumn(i, "combocodecol"));
        			this.dsFilter.setColumn(nRow, "combodatacol",this.dsTemp.getColumn(i, "combodatacol"));
        			this.dsFilter.setColumn(nRow, "combodataset",this.dsTemp.getColumn(i, "combodataset"));
                }
            }
            this.dsFilter.set_rowposition(-1);
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @description 필터취소 버튼클릭이벤트
        */
        this.btnFilterCancel_onclick = function(obj,e)
        {
        	this.fvTargetDataset.set_filterstr("");
        };

        /**
         * @description 업 버튼클릭이벤트
        */
        this.btnUp_onclick = function(obj,e)
        {
        	var nCurrow = this.dsFilter.rowposition;

            if( nCurrow == 0 ) return;

            this.dsFilter.moveRow(nCurrow, --nCurrow);
        };

        /**
         * @description 다운 버튼클릭이벤트
        */
        this.btnDown_onclick = function(obj,e)
        {
        	var nCurrow = this.dsFilter.rowposition;

            if( nCurrow == this.dsFilter.getRowCount()-1 ) return;

            this.dsFilter.moveRow(nCurrow, ++nCurrow);
        };

        /**
         * @description 적용 버튼클릭이벤트
        */
        this.btnSetFilter_onclick = function(obj,e)
        {
        	var objDataset = this.fvTargetDataset;
            var filterstr = "";

            for(var i=0;i<this.dsFilter.getRowCount();i++)
            {
                var columid    = this.dsFilter.getColumn(i, "columid");
                var filtervalue= this.dsFilter.getColumn(i, "filtervalue");
                var filtertype = this.dsFilter.getColumn(i, "filtertype");

                if( !this.gfnIsNull(filtertype) && !this.gfnIsNull(filtervalue) )
                {
                    var tempfilter = "";

                    if( filtertype == "=" )
                    {
                        tempfilter = columid+"=='"+filtervalue+"'";
                    }
                    else if( filtertype == "!=" )
                    {
                        tempfilter = columid+"!='"+filtervalue+"'";
                    }
                    else if( filtertype == ">" )
                    {
                        tempfilter = columid+">'"+filtervalue+"'";
                    }
                    else if( filtertype == "<" )
                    {
                        tempfilter = columid+"<'"+filtervalue+"'";
                    }
                    else if( filtertype == "like" )
                    {
                        tempfilter = columid+".indexOf('"+filtervalue+"')!=-1";
                    }
                    else if( filtertype == "notlike" )
                    {
                        tempfilter = columid+".indexOf('"+filtervalue+"')==-1";
                    }

                    if( this.gfnIsNull(filterstr) )
                        filterstr = tempfilter;
                    else
                        filterstr += " && "+tempfilter;
                }
            }

            objDataset.set_filterstr(filterstr);
        	this.close();
        };

        /**
         * @description 닫기 버튼클릭이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.btnFilterCancel.addEventHandler("onclick",this.btnFilterCancel_onclick,this);
            this.btnSetFilter.addEventHandler("onclick",this.btnSetFilter_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("cmmGridFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
