luaFunctions = {
	functionType: "iterator",
	functions: [
		{
			rettype: "subtitle",
			description: "Iterators",
			exDescription: "Foreach iterators allows you to iterate through a list of data, like creatures, messages, effects, projectiles, etc."
		},
		{
			rettype: "",
			name: "creature",
			varName: "p",
			param: "creatureType",
			description: "Iterates through creatures in the client, the values are stored in the variable <i>p</i>. Optionally, you can specify kinds of creatures to consider. Possibilities are: <i>p</i> for players, <i>m</i> for monsters, <i>n</i> for NPCs, <i>u</i> for summons, <i>f</i> for creatures on the same floor as you, <i>s</i> for creatures on your screen, <i>t</i> for shootable creatures, <i>r</i> for reachable creatures, <i>x</i> not you. You can group as many categories as you want. For more information about creatures, visit <a href=\"lua-customtypes.html#creature\">this</a>",
			ex: "local lowestHealth\nforeach creature m 'ms' do\n\tif not lowestHealth or m.hppc < lowestHealth.hppc do\n\t\tlowestHealth = m\n\tend\nend\n\nprint('Monster with lowest health: '.. m.name ..', ID: '.. m.id ..', HPPC: '.. m.hppc)",
			exDescription: "Will iterate through all the monsters ('m') on your screen ('s'). For each monster, it will check if its health is lower than the health of the monster store in the variable lowestHealth. In the end it will print the name of the monster with the lowest health."
		},
		{
			rettype: "",
			name: "newmessage",
			varName: "m",
			param: null,
			description: "Iterates through messages received in game, the values are stored in the variable <i>m</i>. For more information about messages, visit <a href=\"lua-customtypes.html#message\">this</a>",
			ex: "auto(200)\nforeach newmessage m do\n\tif m.sender == 'Bubble' and m.content == 'sio me' then\n\t\tcast('exura sio \"Bubble')\n\tend\nend",
			exDescription: "Will cast 'heal friend' on Bubble if she asks for it."
		},
		{
			rettype: "",
			name: "newprojectile",
			varName: "p",
			param: null,
			description: "Iterates through projectiles shot in game, the values are stored in the variable <i>p</i>. For more information about a projectile, visit <a href=\"lua-customtypes.html#projectile\">this</a>.",
			ex: "auto(200)\nforeach newprojectile p do\n\tif p.type == 32 and p.tox == $posx and p.toy == $posy then\n\t\tplaysound('playerattacking.wav')\n\tend\nend",
			exDescription: "Will play an alert if someone shot a missile of the same type as the 'sudden death rune' at you."
		},
		{
			rettype: "",
			name: "neweffect",
			varName: "e",
			param: null,
			description: "Iterates through effects in game, the values are stored in the variable <i>e</i>. For more information about an effect, visit <a href=\"lua-customtypes.html#effect\">this</a>.",
			ex: "auto(200)\nforeach neweffect e do\n\tif e.type == 13 and e.posx == $attacked.posx and e.posy == $attacked.posy then\n\t\tplaysound('monster.wav')\n\tend\nend",
			exDescription: "Will play an alarm if a 'healing effect' happened at the same position as the creature you are currently attacking."
		},
		{
			rettype: "",
			name: "newanimatedtext",
			varName: "t",
			param: null,
			description: "Iterates through animated texts in game, the values are stored in the variable <i>t</i>. For more information about animated texts, visit <a href=\"lua-customtypes.html#animatedtext\">this</a>.",
			ex: "init start\n\tlocal totalExp\ninit end\nauto(200)\nlistas('Total Exp: ' .. totalExp)\nforeach newanimatedtext t do\n\tif t.type == 215 and t.posx == $posx and t.posy == $posy then\n\t\ttotalExp = totalExp + tonumber(t.content)\n\tend\nend",
			exDescription: "Will show the sum of experience animated texts that appears on the top of your character."
		},
		{
			rettype: "",
			name: "navchar",
			varName: "p",
			param: null,
			description: "Iterates through the navigation players that the bot currently has information about, the values are stored in the variable <i>p</i>. For more information about nav players visit, visit <a href=\"lua-customtypes.html#navplayer\">this</a>.",
			ex: "foreach navchar p do\n\tprint(p.name, p.team)\nend",
			exDescription: "Will print the name and the team of all the navigation players the bot has information about."
		},
		{
			rettype: "",
			name: "navping",
			varName: "p",
			param: null,
			description: "Iterates through navigation pings, the values are stored in the variable <i>p</i>. Navigation pings are sent using the command <a href=\"lua-functions.html#navsendping\">navsendping</a>, for more information about it, visit <a href=\"lua-customtypes.html#navping\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "",
			name: "queuedevent",
			varName: "m",
			param: null,
			description: "Iterates through all the events in the bot's queue, the value is stored as a table in the variable <i>m</i>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "",
			name: "deathtimer",
			varName: "d",
			param: null,
			description: "Iterates through the death timers inside the bot, the value is stored in the variable <i>d</i>. Death timers stores the time when the bot saw a player dying, so you can know how long it will take for your PZ locked to go out. For more information, visit <a href=\"lua-customtypes.html#deathtimer\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "",
			name: "supplyitem",
			varName: "m",
			param: "category",
			description: "Iterates through the supply items at the currently selected supply profile, the value is stored in the variable <i>m</i>. For more information about supply items visit <a href=\"lua-customtypes.html#supplyitem\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "",
			name: "lootingitem",
			varName: "m",
			param: "category",
			description: "Iterates through the loot items at the currently selected looting profile, the value is stored in the variable <i>m</i>. For more information about looting items visit <a href=\"lua-customtypes.html#lootingitem\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "",
			name: "vipentry",
			varName: "v",
			param: null,
			description: "Iterates through all the vip entries in your VIP list, the value is stored in the variable <i>v</i>. For more information about vip entries visit <a href=\"lua-customtypes.html#vipentry\">this</a>.",
			ex: null,
			exDescription: null
		}
	]
};