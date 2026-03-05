(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF082M00");
            this.set_titletext("구내영업 신청서작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListTpbiz", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seqno\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizLclsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizMclsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizSclsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizLclsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizMclsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizSclsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizEtcCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrmsSalsAplyMst", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"fcltSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"ymdDsgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"instlDmndPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"instlDmndPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlArtclCn\" type=\"STRING\" size=\"256\"/><Column id=\"instlPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"usgCn\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCnIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplyInfoIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"salsTrf\" type=\"STRING\" size=\"256\"/><Column id=\"aprvNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboTpbizLclsf", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row><Row><Col id=\"cdId\">A</Col><Col id=\"cdNm\">항공기관련업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">B</Col><Col id=\"cdNm\">물류관련업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C</Col><Col id=\"cdNm\">일반영업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboTpbizMclsf", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row><Row><Col id=\"cdId\">A01</Col><Col id=\"cdNm\">항공유판매업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A02</Col><Col id=\"cdNm\">항공기취급업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A03</Col><Col id=\"cdNm\">기타</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">B01</Col><Col id=\"cdNm\">물류업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C01</Col><Col id=\"cdNm\">판매업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C02</Col><Col id=\"cdNm\">납품업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C03</Col><Col id=\"cdNm\">서비스업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C04</Col><Col id=\"cdNm\">여객자동차운송업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboTpbizSclsf", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row><Row><Col id=\"cdId\">A0101</Col><Col id=\"cdNm\">항공유판매업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A0201</Col><Col id=\"cdNm\">항공기급유업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A0202</Col><Col id=\"cdNm\">항공기하역업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdNm\">지상조업사업</Col><Col id=\"cdId\">A0203</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A0301</Col><Col id=\"cdNm\">항공기정비업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A0302</Col><Col id=\"cdNm\">상업서류송달업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A0303</Col><Col id=\"cdNm\">항공운송총대리점업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A0304</Col><Col id=\"cdNm\">도심공항터미널업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A0305</Col><Col id=\"cdNm\">정기/부정기항공운송사업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">A0306</Col><Col id=\"cdNm\">항공기사용사업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">B0101</Col><Col id=\"cdNm\">보세운송</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">B0102</Col><Col id=\"cdNm\">관세사</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">B0103</Col><Col id=\"cdNm\">복합운송주선업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">B0104</Col><Col id=\"cdNm\">일반운송</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">B0105</Col><Col id=\"cdNm\">courier</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">B0106</Col><Col id=\"cdNm\">기타*</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C0101</Col><Col id=\"cdNm\">카드판매업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C0102</Col><Col id=\"cdNm\">기타*</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C0201</Col><Col id=\"cdNm\">기내식납품업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C0202</Col><Col id=\"cdNm\">라운지식음료납품업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C0203</Col><Col id=\"cdNm\">신문및사무용품납품업</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdNm\">경비업</Col><Col id=\"cdId\">C0301</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdNm\">환경미화업</Col><Col id=\"cdId\">C0302</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdNm\">시설관리</Col><Col id=\"cdId\">C0303</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdNm\">유지보수</Col><Col id=\"cdId\">C0304</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdNm\">인력지원(대행)</Col><Col id=\"cdId\">C0305</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C0306</Col><Col id=\"cdNm\">기타*</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C0401</Col><Col id=\"cdNm\">버스운송(지역선택)</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C0402</Col><Col id=\"cdNm\">택시운송</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row><Row><Col id=\"cdId\">C0403</Col><Col id=\"cdNm\">기타*</Col><Col id=\"cdTypeId\">PRMSTPBIZ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSalsPlcLclsf", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row><Row><Col id=\"cdId\">A</Col><Col id=\"cdNm\">Air-side</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">B</Col><Col id=\"cdNm\">Land-side</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSalsPlcMclsf", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row><Row><Col id=\"cdId\">A01</Col><Col id=\"cdNm\">여객터미널</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A02</Col><Col id=\"cdNm\">이동지역</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A03</Col><Col id=\"cdNm\">화물청사</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A04</Col><Col id=\"cdNm\">부대건물지역</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A05</Col><Col id=\"cdNm\">세관지역</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A06</Col><Col id=\"cdNm\">관제탑지역</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">B01</Col><Col id=\"cdNm\">여객터미널</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSalsPlcSclsf", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row><Row><Col id=\"cdId\">A0101</Col><Col id=\"cdNm\">T1</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0102</Col><Col id=\"cdNm\">T2</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0103</Col><Col id=\"cdNm\">탑승동</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdNm\">기타*</Col><Col id=\"cdId\">A0104</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0201</Col><Col id=\"cdNm\">여객계류장</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0202</Col><Col id=\"cdNm\">화물계류장</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0203</Col><Col id=\"cdNm\">활주로</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0204</Col><Col id=\"cdNm\">기타*</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0301</Col><Col id=\"cdNm\">화물터미널A</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0302</Col><Col id=\"cdNm\">화물터미널B</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0303</Col><Col id=\"cdNm\">화물터미널C</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0304</Col><Col id=\"cdNm\">화물터미널D</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0305</Col><Col id=\"cdNm\">화물터미널E</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0306</Col><Col id=\"cdNm\">기타*</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0401</Col><Col id=\"cdNm\">항공기정비고</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0402</Col><Col id=\"cdNm\">GSE정비고</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0403</Col><Col id=\"cdNm\">기내식시설</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0404</Col><Col id=\"cdNm\">기타*</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0501</Col><Col id=\"cdNm\">T1 1층</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0502</Col><Col id=\"cdNm\">T2 1층(C구역)</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">A0503</Col><Col id=\"cdNm\">기타*</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdNm\">관제탑</Col><Col id=\"cdId\">A0601</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdNm\">기타*</Col><Col id=\"cdId\">A0602</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdNm\">T1</Col><Col id=\"cdId\">B0101</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdNm\">T2</Col><Col id=\"cdId\">B0102</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdNm\">공항청사</Col><Col id=\"cdId\">B0103</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row><Row><Col id=\"cdId\">B0104</Col><Col id=\"cdNm\">기타*</Col><Col id=\"cdTypeId\">PRMSSALSPLC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSalsPlc", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seqno\" type=\"STRING\" size=\"256\"/><Column id=\"salsPlcLclsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"salsPlcMclsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"salsPlcSclsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"salsPlcLclsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"salsPlcMclsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"salsPlcSclsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"salsPlcEtcCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSalsCn", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seqno\" type=\"STRING\" size=\"256\"/><Column id=\"salsCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmWholAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\"/><Col id=\"aplySeCd\"/><Col id=\"taskCd\"/><Col id=\"aplyNo\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"carRegctfFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_colId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrmsSalsGdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"gdMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnZip\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bplcTelno\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"4036","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","384",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("신청구분 ");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edt00_01_00_00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("등록자 전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("등록자 휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:376.428","100%","2100",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("97");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelGrdBtn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("사업자명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBzmnNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBrno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBrno","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBzmnNm","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_value("한국공항(주)");
            obj.set_text("한국공항(주)");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("사업장 주소");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBzmnAddr","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_value("서울시 강서구 양천로 13(방화동)");
            obj.set_text("서울시 강서구 양천로 13(방화동)");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBzmnAddr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("사업장 전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBplcTelno","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_value("0226603219");
            obj.set_text("0226603219");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBplcTelno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divGrd","0","54","100%","320",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdTpbiz","0","44","100%",null,null,"46",null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsListTpbiz");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이타가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"대분류\"/><Cell col=\"3\" text=\"중분류\"/><Cell col=\"4\" cssclass=\"CellEnd\" text=\"소분류\"/><Cell col=\"5\" cssclass=\"CellEnd\" text=\"기타내용\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" textAlign=\"center\" expr=\"currow+1\" text=\"bind:seqno\"/><Cell col=\"2\" text=\"bind:tpbizLclsfCd\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" combodataset=\"dsCboTpbizLclsf\" combocodecol=\"cdId\" combodatacol=\"cdId\" combodisplaynulltext=\"선택\"/><Cell col=\"3\" text=\"bind:tpbizMclsfCd\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" combodataset=\"dsCboTpbizMclsf\" combocodecol=\"cdId\" combodatacol=\"cdId\"/><Cell col=\"4\" cssclass=\"CellEnd\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:tpbizSclsfCd\" textAlign=\"center\" combodataset=\"dsCboTpbizSclsf\" combocodecol=\"cdId\" combodatacol=\"cdId\"/><Cell col=\"5\" cssclass=\"CellEnd\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\" text=\"bind:tpbizEtcCn\"/></Band></Format></Formats>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","86","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("영업종별내용");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","staTotal:10","5","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("업종분류 기준표 참고");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnAddRow","450","0","64","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnDelRow","524","0","64","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_SmallRed");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"6","60%","34","0",null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnAddRow\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDelRow\"/></Contents>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","331",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnAddRow","1824","1649","64","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("98");
            obj.set_text("행추가");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("gridSalsCn","100","608","100%","270",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("96");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이타가 없습니다.");
            obj.set_binddataset("dsListSalsCn");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" cssclass=\"CellEnd\" text=\"영업내용\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" textAlign=\"center\" expr=\"currow+1\" text=\"bind:seqno\"/><Cell col=\"2\" cssclass=\"CellEnd\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\" text=\"bind:salsCn\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_text("영업내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","980","316",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"gridSalsCn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","327",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","416","545","521","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("100");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAddRow\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDelRow\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnDelRow","1900","1649","64","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("99");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","54","100%","320",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdSalsPlc","0","44","100%",null,null,"46",null,null,null,null,this.divForm.form.Div02.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsListSalsPlc");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이타가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"600\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"대분류\"/><Cell col=\"3\" text=\"중분류\"/><Cell col=\"4\" text=\"소분류\"/><Cell col=\"5\" cssclass=\"CellEnd\" text=\"기타 (구체적인 활동장소가 있는 경우 해당장소 기재)\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:seqno\" textAlign=\"center\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:salsPlcLclsfCd\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" combodataset=\"dsCboSalsPlcLclsf\" combocodecol=\"cdId\" combodatacol=\"cdId\"/><Cell col=\"3\" text=\"bind:salsPlcMclsfCd\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" combodataset=\"dsCboSalsPlcMclsf\" combocodecol=\"cdId\" combodatacol=\"cdId\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:salsPlcSclsfCd\" textAlign=\"center\" combodataset=\"dsCboSalsPlcSclsf\" combocodecol=\"cdId\" combodatacol=\"cdId\"/><Cell col=\"5\" cssclass=\"CellEnd\" edittype=\"text\" displaytype=\"editcontrol\" text=\"bind:salsPlcEtcCn\"/></Band></Format></Formats>");
            this.divForm.form.Div02.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","61","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd00.form);
            obj.set_taborder("0");
            obj.set_text("영업장소");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("Static00","staTotal:10","7","166","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd00.form);
            obj.set_taborder("2");
            obj.set_text("공항 내 이용시설 분류표 참고");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnAddRow","450","0","64","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd00.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            this.divForm.form.Div02.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnDelRow","524","0","64","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd00.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            this.divForm.form.Div02.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"6","60.00%","34","0",null,null,null,null,null,this.divForm.form.Div02.form.divGrd00.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnAddRow\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDelRow\"/></Contents>");
            this.divForm.form.Div02.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","331",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_text("계약기간(영업기간)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","calBgngYmd:10","0","10","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","staDash:10","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_text("구내영업 계획서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("37");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("38");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("39");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("40");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("41");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("42");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("43");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("44");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("45");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("46");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("47");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("48");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("49");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("50");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_05","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("51");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("52");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("53");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_05\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("54");
            obj.set_text("영업내용 계약서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_01","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("55");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_01","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("56");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("57");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("58");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("59");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("60");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("61");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("62");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_01","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("63");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("64");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_06","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("65");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("66");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("67");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_06\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_03","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("68");
            obj.set_text("직전년도 매출서류");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_02","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("69");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_02","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("70");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("71");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle02","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("72");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_02","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("73");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("74");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("75");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum02","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("76");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_02","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("77");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("78");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_07","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("79");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_02","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("80");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("81");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_07\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("82");
            obj.set_text("행정기관 허가증명서류");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_03","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("83");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_03","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("84");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile03","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("85");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_03\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle03","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("86");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_03","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("87");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_03","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("88");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("89");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum03","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("90");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_03","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("91");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel03","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("92");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_04_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("93");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_03","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("94");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("95");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02_00","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","0","100%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("txa00","200.00","728","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","305","146",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"txa00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staPrvcClctChcAgreYn01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("서비스요청내용확인");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoSrvcDmndCnYn","200.00","328","490","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset", obj);
            divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">보완</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset);
            obj.set_text("승인");
            obj.set_value("1");
            obj.set_index("0");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00_00_00_00","64.00","495","980","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctChcAgreYn01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoSrvcDmndCnYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan07","0","60","100.00%","107",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSplmntDmndRsn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("보완요청사유");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("txtSplmntDmndRsn","18","1593","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan08","0","60","100.00%","177",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSplmntDmndRsn\"/><PanelItem id=\"PanelItem01\" componentid=\"txtSplmntDmndRsn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdSplmnt","18","1715","100%","150",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_binddataset("dataSet00");
            obj.set_autofittype("col");
            obj.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별칭\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:별칭\"/><Cell col=\"1\" text=\"bind:내용\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00","18","1865","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan09","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdSplmnt\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","18","1715","100%","180",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("none");
            obj.set_scrollbarsize("15");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"650\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:frstRegNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:cnvyMttrCn\" cssclass=\"CellEnd\" textAlign=\"left\" tooltiptext=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan12","0","60","100.00%","181",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","156","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00","17.00","btn00:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("처리내역");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","131","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","18.00","15","262","45",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00","18.00","122","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_text("선택했을때 class : btn_WF_Quick_S 적용");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("btn00_00","18.00","68","262","45",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("5");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_ACPlus");
                p.btnSchClose.move(null,"10","34","34","10",null);
            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01.set_taborder("0");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.staLabel01_00.set_taborder("1");
                p.staLabel01_00.set_text("신청구분 ");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.edtAplySeNm.set_taborder("2");
                p.edtAplySeNm.set_readonly("true");
                p.edtAplySeNm.move("10.00","158","100%","40",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","305","86",null,null);

                p.staLabel01_02.set_taborder("4");
                p.staLabel01_02.set_text("신청자");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.Panel01_01.set_taborder("5");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_flexshrink("1");
                p.pan02.set_fittocontents("height");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_00.set_taborder("7");
                p.staLabel01_02_00.set_text("신청자 회사명");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("10","98","100%","46",null,null);

                p.Panel01_01_00.set_taborder("8");
                p.Panel01_01_00.set_type("vertical");
                p.Panel01_01_00.set_flexgrow("1");
                p.Panel01_01_00.move("10.00","98","305","86",null,null);

                p.edt00_01_00.set_taborder("9");
                p.edt00_01_00.set_readonly("true");
                p.edt00_01_00.move("10.00","158","100%","40",null,null);

                p.staLabel01_02_02_00.set_taborder("10");
                p.staLabel01_02_02_00.set_text("등록자 전화번호");
                p.staLabel01_02_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_01.set_taborder("11");
                p.edt00_01_00_00_01.set_readonly("true");
                p.edt00_01_00_00_01.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_00.set_taborder("12");
                p.Panel01_01_02_00.set_type("vertical");
                p.Panel01_01_02_00.set_flexgrow("1");
                p.Panel01_01_02_00.move("10.00","98","305","86",null,null);

                p.staLabel01_02_00_01_00.set_taborder("13");
                p.staLabel01_02_00_01_00.set_text("등록자 휴대폰 번호");
                p.staLabel01_02_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_01_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_00_00.set_taborder("14");
                p.edt00_01_00_00_00_00.set_readonly("true");
                p.edt00_01_00_00_00_00.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_01_00.set_taborder("15");
                p.Panel01_01_00_01_00.set_type("vertical");
                p.Panel01_01_00_01_00.set_flexgrow("1");
                p.Panel01_01_00_01_00.move("10.00","98","305","86",null,null);

                p.pan04.set_taborder("16");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_flexshrink("1");
                p.pan04.set_fittocontents("height");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.edt00_01_00_00_00_01.set_taborder("17");
                p.edt00_01_00_00_00_01.set_readonly("true");
                p.edt00_01_00_00_00_01.move("10.00","158","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdTpbiz.set_taborder("1");
                p.grdTpbiz.set_binddataset("dsListTpbiz");
                p.grdTpbiz.set_autofittype("col");
                p.grdTpbiz.set_nodatatext("데이타가 없습니다.");
                p.grdTpbiz.move("0","44","100%",null,null,"46");

                p.staTotal.set_taborder("0");
                p.staTotal.set_text("영업종별내용");
                p.staTotal.set_cssclass("sta_WF_Label_E");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","86","34",null,null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("업종분류 기준표 참고");
                p.Static00.set_cssclass("sta_WF_TxtRed");
                p.Static00.set_fittocontents("width");
                p.Static00.move("staTotal:10","5","120","34",null,null);

                p.btnAddRow.set_taborder("3");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.set_fittocontents("width");
                p.btnAddRow.move("450","0","64","34",null,null);

                p.btnDelRow.set_taborder("4");
                p.btnDelRow.set_text("행삭제");
                p.btnDelRow.set_fittocontents("width");
                p.btnDelRow.set_cssclass("btn_WF_SmallRed");
                p.btnDelRow.move("524","0","64","34",null,null);

                p.PanelGrdBtn.set_taborder("5");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.move(null,"6","60%","34","0",null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSalsPlc.set_taborder("1");
                p.grdSalsPlc.set_binddataset("dsListSalsPlc");
                p.grdSalsPlc.set_autofittype("col");
                p.grdSalsPlc.set_nodatatext("데이타가 없습니다.");
                p.grdSalsPlc.move("0","44","100%",null,null,"46");

                p.staTotal.set_taborder("0");
                p.staTotal.set_text("영업장소");
                p.staTotal.set_cssclass("sta_WF_Label_E");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","61","34",null,null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("공항 내 이용시설 분류표 참고");
                p.Static00.set_cssclass("sta_WF_TxtRed");
                p.Static00.set_fittocontents("width");
                p.Static00.move("staTotal:10","7","166","34",null,null);

                p.btnAddRow.set_taborder("3");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.move("450","0","64","34",null,null);

                p.btnDelRow.set_taborder("4");
                p.btnDelRow.set_text("행삭제");
                p.btnDelRow.set_cssclass("btn_WF_SmallRed");
                p.btnDelRow.move("524","0","64","34",null,null);

                p.PanelGrdBtn.set_taborder("5");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.move(null,"6","60.00%","34","0",null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrd00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calBgngYmd.set_taborder("0");
                p.calBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calBgngYmd.move("0","0","100%","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.set_fittocontents("width");
                p.staDash.move("calBgngYmd:10","0","10","40",null,null);

                p.calEndYmd.set_taborder("2");
                p.calEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEndYmd.move("staDash:10","0","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.Div02.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divCal.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.Div02.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("97");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("0","0","100%","46",null,null);

                p.pan01.set_taborder("0");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_type("horizontal");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("사업자명");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.staLabel00_00.set_taborder("3");
                p.staLabel00_00.set_text("사업자등록번호");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01.set_taborder("4");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("10.00","98","305","86",null,null);

                p.edtBrno.set_taborder("5");
                p.edtBrno.set_readonly("true");
                p.edtBrno.move("0.00","46","100.00%","40",null,null);

                p.edtBzmnNm.set_taborder("6");
                p.edtBzmnNm.set_readonly("true");
                p.edtBzmnNm.set_value("한국공항(주)");
                p.edtBzmnNm.move("0.00","46","100.00%","40",null,null);

                p.staLabel00_01.set_taborder("7");
                p.staLabel00_01.set_text("사업장 주소");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtBzmnAddr.set_taborder("8");
                p.edtBzmnAddr.set_readonly("true");
                p.edtBzmnAddr.set_value("서울시 강서구 양천로 13(방화동)");
                p.edtBzmnAddr.move("0.00","46","100.00%","40",null,null);

                p.Panel00_00_00.set_taborder("9");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.staLabel00_00_00.set_taborder("10");
                p.staLabel00_00_00.set_text("사업장 전화번호");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edtBplcTelno.set_taborder("11");
                p.edtBplcTelno.set_readonly("true");
                p.edtBplcTelno.set_value("0226603219");
                p.edtBplcTelno.move("0.00","46","100.00%","40",null,null);

                p.Panel00_00_01_00.set_taborder("12");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("10.00","98","305","86",null,null);

                p.pan02.set_taborder("13");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_type("horizontal");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.divGrd.set_taborder("14");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","54","100%","320",null,null);

                p.pan03.set_taborder("15");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("horizontal");
                p.pan03.move("0","60","100.00%","331",null,null);

                p.btnAddRow.set_taborder("98");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.move("1824","1649","64","34",null,null);

                p.gridSalsCn.set_taborder("96");
                p.gridSalsCn.set_autofittype("col");
                p.gridSalsCn.set_nodatatext("데이타가 없습니다.");
                p.gridSalsCn.set_binddataset("dsListSalsCn");
                p.gridSalsCn.move("100","608","100%","270",null,null);

                p.staLabel01_00.set_taborder("16");
                p.staLabel01_00.set_text("영업내용");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("10","98","100","46",null,null);

                p.Panel01_00.set_taborder("17");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","980","316",null,null);

                p.pan04.set_taborder("18");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","327",null,null);

                p.PanelGrdBtn.set_taborder("100");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.set_flexgrow("1");
                p.PanelGrdBtn.move("416","545","521","34",null,null);

                p.btnDelRow.set_taborder("99");
                p.btnDelRow.set_text("행삭제");
                p.btnDelRow.set_cssclass("btn_WF_SmallRed");
                p.btnDelRow.move("1900","1649","64","34",null,null);

                p.divGrd00.set_taborder("19");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.move("0","54","100%","320",null,null);

                p.pan05.set_taborder("20");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_type("horizontal");
                p.pan05.move("0","60","100.00%","331",null,null);

                p.staLabel00_02.set_taborder("21");
                p.staLabel00_02.set_text("계약기간(영업기간)");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.Panel00_00_02.set_taborder("22");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.Panel00_00_01_01.set_taborder("23");
                p.Panel00_00_01_01.set_type("vertical");
                p.Panel00_00_01_01.set_flexgrow("1");
                p.Panel00_00_01_01.set_minwidth("");
                p.Panel00_00_01_01.move("10.00","98","305","1",null,null);

                p.pan06.set_taborder("24");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.set_type("horizontal");
                p.pan06.move("0","60","100.00%","96",null,null);

                p.divCal.set_taborder("25");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","100%","40",null,null);

                p.staLabel00_02_00.set_taborder("26");
                p.staLabel00_02_00.set_text("구내영업 계획서");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00.set_taborder("27");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("28");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("29");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("30");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("31");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("32");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("33");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("34");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("35");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("36");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00_04.set_taborder("37");
                p.Panel00_04.move("20","51","100%","46",null,null);

                p.Grid00.set_taborder("38");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.panFile.set_taborder("39");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","161",null,null);

                p.staLabel00_02_01.set_taborder("40");
                p.staLabel00_02_01.set_text("사업자등록증");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.Button00_00.set_taborder("41");
                p.Button00_00.set_text("샘플첨부파일명");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("813","76","120","34",null,null);

                p.btn_file_1_00.set_taborder("42");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.set_fittocontents("width");
                p.btn_file_1_00.move("124","58","116","34",null,null);

                p.panBtnFile00.set_taborder("43");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("44");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("45");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("46");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("47");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("48");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00.set_taborder("49");
                p.btn_del_file_1_00.set_text("전체파일삭제");
                p.btn_del_file_1_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00.set_fittocontents("width");
                p.btn_del_file_1_00.move("512","135","125","34",null,null);

                p.panBtnDel00.set_taborder("50");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_05.set_taborder("51");
                p.Panel00_05.move("20","51","100%","46",null,null);

                p.Grid00_00.set_taborder("52");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.panFile00.set_taborder("53");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100.00%","161",null,null);

                p.staLabel00_02_02.set_taborder("54");
                p.staLabel00_02_02.set_text("영업내용 계약서");
                p.staLabel00_02_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02_02.set_fittocontents("width");
                p.staLabel00_02_02.move("0","44","305","46",null,null);

                p.Button00_01.set_taborder("55");
                p.Button00_01.set_text("샘플첨부파일명");
                p.Button00_01.set_cssclass("btn_WF_Small");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("813","76","120","34",null,null);

                p.btn_file_1_01.set_taborder("56");
                p.btn_file_1_01.set_text("파일선택");
                p.btn_file_1_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_01.set_fittocontents("width");
                p.btn_file_1_01.move("124","58","116","34",null,null);

                p.panBtnFile01.set_taborder("57");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","46",null,null);

                p.panTitle01.set_taborder("58");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Static00_01.set_taborder("59");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.Static01_01.set_taborder("60");
                p.Static01_01.set_text("0");
                p.Static01_01.set_fittocontents("width");
                p.Static01_01.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("61");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("62");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.btn_del_file_1_01.set_taborder("63");
                p.btn_del_file_1_01.set_text("전체파일삭제");
                p.btn_del_file_1_01.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_01.set_fittocontents("width");
                p.btn_del_file_1_01.move("512","135","125","34",null,null);

                p.panBtnDel01.set_taborder("64");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.Panel00_06.set_taborder("65");
                p.Panel00_06.move("20","51","100%","46",null,null);

                p.Grid00_01.set_taborder("66");
                p.Grid00_01.set_binddataset("dsFile1");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.move("20.00","114","100%","40",null,null);

                p.panFile01.set_taborder("67");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","161",null,null);

                p.staLabel00_02_03.set_taborder("68");
                p.staLabel00_02_03.set_text("직전년도 매출서류");
                p.staLabel00_02_03.set_cssclass("sta_WF_Label");
                p.staLabel00_02_03.set_fittocontents("width");
                p.staLabel00_02_03.move("0","44","305","46",null,null);

                p.Button00_02.set_taborder("69");
                p.Button00_02.set_text("샘플첨부파일명");
                p.Button00_02.set_cssclass("btn_WF_Small");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move("813","76","120","34",null,null);

                p.btn_file_1_02.set_taborder("70");
                p.btn_file_1_02.set_text("파일선택");
                p.btn_file_1_02.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_02.set_fittocontents("width");
                p.btn_file_1_02.move("124","58","116","34",null,null);

                p.panBtnFile02.set_taborder("71");
                p.panBtnFile02.set_flexgrow("1");
                p.panBtnFile02.set_flexmainaxisalign("end");
                p.panBtnFile02.set_horizontalgap("10");
                p.panBtnFile02.move("433","58","305","46",null,null);

                p.panTitle02.set_taborder("72");
                p.panTitle02.set_cssclass("pan_WF_FileTitle");
                p.panTitle02.set_flexwrap("wrap");
                p.panTitle02.set_fittocontents("height");
                p.panTitle02.move("0","124","100%","46",null,null);

                p.Static00_02.set_taborder("73");
                p.Static00_02.set_text("파일수 : ");
                p.Static00_02.set_fittocontents("width");
                p.Static00_02.move("88","123","48","46",null,null);

                p.Static01_02.set_taborder("74");
                p.Static01_02.set_text("0");
                p.Static01_02.set_fittocontents("width");
                p.Static01_02.move("165","143","9","46",null,null);

                p.Static02_02.set_taborder("75");
                p.Static02_02.set_text("개");
                p.Static02_02.set_fittocontents("width");
                p.Static02_02.move("293","131","13","46",null,null);

                p.panFileNum02.set_taborder("76");
                p.panFileNum02.set_flexgrow("1");
                p.panFileNum02.set_horizontalgap("4");
                p.panFileNum02.move("20","190","305","46",null,null);

                p.btn_del_file_1_02.set_taborder("77");
                p.btn_del_file_1_02.set_text("전체파일삭제");
                p.btn_del_file_1_02.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_02.set_fittocontents("width");
                p.btn_del_file_1_02.move("512","135","125","34",null,null);

                p.panBtnDel02.set_taborder("78");
                p.panBtnDel02.set_flexcrossaxisalign("center");
                p.panBtnDel02.set_flexmainaxisalign("end");
                p.panBtnDel02.set_flexgrow("1");
                p.panBtnDel02.move("517","141","305","46",null,null);

                p.Panel00_07.set_taborder("79");
                p.Panel00_07.move("20","51","100%","46",null,null);

                p.Grid00_02.set_taborder("80");
                p.Grid00_02.set_binddataset("dsFile1");
                p.Grid00_02.set_autofittype("col");
                p.Grid00_02.set_cssclass("grd_WF_FileAdd");
                p.Grid00_02.move("20.00","114","100%","40",null,null);

                p.panFile02.set_taborder("81");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("0","42","100.00%","161",null,null);

                p.staLabel00_02_00_00.set_taborder("82");
                p.staLabel00_02_00_00.set_text("행정기관 허가증명서류");
                p.staLabel00_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00.set_fittocontents("width");
                p.staLabel00_02_00_00.move("0","44","305","46",null,null);

                p.Button00_03.set_taborder("83");
                p.Button00_03.set_text("샘플첨부파일명");
                p.Button00_03.set_cssclass("btn_WF_Small");
                p.Button00_03.set_fittocontents("width");
                p.Button00_03.move("813","76","120","34",null,null);

                p.btn_file_1_03.set_taborder("84");
                p.btn_file_1_03.set_text("파일선택");
                p.btn_file_1_03.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_03.set_fittocontents("width");
                p.btn_file_1_03.move("124","58","116","34",null,null);

                p.panBtnFile03.set_taborder("85");
                p.panBtnFile03.set_flexgrow("1");
                p.panBtnFile03.set_flexmainaxisalign("end");
                p.panBtnFile03.set_horizontalgap("10");
                p.panBtnFile03.move("433","58","305","46",null,null);

                p.panTitle03.set_taborder("86");
                p.panTitle03.set_cssclass("pan_WF_FileTitle");
                p.panTitle03.set_flexwrap("wrap");
                p.panTitle03.set_fittocontents("height");
                p.panTitle03.move("0","124","100%","46",null,null);

                p.Static00_03.set_taborder("87");
                p.Static00_03.set_text("파일수 : ");
                p.Static00_03.set_fittocontents("width");
                p.Static00_03.move("88","123","48","46",null,null);

                p.Static01_03.set_taborder("88");
                p.Static01_03.set_text("0");
                p.Static01_03.set_fittocontents("width");
                p.Static01_03.move("165","143","9","46",null,null);

                p.Static02_03.set_taborder("89");
                p.Static02_03.set_text("개");
                p.Static02_03.set_fittocontents("width");
                p.Static02_03.move("293","131","13","46",null,null);

                p.panFileNum03.set_taborder("90");
                p.panFileNum03.set_flexgrow("1");
                p.panFileNum03.set_horizontalgap("4");
                p.panFileNum03.move("20","190","305","46",null,null);

                p.btn_del_file_1_03.set_taborder("91");
                p.btn_del_file_1_03.set_text("전체파일삭제");
                p.btn_del_file_1_03.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_03.set_fittocontents("width");
                p.btn_del_file_1_03.move("512","135","125","34",null,null);

                p.panBtnDel03.set_taborder("92");
                p.panBtnDel03.set_flexcrossaxisalign("center");
                p.panBtnDel03.set_flexmainaxisalign("end");
                p.panBtnDel03.set_flexgrow("1");
                p.panBtnDel03.move("517","141","305","46",null,null);

                p.Panel00_04_00.set_taborder("93");
                p.Panel00_04_00.move("20","51","100%","46",null,null);

                p.Grid00_03.set_taborder("94");
                p.Grid00_03.set_binddataset("dsFile1");
                p.Grid00_03.set_autofittype("col");
                p.Grid00_03.set_cssclass("grd_WF_FileAdd");
                p.Grid00_03.move("20.00","114","100%","40",null,null);

                p.panFile03.set_taborder("95");
                p.panFile03.set_fittocontents("height");
                p.panFile03.set_spacing("10px 20px 10px 20px");
                p.panFile03.set_flexwrap("wrap");
                p.panFile03.set_cssclass("pal_WF_DtlBg");
                p.panFile03.set_verticalgap("4");
                p.panFile03.move("0","42","100.00%","161",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00.set_taborder("0");
                p.staLabel01_00.set_text("전달사항");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.txa00.set_taborder("1");
                p.txa00.set_displaynulltext("내용 입력");
                p.txa00.move("200.00","728","100%","100",null,null);

                p.Panel01_00.set_taborder("2");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","305","146",null,null);

                p.staPrvcClctChcAgreYn01.set_taborder("4");
                p.staPrvcClctChcAgreYn01.set_text("서비스요청내용확인");
                p.staPrvcClctChcAgreYn01.set_cssclass("sta_WF_Label");
                p.staPrvcClctChcAgreYn01.move("10","98","100%","46",null,null);

                p.rdoSrvcDmndCnYn.set_taborder("5");
                p.rdoSrvcDmndCnYn.set_innerdataset(divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset);
                p.rdoSrvcDmndCnYn.set_codecolumn("codecolumn");
                p.rdoSrvcDmndCnYn.set_datacolumn("datacolumn");
                p.rdoSrvcDmndCnYn.set_direction("vertical");
                p.rdoSrvcDmndCnYn.set_fittocontents("width");
                p.rdoSrvcDmndCnYn.set_value("1");
                p.rdoSrvcDmndCnYn.set_index("0");
                p.rdoSrvcDmndCnYn.move("200.00","328","490","40",null,null);

                p.Panel00_00_03_00_00_00_00_00_00.set_taborder("6");
                p.Panel00_00_03_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00_00_00_00.move("64.00","495","980","96",null,null);

                p.pan07.set_taborder("7");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.set_type("horizontal");
                p.pan07.set_visible("true");
                p.pan07.move("0","60","100.00%","107",null,null);

                p.staSplmntDmndRsn.set_taborder("8");
                p.staSplmntDmndRsn.set_text("보완요청사유");
                p.staSplmntDmndRsn.set_cssclass("sta_WF_Label");
                p.staSplmntDmndRsn.move("10","98","100%","46",null,null);

                p.txtSplmntDmndRsn.set_taborder("9");
                p.txtSplmntDmndRsn.set_readonly("false");
                p.txtSplmntDmndRsn.set_displaynulltext("내용입력");
                p.txtSplmntDmndRsn.move("18","1593","100%","100",null,null);

                p.pan08.set_taborder("10");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_fittocontents("height");
                p.pan08.set_verticalgap("10");
                p.pan08.set_spacing("10px 20px 10px 20px");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_type("vertical");
                p.pan08.set_visible("true");
                p.pan08.move("0","60","100.00%","177",null,null);

                p.grdSplmnt.set_taborder("11");
                p.grdSplmnt.set_binddataset("dataSet00");
                p.grdSplmnt.set_autofittype("col");
                p.grdSplmnt.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
                p.grdSplmnt.move("18","1715","100%","150",null,null);

                p.sta00_00_01_00_00_00.set_taborder("12");
                p.sta00_00_01_00_00_00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.sta00_00_01_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00.move("18","1865","100%","30",null,null);

                p.pan09.set_taborder("13");
                p.pan09.set_flexcrossaxiswrapalign("start");
                p.pan09.set_flexwrap("wrap");
                p.pan09.set_fittocontents("height");
                p.pan09.set_verticalgap("0");
                p.pan09.set_spacing("10px 20px 10px 20px");
                p.pan09.set_cssclass("pal_WF_DtlBg");
                p.pan09.set_type("horizontal");
                p.pan09.set_visible("true");
                p.pan09.move("0","60","100.00%","201",null,null);

                p.pan01.set_taborder("3");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","157",null,null);

                p.grdCnvyMttr.set_taborder("14");
                p.grdCnvyMttr.set_binddataset("dsCnvyMttr");
                p.grdCnvyMttr.set_autofittype("col");
                p.grdCnvyMttr.set_cellsizingtype("col");
                p.grdCnvyMttr.set_autosizingtype("none");
                p.grdCnvyMttr.set_scrollbarsize("15");
                p.grdCnvyMttr.move("18","1715","100%","180",null,null);

                p.pan12.set_taborder("15");
                p.pan12.set_flexcrossaxiswrapalign("start");
                p.pan12.set_flexwrap("wrap");
                p.pan12.set_fittocontents("height");
                p.pan12.set_verticalgap("0");
                p.pan12.set_spacing("10px 20px 10px 20px");
                p.pan12.set_cssclass("pal_WF_DtlBg");
                p.pan12.set_type("horizontal");
                p.pan12.set_visible("true");
                p.pan12.move("0","60","100.00%","181",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("2");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.sub_tit01.set_taborder("6");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","66",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","384",null,null);

                p.sub_tit02.set_taborder("10");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","66",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","Div01:376.428","100%","2100",null,null);

                p.staSubTitle02_00.set_taborder("3");
                p.staSubTitle02_00.set_text("신청자정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00.set_taborder("4");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("5");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("7");
                p.staSubTitle02_00_00.set_text("신청정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_00.set_taborder("8");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("9");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00_00.set_taborder("11");
                p.staSubTitle02_00_00_00.set_text("처리내역");
                p.staSubTitle02_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_00_00.set_taborder("12");
                p.Button00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00_00.set_taborder("13");
                p.Panel01_02_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00.set_spacing("0px 10px");
                p.Panel01_02_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit02_00.set_taborder("14");
                p.sub_tit02_00.set_background("#ffffff");
                p.sub_tit02_00.set_flexcrossaxisalign("end");
                p.sub_tit02_00.move("1630","674","100%","66",null,null);

                p.Div03.set_taborder("15");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","0","100%","900",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 400px 0px 0px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("신청자정보");
                p.btn00.set_cssclass("btn_WF_Quick_S");
                p.btn00.move("17","20","100%","45",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_text("신청정보");
                p.btn00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00.move("17.00","btn00:0","100%","45",null,null);

                p.btn00_00_00.set_taborder("2");
                p.btn00_00_00.set_text("처리내역");
                p.btn00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00.move("17.00","110","100%","45",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("20px 17px  0px 17px");
            this.divQuick.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divQuick.form
            obj = new Layout("mobile","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_cssclass("btn_WF_QuickM_S");
                p.btn00.set_fittocontents("width");

                p.btn00_00.set_fittocontents("width");
                p.btn00_00.set_cssclass("btn_WF_QuickM");

                p.btn00_00_00.set_fittocontents("width");
                p.btn00_00_00.set_cssclass("btn_WF_QuickM");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 0px 0px 0px");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
            obj.set_flexwrap("wrap");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_spacing("0px 10px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick");
                p.btn00.move("18.00","15","262","45",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("선택했을때 class : btn_WF_Quick_S 적용");
                p.sta00.move("18.00","122","375","50",null,null);

                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("기본정보");
                p.btn00_00.set_cssclass("btn_WF_Quick_S");
                p.btn00_00.move("18.00","68","262","45",null,null);

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("4");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("5");
                p.sta00_00.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
                p.sta00_00.move("20.00","255","375","50",null,null);
            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("구내영업 신청서작성");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"4036","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","156","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","131","62",null);

                p.divGuide00.set_taborder("4");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,5000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","60",null,"60","20",null);

                p.divForm.set_fittocontents("none");
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","120",null,null,"0","80");

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edt00_01_00","value","dsPrmsSalsAplyMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edt00_01_00_00_00_01","value","dsPrmsSalsAplyMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edt00_01_00_00_01","value","dsPrmsSalsAplyMst","rgtrTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edt00_01_00_00_00_00","value","dsPrmsSalsAplyMst","rgtrMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div02.form.divCal.form.calBgngYmd","value","dsPrmsSalsAplyMst","ctrtBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.divCal.form.calEndYmd","value","dsPrmsSalsAplyMst","ctrtEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div03.form.txa00","value","dsPrmsSalsAplyMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div02.form.edtBzmnNm","value","dsPrmsSalsAplyMst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div02.form.edtBrno","value","dsPrmsSalsAplyMst","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div02.form.edtBplcTelno","value","dsPrmsSalsAplyMst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div02.form.edtBzmnAddr","value","dsPrmsSalsAplyMst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div03.form.txtSplmntDmndRsn","value","dsPrmsSalsAplyMst","splmntDmndRsnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div03.form.rdoSrvcDmndCnYn","value","dsPrmsSalsAplyMst","srvcDmndCnIdntyYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF082M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF082M00.xfdl", function() {
        /******************************************************************************
        *  PcMdi 프로젝트
        *  @FileName 	LIF079M00.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2024/11/11
        *  @Desction    생활 > 구내영업신청설치및연장신청
        ******************* 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/11				김진섭							최초생성
        ********************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.objVrbl = { isWrtSplmntStep : false    // 신청서 작성 및 보완 단계 여부
                       , isWrtStep       : false    // 신청서 작성 단계 여부
                       };

        this.aplyNo 	= "";	// 신청서번호(화면 로드시 신청서 번호가 없으면 신규등록 가능)
        this.aplySeCd 	= "TSPPRM001"; // 신청구분코드(구내영업신청신청 : "TSPFAC001") - (ASIS : CAR_CAT_CD (워크플로우 데이타업데이트TAB에서 확인))
        this.jobCd 		= "TAS10478"; // 작업코드(기본값 TAS10478 : 신청서작성)

        this.vStrSvcId  = ""; // 서비스ID
        this.vStrSvcUrl = ""; // 서비스URL

        this.btnDiv = this.divBtn; // 공통버튼영역 Div

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        };

        /*******************************************************************************************************************************
         * fnInit Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 로그인 정보
        	this.gvUserId 	= this.objApp.gdsUser.getColumn(0,"userId");			// 유저id
        	this.gvUserNm 	= this.objApp.gdsUser.getColumn(0,"userNm");			// 유저명
        	this.gvCoId   	= this.objApp.gdsUser.getColumn(0,"coId");				// 소속회사코드
        	this.gvCoNm   	= this.objApp.gdsUser.getColumn(0,"coNm");				// 소속회사명
        	this.gvDeptId   = this.objApp.gdsUser.getColumn(0,"deptId");			// 부서코드
        	this.gvTelNo  	= this.objApp.gdsUser.getColumn(0, "userTelno");		// 전화번호
        	this.gvMblTelNo	= this.objApp.gdsUser.getColumn(0, "userMblTelno");		// 휴대전화번호

        	// 신청구분명 조회
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.aplySeCd });

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"comBldgSeSearch", cbf:"fnCallback", dsBldgSeList:"TSPLOC:S" }); // 건물구분코드(S:"선택"추가 옵션)
        	this.cfnComCdLoad({ id:"comAplyKndCdSearch", cbf:"fnCallback", dsAplyKndCdList:"FACREQTYPE:" }); // 신청종류코드
        	this.cfnComCdLoad({ id:"comRenUseCdSearch", cbf:"fnCallback", dsRenUseList:"RENUSE:" }); // 시설구분코드
        	this.cfnComCdLoad({ id:"comCustTypeCdSearch", cbf:"fnCallback", dsCustTypeCdList:"FACCOMTYPE:" }); // 고객유형코드
        	this.cfnComCdLoad({ id:"comZoneCdSearch", cbf:"fnCallback", dsZoneCdList:"TSCWPLARA:" }); // 구역구분코드
        	this.cfnComCdLoad({ id:"comSrvcAplySeCdSearch", cbf:"fnCallback", dsSrvcAplySeList:"FACSVCTYPE:" }); // 서비스신청구분코드

        	// 신청서 번호 있는지 체크 없으면 신규등록
        	this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호
        	//this.aplyNo = "PRM2412_00012";   // 신청번호

        	trace("a44_aplyNo==>" + this.aplyNo);
        	if (this.gfnIsNull(this.aplyNo)) {
        	    var nRow = this.dsPrmsSalsAplyMst.addRow();

        		//신청자정보 영역
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "rgtrId"		, this.gvUserId);	// 등록자id
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "rgtrNm"		, this.gvUserNm);	// 등록자명
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "rgtrInstCd"	, this.gvCoId);		// 등록자기관코드
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "rgtrInstNm"	, this.gvCoNm);		// 등록자기관명
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "rgtrDeptCd"	, this.gvDeptId);	// 등록자부서코드
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "rgtrTelno"		, this.gvTelNo);	// 등록자전화번호
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "rgtrMblTelno"	, this.gvMblTelNo);	// 등록자휴대전화번호
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        		this.dsPrmsSalsAplyMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드

        		//설치요청기간 set
        		var vFdate 	= this.gfn_getDate("date");
        		var vTdate	= this.gfn_addMonth(vFdate, 12);
        		this.divForm.form.Div02.form.divCal.form.calBgngYmd.set_value(vFdate);
        		this.divForm.form.Div02.form.divCal.form.calEndYmd.set_value(vTdate);

        		//차이 일수계산 set
        		//this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(vFdate, vTdate));

        		//상업용시설 구내영업신청 신청내역 리스트 영역
        // 		this.divForm.form.Div02.form.pan05.set_visible(false);
        //
        // 		this.divForm.form.Div02.form.staCnvyMttr.text = "전달사항";//처리내용 타이틀 항목
        // 		this.divForm.form.Div02.form.pan12.visible = false;//처리내용 그리드 이력 항목
        //
        // 	    this.divForm.form.Div02.form.rdoAplyKndCd.set_index(0);//신청종류 항목
        		//this.divForm.form.Div02.form.rdoFcltSe.set_index(0);//시설구분 항목
        		//this.divForm.form.Div02.form.rdoCustTypeCd.set_index(0);//고객유형 항목
        		//this.divForm.form.Div02.form.rdoZone.set_index(0);//구역구분 항목

        		// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        	} else {

        		// 구내영업신청 마스터 조회
        		this.fnSearch(this.aplyNo);
        	}

        	this.fnSelectGdInfo();//안내정보조회
        	trace("정상!!!");
        };

        /**************************************************************************
         * @name : form_onvscroll
         * @description : 화면 수직 스크롤 시
         ***************************************************************************/
        this.form_onvscroll = function(obj,e)
        {
        	// 버튼 크기에 맞춰 수치를 알아내야 한다.
        	var posTop1 = 0;
        	var posTop2 = 0;

        	if(e.pos == 0){
        		posTop1 = 63;
        		posTop2 = 219;

        	}else{
        		posTop1 = 12;
        		posTop2 = 168;
        	}

        	this.divQuick.top = e.pos + posTop1;
        	this.divBtn.top = e.pos + posTop2;
        };

        /**************************************************************************
         * @name : btnQuick_onclick
         * @description : 퀵메뉴 버튼 클릭
         ***************************************************************************/
        this.btnQuick_onclick = function(obj,e)
        {
        	var objNm = obj.name;

        	var objClass = obj.cssclass;

        	// btn_WF_Quick_S, btn_WF_Quick
        	// 컴포넌트 css 초기화
        	Array.from(this.divQuick.form.components).forEach(oComp => {
        		oComp.cssclass = "btn_WF_Quick";
        	});

        	obj.cssclass = "btn_WF_Quick_S";

        	var objDiv = null;
        	var objTit = null;

        	console.log("objNm = " + objNm);

        	if(objNm == "btn01"){//신청자정보
        		objDiv = this.divForm.form.Div01;
        		objTit = this.divForm.form.sub_tit01;

        	}else if(objNm == "btn02"){//신청정보
        		objDiv = this.divForm.form.Div02;
        		objTit = this.divForm.form.sub_tit02;

        	}else if(objNm == "btn03"){//처리결과
        		objDiv = this.divForm.form.Div03;
        		objTit = this.divForm.form.sub_tit03;

        	}

        	// 해당 DIV가 현재 숨겨져 있으면 이동 안함.
        	if(!objDiv.visible){
        		return;

        	}

        	if( this.getCurrentLayoutID() == "default" ) {
        		this.vscrollbar.set_pos(objTit.getOffsetTop() + 12);
        	}else{
        		// 모바일처리
        		// 얘는 픽셀 세팅 해야함 현재 화면 모바일 버전으로 안보임.
        		this.divForm.form.vscrollbar.set_pos(objTit.getOffsetTop() - 50);
        	}

        };

        /**************************************************************************
         * @name : btn_onclick
         * @description : Button Click Event
         ***************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);

        	trace("bb11");
        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnCd = wfInfo.prcsSeCd; // 눌린 버튼 ID(obj.name과 같은 값임.)

        	/* vBtnCd 정보
        		CTL11204	임시저장
        		CTL11205	신청
        		CTL11206	종료
        		CTL11207	재신청
        		CTL11208	재신청
        		CTL11209	미처리종료
        		CTL11210	접수
        		CTL11211	보완요청
        		CTL11212	보완요청
        		CTL11213	승인
        		CTL11214	담당자변경
        		CTL11215	미처리종료
        		CTL11217	설문응답완료
        	*/

        	trace("vBtnCd===>" + vBtnCd);

        	if(vBtnCd == "CTL11204" || vBtnCd == "CTL11217"){ // 임시저장 버튼 || 설문응답완료
        		this.vStrSvcId  = "savePrmsSalsAplyPrmsSalsAplyMstStrg";
        		this.vStrSvcUrl = "prmsSals/savePrmsSalsAplyPrmsSalsAplyMstStrg.do";

        	}else if(vBtnCd == "CTL11205" || vBtnCd == "CTL11207" || vBtnCd == "CTL11208"){ // 신청서작성 - 신청, 신청서보완 - 재신청
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}

        		this.vStrSvcId  = "savePrmsSalsAplyPrmsSalsAplyMstStrg";
        		this.vStrSvcUrl = "prmsSals/savePrmsSalsAplyPrmsSalsAplyMstStrg.do";

        	}else if(vBtnCd == "CTL11206" || vBtnCd == "CTL11209" || vBtnCd == "CTL11215"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsPrmsSalsAplyMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "savePrmsSalsAplyPrmsSalsAplyMstStrg";
        			this.vStrSvcUrl = "prmsSals/savePrmsSalsAplyPrmsSalsAplyMstStrg.do";

        		}

        	}else if(vBtnCd == "CTL11210" || vBtnCd == "CTL11211"){ // 접수 - 접수, 접수 - 보완요청
        		this.vStrSvcId  = "savePrmsSalsAplyPrmsSalsAplyMstStrg";
        		this.vStrSvcUrl = "prmsSals/savePrmsSalsAplyPrmsSalsAplyMstStrg.do";

        		// 서비스요청내용
        		if(this.gfnIsNull(this.dsPrmsSalsAplyMst.getColumn(0, "srvcDmndCnIdntyYn"))){
        			this.divForm.form.Div03.form.rdoSrvcDmndCnYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["서비스요청 내용확인 \n"]);
        			return;

        		}
        		// 보완요청 - 보완사유 체크
        		if(vBtnCd == "CTL11211"){
        			if(this.gfnIsNull(this.dsPrmsSalsAplyMst.getColumn(0, "splmntDmndRsnCn"))){
        				this.divForm.form.Div03.form.txtSplmntDmndRsn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["보완요청 사유 \n"]);
        				return;

        			}
        		}

        	}else if(vBtnCd == "CTL11212" || vBtnCd == "CTL11213"){ // 담당자검토및승인 - 보완요청 || 승인
        		this.vStrSvcId  = "savePrmsSalsAplyPrmsSalsAplyMstStrg";
        		this.vStrSvcUrl = "prmsSals/savePrmsSalsAplyPrmsSalsAplyMstStrg.do";

        		// 서비스신청정보
        // 		if(this.gfnIsNull(this.dsPrmsSalsAplyMst.getColumn(0, "srvcAplyInfoIdntyYn"))){
        // 			this.divForm.form.Div03.form.rdoSrvcDmndCnYn.setFocus();
        // 			this.gfnAlertMsg("msg", "MSG_009", ["서비스신청정보 확인 \n"]);
        // 			return;
        //
        // 		}
        // 		// 보완요청 - 보완사유 체크
        // 		if(vBtnCd == "CTL11212"){
        // 			if(this.gfnIsNull(this.dsPrmsSalsAplyMst.getColumn(0, "splmntDmndRsnCn"))){
        // 				this.divForm.form.Div03.form.txtSplmntDmndRsn.setFocus();
        // 				this.gfnAlertMsg("msg", "MSG_009", ["보완요청사유 \n"]);
        // 				return;
        //
        // 			}
        // 		}
        	}else if(vBtnCd == "CTL10999"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsPrmsSalsAplyMst.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsPrmsSalsAplyMst.setColumn(0, "aplySeCd", this.aplySeCd);

        	// 시설운영마스터 데이터 세팅
        	if(!this.gfnIsNull(this.aplyNo)){
        		this.dsMst.setColumn(0, "aplyNo", this.aplyNo);

        	}
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	this.dsMst.setColumn(0, "aplySeCd", this.aplySeCd);  // 신청구분코드

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "docCd"))){
        		this.dsMst.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

        	}

        	var curDt = this.gfnGetDate("time");
        	if(this.gfnIsNull(this.dsPrmsSalsAplyMst.getColumn(0, "aplyDt"))){
        		this.dsPrmsSalsAplyMst.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료, 등록/허가증제작중 - 제작완료
        	if(vBtnCd == "CTL11206" || vBtnCd == "CTL11209" || vBtnCd == "CTL11215" ){
        		// 종료일자 세팅
        		this.dsPrmsSalsAplyMst.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 납부담당자동일여부 - 동일하지 않을때 개인정보동의 항목 null 넣어줌.
        	if(this.dsPrmsSalsAplyMst.getColumn(0, "payPicSmYn") == "1"){ // 동일하지않음
        		if(this.dsPrmsSalsAplyMst.getColumn(0, "aplyKndCd") == "CARREQTYPE002"){
        			this.dsPrmsSalsAplyMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsPrmsSalsAplyMst.setColumn(0, "prvcClctChcAgreYn", null);

        		}else{
        			this.dsPrmsSalsAplyMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsPrmsSalsAplyMst.setColumn(0, "prvcClctEsntlAgreYn2", null);
        			this.dsPrmsSalsAplyMst.setColumn(0, "prvcClctChcAgreYn", null);

        		}

        	}else if(this.dsPrmsSalsAplyMst.getColumn(0, "payPicSmYn") == "0"){ // 동일함
        		this.dsPrmsSalsAplyMst.setColumn(0, "prvcClctEsntlAgreYn2", null);

        	}

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntId"))){
        		this.dsMst.setColumn(0, "aplcntId", this.gvUserId);	// 신청자id

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntNm"))){
        		this.dsMst.setColumn(0, "aplcntNm", this.gvUserNm);	// 신청자명

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntInstCd"))){
        		this.dsMst.setColumn(0, "aplcntInstCd", this.gvCoId);		// 신청자기관코드

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntInstNm"))){
        		this.dsMst.setColumn(0, "aplcntInstNm", this.gvCoNm);		// 신청자기관명

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntDeptCd"))){
        		this.dsMst.setColumn(0, "aplcntDeptCd", this.gvDeptId);	// 신청자부서코드

        	}

        	if(this.dsMst.getColumn(0, "clmZip") != this.dsPrmsSalsAplyMst.getColumn(0, "clmZip")){
        		this.dsMst.setColumn(0, "clmZip", this.dsPrmsSalsAplyMst.getColumn(0, "clmZip"));	// 우편번호

        	}
        	if(this.dsMst.getColumn(0, "clmAddr") != this.dsPrmsSalsAplyMst.getColumn(0, "clmAddr")){
        		this.dsMst.setColumn(0, "clmAddr", this.dsPrmsSalsAplyMst.getColumn(0, "clmZip"));	// 청구주소

        	}
        	if(this.dsMst.getColumn(0, "clmDtlAddr") != this.dsPrmsSalsAplyMst.getColumn(0, "clmDtlAddr")){
        		this.dsMst.setColumn(0, "clmDtlAddr", this.dsPrmsSalsAplyMst.getColumn(0, "clmDtlAddr"));		// 청구상세주소

        	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsPrmsSalsAplyMst)
        	&& !this.gfnDsIsUpdated(this.dsAtfl)
        	&& !this.gfnDsIsUpdated(this.dsCnvyMttr)
        	&& !this.gfnDsIsUpdated(this.dsListTpbiz)
        	&& !this.gfnDsIsUpdated(this.dsListSalsCn)
        	&& !this.gfnDsIsUpdated(this.dsListSalsPlc)
        	){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);//변경된 내용 없습니다
        		return;

        	}

        	if(vBtnCd == "CTL11206" || vBtnCd == "CTL11209" || vBtnCd == "CTL11215"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		trace("sssss==>" + vBtnCd );
        		this.gfnConfirmMsg("endSaveConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        	}else if(vBtnCd == "CTL11205") { // 신청
        		this.gfnConfirmMsg("aply_confirm", "MSG_025", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}

        }

        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
                    // 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        						  , "bsnsSeCd" : "TSPCAR"   // 업무구분코드(입주자서비스)
        						  , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        				};

        				this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        				this.RaonkUpload.Transfer();
        				return;

        			} else {
        				// 저장
        				this.cfnSave();
        			}
        		}
        	}else if(sPopupId == "endConfirm"){
        		if(oRtn.result == "Y") {
        			// 메뉴 ID
        			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);

        			this.gfnCloseMenu(sMenuId);

        		}
        	}else if(sPopupId == "endSaveConfirm"){
        	alert("gggg==>" + oRtn.result);
        		if(oRtn.result == "Y") {
        			// 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        						  , "bsnsSeCd" : "TSPCAR"   // 업무구분코드(입주자서비스)
        						  , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        				};

        				this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        				this.RaonkUpload.Transfer();
        				return;

        			} else {
        			alert("gggg2222==>" + oRtn.result);
        				// 저장
        				this.cfnSave();
        			}
        		}
        	}else if(sPopupId == "saveAlert"){
        		this.reload();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

        	}else if(sPopupId == "imsi_saveAlert"){
        		//this.alert("임시저장 되었습니다.");
        		//this.close();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

        	}else if(sPopupId == "aply_confirm"){
        		if(oRtn.result == "Y") {

        			// 저장
        			this.cfnSave();
        // 			// 메뉴 ID
        // 			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        //
        // 			this.gfnCloseMenu(sMenuId);

        		}
        	}
        };

        /**************************************************************************
         * @name : cfnDelAtfl
         * @description : 첨부 파일 삭제
         ***************************************************************************/
        this.cfnDelAtfl = function(colId) {
            // 존재하지 않으면 돌아감
        	if(this.gfnIsNull(colId) || this.gfnIsNull(this.dsFile.getColumn(0, colId + "_orgnlFileNm"))) { return; }

            // RaonkUpload mergeFile 삭제
            var oRaonkUpload = this.RaonkUpload;
        	if(oRaonkUpload.GetListInfo().mergeFile) {
        	    oRaonkUpload.GetListInfo().mergeFile.forEach(function(v, i, o) {
        			if(v.customValue == colId) {
        				oRaonkUpload.SetSelectFile(i, '0');
        				oRaonkUpload.DeleteSelectedFile();
        			}
        		});
        	}

        	// 첨부파일 삭제
        	this.dsAtfl.deleteRow(this.dsAtfl.findRow("colId", colId));

        	// 첨부 파일 표출용 DS 설정
            this.cfnSetAtflExprs("", "", "", colId);
        };

        /**************************************************************************
         * @name : cfnSetAtflExprs
         * @description : 첨부 파일 표출용 DS 설정
         ***************************************************************************/
        this.cfnSetAtflExprs = function(fullName, orgnlFileNm, fileSz, colId) {
        	// 화면에 표출할 파일정보를 그리드에 설정
        	this.dsFile.setColumn(0, colId + "_fullName"   , fullName   );  // 파일풀명
        	this.dsFile.setColumn(0, colId + "_orgnlFileNm", orgnlFileNm);  // 원본파일명
        	this.dsFile.setColumn(0, colId + "_fileSz"     , fileSz     );  // 파일크기
        	this.dsFile.setColumn(0, colId + "_colId"      , this.gfnIsNull(fullName) ? "" : colId);  // 컬럼ID
        };

        /**************************************************************************
         * @name : fnValiChk
         * @description : validation check
         ***************************************************************************/
        this.fnValiChk = function()
        {

        	// 사업자명
        	if(this.gfnIsNull(this.divForm.form.Div02.form.edtBzmnNm.value)){
        		this.divForm.form.Div02.form.edtBzmnNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["사업자명 \n"]);
        		return false;
        	}

        	// 사업자등록번호
        	if(this.gfnIsNull(this.divForm.form.Div02.form.edtBrno.value)){
        		this.divForm.form.Div02.form.edtBrno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 사업자등록번호 ] \n"]);
        		return false;
        	}

        	// 사업장주소
        	if(this.gfnIsNull(this.divForm.form.Div02.form.edtBzmnAddr.value)){
        		this.divForm.form.Div02.form.edtBzmnAddr.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 사업장주소 ] \n"]);
        		return false;
        	}

        	// 사업장전화번호
        	if(this.gfnIsNull(this.divForm.form.Div02.form.edtBplcTelno.value)){
        		this.divForm.form.Div02.form.edtBplcTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 사업장전화번호 ] \n"]);
        		return false;
        	}

        	// 영업종별내용 그리드
        	if(this.dsListTpbiz.rowcount == 0){
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 영업종별 그리드내용 ] \n"]);
        		return false;
        	}

        	for(var i = 0; i < this.dsListTpbiz.rowcount; i++) {
        		// 대분류
        		if(this.gfnIsNull(this.dsListTpbiz.getColumn(i, "tpbizLclsfCd"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[ 대분류 ] \n"]);
        			return false;
        		}
        		// 중분류
        		if(this.gfnIsNull(this.dsListTpbiz.getColumn(i, "tpbizMclsfCd"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[ 중분류 ] \n"]);
        			return false;
        		}
        		// 소분류
        		if(this.gfnIsNull(this.dsListTpbiz.getColumn(i, "tpbizSclsfCd"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[ 소분류 ] \n"]);
        			return false;
        		}
        	}

        	// 영업내용 그리드
        	if(this.dsListSalsCn.rowcount == 0){
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 영업내용 그리드내용 ] \n"]);
        		return false;
        	}

        	for(var i = 0; i < this.dsListSalsCn.rowcount; i++) {
        		// 대분류
        		if(this.gfnIsNull(this.dsListSalsCn.getColumn(i, "salsCn"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[ 영업내용 ] \n"]);
        			return false;
        		}
        	}

        	// 영업장소내용 그리드
        	if(this.dsListSalsPlc.rowcount == 0){
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 영업장소 그리드내용 ] \n"]);
        		return false;
        	}

        	for(var i = 0; i < this.dsListSalsPlc.rowcount; i++) {
        		// 대분류
        		if(this.gfnIsNull(this.dsListSalsPlc.getColumn(i, "salsPlcLclsfCd"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[ 대분류 ] \n"]);
        			return false;
        		}
        		// 중분류
        		if(this.gfnIsNull(this.dsListSalsPlc.getColumn(i, "salsPlcMclsfCd"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[ 중분류 ] \n"]);
        			return false;
        		}
        		// 소분류
        		if(this.gfnIsNull(this.dsListSalsPlc.getColumn(i, "salsPlcSclsfCd"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[ 소분류 ] \n"]);
        			return false;
        		}
        	}

        	// 계약시작기간
        	if(this.gfnIsNull(this.divForm.form.Div02.form.divCal.form.calBgngYmd.value)){
        		this.divForm.form.Div02.form.divCal.form.calBgngYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 계약시작기간 ] \n"]);
        		return false;
        	}

        	// 계약종료기간
        	if(this.gfnIsNull(this.divForm.form.Div02.form.divCal.form.calEndYmd.value)){
        		this.divForm.form.Div02.form.divCal.form.calEndYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 계약종료기간 ] \n"]);
        		return false;
        	}

        	return true;
        }

        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function()
        {

        //alert("bb11");
        	// 기본 바인딩 세팅
        	// 개인정보 필수동의
        	var sCompid = "divForm.form.Div02.form.rdoSrvcDmndCnYn";
        	var sItem = "";

        	for(var i = 0; i < this.binds.length; i++){
        		if(this.binds[i].compid == sCompid){
        			sItem = this.binds[i].name;
        			break;

        		}
        	}
        	// 같은 항목으로 동적바인딩 제거
        	this.removeChild(sItem);
        //alert("bb22");
        	var tmpTxt = "";

        	//TAS10481 : 담당자검토및승인
        	if(this.jobCd == "TAS10481"){
        		// 바인딩 생성
        		var bindObj = new BindItem();
        		bindObj.init(sItem, sCompid, "value", "dsPrmsSalsAplyMst", "srvcAplyInfoIdntyYn");
        		this.addChild(sItem, bindObj);
        		bindObj.bind();
        		tmpTxt = "서비스신청정보확인";

        	}else{
        		// 바인딩 생성
        		var bindObj = new BindItem();
        		bindObj.init(sItem, sCompid, "value", "dsPrmsSalsAplyMst", "srvcDmndCnIdntyYn");
        		this.addChild(sItem, bindObj);
        		bindObj.bind();
        		tmpTxt = "서비스요청내용확인";

        	}
        //alert("bb33_this.jobCd==>" + this.jobCd);
        	// text 세팅
        	this.divForm.form.Div03.form.staPrvcClctChcAgreYn01.text = tmpTxt;

        	// TAS10480 : 담당자접수, TAS10481 : 담당자검토및승인
        	//TODO
        	//서비스목록화면에서 팝업 오픈인지, 처리자 로그인 후 메인화면의 처리목록에 팝업 오픈인지 구분 필요
        	//KJS,20241120
        	if(this.jobCd == "TAS10480" || this.jobCd == "TAS10481"){
        //alert("bb33222");
        		this.divForm.form.Div03.form.pan07.visible = true; //서비스요청내용확인 radio
        // 		this.divForm.form.Div02.form.pan08.visible = true; //보완요청사유
        // 		this.divForm.form.Div02.form.pan09.visible = true; //별칭내용
        // 		this.divForm.form.Div02.form.pan10.visible = true; //전달사항
        // 		this.divForm.form.Div02.form.pan11.visible = true; //별칭내용
        // 		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS10479 : 신청서보완
        	if(this.jobCd == "TAS10479"){
        		this.divForm.form.Div03.form.pan08.visible = true; //보완요청사유
        		this.divForm.form.Div03.form.pan10.visible = true; //전달사항
        		this.divForm.form.Div03.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS10483 : 만족조조사
        	if(this.jobCd == "TAS10483"){
        	    //this.divForm.form.Div02.form.pan10.visible = false; //처리내역
        		//this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}
        //alert("bb44");
        	// 담당자접수 (조회 거래) 시 readyOnly 처리
        // 	if(this.jobCd == "TAS10480"){
        // 		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        // 		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        // 	}

        	// 신청서 보완 시 보완내역 readyOnly 처리
        	if(this.jobCd == "TAS10479"){
        // 		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        // 		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        // 		this.divForm.form.Div02.form.grdSplmnt.readonly = true;
        // 		this.divForm.form.Div02.form.grdCnvyMttr.readonly = true;

        		this.resetScroll();

        	}

        	trace("(fn_ScrnSetting)this.jobCd ====>" + this.jobCd);

        	// TAS10484 : 종료 일때
        	if(this.jobCd == "TAS10484"){
        		var sBfrJobCd = this.dsPrmsSalsAplyMst.getColumn(0, "bfrJobCd");
        		trace("sBfrJobCd_ff==>" + sBfrJobCd);
        		// TAS10478 : 신청서작성, TAS10479 : 신청서보완
        		if(sBfrJobCd == "TAS10478"){


        		}else if(sBfrJobCd == "TAS10479"){
        			// 신청서보완에서 미처리 종료된 경우 보완 내역을 보여준다.
        // 			this.divForm.form.Div02.form.pan07.visible = true;
        // 			this.divForm.form.Div02.form.pan08.visible = true;
        // 			this.divForm.form.Div02.form.pan09.visible = true;
        			// this.divForm.form.Div07.form.pan07.visible = true;
        			//this.divForm.form.Div07.form.pan08.visible = true;

        			this.resetScroll();

        		}
        	}
        //alert("bb555==>" + this.jobCd);
        	// this.jobCd 가 TAS10478, TAS10479 일때는 신청서 작성/보완 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS10478" && this.jobCd != "TAS10479"){

        		// 컨포넌트 enable, readonly 처리
        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02];

        		arrDivComps.forEach(oDiv => {
        			Array.from(oDiv.form.components).forEach(oComp => {
        				fnReadonly.call(this, oComp);
        			});
        		});

        		// 내부함수호출
        		function fnReadonly (oComp, bReadonly) {
        			if (oComp instanceof nexacro.Div) {
        				fnReadonly.call(this, oComp.form);
        			} else {
        				if (oComp instanceof nexacro.Static) return;
        				if (oComp instanceof nexacro.Panel) return;
        				if (oComp instanceof nexacro.TextArea){
        					// TAS10484 : 종료가 아닐땐 textArea 수정가능하게 해줌.
        					if(this.jobCd != "TAS10484"){
        						return;

        					}
        				}
        				if (oComp instanceof nexacro.Button) {
        					if(oComp.id.indexOf("btnMin") > -1) return;
        					try {
        						// enable 처리할거
        						oComp.enable = bReadonly;

        						return;
        					} catch(e) {
        						trace ("enable속성없음");
        					}
        				}
        //alert("bb8888");

        				try {
        					// 접수단계 || 담당자검토및승인
        					if(this.jobCd == "TAS10480" || this.jobCd == "TAS10481"){
        						// "rdoSrvcDmndCnYn", "grdSplmnt", "grdCnvyMttr"
        						if(this.gfnDecode(oComp.id, "rdoSrvcDmndCnYn", "1", "grdSplmnt", "1", "grdCnvyMttr", "1", "0") == "1"){
        							return;

        						}

        					}

        					// readonly 처리할거
        					oComp.readonly = !bReadonly;

        				} catch(e) {
        					trace ("readonly 속성없음");
        				}
        			}
        		}
        	}

        	//alert("bb9999");
        }

        /************************************************************************************************************
         * @name : fnCallback
         * @description : 팝업에 관한 콜백 함수
         ***********************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
            trace("@@fnCallback errorCode==>" + errorCode + " ; " +"svcID==>" + svcID + " ; " + "errorMsg==>" + errorMsg);

        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectPrmsSalsAplyPrmsSalsGdInfo" : // 구내영업안내정보 조회

        			// 사업자등록번호 setting
        			this.dsPrmsSalsAplyMst.setColumn(0, "brno"	, this.dsPrmsSalsGdInfo.getColumn(0, "brno"));

        			break;

        		case "selectPrmsSalsAplyPrmsSalsAplyMstInq" : // 구내영업신청 마스터 조회
        			//alert("마스터 정상조회!!!");
        			if(this.dsPrmsSalsAplyMst.getRowCount() > 0){
        				this.jobCd = this.dsPrmsSalsAplyMst.getColumn(0, "jobCd");
        			}

        			//@서비스목록 화면에서 팝업조회시 버튼 생성 막음(kjs, 20241119)
        			// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			//신청번호
        			//this.divForm.form.Div01.form.pan01_AplyNo.visible = true;

        			alert("조회가 완료되었습니다");

        			break;

        		case "getAplySeNm" : // 신청구분명 조회
        			// 신청구분명 set
        			var v_AplySeNm = this.cfnGvbkAplySeNm();
        			trace("this.cfnGvbkAplySeNm()_v_AplySeNm==>" + v_AplySeNm);
        			this.divForm.form.Div01.form.edtAplySeNm.value = v_AplySeNm;

        			break;

        		case "comAplyKndCdSearch" : // 신청종류코드 조회
        			//this.dsAplyKndCdList.filter("cdId == 'FACREQTYPE001' || cdId == 'FACREQTYPE002'");
        			//this.divForm.form.Div02.form.rdoAplyKndCd.set_index(0);

        			break;

        		case "comRenUseCdSearch" : // 시설구분코드 조회

        			//this.divForm.form.Div02.form.rdoFcltSe.set_index(0);

        			break;

        		case "comSrvcAplySeCdSearch" : // 서비스신청구분코드 조회

        			// 전체 조회를 위해 [선택] 추가
        // 			this.dsSrvcAplySeList.insertRow(0);
        // 			this.dsSrvcAplySeList.setColumn(0, "cdId", "");
        // 			this.dsSrvcAplySeList.setColumn(0, "cdNm", "[서비스신청구분]");
        //
        // 			this.divForm.form.Div02.form.cboSrvcAplySe.set_index(0);

        			break;

        		case "comBldgSeSearch" : // 건물구분 조회
        			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020' ,'TSPLOCTSC030' ,'TSPLOCTSC090'
        // 			this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC020' || cdId == 'TSPLOCTSC070'");
        //
        // 			// 전체 조회를 위해 [선택] 추가
        // 			this.dsBldgSeList.insertRow(0);
        // 			this.dsBldgSeList.setColumn(0, "cdId", "");
        // 			this.dsBldgSeList.setColumn(0, "cdNm", "[건물구분]");
        //
        // 			this.divForm.form.Div02.form.cboBldgSe.set_index(0);

        			break;

        		case "comAplyKndSearch" : // 신청구분 조회
        			this.divForm.form.Div03.form.cboSrvcAplySe.set_index(0);

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			// 접수 || 담당자검토및승인
        			if(this.jobCd == "TAS10480" || this.jobCd == "TAS10481"){
        				this.rdoSrvcDmndCnYn_onitemchanged(this.divForm.form.Div02.form.rdoSrvcDmndCnYn);

        			}else if(this.jobCd == "TAS10479"){ // 신청서보완
        				var sClrId = this.dsPrmsSalsAplyMst.getColumn(0, "clrId");
        				console.log("sClrId = " + sClrId);
        				if(this.gfnIsNull(sClrId)){ // 접수자ID가 없을때 담당자접수 에서 넘어온 자료
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL11207"){
        							oComp.visible = false;

        						}else if(oComp.id == "CTL11208"){
        							oComp.visible = true;
        							console.log("CTL11208");

        						}
        					});

        				}else{
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL11207"){
        							oComp.visible = true;
        							console.log("CTL11207");

        						}else if(oComp.id == "CTL11208"){
        							oComp.visible = false;

        						}
        					});
        				}
        			}

        			break;

        		case "savePrmsSalsAplyPrmsSalsAplyMstStrg" : // 임시저장, 신청

        			alert("저장 처리가 정상적으로 완료되었습니다");
        		    this.close();
        			//this.gfnAlertMsg("저장", this.objApp.getVariable("gvRetMsg"));
        			//this.gfnAlertMsg("imsi_saveAlert", "저장", this.objApp.getVariable("gvRetMsg"), "msgCallback");

        // 			var param = {
        // 				"coId" : coId
        // 			};
        // 			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 			var sMenuUrl = 'work::SVC/fac/LIF046M00.xfdl';
        // 			var actNm = '추가/상세';
        //
        // 			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);

        			break;

        // 		case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :
        // 			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        // 			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        // 			    // 첨부파일관리번호
        // 				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        // 			}
        //
        //             // 저장
        // 			this.cfnSave();
        //
        // 			break;

        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (paramAplyNo)
        {
        	this.fnSearch(paramAplyNo);
        };

        /*=================================================================================*
         * @name : fnSearch
         * @description : 조회
         *=================================================================================*/
        this.fnSearch = function(paramAplyNo)
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "aplyNo", paramAplyNo);

        	var strSvcId    = "selectPrmsSalsAplyPrmsSalsAplyMstInq";
        	var strSvcUrl   = "prmsSals/selectPrmsSalsAplyPrmsSalsAplyMstInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsPrmsSalsAplyMst=dsPrmsSalsAplyMst dsCnvyMttr=dsCnvyMttr"
        	                  + " dsAtfl=dsAtfl dsMst=dsMst dsPrmsSalsGdInfo=dsPrmsSalsGdInfo"
        	                  + " dsListTpbiz=dsListTpbiz"     		     // 구내영업업종정보 DS
        					  + " dsListSalsCn=dsListSalsCn"             // 구내영업내용정보 DS
        					  + " dsListSalsPlc=dsListSalsPlc"     		 // 구내영업장소정보 DS
        					  ;


        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*=============================================================================*
         * @name : fnSelectGdInfo
         * @description : onLoad 시 신청안내정보 SELECT
         *=============================================================================*/
        this.fnSelectGdInfo = function()
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	//TODO GDS에서 사업자등록번호를 받아야 함
        	this.dsSearch.setColumn(0, "brno", "1098133068");

        	var strSvcId    = "selectPrmsSalsAplyPrmsSalsGdInfo";
        	var strSvcUrl   = "prmsSals/selectPrmsSalsAplyPrmsSalsGdInfo.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsPrmsSalsGdInfo=dsPrmsSalsGdInfo"
        					  ;

        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*=============================================================================*
         * @name : cfnSave
         * @description : 저장
         *=============================================================================*/
        this.cfnSave = function ()
        {
        	this.fn_Save(this.vStrSvcId, this.vStrSvcUrl);
        };

        this.fn_Save = function(vStrSvcId, vStrSvcUrl)
        {

        	// 전달사항 없을때 오류 나서 addRow 추가
        	if(this.dsCnvyMttr.getRowCount() < 1){
        		this.dsCnvyMttr.addRow();

        	}

        	var strSvcId    = vStrSvcId;
        	var strSvcUrl   = vStrSvcUrl;
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	inData    = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        			          + " dsMst=dsMst:U"                             // Master DS
         			          + " dsPrmsSalsAplyMst=dsPrmsSalsAplyMst:U"     // 구내영업 마스터 DS
        					  + " dsListTpbiz=dsListTpbiz:U"     		     // 구내영업업종정보 DS
        					  + " dsListSalsCn=dsListSalsCn:U"     		     // 구내영업내용정보 DS
        					  + " dsListSalsPlc=dsListSalsPlc:U"     		 // 구내영업장소정보 DS
        			          + " dsCnvyMttr=dsCnvyMttr"                     // 전달사항 DS
        			          + " dsAtfl=dsAtfl:U";                          // 첨부파일 DS

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*========================================================================================================*/
        /*  설치요청기간 시작일자 항목 변경
        /*=========================================================================================================*/
        this.divForm_Div02_divCal_calBgngYmd_onchanged = function(obj,e)
        {
        	var v_calBgngYmd = this.divForm.form.Div02.form.divCal.form.calBgngYmd.value;
        	var v_calEndYmd = this.divForm.form.Div02.form.divCal.form.calEndYmd.value;

        	//차이 일수계산
        	this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(v_calBgngYmd, v_calEndYmd));
        };

        /*=========================================================================================================*/
        /*  설치요청기간 종료일자 항목 변경
        /*=========================================================================================================*/
        this.divForm_Div02_divCal_calEndYmd_onchanged = function(obj,e)
        {
        	var v_calBgngYmd = this.divForm.form.Div02.form.divCal.form.calBgngYmd.value;
        	var v_calEndYmd = this.divForm.form.Div02.form.divCal.form.calEndYmd.value;

        	//차이 일수계산
        	this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(v_calBgngYmd, v_calEndYmd));
        };

        /*============================================================================================================================*/
        /*  시설구분 항목 변경
        /*============================================================================================================================*/
        this.divForm_Div02_rdoFcltSe_onitemchanged = function(obj,e)
        {
        	//상업용시설 구내영업신청 신청내역 리스트
        	if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        		this.divForm.form.Div02.form.pan05.set_visible(false);//업무용시설
        	}else{
        		this.divForm.form.Div02.form.pan05.set_visible(true);//상업용시설
        	}
        };


        this.divForm_Div02_cboSrvcAplySe_onitemchanged = function(obj,e)
        {
            trace("dddd==>" + obj.value);
        	if(obj.value == "FACSVCTYPE008"){//기타선택
        		this.divForm.form.Div02.form.Panel_dtlArtlc.visible = true;
        	}else{
        		this.divForm.form.Div02.form.Panel_dtlArtlc.visible = false;
        	}
        };


        this.cfnClose = function(){

        	trace("cfnClose call");
        }

        /**************************************************************************
         * @name : rdoSrvcDmndCnYn_onitemchanged
         * @description : 서비스요청내용 수정 완료 시
         ***************************************************************************/
        this.rdoSrvcDmndCnYn_onitemchanged = function(obj,e)
        {
        	var objVal = this.divForm.form.Div03.form.rdoSrvcDmndCnYn.value;

        	if(this.jobCd == "TAS10480"){ // 담당자접수
        	//alert("objVal11==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL11210	접수
        			CTL11211	보완요청
        			CTL11020	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11210"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11211"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}

        	}else if(this.jobCd == "TAS10481"){ // 담당자검토및승인
        	//alert("objVal==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL11212	보완요청
        			CTL11213	승인
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11213"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL11212"){
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11211"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}
        	}

        	// 1 : 확인 일때 보완요청사유를 지워준다.
        	if(objVal == "1"){
        		// this.dsList.setColumn(0, "splmntDmndRsnCn", "");

        	}
        };

        /*============================================================================================================================*/
        /*  영업종별내용 그리드 행추가
        /*============================================================================================================================*/
        this.divForm_divPicListGrp_divGrdPicList_btnAddRow_onclick = function(obj,e)
        {
        	var nRow = this.dsListTpbiz.addRow();
        	//this.dsListTpbiz.setColumn(nRow, "gubun" , this.dsListTpbiz.rowposition);
        	//this.dsListTpbiz.setColumn(nRow, "hpeYmd" , "");
        };

        /*============================================================================================================================*/
        /*  영업종별내용 그리드 행삭제
        /*============================================================================================================================*/
        this.divForm_divPicListGrp_divGrdPicList_btnDelRow_onclick = function(obj,e)
        {
        	if(this.dsListTpbiz.findRow("chk", 1) != -1) {
         		this.gfnConfirmMsg( "tspbiz"
         		                  , "MSG_005"   // 삭제하시겠습니까?
         						  , function(id, val) {
         						        if(JSON.parse(val).result == "Y") {
        			                        this.dsListTpbiz.deleteMultiRows(this.dsListTpbiz.extractRows("chk == " + 1));
         		                        }
         		                    }
         						  , ["확인", "취소"]
         						  , ["Y"  , "N" ]
         						  );
         	} else {
         	    // 선택된 내용이 없습니다.
         		this.gfnAlertMsg("msg", "MSG_006", "");
         	}
        };

        /*============================================================================================================================*/
        /*  영업종별내용 그리드 대중소 분류 선택
        /*============================================================================================================================*/
        this.divForm_Div02_divGrd_grdTpbiz_oncellposchanged = function(obj,e)
        {
        	//alert("e.col==>" + e.col);
        	if(e.col == this.divForm.form.Div02.form.divGrd.form.grdTpbiz.getBindCellIndex("body", "tpbizLclsfCd")) {
        		//this.divForm.form.Div02.form.divGrd.form.grdTpbiz.getCellValue()
        		//alert("aa11==>" + this.dsCboTpbizLclsf.getColumn(this.dsCboTpbizLclsf.rowposition, "tpbizLclsfCd"));
        		//this.dsCboTpbizMclsf.filter("cdId == 'A02'");
        		this.dsCboTpbizMclsf.filter("cdId.toString().indexOf('C')>-1");

        	}else if(e.col == this.divForm.form.Div02.form.divGrd.form.grdTpbiz.getBindCellIndex("body", "tpbizMclsfCd")) {
        		this.dsCboTpbizSclsf.filter("cdId.toString().indexOf('C01')>-1");

        	}
        };

        /*============================================================================================================================*/
        /*  영업장소별내용 그리드 행추가
        /*============================================================================================================================*/
        this.divForm_Div02_divGrd00_btnAddRow_onclick = function(obj,e)
        {
        	var nRow = this.dsListSalsPlc.addRow();
        };

        /*============================================================================================================================*/
        /*  영업장소별내용 그리드 행삭제
        /*============================================================================================================================*/
        this.divForm_Div02_divGrd00_btnDelRow_onclick = function(obj,e)
        {
        	if(this.dsListSalsPlc.findRow("chk", 1) != -1) {
         		this.gfnConfirmMsg( "tspbiz"
         		                  , "MSG_005"   // 삭제하시겠습니까?
         						  , function(id, val) {
         						        if(JSON.parse(val).result == "Y") {
        			                        this.dsListSalsPlc.deleteMultiRows(this.dsListSalsPlc.extractRows("chk == " + 1));
         		                        }
         		                    }
         						  , ["확인", "취소"]
         						  , ["Y"  , "N" ]
         						  );
         	} else {
         	    // 선택된 내용이 없습니다.
         		this.gfnAlertMsg("msg", "MSG_006", "");
         	}
        };

        /*============================================================================================================================*/
        /*  영업장소별내용 그리드 대중소 분류 선택
        /*============================================================================================================================*/
        this.divForm_Div02_divGrd00_grdSalsPlc_oncellposchanged = function(obj,e)
        {
        	if(e.col == this.divForm.form.Div02.form.divGrd00.form.grdSalsPlc.getBindCellIndex("body", "salsPlcLclsfCd")) {
        		//this.divForm.form.Div02.form.divGrd.form.grdTpbiz.getCellValue()
        		//alert("aa11==>" + this.dsCboTpbizLclsf.getColumn(this.dsCboTpbizLclsf.rowposition, "tpbizLclsfCd"));
        		//this.dsCboTpbizMclsf.filter("cdId == 'A02'");
        		this.dsCboSalsPlcMclsf.filter("cdId.toString().indexOf('A')>-1");

        	}else if(e.col == this.divForm.form.Div02.form.divGrd.form.grdTpbiz.getBindCellIndex("body", "tpbizMclsfCd")) {
        		this.dsCboSalsPlcSclsf.filter("cdId.toString().indexOf('A01')>-1");

        	}
        };

        /*============================================================================================================================*/
        /*  영업내용 그리드 행추가
        /*============================================================================================================================*/
        this.divForm_Div02_btnAddRow_onclick = function(obj,e)
        {
        	var nRow = this.dsListSalsCn.addRow();
        };

        /*============================================================================================================================*/
        /*  영업내용 그리드 행삭제
        /*============================================================================================================================*/
        this.divForm_Div02_btnDelRow_onclick = function(obj,e)
        {
        	if(this.dsListSalsCn.findRow("chk", 1) != -1) {
         		this.gfnConfirmMsg( "tspbiz"
         		                  , "MSG_005"   // 삭제하시겠습니까?
         						  , function(id, val) {
         						        if(JSON.parse(val).result == "Y") {
        			                        this.dsListSalsCn.deleteMultiRows(this.dsListSalsCn.extractRows("chk == " + 1));
         		                        }
         		                    }
         						  , ["확인", "취소"]
         						  , ["Y"  , "N" ]
         						  );
         	} else {
         	    // 선택된 내용이 없습니다.
         		this.gfnAlertMsg("msg", "MSG_006", "");
         	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.Div02.form.divGrd.form.grdTpbiz.addEventHandler("oncellposchanged",this.divForm_Div02_divGrd_grdTpbiz_oncellposchanged,this);
            this.divForm.form.Div02.form.divGrd.form.staTotal.addEventHandler("onclick",this.divForm_Div02_divGrd_staTotal_onclick,this);
            this.divForm.form.Div02.form.divGrd.form.btnAddRow.addEventHandler("onclick",this.divForm_divPicListGrp_divGrdPicList_btnAddRow_onclick,this);
            this.divForm.form.Div02.form.divGrd.form.btnDelRow.addEventHandler("onclick",this.divForm_divPicListGrp_divGrdPicList_btnDelRow_onclick,this);
            this.divForm.form.Div02.form.btnAddRow.addEventHandler("onclick",this.divForm_Div02_btnAddRow_onclick,this);
            this.divForm.form.Div02.form.btnDelRow.addEventHandler("onclick",this.divForm_Div02_btnDelRow_onclick,this);
            this.divForm.form.Div02.form.divGrd00.form.grdSalsPlc.addEventHandler("oncellposchanged",this.divForm_Div02_divGrd00_grdSalsPlc_oncellposchanged,this);
            this.divForm.form.Div02.form.divGrd00.form.staTotal.addEventHandler("onclick",this.divForm_Div02_divGrd_staTotal_onclick,this);
            this.divForm.form.Div02.form.divGrd00.form.btnAddRow.addEventHandler("onclick",this.divForm_Div02_divGrd00_btnAddRow_onclick,this);
            this.divForm.form.Div02.form.divGrd00.form.btnDelRow.addEventHandler("onclick",this.divForm_Div02_divGrd00_btnDelRow_onclick,this);
            this.divForm.form.Div02.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_02.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_02.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_02.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_02.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_03.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_03.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_03.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_03.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.rdoSrvcDmndCnYn.addEventHandler("onitemchanged",this.rdoSrvcDmndCnYn_onitemchanged,this);
            this.divForm.form.Div03.form.txtSplmntDmndRsn.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("LIF082M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
