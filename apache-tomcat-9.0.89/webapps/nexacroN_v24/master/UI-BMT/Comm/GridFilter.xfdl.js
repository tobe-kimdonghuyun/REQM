(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridFilter");
            this.set_titletext("그리드필터");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_FilterType", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"}]},"Rows" : [{"name" : "선택"},{"code" : "=","name" : "같은 ( = )"},{"code" : ">","name" : "보다 큰 ( > )"},{"code" : "<","name" : "보다 작은 ( < )"},{"code" : "!=","name" : "같지않는 ( != )"},{"code" : "like","name" : "포함하는 ( like )"},{"code" : "nolike","name" : "포함하지 않는 ( Not like )"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Filter", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "title","type" : "STRING","size" : "256"},{"id" : "filtertype","type" : "STRING","size" : "256"},{"id" : "columid","type" : "STRING","size" : "256"},{"id" : "filtervalue","type" : "STRING","size" : "256"},{"id" : "displaytype","type" : "STRING","size" : "256"},{"id" : "combocodecol","type" : "STRING","size" : "256"},{"id" : "combodatacol","type" : "STRING","size" : "256"},{"id" : "combodataset","type" : "STRING","size" : "256"},{"id" : "col","type" : "INT","size" : "256"},{"id" : "colId","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Temp", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "title","type" : "STRING","size" : "256"},{"id" : "col","type" : "INT","size" : "256"},{"id" : "body","type" : "STRING","size" : "256"},{"id" : "filtertype","type" : "STRING","size" : "256"},{"id" : "displaytype","type" : "STRING","size" : "256"},{"id" : "edittype","type" : "STRING","size" : "256"},{"id" : "filtervalue","type" : "STRING","size" : "256"},{"id" : "colId","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_List","5","5",null,null,"5","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Filter");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"컬럼명\" expandchar=\"popup.columnname\"/><Cell col=\"1\" text=\"필터기준\" expandchar=\"popup.filtercriteria\"/><Cell col=\"2\" text=\"찾을조건\" expandchar=\"popup.findcondition\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsFilterCol\" combodatacol=\"columnName\" combocodecol=\"columnId\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_FilterType\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:filtertype\"/><Cell col=\"2\" text=\"bind:filtervalue\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SetFilter","232",null,"80","30",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("필터적용");
            obj.getSetter("uWord").set("popup.apply");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close","317",null,"80","30",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_popBtn01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",620,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GridFilter.xfdl", function() {
        this.fv_TargetGrid = "";//그리드
        this.fv_TargetDs = "";//데이터셋

        /************************************************************************
         * 화면 onload 이벤트
         ************************************************************************/
        this.GridFilter_onload = function(obj,e)
        {
        	this.fv_TargetGrid = this.getOwnerFrame().grid;
        	this.fv_TargetDs = this.fv_TargetGrid.getBindDataset();

        	this.fn_setInit(this.fv_TargetGrid);
        };

        /************************************************************************
         * 화면 초기설정
         ************************************************************************/
        this.fn_setInit = function (objGrid)
        {
        	// 바디의 수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for (var i=0;i<objGrid.getCellCount("Body");i++)
            {
                if ( objGrid.getCellProperty("Body", i, "displaytype") != "image" ) // 이미지 타입이 아니면
                {
        			var sText = objGrid.getCellProperty("Body", i, "text");
        			var sBind = "";
        			if ( this.gfn_isNull(sText) == false )
        			{
        				sBind = sText.substr(0, 5);
        			} else {
        				sBind = "";
        			}

        			if (sBind == "bind:") // 바인딩 된 컬럼이라면
        			{
        				var nrow = this.ds_Temp.addRow();

        				this.ds_Temp.setColumn(nrow, "body", objGrid.getCellProperty("Body", i, "text"));
        				this.ds_Temp.setColumn(nrow, "col", i);
        				this.ds_Temp.setColumn(nrow, "displaytype",  "text");
        				this.ds_Temp.setColumn(nrow, "colId",  sText.substr(5, sText.length));
        			}
                }
            }

        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
        	var sChkCol = "";
            for (var i=0; i<this.ds_Temp.getRowCount();i++)
            {
        		sChkCol = this.ds_Temp.getColumn(i, "col");

        		// var title = this.fn_getHeadText(objGrid, nexacro.toNumber(sChkCol));
        		var title = objGrid.getCellProperty("Head", i, "text");
        		var body = this.ds_Temp.getColumn(i, "body");

        		var display = objGrid.getCellProperty("Body", nexacro.toNumber(sChkCol), "displaytype");
        		var nrow = this.ds_Temp.findRow("body", body);

        		if ( nrow != -1 )
        		{
        			this.ds_Temp.setColumn(nrow, "title", title);
        		}
        	}

        	this.fn_FilterSetup();
        };

        /************************************************************************
         * 그리드 필터 설정
         ************************************************************************/
        this.fn_FilterSetup = function ()
        {
        	var filterlist= new Array();
            var filterstr = this.fv_TargetDs.filterstr; // DataSet 에 로드된 데이터 필터링 조건식
            var tempbuff  = filterstr.split("&&"); // ex) Column01=='a' && Column02=='b'  (2가지 조건식)

            for(var i=0;i<tempbuff.length;i++)
        	{
        		var columinfo = tempbuff[i].trim();
        		var columname   = "";
        		var condition   = "";
        		var filtertype  = "";
        		var filtervalue = columinfo.split("'")[1];

        		for (var j=0;j<columinfo.length;j++)
        		{
        			if ( "1234567890_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(columinfo.charAt(j)) == -1 ) // 연산자의 index를 추출하기 위해(데이터셋 컬럼id는 영문외에 다른걸로 지정하면 안됨)
        			{
        				columname = columinfo.substring(0, j);
        				condition = columinfo.substring(j);
        				break;
        			}
        		}

                // 포함여부
        		if ( condition.indexOf("indexOf") != -1 )
        		{
        			// ITO : 필터 선택 콤보 오류
        			if ( condition.indexOf("==") != -1 )
        			{
        				filtertype = "nolike";
        			}
                    else
                    {
        				filtertype = "like";
                    }
                }
                else
                {
                    if ( condition.indexOf("==") != -1 )
                    {
                        filtertype = "=";
                    }
                    else if ( condition.indexOf("!=") != -1 )
                    {
                        filtertype = "!=";
                    }
                    else if ( condition.indexOf(">") != -1 )
                    {
                        filtertype = ">";
                    }
                    else if ( condition.indexOf("<") != -1 )
                    {
                        filtertype = "<";
                    }
                }

                filterlist.push({body:"bind:"+columname, filtertype:filtertype, filtervalue:filtervalue});
            }

        	// 이전의 필터조건을 이용해서 설정하고 소팅처리한다.
            for (var i=0;i<filterlist.length;i++)
            {
                var nrow = this.ds_Temp.findRow("body", filterlist[i].body);
                this.ds_Temp.setColumn(nrow, "col", -(filterlist.length-i));
                this.ds_Temp.setColumn(nrow, "filtertype", filterlist[i].filtertype );
                this.ds_Temp.setColumn(nrow, "filtervalue", filterlist[i].filtervalue);
            }
           // trace(this.ds_Temp.saveXML());
            this.ds_Temp.set_keystring("S:col");

        	var befTitle = "";//이전타이틀

            for (var i=0;i<this.ds_Temp.getRowCount();i++)
            {
        		var body = this.ds_Temp.getColumn(i, "body").substring(5);
        		var sTitle = this.ds_Temp.getColumn(i, "title");

        		if ( this.gfn_isNull(sTitle) == false )
        	    {
        			var nRow = this.ds_Filter.addRow();

        			this.ds_Filter.setColumn(nRow, "title", sTitle);
        			this.ds_Filter.setColumn(nRow, "filtertype", this.ds_Temp.getColumn(i, "filtertype"));
        			this.ds_Filter.setColumn(nRow, "filtervalue", this.ds_Temp.getColumn(i, "filtervalue"));
        			this.ds_Filter.setColumn(nRow, "columid", nexacro.replaceAll(body, "_text", ""));
        			this.ds_Filter.setColumn(nRow, "colId", body);

        			this.ds_Filter.setColumn(nRow, "displaytype", this.ds_Temp.getColumn(i, "displaytype"));
                }

        		befTitle = sTitle;//이전타이틀
            }
        	if ( this.ds_Filter.rowcount > 0 ) this.ds_Filter.set_rowposition(0);
        };


        this.btn_SetFilter_onclick = function(obj,e)
        {
        	var dataset = this.fv_TargetDs;
            var filterstr = "";
            for (var i=0;i<this.ds_Filter.getRowCount();i++)
            {
        		//var columid    = this.ds_Filter.getColumn(i, "columid");
        		var columid    = this.ds_Filter.getColumn(i, "colId");
        		var filtervalue= this.ds_Filter.getColumn(i, "filtervalue");
        		var filtertype = this.ds_Filter.getColumn(i, "filtertype");

        		var nRowIdx = this.ds_Temp.findRow("colId", columid);
        		var nCol = this.ds_Temp.getColumn(nRowIdx, "col");
        		if( !this.gfn_isNull(filtertype) && !this.gfn_isNull(filtervalue) )
        		{

        			this.fv_TargetGrid.setCellProperty("head", nCol, "expandsize", 24);
        			this.fv_TargetGrid.setCellProperty("head", nCol, "expandshow", "show");
        			this.fv_TargetGrid.setCellProperty("head", nCol, "expandimage", "theme://images/img_WF_filter.png");

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
        			else if( filtertype == "nolike" )
        			{
        				tempfilter = columid+".indexOf('"+filtervalue+"')==-1";
        			}

        			if (this.gfn_isNull(filterstr))
        			{
        				filterstr = tempfilter;
                    }
        			else
        			{
        				filterstr += " && "+tempfilter;
        			}
                }
        		else
        		{
        			this.fv_TargetGrid.setCellProperty("head", nCol, "expandsize", 0);
        			this.fv_TargetGrid.setCellProperty("head", nCol, "expandshow", "hide");
        		}
            }
            // trace(filterstr);
            dataset.set_filterstr(filterstr);
        	this.fn_Close();
        };

        /************************************************************************
         * grd_List oncellclick 이벤트
         ************************************************************************/
        this.grd_List_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();
        };

        /************************************************************************
         * 화면 onclose 이벤트
         ************************************************************************/
        this.fn_Close = function ()
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridFilter_onload,this);
            this.addEventHandler("onclose",this.fn_Close,this);
            this.grd_List.addEventHandler("oncellclick",this.grd_List_oncellclick,this);
            this.btn_SetFilter.addEventHandler("onclick",this.btn_SetFilter_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.fn_Close,this);
        };
        this.loadIncludeScript("GridFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
