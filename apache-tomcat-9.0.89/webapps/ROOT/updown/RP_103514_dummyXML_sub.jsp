<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.data.datatype.*" %>

<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Map"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Collections"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletRequestWrapper"%>

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
        String customValue = customHeaders.get(name);
        if (customValue != null) {
            return customValue;
        }
        return super.getHeader(name);
    }

    @Override
    public Enumeration<String> getHeaderNames() {
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
	out.clear();
	out = pageContext.pushBody();

	// CustomRequestWrapper로 헤더 값 변경
	CustomRequestWrapper wrapped = new CustomRequestWrapper(request);
	wrapped.setHeader("header0", "NEW_VALUE");
    wrapped.setHeader("Clientheader", "NEW_VALUE");
	// request에서 clientheader 값을 가져와서 "_jsp" 추가 준비
	String addHeaderValue = request.getHeader("Clientheader");
	if (addHeaderValue != null) {
		System.out.println("Clientheader 원본: " + addHeaderValue + " → 응답: " + addHeaderValue + "_jsp");
		wrapped.setHeader("Clientheader", addHeaderValue + "_jsp");
	}
    System.out.println("Clientheader 수정: " + wrapped.getHeader("Clientheader"));

	HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML); 
	httpPlatformRequest.setStreamLogEnabled(true);

	httpPlatformRequest.receiveData();
	 
	PlatformData pData = httpPlatformRequest.getData();
	
	VariableList    outVariableList  = new VariableList();
	
	//System.out.println();
	outVariableList.add("ErroCode", 0);
    outVariableList.add("ErrorMsg",  "조회 실패---123");

	// HTTP 응답 헤더 설정 (HttpPlatformResponse 생성 전에 설정)
	if (addHeaderValue != null) {
		response.setHeader("Clientheader", addHeaderValue + "_jsp");
	}

	// HttpPlatformResponse 사용 (response 객체 직접 전달 → 헤더 반영 보장)
	HttpPlatformResponse platformResponse = new HttpPlatformResponse(response, request);
	platformResponse.setContentType(PlatformType.CONTENT_TYPE_XML);
	platformResponse.setCharset("UTF-8");
    platformResponse.setData(pData);
	platformResponse.sendData();
%>
