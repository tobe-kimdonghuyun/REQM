<%@ page import = "org.apache.commons.logging.*" %>
<%--@ page import = "com.nexacro.java.xapi.data.*" --%>
<%--@ page import = "com.nexacro.java.xapi.tx.*" --%>
<%@ page import = "com.nexacro17.xapi.data.*" %>
<%@ page import = "com.nexacro17.xapi.tx.*" %>
<%--@ page import = "com.nexacro.xapi.data.*" --%>
<%--@ page import = "com.nexacro.xapi.tx.*" --%>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ page contentType = "text/xml; charset=UTF-8" %>
<%-- <%@ include file="../connection_edu.jsp" %> --%>
<%
// PlatformData
PlatformData out_pData = new PlatformData();

String a = (request.getParameter("a") == null) ? "" : request.getParameter("a");
String sDept = (request.getParameter("sDept") == null) ? "" : request.getParameter("sDept");

int    nErrorCode  = 0;
String strErrorMsg = "START";

/*strArgument로 가져온 객체 값 확인 start*/
PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML);
platformRequest.receiveData();
PlatformData in_pData = platformRequest.getData();
//System.out.println(in_pData);
/*
String sMulti = (in_pData.getVariable("sMulti").getString() == null) ? "" : in_pData.getVariable("sMulti").getString();
String sChkSet = (in_pData.getVariable("sChkSet").getString() == null) ? "" : in_pData.getVariable("sChkSet").getString();

Object sMulti = (in_pData.getVariable("sMulti").getObject() == null) ? "" : in_pData.getVariable("sMulti").getObject();
Object sChkSet = (in_pData.getVariable("sChkSet").getObject() == null) ? "" : in_pData.getVariable("sChkSet").getObject();

System.out.println("sMulti :: "+(in_pData.getVariable("sMulti").getObject() == null)+" / "+sMulti+" // sChkSet :: "+(in_pData.getVariable("sChkSet").getObject() == null)+" / "+sChkSet);
*/
/*strArgument로 가져온 객체 값 확인 end*/

try {
		DataSet ds = new DataSet("output");
		ds.addColumn("COL0"     ,DataTypes.STRING     ,(short)10 );
		ds.addColumn("COL1"     ,DataTypes.STRING     ,(short)10 );

		for (int i = 0; i < 3; i++)
		{
			ds.newRow();
		}

			ds.set(0 ,"COL0"        ,"123"   );
			ds.set(1 ,"COL0"        ,"456"   );
			ds.set(2 ,"COL0"        ,"789"   );
			ds.set(0 ,"COL1"        ,"012"   );
			ds.set(1 ,"COL1"        ,"345"   );
			ds.set(2 ,"COL1"        ,"678"   );
		// }

		// #1 dataset -> PlatformData
		out_pData.addDataSet(ds);

		// #2 dataset -> PlatformData
		DataSetList dsList = out_pData.getDataSetList();
		dsList.add(ds);

		nErrorCode  = 0;
		strErrorMsg = "SUCC";

	} catch (Throwable th) {
		nErrorCode = -1;
		strErrorMsg = th.getMessage();
}

VariableList varList = out_pData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg" , strErrorMsg);



HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
pRes.setData(out_pData);

// Send data
pRes.sendData();
%>
