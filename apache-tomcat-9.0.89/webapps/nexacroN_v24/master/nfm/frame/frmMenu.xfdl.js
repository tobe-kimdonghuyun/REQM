(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMenu");
            this.set_titletext("Menu Frame");
            this.set_cssclass("frm_LF_menu");
            if (Form == this.constructor)
            {
                this._setFormPosition(234,508);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuExt", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"32\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"32\"/><Column id=\"naviNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuId\">DEV</Col><Col id=\"menuNm\">개발 지원</Col><Col id=\"upMenuId\"/><Col id=\"groupId\">DEV</Col><Col id=\"level\">1</Col><Col id=\"naviNm\">개발 지원</Col></Row><Row><Col id=\"menuId\">DEV01</Col><Col id=\"menuNm\">공통 기능</Col><Col id=\"upMenuId\">DEV</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">2</Col><Col id=\"naviNm\">개발 지원.공통 기능</Col></Row><Row><Col id=\"menuId\">DEV9999</Col><Col id=\"menuUrl\">sample::postgreList.xfdl</Col><Col id=\"menuNm\">Postgre 및 리포트 예제</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.스크립트 표준</Col></Row><Row><Col id=\"menuId\">DEV0101</Col><Col id=\"menuUrl\">sample::sampleScript.xfdl</Col><Col id=\"menuNm\">스크립트 표준</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.스크립트 표준</Col></Row><Row><Col id=\"menuId\">DEV0102</Col><Col id=\"menuUrl\">sample::sampleTransaction.xfdl</Col><Col id=\"menuNm\">트랜잭션</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.트랜잭션</Col></Row><Row><Col id=\"menuId\">DEV0103</Col><Col id=\"menuUrl\">sample::samplePopup.xfdl</Col><Col id=\"menuNm\">팝업</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.팝업</Col></Row><Row><Col id=\"menuId\">DEV0104</Col><Col id=\"menuUrl\">sample::sampleMessage.xfdl</Col><Col id=\"menuNm\">메세지</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.메세지</Col></Row><Row><Col id=\"menuId\">DEV0105</Col><Col id=\"menuUrl\">sample::sampleValidation.xfdl</Col><Col id=\"menuNm\">정합성 체크</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.정합성 체크</Col></Row><Row><Col id=\"menuId\">DEV0106</Col><Col id=\"menuUrl\">sample::sampleGrid.xfdl</Col><Col id=\"menuNm\">그리드 공통기능</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.그리드 공통기능</Col></Row><Row><Col id=\"menuId\">DEV0107</Col><Col id=\"menuUrl\">sample::samplePaging.xfdl</Col><Col id=\"menuNm\">그리드 페이징</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.그리드 페이징</Col></Row><Row><Col id=\"menuId\">DEV0108</Col><Col id=\"menuUrl\">sample::sampleExcel.xfdl</Col><Col id=\"menuNm\">액셀 import/export</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.액셀 import/export</Col></Row><Row><Col id=\"menuId\">DEV0109</Col><Col id=\"menuUrl\">sample::sampleFile.xfdl</Col><Col id=\"menuNm\">파일 upload/download</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.파일 upload/download</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV124</Col><Col id=\"menuUrl\">sample::sampleSingFileUpload.xfdl</Col><Col id=\"menuNm\">단일파일업로드</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"naviNm\">개발 지원.공통 기능.단일 파일 업로드</Col></Row><Row><Col id=\"menuId\">DEV0110</Col><Col id=\"menuUrl\">sample::sampleGridType.xfdl</Col><Col id=\"menuNm\">그리드 다양한 표현</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.그리드 다양한 표현</Col></Row><Row><Col id=\"menuId\">DEV0111</Col><Col id=\"menuUrl\">sample::sampleGridGroup.xfdl</Col><Col id=\"menuNm\">그리드 그룹/Suppress</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.그리드 그룹/Suppress</Col></Row><Row><Col id=\"menuId\">DEV0112</Col><Col id=\"menuUrl\">sample::sampleDynamicDiv.xfdl</Col><Col id=\"menuNm\">Div 동적 생성</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.Div 동적 생성</Col></Row><Row><Col id=\"menuId\">DEV0113</Col><Col id=\"menuUrl\">sample::sampleDynamicTab.xfdl</Col><Col id=\"menuNm\">Tabpage 동적 생성</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.Tabpage 동적 생성</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0117</Col><Col id=\"menuUrl\">sample::sampleResizeContainer.xfdl</Col><Col id=\"menuNm\">컨테이너 높이 조정</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"naviNm\">개발 지원.공통 기능.컨테이너 높이 동적 변경</Col></Row><Row><Col id=\"menuId\">DEV0114</Col><Col id=\"menuUrl\">sample::sampleRest.xfdl</Col><Col id=\"menuNm\">RestAPI</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.RestAPI</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0115</Col><Col id=\"menuUrl\">sample::sampleSubPageOpen.xfdl</Col><Col id=\"menuNm\">상세(하위) 화면 열기</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"naviNm\">개발 지원.공통 기능.상세 페이지 열기</Col></Row><Row><Col id=\"menuId\">DEV0116</Col><Col id=\"menuUrl\">sample::sampleFileReader.xfdl</Col><Col id=\"menuNm\">파일 읽기</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.파일 읽기</Col></Row><Row><Col id=\"menuId\">DEV0199</Col><Col id=\"menuUrl\">sample::test.xfdl</Col><Col id=\"menuNm\">테스트</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.공통 기능.테스트</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0120</Col><Col id=\"menuUrl\">sample::sampleFgisPopup.xfdl</Col><Col id=\"menuNm\">FGIS 팝업테스트</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"naviNm\">개발 지원.공통 기능.FGIS테스트</Col></Row><Row><Col id=\"menuUrl\">sample::sampleSectionDiv.xfdl</Col><Col id=\"menuId\">DEV0121</Col><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuNm\">Div 스크롤바 위치 이벤트</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"naviNm\">개발 지원.공통 기능.Div 스크롤바 위치 이벤트</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0122</Col><Col id=\"menuUrl\">sample::sampleUserPopup.xfdl</Col><Col id=\"menuNm\">산림청사용자검색</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"naviNm\">개발 지원.공통 기능.산림청사용자검색</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0123</Col><Col id=\"menuUrl\">sample::sampleStdgSrchPopup.xfdl</Col><Col id=\"menuNm\">법정동검색</Col><Col id=\"upMenuId\">DEV01</Col><Col id=\"naviNm\">개발 지원.공통 기능.법정동검색</Col></Row><Row><Col id=\"menuId\">DEV02</Col><Col id=\"menuUrl\"/><Col id=\"menuNm\">확장 컴포넌트</Col><Col id=\"upMenuId\">DEV</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">2</Col><Col id=\"naviNm\">개발 지원.확장 컴포넌트</Col></Row><Row><Col id=\"menuId\">DEV0201</Col><Col id=\"menuUrl\">sample::sampleCalendar.xfdl</Col><Col id=\"menuNm\">캘린더</Col><Col id=\"upMenuId\">DEV02</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.확장 컴포넌트.캘린더</Col></Row><Row><Col id=\"menuId\">DEV03</Col><Col id=\"menuUrl\"/><Col id=\"menuNm\">외부모듈 연동</Col><Col id=\"upMenuId\">DEV</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">2</Col><Col id=\"naviNm\">개발 지원.외부모듈 연동</Col></Row><Row><Col id=\"menuId\">DEV0301</Col><Col id=\"menuUrl\">sample::sampleWebBrowser.xfdl</Col><Col id=\"menuNm\">웹브라우저</Col><Col id=\"upMenuId\">DEV03</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.외부모듈 연동.웹브라우저</Col></Row><Row><Col id=\"menuId\">DEV0302</Col><Col id=\"menuNm\">웹뷰</Col><Col id=\"upMenuId\">DEV03</Col><Col id=\"menuUrl\">sample::sampleWebView.xfdl</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.외부모듈 연동.웹뷰</Col></Row><Row><Col id=\"menuId\">DEV0303</Col><Col id=\"menuUrl\">sample::sampleNexacroChart.xfdl</Col><Col id=\"menuNm\">넥사크로 차트</Col><Col id=\"upMenuId\">DEV03</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.외부모듈 연동.넥사크로 차트</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV304</Col><Col id=\"menuUrl\">sample::sampleInnorix.xfdl</Col><Col id=\"menuNm\">Innorix파일연동샘플</Col><Col id=\"upMenuId\">DEV03</Col><Col id=\"naviNm\">개발 지원.외부모듈 연동.Innorix파일연동샘플</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV305</Col><Col id=\"menuUrl\">sample::sampleCkEditor.xfdl</Col><Col id=\"menuNm\">CK에디터 샘플</Col><Col id=\"upMenuId\">DEV03</Col><Col id=\"naviNm\">개발 지원.외부모듈 연동.CK 에디터샘플</Col></Row><Row><Col id=\"menuId\">DEV04</Col><Col id=\"menuUrl\"/><Col id=\"menuNm\">디자인 가이드</Col><Col id=\"upMenuId\">DEV</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">2</Col><Col id=\"naviNm\">개발 지원.디자인 가이드</Col></Row><Row><Col id=\"menuId\">DEV0401</Col><Col id=\"menuUrl\">design::guide/guide_01_1.xfdl</Col><Col id=\"menuNm\">guide_01_1</Col><Col id=\"upMenuId\">DEV04</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 가이드.guide_01_1</Col></Row><Row><Col id=\"menuId\">DEV0402</Col><Col id=\"menuUrl\">design::guide/guide_01_2.xfdl</Col><Col id=\"menuNm\">guide_01_2</Col><Col id=\"upMenuId\">DEV04</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 가이드.guide_01_2</Col></Row><Row><Col id=\"menuId\">DEV0403</Col><Col id=\"menuUrl\">design::guide/guide_02.xfdl</Col><Col id=\"menuNm\">guide_02</Col><Col id=\"upMenuId\">DEV04</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 가이드.guide_02</Col></Row><Row><Col id=\"menuUrl\">design::guide/guide_03.xfdl</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0404</Col><Col id=\"menuNm\">guide_03</Col><Col id=\"upMenuId\">DEV04</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 가이드.guide_03</Col></Row><Row><Col id=\"menuUrl\">design::guide/guide_04.xfdl</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0405</Col><Col id=\"menuNm\">guide_04</Col><Col id=\"upMenuId\">DEV04</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 가이드.guide_04</Col></Row><Row><Col id=\"menuUrl\">design::guide/guide_05.xfdl</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0406</Col><Col id=\"menuNm\">guide_05</Col><Col id=\"upMenuId\">DEV04</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 가이드.guide_05</Col></Row><Row><Col id=\"menuUrl\">design::guide/guide_06.xfdl</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0407</Col><Col id=\"menuNm\">guide_06</Col><Col id=\"upMenuId\">DEV04</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 가이드.guide_06</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0408</Col><Col id=\"menuUrl\">design::guide/guide_07.xfdl</Col><Col id=\"menuNm\">guide_07</Col><Col id=\"upMenuId\">DEV04</Col><Col id=\"naviNm\">개발 지원.디자인 가이드.guide_07</Col></Row><Row><Col id=\"menuId\">DEV05</Col><Col id=\"menuUrl\"/><Col id=\"menuNm\">디자인 템플릿</Col><Col id=\"upMenuId\">DEV</Col><Col id=\"groupId\">DEV</Col><Col id=\"level\">2</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0501</Col><Col id=\"menuUrl\">design::template/template01.xfdl</Col><Col id=\"menuNm\">template_01</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_01</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0502</Col><Col id=\"menuUrl\">design::template/template02.xfdl</Col><Col id=\"menuNm\">template_02</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_02</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0503</Col><Col id=\"menuUrl\">design::template/template03.xfdl</Col><Col id=\"menuNm\">template_03</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_03</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0504</Col><Col id=\"menuUrl\">design::template/template04.xfdl</Col><Col id=\"menuNm\">template_04</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_04</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0505</Col><Col id=\"menuUrl\">design::template/template05.xfdl</Col><Col id=\"menuNm\">template_05</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_05</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0506</Col><Col id=\"menuUrl\">design::template/template06.xfdl</Col><Col id=\"menuNm\">template_06</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_06</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0507</Col><Col id=\"menuUrl\">design::template/template07.xfdl</Col><Col id=\"menuNm\">template_07</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_07</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0508</Col><Col id=\"menuUrl\">design::template/template08.xfdl</Col><Col id=\"menuNm\">template_08</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_08</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0509</Col><Col id=\"menuUrl\">design::template/template09.xfdl</Col><Col id=\"menuNm\">template_09</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_09</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0510</Col><Col id=\"menuUrl\">design::template/template10.xfdl</Col><Col id=\"menuNm\">template_10</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_10</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0511</Col><Col id=\"menuUrl\">design::template/template11.xfdl</Col><Col id=\"menuNm\">template_11</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_11</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0512</Col><Col id=\"menuUrl\">design::template/template12.xfdl</Col><Col id=\"menuNm\">template_12</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_12</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0513</Col><Col id=\"menuUrl\">design::template/template13.xfdl</Col><Col id=\"menuNm\">template_13</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_13</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0514</Col><Col id=\"menuUrl\">design::template/template14.xfdl</Col><Col id=\"menuNm\">template_14</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.template_14</Col></Row><Row><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0521</Col><Col id=\"menuUrl\">design::template/popup_01.xfdl</Col><Col id=\"menuNm\">popup_01</Col><Col id=\"upMenuId\">DEV05</Col><Col id=\"level\">3</Col><Col id=\"naviNm\">개발 지원.디자인 템플릿.popup_01</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV06</Col><Col id=\"menuNm\">산림사업량모듈</Col><Col id=\"upMenuId\">DEV</Col><Col id=\"naviNm\">개발지원.산림사업량모듈</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"groupId\">DEV</Col><Col id=\"menuId\">DEV0601</Col><Col id=\"menuUrl\">sample::sampleFpvMdl.xfdl</Col><Col id=\"menuNm\">산림사업량모듈팝업조회</Col><Col id=\"upMenuId\">DEV06</Col><Col id=\"naviNm\">개발지원.산림사업량모듈.산림사업량모듈팝업조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuCntnSttus", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"usid\" type=\"STRING\" size=\"256\"/><Column id=\"lgnYn\" type=\"STRING\" size=\"256\"/><Column id=\"cntnIp\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",234,508,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMenu.xfdl", function() {
        /**
         *  DevPACK
         *  @FileName 	frmMenu.xfdl
         *  @Creator 	TOBESOFT
         *  @CreateDate 	2020/11/24
         *  @Desction
         ************** 소스 수정 이력 ***********************************************
         * Date					Modifier					Description
         *******************************************************************************
         * 2020/11/24			TOBESOFT					최초생성
         *******************************************************************************
        **/

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        let oMenuInfo = {};

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description Form 로드 완료
        **/
        this.form_onload = function(obj,e)
        {//trace(obj.name, e.eventid);
        	app.gvFrmMenu = obj.parent;
        	this.dsMenuCntnSttus.setColumn(0,'usid',app.gdsUserInfo.getColumn(0, 'id'));
        	this.dsMenuCntnSttus.setColumn(0,'cntnIp',app.gdsUserInfo.getColumn(0, 'ip'));
        	if(!this.gfnIsNull(app.gdsUserInfo.getColumn(0, 'id'))){
        		this.dsMenuCntnSttus.setColumn(0,'lgnYn','Y');
        	}else{
        		this.dsMenuCntnSttus.setColumn(0,'lgnYn','N');
        	}

        	// 메뉴 정보 조회
        	this.fnSearchMenu();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearchMenu = function()
        {
        	//메뉴조회
        	var strSvcId    = "SearchMenu";
        	var strSvcUrl   = "cmmn/sysMng/menuMng/readGlobalMenuList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "gdsMenu=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcUrl,		// transaction을 요청할 주소
        						inData,			// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData,		// 결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,			// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc,	// 통신방법 정의 [생략가능]
        						true,
        						'Y');			// todo remove this argument?
        }

        this.fnInsertMenuCntn = function(menuId)
        {
        	this.dsMenuCntnSttus.setColumn(0,'menuId',menuId);

        	//메뉴조회
        	var strSvcId    = "insertMenu";
        	var strSvcUrl   = "/cmmnn/sysMng/menuCntnSttus/insertMenuCntnSttus.do";
        	var inData      = "dsMenuCntnSttus=dsMenuCntnSttus";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcUrl,		// transaction을 요청할 주소
        						inData,			// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData,		// 결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,			// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc,	// 통신방법 정의 [생략가능]
        						true,
        						'Y');			// todo remove this argument?
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	// if (errorCode != 0) return;

        	if (svcID == 'SearchMenu')
        	{
        		// 개발 지원 메뉴 추가
        		if (app.gvRunMode != 'R') app.gdsMenu.appendData(this.dsMenuExt, true);

        		// 메뉴 목록 생성
        		this.fnGenerateMenuButton();
        	}


        }

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 메뉴 선택 및 열기
        **/
        this.fnSelectMenu = function(menuId)
        {

        	if (!menuId || !oMenuInfo[menuId]) return;

        	for (let menu of Object.values(oMenuInfo))
        	{
        		if (!menu.button) continue;

        		// 현재 메뉴 선택 상태 표시
        		if (oMenuInfo[menuId].path.includes(menu.path))
        		{
        			if (!menu.button.cssclass.endsWith('_S'))
        			{
        				if (menu.button.childDiv) menu.button.click();
        				if (!menu.button.cssclass.endsWith('S')) menu.button.set_cssclass(menu.button.cssclass+'_S');
        				menu.button.setFocus();
        			}
        		}
        		// 나머지 메뉴는 cssclass 원복
        		else menu.button.set_cssclass(menu.button.cssclass.replace('_S',''));
        	}

        }

        /**
         * @description 메뉴 버튼 생성
        **/
        this.fnGenerateMenuButton = function()
        {

        	let form = this;

        	let resizeHeight = function()
        	{
        		form.resetScroll();
        		form.parent.set_height((div2LevelMenuGroup||btn1LevelMenu).getOffsetBottom());
        		form.parent.parent.resetScroll();
        	}

        	let openMenu = function(obj)
        	{
        		if (!obj.menuId) return;
        		form.fnInsertMenuCntn(obj.menuId);
        		form.gfnOpenMenu(obj.menuId);
        	}

        	/* 1 Level Menu */
        	let btn1LevelMenu;
        	let s1LevelMenuButtonPrefix = 'btn1LevelMenu_';
        	let n1LevelMenuHeight = 44;
        	let n1LevelMenuRight = 18;
        	let n1LevelMenuCount = 0;

        	/* 2 Level Menu */
        	let div2LevelMenuGroup;
        	let btn2LevelMenu;
        	let s2LevelMenuDivPrefix = 'div2LevelMenuGroup_';
        	let s2LevelMenuButtonPrefix = 'btn2LevelMenu_';
        	let n2LevelMenuMagin = {top:8, bottom:12};
        	let n2LevelMenuPadding = {top:3, bottom:9};
        	let n2LevelMenuHeight = 40;
        	let n2LevelMenuLeft = 15;
        	let n2LevelMenuRight = 13;

        	/* 3 Level Menu */
        	let div3LevelMenuGroup;
        	let btn3LevelMenu;
        	let s3LevelMenuDivPrefix = 'div3LevelMenuGroup_';
        	let s3LevelMenuButtonPrefix = 'btn3LevelMenu_';
        	let n3LevelMenuPadding = {top:6, bottom:10};
        	let n3LevelMenuHeight = 31;

        	for (let row=0; row<app.gdsMenu.rowcount; row++)
        	{
        		let sMenuId = app.gdsMenu.getColumn(row, form.FRAME_MENUCOLUMNS.menuId);

        		oMenuInfo[sMenuId] = {
        			name : app.gdsMenu.getColumn(row, form.FRAME_MENUCOLUMNS.menuNm),
        			level : app.gdsMenu.getColumn(row, form.FRAME_MENUCOLUMNS.menuLevel)
        		};

        		if (oMenuInfo[sMenuId].level == '1')
        		{
        			btn1LevelMenu = new nexacro.Button(s1LevelMenuButtonPrefix+sMenuId, 0, (div2LevelMenuGroup?div2LevelMenuGroup.name+':'+n2LevelMenuMagin.bottom:btn1LevelMenu?btn1LevelMenu.name+':'+18:0), null, n1LevelMenuHeight, n1LevelMenuRight);
        			btn1LevelMenu.set_cssclass('btn_LF_menu'+(n1LevelMenuCount++%9+1)); // todo 메뉴별 아이콘 별도 설정?
        			btn1LevelMenu.set_text(oMenuInfo[sMenuId].name);

        			btn1LevelMenu.menuId = sMenuId;
        			oMenuInfo[sMenuId].path = sMenuId;

        			btn1LevelMenu.addEventHandler('onclick', function(obj, e)
        			{
        				// 현재 클릭 메뉴 접기/펴기
        				obj.set_cssclass(obj.cssclass.endsWith('_S')?obj.cssclass.replace('_S',''):obj.cssclass+'_S');
        				obj.childDiv.set_height(obj.cssclass.endsWith('_S')?obj.childDiv.form.getLastComponent().getOffsetBottom()+n2LevelMenuPadding.bottom:0);

        				// 나머지 메뉴는 접기
        				for (let button,i=0; i<form.components.length; i++)
        				{
        					button = form.components[i];
        					if (!(button instanceof nexacro.Button)) continue;
        					if (button == obj) continue;
        					if (button.name.startsWith(s1LevelMenuButtonPrefix))
        					{
        						button.set_cssclass(button.cssclass.replace('_S',''));
        						if (button.childDiv)
        						{
        							button.childDiv.set_height(0);
        						}
        					}
        				}

        				resizeHeight();
        			});

        			form.addChild(btn1LevelMenu.name, btn1LevelMenu);

        			btn1LevelMenu.show();

        			oMenuInfo[sMenuId].button = btn1LevelMenu;

        			div2LevelMenuGroup = null;
        		}
        		else if (oMenuInfo[sMenuId].level == '2')
        		{
        			if (!div2LevelMenuGroup)
        			{
        				div2LevelMenuGroup = new nexacro.Div(s2LevelMenuDivPrefix+sMenuId, 0, btn1LevelMenu.name+':'+n2LevelMenuMagin.top, null, 0, n1LevelMenuRight);
        				div2LevelMenuGroup.set_cssclass('div_LF_groupMenu2');

        				form.addChild(div2LevelMenuGroup.name, div2LevelMenuGroup);

        				div2LevelMenuGroup.show()

        				btn1LevelMenu.childDiv = div2LevelMenuGroup;
        			}

        			let s2LevelMenuButtonTop = div3LevelMenuGroup ? div3LevelMenuGroup.name+':0' : btn2LevelMenu ? btn2LevelMenu.name+':0' : n2LevelMenuPadding.top;
        			btn2LevelMenu = new nexacro.Button(s2LevelMenuButtonPrefix+sMenuId, n2LevelMenuLeft, s2LevelMenuButtonTop, null, n2LevelMenuHeight, n2LevelMenuRight);
        			btn2LevelMenu.set_cssclass('btn_LF_menuDepth2');
        			btn2LevelMenu.set_text(oMenuInfo[sMenuId].name);

        			btn2LevelMenu.menuId = sMenuId;

        			oMenuInfo[sMenuId].path = oMenuInfo[btn1LevelMenu.menuId].path + '.' + sMenuId;

        			btn2LevelMenu.addEventHandler('onclick', function(obj, e)
        			{
        				if (obj.cssclass.includes('_expand'))
        				{
        					// 현재 클릭 메뉴 접기/펴기
        					obj.set_cssclass(obj.cssclass.endsWith('_S') ? obj.cssclass.replace('_S','') : obj.cssclass+'_S');
        					obj.childDiv.set_height(obj.cssclass.endsWith('expand_S') ? obj.childDiv.form.getLastComponent().getOffsetBottom()+n3LevelMenuPadding.bottom : 0);
        					obj.parent.resetScroll();
        					obj.parent.parent.set_height(obj.parent.getLastComponent().getOffsetBottom());

        					// 나머지 메뉴는 접기
        					for (let button,i=0; i<obj.parent.components.length; i++)
        					{
        						button = obj.parent.components[i];
        						if (!(button instanceof nexacro.Button)) continue;
        						if (button == obj) continue;
        						if (button.name.startsWith(s2LevelMenuButtonPrefix))
        						{
        							button.set_cssclass(button.cssclass.replace('_S',''));
        							if (button.childDiv)
        							{
        								button.childDiv.set_height(0);
        								button.parent.resetScroll();
        								button.parent.parent.set_height(obj.parent.getLastComponent().getOffsetBottom()+n2LevelMenuPadding.bottom);
        							}
        						}
        					}

        					resizeHeight();
        				}
        				else
        				{
        					openMenu(obj);
        				}
        			});

        			div2LevelMenuGroup.addChild(btn2LevelMenu.name, btn2LevelMenu);
        			btn2LevelMenu.show();

        			oMenuInfo[sMenuId].button = btn2LevelMenu;

        			div3LevelMenuGroup = null;
        		}
        		else if (oMenuInfo[sMenuId].level == '3')
        		{
        			if (!div3LevelMenuGroup)
        			{
        				div3LevelMenuGroup = new nexacro.Div(s3LevelMenuDivPrefix+btn2LevelMenu.name, n2LevelMenuLeft, btn2LevelMenu.name+':0', null, 0, n2LevelMenuRight);
        				div3LevelMenuGroup.set_cssclass('div_LF_groupMenu3');

        				div2LevelMenuGroup.form.addChild(div3LevelMenuGroup.name, div3LevelMenuGroup);

        				div3LevelMenuGroup.show()

        				btn2LevelMenu.set_cssclass(btn2LevelMenu.cssclass+'_expand');
        				btn2LevelMenu.childDiv = div3LevelMenuGroup;
        			}

        			let s3LevelMenuButtonTop = btn3LevelMenu ? btn3LevelMenu.name+':0' : n3LevelMenuPadding.top;
        			btn3LevelMenu = new nexacro.Button(s3LevelMenuButtonPrefix+sMenuId, 0, s3LevelMenuButtonTop, null, n3LevelMenuHeight, 0);
        			btn3LevelMenu.set_cssclass('btn_LF_menuDepth3');
        			btn3LevelMenu.set_text(oMenuInfo[sMenuId].name);

        			btn3LevelMenu.menuId = sMenuId;

        			oMenuInfo[sMenuId].path = oMenuInfo[btn2LevelMenu.menuId].path + '.' + sMenuId;

        			btn3LevelMenu.addEventHandler('onclick', function(obj, e)
        			{
        				openMenu(obj);
        			});

        			div3LevelMenuGroup.addChild(btn3LevelMenu.name, btn3LevelMenu);
        			btn3LevelMenu.show();

        			oMenuInfo[sMenuId].button = btn3LevelMenu;
        		}
        	}

        	resizeHeight();
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.addEventHandler("onclick",this.frmMenu_onclick,this);
        };
        this.loadIncludeScript("frmMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
