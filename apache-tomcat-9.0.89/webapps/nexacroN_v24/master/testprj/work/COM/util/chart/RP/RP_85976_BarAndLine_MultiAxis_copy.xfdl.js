(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BasicChartMultiAxis");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWeather", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"FLOAT\" size=\"256\"/><Column id=\"temperature\" type=\"FLOAT\" size=\"256\"/><Column id=\"pressure\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">1</Col><Col id=\"rainfall\">49.9</Col><Col id=\"temperature\">7.0</Col><Col id=\"pressure\">1016</Col></Row><Row><Col id=\"month\">2</Col><Col id=\"rainfall\">71.5</Col><Col id=\"temperature\">6.9</Col><Col id=\"pressure\">1016</Col></Row><Row><Col id=\"month\">3</Col><Col id=\"rainfall\">106.4</Col><Col id=\"temperature\">9.5</Col><Col id=\"pressure\">1015.9</Col></Row><Row><Col id=\"month\">4</Col><Col id=\"rainfall\">129.2</Col><Col id=\"temperature\">14.5</Col><Col id=\"pressure\">1015.5</Col></Row><Row><Col id=\"month\">5</Col><Col id=\"rainfall\">144.0</Col><Col id=\"temperature\">18.2</Col><Col id=\"pressure\">1012.3</Col></Row><Row><Col id=\"month\">6</Col><Col id=\"rainfall\">176.0</Col><Col id=\"temperature\">21.5</Col><Col id=\"pressure\">1009.5</Col></Row><Row><Col id=\"month\">7</Col><Col id=\"rainfall\">135.6</Col><Col id=\"temperature\">25.2</Col><Col id=\"pressure\">1009.6</Col></Row><Row><Col id=\"month\">8</Col><Col id=\"rainfall\">148.5</Col><Col id=\"temperature\">26.5</Col><Col id=\"pressure\">1010.2</Col></Row><Row><Col id=\"month\">9</Col><Col id=\"rainfall\">216.4</Col><Col id=\"temperature\">23.3</Col><Col id=\"pressure\">1013.1</Col></Row><Row><Col id=\"month\">10</Col><Col id=\"rainfall\">194.1</Col><Col id=\"temperature\">18.3</Col><Col id=\"pressure\">1016.9</Col></Row><Row><Col id=\"month\">11</Col><Col id=\"rainfall\">95.6</Col><Col id=\"temperature\">13.9</Col><Col id=\"pressure\">1018.2</Col></Row><Row><Col id=\"month\">12</Col><Col id=\"rainfall\">54.4</Col><Col id=\"temperature\">9.6</Col><Col id=\"pressure\">1016.7</Col></Row><Row><Col id=\"month\">13</Col><Col id=\"rainfall\">49.9</Col><Col id=\"temperature\">7.0</Col><Col id=\"pressure\">1016</Col></Row><Row><Col id=\"month\">14</Col><Col id=\"rainfall\">71.5</Col><Col id=\"temperature\">6.9</Col><Col id=\"pressure\">1016</Col></Row><Row><Col id=\"month\">15</Col><Col id=\"rainfall\">106.4</Col><Col id=\"temperature\">9.5</Col><Col id=\"pressure\">1015.9</Col></Row><Row><Col id=\"month\">16</Col><Col id=\"rainfall\">129.2</Col><Col id=\"temperature\">14.5</Col><Col id=\"pressure\">1015.5</Col></Row><Row><Col id=\"month\">17</Col><Col id=\"rainfall\">144.0</Col><Col id=\"temperature\">18.2</Col><Col id=\"pressure\">1012.3</Col></Row><Row><Col id=\"month\">18</Col><Col id=\"rainfall\">176.0</Col><Col id=\"temperature\">21.5</Col><Col id=\"pressure\">1009.5</Col></Row><Row><Col id=\"month\">19</Col><Col id=\"rainfall\">135.6</Col><Col id=\"temperature\">25.2</Col><Col id=\"pressure\">1009.6</Col></Row><Row><Col id=\"month\">20</Col><Col id=\"rainfall\">148.5</Col><Col id=\"temperature\">26.5</Col><Col id=\"pressure\">1010.2</Col></Row><Row><Col id=\"month\">21</Col><Col id=\"rainfall\">216.4</Col><Col id=\"temperature\">23.3</Col><Col id=\"pressure\">1013.1</Col></Row><Row><Col id=\"month\">22</Col><Col id=\"rainfall\">194.1</Col><Col id=\"temperature\">18.3</Col><Col id=\"pressure\">1016.9</Col></Row><Row><Col id=\"month\">23</Col><Col id=\"rainfall\">95.6</Col><Col id=\"temperature\">13.9</Col><Col id=\"pressure\">1018.2</Col></Row><Row><Col id=\"month\">24</Col><Col id=\"rainfall\">54.4</Col><Col id=\"temperature\">9.6</Col><Col id=\"pressure\">1016.7</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,"440","0",null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("dsWeather");
            obj.getSetter("categorycolumn").set("bind:month");
            obj.getSetter("bargrouping").set("false");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("rangezoom").set("none");
            obj.getSetter("ondrawend").set("BasicChart00_ondrawend");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","170","93","580","200",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("white");
            obj.set_formscrolltype("horizontal");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0","0","900","463",null,null,null,null,null,null,this.Div00.form);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("dsWeather");
            obj.getSetter("categorycolumn").set("bind:month");
            obj.getSetter("bargrouping").set("false");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("rangezoom").set("none");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",768,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_85976_BarAndLine_MultiAxis_copy.xfdl", function() {

        // div에 동일한 format의 chart를 만들고(정적이든,동적이든) value axis는 숨기기처리
        // div는 board size만큼 만들고 내부 chart의 높이는 원차트와 동일하게 위치
        // regent는 밑에다 놓으면 스크롤시 왔다갔다하니 위에 놓음 / 세로 처리는 적용안한거임.
        // 임시로 처리한거라 다른 문제발생소지가 있으니 이는 접수대상이 아님.
        this.BasicChart00_ondrawend = function(obj,e)
        {
        	this.setTimer(99,10);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.Div00.move(0, 0, 300, 200);
        };

        this.BasicChartMultiAxis_ontimer = function(obj,e)
        {
        	this.killTimer(e.timerid);

        	if(e.timerid == 99)
        	{
        		var chart = this.BasicChart00;
        		// getBorderPosInfo	: board의 정보를 읽어온다.
        		// 해당함수를 사용하지 않는 경우, 즉 차트 패치 없이 할 경우
        		// chart._boardRectLeft,chart._boardRectTop,chart._boardWidth,chart._boardHeight를 사용하면 되나 비권장.

        		var pos = chart.getBorderPosInfo();	// border의 left,top,width,height 정보
        		if(!pos) return;

        		var scrollDummySize = 25;

        		var chartHeight = chart.getOffsetHeight();
        		var hGap = chartHeight - pos.t;
        		var gap = chart.valueaxes[0].gap;
        		if(!gap) gap = 0;
        		this.Div00.move(pos.l - gap, pos.t, pos.w + gap, (hGap+scrollDummySize));

        		this.Div00.form.BasicChart00.set_left(0);
        		this.Div00.form.BasicChart00.set_top(-(pos.t));
        		this.Div00.form.BasicChart00.set_height(chartHeight);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.BasicChartMultiAxis_ontimer,this);
        };
        this.loadIncludeScript("RP_85976_BarAndLine_MultiAxis_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
