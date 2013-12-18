luaFunctions = {
	functionType: "variable",
	functions: [
		{
			rettype: "subtitle",
			description: "Character Variables",
			exDescription: "These variables are used to access your character's information."
		},
		{
			rettype: "string",
			name: "$name",
			description: "Returns your character's name.",
			ex: "cast('exura sio \"' .. $name)",
			exDescription: "Will cast 'heal friend', using your name."
		},
		{
			rettype: "string",
			name: "$worldname",
			description: "Returns your current world name.",
			ex: "print($worldname)",
			exDescription: "Will print on the console the name of the world you're currently playing at."
		},
		{
			rettype: "string",
			name: "$vocation",
			description: "Returns your character's vocation. It can either be: 'none', 'no-vocation', 'knight', 'paladin', 'sorcerer' or 'druid'.",
			ex: "if $vocation == 'druid' then\n\tcast('exura sio \"' .. $name) wait(300, 500)\nelseif $vocation == 'sorcerer' then\n\tcast('exura vita') wait(300, 500)\nend",
			exDescription: "Will cast 'heal friend' on yourself if you are a 'druid'. And 'ultimate healing' if you are a 'sorcerer'."
		},
		{
			rettype: "string",
			name: "$vocshort",
			description: "Returns your character's vocation abbreviated to a short way. It can either be: 'NV', 'K', 'P', 'S' or 'D'.",
			ex: "auto(200)\nlistas($vocshort)",
			exDescription: "Will show your vocation abbreviated."
		},
		{
			rettype: "number",
			name: "$voc",
			description: "Returns your character's vocation flags. None: 0; No-Vocation: 1; Knight: 2; Paladin: 4; Sorcerer: 8; Druid: 16.",
			ex: "if $voc == 2 then\n\tcast('exura ico') wait(300, 500)\nelseif $voc == 2 then\n\tcast('exura') wait(300, 500)\nend",
			exDescription: "Will cast 'wound cleansing' spell if you are a 'knight'. And 'light healing' spell if you are a 'paladin'."
		},
		{
			rettype: "number",
			name: "$id",
			description: "Returns your character's id.",
			ex: "foreach creature m 's' do\n\tif m.id != $id then\n\t\tprint(m.name)\n\tend\nend",
			exDescription: "Will print on console the name of every creature on your screen, except yourself."
		},
		{
			rettype: "number",
			name: "$hp",
			description: "Returns your character's current health.",
			ex: "auto(200)\nif $hp < 50 then\n\tcast('exura') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if your health is below 50. If it is, it will cast 'light healing' spell."
		},
		{
			rettype: "number",
			name: "$maxhp",
			description: "Returns your character's maximum health.",
			ex: "auto(200)\nif $maxhp-$hp > 120 then\n\tcast('exura gran') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you have more than 60 hit points missing. If it is, it will cast 'intense healing' spell."
		},
		{
			rettype: "number",
			name: "$hppc",
			description: "Returns your character's health percentage.",
			ex: "auto(200)\nif $hppc < 60 then\n\tcast('exura san') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you have less than 60% of health. If so, it will cast 'divine healing' spell."
		},
		{
			rettype: "number",
			name: "$mp",
			description: "Returns your character's current mana.",
			ex: "auto(200)\nif $hp < 50 and $mp >= 20 then\n\tcast('exura') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if your health is below 50 and your mana above 20. If it is, it will cast 'light healing' spell."
		},
		{
			rettype: "number",
			name: "$maxmp",
			description: "Returns your character's maximum mana.",
			ex: "auto(200)\nif $maxmp-$mp < 4 then\n\tcast('utevo lux') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if your mana is close to full mana. If so, it will cast 'light' spell."
		},
		{
			rettype: "number",
			name: "$mppc",
			description: "Returns your character's mana percentage.",
			ex: "auto(200)\nif $mppc < 60 then\n\tuseoncreature('great mana potion', $self) wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you have less than 60% of mana. If so, it will use a 'great mana potion' on yourself."
		},
		{
			rettype: "number",
			name: "$soul",
			description: "Returns your character's soul points.",
			ex: "auto(200)\nif $mp >= 400 and $soul >= 4 then\n\tcast('adura vita') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you have mora than 400 of mana, and more than 4 soul points. If so, it will make an 'ultimate healing rune'."
		},
		{
			rettype: "number",
			name: "$cap",
			description: "Returns your character's current capacity.",
			ex: "if $cap < 20 then\n\tgotolabel('godeposit')\nend",
			exDescription: "This action script will check if your cap is lower than 20.00oz. If so, it will go to label 'godeposit'."
		},
		{
			rettype: "number",
			name: "$exp",
			description: "Returns your character's current experience.",
			ex: "auto(200)\nif $exp >= 4200 then\n\tcloseclient()\nend",
			exDescription: "Each 200 milliseconds, it will check if you have more than 4200 of experience. If so, it will close the client."
		},
		{
			rettype: "number",
			name: "$offlinetraining",
			description: "Returns your character's offline training time in minutes.",
			ex: "auto(200)\nif $offlinetraining >= 10*60 then\n\tplaysound('monster.wav')\nend",
			exDescription: "Each 200 milliseconds, it will check if you have more than 10 hours offline training. If so, it will play an alarm."
		},
		{
			rettype: "number",
			name: "$stamina",
			description: "Returns your character's stamina in minutes.",
			ex: "auto(200)\nif $stamina < 15*60 then\n\tcloseclient()\nend",
			exDescription: "Each 200 milliseconds, it will check if you have less than 15 hours left of stamina. If so, it will close the client."
		},
		{
			rettype: "boolean",
			name: "$mounted",
			description: "Returns <i>true</i> if you're currently mounting an animal, <i>false</i> otherwise.",
			ex: "auto(1000, 2500)\nif not ($inpz or $mounted) then \n\tmount()\nend",
			exDescription: "Each 1000~2500 milliseconds, it will check you are not inside a protection zone and not mounted. If so, it will mount on the last mounted animal."
		},
		{
			rettype: "number",
			name: "$posx",
			description: "Returns your character's position <i>x</i>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$posy",
			description: "Returns your character's position <i>y</i>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$posz",
			description: "Returns your character's position <i>z</i>.",
			ex: "auto(200)\nif $posx == 33222 and $posy == 33222 and $posz == 7 then\n\tplaysound('monster.wav')\nend",
			exDescription: "Each 200 milliseconds, it will check if your position is equals to x:33222, y:33222, z:7. If so, it will play an alert with file name: 'monster.wav'"
		},
		{
			rettype: "subtitle",
			description: "Skills Variables",
			exDescription: "These variables are used to access your character's skills."
		},
		{
			rettype: "number",
			name: "$level",
			description: "Returns your character's current level.",
			ex: "init start\n\tlocal curLevel = $level\ninit end\nauto(200)\nif $level > curLevel then\n\tscreenshot()\n\tcurLevel = $level\nend",
			exDescription: "Each 200 milliseconds, it will check if you leveled up. If so, it will take a screenshot."
		},
		{
			rettype: "number",
			name: "$mlevel",
			description: "Returns your character's magic level.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$fist",
			description: "Returns your character's fist fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$club",
			description: "Returns your character's club fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$sword",
			description: "Returns your character's sword fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$axe",
			description: "Returns your character's axe fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$distance",
			description: "Returns your character's distance fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$shielding",
			description: "Returns your character's shielding skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$fishing",
			description: "Returns your character's fishing skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$levelpc",
			description: "Returns the percentage learnt of your character's level.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$mlevelpc",
			description: "Returns the percentage learnt of your character's magic level.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$fistpc",
			description: "Returns the percentage learnt of your fist fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$clubpc",
			description: "Returns the percentage learnt of your character's club fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$swordpc",
			description: "Returns the percentage learnt of your character's sword fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$axepc",
			description: "Returns the percentage learnt of your character's axe fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$distancepc",
			description: "Returns the percentage learnt of your character's distance fighting skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$shieldingpc",
			description: "Returns the percentage learnt of your character's shielding skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$fishingpc",
			description: "Returns the percentage learnt of your character's fishing skill.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "Status Effects Variables",
			exDescription: "These variables are used to access your character's status effects."
		},
		{
			rettype: "boolean",
			name: "$battlesigned",
			description: "Returns <i>true</i> if your character is battle signed, <i>false</i> otherwise.",
			ex: "auto(200)\nif not $battlesigned then\n\tlogout()\nend",
			exDescription: "Each 200 milliseconds, it will check if you are battle signed. If not, it will cast logout."
		},
		{
			rettype: "boolean",
			name: "$bleeding",
			description: "Returns <i>true</i> if your character is bleeding, <i>false</i> otherwise.",
			ex: "auto(200)\nif $bleeding and (vocation == 'knight' or vocation == 'druid') then\n\tcast('exana kor')\nend",
			exDescription: "Each 200 milliseconds, it will check if you are bleeding, and you are a 'knight' or a 'druid'. If so, it will cast 'cure bleeding' spell."
		},
		{
			rettype: "number",
			name: "$bleedingdmg",
			description: "Returns the value of the last physical damage you have taken. When your bleeding stats goes out, this value is set to zero.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: "$burning",
			description: "Returns <i>true</i> if your character is burning, <i>false</i> otherwise.",
			ex: "auto(200)\nif $burning and $mp >= 30 and $vocation == 'druid' then\n\tcast('exana flam') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you are burning, and you're a 'druid' and you have more than 30 of mana. If so, it will cast 'cure burning' spell."
		},
		{
			rettype: "number",
			name: "$burningdmg",
			description: "Returns the value of the last fire damage you have taken. When your burning stats goes out, this value is set to zero.",
			ex: "auto(200)\nif $burningdmg >= 3 and $burningdmg <= 10 and $burning and $vocation == 'druid' then\n\tcast('exana flam') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you're burning, and the last fire damage that you have taken. If you are burning, you're a 'druid', and the damage taken is between 3 and 10 (which could mean you're soul fired), it will cast 'cure burning' spell."
		},
		{
			rettype: "boolean",
			name: "$cursed",
			description: "Returns <i>true</i> if your character is cursed, <i>false</i> otherwise.",
			ex: "auto(200)\nif $cursed and $vocation == 'paladin' then\n\tcast('exana mort') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you are cursed and you are a 'paladin'. If so, it cast 'cure curse' spell."
		},
		{
			rettype: "number",
			name: "$curseddmg",
			description: "Returns the value of the last death damage you have taken. When your cursed stats goes out, this value is set to zero.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: "$dazzled",
			description: "Returns <i>true</i> if your character is dazzled, <i>false</i> otherwise.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: "$drowning",
			description: "Returns <i>true</i> if your character is drowning (underwater), <i>false</i> otherwise.",
			ex: "auto(200)\nif $drowning then\n\tequipitem('helmet of the deep', 'head')\nend",
			exDescription: "Each 200 milliseconds, it will check if you are drowning. If so, it will equip your character with a 'helmet of the deep'."
		},
		{
			rettype: "boolean",
			name: "$drunk",
			description: "Returns <i>true</i> if your character is drunk, <i>false</i> otherwise.",
			ex: "auto(200)\nif $drunk then\n\tequipitem('dwarven ring', 'finger') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you are drunk. If so, it will equip your character with a 'dwarven ring'."
		},
		{
			rettype: "boolean",
			name: "$electrified",
			description: "Returns <i>true</i> if your character is burning, <i>false</i> otherwise.",
			ex: "auto(200)\nif $electrified and $mp >= 30 and $vocation == 'druid' then\n\tcast('exana vis') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you are burning, and you're a 'druid' and you have more than 30 of mana. If so, it will cast 'cure electrification' spell."
		},
		{
			rettype: "number",
			name: "$electrifieddmg",
			description: "Returns the value of the last energy damage you have taken. When your electrified stats goes out, this value is set to zero.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: "$frozen",
			description: "Returns <i>true</i> if your character is frozen, <i>false</i> otherwise.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$frozendmg",
			description: "Returns the value of the last ice damage you have taken. When your ice stats goes out, this value is set to zero.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: "$hasted",
			description: "Returns <i>true</i> if your character is hasted, <i>false</i> otherwise.",
			ex: "auto(200)\nif not $hasted then\n\tcast('utani hur') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you are hasted. If not, it will cast 'haste' spell."
		},
		{
			rettype: "boolean",
			name: "$manashielded",
			description: "Returns <i>true</i> if your character is protected by mana shield, <i>false</i> otherwise.",
			ex: "auto(200)\nif not $manashielded then\n\tcast('utamo vita') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you are mana shielded. If not, it will cast 'magic shield' spell."
		},
		{
			rettype: "boolean",
			name: "$paralyzed",
			description: "Returns <i>true</i> if your character is paralyzed, <i>false</i> otherwise.",
			ex: "auto(200)\nif $paralyzed then\n\tcast('exura') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you are paralyzed. If so, it will cast 'light healing' spell."
		},
		{
			rettype: "boolean",
			name: "$poisoned",
			description: "Returns <i>true</i> if your character is poisoned, <i>false</i> otherwise.",
			ex: "auto(200)\nif $poisoned and $mp >= 30 then\n\tcast('exana pox') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you are poisoned and you have more than 30 of mana. If so, it will cast 'antidote' spell."
		},
		{
			rettype: "number",
			name: "$poisondmg",
			description: "Returns the value of the last poison damage you have taken. When your poison stats goes out, this value is set to zero.",
			ex: "auto(200)\nif $poisondmg > 15 and $poisoned then\n\tcast('exana pox') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you're poisoned, and the last poison damage that you have taken. If you are poisoned, and the damage was higher than 15, it will cast 'antidote' spell."
		},
		{
			rettype: "boolean",
			name: "$pvpsigned",
			description: "Returns <i>true</i> if your character is in a pvp battle, <i>false</i> otherwise.",
			ex: "auto(200)\nif $pvpsigned then\n\tplaysound('playeronscreen.wav')\nend",
			exDescription: "Each 200 milliseconds, it will check if you are in a pvp battle (attacked someone). If so, it will play an alarm."
		},
		{
			rettype: "boolean",
			name: "$pzone",
			description: "Returns <i>true</i> if your character is inside a protection zone, <i>false</i> otherwise.",
			ex: "auto(200)\nif $pzone then\n\tcloseclient()\nend",
			exDescription: "Each 200 milliseconds, it will check if you are inside a protection zone. If so, it will close the client."
		},
		{
			rettype: "boolean",
			name: "$strenghtened",
			description: "Returns <i>true</i> if your character is strenghtened, <i>false</i> otherwise.",
			ex: "auto(200)\nif not $strenghtened then\n\tcast('utito tempo') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you are strengthened. If not, it cast 'blood rage' spell."
		},
		{
			rettype: "subtitle",
			description: "Damage Variables",
			exDescription: "These variables are used to tell you information about the damage you've taken. They're all based on the damage animation that appears high above your character after receiving a damage."
		},
		{
			rettype: "number",
			name: "$deathdmg",
			description: "Returns the value of the last death damage you have taken.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$earthdmg",
			description: "Returns the value of the last poison damage you have taken.",
			ex: "auto(200)\nif $earthdmg > 15 and $poisoned then\n\tcast('exana pox') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you're poisoned, and the last poison damage that you have taken. If you are poisoned, and the damage was higher than 15, it will cast 'antidote' spell."
		},
		{
			rettype: "number",
			name: "$energydmg",
			description: "Returns the value of the last energy damage you have taken.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$firedmg",
			description: "Returns the value of the last fire damage you have taken.",
			ex: "auto(200)\nif $firedmg >= 3 and $firedmg <= 10 and $burning and $vocation == 'druid' then\n\tcast('exana flam') wait(300, 500)\nend",
			exDescription: "Each 200 milliseconds, it will check if you're burning, and the last fire damage that you have taken. If you are burning, you're a 'druid', and the damage taken is between 3 and 10 (which could mean you're soul fired), it will cast 'cure burning' spell."
		},
		{
			rettype: "number",
			name: "$healdmg",
			description: "Returns the value of the last healing animation that happened above your character.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$icedmg",
			description: "Returns the value of the last ice damage you have taken.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$holydmg",
			description: "Returns the value of the last holy damage you have taken.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$manadmg",
			description: "Returns the value of the last damage that you have taken on your mana shield.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$physicaldmg",
			description: "Returns the value of the last physical damage you have taken.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "Timer Variables",
			exDescription: "These variables are used to access the bot's timers."
		},
		{
			rettype: "number",
			name: "$hastetime",
			description: "Returns the time in milliseconds remaining on the haste spell.",
			ex: "auto(200)\nif $hastetime <= 2000 then\n\tcast('utani gran hur') wait(300, 500)\nend",
			exDescription: "Will cast 'strong haste' spell if you have less than 2 seconds left of haste."
		},
		{
			rettype: "number",
			name: "$invistime",
			description: "Returns the time in milliseconds remaining on the invisibility spell.",
			ex: "auto(200)\nif $invistime <= 2000 then\n\tcast('utana vid') wait(300, 500)\nend",
			exDescription: "Will cast 'invisibility' spell if you have less than 2 seconds left of invisibility."
		},
		{
			rettype: "number",
			name: "$mshieldtime",
			description: "Returns the time in milliseconds remaining on the magic shield spell.",
			ex: "auto(200)\nif $mshieldtime <= 2000 then\n\tcast('utamo vita') wait(300, 500)\nend",
			exDescription: "Will cast 'magic shield' spell if you have less than 2 seconds left of magic shield."
		},
		{
			rettype: "number",
			name: "$strenghtentime",
			description: "Returns the time in milliseconds remaining on the strenghten spell.",
			ex: "auto(200)\nif $strenghtentime <= 2000 then\n\tcast('utito tempo san') wait(300, 500)\nend",
			exDescription: "Will cast 'sharpshooter' spell if you have less than 2 seconds left of strength."
		},
		{
			rettype: "subtitle",
			description: "Equipment Variables",
			exDescription: "These variables are used to access your character's equipment slots."
		},
		{
			rettype: "item",
			name: "$neck",
			description: "Returns the item in your neck slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: "auto(1000)\nif $neck.id ~= 3057 then\n\tprinterror('Be careful! You're not wearing an 'amulet of loss'.')\nend",
			exDescription: "Will print an error message warning you if you're not wearing an 'amulet of loss'."
		},
		{
			rettype: "item",
			name: "$head",
			description: "Returns the item in your head slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "$back",
			description: "Returns the item in your back slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "$rhand",
			description: "Returns the item in your right hand slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "$chest",
			description: "Returns the item in your chest slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "$lhand",
			description: "Returns the item in your left hand slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "$legs",
			description: "Returns the item in your legs slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "$finger",
			description: "Returns the item in your finger slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "$feet",
			description: "Returns the item in your feet slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "item",
			name: "$belt",
			description: "Returns the item in your belt slot. If you need more info about the item data structure, access <a href=\"lua-customtypes.html#item\">this</a>.",
			ex: "auto(200)\nif $belt.count < 10 then\n\tequipitem($belt.id, 'belt') wait(300, 500)\nend",
			exDescription: "Will refill your ammo if you have less than 10 units on the belt slot."
		},
		{
			rettype: "subtitle",
			description: "Creature Variables",
			exDescription: "These variables are used to access creature information."
		},
		{
			rettype: "creature",
			name: "$self",
			description: "Returns your character's creature. If you need more info about the creature data structure, access <a href=\"lua-customtypes.html#creature\">this</a>.",
			ex: "auto(200)\nif $self.lightintensity == 0 then\n\tcast('utevo gran lux') wait(300, 500)\nend",
			exDescription: "Will cast 'great light' spell if you're not emitting any light."
		},
		{
			rettype: "creature",
			name: "$attacked",
			description: "Returns the current attacked creature (the one with a red square). If you need more info about the creature data structure, access <a href=\"lua-customtypes.html#creature\">this</a>.",
			ex: "if $attacked.id ~= 0 and $attacked.isshootable then\n\tcast('exori flam') wait(300, 500)\nend",
			exDescription: "Will cast 'flame strike' spell if you're currently attacking a target, and it is shootable."
		},
		{
			rettype: "creature",
			name: "$followed",
			description: "Returns the current followed creature (the one with a green square). If you need more info about the creature data structure, access <a href=\"lua-customtypes.html#creature\">this</a>.",
			ex: "if $followed.id == 0 then\n\tfollow('Bubble') wait(300, 500)\nend",
			exDescription: "Will follow the character 'Bubble' if you are not currently following anyone."
		},
		{
			rettype: "creature",
			name: "$target",
			description: "Returns the creature that you have last attacked. If you need more info about the creature data structure, access <a href=\"lua-customtypes.html#creature\">this</a>.",
			ex: "attack($target)",
			exDescription: "Will attack the last creature you have attacked."
		},
		{
			rettype: "creature",
			name: "$targetingtarget",
			description: "Returns the creature being targetted by the Targeting System. If you need more info about the creature data structure, access <a href=\"lua-customtypes.html#creature\">this</a>.",
			ex: "if $targetingtarget.id ~= 0 and $targetingtarget.isshootable then\n\tuseoncreature('sudden death rune', $targetingtarget) wait(300, 500)\nend",
			exDescription: "Will shoot a 'sudden death rune' on the targeting creature."
		},
		{
			rettype: "creature",
			name: "$mattacker",
			description: "Returns the monster that has last attacked you within 3 seconds. If you need more info about the creature data structure, access <a href=\"lua-customtypes.html#creature\">this</a>.",
			ex: "auto(200) if $mattacker.id ~= 0 then\n\tplaysound('monster.wav') wait(3000)\nend",
			exDescription: "Will play an alarm if a monster attacked you in the last 3 seconds."
		},
		{
			rettype: "creature",
			name: "$pattacker",
			description: "Returns the player that has last attacked you within 3 seconds. If you need more info about the creature data structure, access <a href=\"lua-customtypes.html#creature\">this</a>.",
			ex: "auto(200) if $pattacker.id ~= 0 then\n\tprint($pattacker.name .. ' is attacking you!')\n\tplaysound('monster.wav') wait(3000)\nend",
			exDescription: "Will play an alarm if a player attacked you in the last 3 seconds, and will print his name on the console."
		},
		{
			rettype: "subtitle",
			description: "Screen Information Variables",
			exDescription: "These variables are used to access information about the game screen, such as messages, effects, projectiles and animated texts."
		},
		{
			rettype: "message",
			name: "$lastmsg",
			description: "Returns the data structure of the latest message received in the client. If you need more info about the message data structure, access <a href=\"lua-customtypes.html#message\">this</a>.",
			ex: "auto(100)\nif $lastmsg.content == 'heal me please' and $lastmsg.sender == 'Bubble' then\n\tcast('exura sio \"bubble')\nend",
			exDescription: "Will cast 'heal friend' on Bubble if she asks: 'heal me please'."
		},
		{
			rettype: "message",
			name: "$lastnpcmsg",
			description: "Returns the data structure of the latest NPC message received in the client. If you need more info about the message data structure, access <a href=\"lua-customtypes.html#message\">this</a>.",
			ex: "auto(100)\nif $lastnpcmsg.content == 'You don't have enough money.' then\n\tsetsetting('Cavebot/Enabled', 'no')\nend",
			exDescription: "Will disable cavebot if you get a \"You don't have enough money\" message from a NPC."
		},
		{
			rettype: "projectile",
			name: "$lastprojectile",
			description: "Returns the data structure of the latest projectile received in the client. If you need more info about the projectile data structure, access <a href=\"lua-customtypes.html#projectile\">this</a>.",
			ex: "auto(100)\nif $lastprojectile.tox == $attacked.posx and $lastprojectile.toy == $attacked.posy and $lastprojectile.fromx == $posx and $lastprojectile.fromy == $posy then\n\tcast('exori vis')\nend",
			exDescription: "Will cast 'energy strike' on the current attacked creature right after a projectile was shot from you in the direction of your target. Useful to synchronize wands and spell attacks, and to avoid getting skulls by casting spells at another players."
		},
		{
			rettype: "effect",
			name: "$lasteffect",
			description: "Returns the data structure of the latest effect received in the client. If you need more info about the effect data structure, access <a href=\"lua-customtypes.html#effect\">this</a>.",
			ex: "auto(100)\nif $lasteffect.type == 3 and $lasteffect.posx == $attacked.posx and $lasteffect.posy == $attacked.posy then\n\tplaysound('monster.wav')\nend",
			exDescription: "Will play a sound if the last effect was 'poff' at the current attacked creature's location."
		},
		{
			rettype: "effect",
			name: "$lastanimatedtext",
			description: "Returns the data structure of the latest animated text received in the client. If you need more info about the animated text data structure, access <a href=\"lua-customtypes.html#animatedtext\">this</a>.",
			ex: "auto(100)\nif $lastanimatedtext.color == 155 and $lastanimatedtext.posx == $posx and $lastanimatedtext.posy == $posy then\n\tprint($lastanimatedtext.content)\nend",
			exDescription: "Will print on the console the content of the last animated text, if that text has the same color as 'energy damages' and happens above your character."
		},
		{
			rettype: "subtitle",
			description: "Client Information Variables",
			exDescription: "These variables are used to access information about the client."
		},
		{
			rettype: "boolean",
			name: "$connected",
			description: "Returns <i>true</i> if you are connected to the game world, <i>false</i> otherwise.",
			ex: "auto(1000) if not $connected then\n\tplaysound('disconnected.wav')\nend",
			exDescription: "Will play an alarm if your character is disconnected."
		},
		{
			rettype: "string",
			name: "$attackmode",
			description: "Returns your current attack mode. It can be 'defensive', 'balanced' and 'offensive'.",
			ex: "auto(2000) if $attackmode ~= 'offensive' then\n\tsetattackmode('offensive', $chasemode) wait(1000)\nend",
			exDescription: "Will set the attack mode to offensive if it's not offensive yet."
		},
		{
			rettype: "string",
			name: "$chasemode",
			description: "Returns your current chase mode. It can be 'stand' and 'chase'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: "$pvpmode",
			description: "Returns your current pvp mode. It can be 'dove', 'white', 'yellow' and 'red'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: "$pvpsecurity",
			description: "Returns your current pvp security mode. It can be 'secure' and 'normal'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: "$battleopen",
			description: "Returns <i>true</i> if the 'battle window' is open, <i>false</i> otherwise.",
			ex: "auto(500) if not $battleopen then\nopenbattlelist() wait(1000)\nend",
			exDescription: "Will automatically open the battle window if it's closed."
		},
		{
			rettype: "boolean",
			name: "$tradeopen",
			description: "Returns <i>true</i> if the 'trade window' is open, <i>false</i> otherwise.",
			ex: "if not $tradeopen then\n\tsay('hi') wait(1700, 2300)\n\tnpcsay('trade') wait(500, 1000)\nend",
			exDescription: "Used as an action waypoint. Will check if the trade window is open. If it's not, say: 'hi', wait some time for the NPC channel to be open, then say 'trade'."
		},
		{
			rettype: "boolean",
			name: "$minimized",
			description: "Returns <i>true</i> if the Tibia Client is minimized, <i>false</i> otherwise.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "boolean",
			name: "$focused",
			description: "Returns <i>true</i> if the Tibia Client is the window currently focused, <i>false</i> otherwise.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: "$typedtext",
			description: "Returns the currently typed text in the chat window.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: "$writtentext",
			description: "Returns the currently written text in the 'Edit text' window.",
			ex: "if $writtentext != 'Bubble\\nVenore' then\n\tprinterror('The label destination is wrong!')\nend",
			exDescription: "Will print an error if the label destination isn't written to 'Bubble', at 'Venore'. NOTE: new lines are indicated by the characters '\\n'."
		},
		{
			rettype: "string",
			name: "$writtentextinfo",
			description: "Returns the author and message date in the currently open 'Edit text' window. The information is separated by colons (':').",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: "$openmenuname",
			description: "Returns the name of the currently open menu/window. If it's a context menu (with options like Attack/Use/Open etc), it will return 'Context'.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "Statistics Variables",
			exDescription: "These variables are used to access some bot statistics, such as experience rates, or time to next level."
		},
		{
			rettype: "number",
			name: "$exphour",
			description: "Returns the experience rate you're currently doing. It's the same value shown in your skill window.",
			ex: "setposition(200, 200)\ndrawtext('Exp/Hour: ' .. $exphour, 0, 0)",
			exDescription: "Shows in a HUD how much of experience/hour you are currently making."
		},
		{
			rettype: "number",
			name: "$expgained",
			description: "Returns how much of experience you have gained since the bot started.",
			ex: "setposition(200, 200)\ndrawtext('Exp Gained: ' .. $expgained, 0, 13)",
			exDescription: "Shows in a HUD how much of experience you have gained so far."
		},
		{
			rettype: "number",
			name: "$exptonextlevel",
			description: "Returns how much of experience you still need to get to achieve the next level.",
			ex: "setposition(200, 200)\ndrawtext('Exp Left: ' .. $expgained, 0, 26)",
			exDescription: "Shows in a HUD how much of experience left to the next level."
		},
		{
			rettype: "number",
			name: "$timetonextlevel",
			description: "Returns the time left in minutes to achieve the next level, considering the current experience rate.",
			ex: "setposition(200, 200)\ndrawtext('Time To Level: ' .. time($timetonextlevel*60), 0, 39)",
			exDescription: "Shows in a HUD how long it's gonna take to achieve the next level."
		},
		{
			rettype: "subtitle",
			description: "Bot State Variables",
			exDescription: "These variables are used to access some states of the bot."
		},
		{
			rettype: "boolean",
			name: "$targeting",
			description: "Returns <i>true</i> if the cavebot is enabled, <i>false</i> otherwise.",
			ex: "if $targeting then\n\tsetsetting('Targeting/Enabled', 'no')\nelse\n\tsetsetting('Targeting/Enabled', 'yes')\nend",
			exDescription: "Will toggle the targeting state. In other words, if the targeting is enabled, it will disable it. If it's disabled, it will enable it."
		},
		{
			rettype: "boolean",
			name: "$looting",
			description: "Returns <i>true</i> if the cavebot is enabled, <i>false</i> otherwise.",
			ex: "if $looting then\n\tsetsetting('Looting/Enabled', 'no')\nelse\n\tsetsetting('Looting/Enabled', 'yes')\nend",
			exDescription: "Will toggle the looting state. In other words, if the looting is enabled, it will disable it. If it's disabled, it will enable it."
		},
		{
			rettype: "boolean",
			name: "$cavebot",
			description: "Returns <i>true</i> if the cavebot is enabled, <i>false</i> otherwise.",
			ex: "if $cavebot then\n\tsetsetting('Cavebot/Enabled', 'no')\nelse\n\tsetsetting('Cavebot/Enabled', 'yes')\nend",
			exDescription: "Will toggle the cavebot state. In other words, if the cavebot is enabled, it will disable it. If it's disabled, it will enable it."
		},
		{
			rettype: "string",
			name: "$wptsection",
			description: "Returns the name of the current waypoint section.",
			ex: "if $wptsection == 'gotocity' and $standtime >= 10000 then\n\tgotolabel(0, 'hunt')\nend",
			exDescription: "If you are in the waypoint section named 'gotocity' and you are standing at the same SQM for longer than 10 seconds it will go to the first label of the section named 'hunt'."
		},
		{
			rettype: "string",
			name: "$wpttype",
			description: "Returns the current waypoint type.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$wptid",
			description: "Returns the current waypoint id. Keep in mind that you should also check the section to fully identify the waypoint.",
			ex: "gotolabel($wptid-1)",
			exDescription: "Goes to the previous waypoint."
		},
		{
			rettype: "number",
			name: "$wptx",
			description: "Returns the current waypoint position <i>x</i>.",
			ex: "if $posx == $wptx and $posy == $posy and $posz == $wptz then\n\tgotolabel($wptid+1)\nelse\n\tgotolabel($wptid-1)\nend",
			exDescription: "Goes to the next waypoint if you are exactly at the waypoint's position, otherwise it goes to the previous one."
		},
		{
			rettype: "number",
			name: "$wpty",
			description: "Returns the current waypoint position <i>y</i>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$wptz",
			description: "Returns the current waypoint position <i>z</i>.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "string",
			name: "$lastlabel",
			description: "Returns the name of the last label that the cavebot has went through.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$lootaccuracy",
			description: "Returns the percentage of bodies that was successfully looted by the looting system.",
			ex: "auto(200)\nlistas('Looting accuracy: ' .. $lootaccuracy)",
			exDescription: "Will show the looting accuracy in a 'list as' HUD."
		},
		{
			rettype: "number",
			name: "$lootsaround",
			description: "Returns how many loot bodies are around. You can use this to avoid performing some action with bodies around you.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$lootbodies",
			description: "Returns the amount of loot bodies on the looting queue.",
			ex: "setposition(100, 200)\ndrawtext('Loot Bodies: ' .. $lootbodies, 0, 0)",
			exDescription: "A simple HUD to show how many bodies are yet to be looted."
		},
		{
			rettype: "number",
			name: "$lastonto",
			description: "Returns the last container which had space during the last moveitemsonto(...) event. To reset, after you have emptied/shuffled the relevant containers, call 'clearlastonto()'.",
			ex: "if $lastonto > 20 then\n\tclearlastonto()\nend",
			exDescription: "Clears the last <i>onto</i> container if the current <i>onto</i> index is higher than 20."
		},
		{
			rettype: "number",
			name: "$moneyspent",
			description: "Returns how much money was spent already. To increase this value, check <i>increasemoneyspent</i> function.",
			ex: "auto(200)\nlistas('Money spent: ' .. $moneyspent)",
			exDescription: "Will show how much money you have spent in a 'list as' HUD."
		},
		{
			rettype: "boolean",
			name: "$openingbps",
			description: "Returns <i>true</i> if the open backpacks at login or open next backpack system is currently opening backpacks, <i>false</i> otherwise.",
			ex: "auto(100)\nif $openingbps then\n\tpausewalking(1000)\nend",
			exDescription: "Will pause the cavebot walking if the bot is currently trying to open backpacks."
		},
		{
			rettype: "boolean",
			name: "$refilling",
			description: "Returns <i>true</i> if you're currently refilling. This variable can be used to turn alerts off if you're currently going to the city, for example.",
			ex: "auto(200)\nif not $refilling and paround(0) > 0 then\n\tplaysound('playeronscreen.wav')\nend",
			exDescription: "Will play the sound 'playeronscreen.wav' only if you're not currently refilling and there are players around you."
		},
		{
			rettype: "number",
			name: "$balance",
			description: "Returns the last bank balance amount reported by an NPC.",
			ex: "if $balance >= 2000 then\n\tnpcsay('withdraw' .. 2000)\nelse\n\tsetsetting('Cavebot/Enabled', 'no')\n\tsetsetting('Targeting/Enabled', 'no')\nend",
			exDescription: "Disables the cavebot and targeting if you don't have more than 2000 of gold on your account. If you do have it, it will withdraw these 2000 gold pieces."
		},
		{
			rettype: "boolean",
			name: "$trapped",
			description: "Returns <i>true</i> if the targeting system is trapped, <i>false</i> otherwise. Note: currently, the targeting system must be running for it to work.",
			ex: "auto(100)\nif $trapped then\n\tplaysound('monster.wav')\nend",
			exDescription: "Will play an alarm if you are currently trapped."
		},
		{
			rettype: "table",
			name: "$curscript",
			description: "Returns a table containing the <i>name</i> and <i>type</i> of the current script.",
			ex: "print($curscript.name)",
			exDescription: "Will print the name of the current script on the console."
		},
		{
			rettype: "subtitle",
			description: "Server Response Variables",
			exDescription: "These variables are used to identify possible problems on the connection between you and the Tibia server. Which may be useful to warn you about lags or freezes."
		},
		{
			rettype: "number",
			name: "$ping",
			description: "Returns the last calculated ping value, in milliseconds.",
			ex: "setposition(100, 200)\ndrawtext('Ping: ' .. $ping, 0, 13)",
			exDescription: "A simple HUD to show your current ping."
		},
		{
			rettype: "number",
			name: "$pingaverage",
			description: "Returns the average of the last 6 obtained ping values, in milliseconds.",
			ex: "for i=1,4 do\n\tuseitem('ham') wait($pingaverage*0.3, $pingaverage*0.4)\nend",
			exDescription: "Will eat 4 hams, waiting a random time based on your ping average."
		},
		{
			rettype: "number",
			name: "$idlerecvtime",
			description: "Returns the time in milliseconds since the last packet was received from the server.",
			ex: "auto(100)\nif $idlerecvtime >= 2500 then\n\tplaysound('freeze.wav')\nend",
			exDescription: "Will play an alarm if the last packet was received more than 2.5 seconds ago."
		},
		{
			rettype: "subtitle",
			description: "Timer Variables",
			exDescription: "These variables can be used to check the time between some actions, or how long some condition has been satisfied."
		},
		{
			rettype: "number",
			name: "$standtime",
			description: "Returns the time in milliseconds that your character is standing at the same position.",
			ex: "auto(100)\nif $standtime >= 30000 then\n\tplaysound('monster.wav')\nend",
			exDescription: "Will play an alarm your character is standing at the same position for more than 30 seconds. Good to detect a broken path on your waypoint, or if someone is blocking your way."
		},
		{
			rettype: "number",
			name: "$timems",
			description: "Returns the time in milliseconds since the bot has started.",
			ex: "init start\n\tlocal timestart = $timems\ninit end\nauto(100)\nlistas($timems-timestart)",
			exDescription: "Will show how many milliseconds has passed since you started this script."
		},
		{
			rettype: "number",
			name: "$openmenutime",
			description: "Returns the time in milliseconds that a menu in the client has been open.",
			ex: "auto(100)\nif $openmenutime >= 5000 then\n\tplaysound('monster.wav')\nend",
			exDescription: "Will play an alarm if the time since a menu is open is higher than 5 seconds."
		},
		{
			rettype: "number",
			name: "$clientctrltime",
			description: "Returns the time in milliseconds that the control key has been held for in the client.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$clientshifttime",
			description: "Returns the time in milliseconds that the shift key has been held for in the client.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$ctrltime",
			description: "Returns the time in milliseconds that the control key was physically held for by the bot.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$shifttime",
			description: "Returns the time in milliseconds that the shift key was physically held for by the bot.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$targettime",
			description: "Returns the time in milliseconds since you have been targeting the same target.",
			ex: "auto(200)\nif $targettime > 30000 then\n\tplaysound('monster.wav')\nend",
			exDescription: "Will play an alarm if you have been targeting the same target for over 30 seconds."
		},
		{
			rettype: "subtitle",
			description: "HUDs Variables",
			exDescription: "These variables are to be used with HUDs. They return informations about the screen, so that you can position your HUDs in the desired position."
		},
		{
			rettype: "rectangle",
			name: "$clientwin",
			description: "Returns the rectangle containing the measurements of the client window. If you need more info about the rectangle data structure, access <a href=\"lua-customtypes.html#rectangle\">this</a>.",
			ex: "setposition($clientwin.left + 20, $clientwin.top + 10)\ndrawtext('Hello world!', 0, 0)",
			exDescription: "Adds a text 20 pixels to the right of the left edge of the client window, and 10 pixels below the top edge of the client window."
		},
		{
			rettype: "rectangle",
			name: "$worldwin",
			description: "Returns the rectangle containing the measurements of the world window. If you need more info about the rectangle data structure, access <a href=\"lua-customtypes.html#rectangle\">this</a>.",
			ex: "setposition($worldwin.right - 200, $worldwin.bottom - 13)\ndrawtext('Hello world!', 0, 0)",
			exDescription: "Adds a text 200 pixels to the left of the right edge of the world window, and 13 pixels above the bottom edge of the world window."
		},
		{
			rettype: "rectangle",
			name: "$screenwin",
			description: "Returns the rectangle containing the measurements of the desktop window. If you need more info about the rectangle data structure, access <a href=\"lua-customtypes.html#rectangle\">this</a>.",
			ex: "print('Your resolution: ' ..$screenrect.width.. 'x' ..$screenrect.height)",
			exDescription: "Will print your resolution on the console."
		},
		{
			rettype: "point",
			name: "$cursor",
			description: "Returns your cursor's position. You can access it's position <i>x</i> and <i>y</i>.",
			ex: "setposition($cursor.x, $cursor.y)\ndrawtext('Here is your mouse')",
			exDescription: "Adds a text that follow your cursor."
		},
		{
			rettype: "mouseinfo",
			name: "$cursorinfo",
			description: "Returns information about your cursor's position. This can be used to check the item ID of items.",
			ex: "auto(200)\n\nlocal info = $cursorinfo\nlistas('x: '..info.x..', y: '..info.y..', z:'..info.z..'. ID: '..info.id..' ('..info.count..')')",
			exDescription: "Will show in a 'list as' HUD information about your cursor."
		},
		{
			rettype: "boolean",
			name: "$windowsxp",
			description: "Returns <i>true</i> if your operational system is Windows XP, <i>false</i> otherwise. This is useful because Windows XP system doesn't allow transparent window, so you can set a color to the background of yuor HUDs.",
			ex: "if $windowsxp then\n\tsetbkgcolorxp(0xFFFFFF)\nend",
			exDescription: "If you are using Windows XP, it will set the color of the background of the HUD to 'white'."
		},
		{
			rettype: "subtitle",
			description: "Events Variables",
			exDescription: "These variables are used to keep acquire information about the input events queue."
		},
		{
			rettype: "number",
			name: "$cureventid",
			description: "Returns the id of the current running event.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "number",
			name: "$cureventtype",
			description: "Returns the type of the current running event.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "table",
			name: "$curevent",
			description: "Returns a table containing information about the current running event.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "Navigation Variables",
			exDescription: "These variables returns information about the Navigation System."
		},
		{
			rettype: "boolean",
			name: "$navigation",
			description: "Returns <i>true</i> if you are currently logged in to a Navigation room, <i>false</i> otherwise.",
			ex: null,
			exDescription: null
		},
		{
			rettype: "subtitle",
			description: "Database Variables",
			exDescription: "These variables are used to access and store information in the bot's databases."
		},
		{
			rettype: "database",
			name: "$botdb",
			description: "Used to access the general bot database (/data/windbot.db).",
			ex: null,
			exDescription: null
		},
		{
			rettype: "database",
			name: "$worlddb",
			description: "Used to access the world's database (/data/worlds/yourworldname.db).",
			ex: null,
			exDescription: null
		},
		{
			rettype: "database",
			name: "$chardb",
			description: "Used to access the character's database (/data/chars/yourcharname.db).",
			ex: null,
			exDescription: null
		}
	]
};