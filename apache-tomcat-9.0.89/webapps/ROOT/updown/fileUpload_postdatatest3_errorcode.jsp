<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ page language="java"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Map"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Collections"%>

<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<%@ page import="javax.servlet.http.HttpServletRequestWrapper"%>

<%@ page import="com.oreilly.servlet.*"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>

<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>

<%!
/**
 * HttpServletRequestWrapper를 확장하여 요청 헤더를 추가/변경할 수 있는 래퍼 클래스
 */
public class CustomRequestWrapper extends HttpServletRequestWrapper {
    private final Map<String, String> customHeaders = new HashMap<String, String>();

    public CustomRequestWrapper(HttpServletRequest request) {
        super(request);
    }

    public void setHeader(String name, String value) {
        customHeaders.put(name, value);
    }

    @Override
    public String getHeader(String name) {
        // 커스텀 헤더에 값이 있으면 우선 반환
        String customValue = customHeaders.get(name);
        if (customValue != null) {
            return customValue;
        }
        return super.getHeader(name);
    }

    @Override
    public Enumeration<String> getHeaderNames() {
        // 원래 헤더 이름 + 커스텀 헤더 이름을 합침
        List<String> names = new ArrayList<String>(customHeaders.keySet());
        Enumeration<String> originalNames = super.getHeaderNames();
        while (originalNames.hasMoreElements()) {
            String name = originalNames.nextElement();
            if (!customHeaders.containsKey(name)) {
                names.add(name);
            }
        }
        return Collections.enumeration(names);
    }
}
%>

<%
	request.setCharacterEncoding("UTF-8");
	String userAgent = request.getHeader("User-Agent");
	//
	System.out.println("User-Agent: " + userAgent);

	// 예시: 원본 요청의 커스텀 헤더 값 가져오기
	String originalHeaderValue = request.getHeader("header0");
	if (originalHeaderValue != null) {
	    System.out.println("원본 header0 값: " + originalHeaderValue);
	}

	// CustomRequestWrapper로 헤더 값 변경
	CustomRequestWrapper wrapped = new CustomRequestWrapper(request);
	wrapped.setHeader("jsp_header", "jsp_header_value");

	// 변경된 헤더 값 확인
	String myHeaderValue = wrapped.getHeader("response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);");

	System.out.println("jsp_header 값: " + myHeaderValue);


	// 변경된 헤더 값을 HTTP 응답 헤더에 반영 (패킷에서 확인 가능)
	response.setHeader("jsp_header", myHeaderValue);


	// wrapped 객체의 헤더 목록 출력
	java.util.Enumeration<String> headerNames = wrapped.getHeaderNames();

    System.out.println("====== [HTTP Header List Start] ======");

    // 헤더가 없을 때까지 반복합니다.
    while (headerNames.hasMoreElements()) {
        String key = headerNames.nextElement();      // 헤더 이름 (ID)
        String value = wrapped.getHeader(key);       // wrapped 객체에서 헤더 값 읽기
        
        System.out.println(key + " : " + value);
    }
    
    System.out.println("====== [HTTP Header List End] ======");
	String contextRealPath	= request.getSession().getServletContext().getRealPath("/");
	String getFolderName	= request.getParameter("filefolder");
	
	//String savePath = csavePathontextRealPath + getFolderName + "\\";
	String savePath = contextRealPath + getFolderName + "\\";
	//System.out.println(savePath);
	
	int maxSize = 1000 * 1024 * 1024;
	
	File extFolder = new File(savePath);
	if(!extFolder.exists())
	{
		extFolder.mkdir();
	}

	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();

	try
	{
		MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());		
		Enumeration files = multi.getFileNames();
		
		DataSet ds = new DataSet("ds_uploadresult");

		ds.addColumn(new ColumnHeader("fileName", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
		ds.addColumn(new ColumnHeader("fileType", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("savePath", DataTypes.STRING));
		
		
		while (files.hasMoreElements())
		{
			String name = (String)files.nextElement();

			String fileName = multi.getFilesystemName(name);
			String type		= multi.getContentType(name);

			File f = multi.getFile(name);
			int row = ds.newRow(0);
			ds.set(row, "fileName", fileName);
			ds.set(row, "fileType", type);
			
			
			if (f != null)
			{           
				ds.set(row, "savePath", f.getPath());
				ds.set(row, "fileSize", f.length());
			}
		}

		resData.addDataSet(ds);
		resVarList.add("ErrorCode", -1);
		resVarList.add("ErrorMsg", "성공이지만 ErrorCode를 -1로 설정");
	}
	catch (Exception e)
	{
		System.out.println(e.getMessage());
		DataSet dsError = new DataSet("ds_error");
		dsError.addColumn(new ColumnHeader("ErrorMsg", DataTypes.STRING));
		dsError.addColumn(new ColumnHeader("ErrorCode", DataTypes.LONG));

		dsError.set(dsError.newRow(), "ErrorCode", -100);
		dsError.set(dsError.newRow(), "ErrorMsg", e.getMessage());

		resData.addDataSet(dsError);
	}

	HttpPlatformResponse res = new HttpPlatformResponse(response, request);
	res.setContentType(PlatformType.CONTENT_TYPE_XML);
	res.setCharset("UTF-8");
	res.setData(resData);
	res.sendData();

%>
