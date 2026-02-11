<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ page language="java"%>
<%@ page import="java.util.zip.ZipOutputStream"%>
<%@ page import="java.util.zip.ZipEntry"%>
<%@ page import="java.net.URLDecoder.*" %>
<%@ page import="java.io.BufferedInputStream"%>
<%@ page import="java.io.FileInputStream"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="jakarta.servlet.ServletException"%>
<%@ page import="jakarta.servlet.ServletOutputStream"%>
<%@ page import="jakarta.servlet.http.HttpServletRequest"%>
<%@ page import="jakarta.servlet.http.HttpServletResponse"%>

<%
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

