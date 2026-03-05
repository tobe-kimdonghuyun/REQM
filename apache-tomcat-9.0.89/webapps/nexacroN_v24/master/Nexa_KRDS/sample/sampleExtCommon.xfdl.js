(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleExtCommon");
            this.set_titletext("Extend Commmon(NRE)");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txaGuide","0","0",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("- ExtCommon 사용 방법\n1. 화면 실행 시 Trace의 sFilePath 경로에 ExtCommon 모듈 복사\n2. ExtCommon 모듈을 로드한다.\n3. ExtCommon 모듈의 API를 호출하여 사용\n");
            obj.set_scrolltype("horizontal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_excuteProcess","0","txaGuide:40","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ext_excuteProcess");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getCurrentProcessID","0","btn_ext_excuteProcess:16","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("ext_getCurrentProcessID");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getIPAddress","0","btn_getCurrentProcessID:16","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("ext_getIPAddress");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",888,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleExtCommon.xfdl", function() {

        this.objExtCommon = {};
        this.objExtURL = "";

        this.form_onload = function(obj,e)
        {
        	var navigatorFullName = system.navigatorfullname;
        	var sFilePath = system.convertRealPath("%COMPONENTHOME%");
        	// Component Path 경로
        	trace("sFilePath :: " + sFilePath);
        	trace( navigatorFullName );

        	if ( navigatorFullName === "Nexacro N Engine (x86)" )
        	{
        		//보안정책. execprocess 사용 안됨.
        		//this.objExtURL = sFilePath + "ExtCommonV_N_32.dll";	// 보안 적용
        		this.objExtURL = sFilePath + "ExtCommonV_N_32_EX.dll";	// 보안 미적용
        	}
        	else if ( navigatorFullName === "Nexacro N Engine (x64)" )
        	{
        		//보안정책. execprocess 사용 안됨.
        		//this.objExtURL = sFilePath + "ExtCommonV_N_64.dll";	// 보안 적용
        		this.objExtURL = sFilePath + "ExtCommonV_N_64_EX.dll";	// 보안 미적용
        	}
        	else
        	{
        		alert("Not Nexacro Runtime!!! Only Runtime !!!");
        	}

        	trace(this.objExtURL);
        	this.objExtCommon = nexacro._addExtensionModule(this.objExtURL);

        	trace( ">>>>" +  this.objExtCommon );
        };

        this.form_onclose = function(obj,e)
        {
        	nexacro._clearExtensionModule(this.objExtURL);
        	this.objExtCommon = null;
        	this.objExtCommon  = {};
        };

        this.btn_ext_excuteProcess_onclick = function(obj,e)
        {
        	var path;

        	//path = "osk";
        	//path = "C:\\Windows\\System32\\osk.exe"
        	//path = "D:\\Hscl_WF_TrackbarImgP.png";
        	//path = "notepad.exe";

        	//보안이슈로 cmd, powershell은 실행 안됨
        	//path = "cmd.exe";
        	//path = "cmd";
        	//path = "powershell.exe";
        	//path = "powershell";
        	//path = "c:\\windows\\systetm32\\cmd.exe";
        	//path = "c:\\windows\\systetm32\\windowspowershell\\v1.0\\powershell.exe";

        	// edge 브라우저
        	path = "msedge.exe";


        	//path = "d:\\tmp\\ico_gaengsin01.png";
        	var args = "";
        	args = "www.naver.com";

        	/*
        	* ShowWindow() Commands
        	*/
        	/*
        		#define SW_HIDE             0
        		#define SW_SHOWNORMAL       1
        		#define SW_NORMAL           1
        		#define SW_SHOWMINIMIZED    2
        		#define SW_SHOWMAXIMIZED    3
        		#define SW_MAXIMIZE         3
        		#define SW_SHOWNOACTIVATE   4
        		#define SW_SHOW             5
        		#define SW_MINIMIZE         6
        		#define SW_SHOWMINNOACTIVE  7
        		#define SW_SHOWNA           8
        		#define SW_RESTORE          9
        		#define SW_SHOWDEFAULT      10
        		#define SW_FORCEMINIMIZE    11
        		#define SW_MAX              11
        	*/
        	var nShowMode = 1;
        	var bReturn = this.objExtCommon._ext_excuteProcess(path, args, "", nShowMode) ;

        	/*
        	var path = "C:\\Users\\Administrator\\Downloads\\NOPC\\BIN\\BgmPlayerShow.exe"
        	var args = "";
        	var workpath = "C:\\Users\\Administrator\\Downloads\\NOPC\\BIN\\***.exe"
        	var bReturn = this.objExtCommon._ext_excuteProcess(path, args, workpath) ;
        	*/

        	//성공 : true;
        	//실패 : false;
        	trace ("성공 여부 : " + bReturn );
        };

        this.btn_getCurrentProcessID_onclick = function(obj,e)
        {
        	var ret = this.objExtCommon._ext_getCurrentProcessID( ); // 프로세스 ID
        	//Return type : Integer
        	alert("_ext_getCurrentProcessID : " + ret );
        };

        this.btn_ext_getIPAddress_onclick = function(obj,e)
        {
        	var bRet = this.objExtCommon._ext_getIPAddress();  //유선, 무선 ..
        	//Return : Array
         	alert("_ext_getIPAddress : " + bRet );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
            this.btn_ext_excuteProcess.addEventHandler("onclick",this.btn_ext_excuteProcess_onclick,this);
            this.btn_getCurrentProcessID.addEventHandler("onclick",this.btn_getCurrentProcessID_onclick,this);
            this.btn_ext_getIPAddress.addEventHandler("onclick",this.btn_ext_getIPAddress_onclick,this);
        };
        this.loadIncludeScript("sampleExtCommon.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
