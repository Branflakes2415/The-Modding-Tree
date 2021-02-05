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
	num: "0.2.7",
	name: "Filler Update",
}

let changelog = `<h1>Changelog:</h1><br>
    <h3>v0.2.7 - Filler Update</h3><br>
        - Added more things, from Penteracts to the planned next reset layer.<br>
        - Endgame is 2^256 CE.<br>
        - Speedrun: 2h 10m<br>
        <br>
    <h3>v0.2.6 - <i>FINALLY.</i></h3><br>
        - CC10 is a thing now. Penteracts also a thing.<br>
        - Not much content was actually added- a few upgrades, that's it.<br>
        - Fixed devSpeed being squared. Might break something.<br>
        - Endgame is 2^123 CE.<br>
        - Speedrun: 1h 55m<br>
        <br>
    <h3>v0.2.5 - Balancing Act</h3><br>
        - Rebalancing in the aftermath of the {clp5x2} fix, and also rebalancing in general.<br>
<small> - {imp1x1}: Effect x8 -> x16<br>
        - {imp90x1}: Cost 29 IP -> 1.16e77 points<br>
        - {imp3x2}: Cost 16 -> 15 unspent IP<br>
        - {imp3x3}: Cost 16 -> 21 unspent IP<br>
        - {imp4x1}: Cost 16 -> 12 unspent IP<br>
        - {imp4x2}: Cost 16 -> 17 unspent IP<br>
        - {clp4x1}: Cost 32 -> 16 CE<br>
        - {Pay to Win}: reward x0.75 to compensate for {imp1x1} buff, in-challenge effect only dropped by 15% because this challenge sucked. also shortened description/reward text to fit the bigger formula <br>
        - {clp7x1}: Cost 160 -> 128 CE<br>
        - {clp8x1}: Cost 330 -> 174 CE<br>
        - {enh3x3}: Cost 2,048 -> 1,024 EP<br>
        - {clp17x1}: Cost 2^35 -> 2^34 CE, Effect +0.30 -> +0.35<br>
        - {clp17x3}: Cost 2^41 -> 2^40 CE<br>
        - {clp21x2}: Cost 2^53 -> 2^52 CE<br>
        - {clp21x3}: Cost 2^56 -> 2^57 CE<br>
        - {clp22x2}: Cost 2^67 -> 2^66 CE<br>
</small>- Achievements now display the playtime you had when you earned them.<br>
<small> - This replaces the old console speedrun splits, but the console now logs every achievement you earn.</small><br>
        - Fixed Challenges γ becoming visible alongside Challenges β.<br>
        - Endgame: unchanged.<br>
        - Speedrun: 1h 50m<br>
        <br>
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
var doNotCallTheseFunctionsEveryTick = ["maxAll","calcMult","calcEffBought","calcCost","calcDisplay","buyAThing","displayLast8", "cc5Check","completeAch"]

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

//Handles things that slow down or speed up the flow of time.
function timeSpeed(){
    var tspeed = 1;
    if(inChallenge("c", 221)) tspeed *= 0.001;
    return tspeed;
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
    "Quick Buttons: <br>",
    function(){
        return `<button onClick='save()'>Save</button>&nbsp;<button onClick='toggleOpt("autosave")'>Auto: ` + player.autosave + "</button>&nbsp;<button onClick='importSave(localStorage.getItem(modInfo.id))'>Load</button>&nbsp;<button onClick='exportSave()'>Export</button>&nbsp;<button onClick='importSave()'>Import</button>&nbsp;<button onClick='hardReset()'>RESET</button>"
    },
]

let speedrunTime = 7800
// Determines when the game "ends"
function isEndgame() {
	return player.c.points.gte(twoPow(256));
}

function infinityAt(){
    var result = 1024;
    if(hasUpgrade("c", 81)){
        result += 1024;
        if(hasUpgrade("c", 273)){
            result += 1024;
        }
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
    if(hasUpgrade("c", 352)){
        result += upgradeEffect("c", 352).toNumber();
    }
    if(hasUpgrade("c", 353)){
        result += upgradeEffect("c", 353).toNumber();
    }
    //prevent challenge shenanigans
    if(inChallenge("c", 21) || (inChallenge("c", 22) && !inChallenge("c", 221)) || inChallenge("c", 111)){
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