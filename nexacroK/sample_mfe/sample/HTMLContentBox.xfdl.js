(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HTMLContentBox");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","195","553","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("가져오기");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","30","553","140","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","30","25","310","515",null,null,null,null,null,null,this);
            obj.set_background("lightblue");
            obj.set_border("0px solid gray");
            obj.set_borderRadius("6px");
            obj.set_resizertype("live");
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.HTMLContentBox("HTMLContentBox00","15","5",null,null,"15","5",null,null,null,null,this.Div00.form);
            obj.set_content("<style>        .calculator {position:static; background: #fff;            padding: 20px;            border-radius: 10px;            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);overflow:  auto;        }        .display {position:static; width:100%;            height: 50px;            border: none;            background: #eaeaea;            margin-bottom: 20px;            border-radius: 5px;            text-align: right;            font-size: 1.5em;            padding: 10px;            box-sizing: border-box;            overflow: hidden;        }        .buttons {position:static;  display: grid;            grid-template-columns: repeat(4, 1fr);            gap: 10px;        }        .button {            height: 50px;            border: none;            border-radius: 5px;            font-size: 1.2em;            cursor: pointer;            background: #f0f0f0;        }        .button.operator {            background: #ffd700;        }        .button.clear {            background: #ff6347;            color: white;        }        .button.equal {            background: #32cd32;            color: white;            grid-column: span 4;        }</style><div class=\"calculator\"><input type=\"text\" class=\"display\" id=\"display\" value=\"${display}\" disabled/><div class=\"buttons\"><button class=\"button\" data-value=\"7\">7</button><button class=\"button\" data-value=\"8\">8</button><button class=\"button\" data-value=\"9\">9</button><button class=\"button operator\" data-value=\"/\">÷</button><button class=\"button\" data-value=\"4\">4</button><button class=\"button\" data-value=\"5\">5</button><button class=\"button\" data-value=\"6\">6</button><button class=\"button operator\" data-value=\"*\">×</button><button class=\"button\" data-value=\"1\">1</button><button class=\"button\" data-value=\"2\">2</button><button class=\"button\" data-value=\"3\">3</button><button class=\"button operator\" data-value=\"-\">−</button><button class=\"button clear\" data-value=\"C\">C</button><button class=\"button\" data-value=\"0\">0</button><button class=\"button\" data-value=\".\">.</button><button class=\"button operator\" data-value=\"+\">+</button><button class=\"button equal\" data-value=\"=\">${label ||\'=\'}</button></div></div><script>const calculator = document.querySelector(\'.calculator\');const display = calculator.querySelector(\'.display\');const buttons = calculator.querySelectorAll(\'.button\');let currentInput = \'\';let operator = null;let firstOperand = null;buttons.forEach(button => {button.addEventListener(\'click\', () => {const value = button.dataset.value;if (!isNaN(value) || value === \'.\') {currentInput += value;updateDisplay(currentInput);} else if (value === \'C\') {resetCalculator();} else if (value === \'=\') {if (firstOperand !== null && operator !== null && currentInput !== \'\') {const result = calculate(firstOperand, parseFloat(currentInput), operator);updateDisplay(result);resetCalculator(result);}} else {if (currentInput !== \'\') {if (firstOperand === null) {firstOperand = parseFloat(currentInput);} else if (operator) {firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);updateDisplay(firstOperand);}operator = value;currentInput = \'\';}}});});function updateDisplay(value) {display.value = value;}function resetCalculator(result = \'\') {currentInput = \'\';operator = null;firstOperand = result || null;updateDisplay(result);}function calculate(a, b, operator) {switch (operator) {case \'+\': return a + b;case \'-\': return a - b;case \'*\': return a * b;case \'/\': return b === 0 ? \'Error\' : a / b;default: return 0;}}</script>");
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Div("Div01","390","25","300","275",null,null,null,null,null,null,this);
            obj.set_resizertype("live");
            obj.set_taborder("3");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new nexacro.HTMLContentBox("HTMLContentBox01","0","0",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_content("<div id=\"monacoeditor\" style=\"width: 100%; height:100%;\"></div><script src=\"https://unpkg.com/monaco-editor@latest/min/vs/loader.js\" defer></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js\" defer></script><script> require.config({ paths: { \'vs\': \'https://unpkg.com/monaco-editor@latest/min/vs\' }}); require([\'vs/editor/editor.main\'], function () {   var editor = monaco.editor.create(document.getElementById(\'monacoeditor\'), {value: [\'function x() {\', \'console.log(\"Hello world!\");\', \'}\'].join(\'\'), language: \'javascript\' });  const resizeObserver = new ResizeObserver(() => { editor.layout(); });  resizeObserver.observe(document.getElementById(\'monacoeditor\'));}); </script>");
            obj.set_taborder("0");
            this.Div01.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","270","553","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("보내기");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div01_00","390","320","300","275",null,null,null,null,null,null,this);
            obj.set_border("1px solid gray");
            obj.set_resizertype("live");
            obj.set_taborder("5");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new nexacro.HTMLContentBox("HTMLContentBox02","0","0",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_content("<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:block;\" width=\"100%\" height=\"100%\" viewBox=\"0 0 500 500\">  <style type=\"text/css\">    circle:hover {fill-opacity:0.9;}  </style>  <g style=\"fill-opacity:0.7;\"><text x=\"120\" y=\"450\" font-size=\"50\" fill=\"black\">${welcome}</text><circle cx=\"6.5cm\" cy=\"2cm\" r=\"100\" style=\"fill:red; stroke:black; stroke-width:0.1cm\" transform=\"translate(0,50)\"/>    <circle cx=\"6.5cm\" cy=\"2cm\" r=\"100\" style=\"fill:yellow; stroke:black; stroke-width:0.1cm\" transform=\"translate(70,150)\"/>    <circle cx=\"6.5cm\" cy=\"2cm\" r=\"100\" fill=\"${fillcolor|\'pink\'}\" style=\"stroke:black; stroke-width:0.1cm\" transform=\"translate(-70,150)\"/>  </g></svg>");
            obj.getSetter("onclick").set("Div01_00_HTMLContentBox02_onclick");
            obj.set_taborder("6");
            this.Div01_00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","195","595","145","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("테마변경");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div01_00_00","390","605","300","275",null,null,null,null,null,null,this);
            obj.set_border("1px solid gray");
            obj.set_resizertype("live");
            obj.set_taborder("7");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new nexacro.HTMLContentBox("HTMLContentBox02","0","0",null,null,"0","0",null,null,null,null,this.Div01_00_00.form);
            obj.set_content("<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:block;\" width=\"100%\" height=\"100%\" viewBox=\"0 0 500 500\">  <style type=\"text/css\">    circle:hover {fill-opacity:0.9;}  </style>  <g style=\"fill-opacity:0.7;\"><text x=\"120\" y=\"450\" font-size=\"50\" fill=\"black\">${welcome||\'Hello, SVG!\'}</text><circle cx=\"6.5cm\" cy=\"2cm\" r=\"100\" style=\"fill:${fillcolor||\'purple\'}; stroke:black; stroke-width:0.1cm\" transform=\"translate(0,50)\"/>    <circle cx=\"6.5cm\" cy=\"2cm\" r=\"100\" style=\"fill:${fillcolor||\'gray\'}; stroke:black; stroke-width:0.1cm\" transform=\"translate(70,150)\"/>    <circle cx=\"6.5cm\" cy=\"2cm\" r=\"100\" fill=\"${fillcolor||\'gray\'}\" style=\"stroke:black; stroke-width:0.1cm\" transform=\"translate(-70,150)\"/>  </g></svg>");
            obj.getSetter("fillcolor").set("red");
            obj.set_taborder("6");
            obj.getSetter("welcome").set("바꾸자");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new nexacro.Div("Div01_00_01","770","320","300","275",null,null,null,null,null,null,this);
            obj.set_border("1px solid gray");
            obj.set_resizertype("live");
            obj.set_taborder("8");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new nexacro.HTMLContentBox("HTMLContentBox02","0","0",null,null,"0","0",null,null,null,null,this.Div01_00_01.form);
            obj.set_content("<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:block;\" width=\"100%\" height=\"100%\" viewBox=\"0 0 500 500\">  <style type=\"text/css\">    circle:hover {fill-opacity:0.9;}  </style>  <g style=\"fill-opacity:0.7;\"><text x=\"120\" y=\"450\" font-size=\"50\" fill=\"black\">${welcome}</text><circle cx=\"6.5cm\" cy=\"2cm\" r=\"100\" style=\"fill:red; stroke:black; stroke-width:0.1cm\" transform=\"translate(0,50)\"/>    <circle cx=\"6.5cm\" cy=\"2cm\" r=\"100\" style=\"fill:yellow; stroke:${strokecolor||\'red\'}; stroke-width:0.1cm\" transform=\"translate(70,150)\"/>    <circle cx=\"6.5cm\" cy=\"2cm\" r=\"100\" fill=\"${fillcolor||\'gray\'}\" style=\"stroke:black; stroke-width:0.1cm\" transform=\"translate(-70,150)\"/>  </g></svg>");
            obj.getSetter("onclick").set("Div01_00_01_HTMLContentBox02_onclick");
            obj.set_taborder("6");
            this.Div01_00_01.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","30","595","126","38",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("전송 설정");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new nexacro.Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form
            obj = new nexacro.Layout("default","",0,0,this.Div01_00.form,function(p){});
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00_00.form
            obj = new nexacro.Layout("default","",0,0,this.Div01_00_00.form,function(p){});
            this.Div01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00_01.form
            obj = new nexacro.Layout("default","",0,0,this.Div01_00_01.form,function(p){});
            this.Div01_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HTMLContentBox.xfdl", function(nexacro, system, trace, environment, application) {
        function getRandomHexColor() {
            const hex = Math.floor(Math.random() * 16777215).toString(16);
            return `#${hex.padStart(6, '0')}`;
        }

        this.Button00_onclick = function(obj,e)
        {
        	// 가져오기
        	this.Edit00.value = this.Div00.form.HTMLContentBox00.querySelector('#display').value;
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	// 보내기
        	this.Div00.form.HTMLContentBox00.querySelector('.equal').firstChild.nodeValue = this.Edit00.value;
        };

        this.Button01_onclick = function(obj,e)
        {
        	// 테마변경
        	// 일반
        	const monacoEditor = monaco.editor;
        	if (monacoEditor)
        		monacoEditor.setTheme('vs-dark');

        	// WebComponent
        	const heyEditor = this.Div01_00.form.HTMLContentBox02.querySelector('hey-monaco-editor');
        	if (heyEditor)
        		heyEditor.monaco.editor.setTheme('vs-dark');
        };

        this.Div01_00_01_HTMLContentBox02_onclick = function(obj,e)
        {
        	var color = getRandomHexColor();

        	obj.querySelectorAll('circle')[2].setAttribute('fill', color);

        	if(obj.querySelector('text').firstChild)
        	{
        		obj.querySelector('text').firstChild.nodeValue = color;
        	}
        	else
        	{
        		const textNode = document.createTextNode(color);
        		obj.querySelector('text').appendChild(textNode);
        	}
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.Div00.form.HTMLContentBox00.querySelector('.equal').addEventListener('click', ()=>{ this.alert('Transaction'); });
        };

        this.Div01_00_HTMLContentBox02_onclick = function(obj,e)
        {
        	obj.fillcolor = "lime";
        	obj.welcome = "reload";

        	obj.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };

        this.loadIncludeScript("HTMLContentBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
