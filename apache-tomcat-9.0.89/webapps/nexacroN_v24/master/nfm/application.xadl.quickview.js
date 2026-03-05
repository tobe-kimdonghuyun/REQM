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
            obj._setContents("<ColumnInfo><Column id=\"KORN_MSGE\" type=\"string\" size=\"32\"/><Column id=\"ENGL_MSGE\" type=\"string\" size=\"32\"/><Column id=\"MSGE_CD\" type=\"string\" size=\"32\"/><Column id=\"MSGE_FLAG_CD\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"KORN_MSGE\">이력을 추가하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Would you like to add a history?</Col><Col id=\"MSGE_CD\">comfirm.before.addhistory</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">입력하신 날짜({0})는 이력이 존재합니다.\\n덮어쓰시겠습니까?</Col><Col id=\"ENGL_MSGE\">&quot;The date you entered ({0}) already has existing records.\\nWould you like to overwrite them?&quot;</Col><Col id=\"MSGE_CD\">comfirm.before.addhistory.overwrite</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">SR 요청건수 미처리 {0}건이 존재합니다.\\n승인하시겠습니까?</Col><Col id=\"ENGL_MSGE\">SR request count outstanding ({0}) cases exist.\\nAre you sure you want to approve it?</Col><Col id=\"MSGE_CD\">comfirm.before.appryn</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">저장된 승인자의 정보와 일치하지 않습니다.\\n새로 저장 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Doesn&apos;t match the stored approver&apos;s information.\\nDo you want to save it anew?</Col><Col id=\"MSGE_CD\">comfirm.before.save.user</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">선택한 부서 데이터권한을 등록하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Do you want to register the data rights of the selected department?</Col><Col id=\"MSGE_CD\">confirm.before.adddatagrp</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">기존에 승인한 사용자가 아닙니다.\\n새로 승인하시겠습니까?</Col><Col id=\"ENGL_MSGE\">This is not an authorized user.\\nWould you like to approve it?</Col><Col id=\"MSGE_CD\">confirm.before.approve</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">승인 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Do you want to approve?</Col><Col id=\"MSGE_CD\">confirm.before.apprstatus</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">승인 취소하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to cancel the approval?</Col><Col id=\"MSGE_CD\">confirm.before.apprstatuscancel</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">변경된 정보가 있습니다.\\n저장 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Would you like to save your changes?</Col><Col id=\"MSGE_CD\">confirm.before.changesave</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">변경된 내용이 있습니다. 저장하지 않고 화면을 닫겠습니까?</Col><Col id=\"ENGL_MSGE\">Something has changed. Are you sure you want to close the screen without saving?</Col><Col id=\"MSGE_CD\">confirm.before.closesave</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">권한그룹 삭제 시 하위 상세 정보가 있는 경우 상세 정보도 모두 삭제됩니다.\\n선택한 권한그룹을 삭제하시겠습니까 ?</Col><Col id=\"ENGL_MSGE\">If the parent group is deleted when the parent group is deleted, all details are also deleted.\\nAre you sure you want to delete the selected parent group?</Col><Col id=\"MSGE_CD\">confirm.before.delauth</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">선택한 부서 데이터 권한을 삭제 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to delete the selected department data permission?</Col><Col id=\"MSGE_CD\">confirm.before.deldatagrp</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">선택된 자료를 삭제 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to delete?</Col><Col id=\"MSGE_CD\">confirm.before.delete</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">선택된 자료를 삭제 후 저장하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to delete and save?</Col><Col id=\"MSGE_CD\">confirm.before.deletesave</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">메뉴를 삭제하시면 메뉴에 할당된 모든 권한을 삭제합니다.\\n삭제 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Deleting the menu will delete all permissions assigned to the menu.\\nAre you sure you want to delete?</Col><Col id=\"MSGE_CD\">confirm.before.delmenu</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">선택한 파일을 삭제하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to delete the selected file?</Col><Col id=\"MSGE_CD\">confirm.before.filedelete</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">전체 파일을 삭제하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to delete all files?</Col><Col id=\"MSGE_CD\">confirm.before.filedeleteall</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">파일을 다운로드하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Would you like to download the file?</Col><Col id=\"MSGE_CD\">confirm.before.filedownload</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">필터링된 상태에서는 {0} 작업을 할수없습니다.\\n재조회 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">You will not be able to work with the {0} in the filtered state.\\nWould you like to search again?</Col><Col id=\"MSGE_CD\">confirm.before.fullsearch</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">사용자를 삭제하시면 사용자별 데이터그룹도 모두 삭제합니다.\\n삭제 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Deleting a user also deletes all user-specific data groups.\\nDelete it?</Col><Col id=\"MSGE_CD\">confirm.before.jobuser</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?</Col><Col id=\"ENGL_MSGE\">There are unsaved data. Would you like to leave now?</Col><Col id=\"MSGE_CD\">confirm.before.movepage</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">If you move the selected row, your changes will be discarded. \\nWould you like to continue?</Col><Col id=\"MSGE_CD\">confirm.before.moveropos</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">선택한 버튼에 권한을 추가하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Would you like to add permission to the selected button?</Col><Col id=\"MSGE_CD\">confirm.before.regi.button</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">선택한 메뉴를 할당하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Do you want to assign the selected menu?</Col><Col id=\"MSGE_CD\">confirm.before.regi.menu</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">변경된 데이터가 있습니다. 전체 화면을 닫겠습니까?</Col><Col id=\"ENGL_MSGE\">There are unsaved data. Would you like to leave now?</Col><Col id=\"MSGE_CD\">confirm.before.removeallpage</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">변경된 데이터가 있습니다. 화면을 다시 여시겠습니까?</Col><Col id=\"ENGL_MSGE\">I have changed data. Would you like to reopen the screen?</Col><Col id=\"MSGE_CD\">confirm.before.reopen</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 변경 사항이 있습니다.\\n저장하시겠습니까?</Col><Col id=\"ENGL_MSGE\">There is a change in {0}.\\nDo you want to save it?</Col><Col id=\"MSGE_CD\">confirm.before.save</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">{0}에 변경 사항이 있습니다.\\n저장하시겠습니까?&apos;</Col><Col id=\"ENGL_MSGE\">confirm.before.save.where</Col><Col id=\"MSGE_CD\">confirm.before.save.where</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">검색을 진행하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Any unsaved data will be discarded. \\nWould you like to continue?</Col><Col id=\"MSGE_CD\">confirm.before.search</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">선택한 버튼의 권한을 삭제하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to delete the permission of the selected button?</Col><Col id=\"MSGE_CD\">confirm.before.unregi.button</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">선택한 할당된 메뉴를 삭제하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to delete the selected assigned menu?</Col><Col id=\"MSGE_CD\">confirm.before.unregi.menu</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">종료 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to exit?</Col><Col id=\"MSGE_CD\">confirm.exit</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"ENGL_MSGE\">{0}</Col><Col id=\"MSGE_CD\">confirm.general</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">화면이 초기화됩니다. 계속 진행하시겠습니까?</Col><Col id=\"ENGL_MSGE\">The screen is initialized. Do you want to continue?</Col><Col id=\"MSGE_CD\">confirm.init</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">로그아웃 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Are you sure you want to log out??</Col><Col id=\"MSGE_CD\">confirm.logout</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">전체 화면을 닫겠습니까?</Col><Col id=\"ENGL_MSGE\">Would you like to leave now?</Col><Col id=\"MSGE_CD\">confirm.removeallpage</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">저장 하시겠습니까?</Col><Col id=\"ENGL_MSGE\">Would you like to save your changes?</Col><Col id=\"MSGE_CD\">confirm.save</Col><Col id=\"MSGE_FLAG_CD\">CFN</Col></Row><Row><Col id=\"KORN_MSGE\">프로세스가 실패하였습니다!</Col><Col id=\"ENGL_MSGE\">Failed process!</Col><Col id=\"MSGE_CD\">msg.action.fail</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col></Row><Row><Col id=\"KORN_MSGE\">처리 되었습니다.</Col><Col id=\"ENGL_MSGE\">Successfully processed!</Col><Col id=\"MSGE_CD\">msg.action.success</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">업데이트가 필요합니다.</Col><Col id=\"ENGL_MSGE\">It is need to update</Col><Col id=\"MSGE_CD\">msg.action.update</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}을 먼저 {1}한 후에 작업하십시오.</Col><Col id=\"ENGL_MSGE\">{1} and work with the {0} first.</Col><Col id=\"MSGE_CD\">msg.before.search</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">해당하는 메뉴에 Program File이 등록되지 않았습니다.</Col><Col id=\"ENGL_MSGE\">the requested menu does not exist!</Col><Col id=\"MSGE_CD\">msg.call.nofile</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 변경된 내역이 있습니다.\\n {1}을(를) 저장 후 작업하십시오.</Col><Col id=\"ENGL_MSGE\">{0} There is a history of changes. \\n {1} Save and work.</Col><Col id=\"MSGE_CD\">msg.check.save</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">데이터베이스 오류입니다. \\n에러코드 : {0}</Col><Col id=\"ENGL_MSGE\">Database error. \\n Error Code : {0}</Col><Col id=\"MSGE_CD\">msg.database.error</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col></Row><Row><Col id=\"KORN_MSGE\">{0}을/를 삭제하신 후 {1}을/를 삭제하시기 바랍니다.</Col><Col id=\"ENGL_MSGE\">Please delete {0} and then {1}.</Col><Col id=\"MSGE_CD\">msg.delete.input</Col><Col id=\"MSGE_FLAG_CD\">ERR</Col></Row><Row><Col id=\"KORN_MSGE\">삭제 되었습니다.</Col><Col id=\"ENGL_MSGE\">Successfully deleted!</Col><Col id=\"MSGE_CD\">msg.delete.success</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">하위 자료가 있어 삭제할 수 없습니다.</Col><Col id=\"ENGL_MSGE\">the requested deletion could not be performed because dependent data found!</Col><Col id=\"MSGE_CD\">msg.err.delete.child</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">진행 중인 TASK는 삭제할 수 없습니다.</Col><Col id=\"ENGL_MSGE\">You cannot delete the ongoing TASK.</Col><Col id=\"MSGE_CD\">msg.err.delete.status</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">선택된 항목이 없습니다.</Col><Col id=\"ENGL_MSGE\">No item has been selected!</Col><Col id=\"MSGE_CD\">msg.err.grid.noselect</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">저장할 목록에 {0} 항목이 동일한 데이터가 존재합니다.</Col><Col id=\"ENGL_MSGE\">The same data exists in the list to save as {0}</Col><Col id=\"MSGE_CD\">msg.err.griddup</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">날짜의 입력 가능 범위를 벗어났습니다.</Col><Col id=\"ENGL_MSGE\">Invalid date.</Col><Col id=\"MSGE_CD\">msg.err.maxdate</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">화면은 {0}개 까지만 실행 가능합니다. 화면을 닫고 다시 실행해주세요.</Col><Col id=\"ENGL_MSGE\">You can only run up to {0} screens. Please close the screen and try again.</Col><Col id=\"MSGE_CD\">msg.err.mdicount.max</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">해당하는 데이터가 없습니다.</Col><Col id=\"ENGL_MSGE\">No data available.</Col><Col id=\"MSGE_CD\">msg.err.nodata</Col><Col id=\"MSGE_FLAG_CD\">ERR</Col></Row><Row><Col id=\"KORN_MSGE\">파일이 존재하지 않습니다.</Col><Col id=\"ENGL_MSGE\">nofile</Col><Col id=\"MSGE_CD\">msg.err.nofile</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"ENGL_MSGE\">{0}</Col><Col id=\"MSGE_CD\">msg.err.tran</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col></Row><Row><Col id=\"KORN_MSGE\">{0}을(를) 저장 후 작업을 진행하십시오.</Col><Col id=\"ENGL_MSGE\">Save the {0} and proceed.</Col><Col id=\"MSGE_CD\">msg.err.updata</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">변경된 내역을 저장 후 작업하세요.</Col><Col id=\"ENGL_MSGE\">Please, save your changes first!</Col><Col id=\"MSGE_CD\">msg.err.updateafter</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"ENGL_MSGE\">{0}</Col><Col id=\"MSGE_CD\">msg.err.validator</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) {1} 중 하나의 값이어야 합니다.</Col><Col id=\"ENGL_MSGE\">{0} must be the value of {1}</Col><Col id=\"MSGE_CD\">msg.err.validator.code</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 이(가) {1} 보다 작습니다.</Col><Col id=\"ENGL_MSGE\">{0} is less than {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.comparebig</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 이(가) {1} 보다 큽니다.</Col><Col id=\"ENGL_MSGE\">{0} is greater than {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.comparesmall</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) 유효하지 않은 날짜 형식입니다.</Col><Col id=\"ENGL_MSGE\">{0} is in invalid date format.</Col><Col id=\"MSGE_CD\">msg.err.validator.date</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">종료일이 시작일보다 빠릅니다.</Col><Col id=\"ENGL_MSGE\">Invalid date range.</Col><Col id=\"MSGE_CD\">msg.err.validator.date.great</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) 유효하지 않은 년월 형식입니다.</Col><Col id=\"ENGL_MSGE\">{0} is in invalid year/month format.</Col><Col id=\"MSGE_CD\">msg.err.validator.dateym</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.</Col><Col id=\"ENGL_MSGE\">The fractional part of {0} must consiste of {1} digits.</Col><Col id=\"MSGE_CD\">msg.err.validator.declimit</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) 숫자만 입력 가능합니다.</Col><Col id=\"ENGL_MSGE\">{0} must be a numeric value.</Col><Col id=\"MSGE_CD\">msg.err.validator.digits</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}에 중복된 로우가 존재합니다.</Col><Col id=\"ENGL_MSGE\">Duplicate rows exist in {0}.</Col><Col id=\"MSGE_CD\">msg.err.validator.duplcation</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">e-mail이 잘못된 형태로 입력 되었습니다.</Col><Col id=\"ENGL_MSGE\">The entered email address is invalid.</Col><Col id=\"MSGE_CD\">msg.err.validator.email</Col><Col id=\"MSGE_FLAG_CD\">ERR</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 이(가) {1} 와(과) 일치하지 않습니다.</Col><Col id=\"ENGL_MSGE\">{0} is not equal to {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.equalto</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 의 날짜가 {1} 의 날짜보다 작습니다.</Col><Col id=\"ENGL_MSGE\">{0} is less than {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.fromto</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 의 입력값은 {1} 자리이어야 합니다.</Col><Col id=\"ENGL_MSGE\">The length of {0} must be equal to {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.length</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) {1} 이하의 숫자만 입력 가능합니다.</Col><Col id=\"ENGL_MSGE\">{0} must be a numeric value less than or equal to {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.max</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col><Col id=\"ENGL_MSGE\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.maxlength</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col><Col id=\"ENGL_MSGE\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.maxlengthB</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) {1} 이상의 숫자만 입력 가능합니다.</Col><Col id=\"ENGL_MSGE\">{0} must be a numeric value greater than or equal to {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.min</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col><Col id=\"ENGL_MSGE\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.minlength</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col><Col id=\"ENGL_MSGE\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"MSGE_CD\">msg.err.validator.minlengthB</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}개 이상 선택 할 수 없습니다.</Col><Col id=\"ENGL_MSGE\">You can&apos;t select more than {0}</Col><Col id=\"MSGE_CD\">msg.err.validator.multicombo.maxcnt</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">영문/숫자/특수문자 조합 (8~15자) 으로 \\n다시 입력해 주세요.</Col><Col id=\"ENGL_MSGE\">English/Number/Special Character Combination (8-15 characters)\\nPlease re-enter.</Col><Col id=\"MSGE_CD\">msg.err.validator.password.add.dfrnt</Col><Col id=\"MSGE_FLAG_CD\">ERR</Col></Row><Row><Col id=\"KORN_MSGE\">변경하고자 하는 비밀번호가 다릅니다.\\n다시 입력해 주세요.</Col><Col id=\"ENGL_MSGE\">The password you want to change is different.\\nPlease enter it again.</Col><Col id=\"MSGE_CD\">msg.err.validator.password.chnge.dfrnt</Col><Col id=\"MSGE_FLAG_CD\">ERR</Col></Row><Row><Col id=\"KORN_MSGE\">전화번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"ENGL_MSGE\">The entered phone number is invalid.</Col><Col id=\"MSGE_CD\">msg.err.validator.phone</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) {1} 와(과) {2} 사이의 값입니다.</Col><Col id=\"ENGL_MSGE\">The value of {0} is between {1} and {2}.</Col><Col id=\"MSGE_CD\">msg.err.validator.range</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.</Col><Col id=\"ENGL_MSGE\">The length of {0} is between {1} and {2}.</Col><Col id=\"MSGE_CD\">msg.err.validator.rangelength</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) 필수 입력 항목입니다.</Col><Col id=\"ENGL_MSGE\">{0} is a required field.</Col><Col id=\"MSGE_CD\">msg.err.validator.required</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) 올바른 주민번호가 아닙니다.</Col><Col id=\"ENGL_MSGE\">The entered Social Security Number is invalid.</Col><Col id=\"MSGE_CD\">msg.err.validator.ssn</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">웹사이트 주소가 잘못 입력 되었습니다.</Col><Col id=\"ENGL_MSGE\">The entered website address is invalid.</Col><Col id=\"MSGE_CD\">msg.err.validator.url</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">우편번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"ENGL_MSGE\">The entered ZIP code is invalid.</Col><Col id=\"MSGE_CD\">msg.err.validator.zipcode</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">입력하는 Code ({0})값이 이미 등록되어 있습니다.</Col><Col id=\"ENGL_MSGE\">Code already exsits!</Col><Col id=\"MSGE_CD\">msg.exist.code</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) 허용되지 않는 확장자입니다.[{1}]</Col><Col id=\"ENGL_MSGE\">{0} is an unacceptable extension.[{1}]</Col><Col id=\"MSGE_CD\">msg.file.allowtype</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">파일 다운로드가 실패하였습니다.</Col><Col id=\"ENGL_MSGE\">File download failed.</Col><Col id=\"MSGE_CD\">msg.file.downloadfail</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 은(는) 중복된 파일이 존재합니다.</Col><Col id=\"ENGL_MSGE\">{0} duplicate files exist.</Col><Col id=\"MSGE_CD\">msg.file.exist</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">첨부 파일의 용량은 최고 {0}MB까지 입니다.</Col><Col id=\"ENGL_MSGE\">Maximum allowed attachment size is {0} MB.</Col><Col id=\"MSGE_CD\">msg.file.filesize</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">첨부 파일의 전체 용량은 최고 {0}MB까지 입니다.</Col><Col id=\"ENGL_MSGE\">Maximum allowed attachment total size is {0} MB.</Col><Col id=\"MSGE_CD\">msg.file.filetotalsize</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">첨부 파일은 {0}개 이상 등록 할 수 없습니다.</Col><Col id=\"ENGL_MSGE\">Attachments can not be registered in more than {0}.</Col><Col id=\"MSGE_CD\">msg.file.itemcount</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}로(으로) 파일업로드가 실패하였습니다.</Col><Col id=\"ENGL_MSGE\">the file upload is failed because {0}.</Col><Col id=\"MSGE_CD\">msg.file.uploadfail</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0}</Col><Col id=\"ENGL_MSGE\">{0}</Col><Col id=\"MSGE_CD\">msg.general</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">해당하는 사용자 정보가 없습니다.</Col><Col id=\"ENGL_MSGE\">No user found.</Col><Col id=\"MSGE_CD\">msg.login.error</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">정상적인 경로로 접속하시기 바랍니다.</Col><Col id=\"ENGL_MSGE\">invalid access! please, login first at www.tobesoft.com</Col><Col id=\"MSGE_CD\">msg.login.url.error</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">최상위 root노드는 {0}할수 없습니다.</Col><Col id=\"ENGL_MSGE\">The top root node can not {0}.</Col><Col id=\"MSGE_CD\">msg.nochange.root</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">해당 Menu가 존재하지 않습니다!</Col><Col id=\"ENGL_MSGE\">The specified menu doesn&apos;t exist.</Col><Col id=\"MSGE_CD\">msg.nomenu</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">해당노드가 존재하지 않습니다.</Col><Col id=\"ENGL_MSGE\">The node does not exist.</Col><Col id=\"MSGE_CD\">msg.nonode</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">권한이 없습니다.</Col><Col id=\"ENGL_MSGE\">You do not have permission</Col><Col id=\"MSGE_CD\">msg.nosearchscope</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">자기 자신을 선택할수 없습니다.</Col><Col id=\"ENGL_MSGE\">I can not choose myself.</Col><Col id=\"MSGE_CD\">msg.nosel.selfnode</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">자신의 하위노드는 선택할수 없습니다.</Col><Col id=\"ENGL_MSGE\">You can not select your own subnodes.</Col><Col id=\"MSGE_CD\">msg.nosel.subnode</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">{0} 을(를) 선택해 주십시요.</Col><Col id=\"ENGL_MSGE\">Please, select {0}</Col><Col id=\"MSGE_CD\">msg.noselect</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">준비중입니다.</Col><Col id=\"ENGL_MSGE\">Coming soon.</Col><Col id=\"MSGE_CD\">msg.preparation</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">변경된 내역이 없습니다.</Col><Col id=\"ENGL_MSGE\">No changes found.</Col><Col id=\"MSGE_CD\">msg.save.nochange</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">저장할 데이터가 없습니다.</Col><Col id=\"ENGL_MSGE\">No data to save.</Col><Col id=\"MSGE_CD\">msg.save.nodata</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">저장 되었습니다.</Col><Col id=\"ENGL_MSGE\">Successfully saved!</Col><Col id=\"MSGE_CD\">msg.save.success</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">접근할 수 없는 일정입니다.</Col><Col id=\"ENGL_MSGE\">It&apos;s an inaccessible schedule.</Col><Col id=\"MSGE_CD\">msg.scd.access.fail</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">등록된 일정이 있어 삭제할 수 없습니다.</Col><Col id=\"ENGL_MSGE\">Can&apos;t delete it because have a registered schedule.</Col><Col id=\"MSGE_CD\">msg.scd.child</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">동일한 일정마스터코드가 존재합니다.</Col><Col id=\"ENGL_MSGE\">Duplicate Schedule Code exist.</Col><Col id=\"MSGE_CD\">msg.scd.scdcd.exist</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">일정 등록 권한이 없습니다.</Col><Col id=\"ENGL_MSGE\">You do not have permission to register a schedule.</Col><Col id=\"MSGE_CD\">msg.scdaddnoscope</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">지정된 조건에 해당하는 항목을 찾을 수 없습니다.</Col><Col id=\"ENGL_MSGE\">No data found.</Col><Col id=\"MSGE_CD\">msg.search.nodata</Col><Col id=\"MSGE_FLAG_CD\">INF</Col></Row><Row><Col id=\"KORN_MSGE\">서버 오류입니다.\\n관리자에게 문의하세요.</Col><Col id=\"ENGL_MSGE\">Server error. Please contact your administrator.</Col><Col id=\"MSGE_CD\">msg.server.error</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col></Row><Row><Col id=\"KORN_MSGE\">서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}</Col><Col id=\"ENGL_MSGE\">The server received the following error message.s\\n{0}</Col><Col id=\"MSGE_CD\">msg.server.error.msg</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col></Row><Row><Col id=\"KORN_MSGE\">세션이 종료되었습니다. 다시 로그인해주세요.</Col><Col id=\"ENGL_MSGE\">Your session has expired, please login again.</Col><Col id=\"MSGE_CD\">msg.session.timeout</Col><Col id=\"MSGE_FLAG_CD\">WAN</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"winId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"groupId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"32\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl2\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"INT\" size=\"16\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"32\"/><Column id=\"param\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuId\">DEV</Col><Col id=\"menuNm\">개발 지원</Col><Col id=\"upMenuId\"/><Col id=\"groupId\">DEV</Col><Col id=\"level\">1</Col><Col id=\"naviNm\">개발 지원</Col></Row><Row><Col id=\"menuId\">DEV01</Col><Col id=\"menuNm\">공통 기능</Col><Col id=\"upMenuId\">DEV</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">2</Col><Col id=\"naviNm\">개발 지원.공통 기능</Col></Row><Row><Col id=\"menuId\">DEV9999</Col><Col id=\"menuUrl\">sample::postgreList.xfdl</Col><Col id=\"menuNm\">Postgre 및 리포트 예제</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.스크립트 표준</Col></Row><Row><Col id=\"menuId\">DEV99991</Col><Col id=\"menuUrl\">business::sysMng/bbsMng/bbsMngList.xfdl</Col><Col id=\"menuNm\">bbsMngList</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.스크립트 표준</Col></Row><Row><Col id=\"menuId\">DEV99992</Col><Col id=\"menuUrl\">business::mngmtPlan/wplbk/wplbkMaster.xfdl</Col><Col id=\"menuNm\">wplbkMaster</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.스크립트 표준</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"grp\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/><Column id=\"upmenu\" type=\"STRING\" size=\"256\"/><Column id=\"bandtype\" type=\"STRING\" size=\"256\"/><Column id=\"curselect\" type=\"STRING\" size=\"256\"/><Column id=\"enableMenu\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"grp\">sort</Col><Col id=\"id\">sort</Col><Col id=\"level\">0</Col><Col id=\"caption\">헤더정렬 사용</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">sort</Col><Col id=\"id\">sortfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">헤더정렬 사용안함</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">sort</Col><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">colfix</Col><Col id=\"level\">0</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\"/><Col id=\"bandtype\">head</Col><Col id=\"grp\">colfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">colfixfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">열고정 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\"/><Col id=\"bandtype\">head</Col><Col id=\"grp\">colfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"grp\">colfix</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">rowfix</Col><Col id=\"level\">0</Col><Col id=\"caption\">행고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\"/><Col id=\"bandtype\">body</Col><Col id=\"grp\">rowfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">rowfixfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">행고정 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\"/><Col id=\"bandtype\">body</Col><Col id=\"grp\">rowfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"grp\">rowfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">filter</Col><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 팝업</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"enableMenu\">true</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"grp\">filter</Col><Col id=\"id\">filterfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리트필터 팝업 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0&apos;</Col><Col id=\"enableMenu\">true</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"grp\">filterNew</Col><Col id=\"id\">showcolfilter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"enableMenu\">true</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"grp\">filterNew</Col><Col id=\"id\">hidecolfilter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 숨기기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"enableMenu\">false</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"grp\">filterNew</Col><Col id=\"id\">filterfreeNew</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"enableMenu\">true</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">filter</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">find</Col><Col id=\"level\">0</Col><Col id=\"caption\">데이터  찾기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">find</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">find</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">colhide</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기/보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"grp\">colhide</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">colhideNew</Col><Col id=\"id\">colhideNew</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">colhideNew</Col><Col id=\"id\">colhidefreeNew</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">false</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">colhide</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scroll</Col><Col id=\"level\">0</Col><Col id=\"caption\">스크롤옵션</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scrolldefault</Col><Col id=\"level\">1</Col><Col id=\"caption\">기본</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scrollmiddle</Col><Col id=\"level\">1</Col><Col id=\"caption\">중앙표시</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scrollall</Col><Col id=\"level\">1</Col><Col id=\"caption\">상단,하단,중앙표시</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scrollpos</Col><Col id=\"level\">1</Col><Col id=\"caption\">스크롤위치표시</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">select</Col><Col id=\"level\">0</Col><Col id=\"caption\">셀선택옵션</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">selectrow</Col><Col id=\"level\">1</Col><Col id=\"caption\">row</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">selectcell</Col><Col id=\"level\">1</Col><Col id=\"caption\">cell</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">selectmultirow</Col><Col id=\"level\">1</Col><Col id=\"caption\">다중 row</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">selectarea</Col><Col id=\"level\">1</Col><Col id=\"caption\">영역</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">initial</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드 설정 초기화</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">initial</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCmmnBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"component\" type=\"STRING\" size=\"256\"/><Column id=\"right\" type=\"STRING\" size=\"256\"/><Column id=\"width\" type=\"STRING\" size=\"256\"/><Column id=\"visible\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCommCode", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"ihidNum\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztId\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztNm\" type=\"STRING\" size=\"256\"/><Column id=\"uniqId\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"ip\" type=\"STRING\" size=\"256\"/><Column id=\"dn\" type=\"STRING\" size=\"256\"/><Column id=\"userSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ssnId\" type=\"STRING\" size=\"256\"/><Column id=\"rcntCntnDt\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"insttId\" type=\"STRING\" size=\"256\"/><Column id=\"upperInsttId\" type=\"STRING\" size=\"256\"/><Column id=\"insttTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"orgntId\" type=\"STRING\" size=\"256\"/><Column id=\"insttNm\" type=\"STRING\" size=\"256\"/><Column id=\"pinchYn\" type=\"STRING\" size=\"256\"/><Column id=\"athry\" type=\"STRING\" size=\"256\"/><Column id=\"upperInsttNm\" type=\"STRING\" size=\"256\"/><Column id=\"mngmtAuthrt\" type=\"STRING\" size=\"256\"/><Column id=\"fxtrmAuthrt\" type=\"STRING\" size=\"256\"/><Column id=\"rsrcAuthrt\" type=\"STRING\" size=\"256\"/><Column id=\"enwrkAuthrt\" type=\"STRING\" size=\"256\"/><Column id=\"saleAuthrt\" type=\"STRING\" size=\"256\"/><Column id=\"orgntLvl\" type=\"STRING\" size=\"256\"/><Column id=\"excptInstYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsLog", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCount", this);
            obj._setContents("<ColumnInfo><Column id=\"totCnt\" type=\"STRING\" size=\"256\"/><Column id=\"todayCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsNtfcnCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"ntfcnCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            this.set_licenseurl("./license/NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1920","1080",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("NFM");
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
        *  devPack Library
        *  @FileName 	application
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020.11.24
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2020.11.24			TOBESOFT				application
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/

        /* 넥사크로 어플리케이션 객체를 전역변수로 등록 */
        app = nexacro.getApplication();

        this.gvRunMode  = "";					// 실행환경 S : Studio, L : local, D : 개발, R : 운영

        /* 각 프레임에 해당되는 객체 참조 변수 */
        this.gvVfrs;
        this.gvFrmLogin;
        this.gvFrmTop;
        this.gvFrmLeft;
        this.gvFrmRight;
        this.gvFrmBottom;
        this.gvFrmBody;
        this.gvFrmMain;
        this.gvFrsWork;
        this.gvFrmMdi;
        this.gvFrmMenu;

        /* 프레임 관련 변수*/
        this.LOGIN_FORM_PATH = "frame::frmLogin.xfdl";
        this.TOP_FORM_PATH   = "frame::frmTop.xfdl";
        this.LEFT_FORM_PATH  = "frame::frmLeft.xfdl";
        this.MAIN_FORM_PATH  = "frame::frmBody.xfdl";

        this.gvOpenMaxFrame = 10; 				// 열리는 프레임 최대 갯수
        // this.gvFrameStat = "login";				// 프레임상태(login,main,sub)
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
        	nexacro.setEnvironmentVariable("evQuikView", "N");

        	//trace ("======================== DevPack(PC) Start ==============================");

        	// 각 프레임에 해당되는 객체 참조 변수 설정
        	this.gvVfrs = this.mainframe.vfrs;
        	this.gvFrmLogin = this.mainframe.vfrs.frmLogin;
        	this.gvFrmTop = this.mainframe.vfrs.vfrsBase.frmTop;
        	this.gvFrmBody = this.mainframe.vfrs.vfrsBase.frmBody;

        	var sRunMode = "S";  // S : Studio, L : local, D : 개발, R : 운영
        	var objEnv	 = nexacro.getEnvironment();
        	var objSrv   = objEnv.services["svcUrl"];

        	// 런타임 접속
        	if (system.navigatorname == "nexacro") {
        		var sXadl = nexacro.getProjectPath();

        		// 로컬(Studio)
        		if (sXadl.indexOf("file://") != -1) {
        			sRunMode = "S";
        			this.mainframe.set_titletext("로컬(Studio) - " + this.mainframe.titletext);
        			objSrv.set_url("http://localhost:9093/");
        		} else if (sXadl.indexOf("tobesoft.com")>-1) {
        			sRunMode = "R";
        			objSrv.set_url("http://mobiletong.tobesoft.com:83/");
        		}

        		// Runtime 실행할때 TitleBar 크기(30px) 만큼 높이를 조정
        		this.mainframe.set_height(932);

        		// Runtime 실행할때 border 보이도록 설정
        		this.mainframe.set_border("1px solid #111111");
        	}
        	//WEB 접속
        	else {
        		var urlPath = window.location.protocol + "//" + window.location.host;

        		//서비스  URL 세팅
         		objSrv.set_url(urlPath+"/");

        		// 로컬(웹)
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 ) {
        			sRunMode = "L";
        			this.mainframe.set_titletext("국가산림경영관리시스템 - " + this.mainframe.titletext);
        		}
        		// 운영
        		else if (objSrv.url.indexOf("mrv.forest.go.kr")>-1) {
        			sRunMode = "R";
        			this.mainframe.set_titletext("국가산림경영관리시스템 - " + this.mainframe.titletext);
        		}
        		// 개발(웹)
        		else {
        			sRunMode = "D";
        			this.mainframe.set_titletext("국가산림경영관리시스템 - " + this.mainframe.titletext);
        		}
        	}
        	this.gvRunMode = sRunMode;

        	// 로그인 처리
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
		this.checkLicense("./license/NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("application.xadl");
    };
}
)();
