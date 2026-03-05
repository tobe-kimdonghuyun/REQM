<HTML>
<HEAD>
<TITLE></TITLE>

<SCRIPT LANGUAGE="javascript">
	function fn_onload() {
		NexacroLauncher.key = "TESTING1";
		NexacroLauncher.bjson = "http://172.10.12.45:9090/mdi_test/start.json";
		
		
		NexacroLauncher.splashmessage = "none";
		NexacroLauncher.download();

		NexacroAXCtrl.key = "TESTING1";
		NexacroAXCtrl.bjson = "http://172.10.12.45:9090/mdi_test/start.json";	//http://localhost:8080/dbcc/
		NexacroAXCtrl.initbktext = "Loading";

		NexacroAXCtrl.run();
	}

</SCRIPT>

<SCRIPT LANGUAGE=javascript FOR=NexacroAXCtrl EVENT="addlog(strMsg)">
</SCRIPT>
<SCRIPT LANGUAGE=javascript FOR=NexacroAXCtrl EVENT="beforeexit(bCloseFlag, bHandledFlag)">
</SCRIPT>
<SCRIPT LANGUAGE=javascript FOR=NexacroAXCtrl EVENT="communication(bStart)">
</SCRIPT>
<SCRIPT LANGUAGE=javascript FOR=NexacroAXCtrl EVENT="error(nError, strErrMsg)">
</SCRIPT>
<SCRIPT LANGUAGE=javascript FOR=NexacroAXCtrl EVENT="exit()">
</SCRIPT>
<SCRIPT LANGUAGE=javascript FOR=NexacroAXCtrl EVENT="load(strURL)">
</SCRIPT>

<SCRIPT LANGUAGE=javascript FOR=NexacroAXCtrl EVENT="loadingglobalvariables(strURL)">

</SCRIPT>

<SCRIPT LANGUAGE=javascript FOR=NexacroAXCtrl EVENT="loadtypedefinition(strURL)">
</SCRIPT>
<SCRIPT LANGUAGE=javascript FOR=NexacroAXCtrl EVENT="usernotify(nNotifyID, strMsg)">
</SCRIPT>
<script type="text/javascript">
	// TM 팝업 종료 시 기간계 쪽 화면의 팝업 전체다기 실행 용도 (비정상종료 이슈)
	function fn_abc(uiNm) {
		
		NexacroAXCtrl.callscript("application.gfn_call('" + uiNm + "')");
	}
</script>
<style type="text/css">
</style>
</HEAD>
<BODY onload="fn_onload()" style="border: 0; padding: 0; margin: 0; overflow: hidden;">

<!--overflow: hidden;-->

<OBJECT ID="NexacroLauncher" CLASSID="CLSID:A7969122-0BB8-452A-93C9-72641B76CFB7" width="0" height="0" style="padding:0; margin:0; border:0;"></OBJECT>
<!-- NP14 기본 엔진 --> 
<!-- <OBJECT ID="NexacroAXCtrl" CLASSID="CLSID:6DB5422D-536F-4B80-B32C-16BEA0971512" width="100%" height="200%" style="padding:0; margin:0; border:0; "></OBJECT> -->

<!-- NP24에서 호출가능한 분리버전 NP14--> 
<OBJECT ID="NexacroAXCtrl" CLASSID="CLSID:84BEAE39-3F91-461C-9B02-259CE2E28C1C" width="100%" height="200%" style="padding:0; margin:0; border:0; "></OBJECT> 

<input type="hidden" id="hidNotiMsg"/> <!--자리수제한때문에 hidden으로 값을 갖는다.-->

</BODY>
</HTML>