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
			"cellradioitem" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio_O.png')", environment)
							},
							"disabled_selected" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio_DS.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio.png')", environment),
								"textPadding" : PaddingObject("0px 0px 0px 5px")
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio_S.png')", environment)
							}
						}
					}
				}
			},
			"hscrollbar" : 
			{
				"parent" : 
				{
					"Grid" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #b1b1b1,0px none,0px none,0px none")
							}
						}
					}
				}
			},
			"monthitem" : 
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
									"mouseover" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"focused" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"disabled" : 
									{
										"color" : ColorObject("#cdcdcd")
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
			},
			"subcell" : 
			{
				"parent" : 
				{
					"cell" : 
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
													"blinked" : 
													{
														"color" : ColorObject("#ffffff")
													},
													"mouseover" : 
													{
													},
													"disabled" : 
													{
														"color" : ColorObject("#999999")
													},
													"enabled" : 
													{
														"border" : BorderObject("1px solid #dbdee2"),
														"padding" : PaddingObject("4px 4px 4px 4px"),
														"color" : ColorObject("#666666")
													},
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
							"disabled" : 
							{
								"padding" : PaddingObject("1px 2px 0px 9px")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 3px 0px 3px")
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
											"enabled" : 
											{
												"color" : ColorObject("#ffffff"),
												"font" : FontObject("bold 14px \"Arial\"")
											}
										}
									}
								}
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
											"enabled" : 
											{
												"color" : ColorObject("#ffffff"),
												"font" : FontObject("bold 14px \"Arial\"")
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
										"color" : ColorObject("#999999")
									},
									"invalid" : 
									{
										"color" : ColorObject("#999999")
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
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5"),
						"padding" : PaddingObject("1px 9px 0px 9px")
					}
				}
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
									"mouseover" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"disabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"disabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
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
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("12px \"Arial\"")
							}
						}
					}
				}
			},
			"MainFrame" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #b7b1b2")
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
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#999999")
					},
					"invalidtext" : 
					{
						"color" : ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5"),
						"padding" : PaddingObject("1px 9px 0px 9px")
					}
				}
			},
			"HFrameSet" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #b7b1b2")
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
									"disabled" : 
									{
										"color" : ColorObject("#c7d4e2")
									},
									"enabled" : 
									{
										"padding" : PaddingObject("0px 10px 0px 0px"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 14px \"Arial\"")
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : PaddingObject("0px 10px 0px 0px"),
														"color" : ColorObject("#333333"),
														"font" : FontObject("bold 14px \"Arial\"")
													}
												}
											},
											"PopupDateRangePicker" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : PaddingObject("0px 10px 0px 0px"),
														"color" : ColorObject("#333333"),
														"font" : FontObject("bold 14px \"Arial\"")
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
			},
			"StaticControl" : 
			{
				"self" : 
				{
					"disabled" : 
					{
						"color" : ColorObject("#999999")
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
							"enabled" : 
							{
								"padding" : PaddingObject("1px 9px 0px 9px")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("1px 9px 0px 9px")
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
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Grdexpand.png')", environment)
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Grdexpand.png')", environment)
							}
						}
					}
				}
			},
			"progressbartext" : 
			{
				"parent" : 
				{
					"ProgressBarControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#ffffff")
							}
						}
					},
					"ProgressBar" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : ColorObject("#ffffff")
							}
						}
					}
				}
			},
			"Button" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #a0a0a0")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #a0a0a0")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #d9d9d9"),
						"color" : ColorObject("#bbbbbb")
					},
					"pushed" : 
					{
					},
					"enabled" : 
					{
						get color() { return getScreenCSSMapValue(ColorObject, undefined, "blue", undefined, undefined, undefined) },
						get border() { return getScreenCSSMapValue(BorderObject, "1px solid #c2c2c2", "1px solid #c2c2c2", undefined, undefined, undefined) }
					},
					"selected" : 
					{
					}
				}
			},
			"FileDownload" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #a0a0a0")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #a0a0a0")
					},
					"disabled" : 
					{
						"border" : BorderObject("1px solid #d9d9d9"),
						"color" : ColorObject("#bbbbbb")
					},
					"pushed" : 
					{
					},
					"enabled" : 
					{
						get color() { return getScreenCSSMapValue(ColorObject, undefined, "blue", undefined, undefined, undefined) },
						get border() { return getScreenCSSMapValue(BorderObject, "1px solid #c2c2c2", "1px solid #c2c2c2", undefined, undefined, undefined) }
					}
				}
			},
			"cancelbutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"focused" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("10px 8px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"focused" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("10px 8px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"focused" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("10px 8px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					}
				}
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
								"color" : ColorObject("#333333"),
								"font" : FontObject("bold 14px \"Arial\"")
							}
						}
					}
				}
			},
			"FrameSet" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #b7b1b2")
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
			"HScrollBarControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5,0px none,0px none,0px none"),
						"padding" : PaddingObject("2px 2px 2px 2px")
					}
				}
			},
			"cellprogressbar" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("12px \"Arial\"")
							}
						}
					}
				}
			},
			"ProgressBarControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #aeaeae")
					}
				}
			},
			"VScrollIndicatorControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup_D.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup_P.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("1px 0px 0px 0px"),
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup.png')", environment)
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
											"mouseover" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspinup_O.png')", environment)
											},
											"disabled" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspinup_D.png')", environment)
											},
											"pushed" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspinup_O.png')", environment)
											},
											"enabled" : 
											{
												"padding" : PaddingObject("0px 10px 0px 5px"),
												"icon" : UrlObject("url('theme://images/btn_WF_Calspinup.png')", environment)
											}
										}
									}
								}
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
											"mouseover" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspinup_O.png')", environment)
											},
											"disabled" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspinup_D.png')", environment)
											},
											"pushed" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspinup_O.png')", environment)
											},
											"enabled" : 
											{
												"padding" : PaddingObject("0px 10px 0px 5px"),
												"icon" : UrlObject("url('theme://images/btn_WF_Calspinup.png')", environment)
											}
										}
									}
								}
							}
						}
					},
					"box" : 
					{
						"parent" : 
						{
							"SpinField" : 
							{
								"self" : 
								{
									"mouseover" : 
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
										"padding" : PaddingObject("20px 0px 20px 0px")
									}
								}
							}
						}
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
									"mouseover" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"disabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"disabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
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
										"icon" : UrlObject("url('theme://images/btn_WF_Treeexpand.png')", environment)
									},
									"collapse" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Treecollapse.png')", environment)
									}
								}
							}
						}
					}
				}
			},
			"splitline" : 
			{
				"parent" : 
				{
					"timepickergroup" : 
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
					},
					"datepickergroup" : 
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
					"datepickergroup" : 
					{
						"parent" : 
						{
							"DateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("4px")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("4px")
									}
								}
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Hinc_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Hinc_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Hinc.png')", environment)
							}
						}
					},
					"VScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Vinc_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Vinc_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Vinc.png')", environment)
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
										"icon" : UrlObject("url('theme://images/btn_expand.png')", environment)
									},
									"mouseover" : 
									{
										"border" : BorderObject("1px solid #a0a0a0")
									},
									"focused" : 
									{
										"border" : BorderObject("1px solid #a0a0a0")
									},
									"disabled" : 
									{
										"border" : BorderObject("1px solid #d9d9d9"),
										"color" : ColorObject("#bbbbbb")
									},
									"enabled" : 
									{
										"border" : BorderObject("1px solid #c2c2c2")
									},
									"collapse" : 
									{
										"icon" : UrlObject("url('theme://images/cmb_WF_Drop.png')", environment)
									}
								}
							}
						}
					}
				}
			},
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
							}
						}
					}
				}
			},
			"StepControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"padding" : PaddingObject("0px 0px 10px 0px")
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
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 4px 0px 4px")
							}
						}
					}
				}
			},
			"PluginControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
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
									"mouseover" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"disabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"disabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 17px \"Arial\"")
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
							"Grid" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : BorderObject("2px solid #125dae")
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"enabled" : 
													{
													}
												}
											},
											"PopupDateRangePicker" : 
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
							}
						}
					}
				}
			},
			"WebBrowser" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
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
								"border" : BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/timerange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/timerange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/timerange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
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
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
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
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #b1b1b1")
							},
							"disabled_selected" : 
							{
								"border" : BorderObject("1px solid #c7d4e2")
							},
							"focused" : 
							{
								"color" : ColorObject("#dee4ef")
							},
							"focused_selected" : 
							{
								"border" : BorderObject("1px solid #1055a1"),
								"color" : ColorObject("#dee4ef")
							},
							"disabled" : 
							{
								"color" : ColorObject("#ababab")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #c7c7c7"),
								"padding" : PaddingObject("6px 10px 6px 10px"),
								"color" : ColorObject("#333333")
							},
							"selected" : 
							{
								"border" : BorderObject("1px solid #1055a1"),
								"color" : ColorObject("#dee4ef")
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
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #d5d5d5"),
								"padding" : PaddingObject("1px 9px 0px 9px"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #d5d5d5"),
								"padding" : PaddingObject("1px 9px 0px 9px"),
								"font" : FontObject("12px \"Arial\"")
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
			"progressbaritem" : 
			{
				"parent" : 
				{
					"ProgressBarControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
							},
							"enabled" : 
							{
							}
						}
					},
					"progressbar" : 
					{
						"parent" : 
						{
							"StatusBarControl" : 
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
					"ProgressBar" : 
					{
						"self" : 
						{
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
			"detail" : 
			{
				"parent" : 
				{
					"ListView" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : FontObject("12px \"Arial\"")
							},
							"mouseover" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : FontObject("12px \"Arial\"")
							},
							"focused" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : FontObject("12px \"Arial\"")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
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
									"mouseover" : 
									{
										"border" : BorderObject("1px solid #a0a0a0")
									},
									"focused" : 
									{
										"border" : BorderObject("1px solid #a0a0a0")
									},
									"disabled" : 
									{
										"border" : BorderObject("1px solid #d9d9d9"),
										"color" : ColorObject("#bbbbbb")
									},
									"pushed" : 
									{
									},
									"enabled" : 
									{
										"border" : BorderObject("1px solid #c2c2c2"),
										"padding" : PaddingObject("1px 9px 0px 9px")
									},
									"selected" : 
									{
									}
								}
							}
						}
					}
				}
			},
			"WebBrowserControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"ListBox" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"resizegrip" : 
			{
				"parent" : 
				{
					"StatusBarControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/img_grip.png')", environment)
							}
						}
					}
				}
			},
			"TileFrameSet" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #b7b1b2")
					}
				}
			},
			"postfixtext" : 
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
										"padding" : PaddingObject("0px 9px"),
										"color" : ColorObject("#999999")
									}
								}
							},
							"SpinField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("0px 9px"),
										"color" : ColorObject("#999999")
									}
								}
							}
						}
					}
				}
			},
			"Spin" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"invalidtext" : 
					{
						"color" : ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"cellcheckbox" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("12px \"Arial\"")
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
						"padding" : PaddingObject("3px 9px 3px 9px")
					},
					"selected" : 
					{
						"color" : ColorObject("#ffffff")
					}
				}
			},
			"Grid" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("2px solid #125dae,1px solid #b7b1b2,1px solid #b7b1b2,1px solid #b7b1b2")
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Min_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Min_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Min.png')", environment)
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
										"border" : BorderObject("1px solid #cccccc,0px none,0px none")
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
										"border" : BorderObject("1px solid #cccccc,0px none,0px none")
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
										"border" : BorderObject("1px solid #cccccc,0px none,0px none")
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
										"border" : BorderObject("1px solid #cccccc,0px none,0px none")
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
											"disabled" : 
											{
												"color" : ColorObject("#999999")
											},
											"enabled" : 
											{
												"border" : BorderObject("1px solid #cacaca"),
												"padding" : PaddingObject("4px 4px 4px 4px"),
												"color" : ColorObject("#2f2f2f"),
												"font" : FontObject("bold 12px \"Arial\"")
											}
										}
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
												"border" : BorderObject("1px solid #c8c1c2"),
												"color" : ColorObject("#333333"),
												"font" : FontObject("bold 12px \"Arial\"")
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
											"blinked" : 
											{
												"color" : ColorObject("#ffffff")
											},
											"disabled_selected" : 
											{
											},
											"mouseover" : 
											{
											},
											"disabled" : 
											{
												"color" : ColorObject("#999999")
											},
											"enabled" : 
											{
												"border" : BorderObject("1px solid #dbdee2"),
												"padding" : PaddingObject("4px 4px 4px 4px"),
												"color" : ColorObject("#666666")
											},
											"selected" : 
											{
											}
										}
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
									"readonly" : 
									{
										"border" : BorderObject("1px solid #dbdee2"),
										"padding" : PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" : 
									{
										"border" : BorderObject("1px solid #c4c9cf")
									},
									"focused" : 
									{
										"border" : BorderObject("1px solid #dbdee2"),
										"padding" : PaddingObject("4px 4px 4px 4px")
									},
									"disabled" : 
									{
										"border" : BorderObject("1px solid #dbdee2"),
										"padding" : PaddingObject("4px 4px 4px 4px")
									},
									"enabled" : 
									{
										"border" : BorderObject("1px solid #dbdee2"),
										"padding" : PaddingObject("4px 4px 4px 4px")
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
										"border" : BorderObject("1px solid #dbdee2"),
										"padding" : PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" : 
									{
										"border" : BorderObject("1px solid #c4c9cf")
									},
									"focused" : 
									{
										"border" : BorderObject("1px solid #dbdee2"),
										"padding" : PaddingObject("4px 4px 4px 4px")
									},
									"disabled" : 
									{
										"border" : BorderObject("1px solid #dbdee2"),
										"padding" : PaddingObject("4px 4px 4px 4px")
									},
									"enabled" : 
									{
										"border" : BorderObject("1px solid #dbdee2"),
										"padding" : PaddingObject("4px 4px 4px 4px")
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
										"padding" : PaddingObject("0px 0px 0px 20px"),
										"icon" : UrlObject("url('theme://images/btn_WF_Tabextra.png')", environment)
									},
									"selected" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Tabextra_S.png')", environment)
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
									"mouseover" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"disabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"focused" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"disabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("12px \"Arial\"")
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
						"border" : BorderObject("1px solid #697888")
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
							"mouseover" : 
							{
							},
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
					},
					"HScrollIndicatorControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid transparent")
							}
						}
					},
					"VScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
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
					},
					"VScrollIndicatorControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid transparent")
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
									"mouseover" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Calprev_O.png')", environment)
									},
									"disabled" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Calprev.png')", environment)
									},
									"pushed" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Calprev_O.png')", environment)
									},
									"enabled" : 
									{
										"padding" : PaddingObject("0px 0px 0px 10px"),
										"icon" : UrlObject("url('theme://images/btn_WF_Calprev.png')", environment)
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"icon" : UrlObject("url('theme://images/btn_WF_Tabprev.png')", environment)
													},
													"disabled" : 
													{
														"icon" : UrlObject("url('theme://images/btn_WF_Tabprev.png')", environment)
													},
													"pushed" : 
													{
														"icon" : UrlObject("url('theme://images/btn_WF_Tabprev.png')", environment)
													},
													"enabled" : 
													{
														"icon" : UrlObject("url('theme://images/btn_WF_Tabprev.png')", environment)
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"Tab" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Tabprev_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Tabprev_D.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 8px 10px 0px"),
								"icon" : UrlObject("url('theme://images/btn_WF_Tabprev.png')", environment)
							}
						}
					},
					"menupopupmenu" : 
					{
						"parent" : 
						{
							"Menu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Popmenuprev_O.png')", environment)
									},
									"disabled" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Popmenuprev_D.png')", environment)
									},
									"enabled" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Popmenuprev.png')", environment)
									}
								}
							}
						}
					},
					"Menu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Menuprev_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Menuprev_D.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Menuprev_O.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 5px 0px 15px"),
								"icon" : UrlObject("url('theme://images/btn_WF_Menuprev.png')", environment)
							}
						}
					},
					"PopupMenuControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenuprev2_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenuprev2_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenuprev2.png')", environment)
							}
						}
					},
					"PopupMenu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenuprev2_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenuprev2_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenuprev2.png')", environment)
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
								"padding" : PaddingObject("0px 9px 0px 9px"),
								"color" : ColorObject("#999999"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("0px 9px 0px 9px"),
								"color" : ColorObject("#999999"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"SpinField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("0px 9px 0px 9px"),
								"color" : ColorObject("#999999"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("0px 9px 0px 9px"),
								"color" : ColorObject("#999999"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
					}
				}
			},
			"Menu" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"enabled" : 
					{
					}
				}
			},
			"ProgressBar" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #aeaeae")
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
								"padding" : PaddingObject("15px 15px")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("15px 15px")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("15px 15px")
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
									"mouseover" : 
									{
										"border" : BorderObject("1px solid #5a86cd")
									},
									"focused" : 
									{
										"border" : BorderObject("1px solid #5a86cd")
									},
									"disabled" : 
									{
										"color" : ColorObject("#999999")
									},
									"enabled" : 
									{
										"border" : BorderObject("1px solid #d5d5d5"),
										"padding" : PaddingObject("1px 9px 0px 9px")
									}
								}
							}
						}
					}
				}
			},
			"StatusBarControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
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
										"color" : ColorObject("#c8c8c8")
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
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"invalidtext" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"celltextarea" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("12px \"Arial\"")
							}
						}
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
								"border" : BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/daterange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/daterange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : UrlObject("url('theme://images/daterange.png')", environment)
							},
							"selected" : 
							{
								"border" : BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
							}
						}
					}
				}
			},
			"popupmenuitem" : 
			{
				"parent" : 
				{
					"menupopupmenu" : 
					{
						"parent" : 
						{
							"Menu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"focused" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"disabled" : 
									{
										"color" : ColorObject("#2665af")
									},
									"enabled" : 
									{
										"border" : BorderObject("0px none,0px none,1px solid #2065ae,0px none"),
										"padding" : PaddingObject("3px 8px 3px 8px"),
										"color" : ColorObject("#c3e0ff")
									},
									"selected" : 
									{
										"color" : ColorObject("#ffffff")
									}
								}
							}
						}
					},
					"PopupMenuControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"focused" : 
							{
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("3px 9px 3px 9px"),
								"color" : ColorObject("#555555")
							},
							"selected" : 
							{
								"color" : ColorObject("#ffffff")
							}
						}
					},
					"PopupMenu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"focused" : 
							{
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("3px 9px 3px 9px"),
								"color" : ColorObject("#555555")
							},
							"selected" : 
							{
								"color" : ColorObject("#ffffff")
							}
						}
					}
				}
			},
			"ListBoxControl" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
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
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #d5d5d5"),
								"padding" : PaddingObject("1px 9px 0px 9px"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #d5d5d5"),
								"padding" : PaddingObject("1px 9px 0px 9px"),
								"font" : FontObject("12px \"Arial\"")
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
							"enabled" : 
							{
								"icon" : UrlObject("url('imagerc::titlebar_icon.png')", environment),
								"textPadding" : PaddingObject("0px 0px 0px 10px")
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup_D.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup_P.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup.png')", environment)
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup_D.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup_P.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spinup.png')", environment)
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Normal_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Normal_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Normal.png')", environment)
							}
						}
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
							"enabled" : 
							{
								"padding" : PaddingObject("5px")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("5px")
							}
						}
					},
					"DateRangePickerControl" : 
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
			"Sketch" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
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
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #a0a0a0")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #a0a0a0")
							},
							"disabled" : 
							{
								"border" : BorderObject("1px solid #d9d9d9"),
								"color" : ColorObject("#bbbbbb")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #c2c2c2"),
								"color" : ColorObject("#555555"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #a0a0a0")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #a0a0a0")
							},
							"disabled" : 
							{
								"border" : BorderObject("1px solid #d9d9d9"),
								"color" : ColorObject("#bbbbbb")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #c2c2c2"),
								"color" : ColorObject("#555555"),
								"font" : FontObject("12px \"Arial\"")
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
							"enabled" : 
							{
								"padding" : PaddingObject("0px 2px 0px 0px")
							}
						}
					}
				}
			},
			"RadioItemControl" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"icon" : UrlObject("url('theme://images/rdo_WF_Radio_O.png')", environment)
					},
					"disabled_selected" : 
					{
						"icon" : UrlObject("url('theme://images/rdo_WF_Radio_DS.png')", environment)
					},
					"disabled" : 
					{
						"icon" : UrlObject("url('theme://images/rdo_WF_Radio_D.png')", environment)
					},
					"enabled" : 
					{
						"icon" : UrlObject("url('theme://images/rdo_WF_Radio.png')", environment),
						"textPadding" : PaddingObject("0px 0px 0px 5px")
					},
					"selected" : 
					{
						"icon" : UrlObject("url('theme://images/rdo_WF_Radio_S.png')", environment)
					}
				}
			},
			"CheckBoxControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_Box_D.png')", environment)
					},
					"mouseover" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_Box_O.png')", environment)
					},
					"disabled_selected" : 
					{
						"color" : ColorObject("#999999"),
						"icon" : UrlObject("url('theme://images/chk_WF_Box_DS.png')", environment)
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999"),
						"icon" : UrlObject("url('theme://images/chk_WF_Box_D.png')", environment)
					},
					"enabled" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_Box.png')", environment),
						"textPadding" : PaddingObject("0px 0px 0px 6px")
					},
					"selected" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_Box_S.png')", environment)
					}
				}
			},
			"timepickergroup" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("10px")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("10px")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("10px")
							}
						}
					}
				}
			},
			"TextArea" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					},
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5"),
						"padding" : PaddingObject("9px 9px 9px 9px")
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
								"border" : BorderObject("1px solid #b1b1b1"),
								"color" : ColorObject("#555555"),
								"font" : FontObject("12px \"Arial\"")
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
										"color" : ColorObject("#555555"),
										"font" : FontObject("12px \"Arial\"")
									}
								}
							},
							"ListViewCellControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"color" : ColorObject("#555555"),
										"font" : FontObject("12px \"Arial\"")
									}
								}
							}
						}
					},
					"ComboControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #b1b1b1"),
								"color" : ColorObject("#555555"),
								"font" : FontObject("12px \"Arial\"")
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
								"border" : BorderObject("1px dotted #909090")
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
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : FontObject("12px \"Arial\"")
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
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Calendar_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Calendar.png')", environment)
							}
						}
					},
					"MultiCombo" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_O.png')", environment)
							},
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_O.png')", environment)
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_P.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("1px 2px 0px 0px"),
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_P.png')", environment)
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Calendar_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Calendar.png')", environment)
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_O.png')", environment)
							},
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_O.png')", environment)
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_P.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("1px 2px 0px 0px"),
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_P.png')", environment)
							}
						}
					},
					"Combo" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_O.png')", environment)
							},
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_O.png')", environment)
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_P.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("1px 2px 0px 0px"),
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_P.png')", environment)
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
									"valid" : 
									{
										"color" : ColorObject("#999999")
									},
									"invalid" : 
									{
										"color" : ColorObject("#999999")
									},
									"enabled" : 
									{
										"color" : ColorObject("#999999")
									}
								}
							}
						}
					},
					"ComboControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_O.png')", environment)
							},
							"focused" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_O.png')", environment)
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_P.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("1px 2px 0px 0px"),
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/cmb_WF_Drop_P.png')", environment)
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
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"menupopupmenu" : 
			{
				"parent" : 
				{
					"Menu" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #034389"),
								"color" : ColorObject("#555555"),
								"font" : FontObject("12px \"Arial\"")
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
								"border" : BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : FontObject("12px \"Arial\"")
							},
							"mouseover" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : FontObject("12px \"Arial\"")
							},
							"focused" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : FontObject("12px \"Arial\"")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					},
					"DatePickerControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"border" : BorderObject("1px solid #98a6b5")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #125dae,1px solid #697888,1px solid #697888,1px solid #697888")
							}
						}
					},
					"datepicker" : 
					{
						"parent" : 
						{
							"datepickergroup" : 
							{
								"parent" : 
								{
									"DateRangePicker" : 
									{
										"self" : 
										{
											"disabled" : 
											{
												"border" : BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : BorderObject("0px solid #125dae,0px solid #125dae,0px solid #697888"),
												"padding" : PaddingObject("2px")
											}
										}
									},
									"PopupDateRangePicker" : 
									{
										"self" : 
										{
											"disabled" : 
											{
												"border" : BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : BorderObject("0px solid #125dae,0px solid #125dae,0px solid #697888"),
												"padding" : PaddingObject("2px")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"EditControl" : 
			{
				"self" : 
				{
					"nulltext" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("0px none"),
						"padding" : PaddingObject("1px 9px 0px 9px")
					}
				}
			},
			"PopupMenuControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #b5b5b5"),
						"color" : ColorObject("#555555"),
						"font" : FontObject("12px \"Arial\"")
					}
				}
			},
			"SpinControl" : 
			{
				"self" : 
				{
					"invalidtext" : 
					{
						"color" : ColorObject("#999999")
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
							"DatePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"disabled_selected" : 
									{
									},
									"focused" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"disabled" : 
									{
										"color" : ColorObject("#cdcdcd")
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
			},
			"ListView" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : BorderObject("1px solid #d5d5d5"),
						"color" : ColorObject("#666666")
					},
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5"),
						"color" : ColorObject("#666666")
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
							}
						}
					}
				}
			},
			"prefixtext" : 
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
										"padding" : PaddingObject("0px 9px"),
										"color" : ColorObject("#999999")
									}
								}
							},
							"SpinField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("0px 9px"),
										"color" : ColorObject("#999999")
									}
								}
							}
						}
					}
				}
			},
			"PopupDateRangePicker" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #697888")
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
							}
						}
					}
				}
			},
			"ButtonControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("0px none")
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
								"font" : FontObject("12px \"Arial\"")
							}
						}
					}
				}
			},
			"cellselection" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("2px dotted #909090")
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
						"border" : BorderObject("1px solid #697888")
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
										"border" : BorderObject("0px none,0px none,1px solid #cccccc")
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
										"border" : BorderObject("0px none,0px none,1px solid #cccccc")
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
										"border" : BorderObject("0px none,0px none,1px solid #cccccc")
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
										"border" : BorderObject("0px none,0px none,1px solid #cccccc")
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
								"padding" : PaddingObject("3px 9px 3px 9px")
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
						"border" : BorderObject("0px none,0px none,0px none,1px solid #d5d5d5"),
						"padding" : PaddingObject("2px 2px 2px 2px")
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
			"CheckBoxSetControl" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"enabled" : 
					{
					}
				}
			},
			"vscrollbar" : 
			{
				"parent" : 
				{
					"Grid" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,0px none,1px solid #b1b1b1")
							}
						}
					}
				}
			},
			"okbutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"focused" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("10px 8px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"focused" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("10px 8px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"focused" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("10px 8px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
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
									"mouseover" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Calnext_O.png')", environment)
									},
									"disabled" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Calnext.png')", environment)
									},
									"pushed" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Calnext_O.png')", environment)
									},
									"enabled" : 
									{
										"padding" : PaddingObject("0px 10px 0px 0px"),
										"icon" : UrlObject("url('theme://images/btn_WF_Calnext.png')", environment)
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"icon" : UrlObject("url('theme://images/btn_WF_Tabnext.png')", environment)
													},
													"disabled" : 
													{
														"icon" : UrlObject("url('theme://images/btn_WF_Tabnext.png')", environment)
													},
													"pushed" : 
													{
														"icon" : UrlObject("url('theme://images/btn_WF_Tabnext.png')", environment)
													},
													"enabled" : 
													{
														"icon" : UrlObject("url('theme://images/btn_WF_Tabnext.png')", environment)
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"Tab" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Tabnext_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Tabnext_D.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 0px 10px 8px"),
								"icon" : UrlObject("url('theme://images/btn_WF_Tabnext.png')", environment)
							}
						}
					},
					"menupopupmenu" : 
					{
						"parent" : 
						{
							"Menu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Popmenunext_O.png')", environment)
									},
									"disabled" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Popmenunext_D.png')", environment)
									},
									"enabled" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Popmenunext.png')", environment)
									}
								}
							}
						}
					},
					"Menu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Menunext_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Menunext_D.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Menunext_O.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 15px 0px 5px"),
								"icon" : UrlObject("url('theme://images/btn_WF_Menunext.png')", environment)
							}
						}
					},
					"PopupMenuControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenunext2_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenunext2_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenunext2.png')", environment)
							}
						}
					},
					"PopupMenu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenunext2_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenunext2_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Popmenunext2.png')", environment)
							}
						}
					}
				}
			},
			"CheckBox" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_Box_D.png')", environment)
					},
					"mouseover" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_Box_O.png')", environment)
					},
					"disabled_selected" : 
					{
						"color" : ColorObject("#999999"),
						"icon" : UrlObject("url('theme://images/chk_WF_Box_DS.png')", environment)
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999"),
						"icon" : UrlObject("url('theme://images/chk_WF_Box_D.png')", environment)
					},
					"enabled" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_Box.png')", environment),
						"textPadding" : PaddingObject("0px 0px 0px 6px")
					},
					"selected" : 
					{
						"icon" : UrlObject("url('theme://images/chk_WF_Box_S.png')", environment)
					}
				}
			},
			"TitleBarControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"padding" : PaddingObject("0px 0px 0px 10px"),
						"color" : ColorObject("#ffffff"),
						"font" : FontObject("bold 12px \"Arial\"")
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
									"disabled" : 
									{
										"color" : ColorObject("#c7d4e2")
									},
									"enabled" : 
									{
										"padding" : PaddingObject("0px 10px 0px 0px"),
										"color" : ColorObject("#ffffff"),
										"font" : FontObject("bold 14px \"Arial\"")
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : PaddingObject("0px 10px 0px 0px"),
														"color" : ColorObject("#333333"),
														"font" : FontObject("bold 14px \"Arial\"")
													}
												}
											},
											"PopupDateRangePicker" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : PaddingObject("0px 10px 0px 0px"),
														"color" : ColorObject("#333333"),
														"font" : FontObject("bold 14px \"Arial\"")
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
			},
			"progressbar" : 
			{
				"parent" : 
				{
					"StatusBarControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : BorderObject("1px solid #d2d0d0")
							}
						}
					}
				}
			},
			"timepicker" : 
			{
				"parent" : 
				{
					"timepickergroup" : 
					{
						"parent" : 
						{
							"DateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("10px")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("10px")
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
			"listboxitem" : 
			{
				"parent" : 
				{
					"combolist" : 
					{
						"parent" : 
						{
							"cellcombo" : 
							{
								"parent" : 
								{
									"GridCellControl" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
											}
										}
									},
									"ListViewCellControl" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
											}
										}
									}
								}
							}
						}
					},
					"ListBoxControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
								"padding" : PaddingObject("2px 9px 3px 9px"),
								"color" : ColorObject("#555555")
							},
							"selected" : 
							{
								"color" : ColorObject("#ffffff")
							}
						}
					},
					"ListBox" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
								"padding" : PaddingObject("2px 9px 3px 9px"),
								"color" : ColorObject("#555555")
							},
							"selected" : 
							{
								"color" : ColorObject("#ffffff")
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio_O.png')", environment)
							},
							"disabled_selected" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio_DS.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio.png')", environment),
								"textPadding" : PaddingObject("0px 0px 0px 5px")
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/rdo_WF_Radio_S.png')", environment)
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
						"color" : ColorObject("#999999")
					}
				}
			},
			"ImageViewer" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
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
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"imagetext" : 
			{
				"parent" : 
				{
					"ImageViewer" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"PopupMenu" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #b5b5b5"),
						"color" : ColorObject("#555555"),
						"font" : FontObject("12px \"Arial\"")
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
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 15px")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"invalid" : 
							{
								"color" : ColorObject("#b00020")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 15px")
							}
						}
					},
					"SpinField" : 
					{
						"self" : 
						{
							"invalid" : 
							{
								"color" : ColorObject("#b00020")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 9px")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"invalid" : 
							{
								"color" : ColorObject("#b00020")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 15px")
							}
						}
					}
				}
			},
			"popupmenuitemhotkeytext" : 
			{
				"parent" : 
				{
					"popupmenuitem" : 
					{
						"parent" : 
						{
							"menupopupmenu" : 
							{
								"parent" : 
								{
									"Menu" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"color" : ColorObject("#ffffff")
											},
											"disabled" : 
											{
												"color" : ColorObject("#4577b9")
											},
											"enabled" : 
											{
												"padding" : PaddingObject("0px 7px 0px 0px"),
												"color" : ColorObject("#6d95cc")
											}
										}
									}
								}
							},
							"PopupMenuControl" : 
							{
								"self" : 
								{
									"disabled" : 
									{
										"color" : ColorObject("#4577b9")
									},
									"enabled" : 
									{
										"padding" : PaddingObject("0px 7px 0px 0px"),
										"color" : ColorObject("#aaaaaa")
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"disabled" : 
									{
										"color" : ColorObject("#4577b9")
									},
									"enabled" : 
									{
										"padding" : PaddingObject("0px 7px 0px 0px"),
										"color" : ColorObject("#aaaaaa")
									}
								}
							}
						}
					}
				}
			},
			"HScrollIndicatorControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
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
									"focused_selected" : 
									{
										"color" : ColorObject("#333333")
									},
									"enabled" : 
									{
										"color" : ColorObject("#333333")
									},
									"selected" : 
									{
										"font" : FontObject("bold 14px \"Arial\"")
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
									"focused_selected" : 
									{
										"color" : ColorObject("#333333")
									},
									"enabled" : 
									{
										"color" : ColorObject("#333333")
									},
									"selected" : 
									{
										"font" : FontObject("bold 14px \"Arial\"")
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
									"focused_selected" : 
									{
										"color" : ColorObject("#333333")
									},
									"enabled" : 
									{
										"color" : ColorObject("#333333")
									},
									"selected" : 
									{
										"font" : FontObject("bold 14px \"Arial\"")
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
									"focused_selected" : 
									{
										"color" : ColorObject("#333333")
									},
									"enabled" : 
									{
										"color" : ColorObject("#333333")
									},
									"selected" : 
									{
										"font" : FontObject("bold 14px \"Arial\"")
									}
								}
							}
						}
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
							"disabled" : 
							{
								"color" : ColorObject("#999999")
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
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("0px none"),
						"color" : ColorObject("#555555"),
						"font" : FontObject("12px \"Arial\"")
					}
				}
			},
			"MaskEditControl" : 
			{
				"self" : 
				{
					"nulltext" : 
					{
						"color" : ColorObject("#999999")
					},
					"invalidtext" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("0px none"),
						"padding" : PaddingObject("1px 9px 0px 9px")
					}
				}
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
									"disabled" : 
									{
									},
									"enabled" : 
									{
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"disabled" : 
													{
													},
													"enabled" : 
													{
													}
												}
											},
											"PopupDateRangePicker" : 
											{
												"self" : 
												{
													"disabled" : 
													{
													},
													"enabled" : 
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
			},
			"calendarspindownbutton" : 
			{
				"parent" : 
				{
					"CalendarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown_D.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown_P.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown.png')", environment)
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown_D.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown_P.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown.png')", environment)
							}
						}
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Hdec_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Hdec_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Hdec.png')", environment)
							}
						}
					},
					"VScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Vdec_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Vdec_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Vdec.png')", environment)
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
								"color" : ColorObject("#999999")
							},
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D5D5D5"),
								"padding" : PaddingObject("1px 9px 9px 9px")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"color" : ColorObject("#999999")
							},
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"invalid" : 
							{
								"border" : BorderObject("1px solid #b00020")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"focused_valid" : 
							{
								"border" : BorderObject("1px solid #2E7D32")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D5D5D5"),
								"padding" : PaddingObject("0px 9px")
							},
							"mouseover_valid" : 
							{
								"border" : BorderObject("1px solid #2E7D32")
							}
						}
					},
					"SpinField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"color" : ColorObject("#999999")
							},
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"invalid" : 
							{
								"border" : BorderObject("1px solid #b00020")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"focused_valid" : 
							{
								"border" : BorderObject("1px solid #2E7D32")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D5D5D5"),
								"padding" : PaddingObject("0px 9px")
							},
							"mouseover_valid" : 
							{
								"border" : BorderObject("1px solid #2E7D32")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"color" : ColorObject("#999999")
							},
							"mouseover" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : BorderObject("1px solid #5a86cd")
							},
							"invalid" : 
							{
								"border" : BorderObject("1px solid #b00020")
							},
							"disabled" : 
							{
								"color" : ColorObject("#999999")
							},
							"focused_valid" : 
							{
								"border" : BorderObject("1px solid #2E7D32")
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #D5D5D5"),
								"padding" : PaddingObject("1px 9px 0px 9px")
							},
							"mouseover_valid" : 
							{
								"border" : BorderObject("1px solid #2E7D32")
							}
						}
					}
				}
			},
			"checkboxsetitem" : 
			{
				"parent" : 
				{
					"CheckBoxSetControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/chk_WF_Box_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/chk_WF_Box_D.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("2px 9px 3px 9px"),
								"color" : ColorObject("#555555"),
								"icon" : UrlObject("url('theme://images/chk_WF_Box.png')", environment),
								"textPadding" : PaddingObject("0px 0px 0px 6px")
							},
							"selected" : 
							{
								"color" : ColorObject("#ffffff"),
								"icon" : UrlObject("url('theme://images/chk_WF_Box_S.png')", environment)
							}
						}
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
							"disabled" : 
							{
								"color" : ColorObject("#cdcdcd")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("5px 0px 0px 0px")
							}
						}
					},
					"datepicker" : 
					{
						"parent" : 
						{
							"datepickergroup" : 
							{
								"parent" : 
								{
									"DateRangePicker" : 
									{
										"self" : 
										{
											"disabled" : 
											{
												"border" : BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : BorderObject("0px solid #125dae"),
												"color" : ColorObject("#333333")
											}
										}
									},
									"PopupDateRangePicker" : 
									{
										"self" : 
										{
											"disabled" : 
											{
												"border" : BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : BorderObject("0px solid #125dae"),
												"color" : ColorObject("#333333")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" : 
			{
				"parent" : 
				{
					"popupmenuitem" : 
					{
						"parent" : 
						{
							"menupopupmenu" : 
							{
								"parent" : 
								{
									"Menu" : 
									{
										"self" : 
										{
											"enabled" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Popupexpand2.png')", environment)
											}
										}
									}
								}
							},
							"PopupMenuControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Popupexpand2.png')", environment)
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"icon" : UrlObject("url('theme://images/btn_WF_Popupexpand2.png')", environment)
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemcheckbox" : 
			{
				"parent" : 
				{
					"popupmenuitem" : 
					{
						"parent" : 
						{
							"PopupMenuControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
									},
									"disabled" : 
									{
									},
									"enabled" : 
									{
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"mouseover" : 
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
										"icon" : UrlObject("url('theme://images/img_WF_Treeexpand.png')", environment)
									},
									"enabled" : 
									{
										"icon" : UrlObject("url('theme://images/img_WF_Treeitem.png')", environment)
									},
									"collapse" : 
									{
										"icon" : UrlObject("url('theme://images/img_WF_Treecollapse.png')", environment)
									}
								}
							}
						}
					}
				}
			},
			"treeitemtext" : 
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
									"disabled" : 
									{
										"color" : ColorObject("#999999")
									},
									"enabled" : 
									{
										"color" : ColorObject("#666666"),
										"font" : FontObject("12px \"Arial\"")
									}
								}
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
							},
							"enabled" : 
							{
								"border" : BorderObject("1px solid #d6d4d5")
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
								"icon" : UrlObject("url('theme://images/btn_TF_Max_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Max_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Max.png')", environment)
							}
						}
					}
				}
			},
			"multicomboedit" : 
			{
				"parent" : 
				{
					"MultiComboListControl" : 
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
								"border" : BorderObject("1px solid #cfcfcf,0px none,0px none,0px none")
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/chk_WF_Box_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/chk_WF_Box_D.png')", environment)
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none,0px none,1px solid #d5d5d5"),
								"padding" : PaddingObject("2px 9px 3px 9px"),
								"color" : ColorObject("#555555"),
								"icon" : UrlObject("url('theme://images/chk_WF_Box.png')", environment),
								"textPadding" : PaddingObject("0px 0px 0px 6px")
							},
							"selected" : 
							{
								"color" : ColorObject("#ffffff"),
								"icon" : UrlObject("url('theme://images/chk_WF_Box_S.png')", environment)
							}
						}
					}
				}
			},
			"closebutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"focused" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("10px 8px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"focused" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("10px 8px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					},
					"TitleBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Close_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Close_D.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_TF_Close.png')", environment)
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"focused" : 
							{
								"font" : FontObject("bold 12px \"Arial\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : BorderObject("0px none"),
								"padding" : PaddingObject("10px 8px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					}
				}
			},
			"VFrameSet" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #b7b1b2")
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
								"border" : BorderObject("1px solid #c8c1c2,0px none,0px none,0px none")
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
									"saturday" : 
									{
										"color" : ColorObject("#269bee")
									},
									"mouseover" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"disabled_selected" : 
									{
									},
									"trailingday" : 
									{
										"color" : ColorObject("#989898")
									},
									"enabled" : 
									{
										"color" : ColorObject("#333333")
									},
									"sunday" : 
									{
										"color" : ColorObject("#ff4c5e")
									},
									"mouseover_trailingday" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"today" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"focused" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"disabled" : 
									{
										"color" : ColorObject("#cdcdcd")
									},
									"mouseover_saturday" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"selected" : 
									{
										"color" : ColorObject("#ffffff")
									},
									"mouseover_sunday" : 
									{
										"color" : ColorObject("#ffffff")
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
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"ChildFrame" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #b7b1b2")
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
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
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
								"padding" : PaddingObject("2px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"mouseover_floating" : 
							{
								"color" : ColorObject("#5a86cd")
							},
							"focused_floating" : 
							{
								"color" : ColorObject("#5a86cd")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 9px 0px 9px"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"focused_floatingvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"color" : ColorObject("#2E7D32"),
								"font" : FontObject("12px \"Arial\"")
							},
							"floating" : 
							{
								"padding" : PaddingObject("2px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"floatingvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"mouseover_floatingvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"color" : ColorObject("#2E7D32"),
								"font" : FontObject("12px \"Arial\"")
							},
							"mouseover_floating" : 
							{
								"color" : ColorObject("#5a86cd")
							},
							"focused_floating" : 
							{
								"color" : ColorObject("#5a86cd")
							},
							"floatinginvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"color" : ColorObject("#b00020"),
								"font" : FontObject("12px \"Arial\"")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 9px 0px 9px"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"SpinField" : 
					{
						"self" : 
						{
							"focused_floatingvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"color" : ColorObject("#2E7D32"),
								"font" : FontObject("12px \"Arial\"")
							},
							"floating" : 
							{
								"padding" : PaddingObject("2px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"floatingvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"mouseover_floatingvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"color" : ColorObject("#2E7D32"),
								"font" : FontObject("12px \"Arial\"")
							},
							"mouseover_floating" : 
							{
								"color" : ColorObject("#5a86cd")
							},
							"focused_floating" : 
							{
								"color" : ColorObject("#5a86cd")
							},
							"floatinginvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"color" : ColorObject("#b00020"),
								"font" : FontObject("12px \"Arial\"")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 9px 0px 9px"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"focused_floatingvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"color" : ColorObject("#2E7D32"),
								"font" : FontObject("12px \"Arial\"")
							},
							"floating" : 
							{
								"padding" : PaddingObject("2px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"floatingvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"font" : FontObject("12px \"Arial\"")
							},
							"mouseover_floatingvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"color" : ColorObject("#2E7D32"),
								"font" : FontObject("12px \"Arial\"")
							},
							"mouseover_floating" : 
							{
								"color" : ColorObject("#5a86cd")
							},
							"focused_floating" : 
							{
								"color" : ColorObject("#5a86cd")
							},
							"floatinginvalid" : 
							{
								"padding" : PaddingObject("2px"),
								"color" : ColorObject("#b00020"),
								"font" : FontObject("12px \"Arial\"")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 9px 0px 9px"),
								"font" : FontObject("12px \"Arial\"")
							}
						}
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
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Stepitem_S.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Stepitem_S.png')", environment)
							},
							"enabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Stepitem.png')", environment)
							},
							"selected" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Stepitem_S.png')", environment)
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
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"invalidtext" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"TextAreaControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
					},
					"mouseover" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : BorderObject("1px solid #5a86cd")
					},
					"nulltext" : 
					{
						"color" : ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5"),
						"padding" : PaddingObject("9px 9px 9px 9px")
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
								"padding" : PaddingObject("5px 15px 0px 0px")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("5px 15px 0px 0px")
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
										"color" : ColorObject("#ff7986")
									},
									"saturday" : 
									{
										"color" : ColorObject("#48afff")
									},
									"disabled" : 
									{
										"color" : ColorObject("#c7d4e2")
									},
									"enabled" : 
									{
										"color" : ColorObject("#ffffff")
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"disabled" : 
													{
													},
													"enabled" : 
													{
														"color" : ColorObject("#333333")
													}
												}
											},
											"PopupDateRangePicker" : 
											{
												"self" : 
												{
													"disabled" : 
													{
													},
													"enabled" : 
													{
														"color" : ColorObject("#333333")
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
			},
			"popupmenuitemtext" : 
			{
				"parent" : 
				{
					"popupmenuitem" : 
					{
						"parent" : 
						{
							"menupopupmenu" : 
							{
								"parent" : 
								{
									"Menu" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"color" : ColorObject("#ffffff")
											},
											"disabled" : 
											{
												"color" : ColorObject("#2665af")
											},
											"enabled" : 
											{
												"padding" : PaddingObject("0px 20px 0px 0px"),
												"color" : ColorObject("#c3e0ff")
											}
										}
									}
								}
							},
							"PopupMenuControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("2px 10px 1px 4px")
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : PaddingObject("2px 10px 1px 4px")
									}
								}
							}
						}
					}
				}
			},
			"spindownbutton" : 
			{
				"parent" : 
				{
					"Spin" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown_O.png')", environment)
							},
							"disabled" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown_D.png')", environment)
							},
							"pushed" : 
							{
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown_P.png')", environment)
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 0px 2px 0px"),
								"icon" : UrlObject("url('theme://images/btn_WF_Spindown.png')", environment)
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
											"mouseover" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspindown_O.png')", environment)
											},
											"disabled" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspindown_D.png')", environment)
											},
											"pushed" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspindown_O.png')", environment)
											},
											"enabled" : 
											{
												"padding" : PaddingObject("0px 10px 0px 5px"),
												"icon" : UrlObject("url('theme://images/btn_WF_Calspindown.png')", environment)
											}
										}
									}
								}
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
											"mouseover" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspindown_O.png')", environment)
											},
											"disabled" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspindown_D.png')", environment)
											},
											"pushed" : 
											{
												"icon" : UrlObject("url('theme://images/btn_WF_Calspindown_O.png')", environment)
											},
											"enabled" : 
											{
												"padding" : PaddingObject("0px 10px 0px 5px"),
												"icon" : UrlObject("url('theme://images/btn_WF_Calspindown.png')", environment)
											}
										}
									}
								}
							}
						}
					},
					"box" : 
					{
						"parent" : 
						{
							"SpinField" : 
							{
								"self" : 
								{
									"mouseover" : 
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
										"padding" : PaddingObject("20px 0px 20px 0px")
									}
								}
							}
						}
					}
				}
			},
			"menuitem" : 
			{
				"parent" : 
				{
					"Menu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"disabled" : 
							{
								"color" : ColorObject("#c7d4e2")
							},
							"enabled" : 
							{
								"padding" : PaddingObject("0px 30px 0px 30px"),
								"color" : ColorObject("#ffffff"),
								"font" : FontObject("bold 13px \"Arial\"")
							},
							"selected" : 
							{
							}
						}
					}
				}
			},
			"Plugin" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("1px solid #d5d5d5")
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
			["theme://images/btn_expand.png", 9, 6],
			["theme://images/btn_TF_Close.png", 30, 30],
			["theme://images/btn_TF_Close_D.png", 30, 30],
			["theme://images/btn_TF_Close_O.png", 30, 30],
			["theme://images/btn_TF_Max.png", 30, 30],
			["theme://images/btn_TF_Max_D.png", 30, 30],
			["theme://images/btn_TF_Max_O.png", 30, 30],
			["theme://images/btn_TF_Min.png", 30, 30],
			["theme://images/btn_TF_Min_D.png", 30, 30],
			["theme://images/btn_TF_Min_O.png", 30, 30],
			["theme://images/btn_TF_Normal.png", 30, 30],
			["theme://images/btn_TF_Normal_D.png", 30, 30],
			["theme://images/btn_TF_Normal_O.png", 30, 30],
			["theme://images/btn_WF_Calendar.png", 12, 12],
			["theme://images/btn_WF_Calendar_D.png", 12, 12],
			["theme://images/btn_WF_Calnext.png", 6, 9],
			["theme://images/btn_WF_Calnext_O.png", 6, 9],
			["theme://images/btn_WF_Calprev.png", 6, 9],
			["theme://images/btn_WF_Calprev_O.png", 6, 9],
			["theme://images/btn_WF_Calspindown.png", 5, 3],
			["theme://images/btn_WF_Calspindown_D.png", 5, 3],
			["theme://images/btn_WF_Calspindown_O.png", 5, 3],
			["theme://images/btn_WF_Calspinup.png", 5, 3],
			["theme://images/btn_WF_Calspinup_D.png", 5, 3],
			["theme://images/btn_WF_Calspinup_O.png", 5, 3],
			["theme://images/btn_WF_Grdexpand.png", 13, 13],
			["theme://images/btn_WF_Hdec.png", 3, 5],
			["theme://images/btn_WF_Hdec_D.png", 3, 5],
			["theme://images/btn_WF_Hdec_O.png", 3, 5],
			["theme://images/btn_WF_Hinc.png", 3, 5],
			["theme://images/btn_WF_Hinc_D.png", 3, 5],
			["theme://images/btn_WF_Hinc_O.png", 3, 5],
			["theme://images/btn_WF_Menunext.png", 5, 9],
			["theme://images/btn_WF_Menunext_D.png", 5, 9],
			["theme://images/btn_WF_Menunext_O.png", 5, 9],
			["theme://images/btn_WF_Menuprev.png", 5, 9],
			["theme://images/btn_WF_Menuprev_D.png", 5, 9],
			["theme://images/btn_WF_Menuprev_O.png", 5, 9],
			["theme://images/btn_WF_Popmenunext.png", 11, 6],
			["theme://images/btn_WF_Popmenunext2.png", 11, 6],
			["theme://images/btn_WF_Popmenunext2_D.png", 11, 6],
			["theme://images/btn_WF_Popmenunext2_O.png", 11, 6],
			["theme://images/btn_WF_Popmenunext_D.png", 11, 6],
			["theme://images/btn_WF_Popmenunext_O.png", 11, 6],
			["theme://images/btn_WF_Popmenuprev.png", 11, 6],
			["theme://images/btn_WF_Popmenuprev2.png", 11, 6],
			["theme://images/btn_WF_Popmenuprev2_D.png", 11, 6],
			["theme://images/btn_WF_Popmenuprev2_O.png", 11, 6],
			["theme://images/btn_WF_Popmenuprev_D.png", 11, 6],
			["theme://images/btn_WF_Popmenuprev_O.png", 11, 6],
			["theme://images/btn_WF_Popupexpand.png", 3, 5],
			["theme://images/btn_WF_Popupexpand2.png", 4, 7],
			["theme://images/btn_WF_Spindown.png", 5, 3],
			["theme://images/btn_WF_Spindown_D.png", 5, 3],
			["theme://images/btn_WF_Spindown_O.png", 5, 3],
			["theme://images/btn_WF_Spindown_P.png", 5, 3],
			["theme://images/btn_WF_Spinup.png", 5, 3],
			["theme://images/btn_WF_Spinup_D.png", 5, 3],
			["theme://images/btn_WF_Spinup_O.png", 5, 3],
			["theme://images/btn_WF_Spinup_P.png", 5, 3],
			["theme://images/btn_WF_Stepitem.png", 13, 13],
			["theme://images/btn_WF_Stepitem_S.png", 13, 13],
			["theme://images/btn_WF_Tabextra.png", 9, 9],
			["theme://images/btn_WF_Tabextra_S.png", 8, 8],
			["theme://images/btn_WF_Tabnext.png", 6, 11],
			["theme://images/btn_WF_Tabnext_D.png", 6, 11],
			["theme://images/btn_WF_Tabnext_O.png", 6, 11],
			["theme://images/btn_WF_Tabprev.png", 6, 11],
			["theme://images/btn_WF_Tabprev_D.png", 6, 11],
			["theme://images/btn_WF_Tabprev_O.png", 6, 11],
			["theme://images/btn_WF_Treecollapse.png", 9, 9],
			["theme://images/btn_WF_Treeexpand.png", 9, 9],
			["theme://images/btn_WF_Vdec.png", 5, 3],
			["theme://images/btn_WF_Vdec_D.png", 5, 3],
			["theme://images/btn_WF_Vdec_O.png", 5, 3],
			["theme://images/btn_WF_Vinc.png", 5, 3],
			["theme://images/btn_WF_Vinc_D.png", 5, 3],
			["theme://images/btn_WF_Vinc_O.png", 5, 3],
			["theme://images/chk_WF_Box.png", 13, 13],
			["theme://images/chk_WF_Box_D.png", 13, 13],
			["theme://images/chk_WF_Box_DS.png", 13, 13],
			["theme://images/chk_WF_Box_F.png", 13, 13],
			["theme://images/chk_WF_Box_O.png", 13, 13],
			["theme://images/chk_WF_Box_S.png", 13, 13],
			["theme://images/chk_WF_Popupmenu.png", 13, 13],
			["theme://images/chk_WF_Popupmenu_O.png", 13, 13],
			["theme://images/cmb_WF_Drop.png", 9, 6],
			["theme://images/cmb_WF_Drop_O.png", 9, 6],
			["theme://images/cmb_WF_Drop_P.png", 9, 6],
			["theme://images/daterange.png", 16, 16],
			["theme://images/dropdown.png", 24, 24],
			["theme://images/dropdown_invalid.png", 24, 24],
			["theme://images/dropdown_valid.png", 24, 24],
			["theme://images/happy.png", 16, 16],
			["theme://images/heart.png", 16, 16],
			["theme://images/img_grip.png", 11, 11],
			["theme://images/img_WF_Grdimg.png", 12, 14],
			["theme://images/img_WF_Htrackbar.png", 8, 5],
			["theme://images/img_WF_Htrackbar_D.png", 8, 5],
			["theme://images/img_WF_Menuitem2.png", 10, 10],
			["theme://images/img_WF_Menu_O.png", 19, 11],
			["theme://images/img_WF_Popupcheck.png", 7, 7],
			["theme://images/img_WF_Popupcheck2.png", 7, 7],
			["theme://images/img_WF_Treecollapse.png", 14, 11],
			["theme://images/img_WF_Treeexpand.png", 14, 9],
			["theme://images/img_WF_Treeitem.png", 13, 13],
			["theme://images/img_WF_Vtrackbar.png", 5, 8],
			["theme://images/img_WF_Vtrackbar_D.png", 5, 8],
			["theme://images/invalid.png", 24, 24],
			["theme://images/invalid1.png", 24, 24],
			["theme://images/mnu_WF_PopItemImg.png", 8, 7],
			["theme://images/rdo_WF_Radio.png", 14, 14],
			["theme://images/rdo_WF_Radio_D.png", 14, 14],
			["theme://images/rdo_WF_Radio_DS.png", 14, 14],
			["theme://images/rdo_WF_Radio_O.png", 14, 14],
			["theme://images/rdo_WF_Radio_S.png", 14, 14],
			["theme://images/timerange.png", 16, 16],
			["theme://images/titlebar_icon.ico", 256, 256],
			["theme://images/titlebar_icon.png", 16, 16],
			["theme://images/valid.png", 24, 24]
		]
		);
		
		environment._setCSSPredefineGroupAutoSelectInfo (
		
		);
	};
}
)();
