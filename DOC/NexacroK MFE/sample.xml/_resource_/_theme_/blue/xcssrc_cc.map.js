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
			"Button" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : BorderObject("2px solid yellow")
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
