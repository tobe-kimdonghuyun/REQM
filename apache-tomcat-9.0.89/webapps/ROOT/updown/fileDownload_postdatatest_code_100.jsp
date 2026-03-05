<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ page language="java"%>
<%@ page import="java.util.zip.ZipOutputStream"%>
<%@ page import="java.util.zip.ZipEntry"%>
<%@ page import="java.net.URLDecoder.*" %>
<%@ page import="java.io.BufferedInputStream"%>
<%@ page import="java.io.FileInputStream"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>


<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Map"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Collections"%>

<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>

<%@ page import="com.oreilly.servlet.*"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.ServletOutputStream"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
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
	System.out.println("User-Agent: " + userAgent);

	// CustomRequestWrapper로 헤더 값 변경
	CustomRequestWrapper wrapped = new CustomRequestWrapper(request);
	wrapped.setHeader("jsp_download_header", "jsp_download_header_value");

	// 변경된 헤더 값 확인
	String myHeaderValue = wrapped.getHeader("jsp_download_header");

	System.out.println("jsp_download_header 값: " + myHeaderValue);
	// 변경된 헤더 값을 HTTP 응답 헤더에 반영 (패킷에서 확인 가능)
	response.setHeader("jsp_download_header", myHeaderValue);


	// wrapped 객체의 헤더 목록 출력	
	java.util.Enumeration<String> headerNames = wrapped.getHeaderNames();

    System.out.println("====== [HTTP Header List Start] ======");

    // 헤더가 없을 때까지 반복합니다.
    while (headerNames.hasMoreElements()) {
        String key = headerNames.nextElement();      // 헤더 이름 (ID)
        String value = wrapped.getHeader(key);       // wrapped 객체에서 헤더 값 읽기
        
        System.out.println(key + " : " + value);
    }
    
	String contextRealPath = request.getSession().getServletContext().getRealPath("/");
	
	String getFolderName = request.getParameter("filefolder");
	String getName = request.getParameter("filename");

	//String filename = new String(getName.getBytes("iso8859-1"), "utf-8");
	String filename = java.net.URLDecoder.decode(getName, "utf-8");
	String folderName = java.net.URLDecoder.decode(getFolderName, "utf-8");

	String filePath = contextRealPath + folderName + File.separator;
	if (filename.length() <= 0)
	{
		ServletOutputStream out_stream	= null;
		BufferedInputStream in_stream	= null;
		ZipOutputStream		zout_stream	= null;
		try
		{
			response.setContentType("application/octet;charset=utf-8");
			response.setHeader("Content-Disposition", "attachment; filename = \"" + folderName + ".zip" + "\"");
			
			out.clear();
			out = pageContext.pushBody();

			out_stream = response.getOutputStream();
			zout_stream = new ZipOutputStream(out_stream);		
			zout_stream.setLevel(8);
			
			String filedown = "";
			String filedownPath = "";

			File rf = new File(filePath); 
			File[] rfiles = rf.listFiles();
			
			if(rfiles != null)
			{
				for(int i=0; i<rfiles.length; i++)
				{
					if(rfiles[i].isFile())
					{
						filedown = rfiles[i].getName();
						filedownPath = filePath + filedown;
						System.out.println("filepath :" + filedownPath);

						File fis = new File(filedownPath);
						in_stream = new BufferedInputStream(new FileInputStream(fis));
						
						ZipEntry zentry = new ZipEntry(filedown);
						zentry.setTime(fis.lastModified());
						zout_stream.putNextEntry(zentry);
						
						byte[] buffer = new byte[1024];
						int n = 0;
						while ((n = in_stream.read(buffer, 0, 1024)) != -1)
						{
							zout_stream.write(buffer, 0, n);
						}
						
						zout_stream.closeEntry();							
					}
				}
			}			
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		finally
		{
			if (zout_stream != null)
			{
				try
				{
					zout_stream.close();
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
		}	
	}
	else
	{
		filePath = contextRealPath + folderName + File.separator + filename;
	
		System.out.println("filepath :" + filePath);
	
		byte[] buffer = new byte[1024];

		ServletOutputStream out_stream	= null;
		BufferedInputStream in_stream	= null;

		File fis = new File(filePath);

		if(fis.exists())
		{
			System.out.println("filepath : fis.exists()-->" + filename);

			try
			{
				response.setContentType("application/octet;charset=utf-8");
				//response.setHeader("Content-Disposition", "attachment; filename = \"" + filename + "\"");
				response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(getName.getBytes("utf-8"), "ISO8859_1") + "\"");
				response.setHeader("Content-Transper-Encoding", "binary");
				response.setHeader("Content-Length", "" + String.valueOf(fis.length()));
				response.setHeader("Pargma", "no-cache");
				response.setHeader("Expires", "-1");

				out.clear();
				out = pageContext.pushBody();

				out_stream = response.getOutputStream();
				in_stream = new BufferedInputStream(new FileInputStream(fis));

				int n = 0;
				while ((n = in_stream.read(buffer, 0, 1024)) != -1)
				{
					out_stream.write(buffer, 0, n);
				}

				System.out.println("fileDownload filename==>"+filename + ", OK!!! ");
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
	}
%>

