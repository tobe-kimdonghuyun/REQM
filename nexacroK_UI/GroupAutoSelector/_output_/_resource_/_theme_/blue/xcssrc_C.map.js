(function()
{
	return function(nexacro, system, trace)
	{
		nexacro._setCSSPredefineMaps (
		{
			"root" : {
				"PrimaryColor":"pink",
				"SecondaryColor":"red",
				"ButtonWordWrap":"none",
				"ButtonEdge":"URL('./images/btn_WF_Calendar.png') 15px 15px"
			},
			"Dark" : {
				"PrimaryColor":"green",
				"SecondaryColor":"blue"
			}
		}
		);

		const PaddingObject = nexacro.PaddingObject
		const UrlObject = nexacro.UrlObject
		const EdgeImageObject = nexacro.EdgeImageObject
		const BorderObject = nexacro.BorderObject
		const ColorObject = nexacro.ColorObject
		const FontObject = nexacro.FontObject
		const CSSValueObject = nexacro.CSSValueObject

		const getCSSPredefineValue = nexacro._getCSSPredefineValue;
		const getScreenCSSMapValue = nexacro._getScreenCSSMapValue;

		const PrimaryColor = "PrimaryColor";
		const SecondaryColor = "SecondaryColor";
		const ButtonWordWrap = "ButtonWordWrap";
		const ButtonEdge = "ButtonEdge";

		nexacro._setCSSMaps(
		{
			
		},
		{
			"includeStatusMap" : true,
			"applyMarkupValidation" : true
		}
		);

		nexacro._updateImageCacheMaps (
		
		);
		
		nexacro._setCSSPredefineGroupAutoSelectInfo (
		{
			"Dark":{
				"colorscheme-mode":"dark"
			}
		}
		);
	};
}
)();
