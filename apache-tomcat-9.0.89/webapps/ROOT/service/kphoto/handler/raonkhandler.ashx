<%@ WebHandler Language="C#" Class="raonkhandler" %>

using System.Web;
using Com.Raonwiz.KPhoto;
using Com.Raonwiz.KPhoto.Common;
using Com.Raonwiz.KPhoto.Util;

public class raonkhandler : IHttpHandler {

    RAONKHandler photo = null;
    
    public void ProcessRequest (HttpContext context) {
        
        photo = new RAONKHandler();

        char cPathChar = StaticVariables.cPathChar;
        string strRootFolder = context.Request.PhysicalPath;
        strRootFolder = strRootFolder.Substring(0, context.Request.PhysicalPath.LastIndexOf(cPathChar));
        strRootFolder = strRootFolder.Substring(0, strRootFolder.LastIndexOf(cPathChar));
        
        //디버깅
        //2번째 파라미터의 Log Mode 설명
        //- C : 일반로그 출력, 3번째 파라미터에 로그파일 경로 설정
        //- L : Log4Net 모듈에 의한 로그 출력, 3번째 파라미터에 Log4Net.xml파일의 경로 설정 (기본적으로 배포되는 /handler/.NET의 물리적 경로 설정)
        //photo.settingVo.SetDebugMode(true, "C", @"D:\log\");
        //photo.settingVo.SetDebugMode(true, "L", System.IO.Path.Combine(strRootFolder, "handler" + cPathChar + ".NET" + cPathChar));

        ///////////////////////////////
        //    이벤트를 등록 처리     //
        ///////////////////////////////
        //업로드 전 이벤트 처리기 등록
        //photo.BeforeUploadEvent += new BeforeUploadEventDelegate(BeforeUploadEvent);

        //업로드 후 이벤트 처리기 등록
        //photo.AfterUploadEvent += new AfterUploadEventDelegate(AfterUploadEvent);

        ///////////////////////////////
        //       서버모듈 설정       //
        ///////////////////////////////

        //실제 업로드 할 기본경로 설정 (가상경로와 물리적 경로로 설정 가능)
        //폴더명 제일 뒤에 .과 공백이 있다면 제거하시고 설정해 주세요.(운영체제에서 지원되지 않는 문자열입니다.)

        photo.settingVo.SetVirtualPath("/raonkphotodata");

        //해당 설정은 PhysicalPath를 K Photo 제품폴더\raonkphotodata\ 를 저장 Root 경로로 설정하는 내용입니다.
        //photo.settingVo.SetPhysicalPath(System.IO.Path.Combine(strRootFolder, "raonkphotodata"));

        //photo.settingVo.SetNetworkCredentials("ID", "Password", @"\\Domain");

        //환경설정파일 물리적 폴더 (서버 환경설정 파일을 사용할 경우)
        //photo.settingVo.SetConfigPhysicalPath(@"D:\raonkphotodata\config");
        
        // 실제 실행부
        photo.Process(context);

        // 메모리 해제
        photo.Dispose();
    }

    private void BeforeUploadEvent(EventVo eventVo)
    {
        //파일을 업로드하기 전에 발생하는 이벤트 입니다.
        //파일에 대한 저장 경로를 변경해야 하는 경우 사용합니다.

        //HttpContext context = eventVo.GetContext(); //Context Value
        //string strNewFileLocation = eventVo.GetNewFileLocation(); //NewFileLocation Value

        //eventVo.SetNewFileLocation(strNewFileLocation); //Change NewFileLocation Value

        //eventVo.SetCustomError("사용자오류");
        //eventVo.SetCustomError("999", "사용자오류"); /* Error Code를 설정하실 때에는 900이상의 3자리로 설정 */
    }

    private void AfterUploadEvent(EventVo eventVo)
    {
        //파일을 업로드한 후에 발생하는 이벤트 입니다.
        //업로드된 파일을 변경하는 경우 사용됩니다.(DRM처리)
        //경로가 변경된 경우 Response되는 파일경로도 변경해야 합니다.(ResponseFileServerPath)

        //HttpContext context = eventVo.GetContext(); //Context Value
        //string strNewFileLocation = eventVo.GetNewFileLocation(); //NewFileLocation Value
        //string strResponseFileServerPath = eventVo.GetResponseFileServerPath(); //ResponseFileServerPath Value

        //eventVo.SetResponseFileServerPath(strResponseFileServerPath); //Change ResponseFileServerPath Value

        //eventVo.SetCustomError("사용자오류");
        //eventVo.SetCustomError("999", "사용자오류"); /* Error Code를 설정하실 때에는 900이상의 3자리로 설정 */
    }
    
    public bool IsReusable {
        get {
            return false;
        }
    }

}