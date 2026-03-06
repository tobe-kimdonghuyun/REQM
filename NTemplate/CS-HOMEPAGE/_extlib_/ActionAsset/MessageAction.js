//==============================================================================
//	Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.MessageAction
// Group : Action
//==============================================================================
if (!nexacro.MessageAction)
{
	nexacro.MessageAction = function(id, parent)
	{
		nexacro.Action.call(this, id, parent);
		this.addEvent("canrun");
	};
	
	nexacro.MessageAction.prototype = nexacro._createPrototype(nexacro.Action, nexacro.MessageAction);
	nexacro.MessageAction.prototype._type_name = "MessageAction";
	
	//메시지 공통 데이터셋 정보 초기화
	nexacro.MessageAction.prototype.messagedataset = "gds_MessageCd";
	nexacro.MessageAction.prototype.codecolumn = "msg_code_id";
	nexacro.MessageAction.prototype.datacolumn = "msg_nation1";
	
	//===============================================================
	// nexacro.MessageAction : Create & Destroy
	//===============================================================
	nexacro.MessageAction.prototype.destroy = function()
	{
		nexacro.Action.prototype.destroy.call(this);
	};
	
	//===============================================================
	// nexacro.MessageAction : Method
	//===============================================================
	nexacro.MessageAction.prototype.run = function()
	{
		//TODO
		//canrun 이벤트의 리턴값이 false가 아닐경우
		if(this.on_fire_canrun("userdata")!=false)
		{
			//메시지 생성 함수 호출
			var message = this._MakeMessage();
			
			//messagetype이 confirm일 경우
			if(this.messagetype=="confirm")
			{
				//Confirm 호출
				var rtn = confirm(message);
				
				//리턴값에 따라 onsuccess or onerror 이벤트 호출
				if(rtn==true)
				{
					this.on_fire_onsuccess("userdata");
					return true;
				}else
				{
					this.on_fire_onerror("userdata");
					return false;
				}
			}
			//messagetype이 alert일 경우
			else
			{
				//Alert 호출
				alert(message);
				
				//onsuccess 이벤트 호출
				this.on_fire_onsuccess();
				return true;
			}
		}
		return true;
	};
	
	nexacro.MessageAction.prototype._MakeMessage = function()
	{
		var sMeesage = "";
		
		//공통 메시지 데이터셋 가져오기
		var objApp = nexacro.getApplication();
		var objDsMessage = objApp[this.messagedataset];
		
		//메시지 코드에 해당하는 데이터 찾기
		var nFRow = objDsMessage.findRow(this.codecolumn, this.messagecode);
		
		//공통 메시지가 존재할 경우
		if(nFRow>-1)
		{
			//코드에 해당하는 메시지 가져오기
			sMessage = objDsMessage.getColumn(nFRow, this.datacolumn);
			
			//치환 코드에 맞춰 메시지 변환
			sMessage = this._convertMessage(sMessage);
			
		}
		//공통 메시지가 존재하지 않을 경우
		else
		{
			//메시지 코드로 등록된 문자열을 메시지로 사용
			sMessage = this.messagecode;
		}
		
		sMessage = sMessage.replace(/\\n/g, String.fromCharCode(10));
		
		return sMessage;
	}
	
	nexacro.MessageAction.prototype._convertMessage = function(sMessage)
	{
		var nLength;
		
		//치환할 메시지가 있을 경우
		if(Array.isArray(this._messageparam)&&this._messageparam.length>0)
		{
			//메시지 치환
			nLength = this._messageparam.length;
			for(var i=0;i<nLength;i++)
			{
				sMessage = sMessage.replace("XX", this._messageparam[i]);
			}
		}
		
		//치환된 메시지 리턴
		return sMessage;
	}
	
	nexacro.MessageAction.prototype.messagecode = "";
	nexacro.MessageAction.prototype.set_messagecode = function (v)
	{
		// TODO : enter your code here.
		v = nexacro._toString(v);
		if (this.messagecode != v) {
			this.messagecode = v;
		}
	};
	
	nexacro.MessageAction.prototype.messageparam = "";
	nexacro.MessageAction.prototype._messageparam = [];
	nexacro.MessageAction.prototype.set_messageparam = function (v)
	{
		// TODO : enter your code here.
		v = nexacro._toString(v);
		if (this.messageparam != v) {
			this.messageparam = v;
			this._messageparam = v.split("|");
		}
	};
	
	nexacro.MessageAction.prototype.messagetype = "";
	nexacro.MessageAction.prototype.set_messagetype = function (v)
	{
		// TODO : enter your code here.
		v = nexacro._toString(v);
		if (this.messagetype != v) {
			this.messagetype = v;
		}
	};	
	
	nexacro.MessageAction.prototype.on_fire_canrun = function (userdata)
	{
		if (this.canrun && this.canrun._has_handlers)
		{
			var evt = new nexacro.ActionRunEventInfo(this, "canrun", userdata); //TODO
			return this.canrun._fireCheckEvent(this, evt);
		}
		return true;
	};
	
	nexacro.MessageAction.prototype.on_fire_onsuccess = function (userdata)
	{
		var event = this.onsuccess;
		if (event && event._has_handlers)
		{
			var evt = new nexacro.ActionSuccessEventInfo(this, "onsuccess", userdata); //TODO
			event._fireEvent(this, evt);
		}
	};
	
	nexacro.MessageAction.prototype.on_fire_onerror = function (userdata)
	{
		var event = this.onerror;
		if (event && event._has_handlers)
		{
			var evt = new nexacro.ActionErrorEventInfo(this, "onerror", userdata); //TODO
			event._fireEvent(this, evt);
		}
	};
	
}