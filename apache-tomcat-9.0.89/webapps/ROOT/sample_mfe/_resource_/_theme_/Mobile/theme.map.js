(function()
{
	return function(nexacro, system, trace, environment, application)
	{
		environment._setCSSPredefineMaps (
		{
			
		}
		);

		const PaddingObject = nexacro.PaddingObject
		const UrlObject = nexacro.UrlObject
		const EdgeImageObject = nexacro.EdgeImageObject
		const BorderObject = nexacro.BorderObject
		const ColorObject = nexacro.ColorObject
		const FontObject = nexacro.FontObject
		const CSSValueObject = nexacro.CSSValueObject

		const getCSSPredefineValue = environment._getCSSPredefineValue.bind(environment);
		const getScreenCSSMapValue = environment._getScreenCSSMapValue.bind(environment);


		environment._setCSSMaps(
		{
			"monthitem" : 
			{
				"parent" : 
				{
					"body" : 
					{
						"parent" : 
						{
							"datepicker" : 
							{
								"parent" : 
								{
									"CalendarControl" : 
									{
										"self" : 
										{
											"focused" : 
											{
												"color" : ColorObject("#333333")
											},
											"pushed" : 
											{
												"color" : ColorObject("#ffffff")
											},
											"enabled" : 
											{
												"color" : ColorObject("#333333")
											},
											"selected" : 
											{
												"color" : ColorObject("#ffffff")
											}
										}
									},
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"focused" : 
													{
														"color" : ColorObject("#333333")
													},
													"pushed" : 
													{
														"color" : ColorObject("#ffffff")
													},
													"enabled" : 
													{
														"color" : ColorObject("#333333")
													},
													"selected" : 
													{
														"color" : ColorObject("#ffffff")
													}
												}
											},
											"PopupDateRangePicker" : 
											{
												"self" : 
												{
													"focused" : 
													{
														"color" : ColorObject("#333333")
													},
													"pushed" : 
													{
														"color" : ColorObject("#ffffff")
													},
													"enabled" : 
													{
														"color" : ColorObject("#333333")
													},
													"selected" : 
													{
														"color" : ColorObject("#ffffff")
													}
												}
											},
											"DateRangePickerControl" : 
											{
												"self" : 
												{
													"focused" : 
													{
														"color" : ColorObject("#333333")
													},
													"pushed" : 
													{
														"color" : ColorObject("#ffffff")
													},
													"enabled" : 
													{
														"color" : ColorObject("#333333")
													},
													"selected" : 
													{
														"color" : ColorObject("#ffffff")
													}
												}
											}
										}
									},
									"Calendar" : 
									{
										"self" : 
										{
											"focused" : 
											{
												"color" : ColorObject("#333333")
											},
											"pushed" : 
											{
												"color" : ColorObject("#ffffff")
											},
											"enabled" : 
											{
												"color" : ColorObject("#333333")
											},
											"selected" : 
											{
												"color" : ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"trailingbutton" : 
			{
				"parent" : 
				{
					"box" : 
					{
						"parent" : 
						{
							"TextField" : 
							{
								"self" : 
								{
									"valid" : 
									{
									},
									"invalid" : 
									{
									}
								}
							}
						}
					}
				}
			},
			"Edit" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#AEAEAE")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB"),
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2"),
						"padding" : PaddingObject("0px 15px")
					}
				},
				"class" : [
				{
					"edt_LOGIN_Id" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("2px solid #D6DFE2"),
								"padding" : PaddingObject("0px 0px 0px 80px")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #D6DFE2"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"edt_LOGIN_IdError" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"mouseover" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"focused" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"nulltext" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"disabled" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"edt_LOGIN_Pw" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("2px solid #D6DFE2"),
								"padding" : PaddingObject("0px 0px 0px 80px")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #D6DFE2"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"edt_LOGIN_PwError" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"mouseover" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"focused" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"nulltext" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"disabled" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #ee5555"),
								"padding" : PaddingObject("0px 0px 0px 80px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"edt_RF_Sch" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("1px solid #D6DFE2"),
								"padding" : PaddingObject("0px 70px 0px 16px"),
								"letterSpacing" : CSSValueObject("-1px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"nulltext" : 
							{
								"color" : ColorObject("#A3AEB2")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D6DFE2"),
								"padding" : PaddingObject("0px 70px 0px 16px"),
								"letterSpacing" : CSSValueObject("-1px"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				}
				]
			},
			"startdate" : 
			{
				"parent" : 
				{
					"headline" : 
					{
						"parent" : 
						{
							"DateRangePicker" : 
							{
								"self" : 
								{
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					}
				}
			},
			"cellcombo" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
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
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000"),
						"color" : ColorObject("#000000")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#AEAEAE")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB"),
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2"),
						"padding" : PaddingObject("0px 15px")
					}
				},
				"class" : [
				{
					"msk_WF_Spin" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					}
				}
				]
			},
			"MainFrame" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						get font() { return getScreenCSSMapValue(FontObject, undefined, "20pt \"Arial\"", "14pt \"Arial\"", undefined, undefined) }
					}
				}
			},
			"monthstatic" : 
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
										"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					}
				}
			},
			"multicombotext" : 
			{
				"parent" : 
				{
					"MultiCombo" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
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
							"focused" : 
							{
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
							},
							"selected" : 
							{
							}
						}
					}
				}
			},
			"Button" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"pushed" : 
					{
						"color" : ColorObject("#585858")
					},
					"enabled" : 
					{
						"border" : BorderObject("2px solid #CED8DB"),
						"padding" : PaddingObject("0px 12px"),
						get icon() { return getScreenCSSMapValue(UrlObject, undefined, ""url('theme://images/btn_WF_Link02.png')", environment", undefined, undefined, undefined) },
						"color" : ColorObject("#585858"),
						"letterSpacing" : CSSValueObject("-1px"),
						"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
					},
					"selected" : 
					{
						get font() { return getScreenCSSMapValue(FontObject, undefined, undefined, "bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"", undefined, undefined) },
						get color() { return getScreenCSSMapValue(ColorObject, "#585858", undefined, "#585858", undefined, undefined) }
					}
				},
				"class" : [
				{
					"btn_WF_Spinup" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("2px solid #CED8DB")
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"border" : BorderObject("2px solid #CED8DB")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #CED8DB")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #CED8DB")
							}
						}
					}
				},
				{
					"btn_WF_Spindown" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("2px solid #CED8DB")
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"border" : BorderObject("2px solid #CED8DB")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #CED8DB")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #CED8DB")
							}
						}
					}
				},
				{
					"btn_WF_Full" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF")
							}
						}
					}
				},
				{
					"btn_WF_Del" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_WF_Rdo" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #0759F2"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #0759F2"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_WF_RdoS" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #0759F2"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #0759F2"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #0759F2"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_WF_Link01" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"icon" : UrlObject("url('theme://images/btn_WF_Link01.png')", environment),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"icon" : UrlObject("url('theme://images/btn_WF_Link01.png')", environment),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"icon" : UrlObject("url('theme://images/btn_WF_Link01.png')", environment),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_WF_Link02" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"icon" : UrlObject("url('theme://images/btn_WF_Link02.png')", environment),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"icon" : UrlObject("url('theme://images/btn_WF_Link02.png')", environment),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"icon" : UrlObject("url('theme://images/btn_WF_Link02.png')", environment),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_WF_Link03" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"icon" : UrlObject("url('theme://images/btn_WF_Link03.png')", environment),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"icon" : UrlObject("url('theme://images/btn_WF_Link03.png')", environment),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"icon" : UrlObject("url('theme://images/btn_WF_Link03.png')", environment),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_WF_Custom" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#212529"),
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#212529"),
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#212529"),
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_WF_RowAdd" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#212529"),
								"icon" : UrlObject("url('theme://images/btn_WF_RowAdd.png')", environment),
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#212529"),
								"icon" : UrlObject("url('theme://images/btn_WF_RowAdd.png')", environment),
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#212529"),
								"icon" : UrlObject("url('theme://images/btn_WF_RowAdd.png')", environment),
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_WF_RowDel" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#212529"),
								"icon" : UrlObject("url('theme://images/btn_WF_RowDel.png')", environment),
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#212529"),
								"icon" : UrlObject("url('theme://images/btn_WF_RowDel.png')", environment),
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #CED8DB"),
								"color" : ColorObject("#212529"),
								"icon" : UrlObject("url('theme://images/btn_WF_RowDel.png')", environment),
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_WF_ShuttleUp" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"padding" : PaddingObject("0px"),
								"icon" : UrlObject("url('theme://images/btn_WF_ShuttleUp.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px"),
								"icon" : UrlObject("url('theme://images/btn_WF_ShuttleUp.png')", environment)
							},
							"selected" : 
							{
								"padding" : PaddingObject("0px"),
								"icon" : UrlObject("url('theme://images/btn_WF_ShuttleUp.png')", environment)
							}
						}
					}
				},
				{
					"btn_WF_ShuttleDown" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"padding" : PaddingObject("0px"),
								"icon" : UrlObject("url('theme://images/btn_WF_ShuttleDown.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px"),
								"icon" : UrlObject("url('theme://images/btn_WF_ShuttleDown.png')", environment)
							},
							"selected" : 
							{
								"padding" : PaddingObject("0px"),
								"icon" : UrlObject("url('theme://images/btn_WF_ShuttleDown.png')", environment)
							}
						}
					}
				},
				{
					"btn_WF_CloseCon" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #D6DFE2,0px none,0px none,0px none")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #D6DFE2,0px none,0px none,0px none")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #D6DFE2,0px none,0px none,0px none")
							}
						}
					}
				},
				{
					"btn_WF_OpenCon" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #D6DFE2,0px none,0px none,0px none")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #D6DFE2,0px none,0px none,0px none")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #D6DFE2,0px none,0px none,0px none")
							}
						}
					}
				},
				{
					"btn_LOGIN" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 24px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 24px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 24px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 24px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_Home" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_RF_Logout" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("1px solid #47545E"),
								"color" : ColorObject("#A3AEB2"),
								"icon" : UrlObject("url('theme://images/btn_RF_Logout.png')", environment),
								"iconPosition" : "right",
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("15px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #47545E"),
								"color" : ColorObject("#A3AEB2"),
								"icon" : UrlObject("url('theme://images/btn_RF_Logout.png')", environment),
								"iconPosition" : "right",
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("15px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("1px solid #47545E"),
								"color" : ColorObject("#A3AEB2"),
								"icon" : UrlObject("url('theme://images/btn_RF_Logout.png')", environment),
								"iconPosition" : "right",
								"textPadding" : PaddingObject("5px"),
								"font" : FontObject("15px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_Sch" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_RF_1Depth01" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_1Depth01S" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_1Depth02" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_1Depth02S" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_1Depth03" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_1Depth03S" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_1Depth04" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_1Depth04S" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_1Depth05" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"pushed" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_RF_1Depth05S" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("2px solid #EBF0F5,0px none"),
								"padding" : PaddingObject("40px 0px 0px 0px"),
								"color" : ColorObject("#0759F2"),
								"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"btn_TF_Menu" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_TF_Pre" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_TF_Close" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_TF_CloseB" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"border" : BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					}
				}
				]
			},
			"delimiter" : 
			{
				"parent" : 
				{
					"TimePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"MultiComboTagBoxControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("0px none"),
						"padding" : PaddingObject("5px")
					}
				}
			},
			"VScrollIndicatorControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"padding" : PaddingObject("5px 2px 5px 2px")
					}
				}
			},
			"startsubdate" : 
			{
				"parent" : 
				{
					"headline" : 
					{
						"parent" : 
						{
							"DateRangePicker" : 
							{
								"self" : 
								{
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
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
										"icon" : UrlObject("url('theme://images/grd_WF_TreeClose.png')", environment)
									},
									"collapse" : 
									{
										"icon" : UrlObject("url('theme://images/grd_WF_TreeOpen.png')", environment)
									}
								}
							},
							"cell" : 
							{
								"class" : [
								{
									"cell_RF_Lev0" : 
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
																"class" : [
																{
																	"grd_RF_Menu" : 
																	{
																		"self" : 
																		{
																			"focused" : 
																			{
																				"icon" : UrlObject("url('theme://images/blank.png')", environment)
																			},
																			"enabled" : 
																			{
																				"icon" : UrlObject("url('theme://images/blank.png')", environment)
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
								}
								]
							}
						}
					}
				}
			},
			"splitline" : 
			{
				"parent" : 
				{
					"headline" : 
					{
						"parent" : 
						{
							"DateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("1px solid #dddddd")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("1px solid #dddddd")
									}
								}
							}
						}
					}
				}
			},
			"datepicker" : 
			{
				"parent" : 
				{
					"CalendarControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #646982")
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #646982")
							}
						}
					}
				}
			},
			"expandbar" : 
			{
				"parent" : 
				{
					"body" : 
					{
						"parent" : 
						{
							"ListView" : 
							{
								"self" : 
								{
									"expand" : 
									{
										"icon" : UrlObject("url('theme://images/lstv_WF_Expand.png')", environment)
									},
									"enabled" : 
									{
										"icon" : UrlObject("url('theme://images/lstv_WF_Expand.png')", environment)
									},
									"collapse" : 
									{
										"icon" : UrlObject("url('theme://images/lstv_WF_Collapse.png')", environment)
									}
								}
							},
							"ListViewControl" : 
							{
								"self" : 
								{
									"expand" : 
									{
										"icon" : UrlObject("url('theme://images/lstv_WF_Expand.png')", environment)
									},
									"enabled" : 
									{
										"icon" : UrlObject("url('theme://images/lstv_WF_Expand.png')", environment)
									},
									"collapse" : 
									{
										"icon" : UrlObject("url('theme://images/lstv_WF_Collapse.png')", environment)
									}
								}
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
							"disabled" : 
							{
								"color" : ColorObject("#AEAEAE")
							},
							"enabled" : 
							{
								"textPadding" : PaddingObject("0px 5px 0px 5px")
							}
						}
					}
				}
			},
			"enddate" : 
			{
				"parent" : 
				{
					"headline" : 
					{
						"parent" : 
						{
							"DateRangePicker" : 
							{
								"self" : 
								{
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					}
				}
			},
			"selection" : 
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
									}
								}
							}
						}
					}
				}
			},
			"timetabbutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,0px none,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/img_WF_Timerange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,0px none,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/img_WF_Timerange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"icon" : UrlObject("url('theme://images/img_WF_Timerange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					}
				}
			},
			"MultiCombo" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2")
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
							"focused" : 
							{
								"border" : BorderObject("0px none,0px none,4px solid #D6DFE2,0px none"),
								"padding" : PaddingObject("0px 20px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("20px/50px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"disabled" : 
							{
								"color" : ColorObject("#aeaeae")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,4px solid #D6DFE2,0px none"),
								"padding" : PaddingObject("0px 20px"),
								"color" : ColorObject("#A3AEB2"),
								"font" : FontObject("20px/50px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("0px none,0px none,4px solid #0759F2,0px none"),
								"padding" : PaddingObject("0px 20px"),
								"color" : ColorObject("#212529"),
								"font" : FontObject("bold 20px/50px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				}
			},
			"celledit" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"multicombotagbox" : 
			{
				"parent" : 
				{
					"MultiCombo" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("5px")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("5px")
							}
						}
					}
				}
			},
			"detail" : 
			{
				"parent" : 
				{
					"ListView" : 
					{
						"self" : 
						{
							"enabled" : 
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
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB"),
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D4D4D4")
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
							"readonly" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"nulltext" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#AEAEAE")
							},
							"disabled" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#AEAEAE")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							}
						}
					},
					"ComboControl" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"nulltext" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#AEAEAE")
							},
							"disabled" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#AEAEAE")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							}
						}
					}
				}
			},
			"TagBoxControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"padding" : PaddingObject("3px 10px 2px 0px")
					}
				}
			},
			"Grid" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("2px solid #D6DFE2,0px none,0px none,0px none")
					}
				},
				"class" : [
				{
					"grd_WF_SearchBoard" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #FFFFFF")
							}
						}
					}
				},
				{
					"grd_RF_Menu" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					}
				},
				{
					"grd_RF_MenuSch" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D4D4D4")
							}
						}
					}
				}
				]
			},
			"minbutton" : 
			{
				"parent" : 
				{
					"TitleBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_MinO.png')", environment)
							},
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Min.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_MinD.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_MinO.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Min.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Min.png')", environment)
							},
							"deactivate" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Min.png')", environment)
							}
						}
					}
				}
			},
			"calendaredit" : 
			{
				"parent" : 
				{
					"CalendarControl" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"nulltext" : 
							{
								"color" : ColorObject("#AEAEAE")
							},
							"disabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"focused" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"nulltext" : 
							{
								"color" : ColorObject("#AEAEAE")
							},
							"disabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("0px 15px")
							}
						}
					}
				}
			},
			"overlaybottom" : 
			{
				"parent" : 
				{
					"secspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("1px solid #cccccc,0px none,0px none,0px none")
									}
								}
							}
						}
					},
					"hourspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("1px solid #cccccc,0px none,0px none,0px none")
									}
								}
							}
						}
					},
					"ampmspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("1px solid #cccccc,0px none,0px none,0px none")
									}
								}
							}
						}
					},
					"minspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("1px solid #cccccc,0px none,0px none,0px none")
									}
								}
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
												"border" : BorderObject("1px solid #D6DFE2"),
												"color" : ColorObject("#89929B"),
												"font" : FontObject("bold 16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
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
												"border" : BorderObject("1px solid #D6DFE2"),
												"padding" : PaddingObject("5px")
											},
											"selected" : 
											{
											}
										},
										"class" : [
										{
											"grd_WF_SearchBoard" : 
											{
												"self" : 
												{
													"focused" : 
													{
														"border" : BorderObject("1px solid #FFFFFF"),
														"padding" : PaddingObject("15px 0px 0px 0px"),
														"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
													},
													"enabled" : 
													{
														"border" : BorderObject("1px solid #FFFFFF"),
														"padding" : PaddingObject("15px 0px 0px 0px"),
														"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
													},
													"selected" : 
													{
														"border" : BorderObject("1px solid #FFFFFF"),
														"padding" : PaddingObject("15px 0px 0px 0px"),
														"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
													}
												}
											}
										},
										{
											"grd_RF_Menu" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"border" : BorderObject("0px none"),
														"color" : ColorObject("#212529"),
														"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
													},
													"selected" : 
													{
														"color" : ColorObject("#0759F2")
													}
												}
											}
										},
										{
											"grd_RF_MenuSch" : 
											{
												"self" : 
												{
													"focused" : 
													{
														"padding" : PaddingObject("0px 20px"),
														"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
													},
													"enabled" : 
													{
														"padding" : PaddingObject("0px 20px"),
														"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
													},
													"selected" : 
													{
														"padding" : PaddingObject("0px 20px"),
														"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
													}
												}
											}
										}
										]
									}
								}
							}
						}
					},
					"body" : 
					{
						"parent" : 
						{
							"ListView" : 
							{
								"self" : 
								{
									"readonly" : 
									{
										"border" : BorderObject("0px none")
									},
									"focused" : 
									{
										"border" : BorderObject("0px none")
									},
									"disabled" : 
									{
										"border" : BorderObject("0px none")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none")
									}
								}
							}
						}
					}
				},
				"class" : [
				{
					"cell_WF_Line" : 
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
												"class" : [
												{
													"grd_WF_SearchBoard" : 
													{
														"self" : 
														{
															"focused" : 
															{
																"border" : BorderObject("0px none,0px none,1px solid #EBF0F5,0px none"),
																"padding" : PaddingObject("10px 0px 0px 0px"),
																"color" : ColorObject("#A7B2B8"),
																"font" : FontObject("14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
															},
															"enabled" : 
															{
																"border" : BorderObject("0px none,0px none,1px solid #EBF0F5,0px none"),
																"padding" : PaddingObject("10px 0px 0px 0px"),
																"color" : ColorObject("#A7B2B8"),
																"font" : FontObject("14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
															},
															"selected" : 
															{
																"border" : BorderObject("0px none,0px none,1px solid #EBF0F5,0px none"),
																"padding" : PaddingObject("10px 0px 0px 0px"),
																"color" : ColorObject("#A7B2B8"),
																"font" : FontObject("14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
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
					"cell_Chip01" : 
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
												"class" : [
												{
													"grd_WF_SearchBoard" : 
													{
														"self" : 
														{
															"focused" : 
															{
																"padding" : PaddingObject("0px")
															},
															"enabled" : 
															{
																"padding" : PaddingObject("0px")
															},
															"selected" : 
															{
																"padding" : PaddingObject("0px")
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
					"cell_RF_Lev0" : 
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
												"class" : [
												{
													"grd_RF_Menu" : 
													{
														"self" : 
														{
															"enabled" : 
															{
																"border" : BorderObject("0px none,0px none,1px solid #eaebef,0px none"),
																"color" : ColorObject("#212529"),
																"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
															},
															"selected" : 
															{
																"color" : ColorObject("#0759F2")
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
					"cell_RF_Levnone" : 
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
												"class" : [
												{
													"grd_RF_Menu" : 
													{
														"self" : 
														{
															"enabled" : 
															{
																"border" : BorderObject("0px none,0px none,1px solid #eaebef,0px none"),
																"color" : ColorObject("#212529")
															},
															"selected" : 
															{
																"color" : ColorObject("#0759F2")
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
				}
				]
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
									"focused" : 
									{
										"padding" : PaddingObject("0px 0px 0px 10px"),
										"icon" : UrlObject("url('theme://images/tab_WF_Close.png')", environment)
									},
									"disabled" : 
									{
										"padding" : PaddingObject("0px 0px 0px 10px"),
										"icon" : UrlObject("url('theme://images/tab_WF_Close.png')", environment)
									},
									"pushed" : 
									{
										"padding" : PaddingObject("0px 0px 0px 10px"),
										"icon" : UrlObject("url('theme://images/tab_WF_Close.png')", environment)
									},
									"enabled" : 
									{
										"padding" : PaddingObject("0px 0px 0px 10px"),
										"icon" : UrlObject("url('theme://images/tab_WF_Close.png')", environment)
									},
									"selected" : 
									{
										"padding" : PaddingObject("0px 0px 0px 10px"),
										"icon" : UrlObject("url('theme://images/tab_WF_Close.png')", environment)
									}
								}
							}
						}
					}
				}
			},
			"endsubdate" : 
			{
				"parent" : 
				{
					"headline" : 
					{
						"parent" : 
						{
							"DateRangePicker" : 
							{
								"self" : 
								{
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					}
				}
			},
			"DateRangePicker" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #646982")
					}
				}
			},
			"trackbar" : 
			{
				"parent" : 
				{
					"VScrollIndicatorControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
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
									"focused" : 
									{
										"icon" : UrlObject("url('theme://images/cal_WF_PreBtn.png')", environment)
									},
									"disabled" : 
									{
									},
									"pushed" : 
									{
										"icon" : UrlObject("url('theme://images/cal_WF_PreBtn.png')", environment)
									},
									"enabled" : 
									{
										"icon" : UrlObject("url('theme://images/cal_WF_PreBtn.png')", environment)
									},
									"selected" : 
									{
										"icon" : UrlObject("url('theme://images/cal_WF_PreBtn.png')", environment)
									}
								}
							}
						}
					},
					"Tab" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : PaddingObject("3px"),
								"icon" : UrlObject("url('theme://images/tab_WF_PreBtn.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/tab_WF_PreBtnO.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("3px"),
								"icon" : UrlObject("url('theme://images/tab_WF_PreBtn.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/tab_WF_PreBtnO.png')", environment)
							}
						}
					}
				}
			},
			"monthspin" : 
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
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					}
				}
			},
			"nulltext" : 
			{
				"parent" : 
				{
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("8px 0px 8px 15px"),
								"color" : ColorObject("#aeaeae")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("8px 0px 8px 15px"),
								"color" : ColorObject("#aeaeae")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("8px 0px 8px 15px"),
								"color" : ColorObject("#aeaeae")
							}
						}
					}
				}
			},
			"headline" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("15px")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("15px")
							}
						}
					}
				}
			},
			"tagboxedit" : 
			{
				"parent" : 
				{
					"MultiComboTagBoxControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("3px")
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
									"disabled" : 
									{
										"color" : ColorObject("#aeaeae")
									},
									"enabled" : 
									{
									}
								}
							}
						}
					}
				}
			},
			"Calendar" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000"),
						"color" : ColorObject("#000000")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB"),
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2")
					}
				}
			},
			"datetabbutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,0px none,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/img_WF_Daterange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,0px none,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/img_WF_Daterange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"icon" : UrlObject("url('theme://images/img_WF_Daterange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px none")
							}
						}
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
							"mouseover" : 
							{
								"padding" : PaddingObject("0px 0px 0px 16px"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"disabled" : 
							{
								"padding" : PaddingObject("0px 0px 0px 16px"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 0px 0px 16px"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"deactivate" : 
							{
								"padding" : PaddingObject("0px 0px 0px 16px"),
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				}
			},
			"cellmaskedit" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"calendarspinupbutton" : 
			{
				"parent" : 
				{
					"CalendarControl" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnUpBtn.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnUpBtn.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnUpBtn.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnUpBtn.png')", environment)
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnUpBtn.png')", environment)
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
					}
				},
				"class" : [
				{
					"div_WF_NoticeBg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("2px solid #5A96FF")
							}
						}
					}
				},
				{
					"div_WF_Box" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("2px solid #5A96FF")
							}
						}
					}
				},
				{
					"div_WF_Day" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"div_WF_DayS" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"div_WF_DetailBox" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"div_RF_1Depth" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none,2px solid #EBF0F5,0px none,0px none")
							}
						}
					}
				},
				{
					"div_TF_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
				]
			},
			"normalbutton" : 
			{
				"parent" : 
				{
					"TitleBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_NormalO.png')", environment)
							},
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Normal.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_NormalD.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_NormalO.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Normal.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Normal.png')", environment)
							},
							"deactivate" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Normal.png')", environment)
							}
						}
					}
				}
			},
			"cellbutton" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"border" : BorderObject("1px solid #eeeeee"),
								"color" : ColorObject("#aaaaaa")
							},
							"pushed" : 
							{
								"border" : BorderObject("1px solid #313340")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #dddddd"),
								"color" : ColorObject("#646982"),
								"font" : FontObject("bold 13px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"border" : BorderObject("1px solid #313340")
							}
						}
					}
				}
			},
			"tagtext" : 
			{
				"parent" : 
				{
					"TagBoxControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"color" : ColorObject("#aeaeae")
							}
						}
					}
				}
			},
			"CheckBoxControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_box.png')", environment),
						"textPadding" : PaddingObject("0px 0px 0px 12px")
					},
					"disabled_selected" : 
					{
					},
					"focused" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_box.png')", environment),
						"textPadding" : PaddingObject("0px 0px 0px 12px")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_box.png')", environment),
						"textPadding" : PaddingObject("0px 0px 0px 12px")
					},
					"selected" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_boxS.png')", environment)
					}
				}
			},
			"TextArea" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#AEAEAE")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB"),
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D4D4D4"),
						"padding" : PaddingObject("10px"),
						"wordWrap" : "char",
						"font" : FontObject("18px/30px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
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
								"border" : BorderObject("1px solid #D4D4D4")
							}
						}
					},
					"ComboControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D4D4D4")
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
							"disabled" : 
							{
								"border" : BorderObject("1px dotted #aeaeae")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px dotted #999999")
							}
						}
					}
				}
			},
			"cellcalendar" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"dropbutton" : 
			{
				"parent" : 
				{
					"CalendarControl" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_DropBtn.png')", environment)
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_DropBtn.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_DropBtn.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_DropBtn.png')", environment)
							}
						}
					},
					"MultiCombo" : 
					{
						"self" : 
						{
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_DropBtn.png')", environment)
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_DropBtn.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_DropBtn.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_DropBtn.png')", environment)
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							}
						}
					},
					"Combo" : 
					{
						"self" : 
						{
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							}
						}
					},
					"box" : 
					{
						"parent" : 
						{
							"DateField" : 
							{
								"self" : 
								{
									"focused" : 
									{
									},
									"disabled" : 
									{
									},
									"pushed" : 
									{
									},
									"enabled" : 
									{
									},
									"selected" : 
									{
									}
								}
							}
						}
					},
					"ComboControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cbo_WF_Drop.png')", environment)
							}
						}
					}
				}
			},
			"Combo" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #000000"),
						"color" : ColorObject("#000000")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000"),
						"color" : ColorObject("#000000")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2")
					}
				}
			},
			"body" : 
			{
				"parent" : 
				{
					"ListView" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #AEAEAE,0px none")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #AEAEAE,0px none")
							}
						}
					},
					"DatePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"EditControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#AEAEAE")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB"),
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2"),
						"padding" : PaddingObject("0px 15px")
					}
				}
			},
			"PopupDiv" : 
			{
				"self" : 
				{
					"enabled" : 
					{
					}
				}
			},
			"yearitem" : 
			{
				"parent" : 
				{
					"body" : 
					{
						"parent" : 
						{
							"datepicker" : 
							{
								"parent" : 
								{
									"CalendarControl" : 
									{
										"self" : 
										{
											"focused" : 
											{
												"color" : ColorObject("#333333")
											},
											"enabled" : 
											{
												"color" : ColorObject("#333333")
											},
											"selected" : 
											{
												"color" : ColorObject("#ffffff")
											}
										}
									},
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"focused" : 
													{
														"color" : ColorObject("#333333")
													},
													"enabled" : 
													{
														"color" : ColorObject("#333333")
													},
													"selected" : 
													{
														"color" : ColorObject("#ffffff")
													}
												}
											},
											"PopupDateRangePicker" : 
											{
												"self" : 
												{
													"focused" : 
													{
														"color" : ColorObject("#333333")
													},
													"enabled" : 
													{
														"color" : ColorObject("#333333")
													},
													"selected" : 
													{
														"color" : ColorObject("#ffffff")
													}
												}
											},
											"DateRangePickerControl" : 
											{
												"self" : 
												{
													"focused" : 
													{
														"color" : ColorObject("#333333")
													},
													"enabled" : 
													{
														"color" : ColorObject("#333333")
													},
													"selected" : 
													{
														"color" : ColorObject("#ffffff")
													}
												}
											}
										}
									},
									"Calendar" : 
									{
										"self" : 
										{
											"focused" : 
											{
												"color" : ColorObject("#333333")
											},
											"enabled" : 
											{
												"color" : ColorObject("#333333")
											},
											"selected" : 
											{
												"color" : ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"ListView" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : BorderObject("2px solid #3F3F47,1px solid #D4D4D4,1px solid #D4D4D4,1px solid #D4D4D4")
					},
					"focused" : 
					{
						"border" : BorderObject("2px solid #3F3F47,1px solid #D4D4D4,1px solid #D4D4D4,1px solid #D4D4D4")
					},
					"disabled" : 
					{
						"border" : BorderObject("2px solid #3F3F47,1px solid #D4D4D4,1px solid #D4D4D4,1px solid #D4D4D4")
					},
					"enabled" : 
					{
						"border" : BorderObject("2px solid #3F3F47,1px solid #D4D4D4,1px solid #D4D4D4,1px solid #D4D4D4")
					}
				}
			},
			"PopupDateRangePicker" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #646982")
					}
				}
			},
			"tagbutton" : 
			{
				"parent" : 
				{
					"TagBoxControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("0px 0px 0px 3px"),
								"icon" : UrlObject("url('theme://images/tab_WF_Close.png')", environment)
							}
						}
					}
				}
			},
			"ampmspinner" : 
			{
				"parent" : 
				{
					"TimePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("0px 5px")
							}
						}
					}
				}
			},
			"checkboxset" : 
			{
				"parent" : 
				{
					"MultiComboListControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"color" : ColorObject("#555555"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				}
			},
			"DateRangePickerControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #646982")
					}
				}
			},
			"overlaytop" : 
			{
				"parent" : 
				{
					"secspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("0px none,0px none,1px solid #cccccc,0px none")
									}
								}
							}
						}
					},
					"hourspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("0px none,0px none,1px solid #cccccc,0px none")
									}
								}
							}
						}
					},
					"ampmspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("0px none,0px none,1px solid #cccccc,0px none")
									}
								}
							}
						}
					},
					"minspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("0px none,0px none,1px solid #cccccc,0px none")
									}
								}
							}
						}
					}
				}
			},
			"tagboxitem" : 
			{
				"parent" : 
				{
					"MultiComboTagBoxControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("3px 15px 3px 15px")
							}
						}
					}
				}
			},
			"TimePickerControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"padding" : PaddingObject("10px")
					}
				}
			},
			"leadingbutton" : 
			{
				"parent" : 
				{
					"box" : 
					{
						"parent" : 
						{
							"TextField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("0px")
									}
								}
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
									"focused" : 
									{
										"icon" : UrlObject("url('theme://images/cal_WF_NxtBtn.png')", environment)
									},
									"disabled" : 
									{
									},
									"pushed" : 
									{
										"icon" : UrlObject("url('theme://images/cal_WF_NxtBtn.png')", environment)
									},
									"enabled" : 
									{
										"icon" : UrlObject("url('theme://images/cal_WF_NxtBtn.png')", environment)
									},
									"selected" : 
									{
										"icon" : UrlObject("url('theme://images/cal_WF_NxtBtn.png')", environment)
									}
								}
							}
						}
					},
					"Tab" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : PaddingObject("3px"),
								"icon" : UrlObject("url('theme://images/tab_WF_NxtBtn.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/tab_WF_NxtBtnO.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("3px"),
								"icon" : UrlObject("url('theme://images/tab_WF_NxtBtn.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/tab_WF_NxtBtnO.png')", environment)
							}
						}
					}
				}
			},
			"TitleBarControl" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"enabled" : 
					{
					},
					"deactivate" : 
					{
					}
				}
			},
			"CheckBox" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_box.png')", environment),
						"textPadding" : PaddingObject("0px 0px 0px 12px")
					},
					"disabled_selected" : 
					{
					},
					"focused" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_box.png')", environment),
						"textPadding" : PaddingObject("0px 0px 0px 12px")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_box.png')", environment),
						"textPadding" : PaddingObject("0px 0px 0px 12px")
					},
					"selected" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_boxS.png')", environment)
					}
				},
				"class" : [
				{
					"chk_LOGIN_SaveId" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"color" : ColorObject("#9FACBB"),
								"textPadding" : PaddingObject("0px 0px 0px 5px"),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"color" : ColorObject("#9FACBB"),
								"textPadding" : PaddingObject("0px 0px 0px 5px"),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"selected" : 
							{
								"color" : ColorObject("#9FACBB"),
								"textPadding" : PaddingObject("0px 0px 0px 5px"),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				}
				]
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
										"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
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
					}
				}
			},
			"yearspin" : 
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
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
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
										"padding" : PaddingObject("10px 0px 10px 15px"),
										"color" : ColorObject("#000000")
									},
									"selected" : 
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
										"padding" : PaddingObject("10px 0px 10px 15px"),
										"color" : ColorObject("#000000")
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
							"readonly" : 
							{
								"padding" : PaddingObject("10px 0px 10px 15px")
							},
							"focused" : 
							{
								"padding" : PaddingObject("10px 0px 10px 15px")
							},
							"disabled" : 
							{
								"color" : ColorObject("#AEAEAE")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("10px 0px 10px 15px")
							},
							"selected" : 
							{
								"color" : ColorObject("#000000")
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
							"readonly" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Item.png')", environment),
								"textPadding" : PaddingObject("0px 16px 0px 6px")
							},
							"disabled_selected" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_ItemSD.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_ItemD.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Item.png')", environment),
								"textPadding" : PaddingObject("0px 16px 0px 6px")
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_ItemS.png')", environment)
							}
						}
					}
				}
			},
			"Static" : 
			{
				"self" : 
				{
					"disabled" : 
					{
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"wordWrap" : "char"
					}
				},
				"class" : [
				{
					"sta_WF_Title" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_BoxTitle" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#333333"),
								"font" : FontObject("20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_TestTitle" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#333333"),
								"font" : FontObject("bold 30px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_Date" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#A7B2B8"),
								"font" : FontObject("12px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_LabelDetail" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#A7B2B8"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_OutputR" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_OutputP" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#F13A25"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_SumViews" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#A7B2B8"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_BgGrey" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_WF_Boundary" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_WF_Day" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#A7B2B8"),
								"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_DayS" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_DOW" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#A7B2B8"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_DOWS" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_DOWSun" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#EF593A"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_DOWSat" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#388DEF"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_PopTit" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#28282C"),
								"font" : FontObject("bold 24px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
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
								"color" : ColorObject("#28282C"),
								"font" : FontObject("bold 20px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
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
								"padding" : PaddingObject("0px 0px 0px 10px"),
								"color" : ColorObject("#787880"),
								"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_LabelE" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("0px 0px 0px 10px"),
								"color" : ColorObject("#787880"),
								"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_MainBg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"edge" : EdgeImageObject("url('theme://images/sta_WF_MainBg.png')", environment)
							}
						}
					}
				},
				{
					"sta_WF_Main" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"edge" : EdgeImageObject("url('theme://images/sta_WF_Main.png')", environment)
							}
						}
					}
				},
				{
					"sta_WF_Notice" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#28282C"),
								"font" : FontObject("bold 14px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_NoticeTit" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#28282C"),
								"font" : FontObject("16px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_WF_GB" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #333333"),
								"padding" : PaddingObject("8px"),
								"font" : FontObject("16px/24px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_LOGIN_Logo" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_RF_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_RF_Name" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("bold 33px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_RF_Id" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("33px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				},
				{
					"sta_TF_Title" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#FFFFFF"),
								"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					}
				}
				]
			},
			"ImageViewer" : 
			{
				"self" : 
				{
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D4D4D4")
					}
				}
			},
			"ComboControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #000000"),
						"color" : ColorObject("#000000")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000"),
						"color" : ColorObject("#000000")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2")
					}
				}
			},
			"multicombolist" : 
			{
				"parent" : 
				{
					"MultiCombo" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"helpertext" : 
			{
				"parent" : 
				{
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"invalid" : 
							{
								"color" : ColorObject("#ee5555"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 5px"),
								"color" : ColorObject("#555555")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"invalid" : 
							{
								"color" : ColorObject("#ee5555"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 5px"),
								"color" : ColorObject("#555555")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"invalid" : 
							{
								"color" : ColorObject("#ee5555"),
								"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 5px"),
								"color" : ColorObject("#555555")
							}
						}
					}
				}
			},
			"spinneritem" : 
			{
				"parent" : 
				{
					"secspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									},
									"selected" : 
									{
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					},
					"hourspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									},
									"selected" : 
									{
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					},
					"ampmspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"selected" : 
									{
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					},
					"minspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									},
									"selected" : 
									{
										"font" : FontObject("bold 22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					}
				}
			},
			"Form" : 
			{
				"self" : 
				{
					"contents" : 
					{
					},
					"enabled" : 
					{
						"border" : BorderObject("0px none"),
						"color" : ColorObject("#28282C"),
						"font" : FontObject("22px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
					}
				},
				"class" : [
				{
					"Login" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"edge" : EdgeImageObject("url('theme://images/LoginBg.png') 0px 0px", environment)
							}
						}
					}
				}
				]
			},
			"weekband" : 
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
									}
								}
							}
						}
					}
				}
			},
			"MaskEditControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000"),
						"color" : ColorObject("#000000")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#AEAEAE")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB"),
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2"),
						"padding" : PaddingObject("0px 15px")
					}
				}
			},
			"calendarspindownbutton" : 
			{
				"parent" : 
				{
					"CalendarControl" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnDnBtn.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnDnBtn.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnDnBtn.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnDnBtn.png')", environment)
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cal_WF_SpnDnBtn.png')", environment)
							}
						}
					}
				}
			},
			"box" : 
			{
				"parent" : 
				{
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #000000")
							},
							"disabled" : 
							{
								"border" : BorderObject("1px solid #EBEBEB"),
								"color" : ColorObject("#AEAEAE")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D6DFE2"),
								"padding" : PaddingObject("5px 15px 10px 15px")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #000000")
							},
							"invalid" : 
							{
								"border" : BorderObject("1px solid #ee5555")
							},
							"disabled" : 
							{
								"border" : BorderObject("1px solid #EBEBEB"),
								"color" : ColorObject("#AEAEAE")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D6DFE2"),
								"padding" : PaddingObject("1px 0px 0px 15px")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #000000"),
								"color" : ColorObject("#000000")
							},
							"invalid" : 
							{
								"border" : BorderObject("1px solid #ee5555")
							},
							"disabled" : 
							{
								"border" : BorderObject("1px solid #EBEBEB"),
								"color" : ColorObject("#AEAEAE")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D6DFE2"),
								"padding" : PaddingObject("0px 0px 0px 15px")
							}
						}
					}
				}
			},
			"checkboxsetitem" : 
			{
				"parent" : 
				{
					"checkboxset" : 
					{
						"parent" : 
						{
							"MultiComboListControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("0px 15px")
									},
									"selected" : 
									{
										"padding" : PaddingObject("0px 15px")
									}
								}
							}
						}
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
							}
						}
					},
					"DatePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#333333"),
								"font" : FontObject("bold 24px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
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
									"leaf" : 
									{
										"icon" : UrlObject("url('theme://images/grd_WF_TreeLeafImg.png')", environment)
									}
								}
							},
							"cell" : 
							{
								"class" : [
								{
									"cell_RF_Lev0" : 
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
																"class" : [
																{
																	"grd_RF_Menu" : 
																	{
																		"self" : 
																		{
																			"expand" : 
																			{
																				"icon" : UrlObject("url('theme://images/blank.png')", environment)
																			},
																			"enabled" : 
																			{
																				"icon" : UrlObject("url('theme://images/blank.png')", environment)
																			},
																			"collapse" : 
																			{
																				"icon" : UrlObject("url('theme://images/blank.png')", environment)
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
									"cell_RF_Lev1" : 
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
																"class" : [
																{
																	"grd_RF_Menu" : 
																	{
																		"self" : 
																		{
																			"leaf" : 
																			{
																				"icon" : UrlObject("url('theme://images/cell_RF_Lev1.png')", environment)
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
								}
								]
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
							"disabled" : 
							{
								"border" : BorderObject("1px solid #EBEBEB")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D4D4D4")
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Max.png')", environment)
							},
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Max.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_MaxD.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Max.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Max.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Max.png')", environment)
							},
							"deactivate" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Max.png')", environment)
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
							"focused" : 
							{
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"selectallcheckbox" : 
			{
				"parent" : 
				{
					"MultiComboListControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #D6DFE2,0px none"),
								"padding" : PaddingObject("10px 0px 10px 15px"),
								"color" : ColorObject("#555555")
							},
							"selected" : 
							{
							}
						}
					}
				}
			},
			"closebutton" : 
			{
				"parent" : 
				{
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("5px"),
								"font" : FontObject("15px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
							}
						}
					},
					"TitleBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_CloseO.png')", environment)
							},
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Close.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_CloseD.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_CloseO.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Close.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Close.png')", environment)
							},
							"deactivate" : 
							{
								"icon" : UrlObject("url('theme://images/tib_WF_Close.png')", environment)
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("5px"),
								"font" : FontObject("15px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
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
									"sunday" : 
									{
										"color" : ColorObject("#EE5555")
									},
									"saturday" : 
									{
										"color" : ColorObject("#127ED1")
									},
									"today" : 
									{
										"color" : ColorObject("#333333"),
										"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"trailingday" : 
									{
										"color" : ColorObject("#aaaaaa")
									},
									"day" : 
									{
										"color" : ColorObject("#333333")
									},
									"enabled" : 
									{
										"color" : ColorObject("#333333"),
										"font" : FontObject("18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									},
									"selected" : 
									{
										"color" : ColorObject("#FFFFFF"),
										"font" : FontObject("bold 18px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
									}
								}
							}
						}
					}
				}
			},
			"MultiComboListControl" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #dddddd")
					}
				}
			},
			"MultiComboControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2")
					}
				}
			},
			"label" : 
			{
				"parent" : 
				{
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"floating" : 
							{
								"padding" : PaddingObject("0px 2px")
							},
							"floatingvalid" : 
							{
								"padding" : PaddingObject("0px 2px"),
								"color" : ColorObject("#000000")
							},
							"disabled" : 
							{
								"padding" : PaddingObject("0px 2px")
							},
							"focused_floating" : 
							{
								"padding" : PaddingObject("0px 2px"),
								"color" : ColorObject("#000000")
							},
							"floatinginvalid" : 
							{
								"padding" : PaddingObject("0px 2px"),
								"color" : ColorObject("#ee5555")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 0px 0px 15px"),
								"color" : ColorObject("#89929B")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"floating" : 
							{
								"padding" : PaddingObject("0px 2px")
							},
							"floatingvalid" : 
							{
								"padding" : PaddingObject("0px 2px"),
								"color" : ColorObject("#000000")
							},
							"disabled" : 
							{
								"padding" : PaddingObject("0px 2px")
							},
							"focused_floating" : 
							{
								"padding" : PaddingObject("0px 2px"),
								"color" : ColorObject("#000000")
							},
							"floatinginvalid" : 
							{
								"padding" : PaddingObject("0px 2px"),
								"color" : ColorObject("#ee5555")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 0px 0px 15px"),
								"color" : ColorObject("#89929B")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"floating" : 
							{
								"padding" : PaddingObject("2px 4px")
							},
							"floatingvalid" : 
							{
								"padding" : PaddingObject("2px 4px"),
								"color" : ColorObject("#000000")
							},
							"disabled" : 
							{
								"padding" : PaddingObject("2px 4px")
							},
							"focused_floating" : 
							{
								"padding" : PaddingObject("2px 4px"),
								"color" : ColorObject("#000000")
							},
							"floatinginvalid" : 
							{
								"padding" : PaddingObject("2px 4px"),
								"color" : ColorObject("#000000")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 0px 0px 15px"),
								"color" : ColorObject("#89929B")
							}
						}
					}
				}
			},
			"CalendarControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000"),
						"color" : ColorObject("#000000")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB"),
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D6DFE2")
					}
				}
			},
			"TextAreaControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #000000")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#AEAEAE")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #EBEBEB"),
						"color" : ColorObject("#AEAEAE")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #D4D4D4"),
						"padding" : PaddingObject("10px"),
						"wordWrap" : "char",
						"font" : FontObject("18px/30px \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"")
					}
				}
			},
			"charcounttext" : 
			{
				"parent" : 
				{
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 0px")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 0px")
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
									"sunday" : 
									{
										"color" : ColorObject("#EE5555")
									},
									"saturday" : 
									{
										"color" : ColorObject("#127ED1")
									},
									"enabled" : 
									{
										"color" : ColorObject("#666666")
									}
								}
							}
						}
					}
				}
			}

		},
		{
			"includeStatusMap" : true,
			"hasListViewExpandStatus" : true,
			"applyMarkupValidation" : true
		}
		);

		environment._updateImageCacheMaps (
		[
			["theme://images/blank.png", 1, 1],
			["theme://images/btn_RF_1Depth01.png", 40, 60],
			["theme://images/btn_RF_1Depth01S.png", 40, 60],
			["theme://images/btn_RF_1Depth02.png", 40, 60],
			["theme://images/btn_RF_1Depth02S.png", 40, 60],
			["theme://images/btn_RF_1Depth03.png", 40, 60],
			["theme://images/btn_RF_1Depth03S.png", 40, 60],
			["theme://images/btn_RF_1Depth04.png", 40, 60],
			["theme://images/btn_RF_1Depth04S.png", 40, 60],
			["theme://images/btn_RF_1Depth05.png", 40, 60],
			["theme://images/btn_RF_1Depth05S.png", 40, 60],
			["theme://images/btn_RF_Home.png", 32, 32],
			["theme://images/btn_RF_Logout.png", 15, 16],
			["theme://images/btn_RF_Sch.png", 32, 32],
			["theme://images/btn_TF_Close.png", 32, 32],
			["theme://images/btn_TF_CloseB.png", 32, 32],
			["theme://images/btn_TF_Menu.png", 32, 32],
			["theme://images/btn_TF_Pre.png", 32, 32],
			["theme://images/btn_WF_CloseCon.png", 35, 13],
			["theme://images/btn_WF_Link01.png", 26, 26],
			["theme://images/btn_WF_Link02.png", 26, 26],
			["theme://images/btn_WF_Link03.png", 26, 26],
			["theme://images/btn_WF_OpenCon.png", 35, 13],
			["theme://images/btn_WF_RowAdd.png", 18, 18],
			["theme://images/btn_WF_RowDel.png", 18, 18],
			["theme://images/btn_WF_Search.png", 40, 40],
			["theme://images/btn_WF_ShuttleDown.png", 32, 32],
			["theme://images/btn_WF_ShuttleUp.png", 32, 32],
			["theme://images/btn_WF_Spindown.png", 24, 24],
			["theme://images/btn_WF_Spinup.png", 24, 24],
			["theme://images/cal_WF_DropBtn.png", 32, 32],
			["theme://images/cal_WF_NxtBtn.png", 9, 15],
			["theme://images/cal_WF_PreBtn.png", 9, 15],
			["theme://images/cal_WF_SpnDnBtn.png", 5, 3],
			["theme://images/cal_WF_SpnDnBtnD.png", 5, 3],
			["theme://images/cal_WF_SpnDnBtnO.png", 5, 3],
			["theme://images/cal_WF_SpnUpBtn.png", 5, 3],
			["theme://images/cal_WF_SpnUpBtnD.png", 5, 3],
			["theme://images/cal_WF_SpnUpBtnO.png", 5, 3],
			["theme://images/cbo_WF_Drop.png", 32, 32],
			["theme://images/cell_Chip01.png", 38, 20],
			["theme://images/cell_RF_Lev0.png", 62, 32],
			["theme://images/cell_RF_Lev1.png", 30, 16],
			["theme://images/chk_WF_box.png", 28, 28],
			["theme://images/chk_WF_boxS.png", 28, 28],
			["theme://images/div_WF_NoticeBg.png", 38, 38],
			["theme://images/edt_LOGIN_Id.png", 65, 44],
			["theme://images/edt_LOGIN_Pw.png", 65, 44],
			["theme://images/grd_WF_TreeClose.png", 30, 30],
			["theme://images/grd_WF_TreeLeafImg.png", 3, 3],
			["theme://images/grd_WF_TreeOpen.png", 30, 30],
			["theme://images/img_WF_Daterange.png", 22, 24],
			["theme://images/img_WF_Invalid.png", 24, 24],
			["theme://images/img_WF_Timerange.png", 23, 23],
			["theme://images/img_WF_Valid.png", 24, 24],
			["theme://images/loadingimage.gif", 86, 85],
			["theme://images/LoginBg.png", 960, 1536],
			["theme://images/lstv_WF_Collapse.png", 26, 26],
			["theme://images/lstv_WF_Expand.png", 26, 26],
			["theme://images/rdo_WF_Item.png", 35, 35],
			["theme://images/rdo_WF_ItemD.png", 35, 35],
			["theme://images/rdo_WF_ItemS.png", 35, 35],
			["theme://images/rdo_WF_ItemSD.png", 35, 35],
			["theme://images/sta_LOGIN_Logo.png", 209, 46],
			["theme://images/sta_WF_Comment.png", 32, 32],
			["theme://images/sta_WF_LabelE.png", 10, 26],
			["theme://images/sta_WF_Main.png", 470, 180],
			["theme://images/sta_WF_MainBg.png", 960, 716],
			["theme://images/tab_WF_Close.png", 15, 15],
			["theme://images/tab_WF_NxtBtn.png", 4, 7],
			["theme://images/tab_WF_NxtBtnO.png", 4, 7],
			["theme://images/tab_WF_PreBtn.png", 4, 7],
			["theme://images/tab_WF_PreBtnO.png", 4, 7],
			["theme://images/tib_WF_Close.png", 22, 20],
			["theme://images/tib_WF_CloseD.png", 22, 20],
			["theme://images/tib_WF_CloseO.png", 22, 20],
			["theme://images/tib_WF_Max.png", 22, 20],
			["theme://images/tib_WF_MaxD.png", 22, 20],
			["theme://images/tib_WF_MaxO.png", 22, 20],
			["theme://images/tib_WF_Min.png", 22, 20],
			["theme://images/tib_WF_MinD.png", 22, 20],
			["theme://images/tib_WF_MinO.png", 22, 20],
			["theme://images/tib_WF_Normal.png", 22, 20],
			["theme://images/tib_WF_NormalD.png", 22, 20],
			["theme://images/tib_WF_NormalO.png", 22, 20]
		]
		);
		
		environment._setCSSPredefineGroupAutoSelectInfo (
		
		);
	};
}
)();
