<%@ page contentType="text/html; charset=euc-kr" %><%@ 
page language="java"%><%@ 
page import = "java.io.*" %><%@
page import = "java.util.*" %><%@
page import = "java.util.zip.*" %><%@ 
page import="com.nexacro.xapi.tx.*" %><%@ 
page import="com.nexacro.xapi.data.*" %><%@ 
page import="com.nexacro.xapi.data.datatype.*" %><%
	out.clear();       
    String strCharset = "euc-kr";

 	  
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_SSV, strCharset);
    platformRequest.receiveData();  
    PlatformData inPD = platformRequest.getData();

    VariableList inVariableList  = inPD.getVariableList();
    DataSetList inDataSetList   = inPD.getDataSetList();
  
    String nCnt 	=  inVariableList.getString("row_cnt");
    String type 	=  inVariableList.getString("type");
    String compress =  inVariableList.getString("compress"); 
    String JSESSIONID = inVariableList.getString("JSESSIONID");
         
    
    	type = "XML";
    
    if(compress==null || compress.equals(""))
    	compress = "false";
	
    DataSet ds1 = inDataSetList.get("dsInput");
	//DataSet ds2 = inDataSetList.get("input2");
	//DataSet ds3 = inDataSetList.get("input3");
	
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();
    GZIPOutputStream gzipOut = null;
   


    DataSet outDataSet = null;
    try {
        outDataSet = new DataSet("dsMasterTemp");

        outDataSet.addColumn("CPRT_NM",        	DataTypes.STRING, 100);
        outDataSet.addColumn("CPRT_BIZ_NM", 	DataTypes.DECIMAL, 100);
		outDataSet.addColumn("PV_NM", 	DataTypes.STRING, 100);
		outDataSet.addColumn("SITE_NM", 	DataTypes.STRING, 100);
		outDataSet.addColumn("PV_ID", 	DataTypes.STRING, 100);
		outDataSet.addColumn("PNT_BIZ_PRMSN_NO", 	DataTypes.STRING, 100);
		outDataSet.addColumn("ETBL_PRCS_STEP_CD", 	DataTypes.STRING, 100);

        int nRow;

		
     
            nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");
			
			nRow = outDataSet.newRow();
            outDataSet.set(nRow, "CPRT_NM","Ã¹¹øÂ° ´ñ±Û");
            outDataSet.set(nRow, "CPRT_BIZ_NM", 1);
			outDataSet.set(nRow, "PV_NM", "20250101");
			outDataSet.set(nRow, "SITE_NM", "11");
			outDataSet.set(nRow, "PV_ID", "1");
			outDataSet.set(nRow, "PNT_BIZ_PRMSN_NO", "1");
			outDataSet.set(nRow, "ETBL_PRCS_STEP_CD", "0");

  
        outDataSetList.add(outDataSet);

        outVariableList.add("ErrorCode", 0);
        outVariableList.add("ErrorMsg",  "SUCCESS");
		 

        outVariableList.add("strOutputData", nCnt);

    } catch(Exception e) {
		//excepttion Ã³¸® ½Ã ¿øÇÏ´Â ¿¡·¯¸Þ½ÃÁö¸¦ È­¸é¿¡ Àü¼Û°¡´É
        outVariableList.add("ErrorCode", -1020);
        outVariableList.add("ErrorMsg",  "Å×½ºÆ®Áß");
	
 
    } finally {

        outPD.setDataSetList(outDataSetList);
        outPD.setVariableList(outVariableList); 

        String Contents_type;  

        if(type.equals("SSV"))
        {
        	Contents_type = PlatformType.CONTENT_TYPE_SSV;
        } else if(type.equals("XML")) {
        	Contents_type = PlatformType.CONTENT_TYPE_XML;
        } else if(type.equals("ZLIB")) {  
        	Contents_type = PlatformType.CONTENT_TYPE_BINARY;
        } else {    
			    Contents_type = PlatformType.CONTENT_TYPE_XML;
        }  
        
        if(compress.equals("true"))
        {
        	 response.setHeader("Accept-Encoding", "gzip, deflate");
       	   	 response.setHeader("X-Compression", "gzip");
       	     response.setHeader("Content-Encoding", "gzip");
      	     response.setHeader("Content-Type", "text/xml");	

        	String RS = String.valueOf((char) 0x1e); //rs(record seperator)
    			String US = String.valueOf((char) 0x1f); //us(unit seperator)
    			StringBuffer sb = new StringBuffer();
    			sb.append("SSV:").append("euc-kr").append(RS); //Çì´õÀÇ Ã³À½ 4¹ÙÀÌÆ®´Â "SSV"·Î ½ÃÀÛ(53 53 56)
			
        	VariableList varLstOut = new VariableList();
        	varLstOut.add("ErrorCode", 0);
    		varLstOut.add("ErrorMsg", "Success!!!!"); 
    		if(varLstOut != null) {
    			int size = varLstOut.size();
    			
    			for(int i=0; i<size; i++) {
    				//Type »ý·«½Ã STRING À¸·Î °íÁ¤
    				Variable var = varLstOut.get(i);
    				sb.append(var.getName()).append("=").append(var.getString()); //°¢ Variable Àº US ·Î ±¸ºÐ
    				
    				if(i<size-1) {
    					sb.append(US);
    				}
    			}
    			sb.append(RS); 
    		}
    		
			sb.append("Dataset:").append("output").append(RS);  //µ¥ÀÌÅÍ¼Â »ý¼º
			sb.append("_RowType_"+US); 
			
			for(int i=0; i<outDataSet.getColumnCount(); i++) {
				sb.append(outDataSet.getColumn(i).getName());
				sb.append(":String(255)");
				if(i<outDataSet.getColumnCount()-1) {
					sb.append(US);
				}
			}
        	sb.append(RS);
        	
        	for(int totCnt=0; totCnt<outDataSet.getRowCount(); totCnt++) {
				sb.append("N"+US); //"N" is RowType. (N : Normal Record)
				for(int i=0; i<outDataSet.getColumnCount(); i++) {

					sb.append(outDataSet.getString(totCnt, i)); //Row Value
					if(i<outDataSet.getColumnCount()-1) {
						sb.append(US);
					}
				}
				sb.append(RS);   
			}
		
        	
        	gzipOut = getGZipOut(new BufferedOutputStream(response.getOutputStream())); 
        	
        	try{
        		flushBuffer(gzipOut, sb);
        		
	    	}
	    	catch(Exception e) { 
	    	}

       		if(gzipOut != null) {
       			try {
       				gzipOut.close();
       			} catch (IOException e) {
       				e.printStackTrace();
       			}
       		}
  

        } else {
        	HttpPlatformResponse res = new HttpPlatformResponse(response, Contents_type, "UTF-8");
        	res.setData(outPD);
	        res.sendData();     
        } 

    }
%><%!

//Respond to Client
	private void flushBuffer(GZIPOutputStream gzipOut, StringBuffer buff) {
		try {

			byte[] arrByteRslt = buff.toString().getBytes();
			gzipOut.write(arrByteRslt, 0, arrByteRslt.length);
			gzipOut.flush();
		} catch(Throwable th) {
			System.out.println("flushBuffer() Exception : "+th.getMessage());
		}
	}

	private GZIPOutputStream getGZipOut(BufferedOutputStream bous)  throws IOException {
		GZIPOutputStream gzip = new GZIPOutputStream(bous);
		return gzip;
	}

	public  PrintWriter getZipWriter(HttpServletResponse response) throws IOException{
		short TOBE_COMPRESS_MARK   = (short)0xFFAD;
		
		response.resetBuffer();
       	response.setContentType("application/octet-stream"); 
		
		DataOutputStream ostream = new DataOutputStream(response.getOutputStream());
		ostream.writeShort(TOBE_COMPRESS_MARK);
		
		DeflaterOutputStream compress = new DeflaterOutputStream(ostream);
		return new PrintWriter(compress);
	}
%>