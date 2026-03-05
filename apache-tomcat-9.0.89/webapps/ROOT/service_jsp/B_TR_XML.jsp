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
     * (Nexacro N 에서 보내온 데이터를 parsing한다.)
     *********************************************************/     
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML);
    platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();
		
		String strCount = "";
		int nCount = 0;
		
		//Argument 생략 케이스 처리
		if(inVariableList.getString("nCount") != null)
			strCount = inVariableList.getString("nCount");     		
		else
			strCount = "1";
			     			
    nCount = Integer.parseInt(strCount);
    
    DataSet ds = inDataSetList.get("input");
    DataSet ds2 = inDataSetList.get("input2");   	
    DataSet ds3 = inDataSetList.get("input3");   	   	
	
		//System.out.println(ds.saveXml());    

    /*********************************************************
     * response로 보낼 내용을 생성한다.
     * output variable list, output dataset list에 저장한다.
     * (Nexacro N 이 받을 수 있는 데이터 형태로 가공)
     *********************************************************/ 
     out.clear();
     out=pageContext.pushBody();    
     
    PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);   
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();

    try {
    
/////////////////////////////////////////////////////////////////////////
       //output 데이터셋 생성
       DataSet outDataSet  = new DataSet("output");        
       // Output Dataset 컬럼 정의
      //for(int i = 0; i < 20; i++)       
				outDataSet.addColumn("Column0",   DataTypes.STRING, 256); 		
        outDataSet.addColumn("Column1",   DataTypes.STRING, 256); 	
        outDataSet.addColumn("Column2",   DataTypes.STRING, 256); 	
		   int newRow = 0;
		 //  for(int i = 0; i < 3; i++)
		//   {

		//		for(int j = 0; j < 20; j++)		
		//			outDataSet.set(newRow, "Column" + j, "Row" + i);					
	  // 	}		
	 			newRow = outDataSet.newRow();
        outDataSet.set(newRow, "Column0" , "198333-AR-HHP-A-008\n\t \n\tabcdef Scenario(Due& Week)");
        outDataSet.set(newRow, "Column1" , "bbbbbbbbbbbbbbbbbb");
        outDataSet.set(newRow, "Column2" , "ccccccccccccccccccc");	
        newRow = outDataSet.newRow();	
        outDataSet.set(newRow, "Column0" , "111111111111111111");
        outDataSet.set(newRow, "Column1" , "22222222222222222");
        outDataSet.set(newRow, "Column2" , "333333333333333333");	
		    // Output Dataset 을 Output Dataset List 에 담는다.      									
        outDataSetList.add(outDataSet);
//////////////////////////////////////////////////////////////////////////
       
/////////////////////////////////////////////////////////////////////////
       //output2 데이터셋 생성 
       DataSet outDataSet2  = new DataSet("output2");        
       // Output Dataset 컬럼 정의
      for(int i = 0; i < 20; i++)       
				outDataSet2.addColumn("Column" + i,   DataTypes.STRING, 256); 		
	   
	   
		   newRow = 0;
		   for(int i = 0; i < nCount; i++)
		   {
				newRow = outDataSet2.newRow();	 		
				for(int j = 0; j < 20; j++)
					outDataSet2.set(newRow, "Column" + j, "Row" + i);					
	   	}		
	 		
		    // Output Dataset 을 Output Dataset List 에 담는다.      									
        outDataSetList.add(outDataSet2);
/////////////////////////////////////////////////////////////////////////
       
///////////////////////////////////////////////////////////////////////// 
       //output3 데이터셋 생성 
       DataSet outDataSet3  = new DataSet("output3");        
       // Output Dataset 컬럼 정의
      for(int i = 0; i < 20; i++)       
				outDataSet3.addColumn("Column" + i,   DataTypes.STRING, 256); 		
	   
	   
		   newRow = 0;
		   for(int i = 0; i < nCount; i++)
		   {
				newRow = outDataSet3.newRow();	 		
				for(int j = 0; j < 20; j++)
					outDataSet3.set(newRow, "Column" + j, "Row" + i);					
	   	}		
	 		
		    // Output Dataset 을 Output Dataset List 에 담는다.      									
        outDataSetList.add(outDataSet3);       
///////////////////////////////////////////////////////////////////////// 
        
/////////////////////////////////////////////////////////////////////////        
        // 콜백 함수에 뿌려줄 코드와 메시지.		
        outVariableList.add("ErrorCode", 0);
        outVariableList.add("ErrorMsg",  "조회성공 0 return");

    } catch(Exception e) {

        // Output Vairable 을 세팅한다.
        outVariableList.add("ErrorCode",  -1);
        outVariableList.add("ErrorMsg", "실패");
        e.printStackTrace();
    }
/////////////////////////////////////////////////////////////////////////
 
	outPD.setDataSetList(outDataSetList);
	outPD.setVariableList(outVariableList);
	platformResponse.setData(outPD);
	platformResponse.sendData();
%>