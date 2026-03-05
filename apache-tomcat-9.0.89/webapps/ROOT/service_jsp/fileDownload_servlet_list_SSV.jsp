<%@ page import="com.nexacro17.xapi.data.*"%>
<%@ page import="com.nexacro17.xapi.tx.*"%>

<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>

<%@ page import="org.apache.commons.logging.*" %>
<% 
	String filePath = request.getRealPath("./history") + "/"; //파일이 존재하는 실제경로
	String url = request.getRequestURL().substring(0, request.getRequestURL().lastIndexOf("/") - 3) + "history/";
	
	PlatformData resData = new PlatformData();
	
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
				//System.out.println(rfiles[i].getName());
				
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
	resData.addDataSet(ds);
	
	 PlatformResponse res = new PlatformResponse(out,PlatformType.CONTENT_TYPE_SSV); 
	 res.setData(resData); 
	 res.sendData();
%>
