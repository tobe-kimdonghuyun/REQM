(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Button" :
            			{
            				"class" :
            				[
            					{
            						"btn_polivy_linkTextB" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"textPadding" : nexacro.PaddingObject("9px 0px 0px 0px"),
            									"iconPosition" : "top",
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #222222"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#222222")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#222222")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#d9d9d9")
            								}
            							}
            						}
            					},
            					{
            						"btn_polivy_linkTextS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("4px"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 1px 20px"),
            									"iconPosition" : "left",
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #222222"),
            									"padding" : nexacro.PaddingObject("4px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"color" : nexacro.ColorObject("#222222")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"color" : nexacro.ColorObject("#222222")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"color" : nexacro.ColorObject("#d9d9d9")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_roundBox20_line" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_PolicyLink" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#2b72de")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ImageViewer" :
            			{
            				"class" :
            				[
            					{
            						"font16B_icon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("4px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("4px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("4px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #000000")
            								}
            							}
            						}
            					}
            				]
            			},
            			"imagetext" :
            			{
            				"parent" :
            				{
            					"ImageViewer" :
            					{
            						"class" :
            						[
            							{
            								"font16B_icon" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"letterSpacing" : nexacro.CSSValueObject("-1px"),
            											"font" : nexacro.FontObject("normal 700 16px/normal \"Noto Sans KR\",\"NotoSansKR-Bold\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 80px")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"Grid" :
            			{
            				"class" :
            				[
            					{
            						"grd_policy_detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd, 1px solid #dddddd, 0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd, 1px solid #dddddd, 0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd, 1px solid #dddddd, 0px none")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd, 1px solid #dddddd, 0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd, 1px solid #dddddd, 0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_policy_detail" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #dddddd,0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #dddddd,0px none")
            										},
            										"readonly" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #dddddd,0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_policy_detail" :
            						{
            							"parent" :
            							{
            								"Grid" :
            								{
            									"self" :
            									{
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #dddddd,0px none")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #dddddd,0px none")
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"grd_policy_detail" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #dddddd"),
            															"color" : nexacro.ColorObject("#222222"),
            															"font" : nexacro.FontObject("normal 700 15px/normal \"Noto Sans KR\",\"NotoSansKR-Bold\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            															"letterSpacing" : nexacro.CSSValueObject("-1px")
            														},
            														"disabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #dddddd"),
            															"color" : nexacro.ColorObject("#222222"),
            															"font" : nexacro.FontObject("normal 700 15px/normal \"Noto Sans KR\",\"NotoSansKR-Bold\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            															"letterSpacing" : nexacro.CSSValueObject("-1px")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"grd_policy_detail" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #dddddd"),
            															"padding" : nexacro.PaddingObject("20px"),
            															"font" : nexacro.FontObject("normal 400 15px/1.4 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            															"color" : nexacro.ColorObject("#222222")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("1px solid #dddddd"),
            															"padding" : nexacro.PaddingObject("20px"),
            															"font" : nexacro.FontObject("normal 400 15px/1.4 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            															"color" : nexacro.ColorObject("#222222")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("1px solid #dddddd"),
            															"padding" : nexacro.PaddingObject("20px"),
            															"font" : nexacro.FontObject("normal 400 15px/1.4 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            															"color" : nexacro.ColorObject("#222222")
            														},
            														"disabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #dddddd"),
            															"padding" : nexacro.PaddingObject("20px"),
            															"font" : nexacro.FontObject("normal 400 15px/1.4 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            															"color" : nexacro.ColorObject("#222222")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_policy_detail" :
            								{
            									"self" :
            									{
            										"disabled" :
            										{
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"Edit" :
            			{
            				"class" :
            				[
            					{
            						"display_font16" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 1px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 1px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 1px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 1px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 1px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 1px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextArea" :
            			{
            				"class" :
            				[
            					{
            						"display_font16" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 0px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/1.5 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 0px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/1.5 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 0px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/1.5 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 0px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/1.5 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 0px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/1.5 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 1px 0px 1px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 16px/1.5 \"Noto Sans KR\",\"NotoSansKR-Regular\",\"Malgun Gothic\",\"Arial\",\"MS PGothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
