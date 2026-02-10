<%@ page language="java" contentType="text/xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String userid = request.getParameter("userid");
    String username = request.getParameter("username");
%>
<Root xmlns="http://www.nexacroplatform.com/platform/dataset">
    <Parameters>
        <Parameter id="ErrorCode" type="int">0</Parameter>
        <Parameter id="ErrorMsg" type="string">Success (Mock)</Parameter>
    </Parameters>
    <Dataset id="output">
        <ColumnInfo>
            <Column id="IDX" type="string" size="5"/>
            <Column id="ObjectName" type="string" size="100"/>
            <Column id="ObjectID" type="string" size="200"/>
            <Column id="TestType" type="string" size="8"/>
            <Column id="TestObject" type="string" size="10"/>
            <Column id="TestValue" type="string" size="100"/>
            <Column id="ResultValue" type="string" size="10"/>
        </ColumnInfo>
        <Rows>
            <Row>
                <Col id="IDX">1</Col>
                <Col id="ObjectName">TestUser</Col>
                <Col id="ObjectID"><%= userid != null ? userid : "unknown" %></Col>
                <Col id="TestType">A</Col>
                <Col id="TestObject">Obj1</Col>
                <Col id="TestValue"><%= username != null ? username : "test" %></Col>
                <Col id="ResultValue">OK</Col>
            </Row>
        </Rows>
    </Dataset>
</Root>
