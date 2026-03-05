//XJS=lib_pagenavigationdesign.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        //한번에 보여질 페이지 갯수
        this.fv_listCount = 10;

        //페이지의 Row 갯수
        this.fv_pageCount = 20;

        //전체 페이지 갯수
        this.fv_pagesCount;

        //전체 Row 갯수
        this.fv_totalCount;

        //현재 페이지 Index
        this.fv_pageIdx;

        //현재 리스트의 Index
        this.fv_listIdx;

        //페이지 변경 후처리 함수
        this.fv_callbackFn;

        /**
        * @description 	     : 페이징 초기화 함수
        * @param nTotalCount  : 전체 Row 갯수
        *        nPageCount	 : 페이지별 Row 갯수
        *        nListCount	 : 한번에 보여질 페이지 갯수
        * @return            : 없음
        */
        this.initPages = function(nCurrentPage, nTotalCount, nPageCount, nListCount, sFnCallback)
        {
        	//전체 Row 갯수 설정하기
        	this.fv_totalCount = nTotalCount;

        	//페이지의 Row 갯수 설정하기
        	this.fv_pageCount = nPageCount;

        	//한번에 보여질 페이지 갯수 설정하기
        	this.fv_listCount = nListCount;

        	//페이지변경 후처리 함수 설정하기
        	this.fv_callbackFn = sFnCallback;

        	//전체 페이지 갯수 구하기
        	//전체 Row / 페이지의 Row 갯수
        	this.fv_pagesCount = nexacro.ceil(this.fv_totalCount/this.fv_pageCount);

        	//페이지가 1개 이상일 경우
        	if(this.fv_pagesCount>1)
        	{
        		if(this.btnFirst)this.btnFirst.set_visible(true);
        		if(this.btnPrev)this.btnPrev.set_visible(true);
        		if(this.btnNext)this.btnNext.set_visible(true);
        		if(this.btnLast)this.btnLast.set_visible(true);
        		// 주석처리 되어있어서 주석 제거
        		this.parent.set_visible(true);
        	}
        	//페이지가 1개 이거나 없을 경우
        	else
        	{
        		this.parent.set_visible(false);
        	}

        	//선택된 페이지 Index로 설정
        	this.fv_pageIdx = nexacro.toNumber(nCurrentPage)-1;

        	//페이지 범위를 벗어날 경우 보정
        	if(this.fv_pageIdx<0)this.fv_pageIdx = 0;
        	else if(this.fv_pageIdx>this.fv_pagesCount-1)this.fv_pageIdx = this.fv_pagesCount-1;

        	//페이지 Index를 기준으로 리스트 Index 구하기
        	this.fv_listIdx = nexacro.floor(this.fv_pageIdx / this.fv_listCount);

        	for(i=0;i<this.fv_listCount;i++)
        	{
        		//현재 리스트에 보여질 페이지 번호 구하기
        		nPageNum = (this.fv_listIdx * this.fv_listCount) + i + 1;

        		//페이지 버튼 컴포넌트 가져오기
        		objBtnPage = this.components["btn"+i];

        		//페이지 번호가 전체 페이지보다 작거나 같을 경우
        		//(조회된 페이지가 존재할 경우)
        		if(nPageNum<=this.fv_pagesCount)
        		{
        			//페이지 번호 설정
        			objBtnPage.set_text(nPageNum);
        			//페이지 버튼 visible true
        			objBtnPage.set_visible(true);

        			//현재 페이지일 경우 선택상태(disable)로 변경
        			if(nPageNum==this.fv_pageIdx+1) {
        				objBtnPage.cssclass = "btn_WF_PageNum_S";
        			} else {
        			//현재 페이지가 아닐 경우 비선택상태(enable)로 변경
        				objBtnPage.cssclass = "btn_WF_PageNum";
        			}

        		} else {
        			//존재하지 않는 페이지일 경우 페이지버튼 visible false
        			objBtnPage.cssclass = "btn_WF_PageNum";
        			objBtnPage.set_visible(false);
        		}
        	}
        }

        /**
        * @description 	     : 페이지 이동 함수
        * @param sPage  	 : 페이지번호 또는 이동타입(First, Prev, Next, Last)
        * @return            : 없음
        */
        this.setPage = function(sPage)
        {
        	//이동될 페이지 번호
        	var nPageNum;

        	//First 일 경우
        	if(sPage=="First")
        	{
        		//첫번째 페이지 Index로 설정
        		this.fv_pageIdx = 0;

        		//첫번째 리스트 Index로 설정
        		this.fv_listIdx = 0;
        	}
        	//Last 일 경우
        	else if(sPage=="Last")
        	{
        		//마지막 페이지 Index로 설정
        		this.fv_pageIdx = this.fv_pagesCount - 1;
        	}
        	//Prev 일 경우
        	else if(sPage=="Prev")
        	{
        		//현재 페이지 Index -1;
        		this.fv_pageIdx = this.fv_pageIdx-1;
        	}
        	//Next 일 경우
        	else if(sPage=="Next")
        	{
        		//현재 페이지 Index + 1;
        		this.fv_pageIdx = this.fv_pageIdx+1;
        	}else
        	{
        		//선택된 페이지 Index로 설정
        		this.fv_pageIdx = nexacro.toNumber(sPage)-1;
        	}

        	//페이지 범위를 벗어날 경우 보정
        	if(this.fv_pageIdx<0)this.fv_pageIdx = 0;
        	else if(this.fv_pageIdx>this.fv_pagesCount-1)this.fv_pageIdx = this.fv_pagesCount-1;

        	//페이지 Index를 기준으로 리스트 Index 구하기
        	this.fv_listIdx = nexacro.floor(this.fv_pageIdx / this.fv_listCount);


        	for(i=0;i<this.fv_listCount;i++)
        	{
        		//현재 리스트에 보여질 페이지 번호 구하기
        		nPageNum = (this.fv_listIdx * this.fv_listCount) + i + 1;

        		//페이지 버튼 컴포넌트 가져오기
        		objBtnPage = this.components["btn"+i];

        		//페이지 번호가 전체 페이지보다 작거나 같을 경우
        		//(조회된 페이지가 존재할 경우)
        		if(nPageNum<=this.fv_pagesCount)
        		{
        			//페이지 번호 설정
        			objBtnPage.set_text(nPageNum);


        			//페이지 버튼 visible true
        			objBtnPage.set_visible(true);

        			//현재 페이지일 경우 선택상태(disable)로 변경
        			if(nPageNum==this.fv_pageIdx+1) {
        				objBtnPage.cssclass = "btn_WF_PageNum_S";
        			} else {
        			//현재 페이지가 아닐 경우 비선택상태(enable)로 변경
        				objBtnPage.cssclass = "btn_WF_PageNum";
        			}
        		}else
        		{
        			//존재하지 않는 페이지일 경우 페이지버튼 visible false
        			objBtnPage.cssclass = "btn_WF_PageNum";
        			objBtnPage.set_visible(false);
        		}
        	}

        	//후처리 함수 호출
        	//this.fv_callbackFn(this.fv_pageIdx+1);
        	this.lookupFunc(this.fv_callbackFn).call(this.fv_pageIdx+1);
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
