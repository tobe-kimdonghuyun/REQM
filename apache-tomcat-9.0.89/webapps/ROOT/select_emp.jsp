<%@page import="java.math.RoundingMode"%>
<%@page import="java.math.BigDecimal"%>
<%@ page import = "org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ page contentType = "text/xml; charset=UTF-8" %>

<%
// PlatformData
PlatformData out_pData = new PlatformData();
String sDept = (request.getParameter("sDept") == null) ? "" : request.getParameter("sDept");
	
int    nErrorCode  = 0;
String strErrorMsg = "START";

try {    
	/******* JDBC Connection *******/
	Connection conn = null;
	Statement  stmt = null;
	ResultSet  rs   = null;
	PreparedStatement pstmt = null;
	
	//try { 		

	    String driverName="com.mysql.jdbc.Driver";
	    String url = "jdbc:mysql://localhost:3306/";
	    String id = "root"; // MySQL ID
	    String pwd ="!kjh2362";     // MYSQL Password	    
	    
	    //try{
	        //[1] JDBC 드라이버 로드
	        //Class.forName(driverName);     
	    //}catch(ClassNotFoundException e){
	        //out.println("Where is your mysql jdbc driver?");
	        //e.printStackTrace();
	    //    return;
	    //}
	    //out.println("mysql jdbc Driver registered!!");
	   
	    //[2]데이타베이스 연결 
	    //conn = DriverManager.getConnection(url,id,pwd);
	    //out.println("DB연결성공!!");
	    
	    //pstmt = conn.prepareStatement("SELECT * FROM `world`.`vpt_rid_info` order by userid");
	    
	    //rs = pstmt.executeQuery();
		
	  
	    
	    
		DataSet ds = new DataSet("out_ds");

		ds.addColumn("RID" 	  ,DataTypes.BIG_DECIMAL  ,(short)10 );
		ds.addColumn("HRID"  ,DataTypes.STRING  ,(short)50 );
		ds.addColumn("STATUS"    ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("FINGERPRINT"     ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("AUTH_TYPE"     ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("USERID"  ,DataTypes.DATE    ,(short)10 );
		ds.addColumn("CURRENT_PUB"    ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("CURRENT_SEED"     ,DataTypes.INT     ,(short)10 );
		ds.addColumn("KEY_CHANGE_DATE"       ,DataTypes.STRING  ,(short)10 );
			
		//while(rs.next())
		//{
			
			int row = ds.newRow();
			
			
			ds.set(row ,"RID"       , "0.0000005");
			ds.set(row ,"HRID"     ,"111");
			ds.set(row ,"STATUS"       ,"2");
			ds.set(row ,"FINGERPRINT"        ,"111");
			ds.set(row ,"AUTH_TYPE"        ,"Y");
			ds.set(row ,"USERID"     ,"111");
			ds.set(row ,"CURRENT_PUB"       ,"111");
			ds.set(row ,"CURRENT_SEED"        ,"111");
			ds.set(row ,"KEY_CHANGE_DATE"          ,"111");
			//ds.set(row ,"RID"       ,rs.getString("RID")  );
			//ds.set(row ,"HRID"     ,rs.getString("HRID"));
			//ds.set(row ,"STATUS"       ,rs.getString("STATUS")  );
			//ds.set(row ,"FINGERPRINT"        ,rs.getString("FINGERPRINT")   );
			//ds.set(row ,"AUTH_TYPE"        ,rs.getString("AUTH_TYPE")   );
			//ds.set(row ,"USERID"     ,rs.getString("USERID"));
			//ds.set(row ,"CURRENT_PUB"       ,rs.getString("CURRENT_PUB")  );
			//ds.set(row ,"CURRENT_SEED"        ,rs.getString("CURRENT_SEED")   );
			//ds.set(row ,"KEY_CHANGE_DATE"          ,rs.getString("KEY_CHANGE_DATE")     );
		//}
		  
		// #1 dataset -> PlatformData
		out_pData.addDataSet(ds);

		// #2 dataset -> PlatformData
		//DataSetList dsList = out_pData.getDataSetList();
		//dsList.add(ds);

		nErrorCode  = 0;
		strErrorMsg = "SUCC";
		//conn.close(); //대체로 finally 블록에 시스템 자원을 반납하는 Code를 넣는다.
	//} catch (SQLException e) {
	//	nErrorCode = -1;
	//	strErrorMsg = e.getMessage();
	//}    
	
	/******** JDBC Close ********/
	//if ( stmt != null ) try { stmt.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
	//if ( conn != null ) try { conn.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
			
	} catch (Throwable th) {
		nErrorCode = -1;
		strErrorMsg = th.getMessage();
}




VariableList varList = out_pData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg" , strErrorMsg);


/*
Variable varErrCD = new Variable("ErrorCode");
varErrCD.set(nErrorCode);

Variable varErrMSG = new Variable("ErrorMsg");
varErrMSG.set(strErrorMsg);

out_pData.addVariable(varErrCD);
out_pData.addVariable(varErrMSG);
*/
Thread.sleep(3000);

HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
pRes.setData(out_pData);

// Send data
pRes.sendData();
%>
