<%@page import="com.raonwiz.kphoto.RAONKHandler"%><%@page import="com.raonwiz.kphoto.event.*"%><%@page import="com.raonwiz.kphoto.util.EventVo"%><%
	//response.setHeader("Access-Control-Allow-Methods", "POST, GET");
	//response.setHeader("Access-Control-Allow-Headers", "content-type, RAONK-Encoded");
	//response.setHeader("Access-Control-Allow-Origin", "*");

	out.clear(); // Servlet으로 handler 작업을 하시려면 제거해주세요.

	request.setCharacterEncoding("UTF-8");
	
	RAONKHandler photo = new RAONKHandler();
	
	//디버깅
  	//2번째 파라미터의 Log Mode 설명
  	//- C : 일반로그 출력(System.out.println 로그 출력)
  	//- L : Log4j 모듈에 의한 로그 출력(/handler/JAVA 폴더의 log4j.properties 파일을 WEB-INF/classes에 적용)
  	//photo.settingVo.setDebugMode(true, "C");
  	//photo.settingVo.setDebugMode(true, "L");
	
  	///////////////////////////////
	//        이벤트를 등록 처리          //
	///////////////////////////////
	EventClass event = new EventClass();
  	
	event.addBeforeUploadEventListener(new BeforeUploadEventListener() {
		public void beforeUploadEvent(EventVo eventVo) {
			//파일을 업로드하기 전에 발생하는 이벤트 입니다.
	        //파일에 대한 저장 경로를 변경해야 하는 경우 사용합니다.
	        
	        //HttpServletRequest request = eventVo.getRequest(); //Request Value
	        //HttpServletResponse response = eventVo.getResponse(); //Response Value
	        //String strNewFileLocation = eventVo.getNewFileLocation(); //NewFileLocation Value
	        
	        //eventVo.setNewFileLocation(strNewFileLocation); //Change NewFileLocation Value

	        //eventVo.setCustomError("사용자오류");
	        //eventVo.setCustomError("999", "사용자오류"); //Error Code를 설정하실 때에는 900이상의 3자리로 설정
		}
  	});
	
	event.addAfterUploadEventListener(new AfterUploadEventListener() {
		public void afterUploadEvent(EventVo eventVo) {
			//파일을 업로드한 후에 발생하는 이벤트 입니다.
	        //업로드된 파일을 변경하는 경우 사용됩니다.(DRM처리)
	        //경로가 변경된 경우 Response되는 파일경로도 변경해야 합니다.(ResponseFileServerPath)
	        
	        //HttpServletRequest request = eventVo.getRequest(); //Request Value
	        //HttpServletResponse response = eventVo.getResponse(); //Response Value
	        //String strNewFileLocation = eventVo.getNewFileLocation(); //NewFileLocation Value
	        //String strResponseFileServerPath = eventVo.getResponseFileServerPath(); //ResponseFileServerPath Value

	        //eventVo.setResponseFileServerPath(strResponseFileServerPath); //Change ResponseFileServerPath Value
	        
	        //eventVo.setCustomError("사용자오류");
	        //eventVo.setCustomError("999", "사용자오류"); //Error Code를 설정하실 때에는 900이상의 3자리로 설정
		}
  	});
	
	///////////////////////////////
	//         서버모듈 설정              //
	///////////////////////////////
	
	//실제 업로드 할 기본경로 설정 (가상경로와 물리적 경로로 설정 가능)
  	//폴더명 제일 뒤에 .과 공백이 있다면 제거하시고 설정해 주세요.(운영체제에서 지원되지 않는 문자열입니다.)
  	
  	photo.settingVo.setVirtualPath("/raonkphotodata");
  
  	//해당 설정은 PhysicalPath를 K Photo 제품폴더\raonkphotodata\ 를 저장 Root 경로로 설정하는 내용입니다.
  	//String strPathChar = com.raonwiz.kphoto.util.StaticVariables.strPathChar;
  	//String strRootFolder = request.getServletPath();
	//strRootFolder = strRootFolder.substring(0,strRootFolder.lastIndexOf("/"));
	//strRootFolder = request.getSession().getServletContext().getRealPath(strRootFolder.substring(0,strRootFolder.lastIndexOf("/")));
	//photo.settingVo.setPhysicalPath(strRootFolder + strPathChar + "raonkphotodata");
	
	//환경설정파일 물리적 폴더 (서버 환경설정 파일을 사용할 경우)
  	//photo.settingVo.setConfigPhysicalPath("D:\\raonkphotodata\\config");

	//서버 구성정보중 Context Path가 있다며, 아래와 같이 설정해주세요. (SetVirtualPath 사용시만 필요)
	//photo.settingVo.setContextPath("Context Path");
		
	String result = photo.Process(request, response, application, event);
	  
	if(!result.equals("")) {
		out.print(result);
	}
  
	// Servlet으로 handler 작업을 하시려면 다음과 같이 작성해 주세요.
	// Servlet으로 구성하실 때 해당 Function의 Return Type은 void로 선언 후 return 되는 값은 반드시 없어야합니다.
	/*
	// 만일 getServletContext()가 undefined 이면 request.getSession().getServletContext(); 으로 하시면 됩니다.
	ServletContext application = getServletContext();
	
	String result = "";
	try {
		result = photo.Process(request, response, application, event);
	} catch (Exception e) {
		e.printStackTrace();
	}
		
	if(!result.equals("")) {
		response.setContentType("text/html");
		ServletOutputStream out = response.getOutputStream();
		out.print(result);
		out.close();
	}
	*/
%>