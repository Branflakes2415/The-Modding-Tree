let modInfo = {
	name: "Yet Another Polynomial Growth Game",
	id: "YAPGG",
	author: "Branflakes",
	pointsName: "points",
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (4), // Used for hard resets and new players
	
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1.1",
	name: "getting-started.md",
}

let changelog = `<h1>Changelog:</h1><br>
    <h3>v0.1.1 - getting-started.md</h3><br>
		- Moved to Github.<br>
    <br>
	<h3>v0.1 - Gee, I'm a Tree</h3><br>
		- Added Geometry.<br>
		- Added Improvements.`

let winText = `You have too many Points; the universe is on the verge of collapse. But that's for another update- for now, the game is over.`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)

// maxAll: autocalling would auto-max Geometry buyables, which, uh,
// calc(Mult/EffBought/Cost/Display): autocalling these breaks the game (lots of undefined errors)
// buyAThing: see above.
var doNotCallTheseFunctionsEveryTick = ["maxAll","calcMult","calcEffBought","calcCost","calcDisplay","buyAThing"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
    if(!player.infinityBroken && player.points.gte(new Decimal(2).pow(1024))){
        return false;
    }
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = getBuyableAmount("g", 11);
    gain = gain.times(layers.g.buyables[11].mult());
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
    infinityBroken: false
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal(2).pow(1024));
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(200) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}