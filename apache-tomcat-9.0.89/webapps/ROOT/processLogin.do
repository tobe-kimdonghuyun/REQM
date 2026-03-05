<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns="http://www.nexacroplatform.com/platform/dataset">
	<Parameters>
		<Parameter id="ErrorCode" type="int">0</Parameter>
		<Parameter id="ErrorMsg" type="string">&quot;사용자&#32;Login이&#32;성공했습니다.&quot;</Parameter>
	</Parameters>
	<Dataset id="dsStorage">
		<ColumnInfo>
			<Column id="STRG_ID" type="string" size="32"/>
			<Column id="STRG_SRV_ADDR" type="string" size="32"/>
			<Column id="STRG_PLC_IP" type="string" size="32"/>
			<Column id="TEMP_TO" type="float" size="4"/>
			<Column id="STRG_NAME" type="string" size="32"/>
			<Column id="STRG_DESC" type="string" size="32"/>
			<Column id="HUM_FROM" type="float" size="4"/>
			<Column id="STRG_IP" type="string" size="32"/>
			<Column id="TEMP_FROM" type="float" size="4"/>
			<Column id="STRG_PLC_PORT" type="string" size="32"/>
			<Column id="HUM_TO" type="float" size="4"/>
			<Column id="STRG_UUID" type="undefined" size="0"/>
			<Column id="STRG_SEQ" type="bigdecimal" size="8"/>
			<Column id="STRG_USE_YN" type="string" size="32"/>
			<Column id="STRG_SET_YN" type="string" size="32"/>
		</ColumnInfo>
		<Rows>
			<Row>
				<Col id="STRG_ID">str1</Col>
				<Col id="STRG_SRV_ADDR">http://172.10.11.185:9093/</Col>
				<Col id="STRG_PLC_IP">172.10.11.185</Col>
				<Col id="TEMP_TO">28.0</Col>
				<Col id="STRG_NAME">SMT&#32;#1</Col>
				<Col id="STRG_DESC">storage&#32;1</Col>
				<Col id="HUM_FROM">40.0</Col>
				<Col id="STRG_IP">172.10.11.205</Col>
				<Col id="TEMP_FROM">18.0</Col>
				<Col id="STRG_PLC_PORT">502</Col>
				<Col id="HUM_TO">60.0</Col>
				<Col id="STRG_SEQ">1</Col>
				<Col id="STRG_USE_YN">1</Col>
				<Col id="STRG_SET_YN">N</Col>
			</Row>
			<Row>
				<Col id="STRG_ID">str2</Col>
				<Col id="STRG_SRV_ADDR">http://localhost:9093</Col>
				<Col id="STRG_PLC_IP">172.10.11.185</Col>
				<Col id="TEMP_TO">28.0</Col>
				<Col id="STRG_NAME">SMT&#32;#2</Col>
				<Col id="STRG_DESC">storage&#32;2</Col>
				<Col id="HUM_FROM">40.0</Col>
				<Col id="STRG_IP">192.168.56.1</Col>
				<Col id="TEMP_FROM">18.0</Col>
				<Col id="STRG_PLC_PORT">502</Col>
				<Col id="HUM_TO">60.0</Col>
				<Col id="STRG_SEQ">2</Col>
				<Col id="STRG_USE_YN">1</Col>
				<Col id="STRG_SET_YN">N</Col>
			</Row>
			<Row>
				<Col id="STRG_ID">str3</Col>
				<Col id="TEMP_TO">28.0</Col>
				<Col id="STRG_NAME">SMT&#32;#3</Col>
				<Col id="STRG_DESC">storage&#32;3</Col>
				<Col id="HUM_FROM">40.0</Col>
				<Col id="TEMP_FROM">18.0</Col>
				<Col id="HUM_TO">60.0</Col>
				<Col id="STRG_SEQ">3</Col>
				<Col id="STRG_USE_YN">1</Col>
				<Col id="STRG_SET_YN">N</Col>
			</Row>
			<Row>
				<Col id="STRG_ID">str4</Col>
				<Col id="TEMP_TO">29.0</Col>
				<Col id="STRG_NAME">SMT&#32;#4</Col>
				<Col id="STRG_DESC">storage&#32;4</Col>
				<Col id="HUM_FROM">41.0</Col>
				<Col id="TEMP_FROM">19.0</Col>
				<Col id="HUM_TO">61.0</Col>
				<Col id="STRG_SEQ">4</Col>
				<Col id="STRG_USE_YN">1</Col>
				<Col id="STRG_SET_YN">N</Col>
			</Row>
			<Row>
				<Col id="STRG_ID">str5</Col>
				<Col id="TEMP_TO">28.0</Col>
				<Col id="STRG_NAME">삼성라인</Col>
				<Col id="STRG_DESC">삼성휴대폰기판</Col>
				<Col id="HUM_FROM">40.0</Col>
				<Col id="TEMP_FROM">18.0</Col>
				<Col id="HUM_TO">60.0</Col>
				<Col id="STRG_SEQ">5</Col>
				<Col id="STRG_USE_YN">1</Col>
				<Col id="STRG_SET_YN">Y</Col>
			</Row>
			<Row>
				<Col id="STRG_ID">str6</Col>
				<Col id="TEMP_TO">28.0</Col>
				<Col id="STRG_NAME">SMT&#32;#5</Col>
				<Col id="STRG_DESC">storage&#32;5</Col>
				<Col id="HUM_FROM">20.0</Col>
				<Col id="TEMP_FROM">18.0</Col>
				<Col id="HUM_TO">30.0</Col>
				<Col id="STRG_SEQ">6</Col>
				<Col id="STRG_USE_YN">1</Col>
				<Col id="STRG_SET_YN">N</Col>
			</Row>
		</Rows>
	</Dataset>
	<Dataset id="dsLoginUser">
		<ColumnInfo>
			<Column id="WKDT_CD" type="string" size="32"/>
			<Column id="OCCU_CD" type="string" size="32"/>
			<Column id="SYTM_FLAG_CD" type="string" size="32"/>
			<Column id="USER_ID" type="string" size="32"/>
			<Column id="MOB_YN" type="string" size="32"/>
			<Column id="USER_CON_IPADDR_SRV" type="string" size="32"/>
			<Column id="DEPT_NM" type="string" size="32"/>
			<Column id="THEME_ID" type="string" size="32"/>
			<Column id="PERM_ID" type="string" size="32"/>
			<Column id="STATUS" type="string" size="32"/>
			<Column id="BROWSER_CD" type="string" size="32"/>
			<Column id="SCREEN_HEIGHT" type="string" size="32"/>
			<Column id="BROWSER_VERSION" type="string" size="32"/>
			<Column id="SCREEN_WIDTH" type="string" size="32"/>
			<Column id="EMP_NO" type="string" size="32"/>
			<Column id="LOG_TYPE" type="string" size="32"/>
			<Column id="USER_ID_SRV" type="string" size="32"/>
			<Column id="OS_CD" type="string" size="32"/>
			<Column id="LANGUAGE" type="undefined" size="0"/>
			<Column id="USER_FLAG_CD" type="string" size="32"/>
			<Column id="USER_NAME" type="string" size="32"/>
			<Column id="WKGD_CD" type="string" size="32"/>
			<Column id="DEPT_CD" type="string" size="32"/>
			<Column id="NXS_VERSION" type="string" size="32"/>
			<Column id="OS_VERSION" type="string" size="32"/>
			<Column id="LOIN_FLAG_CD" type="string" size="32"/>
			<Column id="HOOF_STAT_CD" type="string" size="32"/>
			<Column id="CHAG_WORK" type="string" size="32"/>
		</ColumnInfo>
		<Rows>
			<Row>
				<Col id="WKDT_CD">0050</Col>
				<Col id="OCCU_CD">0053</Col>
				<Col id="SYTM_FLAG_CD">NXS</Col>
				<Col id="USER_ID">0000000003</Col>
				<Col id="MOB_YN">0</Col>
				<Col id="USER_CON_IPADDR_SRV">172.17.0.1</Col>
				<Col id="DEPT_NM">전사PMO팀</Col>
				<Col id="THEME_ID">01</Col>
				<Col id="PERM_ID"></Col>
				<Col id="STATUS">OK</Col>
				<Col id="BROWSER_CD">Edge</Col>
				<Col id="SCREEN_HEIGHT">1080</Col>
				<Col id="BROWSER_VERSION">142</Col>
				<Col id="SCREEN_WIDTH">1920</Col>
				<Col id="EMP_NO">ugis</Col>
				<Col id="LOG_TYPE">LOGIN</Col>
				<Col id="USER_ID_SRV">0000000003</Col>
				<Col id="OS_CD">Windows</Col>
				<Col id="USER_FLAG_CD">RW</Col>
				<Col id="USER_NAME">조한형</Col>
				<Col id="WKGD_CD">0080</Col>
				<Col id="DEPT_CD">1010100</Col>
				<Col id="NXS_VERSION">D251110.01</Col>
				<Col id="OS_VERSION">11</Col>
				<Col id="LOIN_FLAG_CD">0010</Col>
				<Col id="HOOF_STAT_CD">HO</Col>
				<Col id="CHAG_WORK">&#32;</Col>
			</Row>
		</Rows>
	</Dataset>
</Root>
