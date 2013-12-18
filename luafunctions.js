luaFunctions = {
	functionType: "function",
	functions: [
		{
			rettype: "subtitle",
			description: "Functionality Functions",
			exDescription: "These are the basic functions to modify the behaviour of the scripts."
		},
		{
			rettype: null,
			name: "auto",
			args: [
				{
					type: "number",
					name: "interval"
				}
			],
			description: "Puts the script into auto-mode for <i>interval</i> milliseconds. A script that is in auto-mode will execute itself every certain interval of time. If the command is executed in a hotkey, that hotkey, when pressed, will enable the repetitive execution and disable it if pressed again. If 0 is passed for <i>interval</i> and the hotkey is currently running on auto, the hotkey is taken off auto-mode.",
			ex: "auto(2500)\ncast('exura')",
			exDescription: "It will cast 'light healing' spell each 2.5 seconds."
		},
		{
			rettype: null,
			name: "auto",
			args: [
				{
					type: "number",
					name: "intervalfrom"
				},
				{
					type: "number",
					name: "intervalto"
				}
			],
			alternative: true,
			description: "Puts the script into auto-mode for a random interval between <i>intervalfrom</i> and <i>intervalto</i> milliseconds.",
			ex: "auto(200, 500)\neatfood()",
			exDescription: "It will try to eat a food each 200~500 milliseconds."
		},
		{
			rettype: null,
			name: "wait",
			args: [
				{
					type: "number",
					name: "waittime"
				}
			],
			description: "Pauses the execution of the current script for <i>waittime</i> milliseconds and resumes once that interval has elapsed.",
			ex: "say('hi')\nwait(2500)\nnpcsay('trade')",
			exDescription: "Will say 'hi', wait for 2.5 seconds and then say 'trade' on the NPC channel."
		},
		{
			rettype: null,
			name: "wait",
			args: [
				{
					type: "number",
					name: "waittimefrom"
				},
				{
					type: "number",
					name: "waittimeto"
				}
			],
			alternative: true,
			description: "Pauses the execution of the current script for a random interval between <i>waittimefrom</i> and <i>waittimeto</i> milliseconds and resumes once that interval has elapsed.",
			ex: "say('hi')\nwait(2000,3000)\nnpcsay('trade')",
			exDescription: "Will say 'hi', wait for 2~3 seconds and then say 'trade' on the NPC channel."
		},
		{
			rettype: null,
			name: "setpriority",
			args: [
				{
					type: "number",
					name: "priority"
				},
				{
					type: "number",
					name: "overridepriority"
				},
				{
					type: "number",
					name: "expiretime"
				},
				{
					type: "number",
					name: "lifetime"
				},
				{
					type: "number",
					name: "type"
				}
			],
			description: "Sets the priority settings for every subsequent event created by the script. If this function is not called, the default settings defined in the bot apply. <i>type</i> can be 0 (regular event) or 1 (urgent event).",
			ex: "init start\n\tsetpriority(80, 65, 3000, 10000, 0)\ninit end\nauto(200, 400)\nif $hp < 50 then\n\tcast('exura')\nend",
			exDescription: "Will set a priority of 80, override priority of 65, an expiration time of 3000ms and a life time of 10000 to the events called by this script. In this example, the event <i>cast</i> will have the priorities chosen."
		},
		{
			rettype: null,
			name: "setlifetime",
			args: [
				{
					type: "number",
					name: "lifetime"
				}
			],
			description: "Just a convenient function to change only the <i>lifetime</i> of a script. The life time is how long an event can take to be executed. If you don't pass a <i>lifetime</i>, it will set the life time to the default.",
			ex: "setlifetime(25000)\nconnect('123456', '654321pass', 'Bubble')",
			exDescription: "Will connect your character to the game-world. Once started, the script can take up to 25 seconds to be executed."
		},
		{
			rettype: null,
			name: "setitemwarnings",
			args: [
				{
					type: "boolean",
					name: "val"
				}
			],
			description: "Will enable item warnings for the scripts that calls this function if <i>val</i> is equals to <i>true</i>, and disable it otherwise. The item warnings are warnings in the console if you tried to get item info of an item that doesn't exist in the database. For example: itemid('goldddcoin'). This would raise a warning message, because 'goldddcoin' wasn't found in the bot's database.",
			ex: "setitemwarnings",
			exDescription: "Will connect your character to the game-world. Once started, the script can take up to 25 seconds to be executed."
		},
		{
			rettype: null,
			name: "print",
			args: [
				{
					type: "any",
					name: "text1"
				},
				{
					type: "any",
					name: "text2"
				},
				{
					type: "",
					name: "..."
				}
			],
			description: "Will print on the console the texts passed as parameters sepparated by a comma. You can put as many texts as you want, and it accepts any kind of variable as input. This function is useful for debugging.",
			ex: "print('Hello WindBot!', 'I am awesome!', 13245)",
			exDescription: "Will print on the console the following text: \"Hello WindBot!, I am awesome!, 12345\"."
		},
		{
			rettype: null,
			name: "printerror",
			args: [
				{
					type: "any",
					name: "text1"
				},
				{
					type: "any",
					name: "text2"
				},
				{
					type: "",
					name: "..."
				}
			],
			description: "Same as function print, but the messages will be printed with color 'red' and the console will pop-up once you call this function.",
			ex: "auto(200, 300)\nif not $connected then\n\tprinterror('Your character is disconnected')\n\tauto(0)\nend",
			exDescription: "If you are not connected to the game, it will pop-up the console and print a message saying that you got disconnected and then disable the script."
		},
		{
			rettype: "boolean",
			name: "iskeypressed",
			args: [
				{
					type: "optional number",
					name: "key"
				}
			],
			description: "Returns <i>true</i> if the key <i>key</i> is pressed on your keyboard, <i>false</i>. A list of keys and their virtual keys can be found <a href=\"http://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx\">here</a>",
			ex: "auto(200)\nif iskeypressed(0x14) then\n\tprinterror('WARNING! Caps-Lock is pressed.')\nend",
			exDescription: "Will print a warning on the console if the Caps-Lock key is pressed."
		},
		{
			rettype: null,
			name: "waitforevents",
			args: [
				{
					type: "boolean",
					name: "wait"
				}
			],
			description: "Lets you select if you want to wait until the events you issue finishes, or to continue running the script. Remember to change it back afterwards if you don't want all your events in the current script to use that same setting.",
			ex: "waitforevents(true)\ncast('exura ico')\nuseoncreature('great health potion', $self)\nwaitforevents(false)",
			exDescription: "Will issue a 'cast exura ico' event and 'use great health potion on self' event at the same time, without waiting for the first event to finish."
		},
		{
			rettype: "subtitle",
			description: "Bot Control Functions",
			exDescription: "These functions are used to modify settings of the bot."
		},
		{
			rettype: null,
			name: "clearlastonto",
			args: [

			],
			description: "Clears the last onto index so that 'moveitemsonto(...)' starts putting items on the first backpack again. See <b>$lastonto</b> for more information.",
			ex: "if $lastonto > 20 then\n\tclearlastonto()\nend",
			exDescription: "Will clear the last <i>onto</i> container if the current <i>onto</i> index is higher than 20."
		},
		{
			rettype: null,
			name: "ignorecreature",
			args: [
				{
					type: "string",
					name: "creaturename"
				},
				{
					type: "optional bool",
					name: "unignore"
				}
			],
			description: "Instructs the Targeting system to ignore the creature with name <i>creaturename</i> completely. Optionally you can pass <i>true</i> as the second parameter to unignore a creature if it was previously ignored.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "ignorecreature",
			args: [
				{
					type: "number",
					name: "creatureid"
				},
				{
					type: "optional bool",
					name: "unignore"
				}
			],
			alternative: true,
			description: "Instructs the Targeting system to ignore the creature with id <i>creatureid</i> completely. Optionally you can pass <i>true</i> as the second parameter to unignore a creature if it was previously ignored.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "ignorecreature",
			args: [
				{
					type: "creature",
					name: "creaturestruct"
				},
				{
					type: "optional bool",
					name: "unignore"
				}
			],
			alternative: true,
			description: "Instructs the Targeting system to ignore the creature <i>creaturestruct</i> completely. Optionally you can pass <i>true</i> as the second parameter to unignore a creature if it was previously ignored.",
			ex: "auto(200)\nif $followed.name == 'Slime' then\n\tignorecreature($followed)\n\tauto(0)\nend",
			exDescription: "Will ignore the currently followed creature if it is a Slime, and then turn this script off. It can be used to train with slimes."
		},
		{
			rettype: null,
			name: "flashclient",
			args: [

			],
			description: "Flashes the client window. Useful for alerts.",
			ex: "auto(200)\nif maround(7) > 0 then\n\tplaysound('monster.wav')\n\tflashclient()\nend",
			exDescription: "Will play an alert and flash the client if there's a monster on your screen."
		},
		{
			rettype: null,
			name: "focusclient",
			args: [

			],
			description: "Gives focus to the client window.",
			ex: "auto(200)\nif $pattacked.id > 0 then\n\tfocusclient()\nend",
			exDescription: "Will make the client focus if there's someone attacking you."
		},
		{
			rettype: "table",
			name: "geteventbyid",
			args: [
				{
					type: "number",
					name: "id"
				}
			],
			description: "Returns a table containing information about the input event with id <i>id</i>.",
			ex: "local eventid = moveitems(3031, 0)\nprint(geteventbyid(eventid))",
			exDescription: "Will print information about the event <i>eventid</i>, which is the moveitems event you called before."
		},
		{
			rettype: null,
			name: "minimizeclient",
			args: [

			],
			description: "Minimizes the client.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "restoreclient",
			args: [

			],
			description: "Restores the client from the minimized state.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "playsound",
			args: [
				{
					type: "string",
					name: "filename"
				}
			],
			description: "Plays the sound with file name <i>filename</i>. All the sound files must be in the bot's '/sounds' directory.",
			ex: "auto(200)\nif paround(7) > 0 then\n\tplaysound('playeronscreen.wav')\n\tflashclient()\nend",
			exDescription: "Will play the sound 'playeronscreen.wav' and flash the client if there's a player on your screen."
		},
		{
			rettype: "string",
			name: "getsetting",
			args: [
				{
					type: "string",
					name: "settingpath"
				}
			],
			description: "Gets the value of any setting in the bot as a string representation. The string <i>settingpath</i> must contain the full path of the setting such as 'Healer/SpellHealer/Enabled'. You can copy the complete invocation of this function, by right-clicking on any setting of the bot and selecting 'Copy getsetting'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "setsetting",
			args: [
				{
					type: "string",
					name: "settingpath"
				},
				{
					type: "string",
					name: "value"
				}
			],
			description: "Sets any setting of the bot to the value specified by value. The string <i>settingpath</i> must contain the full path of the setting such as 'Healer/SpellHealer/Enabled' and value must be one of the possible values for that field typed in exactly as it appears in the settings, in this case either 'yes' or 'no'. You can copy the complete invocation of this function, including the current value, by right-clicking on any setting of the bot and selecting 'Copy setsetting'.",
			ex: "if getsetting('Cavebot/Enabled') == 'yes' then\n\tsetsetting('Cavebot/Enabled', 'no')\nend",
			exDescription: "Disables the cavebot if it's currently enabled."
		},
		{
			rettype: null,
			name: "pausebot",
			args: [
				{
					type: "optional boolean",
					name: "value"
				}
			],
			description: "Disables 'Targeting', 'Cavebot' and 'Looting' if <i>value</i> is <i>true</i> and enables if it's <i>false</i>. If no value is passed, it will simply toggle the current state of these sections.",
			ex: "if $cavebot or $targeting or $looting then\n\tpausebot(true)\nelse\n\tpausebot(false)\nend",
			exDescription: "Pauses the bot if the 'Cavebot' or 'Targeting' or 'Looting' is currently running, and unpause it otherwise."
		},
		{
			rettype: null,
			name: "pauseinput",
			args: [
				{
					type: "number",
					name: "timems"
				}
			],
			description: "Prevents the bot from sending input in the form of mouse clicks/moves and key presses for <i>timems</i> milliseconds. You can use this if the bot is stubbornly trying to do something and you want it to stop while you can do something else. Be careful as this will pause healing aswell! The bot will resume sending input after the specified delay has expired or if 0 is passed as <i>timems</i>.",
			ex: "pauseinput(20000)",
			exDescription: "The bot will stop sending any mouse clicks/moves and key presses for 20 seconds."
		},
		{
			rettype: null,
			name: "pausewalking",
			args: [
				{
					type: "number",
					name: "timems"
				}
			],
			description: "Prevents the bot from walking for <i>timems</i> milliseconds. You can use this for example to skin/stake bodies. This does not pause walking if it was issued by script commands such as reachgrounditem or moveto. The bot will resume walking after the specified delay has expired or if 0 is passed as <i>timems</i>.",
			ex: "pausewalking(20000)\nreachlocation(33222, 33222, 7)\nuseitemon('obsidian knife', topitem(33222, 33222, 7).id, 'ground 33222 33222 7')\npausewalking(0)",
			exDescription: "Will pause cavebot's walking, reach location 33222, 33222, 33222 and use an 'obsidian knife' on the item no top."
		},
		{
			rettype: null,
			name: "listas",
			args: [
				{
					type: "string",
					name: "text"
				}
			],
			description: "Sets the name for the script to <i>text</i> for appearance when active. To prevent a script from being listed, invoke it as follows: listas('dontlist').",
			ex: "auto(200)\nlistas('Anti-Poison script on standby')\nif $poisoned then\n\tlistas('Casting \"Antidote Spell\"')\n\tcast('exana pox')\nend",
			exDescription: "Will set the 'list as' text to show what the script is doing in each step."
		},
		{
			rettype: null,
			name: "listcolor",
			args: [
				{
					type: "number",
					name: "color"
				}
			],
			description: "Sets the color for the script to <i>color</i> for appearance when active. The color is given in the RGB format, there are several online tools that allows you to generate the color.",
			ex: "auto(200)\nlistcolor(0x3E5417)\nlistas('Script colors test')",
			exDescription: "Will set the 'list as' color to green, and the text to 'Script colors test'."
		},
		{
			rettype: null,
			name: "messagebox",
			args: [
				{
					type: "string",
					name: "title"
				},
				{
					type: "string",
					name: "msg"
				}
			],
			description: "Shows a message box with window title <i>title</i> and text <i>msg</i>.",
			ex: "messagebox('Hello guys', 'Welcome to WindBot!')",
			exDescription: "Will display a message box containing the message: 'Hello guys, welcome to WindBot'."
		},
		{
			rettype: null,
			name: "openbrowser",
			args: [
				{
					type: "string",
					name: "url"
				}
			],
			description: "Will prompt the user if he wants to open the url <i>url</i>, if the user accepts the request, it will open the url in a browser.",
			ex: "openbrowser('www.tibiawindbot.com')",
			exDescription: "Will ask the user if he wants to open WindBot's main page."
		},
		{
			rettype: null,
			name: "screenshot",
			args: [
				{
					type: "optional string",
					name: "filename"
				},
				{
					type: "optional boolean",
					name: "worldonly"
				},
				{
					type: "optional number",
					name: "quality"
				}
			],
			description: "Takes a screenshot of the entire client window. If <i>filename</i> is not specified, a filename with the character name and the current date and time will be created. Optionally, you can pass the <i>worldonly</i> parameter as <i>true</i> to only save the game world portion of the screen. Optionally, you can specify a quality level from 1-99 if you want the screenshot to be saved in JPEG format. On Windows Vista/7, the client does not need focus for the screenshot to work. On Windows XP, the client is made the topmost window before the screenshot is being taken and then it is returned to normal. In both cases, WindBot's HUDs will not be visible on the screenshot and the client must also not be minimized. The screenshot will be stored in the '/screenshots' folder.",
			ex: "init start\n\tlocal curlevel = $level\ninit end\nauto(200)\nif $level ~= curlevel then\n\tscreenshot()\n\tcurlevel = $level\nend",
			exDescription: "Takes a screenshot on level up."
		},
		{
			rettype: null,
			name: "showbot",
			args: [
				{
					type: "optional boolean",
					name: "show"
				}
			],
			description: "Toggles the bot's visibility. Optionally you can pass the <i>show</i> parameter to force the bot to show or hide.",
			ex: "showbot(true)",
			exDescription: "Shows the bot."
		},
		{
			rettype: null,
			name: "terminateevent",
			args: [
				{
					type: "number",
					name: "eventid"
				}
			],
			description: "Terminates input event of id <i>eventid</i> and returns true if successful.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "traymessage",
			args: [
				{
					type: "string",
					name: "title"
				},
				{
					type: "string",
					name: "msg"
				},
				{
					type: "optional number",
					name: "timems"
				}
			],
			description: "Displays a message in the system tray with title <i>title</i> and text <i>text</i> which causes the bot to show up if clicked on. Title can be an empty string in which case it will take less space. You can specify how long the message should last in milliseconds in the <i>timems</i> parameter. If you don't, the message will last 10000 ms. Tray messages replace each other so only one can be shown at a time.",
			ex: "init start\n\tlocal curlevel = $level\ninit end\nauto(200)\nif $level ~= curlevel then\n\ttraymessage('Level Up!', 'Congratulations! You advanced from Level ' ..curlevel.. ' to Level ' ..$level, 5000)\n\tcurlevel = $level\nend",
			exDescription: "Will show a level up message on the system tray when you level up. This message will be showed for 5 seconds."
		},
		{
			rettype: null,
			name: "traytooltip",
			args: [
				{
					type: "string",
					name: "text"
				}
			],
			description: "Sets the system tray icon's tooltip to <i>text</i> which will appear when howevered on. This function must be called every 2000 ms or less because the default tooltip takes over after 2 seconds.",
			ex: "auto(2000)\ntraytooltip($name.. ' - ' ..$vocation.. ' ' ..$level.. '. Exp/H: '..$exphour)",
			exDescription: "Sets the tray tool tip text to show some information. For example: 'Bubble - knight 200. Exp/H: 20000'."
		},
		{
			rettype: "subtitle",
			description: "Access Functions",
			exDescription: "These functions return values tracked internally by the bot."
		},
		{
			rettype: "table",
			name: "creatureinfo",
			args: [
				{
					type: "string",
					name: "creaturename"
				}
			],
			description: "Returns a table containing various information about the creature <i>creaturename</i> which can be the spell name or the incantation words as defined in the '/tibiadata/creatures.xml' file.",
			ex: "local c = creatureinfo('demon')\nfor i,j in pairs(c) do\n\tprint(i, j)\nend",
			exDescription: "Will print all of the information the bot has about the 'Demon'."
		},
		{
			rettype: "number",
			name: "exptolevel",
			args: [
				{
					type: "optional number",
					name: "level"
				}
			],
			description: "If <i>level</i> is not specified, returns the amount of exp left for next level (same as <b>$exptonextlevel</b>). Otherwise, returns the amount of exp left for level <i>level</i>.",
			ex: "auto(2000)\nlistas(exptolevel())",
			exDescription: "Will show how much of experience is left to the next level."
		},
		{
			rettype: "number",
			name: "timetolevel",
			args: [
				{
					type: "optional number",
					name: "level"
				}
			],
			description: "If <i>level</i> is not specified, returns the time left in minutes for the next level, based on the current exp rate (same as <b>$timetonextlevel</b>). Otherwise, returns the amount of time left in minutes for level <i>level</i>. Use the <b>time</b> function to convert into a legible time.",
			ex: "print(timetolevel())",
			exDescription: "Will print on the console the amount of time in minutes left before you achieve the next level, based on the current experience rate."
		},
		{
			rettype: "number",
			name: "emptycount",
			args: [
				{
					type: "optional string",
					name: "locationname"
				}
			],
			description: "Returns the count of empty/free slots in your open container windows. Optionally, you can specify which windows to consider by providing the <i>locationname</i> parameter.",
			ex: "auto(200)\nif emptycount('0-3') == 0 then\n\tplaysound('monster.wav')\n\tflashclient()\nend",
			exDescription: "Will play an alert if you don't have any empty slots on the containers '0-3'."
		},
		{
			rettype: "number",
			name: "windowcount",
			args: [
				{
					type: "optional string",
					name: "locationname"
				}
			],
			description: "Returns the count of windows that are currently open. Optionally, you can specify which windows to consider by providing the <i>locationname</i> parameter.",
			ex: "auto(200)\nif windowcount() == 0 then\n\tplaysound('monster.wav')\n\tflashclient()\nend",
			exDescription: "Will play an alert if you don't have any opened containers."
		},
		{
			rettype: "number",
			name: "itemcount",
			args: [
				{
					type: "number",
					name: "itemid"
				},
				{
					type: "optional string",
					name: "locationname"
				}
			],
			description: "Returns the count of the item with id <i>itemid</i> that is present in your equipment and open windows. The bot counts it instantly by going through all the visible items and returns the count. Optionally, you can specify which windows to consider by providing the <i>locationname</i> parameter.",
			ex: "if itemcount(3031, 'golden backpack') >= 1800 then\n\topenitem('golden backpack', 'golden backpack')\nend",
			exDescription: "Will open the next container (golden backpack) if you have more than 1800 'gold coins' inside it."
		},
		{
			rettype: "number",
			name: "itemcount",
			args: [
				{
					type: "string",
					name: "itemname"
				},
				{
					type: "optional string",
					name: "locationname"
				}
			],
			alternative: true,
			description: "Returns the count of the item with name <i>itemname</i> that is present in your equipment and open windows. The bot counts it instantly by going through all the visible items and returns the count. Optionally, you can specify which windows to consider by providing the <i>locationname</i> parameter.",
			ex: "auto(200)\nlistas('' ..itemcount('knight legs', '0-15'))",
			exDescription: "Will show how many 'knight legs' are present inside your containers."
		},
		{
			rettype: "iteminformation",
			name: "iteminfo",
			args: [
				{
					type: "number",
					name: "itemid"
				}
			],
			description: "Returns all the information the bot has has about the item with id <i>itemid</i>. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: "print(iteminfo(3031).isenchantable)",
			exDescription: "Will print in the console whether 'gold coins' are enchantable or not."
		},
		{
			rettype: "iteminformation",
			name: "iteminfo",
			args: [
				{
					type: "string",
					name: "itemname"
				}
			],
			alternative: true,
			description: "Returns all the information the bot has has about the item named <i>itemname</i>. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: "print(iteminfo('wand of inferno').maxdmg)",
			exDescription: "Will print in the console the maximum range you can do with a 'wand of inferno', based on the database value."
		},
		{
			rettype: "string",
			name: "itemname",
			args: [
				{
					type: "number",
					name: "itemid"
				}
			],
			description: "Returns the name of the item with id <i>itemid</i>. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: "print(itemname(3031))",
			exDescription: "Will print 'gold coin' on the console."
		},
		{
			rettype: "number",
			name: "itemid",
			args: [
				{
					type: "string",
					name: "itemname"
				}
			],
			description: "Returns the id of the item with name <i>itemname</i>. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: "print(itemid('gold coin'))",
			exDescription: "Will print '3031' on the console."
		},
		{
			rettype: "number",
			name: "itemcost",
			args: [
				{
					type: "string",
					name: "itemname"
				}
			],
			description: "Returns the 'buy price' of the item named <i>itemname</i> from a NPC. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: "print(itemcost('mana potion'))",
			exDescription: "Will print '50' on the console."
		},
		{
			rettype: "number",
			name: "itemcost",
			args: [
				{
					type: "number",
					name: "itemid"
				}
			],
			alternative: true,
			description: "Returns the 'buy price' of the item with id <i>itemid</i> from a NPC. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "itemvalue",
			args: [
				{
					type: "string",
					name: "itemname"
				}
			],
			description: "Returns how 'sell price' of the item named <i>itemname</i> to a NPC. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: "print(itemvalue('knight legs'))",
			exDescription: "Will print '5000' on the console."
		},
		{
			rettype: "number",
			name: "itemvalue",
			args: [
				{
					type: "number",
					name: "itemid"
				}
			],
			alternative: true,
			description: "Returns the 'sell price' of the item with id <i>itemid</i> to a NPC. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "itemweight",
			args: [
				{
					type: "string",
					name: "itemname"
				}
			],
			description: "Returns the weight of the item <i>itemname</i>. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: "print(itemweight('dragon scale mail'))",
			exDescription: "Will print '114' on the console."
		},
		{
			rettype: "number",
			name: "itemweight",
			args: [
				{
					type: "number",
					name: "itemid"
				}
			],
			alternative: true,
			description: "Returns the weight of the item with id <i>itemid</i>. This value is the same as in the file '/tibiadata/items.xml'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "servercount",
			args: [
				{
					type: "string",
					name: "itemname"
				}
			],
			description: "Returns the count of item with name <i>itemname</i> as seen in the latest 'Using one of <i>itemname</i>...' message. It's called a server count because the server is counting the items for you while they don't have to be visible.",
			ex: "auto(200)\nlistas('Mana Potions: ' ..servercount('mana potion')",
			exDescription: "Will show how many 'mana potions' you still have, based on the 'Using one of X mana potions...' message."
		},
		{
			rettype: "number",
			name: "itemflags",
			args: [
				{
					type: "string",
					name: "itemname"
				}
			],
			description: "Returns the properties of the item <i>itemname</i>. It's useful to determine if an item blocks your path, if it's a hole, etc.",
			ex: "print(bit32.band(itemflags('gold coin'), ITEMPROPERTIES_STACKABLE))",
			exDescription: "Will perform a bitwise operation to check if the STACKABLE bit is set on the item 'gold coin'."
		},
		{
			rettype: "boolean",
			name: "itemproperty",
			args: [
				{
					type: "string",
					name: "itemname"
				},
				{
					type: "number",
					name: "flagtocheck"
				}
			],
			description: "Returns <i>true</i> if the bit <i>flagtocheck</i> is set on the flags of the item <i>itemname</i>. Otherwise, it returns <i>false</i>.",
			ex: "print(itemproperty('gold coin', ITEMPROPERTIES_STACKABLE))",
			exDescription: "Will check if the 'stackable' property is set on the item 'gold coin'. Same example as provided for <a href=\"lua-functions.html#itemflags\">itemflags.</a>"
		},
		{
			rettype: "number",
			name: "tradecount",
			args: [
				{
					type: "string",
					name: "tradetype"
				},
				{
					type: "number",
					name: "itemid"
				}
			],
			description: "Returns the count of item of type <i>tradetype</i> ('buy' or 'sell') with id <i>itemid</i>. This is the count available for purchase (limited by money/cap) or sale (amount carrying) given by the trade items window. If the trade window is closed, the return value is 0.",
			ex: "buyitems(268, tradecount('buy', 268))",
			exDescription: "Will buy as many 'mana potions' as you can."
		},
		{
			rettype: "number",
			name: "tradecount",
			args: [
				{
					type: "string",
					name: "tradetype"
				},
				{
					type: "string",
					name: "itemname"
				}
			],
			alternative: true,
			description: "Returns the count of item of type <i>tradetype</i> ('buy' or 'sell') with name <i>itemname</i>. This is the count available for purchase (limited by money/cap) or sale (amount carrying) given by the trade items window. If the trade window is closed, the return value is 0.",
			ex: "auto(200)\nlocal count = tradecount('sell', 'plate armor')\nif count ~= 0 then\n\tlistas('You can sell: ' ..count.. ' plate armors')\nelse\n\tlistas('dontlist')\nend",
			exDescription: "Will show how many 'plate armors' you have available for sale. If you don't have any, it will hide the 'list as' message."
		},
		{
			rettype: "table",
			name: "spellinfo",
			args: [
				{
					type: "string",
					name: "spell"
				}
			],
			description: "Returns a table containing various information about spell <i>spell</i> which can be the spell name or the incantation words as defined in the '/tibiadata/spells.xml' file.",
			ex: "local spell = spellinfo('exura')\nfor i,j in pairs(spell) do\n\tprint(i, j)\nend",
			exDescription: "Will print all of the information the bot has about 'Light Healing' spell."
		},
		{
			rettype: "subtitle",
			description: "Client Information Functions",
			exDescription: "The following functions return information gathered from the client."
		},
		{
			rettype: "string",
			name: "clientitemhotkey",
			args: [
				{
					type: "number",
					name: "itemid"
				},
				{
					type: "optional string",
					name: "type"
				}
			],
			description: "Looks for a hotkey in the game client which is bound to the item with id <i>itemid</i> and returns it as a string representation of the keys in the format 'F1', 'Shift+F5', or 'Ctrl+F12', and 'not found' if there is no such hotkey. Optionally, you can specify a type by passing 'self', 'target' or 'crosshair' as the type paramter if you're looking for a certain type specifically. Otherwise, any type will be looked for.",
			ex: "auto(200)\nif clientitemhotkey(268, 'self') == '' then\n\ttraymessage('', 'WARNING! You don\\'t have a hotkey on the client to use mana potions', 2000) wait(1000)\nend",
			exDescription: "Will show a warning if you don't have a hotkey on the client to use mana potions on yourself."
		},
		{
			rettype: "string",
			name: "clientspellhotkey",
			args: [
				{
					type: "string",
					name: "incantation"
				},
				{
					type: "optional string",
					name: "type"
				}
			],
			description: "Looks for a hotkey in the game client which is bound to a spell with <i>incantation</i> similar to incantation and returns it as a string representation of the keys in the format 'F1', 'Shift+F5', or 'Ctrl+F12'. Optionally, you can specify a type by passing 'manual' or 'automatic' as the type paramter if you're looking for a certain type specifically. Otherwise, any type will be looked for.",
			ex: "auto(200)\nif clientspellhotkey('exura') == '' then\n\ttraymessage('', 'WARNING! You don\\'t have a hotkey on the client to use light healing spell', 2000) wait(1000)\nend",
			exDescription: "Will show a warning if you don't have a hotkey on the client to use light healing spell."
		},
		{
			rettype: "string",
			name: "clienttexthotkey",
			args: [
				{
					type: "string",
					name: "text"
				},
				{
					type: "optional string",
					name: "type"
				}
			],
			description: "Looks for a hotkey in the game client which is bound to text <i>text</i> and returns it as a string representation of the keys in the format 'F1', 'Shift+F5', or 'Ctrl+F12'. Optionally, you can specify a type by passing 'manual' or 'automatic' as the type paramter if you're looking for a certain type specifically. Otherwise, any type will be looked for.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "cooldown",
			args: [
				{
					type: "string",
					name: "spell"
				}
			],
			description: "Return the amount of time in milliseconds until you can cast spell <i>spell</i> or 0 if you can cast it right away. The <i>spell</i> parameter can be either the spell name or the incantation.",
			ex: "if cooldown('exori max frigo') == 0 then\n\tcast('exori max frigo')\nelseif cooldown('strong ice strike') == 0 then\n\tcast('exori gran frigo')\nelse\n\tcast('exori frigo')\nend",
			exDescription: "Will try to cast 'ultimate ice strike', or 'strong ice strike' or 'ice strike'. Based on the spell's cooldown."
		},
		{
			rettype: "container",
			name: "getcontainer",
			args: [
				{
					type: "number",
					name: "containerindex"
				}
			],
			description: "Returns a pointer to the <i>container</i> datastructure for the specificed container with index <i>containerindex</i> ranging from 0-15. If you need more info about the container data structure, access <a href=\"lua-customtypes.html#container\">this</a>",
			ex: "print(getcontainer(0).name)",
			exDescription: "Will print the name of the first container."
		},
		{
			rettype: "creature",
			name: "getcreaturebyid",
			args: [
				{
					type: "number",
					name: "creatureid"
				}
			],
			description: "Returns a pointer to the <i>creature</i> identified by the id <i>creatureid</i>. If you need more info about the creature data structure, access <a href=\"lua-customtypes.html#creature\">this</a>",
			ex: "local selfcreature = getcreaturebyid($id)",
			exDescription: "Will store a pointer to your character's data structure on the variable selfcreature."
		},
		{
			rettype: "creature",
			name: "getcreaturebyname",
			args: [
				{
					type: "string",
					name: "creaturename"
				}
			],
			description: "Returns a pointer to the <i>creature</i> with name <i>creaturename</i>. If you need more info about the creature data structure, access <a href=\"lua-customtypes.html#creature\">this</a>",
			ex: "local bubble = getcreaturebyname('Bubble')",
			exDescription: "Will store a pointer to the datastructure of 'Bubble' in the variable bubble."
		},
		{
			rettype: "playerinfo",
			name: "getplayerinfo",
			args: [
				{
					type: "number",
					name: "playerid"
				}
			],
			description: "Returns a pointer to the <i>playerinfo</i> identified by the id <i>playerid</i>. To identify the player info you must first look at him (shift+mouse click), or add the player info manually in the Relations lists table, in Navigation tab. If you need more info about the player info data structure, access <a href=\"lua-customtypes.html#playerinfo\">this</a>",
			ex: "print(getplayerinfo($attacked.id).vocshort)",
			exDescription: "Will print the vocation of your currently attacked creature."
		},
		{
			rettype: "playerinfo",
			name: "getplayerinfo",
			args: [
				{
					type: "name",
					name: "playername"
				}
			],
			alternative: true,
			description: "Returns a pointer to the <i>playerinfo</i> named <i>playername</i>. To identify the player info you must first look at him (shift+mouse click), or add the player info manually in the Relations lists table, in Navigation tab. If you need more info about the player info data structure, access <a href=\"lua-customtypes.html#playerinfo\">this</a>",
			ex: "print(getplayerinfo('Bubble').level)",
			exDescription: "Will print Bubble's level."
		},
		{
			rettype: "tile",
			name: "gettile",
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
			description: "Returns a pointer to the tile at position x:<i>posx</i>, y:<i>posy</i>, z:<i>posz</i>. If you need more info about the tile data structure, access <a href=\"lua-customtypes.html#tile\">this</a>",
			ex: "local tile = gettile($posx, $posy, $posz)\nfor i=1, tile.itemcount do\n\tprint(tile.items[i].id, tile.items[i].count)\nend",
			exDescription: "Will print the item id of each item on the tile you are standing at."
		},
		{
			rettype: "tile",
			name: "gettile",
			args: [
				{
					type: "number",
					name: "rx"
				},
				{
					type: "number",
					name: "ry"
				},
				{
					type: "number",
					name: "rz"
				}
			],
			alternative: true,
			description: "Returns the tile relative to the position of your character <i>rx</i>(-8, 9), <i>ry</i>(-6, 7) and <i>rz</i>(-2, 2).",
			ex: "for i=-8,9 do\n\tfor j=-6,7 do\n\t\tprint(i, j, gettile(i, j, 0).itemcount)\n\tend\nend",
			exDescription: "Will print how many items are on each tile of the screen."
		},
		{
			rettype: "boolean",
			name: "ischannel",
			args: [
				{
					type: "string",
					name: "channelname"
				}
			],
			description: "Returns <i>true</i> if channel with name <i>channelname</i> is opened and false otherwise. The channel name must be provided exactly as it appears in the client (ex: 'Bubble's private...').",
			ex: "if not ischannel('NPCs') then\n\tsay('hi')\nelse\n\tnpcsay('hi')\nend",
			exDescription: "Will say 'hi' in the NPCs channel if it's open, if not, it will say it in the 'Default Channel'."
		},
		{
			rettype: "boolean",
			name: "isitemontile",
			args: [
				{
					type: "number",
					name: "itemid"
				},
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
			description: "Returns <i>true</i> if the item with id <i>itemid</i> can be found at position x:<i>posx</i>, y:<i>posy</i>, z:<i>posz</i>, <i>false</i> otherwise.",
			ex: "if not isitemontile(3031, $posx, $posy, $posz) then\n\tmoveitems(3031, 'ground')\nend",
			exDescription: "Will throw all your 'gold coins' in to the ground if there isn't any 'gold coins' in that location."
		},
		{
			rettype: "item",
			name: "topitem",
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
			description: "Returns the data structure of the tile's top item at position x:<i>posx</i>, y:<i>posy</i>, z:<i>posz</i>. You can access its id or count by appending the .id or .count properties. Any information accessing on the item datastructure must be performed right away or stored elsewhere because a call to wait() or any script event may invalidate it.",
			ex: "auto(200)\nif topitem($posx, $posy, $posz).id == 3031 then\n\tmoveitems(3031, '0-15', 'ground')\nend",
			exDescription: "Will move any gold coin found under you to an empty slot on your opened containers."
		},
		{
			rettype: "item",
			name: "topuseitem",
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
			description: "Same as topitem, but it will get the item that will be used if you right click on that tile.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "topuseonitem",
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
			description: "Same as topitem, but it will get the item that you will use on if you are using a \"Use with...\" item.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "toplookitem",
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
			description: "Same as topitem, but it will get the item that will be used if you look at the tile.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "topmoveitem",
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
			description: "Same as topitem, but it will get that you will move if you try to move something in that tile.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "maround",
			args: [
				{
					type: "optional number",
					name: "range"
				},
				{
					type: "optional string",
					name: "name1"
				},
				{
					type: "optional string",
					name: "name2"
				},
				{
					type: "",
					name: "..."
				}
			],
			description: "Returns the amount of monsters around you within distance <i>range</i>. If range is 0 or not specified, the entire screen is considered. Optionally, you can specify as many names as you want to only be considered as the following <i>namex</i> parameters.",
			ex: "auto(200)\nif maround(0, 'rat', 'cave rat') > 0 then\n\tcloseclient()\nend",
			exDescription: "Will close the client if there are any rats or cave rats around you."
		},
		{
			rettype: "number",
			name: "paround",
			args: [
				{
					type: "optional number",
					name: "range"
				}
			],
			description: "Returns the amount of players around you within distance <i>range</i>. If range is 0 or not specified, the entire screen is considered.",
			ex: "auto(200)\nif paround() > 0 then\n\tlogout()\nend",
			exDescription: "Will make your character logout if there are any players on your screen."
		},
		{
			rettype: "boolean",
			name: "tilereachable",
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
				},
				{
					type: "optional boolean",
					name: "fullreach"
				}
			],
			description: "Returns <i>true</i> if you are able to reach the specified location by walking there, <i>false</i> otherwise. Only the tiles on screen are considered unless you set the optional parameter <i>fullreach</i> to true in which case the bot will try to find a path through the tiles in a 256x256 box around your location, which is much slower.",
			ex: "if not tilereachable($attacked.posx, $attacked.posy, $attacked.posz) then\n\tignorecreature($attacked)\nend",
			exDescription: "Will ignore the currently attacked creature if it's not reachable. Be careful, because it will only unignore it when you call <a href=\"lua-functions.html#ignorecreature\"><b>ignorecreature</b></a> again"
		},
		{
			rettype: "boolean",
			name: "tileshootable",
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
			description: "Returns <i>true</i> if nothing is obstructing the throw/shoot path between you and the tile at location x:<i>posx</i>, y:<i>posy</i>, z:<i>posz</i>, <i>false</i> otherwise..",
			ex: "if tileshootable($attacked.posx, $attacked.posy, $attacked.posz) then\n\tuseoncreature('sudden death rune', $attacked)\nend",
			exDescription: "Will shoot a 'sudden death rune' on the current attacked creature if there's nothing obstructing the path."
		},
		{
			rettype: "subtitle",
			description: "Cavebot Functions",
			exDescription: "These functions are used to change the behaviour of the cavebot in some way."
		},
		{
			rettype: "various",
			name: "getuseroption",
			args: [
				{
					type: "string",
					name: "useoptionname"
				}
			],
			description: "Will get the value of the user option in Cavebot tab. Each widget type returns one type of value. <i>combo boxes</i> return <i>strings</i>, <i>check boxes</i> return <i>booleans</i>, <i>line edits</i> return <i>strings</i>, <i>spinboxes</i> and <i>double spinboxes</i> return <i>numbers</i> and <i>range spinboxes</i> return <i>tables with from and to</i> members.",
			ex: "local hasgates = getuseroption('hasyalahargates')\nif hasgates then\n\tgotolabel('leavethroughgates')\nelse\n\tgotolabel('leavethroughnpc')\nend",
			exDescription: "Will check if the 'hasyalahargates' checkbox is checked, and store its value in <i>hasgates</i> variable. Then it will pick a way to leave the cave depending on the checkbox value."
		},
		{
			rettype: "string",
			name: "getlootingdestination",
			args: [
				{
					type: "string",
					name: "destinationname"
				}
			],
			description: "Will get the container destination of the destination named <i>destinationname</i>. This is useful if you want to distribute your scripts and allow the user to edit how he want to setup the backpacks. You can setup the looting destinations at Looting Settings.",
			ex: "local destination = getlootingdestination('bpindp')\nforeach lootingitem i 'a' do\n\tmoveitemsonto(i.id, destination, 0)\nend",
			exDescription: "Will move the items with category 'a' in loot list to the destination set at 'bpindp'."
		},
		{
			rettype: null,
			name: "gotolabel",
			args: [
				{
					type: "string",
					name: "labelname"
				},
				{
					type: "optional string",
					name: "waypointsection"
				}
			],
			description: "Goes to the waypoint with the label <i>labelname</i>. If you don't pass a <i>waypointsection</i> parameter it will only search on the currently running section, otherwise, it will look for a label at section <i>waypointsection</i>.",
			ex: "if $cap < 100 then\n\tgotolabel('gotocity', 'refill')\nend",
			exDescription: "When passing through this waypoint action, it will check your cap. If your capacity is lower than 100Oz, it will go to label named 'gotocity', at section 'refill'."
		},
		{
			rettype: null,
			name: "gotolabel",
			args: [
				{
					type: "number",
					name: "waypointid"
				},
				{
					type: "optional string",
					name: "waypointsection"
				}
			],
			alternative: true,
			description: "Goes to waypoint with id <i>waypointid</i>. If you don't pass a <i>waypointsection</i> parameter it will only search on the currently running section, otherwise, it will look for a label at section <i>waypointsection</i>.",
			ex: "if itemcount(268) < 10 then\n\tgotolabel(0, 'refill')\nend",
			exDescription: "When passing through this waypoint action, it will how many 'mana potions' you have. If the amount is lower than 10, it will go to the first waypoint at section 'refill'."
		},
		{
			rettype: null,
			name: "increaseamountbought",
			args: [
				{
					type: "string",
					name: "itemname"
				},
				{
					type: "number",
					name: "amount"
				}
			],
			description: "Will increase the amount of items <i>itemname</i> you bought by <i>amount</i> units. This function is used for the loot counter. Usually, this value is increased automatically by the bot when you buy an item, but only if you get a 'Bought 13x items' message. If you are getting it from the depot, for example, you should use it. Or if the OTServer you are playing at doesn't use the same message structure, so you should parse it manually.",
			ex: "moveitems('assassin star', 'orange backpack', 'depot chest', 100)\nincreaseamountbought('assassin star', 100)",
			exDescription: "Will increase the amount of 'assassin stars' you spent. It can be useful if you bought it before starting the bot, and you want to keep track of how many assassin stars you used."
		},
		{
			rettype: null,
			name: "increaseamountbought",
			args: [
				{
					type: "number",
					name: "itemid"
				},
				{
					type: "number",
					name: "amount"
				}
			],
			alternative: true,
			description: "Will increase the amount of items with id <i>itemid</i> you bought by <i>amount</i> units.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "increaseamountlooted",
			args: [
				{
					type: "string",
					name: "itemname"
				},
				{
					type: "number",
					name: "amount"
				}
			],
			description: "Will increase the amount of items <i>itemname</i> you looted by <i>amount</i> units. This function can be used to count loots fished in water elementals for example, or rust armors and legs. The internal loot counter only counts items you actually looted, so some exceptions has to be made.",
			ex: "-- Check FishWaterElemental.lua, in /luascripts/ folder --",
			exDescription: null
		},
		{
			rettype: null,
			name: "increaseamountlooted",
			args: [
				{
					type: "number",
					name: "itemid"
				},
				{
					type: "number",
					name: "amount"
				}
			],
			alternative: true,
			description: "Will increase the amount of items with id <i>itemid</i> you looted by <i>amount</i> units.",
			ex: null,
			exDescription: null
		},
		{
			rettype: null,
			name: "increasemoneyspent",
			args: [
				{
					type: "number",
					name: "amount"
				}
			],
			description: "Will increase the amount of money you spent during your hunt by <i>amount</i>. This function can be used if you want to keep track exactly of how much money you used, so you could use it for travel actions, for example.",
			ex: "say('hi') wait(1500, 2500)\nnpcsay('venore') wait(300, 700)\nnpcsay('yes') wait(300, 700)\nincreasemoneyspent(130)",
			exDescription: "Will increase the amount of money you spent by 130 GPs, after you traveled from 'Carlin' to 'Venore'"
		},
		{
			rettype: "boolean",
			name: "islocation",
			args: [
				{
					type: "optional number",
					name: "range"
				}
			],
			description: "Returns <i>true</i> if the action script is executed at the location where the action waypoint was set and </i>false</i> otherwise. If the optional parameter <i>range</i> is specified, return <i>true/false</i> if you are standing within <i>range</i> tiles of the waypoint location in x or y.",
			ex: "if not islocation(3) then\n\tgotolabel($wptid-1)\nend",
			exDescription: "If used as a cavebot action, it will go to the previous waypoint if you're not in 3 sqms close to the action's location."
		},
		{
			rettype: "number",
			name: "moneytowithdraw",
			args: [
				{
					type: "optional string",
					name: "supplycategories"
				}
			],
			description: "Will calculate how much money you have to withdraw to buy supplies, the value will be rounded up to the closest number. It will also include a random extra cash value (for travels, etc.), this value can be set in Supply options. If you pass the <i>supplycategories</i> parameter it will calculate money only for the supplies that has the category you chose. You may want to use this if you some of your supplies aren't bought at an NPC, but taken from the depot or from a tile in your house.",
			ex: "say('hi') wait(1500, 3000)\nnpcsay('withdraw '..moneytowithdraw('a')) wait(500, 700)\nnpcsay('yes') wait(500, 700)",
			exDescription: "Will calculate how much money you need to withdraw to buy items from the category 'a'."
		},
		{
			rettype: null,
			name: "resetlootcounter",
			args: [

			],
			description: "Will reset the loot counter: clearing amounts of items looted, amounts of items bought and amount of cash spent.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "table",
			name: "getlurelocation",
			args: [

			],
			description: "Returns a table containing the coordinates of the current lure location (<i>.x</i>, <i>.y</i> and <i>.z</i>).",
			ex: "local lure = getlurelocation()\nlocal lurecoordinates = getobjectarea(lure.x, lure.y, lure.z)\nsetposition(0, 0)\ndrawtext('Lure', lurecoordinates.left, lurecoordinates.top)",
			exDescription: "Will draw the text 'Lure' at the current lure coordinates' position."
		},
		{
			rettype: null,
			name: "setlurelocation",
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
			description: "Sets the current lure location to x:<i>posx</i>, y:<i>posy</i>, z:<i>posz</i>.",
			ex: "setlurelocation(33222, 33222, 7)",
			exDescription: "Will set the current lure location to x:33222, y:33222, z:7."
		},
		{
			rettype: null,
			name: "setrefilling",
			args: [
				{
					type: "boolean",
					name: "value"
				}
			],
			description: "Sets the variable <a href=\"lua-variables.html#$refilling\">$refilling</a> to <i>value</i> which can be <i>true</i> or <i>false</i>.",
			ex: "setrefilling(true)",
			exDescription: "Will set the variable <a href=\"lua-variables.html#$refilling\">$refilling</a> to <i>true</i>."
		},
		{
			rettype: "subtitle",
			description: "String Functions",
			exDescription: "These functions are used to manipulate strings in some ways."
		},
		{
			rettype: "string",
			name: "ground",
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
			description: "Returns a formatted string for passing as a ground location to certain script events. It returns a string in the following format: 'ground <i>posx</i> <i>posy</i> <i>posz</i>'.",
			ex: "useitemon('rope', 0, ground(33222, 33222, 7))",
			exDescription: "Will use a 'rope' at location x:33222, y:33222, z:7."
		},
		{
			rettype: "string",
			name: "num",
			args: [
				{
					type: "number",
					name: "numbertoformat"
				}
			],
			description: "Returns a string representation of the number <i>numbertoformat</i>. For example: 1234567 -> '1,234,567'.",
			ex: "auto(200)\nlistas(num($exphour))",
			exDescription: "Will show the current experience rate formatted."
		},
		{
			rettype: "string",
			name: "time",
			args: [
				{
					type: "number",
					name: "times"
				}
			],
			description: "Returns a string representation of a time <i>times</i> (in seconds). Format: 'DD:hh:mm:ss'. For example: 60352 -> '16:45:52'",
			ex: "auto(200)\nlistas(time($timetonextlevel*60))",
			exDescription: "Will show how long it's gonna take to level up."
		},
		{
			rettype: "string",
			name: "timeshort",
			args: [
				{
					type: "number",
					name: "timems"
				}
			],
			description: "Returns a string representation of a time <i>timems</i> (in milliseconds). Format: 'mm:ss.d'. For example: 10353 -> '10.3'",
			ex: "auto(200)\nlistas(timeshort($hastetime))",
			exDescription: "Shows how much time you have left before your haste stats goes out."
		},
		{
			rettype: "string",
			name: "tohex",
			args: [
				{
					type: "number",
					name: "num"
				}
			],
			description: "Returns a string representation of number <i>num</i> in hexadecimal format.",
			ex: "print(tohex(123))",
			exDescription: "Will print 0x7B on the console."
		},
		{
			rettype: "subtitle",
			description: "Navigation Functions",
			exDescription: "These functions are related to the navigation system."
		},
		{
			rettype: null,
			name: "navsay",
			args: [
				{
					type: "string",
					name: "msg"
				}
			],
			description: "Will broadcast a message with content <i>msg</i> at your current navigation channel. You must be in a navi channel to use this function.",
			ex: "navsay('healme')",
			exDescription: "Will send everyone a message containing the message 'healme', possibly asking someone to heal you."
		},
		{
			rettype: null,
			name: "navpm",
			args: [
				{
					type: "string",
					name: "charname"
				},
				{
					type: "string",
					name: "msg"
				}
			],
			description: "Will send a private message with content <i>msg</i> using the navigation system to the character <i>charname</i>. The character must be in the same navigation channel as you, and you must be in a navi channel to use this function.",
			ex: "navpm('bubble', 'combo ' .. $attacked.name)",
			exDescription: "Will send a private message to Bubble asking him to issue a combo at your currently attacked creature."
		},
		{
			rettype: null,
			name: "navsendping",
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
			description: "Will send a ping signal at position <i>posx</i>, <i>posy</i>, <i>posz</i> to all of your allies connected to the Navigation. You can access it using foreach navping.",
			ex: "navping($posx, $posy, $posz)",
			exDescription: "Will send a ping signal at your character's position, so your friends can see where you are in the minimap."
		},
		{
			rettype: "subtitle",
			description: "Database Functions",
			exDescription: "These functions issues events related to the navigation system."
		},
		{
			rettype: "database",
			name: "opendatabase",
			args: [
				{
					type: "string",
					name: "dbname"
				}
			],
			description: "Will open a database at your '/data/custom/' folders. This way you can load and save values to this custom database. Custom databases can only be opened from Hotkeys, Persistents, Cavebot, HUDs and Library scripts.",
			ex: "local db = opendatabase('necrosyalahar')\nlocal amountkilled = db:getvalue('counters', 'necroskilled')",
			exDescription: "This will retrieve the value stored in the database '/data/custom/necrosyalahar.db', in the location: 'counters/necroskilled', and save this value to the variable amount killed."
		},
		{
			rettype: null,
			name: "DB:setvalue",
			args: [
				{
					type: "string",
					name: "sectionname"
				},
				{
					type: "string",
					name: "varname"
				},
				{
					type: "string",
					name: "stringvalue"
				}
			],
			description: "Will set the value of the var <i>varname</i>, located at section <i>sectionname</i>, the value of <i>stringvalue</i>. To use this you must have opened a database first, or use one of the global databases ($botdb, $worlddb, $chardb).",
			ex: "$chardb:setvalue('mychars', 'mainchar', 'Bubble')",
			exDescription: "Will store the value 'Bubble' at $chardb, in the location: 'mychars/mainchar'."
		},
		{
			rettype: null,
			name: "DB:setvalue",
			args: [
				{
					type: "string",
					name: "sectionname"
				},
				{
					type: "string",
					name: "varname"
				},
				{
					type: "number",
					name: "value"
				}
			],
			description: "Will set the value of the var <i>varname</i>, located at section <i>sectionname</i>, the value of <i>value</i>. To use this you must have opened a database first, or use one of the global databases ($botdb, $worlddb, $chardb).",
			ex: "$chardb:setvalue('counters', 'necroskilled', 30)",
			exDescription: "Will store the value 30 at $chardb, in the location: 'counters/necroskilled'."
		},
		{
			rettype: "various",
			name: "DB:getvalue",
			args: [
				{
					type: "string",
					name: "sectionname"
				},
				{
					type: "string",
					name: "varname"
				}
			],
			description: "Returns the value stored at var <i>varname</i>, located at section <i>sectionname</i>. To use this you must have opened a database first, or use one of the global databases ($botdb, $worlddb, $chardb).",
			ex: "local necrosKilled = $chardb:setvalue('counters', 'necroskilled')",
			exDescription: "This will retrieve from $chardb the value located at 'counters/necroskilled' and store it in the variable 'necrosKilled'."
		}
	]
};