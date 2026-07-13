//XJS=libCommon2.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::libCommon.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {
        //---------------------------------------------------------------
        // Validator 기반 엔진 적용을 위해
        // lib::libcommon2.xjs를 lib::libcommon.xjs으로 교체함
        //---------------------------------------------------------------
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
