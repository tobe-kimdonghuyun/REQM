(function()
{
	const fn = function(nexacro, system, trace, environment, application)
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
						"border" : BorderObject("1px solid #c2c2c2")
					},
					"selected" : 
					{
					}
				},
				"class" : [
				{
					"MDI_btn_preview" : 
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
						"border" : BorderObject("1px solid #c2c2c2")
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
			}

		},
		{
			"includeStatusMap" : true,
			"applyMarkupValidation" : true
		}
		);

		environment._updateImageCacheMaps (
		
		);
		
		environment._setCSSPredefineGroupAutoSelectInfo (
		
		);
	};
	if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();
