<%@page import="java.io.BufferedOutputStream"%>
<%@ page contentType="text/html;charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="java.io.BufferedInputStream"%>
<%@ page import="java.io.FileInputStream"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.ServletOutputStream"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%
Cookie[] cookies = request.getCookies();
String jsessionId = null;
if (cookies != null) {

    for (Cookie cookie : cookies) {
        if ("JSESSIONID".equals(cookie.getName())) {
            jsessionId = cookie.getValue();
            break;
        }
    }
}

if (jsessionId != null) {
    System.out.println("========Server JSESSIONID: " + jsessionId);
} else {
	 System.out.println("JSESSIONID not found.");
}
String contextRealPath = request.getSession().getServletContext().getRealPath("/");
String savePath = contextRealPath + "PATH";
String name = request.getParameter("PATH");
String filename = new String(name.getBytes("iso8859-1"), "UTF-8");
byte[] buffer = new byte[1024];

BufferedOutputStream out_stream = new BufferedOutputStream(response.getOutputStream()); 
BufferedInputStream in_stream = null;

// 쨔占승삭��짰쨍짝 칙짚짤쨌�쨩 �쨈褸
int bufferSize = out.getBufferSize();



File fis = new File(savePath + "/" + filename);
		System.out.println("Down >>> " + savePath + "/" + filename);	
if(fis.exists()){
	try{
		response.setContentType("utf-8");
		response.setContentType("application/octet;charset=utf-8");
		response.setHeader("Accept-Ranges", "bytes");		
		response.setHeader("Content-Disposition", "attachment;filename=" + java.net.URLEncoder.encode(filename,"UTF8"));
  
		out.clear();
		out = pageContext.pushBody();		
		
		in_stream = new BufferedInputStream(new FileInputStream(fis));

		int n = 0;
		while ((n = in_stream.read(buffer, 0, 1024)) != -1) {
			out_stream.write(buffer, 0, n);
		}// while
	

		int remainSize = out.getRemaining();

		int usedSize = bufferSize - remainSize;			
   // System.out.println("bufferSize >> " + bufferSize);
    //System.out.println("remainSize >> " + remainSize);
    //System.out.println("usedSize >> " + usedSize);    
	
			
	} catch (Exception e) {
		e.printStackTrace();
	} finally {
		if (in_stream != null) {
			try {
				in_stream.close();
			} catch (Exception e) {}
		}
		if (out_stream != null) {
			try {
				out_stream.close();
			} catch (Exception e) {}
		}
	}
}else{
		response.sendRedirect("unknownfile");
}
%>
