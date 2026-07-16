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
								"border" : BorderObject("1px")
							}
						}
					},
					"DatePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : PaddingObject("1px"),
								"color" : ColorObject("antiquewhite")
							}
						}
					}
				}
			},
			"Button" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						get icon() { return getScreenCSSMapValue(UrlObject, undefined, "url('theme://images/btn_WF_Link02.png')", undefined, undefined, undefined) },
						"color" : ColorObject("red")
					},
					"selected" : 
					{
						get color() { return getScreenCSSMapValue(ColorObject, undefined, undefined, "#585858", undefined, undefined) },
						get font() { return getScreenCSSMapValue(FontObject, undefined, undefined, "bold 20px \"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"", undefined, undefined) }
					}
				}
			},
			"MainFrame" : 
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
			"includeStatusMap" : true,
			"applyMarkupValidation" : true
		}
		);

		environment._updateImageCacheMaps (
		
		);
		
		environment._setCSSPredefineGroupAutoSelectInfo (
		
		);
	};
}
)();
