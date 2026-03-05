if (nexacro_init)
{
    nexacro_init.TabivTabAccessibilityOn = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityaction("페이지탭에서 좌/우 방향키로 이동하면 탭페이지가 전환됩니다.");
    	obj.set_focusacceptable("true");
    };

    nexacro_init.TabivTabAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityaction("");
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    };

    nexacro_init.ComboivCmbEssential = function(obj)
    {
    	obj.set_accessibilityaction("알트 + 아래쪽 방향키로 리스트 아이템 목록을 활성화하여 가상커서를 해제한 후 컨트롤 + 상하 방향키로 아이템을 이동합니다. 엔터 키를 이용하여 아이템을 선택합니다. 탭 키 로 다음으로 이동합니다.");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("combobox");
    	obj.set_accessibilitydescription("필수선택");
    };

    nexacro_init.ComboivCmbReadOnly = function(obj)
    {
    	obj.set_accessibilityaction("");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("combobox");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilitydescription("읽기전용");
    };

    nexacro_init.ComboivCmbAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    };

    nexacro_init.ComboivCmbNormal = function(obj)
    {
    	obj.set_accessibilityaction("알트 + 아래쪽 방향키로 리스트 아이템 목록을 활성화하여 가상커서를 해제한 후 컨트롤 + 상하 방향키로 아이템을 이동합니다. 엔터 키를 이용하여 아이템을 선택합니다. 탭 키 로 다음으로 이동합니다.");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("combobox");
    };

    nexacro_init.RadioivRdoEssential = function(obj)
    {
    	obj.set_accessibilityaction("상하 방향키로 다음, 이전 vlaue로 이동하며 선택하려면 스페이스 바를 누릅니다.");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("radio");
    	obj.set_accessibilitydescription("필수선택");
    	obj.set_itemaccessibilityenable("true");
    };

    nexacro_init.RadioivRdoReadOnly = function(obj)
    {
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("radio");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityaction("");
    	obj.set_itemaccessibilityenable("true");
    };

    nexacro_init.RadioivRdoAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityaction("");
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    };

    nexacro_init.RadioivRdoNormal = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("radio");
    	obj.set_itemaccessibilityenable("true");
    	obj.set_accessibilityaction("상하 방향키로 다음, 이전 vlaue로 이동하며 선택하려면 스페이스 바를 누릅니다.");
    };

    nexacro_init.WebBrowserivWebAccessibilityOn = function(obj)
    {
    	obj.set_accessibilityaction("스크린리더의 가상커서를 활성화하신 후 탭하여 이용하시기 바랍니다.");
    	obj.set_accessibilityleavemessage("스크린리더의 가상커서를 해제하신 후 이용하시기 바랍니다.");
    	obj.set_accessibilityrole("webbrowser");
    	obj.set_accessibilityenable("true");
    };

    nexacro_init.WebBrowserivWebAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityrole("none");
    	obj.set_accessibilityenable("false");
    };

    nexacro_init.EditivEdtEssential = function(obj)
    {
    	obj.set_accessibilityrole("edit");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilitydesclevel("all");
    };

    nexacro_init.EditivEdtReadOnly = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("edit");
    };

    nexacro_init.EditivEdtAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    };

    nexacro_init.EditivEdtNormal = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("edit");
    };

    nexacro_init.CheckBoxivChkEssential = function(obj)
    {
    	obj.set_accessibilityrole("checkbox");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("필수선택");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityaction("선택하려면 스페이스 바를 누릅니다. 탭 키로 다음으로 이동합 니다.");
    };

    nexacro_init.CheckBoxivChkReadOnly = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("자동선택");
    	obj.set_accessibilityrole("checkbox");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityaction("");
    };

    nexacro_init.CheckBoxivChkAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    	obj.set_accessibilityaction("");
    };

    nexacro_init.CheckBoxivChkNormal = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("checkbox");
    	obj.set_accessibilityaction("선택하려면 스페이스 바를 누릅니다. 탭 키로 다음으로 이동합 니다.");
    };

    nexacro_init.StaticivStcAccessibilityOn = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("");
    	obj.set_accessibilityrole("static");
    };

    nexacro_init.StaticivStcAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    	obj.set_accessibilitydescription("");
    };

    nexacro_init.StaticivStcEssential = function(obj)
    {
    	obj.set_accessibilitydescription("필수항목");
    	obj.set_accessibilityrole("static");
    	obj.set_accessibilityenable("true");
    };

    nexacro_init.DivivDivAccessibilityOn = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydesclevel("all");
    };

    nexacro_init.DivivDivAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    };

    nexacro_init.Diviv_DivVideoPlayerOn = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityaction("자동 재생 금지 재생을 하려면 플레이 버튼을 클릭하세요.");
    };

    nexacro_init.Diviv_DivVideoPlayerOff = function(obj)
    {
    	obj.set_accessibilitydesclevel("none");
    	obj.set_accessibilityenable("false");
    };

    nexacro_init.GridivGrdAccessibilityOn = function(obj)
    {
    	obj.set_accessibilityaction("그리드표");
    	obj.set_accessibilityenable("true");
    };

    nexacro_init.GridivGrdAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityaction("");
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    };

    nexacro_init.ImageViewerivTitleAccessibilityOn = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("static");
    };

    nexacro_init.ImageViewerivTitleAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    };

    nexacro_init.ImageViewerivImgAccessibilityOn = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("image");
    };

    nexacro_init.ButtonivBtnAccessibilityButton = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("button");
    	obj.set_accessibilitydesclevel("all");
    };

    nexacro_init.ButtonivBtnAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    };

    nexacro_init.ButtonivBtnAccessibilityLink = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("link");
    };

    nexacro_init.ButtonivBtnAccessibilityExpand = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("button");
    	obj.set_accessibilityaction("방향키로 답변을 확인 하세요");
    };

    nexacro_init.ButtonivBtnAccessibilityDown = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("button");
    	obj.set_accessibilityaction("폴다운");
    };

    nexacro_init.CalendarivCalAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    	obj.set_accessibilityaction("");
    };

    nexacro_init.CalendarivCalEssential = function(obj)
    {
    	obj.set_accessibilityrole("calendar");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("필수선택");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityaction("선택하려면 알트 +아래쪽 방향키를 누릅니다. 컨트롤 + 상하 방향키로 연도를 변경합니 다. 컨트롤 + 좌우 방향키로 월을 변경합니다. 왼쪽 또는 오른쪽 방향키로 일을 변경합니다. 선택하려면 엔터키를 누릅니다. 탭 키로 다음으로 이동합니다.");
    };

    nexacro_init.CalendarivCalReadOnly = function(obj)
    {
    	obj.set_accessibilityrole("calendar");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilityaction("");
    };

    nexacro_init.CalendarivCalNormal = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("calendar");
    	obj.set_accessibilityaction("선택하려면 알트 +아래쪽 방향키를 누릅니다. 컨트롤 + 상하 방향키로 연도를 변경합니 다. 컨트롤 + 좌우 방향키로 월을 변경합니다. 왼쪽 또는 오른쪽 방향키로 일을 변경합니다. 선택하려면 엔터키를 누릅니다. 탭 키로 다음으로 이동합니다.");
    };

    nexacro_init.TextAreaivTxtAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityrole("none");
    	obj.set_accessibilityenable("false");
    };

    nexacro_init.TextAreaivTxtEssential = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityrole("textarea");
    	obj.set_accessibilitydesclevel("all");
    };

    nexacro_init.TextAreaivTxtReadOnly = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilityrole("textarea");
    	obj.set_accessibilitydesclevel("all");
    };

    nexacro_init.TextAreaivTxtNormal = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("textarea");
    };

    nexacro_init.MaskEditivMskEssential = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("edit");
    };

    nexacro_init.MaskEditivMskReadOnly = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("edit");
    };

    nexacro_init.MaskEditivMskAccessibilityOff = function(obj)
    {
    	obj.set_accessibilityenable("false");
    	obj.set_accessibilityrole("none");
    };

    nexacro_init.MaskEditivMskNormal = function(obj)
    {
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("edit");
    };

    nexacro_init.ProgressBarivProgressBarOn = function(obj)
    {
    	obj.set_accessibilityrole("progressbar");
    	obj.set_accessibilityenable("true");
    };

    nexacro_init.ProgressBarivProgressBarOff = function(obj)
    {
    	obj.set_accessibilityrole("none");
    	obj.set_accessibilityenable("false");
    };
}
