export function determineColor(name) {
  if (blackPokemons.includes(name)) {
    return "black";
  }

  if (bluePokemons.includes(name)) {
    return "blue";
  }

  if (brownPokemons.includes(name)) {
    return "brown";
  }

  if (grayPokemons.includes(name)) {
    return "gray";
  }

  if (greenPokemons.includes(name)) {
    return "green";
  }

  if (pinkPokemons.includes(name)) {
    return "pink";
  }

  if (purplePokemons.includes(name)) {
    return "purple";
  }

  if (redPokemons.includes(name)) {
    return "red";
  }

  if (whitePokemons.includes(name)) {
    return "white";
  }

  if (yellowPokemons.includes(name)) {
    return "yellow";
  }
}

const blackPokemons = [
  "snorlax",
  "murkrow",
  "unown",
  "sneasel",
  "umbreon",
  "houndour",
  "houndoom",
  "mawile",
  "spoink",
  "seviper",
  "shuppet",
  "duskull",
  "claydol",
  "banette",
  "dusclops",
  "chatot",
  "munchlax",
  "honchkrow",
  "giratina",
  "darkrai",
  "blitzle",
  "weavile",
  "dusknoir",
  "zebstrika",
  "sigilyph",
  "yamask",
  "lampent",
  "zekrom",
  "scatterbug",
  "spewpa",
  "pikipek",
  "salandit",
  "trumbeak",
  "toucannon",
  "salazzle",
  "pyukumuku",
  "xurkitree",
  "guzzlord",
  "necrozma",
  "rolycoly",
  "carkol",
  "coalossal",
  "spectrier",
  "chandelure",
];

const bluePokemons = [
  "squirtle",
  "nidoran-f",
  "oddish",
  "poliwag",
  "tentacool",
  "wartortle",
  "blastoise",
  "nidorina",
  "nidoqueen",
  "gloom",
  "golduck",
  "poliwhirl",
  "poliwrath",
  "tentacruel",
  "tangela",
  "horsea",
  "lapras",
  "omanyte",
  "articuno",
  "dratini",
  "seadra",
  "gyarados",
  "vaporeon",
  "omastar",
  "dragonair",
  "totodile",
  "chinchou",
  "wooper",
  "heracross",
  "croconaw",
  "feraligatr",
  "lanturn",
  "marill",
  "azumarill",
  "jumpluff",
  "quagsire",
  "wobbuffet",
  "phanpy",
  "suicune",
  "mudkip",
  "taillow",
  "surskit",
  "azurill",
  "kingdra",
  "marshtomp",
  "swampert",
  "swellow",
  "masquerain",
  "loudred",
  "exploud",
  "meditite",
  "wailmer",
  "swablu",
  "wynaut",
  "spheal",
  "clamperl",
  "bagon",
  "beldum",
  "sharpedo",
  "wailord",
  "altaria",
  "whiscash",
  "chimecho",
  "sealeo",
  "walrein",
  "huntail",
  "salamence",
  "metang",
  "regice",
  "latios",
  "kyogre",
  "piplup",
  "shinx",
  "cranidos",
  "gible",
  "riolu",
  "croagunk",
  "prinplup",
  "empoleon",
  "luxio",
  "luxray",
  "rampardos",
  "gabite",
  "garchomp",
  "lucario",
  "finneon",
  "mantyke",
  "azelf",
  "phione",
  "manaphy",
  "oshawott",
  "panpour",
  "roggenrola",
  "woobat",
  "lumineon",
  "tangrowth",
  "glaceon",
  "dewott",
  "samurott",
  "simipour",
  "boldore",
  "gigalith",
  "swoobat",
  "tympole",
  "sawk",
  "tirtouga",
  "ducklett",
  "karrablast",
  "elgyem",
  "palpitoad",
  "seismitoad",
  "carracosta",
  "eelektrik",
  "eelektross",
  "cryogonal",
  "deino",
  "cobalion",
  "thundurus",
  "froakie",
  "inkay",
  "zweilous",
  "hydreigon",
  "frogadier",
  "greninja",
  "meowstic",
  "clauncher",
  "amaura",
  "bergmite",
  "xerneas",
  "popplio",
  "wishiwashi",
  "mareanie",
  "clawitzer",
  "aurorus",
  "avalugg",
  "primarina",
  "vikavolt",
  "toxapex",
  "komala",
  "cosmog",
  "sobble",
  "rookidee",
  "blipbug",
  "cosmoem",
  "drizzile",
  "inteleon",
  "corvisquire",
  "cramorant",
  "eiscue",
  "arctozolt",
  "arctovish",
  "zacian",
  "metagross",
  "toxicroak",
  "malamar",
  "brionne",
  "grapploct",
];

const brownPokemons = [
  "weedle",
  "pidgey",
  "spearow",
  "vulpix",
  "diglett",
  "mankey",
  "growlithe",
  "abra",
  "geodude",
  "pidgeotto",
  "pidgeot",
  "raticate",
  "fearow",
  "dugtrio",
  "primeape",
  "arcanine",
  "kadabra",
  "alakazam",
  "graveler",
  "farfetchd",
  "doduo",
  "cubone",
  "kangaskhan",
  "staryu",
  "pinsir",
  "tauros",
  "eevee",
  "kabuto",
  "dodrio",
  "marowak",
  "hitmonlee",
  "hitmonchan",
  "kabutops",
  "dragonite",
  "sentret",
  "hoothoot",
  "teddiursa",
  "swinub",
  "furret",
  "noctowl",
  "sudowoodo",
  "ursaring",
  "piloswine",
  "stantler",
  "entei",
  "zigzagoon",
  "seedot",
  "shroomish",
  "slakoth",
  "hitmontop",
  "nuzleaf",
  "shiftry",
  "slaking",
  "shedinja",
  "hariyama",
  "torkoal",
  "spinda",
  "trapinch",
  "baltoy",
  "feebas",
  "regirock",
  "chimchar",
  "starly",
  "bidoof",
  "buizel",
  "buneary",
  "bonsly",
  "hippopotas",
  "infernape",
  "staravia",
  "staraptor",
  "bibarel",
  "floatzel",
  "lopunny",
  "hippowdon",
  "heatran",
  "patrat",
  "lillipup",
  "watchog",
  "sandile",
  "conkeldurr",
  "krokorok",
  "sawsbuck",
  "beheeyem",
  "stunfisk",
  "bouffalant",
  "vullaby",
  "landorus",
  "bunnelby",
  "litleo",
  "skiddo",
  "honedge",
  "mandibuzz",
  "diggersby",
  "pyroar",
  "gogoat",
  "doublade",
  "aegislash",
  "binacle",
  "skrelp",
  "tyrunt",
  "phantump",
  "pumpkaboo",
  "volcanion",
  "rowlet",
  "yungoos",
  "rockruff",
  "mudbray",
  "barbaracle",
  "dragalge",
  "trevenant",
  "gourgeist",
  "dartrix",
  "decidueye",
  "gumshoos",
  "lycanroc",
  "mudsdale",
  "sandygast",
  "minior",
  "skwovet",
  "nickit",
  "palossand",
  "greedent",
  "thievul",
  "arrokuda",
  "clobbopus",
  "golem",
  "monferno",
  "mamoswine",
  "barraskewda",
  "perrserker",
];

const grayPokemons = [
  "machop",
  "machoke",
  "machamp",
  "magnemite",
  "onix",
  "rhyhorn",
  "magneton",
  "rhydon",
  "misdreavus",
  "pineco",
  "qwilfish",
  "remoraid",
  "steelix",
  "skarmory",
  "poochyena",
  "nincada",
  "nosepass",
  "donphan",
  "pupitar",
  "mightyena",
  "aron",
  "volbeat",
  "barboach",
  "anorith",
  "castform",
  "snorunt",
  "relicanth",
  "lairon",
  "aggron",
  "armaldo",
  "glalie",
  "registeel",
  "shieldon",
  "glameow",
  "bastiodon",
  "purugly",
  "pidove",
  "drilbur",
  "magnezone",
  "rhyperior",
  "probopass",
  "stoutland",
  "tranquill",
  "unfezant",
  "excadrill",
  "timburr",
  "zorua",
  "minccino",
  "ferroseed",
  "klink",
  "whirlipede",
  "zoroark",
  "cinccino",
  "escavalier",
  "ferrothorn",
  "klang",
  "durant",
  "terrakion",
  "kyurem",
  "espurr",
  "carbink",
  "klefki",
  "grubbin",
  "wimpod",
  "type-null",
  "togedemaru",
  "jangmo-o",
  "magearna",
  "marshadow",
  "stakataka",
  "meltan",
  "silvally",
  "hakamo-o",
  "kommo-o",
  "melmetal",
  "raboot",
  "stonjourner",
  "kubfu",
  "herdier",
  "gurdurr",
  "klinklang",
  "obstagoon",
  "runerigus",
  "urshifu",
  "golisopod",
];

const greenPokemons = [
  "bulbasaur",
  "caterpie",
  "bellsprout",
  "venusaur",
  "metapod",
  "weepinbell",
  "victreebel",
  "scyther",
  "chikorita",
  "spinarak",
  "natu",
  "meganium",
  "xatu",
  "bellossom",
  "politoed",
  "skiploom",
  "larvitar",
  "celebi",
  "treecko",
  "lotad",
  "tyranitar",
  "grovyle",
  "sceptile",
  "dustox",
  "lombre",
  "ludicolo",
  "breloom",
  "electrike",
  "gulpin",
  "cacnea",
  "kecleon",
  "tropius",
  "roselia",
  "vibrava",
  "flygon",
  "cacturne",
  "cradily",
  "rayquaza",
  "turtwig",
  "budew",
  "burmy",
  "bronzor",
  "grotle",
  "torterra",
  "roserade",
  "wormadam",
  "bronzong",
  "carnivine",
  "shaymin",
  "snivy",
  "pansage",
  "yanmega",
  "leafeon",
  "servine",
  "serperior",
  "simisage",
  "cottonee",
  "petilil",
  "basculin",
  "maractus",
  "trubbish",
  "solosis",
  "swadloon",
  "whimsicott",
  "lilligant",
  "garbodor",
  "duosion",
  "reuniclus",
  "axew",
  "golett",
  "virizion",
  "tornadus",
  "chespin",
  "fraxure",
  "golurk",
  "quilladin",
  "chesnaught",
  "hawlucha",
  "zygarde",
  "dewpider",
  "comfey",
  "charjabug",
  "araquanid",
  "dhelmise",
  "celesteela",
  "grookey",
  "gossifleur",
  "chewtle",
  "applin",
  "thwackey",
  "rillaboom",
  "eldegoss",
  "drednaw",
  "flapple",
  "silicobra",
  "dracozolt",
  "dracovish",
  "dreepy",
  "zarude",
  "regidrago",
  "calyrex",
  "ivysaur",
  "bayleef",
  "sandaconda",
  "copperajah",
  "drakloak",
  "dragapult",
  "appletun",
];

const pinkPokemons = [
  "clefairy",
  "clefable",
  "jigglypuff",
  "wigglytuff",
  "slowpoke",
  "exeggcute",
  "lickitung",
  "porygon",
  "slowbro",
  "chansey",
  "mr-mime",
  "mew",
  "cleffa",
  "igglybuff",
  "hoppip",
  "snubbull",
  "corsola",
  "flaaffy",
  "slowking",
  "smoochum",
  "miltank",
  "whismur",
  "skitty",
  "blissey",
  "luvdisc",
  "milotic",
  "gorebyss",
  "cherubi",
  "mime-jr",
  "happiny",
  "mesprit",
  "munna",
  "audino",
  "lickilicky",
  "musharna",
  "deerling",
  "alomomola",
  "spritzee",
  "aromatisse",
  "diancie",
  "fomantis",
  "stufful",
  "sylveon",
  "lurantis",
  "bewear",
  "bruxish",
  "tapu-lele",
  "hatenna",
  "impidimp",
  "hattrem",
  "morgrem",
  "hatterene",
];

const purplePokemons = [
  "rattata",
  "ekans",
  "nidoran-m",
  "zubat",
  "venonat",
  "arbok",
  "nidorino",
  "nidoking",
  "golbat",
  "venomoth",
  "grimer",
  "shellder",
  "gastly",
  "koffing",
  "ditto",
  "aerodactyl",
  "mewtwo",
  "muk",
  "cloyster",
  "haunter",
  "gengar",
  "weezing",
  "starmie",
  "aipom",
  "gligar",
  "crobat",
  "espeon",
  "forretress",
  "granbull",
  "tyrogue",
  "cascoon",
  "sableye",
  "illumise",
  "lileep",
  "swalot",
  "grumpig",
  "shellos",
  "drifloon",
  "stunky",
  "spiritomb",
  "skorupi",
  "cherrim",
  "ambipom",
  "drifblim",
  "mismagius",
  "skuntank",
  "drapion",
  "palkia",
  "purrloin",
  "gliscor",
  "liepard",
  "gothita",
  "gothorita",
  "gothitelle",
  "genesect",
  "goomy",
  "noibat",
  "hoopa",
  "crabrawler",
  "morelull",
  "bounsweet",
  "sliggoo",
  "goodra",
  "noivern",
  "shiinotic",
  "steenee",
  "tapu-fini",
  "poipole",
  "lunala",
  "naganadel",
  "toxel",
  "sinistea",
  "pincurchin",
  "indeedee",
  "eternatus",
  "mantine",
  "delcatty",
  "gastrodon",
  "mienshao",
  "toxtricity",
  "polteageist",
  "grimmsnarl",
  "mr-rime",
  "tsareena",
  "corviknight",
];

const redPokemons = [
  "charmander",
  "paras",
  "charmeleon",
  "charizard",
  "vileplume",
  "parasect",
  "krabby",
  "voltorb",
  "goldeen",
  "magikarp",
  "kingler",
  "electrode",
  "seaking",
  "jynx",
  "magmar",
  "flareon",
  "ledyba",
  "yanma",
  "slugma",
  "delibird",
  "ledian",
  "ariados",
  "scizor",
  "magcargo",
  "octillery",
  "magby",
  "ho-oh",
  "torchic",
  "wurmple",
  "porygon2",
  "combusken",
  "blaziken",
  "carvanha",
  "solrock",
  "corphish",
  "medicham",
  "camerupt",
  "crawdaunt",
  "latias",
  "groudon",
  "deoxys",
  "kricketot",
  "kricketune",
  "rotom",
  "tepig",
  "pansear",
  "magmortar",
  "porygon-z",
  "pignite",
  "emboar",
  "simisear",
  "throh",
  "venipede",
  "darumaka",
  "dwebble",
  "scolipede",
  "krookodile",
  "darmanitan",
  "crustle",
  "scrafty",
  "shelmet",
  "druddigon",
  "pawniard",
  "heatmor",
  "fennekin",
  "fletchling",
  "accelgor",
  "bisharp",
  "braviary",
  "braixen",
  "delphox",
  "fletchinder",
  "talonflame",
  "yveltal",
  "litten",
  "oricorio",
  "torracat",
  "incineroar",
  "turtonator",
  "tapu-bulu",
  "buzzwole",
  "orbeetle",
  "sizzlipede",
  "zamazenta",
  "tyrantrum",
  "centiskorch",
];

const whitePokemons = [
  "butterfree",
  "seel",
  "dewgong",
  "togepi",
  "mareep",
  "togetic",
  "smeargle",
  "lugia",
  "wingull",
  "ralts",
  "linoone",
  "silcoon",
  "kirlia",
  "gardevoir",
  "vigoroth",
  "zangoose",
  "absol",
  "shelgon",
  "pachirisu",
  "snover",
  "dialga",
  "regigigas",
  "arceus",
  "abomasnow",
  "togekiss",
  "gallade",
  "froslass",
  "vanillite",
  "emolga",
  "foongus",
  "frillish",
  "tynamo",
  "litwick",
  "swanna",
  "vanillish",
  "vanilluxe",
  "amoonguss",
  "jellicent",
  "cubchoo",
  "rufflet",
  "larvesta",
  "reshiram",
  "meloetta",
  "flabebe",
  "pancham",
  "furfrou",
  "swirlix",
  "beartic",
  "volcarona",
  "floette",
  "florges",
  "pangoro",
  "slurpuff",
  "crabominable",
  "oranguru",
  "passimian",
  "drampa",
  "nihilego",
  "pheromosa",
  "kartana",
  "blacephalon",
  "scorbunny",
  "wooloo",
  "solgaleo",
  "cinderace",
  "dubwool",
  "milcery",
  "snom",
  "duraludon",
  "glastrier",
  "vivillon",
  "cursola",
  "sirfetchd",
  "alcremie",
  "frosmoth",
];

const yellowPokemons = [
  "sandshrew",
  "meowth",
  "psyduck",
  "kakuna",
  "beedrill",
  "pikachu",
  "raichu",
  "sandslash",
  "ninetales",
  "persian",
  "ponyta",
  "drowzee",
  "zapdos",
  "moltres",
  "rapidash",
  "hypno",
  "exeggutor",
  "electabuzz",
  "jolteon",
  "cyndaquil",
  "pichu",
  "sunkern",
  "girafarig",
  "dunsparce",
  "shuckle",
  "quilava",
  "typhlosion",
  "ampharos",
  "sunflora",
  "elekid",
  "raikou",
  "makuhita",
  "beautifly",
  "pelipper",
  "ninjask",
  "plusle",
  "minun",
  "numel",
  "lunatone",
  "manectric",
  "jirachi",
  "combee",
  "chingling",
  "mothim",
  "vespiquen",
  "uxie",
  "cresselia",
  "victini",
  "electivire",
  "sewaddle",
  "scraggy",
  "archen",
  "joltik",
  "leavanny",
  "archeops",
  "galvantula",
  "mienfoo",
  "keldeo",
  "haxorus",
  "helioptile",
  "dedenne",
  "cutiefly",
  "heliolisk",
  "ribombee",
  "mimikyu",
  "tapu-koko",
  "zeraora",
  "yamper",
  "dottler",
  "boltund",
  "falinks",
  "morpeko",
  "cufant",
  "regieleki",
  "cofagrigus",
];
