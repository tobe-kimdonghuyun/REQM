(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("bold 9px \"Malgun Gothic\"")
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"deactivate" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							},
            							"deactivate" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxO.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxO.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("3px 1px 3px 1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("3px 1px 3px 1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("3px 1px 3px 1px")
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Hdec.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HdecD.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Vdec.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VdecD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Hinc.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincD.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Vinc.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VincD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("1px 3px 1px 3px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("1px 3px 1px 3px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("1px 3px 1px 3px")
            					}
            				}
            			},
            			"Form" :
            			{
            				"self" :
            				{
            					"contents" :
            					{
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #99A6C3"),
            						"color" : nexacro.ColorObject("#4962FF"),
            						"font" : nexacro.FontObject("500 20px/28px \"Pretendard\""),
            						"wordSpacing" : nexacro.CSSValueObject("-1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"selected" :
            					{
            					},
            					"pushed" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_TF_MenuItemM" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 14px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 20px/24px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_MenuItemMS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 14px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 20px/24px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 14px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 20px/24px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 14px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 20px/24px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 14px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 20px/24px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 14px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 20px/24px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_MenuItemS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("8px 10px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 17px/20px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_MenuItemSS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("8px 10px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 17px/20px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("8px 10px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 17px/20px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("8px 10px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 17px/20px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("8px 10px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 17px/20px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("8px 10px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 17px/20px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_MenuItem02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("700 30px/36px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("700 30px/36px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_MenuItem03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("700 23px/36px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("700 23px/36px \"Pretendard\""),
            									"wordSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Logo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_UXPro" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("226px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 18px/26px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_DevPro" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("226px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 18px/26px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_ProGen" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("226px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 18px/26px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#A5C1E8")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Service" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFE1E9"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemN.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            									"color" : nexacro.ColorObject("#8F98A9"),
            									"font" : nexacro.FontObject("700 30px/36px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #4D63E4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemO.png\")"),
            									"color" : nexacro.ColorObject("#161C29")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #4D63E4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")"),
            									"color" : nexacro.ColorObject("#FFFFFF")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #4D63E4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")"),
            									"color" : nexacro.ColorObject("#FFFFFF")
            								}
            							},
            							"class" :
            							[
            								{
            									"Button" :
            									{
            										"class" :
            										[
            											{
            												"" :
            												{
            													"self" :
            													{
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("1px solid #4D63E4"),
            															"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemO.png\")"),
            															"color" : nexacro.ColorObject("#161C29")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							]
            						}
            					},
            					{
            						"btn_WF_ServiceS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #4D63E4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("700 30px/36px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #4D63E4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("700 30px/36px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #4D63E4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("700 30px/36px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #4D63E4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("700 30px/36px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #4D63E4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 20px 0px 0px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("700 30px/36px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Link" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#4D63E4"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#4D63E4"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#4D63E4"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#4D63E4"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262FAF"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_InputButton" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("700 24px/29px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            								},
            								"focused" :
            								{
            								},
            								"pushed" :
            								{
            								},
            								"selected" :
            								{
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Multi" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #DFE1E9"),
            									"padding" : nexacro.PaddingObject("10px 20px"),
            									"color" : nexacro.ColorObject("#8F98A9"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("2px solid #DFE1E9"),
            									"padding" : nexacro.PaddingObject("10px 20px"),
            									"color" : nexacro.ColorObject("#8F98A9"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("2px solid #DFE1E9"),
            									"padding" : nexacro.PaddingObject("10px 20px"),
            									"color" : nexacro.ColorObject("#8F98A9"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("2px solid #C7CBD4"),
            									"color" : nexacro.ColorObject("#8F98A9"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("2px solid #C7CBD4"),
            									"color" : nexacro.ColorObject("#8F98A9"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_MultiS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #4D63E4"),
            									"padding" : nexacro.PaddingObject("10px 20px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("2px solid #4D63E4"),
            									"padding" : nexacro.PaddingObject("10px 20px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("2px solid #4D63E4"),
            									"padding" : nexacro.PaddingObject("10px 20px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("2px solid #4D63E4"),
            									"padding" : nexacro.PaddingObject("10px 20px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("2px solid #4D63E4"),
            									"padding" : nexacro.PaddingObject("10px 20px"),
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Info" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #C8CEDE, 0px none"),
            									"color" : nexacro.ColorObject("#C8CEDE"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #C8CEDE, 0px none"),
            									"color" : nexacro.ColorObject("#C8CEDE"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #C8CEDE, 0px none"),
            									"color" : nexacro.ColorObject("#C8CEDE"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #C8CEDE, 0px none"),
            									"color" : nexacro.ColorObject("#0E1524"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #C8CEDE, 0px none"),
            									"color" : nexacro.ColorObject("#0E1524"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_InfoS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #0E1524, 0px none"),
            									"color" : nexacro.ColorObject("#0E1524"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #0E1524, 0px none"),
            									"color" : nexacro.ColorObject("#0E1524"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #0E1524, 0px none"),
            									"color" : nexacro.ColorObject("#0E1524"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #0E1524, 0px none"),
            									"color" : nexacro.ColorObject("#0E1524"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #0E1524, 0px none"),
            									"color" : nexacro.ColorObject("#0E1524"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FloatingTop" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#3D5465")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#3D5465")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FloatingDownload" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#3D5465")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#3D5465")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            								},
            								"pushed" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Drop" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            									"padding" : nexacro.PaddingObject("0px 14px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            									"padding" : nexacro.PaddingObject("0px 14px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            									"padding" : nexacro.PaddingObject("0px 14px 0px 0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            									"padding" : nexacro.PaddingObject("0px 14px 0px 0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            									"padding" : nexacro.PaddingObject("0px 14px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            									"padding" : nexacro.PaddingObject("0px 14px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Confirm" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #C8CEDE, 0px none, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#4D63E4"),
            									"font" : nexacro.FontObject("700 24px/29px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #C8CEDE, 0px none, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#4D63E4"),
            									"font" : nexacro.FontObject("700 24px/29px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #C8CEDE, 0px none, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#4D63E4"),
            									"font" : nexacro.FontObject("700 24px/29px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #C8CEDE, 0px none, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#4D63E4"),
            									"font" : nexacro.FontObject("700 24px/29px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #C8CEDE, 0px none, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#4D63E4"),
            									"font" : nexacro.FontObject("700 24px/29px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_BF_Links" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 16px/28px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 16px/28px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 16px/28px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 16px/28px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 16px/28px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_BF_Links_M" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 14px/17px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 14px/17px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 14px/17px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 14px/17px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 14px/17px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_BF_LinksB" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 16px/28px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 16px/28px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 16px/28px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 16px/28px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("10px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 16px/28px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_BF_LinksB_M" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 14px/17px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 14px/17px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 14px/17px \"Pretendard\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 14px/17px \"Pretendard\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("6px 6px"),
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("700 14px/17px \"Pretendard\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxN.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            						"font" : nexacro.FontObject("400 20px/24px \"Pretendard\""),
            						"letterSpacing" : nexacro.CSSValueObject("-1px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxO.png\")")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxO.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxSO.png\")")
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DBDCDE")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DBDCDE")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")"),
            								"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            							}
            						}
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DBDCDE"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            						"font" : nexacro.FontObject("400 20px/24 \"Pretendard\""),
            						"letterSpacing" : nexacro.CSSValueObject("-1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#C3C4C8")
            					}
            				}
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DBDCDE"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            						"font" : nexacro.FontObject("400 20px/24 \"Pretendard\""),
            						"letterSpacing" : nexacro.CSSValueObject("-1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#C3C4C8")
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("2px solid #9FA9BF, 0px none, 2px solid #9FA9BF, 0px none")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #E8EFF5, 0px none")
            							}
            						}
            					}
            				}
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
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#0E1524"),
            												"font" : nexacro.FontObject("400 14px \"noto\",\"Noto Sans KR Regular\""),
            												"padding" : nexacro.PaddingObject("6px 10px")
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
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #E7EBF5, 0px none, 1px solid #E7EBF5, 0px none"),
            												"padding" : nexacro.PaddingObject("6px 10px"),
            												"color" : nexacro.ColorObject("#232A29"),
            												"font" : nexacro.FontObject("400 14px \"noto\",\"Noto Sans KR Regular\"")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #E7EBF5, 0px none, 1px solid #E7EBF5, 0px none"),
            												"padding" : nexacro.PaddingObject("6px 10px"),
            												"color" : nexacro.ColorObject("#232A29"),
            												"font" : nexacro.FontObject("400 14px \"noto\",\"Noto Sans KR Regular\"")
            											},
            											"selected" :
            											{
            												"border" : nexacro.BorderObject("1px solid #E7EBF5, 0px none, 1px solid #E7EBF5, 0px none"),
            												"padding" : nexacro.PaddingObject("6px 10px"),
            												"color" : nexacro.ColorObject("#232A29"),
            												"font" : nexacro.FontObject("400 14px \"noto\",\"Noto Sans KR Regular\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_WF_Cell02" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #E7EBF5, 0px none, 1px solid #E7EBF5, 0px none"),
            															"padding" : nexacro.PaddingObject("3px 10px"),
            															"color" : nexacro.ColorObject("#232A29"),
            															"font" : nexacro.FontObject("400 14px \"noto\",\"Noto Sans KR Regular\"")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("1px solid #E7EBF5, 0px none, 1px solid #E7EBF5, 0px none"),
            															"padding" : nexacro.PaddingObject("3px 10px"),
            															"color" : nexacro.ColorObject("#232A29"),
            															"font" : nexacro.FontObject("400 14px \"noto\",\"Noto Sans KR Regular\"")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("1px solid #E7EBF5, 0px none, 1px solid #E7EBF5, 0px none"),
            															"padding" : nexacro.PaddingObject("3px 10px"),
            															"color" : nexacro.ColorObject("#232A29"),
            															"font" : nexacro.FontObject("400 14px \"noto\",\"Noto Sans KR Regular\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("7px 15px 7px 15px"),
            								"font" : nexacro.FontObject("400 20px/24px \"Pretendard\""),
            								"letterSpacing" : nexacro.CSSValueObject("-1px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"focused" :
            							{
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("7px 15px 7px 15px"),
            								"font" : nexacro.FontObject("400 20px/24px \"Pretendard\""),
            								"letterSpacing" : nexacro.CSSValueObject("-1px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"focused" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DBDCDE"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            						"font" : nexacro.FontObject("400 20px/24px \"Pretendard\""),
            						"letterSpacing" : nexacro.CSSValueObject("-1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#C3C4C8")
            					}
            				}
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DBDCDE"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            						"font" : nexacro.FontObject("400 20px/24px \"Pretendard\""),
            						"letterSpacing" : nexacro.CSSValueObject("-1px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#C3C4C8")
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemN.png\")"),
            								"padding" : nexacro.PaddingObject("0px 50px 0px 0px"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            								"font" : nexacro.FontObject("400 20px/24px \"Pretendard\""),
            								"letterSpacing" : nexacro.CSSValueObject("-1px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemO.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#333D4B"),
            						"font" : nexacro.FontObject("400 20px/24px \"Pretendard\""),
            						"letterSpacing" : nexacro.CSSValueObject("-1px")
            					}
            				},
            				"class" :
            				[
            					{
            						"sta_MF_ImgTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 14px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("800 39px/47px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_TitleL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("800 38px/50px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_TitleLeftL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("800 38px/50px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_TitleWhiteL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("800 38px/50px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_TitleWhiteLeftL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("800 38px/50px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_TitleM" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#192332"),
            									"font" : nexacro.FontObject("800 32px/38px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_TitleWhiteM" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("800 32px/38px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_TitleS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("800 26px/31px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_BodyM" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 20px/30px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_BodyMC" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 20px/30px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_BodyWhiteM" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("500 20px/30px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_BodyGrayM" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#AEC5E5"),
            									"font" : nexacro.FontObject("500 20px/30px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_BodyS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#748192"),
            									"font" : nexacro.FontObject("500 16px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_BodyGrayS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 16px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ConBlueR" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#3671FC"),
            									"font" : nexacro.FontObject("400 20px/25px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ConBlueEB" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#3671FC"),
            									"font" : nexacro.FontObject("800 26px/31px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ItemStep" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#3671FC"),
            									"font" : nexacro.FontObject("800 14px/17px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Caption" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#5C677B"),
            									"font" : nexacro.FontObject("700 16px/20px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Caption02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 12px 0px 0px"),
            									"color" : nexacro.ColorObject("#C2DFFF"),
            									"font" : nexacro.FontObject("400 18px/30px \"Pretendard\""),
            									"wordWrap" : "char"
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Caption03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#9BB5D3"),
            									"font" : nexacro.FontObject("400 16px/19px \"Pretendard\""),
            									"wordWrap" : "char"
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Caption04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#55657A"),
            									"font" : nexacro.FontObject("700 16px/19px \"Pretendard\""),
            									"wordWrap" : "char"
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem05" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem06" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem07" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem08" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem09" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_ServiceItem10" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("34px 0px 0px 0px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#4D5B6F"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Line" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #34394E, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ItemTitleL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("8px 0px 0px 0px"),
            									"font" : nexacro.FontObject("600 24px \"noto\",\"Noto Sans KR Bold\",\"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ItemTitle2L" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("8px 0px 0px 0px"),
            									"font" : nexacro.FontObject("400 40px/48px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ToolTip" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #BFD1E9"),
            									"padding" : nexacro.PaddingObject("9px 19px"),
            									"color" : nexacro.ColorObject("#3671FC"),
            									"font" : nexacro.FontObject("700 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ItemSubTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #93C0FF, 0px none"),
            									"color" : nexacro.ColorObject("#93C0FF"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessTitle01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("700 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessTitle02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("700 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessTitle03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 20px"),
            									"color" : nexacro.ColorObject("#1D5F5A"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessTitle04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 20px"),
            									"color" : nexacro.ColorObject("#24486A"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessTitle05" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 20px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("700 22px/26px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessSubTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("10px 20px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#72849C"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessSubTitle02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#246A65"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessSubTitle03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#3F6CAF"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessBody" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#55657A"),
            									"font" : nexacro.FontObject("700 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessBody02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#72849C"),
            									"font" : nexacro.FontObject("500 18px/22px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessCaption" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#55657A"),
            									"font" : nexacro.FontObject("500 16px/19px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ProcessCaptionRed" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px"),
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#E75F4D"),
            									"font" : nexacro.FontObject("500 16px/19px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TextCenter" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("400 24px/29px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #A8BEE0"),
            									"color" : nexacro.ColorObject("#A8BEE0"),
            									"font" : nexacro.FontObject("400 15px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleLabelGray" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("12px 32px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleLabelBlue" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("12px 32px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleLabelBlack" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("12px 32px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_EditLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 14px 10px"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_EditLabelE" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
            									"font" : nexacro.FontObject("400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("700 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Text" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("400 16px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Head" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("8px 14px"),
            									"font" : nexacro.FontObject("700 16px/20px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Body" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #EFF2F9"),
            									"padding" : nexacro.PaddingObject("7px 13px"),
            									"font" : nexacro.FontObject("400 16px/20px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_AlertText" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 400 20px/24px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Copyright_M" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 14px/17px \"Pretendard\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Copyright" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#6F757D"),
            									"font" : nexacro.FontObject("500 16px/28px \"Pretendard\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DBDCDE"),
            						"padding" : nexacro.PaddingObject("10px 15px 10px 15px"),
            						"font" : nexacro.FontObject("400 20px/26px \"Pretendard\""),
            						"letterSpacing" : nexacro.CSSValueObject("-1px"),
            						"wordWrap" : "char"
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9"),
            						"wordWrap" : "char"
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9"),
            						"wordWrap" : "char"
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#C3C4C8")
            					}
            				},
            				"class" :
            				[
            					{
            						"txt_WF_policyBody" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("400 16px/24px \"Pretendard\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("400 16px/24px \"Pretendard\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("400 16px/24px \"Pretendard\"")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("400 16px/24px \"Pretendard\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("400 16px/24px \"Pretendard\"")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("400 16px/24px \"Pretendard\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DBDCDE"),
            						"padding" : nexacro.PaddingObject("10px 15px 10px 15px"),
            						"font" : nexacro.FontObject("400 20px/26px \"Pretendard\""),
            						"letterSpacing" : nexacro.CSSValueObject("-1px"),
            						"wordWrap" : "char"
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9"),
            						"wordWrap" : "char"
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8F98A9"),
            						"wordWrap" : "char"
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#C3C4C8")
            					}
            				}
            			},
            			"Panel" :
            			{
            				"class" :
            				[
            					{
            						"pnl_MF_ItemBox" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DBE3F3, 0px none, 1px solid #DBE3F3, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"pnl_WF_ItemBoxWhite" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff, 0px none, 0px none, 0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_BF_LineBox" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #606060, 0px none, 0px none, 0px none")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/tib_WF_Min.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MinO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MinD.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MaxO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Max.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MaxD.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Normal.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_NormalO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_NormalD.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Close.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_CloseO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/tib_WF_CloseD.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecD.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincD.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecD.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincD.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxN.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxS.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxSO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_Drop.png")] = { width:22, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemN.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_UXProN.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_UXProO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_DevProN.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_DevProO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_ProGenN.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_ProGenO.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:0, height:0 };
	};
}
)();
