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
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KORN_MSGE\" type=\"STRING\" size=\"256\"/><Column id=\"MSGE_FLAG_CD\" type=\"STRING\" size=\"3\"/><Column id=\"msgTitle\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MSGE_CD\">msg.err.mdicount.max</Col><Col id=\"KORN_MSGE\">화면은 {0}개 까지만 실행 가능합니다. 화면을 닫고 다시 실행해주세요.</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">confirm.logout</Col><Col id=\"KORN_MSGE\">로그아웃 하시겠습니까?</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"msgTitle\">확인</Col></Row><Row><Col id=\"MSGE_CD\">confirm.before.movepage</Col><Col id=\"KORN_MSGE\">변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"msgTitle\">확인</Col></Row><Row><Col id=\"MSGE_CD\">confirm.before.removeallpage</Col><Col id=\"KORN_MSGE\">전체 화면을 닫겠습니까?</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"msgTitle\">확인</Col></Row><Row><Col id=\"MSGE_CD\">msg.save.nochange</Col><Col id=\"KORN_MSGE\">변경된 내역이 없습니다.</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">msg.confirm</Col><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"msgTitle\">확인</Col></Row><Row><Col id=\"MSGE_CD\">confirm.save</Col><Col id=\"KORN_MSGE\">저장 하시겠습니까?</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"msgTitle\">확인</Col></Row><Row><Col id=\"MSGE_CD\">msg.nomenu</Col><Col id=\"MSGE_FLAG_CD\">INF</Col><Col id=\"msgTitle\">알림</Col><Col id=\"KORN_MSGE\">해당 Menu가 존재하지 않습니다!</Col></Row><Row><Col id=\"MSGE_CD\">confirm.before.reopen</Col><Col id=\"KORN_MSGE\">변경된 데이터가 있습니다. 화면을 다시 여시겠습니까?</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col><Col id=\"msgTitle\">확인</Col></Row><Row><Col id=\"MSGE_CD\">msg.err.mdicount.max</Col><Col id=\"KORN_MSGE\">화면은 {0}개 까지만 실행 가능합니다. 화면을 닫고 다시 실행해주세요.</Col><Col id=\"MSGE_FLAG_CD\">INF</Col><Col id=\"msgTitle\">알림</Col></Row><Row><Col id=\"MSGE_CD\">msg.server.error</Col><Col id=\"KORN_MSGE\">서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">msg.database.error</Col><Col id=\"KORN_MSGE\">데이터베이스 오류입니다. \\n에러코드 : {0}</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">msg.session.timeout</Col><Col id=\"KORN_MSGE\">세션이 종료되었습니다. 다시 로그인해주세요.</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col><Col id=\"msgTitle\">경고</Col></Row><Row><Col id=\"MSGE_CD\">msg.exist</Col><Col id=\"KORN_MSGE\">{0} 가(이) 존재합니다.</Col><Col id=\"MSGE_FLAG_CD\">INF</Col><Col id=\"msgTitle\">알림</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ENGL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ENGL_DISPLAY_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNADD\" type=\"STRING\" size=\"32\"/><Column id=\"DISPLAY_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PARM\" type=\"STRING\" size=\"256\"/><Column id=\"CMMNBTNSAVE\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_FLAG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNINIT\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNPRINT\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNEXCELDOWN\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNSEARCH\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNDEL\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_HELP_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10100000</Col><Col id=\"MENU_NM\">디자인</Col><Col id=\"MENU_LV\">0</Col><Col id=\"HIPO_MENU_ID\"/><Col id=\"PRGM_ID\">10100000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"DISPLAY_PATH\">디자인</Col></Row><Row><Col id=\"MENU_ID\">10101000</Col><Col id=\"MENU_NM\">템플릿</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10100000</Col><Col id=\"PRGM_ID\">10100000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿</Col></Row><Row><Col id=\"MENU_ID\">10101001</Col><Col id=\"MENU_NM\">Single-Detail</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101001</Col><Col id=\"USED_YN\">Y</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp01.xfdl</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Single-Detail</Col><Col id=\"PRGM_PATH\">design::template/Temp01.xfdl</Col><Col id=\"PRGM_NM\">Single-Detail</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"PRGM_FILE_NM\">Temp01.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_ID\">10101002</Col><Col id=\"MENU_NM\">List-Detail1</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101002</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp03.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnExcelUp\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; List-Detail1</Col><Col id=\"PRGM_PATH\">design::template/Temp03.xfdl</Col><Col id=\"PRGM_NM\">List-Detail1</Col><Col id=\"MENU_ORDR\">2</Col><Col id=\"PRGM_FILE_NM\">Temp03.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_ID\">10101003</Col><Col id=\"MENU_NM\">List-Detail2</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101003</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp04.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; List-Detail2</Col><Col id=\"PRGM_PATH\">design::template/Temp04.xfdl</Col><Col id=\"PRGM_NM\">List-Detail2</Col><Col id=\"MENU_ORDR\">3</Col><Col id=\"PRGM_FILE_NM\">Temp04.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_ID\">10101004</Col><Col id=\"MENU_NM\">Master-Detail</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101004</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp05.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Master-Detail</Col><Col id=\"PRGM_PATH\">design::template/Temp05.xfdl</Col><Col id=\"PRGM_NM\">Master-Detail</Col><Col id=\"MENU_ORDR\">4</Col><Col id=\"PRGM_FILE_NM\">Temp05.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_ID\">10101005</Col><Col id=\"MENU_NM\">Master-Detail-V</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101005</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp06.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Master-Detail-V</Col><Col id=\"PRGM_PATH\">design::template/Temp06.xfdl</Col><Col id=\"PRGM_NM\">Master-Detail-V</Col><Col id=\"MENU_ORDR\">5</Col><Col id=\"PRGM_FILE_NM\">Temp06.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_ID\">10101006</Col><Col id=\"MENU_NM\">Master-Detail-H</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101006</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp07.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Master-Detail-H</Col><Col id=\"PRGM_PATH\">design::template/Temp07.xfdl</Col><Col id=\"PRGM_NM\">Master-Detail-H</Col><Col id=\"MENU_ORDR\">6</Col><Col id=\"PRGM_FILE_NM\">Temp07.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_NM\">Master-Detail-VVV</Col><Col id=\"MENU_ID\">10101010</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101010</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp11.xfdl</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Master-Detail-VVV</Col><Col id=\"PRGM_PATH\">design::template/Temp11.xfdl</Col><Col id=\"PRGM_NM\">Master-Detail-VVV</Col><Col id=\"MENU_ORDR\">7</Col><Col id=\"PRGM_FILE_NM\">Temp11.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_NM\">Master-List-Detail-VHH</Col><Col id=\"MENU_ID\">10101011</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101011</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp12.xfdl</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Master-List-Detail-VHH</Col><Col id=\"PRGM_PATH\">design::template/Temp12.xfdl</Col><Col id=\"PRGM_NM\">Master-List-Detail-VHH</Col><Col id=\"MENU_ORDR\">8</Col><Col id=\"PRGM_FILE_NM\">Temp12.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_NM\">Master-List-Detail-HVV</Col><Col id=\"MENU_ID\">10101012</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101012</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp13.xfdl</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Master-List-Detail-HVV</Col><Col id=\"PRGM_PATH\">design::template/Temp13.xfdl</Col><Col id=\"PRGM_NM\">Master-List-Detail-HVV</Col><Col id=\"MENU_ORDR\">9</Col><Col id=\"PRGM_FILE_NM\">Temp13.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_NM\">Tree</Col><Col id=\"MENU_ID\">10101013</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101013</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp14.xfdl</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Tree</Col><Col id=\"PRGM_PATH\">design::template/Temp14.xfdl</Col><Col id=\"PRGM_NM\">Tree</Col><Col id=\"MENU_ORDR\">10</Col><Col id=\"PRGM_FILE_NM\">Temp14.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_NM\">Shuttle</Col><Col id=\"MENU_ID\">10101014</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101014</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp15.xfdl</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Shuttle</Col><Col id=\"PRGM_PATH\">design::template/Temp15.xfdl</Col><Col id=\"PRGM_NM\">Shuttle</Col><Col id=\"MENU_ORDR\">11</Col><Col id=\"PRGM_FILE_NM\">Temp15.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_NM\">Tab</Col><Col id=\"MENU_ID\">10101015</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101015</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp16.xfdl</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Tab</Col><Col id=\"PRGM_PATH\">design::template/Temp16.xfdl</Col><Col id=\"PRGM_NM\">Tab</Col><Col id=\"MENU_ORDR\">12</Col><Col id=\"PRGM_FILE_NM\">Temp16.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_NM\">Popup</Col><Col id=\"MENU_ID\">10101016</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101016</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp17.xfdl</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col><Col id=\"MODULE_CD\">DN</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">디자인 &gt; 템플릿 &gt; Popup</Col><Col id=\"PRGM_PATH\">design::template/Temp17.xfdl</Col><Col id=\"PRGM_NM\">Popup</Col><Col id=\"MENU_ORDR\">13</Col><Col id=\"PRGM_FILE_NM\">Temp17.xfdl</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_ID\">10300000</Col><Col id=\"MENU_NM\">개발표준</Col><Col id=\"MENU_LV\">0</Col><Col id=\"PRGM_ID\">10300000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col><Col id=\"MODULE_CD\">SP</Col><Col id=\"DISPLAY_PATH\">개발표준</Col></Row><Row><Col id=\"MENU_ID\">10301000</Col><Col id=\"MENU_NM\">공통 기능</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10300000</Col><Col id=\"PRGM_ID\">10300000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col><Col id=\"MODULE_CD\">SP</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능</Col></Row><Row><Col id=\"MENU_ID\">10301001</Col><Col id=\"MENU_NM\">스크립트 표준</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301001</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleScript.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col><Col id=\"MODULE_CD\">SP</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능 &gt; 스크립트 표준</Col><Col id=\"PRGM_PATH\">sample::sampleScript.xfdl</Col><Col id=\"PRGM_NM\">스크립트 샘플(기능X)</Col><Col id=\"PARM\"/><Col id=\"PRGM_FILE_NM\">sampleScript.xfdl</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_ID\">10301002</Col><Col id=\"MENU_NM\">트랜잭션</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301002</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleTransaction.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col><Col id=\"MODULE_CD\">SP</Col><Col id=\"CMMNBTNDEL\">1</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNSAVE\">1</Col><Col id=\"CMMNBTNADD\">1</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능 &gt; 트랜잭션</Col><Col id=\"PRGM_PATH\">sample::sampleTransaction.xfdl</Col><Col id=\"PRGM_NM\">트랜잭션 샘플</Col><Col id=\"PARM\"/><Col id=\"PRGM_FILE_NM\">sampleTransaction.xfdl</Col><Col id=\"MENU_ORDR\">2</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col></Row><Row><Col id=\"MENU_ID\">10301003</Col><Col id=\"MENU_NM\">팝업</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301003</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::samplePopup.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col><Col id=\"MODULE_CD\">SP</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능 &gt; 팝업</Col><Col id=\"PRGM_PATH\">sample::samplePopup.xfdl</Col><Col id=\"PRGM_NM\">팝업샘플</Col><Col id=\"PARM\"/><Col id=\"PRGM_FILE_NM\">samplePopup.xfdl</Col><Col id=\"MENU_ORDR\">3</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"CMMNBTNDEL\">0</Col></Row><Row><Col id=\"MENU_ID\">10301004</Col><Col id=\"MENU_NM\">메세지</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301004</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleMessage.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col><Col id=\"MODULE_CD\">SP</Col><Col id=\"SEARCH_SCOPE_CD\">10</Col><Col id=\"DISPLAY_PATH\">개발표준 &gt; 공통 기능 &gt; 메세지</Col><Col id=\"PRGM_PATH\">sample::sampleMessage.xfdl</Col><Col id=\"PRGM_NM\">메세지 샘플</Col><Col id=\"PARM\"/><Col id=\"CMMNBTNADD\">0</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"CMMNBTNSEARCH\">1</Col><Col id=\"PRGM_FILE_NM\">sampleMessage.xfdl</Col><Col id=\"MENU_ORDR\">4</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"grp\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/><Column id=\"upmenu\" type=\"STRING\" size=\"256\"/><Column id=\"bandtype\" type=\"STRING\" size=\"256\"/><Column id=\"curselect\" type=\"STRING\" size=\"256\"/><Column id=\"enableMenu\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"grp\">sort</Col><Col id=\"id\">sort</Col><Col id=\"level\">0</Col><Col id=\"caption\">헤더정렬사용</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">sort</Col><Col id=\"id\">sortfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">헤더정렬사용안함</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">false</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_ORDR\" type=\"int\" size=\"4\"/><Column id=\"MODULE_CD\" type=\"string\" size=\"32\"/><Column id=\"PRGM_FULL_PATH\" type=\"string\" size=\"32\"/><Column id=\"SYTM_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM_EN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"string\" size=\"32\"/><Column id=\"PRGM_PATH\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"SORT_ORDR\">1</Col><Col id=\"MODULE_CD\">SP</Col><Col id=\"PRGM_FULL_PATH\">sample::sampleScript.xfdl</Col><Col id=\"SYTM_FLAG_CD\">PC</Col><Col id=\"MENU_ID\">10301001</Col><Col id=\"MENU_NM\">스크립트 표준</Col><Col id=\"PRGM_ID\">10301001</Col><Col id=\"PRGM_PATH\">sample::sampleScript.xfdl</Col></Row><Row><Col id=\"SORT_ORDR\">2</Col><Col id=\"MODULE_CD\">SP</Col><Col id=\"PRGM_FULL_PATH\">sample::sampleTransaction.xfdl</Col><Col id=\"SYTM_FLAG_CD\">PC</Col><Col id=\"MENU_ID\">10301002</Col><Col id=\"MENU_NM\">트랜잭션</Col><Col id=\"PRGM_ID\">10301002</Col><Col id=\"PRGM_PATH\">sample::sampleTransaction.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsAddBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_STYLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gvSytmFlagCd","PC");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("application");
            this.set_screenid("desktop");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","900",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("Desktop MDI");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_openalign("center middle");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("vfrs",null,null,null,null,null,null,this);
            frame0.set_showtitleicon("false");
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            frame0.set_separatesize("*,0,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("frmLogin",null,null,null,null,null,null,"",frame0);
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            frame1.set_showtitleicon("false");
            frame0.addChild(frame1.name, frame1);

            var frame2 = new ChildFrame("frmTop",null,null,null,null,null,null,"",frame0);
            frame2.set_showtitleicon("false");
            frame2.set_showtitlebar("false");
            frame2.set_dragmovetype("none");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new HFrameSet("hfrs",null,null,null,null,null,null,frame0);
            frame3.set_separatesize("0,*");
            frame3.set_showtitlebar("false");
            frame3.set_showtitleicon("false");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("frmLeft",null,null,null,null,null,null,"",frame3);
            frame4.set_showtitlebar("false");
            frame4.set_dragmovetype("none");
            frame4.set_showtitleicon("false");
            frame3.addChild(frame4.name, frame4);

            var frame5 = new VFrameSet("vfrsWork",null,null,null,null,null,null,frame3);
            frame5.set_separatesize("42,*,0,0");
            frame5.set_showtitlebar("false");
            frame5.set_showtitleicon("false");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("frmMdi",null,null,null,null,null,null,"",frame5);
            frame6.set_showtitlebar("false");
            frame6.set_showtitleicon("false");
            frame6.set_dragmovetype("none");
            frame5.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("frmMain",null,null,null,null,null,null,"",frame5);
            frame7.set_showtitlebar("false");
            frame7.set_dragmovetype("none");
            frame7.set_showtitleicon("false");
            frame5.addChild(frame7.name, frame7);

            var frame8 = new FrameSet("frsWork",null,null,null,null,null,null,frame5);
            frame8.set_showtitlebar("false");
            frame8.set_showtitleicon("false");
            frame5.addChild(frame8.name, frame8);
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.application_onload,this);
            this.mainframe.addEventHandler("onsize",this.mainframe_onsize,this);
        };
        
        // script Compiler
        this.registerScript("application.xadl", function() {
        /**
        *  PcMdi 프로젝트
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
        this.gvRunMode  = "";					// 실행환경 S : Studio, L : local, D : 개발, R : 운영

        /* 각 프레임에 해당되는 객체 참조 변수 */
        this.gvVfrs;
        this.gvFrmLogin;
        this.gvFrmTop ;
        this.gvHfrs;
        this.gvFrmLeft;
        this.gvVfrsWork;
        this.gvFrmMdi;
        this.gvFrmMain;
        this.gvFrsWork;

        /* 프레임 관련 변수*/
        this.LOGIN_FORM_PATH = "frame::frmLogin.xfdl";
        this.TOP_FORM_PATH   = "frame::frmTop.xfdl";
        this.LEFT_FORM_PATH  = "frame::frmLeft.xfdl";
        this.WORK_FORM_PATH  = "frame::frmWork.xfdl";
        this.MDI_FORM_PATH   = "frame::frmMdi.xfdl";
        this.MAIN_FORM_PATH  = "frame::frmMain.xfdl";

        this.gvOpenMaxFrame = 10; 				// 열리는 프레임 최대 갯수
        this.gvFrameStat = "login";				// 프레임상태(login,main,sub)
        this.gvCloseCheck;						// 화면 닫을때 체크할지 여부
        this.gvTitlebarHeight = 0;				// 차일드프레임 타이틀바 높이

        /* grid 관련 */
        this.gvUseGridContextMenu = true;		// 그리드 Context Menu 사용 여부

        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        this.application_onload = function(obj,e)
        {
        	// QuikView 여부 설정
        	nexacro.setEnvironmentVariable("evQuickView", "N");

        	//trace ("======================== PcMdi 프로젝트(PC) Start ==============================");

        	// 각 프레임에 해당되는 객체 참조 변수 설정
        	this.gvVfrs = this.mainframe.vfrs;
        	this.gvFrmLogin = this.mainframe.vfrs.frmLogin;
        	this.gvFrmTop = this.mainframe.vfrs.frmTop;
        	this.gvHfrs = this.mainframe.vfrs.hfrs;
        	this.gvFrmLeft 	= this.mainframe.vfrs.hfrs.frmLeft;
        	this.gvVfrsWork = this.mainframe.vfrs.hfrs.vfrsWork;
        	this.gvFrmMain = this.mainframe.vfrs.hfrs.vfrsWork.frmMain;
        	this.gvFrsWork = this.mainframe.vfrs.hfrs.vfrsWork.frsWork;
        	this.gvFrmMdi	= this.mainframe.vfrs.hfrs.vfrsWork.frmMdi;

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

        		// Runtime 실행할때 TitleBar 크기(30px) 만큼 높이를 조정
        		this.mainframe.set_height(932);
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

        	// 로그인 화면 보여주기
        	this.gvFrmLogin.set_formurl(this.LOGIN_FORM_PATH);
        };

        this.mainframe_onsize = function(obj,e)
        {
        	var objFrame = nexacro.getPopupFrames();
        	var nLeft = 0;
        	var nTop = 0;
        	for (var i = objFrame.length-1; i >= 0; i--)
        	{
        		if (objFrame[i]._modaltype == "center")
        		{
        			nLeft = (nexacro.getApplication().mainframe.width - objFrame[i].width)/2;
        			nTop = (nexacro.getApplication().mainframe.height - objFrame[i].height)/2;
        			objFrame[i].move(nLeft, nTop);
        		}
        	}
        };

        });
        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::test.xcss");
        this.loadIncludeScript("application.xadl");
    };
}
)();
