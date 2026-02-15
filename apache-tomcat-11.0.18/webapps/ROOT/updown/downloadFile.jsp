<%@page import="java.net.URLEncoder"%>
<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ page language="java"%>
<%@ page import="java.net.URLDecoder.*" %>
<%@ page import="java.net.URLEncoder.*" %>
<%@ page import="java.io.BufferedInputStream"%>
<%@ page import="java.io.BufferedOutputStream"%>
<%@ page import="java.io.FileInputStream"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="jakarta.servlet.ServletException"%>
<%@ page import="jakarta.servlet.ServletOutputStream"%>
<%@ page import="jakarta.servlet.http.HttpServletRequest"%>
<%@ page import="jakarta.servlet.http.HttpServletResponse"%>

<%
	String contextRealPath = request.getServletContext().getRealPath("/upload/");
	
    String userAgent = request.getHeader("User-Agent");
    String isRuntime = "N";
    
    System.out.println("downloadFile.jsp >> userAgent : " + userAgent);
    
    if (userAgent.indexOf("nexacro") > -1) {
    	//nexacrobrowser여부
    	isRuntime = "Y"; 
    }
    
	String savePath = request.getParameter("path");
	String name = request.getParameter("fileName"); 			 //tomcat8.0 보안정책으로 인해 화면에서 encoding해서 넘겨진값
	String filename = java.net.URLDecoder.decode(name, "utf-8"); //file search를 위해 다시 decoding
	
	//file생성
	String filePath = contextRealPath + savePath + File.separator + filename;
	byte[] buffer = new byte[1024];
	File fis = new File(filePath);
	
	//in/out stream 생성
	ServletOutputStream out_stream	= null;
	BufferedInputStream in_stream	= null; 
	
	if(fis.isFile())
	{
		try
		{
			response.setContentType("application/octet;charset=utf-8");
			if(isRuntime != null && isRuntime.equals("N")) {
				//IE일경우
				if (userAgent.indexOf("MSIE") > -1 ||userAgent.indexOf("Trident") > -1 ) 
				{
					String convName = java.net.URLEncoder.encode(filename,"UTF-8").replaceAll("\\+", "%20");
					response.setHeader("Content-Disposition", "attachment;filename =\"" + convName + "\";");
					//response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(name.getBytes("utf-8"), "ISO8859_1") + "\"");
					//String encodeFileName = java.net.URLEncoder.encode(filename, "utf-8").replaceAll("\\+", "\\ ");
					//response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(filename.getBytes("utf-8"), "ISO8859_1") + "\"");
					//response.setHeader("Content-Disposition", "attachment;filename=\"" + convName + "\";");
					//response.setHeader("Content-Transper-Encoding", "binary");
				}
				else
				{
					//그외의 경우
					response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(name.getBytes("utf-8"), "ISO8859_1") + "\"");
					//response.setHeader("Content-Disposition", "attachment;filename =\"" + filename + "\";");
				}								
				response.setHeader("Content-Transper-Encoding", "binary");
				response.setHeader("Content-Length", "" + String.valueOf(fis.length()));
				response.setHeader("Pargma", "no-cache");
				response.setHeader("Expires", "-1");
				
			} else {
				response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(name.getBytes("utf-8"), "ISO8859_1") + "\"");
				response.setHeader("Content-Transper-Encoding", "binary");
				response.setHeader("Content-Length", "" + String.valueOf(fis.length()));
				//response.setHeader("Content-Disposition", "attachment; filename = \"" + filename + "\"");
			}
			
			

			out.clear();
			out = pageContext.pushBody();	
			
			out_stream = response.getOutputStream();
			in_stream = new BufferedInputStream(new FileInputStream(fis));
	
			int n = 0;
			while ((n = in_stream.read(buffer, 0, buffer.length)) != -1) 
			{
				out_stream.write(buffer, 0, n);
			}
			System.out.println("fileDownload filename==>"+filename + ", 전송완료. ");	
			out_stream.flush();
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			if (in_stream != null) 
			{
				try 
				{
					in_stream.close();
				} 
				catch (Exception e) 
				{
					e.printStackTrace();
				}
			}
			if (out_stream != null) 
			{
				try 
				{
					out_stream.close();
				} 
				catch (Exception e) 
				{
					e.printStackTrace();
				}
			}
		}
	}
	else
	{
		System.out.println("fileDownload filename==>"+filename + ", 파일없음.");
		response.sendRedirect("unknownfile");
	}
%>
