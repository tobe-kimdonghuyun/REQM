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
            this.set_id("Application_Phone");
            this.set_screenid("Desktop_screen,Mobile_screen");
            this.set_licenseurl("http://172.10.12.45:9090/NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1440","900",null,null,this);
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
            var frame0 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::Form_Work.xfdl",this);
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("FrameBase::Form_Work.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("Application_Phone.xadl", function() {
        this.Application_onload = function(obj,e)
        {
        	//Desktop이 아닐 때 유저콤보 나오도록 적용
        	if (!nexacro._isDesktop()) {
        		this.fnSetUserCombo();
        	}
        };

        //유저 콤보
        this.fnSetUserCombo = function()
        {
        	var _pCombo = nexacro.Combo.prototype;

        	_pCombo._$_on_drop_mobile_onclick 		= _pCombo._on_drop_mobile_onclick;
        	_pCombo._$_on_edit_mobile_oneditclick 	= _pCombo._on_edit_mobile_oneditclick;
        	_pCombo._$_on_drop_onlbuttondown 		= _pCombo._on_drop_onlbuttondown;
        	_pCombo._$_on_edit_onlbuttondown 		= _pCombo._on_edit_onlbuttondown;

        	// 함수 추가 모바일일때 dropdown 이외의  속성을 지정시 comboedit를 터치를 하는 순간 키패드가 올라오고 그후 showPopupList동작하기에
        	// 기존 엔진에서 _pCombo.set_type함수를 이용하여 모바일 환경일 경우 dropdown으로 고정하여 사용할수 있도록 처리
        	_pCombo.set_type = function (v)
            {
        		this.type = "dropdown";
        		this.on_apply_type("dropdown");
            };
        	_pCombo.on_drop_mobile_onclick = function (obj, e)
        	{
        		if (this.readonly)
        			return false;

        		if (this.on_fire_ondropdown(this) == false)
        		{
        			return;
        		}

        		this.showPopupList(obj,e);
        		return false;
        	}

        	_pCombo._on_drop_mobile_onclick = function (obj, e)
        	{

        		if (this._type_name ==  'Combo')
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
        		if (this._type_name ==  'Combo')
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
        		if (this._type_name ==  'Combo')
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
        		if (this._type_name ==  'Combo')
        		{
        			this.on_drop_mobile_onclick(obj, e);
        		}
        		else
        		{
        			this._$_on_edit_onlbuttondown(obj, e) ;
        		}
            };


        	//프로젝트 환경에 맞게 셋팅 필요.
        	_pCombo.showPopupList = function(obj,e)
        	{
        		// this.displayrowcount 는 무시한다. 모바일 화면에서 표현할수 있는 만큼 포현한다.
        		// 화면 회전시 mainframe_onsize에서 _pExtCbo_폼으로 resize함수 호출하여 전환시 처리함

        		// 기본 아이템 높이px
        		var nUnitItemHeight = 60;

        		var nLeft, nTop;
        		var nWidth, nHeight;
        		var npHeight,npWidth;
        		var nFullDispCount = -1;
        		//if(sTitle == "" || sTitle == undefined) sTitle = "";

        		if(!this.innerdataset) return;
        		var ds = this._innerdataset;
        		if(!ds)
        		{
        			ds = application[this.innerdataset];
        			if(!ds) return false;
        		}

        		if(ds.rowcount == 0) return false;

        		npWidth = nexacro.getApplication().mainframe.getOffsetWidth();
        		npHeight = nexacro.getApplication().mainframe.getOffsetHeight();


        		// 10 + 완료버튼(50) + 5 + List + 10 + = 75
        		//nFullDispCount = parseInt((npHeight-75)/nUnitItemHeight);


        		nFullDispCount = parseInt((npHeight-60)/nUnitItemHeight);
        		nHeight = nUnitItemHeight*(ds.rowcount>nFullDispCount?nFullDispCount:ds.rowcount) + 60 + 4 ;
        		nWidth = npWidth-100 ;

        		nLeft = 50;
        		nTop = (npHeight - nHeight)/2;

        		this.popupurl = "FrameBase::pExtCombo.xfdl";
        		//if(this.popupurl == undefined) return false;
        		if(this.combotitle == undefined) this.combotitle = "";
        		var objOpener = this.parent;
        		var sCallback = this.gfnViewComboListCallback; // 사용 안함 set_item()으로 기능추가
        		var sUrl = this.popupurl;
        		var objArgs = {data:ds, cdCol:this.codecolumn , nmCol:this.datacolumn , objcombo:this , sText:this.combotitle , nUnitItemHeight:nUnitItemHeight , nFullDispCount:nFullDispCount };
        		var pid = "_pExtCbo_"+this.name;

        		var cf = new ChildFrame;
        		cf.init(pid, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
        		cf.set_showtitlebar(false);
        		cf.set_showstatusbar(false);
        		//cf.style.set_titlebarheight(10);
        		//cf.style.set_statusbarheight(10);
        		cf.set_titletext("") ;
        		cf.set_statustext("");
        		cf.set_border("1 solid blue");
        		cf.set_autosize(false);
        		//cf.set_openalign("center middle");
        		cf.set_dragmovetype("none");
        	//	cf.set_background("white");
        		cf.set_overlaycolor("rgba(0, 0, 0, 0.5)");

        		cf._modaltype = "extcombo";	//milpaso adl의 onsize 처리를 위해 추가.

        		cf.showModal(pid, nexacro.getApplication().mainframe, objArgs, objOpener);
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

        		// (obj, preindex  , pretext  , prevalue  , postindex, posttext  , postvalue)
        		if(pre_index != post_index && pre_value != post_value)
        		{
        			var rtn = this.on_fire_canitemchange(this, pre_index  , pre_text  , pre_value, post_index  , post_text, post_value);

        			if(rtn)
        			{
        				this._accessibility_index = this.index = post_index;
        				this.text = post_text;

        				this.set_value(post_value);

        				this.applyto_bindSource("value", post_value);
        				this.on_fire_onitemchanged(this, pre_index  , pre_text  , pre_value, post_index  , post_text, post_value);
        			}
        		}

        		nexacro.getPopupFrames()[v.frame].form.close();
        	};
        };


        });
        this.checkLicense("http://172.10.12.45:9090/NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Phone.xadl");
    };
}
)();
