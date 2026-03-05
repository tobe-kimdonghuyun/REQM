(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset

            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application");
            this.set_screenid("desktopScr,tableScr,mobileScr");
            this.set_licenseurl("http://172.10.12.45:9090/NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("FullFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application.xadl", function() {

        this.Application_onload = function(obj,e)
        {
        	this.gvOs = system.osversion.toUpperCase();

        	//PC와 모바일의 Combo 분리(웹에서만 동작)
        	if (this.gvOs.indexOf("WINDOWS") < 0) {
        		this.afnOverridingCombo();
        	}
        };

        //============================================================
        //   모바일콤보 - Start
        //============================================================

        this.afnOverridingCombo = function()
        {
            var _pCombo = nexacro.Combo.prototype;

            _pCombo._$_on_drop_mobile_onclick       = _pCombo._on_drop_mobile_onclick;
            _pCombo._$_on_edit_mobile_oneditclick   = _pCombo._on_edit_mobile_oneditclick;
            _pCombo._$_on_drop_onlbuttondown        = _pCombo._on_drop_onlbuttondown;
            _pCombo._$_on_edit_onlbuttondown        = _pCombo._on_edit_onlbuttondown;

            // 함수 추가 모바일일때 dropdown 이외의  속성을 지정시 comboedit를 터치를 하는 순간 키패드가 올라오고 그후 showPopupList동작하기에
            // 기존 엔진에서 _pCombo.set_type함수를 이용하여 모바일 환경일 경우 dropdown으로 고정하여 사용할수 있도록 처리
            _pCombo.set_type = function (v)
            {
                if (!nexacro._isMobile()){
                    var type_enum = ["dropdown", "search", "filter", "filterlike", "caseisearch", "caseifilter", "caseifilterlike"];
                    if (type_enum.indexOf(v) == -1)
                    {
                        return;
                    }

                    if (this.type != v)
                    {
                        this.type = v;
                        this.on_apply_type(v);
                    }
                }else
                {
                    this.type = "dropdown";
                    this.on_apply_type("dropdown");
                }
            };
            _pCombo.on_drop_mobile_onclick = function (obj, e)
            {
                if (this.on_fire_ondropdown(this) == false)
                {
                    return;
                }

                if (this._type_name ==  'Combo' )
                {
                    if (this.readonly)
                    {
                        return false;
                    }

                    if (!this.innerdataset) return;
                    var ds = this._innerdataset;
                    if (!ds)
                    {
                        ds = nexacro.getApplication()[ds.name];
                        if(!ds) return false;
                    }

                    if (ds.rowcount == 0) return false;

                    var objArgs = {data     : ds
                                , cdCol     : this.codecolumn
                                , nmCol     : this.datacolumn
                                , objcombo  : this
                                , sText     : this.combotitle
                                };


                    this.showPopupList(objArgs);
                }
                else if (this._type_name == 'ComboControl')
                {
                    if (!obj.parent._innerdataset) return;
                    var ds = obj.parent._innerdataset;
                    if (!ds)
                    {
                        ds = nexacro.getApplication()[ds.name];
                        if (!ds) return false;
                    }

                    if (ds.rowcount == 0) return false;

                    var fGrid =obj;
                    while (fGrid instanceof nexacro.Grid == false)
                    {
                        fGrid = fGrid.parent;
                    }
                    var fGridBand = obj;
                    while (fGridBand instanceof nexacro._GridRowControl == false)
                    {
                        fGridBand = fGridBand.parent;
                    }

                    // 최초 클릭시 on_drop_mobile_onclick 발생하지만 fGrid.currentcell은 0으로 고정
                    // Grid 최초 클릭시 발생되는문제 ...
                    // 정상적인 로직으로 수행하면 문제가 없는데 이벤트는 중간에 캐치하는 바람에 불가음
                    //if(fGrid.getCellProperty(fGridBand.name,fGrid.currentcell,"text") == null)
                    //  return;
                    //var fGridBindName = fGrid.getCellProperty(fGridBand.name,fGrid.currentcell,"text").replace("bind:","")

                    nexacro.getApplication().defaultGrid = fGrid;   //shwomodal callback에서 Main 화면 Grid 정보를 알기 위해서 전역 번수에 담아 놓느다

                    var objArgs = {data     : ds
                                , pDS       : fGrid.getBindDataset()
                                , cdCol     : obj.parent.codecolumn
                                , nmCol     : obj.parent.datacolumn
                                , objcombo  : this
                                , sText     : this.combotitle
                                , uGrid     : fGrid
                                , uGridBand : fGridBand.name
                                , uGridComboControl : this
                                , uGridbindexpr     : this._cellinfo.text._bindexpr
                            //  , uGridbindexpr     : fGridBindName
                                };
                    uGrid = null;
                    this.showPopupList(objArgs);
                }

                return false;
            }


            _pCombo._on_drop_mobile_onclick = function (obj, e)
            {
                //obj.parent.parent.parent.parent.parent.valueOf() != "[object Grid]"
                if (nexacro._isMobile())
                {
                    this.on_drop_mobile_onclick(obj, e);
                }
                else
                {
                    this._$_on_drop_mobile_onclick(obj, e) ;
                }
            };

            _pCombo._on_edit_mobile_oneditclick = function (obj, e)
            {
                if (nexacro._isMobile())
                {
                    this.on_drop_mobile_onclick(obj, e);
                }
                else
                {
                    this._$_on_edit_mobile_oneditclick(obj, e) ;
                }
            };

            _pCombo._on_drop_onlbuttondown = function (obj, e)
            {
                if (nexacro._isMobile())
                {
                    this.on_drop_mobile_onclick(obj, e);
                }
                else
                {
                    this._$_on_drop_onlbuttondown(obj, e) ;
                }
            };

            _pCombo._on_edit_onlbuttondown = function (obj, e)
            {
                if (nexacro._isMobile())
                {
                    this.on_drop_mobile_onclick(obj, e);
                }
                else
                {
                    this._$_on_edit_onlbuttondown(obj, e) ;
                }
            };

            _pCombo.showPopupList = function(objArgs)
            {
                var pid = "_extCombo_"+this.name;
                if (nexacro.getPopupFrames()[pid])
                {
                    return;
                }

                // this.displayrowcount 는 무시한다. 모바일 화면에서 표현할수 있는 만큼 포현한다.
                // 화면 회전시 mainframe_onsize에서 _pExtCbo_폼으로 resize함수 호출하여 전환시 처리함

                var nLeft, nTop;
                var nWidth, nHeight;
                var npHeight,npWidth;
                var nFullDispCount = -1;
                //if(sTitle == "" || sTitle == undefined) sTitle = "";

                if(!this.innerdataset) return;

                var ds = this._innerdataset;
                // = this._useModaltype;
                if(!ds)
                {
                    ds = application[this.innerdataset];
                    if(!ds) return false;
                }
                if(ds.rowcount == 0) return false;
                // 기본 아이템 높이px
                var nUnitItemHeight = this.useItemHeight != "undefined" && this.useItemHeight != undefined ?this.useItemHeight:72;

                npWidth = nexacro.getApplication().mainframe.getOffsetWidth();
                npHeight = nexacro.getApplication().mainframe.getOffsetHeight();

                // 10 + 완료버튼(50) + 5 + List + 10 + = 75
                //nFullDispCount = parseInt((npHeight-75)/nUnitItemHeight);

                nWidth = npWidth - 100;
                nHeight = parseInt(npHeight*0.65,10);

                nFullDispCount = parseInt(nHeight/nUnitItemHeight,10);
                //nFullDispCount = parseInt((npHeight-60)/nUnitItemHeight);
                //nHeight = nUnitItemHeight*(ds.rowcount>nFullDispCount?nFullDispCount:ds.rowcount) + 60 + 4 ;
                if (ds.rowcount<nFullDispCount) nHeight = (ds.rowcount*nUnitItemHeight) +80;


                nLeft = 50;
                nTop = (npHeight - nHeight)/2;

                this.popupurl = "FrameBase::comm_extCombo.xfdl";
                if(this.combotitle == undefined) this.combotitle = "";

                var sUrl = this.popupurl;
                var objOpener = this.parent;
                //var sCallback = this.gfnViewComboListCallback; // 사용 안함 set_item()으로 기능추가
                //var objArgs = {data:ds, cdCol:this.codecolumn , nmCol:this.datacolumn , objcombo:this , sText:this.combotitle , nUnitItemHeight:nUnitItemHeight , nFullDispCount:nFullDispCount };
                //var pid = "_extCombo_"+this.name;

                objArgs.nUnitItemHeight = nUnitItemHeight;
                objArgs.nFullDispCount  = nFullDispCount;


                var cf = new ChildFrame;
                cf.init(pid, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
                cf.set_showtitlebar(false);
                cf.set_showstatusbar(false);
                //cf.style.set_titlebarheight(10);
                //cf.style.set_statusbarheight(10);
                cf.set_titletext("") ;
                cf.set_statustext("");
                cf.set_autosize(false);
                //cf.set_border("1 solid blue");  //
                //cf.set_openalign("center middle");
                cf.set_dragmovetype("none");
                cf.set_overlaycolor("rgba(0, 0, 0, 0.2)");

                cf._modaltype = "extcombo"; //milpaso adl의 onsize 처리를 위해 추가.
                cf.orgPopWidth = nWidth;
                cf.orgPopHeight = nHeight;
                cf.orgPopTop = nTop;

                //cf.showModal(pid, nexacro.getApplication().mainframe, objArgs, objOpener);
                cf.showModal(pid, nexacro.getApplication().mainframe, objArgs, nexacro.getApplication(), "fnComboCallback");
            };
            // 팝업에서 combo.set_item()
            _pCombo.set_item = function(v)
            {
                var pre_index = this.index;
                var pre_value = this.value;
                var pre_text = this.text;
                var post_index = v.index;
                var post_value = v.value;
                var post_text = v.text;

                // 2023.07.20 1440버전에서 에러나는 상황 대비
            //  if(!this._grid) this._grid = v._grid;
            //  if(!this._cellinfo) this._cellinfo = v._cellinfo;

                if(pre_index != post_index && pre_value != post_value)
                {
                    var rtn = this.on_fire_canitemchange(this, pre_index  , pre_text  , pre_value, post_index  , post_text, post_value);
                    if (rtn)
                    {
                        this._accessibility_index = this.index = post_index;
                        this.text = post_text;

                        this.set_value(post_value);

                        this.applyto_bindSource("value", post_value);
                        this.on_fire_onitemchanged(this, pre_index  , pre_text  , pre_value, post_index  , post_text, post_value);
                    }
                }
        //      nexacro.getPopupFrames()[v.frame].form.close();
                //this._on_value_change(pre_index, pre_text, pre_value, post_index, post_text, post_value);
            };
        };

        this.fnComboCallback = function(svcid, arr)
        {
            var returnval = arr.split(',');
            if (returnval[0] == "Combo" || returnval[0] =="" ) return;

            if (returnval[1] == "comboselect" || returnval[1] == "itemselect" || returnval[2] == "head")
            {
                this.defaultGrid.getBindDataset().setColumn(this.defaultGrid.getBindDataset().rowposition, returnval[3], returnval[4]);
            }
            else
            {
                this.defaultGrid.showEditor(true);
                if ((!returnval[4] == ""))
                {
                    this.defaultGrid.setEditValue(returnval[4]);
                }
            }
        }
        //============================================================
        //   모바일콤보 - End
        //============================================================
        });
		this.checkLicense("http://172.10.12.45:9090/NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application.xadl");
    };
}
)();
