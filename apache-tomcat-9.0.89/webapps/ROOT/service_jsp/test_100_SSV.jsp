<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.data.datatype.*" %>


<%
       String strCharset = "utf-8";

    /*********************************************************
     * request로 들어온 내용을 parsing하여
     * input variable list, input dataset list에 저장한다.
     * (MiPlatform 에서 보내온 데이터를 parsing한다.)
     *********************************************************/
    HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_SSV);
    platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();

    String strUserID   = inVariableList.getString("test");
    //String strUserName = inVariableList.getString("username");
     
    //DataSet ds = inDataSetList.get("input");   	
	
	//System.out.println(ds.saveXml());
	
    //VariableList로부터 값을 직접 참조
	String ag1 = inVariableList.getString("ag1");   //product = Nexacro
	String comp = inVariableList.getString("comp");   //product = Nexacro
	
	if (ag1 == null)
		ag1 = "1";
	
    /*********************************************************
     * response로 보낼 내용을 생성한다.
     * output variable list, output dataset list에 저장한다.
     * (MiPlatform 이 받을 수 있는 데이터 형태로 가공)
     *********************************************************/ 
     out.clear();
     out=pageContext.pushBody();    
     
    HttpPlatformResponse platformResponse = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_SSV, strCharset);   
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();
    
	if (comp.equals("true"))
	{
		platformResponse.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB); 
		System.out.println("platformResponse 압축");
	}

    //System.out.println("100초 대기 시작");
   //Thread.sleep(100);
    //System.out.println("100초 대기 끝");

	Cookie[] cookies = request.getCookies();
 
 
	//String cookieName = cookies[1].getName();
	//String cookieValue = cookies[1].getValue(); 
	
	int cc = 0;
	for(Cookie c: cookies)
	{
		cc++;
	}
	
	System.out.println("==========================================="+cc);
	
    try {
       
	   for(int i = 0; i < 100; i++)
	   {
			DataSet outDataSet0  = new DataSet("output"+i);        
			// Output Dataset 컬럼 정의
			outDataSet0.addConstantColumn("ConstColumn0", DataTypes.STRING, 30, "A"+i);
			outDataSet0.addConstantColumn("ConstColumn1", DataTypes.STRING, 255, "B"+i);
			outDataSet0.addColumn("Column0",   DataTypes.STRING, 255); 
			outDataSet0.addColumn("Column1",   DataTypes.STRING, 255); 
			outDataSet0.addColumn("Column2",   DataTypes.STRING, 255); 
			outDataSet0.addColumn("useclientlayout_SSV",   DataTypes.STRING, 255); 
			outDataSet0.newRow();
			outDataSetList.add(outDataSet0);
		   
	   }
	   
       DataSet outDataSet00  = new DataSet("output");        
       // Output Dataset 컬럼 정의
		outDataSet00.addConstantColumn("ConstColumn0", DataTypes.STRING, 30, "SSV");
		outDataSet00.addConstantColumn("ConstColumn1", DataTypes.STRING, 255, "BCD");
		outDataSet00.addColumn("Column0",   DataTypes.STRING, 255); 
		outDataSet00.addColumn("Column1",   DataTypes.STRING, 255); 
		outDataSet00.addColumn("Column2",   DataTypes.STRING, 255); 
		outDataSet00.addColumn("useclientlayout_SSV",   DataTypes.STRING, 255); 
		
		  int newRow = 0;
	   for(int i = 0; i < Integer.parseInt(ag1); i++)
	   {
			newRow = outDataSet00.newRow();	 	
			if (i < cc)
			{
				String cookieName = cookies[i].getName();
				String cookieValue = cookies[i].getValue();
				outDataSet00.set(newRow, "Column0", cookieName);
				outDataSet00.set(newRow, "Column1", cookieValue);
			}
			else
			{
				outDataSet00.set(newRow, "Column0", "SSV");
				outDataSet00.set(newRow, "Column1", "test");
			}			
			outDataSet00.set(newRow, "Column2", "^"+i+"^");
			outDataSet00.set(newRow, "useclientlayout_SSV", "S"+i+"S");
		   
	   }
	 		
		// Output Dataset 을 Output Dataset List 에 담는다.      									
        outDataSetList.add(outDataSet00);
        
        // Output Vairable 을 세팅한다.		
        
        outVariableList.add("ErrorMsg",  "조회 성공");
		outVariableList.add("ErrorCode", 1);
		//outVariableList.add("ErrorMsg", strUserName);

        //outVariableList.add("strOutputData", "※ Output Vairable을 받으려면, 화면의 전역변수로 선언하면 됩니다.");

    } catch(Exception e) {

        // Output Vairable 을 세팅한다.
        outVariableList.add("ErrorMsg",  "실패");
        outVariableList.add("ErrorCode", -2);
		outVariableList.add("strOutputData", "실패하였습니다.");
        e.printStackTrace();

    } 
	
	request.setCharacterEncoding("utf-8");
	// 쿠키 지정 name, value
	Cookie cookie = new Cookie("Cookie001", "SSV서버쿠키테스트!!!");
	// 쿠키의 유효시간 설정
	cookie.setMaxAge(10);
	//생성된 쿠기에 path설정
	cookie.setPath("/"); //모든문서(디렉토리)에서 쿠키사용가능함
	// 쿠키 추가
	response.addCookie(cookie);
	
	outPD.setDataSetList(outDataSetList);
	outPD.setVariableList(outVariableList);
	platformResponse.setData(outPD);
	platformResponse.sendData();
%>