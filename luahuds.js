luaFunctions = {
	functionType: "huds",
	functions: [
		{
			rettype: "subtitle",
			description: "Basic Functionality",
			exDescription: "The following functions are used to provide basic functionality to HUDs, like changing the display's position and drawing things."
		},
		{
			rettype: null,
			name: "setposition",
			args: [
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				}
			],
			description: "Sets the top-left corner of the display to position <i>x</i> and <i>y</i>. Use this to define the placement of the display on the screen. All elements added will be situated relatively to this position.",
			ex: "setposition(300, 500)\ndrawtext('My HP: ' ..$hp, 5, 5)",
			exDescription: "Will draw a text showing your current health at position x: 305, y: 505."
		},
		{
			rettype: "table",
			name: "getposition",
			args: [

			],
			description: "Returns a table with the <i>x</i> and <i>y</i> coordinates of the display.",
			ex: "local pos = getposition()\ndrawtext('x: ' ..pos.x.. ', y:' ..pos.y, 0, 0)",
			exDescription: "Will draw a texting showing the current position x, y of your HUD script."
		},
		{
			rettype: null,
			name: "setbordercolor",
			args: [
				{
					type: "number",
					name: "color"
				}
			],
			description: "Will set the ARGB color for the border to be drawn around shapes. If you don't want a border for shapes pass -1 as the color. This function also sets the border color for texts, if a border width has been specified in the <a href=\"#setfontstyle\">setfontstyle</a> function.",
			ex: "setbordercolor(0xFFFFFF)\ndrawshape('rect', 0, 0, 40, 40)",
			exDescription: "Will draw a rectangle with a white border."
		},
		{
			rettype: null,
			name: "setcompositionmode",
			args: [
				{
					type: "number",
					name: "mode"
				}
			],
			description: "Sets the composition mode for blending objects/text. The default composition mode is 3 (source). You can read more about composition modes <a href=\"http://qt-project.org/doc/qt-5.1/qtgui/qpainter.html#CompositionMode-enum\">here</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "addgradcolors",
			args: [
				{
					type: "number",
					name: "pos1"
				},
				{
					type: "number",
					name: "color1"
				},
				{
					type: "number",
					name: "pos2"
				},
				{
					type: "number",
					name: "color2"
				},
				{
					type: "",
					name: "..."
				}
			],
			description: "Adds any amount of ARGB colors to a gradient, each at position ranging from 0.0 to 1.0.",
			ex: "addgradcolors(0, 0x666666, 1.0, 0xCCCCCC)\nsetfillstyle('gradient', 'linear', 0, 0, 0, 0, 40)\ndrawshape('rect', 0, 0, 60, 40)",
			exDescription: "Draws a 60x40 rectangle  using gradients. The colors will go from 'dark grey' to 'light grey'."
		},
		{
			rettype: null,
			name: "setfillstyle",
			args: [
				{
					type: null,
					name: "'color'"
				},
				{
					type: "number",
					name: "color"
				}
			],
			description: "Fills the drawn shapes with color <i>color</i>.",
			ex: "setfillstyle('color', 0xCCCCCC)\ndrawshape('circle', 0, 0, 40, 40)",
			exDescription: "Draws a circle with diameter 40px. It will be filled with a 'light grey' color."
		},
		{
			rettype: null,
			name: "setfillstyle",
			args: [
				{
					type: null,
					name: "'image'"
				},
				{
					type: "string",
					name: "imagename"
				}
			],
			alternative: true,
			description: "Fills the drawn shapes with image <i>imagename</i> (ex: image.png) located in the /images/ folder.",
			ex: "setfillstyle('image', 'mypicture.png')\ndrawshape('rect', 0, 0, 60, 60)",
			exDescription: "Will draw a 60x60 rectangle filled with the image 'mypicture.png'."
		},
		{
			rettype: null,
			name: "setfillstyle",
			args: [
				{
					type: null,
					name: "'map'"
				},
				{
					type: "number",
					name: "startx"
				},
				{
					type: "number",
					name: "starty"
				},
				{
					type: "number",
					name: "z"
				},
				{
					type: "number",
					name: "transparency"
				},
				{
					type: "number",
					name: "zoom"
				}
			],
			alternative: true,
			description: "Fills the drawn shapes with minimap data starting at <i>startx</i>, <i>starty</i> and transparency level <i>transparency</i> (255 is fully transparent). The <i>zoom</i> parameter may be specified to draw the minimap closer or further, a <i>zoom</i> value of 1.0 will make it draw 1 SQM/pixel, value of 0.5 will make it draw 2 SQMs/pixel, and so on.",
			ex: "setfillstyle('map', $posx-50, $posy-50, $posz, 123, 1)\ndrawrect(0, 0, 100, 100)",
			exDescription: "Will draw a 100x100 semi-transparent rectangle filled with the minimap data from your current position offset'ed by 50 SQMs to the left and 50 SQMs to the top."
		},
		{
			rettype: null,
			name: "setfillstyle",
			args: [
				{
					type: null,
					name: "'gradient'"
				},
				{
					type: null,
					name: "'linear'"
				},
				{
					type: "number",
					name: "spreadtype"
				},
				{
					type: "number",
					name: "startx"
				},
				{
					type: "number",
					name: "starty"
				},
				{
					type: "number",
					name: "finalx"
				},
				{
					type: "number",
					name: "finaly"
				}
			],
			alternative: true,
			description: "Fills the drawn shapes with a linear gradient. <i>spreadtype</i> can be 0 (PadSpread), 1 (ReflectSpread) or 2 (RepeatSpread).",
			ex: "addgradcolors(0.0, 0xE691CD, 0.33, 0xE566B1, 0.66, 0xE5004f, 1.0, 0xEE0000)\nsetfillstyle('gradient', 'linear', 1, 0, 0, 50, 50)\ndrawshape('rect', 0, 0, 100, 100)",
			exDescription: "Draws a 100x100 rectangle using gradients drawn diagonally, the colors will go from a 'light pink' to 'red'."
		},
		{
			rettype: null,
			name: "setfillstyle",
			args: [
				{
					type: null,
					name: "'gradient'"
				},
				{
					type: null,
					name: "'radial'"
				},
				{
					type: "number",
					name: "spreadtype"
				},
				{
					type: "number",
					name: "centerx"
				},
				{
					type: "number",
					name: "centery"
				},
				{
					type: "number",
					name: "focalx"
				},
				{
					type: "number",
					name: "focaly"
				},
				{
					type: "number",
					name: "radius"
				}
			],
			alternative: true,
			description: "Fills the drawn shapes with a radial gradient.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "setfillstyle",
			args: [
				{
					type: null,
					name: "'gradient'"
				},
				{
					type: null,
					name: "'conical'"
				},
				{
					type: "number",
					name: "spreadtype"
				},
				{
					type: "number",
					name: "centerx"
				},
				{
					type: "number",
					name: "centery"
				},
				{
					type: "number",
					name: "angle"
				}
			],
			alternative: true,
			description: "Fills the drawn shapes with a conical gradient.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "drawrect",
			args: [
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				},
				{
					type: "number",
					name: "width"
				},
				{
					type: "number",
					name: "height"
				}
			],
			description: "Draws a rectangle starting at position <i>x</i>, <i>y</i>, with width <i>width</i> and height </i>height</i>. The rectangle will grow to the bottom and to the right.",
			ex: "drawrect(25, 25, 60, 40)",
			exDescription: "Draws a 60x40 rectangle, starting at position x: 25, y: 25."
		},
		{
			rettype: "number",
			name: "drawroundrect",
			args: [
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				},
				{
					type: "number",
					name: "width"
				},
				{
					type: "number",
					name: "height"
				},
				{
					type: "number",
					name: "xradius"
				},
				{
					type: "number",
					name: "yradius"
				}
			],
			description: "Draws a rectangle with rounded corners. <i>xradius</i> and <i>yradius</i> specify the radius of the ellipsis defining the corners of the rounded rectangle.",
			ex: "drawroundrect(25, 25, 50, 50, 4, 4",
			exDescription: "Draws a 50x50 rectangle, starting at position x: 25, y: 25. The corners will have a radius of 4 pixels horizontally and 4 pixels vertically."
		},
		{
			rettype: "number",
			name: "drawcircle",
			args: [
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				},
				{
					type: "number",
					name: "width"
				},
				{
					type: "number",
					name: "height"
				}
			],
			description: "Draws an ellipsis with horizontal diameter <i>width</i> and vertical diameter <i>height</i>.",
			ex: "drawcircle(0, 0, 30, 50)",
			exDescription: "Draws an ellipsis with diameter 30x50."
		},
		{
			rettype: "number",
			name: "drawline",
			args: [
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				},
				{
					type: "number",
					name: "width"
				},
				{
					type: "number",
					name: "height"
				}
			],
			description: "Draws a line with width <i>width</i> and height <i>height</i> starting at position <i>x</i> and <i>y</i>.",
			ex: "drawline(0, 0, 50, 0)",
			exDescription: "Will draw an horizontal line of width 50."
		},
		{
			rettype: "number",
			name: "drawpie",
			args: [
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				},
				{
					type: "number",
					name: "width"
				},
				{
					type: "number",
					name: "height"
				},
				{
					type: "number",
					name: "startangle"
				},
				{
					type: "number",
					name: "spanangle"
				}
			],
			description: "Draws a pie that starts at <i>startangle</i> and goes for <i>spanangle</i> degrees.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "drawchord",
			args: [
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				},
				{
					type: "number",
					name: "width"
				},
				{
					type: "number",
					name: "height"
				},
				{
					type: "number",
					name: "startangle"
				},
				{
					type: "number",
					name: "spanangle"
				}
			],
			description: "Draws a chord that starts at <i>startangle</i> and goes for <i>spanangle</i> degrees.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "drawitem",
			args: [
				{
					type: "number",
					name: "itemid"
				},
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				},
				{
					type: "number",
					name: "zoom"
				},
				{
					type: "optional number",
					name: "amount"
				},
				{
					type: "optional number",
					name: "phase"
				}
			],
			description: "Draws an item from the game with id <i>id</i> at position x: <i>x</i>, y: <i>y</i>. The value <i>zoom</i> is used to resize the outfit, if you pass it as 100, it will draw without any resizing, 50 will draw it with 50% the size, and so on. You can also specify an <i>amount</i> to draw, for stackable items. If you set <i>phase</i> to -1 it will animate the image.",
			ex: "drawitem(3280, 30, 30, 100, 100, -1)",
			exDescription: "Draws an animated fire sword."
		},
		{
			rettype: "number",
			name: "drawoutfit",
			args: [
				{
					type: "number",
					name: "outfitid"
				},
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				},
				{
					type: "number",
					name: "zoom"
				},
				{
					type: "optional number",
					name: "dir"
				},
				{
					type: "optional number",
					name: "phase"
				},
				{
					type: "optional number",
					name: "headcolor"
				},
				{
					type: "optional number",
					name: "chestcolor"
				},
				{
					type: "optional number",
					name: "legscolor"
				},
				{
					type: "optional number",
					name: "feetcolor"
				},
				{
					type: "optional number",
					name: "addon"
				},
				{
					type: "optional number",
					name: "mountid"
				}
			],
			description: "Draws an outfit from the game with id <i>id</i> at position x: <i>x</i>, y: <i>y</i>. The value <i>zoom</i> is used to resize the outfit, if you pass it as 100, it will draw without any resizing, 50 will draw it with 50% the size, and so on. <i>dir</i> is the direction to where you want it to look to, ranges from 0 to 3. You may specify a phase <i>phase</i>, if you pass -1 to it, it will animate the drawing making it walk. You can also specify the <i>headcolor</i>, <i>chestcolor</i>, <i>legscolor</i>, <i>feetcolor</i> and <i>addon</i>. You can also specify a mount with id <i>mountid</i>",
			ex: "drawoutfit(304, 0, 0, 100, 2, -1)",
			exDescription: "Draws a worker golem looking to the south and makes a walking animation to it."
		},
		{
			rettype: null,
			name: "setfontstyle",
			args: [
				{
					type: "string",
					name: "fontname"
				},
				{
					type: "number",
					name: "size"
				},
				{
					type: "number",
					name: "fontweight"
				},
				{
					type: "number",
					name: "color"
				},
				{
					type: "optional number",
					name: "bordersize"
				},
				{
					type: "optional number",
					name: "bordercolor"
				},
				{
					type: "optional number",
					name: "glowradius"
				},
				{
					type: "optional number",
					name: "glowcolor"
				}
			],
			description: "Sets properties to the texts that will be drawn by the script. <i>fontname</i> is the name of the font. <i>fontsize</i> is the size of the font. <i>color</i> is the color of the font. <i>fontweight</i> is use to determine if you want to draw it as <i>bold</i>. <i>semi-bold</i> or <i>normal</i>. <i>bordersize</i> is the width of the border that will be drawn around the texts. <i>bordercolor</i> is the color of that border. <i>glowradius</i> is used to draw texts with a glowing effect. <i>glowcolor</i> is the color used on the effect.",
			ex: "setfontstyle('MS Serif', 10, 100, 0xFFFFFF)\ndrawtext('My MP: ' ..$mp, 0, 0)",
			exDescription: "Will draw a text displaying your current mana using the font 'MS Serif', with size 10, color white and bold text."
		},
		{
			rettype: null,
			name: "setfontname",
			args: [
				{
					type: "string",
					name: "fontname"
				}
			],
			description: "Sets the font name to <i>fontname</i>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "setfontcolor",
			args: [
				{
					type: "number",
					name: "color"
				}
			],
			description: "Sets the font coor to <i>color</i>",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "setfontsize",
			args: [
				{
					type: "number",
					name: "size"
				}
			],
			description: "Sets the font size to <i>size</i>",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "setfontborder",
			args: [
				{
					type: "number",
					name: "bordersize"
				},
				{
					type: "number",
					name: "bordercolor"
				}
			],
			description: "Sets the font border to <i>bordersize</i> and <i>bordercolor</i>",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "setfontweight",
			args: [
				{
					type: "number",
					name: "weight"
				}
			],
			description: "Sets the font weight to <i>weight</i>. A weight of 50 stands for normal thickness, 75 is bold, and maximum value is 99.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "drawtext",
			args: [
				{
					type: "string",
					name: "text"
				},
				{
					type: "number",
					name: "x"
				},
				{
					type: "number",
					name: "y"
				}
			],
			description: "Draws a text with the previously specified font style to the current display, at position <i>x</i> and <i>y</i>. This position is relative to the display's position (check <a href=\"#setposition\">setposition</a> for more information).",
			ex: "setposition(30, 30)\ndrawtext('x: '..$posx.. ', y: ' ..$posy.. ', z: ' ..$posz, 5, 5)",
			exDescription: "Draws a text displaying your character's current position at position 35x35 of your screen."
		},
		{
			rettype: "subtitle",
			description: "Positioning Functions",
			exDescription: "The following functions are used to position your HUDs relatively to some in-game element."
		},
		{
			rettype: "number, number, number, number",
			name: "measurestring",
			args: [
				{
					type: "string",
					name: "text"
				}
			],
			description: "Calculates and returns the size that a text element will take using the currently set font, font size and font width. This returns 4 values: <i>width</i>, <i>height</i> and <i>left</i>, <i>right</i>, because sometimes fonts that are very decorated draw beyond the designated rectangle and at negative values.",
			ex: "local textToBeDrawn = 'Testing measure string'\nlocal w, h = measurestring(textToBeDrawn)\ndrawtext(textToBeDrawn, 200 - w, 20 - h*0.5)",
			exDescription: "Will draw a text aligning it to the left relatively to the position x: 200, and centering it vertically in the middle of an imaginary rectangle of height 20."
		},
		{
			rettype: "table",
			name: "getbararea",
			args: [
				{
					type: "creature",
					name: "creaturepointer"
				}
			],
			description: "Returns a table with the coordinates of the rectangular area (<i>.left</i>, <i>.right</i>, <i>.top</i>, <i>.bottom</i>, <i>.centerx</i> and <i>.centery</i>) right below the health bar of the creature <i>creaturepointer</i> is drawn. It's position is relative to <a href=\"lua-variables.html#$worldwin\">$worldwin</a>.left and <a href=\"lua-variables.html#$worldwin\">$worldwin</a>.top.",
			ex: "auto(200)\nsetposition($worldwin.left, $worldwin.top)\nsetbordercolor(-1)\n\nlocal r = getbararea($self)\nif ( r ) then\n\tlocal mppc = $mppc/100\n\tsetfillstyle('color', 0)\n\tdrawrect(r.left, r.top, 26, 3)\n\n\tsetfillstyle('color', 0x02266FF)\n\tdrawrect(r.left + 1, r.top + 1, 24*mppc, 1)\nend",
			exDescription: "Draws a mana bar right below your health bar."
		},
		{
			rettype: "table",
			name: "getnamearea",
			args: [
				{
					type: "creature",
					name: "creaturepointer"
				}
			],
			description: "Returns a table with the coordinates of the rectangular area (<i>.left</i>, <i>.right</i>, <i>.top</i>, <i>.bottom</i>, <i>.centerx</i> and <i>.centery</i>) where the name of the creature <i>creaturepointer</i> is drawn. It's position is relative to <a href=\"lua-variables.html#$worldwin\">$worldwin</a>.left and <a href=\"lua-variables.html#$worldwin\">$worldwin</a>.top.",
			ex: "init start\n\tuseworldhud(false)\ninit end\n\nforeach creature c 'xs' do\n\tlocal r = getnamearea(c)\n\tif ( r ) then\n\t\tdrawtext(c.name, r.left, r.top)\n\tend\nend",
			exDescription: "Will draw the player name right above the name drawn by Tibia. Try it yourself to understand it better."
		},
		{
			rettype: "table",
			name: "getobjectarea",
			args: [
				{
					type: "creature",
					name: "creaturepointer"
				}
			],
			description: "Returns a table with the coordinates of the rectangular area (<i>.left</i>, <i>.right</i>, <i>.top</i>, <i>.bottom</i>, <i>.centerx</i> and <i>.centery</i>) for creature <i>creaturepointer</i>. It's position is relative to <a href=\"lua-variables.html#$worldwin\">$worldwin</a>.left and <a href=\"lua-variables.html#$worldwin\">$worldwin</a>.top.",
			ex: "setposition($worldwin.left, $worldwin.top)\nlocal r = getobjectarea($self)\nsetposition(r.left, r.top)\ndrawtext('Hey hey', 0, 0)",
			exDescription: "Will draw the text: 'Hey hey' at the top left edge of your character."
		},
		{
			rettype: "table",
			name: "getobjectarea",
			args: [
				{
					type: "number",
					name: "posx"
				},
				{
					type: "number",
					name: "posy"
				},
				{
					type: "number",
					name: "posz"
				}
			],
			alternative: true,
			description: "Returns the rectangular area of the tile at the position x:<i>posx</i>, y:<i>posy</i>, z:<i>posz</i>. It's position is relative to <a href=\"lua-variables.html#$worldwin\">$worldwin</a>.left and <a href=\"lua-variables.html#$worldwin\">$worldwin</a>.top.",
			ex: "setposition($worldwin.left, $worldwin.top)\nlocal r = getobjectarea($wptx, $wpty, $wptz)\ndrawtext('W', r.centerx, r.centery)",
			exDescription: "Will draw the letter 'W' at the center of the current waypoint."
		},
		{
			rettype: "subtitle",
			description: "List As Functions",
			exDescription: "The following functions are used to display the 'list as' texts of hotkey scripts, persistent scripts, etc."
		},
		{
			rettype: "boolean",
			name: "isscript",
			args: [
				{
					type: "string",
					name: "scripttype"
				},
				{
					type: "number",
					name: "index"
				}
			],
			description: "Returns <i>true</i> if the script of type <i>scripttype</i> and index <i>index</i> is currently running, <i>false</i> otherwise. Possible value for <i>scripttype</i> are: 'hotkey', 'persistent', 'cavebot' and 'display'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: "scriptlistname",
			args: [
				{
					type: "string",
					name: "scripttype"
				},
				{
					type: "number",
					name: "index"
				}
			],
			description: "Returns the list name of the script with type <i>scripttype</i> and index <i>index</i>. The list name is the name of the script, or the custom string passed to the <a href=\"#listas\">listas</a> function.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "scriptlistcolor",
			args: [
				{
					type: "string",
					name: "scripttype"
				},
				{
					type: "number",
					name: "index"
				}
			],
			description: "Returns the list color of the script with type <i>scripttype</i> and index <i>index</i>. The list color is the default color of scripts, or the custom color passed to the <a href=\"#listcolor\">listcolor</a> function.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "Settings Functions",
			exDescription: "The following functions are used to change the settings of your HUDs. These settings are used to improve the speed of the script, or to change some configuration based on your operational system."
		},
		{
			rettype: null,
			name: "setopengl",
			args: [
				{
					type: "boolean",
					name: "enabled"
				}
			],
			description: "Puts the HUD script into OpenGL rendering mode if <i>enabled</i> is <i>true</i>, or normal rendering mode otherwise. OpenGL should only be used for displays that refresh very quickly and/or are big in size, because it uses more memory and creating/resizing the display is slower. However, refreshing the display in OpenGL is much faster.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "setantialiasing",
			args: [
				{
					type: "boolean",
					name: "enabled"
				}
			],
			description: "Choose whether to enable or disable the anti-aliased painting of rounded shapes to make them appear smoother. Keep in mind that this slows down rendering a little.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "setbkgcolorxp",
			args: [
				{
					type: "number",
					name: "color"
				}
			],
			description: "Sets the background color of the element to <i>color</i>. This function should only be used if you're using Windows XP.",
			ex: "init start\n\tif $windowsxp then\n\t\tsetbkgcolor(0xFFFFFF)\netend\ninit end\nauto(200)\nsetfontstyle('MS Serif', 9, 100, 0x000000)\ndrawtext('testing...', 0, 0)",
			exDescription: "Will set the background color to white if you are using Windows XP, and will draw a testing text with color black."
		},
		{
			rettype: null,
			name: "setfixedsize",
			args: [
				{
					type: "number",
					name: "width"
				},
				{
					type: "number",
					name: "height"
				}
			],
			description: "Sets a fixed size for the display to size <i>width</i> and <i>height</i>. The reason to set a fixed size is to speed up rendering for displays that doesn't get resized a lot. Usually, it is faster to draw to a larger display than to have it resized frequently. If you can predict the size that your display will take, it is better to set a fixed size for it.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: "killhudwindow",
			args: [
				{
					type: "number",
					name: "hudid"
				}
			],
			description: "Kills a previously spawned hud window of id <i>hudid</i> and returns <i>true</i> if successful.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: "setcurrenthud",
			args: [
				{
					type: "number",
					name: "hudid"
				}
			],
			description: "Sets the current hud to id <i>hudid</i> and returns <i>true</i> if the hud switch was successful. It is important that you only draw to this hud window if this function has returned true because newly created hud windows may take some time to become available for drawing onto. If <i>hudid</i> is 0, the main hud is set as the current hud and the function always returns true.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "spawnhudwindow",
			args: [

			],
			description: "Spawns a new hud window that belongs to the current hud display script and returns it's <i>id</i>. The hud can be drawn to by calling <a href=\"#setcurrenthud\">setcurrenthud</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "useworldhud",
			args: [

			],
			description: "Will make the current hud script draw everything in the 'world hud' window. The 'world hud' window is refreshed in sync with the game's drawing. So if you are making a script that draws something in the world window you should use this, for example: magic wall timers, show great fireball areas, player information scripts, etc.",
			ex: "init start\n\tuseworldhud()\ninit end\n\nforeach creature c 'ps' do\n\tlocal r = getnamearea(c)\n\tif ( r ) then\n\t\tdrawtext(c.name, r.left, r.top)\n\tend\nend",
			exDescription: "Will draw the player name right above the player name drawn by Tibia."
		},
		{
			rettype: "subtitle",
			description: "Input Functions",
			exDescription: "The following functions are used to provide interaction between HUDs and the user."
		},
		{
			rettype: null,
			name: "filterinput",
			args: [
				{
					type: "boolean",
					name: "keys"
				},
				{
					type: "boolean",
					name: "mouseclicks"
				},
				{
					type: "boolean",
					name: "mousemoves"
				},
				{
					type: "boolean",
					name: "stealfocus"
				}
			],
			description: "Enables or disables the filtering of input events through the <i>inputevents(table e)</i> function which must be defined in the init block of the current script. If <i>keys</i> is set to <i>true</i>, key presses on a HUD will call the input function with <i>e.type</i> IEVENT_KEYDOWN or IEVENT_KEYUP and <i>e.value1</i> set to the virtual key code of the key. If <i>mouseclicks</i> or <i>mousemoves</i> is set to <i>true</i>, mouse clicks or moves on a HUD will call the input function with <i>e.type</i> IEVENT_LMOUSEDOWN, IEVENT_LMOUSEUP, IEVENT_RMOUSEDOWN, IEVENT_RMOUSEUP, IEVENT_MMOUSEDOWN, IEVENT_MMOUSEUP, IEVENT_MOUSEMOVE, IEVENT_MOUSEENTER or IEVENT_MOUSELEAVE and <i>e.value1</i> & <i>e.value2</i> will contain the local <i>x</i>, <i>y</i> positions of the event within the HUD, except for the last 2. For mouse clicks, <i>e.elementid</i> will contain the unique element id hit by the click which is returned by the <a href=\"#drawshape\">drawshape</a> function for each shape. If <i>e.type</i> is IEVENT_MOUSEWHEEL, <i>e.value1</i> contains packed coordinates of the event and <i>e.value2</i> contains a negative or positive delta value of the distance the wheel has traveled in either direction. If <i>stealfocus</i> is <i>true</i>, the HUD window will become focused after being clicked on and the client will lose keyboard focus. Focus is necessary to be able to capture keys.",
			ex: "init start\n\tlocal rectid = -1\n\tlocal ellipsisid = -1\n\n\tfunction inputevents(e)\n\t\tif e.type == IEVENT_LMOUSEUP then\n\t\t\tif e.elementid == rectid then\n\t\t\t\tprint('Clicked on rect')\n\t\t\telseif e.elementid == ellipsisid then\n\t\t\t\tprint('Clicked on ellipsis')\n\t\t\tend\n\t\tend\n\tend\ninit end\nauto(200)\nfilterinput(false, true, false, false)\nsetposition(200, 200)\n\nrectid = drawshape('rect', 0, 0, 50, 50)\nellipsisid = drawshape('circle', 50, 110, 50, 50)",
			exDescription: "Will a rectangle and an ellipsis on your screen, and set input events for them. If you click in any of them, a message will be printed on the console saying which one was clicked."
		},
		{
			rettype: null,
			name: "requestint",
			args: [
				{
					type: "number",
					name: "requestid"
				},
				{
					type: "string",
					name: "question"
				},
				{
					type: "number",
					name: "defaultvalue"
				}
			],
			description: "Requests an integer number from the user. This can only be called from the <i>inputevents(table e)</i> function. The <i>question</i> parameter is the question to ask the user and the <i>default</i> parameter is the default value to be shown. A request id can be specified in the <i>requestid</i> parameter. This request id will be passed to the <i>inputevents</i> function as the <i>e.value1</i> parameter to identify later on what was requested. The <i>e.type</i> parameter will be IEVENT_REQUESTINT and <i>e.value2</i> will represent the chosen integer number.",
			ex: "init start\n\tlocal reqid = 5\n\tlocal rectid = -1\n\n\tfunction inputevents(e)\n\t\tif e.type == IEVENT_LMOUSEUP then\n\t\t\tif e.elementid == rectid then\n\t\t\t\trequestint(reqid, 'Please, enter a value', 30)\n\t\t\tend\n\t\telseif e.type == IEVENT_REQUESTINT then\n\t\t\tprint('The user\\'s answer was: ' .. e.value2)\n\t\tend\n\tend\ninit end\nauto(200)\nfilterinput(false, true, false, false)\nsetposition(200, 200)\n\nrectid = drawshape('rect', 0, 0, 50, 50)",
			exDescription: "Will open an integer request when you click on the rectangle. When the user choose the value, it will print the value on the console."
		},
		{
			rettype: null,
			name: "requestfloat",
			args: [
				{
					type: "number",
					name: "requestid"
				},
				{
					type: "string",
					name: "question"
				},
				{
					type: "number",
					name: "defaultvalue"
				}
			],
			description: "Requests a decimal point number from the user. This can only be called from the <i>inputevents(table e)</i> function. The <i>question</i> parameter is the question to ask the user and the <i>default</i> parameter is the default value to be shown. A request id can be specified in the <i>requestid</i> parameter. This request id will be passed to the <i>inputevents</i> function as the <i>e.value1</i> parameter to identify later on what was requested. The <i>e.type</i> parameter will be IEVENT_REQUESTFLOAT and <i>e.value2</i> will represent the chosen float number.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "requesttext",
			args: [
				{
					type: "number",
					name: "requestid"
				},
				{
					type: "string",
					name: "question"
				},
				{
					type: "string",
					name: "defaultvalue"
				}
			],
			description: "Requests a text from the user. This can only be called from the <i>inputevents(table e)</i> function. The <i>question</i> parameter is the question to ask the user and the <i>default</i> parameter is the default value to be shown. A request id can be specified in the <i>requestid</i> parameter. This request id will be passed to the <i>inputevents</i> function as the <i>e.value1</i> parameter to identify later on what was requested. The <i>e.type</i> parameter will be IEVENT_REQUESTTEXT and <i>e.value2</i> will represent the text string.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "requestlist",
			args: [
				{
					type: "number",
					name: "requestid"
				},
				{
					type: "string",
					name: "question"
				},
				{
					type: "number",
					name: "defaultindex"
				}
			],
			description: "Requests a text string out of a list from the user. This can only be called from the <i>inputevents(table e)</i> function. The <i>question</i> parameter is the question to ask the user and the <i>defaultindex</i> parameter is the default index in the list to be shown. A request id can be specified in the <i>requestid</i> parameter. This request id will be passed to the <i>inputevents</i> function as the <i>e.value1</i> parameter to identify later on what was requested. The <i>e.type</i> parameter will be IEVENT_REQUESTLIST and <i>e.value2</i> will represent the chosen or written text string. List items must be added using the <a href=\"#requestlistitem\">requestlistitem</a> function.",
			ex: "init start\n\tlocal reqID = 5\n\tfunction inputevents(e)\n\t\t...\n\t\t\trequestlist(reqID, 'Please, choose an item from the list', 0)\n\t\t\trequestlistitem('item1')\n\t\t\trequestlistitem('item2')\n\t\t\trequestlistitem('item3')\n\t\t...\n\t\tif e.type == IEVENT_REQUESTLIST then\n\t\t\tprint('The item selected was: ' .. e.value2)\n\t\tend\n\tend\ninit end\n...",
			exDescription: "This example works just like the <a href=\"#requestint\">requestint</a> example, but it requests a value based on a pre-made list. Also notice that some parts of the example was ommited to make the example smaller."
		},
		{
			rettype: null,
			name: "requestlistitem",
			args: [
				{
					type: "string",
					name: "text"
				}
			],
			description: "Adds the text option to a request list. This must be called after calling <a href=\"#requestlist\">requestlist</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "requestmenu",
			args: [
				{
					type: "number",
					name: "requestid"
				}
			],
			description: "Requests a text string out of a popup menu from the user. This can only be called from the <i>inputevents(table e)</i> function. A request id can be specified in the <i>requestid</i> parameter. This request id will be passed to the <i>inputevents</i> function as the <i>e.value1</i> parameter to identify later on what was requested. The <i>e.type</i> parameter will be IEVENT_REQUESTMENU and <i>e.value2</i> will represent the chosen text string. Menu items must be added using the <a href=\"#requestmenuitem\">requestmenuitem</a> function.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "requestmenuitem",
			args: [
				{
					type: "string",
					name: "text"
				}
			],
			description: "Adds the text option to a request popup menu. This must be called after calling <a href=\"#requestmenu\">requestmenu</a>.",
			ex: null,
			exDescription: null
		}
	]
};