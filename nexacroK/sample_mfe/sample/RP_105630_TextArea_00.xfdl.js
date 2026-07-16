(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.TextArea("TextArea00","20","80","294","160",null,null,null,null,null,null,this);
            obj.set_scrollpropagation("both");
            obj.set_taborder("0");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button99","1970","1310","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button99");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea01","333","80","294","160",null,null,null,null,null,null,this);
            obj.set_scrollpropagation("none");
            obj.set_taborder("2");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea02","646","80","294","160",null,null,null,null,null,null,this);
            obj.set_scrollpropagation("vertical");
            obj.set_taborder("3");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea03","959","80","294","160",null,null,null,null,null,null,this);
            obj.set_scrollpropagation("horizontal");
            obj.set_taborder("4");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","20","20","223","40",null,null,null,null,null,null,this);
            obj.set_font("bold 32px/normal \"Malgun Gothic\"");
            obj.set_taborder("5");
            obj.set_text("TextArea");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","20","240","294","40",null,null,null,null,null,null,this);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("6");
            obj.set_text("scrollpropagation=both");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","333","240","294","40",null,null,null,null,null,null,this);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("7");
            obj.set_text("scrollpropagation=none");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","646","240","294","40",null,null,null,null,null,null,this);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("8");
            obj.set_text("scrollpropagation=vertical");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","959","240","294","40",null,null,null,null,null,null,this);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("9");
            obj.set_text("scrollpropagation=horizontal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","20","300","335","223",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea04","20","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_scrollpropagation("both");
            obj.set_taborder("0");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea05","333","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_scrollpropagation("none");
            obj.set_taborder("1");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea06","646","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_scrollpropagation("vertical");
            obj.set_taborder("2");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea07","959","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_scrollpropagation("horizontal");
            obj.set_taborder("3");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","20","20","223","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 32px/normal \"Malgun Gothic\"");
            obj.set_taborder("4");
            obj.set_text("TextArea");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","20","240","294","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("5");
            obj.set_text("scrollpropagation=both");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","333","240","294","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("6");
            obj.set_text("scrollpropagation=none");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static08","646","240","294","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("7");
            obj.set_text("scrollpropagation=vertical");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static09","959","240","294","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("8");
            obj.set_text("scrollpropagation=horizontal");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Div("Div01","374","300","335","223",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_taborder("11");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div02","44","40","335","223",null,null,null,null,null,null,this.Div01.form);
            obj.set_border("1px solid black");
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.Div01.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea08","20","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_scrollpropagation("both");
            obj.set_taborder("0");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea09","333","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_scrollpropagation("none");
            obj.set_taborder("1");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea10","646","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_scrollpropagation("vertical");
            obj.set_taborder("2");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea11","959","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_scrollpropagation("horizontal");
            obj.set_taborder("3");
            obj.set_value("허레쁜랑에서 농랴래나 운찐남고라곳개미를 새갈첸 제잦 모롭도자흔 지십을 \n네의안게는 늘거가다 록하만끄 앤은. 탼다는 트지옥그헙도 모일지 브비임리캐어야 운삐새온했을. \n앨유미맜비는커녕 덮어어달이 주깁느땀은 즈암시의 어채메고 조운카밯망은 굴맀미이면 암씬햐고 규에어우다가 럭놔자으겨가. \n집총닌다 히까의 겨그는으며 댕리삼의 콤륵싑. 다마사술글 매바를, 군호다가 단 더토시아아요. \n주한솔넨나랏에게 셈거각냄을 른갈에퍼기가 남밍라아, 거의며 러동. 지메거들랑 울천유 사납을 셔남힌은 호닉아이여딘도. \n\n코스를 훠앞한제나의 스사웍릴 마러코힌의, 알우분은 저타와. \n사디라여라 서고겍이 징젤다 헉징, 손모하쎼의. 드사꾸어 이사소임이게 이싀익더라니까 루마하 빠영호느냐고 스오가를 가깄서세다. \n겅김글운일 핑봉뢴부갸슨기산은 야쁴엥항염을 토아사자는 놜사꺼리 깅푱어안대로 믁숙히헹을. 기니뎽채에 러조거듸당을 게와카다 오어로 긴닥엔거한이 사브파빈은 이다가혼다. \n\n구갸기그뎐 바이됵과 굼알 차상까지 마그읍으로, 이여난 와오디허가. 빈솸고디에서 빙욉프 미안아 마아단은, 믄꼰을. 즈거를 히숀룅는 맣로 자아, 치링으로. 카벘디르만큼 만샌핌이 옹소혜폰담음, 닐간으로 러헤 엄사아모에, 가기더수. 어미리딀 졸로온도, 램여, 티간아 핸놈이 포뎃은. \n\n고가이걍 딘허를 앙미잔의 므인다, 뎅있넝즤의 디도, 이섯고. 앙잉히헷 으아느닜은.\n건게에, 긱호히에, 였응선이어 슥남은 와반, 로얼 긴귀훌듬 온하민 도네하우에게. \n팡셜언탈 마히는 듼리탄닌을 커으휨라그 러아헸는 으늑브읆다 스쿠괴는 온로 갠잔는 뎍되젬. 토역기가 싱둑오흐돈앳의 쎠냉저는.\n이건 쑙롤은 닷자두딘 먼권를기 흘알허히 오좀즈기 핳깅 롤엔스차 잃얀마드는데 읍합엉이다. \n늢루효본 뒁롸도딘장사가 넝매힝의 느군 라리을다다 미시의. \n보밥맙 시이태장을 지베싀에 둥겐죄렁빗 다닸로강도 코둩으어 둔옺우다. \n시가티전다 로게어도 툔아, 오인정은 아솝든이라 왈춨큽랍에 믁라아 렌산찬만.");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Static("Static10","20","20","223","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 32px/normal \"Malgun Gothic\"");
            obj.set_taborder("4");
            obj.set_text("TextArea");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Static("Static11","20","240","294","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("5");
            obj.set_text("scrollpropagation=both");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Static("Static12","333","240","294","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("6");
            obj.set_text("scrollpropagation=none");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Static("Static13","646","240","294","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("7");
            obj.set_text("scrollpropagation=vertical");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Static("Static14","959","240","294","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("8");
            obj.set_text("scrollpropagation=horizontal");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextAreaResult00","20","620","335","284",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("ButtonClear00","20","570","111","40",null,null,null,null,null,null,this);
            obj.set_font("bold 18px/normal \"Malgun Gothic\"");
            obj.set_taborder("13");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("ButtonClear01","375","570","111","40",null,null,null,null,null,null,this);
            obj.set_font("bold 18px/normal \"Malgun Gothic\"");
            obj.set_taborder("15");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("ButtonClear02","730","570","111","40",null,null,null,null,null,null,this);
            obj.set_font("bold 18px/normal \"Malgun Gothic\"");
            obj.set_taborder("17");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextAreaResult01","375","620","335","284",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextAreaResult02","730","620","335","284",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","725","300","111","40",null,null,null,null,null,null,this);
            obj.set_font("bold 10px/normal \"Malgun Gothic\"");
            obj.set_taborder("18");
            obj.set_text("scrollWidth/Height");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div02.form
            obj = new nexacro.Layout("default","",0,0,this.Div01.form.Div02.form,function(p){});
            this.Div01.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new nexacro.Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_105630_TextArea_00.xfdl", function(nexacro, system, trace, environment, application) {
        var app = nexacro.getApplication();
        var env = nexacro.getEnvironment();

        this.Form_Work_onload = function(obj,e)
        {
            this.TextAreaResult00.insertText("### Environment.scrollpropagation : " + env.scrollpropagation + " ###\n");
        };

        this.ButtonClear00_onclick = function(obj,e)
        {
        	this.TextAreaResult00.value = "";
        };

        this.ButtonClear01_onclick = function(obj,e)
        {
        	this.TextAreaResult01.value = "";
        };

        this.ButtonClear02_onclick = function(obj,e)
        {
        	this.TextAreaResult02.value = "";
        };

        this.Form_Work_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult00.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Form_Work_onhscroll = function(obj,e)
        {
        	this.TextAreaResult00.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Form_Work_onvscroll = function(obj,e)
        {
        	this.TextAreaResult00.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea00_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea00_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea00_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea01_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea01_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea01_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea02_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea02_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea02_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea03_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea03_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.TextArea03_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea04_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea04_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea04_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea05_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea05_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea05_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea06_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea06_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea06_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea07_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea07_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_TextArea07_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };


        this.Div01_Div02_TextArea08_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea08_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea08_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea09_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea09_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea09_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea10_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea10_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea10_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea11_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea11_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_TextArea11_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_onhscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_onvscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_onhscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_onvscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_onhscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_onvscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Button00_onclick = function(obj,e)
        {
            var formNode = this.getElement();
            this.TextAreaResult00.insertText("### Form Scroll Size ###\n");
            this.TextAreaResult00.insertText("scrollWidth: " + formNode.getElementScrollWidth() + "\n");
            this.TextAreaResult00.insertText("scrollHeight: " + formNode.getElementScrollHeight() + "\n");
            this.TextAreaResult00.insertText("clientWidth: " + formNode.getClientWidth() + "\n");
            this.TextAreaResult00.insertText("clientHeight: " + formNode.getClientHeight() + "\n");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onhscroll",this.Form_Work_onhscroll,this);
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onmousewheel",this.Form_Work_onmousewheel,this);
            this.addEventHandler("onvscroll",this.Form_Work_onvscroll,this);
            this.TextArea00.addEventHandler("onhscroll",this.TextArea00_onhscroll,this);
            this.TextArea00.addEventHandler("onmousewheel",this.TextArea00_onmousewheel,this);
            this.TextArea00.addEventHandler("onvscroll",this.TextArea00_onvscroll,this);
            this.TextArea01.addEventHandler("onhscroll",this.TextArea01_onhscroll,this);
            this.TextArea01.addEventHandler("onmousewheel",this.TextArea01_onmousewheel,this);
            this.TextArea01.addEventHandler("onvscroll",this.TextArea01_onvscroll,this);
            this.TextArea02.addEventHandler("onhscroll",this.TextArea02_onhscroll,this);
            this.TextArea02.addEventHandler("onmousewheel",this.TextArea02_onmousewheel,this);
            this.TextArea02.addEventHandler("onvscroll",this.TextArea02_onvscroll,this);
            this.TextArea03.addEventHandler("onhscroll",this.TextArea03_onhscroll,this);
            this.TextArea03.addEventHandler("onmousewheel",this.TextArea03_onmousewheel,this);
            this.TextArea03.addEventHandler("onvscroll",this.TextArea03_onvscroll,this);
            this.Div00.addEventHandler("onhscroll",this.Div00_onhscroll,this);
            this.Div00.addEventHandler("onmousewheel",this.Div00_onmousewheel,this);
            this.Div00.addEventHandler("onvscroll",this.Div00_onvscroll,this);
            this.Div00.form.TextArea04.addEventHandler("onhscroll",this.Div00_TextArea04_onhscroll,this);
            this.Div00.form.TextArea04.addEventHandler("onmousewheel",this.Div00_TextArea04_onmousewheel,this);
            this.Div00.form.TextArea04.addEventHandler("onvscroll",this.Div00_TextArea04_onvscroll,this);
            this.Div00.form.TextArea05.addEventHandler("onhscroll",this.Div00_TextArea05_onhscroll,this);
            this.Div00.form.TextArea05.addEventHandler("onmousewheel",this.Div00_TextArea05_onmousewheel,this);
            this.Div00.form.TextArea05.addEventHandler("onvscroll",this.Div00_TextArea05_onvscroll,this);
            this.Div00.form.TextArea06.addEventHandler("onhscroll",this.Div00_TextArea06_onhscroll,this);
            this.Div00.form.TextArea06.addEventHandler("onmousewheel",this.Div00_TextArea06_onmousewheel,this);
            this.Div00.form.TextArea06.addEventHandler("onvscroll",this.Div00_TextArea06_onvscroll,this);
            this.Div00.form.TextArea07.addEventHandler("onhscroll",this.Div00_TextArea07_onhscroll,this);
            this.Div00.form.TextArea07.addEventHandler("onmousewheel",this.Div00_TextArea07_onmousewheel,this);
            this.Div00.form.TextArea07.addEventHandler("onvscroll",this.Div00_TextArea07_onvscroll,this);
            this.Div01.addEventHandler("onhscroll",this.Div01_onhscroll,this);
            this.Div01.addEventHandler("onmousewheel",this.Div01_onmousewheel,this);
            this.Div01.addEventHandler("onvscroll",this.Div01_onvscroll,this);
            this.Div01.form.Div02.addEventHandler("onhscroll",this.Div01_Div02_onhscroll,this);
            this.Div01.form.Div02.addEventHandler("onmousewheel",this.Div01_Div02_onmousewheel,this);
            this.Div01.form.Div02.addEventHandler("onvscroll",this.Div01_Div02_onvscroll,this);
            this.Div01.form.Div02.form.TextArea08.addEventHandler("onhscroll",this.Div01_Div02_TextArea08_onhscroll,this);
            this.Div01.form.Div02.form.TextArea08.addEventHandler("onmousewheel",this.Div01_Div02_TextArea08_onmousewheel,this);
            this.Div01.form.Div02.form.TextArea08.addEventHandler("onvscroll",this.Div01_Div02_TextArea08_onvscroll,this);
            this.Div01.form.Div02.form.TextArea09.addEventHandler("onhscroll",this.Div01_Div02_TextArea09_onhscroll,this);
            this.Div01.form.Div02.form.TextArea09.addEventHandler("onmousewheel",this.Div01_Div02_TextArea09_onmousewheel,this);
            this.Div01.form.Div02.form.TextArea09.addEventHandler("onvscroll",this.Div01_Div02_TextArea09_onvscroll,this);
            this.Div01.form.Div02.form.TextArea10.addEventHandler("onhscroll",this.Div01_Div02_TextArea10_onhscroll,this);
            this.Div01.form.Div02.form.TextArea10.addEventHandler("onmousewheel",this.Div01_Div02_TextArea10_onmousewheel,this);
            this.Div01.form.Div02.form.TextArea10.addEventHandler("onvscroll",this.Div01_Div02_TextArea10_onvscroll,this);
            this.Div01.form.Div02.form.TextArea11.addEventHandler("onhscroll",this.Div01_Div02_TextArea11_onhscroll,this);
            this.Div01.form.Div02.form.TextArea11.addEventHandler("onmousewheel",this.Div01_Div02_TextArea11_onmousewheel,this);
            this.Div01.form.Div02.form.TextArea11.addEventHandler("onvscroll",this.Div01_Div02_TextArea11_onvscroll,this);
            this.ButtonClear00.addEventHandler("onclick",this.ButtonClear00_onclick,this);
            this.ButtonClear01.addEventHandler("onclick",this.ButtonClear01_onclick,this);
            this.ButtonClear02.addEventHandler("onclick",this.ButtonClear02_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("RP_105630_TextArea_00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
