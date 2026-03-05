(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            					},
            					"contents" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"frm_POP_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #CFD1D8")
            								}
            							}
            						}
            					}
            				]
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e1e2e7, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef, 0px none, 0px none, 0px none")
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
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HincD.png\")")
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
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #e1e2e7"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #efefef")
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c8cdd7"),
            						"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
            						"color" : nexacro.ColorObject("#636981"),
            						"letterSpacing" : nexacro.CSSValueObject("-1px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_WF_Crud" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3073C7"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3073C7")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3073C7")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Add" :
            						{
            							"self" :
            							{
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Delete" :
            						{
            							"self" :
            							{
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								},
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Delete.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ExcelUp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_ExcelUp.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_ExcelUp.png\")"),
            									"iconPosition" : "left"
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ExcelSave" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_ExcelSave.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_ExcelSave.png\")"),
            									"iconPosition" : "left"
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            									"color" : nexacro.ColorObject("#666666"),
            									"font" : nexacro.FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            									"color" : nexacro.ColorObject("#666666"),
            									"font" : nexacro.FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_EdiSch" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #efefef")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Top" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Top.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Top.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Top.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #76B1EE")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Pause" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Pause.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Play" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Play.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_more" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_more.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Prev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Prev.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Next" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Next.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Footer" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#909095")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#909095")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#909095")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#909095")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_mTMenu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_mTMenuS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_FooterLaw" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#76B1EE")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7FA7D7")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7FA7D7")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7FA7D7")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_grdTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#777777")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_grdTitleS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_img01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img01.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img01O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img01O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img01O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000, 1px solid #c8cdd7, 1px solid #c8cdd7, 1px solid #c8cdd7")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_img02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img02.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img02O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img02O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img02O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000, 1px solid #c8cdd7, 1px solid #c8cdd7, 1px solid #c8cdd7")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_img03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img03.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img03O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img03O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img03O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000, 1px solid #c8cdd7, 1px solid #c8cdd7, 1px solid #c8cdd7")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_img04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img04.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img04O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img04O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_img04O.png\")"),
            									"border" : nexacro.BorderObject("1px solid #c8cdd7")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000, 1px solid #c8cdd7, 1px solid #c8cdd7, 1px solid #c8cdd7")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Contact" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Contact.png\")"),
            									"border" : nexacro.BorderObject("1px solid #B9D0DD")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #B9D0DD")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #B9D0DD")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_mMenu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_mMenu.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_mMenu.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_mMenu.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_mMenu.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_mClose" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_mClose.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_mClose.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_mClose.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_mClose.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Link" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #909095"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Link.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 210px 0px 0px"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#909095")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #909095"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Link.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 210px 0px 0px"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#909095")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #909095"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Link.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 210px 0px 0px"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#909095")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #909095"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Link.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 210px 0px 0px"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#909095")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_LinkS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #909095"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_LinkS.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 210px 0px 0px"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#909095")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #909095"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_LinkS.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 210px 0px 0px"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#909095")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #909095"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_LinkS.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 210px 0px 0px"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#909095")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #909095"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_LinkS.png\")"),
            									"iconPosition" : "right",
            									"textPadding" : nexacro.PaddingObject("0px 210px 0px 0px"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#909095")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Bookmark" :
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
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #000000")
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
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
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
            									"border" : nexacro.BorderObject("1px solid #dddddd, 0px none, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#3683E2"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd, 0px none, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#3683E2"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#3683E2"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#3683E2"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff2d4b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff2d4b")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff2d4b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff2d4b")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				}
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnD.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtn.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropBtnD.png\")")
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtn.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtn.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtnO.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtnO.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PreBtnD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PreBtn.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PreBtn.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PreBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PreBtnO.png\")")
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtn.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtn.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnO.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnO.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtn.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtn.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnO.png\")")
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#666666")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#239cf0")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ee5555")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            									},
            									"day" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"today" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#239cf0")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ee5555")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#aaaaaa")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 12px")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 12px")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 12px")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxS.png\")")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxD.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxDS.png\")")
            					}
            				},
            				"class" :
            				[
            					{
            						"chk_WF_AgreeFull" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_AgreeFull.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            								},
            								"readonly" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_AgreeFull.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_AgreeFullS.png\")")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_AgreeFullS.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_AgreeFullS.png\")")
            								}
            							}
            						}
            					},
            					{
            						"chk_WF_Agree" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Agree.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            								},
            								"readonly" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Agree.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_AgreeS.png\")")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_AgreeS.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_AgreeS.png\")")
            								}
            							}
            						}
            					},
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxES.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxES.png\")")
            								},
            								"readonly" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxES.png\")")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxSES.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxSES.png\")")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CheckBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 12px")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 12px")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 12px")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxS.png\")")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxD.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxDS.png\")")
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxSES.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_boxSES.png\")")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff2d4b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff2d4b")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff2d4b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff2d4b")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #646982")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #646982")
            							}
            						}
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("8px 0px 8px 15px"),
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"selected" :
            									{
            									}
            								},
            								"class" :
            								[
            									{
            										"cmb_MF_Link" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"color" : nexacro.ColorObject("#909095"),
            													"padding" : nexacro.PaddingObject("6px 8px")
            												},
            												"focused" :
            												{
            													"color" : nexacro.ColorObject("#909095"),
            													"padding" : nexacro.PaddingObject("6px 8px")
            												},
            												"selected" :
            												{
            													"color" : nexacro.ColorObject("#909095"),
            													"padding" : nexacro.PaddingObject("6px 8px")
            												}
            											}
            										}
            									}
            								]
            							},
            							"ComboControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("8px 0px 8px 15px"),
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"selected" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 0px 8px 15px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("8px 0px 8px 15px")
            							},
            							"selected" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				},
            				"class" :
            				[
            					{
            						"div_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c8cdd7, 1px solid #c8cdd7, 1px solid #a9aeb7, 1px solid #c8cdd7")
            								}
            							}
            						}
            					},
            					{
            						"div_MF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c8cdd7, 0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"edt_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #646982")
            								},
            								"readonly" :
            								{
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#aeaeae")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #efefef"),
            									"color" : nexacro.ColorObject("#aeaeae")
            								}
            							}
            						}
            					},
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"essentialSub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf")
            								}
            							}
            						}
            					},
            					{
            						"edt_WF_SearchEssential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px")
            								},
            								"readonly" :
            								{
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#aaaaaa")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"color" : nexacro.ColorObject("#aaaaaa")
            								}
            							}
            						}
            					},
            					{
            						"output" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								}
            							}
            						}
            					}
            				]
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            					},
            					"pushed" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
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
            					"disabled" :
            					{
            					}
            				}
            			},
            			"fileuploaditem" :
            			{
            				"parent" :
            				{
            					"FileUpload" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"focused" :
            									{
            									},
            									"readonly" :
            									{
            									},
            									"nulltext" :
            									{
            										"color" : nexacro.ColorObject("#aeaeae")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            									},
            									"pushed" :
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
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340, 1px solid #e1e2e7, 1px solid #e1e2e7, 1px solid #e1e2e7")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_MF_News" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_MF_Link" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #909095")
            								}
            							}
            						}
            					},
            					{
            						"grd_POP_Combo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
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
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e1e2e7"),
            												"color" : nexacro.ColorObject("#666666"),
            												"font" : nexacro.FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            											},
            											"focused" :
            											{
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
            												"border" : nexacro.BorderObject("1px solid #eeeeee"),
            												"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            											},
            											"focused" :
            											{
            											},
            											"selected" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_MF_News" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														}
            													}
            												}
            											},
            											{
            												"grd_MF_Link" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"padding" : nexacro.PaddingObject("0px 10px"),
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #909095, 0px none"),
            															"color" : nexacro.ColorObject("#909095")
            														},
            														"focused" :
            														{
            															"padding" : nexacro.PaddingObject("0px 10px"),
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #909095, 0px none"),
            															"color" : nexacro.ColorObject("#909095")
            														},
            														"selected" :
            														{
            															"padding" : nexacro.PaddingObject("0px 10px"),
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #909095, 0px none"),
            															"color" : nexacro.ColorObject("#909095")
            														}
            													}
            												}
            											},
            											{
            												"grd_POP_Combo" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dddddd, 0px none"),
            															"padding" : nexacro.PaddingObject("0px 30px")
            														},
            														"focused" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #c8cdd7"),
            												"padding" : nexacro.PaddingObject("4px 10px 4px 10px"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
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
            						"cell_WF_fixing" :
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
            															"border" : nexacro.BorderObject("1px solid #d7d9e3")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Point01" :
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
            															"color" : nexacro.ColorObject("#e10000")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Point02" :
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
            															"color" : nexacro.ColorObject("#f28005")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Point03" :
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
            															"color" : nexacro.ColorObject("#2756b6")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Point04" :
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
            															"color" : nexacro.ColorObject("#2d9d0f")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Link" :
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
            															"color" : nexacro.ColorObject("#228ff5")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_PointTxt01" :
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
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_PointTxt02" :
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
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_PointTxt03" :
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
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_PointTxt04" :
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
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Sum01" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"summary" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #eeeeee"),
            															"color" : nexacro.ColorObject("#333333"),
            															"font" : nexacro.FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Sum02" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"summary" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #eeeeee"),
            															"color" : nexacro.ColorObject("#333333"),
            															"font" : nexacro.FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Sum03" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"summary" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #eeeeee"),
            															"color" : nexacro.ColorObject("#333333"),
            															"font" : nexacro.FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_Noti" :
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
            													"class" :
            													[
            														{
            															"grd_MF_News" :
            															{
            																"self" :
            																{
            																	"selected" :
            																	{
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
            						}
            					},
            					{
            						"cell_PR" :
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
            													"class" :
            													[
            														{
            															"grd_MF_News" :
            															{
            																"self" :
            																{
            																	"selected" :
            																	{
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
            						}
            					},
            					{
            						"essential" :
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
            														"focused" :
            														{
            														},
            														"readonly" :
            														{
            														},
            														"selected" :
            														{
            														},
            														"blinked" :
            														{
            														},
            														"disabled" :
            														{
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
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dddddd"),
            								"color" : nexacro.ColorObject("#646982"),
            								"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dddddd"),
            								"color" : nexacro.ColorObject("#646982"),
            								"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313340")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313340")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #eeeeee"),
            								"color" : nexacro.ColorObject("#aaaaaa")
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeClose.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeOpen.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeCloseImg.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeOpenImg.png\")")
            									},
            									"leaf" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeLeafImg.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px dotted #999999")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px dotted #aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"textPadding" : nexacro.PaddingObject("0px 5px 0px 5px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dddddd")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #efefef")
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				},
            				"class" :
            				[
            					{
            						"img_MF_FooterLogo" :
            						{
            							"self" :
            							{
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #828288")
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
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"output" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"essentialSub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf")
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd"),
            						"padding" : nexacro.PaddingObject("0px 15px 0px 0px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #eeeeee")
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #eeeeee")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"progressstartcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressendcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Item.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Item.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemD.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemDS.png\")")
            							}
            						},
            						"class" :
            						[
            							{
            								"essential" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemES.png\")")
            										},
            										"mouseover_selected" :
            										{
            											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemSES.png\")")
            										},
            										"selected" :
            										{
            											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemSES.png\")")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef")
            					}
            				},
            				"class" :
            				[
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								}
            							}
            						}
            					}
            				]
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnD.png\")")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtn.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DownBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnD.png\")")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtn.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 0px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 0px")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 0px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#aaaaaa")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 4px 0px"),
            								"font" : nexacro.FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 4px 0px"),
            								"font" : nexacro.FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 4px 0px"),
            								"font" : nexacro.FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#aaaaaa")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#aeaeae")
            							}
            						}
            					}
            				}
            			},
            			"SpinControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"wordWrap" : "char"
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"sta_WF_Label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 12px"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_LabelBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e1e2e7"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 12px"),
            									"color" : nexacro.ColorObject("#000000")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 10px 20px"),
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SubTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 10px 16px"),
            									"font" : nexacro.FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SchLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 28px"),
            									"font" : nexacro.FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_WATitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #3E61D7"),
            									"font" : nexacro.FontObject("bold 22px/34px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#3E61D7")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_WATxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("20px"),
            									"wordWrap" : "char",
            									"border" : nexacro.BorderObject("0px none, 1px solid #E5E5E5, 1px solid #E5E5E5, 1px solid #E5E5E5"),
            									"font" : nexacro.FontObject("18px/32px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#4F4F4F"),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_WATxt2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("20px"),
            									"wordWrap" : "char",
            									"font" : nexacro.FontObject("18px/32px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#4F4F4F"),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Point" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 16px/34px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#0F2058")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_WACon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 20px/32px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d7d7d7"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 30px"),
            									"color" : nexacro.ColorObject("#555555")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailBg2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #E5E5E5"),
            									"padding" : nexacro.PaddingObject("0px 20px"),
            									"wordWrap" : "char",
            									"font" : nexacro.FontObject("16px/28px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#4F4F4F"),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_JoinLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#575658")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_JoinLabelE" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 30px"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#575658")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TermsLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d7d7d7"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
            									"font" : nexacro.FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#575658")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TermsLabelBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d7d7d7"),
            									"padding" : nexacro.PaddingObject("20px 0px 0px 20px"),
            									"font" : nexacro.FontObject("bold 20px/32px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#575658")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Location" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#8e919c"),
            									"font" : nexacro.FontObject("20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Footer" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("16px/30px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#828288")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#333333")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Sub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("20px/34px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\""),
            									"color" : nexacro.ColorObject("#8F8F8F")
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
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GSize" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#F03061")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt02B" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("bold 12px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#636981"),
            									"font" : nexacro.FontObject("11px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ff000c"),
            									"font" : nexacro.FontObject("11px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt05" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ff7200"),
            									"font" : nexacro.FontObject("bold 12px/20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt06" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ee5555"),
            									"font" : nexacro.FontObject("12px/20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GBar" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
            									"color" : nexacro.ColorObject("#23273c"),
            									"font" : nexacro.FontObject("bold 33px/50px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GNum" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#445BEC"),
            									"font" : nexacro.FontObject("bold 30px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Box" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GBg02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #333333"),
            									"padding" : nexacro.PaddingObject("8px"),
            									"font" : nexacro.FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 20px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 1px solid #f4f5f9,  0px none, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 1px solid #f4f5f9,  0px none, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313340,  0px none,  0px none, 0px none"),
            								"color" : nexacro.ColorObject("#313340")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#caccd1")
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitemtext" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 20px 0px 20px"),
            										"font" : nexacro.FontObject("20px/50px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#aeaeae")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_X.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c8cdd7, 0px none, 0px none, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c8cdd7, 0px none, 0px none, 0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c8cdd7, 0px none, 0px none, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd"),
            						"padding" : nexacro.PaddingObject("15px 15px 0px 15px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("18px/34px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aaaaaa")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				},
            				"class" :
            				[
            					{
            						"txt_WF_Terms" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("8px 8px 0px 8px"),
            									"wordWrap" : "char",
            									"font" : nexacro.FontObject("18px/34px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("8px 8px 0px 8px"),
            									"wordWrap" : "char",
            									"font" : nexacro.FontObject("18px/34px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("8px 8px 0px 8px"),
            									"wordWrap" : "char",
            									"font" : nexacro.FontObject("18px/34px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("8px 8px 0px 8px"),
            									"wordWrap" : "char",
            									"font" : nexacro.FontObject("18px/34px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"output" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f6e5bf")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"error" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ee5555")
            								}
            							}
            						}
            					},
            					{
            						"txt_POP_Text" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
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
            						"border" : nexacro.BorderObject("1px solid #dddddd"),
            						"padding" : nexacro.PaddingObject("15px 15px 0px 15px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("18px/34px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #313340")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aaaaaa")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #efefef"),
            						"color" : nexacro.ColorObject("#aeaeae")
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecO.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecD.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincD.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincO.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtn.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtnO.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtnD.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DownBtn.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DownBtnO.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DownBtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpBtn.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpBtnO.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpBtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PreBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PreBtnO.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PreBtnD.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnO.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnD.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_box.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxS.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxD.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxDS.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_Drop.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropO.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropD.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Search.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeClose.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeOpen.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCloseImg.png")] = { width:16, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeOpenImg.png")] = { width:16, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeLeafImg.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Item.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemD.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemDS.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PreBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PreBtnO.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnO.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_X.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Delete.png")] = { width:9, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ExcelUp.png")] = { width:18, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ExcelSave.png")] = { width:18, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SearchO.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_AgreeFull.png")] = { width:35, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_AgreeFullS.png")] = { width:35, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Agree.png")] = { width:28, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_AgreeS.png")] = { width:28, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Title.png")] = { width:12, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SubTitle.png")] = { width:11, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SchLabel.png")] = { width:23, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_JoinLabelE.png")] = { width:22, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Top.png")] = { width:21, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Pause.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Play.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_more.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Prev.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Next.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Over.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_img01.png")] = { width:150, height:170 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_img01O.png")] = { width:150, height:170 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_img02.png")] = { width:150, height:170 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_img02O.png")] = { width:150, height:170 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_img03.png")] = { width:150, height:170 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_img03O.png")] = { width:150, height:170 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_img04.png")] = { width:150, height:170 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_img04O.png")] = { width:150, height:170 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Contact.png")] = { width:156, height:56 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_mMenu.png")] = { width:30, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_mClose.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Link.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_LinkS.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Bookmark.png")] = { width:17, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_Noti.png")] = { width:52, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_PR.png")] = { width:52, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_MF_User.png")] = { width:24, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_MF_Alerm.png")] = { width:24, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_MF_Logo.png")] = { width:125, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_MF_LogoFooter.png")] = { width:88, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/essential.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxES.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_boxSES.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemES.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemSES.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:19, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SearchD.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnO.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_Nodata.png")] = { width:91, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeChk.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeChkS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_Info.png")] = { width:38, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img01.png")] = { width:400, height:186 };
        		imgcache[nexacro._getImageLocation("theme://images/img02.png")] = { width:400, height:186 };
        		imgcache[nexacro._getImageLocation("theme://images/img03.png")] = { width:400, height:186 };
        		imgcache[nexacro._getImageLocation("theme://images/img04.png")] = { width:400, height:186 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Chrome.gif")] = { width:71, height:65 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Edge.png")] = { width:178, height:178 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Join.png")] = { width:454, height:396 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Next.png")] = { width:21, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step01.png")] = { width:45, height:45 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step01C.png")] = { width:45, height:45 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step02.png")] = { width:45, height:45 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step02C.png")] = { width:45, height:45 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step03.png")] = { width:45, height:45 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step03C.png")] = { width:45, height:45 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA01.png")] = { width:82, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA02.png")] = { width:206, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA03.png")] = { width:297, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA04.png")] = { width:27, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA05.png")] = { width:27, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA06.png")] = { width:240, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA07.png")] = { width:124, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA08.png")] = { width:218, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA09.png")] = { width:246, height:62 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WA10.png")] = { width:237, height:62 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_Next.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_NextD.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PmnuChk.png")] = { width:16, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PmnuIcon.png")] = { width:10, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_Prev.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PrevD.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Next.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_NextD.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_NextO.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Prev.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_PrevD.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_PrevO.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_SelBtn.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_MF_bg.png")] = { width:480, height:400 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Logo.png")] = { width:300, height:80 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_LogoFooter.png")] = { width:300, height:80 };
        		imgcache[nexacro._getImageLocation("theme://images/�����ټ��ȳ�.jpg")] = { width:1920, height:170 };
	};
}
)();
