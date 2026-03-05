(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmEChartAll");
            this.set_titletext("cmmEChartAll");
            if (Form == this.constructor)
            {
                this._setFormPosition(273,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webChart","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("visible").set("false");
            obj.getSetter("onloadcompleted").set("webChart_onloadcompleted");
            obj.getSetter("onusernotify").set("webChart_onusernotify");
            this.addChild(obj.name, obj);

            obj = new Div("divChart","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divChart");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",273,350,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmEChartAll.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	cmmEChartAll.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2022/09/05
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2022/09/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        /********************************************************************************
         * Form 변수선언 영역
         ********************************************************************************/


        /********************************************************************************
         * Form Event 영역
         ********************************************************************************/
        this.form_onload = function(obj,e)
        {
        	if (system.navigatorname == "nexacro")
        	{
        		var sUrl = nexacro.getEnvironment().services['svcUrl'].url + "thirdParty/echarts/nexacroEchartSample.html";
        		this.webChart.set_url(sUrl);
        		this.webChart.set_visible(true);
        	}
        	else // 웹 접속
        	{
        		this.divChart.set_visible(true);
        		var dom = this.fnGetDiv(this.divChart);
        		this.objChart = echarts.init(dom);
        	}
        };

        /********************************************************************************
         * 사용자 Function 영역
         ********************************************************************************/
        this.fnSetChart = function(option)
        {
        	// 런타임 접속
        	if (system.navigatorname == "nexacro")
        	{
        		this.objWeb = this.webChart.getProperty("window");
        		this.objWeb.callMethod("fnSetOption", JSON.stringify(option));
        	}
        	else // 웹 접속
        	{
        		this.objChart.setOption(option);

        		var formObj = this;
        		this.objChart.on('click', function (params) {
        			var strInfos = " 클릭\n";
        			for(var n in params) {
        				if(params[n]) {
        					strInfos += n + " : " + params[n] + "\n";
        				}
        			}

        			formObj.alert(strInfos);
        		});

        	}
        }

        this.fnResize = function()
        {
        	// 런타임 접속
        	if (system.navigatorname == "nexacro")
        	{
        		this.objWeb.callMethod("fnResize");
        	}
        	else // 웹 접속
        	{
        		this.objChart.resize();
        	}
        }

        this.fnGetDiv = function(obj)
        {
        	var elementId = obj.getElement().handle.id.replace(/[.]/g, '\\.');

        // 	var dom = document.querySelector("#" + elementId +" #nexacontainer.nexainnercontainer");
        // 	if(dom == null) {
        // 		dom = document.querySelector("#" + elementId +" #nexacontainer");
        // 	}

        	//20230208 hj 변경
        	var dom = document.querySelector("#" + elementId + " .nexacontainer");

        	return dom;
        }
        /********************************************************************************
         * Component Event 영역
         ********************************************************************************/

        this.webChart_onloadcompleted = function(obj,e)
        {
        //	trace("webChart_onloadcompleted");
        	this.parent.parent.fnReady();
        };

        this.webChart_onusernotify = function(obj,e)
        {
        	var rtn = e.userdata.split("|");

        	if (rtn[0] == "click")
        	{
        		this.alert("webChart_onusernotify "+ rtn[1]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("cmmEChartAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
