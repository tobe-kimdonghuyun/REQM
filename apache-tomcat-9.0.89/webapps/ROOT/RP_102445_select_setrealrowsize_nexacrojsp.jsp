
<%@ page language="java"%>
<%@ page import="java.util.Arrays" %>
<%@ page import="java.util.Objects" %>

<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.data.datatype.*" %>
<%@ page contentType="application/octet-stream; charset=UTF-8" buffer="none" autoFlush="true" language="java" %>
<%@ page trimDirectiveWhitespaces="true" %>


<%
//    System.out.println("SESSION ID = " + session.getId());

    String strCharset = "UTF-8";

    /*********************************************************
     * request로 들어온 내용을 parsing하여
     * input variable list, input dataset list에 저장한다.
     * (MiPlatform 에서 보내온 데이터를 parsing한다.)
     *********************************************************/
    //PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
    //PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_BINARY, strCharset);
    //platformRequest.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB);
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), null, strCharset);
    //platformRequest.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB);
    
    platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();

    String strUserID   = inVariableList.getString("userid");
    String strUserName = inVariableList.getString("username");
    System.out.println("input userid   = " + strUserID);
    System.out.println("input username = " + strUserName);
    System.out.println("inDataSetList = " + inDataSetList);

    /*********************************************************
     * response로 보낼 내용을 생성한다.
     * output variable list, output dataset list에 저장한다.
     * (MiPlatform 이 받을 수 있는 데이터 형태로 가공)
     *********************************************************/
    PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
    //PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_SSV, strCharset);
    //platformRequest.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB);
    //PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), null, strCharset);
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();

    //System.out.println("5초 대기 시작");
    //Thread.sleep(5000);
    //System.out.println("5초 대기 끝");

    try {

        // MiPlatform 으로 전송할 Output Dataset 을 생성한다.
        DataSet outDataSet = new DataSet("output");

        // Output Dataset 컬럼 정의
        outDataSet.addColumn("IDX",        DataTypes.STRING, 5);
        outDataSet.addColumn("ObjectName",        DataTypes.STRING, 100);
        outDataSet.addColumn("ObjectID",   DataTypes.STRING, 200);
        outDataSet.addColumn("TestType",     DataTypes.STRING, 8);
        outDataSet.addColumn("TestObject",     DataTypes.STRING, 10);
        outDataSet.addColumn("TestValue",     DataTypes.STRING, 100);
        outDataSet.addColumn("ResultValue",     DataTypes.STRING, 10);

        int nRow;
		int nTotalCount = 5;
		if(strUserID.equals("test")) nTotalCount = 0;
        for(int i = 0; i < nTotalCount; i++) {

            // Output Dataset 로우 추가
            nRow = outDataSet.newRow();
            
            char a = (char) 0x0A;
            char b = (char) 0x0D;
            char c = (char) 0x00;

            String LF = String.valueOf(a);
            String CR = String.valueOf(b);
            String ETX = String.valueOf(c);

            // Output Dataset 에 조회 결과 값 세팅
            outDataSet.set(nRow, "IDX",      i);
            outDataSet.set(nRow, "ObjectName",      "NAME"+i);
            outDataSet.set(nRow, "ObjectID", "CODE_DESC"+i);
            //outDataSet.set(nRow, "TestType",   "JTV"+LF+CR+"최고경영자");
            outDataSet.set(nRow, "TestType",   "JTV&최고경영자");
            outDataSet.set(nRow, "TestObject",   "asdfasdf\r\nasdf");
			//String str = "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하";
            String str = "hscrack@naver.com               ";
            outDataSet.set(nRow, "TestValue", str);
            outDataSet.set(nRow, "ResultValue",   "aa");
        }

        // Output Dataset 을 Output Dataset List 에 담는다.
        outDataSetList.add(outDataSet);

        // Output Vairable 을 세팅한다.
        outVariableList.add("ErrorCode", 0);
        outVariableList.add("ErrorMsg",  "조회 성공");
        outVariableList.add("strOutputData", "※ Output Vairable을 받으려면, 화면의 전역변수로 선언하면 됩니다.");
        String[] myList = {"a", "b", "c", "d"};
        outVariableList.add("arrPara", Arrays.toString(myList));

    } catch(Exception e) {

        // Output Vairable 을 세팅한다.
        outVariableList.add("ErrorCode", -1);
        outVariableList.add("ErrorMsg",  e.toString());

    } finally {

        // 조회 결과(Output Dataset List, Output Variable List)를 MiPlatform 으로 전송
        outPD.setDataSetList(outDataSetList);
        outPD.setVariableList(outVariableList);
        platformResponse.setData(outPD);
        platformResponse.sendData();
    }
%>
