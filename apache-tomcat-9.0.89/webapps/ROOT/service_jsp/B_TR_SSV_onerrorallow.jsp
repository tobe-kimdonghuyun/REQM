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
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_SSV);
    platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();
		
		String strCount = "";
		int nCount = 0;
		System.out.println("1======================");
		System.out.println(inVariableList.getString("value"));
		//Argument 생략 케이스 처리
		if(inVariableList.getString("value") != null)
			strCount = inVariableList.getString("value");     		
		else
			strCount = "1";
			     			
    nCount = Integer.parseInt(strCount);
    System.out.println("2======================");
    System.out.println(nCount);
    DataSet ds = inDataSetList.get("input");

		//System.out.println(ds.saveXml());    

    /*********************************************************
     * response로 보낼 내용을 생성한다.
     * output variable list, output dataset list에 저장한다.
     * (Nexacro N 이 받을 수 있는 데이터 형태로 가공)
     *********************************************************/ 
     out.clear();
     out=pageContext.pushBody();    
     
    PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_SSV, strCharset);   
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();

    try {
    
/////////////////////////////////////////////////////////////////////////
       //output 데이터셋 생성
       DataSet outDataSet  = new DataSet("output");        
       // Output Dataset 컬럼 정의
      for(int i = 0; i < 20; i++)       
				outDataSet.addColumn("Column" + i,   DataTypes.STRING, 256); 		
	   
	   
		   int newRow = 0;
		   for(int i = 0; i < nCount; i++)
		   {
				newRow = outDataSet.newRow();	 		
				for(int j = 0; j < 20; j++)		
					outDataSet.set(newRow, "Column" + j, "Row" + i);					
	   	}		
	 		
		    // Output Dataset 을 Output Dataset List 에 담는다.      									
        outDataSetList.add(outDataSet);
//////////////////////////////////////////////////////////////////////////
       
/////////////////////////////////////////////////////////////////////////
       //output2 데이터셋 생성 
          
///////////////////////////////////////////////////////////////////////// 
        
/////////////////////////////////////////////////////////////////////////        
        // 콜백 함수에 뿌려줄 코드와 메시지.		
        outVariableList.add("ErrorCode", 1);
        outVariableList.add("ErrorMsg",  "성공");

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