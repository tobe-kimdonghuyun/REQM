<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.data.datatype.*" %>
<%@ page import="java.text.ParseException" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Date" %>
<%!

    public void addRowData(DataSet ds, String chgeIp, String kornNm, String hipoCd,
                       String chgeId, String englNm, String inptIp,
                       String chgeDttm, String usedYn, String remk, String befoCd,
                       String inptDttm, String hclCd, String inptId) {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");

        Date chgeDate = null;
        Date inptDate = null;
        try {
            if (chgeDttm != null && !chgeDttm.isEmpty()) {
                chgeDate = sdf.parse(chgeDttm);
            }
            if (inptDttm != null && !inptDttm.isEmpty()) {
                inptDate = sdf.parse(inptDttm);
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }

        int row = ds.newRow();
        ds.set(row, "CHGE_IP", chgeIp);
        ds.set(row, "HCL_CD_KORN_NM", kornNm);
        ds.set(row, "HIPO_HCL_CD", hipoCd);
        ds.set(row, "CHGE_ID", chgeId);
        ds.set(row, "HCL_CD_ENGL_NM", englNm);
        ds.set(row, "INPT_IP", inptIp);
        ds.set(row, "CHGE_DTTM", chgeDate);
        ds.set(row, "USED_YN", usedYn);
        ds.set(row, "REMK", remk);
        ds.set(row, "BEFO_HCL_CD", befoCd);
        ds.set(row, "INPT_DTTM", inptDate);
        ds.set(row, "HCL_CD", hclCd);
        ds.set(row, "INPT_ID", inptId);
    }
%>

<%
    String strCharset = "utf-8";

    /*********************************************************
     * request로 들어온 내용을 parsing하여
     * input variable list, input dataset list에 저장한다.
     * (nexacro 에서 보내온 데이터를 parsing한다.)
     *********************************************************/
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_BINARY);
    platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();

    //String strUserID   = inVariableList.getString("a");
    //String strUserName = inVariableList.getString("username");
	
    DataSet dsInput = inDataSetList.get("input");
	
	//System.out.println("a::::::"+strUserID);
	//System.out.println(dsInput.saveSsv());
	
    

    /*********************************************************
     * response로 보낼 내용을 생성한다.
     * output variable list, output dataset list에 저장한다.
     * (nexacro 이 받을 수 있는 데이터 형태로 가공)
     *********************************************************/ 
     out.clear();
     out=pageContext.pushBody();    
     
    //PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_SSV, strCharset);   
	//PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
	//PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_BINARY, null);
	PlatformResponse platformResponse = new HttpPlatformResponse(response);
	platformResponse.setContentType(PlatformType.CONTENT_TYPE_BINARY);
    platformResponse.setCharset(null);

	//PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.HTTP_CONTENT_TYPE_BINARY, strCharset);
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();
    
	//platformResponse.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB);

    //System.out.println("2초 대기 시작");
	//Thread.sleep(2000);
    //System.out.println("2초 대기 끝");

    try {

		// 1. Dataset 생성
        DataSet ds = new DataSet("dsList");

        // 2. Column 정의
        ds.addColumn("CHGE_IP", DataTypes.STRING, 32);
        ds.addColumn("HCL_CD_KORN_NM", DataTypes.STRING, 32);
        ds.addColumn("HIPO_HCL_CD", DataTypes.UNDEFINED, 0);
        ds.addColumn("CHGE_ID", DataTypes.STRING, 32);
        ds.addColumn("HCL_CD_ENGL_NM", DataTypes.STRING, 32);
        ds.addColumn("INPT_IP", DataTypes.STRING, 32);
        ds.addColumn("CHGE_DTTM", DataTypes.DATE_TIME, 17);
        ds.addColumn("USED_YN", DataTypes.STRING, 32);
        ds.addColumn("REMK", DataTypes.STRING, 0);
        ds.addColumn("BEFO_HCL_CD", DataTypes.STRING, 0);
        ds.addColumn("INPT_DTTM", DataTypes.DATE_TIME, 17);
        ds.addColumn("HCL_CD", DataTypes.STRING, 32);
        ds.addColumn("INPT_ID", DataTypes.STRING, 32);

        // 3. 전체 40여 개 Row 추가 (Java 코드와 동일)
        addRowData(ds, "172.10.11.3", "게시판유형", "", "0000000002", "Board Type", "172.10.11.205", "20250617143602000", "1", "", "", "20210628124051000", "CM01", "0000000002");

        addRowData(ds, "172.10.11.3", "일정공유유형", "", "0000000002", "Schedule Sharing Type", "0:0:0:0:0:0:0:1", "20250617143602000", "1", "", "", "20211108133611000", "CM02", "0000000017");
        addRowData(ds, "172.10.11.3", "일정유형", "", "0000000002", "Schedule Type", "172.10.11.26", "20250617143602000", "1", "", "", "20211111140758000", "CM03", "0000000007");
        addRowData(ds, "172.10.11.6", "검색타입", "", "0000000010", "Search Type", "172.10.11.6", "20250710144622000", "1", "", "", "20250710144622000", "CM04", "0000000010");
        addRowData(ds, "172.10.11.3", "프로젝트(미사용)", "", "0000000002", "Project", "172.10.11.26", "20250618084605000", "1", "이한솔 선임 DevPro 수정작업 진척관리", "", "20230420140726000", "PP01", "0000000007");
        addRowData(ds, "172.10.11.3", "TASK 진행상태", "", "0000000002", "Task Progress Status", "172.10.11.26", "20250617142351000", "1", "", "", "20230420145945000", "PP02", "0000000007");
        addRowData(ds, "172.10.11.3", "SR 요청유형", "", "0000000002", "Request Type", "172.10.11.26", "20250617142256000", "1", "", "", "20230420150532000", "PP03", "0000000007");
        addRowData(ds, "172.10.11.3", "SR 진행상태", "", "0000000002", "SR Progress Status", "172.10.11.26", "20250617142359000", "1", "", "", "20230420150815000", "PP04", "0000000007");
        addRowData(ds, "172.10.11.3", "프로젝트 진행상태", "", "0000000002", "Project Progress Status", "0:0:0:0:0:0:0:1", "20250617142421000", "1", "", "", "20240327164609000", "PP05", "0000000060");
        addRowData(ds, "172.10.11.3", "프로젝트 역할", "", "0000000002", "Role in project", "0:0:0:0:0:0:0:1", "20250617142812000", "1", "", "", "20240327164609000", "PP06", "0000000060");
        addRowData(ds, "172.10.11.3", "서비스유형", "", "0000000002", "Service Type", "0:0:0:0:0:0:0:1", "20250617142503000", "1", "", "", "20231108125201000", "PR01", "0000000060");
        addRowData(ds, "172.10.11.3", "신청유형", "", "0000000002", "Application Type", "0:0:0:0:0:0:0:1", "20250617142518000", "1", "", "", "20231108125201000", "PR02", "0000000060");
        addRowData(ds, "172.10.11.3", "업종유형", "", "0000000002", "Industry Type", "0:0:0:0:0:0:0:1", "20250617142723000", "1", "", "", "20231107132200000", "PR03", "0000000060");
        addRowData(ds, "172.10.11.3", "문의유형", "", "0000000002", "Inquiry Type", "0:0:0:0:0:0:0:1", "20250617143602000", "1", "", "", "20231108152132000", "PR04", "0000000060");
        addRowData(ds, "172.10.11.3", "신청관리상태", "", "0000000002", "Application Management Status", "0:0:0:0:0:0:0:1", "20250617142723000", "1", "", "", "20231110133827000", "PR05", "0000000060");
        addRowData(ds, "172.10.11.3", "시스템구분", "", "0000000002", "System", "172.10.11.205", "20250617142954000", "1", "", "", "20210610103800000", "SM00", "0000000002");
        addRowData(ds, "172.10.11.3", "모듈구분", "", "0000000002", "Module", "172.10.11.205", "20250617142954000", "1", "", "", "20210610103851000", "SM01", "0000000002");
        addRowData(ds, "172.10.11.3", "메시지구분", "", "0000000002", "Message Type", "0:0:0:0:0:0:0:1", "20250617142954000", "1", "", "", "20210611170647000", "SM02", "0000000002");
        addRowData(ds, "172.10.11.3", "부서구분", "", "0000000002", "Departments Type", "172.10.11.205", "20250617142954000", "1", "", "", "20210614153447000", "SM03", "0000000002");
        addRowData(ds, "172.10.11.3", "직원구분", "", "0000000002", "Employee Type", "172.10.11.205", "20250617142954000", "1", "", "", "20210614160309000", "SM04", "0000000002");
        addRowData(ds, "172.10.11.3", "직급", "", "0000000002", "Position", "172.10.11.205", "20250617143032000", "1", "", "", "20210614160745000", "SM05", "0000000002");
        addRowData(ds, "172.10.11.3", "직책", "", "0000000002", "Role", "172.10.11.205", "20250617143032000", "1", "", "", "20210614160745000", "SM06", "0000000002");
        addRowData(ds, "172.10.11.3", "직종", "", "0000000002", "Occupation", "172.10.11.205", "20250617143129000", "1", "", "", "20210614160745000", "SM07", "0000000002");
        addRowData(ds, "172.10.11.3", "재직상태", "", "0000000002", "Working status", "172.10.11.205", "20250617145548000", "1", "", "", "20210614160745000", "SM08", "0000000002");
        addRowData(ds, "172.10.11.3", "로그인구분", "", "0000000002", "Login Type", "172.10.11.205", "20250617143324000", "1", "", "", "20210614173744000", "SM09", "0000000002");
        addRowData(ds, "172.10.11.3", "프로그램유형구분", "", "0000000002", "Program Type", "172.10.11.205", "20250617143324000", "1", "", "", "20210615124358000", "SM10", "0000000002");
        addRowData(ds, "172.10.11.3", "공통버튼정렬", "", "0000000002", "Common Button Sort", "172.10.11.205", "20250617143324000", "1", "", "", "20210615124540000", "SM11", "0000000002");
        addRowData(ds, "172.10.11.3", "메뉴구분", "", "0000000002", "Menu Type", "172.10.11.205", "20250617143324000", "1", "", "", "20210617091938000", "SM12", "0000000002");
        addRowData(ds, "172.10.11.3", "조회범위", "", "0000000002", "Search Scope", "172.10.11.205", "20250617143324000", "1", "", "", "20210617091938000", "SM13", "0000000002");
        addRowData(ds, "172.10.11.3", "테마", "", "0000000002", "Theme", "0:0:0:0:0:0:0:1", "20250617143424000", "1", "", "", "20210730143835000", "SM14", "0000000006");
        addRowData(ds, "172.10.11.3", "OS", "", "0000000002", "OS", "172.10.11.92", "20250617143424000", "1", "", "", "20211027141509000", "SM15", "0000000014");
        addRowData(ds, "172.10.11.3", "Help Desk", "", "0000000002", "Help Desk", "172.10.11.3", "20250617143424000", "1", "", "", "20230228143235000", "SM16", "0000000002");
        addRowData(ds, "172.10.11.3", "휴일구분", "", "0000000002", "Holiday Type", "172.10.11.26", "20250617143424000", "1", "", "", "20241016151656000", "SM17", "0000000007");
        addRowData(ds, "172.10.11.6", "사용여부", "", "0000000010", "Used Y/N", "172.10.11.6", "20250710140641000", "1", "", "", "20250710140641000", "SM18", "0000000010");

	 		
		// Output Dataset 을 Output Dataset List 에 담는다.      									
        outDataSetList.add(ds);
        
        // Output Vairable 을 세팅한다.		        
		outVariableList.add("ErrorCode", 0);
        outVariableList.add("ErrorMsg",  "조회 성공");
		//outVariableList.add("ErrorMsg", request.getRemoteAddr());
		

    } catch(Exception e) {

        // Output Vairable 을 세팅한다.
        outVariableList.add("ErrorMsg",  e);
        outVariableList.add("ErrorCode", -1);		
        e.printStackTrace();

    } finally {

        // 조회 결과(Output Dataset List, Output Variable List)를 MiPlatform 으로 전송
        outPD.setDataSetList(outDataSetList);
        outPD.setVariableList(outVariableList);
        platformResponse.setData(outPD);
        platformResponse.sendData();
    }
%>
