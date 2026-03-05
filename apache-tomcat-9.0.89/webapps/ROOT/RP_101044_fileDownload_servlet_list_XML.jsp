<%@ page import="com.nexacro17.xapi.data.*"%>
<%@ page import="com.nexacro17.xapi.tx.*"%>

<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>

<%@ page import="org.apache.commons.logging.*" %>

<% 
	String filePath = request.getRealPath("./file") + "/"; //파일이 존재하는 실제경로
	String url = request.getRequestURL().substring(0, request.getRequestURL().lastIndexOf("/") - 3) + "nex/file/";

	System.out.println("filePath :" + filePath);
	System.out.println("url :" + url);

	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();
	
	DataSet ds = new DataSet("dsList");
	ds.addColumn("FILE_NAME", DataTypes.STRING, 255);
	ds.addColumn("FILE_URL", DataTypes.STRING, 255);
	ds.addColumn("DEPTH", DataTypes.STRING, 255);
	ds.addColumn("STATUS", DataTypes.STRING, 255);
	int row;

	File rf = new File(filePath); 
	File[] rfiles = rf.listFiles(); //파일의 리스트를 대입

	if(rfiles != null)
	{
		for(int i=0; i<rfiles.length; i++)
		{
			if(rfiles[i].isDirectory())		//histoy 폴더
			{
				row = ds.newRow();
				ds.set(row, "FILE_NAME", rfiles[i].getName());
				ds.set(row, "DEPTH", "0");
				if(!rfiles[i].getName().equals("temp"))
				{
					ds.set(row, "STATUS", "1");
				}
				
				File evf = new File(filePath + rfiles[i].getName());
				File[] evfiles = evf.listFiles();

				for(int j=0; j<evfiles.length; j++)
				{
					if(evfiles[j].isDirectory())		//각 환경 폴더
					{
						row = ds.newRow();
						ds.set(row, "FILE_NAME", evfiles[j].getName());
						//ds.set(row, "FILE_URL", url + rfiles[i].getName());
						ds.set(row, "DEPTH", "1");
						//ds.set(row, "STATUS", "1");
						
						File subf = new File(filePath + rfiles[i].getName() +"/"+ evfiles[j].getName());
						File[] subfiles = subf.listFiles();

						for(int k=0; k<subfiles.length; k++)
						{
							if(subfiles[k].isDirectory())		//id(날짜) 폴더
							{
								row = ds.newRow();
								ds.set(row, "FILE_NAME", subfiles[k].getName());
								//ds.set(row, "FILE_URL", url + rfiles[i].getName() +"/"+ evfiles[j].getName() +"/"+ subfiles[k].getName());
								ds.set(row, "DEPTH", "2");
								
								File sub2f = new File(filePath + rfiles[i].getName() +"/"+ evfiles[j].getName() +"/"+ subfiles[k].getName());								
								File[] sub2files = sub2f.listFiles();
								
								for(int q=0; q<sub2files.length; q++)
								{
									if(sub2files[q].isDirectory())		//service 폴더
									{
										row = ds.newRow();
										ds.set(row, "FILE_NAME", sub2files[q].getName());
										//ds.set(row, "FILE_URL", url + rfiles[i].getName() +"/"+ evfiles[j].getName() +"/"+ subfiles[k].getName() +"/"+ sub2files[q].getName());
										ds.set(row, "DEPTH", "3");							
									}
									
									if(sub2files[q].isFile())		//service 파일
									{
										row = ds.newRow();
										ds.set(row, "FILE_NAME", sub2files[q].getName());
										ds.set(row, "FILE_URL", url + rfiles[i].getName() +"/"+ evfiles[j].getName() +"/"+ subfiles[k].getName() +"/"+ sub2files[q].getName());
										ds.set(row, "DEPTH", "3");
									}
								}
							}
							
							if(subfiles[k].isFile())		//id(날짜) 파일
							{
								row = ds.newRow();
								ds.set(row, "FILE_NAME", subfiles[k].getName());
								ds.set(row, "FILE_URL", url + rfiles[i].getName() +"/"+ evfiles[j].getName() +"/"+ subfiles[k].getName());
								ds.set(row, "DEPTH", "2");
							}
						}
					}
					
					if(evfiles[j].isFile())		//각 환경 파일
					{
						row = ds.newRow();
						ds.set(row, "FILE_NAME", evfiles[j].getName());
						ds.set(row, "FILE_URL", url + rfiles[i].getName() +"/"+ evfiles[j].getName());
						ds.set(row, "DEPTH", "1");
					}
				}
			}
			
			if(rfiles[i].isFile())		//histoy 파일
			{ 
				row = ds.newRow();
				ds.set(row, "FILE_NAME", rfiles[i].getName());
				ds.set(row, "FILE_URL", url + rfiles[i].getName());
				ds.set(row, "DEPTH", "0");
			}
		}
	}
	else
	{
		System.out.println("rfiles is null");
	}

	resData.addDataSet(ds);
	resVarList.add("ErrorCode", 0);
	resVarList.add("ErrorMsg", "Success" );
		
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, request);
	pRes.setContentType(PlatformType.CONTENT_TYPE_XML);
	pRes.setCharset("UTF-8");
	pRes.setData(resData);
	pRes.sendData();
%>
