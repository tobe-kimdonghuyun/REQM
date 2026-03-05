<%@ page language="java"%>
<%@ page import="org.apache.commons.logging.*" %>
<%@ page import="com.nexacro.xapi.tx.*" %>
<%@ page import="com.nexacro.xapi.data.*" %>
<%@ page import="com.nexacro.xapi.data.datatype.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@ page import="javax.sql.*" %>
<%@ page import="javax.naming.*" %> 
<%@ page contentType="text/xml; charset=UTF-8" %>
<%

out.clearBuffer();

String strCharset = "UTF-8";

//PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
PlatformRequest platformRequest = new PlatformRequest(request.getInputStream());
platformRequest.receiveData();
PlatformData inPD = platformRequest.getData();

VariableList    inVL  = inPD.getVariableList();

PlatformData o_xpData = new PlatformData();
    

int nErrorCode = 0;
String strErrorMsg = "START";

    //System.out.println("5초 대기 시작");
   // Thread.sleep(5000);
    //System.out.println("5초 대기 끝");

try
{

//System.out.println("aaa");
DataSet ds = new DataSet("output");
DataSet ds1 = new DataSet("output1");
DataSet ds2 = new DataSet("output2");

	  
ds.addColumn("Column0",DataTypes.STRING, (short)10);
ds.addColumn("Column1",DataTypes.STRING, (short)10);
ds.addColumn("Column2",DataTypes.STRING, (short)10);

ds1.addColumn("Column0",DataTypes.STRING, (short)10);
ds1.addColumn("Column1",DataTypes.STRING, (short)10);
ds1.addColumn("Column2",DataTypes.STRING, (short)10);

ds2.addColumn("Column0",DataTypes.STRING, (short)10);
ds2.addColumn("Column1",DataTypes.STRING, (short)10);
ds2.addColumn("Column2",DataTypes.STRING, (short)10);


int i,j,k;
 
for (i = 0; i < 10; i++)
{
	int row = ds.newRow();
	
	//System.out.println("row::: "+row);

	//ds.set(row, "col0", "不客气");
	//ds.set(row, "col1", "拜托你");
	//ds.set(row, "col2", "你会说英语吗");

	ds.set(row, "Column0", "가나다라");
	ds.set(row, "Column1", "123\n\r456");
	ds.set(row, "Column2", i + "-test3dd");
}

for (j = 0; j < 10; j++)
{
	int row1 = ds1.newRow();
	
	
}



for (k = 0; k < 10; k++)
{
	int row2 = ds2.newRow();
	
	ds2.set(row2, "Column0", k + "-TEST1dd");
	ds2.set(row2, "Column1", k);
	ds2.set(row2, "Column2", k + "-TEST3dd");
}

o_xpData.addDataSet(ds);
o_xpData.addDataSet(ds1);
o_xpData.addDataSet(ds2);

nErrorCode = -1;
strErrorMsg = "조회성공 -1 return";
} catch (Exception e) {
nErrorCode = -1;
strErrorMsg = e.getMessage();
}


VariableList varList = o_xpData.getVariableList();
		
//Thread.sleep(300000);	
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg", strErrorMsg);


HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
pRes.setData(o_xpData);

pRes.sendData();
%>	