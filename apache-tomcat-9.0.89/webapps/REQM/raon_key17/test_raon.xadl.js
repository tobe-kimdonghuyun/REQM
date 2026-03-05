(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userInnb\" type=\"STRING\" size=\"256\"/><Column id=\"userPasswEnc\" type=\"STRING\" size=\"256\"/><Column id=\"eduDgtlOpsUserScCd\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"passwInitYn\" type=\"STRING\" size=\"256\"/><Column id=\"ThtsBndeJoinYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"userId\">test</Col><Col id=\"userNm\">가주상</Col><Col id=\"userPasswEnc\">11111</Col><Col id=\"userInnb\">K10S20220000177515</Col><Col id=\"eduDgtlOpsUserScCd\">1</Col><Col id=\"emlAddr\">1@naver.com</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuNmEN\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"sortNo\" type=\"STRING\" size=\"256\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"auth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000001</Col><Col id=\"menuNm\">메뉴1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000007</Col><Col id=\"menuNm\">메뉴1-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000001</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000008</Col><Col id=\"menuNm\">메뉴1-1-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000007</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-1-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000009</Col><Col id=\"menuNm\">메뉴1-1-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000007</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-1-2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000010</Col><Col id=\"menuNm\">메뉴1-1-3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000007</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-1-3</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000011</Col><Col id=\"menuNm\">메뉴1-1-4</Col><Col id=\"sortNo\">4</Col><Col id=\"upMenuId\">SN00000007</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-1-4</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000012</Col><Col id=\"menuNm\">메뉴1-1-5</Col><Col id=\"sortNo\">5</Col><Col id=\"upMenuId\">SN00000007</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-1-5</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000013</Col><Col id=\"menuNm\">메뉴1-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000001</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000014</Col><Col id=\"menuNm\">메뉴1-2-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000013</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-2-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000015</Col><Col id=\"menuNm\">메뉴1-2-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000013</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-2-2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000016</Col><Col id=\"menuNm\">메뉴1-2-3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000013</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-2-3</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000017</Col><Col id=\"menuNm\">메뉴1-2-4</Col><Col id=\"sortNo\">4</Col><Col id=\"upMenuId\">SN00000013</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu1-2-4</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000002</Col><Col id=\"menuNm\">메뉴2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000018</Col><Col id=\"menuNm\">메뉴2-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000002</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000019</Col><Col id=\"menuNm\">메뉴2-1-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000018</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-1-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000020</Col><Col id=\"menuNm\">메뉴2-1-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000018</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-1-2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000021</Col><Col id=\"menuNm\">메뉴2-1-3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000018</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-1-3</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000022</Col><Col id=\"menuNm\">메뉴2-1-4</Col><Col id=\"sortNo\">4</Col><Col id=\"upMenuId\">SN00000018</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-1-4</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000023</Col><Col id=\"menuNm\">메뉴2-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000002</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000024</Col><Col id=\"menuNm\">메뉴2-2-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000023</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-2-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000025</Col><Col id=\"menuNm\">메뉴2-2-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000023</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-2-2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000026</Col><Col id=\"menuNm\">메뉴2-2-3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000023</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-2-3</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000027</Col><Col id=\"menuNm\">메뉴2-3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000002</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-3</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000028</Col><Col id=\"menuNm\">메뉴2-3-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000027</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-3-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000029</Col><Col id=\"menuNm\">메뉴2-3-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000027</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu2-3-2</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000003</Col><Col id=\"menuId\">SN00000003</Col><Col id=\"menuNm\">메뉴3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu3</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000003</Col><Col id=\"menuId\">SN00000030</Col><Col id=\"menuNm\">메뉴3-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000003</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu3-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000003</Col><Col id=\"menuId\">SN00000031</Col><Col id=\"menuNm\">메뉴3-1-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000030</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu3-1-1</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000003</Col><Col id=\"menuId\">SN00000032</Col><Col id=\"menuNm\">메뉴3-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000003</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu3-2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000003</Col><Col id=\"menuId\">SN00000033</Col><Col id=\"menuNm\">메뉴3-2-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000032</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu3-2-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000003</Col><Col id=\"menuId\">SN00000034</Col><Col id=\"menuNm\">메뉴3-2-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000032</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu3-2-2</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000004</Col><Col id=\"menuNm\">메뉴4</Col><Col id=\"sortNo\">4</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000035</Col><Col id=\"menuNm\">메뉴4-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000004</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000036</Col><Col id=\"menuNm\">메뉴4-1-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000035</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-1-1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000037</Col><Col id=\"menuNm\">메뉴4-1-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000035</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-1-2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000038</Col><Col id=\"menuNm\">메뉴4-1-3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000035</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-1-3</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000039</Col><Col id=\"menuNm\">메뉴4-1-4</Col><Col id=\"sortNo\">4</Col><Col id=\"upMenuId\">SN00000035</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-1-4</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000040</Col><Col id=\"menuNm\">메뉴4-1-5</Col><Col id=\"sortNo\">5</Col><Col id=\"upMenuId\">SN00000035</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-1-5</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000041</Col><Col id=\"menuNm\">메뉴4-1-6</Col><Col id=\"sortNo\">6</Col><Col id=\"upMenuId\">SN00000035</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-1-6</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000042</Col><Col id=\"menuNm\">메뉴4-1-7</Col><Col id=\"sortNo\">7</Col><Col id=\"upMenuId\">SN00000035</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-1-7</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000043</Col><Col id=\"menuNm\">메뉴4-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000004</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000044</Col><Col id=\"menuNm\">메뉴4-2-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000043</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-2-1</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000045</Col><Col id=\"menuNm\">메뉴4-2-1-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000044</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-2-1-1</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000046</Col><Col id=\"menuNm\">메뉴4-2-1-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000044</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-2-1-2</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000047</Col><Col id=\"menuNm\">메뉴4-2-1-3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000044</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-2-1-3</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000048</Col><Col id=\"menuNm\">메뉴4-2-1-4</Col><Col id=\"sortNo\">4</Col><Col id=\"upMenuId\">SN00000044</Col><Col id=\"useYn\">Y</Col><Col id=\"menuNmEN\">menu4-2-1-4</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"winId\" type=\"STRING\" size=\"32\"/><Column id=\"menuId\" type=\"STRING\" size=\"32\"/><Column id=\"title\" type=\"STRING\" size=\"32\"/><Column id=\"pageUrl\" type=\"STRING\" size=\"256\"/><Column id=\"tokenId\" type=\"STRING\" size=\"256\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessageOld", this);
            obj._setContents("<ColumnInfo><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"msgText\" type=\"STRING\" size=\"256\"/><Column id=\"msgTextEN\" type=\"STRING\" size=\"256\"/><Column id=\"msgType\" type=\"STRING\" size=\"2\"/></ColumnInfo><Rows><Row><Col id=\"msgId\">msg.server.error</Col><Col id=\"msgText\">서버 오류입니다.\\n관리자에게 문의하세요.</Col><Col id=\"msgTextEN\">Server error. Please contact your administrator.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.server.error.msg</Col><Col id=\"msgText\">서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}</Col><Col id=\"msgTextEN\">The server received the following error message.s\\n{0}</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.session.timeout</Col><Col id=\"msgText\">세션이 종료되었습니다. 다시 로그인해주세요.</Col><Col id=\"msgTextEN\">Your session has expired, please login again.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.login.url.error</Col><Col id=\"msgText\">정상적인 경로로 접속하시기 바랍니다.</Col><Col id=\"msgTextEN\">invalid access! please, login first at www.tobesoft.com</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.login.error</Col><Col id=\"msgText\">해당하는 사용자 정보가 없습니다.</Col><Col id=\"msgTextEN\">No user found.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.call.nofile</Col><Col id=\"msgText\">해당하는 메뉴에 Program File이 등록되지 않았습니다.</Col><Col id=\"msgTextEN\">the requested menu does not exist!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.nomenu</Col><Col id=\"msgText\">해당 Menu가 존재하지 않습니다.</Col><Col id=\"msgTextEN\">The specified menu doesn&apos;t exist.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">confirm.logout</Col><Col id=\"msgText\">로그아웃 하시겠습니까?</Col><Col id=\"msgTextEN\">Are you sure you want to log out?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.movepage</Col><Col id=\"msgText\">변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?</Col><Col id=\"msgTextEN\">There are unsaved data. Would you like to leave now?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.search</Col><Col id=\"msgText\">검색을 진행하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"msgTextEN\">Any unsaved data will be discarded. \\nWould you like to continue?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.moveropos</Col><Col id=\"msgText\">해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"msgTextEN\">If you move the selected row, your changes will be discarded. \\nWould you like to continue?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.delete</Col><Col id=\"msgText\">선택된 자료를 삭제 하시겠습니까?</Col><Col id=\"msgTextEN\">Are you sure you want to delete?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.deletesave</Col><Col id=\"msgText\">선택된 자료를 삭제 후 저장하시겠습니까?</Col><Col id=\"msgTextEN\">Are you sure you want to delete and save?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">msg.noselect</Col><Col id=\"msgText\">{0} 을(를) 선택해 주십시요.</Col><Col id=\"msgTextEN\">Please, select {0}</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.search.nodata</Col><Col id=\"msgText\">지정된 조건에 해당하는 항목을 찾을 수 없습니다.</Col><Col id=\"msgTextEN\">No data found.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.save.nodata</Col><Col id=\"msgText\">저장할 데이터가 없습니다.</Col><Col id=\"msgTextEN\">No data to save.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.save.nochange</Col><Col id=\"msgText\">변경된 내역이 없습니다.</Col><Col id=\"msgTextEN\">No changes found.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">confirm.before.save</Col><Col id=\"msgText\">변경된 내역을 저장 하시겠습니까?</Col><Col id=\"msgTextEN\">Would you like to save your changes?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">msg.save.success</Col><Col id=\"msgText\">저장 되었습니다.</Col><Col id=\"msgTextEN\">Successfully saved!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.update.success</Col><Col id=\"msgText\">수정 되었습니다.</Col><Col id=\"msgTextEN\">Successfully updated!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.delete.success</Col><Col id=\"msgText\">삭제 되었습니다.</Col><Col id=\"msgTextEN\">Successfully deleted!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.action.success</Col><Col id=\"msgText\">처리 되었습니다.</Col><Col id=\"msgTextEN\">Successfully processed!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.action.fail</Col><Col id=\"msgText\">프로세스가 실패하였습니다.</Col><Col id=\"msgTextEN\">Failed process!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.updateafter</Col><Col id=\"msgText\">변경된 내역을 저장 후 작업하세요.</Col><Col id=\"msgTextEN\">Please, save your changes first!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.delete.child</Col><Col id=\"msgText\">하위 자료가 있어 삭제할 수 없습니다.</Col><Col id=\"msgTextEN\">the requested deletion could not be performed because dependent data found!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.grid.noselect</Col><Col id=\"msgText\">선택된 항목이 없습니다.</Col><Col id=\"msgTextEN\">No item has been selected!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.before.delete</Col><Col id=\"msgText\">정말로 삭제 하시겠습니까?</Col><Col id=\"msgTextEN\">Are you sure you want to delete?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">msg.err.validator</Col><Col id=\"msgText\">{0}</Col><Col id=\"msgTextEN\">{0}</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.required</Col><Col id=\"msgText\">{0} 은(는) 필수 입력 항목입니다.</Col><Col id=\"msgTextEN\">{0} is a required field.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.length</Col><Col id=\"msgText\">{0} 의 입력값은 {1} 자리이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} must be equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.rangelength</Col><Col id=\"msgText\">{0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} is between {1} and {2}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.maxlength</Col><Col id=\"msgText\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.minlength</Col><Col id=\"msgText\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.maxlengthB</Col><Col id=\"msgText\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.minlengthB</Col><Col id=\"msgText\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.digits</Col><Col id=\"msgText\">{0} 은(는) 숫자만 입력 가능합니다.</Col><Col id=\"msgTextEN\">{0} must be a numeric value.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.min</Col><Col id=\"msgText\">{0} 은(는) {1} 이상의 숫자만 입력 가능합니다.</Col><Col id=\"msgTextEN\">{0} must be a numeric value greater than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.max</Col><Col id=\"msgText\">{0} 은(는) {1} 이하의 숫자만 입력 가능합니다.</Col><Col id=\"msgTextEN\">{0} must be a numeric value less than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.date</Col><Col id=\"msgText\">{0} 은(는) 유효하지 않은 날짜 형식입니다.</Col><Col id=\"msgTextEN\">{0} is in invalid date format.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.dateym</Col><Col id=\"msgText\">{0} 은(는) 유효하지 않은 년월 형식입니다.</Col><Col id=\"msgTextEN\">{0} is in invalid year/month format.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.fromto</Col><Col id=\"msgText\">{0} 의 날짜가 {1} 의 날짜보다 작습니다.</Col><Col id=\"msgTextEN\">{0} is less than {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.comparebig</Col><Col id=\"msgText\">{0} 이(가) {1} 보다 작습니다.</Col><Col id=\"msgTextEN\">{0} is less than {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.comparesmall</Col><Col id=\"msgText\">{0} 이(가) {1} 보다 큽니다.</Col><Col id=\"msgTextEN\">{0} is greater than {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.equalto</Col><Col id=\"msgText\">{0} 이(가) {1} 와(과) 일치하지 않습니다.</Col><Col id=\"msgTextEN\">{0} is not equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.range</Col><Col id=\"msgText\">{0} 은(는) {1} 와(과) {2} 사이의 값입니다.</Col><Col id=\"msgTextEN\">The value of {0} is between {1} and {2}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.declimit</Col><Col id=\"msgText\">{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.</Col><Col id=\"msgTextEN\">The fractional part of {0} must consiste of {1} digits.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.code</Col><Col id=\"msgText\">{0} 은(는) {1} 중 하나의 값이어야 합니다.</Col><Col id=\"msgTextEN\">{0} must be the value of {1}</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.ssn</Col><Col id=\"msgText\">{0} 은(는) 올바른 주민번호가 아닙니다.</Col><Col id=\"msgTextEN\">The entered Social Security Number is invalid.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.email</Col><Col id=\"msgText\">e-mail이 잘못된 형태로 입력 되었습니다.</Col><Col id=\"msgTextEN\">The entered email address is invalid.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.url</Col><Col id=\"msgText\">웹사이트 주소가 잘못 입력 되었습니다.</Col><Col id=\"msgTextEN\">The entered website address is invalid.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.phone</Col><Col id=\"msgText\">전화번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"msgTextEN\">The entered phone number is invalid.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.zipcode</Col><Col id=\"msgText\">우편번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"msgTextEN\">The entered ZIP code is invalid.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.multicombo.maxcnt</Col><Col id=\"msgText\">{0}개 이상 선택 할 수 없습니다.</Col><Col id=\"msgTextEN\">You can&apos;t select more than {0}</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.maxdate</Col><Col id=\"msgText\">날짜의 입력 가능 범위를 벗어났습니다.</Col><Col id=\"msgTextEN\">Invalid date.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.date.great</Col><Col id=\"msgText\">종료일이 시작일보다 빠릅니다.</Col><Col id=\"msgTextEN\">Invalid date range.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.filesize</Col><Col id=\"msgText\">첨부 파일의 용량은 최고 5MB까지 입니다.</Col><Col id=\"msgTextEN\">Maximum allowed attachment size is 5 MB.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.nofilepath</Col><Col id=\"msgText\">경로가 지정되지 않은 첨부파일은 업/다운로드 할 수 없습니다.</Col><Col id=\"msgTextEN\">A valid file path must be provided.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.exist.code</Col><Col id=\"msgText\">입력하는 Code ({0})값이 이미 등록되어 있습니다.</Col><Col id=\"msgTextEN\">Code already exsits!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.invalid.filename</Col><Col id=\"msgText\">파일 이름이 정의되지 않았습니다.</Col><Col id=\"msgTextEN\">Please, specify a filename.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.notice.itemcount</Col><Col id=\"msgText\">첨부 파일은 {0}개 이상 등록 할 수 없습니다.</Col><Col id=\"msgTextEN\">Attachments can not be registered in more than {0}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.uploadfail</Col><Col id=\"msgText\">{0}로(으로) 파일업로드 실패 입니다.</Col><Col id=\"msgTextEN\">the file upload is failed because {0}.</Col><Col id=\"msgType\">A</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"32\"/><Column id=\"groupId\" type=\"STRING\" size=\"32\"/><Column id=\"menuId\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"menuNmEN\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"32\"/><Column id=\"sortNo\" type=\"INT\" size=\"4\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"32\"/><Column id=\"useYn\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsWord", this);
            obj._setContents("<ColumnInfo><Column id=\"word\" type=\"STRING\" size=\"256\"/><Column id=\"KO\" type=\"STRING\" size=\"256\"/><Column id=\"EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KO\">스테틱</Col><Col id=\"EN\">static</Col><Col id=\"word\">comp.static</Col></Row><Row><Col id=\"KO\">체크</Col><Col id=\"EN\">check</Col><Col id=\"word\">comp.check</Col></Row><Row><Col id=\"word\">comp.button</Col><Col id=\"KO\">버튼</Col><Col id=\"EN\">button</Col></Row><Row><Col id=\"KO\">박스</Col><Col id=\"EN\">box</Col><Col id=\"word\">comp.box</Col></Row><Row><Col id=\"KO\">콤보</Col><Col id=\"EN\">combo</Col><Col id=\"word\">comp.combo</Col></Row><Row><Col id=\"KO\">달력</Col><Col id=\"EN\">calendar</Col><Col id=\"word\">comp.calendar</Col></Row><Row><Col id=\"KO\">웹브라우저</Col><Col id=\"EN\">web browser</Col><Col id=\"word\">comp.webbrowser</Col></Row><Row><Col id=\"KO\">이미지</Col><Col id=\"EN\">image</Col><Col id=\"word\">comp.image</Col></Row><Row><Col id=\"KO\">팝업</Col><Col id=\"EN\">popup</Col><Col id=\"word\">comp.popup</Col></Row><Row><Col id=\"KO\">라디오</Col><Col id=\"EN\">radio</Col><Col id=\"word\">comp.radio</Col></Row><Row><Col id=\"word\">comp.number</Col><Col id=\"KO\">숫자</Col><Col id=\"EN\">number</Col></Row><Row><Col id=\"word\">comp.text</Col><Col id=\"KO\">텍스트</Col><Col id=\"EN\">text</Col></Row><Row><Col id=\"word\">comp.test</Col><Col id=\"KO\">테스트</Col><Col id=\"EN\">test</Col></Row><Row><Col id=\"word\">comp.textmode</Col><Col id=\"KO\">텍스트모드</Col><Col id=\"EN\">text mode</Col></Row><Row><Col id=\"word\">frame.menu</Col><Col id=\"EN\">menu</Col><Col id=\"KO\">메뉴</Col></Row><Row><Col id=\"KO\">즐겨찾기</Col><Col id=\"EN\">Favorites</Col><Col id=\"word\">frame.favorites</Col></Row><Row><Col id=\"word\">frame.searchMenu</Col><Col id=\"KO\">메뉴검색</Col><Col id=\"EN\">Search</Col></Row><Row><Col id=\"word\">frame.searchMenu.button</Col><Col id=\"KO\">검색</Col><Col id=\"EN\">sch..</Col></Row><Row><Col id=\"word\">frame.logOut</Col><Col id=\"KO\">로그아웃</Col><Col id=\"EN\">Log out</Col></Row><Row><Col id=\"word\">cmm.no</Col><Col id=\"KO\">순번</Col><Col id=\"EN\">NO</Col></Row><Row><Col id=\"word\">cmm.status</Col><Col id=\"KO\">상태</Col><Col id=\"EN\">Status</Col></Row><Row><Col id=\"word\">cmm.checkbox</Col><Col id=\"KO\">체크박스</Col><Col id=\"EN\">Checkbox</Col></Row><Row><Col id=\"word\">popup.notice</Col><Col id=\"KO\">알림</Col><Col id=\"EN\">notice</Col></Row><Row><Col id=\"word\">popup.confirm</Col><Col id=\"KO\">확인</Col><Col id=\"EN\">confirm</Col></Row><Row><Col id=\"word\">popup.ok</Col><Col id=\"KO\">확인</Col><Col id=\"EN\">OK</Col></Row><Row><Col id=\"word\">popup.close</Col><Col id=\"KO\">닫기</Col><Col id=\"EN\">Close</Col></Row><Row><Col id=\"word\">popup.cancel</Col><Col id=\"KO\">취소</Col><Col id=\"EN\">Cancel</Col></Row><Row><Col id=\"word\">popup.periodselect</Col><Col id=\"KO\">기간 선택</Col><Col id=\"EN\">Select the time period</Col></Row><Row><Col id=\"word\">popup.monthselect</Col><Col id=\"KO\">월 선택</Col><Col id=\"EN\">Select the month</Col></Row><Row><Col id=\"word\">popup.dataselect</Col><Col id=\"KO\">데이터 선택</Col><Col id=\"EN\">Select the data</Col></Row><Row><Col id=\"word\">popup.columnselect</Col><Col id=\"KO\">컬럼 선택</Col><Col id=\"EN\">Select the column</Col></Row><Row><Col id=\"word\">popup.modal</Col><Col id=\"KO\">모달팝업</Col><Col id=\"EN\">modal popup</Col></Row><Row><Col id=\"word\">popup.columnname</Col><Col id=\"KO\">컬럼명</Col><Col id=\"EN\">column name</Col></Row><Row><Col id=\"word\">popup.filtercriteria</Col><Col id=\"KO\">필터 기준</Col><Col id=\"EN\">filter criteria</Col></Row><Row><Col id=\"word\">popup.findcondition</Col><Col id=\"KO\">찾을 조건</Col><Col id=\"EN\">find conditions</Col></Row><Row><Col id=\"word\">popup.datafiltersetting</Col><Col id=\"KO\">데이터 필터 설정</Col><Col id=\"EN\">data filter setting</Col></Row><Row><Col id=\"word\">popup.apply</Col><Col id=\"KO\">적용</Col><Col id=\"EN\">Apply</Col></Row><Row><Col id=\"word\">popup.datafindreplace</Col><Col id=\"KO\">데이터 찾기/바꾸기</Col><Col id=\"EN\">data find/replace</Col></Row><Row><Col id=\"word\">popup.targetcolumn</Col><Col id=\"KO\">대상 컬럼</Col><Col id=\"EN\">target column</Col></Row><Row><Col id=\"word\">popup.findstring</Col><Col id=\"KO\">찾을 문자열</Col><Col id=\"EN\">find string</Col></Row><Row><Col id=\"word\">popup.replacestring</Col><Col id=\"KO\">바꿀 문자열</Col><Col id=\"EN\">replace string</Col></Row><Row><Col id=\"word\">popup.finddirection</Col><Col id=\"KO\">찾을 방향</Col><Col id=\"EN\">find direction</Col></Row><Row><Col id=\"word\">popup.findposition</Col><Col id=\"KO\">찾을 위치</Col><Col id=\"EN\">find position</Col></Row><Row><Col id=\"word\">popup.find</Col><Col id=\"KO\">찾기</Col><Col id=\"EN\">Find</Col></Row><Row><Col id=\"word\">popup.replace</Col><Col id=\"KO\">바꾸기</Col><Col id=\"EN\">Replace</Col></Row><Row><Col id=\"word\">popup.allchange</Col><Col id=\"KO\">모두바꾸기</Col><Col id=\"EN\">All Replace</Col></Row><Row><Col id=\"word\">popup.casesensitive</Col><Col id=\"KO\">대/소문자 구분</Col><Col id=\"EN\">Case sensitive</Col></Row><Row><Col id=\"word\">popup.colshwohide</Col><Col id=\"KO\">컬럼 보이기/숨기기</Col><Col id=\"EN\">column show/hide</Col></Row><Row><Col id=\"KO\">조회</Col><Col id=\"EN\">search</Col><Col id=\"word\">search</Col></Row><Row><Col id=\"KO\">입력</Col><Col id=\"EN\">insert</Col><Col id=\"word\">insert</Col></Row><Row><Col id=\"KO\">삭제</Col><Col id=\"EN\">delete</Col><Col id=\"word\">delete</Col></Row><Row><Col id=\"KO\">수정</Col><Col id=\"EN\">modify</Col><Col id=\"word\">modify</Col></Row><Row><Col id=\"word\">save</Col><Col id=\"KO\">저장</Col><Col id=\"EN\">save</Col></Row><Row><Col id=\"KO\">사원</Col><Col id=\"EN\">employee</Col><Col id=\"word\">employee</Col></Row><Row><Col id=\"KO\">부서</Col><Col id=\"EN\">department</Col><Col id=\"word\">department</Col></Row><Row><Col id=\"KO\">회사</Col><Col id=\"EN\">company</Col><Col id=\"word\">company</Col></Row><Row><Col id=\"word\">user</Col><Col id=\"KO\">사용자</Col><Col id=\"EN\">user</Col></Row><Row><Col id=\"KO\">주민등록번호</Col><Col id=\"EN\">Social Security Number</Col><Col id=\"word\">user.jumin</Col></Row><Row><Col id=\"word\">user.id</Col><Col id=\"KO\">아이디</Col><Col id=\"EN\">ID</Col></Row><Row><Col id=\"KO\">명칭</Col><Col id=\"word\">designation</Col><Col id=\"EN\">designation</Col></Row><Row><Col id=\"word\">useflg</Col><Col id=\"KO\">사용 여부</Col><Col id=\"EN\">use flg</Col></Row><Row><Col id=\"word\">reguser</Col><Col id=\"KO\">등록자</Col><Col id=\"EN\">register user</Col></Row><Row><Col id=\"word\">description</Col><Col id=\"KO\">설명</Col><Col id=\"EN\">description</Col></Row><Row><Col id=\"KO\">시작일자</Col><Col id=\"EN\">Start date</Col><Col id=\"word\">date.start</Col></Row><Row><Col id=\"KO\">종료일</Col><Col id=\"EN\">End date</Col><Col id=\"word\">date.end</Col></Row><Row><Col id=\"word\">value.max</Col><Col id=\"KO\">최대값</Col><Col id=\"EN\">Maximum value</Col></Row><Row><Col id=\"KO\">금리</Col><Col id=\"EN\">Interest rate</Col><Col id=\"word\">value.interest</Col></Row><Row><Col id=\"EN\">1st value</Col><Col id=\"KO\">1번째값</Col><Col id=\"word\">value.1st</Col></Row><Row><Col id=\"EN\">2nd value</Col><Col id=\"KO\">2번째값</Col><Col id=\"word\">value.2nd</Col></Row><Row><Col id=\"KO\">등록자</Col><Col id=\"EN\">register</Col><Col id=\"word\">register</Col></Row><Row><Col id=\"KO\">정보</Col><Col id=\"EN\">info</Col><Col id=\"word\">info</Col></Row><Row><Col id=\"KO\">용어</Col><Col id=\"EN\">word</Col><Col id=\"word\">word</Col></Row><Row><Col id=\"KO\">사전</Col><Col id=\"EN\">dictionary</Col><Col id=\"word\">dictionary</Col></Row><Row><Col id=\"KO\">국가</Col><Col id=\"EN\">nation</Col><Col id=\"word\">nation</Col></Row><Row><Col id=\"KO\">언어</Col><Col id=\"EN\">language</Col><Col id=\"word\">language</Col></Row><Row><Col id=\"KO\">선택</Col><Col id=\"EN\">select</Col><Col id=\"word\">select</Col></Row><Row><Col id=\"KO\">초기화</Col><Col id=\"EN\">initialize</Col><Col id=\"word\">initialize</Col></Row><Row><Col id=\"word\">tab1</Col><Col id=\"KO\">1번째탭</Col><Col id=\"EN\">First Tab</Col></Row><Row><Col id=\"word\">tab2</Col><Col id=\"KO\">2번째탭</Col><Col id=\"EN\">Second Tab</Col></Row><Row><Col id=\"KO\">한글</Col><Col id=\"EN\">Korean</Col><Col id=\"word\">korean</Col></Row><Row><Col id=\"KO\">영어</Col><Col id=\"EN\">English</Col><Col id=\"word\">english</Col></Row><Row><Col id=\"word\">sort</Col><Col id=\"KO\">정렬</Col><Col id=\"EN\">sort</Col></Row><Row><Col id=\"word\">colfix</Col><Col id=\"KO\">열고정</Col><Col id=\"EN\">column fix</Col></Row><Row><Col id=\"word\">rowfix</Col><Col id=\"KO\">행고정</Col><Col id=\"EN\">row fix</Col></Row><Row><Col id=\"word\">excel</Col><Col id=\"KO\">엑셀</Col><Col id=\"EN\">excel</Col></Row><Row><Col id=\"word\">basicfunction</Col><Col id=\"KO\">기본기능</Col><Col id=\"EN\">basic function</Col></Row><Row><Col id=\"word\">complicatedgrid</Col><Col id=\"KO\">복잡한 그리드</Col><Col id=\"EN\">complicated grid</Col></Row><Row><Col id=\"word\">gridpersonal</Col><Col id=\"KO\">그리드개인화</Col><Col id=\"EN\">personalization grid</Col></Row><Row><Col id=\"word\">listcount</Col><Col id=\"KO\">목록 갯수</Col><Col id=\"EN\">List count</Col></Row><Row><Col id=\"word\">etorangers</Col><Col id=\"EN\">Eto Rangers</Col><Col id=\"KO\">꾸러기수비대</Col></Row><Row><Col id=\"word\">sunday</Col><Col id=\"KO\">일요일</Col><Col id=\"EN\">Sunday</Col></Row><Row><Col id=\"word\">monday</Col><Col id=\"KO\">월요일</Col><Col id=\"EN\">Monday</Col></Row><Row><Col id=\"word\">tuesday</Col><Col id=\"KO\">화요일</Col><Col id=\"EN\">Tuesday</Col></Row><Row><Col id=\"word\">wednesday</Col><Col id=\"KO\">수요일</Col><Col id=\"EN\">Wednesday</Col></Row><Row><Col id=\"word\">thursday</Col><Col id=\"KO\">목요일</Col><Col id=\"EN\">Thursday</Col></Row><Row><Col id=\"word\">friday</Col><Col id=\"KO\">금요일</Col><Col id=\"EN\">Friday</Col></Row><Row><Col id=\"word\">saturday</Col><Col id=\"KO\">토요일</Col><Col id=\"EN\">Saturday</Col></Row><Row><Col id=\"KO\">월</Col><Col id=\"word\">mon</Col><Col id=\"EN\">MON</Col></Row><Row><Col id=\"KO\">화</Col><Col id=\"word\">tue</Col><Col id=\"EN\">TUE</Col></Row><Row><Col id=\"KO\">수</Col><Col id=\"word\">wed</Col><Col id=\"EN\">WED</Col></Row><Row><Col id=\"KO\">목</Col><Col id=\"word\">thu</Col><Col id=\"EN\">THU</Col></Row><Row><Col id=\"KO\">금</Col><Col id=\"word\">fri</Col><Col id=\"EN\">FRI</Col></Row><Row><Col id=\"KO\">토</Col><Col id=\"word\">sat</Col><Col id=\"EN\">SAT</Col></Row><Row><Col id=\"KO\">일</Col><Col id=\"word\">sun</Col><Col id=\"EN\">SUN</Col></Row><Row><Col id=\"word\">week</Col><Col id=\"KO\">주</Col><Col id=\"EN\">WEEK</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"captionEN\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/><Column id=\"upmenu\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">shapefix</Col><Col id=\"level\">0</Col><Col id=\"caption\">틀고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">shape fix</Col></Row><Row><Col id=\"id\">colfix</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">column fix</Col></Row><Row><Col id=\"id\">colfixfree</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">column fix free</Col></Row><Row><Col id=\"id\">rowfix</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">row fix</Col></Row><Row><Col id=\"id\">rowfixfree</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">row fix free</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">grid filter</Col></Row><Row><Col id=\"id\">filterfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">grid filter free</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">replace</Col><Col id=\"level\">0</Col><Col id=\"caption\">찾기/바꾸기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">find/replace</Col></Row><Row><Col id=\"id\">colhide</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기/보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">column show/hide</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">excel</Col><Col id=\"level\">0</Col><Col id=\"caption\">엑셀</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">excel</Col></Row><Row><Col id=\"id\">export</Col><Col id=\"level\">1</Col><Col id=\"caption\">내보내기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">excel</Col><Col id=\"captionEN\">export</Col></Row><Row><Col id=\"id\">import</Col><Col id=\"level\">1</Col><Col id=\"caption\">가져오기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">excel</Col><Col id=\"captionEN\">import</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">personal</Col><Col id=\"level\">0</Col><Col id=\"caption\">현재포맷저장</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">saving current format</Col></Row><Row><Col id=\"id\">initial</Col><Col id=\"level\">0</Col><Col id=\"caption\">초기상태로</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">initialization</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGridPersonal", this);
            obj._setContents("<ColumnInfo><Column id=\"sFormatId\" type=\"STRING\" size=\"256\"/><Column id=\"sFormat\" type=\"STRING\" size=\"2147483647\"/><Column id=\"sOrgFormat\" type=\"STRING\" size=\"2147483647\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsFindList", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCache", this);
            obj._setContents("<ColumnInfo><Column id=\"bizid\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsProcmenuinfo", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"1\"/><Column id=\"procGrpId\" type=\"STRING\" size=\"10\"/><Column id=\"menuId\" type=\"STRING\" size=\"12\"/><Column id=\"menuNm\" type=\"STRING\" size=\"300\"/><Column id=\"menuComment\" type=\"STRING\" size=\"1000\"/><Column id=\"menuLvl\" type=\"BIGDECIMAL\" size=\"10\"/><Column id=\"orderNo\" type=\"BIGDECIMAL\" size=\"10\"/><Column id=\"subOrderNo\" type=\"BIGDECIMAL\" size=\"10\"/><Column id=\"compType\" type=\"STRING\" size=\"300\"/><Column id=\"compId\" type=\"STRING\" size=\"300\"/><Column id=\"compValue\" type=\"STRING\" size=\"300\"/><Column id=\"updid\" type=\"STRING\" size=\"30\"/><Column id=\"mdfcDtm\" type=\"STRING\" size=\"0\"/><Column id=\"selectedMenuId\" type=\"STRING\" size=\"0\"/><Column id=\"nextMark\" type=\"STRING\" size=\"0\"/><Column id=\"procGrpNm\" type=\"STRING\" size=\"50\"/><Column id=\"procGrpComment\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsFinkeyinfo", this);
            obj._setContents("<ColumnInfo><Column id=\"finKey\" type=\"STRING\" size=\"256\"/><Column id=\"finKeyValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsEmail", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">직접입력</Col></Row><Row><Col id=\"code\">naver.com</Col><Col id=\"value\">naver.com</Col></Row><Row><Col id=\"code\">daum.net</Col><Col id=\"value\">daum.net</Col></Row><Row><Col id=\"code\">hanmail.net</Col><Col id=\"value\">hanmail.net</Col></Row><Row><Col id=\"code\">gmail.com</Col><Col id=\"value\">gmail.com</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"messageId\" type=\"STRING\" size=\"256\"/><Column id=\"messageCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsSession", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userDtcNo\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userRrno\" type=\"STRING\" size=\"256\"/><Column id=\"invlNo\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpOrgCd\" type=\"STRING\" size=\"256\"/><Column id=\"corpCd\" type=\"STRING\" size=\"256\"/><Column id=\"corpNm\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpOrgNm\" type=\"STRING\" size=\"256\"/><Column id=\"ayr\" type=\"STRING\" size=\"256\"/><Column id=\"ptyAuthCd\" type=\"STRING\" size=\"256\"/><Column id=\"instCd\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"cntnCtpvScCd\" type=\"STRING\" size=\"256\"/><Column id=\"cntnCtpvOrgCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgScCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgNm\" type=\"STRING\" size=\"256\"/><Column id=\"instClfCd\" type=\"STRING\" size=\"256\"/><Column id=\"cddcCd\" type=\"STRING\" size=\"256\"/><Column id=\"cddcNm\" type=\"STRING\" size=\"256\"/><Column id=\"cteOrgCd\" type=\"STRING\" size=\"256\"/><Column id=\"cteOrgNm\" type=\"STRING\" size=\"256\"/><Column id=\"cteOrgInstClfCd\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"shlKndScCd\" type=\"STRING\" size=\"256\"/><Column id=\"shlFndnScCd\" type=\"STRING\" size=\"256\"/><Column id=\"shlCrseScCd\" type=\"STRING\" size=\"256\"/><Column id=\"sysCd\" type=\"STRING\" size=\"256\"/><Column id=\"userScCd\" type=\"STRING\" size=\"256\"/><Column id=\"usePosblYn\" type=\"STRING\" size=\"256\"/><Column id=\"useBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"initInstClfCd\" type=\"STRING\" size=\"256\"/><Column id=\"initInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"initInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"initCteOrgInstClfCd\" type=\"STRING\" size=\"256\"/><Column id=\"initCteOrgCd\" type=\"STRING\" size=\"256\"/><Column id=\"initCteOrgNm\" type=\"STRING\" size=\"256\"/><Column id=\"initShlCrseScCd\" type=\"STRING\" size=\"256\"/><Column id=\"coaAyr\" type=\"STRING\" size=\"256\"/><Column id=\"coaRcritScCd\" type=\"STRING\" size=\"256\"/><Column id=\"cntnCddcNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"apprIpAddr\" type=\"STRING\" size=\"256\"/><Column id=\"trprRrno\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"sqeExmtNo\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"brdt\" type=\"STRING\" size=\"256\"/><Column id=\"appoExamScCd\" type=\"STRING\" size=\"256\"/><Column id=\"trpRrno\" type=\"STRING\" size=\"256\"/><Column id=\"cteOfcdcCd\" type=\"STRING\" size=\"256\"/><Column id=\"acaDsgnNo\" type=\"STRING\" size=\"256\"/><Column id=\"invlDsgnNo\" type=\"STRING\" size=\"256\"/><Column id=\"prntNm\" type=\"STRING\" size=\"256\"/><Column id=\"prntBthYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prntMblNo\" type=\"STRING\" size=\"256\"/><Column id=\"srdntCd\" type=\"STRING\" size=\"256\"/><Column id=\"stdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"stdntGrade\" type=\"STRING\" size=\"256\"/><Column id=\"stdntClss\" type=\"STRING\" size=\"256\"/><Column id=\"stdntNo\" type=\"STRING\" size=\"256\"/><Column id=\"partNo\" type=\"STRING\" size=\"256\"/><Column id=\"brnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcritNm\" type=\"STRING\" size=\"256\"/><Column id=\"trprPin\" type=\"STRING\" size=\"256\"/><Column id=\"enfcYr\" type=\"STRING\" size=\"256\"/><Column id=\"enfcTme\" type=\"STRING\" size=\"256\"/><Column id=\"acaInstiScCd\" type=\"STRING\" size=\"256\"/><Column id=\"funrKornFlnm\" type=\"STRING\" size=\"256\"/><Column id=\"funrRrno\" type=\"STRING\" size=\"256\"/><Column id=\"uvstOrgCd\" type=\"STRING\" size=\"256\"/><Column id=\"kornFlnm\" type=\"STRING\" size=\"256\"/><Column id=\"sxdsScCd\" type=\"STRING\" size=\"256\"/><Column id=\"eMl_Addr\" type=\"STRING\" size=\"256\"/><Column id=\"mnrSn\" type=\"STRING\" size=\"256\"/><Column id=\"mnrId\" type=\"STRING\" size=\"256\"/><Column id=\"mnrMngAuthCd\" type=\"STRING\" size=\"256\"/><Column id=\"mnrMngAuthNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCddcList", this);
            obj._setContents("<ColumnInfo><Column id=\"cddcCd\" type=\"STRING\" size=\"256\"/><Column id=\"cddcNm\" type=\"STRING\" size=\"256\"/><Column id=\"cssclassId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cddcCd\">B100000001</Col><Col id=\"cddcNm\">서울특별시교육청</Col><Col id=\"cssclassId\">sta_TF_Seoul   </Col></Row><Row><Col id=\"cddcCd\">C100000001</Col><Col id=\"cddcNm\">부산광역시교육청</Col><Col id=\"cssclassId\">sta_TF_PuSan</Col></Row><Row><Col id=\"cddcCd\">D100000001</Col><Col id=\"cddcNm\">대구광역시교육청</Col><Col id=\"cssclassId\">sta_TF_DaeGu</Col></Row><Row><Col id=\"cddcCd\">E100000001</Col><Col id=\"cddcNm\">인천광역시교육청</Col><Col id=\"cssclassId\">sta_TF_InChun</Col></Row><Row><Col id=\"cddcCd\">F100000001</Col><Col id=\"cddcNm\">광주광역시교육청</Col><Col id=\"cssclassId\">sta_TF_KwangJu</Col></Row><Row><Col id=\"cddcCd\">G100000001</Col><Col id=\"cddcNm\">대전광역시교육청</Col><Col id=\"cssclassId\">sta_TF_DaeJeon</Col></Row><Row><Col id=\"cddcCd\">H100000001</Col><Col id=\"cddcNm\">울산광역시교육청</Col><Col id=\"cssclassId\">sta_TF_UlSan</Col></Row><Row><Col id=\"cddcCd\">I100000001</Col><Col id=\"cddcNm\">세종특별자치시교육청</Col><Col id=\"cssclassId\">sta_TF_SeJong</Col></Row><Row><Col id=\"cddcCd\">J100000001</Col><Col id=\"cddcNm\">경기도교육청</Col><Col id=\"cssclassId\">sta_TF_KyungKi</Col></Row><Row><Col id=\"cddcCd\">K100000001</Col><Col id=\"cddcNm\">강원도교육청</Col><Col id=\"cssclassId\">sta_TF_KangWon</Col></Row><Row><Col id=\"cddcCd\">M100000001</Col><Col id=\"cddcNm\">충청북도교육청</Col><Col id=\"cssclassId\">sta_TF_ChoongChungB</Col></Row><Row><Col id=\"cddcCd\">N100000001</Col><Col id=\"cddcNm\">충청남도교육청</Col><Col id=\"cssclassId\">sta_TF_ChoongChungN</Col></Row><Row><Col id=\"cddcCd\">P100000001</Col><Col id=\"cddcNm\">전라북도교육청</Col><Col id=\"cssclassId\">sta_TF_JeonLaB</Col></Row><Row><Col id=\"cddcCd\">Q100000001</Col><Col id=\"cddcNm\">전라남도교육청</Col><Col id=\"cssclassId\">sta_TF_JeonLaN</Col></Row><Row><Col id=\"cddcCd\">R100000001</Col><Col id=\"cddcNm\">경상북도교육청</Col><Col id=\"cssclassId\">sta_TF_KyungSangB</Col></Row><Row><Col id=\"cddcCd\">S100000001</Col><Col id=\"cddcNm\">경상남도교육청</Col><Col id=\"cssclassId\">sta_TF_KyungSangN</Col></Row><Row><Col id=\"cddcCd\">T100000001</Col><Col id=\"cddcNm\">제주특별자치도교육청</Col><Col id=\"cssclassId\">sta_TF_JeJu</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gv_bintp","0");
            this._addVariable("gv_compress","false");
            this._addVariable("gv_eduDgtlOpsUserScCd","");
            this._addVariable("gv_siteId","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("NEIS");
            this.set_screenid("ScreenDeskTop,mobile,tablet");
            this.set_licenseurl("");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1160","950",null,null,this);
            mainframe.set_showtitlebar("false");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("대국민서비스");
            mainframe.set_showtitleicon("false");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_titlebarheight("40");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("*");
            frame0.set_showtitlebar("false");
            frame0.set_showtitleicon("false");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("frameMain",null,null,null,null,null,null,"frame::frameMain.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_showstatusbar("false");
            frame1.set_showtitleicon("false");
            frame1.set_dragmovetype("none");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("frame::frameMain.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.addEventHandler("onerror",this.Application_onerror,this);
        };
        
        // script Compiler
        this.registerScript("test_raon.xadl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName
        *  @Creator 	consulting
        *  @CreateDate 	2018.02.22
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.02.22     	consulting	 		        최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/

        this.gv_menuColumns 	  =
        {
        	menuId 	  : "menuId"    	// MENU ID
        ,	menuNm 	  : "menuName"
        ,	pageUrl   : "menuUrl"
        ,	pageId 	  : "pageId"    	// PROGRAM_ID
        ,	winId 	  : "winId"     	// 윈도우(프레임)아이디(열린 메뉴의 윈도우 아이디)
        ,	title 	  : "title"
        ,	menuUrl   : "menuUrl"
        ,	groupId   : "groupId"
        ,	menuArgs  : "menuArgs"  	// 메뉴파라메터
        ,	menuLevel : "lvl"     		// 메뉴레벨
        ,	parentMenuId : "parentMenuId"
        ,	isShow 	  : "isShow"        // 사용여부
        };


        this.gv_realTrace = trace;
        this.gv_locale;				// 다국어Lang(현재)
        this.gv_localePost;			// 다국어Lang(바뀔)
        this.gv_appTtiletext = "대국민서비스";

        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        // 새로고침 차단 web에서만 실행

        if (system.navigatorname.indexOf("nexacro")  < 0)
        {
        	//새로고침 방지
        	window.document.onkeydown = function()
        	{
        		if(event.keyCode == 116)	//F5
        		{
        			event.keyCode = 0;
        			return false;
        		}
        		else if((event.keyCode == 78 || event.keyCode == 82) && event.ctrlKey == true)	//N ,R +ctrl
        		{
        			event.keyCode = 0;
        			return false;
        		}


        	}
        };
        /**
         * @description Applicaton onload시 처리내역
        */
        this.Application_onload = function(obj,e)
        {
        	// QuikView 여부 설정
        	nexacro.setEnvironmentVariable("ev_quikView", "N");

        	//다국어 Lang설정 default KO;
        	this.gv_locale 	  = "KO";
        	this.gv_localePost = "KO";

        	var objApp = nexacro.getApplication();

        	// 접속경로 확인 및 설정
        	trace("===== 접속경로 : " + nexacro.getProjectPath());
        	trace("===== system.navigatorname : " + system.navigatorname);
            var nRunMode = 0;
        	//로컬(파일)
        	if (system.navigatorname.indexOf("nexacro")  > -1)
        	{

        		var sNexacroUrl = nexacro.getProjectPath().url;
        		var objEnv  = nexacro.getEnvironment();
        		var objBaseSrv = objEnv.services["baseUrl"];

        		// 대입전형(UDS)만 해당
        		if(        sNexacroUrl.indexOf("dev.neis.go.kr"             ) > -1   // 대국민포털
        		        || sNexacroUrl.indexOf("dev.kged.go.kr"             ) > -1   // 검정고시
        		        || sNexacroUrl.indexOf("dev.edurecruit.go.kr"       ) > -1   // 온라인채용
        		        || sNexacroUrl.indexOf("dev.hakwon.neis.go.kr"      ) > -1   // 학원민원
        		        || sNexacroUrl.indexOf("dev.nonprofit.neis.go.kr"   ) > -1   // 비영리법인민
        		        || sNexacroUrl.indexOf("dev.par.neis.go.kr"         ) > -1   // 유치원(삭제예정)
        		        || sNexacroUrl.indexOf("dev.firstschool.neis.go.kr" ) > -1   // 유치원
        		        || sNexacroUrl.indexOf("dev.admission.neis.go.kr"   ) > -1   // 대입전형
        		        || sNexacroUrl.indexOf("dev.eduro.go.kr"            ) > -1   // 교육설문
        		        || sNexacroUrl.indexOf("dev.cowork.neis.go.kr"      ) > -1   // 학교업무지원
        		        || sNexacroUrl.indexOf("dev.oneclick.neis.go.kr"    ) > -1   // 교육복지 원클릭
        				)  // 개발
        		{
        			nRunMode = "2";
        			var sUrl = "";
        			var nFirstSlash = sNexacroUrl.indexOf("/",10);   // http:// 이후에 첫번째
        			sUrl = sNexacroUrl.substr(0,nFirstSlash+1);

        			objBaseSrv.set_url(sUrl);
        			objApp.mainframe.set_titletext("개발(전용) - " + objApp.mainframe.titletext);
        		}
        		else if(   sNexacroUrl.indexOf("tst.neis.go.kr"             ) > -1   // 대국민포털
        		        || sNexacroUrl.indexOf("tst.kged.go.kr"             ) > -1   // 검정고시
        		        || sNexacroUrl.indexOf("tst.edurecruit.go.kr"       ) > -1   // 온라인채용
        		        || sNexacroUrl.indexOf("tst.hakwon.neis.go.kr"      ) > -1   // 학원민원
        		        || sNexacroUrl.indexOf("tst.nonprofit.neis.go.kr"   ) > -1   // 비영리법인민
        		        || sNexacroUrl.indexOf("tst.par.neis.go.kr"         ) > -1   // 유치원(삭제예정)
        		        || sNexacroUrl.indexOf("tst.firstschool.neis.go.kr" ) > -1   // 유치원
        		        || sNexacroUrl.indexOf("tst.admission.neis.go.kr"   ) > -1   // 대입전형
        		        || sNexacroUrl.indexOf("tst.eduro.go.kr"            ) > -1   // 교육설문
        		        || sNexacroUrl.indexOf("tst.cowork.neis.go.kr"      ) > -1   // 학교업무지원
        		        || sNexacroUrl.indexOf("tst.oneclick.neis.go.kr"    ) > -1   // 교육복지 원클릭
        				)  // 시험
        		{
        		    nRunMode = "3";
        			var sUrl = "";
        			var nFirstSlash = sNexacroUrl.indexOf("/",10);  // http:// 이후에 첫번째
        			sUrl = sNexacroUrl.substr(0,nFirstSlash+1);

        			objBaseSrv.set_url(sUrl);

        			// trace 정지 설정
        			this.afnSetTraceMode(false);
        		}
        		else if(   sNexacroUrl.indexOf("neis.go.kr"             ) > -1   // 대국민포털
        		        || sNexacroUrl.indexOf("kged.go.kr"             ) > -1   // 검정고시
        		        || sNexacroUrl.indexOf("edurecruit.go.kr"       ) > -1   // 온라인채용
        		        || sNexacroUrl.indexOf("hakwon.neis.go.kr"      ) > -1   // 학원민원
        		        || sNexacroUrl.indexOf("nonprofit.neis.go.kr"   ) > -1   // 비영리법인민
        		        || sNexacroUrl.indexOf("par.neis.go.kr"         ) > -1   // 유치원(삭제예정)
        		        || sNexacroUrl.indexOf("firstschool.neis.go.kr" ) > -1   // 유치원
        		        || sNexacroUrl.indexOf("admission.neis.go.kr"   ) > -1   // 대입전형
        		        || sNexacroUrl.indexOf("eduro.go.kr"            ) > -1   // 교육설문
        		        || sNexacroUrl.indexOf("cowork.neis.go.kr"      ) > -1   // 학교업무지원
        		        || sNexacroUrl.indexOf("oneclick.neis.go.kr"    ) > -1   // 교육복지 원클릭
        		        || sNexacroUrl.indexOf("soneclick.neis.go.kr"   ) > -1   // 교육복지 원클릭(임시용- 삭제예정)
        				)  // 운영
        		{
        		    nRunMode = "3";
        			var sUrl = "";
        			var nFirstSlash = sNexacroUrl.indexOf("/",10);  // http:// 이후에 첫번째
        			sUrl = sNexacroUrl.substr(0,nFirstSlash+1);

        			objBaseSrv.set_url(sUrl);

        			// trace 정지 설정
        			this.afnSetTraceMode(false);
        		}
        		else  // 로컬
        		{
        			nRunMode = "1";
        			objApp.mainframe.set_titletext("로컬(전용) - " + objApp.mainframe.titletext);
        		}

        		// URL을 체크하여 서브시스템구분값을 세팅
        		this.afnSetSubsys(sNexacroUrl);

        	}
        	// 웹 접속
        	else
        	{
        		var urlPath = window.location.protocol + "//" + window.location.host;
        		var objEnv  = nexacro.getEnvironment();

        		// service URL 설정
        		var objSrv = objEnv.services["baseUrl"];
        			//objSrv.set_url(urlPath+"/nxui/");
        			objSrv.set_url(urlPath);


        		//로컬(웹)
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 )
        		{
        			nRunMode = "1";
        			objApp.mainframe.set_titletext("로컬(웹)  - " + objApp.mainframe.titletext);
        		}
        		else if(   objSrv.url.indexOf("dev.neis.go.kr"            ) > -1   // 대국민포털
        		        || objSrv.url.indexOf("dev.kged.go.kr"            ) > -1   // 검정고시
        		        || objSrv.url.indexOf("dev.edurecruit.go.kr"      ) > -1   // 온라인채용
        		        || objSrv.url.indexOf("dev.hakwon.neis.go.kr"     ) > -1   // 학원민원
        		        || objSrv.url.indexOf("dev.nonprofit.neis.go.kr"  ) > -1   // 비영리법인민
        		        || objSrv.url.indexOf("dev.par.neis.go.kr"        ) > -1   // 유치원(삭제예정)
        		        || objSrv.url.indexOf("dev.firstschool.neis.go.kr") > -1   // 유치원
        		        || objSrv.url.indexOf("dev.admission.neis.go.kr"  ) > -1   // 대입전형
        		        || objSrv.url.indexOf("dev.eduro.go.kr"           ) > -1   // 교육설문
        		        || objSrv.url.indexOf("dev.cowork.neis.go.kr"     ) > -1   // 학교업무지원
        		        || objSrv.url.indexOf("dev.oneclick.neis.go.kr"   ) > -1   // 교육복지 원클릭
        				)
        		{
        			nRunMode = "2";
        			//objApp.mainframe.set_titletext("개발(웹)  - " + objApp.mainframe.titletext);
        		}
        		//시험
        		else if(   objSrv.url.indexOf("tst.neis.go.kr"            ) > -1   // 대국민포털
        		        || objSrv.url.indexOf("tst.kged.go.kr"            ) > -1   // 검정고시
        		        || objSrv.url.indexOf("tst.edurecruit.go.kr"      ) > -1   // 온라인채용
        		        || objSrv.url.indexOf("tst.hakwon.neis.go.kr"     ) > -1   // 학원민원
        		        || objSrv.url.indexOf("tst.nonprofit.neis.go.kr"  ) > -1   // 비영리법인민
        		        || objSrv.url.indexOf("tst.par.neis.go.kr"        ) > -1   // 유치원(삭제예정)
        		        || objSrv.url.indexOf("tst.firstschool.neis.go.kr") > -1   // 유치원
        		        || objSrv.url.indexOf("tst.admission.neis.go.kr"  ) > -1   // 대입전형
        		        || objSrv.url.indexOf("tst.eduro.go.kr"           ) > -1   // 교육설문
        		        || objSrv.url.indexOf("tst.cowork.neis.go.kr"     ) > -1   // 학교업무지원
        		        || objSrv.url.indexOf("tst.oneclick.neis.go.kr"   ) > -1   // 교육복지 원클릭
        				)
        		{
        		    nRunMode = "3";

        			// trace 정지 설정
        			this.afnSetTraceMode(false);
        		}
        		//운영
        		else if(   objSrv.url.indexOf("neis.go.kr"            ) > -1   // 대국민포털
        		        || objSrv.url.indexOf("kged.go.kr"            ) > -1   // 검정고시
        		        || objSrv.url.indexOf("edurecruit.go.kr"      ) > -1   // 온라인채용
        		        || objSrv.url.indexOf("hakwon.neis.go.kr"     ) > -1   // 학원민원
        		        || objSrv.url.indexOf("nonprofit.neis.go.kr"  ) > -1   // 비영리법인민
        		        || objSrv.url.indexOf("par.neis.go.kr"        ) > -1   // 유치원(삭제예정)
        		        || objSrv.url.indexOf("firstschool.neis.go.kr") > -1   // 유치원
        		        || objSrv.url.indexOf("admission.neis.go.kr"  ) > -1   // 대입전형
        		        || objSrv.url.indexOf("eduro.go.kr"           ) > -1   // 교육설문
        		        || objSrv.url.indexOf("cowork.neis.go.kr"     ) > -1   // 학교업무지원
        		        || objSrv.url.indexOf("oneclick.neis.go.kr"   ) > -1   // 교육복지 원클릭
        		        || objSrv.url.indexOf("soneclick.neis.go.kr"  ) > -1   // 교육복지 원클릭(임시용- 삭제예정)
        				)
        		{
        		    nRunMode = "3";

        			// trace 정지 설정
        			this.afnSetTraceMode(false);
        		}
        		else  // 로컬
        		{
        			nRunMode = "1";
        			objApp.mainframe.set_titletext(" " + objApp.mainframe.titletext);
        		}

        		// URL을 체크하여 서브시스템구분값을 세팅
        		this.afnSetSubsys(urlPath);
        	}

        	nexacro.setEnvironmentVariable("ev_runMode", nRunMode);

        	//TitleText셋팅
        	this.gv_appTtiletext = objApp.mainframe.titletext;

        	trace("====== 기동모드(ev_runMode) : " + nRunMode);


        	//PC와 모바일의 Combo 분리
        	this.afnOverridingCombo();
        };


        this.gfnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        /**
         * @description trace 재정의하여 trace로그 생성 방지
        */
        this.afnSetTraceMode = function(bTrace)
        {
        	trace("★★ 운영접속시에는 trace 로그를 남기지 않도록 설정되었습니다.");

            nexacro.setEnvironmentVariable("ev_traceMode", bTrace);

        	if (bTrace)
            {
        		trace = this.gv_realTrace;
            }
            else
        	{
                trace = function trace(){};
            }
        }

        /**
         * @description ESC 통신중단 방지(10월 16일 버전에서는 작동하지 않음)
        */
        this.Application_onerror = function(obj,e)
        {
        	trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Application_onerror!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        	trace("e.statuscode : " + e.statuscode);
        	trace("e.errormsg   : " + e.errormsg  );

        	// 사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리
        	if (e.errorcode == -2147418039)
        	{
        		return true;
        	}
        };

        this.afnSetSubsys = function(sServiceUrl)
        {
        	// 순서를 신경 쓸 것
        	var objUrlInfo = [
        						{subsys:"SQA", url:"kged.go.kr"             }  // 검정고시
        					  ,	{subsys:"ORE", url:"edurecruit.go.kr"       }  // 온라인채용
        					  ,	{subsys:"HES", url:"hakwon.neis.go.kr"      }  // 학원민원
        					  ,	{subsys:"BDM", url:"nonprofit.neis.go.kr"   }  // 비영리법인민원
        					  ,	{subsys:"PAR", url:"par.neis.go.kr"         }  // 유치원
        					  ,	{subsys:"PAR", url:"firstschool.neis.go.kr" }  // 유치원
        					  ,	{subsys:"EDS", url:"eduro.go.kr"            }  // 교육설문
        					  ,	{subsys:"AFS", url:"cowork.neis.go.kr"      }  // 학교업무지원
        					  ,	{subsys:"EWS", url:"oneclick.neis.go.kr"    }  // 교육복지 원클릭
        					  ,	{subsys:"UDS", url:"admission.neis.go.kr"   }  // 대입전형(일반)
        	                 ];
        	/* local인 경우는 처리를 안함. 넘겨준 값을 그대로 사용*/
        	if(sServiceUrl.indexOf("localhost")>-1)
        	{
        		return;
        	}

        	for(var i=0;i<objUrlInfo.length;i++)
        	{
        		var sCheckUrl = objUrlInfo[i].url;

        		if(sServiceUrl.indexOf(sCheckUrl)>-1)
        		{
        			nexacro.setEnvironmentVariable("ev_subSystemGb",objUrlInfo[i].subsys);

        			// 원클릭인 경우는 고객용/관리자용을 구분하여야 함
        			if(objUrlInfo[i].subsys=="EWS")
        			{
        				if(sServiceUrl.indexOf("/admin/")>-1)
        				{
        					nexacro.setEnvironmentVariable("ev_isAdmin","Y");  // 임시로 021을 세팅 - frameMain에서 로그인 화면으로 이동 예정
        				}
        			}

        			break;
        		}
        	}
        }

        //============================================================
        //   모바일앱과의 통신용 - Start
        //============================================================
        this.afnRecvDataFromApp = function(sData)
        {
        	trace("===$$$$===$$$$ 엡으로부터데이터를 받음");
        	//var objApp = nexacro.getApplication();
        	//var objMainFrame = objApp.mainframe;
        }

        //============================================================
        //   모바일앱과의 통신용 - End
        //============================================================

        //모바일 콤보
        this.afnOverridingCombo = function()
        {
        	var _pCombo = nexacro.Combo.prototype;

        	_pCombo._$_on_drop_mobile_onclick 		= _pCombo._on_drop_mobile_onclick;
        	_pCombo._$_on_edit_mobile_oneditclick 	= _pCombo._on_edit_mobile_oneditclick;
        	_pCombo._$_on_drop_onlbuttondown 		= _pCombo._on_drop_onlbuttondown;
        	_pCombo._$_on_edit_onlbuttondown 		= _pCombo._on_edit_onlbuttondown;

        	// 함수 추가 모바일일때 dropdown 이외의  속성을 지정시 comboedit를 터치를 하는 순간 키패드가 올라오고 그후 showPopupList동작하기에
        	// 기존 엔진에서 _pCombo.set_type함수를 이용하여 모바일 환경일 경우 dropdown으로 고정하여 사용할수 있도록 처리
        	_pCombo.set_type = function (v)
            {
        		if (!nexacro._isMobile()){
        			var type_enum = ["dropdown", "search", "filter", "filterlike", "caseisearch", "caseifilter", "caseifilterlike"];
        			if (type_enum.indexOf(v) == -1)
        			{
        				return;
        			}

        			if (this.type != v)
        			{
        				this.type = v;
        				this.on_apply_type(v);
        			}
        		}else
        		{
        			this.type = "dropdown";
        			this.on_apply_type("dropdown");
        		}
            };
        	_pCombo.on_drop_mobile_onclick = function (obj, e)
        	{
        		if (this.readonly)
        			return false;

        		if (this.on_fire_ondropdown(this) == false)
        		{
        			return;
        		}

        		this.showPopupList(obj,e);
        		return false;
        	}

        	_pCombo._on_drop_mobile_onclick = function (obj, e)
        	{
        		if (nexacro._isMobile())
        		{
        			this.on_drop_mobile_onclick(obj, e);
        		}
        		else
        		{
        			this._$_on_drop_mobile_onclick(obj, e) ;
        		}
        	};

        	_pCombo._on_edit_mobile_oneditclick = function (obj, e)
        	{
        		if (nexacro._isMobile())
        		{
        			this.on_drop_mobile_onclick(obj, e);
        		}
        		else
        		{
        			this._$_on_edit_mobile_oneditclick(obj, e) ;
        		}
        	};

        	_pCombo._on_drop_onlbuttondown = function (obj, e)
        	{
        		if (nexacro._isMobile())
        		{
        			this.on_drop_mobile_onclick(obj, e);
        		}
        		else
        		{
        			this._$_on_drop_onlbuttondown(obj, e) ;
        		}
        	};

            _pCombo._on_edit_onlbuttondown = function (obj, e)
            {
        		if (nexacro._isMobile())
        		{
        			this.on_drop_mobile_onclick(obj, e);
        		}
        		else
        		{
        			this._$_on_edit_onlbuttondown(obj, e) ;
        		}
            };

        	_pCombo.showPopupList = function(obj,e)
        	{
        		// this.displayrowcount 는 무시한다. 모바일 화면에서 표현할수 있는 만큼 포현한다.
        		// 화면 회전시 mainframe_onsize에서 _pExtCbo_폼으로 resize함수 호출하여 전환시 처리함

        		var nLeft, nTop;
        		var nWidth, nHeight;
        		var npHeight,npWidth;
        		var nFullDispCount = -1;
        		//if(sTitle == "" || sTitle == undefined) sTitle = "";

        		if(!this.innerdataset) return;

        		var ds = this._innerdataset;
        		// = this._useModaltype;
        		if(!ds)
        		{
        			ds = application[this.innerdataset];
        			if(!ds) return false;
        		}
        		if(ds.rowcount == 0) return false;
        		// 기본 아이템 높이px
        		var nUnitItemHeight = this.useItemHeight != "undefined" && this.useItemHeight != undefined ?this.useItemHeight:72;

        		npWidth = nexacro.getApplication().mainframe.getOffsetWidth();
        		npHeight = nexacro.getApplication().mainframe.getOffsetHeight();

        		// 10 + 완료버튼(50) + 5 + List + 10 + = 75
        		//nFullDispCount = parseInt((npHeight-75)/nUnitItemHeight);

        		nWidth = npWidth - 100;
        		nHeight = parseInt(npHeight*0.65,10);

        		nFullDispCount = parseInt(nHeight/nUnitItemHeight,10);
        		//nFullDispCount = parseInt((npHeight-60)/nUnitItemHeight);
        		//nHeight = nUnitItemHeight*(ds.rowcount>nFullDispCount?nFullDispCount:ds.rowcount) + 60 + 4 ;
        		if (ds.rowcount<nFullDispCount) nHeight = (ds.rowcount*nUnitItemHeight) +80;


        		nLeft = 50;
        		nTop = (npHeight - nHeight)/2;

        		this.popupurl = "comm::comm_extCombo.xfdl";
        		if(this.combotitle == undefined) this.combotitle = "";

        		var sUrl = this.popupurl;
        		var objOpener = this.parent;
        		//var sCallback = this.gfnViewComboListCallback; // 사용 안함 set_item()으로 기능추가
        		var objArgs = {data:ds, cdCol:this.codecolumn , nmCol:this.datacolumn , objcombo:this , sText:this.combotitle , nUnitItemHeight:nUnitItemHeight , nFullDispCount:nFullDispCount };
        		var pid = "_extCombo_"+this.name;

        		var cf = new ChildFrame;
        		cf.init(pid, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
        		cf.set_showtitlebar(false);
        		cf.set_showstatusbar(false);
        		//cf.style.set_titlebarheight(10);
        		//cf.style.set_statusbarheight(10);
        		cf.set_titletext("") ;
        		cf.set_statustext("");
        		cf.set_autosize(false);
        		//cf.set_border("1 solid blue");  //
        		//cf.set_openalign("center middle");
        		cf.set_dragmovetype("none");
        		cf.set_overlaycolor("rgba(0, 0, 0, 0.2)");

        		cf._modaltype = "extcombo";	//milpaso adl의 onsize 처리를 위해 추가.
        		cf.orgPopWidth = nWidth;
        		cf.orgPopHeight = nHeight;
        		cf.orgPopTop = nTop;

        		cf.showModal(pid, nexacro.getApplication().mainframe, objArgs, objOpener);
        	};
        	// 팝업에서 combo.set_item()
        	_pCombo.set_item = function(v)
        	{
        		var pre_index = this.index;
        		var pre_value = this.value;
        		var pre_text = this.text;
        		var post_index = v.index;
        		var post_value = v.value;
        		var post_text = v.text;

        		if(pre_index != post_index && pre_value != post_value)
        		{
        			var rtn = this.on_fire_canitemchange(this, pre_index  , pre_text  , pre_value, post_index  , post_text, post_value);
        			if (rtn)
        			{
        				this._accessibility_index = this.index = post_index;
        				this.text = post_text;

        				this.set_value(post_value);

        				this.applyto_bindSource("value", post_value);
        				this.on_fire_onitemchanged(this, pre_index  , pre_text  , pre_value, post_index  , post_text, post_value);
        			}
        		}

        		nexacro.getPopupFrames()[v.frame].form.close();
        	};
        };


        });
        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("test_raon.xadl");
    };
}
)();
