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
	num: "0.2.4",
	name: "γ'd This Take So Long?",
}

let changelog = `<h1>Changelog:</h1><br>
    <h3>v0.2.4 - "γ'd This Take So Long?"</h3><br>
<small><strike>because γ looks like a Y geddit i'm real good at update names guys</strike></small><br>
        - I'm lazy, that's why.<br>
        - Added content until CC10.<br>
        - Added another mode for Auto-Collapse, since my code for time-past-peak is very jank.<br>
<small> - I should really also make the time an input box but again, I'm lazy</small><br>
        - Fixed {clp5x2} not correctly reducing the cost of IP.<br>
<small> - now I have to do a balancing pass through the entire front half of collapse OH BOY </small><br>
        - Removed "Probably enough IP", replaced with placeholder progression achievement.<br>
        - Removed hacky fix to prevent gaining multiple CE before stretching infinity.<br>
<small> - capPoints() effectively fixes that by itself.</small><br>
        - Endgame: 2^99 CE.<br>
        - Speedrun: 2h 30m - <b>see below</b> <br>
        - can't wait for the game to inflate after penteracts get added yay<br>
        <br>
    <h3>v0.2.3 - Almost Double Feature</h3><br>
        - Added content until CC7.<br>
        - Fixed logarithm format. (Decimal.floor() doesn't actually take an argument. Oops.)<br>
        - Endgame: 2^184 (~2.45e55) Collapsed Segments. <br>
        - Speedrun: 2h 0m - <b>still not testing these</b> <br>
        <br>
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

// maxAll: autocalling would auto-max buyables even if that function hadn't been unlocked yet, which, uh,
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

// Caps points at the current value of infinity. Called within the doThisEveryTick function in layers.js.
function capPoints(){
    if(!player.infinityBroken && player.points.gte(twoPow(infinityAt()))){
        player.points = twoPow(infinityAt());
    }
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()){
		return new Decimal(0)
    };
    if(!player.infinityBroken && player.points.gte(twoPow(infinityAt()))){
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
    "<button onClick='save()'>Save</button>&nbsp;<button onClick='importSave()'>Load</button>",
]

let speedrunTime = 9000
// Determines when the game "ends"
function isEndgame() {
	return player.c.points.gte(twoPow(99));
}

function infinityAt(){
    var result = 1024;
    if(hasUpgrade("c", 81)){
        result += 1024;
    }
    if(hasUpgrade("c", 131)){
        result += 1024;
    }
    if(hasUpgrade("c", 161)){
        result += 1024;
    }
    if(hasChallenge("c", 122)){
        result += 2048;
    }
    if(hasUpgrade("c", 231)){
        result += 2048;
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