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
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUrl", this);
            obj._setContents("<ColumnInfo><Column id=\"url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDomList", this);
            obj._setContents("<ColumnInfo><Column id=\"nodeName\" type=\"STRING\" size=\"256\"/><Column id=\"nodeId\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTC", this);
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"INT\" size=\"256\"/><Column id=\"testscript_no\" type=\"STRING\" size=\"256\"/><Column id=\"testscript_id\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"browser\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"element\" type=\"STRING\" size=\"256\"/><Column id=\"dictionaryKey\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"input\" type=\"STRING\" size=\"256\"/><Column id=\"zoom\" type=\"STRING\" size=\"256\"/><Column id=\"ime\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"compareType\" type=\"STRING\" size=\"256\"/><Column id=\"resultValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectUI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_hotkey("SHIFT+W");
            this.addChild(obj.name, obj);

            obj = new Static("staUrl","12","8","78","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("Test Url 입력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("edtUrl","staUrl:10","8","50%","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnConnect","edtUrl:10","8","120","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text("연결");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnList","btnConnect:10","8","120","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("TC List");
            obj.set_hotkey("CTRL+M");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnClose","btnList:10","10","120","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnBar","400","divTop:5","6",null,null,"4",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","0","divTop:5",null,null,"btnBar:10","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","0",null,null,"0","0",null,null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDomList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"384\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"bind:nodeId\"/></Band><Band id=\"body\"><Cell text=\"bind:nodeId\"/></Band></Format></Formats>");
            this.divLeft.addChild(obj.name, obj);

            obj = new Div("divRight","btnBar:10","divTop:5",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.getSetter("bDrag").set("false");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new WebView("wbTarget","0","0",null,null,"0","0",null,null,null,null,this.divRight.form);
            obj.set_taborder("0");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stOverlay","0","0","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("rgba(0, 0, 0, 0.4)");
            this.addChild(obj.name, obj);

            obj = new Div("divList","50","divTop:-20",null,null,"50","40",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid black");
            obj.set_url("Base::frmTCList.xfdl");
            obj.set_visible("false");
            obj.set_background("white");
            obj.set_boxShadow("10px 10px 10px #888888");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft.form
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form
            obj = new Layout("default","",0,0,this.divRight.form,function(p){});
            this.divRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTop.form.edtUrl","value","dsUrl","url");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Base::frmTCList.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        this.observer;	// dom 변화를 실시간 감지하기 위한 객체 변수
        this.previousHighlightedElement; // 이전 element 저장 변수 highlight style 값을 제거하기 위함.

        /////////////////////
        // 테스트 용
        ///////////////////
        var formobject = null;
        var firstobject = null;
        var firstflag = 0;
        var secondobject = null;
        //////////////////////////

        // 화면이 시작되면 global 변수에 현재 form 객체를 담는다.
        // evn에서 화면 함수를 호출하게 하기 위함.
        this.Form_Work_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	objApp.setVariable("workForm", this);	// 현재 화면을 global에 저장
        };

        // 구분 바 Drag 기능은 우선 삭제함.
        //구분 바 drag 시작
        this.btnBar_ondrag = function(obj,e)
        {
        	//obj.bDrag = true;

        	//return true;
        };

        // 구분 바 이동
        this.Form_Work_ondragmove = function(obj,e)
        {
        	//this.btnBar.setOffsetLeft(e.clientx);
        	//this.resetScroll();
        };


        //------------------------------------------------------
        // divTop에 대한 로직 처리
        //------------------------------------------------------
        // 테스트 url 연결
        this.divTop_btnConnect_onclick = function(obj,e)
        {
        	//this.divRight.form.wbTarget.reload();
        	this.divRight.form.wbTarget.url = this.divTop.form.edtUrl.value;
        };

        // TC List 작성화면 호출 및 close
        this.divTop_btnList_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	if ( objApp.bOpen == true )
        	{
        		this.divList.visible = false;
        		this.stOverlay.visible = false;	// overlay off
        		this.divTop.form.btnList.text = "TC List";	// 타이틀을 바꾼다.
        		return;
        	}

        	if ( this.divList.visible  )
        	{
        		this.divList.visible = false;
        		this.stOverlay.visible = false;	// overlay off
        		this.divTop.form.btnList.text = "TC List";	// 타이틀을 바꾼다.
        	}
        	else
        	{
        		// divList 뒤에 overlay를 설정하여 클릭이 안되도록 하기위해 사이즈 0의 static을 전체 화면으로 키운다.
        		this.stOverlay.left = 0;
        		this.stOverlay.top = 0;
        		this.stOverlay.right = 0;
        		this.stOverlay.bottom = 0;

        		this.divList.visible = true;
        		this.stOverlay.visible = true; // overlay on
        		this.divList.form.setDataset(this);
        		this.divTop.form.btnList.visible = true;
        		this.divTop.form.btnList.text = "List 닫기"; // 타이틀을 바꾼다.
        	}
        };

        // url 입력 후 enter를 입력하면 연결하도록 한다.
        this.divTop_edtUrl_onkeyup = function(obj,e)
        {
        	if ( e.keycode == 13 )
        	{
        		this.divTop_btnConnect_onclick();
        	}
        };

        // 현재 조회된 화면 강제 갱신 함수로 임시...
        this.divTop_Button00_onclick = function(obj,e)
        {
        	this.forceObserve();
        };

        //------------------------------------------------------
        // divTop에 대한 로직 처리 끝
        //------------------------------------------------------



        //------------------------------------------------------
        // divLeft에 대한 로직 처리
        //------------------------------------------------------
        this.divLeft_grdList_oncellclick = function(obj,e)
        {
        	this.setHighlight(this.dsDomList.getColumn(e.row, "nodeId"));
        };

        // grid 더블클릭 시 TC 작성화면으로 이동한다.
        this.divLeft_grdList_oncelldblclick = function(obj,e)
        {
        	this.TC_DetailWrite(this.dsDomList.getColumn(e.row, "nodeId"));
        };

        // grid에서 마우스 오른쪽 버튼을 눌렀을 경우 TC 작성화면으로 이동한다.
        this.divLeft_grdList_oncontextmenu = function(obj,e)
        {
        	if ( obj.currentrow == e.row )
        	{
        		this.TC_DetailWrite(this.dsDomList.getColumn(e.row, "nodeId"));
        	}
        };

        // 키 동작을 통해 highlight를 변경하고, enter 동작으로 TC 작성화면으로 이동한다.
        this.divLeft_grdList_onkeyup = function(obj,e)
        {
        	this.setHighlight(this.dsDomList.getColumn(this.dsDomList.rowposition, "nodeId"));

        	if ( e.keycode == 13 )
        	{
        		this.TC_DetailWrite(this.dsDomList.getColumn(obj.currentrow, "nodeId"));
        	}
        };
        //------------------------------------------------------
        // divLeft에 대한 로직 처리 끝
        //------------------------------------------------------


        //------------------------------------------------------
        // divRight에 대한 로직 처리
        //------------------------------------------------------

        // webveiw에 테스트 대상 화면 로드가 끝나면 테스트 화면 Dom을 읽어 dataset에 저장한다.
        // onloadcomplete가 호출됐다고 대상화면이 모두 로드 된것이 아니어서 Dom 변화 감시 이벤트를 등록하여 체크하도록 함. (MutationObserver)
        this.divRight_wbTarget_onloadcompleted = function(obj,e)
        {
        	var iframeWindow = this.divRight.form.wbTarget;
        	var iframeDocument = iframeWindow.document;
        	var pThis = this;	// 익명함수에서 this를 사용할 수 있도록 pThis에 this를 설정
        	var rowIdx = 0;
        	var isRegistMouseEvent = false;
        	const config = { childList: true, subtree: true };	// 변화 감시 대상을 설정한다. attribute : ture 시 style값 변경에도 감지가 되어 성능에 문제가 생김.


        	this.dsDomList.clearData()
        	this.dsDomList.addRow();

        	const style = document.createElement('style');
        	style.innerHTML = ".select_highlight {box-shadow: 0 0 0 4px red inset; /* 강조를 위한 스타일 */}";
        	iframeDocument.head.appendChild(style);

        	// 변경 감지 시 실행할 콜백 함수 선언
        	const callback = (mutationList, observer) => {
        		var allElements = iframeDocument.getElementsByTagName('*');	// 감지된 document에서 모든 node 요소를 가지고 온다.

        		pThis.dsDomList.clearData();	// node를 저장할 dataset을 모두 삭제하고 다시 세팅하도록 한다.

        		for (var i = 0; i < allElements.length; i++)
        		{
        			if ( allElements[i].id )	// node에 id가 없는 경우가 있어 있는 경우만 dataset.nodeID에 값을 저장한다. (<html> 의 경우 id가 없음)
        			{
        				rowIdx = pThis.dsDomList.addRow();
        				pThis.dsDomList.setColumn(rowIdx, "nodeName", allElements[i].nodeName);
        				pThis.dsDomList.setColumn(rowIdx, "nodeId", allElements[i].id);
        			}
        		}

        		// mousemove,keydown 이벤트에 대해서 eventListener를 등록한다.
        		// dom이 변경될 때마다 감지가 되기때문에 flag를 두고 한번만 등록 되도록 한다.
        		// mousemove : highlight 효과를 주기 위해 eventListener를 등록
        		// keydown : 단축키를 눌렀을 때 TC 등록화면 or TC List 화면을 바로 호출하기 위해 eventListener를 등록
        		if ( !isRegistMouseEvent )
        		{
        			isRegistMouseEvent = true;

        			iframeDocument.addEventListener('mousedown', function(event) {
        				if (event.which === 2 || (event.which === 1 && event.altKey == true)) // 마우스 휠 버튼
        				{
        					// 현재 위치한 dom를 고정한다.
        					pThis.isFix = pThis.isFix ? false: true;
        				}
        			}, true);

        			iframeDocument.addEventListener('mousemove', function(event) {	// iframe에서 mouse move시 mouse point가 위치한 element 값에 highlight를 준다.
        				var element = iframeDocument.elementFromPoint(event.clientX, event.clientY); // mouse가 위치한 좌표의 element를 얻어옴.
        				if (element && element.id)
        				{
        					if ( !pThis.isFix )
        					{
        						// dom list 가 저장된 dataset에서 현재 mouse가 위치한 element id 값이 있는지 체크하여 dataset position을 변경함.
        						var index = pThis.dsDomList.findRow("nodeId", element.id);
        						pThis.dsDomList.rowposition = index;
        						pThis.setHighlight(element.id);	// mouse가 위치한 element highlight 효과를 줌.
        					}
        				}
        				formobject = element.id;
        			});

        			iframeDocument.addEventListener('keydown', function(event) {
        				// 전달하려는 이벤트가 이미 처리되고 있어 오류가 발생하는 경우가 생겨 timeout으로 동작시킴
        				setTimeout(function() {
        					//document.dispatchEvent(event);
        					pThis.hotKey(event);

        					}, 10);
        				//trace(e.keycode);
        				// 처음 엘리먼트 고정으로 동작. 1회성
        				if (event.ctrlKey == true && event.keyCode == 17 && firstflag == 0 && firstobject == null)
        				{
        					firstobject = formobject;
        				}
        				//trace("keydown 오브젝트=" +formobject + " || " + firstobject + " || " + secondobject);
        				if (event.ctrlKey == true && event.keyCode == 17 && firstflag == 0)
        				{
        					trace("첫번째 오브젝트=" + formobject);
        					firstflag = 1;
        				}
        			});

        			iframeDocument.addEventListener('keyup', function(event) {
        				//trace(e.keycode);
        				// 지속적으로 엘리먼트를 받음. 다회성.
        				secondobject = formobject;
        				//trace("keyup 오브젝트=" +formobject + " || " + firstobject + " || " + secondobject);
        				if (event.ctrlKey == false && event.keyCode == 17 && firstflag == 1 && secondobject != firstobject)
        				{
        					trace("두번째 오브젝트=" + secondobject);
        					trace("이 로직을 타면 드래그 드랍");

        					pThis.initvar();
        				}
        				else if (event.ctrlKey == false && event.keyCode == 17 && firstflag == 1 && secondobject == firstobject)
        				{
        					trace("이 로직을 타면 클릭");

        					var objApp = nexacro.getApplication();

        					// mouseMove
        					var idx = objApp.gdsTC.addRow();
        					objApp.gdsTC.setColumn(idx, "browser", "1"); // 모든 값 all browser로 세팅한다.
        					objApp.gdsTC.setColumn(idx, "action", "9"); // 모든 값 all browser로 세팅한다.
        					objApp.gdsTC.setColumn(idx, "element", secondobject); // 현재 선택된 node id를 element에 바로 세팅되게 한다.

        					// click
        					idx = objApp.gdsTC.addRow();
        					objApp.gdsTC.setColumn(idx, "browser", "1"); // 모든 값 all browser로 세팅한다.
        					objApp.gdsTC.setColumn(idx, "action", "0"); // 모든 값 all browser로 세팅한다.
        					objApp.gdsTC.setColumn(idx, "element", secondobject); // 현재 선택된 node id를 element에 바로 세팅되게 한다.

        					pThis.initvar();
        				}
        			});
        		}
        	};	// const callback end

        	// 콜백 함수에 연결된 감지기 인스턴스 생성
        	const observer = new MutationObserver(callback);

        	// 설정한 변경의 감지 시작
        	observer.observe(iframeDocument, config);
        	this.observer = observer;
        };

        //------------------------------------------------------
        // divRight에 대한 로직 처리 끝
        //------------------------------------------------------


        //------------------------------------------------------
        // 공통 로직 처리
        //------------------------------------------------------

        // 강제로 node를 다시 감지하기 위한 함수
        this.forceObserve = function()
        {
        	var iframeWindow = this.divRight.form.wbTarget;
        	var iframeDocument = iframeWindow.document;
        	var allElements = iframeDocument.getElementsByTagName('*');

        	this.dsDomList.clearData();

        	for (var i = 0; i < allElements.length; i++)
        	{
        		if ( allElements[i].id )	// node에 id가 없는 경우가 있어 있는 경우만 dataset.nodeID에 값을 저장한다. (<html> 의 경우 id가 없음)
        		{
        			rowIdx = pThis.dsDomList.addRow();
        			pThis.dsDomList.setColumn(rowIdx, "nodeName", allElements[i].nodeName);
        			pThis.dsDomList.setColumn(rowIdx, "nodeId", allElements[i].id);
        		}
        	}
        };


        // TC 작성화면 호출
        this.TC_DetailWrite = function(nodeId)
        {
        	var objFrame = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "TC_Detail", 0, 0, 500, 500 );
        	objFrame.set_formurl( "Base::frmTCWrite.xfdl" );

        	var vRtn = objFrame.showModal( objParentFrame, {seledted_id:nodeId}, this, this.fn_callback );
        }

        // TC 작성 후 처리 함수
        this.fn_callback = function()
        {
        	trace("callback fn");
        }

        // 테스트 대상 화면 node highlight

        this.isFix = false;
        this.setHighlight = function(strId)
        {
        	//this.observer.disconnect();	// iframe node 값이 변경되면 계속 observer 동작이 발생되어 성능이 느려져 disconnect 한다.
        	                                // observer 가동시 attribute 감시로 인해 highlight 시에도 감지가 되어 성능이 저하되는 문제를 확인하고 disconnect를 하지 않는 것으로 재수정. (attribute 감시 부분 제외함)

        	// 선택된 아이템 하이라이트
        	var selectedElement = this.divRight.form.wbTarget.document.getElementById(strId);

        	if (this.previousHighlightedElement)
        	{
        		this.previousHighlightedElement.classList.remove('select_highlight');	// highlight 대상이 이동했으니 이전 element에서 style 값을 삭제한다.
        	}

        	if (selectedElement)
        	{
        		selectedElement.classList.add('select_highlight');	// 새롭게 선택된 element에 highlight style을 추가한다.
        		this.previousHighlightedElement = selectedElement;
        	}

        	if ( this.parent.TC_Window && !this.isFix )	// 창이 분리 됐음.
        	{
        		this.parent.TC_Window.form.setHighlightNode(strId);
        	}
        };

        // TC 저장
        this.saveTC = function(ds)
        {
        	var index = this.dsTC.addRow();
        	var browser = ds.getColumn(0, "browser");

        	this.dsTC.copyRow(index, ds, 0);

        	if ( browser )	// window NRE 이면
        	{
        		this.dsTC.setColumn(index, "type", "accessibilityid");
        	}
        	else
        	{
        		this.dsTC.setColumn(index, "type", "id");
        	}
        };

        this.hotKey = function(event)
        {
        	if ( event.altKey && event.keyCode == 67 )	// alt + c 동작
        	{
        		this.divTop_btnList_onclick();
        	}
        }
        //------------------------------------------------------
        // 공통 로직 처리 끝
        //------------------------------------------------------
        this.initvar = function()
        {
        	// 초기화
        	firstflag = 0;
        	//form 오브젝트는 지속적으로 받아야해서 null 작업이 필요 없을듯.
        	//formobject = null;
        	firstobject = null;
        	secondobject = null;
        };

        // split bar 더블 클릭 시 테스트 대상 화면 확대 축소
        // drag는 webview 영역에 마우스가 over 되면 이벤트가 전달이 안되어 동작이 매끄럽지 않게 되어 더블클릭으로 함.
        this.btnBar_ondblclick = function(obj,e)
        {
        	if ( obj.left == 0 )
        	{
        		obj.setOffsetLeft(400);
        	}
        	else
        	{
        		obj.setOffsetLeft(0);
        	}
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove",this.Form_Work_ondragmove,this);
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.divTop.addEventHandler("onclick",this.divTop_onclick,this);
            this.divTop.form.edtUrl.addEventHandler("onkeyup",this.divTop_edtUrl_onkeyup,this);
            this.divTop.form.btnConnect.addEventHandler("onclick",this.divTop_btnConnect_onclick,this);
            this.divTop.form.btnList.addEventHandler("onclick",this.divTop_btnList_onclick,this);
            this.divTop.form.btnClose.addEventHandler("onclick",this.divTop_btnClose_onclick,this);
            this.btnBar.addEventHandler("ondrag",this.btnBar_ondrag,this);
            this.btnBar.addEventHandler("ondblclick",this.btnBar_ondblclick,this);
            this.divLeft.addEventHandler("ondrop",this.divLeft_ondrop,this);
            this.divLeft.addEventHandler("ondragmove",this.divLeft_ondragmove,this);
            this.divLeft.form.grdList.addEventHandler("onkeyup",this.divLeft_grdList_onkeyup,this);
            this.divRight.addEventHandler("ondrop",this.divRight_ondrop,this);
            this.divRight.addEventHandler("ondragmove",this.divRight_ondragmove,this);
            this.divRight.form.wbTarget.addEventHandler("onloadcompleted",this.divRight_wbTarget_onloadcompleted,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
