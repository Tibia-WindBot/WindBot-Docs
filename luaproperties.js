luaFunctions = {
	functionType: "properties",
	functions: [
		{
			rettype: "subtitle",
			description: "creature",
			exDescription: "A creature holds information about a creature in game, such as its health, name, etc."
		},
		{
			rettype: "string",
			name: ".name",
			description: "Returns your creatures's name.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".id",
			description: "Returns the creature's id. It is unique for each creature.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".hppc",
			description: "Returns the creature's current health percentage.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".posx",
			description: "Returns the creature's current <i>x</i> position.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".posy",
			description: "Returns the creature's current <i>y</i> position.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".posz",
			description: "Returns the creature's current <i>z</i> position.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: ".dir",
			description: "Returns the direction which the creature is currently looking to. Direction can be 'n', 'e', 's' or 'w'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".speed",
			description: "Returns the character's speed.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".iswalking",
			description: "Returns <i>true</i> if the creature is currently moving from on SQM to another, <i>false</i> otherwise.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".outfit",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".headcolor",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".chestcolor",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".legscolor",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".feetcolor",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".addon",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".mount",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".lightintensity",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".lightcolor",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".lastattacked",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".hppc",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".walkblock",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".skull",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".party",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".warbanner",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".updated",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".aggressortype",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".isshootable",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".isreachable",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".dist",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".ignored",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".ismonster",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".isplayer",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".isnpc",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".issummon",
			description: "",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "item",
			exDescription: "A container holds information about an item. Items can be found in your inventory, containers and tiles."
		},
		{
			rettype: "number",
			name: ".id",
			description: "Returns the item's id.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".count",
			description: "Returns the item's count.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".special",
			description: "Returns the item's special value. It's used for items such as liquid pools and liquid containers, to tell what kind of liquid it has inside.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "container",
			exDescription: "A container holds information about a container. That way you can check if a container is open or not, what items it has inside, etc."
		},
		{
			rettype: "string",
			name: ".name",
			description: "Returns the container's name.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".itemid",
			description: "Returns the container's item id.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".itemcount",
			description: "Returns the amount of items inside the container.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".maxcount",
			description: "Returns the container's capacity.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: ".item",
			description: "Returns the structure for the item at index <i>itemindex</i>. The index ranges from 1 to <i>.itemcount</i>.",
			"arg":{
				type: "number",
				name: "itemindex"
			},
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".isopen",
			description: "Returns <i>true</i> if the container is currently open, <i>false</i> otherwise.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".ispage",
			description: "Returns <i>true</i> if the container has paginations enabled, <i>false</i> otherwise.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: ".hashigher",
			description: "Returns <i>true</i> if the container has a higher window, <i>false</i> otherwise.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "tile",
			exDescription: "A tile holds information about a tile on your screen. So you can read each item on a tile."
		},
		{
			rettype: "number",
			name: ".itemcount",
			description: "Returns the amount of items on the tile.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: ".item",
			description: "Returns the item at index <i>itemindex</i>. The index ranges from 1 to <i>.itemcount</i>.",
			"arg":{
				type: "number",
				name: "itemindex"
			},
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "message",
			exDescription: "A message holds information about messages you receive."
		},
		{
			rettype: "string",
			name: ".content",
			description: "Returns the content of the message received.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: ".sender",
			description: "Returns the name of the player who sent the message.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".level",
			description: "Returns the level of the player who sent the message.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".type",
			description: "Returns the type of the message received.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "projectile",
			exDescription: "A projectile holds information about projectiles on the screen. Like when you shoot a missile rune in a creature."
		},
		{
			rettype: "number",
			name: ".type",
			description: "Returns the type of the projectile.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".fromx",
			description: "Returns the position <i>x</i> from there the projectile was shot.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".fromy",
			description: "Returns the position <i>y</i> from there the projectile was shot.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".tox",
			description: "Returns the position <i>x</i> to where the projectile was shot.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".toy",
			description: "Returns the position <i>y</i> to where the projectile was shot.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".timems",
			description: "Returns the time in milliseconds when the projectile was shot.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "effect",
			exDescription: "An effect holds information about effects that shows up on your screen. Like the 'poof' when you miss a hit on a creature."
		},
		{
			rettype: "number",
			name: ".type",
			description: "Returns the type of the effect.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".posx",
			description: "Returns the position <i>x</i> where the effect happened.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".posy",
			description: "Returns the position <i>y</i> where the effect happened.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".timems",
			description: "Returns the time in milliseconds when the effect was shot.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "animatedtext",
			exDescription: "An animatedtext holds information about animated texts that shows up on your screen. Like when you get hit by a creature."
		},
		{
			rettype: "number",
			name: ".type",
			description: "Returns the type of the animated text.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: ".content",
			description: "Returns the content of the animated text.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".posx",
			description: "Returns the position <i>x</i> where the animated text happened.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".posy",
			description: "Returns the position <i>y</i> where the animated text happened.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".timems",
			description: "Returns the time in milliseconds when the animated text was shot.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "rectangle",
			exDescription: "A rectangle is used to hold information about $screenwin, $clientwin and $worldwin."
		},
		{
			rettype: "number",
			name: ".left",
			description: "Returns the coordinates of the left edge of the rectangle.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".top",
			description: "Returns the coordinates of the top edge of the rectangle.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".right",
			description: "Returns the coordinates of the right edge of the rectangle.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".bottom",
			description: "Returns the coordinates of the bottom edge of the rectangle.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".width",
			description: "Returns the width of the rectangle.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".height",
			description: "Returns the height of the rectangle.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".centerx",
			description: "Returns the coordinates of the horizontal center of the rectangle.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".centery",
			description: "Returns the coordinates of the vertical center of the rectangle.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "point",
			exDescription: "Returns a point in the screen. Used for $cursor."
		},
		{
			rettype: "number",
			name: ".x",
			description: "Returns the <i>x</i> coordinates of the point.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: ".y",
			description: "Returns the <i>y</i> coordinates of the point.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "itemdata",
			exDescription: "Holds information about an item from the game."
		},
		{
			rettype: "subtitle",
			description: "supplyitem",
			exDescription: "Holds information about a supply from your currently selected supply list."
		},
		{
			rettype: "subtitle",
			description: "lootingitem",
			exDescription: "Holds information about a looting item from your currently selected loot list."
		},
		{
			rettype: "subtitle",
			description: "vipnode",
			exDescription: "Holds information about a player from your VIP list."
		},
		{
			rettype: "subtitle",
			description: "mouseinfo",
			exDescription: "Holds information about the item in-game that your mouse is currently pointing to."
		},
		{
			rettype: "subtitle",
			description: "deathtimer",
			exDescription: "Holds information about a player who died on your screen."
		},
		{
			rettype: "subtitle",
			description: "playerinfo",
			exDescription: "Holds war information about a player from your relation lists."
		}
	]
};