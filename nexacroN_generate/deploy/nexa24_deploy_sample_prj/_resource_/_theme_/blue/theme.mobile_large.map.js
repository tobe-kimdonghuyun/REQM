(function()
{
	return function()
	{

		nexacro._setCSSMaps(
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
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_O.png')")
							},
							"disabled_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_DS.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_S.png')")
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
								"border" : nexacro.BorderObject("1px solid #b1b1b1,0px none,0px none,0px none")
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
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" : 
									{
										"color" : nexacro.ColorObject("#cdcdcd")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
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
														"color" : nexacro.ColorObject("#ffffff")
													},
													"mouseover" : 
													{
													},
													"disabled" : 
													{
														"color" : nexacro.ColorObject("#999999")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("1px solid #dbdee2"),
														"padding" : nexacro.PaddingObject("4px 4px 4px 4px"),
														"color" : nexacro.ColorObject("#666666")
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
								"padding" : nexacro.PaddingObject("1px 2px 0px 9px")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
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
												"color" : nexacro.ColorObject("#ffffff"),
												"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
												"color" : nexacro.ColorObject("#ffffff"),
												"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
										"color" : nexacro.ColorObject("#999999")
									},
									"invalid" : 
									{
										"color" : nexacro.ColorObject("#999999")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
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
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
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
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
						"border" : nexacro.BorderObject("1px solid #b7b1b2")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					}
				}
			},
			"HFrameSet" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #b7b1b2")
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
										"color" : nexacro.ColorObject("#c7d4e2")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
														"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
														"color" : nexacro.ColorObject("#333333"),
														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
													}
												}
											},
											"PopupDateRangePicker" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
														"color" : nexacro.ColorObject("#333333"),
														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
													}
												}
											},
											"DateRangePickerControl" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
														"color" : nexacro.ColorObject("#333333"),
														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
						"color" : nexacro.ColorObject("#999999")
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
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Grdexpand.png')")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Grdexpand.png')")
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
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					},
					"ProgressBar" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#ffffff")
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
						"border" : nexacro.BorderObject("1px solid #a0a0a0")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #a0a0a0")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d9d9d9"),
						"color" : nexacro.ColorObject("#bbbbbb")
					},
					"pushed" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #c2c2c2")
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
						"border" : nexacro.BorderObject("1px solid #a0a0a0")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #a0a0a0")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d9d9d9"),
						"color" : nexacro.ColorObject("#bbbbbb")
					},
					"pushed" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #c2c2c2")
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
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("10px 8px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("10px 8px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("10px 8px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"color" : nexacro.ColorObject("#333333"),
								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
						"border" : nexacro.BorderObject("1px solid #b7b1b2")
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
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("5px")
					}
				}
			},
			"HScrollBarControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5,0px none,0px none,0px none"),
						"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
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
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
						"border" : nexacro.BorderObject("1px solid #aeaeae")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup_D.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup_P.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("1px 0px 0px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup.png')")
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
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspinup_O.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspinup_D.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspinup_O.png')")
											},
											"enabled" : 
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspinup.png')")
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
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspinup_O.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspinup_D.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspinup_O.png')")
											},
											"enabled" : 
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspinup.png')")
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
										"padding" : nexacro.PaddingObject("20px 0px 20px 0px")
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
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Treeexpand.png')")
									},
									"collapse" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Treecollapse.png')")
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
										"border" : nexacro.BorderObject("1px solid #dddddd")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dddddd")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dddddd")
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
										"border" : nexacro.BorderObject("1px solid #dddddd")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dddddd")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dddddd")
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
										"border" : nexacro.BorderObject("1px solid #dddddd")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dddddd")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dddddd")
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
										"padding" : nexacro.PaddingObject("4px")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("4px")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("4px")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Hinc_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Hinc_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Hinc.png')")
							}
						}
					},
					"VScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Vinc_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Vinc_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Vinc.png')")
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
										"icon" : nexacro.UrlObject("url('theme://images/btn_expand.png')")
									},
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #d9d9d9"),
										"color" : nexacro.ColorObject("#bbbbbb")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #c2c2c2")
									},
									"collapse" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop.png')")
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
						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
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
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 4px 0px 4px")
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
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 17px \"Malgun Gothic\"")
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
										"border" : nexacro.BorderObject("2px solid #125dae")
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
											},
											"DateRangePickerControl" : 
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
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : nexacro.UrlObject("url('theme://images/timerange.png')")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : nexacro.UrlObject("url('theme://images/timerange.png')")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : nexacro.UrlObject("url('theme://images/timerange.png')")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
								"border" : nexacro.BorderObject("1px solid #b1b1b1")
							},
							"disabled_selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #c7d4e2")
							},
							"focused" : 
							{
								"color" : nexacro.ColorObject("#dee4ef")
							},
							"focused_selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #1055a1"),
								"color" : nexacro.ColorObject("#dee4ef")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#ababab")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
								"color" : nexacro.ColorObject("#333333")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #1055a1"),
								"color" : nexacro.ColorObject("#dee4ef")
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
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"padding" : nexacro.PaddingObject("5px")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("5px")
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
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #d9d9d9"),
										"color" : nexacro.ColorObject("#bbbbbb")
									},
									"pushed" : 
									{
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #c2c2c2"),
										"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
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
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"ListBox" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
								"icon" : nexacro.UrlObject("url('theme://images/img_grip.png')")
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
						"border" : nexacro.BorderObject("1px solid #b7b1b2")
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
							"SelectField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 9px"),
										"color" : nexacro.ColorObject("#999999")
									}
								}
							},
							"TextField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 9px"),
										"color" : nexacro.ColorObject("#999999")
									}
								}
							},
							"SpinField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 9px"),
										"color" : nexacro.ColorObject("#999999")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"invalidtext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
						"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
					},
					"selected" : 
					{
						"color" : nexacro.ColorObject("#ffffff")
					}
				}
			},
			"Grid" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("2px solid #125dae,1px solid #b7b1b2,1px solid #b7b1b2,1px solid #b7b1b2")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Min_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Min_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Min.png')")
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
										"border" : nexacro.BorderObject("1px solid #cccccc,0px none,0px none")
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
										"border" : nexacro.BorderObject("1px solid #cccccc,0px none,0px none")
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
										"border" : nexacro.BorderObject("1px solid #cccccc,0px none,0px none")
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
										"border" : nexacro.BorderObject("1px solid #cccccc,0px none,0px none")
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
												"color" : nexacro.ColorObject("#999999")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("1px solid #cacaca"),
												"padding" : nexacro.PaddingObject("4px 4px 4px 4px"),
												"color" : nexacro.ColorObject("#2f2f2f"),
												"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
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
												"border" : nexacro.BorderObject("1px solid #c8c1c2"),
												"color" : nexacro.ColorObject("#333333"),
												"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
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
												"color" : nexacro.ColorObject("#ffffff")
											},
											"disabled_selected" : 
											{
											},
											"mouseover" : 
											{
											},
											"disabled" : 
											{
												"color" : nexacro.ColorObject("#999999")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("1px solid #dbdee2"),
												"padding" : nexacro.PaddingObject("4px 4px 4px 4px"),
												"color" : nexacro.ColorObject("#666666")
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
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("1px solid #c4c9cf")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
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
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("1px solid #c4c9cf")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
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
										"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabextra.png')")
									},
									"selected" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabextra_S.png')")
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
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
						"border" : nexacro.BorderObject("1px solid #697888")
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
								"border" : nexacro.BorderObject("1px solid transparent")
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
								"border" : nexacro.BorderObject("1px solid transparent")
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
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calprev_O.png')")
									},
									"disabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calprev.png')")
									},
									"pushed" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calprev_O.png')")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calprev.png')")
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
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
													},
													"disabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
													},
													"pushed" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
													},
													"enabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
													}
												}
											},
											"DateRangePickerControl" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
													},
													"disabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
													},
													"pushed" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
													},
													"enabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev_D.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 8px 10px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabprev.png')")
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
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenuprev_O.png')")
									},
									"disabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenuprev_D.png')")
									},
									"enabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenuprev.png')")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Menuprev_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Menuprev_D.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Menuprev_O.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 5px 0px 15px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Menuprev.png')")
							}
						}
					},
					"PopupMenuControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenuprev2_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenuprev2_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenuprev2.png')")
							}
						}
					},
					"PopupMenu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenuprev2_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenuprev2_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenuprev2.png')")
							}
						}
					}
				}
			},
			"nulltext" : 
			{
				"parent" : 
				{
					"SelectField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"color" : nexacro.ColorObject("#999999"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"color" : nexacro.ColorObject("#999999"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"color" : nexacro.ColorObject("#999999"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"SpinField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"color" : nexacro.ColorObject("#999999"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"color" : nexacro.ColorObject("#999999"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
						"border" : nexacro.BorderObject("1px solid #aeaeae")
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
								"padding" : nexacro.PaddingObject("15px 15px")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("15px 15px")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("15px 15px")
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
								"padding" : nexacro.PaddingObject("3px")
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
										"border" : nexacro.BorderObject("1px solid #5a86cd")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("1px solid #5a86cd")
									},
									"disabled" : 
									{
										"color" : nexacro.ColorObject("#999999")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #d5d5d5"),
										"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
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
										"color" : nexacro.ColorObject("#c8c8c8")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : nexacro.UrlObject("url('theme://images/daterange.png')")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : nexacro.UrlObject("url('theme://images/daterange.png')")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px solid #dddddd,0px solid #dddddd,1px solid #dddddd"),
								"icon" : nexacro.UrlObject("url('theme://images/daterange.png')")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #125dae")
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
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" : 
									{
										"color" : nexacro.ColorObject("#2665af")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #2065ae,0px none"),
										"padding" : nexacro.PaddingObject("3px 8px 3px 8px"),
										"color" : nexacro.ColorObject("#c3e0ff")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
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
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("3px 9px 3px 9px"),
								"color" : nexacro.ColorObject("#555555")
							},
							"selected" : 
							{
								"color" : nexacro.ColorObject("#ffffff")
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
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("3px 9px 3px 9px"),
								"color" : nexacro.ColorObject("#555555")
							},
							"selected" : 
							{
								"color" : nexacro.ColorObject("#ffffff")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"icon" : nexacro.UrlObject("url('theme://images/titlebar_icon.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup_D.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup_P.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup.png')")
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup_D.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup_P.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spinup.png')")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Normal_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Normal_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Normal.png')")
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
								"padding" : nexacro.PaddingObject("5px")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("5px")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("5px")
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
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #d9d9d9"),
								"color" : nexacro.ColorObject("#bbbbbb")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #c2c2c2"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #d9d9d9"),
								"color" : nexacro.ColorObject("#bbbbbb")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #c2c2c2"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
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
						"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_O.png')")
					},
					"disabled_selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_DS.png')")
					},
					"disabled" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_D.png')")
					},
					"enabled" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio.png')"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
					},
					"selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_S.png')")
					}
				}
			},
			"CheckBoxControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_D.png')")
					},
					"mouseover" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_O.png')")
					},
					"disabled_selected" : 
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_DS.png')")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_D.png')")
					},
					"enabled" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_S.png')")
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
								"padding" : nexacro.PaddingObject("10px")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("10px")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("10px")
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
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
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
								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
										"color" : nexacro.ColorObject("#555555"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									}
								}
							},
							"ListViewCellControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#555555"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"border" : nexacro.BorderObject("1px dotted #909090")
							}
						}
					}
				}
			},
			"selectfieldlist" : 
			{
				"parent" : 
				{
					"SelectField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar.png')")
							}
						}
					},
					"MultiCombo" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_O.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_O.png')")
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_P.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_P.png')")
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar.png')")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_O.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_O.png')")
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_P.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_P.png')")
							}
						}
					},
					"Combo" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_O.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_O.png')")
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_P.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_P.png')")
							}
						}
					},
					"box" : 
					{
						"parent" : 
						{
							"SelectField" : 
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
										"color" : nexacro.ColorObject("#999999")
									},
									"selected" : 
									{
									}
								}
							},
							"DateField" : 
							{
								"self" : 
								{
									"valid" : 
									{
										"color" : nexacro.ColorObject("#999999")
									},
									"invalid" : 
									{
										"color" : nexacro.ColorObject("#999999")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#999999")
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
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_O.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_O.png')")
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_P.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_P.png')")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
								"border" : nexacro.BorderObject("1px solid #034389"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #dbdee2,0px none"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"border" : nexacro.BorderObject("1px solid #98a6b5")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #125dae,1px solid #697888,1px solid #697888,1px solid #697888")
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
												"border" : nexacro.BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #697888"),
												"padding" : nexacro.PaddingObject("2px")
											}
										}
									},
									"PopupDateRangePicker" : 
									{
										"self" : 
										{
											"disabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #697888"),
												"padding" : nexacro.PaddingObject("2px")
											}
										}
									},
									"DateRangePickerControl" : 
									{
										"self" : 
										{
											"disabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae,0px solid #125dae,0px solid #697888"),
												"padding" : nexacro.PaddingObject("2px")
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
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					}
				}
			},
			"PopupMenuControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #b5b5b5"),
						"color" : nexacro.ColorObject("#555555"),
						"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
					}
				}
			},
			"SpinControl" : 
			{
				"self" : 
				{
					"invalidtext" : 
					{
						"color" : nexacro.ColorObject("#999999")
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
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled_selected" : 
									{
									},
									"focused" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" : 
									{
										"color" : nexacro.ColorObject("#cdcdcd")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
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
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#666666")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#666666")
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
							"SelectField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 9px"),
										"color" : nexacro.ColorObject("#999999")
									}
								}
							},
							"TextField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 9px"),
										"color" : nexacro.ColorObject("#999999")
									}
								}
							},
							"SpinField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 9px"),
										"color" : nexacro.ColorObject("#999999")
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
						"border" : nexacro.BorderObject("1px solid #697888")
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
						"border" : nexacro.BorderObject("0px none")
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
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"border" : nexacro.BorderObject("2px dotted #909090")
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
						"border" : nexacro.BorderObject("1px solid #697888")
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
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #cccccc")
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
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #cccccc")
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
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #cccccc")
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
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #cccccc")
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
								"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
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
						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
					}
				}
			},
			"TimePickerControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"padding" : nexacro.PaddingObject("10px")
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
								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #b1b1b1")
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
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"focused" : 
							{
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("10px 8px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"focused" : 
							{
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("10px 8px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"focused" : 
							{
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("10px 8px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calnext_O.png')")
									},
									"disabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calnext.png')")
									},
									"pushed" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calnext_O.png')")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calnext.png')")
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
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
													},
													"disabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
													},
													"pushed" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
													},
													"enabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
													}
												}
											},
											"DateRangePickerControl" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
													},
													"disabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
													},
													"pushed" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
													},
													"enabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext_D.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 10px 8px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Tabnext.png')")
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
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenunext_O.png')")
									},
									"disabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenunext_D.png')")
									},
									"enabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenunext.png')")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Menunext_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Menunext_D.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Menunext_O.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 15px 0px 5px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Menunext.png')")
							}
						}
					},
					"PopupMenuControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenunext2_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenunext2_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenunext2.png')")
							}
						}
					},
					"PopupMenu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenunext2_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenunext2_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popmenunext2.png')")
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
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_D.png')")
					},
					"mouseover" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_O.png')")
					},
					"disabled_selected" : 
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_DS.png')")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_D.png')")
					},
					"enabled" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_S.png')")
					}
				}
			},
			"TitleBarControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
						"color" : nexacro.ColorObject("#ffffff"),
						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
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
										"color" : nexacro.ColorObject("#c7d4e2")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
														"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
														"color" : nexacro.ColorObject("#333333"),
														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
													}
												}
											},
											"PopupDateRangePicker" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
														"color" : nexacro.ColorObject("#333333"),
														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
													}
												}
											},
											"DateRangePickerControl" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
														"color" : nexacro.ColorObject("#333333"),
														"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
								"border" : nexacro.BorderObject("1px solid #d2d0d0")
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
										"padding" : nexacro.PaddingObject("10px")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("10px")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("10px")
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
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px"),
								"color" : nexacro.ColorObject("#555555")
							},
							"selected" : 
							{
								"color" : nexacro.ColorObject("#ffffff")
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
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px"),
								"color" : nexacro.ColorObject("#555555")
							},
							"selected" : 
							{
								"color" : nexacro.ColorObject("#ffffff")
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
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_O.png')")
							},
							"disabled_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_DS.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Radio_S.png')")
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
						"color" : nexacro.ColorObject("#999999")
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
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
								"color" : nexacro.ColorObject("#999999")
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
						"border" : nexacro.BorderObject("1px solid #b5b5b5"),
						"color" : nexacro.ColorObject("#555555"),
						"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"padding" : nexacro.PaddingObject("5px 0px 0px 15px")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"invalid" : 
							{
								"color" : nexacro.ColorObject("#b00020")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("5px 0px 0px 15px")
							}
						}
					},
					"SpinField" : 
					{
						"self" : 
						{
							"invalid" : 
							{
								"color" : nexacro.ColorObject("#b00020")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("9px 0px 0px 15px")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"invalid" : 
							{
								"color" : nexacro.ColorObject("#b00020")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("5px 0px 0px 15px")
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
												"color" : nexacro.ColorObject("#ffffff")
											},
											"disabled" : 
											{
												"color" : nexacro.ColorObject("#4577b9")
											},
											"enabled" : 
											{
												"padding" : nexacro.PaddingObject("0px 7px 0px 0px"),
												"color" : nexacro.ColorObject("#6d95cc")
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
										"color" : nexacro.ColorObject("#4577b9")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 7px 0px 0px"),
										"color" : nexacro.ColorObject("#aaaaaa")
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"disabled" : 
									{
										"color" : nexacro.ColorObject("#4577b9")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 7px 0px 0px"),
										"color" : nexacro.ColorObject("#aaaaaa")
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
										"color" : nexacro.ColorObject("#333333")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"selected" : 
									{
										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
										"color" : nexacro.ColorObject("#333333")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"selected" : 
									{
										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
										"color" : nexacro.ColorObject("#333333")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"selected" : 
									{
										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
										"color" : nexacro.ColorObject("#333333")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"selected" : 
									{
										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
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
								"color" : nexacro.ColorObject("#999999")
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
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#555555"),
						"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
					}
				}
			},
			"MaskEditControl" : 
			{
				"self" : 
				{
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
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
											},
											"DateRangePickerControl" : 
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown_D.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown_P.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown.png')")
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown_D.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown_P.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown.png')")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Hdec_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Hdec_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Hdec.png')")
							}
						}
					},
					"VScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Vdec_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Vdec_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Vdec.png')")
							}
						}
					}
				}
			},
			"box" : 
			{
				"parent" : 
				{
					"SelectField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #D5D5D5"),
								"padding" : nexacro.PaddingObject("0px 9px")
							}
						}
					},
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #D5D5D5"),
								"padding" : nexacro.PaddingObject("1px 9px 9px 9px")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"invalid" : 
							{
								"border" : nexacro.BorderObject("1px solid #b00020")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"focused_valid" : 
							{
								"border" : nexacro.BorderObject("1px solid #2E7D32")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #D5D5D5"),
								"padding" : nexacro.PaddingObject("0px 9px")
							},
							"mouseover_valid" : 
							{
								"border" : nexacro.BorderObject("1px solid #2E7D32")
							}
						}
					},
					"SpinField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"invalid" : 
							{
								"border" : nexacro.BorderObject("1px solid #b00020")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"focused_valid" : 
							{
								"border" : nexacro.BorderObject("1px solid #2E7D32")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #D5D5D5"),
								"padding" : nexacro.PaddingObject("0px 9px")
							},
							"mouseover_valid" : 
							{
								"border" : nexacro.BorderObject("1px solid #2E7D32")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"invalid" : 
							{
								"border" : nexacro.BorderObject("1px solid #b00020")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#999999")
							},
							"focused_valid" : 
							{
								"border" : nexacro.BorderObject("1px solid #2E7D32")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #D5D5D5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover_valid" : 
							{
								"border" : nexacro.BorderObject("1px solid #2E7D32")
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
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_D.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px"),
								"color" : nexacro.ColorObject("#555555"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"selected" : 
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_S.png')")
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
								"color" : nexacro.ColorObject("#cdcdcd")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("5px 0px 0px 0px")
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
												"border" : nexacro.BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae"),
												"color" : nexacro.ColorObject("#333333")
											}
										}
									},
									"PopupDateRangePicker" : 
									{
										"self" : 
										{
											"disabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae"),
												"color" : nexacro.ColorObject("#333333")
											}
										}
									},
									"DateRangePickerControl" : 
									{
										"self" : 
										{
											"disabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px solid #125dae"),
												"color" : nexacro.ColorObject("#333333")
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
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popupexpand2.png')")
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
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popupexpand2.png')")
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Popupexpand2.png')")
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
										"icon" : nexacro.UrlObject("url('theme://images/img_WF_Treeexpand.png')")
									},
									"enabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/img_WF_Treeitem.png')")
									},
									"collapse" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/img_WF_Treecollapse.png')")
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
										"color" : nexacro.ColorObject("#999999")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#666666"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"border" : nexacro.BorderObject("1px solid #d6d4d5")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Max_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Max_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Max.png')")
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
								"border" : nexacro.BorderObject("1px solid #cfcfcf,0px none,0px none,0px none")
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
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_D.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px"),
								"color" : nexacro.ColorObject("#555555"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"selected" : 
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box_S.png')")
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
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"focused" : 
							{
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("10px 8px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"focused" : 
							{
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("10px 8px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Close_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Close_D.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Close.png')")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"focused" : 
							{
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("10px 8px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
						"border" : nexacro.BorderObject("1px solid #b7b1b2")
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
								"border" : nexacro.BorderObject("1px solid #c8c1c2,0px none,0px none,0px none")
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
										"color" : nexacro.ColorObject("#269bee")
									},
									"mouseover" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled_selected" : 
									{
									},
									"trailingday" : 
									{
										"color" : nexacro.ColorObject("#989898")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"sunday" : 
									{
										"color" : nexacro.ColorObject("#ff4c5e")
									},
									"mouseover_trailingday" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"today" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" : 
									{
										"color" : nexacro.ColorObject("#cdcdcd")
									},
									"mouseover_saturday" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"mouseover_sunday" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
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
											"DateRangePickerControl" : 
											{
												"self" : 
												{
													"focused" : 
													{
														"color" : nexacro.ColorObject("#333333")
													},
													"enabled" : 
													{
														"color" : nexacro.ColorObject("#333333")
													},
													"selected" : 
													{
														"color" : nexacro.ColorObject("#ffffff")
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
			"MultiComboListControl" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"ChildFrame" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #b7b1b2")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"label" : 
			{
				"parent" : 
				{
					"SelectField" : 
					{
						"self" : 
						{
							"floating" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"focused_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"floating" : 
							{
								"padding" : nexacro.PaddingObject("2px")
							},
							"mouseover_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"focused_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"focused_floatingvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"color" : nexacro.ColorObject("#2E7D32"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"floating" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"floatingvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover_floatingvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"color" : nexacro.ColorObject("#2E7D32"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"focused_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"floatinginvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"color" : nexacro.ColorObject("#b00020"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"SpinField" : 
					{
						"self" : 
						{
							"focused_floatingvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"color" : nexacro.ColorObject("#2E7D32"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"floating" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"floatingvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover_floatingvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"color" : nexacro.ColorObject("#2E7D32"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"focused_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"floatinginvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"color" : nexacro.ColorObject("#b00020"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"focused_floatingvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"color" : nexacro.ColorObject("#2E7D32"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"floating" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"floatingvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover_floatingvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"color" : nexacro.ColorObject("#2E7D32"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"focused_floating" : 
							{
								"color" : nexacro.ColorObject("#5a86cd")
							},
							"floatinginvalid" : 
							{
								"padding" : nexacro.PaddingObject("2px"),
								"color" : nexacro.ColorObject("#b00020"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Stepitem_S.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Stepitem_S.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Stepitem.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Stepitem_S.png')")
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
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"TextAreaControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
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
								"padding" : nexacro.PaddingObject("5px 15px 0px 0px")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("5px 15px 0px 0px")
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
										"color" : nexacro.ColorObject("#ff7986")
									},
									"saturday" : 
									{
										"color" : nexacro.ColorObject("#48afff")
									},
									"disabled" : 
									{
										"color" : nexacro.ColorObject("#c7d4e2")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#ffffff")
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
														"color" : nexacro.ColorObject("#333333")
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
														"color" : nexacro.ColorObject("#333333")
													}
												}
											},
											"DateRangePickerControl" : 
											{
												"self" : 
												{
													"disabled" : 
													{
													},
													"enabled" : 
													{
														"color" : nexacro.ColorObject("#333333")
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
												"color" : nexacro.ColorObject("#ffffff")
											},
											"disabled" : 
											{
												"color" : nexacro.ColorObject("#2665af")
											},
											"enabled" : 
											{
												"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
												"color" : nexacro.ColorObject("#c3e0ff")
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
										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
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
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown_O.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown_D.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown_P.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Spindown.png')")
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
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspindown_O.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspindown_D.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspindown_O.png')")
											},
											"enabled" : 
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspindown.png')")
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
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspindown_O.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspindown_D.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspindown_O.png')")
											},
											"enabled" : 
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calspindown.png')")
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
										"padding" : nexacro.PaddingObject("20px 0px 20px 0px")
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
								"color" : nexacro.ColorObject("#c7d4e2")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 30px 0px 30px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\"")
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
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/btn_expand.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext_O.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev_O.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Grdexpand.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_O.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_O.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand2.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra_S.png")] = { width:8, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_D.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_O.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_D.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_O.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treecollapse.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treeexpand.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_D.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_DS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_F.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_O.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_P.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/daterange.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/dropdown.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/dropdown_invalid.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/dropdown_valid.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Grdimg.png")] = { width:12, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar_D.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuitem2.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menu_O.png")] = { width:19, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck2.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treecollapse.png")] = { width:14, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeexpand.png")] = { width:14, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeitem.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar.png")] = { width:5, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar_D.png")] = { width:5, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/invalid.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PopItemImg.png")] = { width:8, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_D.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_DS.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_O.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_S.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/timerange.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon.ico")] = { width:256, height:256 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/valid.png")] = { width:24, height:24 };
	};
}
)();
