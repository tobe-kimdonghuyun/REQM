(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmFn");
            this.set_titletext("New Form");
            this.set_stepalign("center middle");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,3000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"fileTmpId\" type=\"STRING\" size=\"256\"/><Column id=\"fileOrder\" type=\"INT\" size=\"256\"/><Column id=\"filePath\" type=\"STRING\" size=\"256\"/><Column id=\"fileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileOriNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileExt\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileId", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOcrResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","26","43","89","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1. 팝업경고창");
            this.addChild(obj.name, obj);

            obj = new Button("btn_alert","34","80","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("alert");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm","120","80","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("confirm");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","296.00","41","89","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2. DB 트랜잭션");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_popup","204.00","80","81","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("page_popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_transaction","304.00","80","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("통신요청");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","26.00","960","124","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("6. 공통함수");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","31.00","1004","369","106",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("* @class dataSet의 Row 중에서 변경된 내용이 있는지 여부\r\n* @param {Object} objDs - 확인 대상 Dataset\r\n* @return {boolean} \r\n\r\nthis.gfnDsIsUpdated(this.dsList)");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","416.00","1005","349","105",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("* @class null값 확인\r\n* @param {String} sValue - 확인 대상\r\n* @return {boolean} Null이면 true\r\n\r\nthis.gfnIsNull(sValue) ");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","780.00","1005","470","105",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("* @class 입력값을 체크하여 Null인경우 지정한 값을 리턴\r\n* @param {String} inVal\r\n* @param {String} nullVal\t- Null인경우 대치값\r\n* @return {String} 입력값이 Null인경우 지정한값, Null이 아닌경우 입력값\r\n\r\nthis.gfnNvl(nRow, 0);");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","31.00","1127","369","113",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("* @class 정규식을 이용한 trim 구현 - 문자열 양 옆의 공백 제거\r\n* @param {String} sValue - 변경하려는 값\r\n* @return {String} 문자열\r\n\r\nthis.gfnTrim(sValue);");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","416.00","1127","349","123",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("* @class 왼쪽 문자 채우기\r\n* @param {String} val - 문자열\r\n* @param {String} pad - 채울 문자열(default : \" \"(공백) )\r\n* @param {Number} len - 전체 문자 길이(default : 1 )\r\n* @return {String}\r\n\r\nthis.gfnLPad(\"1\", 0, 2);");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","780.00","1127","470","113",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("* @class 현재일자를 구한다. \r\n* @param {String} [sGubn] - date/null : 일자, time : 일자+시간, milli : Milliseconds\r\n* @param {Boolean} [bFormat] - format 지정 여부\r\n* @return {String} 날짜및시간 문자열\r\n\r\nthis.gfnGetDate()");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","31.00","1257","369","113",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("* @class 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함\r\n* @param {String} strDate - \'yyyyMMdd\' 형태로 표현된 날짜.\r\n* @param {Number} nOffSet - 날짜로부터 증가 감소값.\r\n* @return {String} date의 문자열 (ex. 20080821)\r\n\r\nthis.gfnAddDate(sToday,-7)");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","416.00","1257","349","113",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("* @class 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함\r\n* @param {String} strDate - String Date Format\r\n* @param {Number} OffSet - Integer Format\r\n* @return {String} date\r\n\r\nthis.gfnAddMonth(sToday, +1)");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","780.00","1257","470","113",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("* @class 문자를 날짜로 변환. <br>\r\n* @param {String} strDate - String Date Format\r\n* @return {Date} date\r\n\r\nthis.gfnStrToDate(\"20020101\");");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00","780.00","1387","470","113",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class  Grid에서 expression으로  표현할때 decode 문처럼 사용할 수 있는 기능\r\n* @param  arguments - Decode 수행할 아규먼트(가변)\r\n* @return {String} varRtnValue - 반환된 문자열\r\n\r\nthis.gfnDecode(sortInfo.status, 1, this.MARKER[0], 2, this.MARKER[1], \"\");\t");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_00","31.00","1387","369","113",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("* @class 입력된 날자로부터 요일을 구함\r\n* @param {String} strDate - \'yyyyMMdd\' 형태로 표현된 날짜.\r\n* @return {Number} 0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 -1 Return.\r\n\r\nthis.gfnGetDay(\"20020101\");");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00","416.00","1387","349","123",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("* @class 입력된 날자로부터 한글 요일을 구함 \r\n* @param {String} dateVal - \'yyyyMMdd\' 형태로 표현된 날짜.\r\n* @return {String} 0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 \"\" Return.\r\n\r\nthis.gfnGetDayKor(\"20020101\");");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00_00","780.00","1737","470","113",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class not empty 여부 확인.\r\n* @param {*} value 확인할 value.\r\n* @return {boolean} empty 여부.\r\n\r\nthis.gfnIsNotEmpty2(obj.value)");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00_00","416.00","1737","349","233",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("* @class 파라미터로 여러개의 Object 를 검사할 때 하나라도 empty 이면 true 리턴한다.\r\n* @param {*} value 확인할 value.\r\n* gfnIsEmpty(GRID) : binddataset 이 empty인지 검사\r\n* gfnIsEmpty(DATASET) : rowcount 가 0 인지 검사\r\n* gfnIsEmpty(String) : trim().length 가 0인지 검사\r\n* gfnIsEmpty(ARRAY) : length 가 0 인지 검사\r\n* gfnIsEmpty(object) : value 가 empty 인지 검사\r\n* gfnIsEmpty(null) : true 리턴\r\n* @return {boolean} empty 여부.\r\n\r\nthis.gfnIsEmpty2(obj.value)");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_00_00","31.00","1737","369","113",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("* @class 컨트롤이 Dataset에 bind되어 있을 경우 즉시 value를 Dataset에 적용시킨다.\r\n* @param N/A\r\n* @return N/A\r\n\r\nthis.gfnUpdateToDataset();");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_00_00_00","31.00","1864","369","126",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("* @class 로그 출력(실행환경이 넥사크로스튜디오, 로컬, 개발일 경우만)\r\n* @param  {String} sMsg - 로그 출력 문자열\r\n* @param  {String} sType - 로그 타입\r\n* @return N/A\r\n\r\nthis.gfnLog(e.message ,\"error\");");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00_00_00","31.00","1534","369","176",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달\r\n* @param {Object} objDs - 대상 dataset\r\n* @param {String} sIdCol - 키칼럼\r\n* @param {String} sId - 키값\r\n* @param {String} sSubCol - 서브키칼럼\r\n* @param {String} sSubId - 서브 키값\r\n* @return {Number} rowpostion\r\n\r\nthis.gfnFindData(this.dsMenu, \"MENUID\", \"1000\");");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00_00_00","420.00","1534","420","176",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달\r\n* @param {Object} objDs - 대상 dataset\r\n* @param {String} sIdCol - 키칼럼\r\n* @param {String} strId - 키값\r\n* @param {String} sInfo - dataSet 칼럼\r\n* @param {String} sSubCol - 서브키칼럼\r\n* @param {String} sSubId - 서브 키값\r\n* @return {Object} 칼럼값\r\n\r\nthis.gfnGetLookupData(this.dsMenu, \"MENUID\", \"1000\", \"WINID\");");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00_00_00_00","860.00","1534","390","176",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class text 넓이 및 높이를 구하는 함수\r\n* @param {String} sText - text\r\n* @return {Array} text 넓이 및 높이 배열\r\n\r\nthis.gfnGetTextSize(\"타이틀1\");");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00_00_00_00_01_00","30.00","2005","510","365",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class 팝업오픈\r\n* @param {String} sPopupId\t- 팝업ID\r\n* @param {String} sUrl\t - 팝업URL\r\n* @param {String} [oArg] - 전달값\r\n* @param {String} [sPopupCallback] - 팝업콜백\r\n* @param {Object} [oOption] - 팝업옵션 <br>\r\n*\toOption.top \t\t: 상단 좌표 <br>\r\n*\toOption.left \t\t: 좌측 좌표 <br>\r\n*\toOption.width \t\t: 넓이 \t\t <br>\r\n*\toOption.height \t\t: 높이 \t\t <br>\r\n*\toOption.popuptype \t: 팝업종류(modal:showModal, \t\t\t <br>\r\n\t\t\t\t\t\t\t\tmodeless:application.open,   <br>\r\n\t\t\t\t\t\t\t\tmodalsync:showModalSync,\t <br>\r\n\t\t\t\t\t\t\t\tmodalwindow:showModalWindow) <br>\r\n*\toOption.layered \t: 투명 윈도우  <br>\r\n*\toOption.opacity \t: 투명도\t\t<br>\r\n*\toOption.autosize \t: autosize \t\t<br>\r\n* @return N/A\r\n\r\nthis.gfnOpenPopup(this);");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00_00_00_00_01_00_00","560.00","2005","310","115",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class 팝업화면에서 창 닫기\r\n* @param {String} sReturn - return value\t \r\n* @return N/A\t\r\n\r\nthis.gfnClosePopup(\"OK\");");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00_00_00_00_01_00_01","890.00","2005","360","110",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class Profile을 반환하는 메소드\r\n* @param  none\r\n* @return {String} 실행환경 구분(S:NexacroStudio, L:로컬(웹), R:운영(웹), D:개발)\r\n\r\nthis.gfnGetRunMode();");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00_00_00_00_01_00_01_00","560.00","2255","360","110",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class Nexacro browser 여부 확인\r\n* @return {Boolean} Nexacro browser 여부\r\n\r\nthis.gfnIsNexaBrowser();");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00_00_00_00_01_00_01_00_00","780.00","1860","470","110",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class 모바일여부반환\r\n* @param  none\r\n* @return \"1\"/\"0\"\r\n\r\nthis.gfnIsMobile();");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00_00_00_00_01_00_01_00_00_00","560.00","2132","560","110",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_verticalAlign("top");
            obj.set_border("1px solid");
            obj.set_text("* @class  메인화면으로 이동\r\n* @param  {Boolean} bInit - Application 시작인지 여부(시작인 경우에는 각 화면 초기화 안함.)\r\n* @return N/A\r\n\r\nthis.gfnSetMain();");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","26.00","120","480","260",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_ButtonBarEdit("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload","526.00","204","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload_add","526.00","76","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("파일추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload_del","526.00","117","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("파일삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload_alldel","526.00","160","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("전체삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_download","526.00","324","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_download_setting","526.00","284","106","33",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("다운로드셋팅");
            this.addChild(obj.name, obj);

            obj = new Button("btn_alldownload","527.00","364","106","33",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("전체다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reupload","526.00","244","90","33",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("기존업로드");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","399.00","41","89","35",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("3. 업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload_popup","407.00","80","86","33",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("업로드팝업");
            this.addChild(obj.name, obj);

            obj = new Div("div00","26.00","465","702","471",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("div00");
            obj.set_url("work::editor/editor.xfdl");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write","765","471","266","74",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("쓰기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_read","765.00","580","266","74",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("읽기");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00","26.00","420","89","35",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("5. 에디터");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00","671.00","43","89","35",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("4. 리포트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report","670.00","78","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("리포트");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_00","791.00","43","89","35",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("5. 외부연계");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ocr","790.00","78","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("OCR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hpauth","791.00","127","99","33",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("핸드폰인증");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bknum","791.00","181","129","33",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("사업자번호조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sms","791.00","237","129","33",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("문자전송");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mail","791.00","297","129","33",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("메일발송");
            this.addChild(obj.name, obj);

            obj = new Button("btn_inside_mail","791.00","347","129","33",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("내부메일발송");
            this.addChild(obj.name, obj);

            obj = new Edit("han_edt","778","702","250","32",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_imemode("hangul");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","778.00","748","250","32",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_imemode("alpha");
            obj.set_inputtype("english");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,3000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::editor/editor.xfdl");
        };
        
        // User Script
        this.registerScript("cmmFn.xfdl", function() {
        this.atchFileId;

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        };

        this.fnInit = function() {
        	var obj = {
        		filebrowserImageUploadUrl: '/common/insertImageCk.do', // 파일 업로드를 처리 할 경로 설정.
        		height: 400,
        		width: 700,
        		toolbar: [['Source'], ['Bold', 'Italic', 'Underline', 'Strike'], ['Image', 'Table', 'HorizontalRule'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],	['Font', 'FontSize'], ['TextColor', 'BGColor']],
        		removePlugins: 'resize',
        	};

        	this.div00.form.fnInit(obj);
        }

        this.btn_alert_onclick = function(obj,e)
        {
        /**
        * @class 메세지팝업오픈
        * @param {String} sMsgId - 메세지ID
        * @param {String} sMsg - 메세지
        * @param {String} [sCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
        * @return N/A
        * @example
        * this.gfnAlert(sMsgId, "얼럿메세지", sMsgCallback);
        */
        	this.gfnAlertMsg("testAlert", "얼럿입니다.", "msgCallback");
        };

        this.btn_confirm_onclick = function(obj,e)
        {
        /**
        * @class 메세지컨펌팝업오픈
        * @param {String} sMsgId - 메세지ID
        * @param {String} sMsg - 메세지
        * @param {String} [sCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
        * @param {Array} [arrButton] - 확인 창에서 버튼의 명칭 배열
        * @param {Array} [arrRtn]    - 확인 창에서 버튼 클릭시 리턴할 값 배열
        * @return N/A
        * @example
        * this.gfnAlert(sMsgId, "확인메세지", sMsgCallback, ["예", "아니오", "취소"], ["Y", "N", "C"]);
        */
        	this.gfnConfirmMsg("testConfirm", "컨펌요청?", "msgCallback", ["예", "아니오", "취소"], ["Y", "N", "C"]);
        };

        this.btn_page_popup_onclick = function(obj,e)
        {
        	var sTitle = "프로그램 검색 팝업";		// 팝업 타이틀
        	var objArg   = {};							// 팝업 파라메터

        	var objOption = {
        		popuptype: "modal"						// modal,modaless
        		//, width: 700
        		//, height: 394							// width,height 지정하지 않음 popup form size적용
        		, autosize: false						// 자동 사이즈
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "popupCallback";

        	this.gfnOpenPopup("testPopup", "work::sysMng/popup/prgmPopup.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.btn_transaction_onclick = function(obj,e)
        {
        	var strSvcId    = "search";						// 트랜잭션 ID (콜백에서 ID로 구분하여 처리)
        	var strSvcUrl   = "sysMng/menuMngList.do";		// 요청 URL (http://서버도메인/ <- 프로젝트셋팅에서 지정)
        	var inData      = "dsSearch=dsSearch";			// 요청 시 넘겨주는 데이터셋 (서버에서 받을명칭=실제데이터셋명)
        	var outData     = "dsTree=dsTree";				// 응답시 받는 데이터셋 (실제데이터셋명=서버에서 응답하는 데이터셋명)
        	var strArg      = "";							// 요청시 넘겨주는 파라메터(서버에서 받을명칭=파라메터값)
        	var callBackFnc = "fnCallback";					// 콜백 function명
        	var isAsync   	= true;							// 동기, 비동기 (기본 비동기)

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        this.btn_upload_add_onclick = function(obj,e)
        {
        	this.RaonkUpload.OpenFileDialog();
        };

        this.btn_upload_del_onclick = function(obj,e)
        {
        	 this.RaonkUpload.DeleteSelectedFile();
        };

        this.btn_upload_alldel_onclick = function(obj,e)
        {
        	this.RaonkUpload.DeleteAllFile();
        };

        this.btn_upload_onclick = function(obj,e)
        {
        	var obj = {
        		"atchFileId" : "",
        		"workGroup" : "work"
        	}

        	var str = JSON.stringify(obj);

         	this.RaonkUpload.AddFormData('params', str);
         	this.RaonkUpload.Transfer();
        };


        this.btn_reupload_onclick = function(obj,e)
        {

        	if (this.gfnIsNull(this.atchFileId)) return;

        	var obj = {
        		"atchFileId" : this.atchFileId,
        		"workGroup" : "work"
        	}

        	var str = JSON.stringify(obj);

         	this.RaonkUpload.AddFormData('params', str);
         	this.RaonkUpload.Transfer();
        };

        this.btn_download_setting_onclick = function(obj,e)
        {

        	var fileList = [];
        	var file1 = {
        		uniqueKey: "0001",
        		originName: "text.xls",
        		webPath: "C:/developer/workspace/tsp/upload/raonkuploaddata/2024/06/183c7bb771e441cab24b37eaab5f5421.xls",
        		size: 100,
        		customValue: "00011"
        	};

        	var file2 = {
        		uniqueKey: "0002",
        		originName: "text1.xls",
        		webPath: "C:/developer/workspace/tsp/upload/raonkuploaddata/2024/06/183c7bb771e441cab24b37eaab5f5421.xls",
        		size: 100000,
        		customValue: "00111"
        	};

        	fileList.push(file1);
        	fileList.push(file2);

        	this.downloadSetting(fileList);
        };

        this.btn_download_onclick = function(obj,e)
        {
        	 this.RaonkUpload.DownloadFile();
        };

        this.btn_alldownload_onclick = function(obj,e)
        {
        	this.RaonkUpload.DownloadAllFile();
        };

        this.btn_upload_popup_onclick = function(obj,e)
        {
        	var sTitle = "업로드 팝업";				// 팝업 타이틀
        	var objArg   = {					// 팝업 파라메터 (파트별 단위)
        		"workGroup" : "work",
        		"atchFileId" : this.atchFileId
        	};

        	var objOption = {
        		popuptype: "modaless"					// modal,modaless
        		//, width: 700
        		//, height: 394						// width,height 지정하지 않음 popup form size적용
        		, autosize: true					// 자동 사이즈
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "popupCallback";

        	this.gfnOpenPopup("uploadPopup", "work::upload/upload.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.downloadSetting = function(fileList) {

        	if (this.gfnIsNull(fileList)) return;

        	for(var i=0;i<fileList.length;i++) {
        		this.RaonkUpload.AddUploadedFile(fileList[i].uniqueKey, fileList[i].originName, fileList[i].webPath, fileList[i].size, fileList[i].customValue);
        	}

        }


        this.btn_read_onclick = function(obj,e)
        {
        	this.div00.form.readData(this.formGetData);
        };

        /* ck에디터에서 불러올때 콜백 펑션 */
        this.formGetData = function(allData) {
        	console.log(JSON.parse(allData));
        }

        this.btn_write_onclick = function(obj,e)
        {
        	//파라메터 다른데이터 추가하여
        	var rowData = {
        		content: "테스트 데이터"
        	};
        	this.div00.form.writeData(rowData);
        };

        this.btn_init_onclick = function(obj,e)
        {
        	this.div00.form.init();
        };

        this.btn_report_onclick = function(obj,e)
        {
        	var sTitle = "리포트";				// 팝업 타이틀
        	var objArg   = {					// 팝업 파라메터 (파트별 단위)
        		reportName : 'tsp/D_111.crf',
        		params : {
        			"dataNo" : '111',
        			"name" : 'name'
        		}
        	};

        	var objOption = {
        		popuptype: "modaless"					// modal,modaless
        		//, width: 700
        		//, height: 394						// width,height 지정하지 않음 popup form size적용
        		, autosize: true					// 자동 사이즈
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "popupCallback";

        	this.gfnOpenPopup("reportPopup", "work::report/report.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.btn_ocr_onclick = function(obj,e)
        {
        	var strSvcId    = "ocr";
        	var strSvcUrl   = "common/ocrUrl.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.btn_hpauth_onclick = function(obj,e)
        {
        	var sTitle = "핸드폰인증";				// 팝업 타이틀
        	var objArg   = {					// 팝업 파라메터
        		params : {
        			"dataNo" : '111',
        			"name" : 'name'
        		}
        	};

        	var objOption = {
        		popuptype: "modaless"					// modal,modaless
        		//, width: 700
        		//, height: 394						// width,height 지정하지 않음 popup form size적용
        		, autosize: true					// 자동 사이즈
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "popupCallback";

        	this.gfnOpenPopup("hpauthPopup", "work::hpauth/certRequest.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.btn_bknum_onclick = function(obj,e)
        {
        	var strSvcId    = "bknum";
        	var strSvcUrl   = "api/nationalTax.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.btn_sms_onclick = function(obj,e)
        {
        	var strSvcId    = "sms";
        	var strSvcUrl   = "api/sms.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.btn_mail_onclick = function(obj,e)
        {
        	var strSvcId    = "mail";
        	var strSvcUrl   = "api/mail.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.btn_inside_mail_onclick = function(obj,e)
        {
        	var strSvcId    = "inside_mail";
        	var strSvcUrl   = "api/insideMail.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        //************************************************************ callback **********************************//
        this.RaonkUpload00_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	trace('CreationComplete');
        	this.RaonkUpload.SetConfig('FolderNameRule', 'test/YYYY/MM/DD/');
        };

        this.RaonkUpload00_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	console.log('UploadComplete');

        	var allListArray = RAONKUPLOAD.GetListInfo("json");

        	var mergeListArray = allListArray.mergeFile;
        	var newListArray = allListArray.newFile;
        	var deleteListArray = allListArray.deleteFile;
        	var webListArray = allListArray.webFile;

        	if (this.gfnIsNull(newListArray)) return;

        	for(var i=0;i<newListArray.fileId.length;i++) {

        		var nRow = this.dsFileList.addRow();
        		this.dsFileList.setColumn(nRow, "fileTmpId", newListArray.fileId[i]);
        		this.dsFileList.setColumn(nRow, "fileOrder", newListArray.order[i]);
        		this.dsFileList.setColumn(nRow, "filePath", newListArray.uploadPath[i]);
        		this.dsFileList.setColumn(nRow, "fileNm", newListArray.uploadName[i]);
        		this.dsFileList.setColumn(nRow, "fileOriNm", newListArray.originalName[i]);
        		this.dsFileList.setColumn(nRow, "fileExt", newListArray.extension[i]);
        		this.dsFileList.setColumn(nRow, "fileSize", newListArray.size[i]);
        	}

        	this.fileUploadTran();

        	this.RaonkUpload.ResetUpload();

        	if (this.gfnIsNull(mergeListArray)) return;

        	var fileList = [];
        	for(var i=0;i<mergeListArray.fileId.length;i++) {
        		var file = {
        			uniqueKey: mergeListArray.fileId[i],
        			originName: mergeListArray.originalName[i],
        			webPath: mergeListArray.uploadPath[i],
        			size: mergeListArray.size[i]
        		};
        		fileList.push(file);
        	}
        	this.downloadSetting(fileList);


        };

        this.RaonkDownload_RAONKUPLOAD_DownloadCompleteAllFile = function(obj, paramObj)
        {
        	console.log('DownloadCompleteAllFile');
        	console.log(paramObj);
        };

        this.RaonkDownload_RAONKUPLOAD_DownloadCompleteFile = function(obj, paramObj)
        {
        	console.log('DownloadCompleteFile');
        	console.log(paramObj);
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	if(svcID != null && svcID == "search")
        	{
        		console.log(svcID);
        	} else if(svcID != null && svcID == "upload") {
        		this.atchFileId = this.dsFileId.getColumn(0, "atchFileId");
        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	if(sPopupId == "testConfirm") {
        		console.log(sRtn);
        	} else if(sPopupId == "testAlert") {
        		console.log(sRtn);
        	}
        };

        this.popupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "testPopup")
        	{
        		console.log(sRtn);
        	} else if(sPopupId == "uploadPopup") {

        		if (this.gfnIsNull(sRtn)) return;

        		var objRtn = JSON.parse(sRtn);

        		this.atchFileId = objRtn.atchFileId;
        		this.workGroup = objRtn.workGroup;
        		var atchFileList = JSON.parse(objRtn.atchFileList);

        		var fileList = [];
        		for(var i=0;i<atchFileList.Rows.length;i++) {
        			var file = {
        				uniqueKey: atchFileList.Rows[i].fileTmpId,
        				originName: atchFileList.Rows[i].fileOriNm,
        				webPath: atchFileList.Rows[i].filePath,
        				size: atchFileList.Rows[i].fileSize
        			};
        			fileList.push(file);
        		}

        		this.downloadSetting(fileList);

        	}
        }

        this.callBackEvt = function(paramObj) {
        	console.log(paramObj.uploadName + ": 파일추가 완료.");
        };

        this.fileUploadTran = function() {

        	var strSvcId    = "upload";						// 트랜잭션 ID (콜백에서 ID로 구분하여 처리)
        	var strSvcUrl   = "common/fileUpload.do";		// 요청 URL (http://서버도메인/ <- 프로젝트셋팅에서 지정)
        	var inData      = "dsFileList=dsFileList:U";		// 요청 시 넘겨주는 데이터셋 (서버에서 받을명칭=실제데이터셋명)
        	var outData     = "dsFileId=dsFileId";			// 응답시 받는 데이터셋 (실제데이터셋명=서버에서 응답하는 데이터셋명)
        	var strArg      = "";							// 요청시 넘겨주는 파라메터(서버에서 받을명칭=파라메터값)
        	var callBackFnc = "fnCallback";					// 콜백 function명
        	var isAsync   	= true;							// 동기, 비동기 (기본 비동기)

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_alert.addEventHandler("onclick",this.btn_alert_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_page_popup.addEventHandler("onclick",this.btn_page_popup_onclick,this);
            this.btn_transaction.addEventHandler("onclick",this.btn_transaction_onclick,this);
            this.sta00_00_00.addEventHandler("onclick",this.sta00_00_00_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_01.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_01_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_00_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_01_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_00_00_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_01_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_01_00_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_00_00_00_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00_00_00_00_00_01_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00_00_00_00_00_01_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00_00_00_00_00_01_00_01.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00_00_00_00_00_01_00_01_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00_00_00_00_00_01_00_01_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_01_00_00_00_00_00_01_00_01_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AddLocalFileDirectly",this.RaonkUpload00_RAONKUPLOAD_AddLocalFileDirectly,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AddLocalFileDirectlyEx",this.RaonkUpload00_RAONKUPLOAD_AddLocalFileDirectlyEx,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload00_RAONKUPLOAD_AfterAddAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload00_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterDeleteFile",this.RaonkUpload00_RAONKUPLOAD_AfterDeleteFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AgentInstall",this.RaonkUpload00_RAONKUPLOAD_AgentInstall,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_Alert",this.RaonkUpload00_RAONKUPLOAD_Alert,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload00_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeCreation",this.RaonkUpload00_RAONKUPLOAD_BeforeCreation,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeDeleteFile",this.RaonkUpload00_RAONKUPLOAD_BeforeDeleteFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeDownloadFile",this.RaonkUpload00_RAONKUPLOAD_BeforeDownloadFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeOpenFile",this.RaonkUpload00_RAONKUPLOAD_BeforeOpenFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeUpload",this.RaonkUpload00_RAONKUPLOAD_BeforeUpload,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload00_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CustomAction",this.RaonkUpload00_RAONKUPLOAD_CustomAction,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_DeleteAllFile",this.RaonkUpload00_RAONKUPLOAD_DeleteAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_DownloadCancel",this.RaonkUpload00_RAONKUPLOAD_DownloadCancel,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_DownloadCompleteAllFile",this.RaonkUpload00_RAONKUPLOAD_DownloadCompleteAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_DownloadCompleteFile",this.RaonkUpload00_RAONKUPLOAD_DownloadCompleteFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_GetExcelData",this.RaonkUpload00_RAONKUPLOAD_GetExcelData,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_GetZipFileInfo",this.RaonkUpload00_RAONKUPLOAD_GetZipFileInfo,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_InitAddAllFile",this.RaonkUpload00_RAONKUPLOAD_InitAddAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload00_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnLanguageDefinition",this.RaonkUpload00_RAONKUPLOAD_OnLanguageDefinition,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_SelectItem",this.RaonkUpload00_RAONKUPLOAD_SelectItem,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_TransferStatusChange",this.RaonkUpload00_RAONKUPLOAD_TransferStatusChange,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload00_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadingCancel",this.RaonkUpload00_RAONKUPLOAD_UploadingCancel,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.btn_upload_add.addEventHandler("onclick",this.btn_upload_add_onclick,this);
            this.btn_upload_del.addEventHandler("onclick",this.btn_upload_del_onclick,this);
            this.btn_upload_alldel.addEventHandler("onclick",this.btn_upload_alldel_onclick,this);
            this.btn_download.addEventHandler("onclick",this.btn_download_onclick,this);
            this.btn_download_setting.addEventHandler("onclick",this.btn_download_setting_onclick,this);
            this.btn_alldownload.addEventHandler("onclick",this.btn_alldownload_onclick,this);
            this.btn_reupload.addEventHandler("onclick",this.btn_reupload_onclick,this);
            this.btn_upload_popup.addEventHandler("onclick",this.btn_upload_popup_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.btn_read.addEventHandler("onclick",this.btn_read_onclick,this);
            this.btn_report.addEventHandler("onclick",this.btn_report_onclick,this);
            this.btn_ocr.addEventHandler("onclick",this.btn_ocr_onclick,this);
            this.btn_hpauth.addEventHandler("onclick",this.btn_hpauth_onclick,this);
            this.btn_bknum.addEventHandler("onclick",this.btn_bknum_onclick,this);
            this.btn_sms.addEventHandler("onclick",this.btn_sms_onclick,this);
            this.btn_mail.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_inside_mail.addEventHandler("onclick",this.btn_inside_mail_onclick,this);
            this.han_edt.addEventHandler("onkeyup",this.han_edt_onkeyup,this);
        };
        this.loadIncludeScript("cmmFn.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
