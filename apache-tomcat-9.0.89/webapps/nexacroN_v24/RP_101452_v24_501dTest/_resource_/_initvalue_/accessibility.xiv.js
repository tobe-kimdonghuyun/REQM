if (nexacro_init)
{
    nexacro_init.Tabiv_Tab0 = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityaction("가상 커서 선택 시 상,하 방향키로 탭 페이지를 전환하고, 가상 커서 해제 시 좌우 방향키로 탭 페이지를 전환합니다. 엔터 키를 이용하여 페이지를 선택합니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_focusacceptable("true");
    };

    nexacro_init.Comboiv_Combo0 = function(obj)
    {
    	obj.set_accessibilityaction("알트 + 아래쪽 방향키로 리스트 아이템 목록을 활성화하여 가상커서를 해제한 후 컨트롤 + 상하 방향키로 아이템을 이동합니다. 엔터 키를 이용하여 아이템을 선택합니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("combobox");
    };

    nexacro_init.Comboiv_ComboE = function(obj)
    {
    	obj.set_cssclass("essential");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityaction("알트 + 아래쪽 방향키로 리스트 아이템 목록을 활성화하여 가상커서를 해제한 후 컨트롤 + 상하 방향키로 아이템을 이동합니다. 엔터 키를 이용하여 아이템을 선택합니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("combobox");
    };

    nexacro_init.Comboiv_Combo_Readonly = function(obj)
    {
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("combobox");
    };

    nexacro_init.Radioiv_Radio0 = function(obj)
    {
    	obj.set_accessibilityaction("상하 방향키로 다음, 이전으로 이동하며 선택하려면 스페이스 바를 누릅니다.");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("radio");
    };

    nexacro_init.Radioiv_RadioE = function(obj)
    {
    	obj.set_cssclass("essential");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityaction("상하 방향키로 다음, 이전으로 이동하며 선택하려면 스페이스 바를 누릅니다.");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("radio");
    };

    nexacro_init.Radioiv_Radio_Readonly = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("radio");
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilitydesclevel("all");
    };

    nexacro_init.WebBrowseriv_Web = function(obj)
    {
    	obj.set_accessibilityaction("");
    	obj.set_accessibilityleavemessage("");
    	obj.set_accessibilityrole("webbrowser");
    };

    nexacro_init.WebBrowseriv_WebBrowser0 = function(obj)
    {
    	obj.set_accessibilityrole("webbrowser");
    };

    nexacro_init.CheckBoxiv_CheckBox0 = function(obj)
    {
    	obj.set_accessibilityaction("선택하려면 스페이스 바를 누릅니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_accessibilityrole("checkbox");
    };

    nexacro_init.CheckBoxiv_CheckBoxE = function(obj)
    {
    	obj.set_cssclass("essential");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityaction("선택하려면 스페이스 바를 누릅니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_accessibilityrole("checkbox");
    };

    nexacro_init.CheckBoxiv_CheckBox_Readonly = function(obj)
    {
    	obj.set_accessibilityrole("checkbox");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilitydesclevel("all");
    };

    nexacro_init.TextAreaiv_TextArea0 = function(obj)
    {
    	obj.set_accessibilityaction("입력하려면 엔터 키를 누릅니다. 텍스트 입력 완료 후 ESC 키를 누른 후 다음으로 이동합니다.");
    	obj.set_accessibilityrole("textarea");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    };

    nexacro_init.TextAreaiv_TextAreaE = function(obj)
    {
    	obj.set_cssclass("essential");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityaction("입력하려면 엔터 키를 누릅니다. 텍스트 입력 완료 후 ESC 키를 누른 후 다음으로 이동합니다.");
    	obj.set_accessibilityrole("textarea");
    	obj.set_accessibilitydesclevel("all");
    };

    nexacro_init.TextAreaiv_TextArea_Readonly = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("textarea");
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilitydesclevel("all");
    };

    nexacro_init.Calendariv_Calendar0 = function(obj)
    {
    	obj.set_accessibilityaction("선택하려면 알트 +아래쪽 방향키를 누릅니다. 컨트롤 + 상하 방향키로 연도를 변경합니다. 컨트롤 + 좌우 방향키로 월을 변경합니다. 왼쪽 또는 오른쪽 방향키로 일을 변경합니다. 선택하려면 엔터키를 누릅니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_accessibilityrole("calendar");
    };

    nexacro_init.Calendariv_CalendarE = function(obj)
    {
    	obj.set_accessibilityaction("선택하려면 알트 +아래쪽 방향키를 누릅니다. 컨트롤 + 상하 방향키로 연도를 변경합니다. 컨트롤 + 좌우 방향키로 월을 변경합니다. 왼쪽 또는 오른쪽 방향키로 일을 변경합니다. 선택하려면 엔터키를 누릅니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityrole("calendar");
    	obj.set_cssclass("essential");
    };

    nexacro_init.Calendariv_Calendar_Monthonly = function(obj)
    {
    	obj.set_accessibilityaction("선택하려면 알트 +아래쪽 화살표 키를 누릅니다. 컨트롤 + 상하 방향키로 연도를 변경합니다. 컨트롤 + 좌우 방향 키로 월을 변경합니다. 왼쪽 또는 오른쪽 화살표 키로 일을 변경합니다. 선택하려면 엔터키를 누릅니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_accessibilityrole("calendar");
    };

    nexacro_init.Calendariv_Calendar_Readonly = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilityrole("calendar");
    };

    nexacro_init.Buttoniv_Button0 = function(obj)
    {
    	obj.set_accessibilityrole("button");
    };

    nexacro_init.Editiv_EditE = function(obj)
    {
    	obj.set_cssclass("essential");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityrole("edit");
    	obj.set_accessibilityenable("true");
    };

    nexacro_init.Editiv_Edit_Readonly = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("edit");
    	obj.set_accessibilitydescription("읽기전용");
    };

    nexacro_init.MaskEditiv_MaskEditE = function(obj)
    {
    	obj.set_cssclass("essential");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("edit");
    };

    nexacro_init.MaskEditiv_MaskEdit_Readonly = function(obj)
    {
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilityrole("edit");
    	obj.set_accessibilitydescription("읽기전용");
    };

    nexacro_init.Spiniv_SpinE = function(obj)
    {
    	obj.set_cssclass("essential");
    	obj.set_accessibilitydescription("필수입력");
    	obj.set_accessibilityaction("컨트롤 + 상하방향키로 값을 증가 또는 감소 시킵니다. ");
    	obj.set_accessibilityrole("spin");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    };

    nexacro_init.Spiniv_Spin0 = function(obj)
    {
    	obj.set_accessibilityaction("컨트롤 + 상하방향키로 값을 증가 또는 감소 시킵니다. ");
    	obj.set_accessibilityrole("spin");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    };

    nexacro_init.Spiniv_Spin_Readonly = function(obj)
    {
    	obj.set_accessibilityrole("spin");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilitydescription("읽기전용");
    };

    nexacro_init.Staticiv_StaticE = function(obj)
    {
    	obj.set_accessibilitydescription("필수");
    	obj.set_accessibilityrole("static");
    };

    nexacro_init.Staticiv_Static_Readonly = function(obj)
    {
    	obj.set_accessibilityrole("static");
    	obj.set_accessibilityenable("true");
    	obj.set_accessibilitydescription("읽기전용");
    };

    nexacro_init.ListBoxiv_ListBox0 = function(obj)
    {
    	obj.set_accessibilityaction("상하 방향키로 리스트 목록을 이동하고, 선택하려면 스페이스 바를 누릅니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_accessibilityrole("listbox");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    };

    nexacro_init.ListBoxiv_ListBoxE = function(obj)
    {
    	obj.set_accessibilityaction("상하 방향키로 리스트 목록을 이동하고, 선택하려면 스페이스 바를 누릅니다. 탭 키로 다음으로 이동합니다.");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityrole("listbox");
    	obj.set_accessibilitydescription("필수입력");
    };

    nexacro_init.ListBoxiv_ListBox_Readonly = function(obj)
    {
    	obj.set_accessibilityrole("listbox");
    	obj.set_accessibilitydescription("읽기전용");
    	obj.set_accessibilitydesclevel("all");
    	obj.set_accessibilityenable("true");
    };
}
