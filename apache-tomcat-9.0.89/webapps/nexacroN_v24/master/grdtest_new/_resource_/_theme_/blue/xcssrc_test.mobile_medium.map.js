(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "cell" :
            			{
            				"class" :
            				[
            					{
            						"cell_fix" :
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
            															"border" : nexacro.BorderObject("1px solid #eeeeee"),
            															"padding" : nexacro.PaddingObject("2px 5px")
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
            				],
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
            												"border" : nexacro.BorderObject("1px solid #eeeeee"),
            												"padding" : nexacro.PaddingObject("2px 5px")
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
            "includeStatusMap" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
