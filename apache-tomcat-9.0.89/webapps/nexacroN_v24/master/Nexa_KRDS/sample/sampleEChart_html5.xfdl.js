(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleEChart_html5");
            this.set_titletext("EChart(html5용)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divStackChart","2.86%","79","26.00%","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("divBarLineChart","31.71%","79","26.00%","350",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divBarChart","60.57%","79","26.00%","350",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divLineChart","2.86%","459","26.00%","350",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("divHBarChart","31.71%","459","26.00%","350",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("divPieChart","60.57%","459","26.00%","350",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("divRadarChart","89.43%","79","26%","350",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divScatChart","89.43%","459","273","350",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Div("divBundledVBarChart","2.86%","839","26.00%","350",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divStackChart
            obj = new Layout("default","",0,0,this.divStackChart.form,function(p){});
            this.divStackChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBarLineChart
            obj = new Layout("default","",0,0,this.divBarLineChart.form,function(p){});
            this.divBarLineChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBarChart
            obj = new Layout("default","",0,0,this.divBarChart.form,function(p){});
            this.divBarChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLineChart
            obj = new Layout("default","",0,0,this.divLineChart.form,function(p){});
            this.divLineChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHBarChart
            obj = new Layout("default","",0,0,this.divHBarChart.form,function(p){});
            this.divHBarChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPieChart
            obj = new Layout("default","",0,0,this.divPieChart.form,function(p){});
            this.divPieChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRadarChart
            obj = new Layout("default","",0,0,this.divRadarChart.form,function(p){});
            this.divRadarChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divScatChart
            obj = new Layout("default","",0,0,this.divScatChart.form,function(p){});
            this.divScatChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBundledVBarChart
            obj = new Layout("default","",0,0,this.divBundledVBarChart.form,function(p){});
            this.divBundledVBarChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleEChart_html5.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleEChart_html5.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/30
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/30			TOBESOFT					최초생성
        *******************************************************************************

        //loading echarts libarary  필요
        nexacro.loadJSLibraries(["../thirdParty/echarts/echarts.min.js"]);
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj, e) {

        	this.drawStackChart();
        	this.drawBarLineChart();
        	this.drawBarChart();
        	this.drawLineChart();
        	this.drawHBarChart();
        	this.drawPieChart();
        	this.drawRadarChart();
        	this.drawScatChart();
        	this.drawBundledVBarChart();
        }

        this.form_onsize = function(obj,e) {
        	if(this.objStackChart) {
        		this.objStackChart.resize();
        		this.objBarLineChart.resize();
        		this.objBarChart.resize();
        		this.objLineChart.resize();
        		this.objHBarChart.resize();
        		this.objPieChart.resize();
        		this.objRadarChart.resize();
        		this.objScatChart.resize();
        		this.objBundledVBarChart.resize();
        	}
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

        this.drawStackChart = function() {

        	var dom = this.fnGetDiv(this.divStackChart);

        	this.objStackChart = echarts.init(dom);

        	var arrLegend = [ '부족','적정','초과' ];
        	var arrTitle = ['상품', '고객', '서비스'];
        	var arrData = [
        		[17, 35, 10],
        		[30, 30, 80],
        		[53, 35, 10]
        	];
        	var option = {
        		legend: {
        			data: arrLegend,
        			top:'top',
        			right:'20%',
        			orient:'horizontal',
        		},
        		tooltip: {
        			trigger: 'item',
        			textStyle:{ fontSize: 12 }
        		},
        		grid: [{show: false, left: '2%', right: '2%', top: '23%', bottom: '5%', containLabel: true, width: 'auto', height:'auto'}],
        		xAxis: [{ type: 'category',	data: arrTitle }],
        		yAxis: [{ type: 'value', name: '%',	nameGap:10,	min: 0,	max: 100, splitLine:{show:false}}],
        		series: [
        			{	name: arrLegend[0],
        				type: 'bar',
        				stack: 'one',
        				itemStyle:{
        					normal: { color:'#9D2235' },
        					emphasis: {
        						barBorderWidth: 1,
        						shadowBlur: 10,
        						shadowOffsetX: 0,
        						shadowOffsetY: 0,
        						shadowColor: 'rgba(0,0,0,0.5)'
        					}
        				},
        				data: arrData[0]
        			},
        			{	name: arrLegend[1],
        				type: 'bar',
        				stack: 'one',
        				label: {
        					normal: {
        						show: true,
        						position: 'inside',
        					}
        				},
        				itemStyle:{
        					normal: { color:'#64A70B' },
        					emphasis: {
        						barBorderWidth: 1,
        						shadowBlur: 10,
        						shadowOffsetX: 0,
        						shadowOffsetY: 0,
        						shadowColor: 'rgba(0,0,0,0.5)'
        					}
        				},
        				data: arrData[1]
        			},
        			{	name: arrLegend[2],
        				type: 'bar',
        				stack: 'one',
        				itemStyle:{
        					normal: { color:'#006341' },
        					emphasis: {
        						barBorderWidth: 1,
        						shadowBlur: 10,
        						shadowOffsetX: 0,
        						shadowOffsetY: 0,
        						shadowColor: 'rgba(0,0,0,0.5)'
        					}
        				},
        				data: arrData[2]
        			}
        		]
        	};

        	this.objStackChart.setOption(option, true);

        	var formObj = this;
        	this.objStackChart.on('click', function (params) {
        		var strInfos = formObj.divStackChart.name + " 클릭\n";
        		for(var n in params) {
        			if(params[n]) {
        				strInfos += n + " : " + params[n] + "\n";
        			}
        		}

        		formObj.alert(strInfos);
        	});
        }


        this.drawBarLineChart = function() {
        	var dom = this.fnGetDiv(this.divBarLineChart);

        	this.objBarLineChart = echarts.init(dom);

        	var arrLegend = [ '부족','적정','초과' ];
        	var arrTitle = ['상품', '고객', '서비스'];
        	var arrData = [
        		[17, 35, 10],
        		[30, 30, 80],
        		[53, 35, 10]
        	];
        	var option = {
        		tooltip: {
        			trigger: 'axis',
        			axisPointer: {
        				type: 'cross'
        			},
        			textStyle:{
        				fontSize: 12
        			}
        		},
        		title: [
        			{	text: '이전 5개월간 목표/실적',
        				left: '30%',
        				top : '0%',
        				textStyle: {
        					fontSize:12
        				}
        			}
        		],
        		grid: [ { show: false, left: '2%', right: '2%', top: '23%', bottom: '5%', containLabel: true, width: 'auto%', height:'auto%' }],
        		xAxis: [ { type: 'category', data: arrTitle } ],
        		yAxis: [
        			{
        				type: 'value',
        				name: '목표',
        				nameGap:10,
        				position: 'left',
        				splitLine:{show:false}
        			},
        			{
        				type: 'value',
        				name: '실적',
        				nameGap:10,
        				position: 'right',
        				splitLine:{show:false}
        			}
        		],
        		series: [
        			{
        				name:'목표',
        				type: 'line',
        				symbolSize: 8,
        				smooth: true,
        				label: {
        					normal: {
        						show: true,
        						position: 'top',
        					}
        				},
        				lineStyle: {
        					normal: {
        						color:'#9D2235'
        					}
        				},
        				data: arrData[0]
        			},
        			{
        				name:'실적',
        				type:'bar',
        				yAxisIndex:1,
        				label: {
        					normal: {
        						show: true,
        						position: 'insideBottom',
        					}
        				},
        				 itemStyle:{
        					normal: {
        						   color:'#64A70B'
        						}
        				},
        				data: arrData[1]
        			}
        		]
        	};

        	this.objBarLineChart.setOption(option, true);
        }

        this.drawBarChart = function() {
        	var dom = this.fnGetDiv(this.divBarChart);

        	this.objBarChart = echarts.init(dom);

        	var arrTitle = ['사원','대리','과장','간부'];
        	var arrData = [17, 75, 90, 30];

        	var option = {
        		tooltip: {
        			trigger: 'item',
        			textStyle:{
        				fontSize: 12
        			}
        		},
        		title: [
        			{
        				text: '직급별 역량지수',
        				left: '38%',
        				top : '0%',
        				textStyle: {
        					fontSize:12
        				}
        			}
        		],
        		grid: [ { show: false, left: '2%', right: '2%', top: '23%', bottom: '5%', containLabel: true, width: 'auto', height:'auto' } ],
        		xAxis: [ { type: 'category', data: arrTitle } ],
        		yAxis: [ { type: 'value', splitLine:{show:false} } ],
        		series: [
        			{
        				name:'역량지수',
        				type:'bar',
        				barWidth: '60%',
        				label: {
        					normal: {
        						show: true,
        						position: 'insideTop',
        					}
        				},
        				itemStyle:{
        					normal: {
        						   color:'#64A70B'
        						},
        						emphasis: {
        							barBorderWidth: 1,
        							shadowBlur: 10,
        							shadowOffsetX: 0,
        							shadowOffsetY: 0,
        							shadowColor: 'rgba(0,0,0,0.5)'
        						}
        				},
        				data: arrData
        			}
        		]
        	};

        	this.objBarChart.setOption(option, true);
        }

        this.drawLineChart = function() {
        	var dom = this.fnGetDiv(this.divLineChart);

        	this.objLineChart = echarts.init(dom);

        	var arrLegend = [ '전월','당월' ];
        	var arrTitle = ['사원','대리','과장', '차장', '부장', '임원'];
        	var arrData = [
        		[17, 75, 90, 30, 65, 77],
        		[27, 33, 65, 45, 88, 90]
        	];

        	var option = {
        		legend: {
        			  data: arrLegend,
        			  top:'top',
        			  right:'30%',
        			  orient:'horizontal'
        		},
        		tooltip: {
        			trigger: 'axis',
        			axisPointer: {
        				type: 'cross'
        			},
        			textStyle:{
        				fontSize: 12
        			}
        		},
        		grid: [ { show: false, left: '2%', right: '2%', top: '23%', bottom: '5%', containLabel: true, width: 'auto%', height:'auto%' } ],
        		xAxis: [ { type: 'category', data: arrTitle } ],
        		yAxis: [
        			{
        				type: 'value',
        				name: '%',
        				nameGap:10,
        				splitLine:{show:false}
        			}
        		],
        		series: [
        			{
        			   name: arrLegend[0],
        			   type:'line',
        			   symbolSize: 5,
        			   itemStyle : {
        				   color:'#9d2235'
        			   },
        			   lineStyle: {
        				   normal: {
        					   color:'#9D2235',
        					   width: 3
        				   }
        			   },
        			   data: arrData[0]
        		   },
        		   {
        			   name: arrLegend[1],
        			   type:'line',
        			   symbolSize: 5,
        			   label: {
        				   normal: {
        					   show: true,
        					   position: 'top',
        				   }
        			   },
        			   itemStyle : {
        				   color:'#64A70B'
        			   },
        			   lineStyle: {
        				   normal: {
        					   color:'#64A70B',
        					   width: 3
        				   }
        			   },
        			   data: arrData[1]
        		   }
        		]
        		};

        	this.objLineChart.setOption(option, true);
        }

        this.drawHBarChart = function() {
        	var dom = this.fnGetDiv(this.divHBarChart);

        	this.objHBarChart = echarts.init(dom);

        	var arrTitle = ['사원','대리','과장', '차장', '부장', '임원'];
        	var arrData = [17, 75, 90, 30, 65, 77];

        	var option = {
        		grid: [ { show: false, left: '2%', top: '2%', bottom: '2%', right: '2%', containLabel: true, } ],
        		xAxis: [ {
        			gridIndex:0,
        			type: 'value',
        			min: 0,
        			max: 100,
        			axisLabel: {
        			  formatter: '{value}'
        			}
        		}],
        		yAxis: [
        			{
        				gridIndex:0,
        				type: 'category',
        				data: arrTitle,
        				axisPointer: {
        				type: 'shadow'
        			}
        		}],
        		series: [
        			{
        				xAxisIndex:0,
        				yAxisIndex:0,
        				type:'bar',
        				data: arrData,
        				itemStyle: {
        					normal: {
        						color: '#64A70B',
        					}
        				}
        			}
        		]
        	};

        	this.objHBarChart.setOption(option, true);
        }

        this.drawPieChart = function() {
        	var dom = this.fnGetDiv(this.divPieChart);

        	this.objPieChart = echarts.init(dom);

        	var arrTitle = ['사원','대리','과장', '차장', '부장'];
        	var arrData = [
        					{value:335, name:'사원'},
        					{value:310, name:'대리'},
        					{value:234, name:'과장'},
        					{value:135, name:'차장'},
        					{value:1548, name:'부장'}
        				]

        	var option = {
        		tooltip: {
        			trigger: 'item',
        			formatter: "{a} <br/>{b}: {c} ({d}%)"
        		},
        		legend: {
        			orient: 'vertical',
        			x: 'left',
        			data: arrTitle
        		},
        		series: [
        			{
        				name: '달성률',
        				type:'pie',
        				radius: ['50%', '70%'],
        				avoidLabelOverlap: false,
        				label: {
        					normal: {
        						show: false,
        						position: 'center'
        					},
        					emphasis: {
        						show: true,
        						textStyle: {
        							fontSize: '30',
        							fontWeight: 'bold'
        						}
        					}
        				},
        				labelLine: {
        					normal: {
        						show: false
        					}
        				},
        				data: arrData
        			}
        		]
        	};

        	this.objPieChart.setOption(option, true);
        }

        this.drawRadarChart = function() {
        	var dom = this.fnGetDiv(this.divRadarChart);

        	this.objRadarChart = echarts.init(dom);

        	var option = {
        		title: {
        			text: 'Radar'
        		},
        		tooltip: {},
        		legend: {
        			data: ['계획', '실적']
        		},
        		radar: {
        			// shape: 'circle',
        			name: {
        				textStyle: {
        					color: '#fff',
        					backgroundColor: '#999',
        					borderRadius: 3,
        					padding: [3, 5]
        			   }
        			},
        			indicator: [
        			   { name: '영업', max: 650},
        			   { name: '관리', max: 1600},
        			   { name: 'IT지원', max: 3000},
        			   { name: '고객', max: 3800},
        			   { name: '개발', max: 5200},
        			   { name: 'Marketing', max: 2500}
        			]
        		},
        		series: [{
        			name: '계획 vs 실적',
        			type: 'radar',
        			data : [
        				{
        					value : [430, 1000, 2800, 3500, 5000, 1900],
        					name : '계획'
        				},
        				 {
        					value : [500, 1400, 2800, 3100, 4200, 2100],
        					name : '실적'
        				}
        			]
        		}]
        	};

        	this.objRadarChart.setOption(option, true);
        }

        this.drawScatChart = function() {
        	var dom = this.fnGetDiv(this.divScatChart);

        	this.objScatChart = echarts.init(dom);

        	var option = {
        		xAxis: {
        			scale: true
        		},
        		yAxis: {
        			scale: true
        		},
        		series: [{
        			type: 'effectScatter',
        			symbolSize: 20,
        			data: [
        				[172.7, 105.2],
        				[153.4, 42]
        			]
        		}, {
        			type: 'scatter',
        			data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
        				[170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
        				[172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
        				[147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
        				[159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
        				[174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
        				[154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
        				[162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
        				[168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
        				[170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
        				[163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
        				[161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
        				[159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
        				[161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
        				[171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
        				[166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
        				[159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
        				[162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
        				[166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
        				[170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
        				[167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
        				[160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
        				[157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
        				[172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
        				[161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
        				[152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
        				[160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
        				[169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
        				[176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
        			],
        		}]
        	};

        	this.objScatChart.setOption(option, true);
        }

        this.drawBundledVBarChart = function() {
        	var dom = this.fnGetDiv(this.divBundledVBarChart);

        	this.objBundledVBarChart = echarts.init(dom);

        	var arrLegend = [ '전월','당월' ];
        	var arrTitle = ['사원','대리','과장', '차장', '부장', '임원'];
        	var arrData = [
        		[17, 75, 90, 30, 65, 77],
        		[27, 33, 65, 45, 88, 90]
        	];

        	var option = {
        		legend: {
        			  data: arrLegend,
        			  top:'bottom',
        			  left:'center',
        			  orient:'horizontal'
        		},
        		tooltip: {
        			trigger: 'axis',
        			axisPointer: {
        				type: 'cross'
        			},
        			textStyle:{
        				fontSize: 12
        			}
        		},
        		title: [
        			{
        				text: '제목입니다',
        				left: 'center',
        				top : 'top',
        				textStyle: {
        					fontSize:12
        				}
        			}
        		],
        		grid: [ { show: false, left: '2%', right: '2%', top: '23%', bottom: '13%', containLabel: true, width: 'auto%', height:'auto%' } ],
        		xAxis: [ { type: 'category', data: arrTitle } ],
        		yAxis: [
        			{
        				type: 'value',
        				name: '%',
        				nameGap:10,
        				splitLine:{show:false}
        			}
        		],
        		series: [
        			{
        				name: arrLegend[0],
        				type:'bar',
        				itemStyle:{
        					normal: {
        						   color:'#2F4554'
        						},
        						emphasis: {
        							barBorderWidth: 1,
        							shadowBlur: 10,
        							shadowOffsetX: 0,
        							shadowOffsetY: 0,
        							shadowColor: 'rgba(0,0,0,0.5)'
        						}
        			    },
        			   data: arrData[0]
        		   },
        		   {
        			   name: arrLegend[1],
        				type:'bar',
        				itemStyle:{
        					normal: {
        						   color:'#C23531'
        						},
        						emphasis: {
        							barBorderWidth: 1,
        							shadowBlur: 10,
        							shadowOffsetX: 0,
        							shadowOffsetY: 0,
        							shadowColor: 'rgba(0,0,0,0.5)'
        						}
        			    },
        			   data: arrData[1]
        		   }
        		]
        		};

        	this.objBundledVBarChart.setOption(option, true);
        }

        this.fnGetDiv = function(obj)
        {
        	var elementId = obj.getElement().handle.id.replace(/[.]/g, '\\.');

        	var dom = document.querySelector("#" + elementId +" #nexacontainer.nexainnercontainer");
        	if(dom == null) {
        		dom = document.querySelector("#" + elementId +" #nexacontainer");
        	}

        	return dom;
        }

        this.fnGetElementId = function(obj)
        {
        	var generateID = "";
        	var prtID = obj;
        	var i = 0;
        	while(prtID != nexacro.getApplication().mainframe && prtID != null){
        		if(prtID.toString() == "[object Form]") {
        		  generateID = "form\\." + generateID;
        		} else {
        		  generateID = prtID.name + ((generateID != "")?"\\.":"") + generateID;
        		}
        		i++;
        		prtID = prtID.parent;
        	}
        	// 특수문자 escape
        	generateID = generateID.replace(/[ \s\!"#\$%&'\(\)\*\+,\/\:;<=>\?@\[\]\^`\{\|\}\~ ]/g, '\\$&')

	//trace("jqery css selector : #" + "mainframe\\\\." + generateID.replace(/[\\]/g, '\\$&'));
        	return "mainframe\\." + generateID;
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
        };
        this.loadIncludeScript("sampleEChart_html5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
