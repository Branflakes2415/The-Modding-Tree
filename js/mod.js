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
	num: "0.2.2",
	name: "Running Out of Name Ideas",
}

let changelog = `<h1>Changelog:</h1><br>
    <h3>v0.2.2 - Running Out of Name Ideas</h3><br>
        - Added content until post-CC5.<br>
        - Endgame: 67,108,864 total CE.<br>
        - Speedrun time: 1h 40m - <b>untested, likely very lenient</b><br>
        <br>
    <h3>v0.2.1 - stretch_infinity.js</h3><br>
        - Added Upgrades and Challenges β.<br>
        - Added Enhancements.<br>
        - Added content until post-CC4.<br>
        - Endgame: 1,337,000 total CE.<br>
        - Speedrun time: 1h 30m - <b>untested, likely very lenient</b><br>
        <br>
        - images are still broken, will fix when this goes on the master branch<br>
    <br>
    <h3>v0.2.0 - Balancing Collapse</h3><br>
        - Added the Collapse layer.<br>
        - A new <strike>set</strike> pair of buyables, 18 upgrades, and three challenges are available.<br>
        - No new achievement images yet. I'm lazy.
        - Endgame is 777 total CE.<br>
        - Speedrun time: 1h 15m - <b>untested</b><br>
    <br>
    <h3>v0.1.3 - High Quality Images</h3><br>
		- Added achievement images.<br>
        - Locked achievements show how long their names are.<br>
        - Added a hotkey to do an Improvement reset.<br>
        - Added formula displays for {imp3x3} and {imp4x1}.<br>
    <br>
<strike>- fixed a missing line break in the changelog, oops</strike><br>
    <br>
    <h3>v0.1.2 - It's a Secret</h3><br>
        - Added Secret Achievements.<br>
        - A bunch of little tweaks pertaining to Achievements.<br>
        - Adjusted some Improvement costs.<br>
        - Added speedrun splits (they're in the console).<br>
        - Speedrun time: 30m 0s<br>
    <br>
    <h3>v0.1.1 - getting-started.md</h3><br>
		- Moved to Github.<br>
    <br>
	<h3>v0.1 - Gee, I'm a Tree</h3><br>
		- Added Geometry.<br>
		- Added Improvements.<br>
        - Game ends at 2^1024 points.`

let winText = `Congratulations! You have reached the current end of content.`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)

// maxAll: autocalling would auto-max Geometry buyables, which, uh,
// calc(Mult/EffBought/Cost/Display): autocalling these breaks the game (lots of undefined errors)
// buyAThing: see above.
var doNotCallTheseFunctionsEveryTick = ["maxAll","calcMult","calcEffBought","calcCost","calcDisplay","buyAThing","displayLast8", "cc5Check"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Caps points at the current value of infinity. Called within the doThisEveryTick function in the achievements layer.
function capPoints(){
    if(!player.infinityBroken && player.points.gte(new Decimal(2).pow(infinityAt()))){
        player.points = new Decimal(2).pow(infinityAt());
    }
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()){
		return new Decimal(0)
    };
    if(!player.infinityBroken && player.points.gte(new Decimal(2).pow(infinityAt()))){
        return new Decimal(0)
    };
	let gain = getBuyableAmount("g", 11);
    gain = gain.times(layers.g.buyables[11].mult());
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
    infinityBroken: false,
}}

// Display extra things at the top of the page
var displayThings = [
    "<br>",
    function() {
        return "Time played: " + formatTime(player.timePlayed);
    },
    "<br>",
    "<button onClick='save()'>Save</button>",
]

let speedrunTime = 6000
// Determines when the game "ends"
function isEndgame() {
	return player.c.total.gte(67108864);
}

function infinityAt(){
    var result = 1024;
    if(hasUpgrade("c", 81)){
        result += 1024;
    }
    if(hasUpgrade("c", 131)){
        result += 1024;
    }
    //prevent challenge shenanigans
    if(inChallenge("c", 21) || inChallenge("c", 22) || inChallenge("c", 111)){
        result = 1024;
    }
    return result;
}

// Was using Greek letters in tab names worth this? ehhhhhhhhhh
function deGreekify(string){
    return string.replaceAll("α","&greekLowercaseAlpha").replaceAll("β","&greekLowercaseBeta").replaceAll("γ","&greekLowercaseGamma").replaceAll("δ","&greekLowercaseDelta");
}

function reGreekify(string){
    return string.replaceAll("&greekLowercaseAlpha","α").replaceAll("&greekLowercaseBeta","β").replaceAll("&greekLowercaseGamma","γ").replaceAll("&greekLowercaseDelta","δ");
}

// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(5)
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}