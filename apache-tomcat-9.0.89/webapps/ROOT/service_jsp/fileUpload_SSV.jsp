<%@ page contentType="text/html;charset=utf-8" %><%@ 
 page language="java"%><%@
page import="java.io.File"%><%@
page import="java.io.IOException"%><%@ 
 page import="java.util.ArrayList"%><%@ 
 page import="java.util.Enumeration"%><%@ 
 page import="java.util.Iterator"%><%@ 
 page import="java.util.List"%><%@ 
 page import="javax.servlet.ServletException"%><%@ 
 page import="javax.servlet.http.HttpServletRequest"%><%@ 
 page import="javax.servlet.http.HttpServletResponse"%><%@
page import="com.oreilly.servlet.MultipartRequest"%><%@ 
 page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%><%@ 
 page import="com.nexacro.xapi.data.ColumnHeader"%><%@ 
 page import="com.nexacro.xapi.data.DataSet"%><%@ 
 page import="com.nexacro.xapi.data.DataTypes"%><%@ 
 page import="com.nexacro.xapi.data.PlatformData"%><%@ 
 page import="com.nexacro.xapi.data.VariableList"%><%@ 
 page import="com.nexacro.xapi.tx.*"%>
<% 
    String chkType = request.getHeader("Content-Type");
    if( chkType == null )
        return;

    request.setCharacterEncoding("utf-8");

    String contextRealPath = request.getSession().getServletContext().getRealPath("/");
    //String savePath = contextRealPath + "history";
    String savePath = contextRealPath + "nexacro17\\FileSample\\";
    int maxSize = 1000 * 1024 * 1024;

    PlatformData resData = new PlatformData();
    VariableList resVarList = resData.getVariableList();

    String sMsg = " A ";
    try {
        MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());

        Enumeration files = multi.getFileNames();

        // MultiPart 전송 파라메터는 MultipartRequest.getParamter 이용해야함 
        String Path = multi.getParameter("PATH");

        sMsg += "B ";

        DataSet ds = new DataSet("Dataset00");
        
        ds.addColumn(new ColumnHeader("ATT_ID", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("SEQ", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("JOB_CD", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("FILE_PATH", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("ATTFILE_NM", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("SAVEFILE_NM", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("FILE_SIZE", DataTypes.STRING));
        
        sMsg += "C ";

        String fileName="";
        String originalFileName = "";
        
        while (files.hasMoreElements()) {
                    sMsg += "D ";
                    String name = (String)files.nextElement();
                    originalFileName = multi.getOriginalFileName(name);
                    fileName = multi.getFilesystemName(name);
                    
                    File f = multi.getFile(name);

                    int row = ds.newRow();
                    ds.set(row, "ATTFILE_NM", originalFileName);
                    ds.set(row, "SAVEFILE_NM", fileName);
                    ds.set(row, "FILE_SIZE", f.length());
                    ds.set(row, "FILE_PATH", savePath);

                    if (f != null)
                    {
                        String size = Long.toString(f.length()/1024)+"KB";
                        ds.set(row, "FILE_SIZE", size);
                    }                    
                    sMsg += row +" ";
        }
        
        resData.addDataSet(ds);
        resVarList.add("ErrorCode", 200);
        resVarList.add("ErrorMsg", fileName);
    } 
    catch (Exception e) 
    {
        resVarList.add("ErrorCode", -500);
        resVarList.add("ErrorMsg", sMsg + " " + e);
    }

    PlatformResponse res = new PlatformResponse(out,PlatformType.CONTENT_TYPE_SSV);
    res.setCharset("UTF-8");
    res.setData(resData);
    res.sendData();
%>

