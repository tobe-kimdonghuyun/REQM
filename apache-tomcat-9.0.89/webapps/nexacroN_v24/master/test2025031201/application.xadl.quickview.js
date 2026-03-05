(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KORN_MSGE\" type=\"STRING\" size=\"256\"/><Column id=\"MSGE_FLAG_CD\" type=\"STRING\" size=\"3\"/><Column id=\"msgTitle\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MSGE_CD\">msg.server.error</Col><Col id=\"KORN_MSGE\">서버 오류입니다.\\n관리자에게 문의하세요.</Col><Col id=\"MSGE_FLAG_CD\">ERR</Col><Col id=\"msgTitle\">에러</Col></Row><Row><Col id=\"MSGE_CD\">msg.session.timeout</Col><Col id=\"KORN_MSGE\">세션이 종료되었습니다. 다시 로그인해주세요.</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">confirm.exit</Col><Col id=\"msgTitle\">확인</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"KORN_MSGE\">종료 하시겠습니까?</Col></Row><Row><Col id=\"MSGE_CD\">confirm.logout</Col><Col id=\"KORN_MSGE\">로그아웃 하시겠습니까?</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"msgTitle\">확인</Col></Row><Row><Col id=\"MSGE_CD\">confirm.before.movepage</Col><Col id=\"KORN_MSGE\">변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"msgTitle\">확인</Col></Row><Row><Col id=\"MSGE_CD\">msg.save.nochange</Col><Col id=\"KORN_MSGE\">변경된 내역이 없습니다.</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">msg.err.validator</Col><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">msg.err.validator.required</Col><Col id=\"KORN_MSGE\">{0} 은(는) 필수 입력 항목입니다.</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">msg.err.tran</Col><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">msg.general</Col><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"MSGE_FLAG_CD\">INF</Col><Col id=\"msgTitle\">알림</Col></Row><Row><Col id=\"MSGE_CD\">confirm.save</Col><Col id=\"KORN_MSGE\">저장 하시겠습니까?</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"msgTitle\">확인</Col></Row><Row><Col id=\"MSGE_CD\">msg.exist</Col><Col id=\"KORN_MSGE\">{0} 가(이) 존재합니다.</Col><Col id=\"MSGE_FLAG_CD\">INF</Col><Col id=\"msgTitle\">알림</Col></Row><Row><Col id=\"MSGE_CD\">msg.database.error</Col><Col id=\"KORN_MSGE\">데이터베이스 오류입니다. \\n에러코드 : {0}</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ENGL_NM\" type=\"string\" size=\"32\"/><Column id=\"ENGL_DISPLAY_PATH\" type=\"string\" size=\"32\"/><Column id=\"MODULE_CD\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNADD\" type=\"string\" size=\"32\"/><Column id=\"DISPLAY_PATH\" type=\"string\" size=\"32\"/><Column id=\"SYTM_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"MENU_ORDR\" type=\"int\" size=\"4\"/><Column id=\"PARM\" type=\"STRING\" size=\"256\"/><Column id=\"CMMNBTNSAVE\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"int\" size=\"4\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"MENU_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNINIT\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNPRINT\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNEXCELDOWN\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNSEARCH\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNDEL\" type=\"string\" size=\"32\"/><Column id=\"SortOrder\" type=\"string\" size=\"32\"/><Column id=\"PRGM_HELP_FLAG\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MODULE_CD\">SP</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">개발표준</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">2</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10300000M</Col><Col id=\"MENU_LV\">0</Col><Col id=\"MENU_PATH\">10300000M</Col><Col id=\"MENU_FLAG_CD\">M</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">2</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">개발표준</Col><Col id=\"HIPO_MENU_ID\">0</Col></Row><Row><Col id=\"MODULE_CD\">SP</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10301000M</Col><Col id=\"MENU_LV\">1</Col><Col id=\"MENU_PATH\">10300000M,10301000M</Col><Col id=\"MENU_FLAG_CD\">M</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">002|001</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">공통 기능</Col><Col id=\"HIPO_MENU_ID\">10300000M</Col></Row><Row><Col id=\"MODULE_CD\">SP</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능 &gt; 스크립트 표준</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10301002M</Col><Col id=\"MENU_URL\">sample::sampleScript.xfdl</Col><Col id=\"PRGM_FILE_NM\">sampleScript.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10300000M,10301000M,10301002M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">002|001|001</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">스크립트 표준</Col><Col id=\"HIPO_MENU_ID\">10301000M</Col><Col id=\"PRGM_ID\">M000000038</Col><Col id=\"PRGM_PATH\">sample::sampleScript.xfdl</Col></Row><Row><Col id=\"MODULE_CD\">SP</Col><Col id=\"CMMNBTNADD\">1</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능 &gt; 트랜잭션</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">2</Col><Col id=\"CMMNBTNSAVE\">1</Col><Col id=\"MENU_ID\">10301001M</Col><Col id=\"MENU_URL\">sample::sampleTransaction.xfdl</Col><Col id=\"PRGM_FILE_NM\">sampleTransaction.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10300000M,10301000M,10301001M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">002|001|002</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">트랜잭션</Col><Col id=\"HIPO_MENU_ID\">10301000M</Col><Col id=\"PRGM_ID\">M000000040</Col><Col id=\"PRGM_PATH\">sample::sampleTransaction.xfdl</Col></Row><Row><Col id=\"MODULE_CD\">SP</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능 &gt; 메세지</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">3</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10301017M</Col><Col id=\"MENU_URL\">sample::sampleMessage.xfdl</Col><Col id=\"PRGM_FILE_NM\">sampleMessage.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10300000M,10301000M,10301017M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">1</Col><Col id=\"SortOrder\">002|001|003</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">메세지</Col><Col id=\"HIPO_MENU_ID\">10301000M</Col><Col id=\"PRGM_ID\">P000000026</Col><Col id=\"PRGM_PATH\">sample::sampleMessage.xfdl</Col></Row><Row><Col id=\"MODULE_CD\">SP</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능 &gt; 팝업</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">3</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10301003M</Col><Col id=\"MENU_URL\">sample::samplePopup.xfdl</Col><Col id=\"PRGM_FILE_NM\">samplePopup.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10300000M,10301000M,10301003M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">002|001|003</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">팝업</Col><Col id=\"HIPO_MENU_ID\">10301000M</Col><Col id=\"PRGM_ID\">M000000021</Col><Col id=\"PRGM_PATH\">sample::samplePopup.xfdl</Col></Row><Row><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">3</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10100000M</Col><Col id=\"MENU_LV\">0</Col><Col id=\"MENU_PATH\">10100000M</Col><Col id=\"MENU_FLAG_CD\">M</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">3</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">디자인</Col><Col id=\"HIPO_MENU_ID\">0</Col></Row><Row><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">2</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10101000M</Col><Col id=\"MENU_LV\">1</Col><Col id=\"MENU_PATH\">10100000M,10101000M</Col><Col id=\"MENU_FLAG_CD\">M</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">003|002</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">템플릿</Col><Col id=\"HIPO_MENU_ID\">10100000M</Col></Row><Row><Col id=\"MENU_ENGL_NM\">FoldingList</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; FoldingList</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10101001M</Col><Col id=\"MENU_URL\">design::Template/Temp15.xfdl</Col><Col id=\"PRGM_FILE_NM\">Temp15.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10100000M,10101000M,10101001M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">003|002|001</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">FoldingList</Col><Col id=\"HIPO_MENU_ID\">10101000M</Col><Col id=\"PRGM_ID\">M000000010</Col><Col id=\"PRGM_PATH\">design::Template/Temp15.xfdl</Col></Row><Row><Col id=\"MENU_ENGL_NM\">SingleDetail</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; SingleDetail</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">2</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10101002M</Col><Col id=\"MENU_URL\">design::Template/Temp16.xfdl</Col><Col id=\"PRGM_FILE_NM\">Temp16.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10100000M,10101000M,10101002M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">003|002|002</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">SingleDetail</Col><Col id=\"HIPO_MENU_ID\">10101000M</Col><Col id=\"PRGM_ID\">M000000011</Col><Col id=\"PRGM_PATH\">design::Template/Temp16.xfdl</Col></Row><Row><Col id=\"MENU_ENGL_NM\">ListDetail(List)</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; ListDetail(List)</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">3</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10101003M</Col><Col id=\"MENU_URL\">design::Template/Temp17.xfdl</Col><Col id=\"PRGM_FILE_NM\">Temp17.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10100000M,10101000M,10101003M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">003|002|003</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">ListDetail(List)</Col><Col id=\"HIPO_MENU_ID\">10101000M</Col><Col id=\"PRGM_ID\">M000000012</Col><Col id=\"PRGM_PATH\">design::Template/Temp17.xfdl</Col></Row><Row><Col id=\"MENU_ENGL_NM\">SearchDetail</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; SearchDetail</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">4</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10101007M</Col><Col id=\"MENU_URL\">design::Template/Temp21.xfdl</Col><Col id=\"PRGM_FILE_NM\">Temp21.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10100000M,10101000M,10101007M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">003|002|004</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">SearchDetail</Col><Col id=\"HIPO_MENU_ID\">10101000M</Col><Col id=\"PRGM_ID\">M000000042</Col><Col id=\"PRGM_PATH\">design::Template/Temp21.xfdl</Col></Row><Row><Col id=\"MENU_ENGL_NM\">SearchDetailList</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; SearchDetailList</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">5</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">101010087M</Col><Col id=\"MENU_URL\">design::Template/Temp22.xfdl</Col><Col id=\"PRGM_FILE_NM\">Temp22.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10100000M,10101000M,101010087M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">003|002|005</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">SearchDetailList</Col><Col id=\"HIPO_MENU_ID\">10101000M</Col><Col id=\"PRGM_ID\">M000000043</Col><Col id=\"PRGM_PATH\">design::Template/Temp22.xfdl</Col></Row><Row><Col id=\"MENU_ENGL_NM\">Tab</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Tab</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">6</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10101004M</Col><Col id=\"MENU_URL\">design::Template/Temp18.xfdl</Col><Col id=\"PRGM_FILE_NM\">Temp18.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10100000M,10101000M,10101004M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">003|002|006</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">Tab</Col><Col id=\"HIPO_MENU_ID\">10101000M</Col><Col id=\"PRGM_ID\">M000000013</Col><Col id=\"PRGM_PATH\">design::Template/Temp18.xfdl</Col></Row><Row><Col id=\"MENU_ENGL_NM\">Popup</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Popup</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">7</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10101005M</Col><Col id=\"MENU_URL\">design::Template/Temp19P.xfdl</Col><Col id=\"PRGM_FILE_NM\">Temp19P.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10100000M,10101000M,10101005M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">003|002|007</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">Popup</Col><Col id=\"HIPO_MENU_ID\">10101000M</Col><Col id=\"PRGM_ID\">M000000014</Col><Col id=\"PRGM_PATH\">design::Template/Temp19P.xfdl</Col></Row><Row><Col id=\"MENU_ENGL_NM\">Shuttle</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Shuttle</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">8</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">10101006M</Col><Col id=\"MENU_URL\">design::Template/Temp20.xfdl</Col><Col id=\"PRGM_FILE_NM\">Temp20.xfdl</Col><Col id=\"MENU_LV\">2</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"MENU_PATH\">10100000M,10101000M,10101006M</Col><Col id=\"MENU_FLAG_CD\">P</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"SortOrder\">003|002|008</Col><Col id=\"PRGM_HELP_FLAG\"/><Col id=\"MENU_NM\">Shuttle</Col><Col id=\"HIPO_MENU_ID\">10101000M</Col><Col id=\"PRGM_ID\">M000000015</Col><Col id=\"PRGM_PATH\">design::Template/Temp20.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gvSytmFlagCd","MO");
            this._addVariable("gvIsLogin","N");
            this._addVariable("gvOpenMenuId","");
            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("application");
            this.set_screenid("mobile");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","480","768",null,null,this);
            mainframe.set_showtitlebar("false");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("Mobile");
            mainframe.set_resizable("true");
            mainframe.set_openalign("center middle");
            mainframe.set_showcascadetitletext("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("application.xadl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	application
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT				application
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
         ************************************************************************************************/
        this.gvOs = system.osversion.toUpperCase();
         /************************************************************************************************
         * application EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.application_onload = function(obj,e)
        {
        	var sRunMode = "S";  // S : Studio, L : local, D : 개발, R : 운영
        	var objEnv	 = nexacro.getEnvironment();
        	var objSrv   = objEnv.services["svcUrl"];

        	// 런타임 접속
        	if (system.navigatorname == "nexacro")
        	{
        		var sXadl = nexacro.getProjectPath();
        		// 로컬(Studio)
        		if (sXadl.indexOf("file://") != -1)
        		{
        			sRunMode = "S";
        			this.mainframe.set_titletext("로컬(Studio) - " + this.mainframe.titletext);
        		}

        		if (this.gvOs.indexOf("WINDOWS") > -1)
        		{
        			this.mainframe.set_showtitlebar(true);
        		}
        		// Runtime 실행할때 border 보이도록 설정
        		this.mainframe.set_border("1px solid #111111");
        	}
        	else 	//WEB 접속
        	{
        		var urlPath = window.location.protocol + "//" + window.location.host;
        		//서비스  URL 세팅
         		objSrv.set_url(urlPath+"/");

        		// 로컬(웹)
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 )
        		{
        			sRunMode = "L";
        			this.mainframe.set_titletext("로컬(웹)  - " + this.mainframe.titletext);
        		}
        	}
        	this.gvRunMode = sRunMode;
         	trace("========== 접속경로 : " + nexacro.getProjectPath() + " / 실행환경(nRunMode) : " + this.gvRunMode + " / 서비스URL : " + objSrv.url + " ================");

        };
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/



        });
		this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("application.xadl");
    };
}
)();
