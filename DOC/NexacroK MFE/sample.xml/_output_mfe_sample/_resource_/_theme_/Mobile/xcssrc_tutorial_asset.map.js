(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"Button" : 
			{
				"class" : [
				{
					"btn_search" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #6f397e"),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #6f397e"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("12px \"Malgun Gothci\",\"Arial\",\"Gulim\"")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #aaaaaa"),
								"color" : nexacro.ColorObject("#aaaaaa")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #6f397e"),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #6f397e"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("12px \"Malgun Gothci\",\"Arial\",\"Gulim\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #6f397e"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("12px \"Malgun Gothci\",\"Arial\",\"Gulim\"")
							}
						}
					}
				}
				]
			},
			"Static" : 
			{
				"class" : [
				{
					"sta_label" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"font" : nexacro.FontObject("bold 13px \"Arial\",\"Malgun Gothic\",\"Gulim\"")
							}
						}
					}
				},
				{
					"sta_labelbox" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
							}
						}
					}
				},
				{
					"sta_searchbox" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
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
		
		

	};
}
)();
