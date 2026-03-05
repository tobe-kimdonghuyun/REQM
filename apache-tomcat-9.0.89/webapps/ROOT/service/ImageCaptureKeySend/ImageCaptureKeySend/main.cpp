#define _CRT_SECURE_NO_WARNINGS

#include<iostream>
#include<string>
#include<Windows.h>
#include<TlHelp32.h>

using namespace std;

DWORD find_by_process_name(const wchar_t* process_name)
{
	DWORD pid = 0;
	HANDLE hndl = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS | TH32CS_SNAPMODULE, 0);
	if (hndl)
	{
		PROCESSENTRY32 process = { sizeof(PROCESSENTRY32) };
		Process32First(hndl, &process);
		do
		{
			if (_wcsicmp(process.szExeFile, process_name) == 0)
			{
				pid = process.th32ProcessID;
				break;
			}
		} while (Process32Next(hndl, &process));
		CloseHandle(hndl);
	}
	return pid;
}

void clipBoardCopy(char* output)
{
	const size_t len = strlen(output) + 1;
	HGLOBAL hMem = GlobalAlloc(GMEM_MOVEABLE, len);
	memcpy(GlobalLock(hMem), output, len);
	GlobalUnlock(hMem);
	OpenClipboard(0);
	EmptyClipboard();
	SetClipboardData(CF_TEXT, hMem);
	CloseClipboard();
}

void Send_keyOption()
{
	Sleep(1500);
	INPUT input;
	ZeroMemory(&input, sizeof(input));
	input.type = INPUT_KEYBOARD;
	input.ki.time = 0;
	input.ki.wScan = 0;
	input.ki.dwExtraInfo = 0;

	Sleep(1000);
	input.ki.wVk = VK_F8;
	input.ki.dwFlags = 0;
	SendInput(1, &input, sizeof(input));
	input.ki.wVk = VK_F8;
	input.ki.dwFlags = KEYEVENTF_KEYUP;
	SendInput(1, &input, sizeof(input));

	Sleep(2000);
	//Ctrl-S
	input.ki.wVk = VK_CONTROL;
	input.ki.dwFlags = 0;
	SendInput(1, &input, sizeof(input));
	input.ki.wVk = 'S';
	input.ki.dwFlags = 0;
	SendInput(1, &input, sizeof(input));
	input.ki.wVk = VK_CONTROL;
	input.ki.dwFlags = KEYEVENTF_KEYUP;
	SendInput(1, &input, sizeof(input));
	input.ki.wVk = 'S';
	input.ki.dwFlags = KEYEVENTF_KEYUP;
	SendInput(1, &input, sizeof(input));

	Sleep(1000);
	//Ctrl-V
	input.ki.wVk = VK_CONTROL;
	input.ki.dwFlags = 0;
	SendInput(1, &input, sizeof(input));
	input.ki.wVk = 'V';
	input.ki.dwFlags = 0;
	SendInput(1, &input, sizeof(input));
	input.ki.wVk = VK_CONTROL;
	input.ki.dwFlags = KEYEVENTF_KEYUP;
	SendInput(1, &input, sizeof(input));
	input.ki.wVk = 'V';
	input.ki.dwFlags = KEYEVENTF_KEYUP;
	SendInput(1, &input, sizeof(input));

	input.ki.wVk = VK_RETURN; 
	input.ki.dwFlags = 0;
	SendInput(1, &input, sizeof(input));

	input.ki.wVk = VK_RETURN;
	input.ki.dwFlags = KEYEVENTF_KEYUP;
	SendInput(1, &input, sizeof(input));
	/*for (int i = 0; i < strlen(argv); i++)
	{
		printf("%x\n", argv[i]);

		input.ki.wVk = argv[i];
		input.ki.dwFlags = 0;
		SendInput(1, &input, sizeof(input));

		input.ki.wVk = argv[i];
		input.ki.dwFlags = KEYEVENTF_KEYUP;
		SendInput(1, &input, sizeof(input));
	}*/
}

int main(int argc, char** argv)
{
	FreeConsole();
	printf("%d\n", argc);
	if (argc >= 3)
	{
		cout << "hhh" << endl;
		return 0;
	}
	char* copy_argv = argv[1];
	char const* extend = ".jpg";
	strcat(copy_argv, extend);
	clipBoardCopy(copy_argv);

	/*string s = "notepad++.exe";
	ShellExecuteA(0, "open", "notepad++.exe", 0, 0, SW_SHOWNORMAL);*/
	Send_keyOption();
	
	return 0;
}