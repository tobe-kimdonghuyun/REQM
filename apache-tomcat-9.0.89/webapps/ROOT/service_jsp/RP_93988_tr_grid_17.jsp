<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java"%>
<%@page import="com.nexacro17.xapi.tx.*" %>
<%@page import="com.nexacro17.xapi.data.*" %>
<%@page import="com.nexacro17.xapi.data.datatype.*" %>

<%
       String strCharset = "utf-8";
       
    String ls_test = "aaaaaa";
    session.setAttribute("abc", ls_test);    // "abc"을 키로 문자열을 저장

   

    /*********************************************************
     * request로 들어온 내용을 parsing하여
     * input variable list, input dataset list에 저장한다.
     * (MiPlatform 에서 보내온 데이터를 parsing한다.)
     *********************************************************/
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_SSV);
   	platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();

    String strUserID   = inVariableList.getString("test");
    //String strUserName = inVariableList.getString("username");
     
   // DataSet ds = inDataSetList.get("com.fix.triz.ccom.userinfo");   	
	
	//System.out.println(ds.saveXml());
	
    

    /*********************************************************
     * response로 보낼 내용을 생성한다.
     * output variable list, output dataset list에 저장한다.
     * (MiPlatform 이 받을 수 있는 데이터 형태로 가공)
     *********************************************************/ 
     out.clear();
     out=pageContext.pushBody();    
     
    PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);   
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();
    
//    platformResponse.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB); 

    System.out.println("5초 대기 시작");
//   Thread.sleep(5000);
    System.out.println("5초 대기 끝");

    try {
       
       DataSet outDataSet0  = new DataSet("output");        
       // Output Dataset 컬럼 정의
       
	   //outDataSet0.addConstantColumn("constcol1","1234");
	   //outDataSet0.addConstantColumn("constcol2","5678");
	   outDataSet0.addColumn("Column0",        DataTypes.STRING, 100);
       outDataSet0.addColumn("Column1",        DataTypes.STRING, 255);    	
	   outDataSet0.addColumn("Column.bb",        DataTypes.STRING, 255);
	   
	   // Exception 낼때 컬럼셋 변경
	   //outDataSet0.addColumn("Column99999999999999999",        DataTypes.STRING, 255);    	
	   
	   int newRow = 0;
	   for(int i = 0; i < 10; i++)
	   {
			newRow = outDataSet0.newRow();	 		
	 		outDataSet0.set(newRow, "Column0", "<html><tag>");
	 		outDataSet0.set(newRow, "Column1", "<!-- GateReview 점검결과표 -->");
	 		outDataSet0.set(newRow, "Column.bb", "201707\n13");
		   
	   }
      
		
	 		
		// Output Dataset 을 Output Dataset List 에 담는다.      									
        outDataSetList.add(outDataSet0);
        
        // Output Vairable 을 세팅한다.	
        int nErrorCode = -1;
       outVariableList.add("errorCode", nErrorCode);
        outVariableList.add("errorMsg",  "조회성공 -1 return");
		//outVariableList.add("ErrorMsg", strUserName);

        //outVariableList.add("strOutputData", "※ Output Vairable을 받으려면, 화면의 전역변수로 선언하면 됩니다.");


    } catch(Exception e) {

        // Output Vairable 을 세팅한다.
        outVariableList.add("ErrorCode",  -1);
        outVariableList.add("ErrorMsg", "실패");
		outVariableList.add("strOutputData  ", "실패하였습니다.");
        e.printStackTrace();

    } 
	outPD.setDataSetList(outDataSetList);
	outPD.setVariableList(outVariableList);
	platformResponse.setData(outPD);
	platformResponse.sendData();
%>