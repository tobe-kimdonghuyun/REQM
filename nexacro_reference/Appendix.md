# nexacroN V24 — Appendix

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 27개

---

## Appendix

### Appendix


---

## Appendix > Constant

### Appendix_Constant


---

## Appendix > Dataset Expression

### Dataset Expression

**개요**

Dataset Expression 스크립트는 Grid 와 바인딩 되어 있는 DataSet 의 Row 별로 임의의 지정된 동작을 수행하게 하기 위한 기능입니다.

Dataset Expression 스크립트는 일반적으로 "Expr" 설정이 가능한 Grid 또는 Cell 의 속성에 "expr:" 의 접두어를 사용하여 정의합니다.
또한, Dataset의 getCaseSum(), filter(), findRowExpr() 등의 메소드에서 Expression 스크립트가 인자로 사용될 수 있습니다.

Grid 에 Dataset 의 데이터가 표시될 때 각 행(Row) 별로 임의의 동작을 수행하여 그 결과값을 표시하거나 활용할 수 있습니다.
Dataset Expression 스크립트는 넥사크로 Form 스크립트 문법에 따라 작성합니다.

**Additional Expression & Objects**

Dataset Expression 에는 Dataset 및 Column 을 처리하기 위해 다음과 같은 속성 및 예약어를 제공합니다.1. Additional Global Properties 1.1. Object property  1.1.1 dataset property       Expression 을 보유하는 컴포넌트에 바인드된 Dataset 을 지정하는 Property 입니다.	          ex)       <Cell text=”expr:dataset.rowcount”/>       // dataset 은 바인드된 Dataset 을 지시함       <Cell text=”expr:dataset.parent.func1()”/> // dataset 의 소속 parent(Form) 에 정의된 func1 함수를 실행함  1.1.2 comp property       Expression 을 보유하는 컴포넌트 자체를 지정하는 Property 입니다.       ex)       <Cell text=”expr:comp.parent.func1()”/>    // comp 의 소속 parent(Form) 에 정의된 func1 함수를 실행함 1.2. Dataset Row Iterator Properties   1.2.1 currow property       Dataset 에서 현재 Expression 을 실행하고 있는 Row Index.              ex)        <Cell text=”expr:dataset.getColumn(--currow, 'Column0') - Column0”/>  // 이전 Row 와의 차이를 계산  1.2.2 this property       Expression 을 보유하는 오브젝트를 지정하는 Property 입니다.       ex)	   <Band id="head" tooltiptext=”expr:this.col”> // this 는 Band 오브젝트를 지시함       <Cell text=”expr:this.col”/>                 // this 는 Cell 오브젝트를 지시함2. Column Identifier Reference    Expression 에 Dataset 의 Column ID 를 직접 사용할 수 있으며 그 결과는 Expression 을 실행하고 있는 Row 의 Column 값입니다.    단, 사칙, 비교 등의 연산을 수행하면 Primitive Value 로 변환하여 연산을 수행합니다.

**Execution Context**

Dataset Expression 은 Form Context 를 실행 기반으로 하므로 Form 에서 사용 가능한 속성이나 함수를 모두 사용할 수 있습니다.

Dataset Expression 은 'eval' 스크립트처럼 동작하지만 Form 과 Expression 스크립트의 Context 는 서로 독립되어 있어 Expression 스크립트에서 선언된 변수가 Form Context 에 영향을 미치지 않는다는 점에서 차이가 있습니다.
단, Form Context 에 정의된 변수는 Dataset Expression 스크립트의 Context 에서 읽거나 쓸 수 있고 변경된 값은 Form Context 에도 영향을 미칩니다.


---

## Appendix > Easing Functions List

### Easing Functions List

**Easing Functions**




---

## Appendix > Locale Code List

### Locale Code List

**Locale Code List**

	
		Locale Code
		Language
		Country
	

	
		aa_DJ
		Afar
		Djibouti
	

	
		aa_ER
		Afar
		Eritrea
	

	
		aa_ET
		Afar
		Ethiopia
	

	
		af_ZA
		Afrikaans
		South Africa
	

	
		ar_AE
		Arabic
		United Arab Emirates
	

	
		ar_BH
		Arabic
		Bahrain
	

	
		ar_DZ
		Arabic
		Algeria
	

	
		ar_EG
		Arabic
		Egypt
	

	
		ar_IN
		Arabic
		India
	

	
		ar_IQ
		Arabic
		Iraq
	

	
		ar_JO
		Arabic
		Jordan
	

	
		ar_KW
		Arabic
		kuwait
	

	
		ar_LB
		Arabic
		lebanon
	

	
		ar_LY
		Arabic
		Libyan Arab Jamahiriya
	

	
		ar_MA
		Arabic
		Morocco
	

	
		ar_OM
		Arabic
		Oman
	

	
		ar_QA
		Arabic
		Qatar
	

	
		ar_SA
		Arabic
		Saudi Arabia
	

	
		ar_SD
		Arabic
		Sudan
	

	
		ar_SY
		Arabic
		Syrian Arab Republic
	

	
		ar_TN
		Arabic
		Tunisia
	

	
		ar_YE
		Arabic
		Yemen
	

	
		as_IN
		Assamese
		India
	

	
		az_AZ
		Axerbaijani
		Azerbaijan
	

	
		be_BY
		Belarusian
		Belarus
	

	
		bg_BG
		Bulgarian
		Bulgaria
	

	
		bn_BD
		Bengali
		Bangladesh
	

	
		bn_IN
		Bengali
		India
	

	
		br_FR
		Breton
		France
	

	
		bs_BA
		Bosnian
		Bosnia and Herzegovina
	

	
		ca_AD
		Catalan
		Andorra
	

	
		ca_ES
		Catalan
		Spain
	

	
		ca_FR
		Catalan
		France
	

	
		ca_IT
		Catalan
		Italy
	

	
		cs_CZ
		Czech
		Czechia
	

	
		cy_GB
		Welsh
		United Kingdom
	

	
		da_DK
		Danish
		Denmark
	

	
		de_AT
		German
		Austria
	

	
		de_BE
		German
		Belgium
	

	
		de_CH
		German
		Switzerland
	

	
		de_DE
		German
		Germany
	

	
		de_LU
		German
		Luxembourg
	

	
		dz_BT
		Dzongkha
		Bhutan
	

	
		el_CY
		Modern Greek
		Cyprus
	

	
		el_GR
		Modern Greek
		Greece
	

	
		en_AU
		English
		Australia
	

	
		en_BW
		English
		Botswana
	

	
		en_CA
		English
		Canada
	

	
		en_DK
		English
		Denmark
	

	
		en_GB
		English
		United Kingdom
	

	
		en_GH
		English
		Ghana
	

	
		en_HK
		English
		Hong Kong
	

	
		en_IE
		English
		Ireland
	

	
		en_IN
		English
		India
	

	
		en_JM
		English
		Jamaica
	

	
		en_NL
		English
		Netherlands
	

	
		en_NZ
		English
		New Zealand
	

	
		en_PH
		English
		Philippines
	

	
		en_SG
		English
		Singapore
	

	
		en_US
		English
		United States of America
	

	
		en_ZA
		English
		South Africa
	

	
		en_ZW
		English
		Zambia
	

	
		es_AR
		Spanish
		Argentina
	

	
		es_BO
		Spanish
		Bolivia, Plurinational State of
	

	
		es_CL
		Spanish
		Chile
	

	
		es_CO
		Spanish
		Colombia
	

	
		es_CR
		Spanish
		Costa Rica
	

	
		es_DO
		Spanish
		dominican Republic
	

	
		es_EC
		Spanish
		Ecuador
	

	
		es_ES
		Spanish
		Spain
	

	
		es_GT
		Spanish
		Guatemala
	

	
		es_HN
		Spanish
		Honduras
	

	
		es_MX
		Spanish
		Mexico
	

	
		es_NI
		Spanish
		Nicaragua
	

	
		es_PA
		Spanish
		Panama
	

	
		es_PE
		Spanish
		Peru
	

	
		es_PR
		Spanish
		Puerto Rico
	

	
		es_PY
		Spanish
		Paraguay
	

	
		es_SV
		Spanish
		El Salvador
	

	
		es_US
		Spanish
		United States of America
	

	
		es_UY
		Spanish
		Uruguay
	

	
		es_VE
		Spanish
		Venezuela, bolivarian Republic of
	

	
		et_EE
		Estonian
		Estonia
	

	
		eu_ES
		Basque
		Spain
	

	
		fa_IR
		Persian
		Iran, Islamic Republic of
	

	
		fi_FI
		Finnish
		finland
	

	
		fo_FO
		Faroese
		Faroe Islands
	

	
		fr_BE
		French
		Belgium
	

	
		fr_CA
		French
		Canada
	

	
		fr_CH
		French
		Switzerland
	

	
		fr_FR
		French
		France
	

	
		fr_LU
		French
		Luxembourg
	

	
		fy_NL
		Western Frisian
		Netherlands
	

	
		ga_IE
		Irish
		Ireland
	

	
		gd_GB
		Scottish Gaelic
		United Kingdom
	

	
		gl_ES
		Galician
		Spain
	

	
		gu_IN
		Gujarati
		India
	

	
		gv_GB
		Manx
		United Kingdom
	

	
		he_IL
		Hebrew
		Israel
	

	
		hi_IN
		Hindi
		India
	

	
		hr_HR
		Croatian
		Croatia
	

	
		hu_HU
		Haitian
		Haiti
	

	
		hy_AM
		Armenian
		Armenia
	

	
		id_ID
		Indonesian
		Indonesia
	

	
		is_IS
		Icelandic
		Iceland
	

	
		it_CH
		Italian
		Switzerland
	

	
		it_IT
		Italian
		Italy
	

	
		iw_IL
		Hebrew
		Israel
	

	
		ja_JP
		Japanese
		Japan
	

	
		ka_GE
		Georgian
		Georgia
	

	
		kk_KZ
		Kazakh
		Kazakhstan
	

	
		kl_GL
		Kalaallisut
		Greenland
	

	
		km_KH
		Central Khmer
		Cambodia
	

	
		kn_IN
		Kannada
		India
	

	
		ko_KR
		Korean
		Korea, Republic of
	

	
		ku_TR
		Kurdish
		Turkey
	

	
		kw_GB
		Cornish
		United Kingdom
	

	
		ky_KG
		Kirghiz
		Kyrgyzstan
	

	
		lg_UG
		Ganda
		Uganda
	

	
		lo_LA
		Lao
		Lao People's Democratic Republic
	

	
		lt_LT
		Lithuanian
		Lithuania
	

	
		lv_LV
		Latvian
		Latvia
	

	
		mg_MG
		Malagasy
		Madagascar
	

	
		mi_NZ
		Maori
		New Zealand
	

	
		mk_MK
		Macedonian
		Macedonia, The Former Yugoslav Republic of
	

	
		ml_IN
		Malayalam
		India
	

	
		mn_MN
		Mongolian
		Mongolia
	

	
		mr_IN
		Marathi
		India
	

	
		ms_MY
		Malay (macrolanguage)
		Malaysia
	

	
		mt_MT
		Maltese
		Malta
	

	
		my_MM
		Burmese
		Myanmar [Burma]
	

	
		nb_NO
		Norwegian Bokmål
		Norway
	

	
		ne_NP
		Nepali
		Nepal
	

	
		nl_BE
		Dutch
		Belgium
	

	
		nl_NL
		Dutch
		Netherlands
	

	
		nn_NO
		Norwegian Nynorsk
		Norway
	

	
		no_NO
		Norwegian Bokmål
		Norway
	

	
		nr_ZA
		South Ndebele
		South Africa
	

	
		oc_FR
		Occitan
		France
	

	
		om_ET
		Oromo
		Ethiopia
	

	
		om_KE
		Oromo
		Kenya
	

	
		or_IN
		Oriya
		India
	

	
		pa_IN
		Panjabi
		India
	

	
		pa_PK
		Panjabi
		Pakistan
	

	
		pl_PL
		Polish
		Poland
	

	
		pt_BR
		Portuguese
		Brazil
	

	
		pt_PT
		Portuguese
		Portugal
	

	
		ro_RO
		Romanian
		Romania
	

	
		ru_RU
		Russian
		Russian Federation
	

	
		ru_UA
		Russian
		Ukraine
	

	
		rw_RW
		Kinyarwanda
		Rwanda
	

	
		se_NO
		Northern Sami
		Norway
	

	
		si_LK
		Sinhala
		Sri Lanka
	

	
		sk_SK
		Slovak
		Slovakia
	

	
		sl_SI
		Slovenian
		Slovenia
	

	
		so_DJ
		Somali
		Djibouti
	

	
		so_ET
		Somali
		Ethiopia
	

	
		so_KE
		Somali
		Kenya
	

	
		so_SO
		Somali
		Solmalia
	

	
		sq_AL
		Albanian
		Albania
	

	
		sr_CS
		Serbian
		Serbia
	

	
		sr_ME
		Serbian
		Montenegro
	

	
		sr_RS
		Serbian
		Serbia
	

	
		ss_ZA
		Swati
		South Africa
	

	
		st_ZA
		Southern Sotho
		South Africa
	

	
		sv_FI
		Swedish
		Finland
	

	
		sv_SE
		Swedish
		Sweden
	

	
		ta_IN
		Tamil
		India
	

	
		te_IN
		Telugu
		India
	

	
		tg_TJ
		Tajik
		Tajikistan
	

	
		th_TH
		Thai
		Thailand
	

	
		ti_ER
		Tigrinya
		Eritrea
	

	
		ti_ET
		Tigrinya
		Ethiopia
	

	
		tl_PH
		Tagalog
		Philippines
	

	
		tn_ZA
		Tswana
		South Africa
	

	
		tr_CY
		Turkish
		Cyprus
	

	
		tr_TR
		Turkish
		Turkey
	

	
		ts_ZA
		Tsonga
		South Africa
	

	
		tt_RU
		Tatar
		Russian Federation
	

	
		uk_UA
		Ukrainian
		Ukraine
	

	
		ur_PK
		Urdu
		Pakistan
	

	
		uz_UZ
		Uzbek
		Uzbekistan
	

	
		ve_ZA
		Venda
		South Africa
	

	
		vi_VN
		Vietnamese
		Viet Nam
	

	
		wa_BE
		Walloon
		Belgium
	

	
		xh_ZA
		Xhosa
		South Africa
	

	
		yi_US
		Yiddish
		United States of America
	

	
		zh_CN
		Chinese
		China
	

	
		zh_HK
		Chinese
		Hong Kong
	

	
		zh_SG
		Chinese
		Singapore
	

	
		zh_TW
		Chinese
		Taiwan
	

	
		zu_ZA
		Zulu
		South Africa


---

## Appendix > Named Color List

### Named Color List

**Named Color List**

	
		No.
		Color Name
		Color Code
	
	
		Hex RGB Code
		Decimal Code
	

	
		  1         
		aliceblue
		#F0F8FF
		16775408
	

	
		  2         
		antiquewhite
		#FAEBD7
		14150650
	

	
		  3         
		aqua
		#00FFFF
		16776960
	

	
		  4         
		aquamarine
		#7FFFD4
		13959039
	

	
		  5         
		azure
		#F0FFFF
		16777200
	

	
		  6         
		beige
		#F5F5DC
		14480885
	

	
		  7         
		bisque
		#FFE4C4
		12903679
	

	
		  8         
		black
		#000000
		0
	

	
		  9         
		blanchedalmond
		#FFEBCD
		13495295
	

	
		  10         
		blue
		#0000FF
		16711680
	

	
		  11         
		blueviolet
		#8A2BE2
		14822282
	

	
		  12         
		brown
		#A52A2A
		2763429
	

	
		  13         
		burlywood
		#DEB887
		8894686
	

	
		  14         
		cadetblue
		#5F9EA0
		10526303
	

	
		  15         
		chartreuse
		#7FFF00
		65407
	

	
		  16         
		chocolate
		#D2691E
		1993170
	

	
		  17         
		coral
		#FF7F50
		5275647
	

	
		  18         
		cornflowerblue
		#6495ED
		15570276
	

	
		  19         
		cornsilk
		#FFF8DC
		14481663
	

	
		  20         
		crimson
		#DC143C
		3937500
	

	
		  21         
		cyan
		#00FFFF
		16776960
	

	
		  22         
		darkblue
		#00008B
		9109504
	

	
		  23         
		darkcyan
		#008B8B
		9145088
	

	
		  24         
		darkgoldenrod
		#B8860B
		755384
	

	
		  25         
		darkgray
		#A9A9A9
		11119017
	

	
		  26         
		darkgreen
		#006400
		25600
	

	
		  27         
		darkgrey
		#A9A9A9
		11119017
	

	
		  28         
		darkkhaki
		#BDB76B
		7059389
	

	
		  29         
		darkmagenta
		#8B008B
		9109643
	

	
		  30         
		darkolivegreen
		#556B2F
		3107669
	

	
		  31         
		darkorange
		#FF8C00
		36095
	

	
		  32         
		darkorchid
		#9932CC
		13382297
	

	
		  33         
		darkred
		#8B0000
		139
	

	
		  34         
		darksalmon
		#E9967A
		8034025
	

	
		  35         
		darkseagreen
		#8FBC8F
		9419919
	

	
		  36         
		darkslateblue
		#483D8B
		9125192
	

	
		  37         
		darkslategray
		#2F4F4F
		5197615
	

	
		  38         
		darkslategrey
		#2F4F4F
		5197615
	

	
		  39         
		darkturquoise
		#00CED1
		13749760
	

	
		  40         
		darkviolet
		#9400D3
		13828244
	

	
		  41         
		deeppink
		#FF1493
		9639167
	

	
		  42         
		deepskyblue
		#00BFFF
		16760576
	

	
		  43         
		dimgray
		#696969
		6908265
	

	
		  44         
		dimgrey
		#696969
		6908265
	

	
		  45         
		dodgerblue
		#1E90FF
		16748574
	

	
		  46         
		firebrick
		#B22222
		2237106
	

	
		  47         
		floralwhite
		#FFFAF0
		15792895
	

	
		  48         
		forestgreen
		#228B22
		2263842
	

	
		  49         
		fuchsia
		#FF00FF
		16711935
	

	
		  50         
		gainsboro
		#DCDCDC
		14474460
	

	
		  51         
		ghostwhite
		#F8F8FF
		16775416
	

	
		  52         
		gold
		#FFD700
		55295
	

	
		  53         
		goldenrod
		#DAA520
		2139610
	

	
		  54         
		gray
		#808080
		8421504
	

	
		  55         
		green
		#008000
		32768
	

	
		  56         
		greenyellow
		#ADFF2F
		3145645
	

	
		  57         
		grey
		#808080
		8421504
	

	
		  58         
		honeydew
		#F0FFF0
		15794160
	

	
		  59         
		hotpink
		#FF69B4
		11823615
	

	
		  60         
		indianred
		#CD5C5C
		6053069
	

	
		  61         
		indigo
		#4B0082
		8519755
	

	
		  62         
		ivory
		#FFFFF0
		15794175
	

	
		  63         
		khaki
		#F0E68C
		9234160
	

	
		  64         
		lavender
		#E6E6FA
		16443110
	

	
		  65         
		lavenderblush
		#FFF0F5
		16118015
	

	
		  66         
		lawngreen
		#7CFC00
		64636
	

	
		  67         
		lemonchiffon
		#FFFACD
		13499135
	

	
		  68         
		lightblue
		#ADD8E6
		15128749
	

	
		  69         
		lightcoral
		#F08080
		8421616
	

	
		  70         
		lightcyan
		#E0FFFF
		16777184
	

	
		  71         
		lightgoldenrodyellow
		#FAFAD2
		13826810
	

	
		  72         
		lightgray
		#D3D3D3
		13882323
	

	
		  73         
		lightgreen
		#90EE90
		9498256
	

	
		  74         
		lightgrey
		#D3D3D3
		13882323
	

	
		  75         
		lightpink
		#FFB6C1
		12695295
	

	
		  76         
		lightsalmon
		#FFA07A
		8036607
	

	
		  77         
		lightseagreen
		#20B2AA
		11186720
	

	
		  78         
		lightskyblue
		#87CEFA
		16436871
	

	
		  79         
		lightslategray
		#778899
		10061943
	

	
		  80         
		lightslategrey
		#778899
		10061943
	

	
		  81         
		lightsteelblue
		#B0C4DE
		14599344
	

	
		  82         
		lightyellow
		#FFFFE0
		14745599
	

	
		  83         
		lime
		#00FF00
		65280
	

	
		  84         
		limegreen
		#32CD32
		3329330
	

	
		  85         
		linen
		#FAF0E6
		15134970
	

	
		  86         
		magenta
		#FF00FF
		16711935
	

	
		  87         
		maroon
		#800000
		128
	

	
		  88         
		mediumaquamarine
		#66CDAA
		11193702
	

	
		  89         
		mediumblue
		#0000CD
		13434880
	

	
		  90         
		mediumorchid
		#BA55D3
		13850042
	

	
		  91         
		mediumpurple
		#9370DB
		14381203
	

	
		  92         
		mediumseagreen
		#3CB371
		7451452
	

	
		  93         
		mediumslateblue
		#7B68EE
		15624315
	

	
		  94         
		mediumspringgreen
		#00FA9A
		10156544
	

	
		  95         
		mediumturquoise
		#48D1CC
		13422920
	

	
		  96         
		mediumvioletred
		#C71585
		8721863
	

	
		  97         
		midnightblue
		#191970
		7346457
	

	
		  98         
		mintcream
		#F5FFFA
		16449525
	

	
		  99         
		mistyrose
		#FFE4E1
		14804223
	

	
		  100         
		moccasin
		#FFE4B5
		11920639
	

	
		  101         
		navajowhite
		#FFDEAD
		11394815
	

	
		  102         
		navy
		#000080
		8388608
	

	
		  103         
		oldlace
		#FDF5E6
		15136253
	

	
		  104         
		olive
		#808000
		32896
	

	
		  105         
		olivedrab
		#6B8E23
		2330219
	

	
		  106         
		orange
		#FFA500
		42495
	

	
		  107         
		orangered
		#FF4500
		17919
	

	
		  108         
		orchid
		#DA70D6
		14053594
	

	
		  109         
		palegoldenrod
		#EEE8AA
		11200750
	

	
		  110         
		palegreen
		#98FB98
		10025880
	

	
		  111         
		paleturquoise
		#AFEEEE
		15658671
	

	
		  112         
		palevioletred
		#DB7093
		9662683
	

	
		  113         
		papayawhip
		#FFEFD5
		14020607
	

	
		  114         
		peachpuff
		#FFDAB9
		12180223
	

	
		  115         
		peru
		#CD853F
		4163021
	

	
		  116         
		pink
		#FFC0CB
		13353215
	

	
		  117         
		plum
		#DDA0DD
		14524637
	

	
		  118         
		powderblue
		#B0E0E6
		15130800
	

	
		  119         
		purple
		#800080
		8388736
	

	
		  120         
		red
		#FF0000
		255
	

	
		  121         
		rosybrown
		#BC8F8F
		9408444
	

	
		  122         
		royalblue
		#4169E1
		14772545
	

	
		  123         
		saddlebrown
		#8B4513
		1262987
	

	
		  124         
		salmon
		#FA8072
		7504122
	

	
		  125         
		sandybrown
		#F4A460
		6333684
	

	
		  126         
		seagreen
		#2E8B57
		5737262
	

	
		  127         
		seashell
		#FFF5EE
		15660543
	

	
		  128         
		sienna
		#A0522D
		2970272
	

	
		  129         
		silver
		#C0C0C0
		12632256
	

	
		  130         
		skyblue
		#87CEEB
		15453831
	

	
		  131         
		slateblue
		#6A5ACD
		13458026
	

	
		  132         
		slategray
		#708090
		9470064
	

	
		  133         
		slategrey
		#708090
		9470064
	

	
		  134         
		snow
		#FFFAFA
		16448255
	

	
		  135         
		springgreen
		#00FF7F
		8388352
	

	
		  136         
		steelblue
		#4682B4
		11829830
	

	
		  137         
		tan
		#D2B48C
		9221330
	

	
		  138         
		teal
		#008080
		8421376
	

	
		  139         
		thistle
		#D8BFD8
		14204888
	

	
		  140         
		tomato
		#FF6347
		4678655
	

	
		  141         
		turquoise
		#40E0D0
		13688896
	

	
		  142         
		violet
		#EE82EE
		15631086
	

	
		  143         
		wheat
		#F5DEB3
		11788021
	

	
		  144         
		white
		#FFFFFF
		16777215
	

	
		  145         
		whitesmoke
		#F5F5F5
		16119285
	

	
		  146         
		yellow
		#FFFF00
		65535
	

	
		  147         
		yellowgreen
		#9ACD32
		3329434


---

## Appendix > nexacrostudio Interface

### Appendix_nexacrostudio Interface


---

### 메서드 (Methods)

### findinFileText

**Description**

텍스트로 편집할 수 있는 파일 내의 지정된 라인에 캐럿을 위치시키는 메서드입니다.

**Syntax**

```javascript
nexacrostudio.findinFileText(prefixurl, line[, findText])
```

**Parameters**

```
	
		Parameters
		Description
	

	
		prefixurl
		TypeDefinition의 Service에 정의된 Prefix를 포함한 파일 경로를 설정합니다.
프로젝트 내 텍스트로 편집할 수 있는 파일을 설정할 수 있습니다.
- Base::test.xfdl
- theme::blue\\theme.xcss
	

	
		line
		캐럿이 위치할 파일 내의 라인 값을 설정합니다.
	

	
		findText
		line 값에 해당하는 라인 내에서 탐색할 텍스트를 설정합니다.
```

**Remark**

- 넥사크로 스튜디오 내에서 Add on 형태로 실행하는 경우에만 사용할 수 있습니다.

- prefixurl 값에 해당하는 파일이 열려 있지 않을 경우 편집 상태로 열고 캐럿을 지정한 위치로 이동합니다.

- line 값만 설정한 경우 해당 라인 맨 앞에 캐럿이 위치합니다.
  findText 값을 설정한 경우 해당하는 텍스트를 블럭으로 지정하고 캐럿은 텍스트 마지막 위치에 놓입니다.


---

### getFormImage

**Description**

Form(.xfdl) 디자인 이미지를 요청하고 반환받아 처리하는 메서드입니다.

**Syntax**

```javascript
nexacrostudio.getFormImage( prefixurl )
```

**Parameters**

```
	
		Parameters
		Description
	

	
		prefixurl
		TypeDefinition의 Service에 정의된 Prefix를 포함한 xfdl 파일 경로를 설정합니다.
```

**Return**

	
		Return Type
		Description
	

	
		String
		Form 실행 화면 이미지를 Base64로 인코딩된 이미지 데이터 문자열로 반환합니다.

**Remark**

- 넥사크로 스튜디오 내에서 Add on 형태로 실행하는 경우에만 사용할 수 있습니다.

- prefixurl 값은 nexacrostudio.request 메서드의 반환 값 중 "forms" 항목을 통해 확인할 수 있습니다.


---

### paste

**Description**

활성화된 편집창 캐럿 위치에 텍스트를 붙여넣기하는 메서드입니다.

**Syntax**

```javascript
nexacrostudio.paste(copyText)
```

**Parameters**

```
	
		Parameters
		Description
	

	
		copyText
		활성화된 편집창에 붙여넣기 할 텍스트를 설정합니다.
```

**Remark**

- 넥사크로 스튜디오 내에서 Add on 형태로 실행하는 경우에만 사용할 수 있습니다.

- 활성화된 편집창은 ADL 편집기, FDL 편집기, 스크립트 편집기, XCSS 편집기, XML 편집기, 텍스트 편집기가 실행되고 캐럿이 표시된 상태를 의미합니다.
  Add On 패널로 포커스를 이동한 후 메서드 실행 시 포커스는 직전 활성화된 편집창으로 이동하며 캐럿 위치 또는 블록이 설정된 상태에서 붙여넣기가 동작합니다.
  활성화된 편집창이 없는 경우에는 안내 메시지가 출력되며 붙여넣기가 동작하지 않습니다.


---

### request

**Description**

프로젝트 정보를 요청하고 반환받아 처리하는 메서드입니다.

**Syntax**

```javascript
nexacrostudio.request( requestType[, dataobjectID] );
```

**Parameters**

```
	
		Parameters
		Description
	

	
		requestType
		프로젝트에서 가져올 정보 타입을 설정합니다.
	

	
		dataobjectID
		request 메서드 호출 후 반환되는 정보를 저장할 DataObject 오브젝트의 id 속성값을 설정합니다.
DataObject 오브젝트는 Form이 아닌 Application Variables로 생성해야 합니다.
```

**Return**

	
		Return Type
		Description
	

	
		String
		requesttype 파라미터값에 따라 요청된 정보를 JSON 형식의 문자열로 반환합니다.

**Remark**

- 넥사크로 스튜디오 내에서 Add on 형태로 실행하는 경우에만 사용할 수 있습니다.

**Request Type**

	
		requesttype
		Description
	

	
		requesttype.all
		아래 requesttype으로 실행 시 반환되는 프로젝트 정보를 순서대로 나열해 반환하도록 요청합니다.
- requesttype.general
- requesttype.environment
- requesttype.typedefinition
- requesttype.applicationvariables
- requesttype.applications
- requesttype.forms
- requesttype.xscripts
	

	
		requesttype.general
		프로젝트에 사용하는 파일의 일반 정보를 요청합니다.
파일명, 파일타입, 경로, 수정일 정보를 반환합니다.
	

	
		requesttype.environment
		Environment 기본 정보(속성, 이벤트, 함수)와 아래 requesttype으로 실행 시 반환되는 Environment 정보를 나열해 반환하도록 요청합니다.
- requesttype.screeninfo
- requesttype.env_variables
- requesttype.env_cookies
- requesttype.env_httpheader

	

	
		requesttype.screeninfo
		Environment의 ScreenDefinition 정보를 요청합니다.
	

	
		requesttype.env_variables
		Environment의 Variables 정보를 요청합니다.
	

	
		requesttype.env_cookies
		Environment의 Cookies 정보를 요청합니다.
	

	
		requesttype.env_httpheader
		Environment의 HTTP Header 정보를 요청합니다.
	

	
		requesttype.typedefinition
		아래 requesttype으로 실행 시 반환되는 TypeDefinition 정보를 나열해 반환하도록 요청합니다.
- requesttype.modules
- requesttype.objects
- requesttype.services
- requesttype.protocoladaptors
- requesttype.deviceadaptors
	

	
		requesttype.modules
		TypeDefinition에 등록된 Modules 정보를 요청합니다.
	

	
		requesttype.objects
		TypeDefinition에 등록된 Objects 정보를 요청합니다.
	

	
		requesttype.services
		TypeDefinition에 등록된 Services 정보를 요청합니다.
	

	
		requesttype.protocoladaptors
		TypeDefinition에 등록된 ProtocolAdators 정보를 요청합니다.
	

	
		requesttype.deviceadaptors
		TypeDefinition에 등록된 DeviceAdaptors 정보를 요청합니다.
	

	
		requesttype.applicationvariables
		아래 requesttype으로 실행 시 반환되는 Application Variables 정보를 나열해 반환하도록 요청합니다.
- requesttype.app_datasets
- requesttype.app_variables
- requesttype.app_dataobjects
	

	
		requesttype.app_datasets
		Application Variables에 등록된 Datasets 정보를 요청합니다.
	

	
		requesttype.app_variables
		Application Variables에 등록된 Variables 정보를 요청합니다.
	

	
		requesttype.app_dataobjects
		Application Variables에 등록된 DataObjects 정보를 요청합니다.
	

	
		requesttype.applications
		프로젝트의 Applications 정보를 요청합니다.
	

	
		requesttype.forms
		프로젝트에 포함된 모든 xfdl 파일의 정보를 요청합니다.
	

	
		requesttype.xscripts
		프로젝트에 포함된 모든 xjs 파일의 정보를 요청합니다.
	

	
		requesttype.openfile
		활성화된 편집창으로 열려 있는 파일의 정보를 요청합니다.
반환되는 값은 Return Data 구조(openfile)을 참고하세요.
파일 형식에 따라 prefixurl, functions, script 값은 공백으로 표시될 수 있습니다.

열려 있는 파일 타입에 따라 반환되는 Return Data 세부 항목은 달라집니다.
아래 requesttype으로 실행 시 반환되는 Return Data 구조를 참고하세요.
- environment.xml > requesttype.environment
- appvariables.xml > requesttype.applicationvariables
- *.xadl > requesttype.applications
- *.xfdl > requesttype.forms
- *.xjs > requesttype.xscript

**Return Data 구조**

{	"general file information": [		{			"filename": "value",			"filetype": "value",			"filepath": "value",			"lastmodified": "value"		} // }, ... { ... }	],	"environment": {		"id": "environment.xml",		"filepath": "value",		"prefixurl": "value",		"properties": [			{				"name": "value",				"value": "value"			} // }, ... { ... }		],		"events": [			{				"name": "value",				"handler": "value"			} // }, ... { ... }		],		"screeninfo": [			{				"id": "value",				"properties": [					{						"name": "value",						"value": "value"					} // }, ... { ... }				]			} // }, ... { ... }		],		"variables": [			{				"id": "value",				"initval": "value"			} // }, ... { ... }		],		"cookies": [			{				"id": "value",				"secure": "value",				"initval": "value"			} // }, ... { ... }		],		"httpheader": [			{				"id": "value",				"initval": "value"			} // }, ... { ... }		],		"functions": [			{				"name": "value",				"owner": "value",				"parameter": "value"			} // }, ... { ... }		],		"script" : "var a = \"test\";\nvar b = \"test2\";",	 "contents" : "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n.."	},	"typedefintion": {		"id": "typedefinition.xml",		"filepath": "value",		"prefixurl": "value",		"modules": [			"value" //, ...		],		"objects": [			{				"type": "value",				"id": "value",				"classname": "value"			} //}, ... { ... }		],		"protocoladaptors": [			{				"id": "value",				"devicetype": "value,",				"windows_modulename": "value",				"windows_targetpath": "value"			} //}, ... { ... }		],		"deviceadaptors": [			{				"id": "value",				"classname": "value",				"configuration": [					{						"name": "value",						"value": "value"					} //}, ... { ... }				]			}		],		"services": [			{				"prefixid": "value",				"type": "value",				"url": "value",				"protocolid": "value"			},			{				"prefixid": "value",				"type": "value",				"url": "value",				"version": "value",				"cachelevel": "value",				"include_subdir": "value"			} //}, ... { ... }		],		"contents" : "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n.."	},	"appvariables": {		"id": "appvariables.xml",		"filepath": "value",		"prefixurl": "value",		"datasets": [			{				"id": "value",				"properties": [					{						"name": "value",						"value": "value"					} //}, ... { ... }				],				"events": [					{						"name": "value",						"handler": "value"					} // }, ... { ... }				],				"columns": [					{						"id": "value",						"type": "value",						"size": "value",						"datapath": "value"					} // }, ... { ... }				],				"rows": [					[						{							"id": "value",							"value": "value"						} // }, ... { ... }					] // ], ... [ ... ]				]			} // }, ... { ... }		],		"variables": [			{				"id": "value",				"initval": "value"			} // }, ... { ... }		],		"dataobjects": [			{				"id": "value",				"properties": [					{						"name": "value",						"value": "value"					} // }, ... { ... }				],				"events": [					{						"name": "value",						"handler": "value"					} // }, ... { ... }				]			}		],		"contents" : "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n.."	},	"applications": [		{			"id": "value",	     "filepath": "value",	     "prefixurl": "value",			"properties": [				{					"name": "value",					"value": "value"				} // }, ... { ... }			],			"events": [				{					"name": "value",					"handler": "value"				} // }, ... { ... }			],			"frames": [				{					"id": "value",					"classname": "value",					"properties": [						{							"name": "value",							"value": "value"						} // }, ... { ... }					],					"events": [						{							"name": "value",							"handler": "value"						} // }, ... { ... }					]				} // }, ... { ... }			],			"trays": [				{					"id": "value",					"properties": [						{							"name": "value",							"value": "value"						} // }, ... { ... }					],					"events": [						{							"name": "value",							"handler": "value"						} // }, ... { ... }					],					"popupmenuitems": [						{							"id": "value",							"properties": [								{									"name": "value",									"value": "value"								} // }, ... { ... }							],							"events": [								{									"name": "value",									"handler": "value"								} // }, ... { ... }							]						}					]				}			],			"functions": [				{					"name": "value",					"owner": "value",					"parameter": "value"				} // }, ... { ... }			],			"script" : "var a = \"test\";\nvar b = \"test2\";",			"contents" : "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n.."		}	],	"forms": [		{			"id": "value",			"filepath": "value",			"prefixurl": "value",			"properties": [				{					"name": "value",					"value": "value"				} // }, ... { ... }			],			"events": [				{					"name": "value",					"handler": "value"				} // }, ... { ... }			],			"layouts": [				{					"name": "value",					"properties": [						{							"name": "value",							"value": "value"						} // }, ... { ... }					]				}			],			"components": [				{					"id": "value",					"classname": "value",					"properties": [						{							"name": "value",							"value": "value"						} // }, ... { ... }					],					"events": [						{							"name": "value",							"handler": "value"						} // }, ... { ... }					]				} // }, ... { ... }			],			"objects": [				{					"id": "value",					"classname": "value",					"properties": [						{							"name": "value",							"value": "value"						} // }, ... { ... }					],					"events": [						{							"name": "value",							"handler": "value"						} // }, ... { ... }					],					// if dataset					"columns": [ 						{							"id": "value",							"type": "value",							"size": "value",							"datapath": "value"						} // }, ... { ... }					],					// if dataset					"rows": [						[							{								"id": "value",								"value": "value"							} // }, ... { ... }						] // ], ... [ ... ]					]				} // }, ... { ... }			],			"functions": [				{					"name": "value",					"owner": "value",					"parameter": "value"				} // }, ... { ... }			],			"script" : "var b = \"form scripts\";",			"contents" : "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<FDL version=\"2.1\">"		} // }, ... { ... }			],	"xscripts": [		{			"id": "value",			"filepath": "value",			"prefixurl": "value",			"functions": [				{					"name": "value",					"owner": "value",					"parameter": "value"				} // }, ... { ... }			],			"script" : "var a = 2;"			"contents" : "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<Script version=\"1.0\" type=\"xscript5.1\"><![CDATA[var a = 2;\r\n]]></Script>\r\n">"		} // }, ... { ... }	]}

**Return Data 구조 (openfile)**

﻿{	"openfile":  {		"id": "value",		"filepath": "value",		"prefixurl": "value",		"functions": [			{				"name": "value",				"owner": "value",				"parameter": "value"			} // }, ... { ... }		],		"script" : "var a = 2;"		"contents" : "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<Script version=\"1.0\" type=\"xscript5.1\"><![CDATA[var a = 2;\r\n]]></Script>\r\n">"	}}


---

## Appendix > OpenSource License

### OpenSource License

**Sqlite3**

SQLite Copyright

All of the deliverable code in SQLite has been dedicated to the public domain by the authors. All code authors, and representatives of the companies they work for, have signed affidavits dedicating their contributions to the public domain and originals of those signed affidavits are stored in a firesafe at the main offices of Hwaci. Anyone is free to copy, modify, publish, use, compile, sell, or distribute the original SQLite code, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means. 

The previous paragraph applies to the deliverable code in SQLite - those parts of the SQLite library that you actually bundle and ship with a larger application. Portions of the documentation and some code used as part of the build process might fall under other licenses. The details here are unclear. We do not worry about the licensing of the documentation and build code so much because none of these things are part of the core deliverable SQLite library. 

All of the deliverable code in SQLite has been written from scratch. No code has been taken from other projects or from the open internet. Every line of code can be traced back to its original author, and all of those authors have public domain dedications on file. So the SQLite code base is clean and is uncontaminated with licensed code from other projects. 

Obtaining An Explicit License To Use SQLite

Even though SQLite is in the public domain and does not require a license, some users want to obtain a license anyway. Some reasons for obtaining a license include: 

You are using SQLite in a jurisdiction that does not recognize the public domain. 
You are using SQLite in a jurisdiction that does not recognize the right of an author to dedicate their work to the public domain. 
You want to hold a tangible legal document as evidence that you have the legal right to use and distribute SQLite. 
Your legal department tells you that you have to purchase a license. 
If you feel like you really have to purchase a license for SQLite, Hwaci, the company that employs the architect and principal developers of SQLite, will sell you one. 

Contributed Code

In order to keep SQLite completely free and unencumbered by copyright, all new contributors to the SQLite code base are asked to dedicate their contributions to the public domain. If you want to send a patch or enhancement for possible inclusion in the SQLite source tree, please accompany the patch with the following statement: 

The author or authors of this code dedicate any and all copyright interest in this code to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this code under copyright law. 
We are not able to accept patches or changes to SQLite that are not accompanied by a statement such as the above. In addition, if you make changes or enhancements as an employee, then a simple statement such as the above is insufficient. You must also send by surface mail a copyright release signed by a company officer. A signed original of the copyright release should be mailed to:

Hwaci
6200 Maple Cove Lane
Charlotte, NC 28269
USA 
A template copyright release is available in PDF or HTML. You can use this release to make future changes.

**libxml2**

Except where otherwise noted in the source code (e.g. the files hash.c,
list.c and the trio files, which are covered by a similar licence but
with different Copyright notices) all the files are:

 Copyright (C) 1998-2003 Daniel Veillard.  All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is fur-
nished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FIT-
NESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
DANIEL VEILLARD BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CON-
NECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Except as contained in this notice, the name of Daniel Veillard shall not
be used in advertising or otherwise to promote the sale, use or other deal-
ings in this Software without prior written authorization from him.

**pcre**

PCRE LICENCE
------------

PCRE is a library of functions to support regular expressions whose syntax
and semantics are as close as possible to those of the Perl 5 language.

Release 8 of PCRE is distributed under the terms of the "BSD" licence, as
specified below. The documentation for PCRE, supplied in the "doc"
directory, is distributed under the same terms as the software itself.

The basic library functions are written in C and are freestanding. Also
included in the distribution is a set of C++ wrapper functions.


THE BASIC LIBRARY FUNCTIONS
---------------------------

Written by:       Philip Hazel
Email local part: ph10
Email domain:     cam.ac.uk

University of Cambridge Computing Service,
Cambridge, England.

Copyright (c) 1997-2010 University of Cambridge
All rights reserved.


THE C++ WRAPPER FUNCTIONS
-------------------------

Contributed by:   Google Inc.

Copyright (c) 2007-2010, Google Inc.
All rights reserved.


THE "BSD" LICENCE
-----------------

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice,
      this list of conditions and the following disclaimer.

    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

    * Neither the name of the University of Cambridge nor the name of Google
      Inc. nor the names of their contributors may be used to endorse or
      promote products derived from this software without specific prior
      written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.

End

**zlib**

Copyright (C) 1995-2010 Jean-loup Gailly and Mark Adler

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

  Jean-loup Gailly
  Mark Adler

**openssl**

LICENSE ISSUES
 ==============

 The OpenSSL toolkit stays under a dual license, i.e. both the conditions of
 the OpenSSL License and the original SSLeay license apply to the toolkit.
 See below for the actual license texts. Actually both licenses are BSD-style
 Open Source licenses. In case of any license issues related to OpenSSL
 please contact openssl-core@openssl.org.

 OpenSSL License
 ---------------

 Copyright (c) 1998-2008 The OpenSSL Project.  All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:

 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in
    the documentation and/or other materials provided with the
    distribution.

 3. All advertising materials mentioning features or use of this
    software must display the following acknowledgment:
    "This product includes software developed by the OpenSSL Project
    for use in the OpenSSL Toolkit. (http://www.openssl.org/)"

 4. The names "OpenSSL Toolkit" and "OpenSSL Project" must not be used to
    endorse or promote products derived from this software without
    prior written permission. For written permission, please contact
    openssl-core@openssl.org.

 5. Products derived from this software may not be called "OpenSSL"
    nor may "OpenSSL" appear in their names without prior written
    permission of the OpenSSL Project.

 6. Redistributions of any form whatsoever must retain the following
    acknowledgment:
    "This product includes software developed by the OpenSSL Project
    for use in the OpenSSL Toolkit (http://www.openssl.org/)"

 THIS SOFTWARE IS PROVIDED BY THE OpenSSL PROJECT ``AS IS'' AND ANY
 EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE OpenSSL PROJECT OR
 ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 OF THE POSSIBILITY OF SUCH DAMAGE.

 This product includes cryptographic software written by Eric Young
 (eay@cryptsoft.com).  This product includes software written by Tim
 Hudson (tjh@cryptsoft.com).


 Original SSLeay License
 -----------------------

 Copyright (C) 1995-1998 Eric Young (eay@cryptsoft.com)
 All rights reserved.

 This package is an SSL implementation written
 by Eric Young (eay@cryptsoft.com).
 The implementation was written so as to conform with Netscapes SSL.

 This library is free for commercial and non-commercial use as long as
 the following conditions are aheared to.  The following conditions
 apply to all code found in this distribution, be it the RC4, RSA,
 lhash, DES, etc., code; not just the SSL code.  The SSL documentation
 included with this distribution is covered by the same copyright terms
 except that the holder is Tim Hudson (tjh@cryptsoft.com).

 Copyright remains Eric Young's, and as such any Copyright notices in
 the code are not to be removed.
 If this package is used in a product, Eric Young should be given attribution
 as the author of the parts of the library used.
 This can be in the form of a textual message at program startup or
 in documentation (online or textual) provided with the package.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 3. All advertising materials mentioning features or use of this software
    must display the following acknowledgement:
    "This product includes cryptographic software written by
     Eric Young (eay@cryptsoft.com)"
    The word 'cryptographic' can be left out if the rouines from the library
    being used are not cryptographic related :-).
 4. If you include any Windows specific code (or a derivative thereof) from
    the apps directory (application code) you must include an acknowledgement:
    "This product includes software written by Tim Hudson (tjh@cryptsoft.com)"

 THIS SOFTWARE IS PROVIDED BY ERIC YOUNG ``AS IS'' AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 SUCH DAMAGE.

 The licence and distribution terms for any publically available version or
 derivative of this code cannot be changed.  i.e. this code cannot simply be
 copied and put under another distribution licence
 [including the GNU Public Licence.]

**SciTE**

License for Scintilla and SciTE

Copyright 1998-2002 by Neil Hodgson 

All Rights Reserved 

Permission to use, copy, modify, and distribute this software and its 
documentation for any purpose and without fee is hereby granted, 
provided that the above copyright notice appear in all copies and that 
both that copyright notice and this permission notice appear in 
supporting documentation. 

NEIL HODGSON DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS 
SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY 
AND FITNESS, IN NO EVENT SHALL NEIL HODGSON BE LIABLE FOR ANY 
SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES 
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, 
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER 
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE 
OR PERFORMANCE OF THIS SOFTWARE.

**V8 Script Engine**

Open source under the BSD License. 

Copyright ⓒ 2006-2011, the V8 project authors
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 
Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission. 
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

**libcurl**

COPYRIGHT AND PERMISSION NOTICE

 
Copyright (c) 1996 - 2014, Daniel Stenberg, .

 
All rights reserved.

 
Permission to use, copy, modify, and distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright
notice and this permission notice appear in all copies.

 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF THIRD PARTY RIGHTS. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
 

Except as contained in this notice, the name of a copyright holder shall not
be used in advertising or otherwise to promote the sale, use or other dealings
in this Software without prior written authorization of the copyright holder.

**freetype**

Copyright 2006-2014 by
David Turner, Robert Wilhelm, and Werner Lemberg.

This  file is  part of  the FreeType  project, and  may only  be used,
modified,  and distributed  under the  terms of  the  FreeType project
license,  LICENSE.TXT.  By  continuing to  use, modify,  or distribute
this file you  indicate that you have read  the license and understand
and accept it fully.

The  FreeType 2  font  engine is  copyrighted  work and  cannot be  used
legally  without a  software license.   In  order to  make this  project
usable  to a vast  majority of  developers, we  distribute it  under two
mutually exclusive open-source licenses.

This means  that *you* must choose  *one* of the  two licenses described
below, then obey  all its terms and conditions when  using FreeType 2 in
any of your projects or products.

  - The FreeType License, found in  the file `FTL.TXT', which is similar
    to the original BSD license *with* an advertising clause that forces
    you  to  explicitly cite  the  FreeType  project  in your  product's
    documentation.  All  details are in the license  file.  This license
    is  suited  to products  which  don't  use  the GNU  General  Public
    License.

    Note that  this license  is  compatible  to the  GNU General  Public
    License version 3, but not version 2.

  - The GNU General Public License version 2, found in  `GPLv2.TXT' (any
    later version can be used  also), for programs which already use the
    GPL.  Note  that the  FTL is  incompatible  with  GPLv2 due  to  its
    advertisement clause.

The contributed BDF and PCF drivers come with a license similar  to that
of the X Window System.  It is compatible to the above two licenses (see
file src/bdf/README and src/pcf/README).

The gzip module uses the zlib license (see src/gzip/zlib.h) which too is
compatible to the above two licenses.

The MD5 checksum support (only used for debugging in development builds)
is in the public domain.

----------------------------

   """
    Portions of this software are copyright (c) 2006-2014 The FreeType
    Project (www.freetype.org).  All rights reserved.
   """

Legal Terms
===========

0. Definitions
--------------

  Throughout this license, the terms `package', `FreeType Project',
  and  `FreeType  archive' refer  to  the  set  of files  originally
  distributed by the authors (David Turner,  Robert Wilhelm,  and
  Werner Lemberg) as the `FreeType Project', be they named as alpha,
  beta or final release.

`You' refers to the licensee, or person using the project, where 
`using' is a generic term including compiling the project's source
  code as well as linking it to form a `program' or `executable'.
  This program is referred to as `a program using the FreeType
  engine'.

  This license applies to all files distributed in the original
  FreeType Project, including all source code, binaries and
  documentation, unless otherwise stated in the file in its
  original, unmodified form as distributed in the original archive.
  If you are unsure whether or not a particular file is covered by
  This license, you must contact us to verify this.

  The FreeType Project is copyright (C) 1996-2000 by David Turner,
  Robert Wilhelm, and Werner Lemberg.  All rights reserved except as
  specified below.

1. No Warranty
--------------

  THE FREETYPE PROJECT IS PROVIDED `AS IS' WITHOUT WARRANTY OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE.  IN NO EVENT WILL ANY OF THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE  FOR ANY DAMAGES CAUSED  BY THE USE OR  THE INABILITY TO
  USE, OF THE FREETYPE PROJECT.

2. Redistribution
-----------------

  This license grants a worldwide, royalty-free, perpetual and
  irrevocable right and license to use, execute, perform, compile,
  display, copy, create derivative works of, distribute and
  sublicense the FreeType Project (in both source and object code
  forms) and derivative works thereof for any purpose; and to
  authorize others to exercise some or al of the rights granted
  herein, subject to the following conditions:

    o Redistribution of source code must retain this license file
      (`FTL.TXT') unaltered; any additions, deletions or changes to
      the original  files must be clearly  indicated in accompanying
      documentation. The copyright notices of the unaltered,
      original files must  be  preserved in  all  copies of  source
      files.

    o Redistribution in binary form must provide a  disclaimer  that
      states that the software is based in part of the work of the
      FreeType Team, in the distribution documentation.  We also
      encourage you to put an URL to the FreeType web page  in  your
      documentation, though this isn't mandatory.

  These conditions apply to any software derived from or based on
  the FreeType Project, not just the unmodified files. If you use
  our work, you must acknowledge us. However, no fee need be paid
  to us.

3. Advertising
--------------

  Neither the  FreeType authors and contributors nor you shall use
  the name of the other for commercial, advertising, or promotional
  purposes without specific prior written permission.

  We suggest, but do not require, that  you use one or  more of the
  following phrases to refer to this software in your documentation
  or advertising  materials: `FreeType Project',  `FreeType Engine',
  `FreeType library', or `FreeType Distribution'.

  As you have not signed this license, you are not required to
  accept it. However, as the FreeType Project is copyrighted
  material, only this license, or another one contracted with the
  authors, grants you the right to use, distribute, and modify it.
  Therefore, by using, distributing, or modifying the FreeType
  Project, you indicate that you understand and accept all the terms
  of this license.

4. Contacts
-----------

  There are two mailing lists related to FreeType:

    o freetype@nongnu.org

      Discusses general use and applications of FreeType, as well as
      future and  wanted additions to the  library and distribution.
      If  you are looking  for support,  start in  this list  if you
      haven't found anything to help you in the documentation.

    o freetype-devel@nongnu.org

      Discusses bugs,  as well  as engine internals,  design issues,
      specific licenses, porting, etc.

  Our home page can be found at

    http://www.freetype.org

**fontconfig**

Copyright ⓒ 2001, 2003 Keith Packard

Permission to use, copy, modify, distribute, and sell this software and its documentation for any purpose is hereby granted without fee, provided that the above copyright notice appear in all copies and that both that copyright notice and this permission notice appear in supporting documentation, and that the name of the author(s) not be used in advertising or publicity pertaining to distribution of the software without specific, written prior permission. The authors make no representations about the suitability of this software for any purpose. It is provided "as is" without express or implied warranty.

THE AUTHOR(S) DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, IN NO EVENT SHALL THE AUTHOR(S) BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

**libjpeg**

* Copyright (C) 1991-2013, Thomas G. Lane, Guido Vollbeding.
* This file is part of the Independent JPEG Group's software.
* For conditions of distribution and use, see the accompanying README file.

This distribution contains the ninth public release of the Independent JPEG Group’s free JPEG software. You are welcome to redistribute this software and to use it for any purpose, subject to the conditions under LEGAL ISSUES, below.

This software is the work of Tom Lane, Guido Vollbeding, Philip Gladstone,, Bill Allombert, Jim Boucher, Lee Crocker, Bob Friesenhahn, Ben Jackson, Julian Minguillon, Luis Ortiz, George Phillips, Davide Rossi, Ge’ Weijers, and other members of the Independent Jpeg Group.

IJG is not affiliated with the ISO/IEC JTC1/SC29/WG1 standards committee(also known as JPEG, together with ITU-T SG16)

**libpng**

COPYRIGHT NOTICE, DISCLAIMER, and LICENSE:

If you modify libpng you may insert additional notices immediately following
this sentence.

This code is released under the libpng license.

libpng versions 1.2.6, August 15, 2004, through 1.6.10, March 6, 2014, are Copyright (c) 2004, 2006-2014 Glenn Randers-Pehrson, and are distributed according to the same disclaimer and license as libpng-1.2.5
with the following individual added to the list of Contributing Authors

   Cosmin Truta

libpng versions 1.0.7, July 1, 2000, through 1.2.5 - October 3, 2002, are Copyright (c) 2000-2002 Glenn Randers-Pehrson, and are distributed according to the same disclaimer and license as libpng-1.0.6 with the following individuals added to the list of Contributing Authors

   Simon-Pierre Cadieux
   Eric S. Raymond
   Gilles Vollant

and with the following additions to the disclaimer:

   There is no warranty against interference with your enjoyment of the library or against infringement. There is no warranty that our efforts or the library will fulfill any of your particular purposes or needs.  This library is provided with all faults, and the entire risk of satisfactory quality, performance, accuracy, and effort is with the user.

libpng versions 0.97, January 1998, through 1.0.6, March 20, 2000, are Copyright (c) 1998, 1999 Glenn Randers-Pehrson, and are distributed according to the same disclaimer and license as libpng-0.96,
with the following individuals added to the list of Contributing Authors:

   Tom Lane
   Glenn Randers-Pehrson
   Willem van Schaik

libpng versions 0.89, June 1996, through 0.96, May 1997, are
Copyright (c) 1996, 1997 Andreas Dilger
Distributed according to the same disclaimer and license as libpng-0.88, with the following individuals added to the list of Contributing Authors:

   John Bowler
   Kevin Bracey
   Sam Bushell
   Magnus Holmgren
   Greg Roelofs
   Tom Tanner

libpng versions 0.5, May 1995, through 0.88, January 1996, are Copyright (c) 1995, 1996 Guy Eric Schalnat, Group 42, Inc.

For the purposes of this copyright and license, "Contributing Authors"is defined as the following set of individuals:

   Andreas Dilger
   Dave Martindale
   Guy Eric Schalnat
   Paul Schmidt
   Tim Wegner

The PNG Reference Library is supplied "AS IS". The Contributing Authors and Group 42, Inc. disclaim all warranties, expressed or implied, including, without limitation, the warranties of merchantability and of
fitness for any purpose.  The Contributing Authors and Group 42, Inc. assume no liability for direct, indirect, incidental, special, exemplary, or consequential damages, which may result from the use of the PNG Reference Library, even if advised of the possibility of such damage.

Permission is hereby granted to use, copy, modify, and distribute this source code, or portions hereof, for any purpose, without fee, subject to the following restrictions:

1. The origin of this source code must not be misrepresented.

2. Altered versions must be plainly marked as such and must not be misrepresented as being the original source.

3. This Copyright notice may not be removed or altered from any source or altered source distribution.

The Contributing Authors and Group 42, Inc. specifically permit, without fee, and encourage the use of this source code as a component to supporting the PNG file format in commercial products.  If you use this source code in a product, acknowledgment is not required but would be appreciated.


A "png_get_copyright" function is available, for convenient use in "about" boxes and the like:

   printf("%s",png_get_copyright(NULL));

Also, the PNG logo (in PNG format, of course) is supplied in the files "pngbar.png" and "pngbar.jpg (88x31) and "pngnow.png" (98x31).

Libpng is OSI Certified Open Source Software.  OSI Certified Open Source is a certification mark of the Open Source Initiative.

Glenn Randers-Pehrson
glennrp at users.sourceforge.net
March 6, 2014

**cvtutf**

Copyright 2001-2004 Unicode, Inc.

Disclaimer
 
This source code is provided as is by Unicode, Inc. No claims are made as to fitness for any particular purpose. No warranties of any kind are expressed or implied. The recipient agrees to determine applicability of information provided. If this file has been purchased on magnetic or optical media from Unicode, Inc., the sole remedy for any claim will be exchange of defective media within 90 days of receipt.

Limitations on Rights to Redistribute This Code

Unicode, Inc. hereby grants the right to freely use the information supplied in this file in the creation of products supporting the Unicode Standard, and to make copies of this file in any form for internal or external distribution as long as this notice remains attached.

**SBJson**

Copyright (C) 2007-2011 Stig Brautaset. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

   * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
   * Neither the name of the author nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

**minzip**

Version 1.1, February 14h, 2010
   part of the MiniZip project - ( http://www.winimage.com/zLibDll/minizip.html )

         Copyright (C) 1998-2010 Gilles Vollant (minizip) ( http://www.winimage.com/zLibDll/minizip.html )

         Modifications for Zip64 support
         Copyright (C) 2009-2010 Mathias Svensson ( http://result42.com )

         For more info read MiniZip_info.txt

----------------------------------------------------------
   Condition of use and distribution are the same than zlib :

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

----------------------------------------------------------

**Objective-Zip**

Created by Gianluca Bertani on 25/12/09.
Copyright 2009-10 Flying Dolphin Studio. All rights reserved.

Redistribution and use in source and binary forms, with or without 
modification, are permitted provided that the following conditions 
are met:

* Redistributions of source code must retain the above copyright notice, 
 this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, 
  this list of conditions and the following disclaimer in the documentation 
  and/or other materials provided with the distribution.
* Neither the name of Gianluca Bertani nor the names of its contributors 
  may be used to endorse or promote products derived from this software 
  without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
POSSIBILITY OF SUCH DAMAGE.

**NSData+Base64**

Copyright 2009 Matt Gallagher. All rights reserved.

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software. Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

 1. The origin of this software must not be misrepresented; you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.
 2. Altered source versions must be plainly marked as such, and must not be
    misrepresented as being the original software.
 3. This notice may not be removed or altered from any source
    distribution.

**Jansson**

Copyright (c) 2009-2014 Petri Lehtinen 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

**sockjs**

The MIT License (MIT) 
 
Copyright (c) 2011-2012 VMware, Inc. 
 
Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions: 
 
The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software. 
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE. 

https://github.com/sockjs/sockjs-client/blob/master/LICENSE

**caddy (modified)**

### original source : github.com/mholt/caddy
###

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright {yyyy} {name of copyright owner}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

**anime.js (modified)**

The MIT License

Copyright (c) 2019 Julian Garnier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**harfbuzz_ng**

HarfBuzz is licensed under the so-called "Old MIT" license.  Details follow. 
For parts of HarfBuzz that are licensed under different licenses see individual 
files names COPYING in subdirectories where applicable. 

Copyright © 2010,2011,2012,2013,2014,2015,2016,2017,2018,2019  Google, Inc. 
Copyright © 2019  Facebook, Inc. 
Copyright © 2012  Mozilla Foundation 
Copyright © 2011  Codethink Limited 
Copyright © 2008,2010  Nokia Corporation and/or its subsidiary(-ies) 
Copyright © 2009  Keith Stribley 
Copyright © 2009  Martin Hosken and SIL International 
Copyright © 2007  Chris Wilson 
Copyright © 2006  Behdad Esfahbod 
Copyright © 2005  David Turner 
Copyright © 2004,2007,2008,2009,2010  Red Hat, Inc. 
Copyright © 1998-2004  David Turner and Werner Lemberg 

For full copyright notices consult the individual files in the package. 

Permission is hereby granted, without written agreement and without 
license or royalty fees, to use, copy, modify, and distribute this 
software and its documentation for any purpose, provided that the 
above copyright notice and the following two paragraphs appear in 
all copies of this software. 

IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE TO ANY PARTY FOR 
DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES 
ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN 
IF THE COPYRIGHT HOLDER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH 
DAMAGE. 

THE COPYRIGHT HOLDER SPECIFICALLY DISCLAIMS ANY WARRANTIES, INCLUDING, 
BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND 
FITNESS FOR A PARTICULAR PURPOSE.  THE SOFTWARE PROVIDED HEREUNDER IS 
ON AN "AS IS" BASIS, AND THE COPYRIGHT HOLDER HAS NO OBLIGATION TO 
PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR MODIFICATIONS.

**7-Zip Extra**

7-Zip Extra
~~~~~~~~~~~
License for use and distribution
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Copyright (C) 1999-2021 Igor Pavlov.

7-Zip Extra files are under the GNU LGPL license.


Notes: 
   You can use 7-Zip Extra on any computer, including a computer in a commercial 
   organization. You don't need to register or pay for 7-Zip.


GNU LGPL information
--------------------

   This library is free software; you can redistribute it and/or
   modify it under the terms of the GNU Lesser General Public
   License as published by the Free Software Foundation; either
   version 2.1 of the License, or (at your option) any later version.

   This library is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
   Lesser General Public License for more details.

   You can receive a copy of the GNU Lesser General Public License from 
   http://www.gnu.org/

**OrderedDictionary**

OrderedDictionary

Version 1.4, September 12th, 2016

Copyright (C) 2010 Charcoal Design

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.
2. Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution.

**icu4c**

ICU License - ICU 1.8.1 and later
COPYRIGHT AND PERMISSION NOTICE
 
Copyright (c) 1995-2013 International Business Machines Corporation and others
 
All rights reserved.
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, provided that the above copyright notice(s) and this permission notice appear in all copies of the Software and that both the above copyright notice(s) and this permission notice appear in supporting documentation.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF THIRD PARTY RIGHTS. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR HOLDERS INCLUDED IN THIS NOTICE BE LIABLE FOR ANY CLAIM, OR ANY SPECIAL INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 
Except as contained in this notice, the name of a copyright holder shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization of the copyright holder.
 
All trademarks and registered trademarks mentioned herein are the property of their respective owners.
 
Third-Party Software Licenses
This section contains third-party software notices and/or additional terms for licensed third-party software components included within ICU libraries.
1. Unicode Data Files and Software
EXHIBIT 1
UNICODE, INC. LICENSE AGREEMENT - DATA FILES AND SOFTWARE
Unicode Data Files include all data files under the directories http://www.unicode.org/Public/, http://www.unicode.org/reports/, and http://www.unicode.org/cldr/data/. Unicode Data Files do not include PDF online code charts under the directory http://www.unicode.org/Public/. Software includes any source code published in the Unicode Standard or under the directories http://www.unicode.org/Public/, http://www.unicode.org/reports/, and http://www.unicode.org/cldr/data/.
 
NOTICE TO USER: Carefully read the following legal agreement. BY DOWNLOADING, INSTALLING, COPYING OR OTHERWISE USING UNICODE INC.'S DATA FILES ("DATA FILES"), AND/OR SOFTWARE ("SOFTWARE"), YOU UNEQUIVOCALLY ACCEPT, AND AGREE TO BE BOUND BY, ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT DOWNLOAD, INSTALL, COPY, DISTRIBUTE OR USE THE DATA FILES OR SOFTWARE.
 
COPYRIGHT AND PERMISSION NOTICE
 
Copyright ? 1991-2013 Unicode, Inc. All rights reserved. Distributed under the Terms of Use in http://www.unicode.org/copyright.html.
 
Permission is hereby granted, free of charge, to any person obtaining a copy of the Unicode data files and any associated documentation (the "Data Files") or Unicode software and any associated documentation (the "Software") to deal in the Data Files or Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, and/or sell copies of the Data Files or Software, and to permit persons to whom the Data Files or Software are furnished to do so, provided that (a) the above copyright notice(s) and this permission notice appear with all copies of the Data Files or Software, (b) both the above copyright notice(s) and this permission notice appear in associated documentation, and (c) there is clear notice in each modified Data File or in the Software as well as in the documentation associated with the Data File(s) or Software that the data or software has been modified.
 
THE DATA FILES AND SOFTWARE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF THIRD PARTY RIGHTS. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR HOLDERS INCLUDED IN THIS NOTICE BE LIABLE FOR ANY CLAIM, OR ANY SPECIAL INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THE DATA FILES OR SOFTWARE.
 
Except as contained in this notice, the name of a copyright holder shall not be used in advertising or otherwise to promote the sale, use or other dealings in these Data Files or Software without prior written authorization of the copyright holder.
 
Unicode and the Unicode logo are trademarks of Unicode, Inc. in the United States and other countries. All third party trademarks referenced herein are the property of their respective owners.
 
2. Chinese/Japanese Word Break Dictionary Data (cjdict.txt)
 #    The Google Chrome software developed by Google is licensed under the BSD license. Other software included in this distribution is provided under other licenses, as set forth below.
 #         
 #         The BSD License
 #         http://opensource.org/licenses/bsd-license.php 
 #         Copyright (C) 2006-2008, Google Inc.
 #         
 #         All rights reserved.
 #         
 #         Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 #         
 #         Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 #         Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 #         Neither the name of  Google Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 #          
 #         
 #         THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 #         
 #                                                      
 #         The word list in cjdict.txt are generated by combining three word lists listed
 #         below with further processing for compound word breaking. The frequency is generated
 #         with an iterative training against Google web corpora. 
 #         
 #         * Libtabe (Chinese)
 #           - https://sourceforge.net/project/?group_id=1519
 #           - Its license terms and conditions are shown below.
 #         
 #         * IPADIC (Japanese)
 #           - http://chasen.aist-nara.ac.jp/chasen/distribution.html
 #           - Its license terms and conditions are shown below.
 #         
 #         ---------COPYING.libtabe ---- BEGIN--------------------
 #         
 #         /*
 #          * Copyrighy (c) 1999 TaBE Project.
 #          * Copyright (c) 1999 Pai-Hsiang Hsiao.
 #          * All rights reserved.
 #          *
 #          * Redistribution and use in source and binary forms, with or without
 #          * modification, are permitted provided that the following conditions
 #          * are met:
 #          *
 #          * . Redistributions of source code must retain the above copyright
 #          *   notice, this list of conditions and the following disclaimer.
 #          * . Redistributions in binary form must reproduce the above copyright
 #          *   notice, this list of conditions and the following disclaimer in
 #          *   the documentation and/or other materials provided with the
 #          *   distribution.
 #          * . Neither the name of the TaBE Project nor the names of its
 #          *   contributors may be used to endorse or promote products derived
 #          *   from this software without specific prior written permission.
 #          *
 #          * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 #          * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 #          * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 #          * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 #          * REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 #          * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 #          * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 #          * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 #          * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 #          * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 #          * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 #          * OF THE POSSIBILITY OF SUCH DAMAGE.
 #          */
 #         
 #         /*
 #          * Copyright (c) 1999 Computer Systems and Communication Lab,
 #          *                    Institute of Information Science, Academia Sinica.
 #          * All rights reserved.
 #          *
 #          * Redistribution and use in source and binary forms, with or without
 #          * modification, are permitted provided that the following conditions
 #          * are met:
 #          *
 #          * . Redistributions of source code must retain the above copyright
 #          *   notice, this list of conditions and the following disclaimer.
 #          * . Redistributions in binary form must reproduce the above copyright
 #          *   notice, this list of conditions and the following disclaimer in
 #          *   the documentation and/or other materials provided with the
 #          *   distribution.
 #          * . Neither the name of the Computer Systems and Communication Lab
 #          *   nor the names of its contributors may be used to endorse or
 #          *   promote products derived from this software without specific
 #          *   prior written permission.
 #          *
 #          * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 #          * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 #          * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 #          * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 #          * REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 #          * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 #          * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 #          * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 #          * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 #          * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 #          * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 #          * OF THE POSSIBILITY OF SUCH DAMAGE.
 #          */
 #         
 #         Copyright 1996 Chih-Hao Tsai @ Beckman Institute, University of Illinois
 #         c-tsai4@uiuc.edu  http://casper.beckman.uiuc.edu/~c-tsai4
 #         
 #         ---------------COPYING.libtabe-----END------------------------------------
 #         
 #         
 #         ---------------COPYING.ipadic-----BEGIN------------------------------------
 #         
 #         Copyright 2000, 2001, 2002, 2003 Nara Institute of Science
 #         and Technology.  All Rights Reserved.
 #         
 #         Use, reproduction, and distribution of this software is permitted.
 #         Any copy of this software, whether in its original form or modified,
 #         must include both the above copyright notice and the following
 #         paragraphs.
 #         
 #         Nara Institute of Science and Technology (NAIST),
 #         the copyright holders, disclaims all warranties with regard to this
 #         software, including all implied warranties of merchantability and
 #         fitness, in no event shall NAIST be liable for
 #         any special, indirect or consequential damages or any damages
 #         whatsoever resulting from loss of use, data or profits, whether in an
 #         action of contract, negligence or other tortuous action, arising out
 #         of or in connection with the use or performance of this software.
 #         
 #         A large portion of the dictionary entries
 #         originate from ICOT Free Software.  The following conditions for ICOT
 #         Free Software applies to the current dictionary as well.
 #         
 #         Each User may also freely distribute the Program, whether in its
 #         original form or modified, to any third party or parties, PROVIDED
 #         that the provisions of Section 3 ("NO WARRANTY") will ALWAYS appear
 #         on, or be attached to, the Program, which is distributed substantially
 #         in the same form as set out herein and that such intended
 #         distribution, if actually made, will neither violate or otherwise
 #         contravene any of the laws and regulations of the countries having
 #         jurisdiction over the User or the intended distribution itself.
 #         
 #         NO WARRANTY
 #         
 #         The program was produced on an experimental basis in the course of the
 #         research and development conducted during the project and is provided
 #         to users as so produced on an experimental basis.  Accordingly, the
 #         program is provided without any warranty whatsoever, whether express,
 #         implied, statutory or otherwise.  The term "warranty" used herein
 #         includes, but is not limited to, any warranty of the quality,
 #         performance, merchantability and fitness for a particular purpose of
 #         the program and the nonexistence of any infringement or violation of
 #         any right of any third party.
 #         
 #         Each user of the program will agree and understand, and be deemed to
 #         have agreed and understood, that there is no warranty whatsoever for
 #         the program and, accordingly, the entire risk arising from or
 #         otherwise connected with the program is assumed by the user.
 #         
 #         Therefore, neither ICOT, the copyright holder, or any other
 #         organization that participated in or was otherwise related to the
 #         development of the program and their respective officials, directors,
 #         officers and other employees shall be held liable for any and all
 #         damages, including, without limitation, general, special, incidental
 #         and consequential damages, arising out of or otherwise in connection
 #         with the use or inability to use the program or any product, material
 #         or result produced or otherwise obtained by using the program,
 #         regardless of whether they have been advised of, or otherwise had
 #         knowledge of, the possibility of such damages at any time during the
 #         project or thereafter.  Each user will be deemed to have agreed to the
 #         foregoing by his or her commencement of use of the program.  The term
 #         "use" as used herein includes, but is not limited to, the use,
 #         modification, copying and distribution of the program and the
 #         production of secondary products from the program.
 #         
 #         In the case where the program, whether in its original form or
 #         modified, was distributed or delivered to or received by a user from
 #         any person, organization or entity other than ICOT, unless it makes or
 #         grants independently of ICOT any specific warranty to the user in
 #         writing, such person, organization or entity, will also be exempted
 #         from and not be held liable to the user for any such damages as noted
 #         above as far as the program is concerned.
 #         
 #         ---------------COPYING.ipadic-----END------------------------------------
3. Lao Word Break Dictionary Data (laodict.txt)
 #         Copyright (c) 2013 International Business Machines Corporation
 #         and others. All Rights Reserved.
 #
 #         Project:    http://code.google.com/p/lao-dictionary/
 #         Dictionary: http://lao-dictionary.googlecode.com/git/Lao-Dictionary.txt
 #         License:    http://lao-dictionary.googlecode.com/git/Lao-Dictionary-LICENSE.txt
 #                     (copied below)
 #
 #         This file is derived from the above dictionary, with slight modifications.
 #         --------------------------------------------------------------------------------
 #         Copyright (C) 2013 Brian Eugene Wilson, Robert Martin Campbell.
 #         All rights reserved.
 #
 #         Redistribution and use in source and binary forms, with or without modification,
 #         are permitted provided that the following conditions are met:
 #
 #                             Redistributions of source code must retain the above copyright notice, this
 #                             list of conditions and the following disclaimer. Redistributions in binary
 #                             form must reproduce the above copyright notice, this list of conditions and
 #                             the following disclaimer in the documentation and/or other materials
 #                             provided with the distribution.
 #
 #         THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 #         ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 #         WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 #         DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 #         ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 #         (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 #         LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 #         ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 #         (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 #         SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 #         --------------------------------------------------------------------------------
4. Time Zone Database
ICU uses the public domain data and code derived from Time Zone Database for its time zone support. The ownership of the TZ database is explained in BCP 175: Procedure for Maintaining the Time Zone Database section 7.
 
7.  Database Ownership
 
   The TZ database itself is not an IETF Contribution or an IETF
   document.  Rather it is a pre-existing and regularly updated work
   that is in the public domain, and is intended to remain in the public
   domain.  Therefore, BCPs 78 [RFC5378] and 79 [RFC3979] do not apply
   to the TZ Database or contributions that individuals make to it.
   Should any claims be made and substantiated against the TZ Database,
   the organization that is providing the IANA Considerations defined in
   this RFC, under the memorandum of understanding with the IETF,
   currently ICANN, may act in accordance with all competent court
   orders.  No ownership claims will be made by ICANN or the IETF Trust
   on the database or the code.  Any person making a contribution to the
   database or code waives all rights to future claims in that

**libnsgif**

Copyright (C) 2004 Richard Wilson
Copyright (C) 2008 Sean Fox

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

  * The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

**log4cplus**

Log4cplus license
=================

Each file of log4cplus source is licensed using either two clause BSD
license or Apache license 2.0. Log4cplus is derived work from log4j.

Threadpool code is licensed under separate license.


Two clause BSD license
----------------------

   Copyright © 1999--2009 Contributors to log4cplus project.
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modifica tion, are permitted provided that the following conditions
   are met:

   1. Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.

   THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED
   WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
   OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   DISCLAIMED.  IN NO EVENT SHALL THE APACHE SOFTWARE FOUNDATION OR
   ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
   SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF
   USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
   ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
   OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
   OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
   SUCH DAMAGE.


Apache 2.0 license
------------------

   Apache License; Version 2.0, January 2004; http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

Modified for log4cplus, copyright (c) 2014-2015 Václav Zeman.

**Skia**

Copyright (c) 2011 Google Inc. All rights reserved. 

Redistribution and use in source and binary forms, with or without 
modification, are permitted provided that the following conditions are 
met: 

   * Redistributions of source code must retain the above copyright 
notice, this list of conditions and the following disclaimer. 
   * Redistributions in binary form must reproduce the above 
copyright notice, this list of conditions and the following disclaimer 
in the documentation and/or other materials provided with the 
distribution. 
   * Neither the name of Google Inc. nor the names of its 
contributors may be used to endorse or promote products derived from 
this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT 
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT 
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY 
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

**http-parser**

Copyright Joyent, Inc. and other Node contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.

**jsonpath**

/* JSONPath 0.8.0 - XPath for JSON
 *
 * Copyright (c) 2007 Stefan Goessner (goessner.net)
 * Licensed under the MIT (MIT-LICENSE.txt) licence.
 */

**MSR-JavaScript-Crypto**

//*******************************************************************************
//
//    Copyright 2020 Microsoft
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
//
//*******************************************************************************

**XMLDSIGjs**

The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
https://github.com/PeculiarVentures/xadesjs/blob/master/LICENSE.md

**cpprestsdk**

C++ REST SDK 

The MIT License (MIT)

Copyright (c) Microsoft Corporation

All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
© 2021 GitHub, Inc.

**nv-websocket-client**

Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

**SocketRocket**

BSD License

For SocketRocket software

Copyright (c) 2016-present, Facebook, Inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

 * Neither the name Facebook nor the names of its contributors may be used to
   endorse or promote products derived from this software without specific
   prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


---

## Appendix > Supported UserFont

### Supported UserFont

**현황**

2018 년 8월 기준 환경별 UserFont 지원 현황입니다.

**Supported Desktop Web Runtime Environment (WRE)**

	
		Font Format
		Chrome
		FireFox
		Safari
		Opera
	

	
		TTF/OTF (*.ttf, *.otf)
		4.0
		3.5
		3.1
		10.0
	

	
		WOFF (*.woff)
		5.0
		3.6
		5.1
		11.1
	

	
		WOFF2 (*.woff2)
		36.0
		35.0
		N/A
		26.0
	

	
		SVG (*.svg, *.svgz)
		4.0
		N/A
		3.2
		9.0

**Supported Mobile Web Runtime Environment (WRE)**

	
		Font Format
		iOS/iPadOS Safari
		Android WRE
		Chrome for Android
		Firefox for Android
		Opera Mobile
	

	
		TTF/OTF (*.ttf, *.otf)
		4.2
		2.2
		Unknown
		1.0
		10.0
	

	
		WOFF (*.woff)
		5
		4.4
		Unknown
		5.0
		11.0
	

	
		WOFF2 (*.woff2)
		10
		N/A
		Unknown
		39.0
		37.0
	

	
		SVG (*.svg, *.svgz)
		Unknown
		3-4.4.4
		N/A
		N/A
		10.0

**Supported Nexacro Runtime Environment (NRE)**

	
		Font Format
		macOS NRE
		Android NRE
	

	
		TTF / OTF (*.ttf, *.otf)
		지원
		지원
	

	
		WOFF (*.woff)
		지원
		지원
	

	
		WOFF2 (*.woff2)
		미지원
		미지원
	

	
		SVG (*.svg, *.svgz)
		미지원
		미지원

**Supported Windows Nexacro Runtime Environment (NRE)**

시스템에 설치되어 있는 UserFont 를 모두 지원합니다.


---

## Appendix > Web API NRE Support

### Appendix_Web API NRE Support


---

## Appendix > Constant > DataObject

### DataObject

**DataObjectLoadDatasetsEventInfo(onloaddatasets), DataObjectLoadEventInfo(onload) > reason**

	
		Constant
		Value
		Description
	

	
		DataObject.REASON_LOAD
		0
		DataObject 오브젝트의 url 속성값으로 설정한 서비스에서 데이터 로드를 완료했을 때 발생하는 값입니다.
	

	
		DataObject.REASON_LOADCONTENT
		1
		DataObject 오브젝트의 data 속성값 설정 시 발생하는 값입니다.
넥사크로 스튜디오에서 직접 설정한 data 속성값은 Form 오브젝트의 onload 이벤트보다 먼저 처리됩니다.
	

	
		DataObject.REASON_REQUEST
		2
		DataObject 오브젝트의 request 메소드 호출 후 데이터 로드가 완료됐을때 발생하는 값입니다. onsuccess 이벤트 발생 후 onload 이벤트가 발생합니다.


---

## Appendix > Constant > Dataset

### Dataset

**DSLoadEventInfo(onload) > reason**

	
		Constant
		Value
		Description
	

	
		Dataset.REASON_LOAD
		0
		Dataset의 Load가 완료되었을 때
	

	
		Dataset.REASON_LOADPROCESS
		1
		Dataset을 Loading 중일 때
	

	
		Dataset.REASON_RESET
		2
		Dataset의 변경사항을 무시하고 이전상태로 Reset되었을 때
	

	
		Dataset.REASON_LOADCONTENT
		3
		ADL 또는 FDL에 정의된 Dataset의 Load가 완료되었을 때. Form의 onload() 이벤트보다 먼저 발생합니다.
	

	
		Dataset.REASON_APPEND
		12
		append() 메소드를 실행했을 때
loadCSV()/loadXML() 메소드의 "bClear" 파라미터값을 "false" 로 설정하고 실행했을 때
	

	
		Dataset.REASON_BINDSOURCE
		90
		Dataset을 Bind 했을 때

**DSRowsetChangeEventInfo(onrowsetchanged) > reason**

	
		Constant
		Value
		Description
	

	
		Dataset.REASON_ASSIGN
		10
		Dataset이 Assign 되었을 때
	

	
		Dataset.REASON_COPY
		11
		Dataset이 복사되었을 때
	

	
		Dataset.REASON_APPEND
		12
		Dataset이 추가되었 때
	

	
		Dataset.REASON_MERGE
		13
		Dataset이 통합되었을 때
	

	
		Dataset.REASON_DELETE
		20
		Dataset의 Row가 삭제되었을 때
	

	
		Dataset.REASON_DELETEALL
		22
		Dataset의 모든 Row가 삭제되었을 때
	

	
		Dataset.REASON_CLEARDATA
		23
		Dataset의 모든 Row가 완전 삭제되었을 때
	

	
		Dataset.REASON_CLEAR
		24
		Dataset의 모든 Column 및 Row가 완전히 삭제되었을 때
	

	
		Dataset.REASON_SORTGROUP
		30
		Dataset의 데이터가 정렬 또는 그룹화 되었을 때
	

	
		Dataset.REASON_FILTER
		31
		Dataset의 데이터가 Filter 되었을 때
	

	
		Dataset.REASON_MOVE
		32
		Dataset의 Row가 다른 위치로 이동되었을 때
	

	
		Dataset.REASON_EXCHANGE
		33
		Dataset의 두 Row가 서로 위치가 바뀌었을 때
	

	
		Dataset.REASON_CHANGELAYOUT
		34
		Dataset의 Column 정보가 변경되었을 때
	

	
		Dataset.REASON_CHANGESTATUS
		40
		Dataset의 Row 상태(Type, Select)이 변경되었을 때
	

	
		Dataset.REASON_ENABLEEVENT
		41
		Dataset의 enableevent 속성이 'true'가 되었을 때
	

	
		Dataset.REASON_RESETSTATUS
		42
		TR이나 applyChange로 인한 RowType변경완료 후
	

	
		Dataset.REASON_CHANGEDATAOBJECT
		43
		바인딩된 DataObject 오브젝트의 데이터가 변경됐을 때

**DSRowPosChangeEventInfo(onrowposchanged) > reason**

	
		Constant
		Value
		Description
	

	
		Dataset.REASON_ROWCHANGE
		51
		Row 데이터와 rowposition 속성값이 모두 변경된 경우
	

	
		Dataset.REASON_ROWINDEXCHANGE
		52
		Row 데이터는 변경되지 않고, rowposition 속성값만 변경된 경우
	

	
		Dataset.REASON_ROWOBJECTCHANGE
		53
		Row 데이터가 변경되었지만 rowposition 속성값은 변경이 없는 경우

**Dataset > Rows > Row > type**

	
		Constant
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태


---

## Appendix > Constant > Environment

### Environment

**DevicePermissionEventInfo(ondevicepermission) > status**

	
		Constant
		Value
		Description
	

	
		nexacro.DevicePermissionStatus.DENIED
		0
		권한이 설정되지 않은 상태
	

	
		nexacro.DevicePermissionStatus.GRANTED
		1
		권한이 설정된 상태


---

## Appendix > Constant > Excel Object

### Excel Object

**ExcelExportObject > exporttype**

	
		Constant
		Value
		Description
	

	
		nexacro.ExportTypes.EXCEL
		0x0100
		엑셀 97 형식으로 Export
	

	
		nexacro.ExportTypes.EXCEL97
		0x0110
		엑셀 97~2003 형식으로 Export
	

	
		nexacro.ExportTypes.EXCEL2007
		0x0120
		엑셀 2007 XML 형식으로 Export
	

	
		nexacro.ExportTypes.HANCELL2010
		0x0400
		한셀 2010 형식으로 Export
	

	
		nexacro.ExportTypes.HANCELL2014
		0x0410
		한셀 2014 형식으로 Export
	

	
		nexacro.ExportTypes.CSV
		0x0500
		엑셀 CSV 형식으로 Export
	

	
		nexacro.ExportTypes.TXT
		0x0510
		TXT 형식으로 Export

**ExcelExportObject > exportItems**

	
		Constant
		Value
		Description
	

	
		nexacro.ExportItemTypes.GRID
		256
		Export Item 타입을 Grid 컴포넌트로 설정

**ExcelImportObject > importtype**

	
		Constant
		Value
		Description
	

	
		nexacro.ImportTypes.EXCEL
		0x0100
		엑셀 97 형식으로 Import
	

	
		nexacro.ImportTypes.EXCEL97
		0x0110
		엑셀 97~2003 형식으로 Import
	

	
		nexacro.ImportTypes.EXCEL2007
		0x0120
		엑셀 2007 XML 형식으로 Import
	

	
		nexacro.ImportTypes.HANCELL2014
		0x0410
		한셀 2014 형식으로 Import
	

	
		nexacro.ImportTypes.CSV
		0x0500
		엑셀 CSV 형식으로 Import
	

	
		nexacro.ImportTypes.TXT
		0x0510
		TXT 형식으로 Import


---

## Appendix > Constant > FileDialog

### FileDialog

**FileDialog > open**

	
		Constant
		Value
		Description
	

	
		nexacro.FileDialog.LOAD
		1
		한 개 파일을 읽을 수 있는 FileDialog 를 표시
	

	
		nexacro.FileDialog.SAVE
		2
		한 개 파일을 쓸 수 있는 FileDialog 를 표시
	

	
		nexacro.FileDialog.MULTILOAD
		3
		여러개의 파일을 읽을 수 있는 FileDialog 를 표시
	

	
		nexacro.FileDialog.SELFOLDER
		4
		폴더를 선택할 수 있는 FileDialog 를 표시


---

## Appendix > Constant > LiteDBConnection

### LiteDBConnection

**LiteDBConnection > openflag, open**

	
		Constant
		Value
		Description
	

	
		LiteDBConnection.openReadWrite
		0
		데이터베이스 읽기, 쓰기가 가능하도록 연결
	

	
		LiteDBConnection.openReadWriteCreate
		1
		데이터베이스 읽기, 쓰기, 파일생성이 가능하도록 연결


---

## Appendix > Constant > System

### System

**System > checkDevicePermission, requestDevicePermission**

	
		Constant
		Value
		Description
	

	
		nexacro.DevicePermissionType.CALENDAR
		"calendar"
		Android, iOS/iPadOS
	

	
		nexacro.DevicePermissionType.CAMERA
		"camera"
	

	
		nexacro.DevicePermissionType.CONTACTS
		"contacts"
	

	
		nexacro.DevicePermissionType.LOCATION
		"location"
	

	
		nexacro.DevicePermissionType.MICROPHONE
		"microphone"
	

	
		nexacro.DevicePermissionType.PHONE
		"phone"
		Android
	

	
		nexacro.DevicePermissionType.SMS
		"sms"
	

	
		nexacro.DevicePermissionType.STORAGE
		"storage"
	

	
		nexacro.DevicePermissionType.PHOTO
		"photo"
		iOS/iPadOS
	

	
		nexacro.DevicePermissionType.REMINDERS
		"reminders"


---

## Appendix > Constant > VirtualFile

### VirtualFile

**VirtualFile > open**

	
		Constant
		Value
		Description
	

	
		VirtualFile.openRead
		0x0001
		읽기 전용으로 존재하는 파일을 열때 사용합니다. 파일이 없으면 파일을 열지 못합니다.
	

	
		VirtualFile.openWrite
		0x0002
		쓰기 전용으로 파일을 생성합니다. 파일이 존재유무에 관계없이 파일을 생성합니다.
	

	
		VirtualFile.openAppend
		0x0010
		추가 전용으로 존재하는 파일을 열때 사용합니다. 파일이 없을경우 파일을 생성합니다. 파일이 열릴경우 파일포인터를 마지막 위치로 옮깁니다.
	

	
		VirtualFile.openText
		0x0100
		텍스트 파일을 열 때 사용합니다.
	

	
		VirtualFile.openBinary
		0x0200
		바이너리 파일을 열 때 사용합니다.
	

	
		VirtualFile.openCreate
		0x1000
		파일을 열때 파일이 없을 경우 파일을 생성하여 열때 사용합니다. 파일이 존재하면 존재하는 파일이 열립니다.

**VirtualFile > seek**

	
		Constant
		Value
		Description
	

	
		VirtualFile.seekBegin
		0
		파일의 시작 위치
	

	
		VirtualFile.seekCurrent
		1
		파일의 현재 위치
	

	
		VirtualFile.seekEnd
		2
		파일의 끝 위치

**VirtualFile > getFileList**

	
		Constant
		Value
		Description
	

	
		VirtualFile.findAll
		0x01
		기준 폴더에 속한 파일과 폴더를 대상으로 검색합니다.
	

	
		VirtualFile.findFileOnly
		0x02
		기준 폴더에 속한 파일을 대상으로 검색합니다.
	

	
		VirtualFile.findDirectoryOnly
		0x03
		기준 폴더에 속한 폴더를 대상으로 검색합니다.
	

	
		VirtualFile.findRecursive
		0x08
		하위 폴더에 대한 재귀검색을 허용합니다.
다른 옵션값과 조합하여 사용할 수 있습니다.
	

	
		VirtualFile.findCaseless
		0x10
		검색 시 대소문자를 구분하지 않습니다.
다른 옵션값과 조합하여 사용할 수 있습니다.


---

## Appendix > Constant > XPush

### XPush

**XPushEventInfo(onsuccess) > action**

	
		Constant
		Value
		Description
	

	
		nexacro.XPushAction.AUTH
		0
		connect() 메소드로 Push 서버 연결에 성공했을 때
	

	
		nexacro.XPushAction.BYEC
		1
		disconnect() 메소드로 Push 서버의 연결해제에 성공했을 때
	

	
		nexacro.XPushAction.ADDF
		2
		subscribe() 메소드로 Topic 추가에 성공했을 때
	

	
		nexacro.XPushAction.DELF
		3
		unsubscribe() 메소드로 Topic 제거에 성공했을 때
	

	
		nexacro.XPushAction.REQD
		4
		requestMessage() 메소드로 미수신 신뢰성 메시지 요청에 성공했을 때
	

	
		nexacro.XPushAction.RECT
		5
		sendResponse() 메소드로 미수신 신뢰성 메시지 수신응답에 성공했을 때
	

	
		nexacro.XPushAction.RGST
		6
		registerDevice() 메소드로 Push 서버에 Device Token 등록에 성공했을 때
	

	
		nexacro.XPushAction.UNRG
		7
		unregisterDevice() 메소드로 Push 서버에 등록된 Device Token 해제에 성공했을 때
	

	
		nexacro.XPushAction.ADUI
		8
		registerTopic() 메소드로 신뢰성 메시지 Topic 등록에 성공했을 때
	

	
		nexacro.XPushAction.UNUI
		9
		unregisterTopic() 메소드로 등록된 신뢰성 메시지 Topic 해제에 성공했을 때
	

	
		nexacro.XPushAction.MSGC
		10
		requestMessageCount() 메소드로 미수신된 신뢰성 메시지 갯수요청에 성공했을 때


---

## Appendix > nexacro > config.xml

### nexacro_config.xml

**개요**

nexacro_config.xml 파일은 NRE 환경에서 사용할 실행옵션을 설정하는 파일입니다.
앱을 실행하는 운영체제 환경에 따라 설정할 수 있는 옵션에 차이가 있을 수 있습니다.

**파일 생성 및 경로**

운영체제별 기본 파일 경로는 아래와 같습니다. Windows : %USERAPP%\Config\[Key]\nexacro_config.xmlAndroid : \res\xml\nexacro_config.xmliOS/iPadOS : {asset}/data/nexacro_config.xmlmacOS : {asset(project)}/data/nexacro_config.xml- App Builder를 사용해 Android, iOS/iPadOS, macOS NRE 앱 빌드하는 경우에는 App Builder 설정에 따라 자동으로 nexacro_config.xml 파일을 생성하고 적용됩니다.- Xcode, Android Studio에서 직접 프로젝트를 생성하는 경우에는 nexacro_config.xml 파일을 직접 추가해주어야 합니다.- Windows NRE는 -NC 실행옵션으로 파일 위치를 지정한 경우만 적용됩니다.

**파일구조**

아래 표에서 운영체제별 NRE는 약어로 표시합니다.
- W(Windows NRE), A(Android NRE), I(iOS/iPad NRE), M(macOS NRE)
	
		group
		name
		W
		A
		I
		M
		Description
	

	
		nexacro-config
		os
		O
		O
		O
		O
		운영체제별 관리를 위한 속성
"windows" | "Android" | "osx"
os 속성 항목은 생략할 수 있습니다.
	

	
		application
		style
		X
		O
		X
		X
		앱 업데이트 UI 스타일
"old" | "default"
	

	
		dialog-position
		X
		O
		O
		X
		앱 업데이트 진행정보를 표시할 팝업 출력 위치
"top" | "center" | "bottom" (기본값: "center")
	

	
		file-logging
		X
		O
		O
		O
		로딩 에러 정보 파일 저장 여부
"true" | "false" (기본값: "true")
	

	
		quiet
		X
		O
		O
		O
		앱 실행 다이얼로그 표시 여부
"true" | "false"
	

	
		loglevel 
		O
		X
		X
		O
		로그 출력 수준
"fatal" | "error" | "warn" | "info" | "debug" (기본값: "debug")
- environment.loglevel 속성값보다 우선순위 높음
	

	
		tracemode 
		O
		X
		X
		O
		로그 파일 생성 방식
"none" | "new" | "append" (기본값: "none")
- environment.tracemode 속성값보다 우선운위 높음
	

	
		traceduration
		O
		X
		X
		O
		로그 파일을 일별로 생성하는 옵션
"-1" | nDate (기본값 -1)
- 사용자가 지정한 filepath 명 뒤에 _yyyymmdd.log 추가하여 일별로 로그파일 생성
- environment.traceduration 속성값보다 우선운위 높음
	

	
		updator
		force
		X
		O
		O
		X
		start_[OS].json 정보에 업데이트 파일이 있을 때 팝업창 표시 없이 강제 업데이트 처리 여부
"true" | "false"
	

	
		cancelable
		X
		O
		O
		X
		업데이트 팝업창이 표시될 때 취소버튼 표시 여부
"true" | "false"
	

	
		errormsg
		X
		O
		O
		X
		초기 로딩 중 구동에 실패할 시 에러정보 팝업창을 표할 지 여부
"true" | "false"
	

	
		quiet
		X
		O
		O
		X
		업데이트 팝업창 표시 없이 업데이트 처리 여부
"true" | "false"
- "true"로 설정하더라도 진행율은 표시됨
	

	
		failpass
		X
		O
		O
		X
		업데이트 오류를 무시할지 여부
"true" | "false"
	

	
		notification
		enable
		X
		O
		O
		X
		알림 기능 사용 여부
"true" | "false"
	

	
		handler
		X
		O
		O
		X
		알림 수신 시 처리할 핸들러를 구현한 클래스
(기본값)
- Android: com.nexacro.notification.DefaultHandler
- iOS/iPad: DefaultNotificationManagerHandler
	

	
		xpush-server
		request-missing-message
		X
		O
		O
		X
		X-PUSH 서버 사용 시 수신하지 못한 신뢰성 메시지 자동 요청 여부
"true" | "false"
	

	
		log
		filepath
		O
		X
		X
		O
		로그를 기록할 파일 위치, 파일명을 포함하여 지정
(기본값)
- Windows: %USERAPP%/
- macOS: %USERAPP%/Log/
	

	
		filesize
		O
		X
		X
		O
		로그를 기록할 파일의 최대 크기
기본값: 204,800 바이트(byte)
기본값보다 작은 값을 설정한 경우에는 기본값이 적용됩니다.
	

	
		backupfilecount
		O
		X
		X
		O
		로그를 기록할 파일의 최대 개수
기본값: 1
- 로그 파일 크기가 filesize로 설정한 값보다 커지는 경우 백업 파일로 남길 수 있는 파일 개수

**See Also**

Environment.loglevelEnvironment.tracedurationEnvironment.tracemodeSystem.execNexacro


---

## Appendix > nexacrostudio Interface > Method

### Appendix_nexacrostudio Interface_Method


---

## Appendix > Web API NRE Support > WebSocket NRE Support

### WebSocket NRE Support

**개요**

NRE 실행 시 WebSocket 오브젝트를 사용할 수 있습니다.
앱을 실행하는 운영체제에 따른 기능(속성, 메소드, 이벤트) 지원 여부를 설명합니다.

* WRE에서 브라우저, 버전에 따른 Websocket 오브젝트 기능 지원 여부는 아래 링크를 참고하세요.
https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#browser_compatibility

* 각 기능 상세 정보는 아래 스펙 문서를 참고하세요.
https://html.spec.whatwg.org/multipage/web-sockets.html#the-websocket-interface

**Windows NRE 사용 제약**

- 윈도우 7 이상 운영체제만 지원합니다.
- 윈도우 7 운영체제에서 wss 프로토콜 통신 시도 시 사설 인증서를 적용한 서버는 접속할 수 없습니다.
- Constructor에서 protocols(optional) 파라미터는 지원하지 않습니다.

**iOS/iPadOS NRE 사용 제약**

앱 Packing 시 Update Type을 "Update" 또는 "Local"로 지정한 경우에는 WebSocket 오브젝트를 사용할 수 없습니다.
WKWebView 정책에 따라 로컬에 저장한 파일은 WebSocket 통신을 처리할 수 없습니다(실행 시 에러가 발생합니다).
아래 기능 지원 여부는 Update Type을 "Server"로 지정한 경우에만 해당합니다.

**기능 지원 여부**

 아래 표에서 운영체제 NRE는 약어로 표시합니다.
- W(Windows NRE), A(Android NRE), I(iOS/iPad NRE), M(macOS NRE)
	
		Property
		Value: State
		W
		A
		I
		M
		Description
	

	
		binaryType
		 
		O
		O
		O
		O
		 
	

	
		bufferedAmount
		 
		X
		O
		O
		O
		 
	

	
		extensions
		 
		X
		O
		O
		O
		 
	

	
		protocol
		 
		X
		O
		O
		O
		 
	

	
		readyState 
		0: CONNECTING
		O
		O
		O
		O
		 
	

	
		1: OPEN
		O
		O
		O
		O
		 
	

	
		2: CLOSING
		O
		O
		O
		O
		 
	

	
		3: CLOSED
		O
		O
		O
		O
		 
	

	
		url
		 
		O
		O
		O
		O
		 
	

	
		onopen
		 
		O
		O
		O
		O
		event listener (open)
	

	
		onmessage
		 
		O
		O
		O
		O
		event listener (message)
	

	
		onerror
		 
		O
		O
		O
		O
		event listener (error)
	

	
		onclose
		 
		O
		O
		O
		O
		event listener (close)
	

	
		Method
		Parameter
		W
		A
		I
		M
		Description
	

	
		close
		code(optional)
		O
		O
		O
		O
		 
	

	
		reason(optional)
		O
		O
		O
		O
		 
	

	
		send
		msg
		O
		O
		O
		O
		 
	


- 정보 확인 시 e.type 형태로 속성값을 확인할 수 있습니다.
	
		Event
		Event Info
		W
		A
		I
		M
		Description
	

	
		open
		type: "open"
		O
		O
		O
		O
		 
	

	
		message
		type: "message'
		O
		O
		O
		O
		 
	

	
		data: 수신 메시지
		O
		O
		O
		O
		 
	

	
		error
		type: "error"
		O
		O
		O
		O
		 
	

	
		close
		type: "close"
		O
		O
		O
		O
		 
	

	
		code: Status Code
		O
		O
		O
		O
		Status Code는 아래 표를 참고하세요.
	

	
		reason: 종료 메시지
		O
		O
		O
		O
		 
	


- 900, 901, 902, 920은 NRE에서만 지원하는 코드입니다.
  그 외 코드에 대한 정보는 https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent 를 참고하세요.
  지원 여부를 "N/A"로 표시한 경우는 Reserved 코드이거나 특정 운영체제에서만 지원하는 코드입니다.
	
		Status Code
		W
		A
		I
		M
		Description
	

	
		900
		O
		N/A
		N/A
		N/A
		WebSocket Server Connect Failed
	

	
		901
		O
		N/A
		N/A
		N/A
		WebSocket Failure to receive message
	

	
		902
		O
		N/A
		N/A
		N/A
		WebSocket Failed to send message
	

	
		920
		N/A
		O
		N/A
		N/A
		Neo Visionaries Package Error Reason
	

	
		1000
		O
		O
		O
		O
		 
	

	
		1001
		O
		O
		O
		O
		 
	

	
		1002
		O
		O
		O
		O
		 
	

	
		1003
		O
		O
		O
		O
		 
	

	
		1004
		X
		N/A
		O
		N/A
		 
	

	
		1005
		O
		O
		O
		O
		 
	

	
		1006
		O
		O
		O
		O
		 
	

	
		1007
		O
		X
		O
		O
		 
	

	
		1008
		O
		X
		O
		X
		 
	

	
		1009
		O
		O
		O
		O
		 
	

	
		1010
		O
		X
		O
		X
		 
	

	
		1011
		O
		O
		O
		X
		 
	

	
		1012
		X
		X
		O
		X
		 
	

	
		1013
		X
		X
		O
		X
		 
	

	
		1014
		O
		O
		O
		X
		 
	

	
		1015
		O
		O
		O
		X


---

## Appendix > Web API NRE Support > XMLHttpRequest NRE Support

### XMLHttpRequest NRE Support

**개요**

NRE 실행 시 XMLHttpRequest 오브젝트를 사용할 수 있습니다.
앱을 실행하는 운영체제에 따른 기능(속성, 메소드) 지원 여부를 설명합니다.

* WRE에서 브라우저, 버전에 따른 XMLHttpRequest 오브젝트 기능 지원 여부는 아래 링크를 참고하세요.
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#browser_compatibility

* 각 기능 상세 정보는 아래 스펙 문서를 참고하세요.
https://xhr.spec.whatwg.org/

**iOS/iPadOS NRE 사용 제약**

앱 Packing 시 Update Type을 "Update" 또는 "Local"로 지정한 경우에는 XMLHttpRequest 오브젝트를 사용할 수 없습니다.
WKWebView 정책에 따라 로컬에 저장한 파일은 XMLHttpRequest 통신을 처리할 수 없습니다(실행 시 에러가 발생합니다).
아래 기능 지원 여부는 Update Type을 "Server"로 지정한 경우에만 해당합니다.

**기능 지원 여부**

아래 표에서 운영체제 NRE는 약어로 표시합니다.
- W(Windows NRE), A(Android NRE), I(iOS/iPad NRE), M(macOS NRE)
	
		Property
		Value: State
		W
		A
		I
		M
		Description
	

	
		readyState
		0: UNSENT
		O
		O
		O
		O
		 
	

	
		1: OPENED
		O
		O
		O
		O
		 
	

	
		2: HEADERS_RECEIVED
		X
		X
		O
		X
		 
	

	
		3: LOADING
		O
		O
		O
		X
		 
	

	
		4: DONE
		O
		O
		O
		O
		 
	

	
		status
		 
		O
		O
		O
		O
		 
	

	
		onreadystatechange
		 
		O
		O
		O
		O
		 
	

	
		responseURL
		 
		O
		O
		O
		O
		default 값은 빈 값으로 처리합니다.
	

	
		response 
		 
		O
		O
		O
		O
		반환값은 Text 형식만 지원합니다.
	

	
		responseType
		 
		O
		O
		O
		O
		 
	

	
		responseText
		 
		O
		O
		O
		O
		반환값은 Text 형식만 지원합니다.
	

	
		Method
		Parameter
		W
		A
		I
		M
		Description
	

	
		abort
		 
		O
		O
		O
		O
		 
	

	
		getAllResponseHeaders
		 
		O
		O
		O
		O
		 
	

	
		getResponseHeader
		 
		O
		O
		O
		O
		 
	

	
		open
		method
		O
		O
		O
		O
		GET, POST, PUT, DELETE, HEAD, PATCH를 지원합니다.
	

	
		url
		O
		O
		O
		O
		prefix는 지원하지 않습니다.
	

	
		[async = true]
		O
		O
		O
		O
		 
	

	
		[user = null]
		X
		X
		O
		X
		 
	

	
		[psw = null]
		X
		X
		O
		X
		 
	

	
		send
		 
		O
		O
		O
		O
		open의 method 파라미터값이 "GET", "HEAD"이면 Body는 null로 설정됩니다.
	

	
		setRequestHeader
		 
		O
		O
		O
		O


---
