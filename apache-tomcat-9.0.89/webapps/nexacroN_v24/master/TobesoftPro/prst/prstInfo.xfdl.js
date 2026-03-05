(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prstInfo");
            this.set_titletext("개인정보 수집 및 이용 동의서");
            this.set_scrolltype("none");
            this.getSetter("uResetScroll").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,6526);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT01\" type=\"STRING\" size=\"10000\"/><Column id=\"TEXT02\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">policy</Col><Col id=\"TITLE\">이용약관</Col><Col id=\"TEXT01\">제 1 장 총칙&#10;&#10;제 1 조 (목적)&#10;1. 이 약관은 ㈜투비소프트(이하 “회사“라고 칭함)가 운영하는 TOBESOFT Pro 홈페이지 (www.pro.tobesoft.com) (이하 “홈페이지”라고 칭함)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라고 칭함)를 이용함에 있어 회사와 이용자의 권리, 의무, 절차 및 책임사항을 규정함을 목적으로 합니다.&#10;2. 이 약관은 본 사이트가 제공하는 서비스 중에서 개인정보가 필요한 때에 효력이 발생합니다. 회사는 회사의 사정 변경이나 영업상 중요한 사유가 발생하면 약관을 변경 할 수 있으며, 변경된 약관은 회사의 홈페이지에 변경에 관한 통지가 게시되는 순간부터 효력을 발생합니다.&#10;3. 본 약관에 정하는 범위 이외의 이용자와 회사의 권리, 의무 및 책임사항에 관해서는 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관련 법령의 규정에 따릅니다.&#10;&#10;제2조 (정의) &#10;1. &quot;홈페이지&quot;란 ㈜투비소프트가 서비스 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 서비스 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 홈페이지를 운영하는 사업자의 의미로도 사용합니다. &#10;2. &quot;이용자&quot;란 &quot;홈페이지&quot;에 접속하여 이 약관에 따라 &quot;홈페이지&quot;가 제공하는 서비스를 받는 사용자를 말합니다.&#10;&#10;제3조 (약관의 명시와 개정)&#10;1. “홈페이지”는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 홈페이지에 게시합니다.&#10;2. &quot;홈페이지&quot;는 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진 등에 관한 법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.&#10;3. &quot;홈페이지&quot;가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 홈페이지에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.&#10;4. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.&#10;&#10;제4조(서비스의 제공 및 변경)&#10;1. &quot;홈페이지&quot;는 다음과 같은 업무를 수행합니다.&#10;① 서비스 또는 용역에 대한 정보 제공&#10;② 기타 &quot;홈페이지&quot;가 정하는 업무&#10;&#10;제5조(서비스의 중단)&#10;1. &quot;홈페이지&quot;는 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.&#10;2. 제1항에 의한 서비스 중단의 경우에는 &quot;홈페이지&quot;는 제8조에 정한 방법으로 이용자에게 통지합니다.&#10;3. &quot;홈페이지&quot;는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상할 수 있습니다.&#10;단 &quot;홈페이지&quot;에 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.&#10;&#10;제6조(&quot;홈페이지&quot;의 의무)&#10;1. &quot;홈페이지는 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스 용역을 제공하는 데 최선을 다하여야 합니다.&#10;2. &quot;홈페이지&quot;는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안 시스템을 갖추어야 합니다.&#10;&#10;제7조(이용자의 의무)&#10;이용자는 다음 행위를 하여서는 안됩니다.&#10;1. 신청 또는 변경 시 허위내용의 등록&#10;2. 타인의 정보 도용&#10;3. &quot;홈페이지&quot;에 게시된 정보의 변경&#10;4. &quot;홈페이지&quot;가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시&#10;5. &quot;홈페이지&quot; 기타 제 3자의 저작권 등 지적재산권에 대한 침해&#10;6. &quot;홈페이지&quot; 기타 제 3자의 명예를 손상시키거나 업무를 방해하는 행위&#10;7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 미풍양속에 반하는 정보를 홈페이지에 공개 또는 게시하는 행위&#10;&#10;제8조(연결&quot;홈페이지&quot;과 피 연결&quot;홈페이지&quot; 간의 관계)&#10;1. 상위 &quot;홈페이지&quot;와 하위 &quot;홈페이지&quot;가 하이퍼링크(예: 하이퍼링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 &quot;홈페이지&quot;(웹사이트) 라고 하고 후자를 피 연결 &quot;홈페이지&quot;(웹사이트) 라고 합니다.&#10;2. 연결 &quot;홈페이지&quot;는 피 연결 &quot;홈페이지&quot;가 독자적으로 제공하는 서비스 용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을 지지 않는다는 뜻을 연결 &quot;홈페이지&quot;의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을 지지 않습니다.&#10;&#10;제9조(저작권의 귀속 및 이용제한)&#10;1. &quot;홈페이지&quot;가 작성한 저작물에 대한 저작권 기타 지적재산권은 &quot;홈페이지&quot;에 귀속합니다.&#10;2. 이용자는 &quot;홈페이지&quot;를 이용함으로써 얻은 정보를 &quot;홈페이지&quot;의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.&#10;3. “홈페이지&quot;은 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.&#10;4. 이용자는 &quot;홈페이지&quot;가 제공하는 각종 서비스 등을 이용하는 과정에서 &quot;홈페이지&quot;에 게시 또는 등록한 각종 저작물을 &quot;홈페이지&quot;가 무상으로 사용하는 것을 허락합니다.&#10;단, 이용자가 &quot;홈페이지&quot;에 대해 상기 사용권의 허락을 취소하는 통지를 한 경우에는 그러하지 아니합니다.&#10;&#10;제10조(분쟁해결)&#10;1. &quot;홈페이지&quot;는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자께 그 사유와 처리일정을 즉시 통보해 드립니다.&#10;2. &quot;홈페이지&quot;와 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.&#10;&#10;제11조(재판권 및 준거법)&#10;1. &quot;홈페이지&quot;와 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.&#10;2. &quot;홈페이지&quot;와 이용자간에 제기된 전자거래 소송에는 대한민국 법을 적용합니다.&#10;&#10;부칙 &#10;1. 본 약관은 2024년 1월 1일부터 적용됩니다.&#10;</Col></Row><Row><Col id=\"ID\">privacy</Col><Col id=\"TITLE\">개인정보처리방침</Col><Col id=\"TEXT01\">(주)투비소프트 (이하 &apos;회사&apos;는) 는 고객님의 개인정보를 중요시하며, &quot;정보통신망 이용촉진 및 정보보호&quot;에 관한 법률을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보처리방침을 개정하는 경우 웹사이트를 통하여 공지할 것입니다.&#10;&#10;본 방침은 : 2024년 1월 1일 부터 시행됩니다.&#10;&#10;1. 수집하는 개인정보의 항목 및 수집 방법 &#10;가. 수집하는 개인정보의 항목&#10;⦁ 수집 항목 : 회사명, 업종, 이름, 연락처, 이메일&#10;⦁ 개인정보 수집 방법 : 홈페이지 (체험하기/문의하기 작성)&#10;&#10;나. 개인정보 수집방법&#10;회사는 다음과 같은 방법으로 개인정보를 수집합니다.&#10;⦁ 홈페이지 내 체험하기/문의하기 작성&#10;&#10;2. 개인정보의 수집 및 이용목적&#10;회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.&#10;⦁ 체험하기 신청 시 - 체험 신청에 대한 답변 진행 및 발송, 체험 신청 고객과의 원활한 의사소통&#10;⦁ 문의하기 등록 시 - 정확한 문의 내용 파악 및 확인, 문의에 대한 답변 진행 및 발송, 문의 고객과의 원활한 의사소통&#10;⦁ 마케팅 및 광고에 활용 (선택 동의 시) - 이벤트 및 세미나 정보 안내 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 웹진 메일 발송&#10;&#10;3. 개인정보의 보유 및 이용기간&#10;정보제공일로부터 서비스를 제공하는 기간 동안에 한하여 이용자의 개인정보를 보유 및 이용하게 됩니다. 본인 정보 삭제를 요청하거나 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.&#10;&#10;4. 개인정보의 파기절차 및 방법&#10;회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.&#10;&#10;[파기절차]&#10;입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.&#10;&#10;[파기방법]&#10;⦁ 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.&#10;⦁ 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.&#10;&#10;5. 개인정보 제공&#10;회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.&#10;⦁ 이용자들이 사전에 동의한 경우&#10;⦁ 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우&#10;&#10;6. 이용자 및 법정대리인의 권리와 그 행사방법&#10;이용자는 언제든지 다음 각호의 개인정보 보호 관련 권리를 행사할 수 있습니다.&#10;① 개인정보 열람 요구&#10;② 오류 등이 있을 경우 정정 요구&#10;③ 삭제 요구&#10;④ 처리 정지 요구&#10;⦁ 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.&#10;⦁ 이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.&#10;⦁ 만 14세 미만 아동의 경우, 제1항에 따른 권리 행사는 이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우, 법정대리인은 이용자의 모든 권리를 가집니다.&#10;⦁ 이용자는 정보통신망법, 개인정보보호법 등 관계법령을 위반하여 회사가 처리하고 있는 이용자 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니됩니다.&#10;&#10;7. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항&#10;회사는 이용자의 정보를 수시로 저장하고 찾아내는 쿠키(cookie)를 운용합니다. 쿠키란 회사의 웹사이트를 운영하는 데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 하드디스크에 저장됩니다. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.&#10;&#10;[쿠키 설정 방법]&#10;⦁ 설정방법 예 (익스플로어를 사용하고 있는 경우)&#10;｢도구｣메뉴에서 ｢인터넷옵션｣을 선택합니다. ｢개인정보 탭｣을 클릭합니다.&#10;｢설정｣을 이용하여 본인에게 맞는 쿠키 허용 수준을 설정하시면 됩니다.&#10;⦁ 받은 쿠키를 보는 방법 (익스플로어를 사용하고 있는 경우)&#10;｢도구｣메뉴에서 ｢인터넷옵션｣을 선택합니다.&#10;｢일반｣탭을 클릭하여 ‘검색 기록’ 의 ｢설정｣으로 들어가서,&#10;｢파일보기｣를 통해 확인합니다.&#10;&#10;[쿠키 설정 거부 방법]&#10;쿠키 설정을 거부하는 방법으로는 이용자가 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.&#10;⦁ 설정거부 예 (익스플로어를 사용하고 있는 경우)&#10;｢도구｣메뉴에서 ｢인터넷옵션｣을 선택합니다. ｢개인정보 탭｣을 클릭합니다.&#10;｢설정｣을 이용하여 상위 레벨로 하여 “모든 쿠키차단”으로 설정하시면 됩니다.&#10;단, 이용자께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.&#10;&#10;8. 개인정보에 관한 민원서비스&#10;회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.&#10;</Col><Col id=\"TEXT02\">귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.&#10;&#10;기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.&#10;&#10;① 개인정보침해신고센터 (http://privacy.kisa.or.kr / 국번 없이 118)&#10;② 개인정보분쟁조정위원회 (http://www.kopico.go.kr / 1833-6972)&#10;③ 대검찰청 사이버수사과 (http://www.spo.go.kr / 국번 없이 1301)&#10;④ 경찰청 사이버안전국 (http://cyberbureau.police.go.kr / 국번 없이 182)&#10;&#10;9. 기타 개인정보 취급에 관한 방침&#10;① 개인정보보호를 위한 기술 및 관리적 대책&#10;회사는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.&#10;&#10;⦁ 이용자의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송 데이터를 암호화 하거나 파일 잠금기능(Lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.&#10;⦁ 회사는 백신프로그램을 이용하여 컴퓨터바이러스에 의한 피해를 방지 하기 위한 조치를 취하고 있습니다. 백신프로그램은 주기적으로 업데이트되며 갑작스런 바이러스가 출현할 경우 백신이 나오는 즉시 이를 제공함으로써 개인 정보가 침해되는 것을 방지하고 있습니다.&#10;⦁ 회사는 암호알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL)를 채택하고 있습니다.&#10;⦁ 해킹 등 외부침입에 대비하여 각 서버마다 침입차단시스템 및 취약점 분석 시스템 등을 이용하여 보안에 만전을 기하고 있습니다.&#10;⦁ 회사는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 관리적 대책을 강구하고 있습니다.&#10;⦁ 회사는 이용자의 개인정보에 대한 접근권한을 이용자를 직접 상대로 하여 마케팅 업무를 수행하는 자, 개인정보관리책임자 및 담당자 등 개인정보관리업무를 수행하는 자, 기타 업무상 개인정보의 취급이 불가피한 자로 제한하고 있습니다.&#10;⦁ 개인정보를 취급하는 직원을 대상으로 새로운 보안 기술 습득 및 개인정보 보호 의무 등에 관해 정기적인 사내 교육 및 외부 위탁교육을 실시하고 있습니다.&#10;⦁ 입사 시 전 직원의 보안서약서를 통하여 사람에 의한 정보유출을 사전에 방지하고 개인정보보호정책에 대한 이행사항 및 직원의 준수여부를 감사하기 위한 내부절차를 마련하고 있습니다. 개인정보 관련 취급자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에 대한 책임을 명확화하고 있습니다.&#10;⦁ 개인정보와 일반 데이터를 혼합하여 보관하지 않고 별도의 서버를 통해 분리하여 보관하고 있습니다.&#10;⦁ 전산실 및 자료 보관실 등을 특별 보호구역으로 설정하여 출입을 통제하고 있습니다.&#10;⦁ 회사는 이용자 개인의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다. &#10;⦁ 그 외 내부 관리자의 실수나 기술관리상의 사고로 인해 개인정보의 상실, 유출, 변조, 훼손이 유발될 경우 회사는 즉각 이용자께 사실을 알리고 적절한 대책과 보상을 강구할 것입니다.&#10;&#10;② 링크사이트 제공 방침&#10;회사는 이용자께 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트 및 자료에 대한 아무런 통제권이 없으므로 그로부터 제공받는 서비스나 자료의 유용성에 대해 책임질 수 없으며 보증할 수 없습니다. 회사가 포함하고 있는 링크를 클릭(Click)하여 타 사이트(Site)의 페이지로 옮겨갈 경우 해당 사이트의 개인정보보호정책은 회사와 무관하므로 새로 방문한 사이트의 정책을 검토해 보시기 바랍니다.&#10;&#10;③ 광고성 정보의 전송&#10;회사는 이용자의 명시적인 수신거부의사에 반하여 영리목적의 광고성 정보를 전송하지 않습니다. 회사는 이용자가 상품정보 안내, 뉴스레터 등 전자우편 전송에 대한 동의를 한 경우, 전자우편의 제목란 및 본문란에 다음 사항과 같이 이용자가 쉽게 알아 볼 수 있도록 조치합니다.&#10;&#10;[전자우편의 제목란]&#10;⦁ (광고)라는 문구를 제목란에 표시하지 않을 수 있으며 전자우편 본문란의 주요 내용을 표시합니다.&#10;[전자우편의 본문란]&#10;⦁ 이용자가 수신거부의 의사표시를 할 수 있는 전송자의 명칭, 전자우편주소 및 전화번호를 명시합니다.&#10;⦁ 이용자가 수신 거부의 의사를 쉽게 표시할 수 있는 방법을 명시합니다.&#10;&#10;다음과 같이 청소년에게 유해한 정보를 전송하는 경우 (성인광고) 문구를 표시합니다.&#10;&#10;⦁ 본문란에 다음 각 항목 1에 해당하는 것이 부호·문자·영상 또는 음향의 형태로 표현된 경우 (해당 전자우편의 본문란에는 직접 표현되어 있지 아니하더라도 수신자가 내용을 쉽게 확인할 수 있도록 기술적 조치가 되어 있는 경우를 포함 한다)에는 해당 전자우편의 제목란에 &quot;(성인광고)&quot; 문구를 표시합니다.&#10;- 청소년(만19세미만의 자를 말한다. 이하 같다)에게 성적인 욕구를 자극하는 선정적인 것이거나 음란한 것&#10;- 청소년에게 포악성이나 범죄의 충동을 일으킬 수 있는 것&#10;- 성폭력을 포함한 각종 형태의 폭력 행사와 약물의 남용을 자극하거나 미화 하는 것&#10;- 청소년보호법에 의하여 청소년 유해매체물로 결정·고시된 것&#10;⦁ 영리목적의 광고성 전자우편 본문란에서 위 각 항목에 해당하는 내용을 다룬 인터넷 홈페이지를 알리는 경우에는 해당 전자우편의 제목란에 (성인광고) 문구를 표시합니다. 팩스·휴대폰 문자전송 등 전자우편 이외의 문자 전송을 통해 영리목적의 광고성 정보를 전송하는 경우에는 전송내용 처음에 (광고) 문구를 표기하고 전송내용 중에 전송자의 연락처를 명시하도록 조치합니다.&#10;&#10;④ 방침 변경에 따른 공지 의무&#10;현 개인정보취급방침 내용 추가·삭제 및 수정이 있을 시에는 변경되는 개인정보보호정책을 시행하기 최소 10일전에 홈페이지를 통해 변경 이유 및 내용 등을 공지하도록 하겠습니다. 단, 개인정보의 제3자 제공, 수집·이용목적 변경, 보유기간 변경 등 중요한 사항이 변경되는 경우에는 이용자의 동의를 얻도록 하겠습니다.&#10;&#10;이 약관은 2024년 1월 1일부터 시행합니다.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"개인정보관리책임자\" type=\"STRING\" size=\"256\"/><Column id=\"개인정보관리담당자\" type=\"STRING\" size=\"256\"/><Column id=\"개인정보관리담당자2\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">이름</Col><Col id=\"개인정보관리담당자\">황진</Col><Col id=\"개인정보관리책임자\">김윤기</Col><Col id=\"개인정보관리담당자2\">박진영</Col><Col id=\"Column0\">(주)투비소프트 (이하 &apos;회사&apos;는) 는 고객님의 개인정보를 중요시하며, &quot;정보통신망 이용촉진 및 정보보호&quot;에 관한 법률을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보처리방침을 개정하는 경우 웹사이트를 통하여 공지할 것입니다.</Col></Row><Row><Col id=\"구분\">소속</Col><Col id=\"개인정보관리책임자\">컨설팅그룹</Col><Col id=\"개인정보관리담당자\">컨설팅팀</Col><Col id=\"개인정보관리담당자2\">UX팀</Col></Row><Row><Col id=\"구분\">직위</Col><Col id=\"개인정보관리책임자\">그룹장</Col><Col id=\"개인정보관리담당자\">팀장</Col><Col id=\"개인정보관리담당자2\">팀장</Col></Row><Row><Col id=\"구분\">전화</Col><Col id=\"개인정보관리책임자\">02-2140-7243</Col><Col id=\"개인정보관리담당자\">02-2140-7173</Col><Col id=\"개인정보관리담당자2\">02-2140-7132</Col></Row><Row><Col id=\"구분\">메일</Col><Col id=\"개인정보관리책임자\">kimyk@tobesoft.com</Col><Col id=\"개인정보관리담당자\">hj0024@tobesoft.com</Col><Col id=\"개인정보관리담당자2\">joy8888@tobesoft.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divWorkContents","0","0",null,"6526","0",null,null,null,null,null,this);
            obj.set_fittocontents("height");
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","6206",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("14");
            obj.set_tablecellarea("0/1");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("divInfo","0","0","100%","300",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_EnquiryBg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","160",null,"50","0",null,null,null,null,null,this.divWorkContents.form.divInfo.form);
            obj.set_taborder("0");
            obj.set_text("정보");
            obj.set_cssclass("sta_MF_TitleL");
            this.divWorkContents.form.divInfo.addChild(obj.name, obj);

            obj = new Div("divContents","0","236","750","40",null,null,null,"750",null,null,this.divWorkContents.form);
            obj.set_taborder("1");
            obj.set_formscrolltype("both");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("btnPri","103","0","125","39",null,null,null,null,null,null,this.divWorkContents.form.divContents.form);
            obj.set_taborder("1");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_WF_Info");
            this.divWorkContents.form.divContents.addChild(obj.name, obj);

            obj = new Button("btnPol","0","0","83","39",null,null,null,null,null,null,this.divWorkContents.form.divContents.form);
            obj.set_taborder("0");
            obj.set_text("이용약관");
            obj.set_cssclass("btn_WF_InfoS");
            this.divWorkContents.form.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","750","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("2");
            obj.set_text("이용약관");
            obj.set_cssclass("sta_WF_ItemTitle2L");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staText01","3300","1020","750","1970",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("3");
            obj.set_text("제 1 장 총칙\r\n\r\n제 1 조 (목적)\r\n1. 이 약관은 ㈜투비소프트(이하 “회사“라고 칭함)가 운영하는 TOBESOFT Pro 홈페이지 (www.pro.tobesoft.com) (이하 “홈페이지”라고 칭함)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라고 칭함)를 이용함에 있어 회사와 이용자의 권리, 의무, 절차 및 책임사항을 규정함을 목적으로 합니다.\r\n2. 이 약관은 이 약관은 본 사이트가 제공하는 서비스 중에서 개인정보가 필요한 때에 효력이 발생합니다. 회사는 회사의 사정 변경이나 영업상 중요한 사유가 발생하면 약관을 변경 할 수 있으며, 변경된 약관은 회사의 홈페이지에 변경에 관한 통지가 게시되는 순간부터 효력을 발생합니다.\r\n3. 본 약관에 정하는 범위 이외의 이용자와 회사의 권리, 의무 및 책임사항에 관해서는 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관련 법령의 규정에 따릅니다.\r\n\r\n제2조 (정의) \r\n1. \"홈페이지\"란 ㈜투비소프트가 서비스 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 서비스 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 홈페이지를 운영하는 사업자의 의미로도 사용합니다. \r\n2. \"이용자\"란 \"홈페이지\"에 접속하여 이 약관에 따라 \"홈페이지\"가 제공하는 서비스를 받는 사용자를 말합니다.\r\n\r\n제3조 (약관의 명시와 개정)\r\n1. “홈페이지”는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 홈페이지에 게시합니다.\r\n2. \"홈페이지\"는 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진 등에 관한 법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.\r\n3. \"홈페이지\"가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 홈페이지에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.\r\n4. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.\r\n\r\n제4조(서비스의 제공 및 변경)\r\n1. \"홈페이지\"는 다음과 같은 업무를 수행합니다.\r\n① 서비스 또는 용역에 대한 정보 제공\r\n② 기타 \"홈페이지\"가 정하는 업무\r\n\r\n제5조(서비스의 중단)\r\n1. \"홈페이지\"는 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.\r\n2. 제1항에 의한 서비스 중단의 경우에는 \"홈페이지\"는 제8조에 정한 방법으로 이용자에게 통지합니다.\r\n3. \"홈페이지\"는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상할 수 있습니다.\r\n단 \"홈페이지\"에 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.\r\n\r\n제6조(\"홈페이지\"의 의무)\r\n1. \"홈페이지는 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스 용역을 제공하는 데 최선을 다하여야 합니다.\r\n2. \"홈페이지\"는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안 시스템을 갖추어야 합니다.\r\n\r\n제7조(이용자의 의무)\r\n이용자는 다음 행위를 하여서는 안됩니다.\r\n1. 신청 또는 변경 시 허위내용의 등록\r\n2. 타인의 정보 도용\r\n3. \"홈페이지\"에 게시된 정보의 변경\r\n4. \"홈페이지\"가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시\r\n5. \"홈페이지\" 기타 제 3자의 저작권 등 지적재산권에 대한 침해\r\n6. \"홈페이지\" 기타 제 3자의 명예를 손상시키거나 업무를 방해하는 행위\r\n7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 미풍양속에 반하는 정보를 홈페이지에 공개 또는 게시하는 행위\r\n\r\n제8조(연결\"홈페이지\"과 피 연결\"홈페이지\" 간의 관계)\r\n1. 상위 \"홈페이지\"와 하위 \"홈페이지\"가 하이퍼링크(예: 하이퍼링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 \"홈페이지\"(웹사이트) 라고 하고 후자를 피 연결 \"홈페이지\"(웹사이트) 라고 합니다.\r\n2. 연결 \"홈페이지\"는 피 연결 \"홈페이지\"가 독자적으로 제공하는 서비스 용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을 지지 않는다는 뜻을 연결 \"홈페이지\"의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을 지지 않습니다.\r\n\r\n제9조(저작권의 귀속 및 이용제한)\r\n1. \"홈페이지\"가 작성한 저작물에 대한 저작권 기타 지적재산권은 \"홈페이지\"에 귀속합니다.\r\n2. 이용자는 \"홈페이지\"를 이용함으로써 얻은 정보를 \"홈페이지\"의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.\r\n3. “홈페이지\"은 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.\r\n4. 이용자는 \"홈페이지\"가 제공하는 각종 서비스 등을 이용하는 과정에서 \"홈페이지\"에 게시 또는 등록한 각종 저작물을 \"홈페이지\"가 무상으로 사용하는 것을 허락합니다.\r\n단, 이용자가 \"홈페이지\"에 대해 상기 사용권의 허락을 취소하는 통지를 한 경우에는 그러하지 아니합니다.\r\n\r\n제10조(분쟁해결)\r\n1. \"홈페이지\"는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자께 그 사유와 처리일정을 즉시 통보해 드립니다.\r\n2. \"홈페이지\"와 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.\r\n\r\n제11조(재판권 및 준거법)\r\n1. \"홈페이지\"와 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.\r\n2. \"홈페이지\"와 이용자간에 제기된 전자거래 소송에는 대한민국 법을 적용합니다.\r\n\r\n부칙 \r\n1. 본 약관은 2024년 1월 1일부터 적용됩니다.");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_POP_Text");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Policy","0","56","750","2032",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("4");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"staText01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staTitle02","895","900","750","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("5");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("sta_WF_ItemTitle2L");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            obj.set_visible("true");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staText02","895","965","750","2064",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("6");
            obj.set_text("(주)투비소프트 (이하 \'회사\'는) 는 고객님의 개인정보를 중요시하며, \"정보통신망 이용촉진 및 정보보호\"에 관한 법률을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보처리방침을 개정하는 경우 웹사이트를 통하여 공지할 것입니다.\r\n\r\n본 방침은 : 2023년 12월 11일 부터 시행됩니다.\r\n\r\n1. 수집하는 개인정보의 항목 및 수집 방법 \r\n가. 수집하는 개인정보의 항목\r\n⦁ 수집 항목 : 회사명, 업종, 이름, 연락처, 이메일\r\n⦁ 개인정보 수집 방법 : 홈페이지 (체험하기/문의하기 작성)\r\n\r\n나. 개인정보 수집방법\r\n회사는 다음과 같은 방법으로 개인정보를 수집합니다.\r\n⦁ 홈페이지 내 체험하기/문의하기 작성\r\n\r\n2. 개인정보의 수집 및 이용목적\r\n회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.\r\n⦁ 체험하기 신청 시 - 체험 신청에 대한 답변 진행 및 발송, 체험 신청 고객과의 원활한 의사소통\r\n⦁ 문의하기 등록 시 - 정확한 문의 내용 파악 및 확인, 문의에 대한 답변 진행 및 발송, 문의 고객과의 원활한 의사소통\r\n⦁ 마케팅 및 광고에 활용 (선택 동의 시) - 이벤트 및 세미나 정보 안내 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 웹진 메일 발송\r\n\r\n3. 개인정보의 보유 및 이용기간\r\n정보제공일로부터 서비스를 제공하는 기간 동안에 한하여 이용자의 개인정보를 보유 및 이용하게 됩니다. 본인 정보 삭제를 요청하거나 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.\r\n\r\n4. 개인정보의 파기절차 및 방법\r\n회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.\r\n\r\n[파기절차]\r\n입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.\r\n\r\n[파기방법]\r\n⦁ 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.\r\n⦁ 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.\r\n\r\n5. 개인정보 제공\r\n회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.\r\n⦁ 이용자들이 사전에 동의한 경우\r\n⦁ 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우\r\n\r\n6. 이용자 및 법정대리인의 권리와 그 행사방법\r\n이용자는 언제든지 다음 각호의 개인정보 보호 관련 권리를 행사할 수 있습니다.\r\n① 개인정보 열람 요구\r\n② 오류 등이 있을 경우 정정 요구\r\n③ 삭제 요구\r\n④ 처리 정지 요구\r\n⦁ 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.\r\n⦁ 이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.\r\n⦁ 만 14세 미만 아동의 경우, 제1항에 따른 권리 행사는 이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우, 법정대리인은 이용자의 모든 권리를 가집니다.\r\n⦁ 이용자는 정보통신망법, 개인정보보호법 등 관계법령을 위반하여 회사가 처리하고 있는 이용자 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니됩니다.\r\n\r\n7. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항\r\n회사는 이용자의 정보를 수시로 저장하고 찾아내는 쿠키(cookie)를 운용합니다. 쿠키란 회사의 웹사이트를 운영하는 데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 하드디스크에 저장됩니다. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.\r\n\r\n[쿠키 설정 방법]\r\n⦁ 설정방법 예 (익스플로어를 사용하고 있는 경우)\r\n｢도구｣메뉴에서 ｢인터넷옵션｣을 선택합니다. ｢개인정보 탭｣을 클릭합니다.\r\n｢설정｣을 이용하여 본인에게 맞는 쿠키 허용 수준을 설정하시면 됩니다.\r\n⦁ 받은 쿠키를 보는 방법 (익스플로어를 사용하고 있는 경우)\r\n｢도구｣메뉴에서 ｢인터넷옵션｣을 선택합니다.\r\n｢일반｣탭을 클릭하여 ‘검색 기록’ 의 ｢설정｣으로 들어가서,\r\n｢파일보기｣를 통해 확인합니다.\r\n\r\n[쿠키 설정 거부 방법]\r\n쿠키 설정을 거부하는 방법으로는 이용자가 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.\r\n⦁ 설정거부 예 (익스플로어를 사용하고 있는 경우)\r\n｢도구｣메뉴에서 ｢인터넷옵션｣을 선택합니다. ｢개인정보 탭｣을 클릭합니다.\r\n｢설정｣을 이용하여 상위 레벨로 하여 “모든 쿠키차단”으로 설정하시면 됩니다.\r\n단, 이용자께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.\r\n\r\n8. 개인정보에 관한 민원서비스\r\n회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.\r\n");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_POP_Text");
            obj.set_wordWrap("char");
            obj.set_visible("true");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Grid("grdInfo","1970","460","600","222",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsInfo");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_flexgrow("1");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"60\"/><Row size=\"60\"/><Row size=\"60\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"소속/직위\"/><Cell col=\"3\" text=\"전화\"/><Cell col=\"4\" text=\"메일\"/></Band><Band id=\"body\"><Cell text=\"개인정보&#13;&#10;관리책임자\" cssclass=\"grd_WF_Cell02\"/><Cell col=\"1\" text=\"김윤기\"/><Cell col=\"2\" text=\"컨설팅그룹/&#13;&#10;그룹장\"/><Cell col=\"3\" text=\"02-2140-7243\"/><Cell col=\"4\" text=\"kimyk@&#13;&#10;tobesoft.com\"/><Cell row=\"1\" rowspan=\"2\" text=\"개인정보&#13;&#10;관리담당자\" cssclass=\"grd_WF_Cell02\"/><Cell row=\"1\" col=\"1\" text=\"황진\"/><Cell row=\"1\" col=\"2\" text=\"컨설팅팀/&#13;&#10;팀장\"/><Cell row=\"1\" col=\"3\" text=\"02-2140-7173\"/><Cell row=\"1\" col=\"4\" text=\"hj0024@&#13;&#10;tobesoft.com\"/><Cell row=\"2\" col=\"1\" text=\"박진영\"/><Cell row=\"2\" col=\"2\" text=\"UX팀/&#13;&#10;팀장\"/><Cell row=\"2\" col=\"3\" text=\"02-2140-7132\"/><Cell row=\"2\" col=\"4\" text=\"joy8888@&#13;&#10;tobesoft.com\"/></Band></Format><Format id=\"Mobile\"><Columns><Column size=\"77\"/><Column size=\"53\"/><Column size=\"80\"/><Column size=\"94\"/><Column size=\"94\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"소속/직위\"/><Cell col=\"3\" text=\"전화\"/><Cell col=\"4\" text=\"메일\"/></Band><Band id=\"body\"><Cell text=\"개인정보&#13;&#10;관리책임자\" cssclass=\"grd_WF_Cell02_M\"/><Cell col=\"1\" text=\"김윤기\" cssclass=\"grd_WF_Cell_M\"/><Cell col=\"2\" text=\"컨설팅그룹/&#13;&#10;그룹장\" cssclass=\"grd_WF_Cell_M\"/><Cell col=\"3\" text=\"02-2140-7243\" cssclass=\"grd_WF_Cell_M\"/><Cell col=\"4\" text=\"kimyk@&#13;&#10;tobesoft.com\" cssclass=\"grd_WF_Cell_M\"/><Cell row=\"1\" rowspan=\"2\" text=\"개인정보&#13;&#10;관리담당자\" cssclass=\"grd_WF_Cell02_M\"/><Cell row=\"1\" col=\"1\" text=\"황진\" cssclass=\"grd_WF_Cell_M\"/><Cell row=\"1\" col=\"2\" text=\"컨설팅팀/&#13;&#10;팀장\" cssclass=\"grd_WF_Cell_M\"/><Cell row=\"1\" col=\"3\" text=\"02-2140-7173\" cssclass=\"grd_WF_Cell_M\"/><Cell row=\"1\" col=\"4\" text=\"hj0024@&#13;&#10;tobesoft.com\" cssclass=\"grd_WF_Cell_M\"/><Cell row=\"2\" col=\"1\" text=\"박진영\" cssclass=\"grd_WF_Cell_M\"/><Cell row=\"2\" col=\"2\" text=\"UX팀/&#13;&#10;팀장\" cssclass=\"grd_WF_Cell_M\"/><Cell row=\"2\" col=\"3\" text=\"02-2140-7132\" cssclass=\"grd_WF_Cell_M\"/><Cell row=\"2\" col=\"4\" text=\"joy8888@&#13;&#10;tobesoft.com\" cssclass=\"grd_WF_Cell_M\"/></Band></Format></Formats>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staText03","10","74","750","1752",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("8");
            obj.set_text("귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.\r\n\r\n기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.\r\n\r\n① 개인정보침해신고센터 (http://privacy.kisa.or.kr / 국번 없이 118)\r\n② 개인정보분쟁조정위원회 (http://www.kopico.go.kr / 1833-6972)\r\n③ 대검찰청 사이버수사과 (http://www.spo.go.kr / 국번 없이 1301)\r\n④ 경찰청 사이버안전국 (http://cyberbureau.police.go.kr / 국번 없이 182)\r\n\r\n9. 기타 개인정보 취급에 관한 방침\r\n① 개인정보보호를 위한 기술 및 관리적 대책\r\n회사는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.\r\n\r\n⦁ 이용자의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송 데이터를 암호화 하거나 파일 잠금기능(Lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.\r\n⦁ 회사는 백신프로그램을 이용하여 컴퓨터바이러스에 의한 피해를 방지 하기 위한 조치를 취하고 있습니다. 백신프로그램은 주기적으로 업데이트되며 갑작스런 바이러스가 출현할 경우 백신이 나오는 즉시 이를 제공함으로써 개인 정보가 침해되는 것을 방지하고 있습니다.\r\n⦁ 회사는 암호알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL)를 채택하고 있습니다.\r\n⦁ 해킹 등 외부침입에 대비하여 각 서버마다 침입차단시스템 및 취약점 분석 시스템 등을 이용하여 보안에 만전을 기하고 있습니다.\r\n⦁ 회사는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 관리적 대책을 강구하고 있습니다.\r\n⦁ 회사는 이용자의 개인정보에 대한 접근권한을 이용자를 직접 상대로 하여 마케팅 업무를 수행하는 자, 개인정보관리책임자 및 담당자 등 개인정보관리업무를 수행하는 자, 기타 업무상 개인정보의 취급이 불가피한 자로 제한하고 있습니다.\r\n⦁ 개인정보를 취급하는 직원을 대상으로 새로운 보안 기술 습득 및 개인정보 보호 의무 등에 관해 정기적인 사내 교육 및 외부 위탁교육을 실시하고 있습니다.\r\n⦁ 입사 시 전 직원의 보안서약서를 통하여 사람에 의한 정보유출을 사전에 방지하고 개인정보보호정책에 대한 이행사항 및 직원의 준수여부를 감사하기 위한 내부절차를 마련하고 있습니다. 개인정보 관련 취급자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에 대한 책임을 명확화하고 있습니다.\r\n⦁ 개인정보와 일반 데이터를 혼합하여 보관하지 않고 별도의 서버를 통해 분리하여 보관하고 있습니다.\r\n⦁ 전산실 및 자료 보관실 등을 특별 보호구역으로 설정하여 출입을 통제하고 있습니다.\r\n⦁ 회사는 이용자 개인의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다. \r\n⦁ 그 외 내부 관리자의 실수나 기술관리상의 사고로 인해 개인정보의 상실, 유출, 변조, 훼손이 유발될 경우 회사는 즉각 이용자께 사실을 알리고 적절한 대책과 보상을 강구할 것입니다.\r\n\r\n② 링크사이트 제공 방침\r\n회사는 이용자께 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트 및 자료에 대한 아무런 통제권이 없으므로 그로부터 제공받는 서비스나 자료의 유용성에 대해 책임질 수 없으며 보증할 수 없습니다. 회사가 포함하고 있는 링크를 클릭(Click)하여 타 사이트(Site)의 페이지로 옮겨갈 경우 해당 사이트의 개인정보보호정책은 회사와 무관하므로 새로 방문한 사이트의 정책을 검토해 보시기 바랍니다.\r\n\r\n③ 광고성 정보의 전송\r\n회사는 이용자의 명시적인 수신거부의사에 반하여 영리목적의 광고성 정보를 전송하지 않습니다. 회사는 이용자가 상품정보 안내, 뉴스레터 등 전자우편 전송에 대한 동의를 한 경우, 전자우편의 제목란 및 본문란에 다음 사항과 같이 이용자가 쉽게 알아 볼 수 있도록 조치합니다.\r\n\r\n[전자우편의 제목란]\r\n⦁ (광고)라는 문구를 제목란에 표시하지 않을 수 있으며 전자우편 본문란의 주요 내용을 표시합니다.\r\n[전자우편의 본문란]\r\n⦁ 이용자가 수신거부의 의사표시를 할 수 있는 전송자의 명칭, 전자우편주소 및 전화번호를 명시합니다.\r\n⦁ 이용자가 수신 거부의 의사를 쉽게 표시할 수 있는 방법을 명시합니다.\r\n\r\n다음과 같이 청소년에게 유해한 정보를 전송하는 경우 (성인광고) 문구를 표시합니다.\r\n\r\n⦁ 본문란에 다음 각 항목 1에 해당하는 것이 부호·문자·영상 또는 음향의 형태로 표현된 경우 (해당 전자우편의 본문란에는 직접 표현되어 있지 아니하더라도 수신자가 내용을 쉽게 확인할 수 있도록 기술적 조치가 되어 있는 경우를 포함 한다)에는 해당 전자우편의 제목란에 \"(성인광고)\" 문구를 표시합니다.\r\n- 청소년(만19세미만의 자를 말한다. 이하 같다)에게 성적인 욕구를 자극하는 선정적인 것이거나 음란한 것\r\n- 청소년에게 포악성이나 범죄의 충동을 일으킬 수 있는 것\r\n- 성폭력을 포함한 각종 형태의 폭력 행사와 약물의 남용을 자극하거나 미화 하는 것\r\n- 청소년보호법에 의하여 청소년 유해매체물로 결정·고시된 것\r\n⦁ 영리목적의 광고성 전자우편 본문란에서 위 각 항목에 해당하는 내용을 다룬 인터넷 홈페이지를 알리는 경우에는 해당 전자우편의 제목란에 (성인광고) 문구를 표시합니다. 팩스·휴대폰 문자전송 등 전자우편 이외의 문자 전송을 통해 영리목적의 광고성 정보를 전송하는 경우에는 전송내용 처음에 (광고) 문구를 표기하고 전송내용 중에 전송자의 연락처를 명시하도록 조치합니다.\r\n\r\n④ 방침 변경에 따른 공지 의무\r\n현 개인정보취급방침 내용 추가·삭제 및 수정이 있을 시에는 변경되는 개인정보보호정책을 시행하기 최소 10일전에 홈페이지를 통해 변경 이유 및 내용 등을 공지하도록 하겠습니다. 단, 개인정보의 제3자 제공, 수집·이용목적 변경, 보유기간 변경 등 중요한 사항이 변경되는 경우에는 이용자의 동의를 얻도록 하겠습니다.\r\n\r\n이 약관은 2024년 1월 1일부터 시행합니다.");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_POP_Text");
            obj.set_wordWrap("char");
            obj.set_visible("true");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Privacy","845","850","750","4134",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("9");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"staText02\"/><PanelItem id=\"PanelItem03\" componentid=\"grdInfo\"/><PanelItem id=\"PanelItem04\" componentid=\"staText03\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel03","50","140","750","6166",null,null,null,"750",null,null,this.divWorkContents.form);
            obj.set_taborder("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panel_Policy\"/><PanelItem id=\"PanelItem01\" componentid=\"panel_Privacy\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","750","6206",null,null,null,"750",null,null,this.divWorkContents.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("50");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"divContents\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","divInfo:0",null,"6206","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("12");
            obj.set_type("table");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_tabletemplate("1* / 5% 1* 5%");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staMargin","0","Panel01:0",null,"100","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_ItemTitle2L");
            obj.set_visible("true");
            obj.set_background("\\");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("divInfoM","0","0","100%","300",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_EnquiryBg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0",null,null,"-17","0",null,null,null,null,this.divWorkContents.form.divInfoM.form);
            obj.set_taborder("0");
            obj.set_stretch("none");
            obj.set_image("url(\'theme://images/img_WF_AppinExprnM.png\')");
            obj.set_imagealign("center middle");
            obj.set_text("");
            obj.set_visible("false");
            this.divWorkContents.form.divInfoM.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","160",null,"50","0",null,null,null,null,null,this.divWorkContents.form.divInfoM.form);
            obj.set_taborder("1");
            obj.set_text("정보");
            obj.set_cssclass("sta_MF_TitleL");
            this.divWorkContents.form.divInfoM.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWorkContents.form.divInfo.form
            obj = new Layout("default","",0,0,this.divWorkContents.form.divInfo.form,function(p){});
            this.divWorkContents.form.divInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.divContents.form
            obj = new Layout("default","",0,0,this.divWorkContents.form.divContents.form,function(p){});
            this.divWorkContents.form.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.divInfoM.form
            obj = new Layout("default","",0,0,this.divWorkContents.form.divInfoM.form,function(p){});
            this.divWorkContents.form.divInfoM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form
            obj = new Layout("default","",0,0,this.divWorkContents.form,function(p){});
            this.divWorkContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,6526,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prstInfo.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	prstPolicy.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/11/29
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/11/29			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvPolGubun = "POL"; // 이용약관
        this.fvPriGubun = "PRI"; // 개인정보처리방침
        this.fvMoHeight;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fnLoad();
        	this.gfnFormOnLoad(this);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnLoad = function(sType)
        {
        	var sGubun = sType;
        	if(this.gfnIsNull(sType)) {
        		sGubun = !this.objApp.gvInfoType ? this.fvPolGubun : this.objApp.gvInfoType ;
        	}

        	var sHistoryType = this.gfnGetArgument("menuType");
        	if(!this.gfnIsNull(sHistoryType) && this.gfnIsNull(sType)) sGubun = sHistoryType;

        	if(sGubun.toUpperCase() == this.fvPolGubun) {  // 이용약관
        		this.fnPolSetSize();
        	}
        	else { // 개인정보처리방침
        		this.fnPriSetSize();
        	}

        	this.fnSetImage();
        	this.divWorkContents.form.resetScroll();
        	this.gfnFormResetScroll(this);
        };

        // 이용약관 포지션 세팅
        this.fnPolSetSize = function ()
        {
        	var objDiv = this.divWorkContents;

        	this.fnSetContents(0);  // 내용 세팅
        	this.divWorkContents.form.panel_Privacy.set_height(0);

        	// divPrivacy hidden 처리
        	this.divWorkContents.set_fittocontents("none");
        	this.divWorkContents.form.panel_Policy.set_fittocontents("none");
        	this.divWorkContents.form.panel_Privacy.set_height(0);
        	this.divWorkContents.form.staTitle02.set_visible(false);
        	this.divWorkContents.form.staText02.set_visible(false);
        	this.divWorkContents.form.grdInfo.set_visible(false);
        	this.divWorkContents.form.staText03.set_visible(false);
        	this.divWorkContents.form.panel_Privacy.set_visible(false);

        	this.divWorkContents.form.divContents.form.btnPol.set_cssclass("btn_WF_InfoS");
        	this.divWorkContents.form.divContents.form.btnPri.set_cssclass("btn_WF_Info");

        	this.divWorkContents.form.panel_Policy.set_visible(true);
        	this.divWorkContents.form.panel_Policy.set_fittocontents("height");
        	this.divWorkContents.set_fittocontents("height");
        };

        // 개인정보 포지션 세팅
        this.fnPriSetSize = function ()
        {
         	var objDiv = this.divWorkContents.form;

        	this.fnSetContents(1); // 내용 세팅

        	// divPolicy hidden 처리
        	this.divWorkContents.set_fittocontents("none");
        	this.divWorkContents.form.panel_Privacy.set_fittocontents("none");
        	this.divWorkContents.form.panel_Policy.set_height(0);
        	this.divWorkContents.form.panel_Policy.set_visible(false);

        	this.divWorkContents.form.divContents.form.btnPol.set_cssclass("btn_WF_Info");
        	this.divWorkContents.form.divContents.form.btnPri.set_cssclass("btn_WF_InfoS");

        	this.divWorkContents.form.staTitle02.set_visible(true);
        	this.divWorkContents.form.staText02.set_visible(true);
        	this.divWorkContents.form.grdInfo.set_visible(true);
        	this.divWorkContents.form.staText03.set_visible(true);
        	this.divWorkContents.form.panel_Privacy.set_visible(true);
        	this.divWorkContents.form.panel_Privacy.set_fittocontents("height");
        	this.divWorkContents.set_fittocontents("height");
        };

        // 개인정보처리방침 그리드 formatId 변경
        this.fnSetGrdFormatId = function()
        {
        	var sGubun = !this.objApp.gvMenuGubun ? this.fvPolGubun : this.objApp.gvMenuGubun ;

        	if(sGubun == this.fvPolGubun) return;

        	var sFormatId = "default";

        	if(this.objApp.gvIsMobile != 1) {
        		this.divWorkContents.form.divPrivacy.form.grdInfo.set_formatid(sFormatId);
        	}
        };

        // 메인 배경 이미지 세팅
        this.fnSetImage = function()
        {
        	var sUrlPrefix = nexacro._project_url + "_resource_/_theme_/";
        	var objM = this.divWorkContents.form.divInfoM;
        	var objP = this.divWorkContents.form.divInfo;

        	var sStyle = objM._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_WF_AppinExprnM.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	sStyle = objP._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_WF_AppinExprn.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	this.fnResize();
        };

        // 배경 Resize
        this.fnResize = function(nX)
        {
        	if(this.gfnIsNull(nX)) nX = this.divWorkContents.getOffsetWidth();

        	var objM = this.divWorkContents.form.divInfoM;
        	var objP = this.divWorkContents.form.divInfo;

        	if(nX < this.objApp.gvMobileSize) {
        		objM.set_visible(true);
        		objP.set_visible(false);
        	} else {
        		objM.set_visible(false);
        		objP.set_visible(true);
        	}

        	if(!this.gfnIsNull(this.fvCurBtn)) {
        		this.fnBtnCss(this.fvCurBtn);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 이용약관, 개인정보처리 방침 버튼 onclick
        this.infoButton_onclick = function(obj,e)
        {
        	var sType = obj.id.replace(/^btn/, "");
        	this.fnLoad(sType);
        };

        // 이용약관 클릭 이벤트
        this.divContents_btnPolicy_onclick = function(obj,e)
        {
        	// work 영역 접근
        	var objDiv = this.divWorkContents.form;
        	var objParent = this.parent;

        	if(obj.id == "btnPrivacy")
        	{

        		this.objApp.gvMenuGubun = this.fvPriGubun;  // work 프레임내 변수 접근
        		this.fnPriSetSize();
        	}
        	else
        	{
        		this.objApp.gvMenuGubun = this.fvPolGubun;  // work 프레임내 변수 접근
        		objDiv.divContents.form.btnPolicy.set_cssclass("btn_WF_InfoS");
        		objDiv.divContents.form.btnPrivacy.set_cssclass("btn_WF_Info");

        		this.fnPolSetSize();
        	}
        	this.objApp.gvBase.form.fnFormOpen(obj, null, this.objApp.gvMenuGubun);
        };

        this.fnSetContents = function(index) {

        	switch(index)
        	{
        		case 0 : // 이용약관
        			this.divWorkContents.form.staText01.set_text(this.dsList.getColumn(index, "TEXT01"));
        			//this.divWorkContents.form.resetScroll();
        			break;
        		case 1 : // 개인정보처리
        			this.divWorkContents.form.staTitle02.set_text(this.dsList.getColumn(index, "TITLE"));
        			this.divWorkContents.form.staText02.set_text(this.dsList.getColumn(index, "TEXT01"));
        			this.divWorkContents.form.staText03.set_text(this.dsList.getColumn(index, "TEXT02"));
        			//this.divWorkContents.form.resetScroll();
        			break;
        		default : break;
        	}

        	this.divWorkContents.form.resetScroll();
        	this.gfnFormResetScroll(this);
        };


        this.divWorkContents_onsize = function(obj,e)
        {
        	var nX = obj.getOffsetWidth();
        	this.fnResize(nX);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.prstInfo_onsize,this);
            this.addEventHandler("onorientationchange",this.prstInfo_onorientationchange,this);
            this.addEventHandler("ontimer",this.prstInfo_ontimer,this);
            this.divWorkContents.addEventHandler("onsize",this.divWorkContents_onsize,this);
            this.divWorkContents.form.divInfo.form.sta00_00.addEventHandler("onclick",this.div00_sta00_00_onclick,this);
            this.divWorkContents.form.divContents.form.btnPri.addEventHandler("onclick",this.infoButton_onclick,this);
            this.divWorkContents.form.divContents.form.btnPol.addEventHandler("onclick",this.infoButton_onclick,this);
            this.divWorkContents.form.staMargin.addEventHandler("onclick",this.divWorkContents_divPrivacy_sta00_00_00_01_onclick,this);
            this.divWorkContents.form.divInfoM.form.sta00_00.addEventHandler("onclick",this.div00_sta00_00_onclick,this);
        };
        this.loadIncludeScript("prstInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
