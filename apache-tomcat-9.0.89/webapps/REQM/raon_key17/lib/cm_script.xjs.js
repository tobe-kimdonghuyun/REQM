//XJS=cm_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
         * @fileoverview 업무에서 import하는 스크립트 모듈
         * @author 문호상
         * @version 0.7  버전
         */






        if(! this.smfInitForm ){
        	var ohmygodMessage = ("NEXACRO Studio의 환경설정을 완료하셨습니까?\n"
        	    + "NEXACRO Studio의 메뉴의 Tools-Options...를 클릭하여\n"
        		+ "팝업된 설정화면에서 Nexacro SDK의 Base Library를 설정해야 정상적으로 동작합니다\n"
        		+ "아래의 예제처럼 Base Library를 설정하세요\n"
        		+ "(자신의 프로젝트에 맞는 경로를 지정하세요)\n\n"
        		+ "\n\n============  나이스 ===========\n"
        		+ "edu.neis.web=C:\\eGovFrameDev-3.10.0-64bit\\workspace\\edu.neis.web\\src\\main\\nxui\\nexacrolib\n\n"
        		+ "\n\n============  클라우드 ===========\n"
        		+ "edu.cloud.web=C:\\eGovFrameDev-3.10.0-64bit\\workspace\\edu.cloud.web\\src\\main\\nxui\\nexacrolib\n\n"
        		+ "\n\n============  대국민 ===========\n"
        		+ "edu.cloud.pa=C:\\eGovFrameDev-3.10.0-64bit\\workspace\\edu.cloud.pa\\src\\main\\nxui\\nexacrolib\n\n"
        		+ "edu.cloud.pa.ui_bdm=C:\\eGovFrameDev-3.10.0-64bit\\workspace\\edu.cloud.pa\\src\\main\\nxui\\nexacrolib\n\n"
        		+ "edu.cloud.pa.ui_hrd=C:\\eGovFrameDev-3.10.0-64bit\\workspace\\edu.cloud.pa\\src\\main\\nxui\\nexacrolib\n\n"
        		+ "edu.cloud.pa.ui_olc=C:\\eGovFrameDev-3.10.0-64bit\\workspace\\edu.cloud.pa\\src\\main\\nxui\\nexacrolib\n\n"
        		+ "edu.cloud.pa.ui_ore=C:\\eGovFrameDev-3.10.0-64bit\\workspace\\edu.cloud.pa\\src\\main\\nxui\\nexacrolib\n\n"
        		+ "edu.cloud.pa.ui_pas=C:\\eGovFrameDev-3.10.0-64bit\\workspace\\edu.cloud.pa\\src\\main\\nxui\\nexacrolib\n\n"
        		+ "edu.cloud.pa.ui_sqa=C:\\eGovFrameDev-3.10.0-64bit\\workspace\\edu.cloud.pa\\src\\main\\nxui\\nexacrolib\n\n"
        		+ "\n\n"
        		+ "그리고 넥사크로 프로젝트 전체 리소스를 Refresh 및 RegenerateApplication을 수행하세요\n"
        		);
        	trace(ohmygodMessage);
        	alert(ohmygodMessage);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
