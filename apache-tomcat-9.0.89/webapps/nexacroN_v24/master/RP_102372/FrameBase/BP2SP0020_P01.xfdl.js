(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BPSL0040_P02");
            this.set_titletext("test");
            if (Form == this.constructor)
            {
                this._setFormPosition(1201,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMainView", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"RTL_WHL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_YY\" type=\"STRING\" size=\"256\"/><Column id=\"SEASN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHead", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SUPP_PLN_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSupExcelProperty", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"sFixCnt\" type=\"INT\" value=\"7\" size=\"30\"/><ConstColumn id=\"sRepCnt\" type=\"INT\" size=\"30\" value=\"0\"/><ConstColumn id=\"sEndCnt\" type=\"INT\" size=\"30\" value=\"0\"/><ConstColumn id=\"sHRowCnt\" type=\"INT\" size=\"30\" value=\"1\"/><Column id=\"bandGubn\" type=\"STRING\" size=\"256\"/><Column id=\"propName\" type=\"STRING\" size=\"256\"/><Column id=\"row\" type=\"INT\" size=\"256\"/><Column id=\"sFixCnt0\" type=\"STRING\" size=\"256\"/><Column id=\"sFixCnt1\" type=\"STRING\" size=\"256\"/><Column id=\"sFixCnt2\" type=\"STRING\" size=\"256\"/><Column id=\"sFixCnt3\" type=\"STRING\" size=\"256\"/><Column id=\"sFixCnt4\" type=\"STRING\" size=\"256\"/><Column id=\"sFixCnt5\" type=\"STRING\" size=\"256\"/><Column id=\"sFixCnt6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bandGubn\">head</Col><Col id=\"propName\">text</Col><Col id=\"row\">0</Col><Col id=\"sFixCnt0\">매출공급구분&#10;(1:매출, 2:공급)</Col><Col id=\"sFixCnt1\">판매종류&#10;(1:리테일, 2:홀세일)</Col><Col id=\"sFixCnt2\">영업구분&#10;(1:OffLine, 2:OnLine)</Col><Col id=\"sFixCnt5\">CLASS&#10;(1:의류, 2:용품, 3:신발)</Col><Col id=\"sFixCnt6\">ITEM&#10;ex)BR</Col><Col id=\"sFixCnt4\">상품시즌&#10;(1:S/S, 3:F/W</Col><Col id=\"sFixCnt3\">상품년도&#10;(Q:2025, R:2026, ...)</Col></Row><Row><Col id=\"bandGubn\">head</Col><Col id=\"propName\">size</Col><Col id=\"row\">1</Col><Col id=\"sFixCnt0\">150</Col><Col id=\"sFixCnt1\">150</Col><Col id=\"sFixCnt2\">150</Col><Col id=\"sFixCnt5\">150</Col><Col id=\"sFixCnt6\">150</Col><Col id=\"sFixCnt4\">150</Col><Col id=\"sFixCnt3\">150</Col></Row><Row><Col id=\"bandGubn\">head</Col><Col id=\"propName\">class</Col><Col id=\"sFixCnt0\">grd_head_P</Col><Col id=\"row\">3</Col><Col id=\"sFixCnt1\">grd_head_P</Col><Col id=\"sFixCnt5\">grd_head_P</Col><Col id=\"sFixCnt6\">grd_head_P</Col><Col id=\"sFixCnt4\">grd_head_P</Col><Col id=\"sFixCnt3\">grd_head_P</Col><Col id=\"sFixCnt2\">grd_head_P</Col></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">displaytype</Col><Col id=\"row\">4</Col><Col id=\"sFixCnt0\">combotext</Col><Col id=\"sFixCnt1\">combotext</Col><Col id=\"sFixCnt2\">combotext</Col><Col id=\"sFixCnt5\">combotext</Col><Col id=\"sFixCnt6\">normal</Col><Col id=\"sFixCnt4\">combotext</Col><Col id=\"sFixCnt3\">combotext</Col></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">edittype</Col><Col id=\"row\">5</Col><Col id=\"sFixCnt0\">combo</Col><Col id=\"sFixCnt1\">combo</Col><Col id=\"sFixCnt2\">combo</Col><Col id=\"sFixCnt5\">combo</Col><Col id=\"sFixCnt6\">normal</Col><Col id=\"sFixCnt4\">combo</Col><Col id=\"sFixCnt3\">combo</Col></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">mask</Col><Col id=\"row\">6</Col><Col id=\"sFixCnt0\"/><Col id=\"sFixCnt1\"/><Col id=\"sFixCnt2\"/><Col id=\"sFixCnt3\"/><Col id=\"sFixCnt4\"/><Col id=\"sFixCnt5\"/><Col id=\"sFixCnt6\"/></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">text</Col><Col id=\"row\">7</Col><Col id=\"sFixCnt0\">bind:GUBUN</Col><Col id=\"sFixCnt1\">bind:RTL_WHL_CD</Col><Col id=\"sFixCnt5\">bind:CLASS_CD</Col><Col id=\"sFixCnt6\">bind:ITEM_CD</Col><Col id=\"sFixCnt4\">bind:SEASN_CD</Col><Col id=\"sFixCnt3\">bind:GOODS_YY</Col><Col id=\"sFixCnt2\">bind:SALS_CLS_CD</Col></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">editdisplay</Col><Col id=\"row\">8</Col><Col id=\"sFixCnt0\"/><Col id=\"sFixCnt1\"/><Col id=\"sFixCnt2\"/><Col id=\"sFixCnt3\"/><Col id=\"sFixCnt4\"/><Col id=\"sFixCnt5\"/><Col id=\"sFixCnt6\"/></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">editlimitbymask</Col><Col id=\"row\">9</Col><Col id=\"sFixCnt0\"/><Col id=\"sFixCnt1\"/><Col id=\"sFixCnt2\"/><Col id=\"sFixCnt3\"/><Col id=\"sFixCnt4\"/><Col id=\"sFixCnt5\"/><Col id=\"sFixCnt6\"/></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">editautoselect</Col><Col id=\"row\">10</Col><Col id=\"sFixCnt0\"/><Col id=\"sFixCnt1\"/><Col id=\"sFixCnt2\"/><Col id=\"sFixCnt3\"/><Col id=\"sFixCnt4\"/><Col id=\"sFixCnt5\"/><Col id=\"sFixCnt6\"/></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">combodataset</Col><Col id=\"sFixCnt0\">dsGubun</Col><Col id=\"row\">11</Col><Col id=\"sFixCnt1\">dsSE032</Col><Col id=\"sFixCnt5\">dsClassCd</Col><Col id=\"sFixCnt6\">dsItemCd</Col><Col id=\"sFixCnt4\">dsGP008</Col><Col id=\"sFixCnt3\">dsGP011</Col><Col id=\"sFixCnt2\">dsBP011</Col></Row><Row><Col id=\"propName\">combocodecol</Col><Col id=\"bandGubn\">body</Col><Col id=\"sFixCnt0\">CD</Col><Col id=\"row\">12</Col><Col id=\"sFixCnt1\">CD</Col><Col id=\"sFixCnt5\">CD</Col><Col id=\"sFixCnt6\">CD</Col><Col id=\"sFixCnt4\">CD</Col><Col id=\"sFixCnt3\">CD</Col><Col id=\"sFixCnt2\">CD</Col></Row><Row><Col id=\"sFixCnt0\">CD</Col><Col id=\"propName\">combodatacol</Col><Col id=\"bandGubn\">body</Col><Col id=\"row\">13</Col><Col id=\"sFixCnt1\">CD</Col><Col id=\"sFixCnt5\">CD</Col><Col id=\"sFixCnt6\">CD</Col><Col id=\"sFixCnt4\">CD</Col><Col id=\"sFixCnt3\">CD</Col><Col id=\"sFixCnt2\">CD</Col></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">combodisplay</Col><Col id=\"row\">14</Col><Col id=\"sFixCnt0\">expr:dataset.getRowType(currow)==2?&apos;display&apos;:&apos;edit&apos;</Col><Col id=\"sFixCnt1\">expr:dataset.getRowType(currow)==2?&apos;display&apos;:&apos;edit&apos;</Col><Col id=\"sFixCnt5\">expr:dataset.getRowType(currow)==2?&apos;display&apos;:&apos;edit&apos;</Col><Col id=\"sFixCnt6\">expr:dataset.getRowType(currow)==2?&apos;display&apos;:&apos;edit&apos;</Col><Col id=\"sFixCnt4\">expr:dataset.getRowType(currow)==2?&apos;display&apos;:&apos;edit&apos;</Col><Col id=\"sFixCnt3\">expr:dataset.getRowType(currow)==2?&apos;display&apos;:&apos;edit&apos;</Col><Col id=\"sFixCnt2\">expr:dataset.getRowType(currow)==2?&apos;display&apos;:&apos;edit&apos;</Col></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">combodisplaynulltext</Col><Col id=\"row\">15</Col><Col id=\"sFixCnt0\">오류데이터</Col><Col id=\"sFixCnt1\">오류데이터</Col><Col id=\"sFixCnt2\">오류데이터</Col><Col id=\"sFixCnt3\">오류데이터</Col><Col id=\"sFixCnt4\">오류데이터</Col><Col id=\"sFixCnt5\">오류데이터</Col><Col id=\"sFixCnt6\">오류데이터</Col></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">combodisplaynulltype</Col><Col id=\"row\">16</Col><Col id=\"sFixCnt0\">nulltext</Col><Col id=\"sFixCnt1\">nulltext</Col><Col id=\"sFixCnt2\">nulltext</Col><Col id=\"sFixCnt3\">nulltext</Col><Col id=\"sFixCnt4\">nulltext</Col><Col id=\"sFixCnt5\">nulltext</Col><Col id=\"sFixCnt6\">nulltext</Col></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">expandshow</Col><Col id=\"row\">17</Col><Col id=\"sFixCnt0\"/><Col id=\"sFixCnt1\"/><Col id=\"sFixCnt2\"/><Col id=\"sFixCnt3\"/><Col id=\"sFixCnt4\"/><Col id=\"sFixCnt5\"/><Col id=\"sFixCnt6\"/></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">expandsize</Col><Col id=\"row\">18</Col><Col id=\"sFixCnt0\"/><Col id=\"sFixCnt1\"/><Col id=\"sFixCnt2\"/><Col id=\"sFixCnt3\"/><Col id=\"sFixCnt4\"/><Col id=\"sFixCnt5\"/><Col id=\"sFixCnt6\"/></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">textAlign</Col><Col id=\"row\">19</Col><Col id=\"sFixCnt0\">center</Col><Col id=\"sFixCnt1\">center</Col><Col id=\"sFixCnt2\">center</Col><Col id=\"sFixCnt5\">center</Col><Col id=\"sFixCnt6\">center</Col><Col id=\"sFixCnt4\">center</Col><Col id=\"sFixCnt3\">center</Col></Row><Row><Col id=\"bandGubn\">body</Col><Col id=\"propName\">padding</Col><Col id=\"row\">20</Col><Col id=\"sFixCnt0\"/><Col id=\"sFixCnt1\"/><Col id=\"sFixCnt2\"/><Col id=\"sFixCnt3\"/><Col id=\"sFixCnt4\"/><Col id=\"sFixCnt5\"/><Col id=\"sFixCnt6\"/></Row><Row><Col id=\"bandGubn\">summ</Col><Col id=\"propName\">displaytype</Col><Col id=\"row\">21</Col><Col id=\"sFixCnt0\">normal</Col><Col id=\"sFixCnt1\">normal</Col><Col id=\"sFixCnt2\">normal</Col><Col id=\"sFixCnt5\">normal</Col><Col id=\"sFixCnt6\">normal</Col><Col id=\"sFixCnt4\">normal</Col><Col id=\"sFixCnt3\">normal</Col></Row><Row><Col id=\"bandGubn\">summ</Col><Col id=\"propName\">text</Col><Col id=\"row\">22</Col><Col id=\"sFixCnt0\"/><Col id=\"sFixCnt1\"/><Col id=\"sFixCnt2\"/><Col id=\"sFixCnt3\"/><Col id=\"sFixCnt4\"/><Col id=\"sFixCnt5\"/><Col id=\"sFixCnt6\"/></Row><Row><Col id=\"bandGubn\">summ</Col><Col id=\"propName\">textAlign</Col><Col id=\"row\">23</Col><Col id=\"sFixCnt0\">center</Col><Col id=\"sFixCnt1\">center</Col><Col id=\"sFixCnt2\">center</Col><Col id=\"sFixCnt5\">center</Col><Col id=\"sFixCnt6\">center</Col><Col id=\"sFixCnt4\">center</Col><Col id=\"sFixCnt3\">center</Col></Row><Row><Col id=\"bandGubn\">summ</Col><Col id=\"propName\">padding</Col><Col id=\"row\">24</Col><Col id=\"sFixCnt0\"/><Col id=\"sFixCnt1\"/><Col id=\"sFixCnt2\"/><Col id=\"sFixCnt3\"/><Col id=\"sFixCnt4\"/><Col id=\"sFixCnt5\"/><Col id=\"sFixCnt6\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClassCd", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemCd", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGP008", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGP011", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommCode", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"p_type\" type=\"STRING\" size=\"256\"/><Column id=\"p_code\" type=\"STRING\" size=\"256\"/><Column id=\"p_dataset\" type=\"STRING\" size=\"256\"/><Column id=\"p_include_blank\" type=\"STRING\" size=\"256\"/><Column id=\"p_bindObj\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"p_code\">GP011</Col><Col id=\"p_type\">C</Col><Col id=\"p_dataset\">dsGP011</Col><Col id=\"p_bindObj\"/><Col id=\"p_include_blank\">Y</Col></Row><Row><Col id=\"p_type\">C</Col><Col id=\"p_code\">BP100</Col><Col id=\"p_dataset\">dsGP008</Col><Col id=\"p_include_blank\">Y</Col><Col id=\"p_bindObj\"/></Row><Row><Col id=\"p_type\">C</Col><Col id=\"p_code\">BP011</Col><Col id=\"p_dataset\">dsBP011</Col><Col id=\"p_include_blank\">Y</Col></Row><Row><Col id=\"p_type\">C</Col><Col id=\"p_code\">SE032</Col><Col id=\"p_dataset\">dsSE032</Col><Col id=\"p_include_blank\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSupExcelSett", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"colVal\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/><Column id=\"pivot\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">RTL_WHL_CD</Col><Col id=\"group\">Y</Col></Row><Row><Col id=\"colId\">SALS_CLS_CD</Col><Col id=\"group\">Y</Col></Row><Row><Col id=\"colId\">GOODS_YY</Col><Col id=\"colVal\"/><Col id=\"group\">Y</Col><Col id=\"pivot\"/></Row><Row><Col id=\"colId\">SEASN_CD</Col><Col id=\"colVal\"/><Col id=\"group\">Y</Col><Col id=\"pivot\"/></Row><Row><Col id=\"colId\">GUBUN</Col><Col id=\"colVal\"/><Col id=\"group\">Y</Col><Col id=\"pivot\"/></Row><Row><Col id=\"colId\">CLASS_CD</Col><Col id=\"colVal\"/><Col id=\"group\">Y</Col><Col id=\"pivot\"/></Row><Row><Col id=\"colId\">ITEM_CD</Col><Col id=\"group\">Y</Col></Row><Row><Col id=\"colId\">SUPP_PLN_YM</Col><Col id=\"colVal\"/><Col id=\"group\"/><Col id=\"pivot\">Y</Col></Row><Row><Col id=\"colId\">RESERVE_RT</Col><Col id=\"colVal\">Y</Col><Col id=\"group\"/><Col id=\"pivot\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSupExcelSave", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RTL_WHL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_YY\" type=\"STRING\" size=\"256\"/><Column id=\"SEASN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUPP_PLN_YM\" type=\"STRING\" size=\"256\"/><Column id=\"RESERVE_RT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_YY\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SIMUL_ORD_M\" type=\"STRING\" size=\"256\"/><Column id=\"SIMUL_ORD_G\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SIMUL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SIMUL_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"SUPP_CLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESERVE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_PLAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_STD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTL_WHL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEASN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_YY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBP011", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"NM\">매출</Col><Col id=\"CDNM\">1:매출</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"NM\">공급</Col><Col id=\"CDNM\">2:공급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSE032", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkGrid", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"colNm\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"message\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">ITEM_CD</Col><Col id=\"colNm\">ITEM코드</Col><Col id=\"check\">Required;</Col><Col id=\"message\"/></Row><Row><Col id=\"colId\">ITEM_CD</Col><Col id=\"colNm\">ITEM코드</Col><Col id=\"check\">Dup=GUBUN,RTL_WHL_CD,SALS_CLS_CD,GOODS_YY,SEASN_CD,CLASS_CD,ITEM_CD</Col><Col id=\"message\">ITEM 중복되었습니다.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMainView00", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"RTL_WHL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_YY\" type=\"STRING\" size=\"256\"/><Column id=\"SEASN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">1</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">1</Col><Col id=\"SALS_CLS_CD\">2</Col><Col id=\"GOODS_YY\">S</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">Q</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">1</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">2</Col><Col id=\"CLASS_CD\">1</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">2</Col><Col id=\"ITEM_CD\">OO</Col></Row><Row><Col id=\"GUBUN\">2</Col><Col id=\"RTL_WHL_CD\">2</Col><Col id=\"SALS_CLS_CD\">1</Col><Col id=\"GOODS_YY\">R</Col><Col id=\"SEASN_CD\">3</Col><Col id=\"CLASS_CD\">3</Col><Col id=\"ITEM_CD\">OO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHead00", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SUPP_PLN_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SUPP_PLN_YM\">202410</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202411</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202412</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202501</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202502</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202503</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202504</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202505</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202506</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202507</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202508</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202509</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202510</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202511</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202512</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202601</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202602</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202603</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202604</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202605</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202606</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202607</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202608</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202609</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202610</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202611</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202612</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202701</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202702</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202703</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202704</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202705</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202706</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202707</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202708</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202709</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202710</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202711</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202712</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202801</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202802</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202803</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202804</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202805</Col></Row><Row><Col id=\"SUPP_PLN_YM\">202806</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemCd00", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">00</Col><Col id=\"NM\">00</Col><Col id=\"CDNM\">SH:00</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"NM\">03</Col><Col id=\"CDNM\">SO:03</Col></Row><Row><Col id=\"CD\">04</Col><Col id=\"NM\">04</Col><Col id=\"CDNM\">BG:04</Col></Row><Row><Col id=\"CD\">06</Col><Col id=\"NM\">06</Col><Col id=\"CDNM\">BT:06</Col></Row><Row><Col id=\"CD\">09</Col><Col id=\"NM\">09</Col><Col id=\"CDNM\">ETC:09</Col></Row><Row><Col id=\"CD\">10</Col><Col id=\"NM\">10</Col><Col id=\"CDNM\">CB:10</Col></Row><Row><Col id=\"CD\">11</Col><Col id=\"NM\">11</Col><Col id=\"CDNM\">HB:11</Col></Row><Row><Col id=\"CD\">12</Col><Col id=\"NM\">12</Col><Col id=\"CDNM\">SP.IN:12</Col></Row><Row><Col id=\"CD\">13</Col><Col id=\"NM\">13</Col><Col id=\"CDNM\">TSL:13</Col></Row><Row><Col id=\"CD\">15</Col><Col id=\"NM\">15</Col><Col id=\"CDNM\">TS:15</Col></Row><Row><Col id=\"CD\">16</Col><Col id=\"NM\">16</Col><Col id=\"CDNM\">TS:16</Col></Row><Row><Col id=\"CD\">17</Col><Col id=\"NM\">17</Col><Col id=\"CDNM\">TS:17</Col></Row><Row><Col id=\"CD\">18</Col><Col id=\"NM\">18</Col><Col id=\"CDNM\">TS:18</Col></Row><Row><Col id=\"CD\">19</Col><Col id=\"NM\">19</Col><Col id=\"CDNM\">ST:19</Col></Row><Row><Col id=\"CD\">20</Col><Col id=\"NM\">20</Col><Col id=\"CDNM\">BB:20</Col></Row><Row><Col id=\"CD\">21</Col><Col id=\"NM\">21</Col><Col id=\"CDNM\">SB:21</Col></Row><Row><Col id=\"CD\">23</Col><Col id=\"NM\">23</Col><Col id=\"CDNM\">SW:23</Col></Row><Row><Col id=\"CD\">30</Col><Col id=\"NM\">30</Col><Col id=\"CDNM\">OSH:30</Col></Row><Row><Col id=\"CD\">31</Col><Col id=\"NM\">31</Col><Col id=\"CDNM\">CP:31</Col></Row><Row><Col id=\"CD\">32</Col><Col id=\"NM\">32</Col><Col id=\"CDNM\">CP:32</Col></Row><Row><Col id=\"CD\">33</Col><Col id=\"NM\">33</Col><Col id=\"CDNM\">CP:33</Col></Row><Row><Col id=\"CD\">35</Col><Col id=\"NM\">35</Col><Col id=\"CDNM\">CP:35</Col></Row><Row><Col id=\"CD\">40</Col><Col id=\"NM\">40</Col><Col id=\"CDNM\">BG:40</Col></Row><Row><Col id=\"CD\">43</Col><Col id=\"NM\">43</Col><Col id=\"CDNM\">SW(MID):43</Col></Row><Row><Col id=\"CD\">44</Col><Col id=\"NM\">44</Col><Col id=\"CDNM\">SW (OUTER):44</Col></Row><Row><Col id=\"CD\">50</Col><Col id=\"NM\">50</Col><Col id=\"CDNM\">KV:50</Col></Row><Row><Col id=\"CD\">53</Col><Col id=\"NM\">53</Col><Col id=\"CDNM\">KV:53</Col></Row><Row><Col id=\"CD\">55</Col><Col id=\"NM\">55</Col><Col id=\"CDNM\">CS:55</Col></Row><Row><Col id=\"CD\">59</Col><Col id=\"NM\">59</Col><Col id=\"CDNM\">CS:59</Col></Row><Row><Col id=\"CD\">60</Col><Col id=\"NM\">60</Col><Col id=\"CDNM\">RW:60</Col></Row><Row><Col id=\"CD\">62</Col><Col id=\"NM\">62</Col><Col id=\"CDNM\">RW:62</Col></Row><Row><Col id=\"CD\">63</Col><Col id=\"NM\">63</Col><Col id=\"CDNM\">JP:63</Col></Row><Row><Col id=\"CD\">65</Col><Col id=\"NM\">65</Col><Col id=\"CDNM\">WV:65</Col></Row><Row><Col id=\"CD\">68</Col><Col id=\"NM\">68</Col><Col id=\"CDNM\">JK, BZ:68</Col></Row><Row><Col id=\"CD\">70</Col><Col id=\"NM\">70</Col><Col id=\"CDNM\">SK.CU:70</Col></Row><Row><Col id=\"CD\">73</Col><Col id=\"NM\">73</Col><Col id=\"CDNM\">SK,CU:73</Col></Row><Row><Col id=\"CD\">78</Col><Col id=\"NM\">78</Col><Col id=\"CDNM\">OP:78</Col></Row><Row><Col id=\"CD\">80</Col><Col id=\"NM\">80</Col><Col id=\"CDNM\">PT:80</Col></Row><Row><Col id=\"CD\">81</Col><Col id=\"NM\">81</Col><Col id=\"CDNM\">GL:81</Col></Row><Row><Col id=\"CD\">82</Col><Col id=\"NM\">82</Col><Col id=\"CDNM\">PT:82</Col></Row><Row><Col id=\"CD\">83</Col><Col id=\"NM\">83</Col><Col id=\"CDNM\">PT:83</Col></Row><Row><Col id=\"CD\">85</Col><Col id=\"NM\">85</Col><Col id=\"CDNM\">SP:85</Col></Row><Row><Col id=\"CD\">86</Col><Col id=\"NM\">86</Col><Col id=\"CDNM\">SHORTS:86</Col></Row><Row><Col id=\"CD\">90</Col><Col id=\"NM\">90</Col><Col id=\"CDNM\">WM:90</Col></Row><Row><Col id=\"CD\">91</Col><Col id=\"NM\">91</Col><Col id=\"CDNM\">ETC:91</Col></Row><Row><Col id=\"CD\">92</Col><Col id=\"NM\">92</Col><Col id=\"CDNM\">ETC(수입):92</Col></Row><Row><Col id=\"CD\">95</Col><Col id=\"NM\">95</Col><Col id=\"CDNM\">CM (COOLMATE):95</Col></Row><Row><Col id=\"CD\">BB</Col><Col id=\"NM\">BB</Col><Col id=\"CDNM\">보스턴백:BB</Col></Row><Row><Col id=\"CD\">BG</Col><Col id=\"NM\">BG</Col><Col id=\"CDNM\">미니백/파우치:BG</Col></Row><Row><Col id=\"CD\">BT</Col><Col id=\"NM\">BT</Col><Col id=\"CDNM\">BELT:BT</Col></Row><Row><Col id=\"CD\">CB</Col><Col id=\"NM\">CB</Col><Col id=\"CDNM\">캐디백:CB</Col></Row><Row><Col id=\"CD\">CM</Col><Col id=\"NM\">CM</Col><Col id=\"CDNM\">COOL MATE:CM</Col></Row><Row><Col id=\"CD\">CP</Col><Col id=\"NM\">CP</Col><Col id=\"CDNM\">CAP:CP</Col></Row><Row><Col id=\"CD\">CS</Col><Col id=\"NM\">CS</Col><Col id=\"CDNM\">CS:CS</Col></Row><Row><Col id=\"CD\">CV</Col><Col id=\"NM\">CV</Col><Col id=\"CDNM\">CV:CV</Col></Row><Row><Col id=\"CD\">ET</Col><Col id=\"NM\">ET</Col><Col id=\"CDNM\">ETC:ET</Col></Row><Row><Col id=\"CD\">GL</Col><Col id=\"NM\">GL</Col><Col id=\"CDNM\">GLOVE:GL</Col></Row><Row><Col id=\"CD\">IN</Col><Col id=\"NM\">IN</Col><Col id=\"CDNM\">IN:IN</Col></Row><Row><Col id=\"CD\">JK</Col><Col id=\"NM\">JK</Col><Col id=\"CDNM\">JK:JK</Col></Row><Row><Col id=\"CD\">JP</Col><Col id=\"NM\">JP</Col><Col id=\"CDNM\">JP:JP</Col></Row><Row><Col id=\"CD\">KV</Col><Col id=\"NM\">KV</Col><Col id=\"CDNM\">KV:KV</Col></Row><Row><Col id=\"CD\">OH</Col><Col id=\"NM\">OH</Col><Col id=\"CDNM\">OH:OH</Col></Row><Row><Col id=\"CD\">OP</Col><Col id=\"NM\">OP</Col><Col id=\"CDNM\">OP:OP</Col></Row><Row><Col id=\"CD\">OS</Col><Col id=\"NM\">OS</Col><Col id=\"CDNM\">OS:OS</Col></Row><Row><Col id=\"CD\">PT</Col><Col id=\"NM\">PT</Col><Col id=\"CDNM\">PT:PT</Col></Row><Row><Col id=\"CD\">RE</Col><Col id=\"NM\">RE</Col><Col id=\"CDNM\">reserve:RE</Col></Row><Row><Col id=\"CD\">RT</Col><Col id=\"NM\">RT</Col><Col id=\"CDNM\">RT:RT</Col></Row><Row><Col id=\"CD\">RV</Col><Col id=\"NM\">RV</Col><Col id=\"CDNM\">Reserve:RV</Col></Row><Row><Col id=\"CD\">RW</Col><Col id=\"NM\">RW</Col><Col id=\"CDNM\">RW:RW</Col></Row><Row><Col id=\"CD\">SH</Col><Col id=\"NM\">SH</Col><Col id=\"CDNM\">신발:SH</Col></Row><Row><Col id=\"CD\">SJ</Col><Col id=\"NM\">SJ</Col><Col id=\"CDNM\">SJ:SJ</Col></Row><Row><Col id=\"CD\">SK</Col><Col id=\"NM\">SK</Col><Col id=\"CDNM\">SK:SK</Col></Row><Row><Col id=\"CD\">SO</Col><Col id=\"NM\">SO</Col><Col id=\"CDNM\">SOCKS:SO</Col></Row><Row><Col id=\"CD\">SP</Col><Col id=\"NM\">SP</Col><Col id=\"CDNM\">SP:SP</Col></Row><Row><Col id=\"CD\">ST</Col><Col id=\"NM\">ST</Col><Col id=\"CDNM\">ST:ST</Col></Row><Row><Col id=\"CD\">SV</Col><Col id=\"NM\">SV</Col><Col id=\"CDNM\">SUNVISOR:SV</Col></Row><Row><Col id=\"CD\">SW</Col><Col id=\"NM\">SW</Col><Col id=\"CDNM\">SW:SW</Col></Row><Row><Col id=\"CD\">TB</Col><Col id=\"NM\">TB</Col><Col id=\"CDNM\">트롤리백:TB</Col></Row><Row><Col id=\"CD\">TL</Col><Col id=\"NM\">TL</Col><Col id=\"CDNM\">TL:TL</Col></Row><Row><Col id=\"CD\">TS</Col><Col id=\"NM\">TS</Col><Col id=\"CDNM\">TS:TS</Col></Row><Row><Col id=\"CD\">WM</Col><Col id=\"NM\">WM</Col><Col id=\"CDNM\">Warmer:WM</Col></Row><Row><Col id=\"CD\">WS</Col><Col id=\"NM\">WS</Col><Col id=\"CDNM\">Woven Shirts:WS</Col></Row><Row><Col id=\"CD\">WV</Col><Col id=\"NM\">WV</Col><Col id=\"CDNM\">WV:WV</Col></Row><Row><Col id=\"CD\">ZY</Col><Col id=\"NM\">ZY</Col><Col id=\"CDNM\">CS팀AS:ZY</Col></Row><Row><Col id=\"CD\">ZZ</Col><Col id=\"NM\">ZZ</Col><Col id=\"CDNM\">생산부AS:ZZ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClassCd00", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row type=\"insert\"><Col id=\"CDNM\">전체</Col></Row><Row><Col id=\"CD\">1</Col><Col id=\"NM\">의류</Col><Col id=\"CDNM\">의류:1</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"NM\">용품</Col><Col id=\"CDNM\">용품:2</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"NM\">신발</Col><Col id=\"CDNM\">신발:3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("sta_POP_BG_01");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_00_00_00_01","834.00","103","80","60",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            obj.set_text("60");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label17_00_00_00","16","16",null,"26","16",null,null,null,null,null,this);
            obj.set_cssclass("sta_WFDA_Data");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new comGrdBasic("grdMain","16.00","163",null,null,"16","58",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMainView");
            obj.set_scrollpixel("all");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_autofittype("none");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_sGrdFullPath("");
            obj.set_bIsValidSort("false");
            obj.set_iSortStep("-1");
            obj.set_iLastCell("-1");
            obj.set_iLastHeadCol("-1");
            obj.set_sLastText("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"53\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"매출공급구분&#13;&#10;(1:매출, 2:공급)\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"1\" text=\"판매종류&#13;&#10;(1:리테일, 2:홀세일)\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"2\" text=\"영업구분&#13;&#10;(1:OffLine, 2:OnLine)\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"상품년도&#13;&#10;(Q:2025, R:2026, ...)\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" text=\"상품시즌&#13;&#10;(1:S/S, 3:F/W)\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"5\" text=\"CLASS&#13;&#10;(1:의류, 2:용품, 3:신발)\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" text=\"ITEM&#13;&#10;ex)BR\" displaytype=\"normal\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:GUBUN\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RTL_WHL_CD\" editdisplay=\"edit\" combodisplay=\"edit\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SALS_CLS_CD\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:GOODS_YY\" editdisplay=\"edit\" combodisplay=\"edit\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SEASN_CD\" editdisplay=\"edit\" combodisplay=\"edit\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:CLASS_CD\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ITEM_CD\" displaytype=\"normal\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","16.00","52",null,"51","16",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label17_00_00_00_00","0","25",null,"26","0",null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WFDA_Data");
            obj.set_taborder("1");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label17_00_00_00","0.00","0",null,"26","0",null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WFDA_Data");
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_WFSA_LabelP00","876.00","0","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("시뮬차수");
            obj.set_wordWrap("none");
            obj.set_cssclass("sta_WFDA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSIMUL_ORD","988.00","3","178","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPLAN_YY","112.00","3","178","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPLAN_NM","404.00","3","178","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPLAN_ORDR","696.00","3","178","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_WFSA_LabelP01","876.00","25","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("상품시즌");
            obj.set_wordWrap("none");
            obj.set_cssclass("sta_WFDA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSEASN_CD","988.00","28","178","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRTL_WHL_CD","112.00","28","178","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSALS_CLS_CD","404.00","28","178","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGOODS_YY","696.00","28","178","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSave","50.12489592006661%",null,"50","26",null,"16",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_PopUp_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"49","26","btnSave:4","16",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_PopUp_Close");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new comGrdBasic("grdExcel","18.00","580",null,null,"298","-160",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_scrollbartype("hoizental");
            obj.set_scrollpixel("all");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellmovingtype("col");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_visible("false");
            obj.set_sGrdFullPath("");
            obj.set_bIsValidSort("false");
            obj.set_iSortStep("-1");
            obj.set_iLastCell("-1");
            obj.set_iLastHeadCol("-1");
            obj.set_sLastText("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"81\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell cssclass=\"grd_head_P\" text=\"매출공급구분\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"1\" cssclass=\"grd_head_P\" text=\"판매종류\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"2\" cssclass=\"grd_head_P\" text=\"영업구분\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" cssclass=\"grd_head_P\" text=\"상품년도\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" cssclass=\"grd_head_P\" text=\"상품시즌\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"5\" cssclass=\"grd_head_P\" text=\"CLASS_CD\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" cssclass=\"grd_head_P\" text=\"ITEM_CD\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\" text=\"201710\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"21\" text=\"201711\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"22\" text=\"201712\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"23\" text=\"201801\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"24\" text=\"201802\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"25\" text=\"201803\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"26\" text=\"201804\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"27\" text=\"201805\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"28\" text=\"201806\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"29\" text=\"201807\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"30\" text=\"201808\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"31\" text=\"201809\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"32\" text=\"201810\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"33\" text=\"201811\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"34\" text=\"201812\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"35\" text=\"201901\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"36\" text=\"201902\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"37\" text=\"201903\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"38\" text=\"201904\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"39\" text=\"201905\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"40\" text=\"201906\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"41\" text=\"201907\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"42\" text=\"201908\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"43\" text=\"201909\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"44\" text=\"201910\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"45\" text=\"201911\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"46\" text=\"201912\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"47\" text=\"202001\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"48\" text=\"202002\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"49\" text=\"202003\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"50\" text=\"202004\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"51\" text=\"202005\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"52\" text=\"202006\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" text=\"1: 매출, 2: 공급\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"(1:리테일,2:홀세일)\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"(1:offline,2:online)\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"ex) 8\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" text=\"ex) 1\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" text=\"(1:의류, 2:용품, 3:신발)\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"6\" text=\"ex) BR\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"7\" text=\"ex) 28000\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"8\" colspan=\"19\" text=\"*매출계획년도 : 상품년도 당년 1월 ~ 익년 6월 내로 입력 / 공급계획년도 : &apos;사업계획 쿼터기간 관리&apos; 메뉴에서 계획 기간 확인 후 입력해주세요.\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"27\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"28\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"29\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"30\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"31\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"32\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"33\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"34\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"35\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"36\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"37\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"38\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"39\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"40\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"41\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"42\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"43\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"44\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"45\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"46\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"47\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"48\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"49\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"50\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"51\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/><Cell row=\"1\" col=\"52\" taborder=\"\" displaytype=\"normal\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"5\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"7\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"8\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"9\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"10\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"11\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"12\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"13\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"14\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"15\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"16\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"17\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"18\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"19\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"20\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"21\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"22\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"23\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"24\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"25\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"26\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"27\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"28\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"29\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"30\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"31\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"32\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"33\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"34\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"35\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"36\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"37\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"38\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"39\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"40\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"41\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"42\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"43\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"44\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"45\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"46\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"47\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"48\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"49\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"50\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"51\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"52\" displaytype=\"normal\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboClassCd","1064.00","19","118","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsClassCd");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_type("filter");
            obj.set_displaynulltext("전체");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFSA_LabelP04","952.00","16","110","26",null,null,null,null,null,null,this);
            obj.set_text("저장 클래스");
            obj.set_wordWrap("none");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGoodsYy","596.00","19","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("dsGP011");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_type("filter");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFSA_LabelP00","484.00","16","110","26",null,null,null,null,null,null,this);
            obj.set_text("상품년도");
            obj.set_wordWrap("none");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSalsClsCd","362.00","19","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("dsBP011");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_type("filter");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFSA_LabelP01","250.00","16","110","26",null,null,null,null,null,null,this);
            obj.set_text("영업구분");
            obj.set_wordWrap("none");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRtlWhlCd","128.00","19","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("dsSE032");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_type("filter");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSeasnCd","830.00","19","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("dsGP008");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_type("filter");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFSA_LabelP03","718.00","16","110","26",null,null,null,null,null,null,this);
            obj.set_text("상품시즌");
            obj.set_wordWrap("none");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_00_00_00_00_00","16.00","0",null,"16","16",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_00_00_00_00","0","0","16",null,null,"0",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_00_00_00",null,"0","16",null,"0","0",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_00_00_00_00_00_00","16.00",null,null,"16","16","0",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_00_00_00_00_00_01_00","500.00",null,"200","16",null,"42",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","18","115","460","38",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("사용자 그리드를 사용하는 경우 - 데이타를 처리하면 에러가 발생합니다.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",940,75,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BP2SP0020_P01.xfdl", function() {

        var pForm = nexacro.Form.prototype;

        pForm.gfn_getArgument = function(sName)
        {
        	const objFrame = this.getOwnerFrame();

        	let retVal ;
        	if(typeof objFrame[sName] !== "undefined"){
        		retVal = objFrame[sName];
        	}else{
        	}

        	return retVal;
        };


        pForm.gfn_searchArgAdd = function(sName, sValue, bClear) {


        };

        pForm.gfn_transaction = function(strMsg, strStyle, strTitle, callback, arrArg, sPopId) {

        };
        pForm.gfn_init = function(obj) {

        };



        //=================================================================================================
        //  ▷ Include Library JS File
        //=================================================================================================


        //=================================================================================================
        //  ▷ Form Variables Definition
        //=================================================================================================
        this.sPlanId;
        this.cleanChk = false;
        this.strSeparator = "	";
        this.arrEditColor;
        this.arrEditColor = new Array();

        var psPLAN_YY = this.gfn_getArgument("psPLAN_YY");
        var psSIMUL_ORD = this.gfn_getArgument("psSIMUL_ORD");
        var psPLAN_ORDR = this.gfn_getArgument("psPLAN_ORDR");
        var psPLAN_NM = this.gfn_getArgument("psPLAN_NM");
        var psRTL_WHL_CD = this.gfn_getArgument("psRTL_WHL_CD");
        var psSALS_CLS_CD = this.gfn_getArgument("psSALS_CLS_CD");
        var psGOODS_YY = this.gfn_getArgument("psGOODS_YY");
        var psSEASN_CD = this.gfn_getArgument("psSEASN_CD");
        var psBRAND_CD = this.gfn_getArgument("psBRAND_CD");
        var psPLAN_ID = this.gfn_getArgument("psPLAN_ID");
        //=================================================================================================
        //  ▶ Form Event
        //=================================================================================================
        this.fn_onload = function(obj, e)
        {
        	this.gfn_init(obj);
        //
        // 	// 공통코드 가져오기
        // 	this.gfn_setCommCode();

        	// 1. Common Grid 컴포넌트 초기화작업
        // 	this.grdMain.grd_onloadInitialization(false);



        	// 2. 초기값 set
        	this.divSearch.form.edtPLAN_YY.value = psPLAN_YY;
        	this.divSearch.form.edtSIMUL_ORD.value = psSIMUL_ORD;
        	this.divSearch.form.edtPLAN_ORDR.value = psPLAN_ORDR;
        	this.divSearch.form.edtPLAN_NM.value = psPLAN_NM;
        	this.divSearch.form.edtRTL_WHL_CD.value = psRTL_WHL_CD;
        	this.divSearch.form.edtSALS_CLS_CD.value = psSALS_CLS_CD;
        	this.divSearch.form.edtGOODS_YY.value = psGOODS_YY;
        	this.divSearch.form.edtSEASN_CD.value = psSEASN_CD;

        	this.fn_init();
        };

        //기초정보 조회
        this.fn_init = function()
        {
        	this.dsHead.clearData();
        	this.gfn_searchArgAdd("PLAN_YY"  , psPLAN_YY);
        	this.gfn_searchArgAdd("BRAND_CD" , psBRAND_CD);

        	var strSvcid 		= "selectHead";
        	var strController 	= "bp/sp/bp2sp0020/selectSupOrdrL.do";
        	var strInputDs 		= "";
        	var strOutputDs 	= "dsHead=ds_output dsItemCd=ds_output2 dsClassCd=ds_output3";
        	var strParam 		= "sqlid=ds_output:BP2SP0020.selectSupExcelHead;ds_output2:BP2SP0010.selectItemCd;ds_output3:BP2SP0010.selectClassCd;";
        	//this.gfn_transaction(this, strSvcid, strController, strInputDs, strOutputDs, strParam, strSvcid);
        	this.dsHead.assign(this.dsHead00);
        	this.dsItemCd.assign(this.dsItemCd00);
        	this.dsClassCd.assign(this.dsClassCd00);
        	this.fn_callback(strSvcid, 0, "");
        };
        //=================================================================================================
        //  ▶ Default Button Event
        //=================================================================================================
        //-------------------------------------------------------------------------------------------------
        // 기능 : 엑셀업로드 버튼
        //-------------------------------------------------------------------------------------------------
        this.btn_Excelup_onclick = function(obj,  e)
        {
         	this.dsMainView.clearData();


        		this.gfn_excelImport("dsMainView","", "", "A3", function(sImportId , evnt){

        		const bRet = this.gfn_confirm(evnt.importfilename + " 파일을 업로드 하시겠습니까?", "", "");
        		if(bRet!=true) return;

        		if(this.dsMainView.getRowCount() > 0 ){


        			this.dsSupExcelProperty.setColumn(12, "sFixCnt0", "CDNM");
        			this.dsSupExcelProperty.setColumn(12, "sFixCnt1", "CDNM");
        			this.dsSupExcelProperty.setColumn(12, "sFixCnt2", "CDNM");
        			this.dsSupExcelProperty.setColumn(12, "sFixCnt3", "CDNM");
        			this.dsSupExcelProperty.setColumn(12, "sFixCnt4", "CDNM");
        			this.dsSupExcelProperty.setColumn(12, "sFixCnt5", "CDNM");


        		} else {
        			this.gfn_alert("데이터가 없습니다. 확인후 다시 시도해주세요.", "Information", "information");
        			return;
        		}

        		this.bpfn_DynamicGridProperty2(this.grdMain, this.dsSupExcelProperty);
        		this.grdMain.setFormatRowProperty(0, "size" , 53); // 그리드 헤더 row size 설정

        	});

        };

        //-------------------------------------------------------------------------------------------------
        // 기능 : 저장 버튼
        //-------------------------------------------------------------------------------------------------
        this.fn_save = function(obj,  e)
        {
        	if(this.gfn_chkSave(this.grdMain)) return;	 // 저장 시 Grid필수 컬럼 체크

        	// VAL 체크
        	if (this.fn_saveCheck() == false){
        		return false;
        	}

        	// 데이터셋 null값 0으로 셋팅
        	this.dsMainView.enableevent = false;
        	for (var i=0; i<this.dsMainView.rowcount; i++) {
        		for (var ii=0; ii<this.dsMainView.colcount; ii++) {
        			if (this.gfn_isNull(this.dsMainView.getColumn(i, ii))) {
        				this.dsMainView.setColumn(i, ii, 0);
        			}
        		}
        	}
        	this.dsMainView.enableevent = true;
        	this.dsMainView.applyChange();
        	var errRow = 0;

        	this.bpfn_bpGetDynamicData2(this.dsMainView, this.dsSupExcelSave, this.dsSupExcelSett);

        	for(var i=0; i<this.dsSupExcelSave.rowcount; i++){
        		if(this.gfn_isNotNull(this.cboRtlWhlCd.value)){
        			this.dsSupExcelSave.setColumn(i, "RTL_WHL_CD",   this.cboRtlWhlCd.value);
        		}
        		if(this.gfn_isNotNull(this.cboSalsClsCd.value)){
        			this.dsSupExcelSave.setColumn(i, "SALS_CLS_CD",  this.cboSalsClsCd.value);
        		}
        		if(this.gfn_isNotNull(this.cboGoodsYy.value)){
        			this.dsSupExcelSave.setColumn(i, "GOODS_YY",   	this.cboGoodsYy.value);
        		}
        		if(this.gfn_isNotNull(this.cboSeasnCd.value)){
        			this.dsSupExcelSave.setColumn(i, "SEASN_CD",  	this.cboSeasnCd.value);
        		}
        	}

        	this.dsParam.clearData();
        	var nRow = this.dsParam.addRow();
        	this.dsParam.setColumn(nRow, "COMP_CD", nexacro.getApplication().gv_compCd);
        	this.dsParam.setColumn(nRow, "PLAN_ID", psPLAN_ID);
        	this.dsParam.setColumn(nRow, "BRAND_CD", psBRAND_CD);
        	this.dsParam.setColumn(nRow, "SIMUL_ORD", psSIMUL_ORD);
        	this.dsParam.setColumn(nRow, "CLASS_CD", this.cboClassCd.value);
        	this.dsParam.setColumn(nRow, "RTL_WHL_CD", this.cboRtlWhlCd.value);
        	this.dsParam.setColumn(nRow, "SALS_CLS_CD", this.cboSalsClsCd.value);
        	this.dsParam.setColumn(nRow, "GOODS_YY", this.cboGoodsYy.value);
        	this.dsParam.setColumn(nRow, "SEASN_CD", this.cboSeasnCd.value);


        	if (!this.gfn_confirm("엑셀 업로드 시 선택한 클래스의 매출/공급 계획 데이터만 초기화되며 저장됩니다. 저장 하시겠습니까?")){
        		return;
        	}

        	var strSvcid 		= "saveExcel";
        	var strController 	= "bp/sp/bp2sp0020/saveExcel.do";
        	var strInputDs 		= "ds_input1=dsSupExcelSave:A ds_input2=dsParam:A";
        	//ds1 : 내역 등록
        	//ds2 : sp 실행
        	var strOutputDs 	= "";
        	var strParam 		= "";
        	this.gfn_transaction(this, strSvcid, strController, strInputDs, strOutputDs, strParam, strSvcid);
        };

        //=================================================================================================
        //  ▶ Button Event
        //=================================================================================================
        //-------------------------------------------------------------------------------------------------
        // 기능 : 닫기 버튼
        //-------------------------------------------------------------------------------------------------
        this.btnX_onclick = function(obj,  e)
        {
        	this.gfn_closePopup();
        };

        //엑셀폼받기
        this.btnExcelDown_onclick = function(obj,  e)
        {
        	if (this.grdMain.rowcount < 65536) {

        		var sheetName = "사업계획입력샘플_"+ this.gfn_getToday();
        		var fileName  = "사업계획입력샘플_" + this.gfn_getToday() +  ".xlsx";
        		const sBody  = "A1";

        		this.grdMain.insertContentsRow('head',0); //헤더 1개 추가 (그리드 엑셀다운이란 Row위치 맞추기 위해, 20241223, 곽인한)
        		this.grdMain.deleteContentsRow('summary',0); // summary 삭제
        		this.gfn_excelExportGrid(this.grdMain, sheetName, sBody, fileName);

        		this.grdMain.deleteContentsRow('head',0); //헤더 1개 삭제 (그리드 엑셀다운이란 Row위치 맞추기 위해, 20241223, 곽인한)

        	} else {
        		this.gfn_alert("row가 너무 많습니다.");
        	}
        };
        //=================================================================================================
        //  ▶ Grid Event
        //=================================================================================================

        //=================================================================================================
        //  ▶ Dataset Event
        //=================================================================================================

        //=================================================================================================
        //  ▶ Component Event
        //=================================================================================================

        //=================================================================================================
        //  ☞ Local Function
        //=================================================================================================
        this.fn_DrawDataset = function(){

        	//ds에 컬럼 추가
        	var strPivot = "";
        	var strDate  = "";
        	this.dsMainView.enableevent = false;
        	this.dsMainView.addColumn("RTL_WHL_CD", "STRING" ,255);
        	this.dsMainView.addColumn("SALS_CLS_CD", "STRING" ,255);
        	this.dsMainView.addColumn("GOODS_YY", "STRING" ,255);
        	this.dsMainView.addColumn("SEASN_CD", "STRING" ,255);
        	this.dsMainView.addColumn("GUBUN", "STRING" ,255);
        	this.dsMainView.addColumn("CLASS_CD", "STRING" ,255);
        	this.dsMainView.addColumn("ITEM_CD", "STRING" ,255);
        	for(var i = 0 ;  i < this.dsHead.rowcount ; i ++ ){
        		strDate = this.dsHead.getColumn(i,"SUPP_PLN_YM");
        		strPivot += "'" + strDate + "' AS P" + i + strDate + ",";
        		this.dsMainView.addColumn("P" + i + strDate, "INT" ,255);
        	}
        	this.dsMainView.enableevent = true;


        	// 2. 그리드 셋팅
        	this.dsSupExcelProperty.setConstColumn("sRepCnt", this.dsHead.rowcount);
        	var sRepCnt = "sRepCnt";
        	var htext   = "";
        	var btext   = "";
        	var stext   = "";
        	for(var i = 0 ; i < this.dsHead.rowcount; i++ ) {
        		this.dsSupExcelProperty.addColumn("sRepCnt" + i ,"STRING" ,255);
        		htext = String(this.dsHead.getColumn(i, "SUPP_PLN_YM")).substr(0,4) + "." + String(this.dsHead.getColumn(i, "SUPP_PLN_YM")).substr(4);
        		btext = "P" + i + this.dsHead.getColumn(i, "SUPP_PLN_YM");
        		stext += btext + "+";
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='head'&&propName=='text'"),sRepCnt + i,htext);
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='head'&&propName=='size'"),sRepCnt + i,"120");
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='body'&&propName=='displaytype'"),sRepCnt + i,"number");
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='body'&&propName=='edittype'"),sRepCnt + i,"mask");
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='body'&&propName=='text'"),sRepCnt + i,"bind:"+btext);
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='body'&&propName=='textAlign'"),sRepCnt + i,"right");
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='body'&&propName=='padding'"),sRepCnt + i,"0 4 0 0");
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='summ'&&propName=='displaytype'"),sRepCnt + i,"number");
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='summ'&&propName=='text'"),sRepCnt + i,"expr:dataset.getSum('"+btext+"')");
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='summ'&&propName=='textAlign'"),sRepCnt + i,"right");
        		this.dsSupExcelProperty.setColumn(this.dsSupExcelProperty.findRowExpr("bandGubn=='summ'&&propName=='padding'"),sRepCnt + i,"0 4 0 0");
        	}
        	stext = stext.substring(0,stext.length-1);
        	// 그리드 셋팅.
        	this.bpfn_DynamicGridProperty2(this.grdMain, this.dsSupExcelProperty);

        	this.grdMain.setFormatRowProperty(0, "size" , 53); // 그리드 헤더 row size 설정

        	this.gfn_searchArgAdd("SUPP_PLN_YM", strPivot.substring(0,strPivot.length-1), false);
        	this.gfn_searchArgAdd("PLAN_ID"  , psPLAN_ID);
        	this.gfn_searchArgAdd("BRAND_CD"  , psBRAND_CD);
        	this.gfn_searchArgAdd("SIMUL_ORD"  , psSIMUL_ORD);
        	this.gfn_searchArgAdd("RTL_WHL_CD"  , psRTL_WHL_CD);
        	this.gfn_searchArgAdd("SALS_CLS_CD"  , psSALS_CLS_CD);
        	this.gfn_searchArgAdd("GOODS_YY"  , psGOODS_YY);
        	this.gfn_searchArgAdd("SEASN_CD"  , psSEASN_CD);

        	this.grdMain.setFormatColProperty(0, "band", "left");
        	this.grdMain.setFormatColProperty(1, "band", "left");
        	this.grdMain.setFormatColProperty(2, "band", "left");
        	this.grdMain.setFormatColProperty(3, "band", "left");
        	this.grdMain.setFormatColProperty(4, "band", "left");
        	this.grdMain.setFormatColProperty(5, "band", "left");
        	this.grdMain.setFormatColProperty(6, "band", "left");

        	var strSvcid 		= "selectInit";
        	var strController 	= "bp/sp/bp2sp0020/selectSupOrdrL.do";
        	var strInputDs 		= "";
        	var strOutputDs 	= "dsMainView=ds_output";
        	var strParam 		= "sqlid=ds_output:BP2SP0020.selectInit;";
        	this.gfn_transaction(this, strSvcid, strController, strInputDs, strOutputDs, strParam, strSvcid);
        };

        //-------------------------------------------------------------------------------------------------
        // 기능 : 저장전 검사
        //-------------------------------------------------------------------------------------------------
        this.fn_saveCheck = function(){
        	// 1. 저장 검사
        	if (this.dsMainView.rowcount <= 0){
        		this.gfn_alert("저장할 자료가 존재 하지 않습니다.");
        		return false;
        	}

        	// 2.그외 check : 콤보ds에 없는 값 체크
            for (var i=0 ; i <this.dsMainView.rowcount ;i++) {

        	    var flag = false;
        	    var alertmsg = '';

        	    for (var j=0 ; j < 7 ; j++){
        			if (this.grdMain.getCellText(i,j) == "오류데이터") {
        				flag = true;
        				alertmsg = '엑셀 샘플다운을 기준으로 데이터를 확인해주세요.'
        			}
        		}


        		if(this.cboClassCd.value != null){
        			if (this.dsMainView.getColumn(i, "CLASS_CD") != this.cboClassCd.value) {
        				flag = true;
        				alertmsg = '저장 클래스와 다른 클래스정보가 입력되어있습니다.'
        			}
        		}


        		if (flag) {
        			this.gfn_alert(alertmsg, "Warning", "warning");
        			this.dsMainView.rowposition = i;
        			return false;
        		}
            }


        	if (!this.bpfn_bpGridValidCheck(this.grdMain, this.dsChkGrid, false, true)) return false;
        };

        //=================================================================================================
        //  ♨ Callback Function (트랜잭션 처리 후 함수 ) (fn_callback 고정)
        //=================================================================================================
        this.fn_callback = function(svcid, errcd, errmsg)
        {
        	if (errcd > -1) {
        		switch(svcid) {
        			case "selectComCode":
        				break;
        			case "selectHead":
        				this.fn_DrawDataset();
        				this.dsClassCd.insertRow(0);
        				this.dsClassCd.setColumn(0,"CDNM","전체");

        			break;
        			case "saveExcel":
        				this.gfn_alert("정상적으로 저장 되었습니다.");
        				this.opener.fn_search();
        				this.gfn_closePopup();
        				break;
        			default:
        				break;
        		}
        	}else{
        		switch(svcid) {
        			case "saveExcel":
        					var nRow = errmsg.substring(errmsg.indexOf( "(행 : ") + 5 , errmsg.length-1);
        					this.gfn_trace("nRow ::: " + nRow ); // dsSupExcelSave 의 행 정보..
        					var findRow = this.dsMainView.findRowExpr(" GUBUN ==  '" + this.dsSupExcelSave.getColumn(nRow , "GUBUN") + "' && RTL_WHL_CD == '" + this.dsSupExcelSave.getColumn(nRow , "RTL_WHL_CD")+
        												"' && SALS_CLS_CD == '" + this.dsSupExcelSave.getColumn(nRow , "SALS_CLS_CD") + "' && GOODS_YY == '" +  this.dsSupExcelSave.getColumn(nRow , "GOODS_YY")+
        												"' && SEASN_CD == '" + this.dsSupExcelSave.getColumn(nRow , "SEASN_CD")+ "' && CLASS_CD == '" +  this.dsSupExcelSave.getColumn(nRow , "CLASS_CD")+
        												  "' && ITEM_CD == '" + this.dsSupExcelSave.getColumn(nRow , "ITEM_CD") + "' ");
        					this.gfn_trace("findRow :: " + findRow);
        					this.dsMainView.rowposition = findRow;
        				break;
        		}
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.gfn_closePopup();
        };


        this.btn00_onclick = function(obj,e)
        {

        	this.dsMainView.assign(this.dsMainView00);

        	if(this.dsMainView.getRowCount() > 0 ){

        		this.dsSupExcelProperty.setColumn(12, "sFixCnt0", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt1", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt2", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt3", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt4", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt5", "CDNM");

        	} else {
        		this.gfn_alert("데이터가 없습니다. 확인후 다시 시도해주세요.", "Information", "information");
        		return;
        	}

        	this.bpfn_DynamicGridProperty2(this.grdMain, this.dsSupExcelProperty);
        	this.grdMain.setFormatRowProperty(0, "size" , 53); // 그리드 헤더 row size 설정


        };


        pForm.gfn_dialog = function(objForm, strId, strURL, nTop, nLeft, nWidth, nHeight, bShowTitle, strAlign, objArgument, isModeless, isLayered, bAutoSize, strCallBack, sOverlaycolor, bResizable, bUseTitle)
        {
        	trace("Start gf_Dialog strURL == " + strURL);
        	let newChild = null;
        	let objParentFrame = objForm.getOwnerFrame();

        	if(this.gfn_isNull(nTop))    nTop    = -1;
        	if(this.gfn_isNull(nLeft))   nLeft   = -1;
        	if(this.gfn_isNull(nWidth))  nWidth  = -1;
        	if(this.gfn_isNull(nHeight)) nHeight = -1;
        	if(this.gfn_isNull(bResizable)) bResizable = false;

        	let nRight = 0;
        	let nBottom = 0;

        	let strScreenRes, nCenterX, nCenterY, nMarginX, nMoniterIndex;

        	const nCursorX = system.getCursorX();
        	const nCursorY = system.getCursorY();

        	if (strAlign == "Bottom Left") {
        		nLeft = nCursorX;
        		nBottom = nCursorY - 5;
        		nTop = nBottom - nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "Top Left") {
        		nTop = nCursorY - 5;
        		nLeft = nCursorX;
        		nBottom = nTop + nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "Bottom Right") {
        		nRight = nCursorX;
        		nBottom = nCursorY - 5;
        		nTop = nBottom - nHeight;
        		nLeft = nRight - nWidth;
        	} else if (strAlign == "Top Right") {
        		nTop = nCursorY - 5;
        		nRight = nCursorX;
        		nBottom = nTop + nHeight;
        		nLeft = nRight - nWidth;
        	} else if (strAlign == "-1") {
        		strScreenRes = system.getScreenResolution(1);
        		nCenterX = new nexacro.toNumber(strScreenRes.split(" ")[0]);
        		nCenterY = new nexacro.toNumber(strScreenRes.split(" ")[1]);

        		nMarginX = 0;
        		nMoniterIndex = system.getMonitorIndex(nCursorX, nCursorY);
        		if (nMoniterIndex == 2) {
        			let strMarginRes = system.getScreenResolution(2);
        			nMarginX = new nexacro.toNumber(strMarginRes.split(" ")[0]);
        		}
        		nTop = Math.round(nexacro.getApplication().mainframe.getOffsetHeight() / 2) - Math.round(nHeight / 2) + nexacro.getApplication().mainframe.getOffsetTop();
        		nLeft = Math.round(nexacro.getApplication().mainframe.getOffsetWidth() / 2) - Math.round(nWidth / 2) + nexacro.getApplication().mainframe.getOffsetLeft();
        		nBottom = nTop + nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "offset") {
        		nTop += nCursorY;
        		nLeft += nCursorX;
        		nBottom = nTop + nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "absolute") {
        		nBottom = nTop + nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "default") {
        		nBottom = nHeight;
        		nRight  = nWidth;

        	} else {
        		//nTop   += mainframe.position.top;
        		//nLeft  += mainframe.position.left;
        		nBottom = nTop + nHeight;
        		nRight  = nLeft + nWidth;
        	}

        	//autosize default : true
        	if(this.gfn_isNull(bAutoSize)) bAutoSize = true;
        	if(this.gfn_isNull(bUseTitle)) bUseTitle = true;

        	if(this.gfn_isNull(objArgument)) objArgument = {};

        	if (isModeless == true) {

        	} else {

        		newChild = new ChildFrame();
        		newChild.init(strId, nLeft, nTop, nRight, nBottom, "", "", strURL);
        		if (strAlign != "" && strAlign != "default") {
        			newChild.set_openalign("center middle");
        		}

        		//Runtime 전용 속성
        		if (isLayered) {
        			newChild.set_layered(true);
        		} else {
        			newChild.set_layered(false);
        		}

        		if (this.gfn_isNotNull(sOverlaycolor)) {
        			newChild.set_overlaycolor(sOverlaycolor);
        		}

        		newChild.autosize = bAutoSize;

        		newChild.set_showstatusbar(false);

        		newChild.set_showtitlebar(bUseTitle);
        		newChild.set_titlebarheight(30);
        		newChild.set_showcascadetitletext(false);

        		newChild.set_resizable(bResizable);
        		if(bResizable==true) newChild.set_border("1px solid #3c5161");

        		let rtn = newChild.showModal(strId, objParentFrame, objArgument, this, strCallBack);

        		return rtn;
        	}
        };

        /**
        * 기능 :  NULL 여부 체크
        * @param : sValue String
        * @return : boolean
        */
        pForm.gfn_isNull = function(sValue)
        {
            if (typeof sValue =="undefined") return true;
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;
            if (sValue == "null") return true;
            if (sValue == "NaN") return true;
            if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) ) return true;

            let v_ChkStr = new String(sValue);
            if (v_ChkStr == null) return true;
            if (v_ChkStr.toString().length == 0 ) return true;

            return false;
        };


        pForm.gfn_isNotNull = function(sValue)
        {
           return !this.gfn_isNull(sValue);
        };



        pForm.gfn_alert = function(strMsg, strStyle, strTitle, callback, arrArg, sPopId) {
        	this.alert(strMsg);
        };


        /**
         * @class 프레임 parameter 가져오기
         * @param {String} 	sName - parameter 키값
         * @return {Object|String|Number|Boolean} parameter 결과값
         */
        pForm.gfn_getArgument = function(sName)
        {
        	const objFrame = this.getOwnerFrame();

        	let retVal ;
        	if(typeof objFrame[sName] !== "undefined"){
        		retVal = objFrame[sName];
        	}else{
        		//trace('"요청한 gfn_getArgument('+sName+')" 값은 정의되지 않는 변수입니다.');
        	}

        	return retVal;
        };

        this.btn00_onclick = function(obj,e)
        {

        	this.dsMainView.assign(this.dsMainView00);

        	if(this.dsMainView.getRowCount() > 0 ){

        		this.dsSupExcelProperty.setColumn(12, "sFixCnt0", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt1", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt2", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt3", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt4", "CDNM");
        		this.dsSupExcelProperty.setColumn(12, "sFixCnt5", "CDNM");

        	} else {
        		this.gfn_alert("데이터가 없습니다. 확인후 다시 시도해주세요.", "Information", "information");
        		return;
        	}

        	this.bpfn_DynamicGridProperty2(this.grdMain, this.dsSupExcelProperty);
        	this.grdMain.setFormatRowProperty(0, "size" , 53); // 그리드 헤더 row size 설정


        };



        /******************************************************************************************
         * 기      능 : grid head/body property 적용
         * 함  수  명 : bpfn_DynamicGridProperty()
         * 인      자 : poGrid   - dynamic하게 생성할 grid name
                         poDsHeadText - grid head에 적용할 dataset
                         poDsHeadProperty - grid head/column에 적용할 property
         * 반      환 :
         *****************************************************************************************/
        // Pivot 데이터셋이 바인딩될 그리드를 그리는 함수.
        this.bpfn_DynamicGridProperty2 = function(poGrid, poDsHeadProperty, poMergeDs){
        	var sBandGubn, sPropName, nRow;
        	var sFixCnt   = parseInt(poDsHeadProperty.getConstColumn("sFixCnt"));
        	var sRepCnt   = parseInt(poDsHeadProperty.getConstColumn("sRepCnt"));
        	var sEndCnt   = parseInt(poDsHeadProperty.getConstColumn("sEndCnt"));
        	var sHRowCnt  = parseInt(poDsHeadProperty.getConstColumn("sHRowCnt"));
        	var nFRow;

        	poGrid.enableevent = false;
        	poGrid.enableredraw = false;
        	/* [X-LOG] formats은 로직에 맞게 수정하시기 바랍니다.*/ poGrid.formats = "<Formats><Format id='default'></Format></Formats>";

        	//0. Head 행추가
        	for (var i=0; i<sHRowCnt; i++){
        		poGrid.insertContentsRow("head", i, true);
        	}
        	//1. Header 컬럼 추가하기
        	for (var i=0; i<(sFixCnt+sRepCnt+sEndCnt)-1; i++){
        		poGrid.appendContentsCol(true); //true = head Band에서 주어진 Band의 마지막에 추가(Default)
        	}

        	// 그리드 헤더가 2줄일때 머지
        	if (!this.gfn_isNull(poMergeDs)) {
        		var nCell = -1;
        		for (var i=0; i<poMergeDs.getRowCount(); i++){
        			for (var j=0; j<poMergeDs.getColCount(); j++){
        				nCell ++;
        				poGrid.setCellProperty("Head", nCell, "text", poMergeDs.getColumn(i, j));
        			}
        		}
        		this.bpfn_DynamicGridMergeHeadText2(poGrid, poMergeDs);
        	}

        	//2. grid body insert
        	poGrid.insertContentsRow("body", 0, true);
        	//3. summ 영역이 존재 시 summ영역 추가
        	nFRow = poDsHeadProperty.findRow("bandGubn", "summ");
        	if (nFRow >=0) poGrid.appendContentsRow("summ");

        	//4. 속성 갯수(레코드)만큼 수행
        	for (var nRow=0; nRow<poDsHeadProperty.getRowCount(); nRow++){
        		sBandGubn = poDsHeadProperty.getColumn(nRow, "bandGubn");
        		sPropName = poDsHeadProperty.getColumn(nRow, "propName");

        		//5. 앞쪽 독립적인 컬럼에 대한 속성 정의
        		for (var nCell=0; nCell<sFixCnt; nCell++){
        			this.bpfn_DynamicGridSetProperty(poGrid, poDsHeadProperty, "sFixCnt" + nCell, "", nRow, nCell, sBandGubn, sPropName);
        		}

        		//6. 반복되는 컬럼에 대한 속성 정의
        		for (var nCell=0; nCell<sRepCnt; nCell++){
        			this.bpfn_DynamicGridSetProperty(poGrid, poDsHeadProperty, "sRepCnt" + nCell, "", nRow, nCell+sFixCnt, sBandGubn, sPropName);
        		}

        		//7. 반복되는 컬럼에 대한 속성 정의
        		for (var nCell=0; nCell<sEndCnt; nCell++){
        			this.bpfn_DynamicGridSetProperty(poGrid, poDsHeadProperty, "sEndCnt" + nCell, "", nRow, nCell+(sFixCnt+sRepCnt), sBandGubn, sPropName);
        		}
        	}
        //
        	// 첫번째행 select
        	var strGridDs = poGrid.binddataset;
        	poGrid.binddataset = '';
        	poGrid.binddataset = strGridDs;

        	poGrid.enableredraw = true;
        	poGrid.enableevent = true;
        };




        /******************************************************************************************
         * 기      능 : grid Merge
         * 함  수  명 : bpfn_DynamicGridMergeHeadText()
         * 인      자 : poGrid   - dynamic하게 생성할 grid name
                        poDsHeadText - grid head에 적용할 dataset
         * 반      환 :   무조건 2줄중 Row == 0  기준으로 Merge ( 유지보수 안함);;;;
         *****************************************************************************************/
        this.bpfn_DynamicGridMergeHeadText2 = function(poGrid, poDsHeadText){
        	var nSrtColArr = new Array();
        	var nEndColArr = new Array();
        	var nMerge = -1;
        	if(poDsHeadText.getRowCount() == 2 ) {
        		for (var j=0; j<poDsHeadText.getColCount(); j++){

        			if(poDsHeadText.getColumn(0, j) == poDsHeadText.getColumn(1, j) ){
        				nMerge++;
        				nSrtColArr[nMerge]= j;
        				nEndColArr[nMerge]= j;
        			}else {
        				if( j == poDsHeadText.getColCount()-1 ) {
        					if(poDsHeadText.getColumn(0, j) != poDsHeadText.getColumn(0, (j-1)) ){

        					}else {
        						nEndColArr[nMerge]= j;
        					}
        				} else if(poDsHeadText.getColumn(0, j) != poDsHeadText.getColumn(0, (j-1)) ){
        					nMerge++;
        					nSrtColArr[nMerge]= j;
        					nEndColArr[nMerge]= j;
        				} else {
        					nEndColArr[nMerge]= j;
        				}
        			}
        		}
        		for(var kk = nSrtColArr.length ; kk > -1 ; kk -- ) {
        			if(this.gfn_isNotNull(nSrtColArr[kk])) {
        				if(nSrtColArr[kk] == nEndColArr[kk]){
        					poGrid.mergeContentsCell('head',0,(nSrtColArr[kk]),1,(nEndColArr[kk]),(nSrtColArr[kk]),false);
        				} else {
        					poGrid.mergeContentsCell('head',0,(nSrtColArr[kk]),0,(nEndColArr[kk]),(nSrtColArr[kk]),false);
        				}
        			}
        		}
        	}
        };







        /******************************************************************************************
         * 기      능 : grid column에 property 적용
         * 함  수  명 : bpfn_DynamicGridSetProperty()
         * 인      자 :
         * 반      환 :
         *****************************************************************************************/
        this.bpfn_DynamicGridSetProperty = function(poGrid, poDsGridProperty, psGubunColId, pnColSeq, pnRow, pnCell, psBandGubn, psPropName){
        	var sProperty = poDsGridProperty.getColumn(pnRow, psGubunColId); //indiCol / repeatCol / lastCol + nIdx
        	var nColSeq   = pnColSeq;
        	sProperty = sProperty + '';
        	sProperty = sProperty.toString();

        	if (this.gfn_isNotNull(sProperty)){

        		if (psPropName == "band"){
        			poGrid.setFormatColProperty(pnCell,"band",sProperty);
        		} else
        		if (psPropName == "size"){
        			poGrid.setFormatColProperty(pnCell,"size",sProperty);
        		}else{
        			sProperty = nexacro.replaceAll(sProperty," + nColSeq ", nColSeq);
        			sProperty = nexacro.replaceAll(sProperty," + nColSeq", nColSeq);
        			sProperty = nexacro.replaceAll(sProperty,"+ nColSeq", nColSeq);
        			sProperty = nexacro.replaceAll(sProperty,"+nColSeq", nColSeq);
        			poGrid.setCellProperty(psBandGubn, pnCell, psPropName, sProperty);
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onload,this);
            this.btnSave.addEventHandler("onclick",this.fn_save,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.cboClassCd.addEventHandler("onitemchanged",this.divSearch_cboclasscd_onitemchanged,this);
            this.cboGoodsYy.addEventHandler("onitemchanged",this.divSearch_cboclasscd_onitemchanged,this);
            this.cboSalsClsCd.addEventHandler("onitemchanged",this.divSearch_cboclasscd_onitemchanged,this);
            this.cboRtlWhlCd.addEventHandler("onitemchanged",this.divSearch_cboclasscd_onitemchanged,this);
            this.cboSeasnCd.addEventHandler("onitemchanged",this.divSearch_cboclasscd_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("BP2SP0020_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
