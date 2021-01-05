addLayer("ach", {
    name: "Achievements",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        triggerAchievement22Dammit: false,
    }},
    color: "#d0d040",
    resource: "achievement power",
    tooltip(){
        return "Achievements (" + formatWhole(player.ach.points) + "AP)";
    },
    row: "side",
    achievements: {
        rows: 69,
        cols: 6,
        11: {
            name(){
                //The this.done() part is needed for the name to show properly in the achievement popup
                if(hasAchievement("ach", this.id) || this.done()){
                    return "You gotta start somewh-[COPYRIGHT]";
                }
                return "??? ????? ????? ??????? ???????????";
            },
            tooltip(){
                if(hasAchievement("ach", this.id)){
                    return "Bought a single Line Segment. Congratulations, I guess??? (1AP)";
                }
                return "Buy a single Line Segment. (1AP)";
            },
            done(){return getBuyableAmount("g", 11).gte(1)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach11.png";
                };
                return "../images/locked/ach_g.png";
            },
        },
        12: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Four Squared";
                }
                return "???? ???????";
            },
            tooltip(){
                if(hasAchievement("ach", this.id)){
                    return "Bought a single Square, demonstrating the patience required to wait 10.7 seconds. (1AP)";
                }
                return "Buy a single Square. (1AP)";
            },
            done(){return getBuyableAmount("g", 21).gte(1)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach12.png";
                };
                return "../images/locked/ach_g.png";
            },
        },
        13: {
            name(){
                if(hasAchievement("ach", 22)){
                    return "This achievement lied to me!";
                }
                if(hasAchievement("ach", this.id) || this.done()){
                    return "There's only three in this one";
                }
                return "??????? ???? ????? ?? ???? ???";
            },
            tooltip(){
                if(hasAchievement("ach", this.id)){
                    return "Bought a single Cube. Row 2 approaches! (1AP)";
                }
                return "Buy a single Cube. (1AP)";
            },
            done(){return getBuyableAmount("g", 31).gte(1)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach13.png";
                };
                return "../images/locked/ach_g.png";
            },
        },
        14: {
            name(){
                //This displays as ??? in the achievement unlock popup and I don't know why. Too bad!
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Intermediary Achievement";
                }
                return "???????????? ???????????";
            },
            tooltip(){
                if(hasAchievement("ach", this.id)){
                    return "Reached 1,048,576 Points. Yay. (1AP)";
                }
                return "Get 1,048,576 Points. (1AP)";
            },
            done(){return player.points.gte(1048576)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach14.png";
                };
                return "../images/locked/ach_g.png";
            },
        },
        15: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Not an infinity point";
                }
                return "??? ?? ???????? ?????";
            },
            tooltip(){
                if(player.ach.points.lt(3)){
                    return "Requirement shown at 3 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Got an Improvement Point. (1AP)";
                }
                return "Perform a row 2 reset. (1AP)";
            },
            done(){return player.i.points.gte(1)},
            onComplete(){
                player.ach.points = player.ach.points.plus(1);
                console.log("First IP: " + formatTime(player.timePlayed));
            },
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach15.png";
                };
                return "../images/locked/ach_i.png";
            },
        },
        16: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Hat Trick";
                }
                return "??? ?????";
            },
            tooltip(){
                if(player.ach.points.lt(5)){
                    return "Requirement shown at 5 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Reached 3 Improvement Points. (2AP)";
                }
                return "Get 3 Improvement Points. (2AP)";
            },
            done(){return player.i.points.gte(3)},
            onComplete(){
                player.ach.points = player.ach.points.plus(2)
                console.log("Hat Trick: " + formatTime(player.timePlayed));
            },
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach16.png";
                };
                return "../images/locked/ach_i.png";
            },
        },
        21: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Great Deal";
                }
                return "????? ????";
            },
            tooltip(){
                if(player.ach.points.lt(7)){
                    return "Requirement shown at 7 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Got 128 total free bought Geometry buyables. (actually this just fires when you get {imp2x4} because i'm lazy) (1AP)";
                }
                return "Get 128 total free bought Geometry buyables. (1AP)";
            },
            done(){return hasUpgrade("i", 24)},
            onComplete(){
                player.ach.points = player.ach.points.plus(1);
                console.log("Great Deal: " + formatTime(player.timePlayed));
            },
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach21.png";
                };
                return "../images/locked/ach_i.png";
            },
        },
        22: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "[FOUR DIMENSIONS]";
                }
                return "????? ???????????";
            },
            tooltip(){
                if(player.ach.points.lt(7)){
                    return "Requirement shown at 7 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Unlocked Tesseracts. That upgrade used to be 30 IP, by the way. What was I thinking?(2AP)";
                }
                return "Buy the Improvement {imp90x1}. (2AP)";
            },
            done(){return player[this.layer].triggerAchievement22Dammit},
            onComplete(){
                player.ach.points = player.ach.points.plus(2);
                console.log("Tesseract: " + formatTime(player.timePlayed));
            },
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach22.png";
                };
                return "../images/locked/ach_i.png";
            },
        },
        23: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Looks kinda like a jewel, sorta";
                }
                return "????? ????? ???? ? ?????? ?????";
            },
            tooltip(){
                if(player.ach.points.lt(7)){
                    return "Requirement shown at 7 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Got 13 Improvements. (2AP)";
                }
                return "Get 13 Improvements. (2AP)";
            },
            done(){return hasUpgrade("i", 51)},
            onComplete(){
                player.ach.points = player.ach.points.plus(2);
                console.log("13 Improvements: " + formatTime(player.timePlayed));
            },
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach23.png";
                };
                return "../images/locked/ach_i.png";
            },
        },
        24: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Extreme Inflation";
                }
                return "??????? ?????????";
            },
            tooltip(){
                if(player.ach.points.lt(10)){
                    return "Requirement shown at 10 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Made a Geometry buyable jump up in cost dramatically. (1AP)";
                }
                return "Get a Geometry buyable's cost over 1e308. (1AP)";
            },
            done(){return (layers.g.buyables[11].cost().gte("1e400") || layers.g.buyables[21].cost().gte("1e400") || layers.g.buyables[31].cost().gte("1e400") || layers.g.buyables[41].cost().gte("1e400"))},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach24.png";
                };
                return "../images/locked/ach_g.png";
            },
        },
        25: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Ain't enough room for the 2^1,024 of us";
                }
                return "????? ?????? ???? ??? ??? ??????? ?? ??";
            },
            tooltip(){
                if(player.ach.points.lt(10)){
                    return "Requirement shown at 10 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Collapsed the universe. (5AP)";
                }
                return "Perform a row 3 reset. (5AP)";
            },
            done(){return player.c.points.gte(1)},
            onComplete(){player.ach.points = player.ach.points.plus(5)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        31: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "That was quick";
                }
                return "???? ??? ?????";
            },
            tooltip(){
                if(player.ach.points.lt(18)){
                    return "Requirement shown at 18 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Collapsed the universe three times. (2AP)";
                }
                return "Collapse the universe three times. (2AP)";
            },
            done(){return player.c.resetCount.gte(3)},
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        32: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Not very challenging";
                }
                return "??? ???? ???????????";
            },
            tooltip(){
                if(player.ach.points.lt(20)){
                    return "Requirement shown at 20 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Completed a Collapse Challenge. (2AP)";
                }
                return "Complete a Collapse Challenge. (2AP)";
            },
            done(){return hasChallenge("c", 11)},
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        33: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Upgrade Speed Buyer";
                }
                return "??????? ????? ?????";
            },
            tooltip(){
                if(player.ach.points.lt(20)){
                    return "Requirement shown at 20 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Collapsed in under 7.77 seconds. (2AP)";
                }
                return "Collapse in under 7.77 seconds. (2AP)";
            },
            done(){return (player.c.bestTime < 7.77)},
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        34: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Somewhat more challenging";
                }
                return "???????? ???? ???????????";
            },
            tooltip(){
                if(player.ach.points.lt(20)){
                    return "Requirement shown at 20 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Completed the second Collapse Challenge. (1AP)";
                }
                return "Complete the second Collapse Challenge. (1AP)";
            },
            done(){return hasChallenge("c", 21)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        35: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "A Minor Test of Patience";
                }
                return "? ????? ???? ?? ????????";
            },
            tooltip(){
                if(player.ach.points.lt(20)){
                    return "Requirement shown at 20 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Completed the third Collapse Challenge. (3AP)";
                }
                return "Complete the third Collapse Challenge. (3AP)";
            },
            done(){return hasChallenge("c", 22)},
            onComplete(){player.ach.points = player.ach.points.plus(3)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        36: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "stretch-infinity.js";
                }
                return "???????????????????";
            },
            tooltip(){
                if(player.ach.points.lt(25)){
                    return "Requirement shown at 25 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Expanded the universe's limit to 2^2,048 Points. (3AP)";
                }
                return "Buy the Collapse upgrade {c8x1}. (3AP)";
            },
            done(){return hasUpgrade("c", 81)},
            onComplete(){player.ach.points = player.ach.points.plus(3)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        41: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "No, I did not make that name up";
                }
                return "??? ? ??? ??? ???? ???? ???? ??";
            },
            tooltip(){
                if(player.ach.points.lt(25)){
                    return "Requirement shown at 25 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Got a Collapsed Pentachoron. \n ...yes, I Googled it. (2AP)";
                }
                return "Get a third-tier Collapse buyable. (2AP)";
            },
            done(){return getBuyableAmount("c", 31).gte(1)},
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        42: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "[ONE DIMENSION]";
                }
                return "???? ??????????";
            },
            tooltip(){
                if(player.ach.points.lt(25)){
                    return "Requirement shown at 25 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Completed Collapse Challenge 4. (2AP)";
                }
                return "Complete Collapse Challenge 4. (2AP)";
            },
            done(){return hasChallenge("c", 111)},
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        43: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Intelligent Purchasing Decisions";
                }
                return "??????????? ?????????? ?????????";
            },
            tooltip(){
                if(player.ach.points.lt(25)){
                    return "Requirement shown at 25 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Completed Collapse Challenge 5. (2AP)";
                }
                return "Complete Collapse Challenge 5. (2AP)";
            },
            done(){return hasChallenge("c", 112)},
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        44: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Brute Force";
                }
                return "????? ?????";
            },
            tooltip(){
                if(player.ach.points.lt(25)){
                    return "Requirement shown at 25 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Completed Collapse Challenge 6. (2AP)";
                }
                return "Complete Collapse Challenge 6. (2AP)";
            },
            done(){return hasChallenge("c", 121)},
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            image(){
                if(hasAchievement("ach", this.id)){
                    return "../images/ach25.png";
                };
                return "../images/locked/ach_c.png";
            },
        },
        45: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Welcome to Logarithm Format";
                }
                return "??????? ?? ????????? ??????";
            },
            tooltip(){
                if(player.ach.points.lt(25)){
                    return "Requirement shown at 25 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Got e1,000.02 Points. (1AP)";
                }
                return "Get e1,000.02 Points. (1AP)";
            },
            done(){return player.points.gte("e1000")},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            image(){
                if(hasAchievement("ach", this.id)){
                    //2^3322
                    return "../images/ach14.png";
                };
                return "../images/locked/ach_g.png";
            },
        },
    },
    componentStyles: {
        "achievement"() { return {
            width:"96px",
            height:"96px",
        }}
    },
    tabFormat: [
        "main-display",
        "blank","blank","blank",
        "achievements"
    ],
    //Do things in mod.js that don't automagically run every tick but need to
    doThisEveryTick(){
        capPoints();
    }
})

addLayer("scr", {
    name: "Secret Achievements",
    symbol: "S",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        triggerAchievement22Dammit: false,
    }},
    color: "#404040",
    resource: "secret power",
    tooltip(){
        return "Secret Achievements (" + formatWhole(player.scr.points) + "SP)";
    },
    row: "side",
    achievements: {
        rows: 69,
        cols: 3,
        11: {
            name(){
                if(hasAchievement("scr", this.id) || this.done()){
                    return "Flipping the Script";
                }
                return "???????? ??? ??????";
            },
            tooltip(){
                if(hasAchievement("scr", this.id)){
                    return "Have more TRUE bought Tesseracts than Cubes, more Cubes than Squares, and more Squares than Line Segments. (1SP)";
                }
                return "Hint: Antitables, but it's way simpler. (1SP)";
            },
            done(){return player.g.bought[4].gt(player.g.bought[3]) && player.g.bought[3].gt(player.g.bought[2]) && player.g.bought[2].gt(player.g.bought[1])},
            onComplete(){player.scr.points = player.scr.points.plus(1)},
            image(){
                if(hasAchievement("scr", this.id)){
                    return "../images/scr11.png";
                };
                return "../images/locked/scr_gflip.png";
            },
        },
        12: {
            name(){
                if(hasAchievement("scr", this.id) || this.done()){
                    return "4D Chess";
                }
                return "?? ?????";
            },
            tooltip(){
                if(hasAchievement("scr", this.id)){
                    return "Have 44 TRUE bought Tesseracts with only one of each of the previous buyables. (1SP)";
                }
                return "Hint: [1,1,1,'a lot']. (1SP)";
            },
            done(){return player.g.bought[4].gte(44) && player.g.bought[3].eq(1) && player.g.bought[2].eq(1) && player.g.bought[1].eq(1)},
            onComplete(){player.scr.points = player.scr.points.plus(1)},
            image(){
                if(hasAchievement("scr", this.id)){
                    return "../images/scr12.png";
                };
                return "../images/locked/scr_g.png";
            },
        },
        13: {
            name(){
                if(hasAchievement("scr", this.id) || this.done()){
                    return "Probably enough IP";
                }
                return "???????? ?????? ??";
            },
            tooltip(){
                if(hasAchievement("scr", this.id) && !player.infinityBroken){
                    return "Have 137 IP without [REDACTED]. (1SP)";
                }
                if(hasAchievement("scr", this.id)){
                    return "Have 137 IP without breaking infinity. (1SP)";
                }
                return "Hint: Next at 6.37e309. (1SP)";
            },
            done(){return !player.infinityBroken && player.i.points.gte(137)},
            onComplete(){player.scr.points = player.scr.points.plus(1)},
            image(){
                if(hasAchievement("scr", this.id)){
                    return "../images/scr13.png";
                };
                return "../images/locked/scr_i.png";
            },
        },
        21: {
            name(){
                if(hasAchievement("scr", this.id) || this.done()){
                    return "Oops";
                }
                return "????";
            },
            tooltip(){
                if(hasAchievement("scr", this.id)){
                    return "Have 0 points/sec with at least one Line Segment. (1SP)";
                }
                return "Hint: Multiplication by zero. (1SP)";
            },
            done(){return getBuyableAmount("g", 11).gte(1) && getPointGen().eq(0) && canGenPoints() && !(!player.infinityBroken && player.points.gte(new Decimal(2).pow(infinityAt())))},
            onComplete(){player.scr.points = player.scr.points.plus(1)},
            image(){
                if(hasAchievement("scr", this.id)){
                    return "../images/scr21.png";
                };
                return "../images/locked/scr_c.png";
            },
        },
        421: {
            name(){
                if(hasAchievement("scr", this.id) || this.done()){
                    return "Speedrunner";
                }
                return "???????????";
            },
            tooltip(){
                if(hasAchievement("scr", this.id)){
                    return "Beat the speedrun time (of any version). (0SP)";
                }
                return "Hint: Check the changelog. (0SP)";
            },
            done(){return gameEnded && player.timePlayed < speedrunTime},
            image(){
                if(hasAchievement("scr", this.id)){
                    return "../images/scr421.png";
                };
                return "../images/locked/scr_ex.png";
            },
        },
    },
    componentStyles: {
        "achievement"() { return {
            width:"160px",
            height:"160px",
        }}
    },
    tabFormat: [
        "main-display",
        "blank","blank","blank",
        "achievements"
    ]
})

addLayer("g", {
    name: "Geometry", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        bought: ["This array is not zero-indexed", new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
        autoMax: false,
    }},
    color: "#206010",
    resource: "This shouldn't be visible", // Name of prestige currency
    tooltip(){ return "Geometry"},
    row: 0, // Row the layer is in on the tree (0 is the first row)
    //IMPORTANT: Number of currently implemented buyables on this layer.
    totalBuyables: 4,
    //[Max all]
    maxAll(){
        for(var i = 1; i <= layers[this.layer].totalBuyables; i++){
            if(layers[this.layer].buyables[i * 10 + 1].unlocked()){
                while(layers[this.layer].buyables[i * 10 + 1].canAfford()){
                    this.buyAThing([i * 10 + 1], layers[this.layer].buyables[i * 10 + 1].cost());
                }
            }
        }
    },
    clickables: {
        rows: 1,
        cols: 9,
        11: {
            display() {return "<h2>Max all [M]</h2>"},
            canClick(){
                for(var i = 1; i <= layers[this.layer].totalBuyables; i++){
                    if(layers[this.layer].buyables[i * 10 + 1].canAfford() && layers[this.layer].buyables[i * 10 + 1].unlocked()){
                        return true;
                    }
                }
            },
            onClick(){
                layers[this.layer].maxAll();
            },
            style: {
                width:"150px",
                height:"40px",
                "border-radius":"20px",
            }
        },
        12: {
            display() { return "<h2>Auto: " + player[this.layer].autoMax + "</h2>" },
            unlocked(){ return hasAchievement("ach", 32) },
            canClick(){ return this.unlocked() },
            onClick() { player[this.layer].autoMax = !player[this.layer].autoMax },
            style: {
                width:"150px",
                height:"40px",
                "border-radius":"20px",
            }
        }
    },
    //Some functions regarding buyables, to make this code less of a horrible violation of DRY.
    //Downside: Targeting specific buyables with effects is a bit unwieldy, but it's not /that/ bad.
    //Returns the multiplier for a given buyable.
    calcMult(id){
        var result = new Decimal(1.5);
        //Improvement per-bought boosts
        if(hasUpgrade("i", 21)){
            result = result.plus(0.15);
        }
        if(hasUpgrade("i", 51)){
            result = result.plus(0.033);
            if((inChallenge("c", 9001) || hasUpgrade("e", 21)) && hasUpgrade("c", 52)){
                result = result.plus(0.066);
            }
        }
        //Collapse per-bought boosts
        if(inChallenge("c", 21)){
            result = result.plus(0.65);
        }
        if(hasChallenge("c", 21)){
            result = result.plus(0.065);
        }
        //Enhancement per-bought boosts
        if(id == 41 && hasUpgrade("e", 41)){
            result = result.plus(0.1);
        }
        if(id == 31 && hasUpgrade("e", 42)){
            result = result.plus(0.12);
        }
        if(id == 21 && hasUpgrade("e", 43)){
            result = result.plus(0.14);
        }
        if(id == 11 && hasUpgrade("e", 44)){
            result = result.plus(0.16);
        }
        //good ole debugging
        //if(id == 41) console.log(result);
        //{Broken Scaling} effect
        if(inChallenge("c", 121)){
            result = result.times(layers[this.layer].calcEffBought(id)).plus(1);
        } else {
            result = result.pow(layers[this.layer].calcEffBought(id));
        };
        //Improvement multipliers
        if(hasUpgrade("i", 11)){
            result = result.times(upgradeEffect("i", 11));
        }
        if(hasUpgrade("i", 31)){
            result = result.times(upgradeEffect("i", 31));
        }
        //Collapse multipliers
        result = result.times(layers.c.effect().segMult);
        if(id == 11 && hasUpgrade("c", 11)){
            result = result.times(64);
            if(hasUpgrade("c", 51)){
                result = result.times(64);
            }
        }
        if(id == 41 && hasUpgrade("c", 12)){
            result = result.times(256);
            if(hasUpgrade("c", 51)){
                result = result.times(256);
            }
        }
        if(hasUpgrade("c", 43)){
            result = result.times(upgradeEffect("c", 43));
            if((inChallenge("c", 9001) || hasUpgrade("e", 21)) && hasUpgrade("c", 52)){
                result = result.times(upgradeEffect("c", 43));
            }
        }
        if(hasChallenge("c", 121) && !inChallenge("c", 122)){
            result = result.times(layers[this.layer].calcEffBought(id));
        }
        //Enhancement multipliers
        if(hasUpgrade("e", 22)){
            result = result.times(upgradeEffect("e", 22));
        }
        //{One-Dimensional} effect
        if(inChallenge("c", 111)){
            if(id == 11){
                result = result.pow(2);
            } else {
                result = new Decimal(1);
            }
        }
        //Exponentiators go last
        if(id == 11 && hasChallenge("c", 111)){
            result = result.pow(1.05);
        }
        if(hasUpgrade("i", 71)){
            result = result.pow(1.01);
        }
        return result;
    },
    //Returns the effective bought amount for a given buyable.
    //Featuring a ridiculous amount of if() statements.
    calcEffBought(id){
        var result = player[this.layer].bought[Math.floor(id / 10)];
        if(inChallenge("c", 21)){
            result = new Decimal(0);
        }
        if(inChallenge("c", 22)){
            return result;
        }
        if(hasUpgrade("i", 12)){
            result = result.plus(upgradeEffect("i", 12));
        };
        if(hasUpgrade("i", 13)){
            result = result.plus(upgradeEffect("i", 13));
        };
        if(id == 11 && hasUpgrade("i", 22)){
            result = result.plus(16);
        }
        if(id == 21 && hasUpgrade("i", 23)){
            result = result.plus(32);
        }
        if(id == 31 && hasUpgrade("i", 24)){
            result = result.plus(64);
        }
        if(id == 41 && hasUpgrade("i", 32)){
            result = result.plus(128);
        }
        if(id < 36 && hasUpgrade("i", 33)){
            result = result.plus(upgradeEffect("i", 33));
        }
        if(id > 16 && id < 46 && hasUpgrade("i", 41)){
            result = result.plus(upgradeEffect("i", 41));
        }
        if(hasUpgrade("i", 42)){
            result = result.plus(42);
        }
        if(id == 31 && hasUpgrade("e", 31)){
            result = result.plus(upgradeEffect("e", 31));
        }
        if(id == 21 && hasUpgrade("e", 32)){
            result = result.plus(upgradeEffect("e", 32));
        }
        if(id == 11 && hasUpgrade("e", 33)){
            result = result.plus(upgradeEffect("e", 33));
        }
        return result;
    },
    //Returns the cost for a given buyable.
    calcCost(id, base, cml, cmi){
        var result = new Decimal(base);
        var cmult = new Decimal(cml);
        var cminc = new Decimal(cmi);
        result = result.times(cmult.pow(player[this.layer].bought[Math.floor(id / 10)]));
        if(result.gte(1e308)){
            result = result.pow(player[this.layer].bought[Math.floor(id / 10)].times(cminc).plus(1));
        }
        return result;
    },
    //Returns the display for a given buyable.
    calcDisplay(id, name, base, cml, cmi){
        return "<h2>" + name + ": " + format(getBuyableAmount(this.layer, id))
               + " (x" + format(layers[this.layer].calcMult(id)) + ")\n"
               + "Bought: " + formatWhole(player[this.layer].bought[Math.floor(id / 10)])
               + " (eff. " + format(layers[this.layer].calcEffBought(id))
               + ") | Cost: " + format(layers[this.layer].calcCost(id, base, cml, cmi)) + "</h2>"
    },
    //Buys a given buyable.
    buyAThing(id, cost){
        player.points = player.points.sub(cost);
        player[this.layer].bought[Math.floor(id / 10)] = player[this.layer].bought[Math.floor(id / 10)].plus(1);
        setBuyableAmount(this.layer, id, getBuyableAmount(this.layer, id).add(1))
    },
    buyables: {
        rows: 4,
        cols: 1,
        11: {
            //cost(){ return new Decimal(69) },
            //display() { return "Donkey" },
            mult(){
                return layers[this.layer].calcMult(this.id);
            },
            effBought(){
                return layers[this.layer].calcEffBought(this.id);
            },
            cost(){
                return layers[this.layer].calcCost(this.id, 4, 16, 0.01);
            },
            display() {
                return layers[this.layer].calcDisplay(this.id, "Line Segments", 4, 16, 0.01);
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                layers[this.layer].buyAThing(this.id, this.cost())
            },
            //need this for maxAll to work
            unlocked() { return true },
        },
        21: {
            //cost(){ return new Decimal(69) },
            //display() { return "Donkey" },
            mult(){
                return layers[this.layer].calcMult(this.id);
            },
            effBought(){
                return layers[this.layer].calcEffBought(this.id);
            },
            cost(){
                return layers[this.layer].calcCost(this.id, 16, 128, 0.012);
            },
            display() {
                return layers[this.layer].calcDisplay(this.id, "Squares", 16, 128, 0.012);
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                layers[this.layer].buyAThing(this.id, this.cost())
            },
            unlocked() { return (getBuyableAmount(this.layer, 11).gte(1) && !inChallenge("c", 111))}
        },
        31: {
            //cost(){ return new Decimal(69) },
            //display() { return "Donkey" },
            mult(){
                return layers[this.layer].calcMult(this.id);
            },
            effBought(){
                return layers[this.layer].calcEffBought(this.id);
            },
            cost(){
                return layers[this.layer].calcCost(this.id, 256, 1024, 0.014);
            },
            display() {
                return layers[this.layer].calcDisplay(this.id, "Cubes", 256, 1024, 0.014);
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                layers[this.layer].buyAThing(this.id, this.cost())
            },
            unlocked() { return (getBuyableAmount(this.layer, 21).gte(1) && !inChallenge("c", 111))}
        },
        41: {
            //cost(){ return new Decimal(69) },
            //display() { return "Donkey" },
            mult(){
                return layers[this.layer].calcMult(this.id);
            },
            effBought(){
                return layers[this.layer].calcEffBought(this.id);
            },
            cost(){
                return layers[this.layer].calcCost(this.id, 65536, 8192, 0.016);
            },
            display() {
                return layers[this.layer].calcDisplay(this.id, "Tesseracts", 65536, 8192, 0.016);
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                layers[this.layer].buyAThing(this.id, this.cost())
            },
            unlocked() { return (getBuyableAmount(this.layer, 31).gte(1) && hasAchievement("ach", 22) && !inChallenge("c", 111))}
        }
    },
    shouldNotify(){
        for(var i = 1; i <= layers[this.layer].totalBuyables; i++){
            if(layers[this.layer].buyables[i * 10 + 1].canAfford() && layers[this.layer].buyables[i * 10 + 1].unlocked()){
                return true;
            }
        }
    },
    update(diff){
        for(var i = 1; i < layers[this.layer].totalBuyables; i++){
            setBuyableAmount(this.layer, (i * 10 + 1), getBuyableAmount(this.layer, (i * 10 + 1)).plus(getBuyableAmount(this.layer, (i * 10 + 11)).times(layers[this.layer].buyables[(i * 10 + 11)].mult()).times(diff)));
        }
    },
    automate(){
        if(player[this.layer].autoMax){
            layers[this.layer].maxAll();
        }
    },
    hotkeys: [
        {key: "m", description: "M: Max all (Geometry layer)", onPress(){layers[this.layer].maxAll()}},
    ],
    componentStyles: {
        "buyable"() { return {
            width:"600px",
            height:"60px",
            "margin-bottom":"10px",
            "border-radius":"15px",
        }}
    },
    tabFormat: [
        "clickables",
        "blank",
        "buyables"
    ],
    doReset(resettingLayer){
        if(layers[resettingLayer].row > this.row){
            layerDataReset(this.layer, ["autoMax"]);
            if(hasUpgrade("c", 63)){
                player.points = new Decimal(2).pow(256);
            }
        };
    },
    layerShown(){return true}
})

addLayer("i", {
    name: "Improvements",
    symbol: "I",
    position: 0,
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        unspent: new Decimal(0),
        autoReset: false,
        autoImprove: false,
    }},
    color: "#add8e6",
    resource: "improvement points",
    row: 1,
    branches: ["g"],
    type: "static",
    baseResource: "points",
    baseAmount() {return player.points},
    requires() {return new Decimal(16777216)},
    base: 4096,
    exponent: 0.9,
    gainMult(){
        var result = new Decimal(1);
        if(hasUpgrade("c", 42)){
            result = result.div(upgradeEffect("c", 42));
            if((inChallenge("c", 9001) || hasUpgrade("e", 21)) && hasUpgrade("c", 52)){
                result = result.times(upgradeEffect("c", 43));
            }
        };
        return result;
    },
    canBuyMax() {return true},
    onPrestige(gain){
        player[this.layer].unspent = player[this.layer].unspent.plus(gain);
    },
    clickables:{
        rows: 1,
        cols: 9,
        11: {
            display() { return "<h2>Auto-Reset: " + player[this.layer].autoReset + "</h2>" },
            unlocked(){ return hasAchievement("ach", 34) },
            canClick(){ return this.unlocked() },
            onClick() { player[this.layer].autoReset = !player[this.layer].autoReset },
            style: {
                width:"200px",
                height:"40px",
                "border-radius":"20px",
            }
        },
        12: {
            display() { return "<h2>Auto-Improve: " + player[this.layer].autoImprove + "</h2>" },
            unlocked(){ return hasAchievement("ach", 35) },
            canClick(){ return this.unlocked() },
            onClick() { player[this.layer].autoImprove = !player[this.layer].autoImprove },
            style: {
                width:"200px",
                height:"40px",
                "border-radius":"20px",
            }
        },
    },
    automate(){
        if(player[this.layer].autoImprove && !inChallenge("c", 112)){
            autobuyUpgrades(this.layer);
        };
        if(player[this.layer].autoReset && canReset(this.layer)){
            doReset(this.layer);
        };
    },
    cc5Check(id){
        return !inChallenge("c", 112) || (hasUpgrade("i", id) || player.i.upgrades.length < 5);
    },
    upgrades: {
        rows: 99,
        cols: 5,
        11: {
            title: "imp1x1",
            description: "Multiplies all Geometry multipliers by 8.",
            effect(){
                if(inChallenge("c", 22)){
                    return new Decimal(8).pow(Math.pow(player.i.upgrades.length, 1.2));
                };
                if(hasChallenge("c", 22)){
                    return new Decimal(8).pow(challengeEffect("c", 22));
                };
                return new Decimal(8);
            },
            effectDisplay(){
                var cc3note = "";
                if(hasChallenge("c", 22)){
                    cc3note = "<br>(Challenge Reward: Effect ^" + format(challengeEffect("c", 22)) + ")";
                }
                if(inChallenge("c", 22)){
                    cc3note = "<br>(Pay to Win: Effect ^" + format(Math.pow(player.i.upgrades.length, 1.2)) + ")";
                }
                return "x" + format(this.effect()) + cc3note;
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(1),
        },
        12: {
            title: "imp1x2",
            description: "Increases the bought amount of all Geometry buyables by your Achievement Power.",
            effect(){return player.ach.points},
            effectDisplay(){return "+" + formatWhole(player.ach.points)},
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(1),
        },
        13: {
            title: "imp1x3",
            description: "Increases the bought amount of all Geometry buyables based on total IP.",
            effect(){
                var result = player.i.points;
                if(inChallenge("c", 11)){
                    result = player.i.unspent
                }
                result = result.times(10).pow(0.5);
                if(result.gte(10)){
                    result = result.times(100).pow(1.0/3);
                }
                return result;
            },
            effectDisplay(){
                var cc1note = "";
                if(inChallenge("c", 11)){
                    cc1note = "<br>(Spendthrift: UNSPENT IP)";
                }
                if(this.effect().gte(10)){
                    return "+" + format(this.effect()) + "<br>{(x*100,000)^(1/6)} (softcapped)" + cc1note;
                }
                return "+" + format(this.effect()) + "<br>{(x*10)^0.5}" + cc1note;
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(1),
            unlocked(){return ((hasUpgrade(this.layer, 11) && hasUpgrade(this.layer, 12)) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        21: {
            title: "imp2x1",
            description: "Increases the multiplier for each bought Geometry buyable by 0.15.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(2),
            unlocked(){return (hasUpgrade(this.layer, 13) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        22: {
            title: "imp2x2",
            description: "Increases the bought amount of Line Segments by 16.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(3),
            unlocked(){return (hasUpgrade(this.layer, 21) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        23: {
            title: "imp2x3",
            description: "Increases the bought amount of Squares by 32.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(3),
            unlocked(){return (hasUpgrade(this.layer, 22) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        24: {
            title: "imp2x4",
            description: "Increases the bought amount of Cubes by 64.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(4),
            unlocked(){return (hasUpgrade(this.layer, 23) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        31: {
            title: "imp3x1",
            description: "Multiplies all Geometry multipliers by your IP.",
            effect(){
                var result = player.i.points;
                if(inChallenge("c", 11)){
                    result = player.i.unspent;
                }
                return result
            },
            effectDisplay(){
                var cc1note = "";
                if(inChallenge("c", 11)){
                    cc1note = "<br>(Spendthrift: UNSPENT IP)";
                }
                return "x" + formatWhole(this.effect()) + cc1note;
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(9),
            unlocked(){return (hasUpgrade(this.layer, 24) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        32: {
            title: "imp3x2",
            description: "Increases the bought amount of Tesseracts by 128.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(16),
            unlocked(){return ((hasAchievement("ach", 22) && hasUpgrade(this.layer, 31)) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        33: {
            title: "imp3x3",
            description: "Increases the bought amount of Geometry buyables 1-3 based on your TRUE bought Tesseracts.",
            effect(){
                var result = player.g.bought[4].times(10).pow(0.5);
                if(result.gte(30)){
                    result = result.times(900).pow(1.0/3);
                }
                return result;
            },
            effectDisplay(){
                if(this.effect().gte(30)){
                    return "+" + format(this.effect()) + "<br>{(x*8,100,000)^(1/6)} (softcapped)";
                }
                return "+" + format(this.effect()) + "<br>{(x*10)^0.5}";
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(16),
            unlocked(){return (hasUpgrade(this.layer, 32) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        41: {
            title: "imp4x1",
            description: "Increases the bought amount of Geometry buyables 2-4 based on your TRUE bought Line Segments.",
            effect(){
                var result = player.g.bought[1].times(10).pow(0.45);
                if(result.gte(30)){
                    result = result.times(900).pow(1.0/3);
                }
                return result;
            },
            effectDisplay(){
                if(this.effect().gte(30)){
                    return "+" + format(this.effect()) + "<br>{(x*36,726,822)^0.15} (softcapped)";
                }
                return "+" + format(this.effect()) + "<br>{(x*10)^0.45}";
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(16),
            unlocked(){return (hasUpgrade(this.layer, 33) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        42: {
            title: "imp4x2",
            description: "Increases the bought amount of all Geometry buyables by 42.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(16),
            unlocked(){return (hasUpgrade(this.layer, 41) || hasUpgrade("c", 61)) && layers.i.cc5Check(this.id)}
        },
        51: {
            title: "imp5x1",
            description: "Increases the multiplier for each bought Geometry buyable by 0.033.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(36),
            unlocked(){return hasUpgrade(this.layer, 42) && layers.i.cc5Check(this.id)}
        },
        61: {
            title: "imp6x1",
            description: "Raises {enh2x2}'s effect to the fourth power.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(192),
            unlocked(){return hasChallenge("c", 112) && layers.i.cc5Check(this.id)}
        },
        71: {
            title: "imp7x1",
            description: "Raises all Geometry multipliers to the power of 1.01.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(64),
            unlocked(){return hasUpgrade("i", 61) && layers.i.cc5Check(this.id)}
        },
        72: {
            title: "imp7x2",
            description: "Gain more Collapse resets based on unspent IP.",
            effect(){
                return player.i.unspent.pow(0.4).div(2);
            },
            effectDisplay(){
                return "+" + format(this.effect()) + "<br>{(x^0.4)/2}"
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(128),
            unlocked(){return hasUpgrade("i", 61) && layers.i.cc5Check(this.id)}
        },
        901: {
            title: "imp90x1",
            description: "Resets Geometry AND this layer, but PERMANENTLY unlocks Tesseracts and new Improvements.",
            cost: new Decimal(29),
            unlocked(){return hasUpgrade(this.layer, 31) && !hasAchievement("ach", 22)},
            onPurchase(){
                player.ach.triggerAchievement22Dammit = true;
                layerDataReset(this.layer);
            }
        }
    },
    hotkeys: [
        {key: "i", description: "I: Do an Improvement reset", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    componentStyles: {
        "upgrade"() { return {
            width:"160px",
            height:"160px",
        }},
        "prestige-button"() { return {
            width:"600px",
            height:"60px",
            "font-size":"16px",
            "line-height":"80%",
            "margin-bottom":"10px",
            "border-radius":"15px",
        }}
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        "clickables",
        "blank",
        ["raw-html",
            function(){
                return "You have <h2 style='color:#add8e6; text-shadow:#add8e6 0px 0px 10px;'>" + formatWhole(player.i.unspent) + "</h2> unspent IP"
            }],
        "blank",
        ["raw-html",
            function(){
                if(inChallenge("c", 112)){
                    return "Picky: You can buy <h2 style='color:#add8e6; text-shadow:#add8e6 0px 0px 10px;'>" + (5 - player.i.upgrades.length) + "</h2> more Improvements";
                }
                return ""
            }],
        "blank",
        "upgrades"
    ],
    doReset(resettingLayer){
        if(layers[resettingLayer].row > this.row){
            layerDataReset(this.layer, ["autoReset", "autoImprove"]);
            if(hasChallenge("c", 11)){
                player.i.points = new Decimal(2);
                player.i.upgrades = ["11", "12"];
            };
            if(hasUpgrade("c", 22)){
                player.i.points = new Decimal(10);
                player.i.unspent = new Decimal(8);
            }
            if(hasUpgrade("c", 62)){
                player.i.unspent = player.i.unspent.plus(20);
            }
        };
    },
    resetsNothing() { return hasUpgrade("c", 31) },
    layerShown(){return (getBuyableAmount("g", 31).gte(1) || hasAchievement("ach", "14"))}
})

addLayer("c", {
    name: "Collapse",
    symbol: "C",
    position: 0,
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        total: new Decimal(0),
        resetTime: 0,
        bestTime: 999999999,
        resetCount: new Decimal(0),
        segments: new Decimal(0),
        bought: ["This array is not zero-indexed either", new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
        //Format: [time in seconds, CE gained, stat gained]
        last8: [
            [0, new Decimal(0), new Decimal(0)],
            [0, new Decimal(0), new Decimal(0)],
            [0, new Decimal(0), new Decimal(0)],
            [0, new Decimal(0), new Decimal(0)],
            [0, new Decimal(0), new Decimal(0)],
            [0, new Decimal(0), new Decimal(0)],
            [0, new Decimal(0), new Decimal(0)],
            [0, new Decimal(0), new Decimal(0)],
        ],
        ppsPeak: new Decimal(0),
        autoReset: false,
        autoSetting: 0.2,
        autoTimer: 0,
    }},
    color: "#98509f",
    resource: "collapse energy",
    row: 2,
    branches: ["g"],
    type: "normal",
    baseResource: "points",
    baseAmount() {return player.points},
    requires() {return new Decimal(2).pow(1024)},
    exponent: 0.0129762816,
    gainExp(){
        if(infinityAt() == 1024){
            return new Decimal(0.1);
        };
            return new Decimal(1);
    },
    resetDescription: "Collapse the universe to generate ",
    onPrestige(gain){
        player[this.layer].bestTime = Math.min(player[this.layer].bestTime, player[this.layer].resetTime);
        //Mess with reset count gain here
        var resetsToGain = new Decimal(1);
        
        if(hasUpgrade("i", 72)){
            resetsToGain = resetsToGain.plus(upgradeEffect("i", 72));
        }
        
        player[this.layer].resetCount = player[this.layer].resetCount.plus(resetsToGain);
        
        //Stat-tracking
        for(var i = 7; i > 0; i--){
            player[this.layer].last8[i] = player[this.layer].last8[i - 1];
        }
        player[this.layer].last8[0] = [player[this.layer].resetTime, getResetGain(this.layer), resetsToGain];
        player[this.layer].ppsPeak = new Decimal(0);
        player[this.layer].autoTimer = 0;
    },
    doReset(resettingLayer){
        if(layers[resettingLayer].row > this.row){
            layerDataReset(this.layer);
        };
        if(!hasChallenge("c", 112)){
            for(var i = 1; i <= layers[this.layer].totalBuyables; i++){
                setBuyableAmount("c", (i * 10 + 1), player[this.layer].bought[i]);
            };
        };
        if(!hasUpgrade("c", 72)){
            player.c.segments = new Decimal(0);
        };
    },
    getPointsPerSecond(){
        var result = getResetGain("c").div(player.c.resetTime);
        if(Number.isNaN(result.mag)){
            result = new Decimal(0);
        };
        return result
    },
    displayLast8(index){
        var result = index + ": "
        var resetData = player[this.layer].last8[index];
        if(resetData[2].eq(0)){
            return "";
        };
        result = result + "took " + formatTime(resetData[0]);
        result = result + ", giving " + formatWhole(resetData[1]);
        result = result + " CE and " + format(resetData[2]);
        result = result + " Collapse count. <br>(";
        var pointsPerTime = resetData[1].div(resetData[0]).times(60);
        if(pointsPerTime.gte(60)){
            pointsPerTime = pointsPerTime.div(60);
            result = result + format(pointsPerTime) + " CE/sec, ";
        } else {
            result = result + format(pointsPerTime) + " CE/min, ";
        }
        var statPerTime = resetData[2].div(resetData[0]).times(60);
        if(statPerTime.gte(60)){
            statPerTime = statPerTime.div(60);
            result = result + format(statPerTime) + " resets/sec)<br><br>";
        } else {
            result = result + format(statPerTime) + " resets/min)<br><br>";
        }
        return result;
        
    },
    effect(){
        var segmentPower = 0.15;
        if(hasUpgrade("c", 21)){
            segmentPower += 0.1;
            if(hasUpgrade("c", 51)){
                segmentPower += 0.1;
            }
        }
        if((inChallenge("c", 9001) || hasUpgrade("e", 21)) && hasUpgrade("c", 32)){
            segmentPower += 0.5;
            if(hasUpgrade("c", 51)){
                segmentPower += 0.5;
            }
        }
        if(hasUpgrade("c", 72)){
            segmentPower += 0.65;
        }
        return {
            segPow: segmentPower,
            segMult: new Decimal(1).plus(player.c.segments.pow(segmentPower)),
        };
    },
    //IMPORTANT: Number of currently implemented buyables on this layer.
    totalBuyables: 3,
    //[Max all]
    maxAll(){
        for(var i = 1; i <= layers[this.layer].totalBuyables; i++){
            if(layers[this.layer].buyables[i * 10 + 1].unlocked()){
                while(layers[this.layer].buyables[i * 10 + 1].canAfford()){
                    this.buyAThing([i * 10 + 1], layers[this.layer].buyables[i * 10 + 1].cost());
                }
            }
        }
    },
    clickables: {
        rows: 2,
        cols: 9,
        11: {
            display() {return "<h2>Max all [Shift+M]</h2>"},
            canClick(){
                for(var i = 1; i <= layers[this.layer].totalBuyables; i++){
                    if(layers[this.layer].buyables[i * 10 + 1].canAfford() && layers[this.layer].buyables[i * 10 + 1].unlocked()){
                        return true;
                    }
                }
            },
            onClick(){
                layers[this.layer].maxAll();
            },
            style: {
                width:"200px",
                height:"40px",
                "border-radius":"20px",
            }
        },
        21: {
            display() { return "<h2>Auto-Collapse: " + player[this.layer].autoReset + "</h2>" },
            unlocked(){ return hasAchievement("ach", 42) },
            canClick(){ return this.unlocked() },
            onClick() { player[this.layer].autoReset = !player[this.layer].autoReset },
            style: {
                width:"240px",
                height:"40px",
                "border-radius":"20px",
            }
        },
        22: {
            display: "-",
            unlocked(){ return hasAchievement("ach", 42) },
            canClick(){ return this.unlocked() },
            onClick() {
                if(player.c.autoSetting > 0.06){
                    player.c.autoSetting -= 0.05;
                };
            },
            style: {
                width:"24px",
                height:"24px",
                "border-radius":"8px",
            }
        },
        23: {
            display: "+",
            unlocked(){ return hasAchievement("ach", 42) },
            canClick(){ return this.unlocked() },
            onClick() {
                if(player.c.autoSetting < 1.99){
                    player.c.autoSetting += 0.05;
                };
            },
            style: {
                width:"24px",
                height:"24px",
                "border-radius":"8px",
            }
        }
    },
    //Smells like copypasta.
    //Returns the multiplier for a given buyable.
    calcMult(id){
        var result = new Decimal(1.3);
        //Collapse per-bought boosts
        if(hasChallenge("c", 21)){
            result = result.plus(0.065);
        }
        //Enhancement per-bought boosts
        if(id == 11 && hasUpgrade("e", 51)){
            result = result.plus(0.06);
        }
        if(id == 21 && hasUpgrade("e", 52)){
            result = result.plus(0.07);
        }
        if(id == 31 && hasUpgrade("e", 53)){
            result = result.plus(0.08);
        }
        
        result = result.pow(layers[this.layer].calcEffBought(id));
        if(hasUpgrade("c", 41)){
            result = result.times(upgradeEffect("c", 41));
            if((inChallenge("c", 9001) || hasUpgrade("e", 21)) && hasUpgrade("c", 52)){
                result = result.times(upgradeEffect("c", 41));
            }
        }
        if(hasUpgrade("e", 11)){
            result = result.times(upgradeEffect("e", 11));
        }
        //{Broken Scaling} reward
        if(hasChallenge("c", 121)){
            result = result.times(layers[this.layer].calcEffBought(id));
        }
        result = result.times(0.1);
        return result;
    },
    //Returns the effective bought amount for a given buyable.
    //Featuring a ridiculous amount of if() statements.
    calcEffBought(id){
        var result = player[this.layer].bought[Math.floor(id / 10)];
        if(hasUpgrade("c", 113)){
            result = result.times(8);
        }
        if(id == 21 && hasUpgrade("c", 23)){
            result = result.plus(4);
            if(hasUpgrade("c", 51)){
                result = result.plus(4);
            }
        }
        if(id == 11 && hasUpgrade("c", 71)){
            result = result.plus(16);
        };
        if(hasUpgrade("c", 151)){
            result = result.plus(upgradeEffect("c", 151));
        }
        return result;
    },
    //Returns the cost for a given buyable.
    calcCost(id, base, cml, cmi){
        var result = new Decimal(base);
        var cmult = new Decimal(cml);
        var cminc = new Decimal(cmi);
        result = result.times(cmult.pow(player[this.layer].bought[Math.floor(id / 10)]));
        if(result.gte(1e30)){
            result = result.pow(player[this.layer].bought[Math.floor(id / 10)].times(cminc).plus(1));
        }
        return result;
    },
    //Returns the display for a given buyable.
    calcDisplay(id, name, base, cml, cmi){
        return "<h2>" + name + ": " + format(getBuyableAmount(this.layer, id))
               + " (x" + format(layers[this.layer].calcMult(id)) + ")\n"
               + "Bought: " + formatWhole(player[this.layer].bought[Math.floor(id / 10)])
               + " (eff. " + format(layers[this.layer].calcEffBought(id))
               + ") | Cost: " + format(layers[this.layer].calcCost(id, base, cml, cmi)) + " CE</h2>"
    },
    //Buys a given buyable.
    buyAThing(id, cost){
        player.c.points = player.c.points.sub(cost);
        player[this.layer].bought[Math.floor(id / 10)] = player[this.layer].bought[Math.floor(id / 10)].plus(1);
        setBuyableAmount(this.layer, id, getBuyableAmount(this.layer, id).add(1))
    },
    //Total TRUE bought count
    totalBought(){
        var result = new Decimal(0);
        for(var i = 1; i <= layers[this.layer].totalBuyables; i++){
            result = result.plus(player[this.layer].bought[i]);
        };
        return result;
    },
    buyables: {
        rows: 3,
        cols: 1,
        11: {
            //cost(){ return new Decimal(69) },
            //display() { return "Donkey" },
            mult(){
                return layers[this.layer].calcMult(this.id);
            },
            effBought(){
                return layers[this.layer].calcEffBought(this.id);
            },
            cost(){
                return layers[this.layer].calcCost(this.id, 1, 512, 0.05);
            },
            display() {
                return layers[this.layer].calcDisplay(this.id, "Collapsed Triangles", 1, 512, 0.05);
            },
            canAfford() { return player.c.points.gte(this.cost()) },
            buy() {
                layers[this.layer].buyAThing(this.id, this.cost())
            },
            //need this for maxAll to work
            unlocked() { return true },
        },
        21: {
            //cost(){ return new Decimal(69) },
            //display() { return "Donkey" },
            mult(){
                return layers[this.layer].calcMult(this.id);
            },
            effBought(){
                return layers[this.layer].calcEffBought(this.id);
            },
            cost(){
                return layers[this.layer].calcCost(this.id, 4, 2048, 0.1);
            },
            display() {
                return layers[this.layer].calcDisplay(this.id, "Collapsed Pyramids", 4, 2048, 0.1);
            },
            canAfford() { return player.c.points.gte(this.cost()) },
            buy() {
                layers[this.layer].buyAThing(this.id, this.cost())
            },
            unlocked() { return getBuyableAmount(this.layer, 11).gte(1)}
        },
        31: {
            //cost(){ return new Decimal(69) },
            //display() { return "Donkey" },
            mult(){
                return layers[this.layer].calcMult(this.id);
            },
            effBought(){
                return layers[this.layer].calcEffBought(this.id);
            },
            cost(){
                return layers[this.layer].calcCost(this.id, 32, 8192, 0.15);
            },
            display() {
                return layers[this.layer].calcDisplay(this.id, "Collapsed Pentachorons", 32, 8192, 0.15);
            },
            canAfford() { return player.c.points.gte(this.cost()) },
            buy() {
                layers[this.layer].buyAThing(this.id, this.cost())
            },
            unlocked() { return getBuyableAmount(this.layer, 21).gte(1) && hasUpgrade("c", 121)},
        },
    },
    shouldNotify(){
        for(var i = 1; i <= layers[this.layer].totalBuyables; i++){
            if(layers[this.layer].buyables[i * 10 + 1].canAfford() && layers[this.layer].buyables[i * 10 + 1].unlocked()){
                return true;
            }
        }
    },
    update(diff){
        player.c.segments = player.c.segments.plus(getBuyableAmount("c", 11).times(layers.c.buyables[11].mult()).times(diff));
        for(var i = 1; i < layers[this.layer].totalBuyables; i++){
            setBuyableAmount(this.layer, (i * 10 + 1), getBuyableAmount(this.layer, (i * 10 + 1)).plus(getBuyableAmount(this.layer, (i * 10 + 11)).times(layers[this.layer].buyables[(i * 10 + 11)].mult()).times(diff)));
        }
        var currentPPS = layers[this.layer].getPointsPerSecond();
        if(currentPPS > player[this.layer].ppsPeak){
            player[this.layer].autoTimer = 0;
            player[this.layer].ppsPeak = currentPPS;
        } else {
            player[this.layer].autoTimer += diff;
            if(player[this.layer].autoReset && player[this.layer].autoTimer > player[this.layer].autoSetting){
                //debug
                //console.log(getResetGain(this.layer));
                doReset(this.layer);
            }
            //This has to go last- otherwise some order-of-operations thing prevents you from actually getting the full amount of CE
            if(!player.infinityBroken && player.points.gte(new Decimal(2).pow(infinityAt()))){
                player[this.layer].autoTimer = 9.99;
            }
        }
    },
    
    upgrades: {
        rows: 99,
        cols: 4,
        //Upgrades α
        11: {
            title: "clp1x1",
            description: "Multiplies Line Segments by 64.",
            cost: new Decimal(1),
        },
        12: {
            title: "clp1x2",
            description: "Multiplies Tesseracts by 256.",
            cost: new Decimal(1),
        },
        21: {
            title: "clp2x1",
            description: "Increases the CS exponent by 0.1.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "Collapsed Segments",
            currencyInternalName: "segments",
            cost: new Decimal(4),
            unlocked(){return player[this.layer].total.gte(3)}
        },
        22: {
            title: "clp2x2",
            description: "Start with 10 IP.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "Collapsed Segments",
            currencyInternalName: "segments",
            cost: new Decimal(32),
            unlocked(){return hasChallenge("c", 11)},
        },
        23: {
            title: "clp2x3",
            description: "Gain 4 free bought Collapsed Pyramids.",
            cost: new Decimal(8),
            unlocked(){return hasUpgrade("c", 22)},
        },
        31: {
            title: "clp3x1",
            description: "Improvement resets reset nothing.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "Collapsed Segments",
            currencyInternalName: "segments",
            cost: new Decimal(128),
            unlocked(){return hasUpgrade("c", 22)},
        },
        32: {
            title: "clp3x2",
            description: "Increases the CS exponent by 0.5, but only in challenges.",
            cost: new Decimal(16),
            unlocked(){return hasUpgrade("c", 22)},
        },
        41: {
            title: "clp4x1",
            description: "Multiply all Collapse buyables by the square root of your total IP.",
            effect(){
                return player.i.points.pow(0.5);
            },
            effectDisplay(){
                return "x" + format(this.effect());
            },
            cost: new Decimal(32),
            unlocked(){return hasChallenge("c", 21)},
        },
        42: {
            title: "clp4x2",
            description: "Improvement Points are 10% cheaper for every TRUE bought Geometry buyable.",
            effect(){
                var result = new Decimal(0);
                for(var i = 1; i <= layers.g.totalBuyables; i++){
                    result = result.plus(player.g.bought[i]);
                }
                return new Decimal(10).div(9).pow(result);
            },
            effectDisplay(){
                return "cost /= " + format(this.effect());
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "Collapsed Segments",
            currencyInternalName: "segments",
            cost: new Decimal(16384),
            unlocked(){return hasChallenge("c", 21)},
        },
        43: {
            title: "clp4x3",
            description: "Multiply all Geometry buyables by the square root of your total CE.",
            effect(){
                return player.c.total.pow(0.5);
            },
            effectDisplay(){
                return "x" + format(this.effect());
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "Collapsed Segments",
            currencyInternalName: "segments",
            cost: new Decimal(32768),
            unlocked(){return hasChallenge("c", 21)},
        },
        51: {
            title: "clp5x1",
            description: "This upgrade clones the effects of the first seven Collapse Upgrades.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "Collapsed Segments",
            currencyInternalName: "segments",
            cost: new Decimal(65536),
            unlocked(){return hasChallenge("c", 21)},
        },
        52: {
            title: "clp5x2",
            description: "This upgrade clones the effects of row 4 Collapse Upgrades AND triples the effect of {imp5x1}, but only in challenges.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "Collapsed Segments",
            currencyInternalName: "segments",
            cost: new Decimal(131072),
            unlocked(){return hasChallenge("c", 21)},
        },
        61: {
            title: "clp6x1",
            description: "The first 12 Improvements are always unlocked.",
            cost: new Decimal(32),
            unlocked(){return hasChallenge("c", 22)},
        },
        62: {
            title: "clp6x2",
            description: "Start with 20 extra unspent IP.",
            cost: new Decimal(64),
            unlocked(){return hasUpgrade("c", 61)},
        },
        63: {
            title: "clp6x3",
            description: "Start with 1.16e77 points.",
            cost: new Decimal(128),
            unlocked(){return hasUpgrade("c", 61)},
        },
        71: {
            title: "clp7x1",
            description: "Gain 16 free bought Collapsed Triangles.",
            cost: new Decimal(160),
            unlocked(){return hasUpgrade("c", 63)},
        },
        72: {
            title: "clp7x2",
            description(){
                var cchint = "";
                if(player.c.segments.gte(16777216) && !inChallenge("c", 9001) && !hasUpgrade("c", 72)){
                    cchint = "<br>(Hint: You can buy this in a challenge!)"
                }
                return  "Your Collapsed Segments do not reset on Collapse, and the CS exponent is increased by 0.65." + cchint;
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "Collapsed Segments",
            currencyInternalName: "segments",
            cost: new Decimal(4294967296),
            unlocked(){return hasUpgrade("c", 63)},
        },
        81: {
            title: "clp8x1",
            description: "Multiply the limit on Points by 2^1,024, significantly improve the CE formula, and unlock a new set of upgrades and challenges.",
            cost: new Decimal(330),
            unlocked(){return hasUpgrade("c", 72)},
        },
        //Upgrades β
        111: {
            title: "clp11x1",
            description: "Unlock Enhancements.",
            cost: new Decimal(512),
            unlocked(){return hasUpgrade("c", 81)},
        },
        112: {
            title: "clp11x2",
            description: "Multiply Enhancement Point gain by the fifth root of your total Collapse count plus one.",
            effect(){
                return player.c.resetCount.pow(0.2).plus(1);
            },
            effectDisplay(){
                return "x" + format(this.effect());
            },
            cost: new Decimal(4096),
            unlocked(){return hasUpgrade("c", 111)},
        },
        113: {
            title: "clp11x3",
            description: "Gain 7 free bought Collapse buyables for each one you actually buy.",
            cost: new Decimal(8192),
            unlocked(){return hasUpgrade("c", 111)},
        },
        121: {
            title: "clp12x1",
            description: "Unlock Collapsed Pentachorons.",
            cost: new Decimal(2.8147498e14),
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "Collapsed Segments",
            currencyInternalName: "segments",
            unlocked(){return hasUpgrade("e", 21)},
        },
        131: {
            title: "clp13x1",
            description: "Multiply the limit on Points by 2^1,024.",
            cost: new Decimal(1048576),
            unlocked(){return hasUpgrade("c", 121)},
        },
        132: {
            title: "clp13x2",
            description: "Increase the EP gain exponent by 0.2.",
            cost: new Decimal(1048576),
            unlocked(){return hasUpgrade("c", 121)},
        },
        141: {
            title: "clp14x1",
            description: "EP gain is based on total IP (instead of unspent).",
            cost: new Decimal(16777216),
            unlocked(){return hasUpgrade("c", 131) && hasUpgrade("c", 132)},
        },
        151: {
            title: "clp15x1",
            description: "Increase the bought amount of all Collapse buyables by 16 plus your Secret Power.",
            effect(){
                return player.scr.points.plus(16);
            },
            effectDisplay(){
                return "+" + formatWhole(this.effect());
            },
            cost: new Decimal(67108864),
            unlocked(){return hasUpgrade("c", 141)},
        },
        152: {
            title: "clp15x2",
            description: "The effect of {enh2x2} is based on total EP (instead of unspent).",
            cost: new Decimal(2).pow(29),
            unlocked(){return hasUpgrade("c", 141)},
        },
        161: {
            title: "clp16x1",
            description: "Multiply the increasingly-annoying limit on Points by 2^1,024 again.",
            cost: new Decimal(2).pow(33),
            unlocked(){return hasChallenge("c", 121)},
        },
        171: {
            title: "clp17x1",
            description: "Increase the EP gain exponent and base multiplier by 0.3.",
            cost: new Decimal(2).pow(35),
            unlocked(){return hasUpgrade("c", 161)},
        },
        172: {
            title: "clp17x2",
            description: "Increase the EP gain exponent by 1/16th of {clp11x2}'s effect.",
            effect(){
                return upgradeEffect("c", 112).div(16);
            },
            effectDisplay(){
                return "+" + format(this.effect());
            },
            cost: new Decimal(2).pow(37),
            unlocked(){return hasUpgrade("c", 161)},
        },
        173: {
            title: "clp17x3",
            description: "Increase the EP gain exponent by 0.032 for each TRUE bought Collapse buyable.",
            effect(){
                var result = new Decimal(0);
                for(var i = 1; i <= layers.c.totalBuyables; i++){
                    result = result.plus(player.c.bought[i]);
                }
                return new Decimal(0.032).times(result);
            },
            effectDisplay(){
                return "+" + format(this.effect());
            },
            cost: new Decimal(2).pow(41),
            unlocked(){return hasUpgrade("c", 161)},
        },
    },
    
    challenges: {
        rows: 99,
        cols: 2,
        //Challenges α
        11: {
            name: "Spendthrift",
            challengeDescription: "Bonuses based on total IP instead scale off of <i>unspent</i> IP.",
            goalDescription: "Collapse the universe.",
            canComplete(){return canReset("c")},
            onComplete(){
                doReset(this.layer);
            },
            rewardDescription: "AUTOMATIC. MAX. ALL. <br>Also start with 2 IP and the first two Improvements.",
            countsAs: [9001], //For effects that work in any challenge
        },
        21: {
            name: "Free to Play",
            challengeDescription: "Only free bought Geometry buyables increase multiplier, BUT the multiplier for each bought Geometry buyable is increased by 0.65.",
            goalDescription: "Collapse the universe.",
            canComplete(){return canReset("c")},
            onComplete(){
                doReset(this.layer);
            },
            rewardDescription: "Unlock Automatic IP Resets, and the multiplier for each bought Geometry and Collapse buyable is increased by 0.065.",
            unlocked(){ return hasChallenge("c", 11)},
            countsAs: [9001], //For effects that work in any challenge
        },
        22: {
            name: "Pay to Win",
            challengeDescription: "Free bought Geometry buyables do nothing, BUT the effect of {imp1x1} is raised to the power of (owned improvements)^1.2.",
            goalDescription: "Collapse the universe.",
            canComplete(){return canReset("c")},
            onComplete(){
                doReset(this.layer);
            },
            rewardDescription: "Unlock Automatic Improvements, and the effect of {imp1x1} is raised to the power of (owned improvements)^0.4.",
            rewardEffect(){
                return Math.pow(player.i.upgrades.length, 0.4);
            },
            rewardDisplay(){
                return "^" + format(this.rewardEffect());
            },
            unlocked(){ return hasChallenge("c", 21)},
            countsAs: [9001], //For effects that work in any challenge
        },
        //Challenges β
        111: {
            name: "One-Dimensional",
            challengeDescription(){
                var desc = "Line Segments' multiplier is squared. All other Geometry buyables are locked.";
                return desc;
            },
            goalDescription: "Collapse the universe.",
            canComplete(){return canReset("c")},
            onComplete(){
                doReset(this.layer);
            },
            rewardDescription: "Unlock Automatic Collapse, and Line Segments' multiplier is raised to the power of 1.05.",
            unlocked(){ return hasUpgrade("c", 81)},
            countsAs: [9001],
        },
        112: {
            name: "Picky",
            challengeDescription(){
                var desc = "You can only have 5 Improvements.<br>(Auto-Improve is disabled.)";
                return desc;
            },
            goalDescription: "Collapse the universe for at least 777 CE. (about 1e531 Points)",
            canComplete(){return getResetGain("c").gte(777)},
            onComplete(){
                doReset(this.layer);
            },
            rewardDescription: "Unlock 3 new Improvements, and Collapse buyables do not reset on Collapse.",
            unlocked(){ return hasChallenge("c", 111)},
            countsAs: [9001],
        },
        121: {
            name: "Broken Scaling",
            challengeDescription(){
                var desc = "The multiplier for buying Geometry buyables is linear (instead of exponential).";
                return desc;
            },
            goalDescription: "Collapse the universe for at least 10 CE. (about 2.1e385 Points)",
            canComplete(){return getResetGain("c").gte(10)},
            onComplete(){
                doReset(this.layer);
            },
            rewardDescription: "Each Geometry and Collapse buyable is multiplied by its effective bought amount.",
            unlocked(){ return hasChallenge("c", 112)},
            countsAs: [9001],
        },
        122: {
            name: "Kitchen Sink",
            challengeDescription(){
                var desc = "All previous Collapse Challenges are active.";
                return desc;
            },
            goalDescription: "Collapse the universe.",
            canComplete(){return canReset("c")},
            onComplete(){
                doReset(this.layer);
            },
            rewardDescription: "Unlock a third set of Upgrades and Challenges, and boost the rewards of {Free to Play}, {Pay to Win}, and {One-Dimensional} by 50%.",
            unlocked(){ return hasChallenge("c", 121)},
            countsAs: [11, 21, 22, 111, 112, 121, 9001],
        }
    },
    
    hotkeys: [
        {key: "c", description: "C: Collapse the universe", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        {key: "M", description: "Shift+M: Max all (Collapse layer)", onPress(){layers[this.layer].maxAll()}}
    ],
    componentStyles: {
        "prestige-button"() { return {
            width:"600px",
            height:"60px",
            "font-size":"16px",
            "line-height":"80%",
            "margin-bottom":"10px",
            "border-radius":"15px",
        }},
        "buyable"() { return {
            width:"600px",
            height:"60px",
            "margin-bottom":"10px",
            "border-radius":"15px",
        }},
        "upgrade"() { return {
            width:"160px",
            height:"160px",
        }},
        "challenge"() { return {
            width:"260px",
            height:"260px",
            "font-size":"13px",
            "border-radius":"10%",
        }},
    },
    microtabs: {
        energyStuff: {
            "This button shouldn't be visible": {
                content: [
                    "blank",
                    ["raw-html",
                        function(){
                            return "You have <h2 style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 10px;'>" + formatWhole(player.c.points) + "</h2> collapse energy"
                        }],
                    "blank",
                    "prestige-button",
                    "blank",
                    ["raw-html",
                        function(){
                            var pointsPerSecond = layers.c.getPointsPerSecond();
                            if(pointsPerSecond.lt(1)){
                                return "(Currently <b style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 8px;'>" + format(pointsPerSecond.times(60)) + "</b> CE/min)"
                            } else {
                                return "(Currently <b style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 8px;'>" + format(pointsPerSecond) + "</b> CE/sec)"
                            };
                        }],
                    "blank",
                    ["clickable", 21],
                    "blank",
                    ["row", [
                        ["raw-html", 
                            function(){
                                if(hasAchievement("ach", 42)){
                                    return "Auto-Collapse triggers if CE/sec has not peaked in&nbsp;"
                                };
                                return ""
                            }],
                        ["clickable", 22],
                        ["raw-html",
                            function(){
                                if(hasAchievement("ach", 42)){
                                    return "&nbsp;<b style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 8px;'>" + format(player.c.autoSetting) + "</b>&nbsp;"
                                };
                                return ""
                            }],
                        ["clickable", 23],
                        ["raw-html", 
                            function(){
                                if(hasAchievement("ach", 42)){
                                    return "&nbsp;seconds"
                                };
                                return ""
                            }],
                    ]]
                ],
                style: {
                    "margin": "20px 40px",
                },
                buttonStyle: {
                    "display": "none",
                }
            }
        },
        actualContent: {
            "Buyables": {
                content: [
                    ["raw-html",
                        function(){
                            return "You have <h2 style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 10px;'>" + format(player.c.segments) + "</h2> Collapsed Segments.<br>All Geometry multipliers are multiplied by (CS^<b style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 8px;'>" + format(layers.c.effect().segPow) + "</b>+1) = <h2 style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 10px;'>" + format(layers.c.effect().segMult) + "</h2>.";
                        }],
                    "blank",
                    ["clickable", 11],
                    "blank",
                    "buyables",
                ],
                style: {
                    "background-color": "#241230",
                },
                buttonStyle: {
                    "background-color": "#241230",
                    "border-color": "#c3ade3",
                },
            },
            "Upgrades": {
                content: [
                    ["raw-html",
                        function(){
                            return "You have <h2 style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 10px;'>" + format(player.c.segments) + "</h2> Collapsed Segments.";
                        }],
                    ["raw-html",
                        function(){ 
                            return "<span style='color:#1f1e33;'>Don't mind me I'm just here to make the nested microtabs look slightly better</span>"
                        }],
                    "blank",
                    ["microtabs", "upgradeTabs"],
                    "blank",
                    "blank",
                ],
                style: {
                    "background-color": "#1f1e33",
                },
                buttonStyle: {
                    "background-color": "#1f1e33",
                    "border-color": "#c3ade3",
                },
                unlocked() {
                    return player.c.resetCount.gte(2);
                }
            },
            "Challenges": {
                content: [
                    ["raw-html",
                        function(){
                            return "You have <h2 style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 10px;'>" + format(player.c.segments) + "</h2> Collapsed Segments.";
                        }],
                    ["raw-html",
                        function(){ 
                            return "<span style='color:#301224;'>Don't mind me I'm just here to make the nested microtabs look slightly better</span>"
                        }],
                    "blank",
                    ["microtabs", "challengeTabs"],
                    "blank",
                    "blank",
                ],
                style: {
                    "background-color": "#301224",
                },
                buttonStyle: {
                    "background-color": "#301224",
                    "border-color": "#c3ade3",
                },
                unlocked() {
                    return player.c.resetCount.gte(3);
                }
            },
            "Stats": {
                content: [
                    ["raw-html",
                        function(){
                            return "You have <h2 style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 10px;'>" + format(player.c.segments) + "</h2> Collapsed Segments.<br>All Geometry multipliers are multiplied by (CS^<b style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 8px;'>" + format(layers.c.effect().segPow) + "</b>+1) = <h2 style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 10px;'>" + format(layers.c.effect().segMult) + "</h2>.";
                        }],
                    "blank", "blank",
                    ["raw-html",
                        function(){
                            return "You have generated a total of <b style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 8px;'>" + formatWhole(player.c.total) + "</b> CE."
                        }],
                    ["raw-html",
                        function(){
                            return "You have collapsed the universe <b style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 8px;'>" + formatWhole(player.c.resetCount) + "</b> times in total."
                        }],
                    ["raw-html",
                        function(){
                            return "You have spent <b style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 8px;'>" + formatTime(player.c.resetTime) + "</b> in this universe."
                        }],
                    ["raw-html",
                        function(){
                            return "Your fastest collapse took <b style='color:#c3ade3; text-shadow:#c3ade3 0px 0px 8px;'>" + formatTime(player.c.bestTime) + "</b>."
                        }],
                    "blank",
                    "blank",
                    ["raw-html",
                        function(){
                            return "<b>Last 8 Collapse resets:</b>";
                        }],
                    "blank",
                    ["raw-html",
                        function(){
                            return layers.c.displayLast8(0);
                        }],
                    ["raw-html",
                        function(){
                            return layers.c.displayLast8(1);
                        }],
                    ["raw-html",
                        function(){
                            return layers.c.displayLast8(2);
                        }],
                    ["raw-html",
                        function(){
                            return layers.c.displayLast8(3);
                        }],
                    ["raw-html",
                        function(){
                            return layers.c.displayLast8(4);
                        }],
                    ["raw-html",
                        function(){
                            return layers.c.displayLast8(5);
                        }],
                    ["raw-html",
                        function(){
                            return layers.c.displayLast8(6);
                        }],
                    ["raw-html",
                        function(){
                            return layers.c.displayLast8(7);
                        }],
                    "blank",
                    "blank",
                ],
                style: {
                    "background-color": "#241230",
                },
                buttonStyle: {
                    "background-color": "#241230",
                    "border-color": "#c3ade3",
                },
            }
        },
        upgradeTabs: {
            "α": {
                content: [
                    ["row", [
                        ["upgrade", 11],
                        ["upgrade", 12],
                    ]],
                    ["row", [
                        ["upgrade", 21],
                        ["upgrade", 22],
                        ["upgrade", 23],
                    ]],
                    ["row", [
                        ["upgrade", 31],
                        ["upgrade", 32],
                    ]],
                    ["row", [
                        ["upgrade", 41],
                        ["upgrade", 42],
                        ["upgrade", 43],
                    ]],
                    ["row", [
                        ["upgrade", 51],
                        ["upgrade", 52],
                    ]],
                    ["row", [
                        ["upgrade", 61],
                        ["upgrade", 62],
                        ["upgrade", 63],
                    ]],
                    ["row", [
                        ["upgrade", 71],
                        ["upgrade", 72],
                    ]],
                    ["row", [
                        ["upgrade", 81],
                    ]],
                    "blank",
                ],
                style: {
                    "background-color": "#1f1e33",
                    "margin": "20px",
                },
                buttonStyle: {
                    "background-color": "#2f2d4c",
                    "border-color": "#c3ade3",
                },
                unlocked() {
                    return player.c.resetCount.gte(2);
                }
            },
            "β": {
                content: [
                    ["row", [
                        ["upgrade", 111],
                        ["upgrade", 112],
                        ["upgrade", 113],
                    ]],
                    ["row", [
                        ["upgrade", 121],
                    ]],
                    ["row", [
                        ["upgrade", 131],
                        ["upgrade", 132],
                    ]],
                    ["row", [
                        ["upgrade", 141],
                    ]],
                    ["row", [
                        ["upgrade", 151],
                        ["upgrade", 152],
                    ]],
                    ["row", [
                        ["upgrade", 161],
                    ]],
                    ["row", [
                        ["upgrade", 171],
                        ["upgrade", 172],
                        ["upgrade", 173],
                    ]],
                    "blank",
                ],
                style: {
                    "background-color": "#1f1e33",
                    "margin": "20px",
                },
                buttonStyle: {
                    "background-color": "#3e3c66",
                    "border-color": "#c3ade3",
                },
                unlocked() {
                    return hasUpgrade("c", 81);
                }
            }
        },
        challengeTabs: {
            "α": {
                content: [
                    ["row", [
                        ["challenge", 11],
                    ]],
                    ["row", [
                        ["challenge", 21],
                        ["challenge", 22],
                    ]],
                    "blank",
                ],
                style: {
                    "background-color": "#301224",
                    "margin": "20px",
                },
                buttonStyle: {
                    "background-color": "#481b36",
                    "border-color": "#c3ade3",
                },
                unlocked() {
                    return player.c.resetCount.gte(2);
                }
            },
            "β": {
                content: [
                    ["row", [
                        ["challenge", 111],
                        ["challenge", 112],
                    ]],
                    ["row", [
                        ["challenge", 121],
                        ["challenge", 122],
                    ]],
                    "blank",
                ],
                style: {
                    "background-color": "#301224",
                    "margin": "20px",
                },
                buttonStyle: {
                    "background-color": "#602448",
                    "border-color": "#c3ade3",
                },
                unlocked() {
                    return hasUpgrade("c", 81);
                }
            }
        }
    },
    tabFormat: [
        ["microtabs", "energyStuff"],
        "blank",
        ["microtabs", "actualContent"]
    ],
    layerShown(){return (player.i.points.gte(124) || hasAchievement("ach", "25"))}
})

addLayer("e", {
    name: "Enhancements",
    symbol: "E",
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        total: new Decimal(0),
        autoEnhance: false,
    }},
    color: "#7de8f6",
    resource: "enhancement points",
    row: 2,
    branches: ["i", "c"],
    type: "none",
    //Enhancement Points are gained over time based on Improvement Points. These affect that rate.
    gainMult(){
        var result = new Decimal(0.1);
        //Base increases
        if(hasUpgrade("c", 171)){
            result = result.plus(0.3);
        }
        //Multipliers
        if(hasUpgrade("c", 112)){
           result = result.times(upgradeEffect("c", 112));
        };
        return result;
    },
    gainExp(){
        var result = new Decimal(0.3);
        if(hasUpgrade("c", 132)){
            result = result.plus(0.2);
        }
        if(hasUpgrade("c", 171)){
            result = result.plus(0.3);
        }
        if(hasUpgrade("c", 172)){
            result = result.plus(upgradeEffect("c", 172));
        }
        if(hasUpgrade("c", 173)){
            result = result.plus(upgradeEffect("c", 173));
        }
        
        return result;
    },
    gainRate(){
        var result = player.i.unspent;
        if(hasUpgrade("c",141)){
            result = player.i.points;
        }
        return result.pow(layers[this.layer].gainExp()).times(layers[this.layer].gainMult());
    },
    update(diff){
        if(layers[this.layer].layerShown()){
            player.e.points = player.e.points.plus(layers[this.layer].gainRate().times(diff));
            player.e.total = player.e.total.plus(layers[this.layer].gainRate().times(diff));
        };
    },
    
    upgrades: {
        rows: 99,
        cols: 4,
        11: {
            title: "enh1x1",
            description: "Multiply all Collapse buyables by the cube root of your current EP plus one.",
            effect(){
                return player.e.points.pow(1.0/3).plus(1);
            },
            effectDisplay(){
                return "x" + format(this.effect());
            },
            cost: new Decimal(7.5),
        },
        21: {
            title: "enh2x1",
            description: "The upgrades {clp3x2} and {clp5x2} work even if you are not in a challenge.",
            cost: new Decimal(15.5),
            unlocked(){return hasUpgrade("e", 11)},
        },
        22: {
            title: "enh2x2",
            description(){
                var result = "Multiply all Geometry buyables by your current EP plus one.";
                if(hasUpgrade("c", 152)){
                    result = "Multiply all Geometry buyables by your total EP plus one.";
                }
                if(hasUpgrade("i", 61)){
                    result = result + "<br>{i6x1}: Effect ^4";
                };
                return result;
            },
            effect(){
                var result = player.e.points.plus(1);
                if(hasUpgrade("c", 152)){
                    result = player.e.total.plus(1);
                }
                if(hasUpgrade("i", 61)){
                    result = result.pow(4);
                };
                return result;
            },
            effectDisplay(){
                return "x" + format(this.effect());
            },
            cost: new Decimal(31.5),
            unlocked(){return hasUpgrade("e", 11)},
        },
        31: {
            title: "enh3x1",
            description: "Gain 4 free bought Cubes for each owned Collapse Upgrade.",
            effect(){
                return player.c.upgrades.length * 4;
            },
            effectDisplay(){
                return "+" + formatWhole(this.effect());
            },
            cost: new Decimal(1023.5),
            unlocked(){return hasChallenge("c", 111)},
        },
        32: {
            title: "enh3x2",
            description: "Gain 8 free bought Squares for each TRUE bought Collapse buyable.",
            effect(){
                return layers.c.totalBought().times(8);
            },
            effectDisplay(){
                return "+" + formatWhole(this.effect());
            },
            cost: new Decimal(1023.5),
            unlocked(){return hasChallenge("c", 111)},
        },
        33: {
            title: "enh3x3",
            description: "Gain 16 free bought Line Segments for each owned Enhancement.",
            effect(){
                return player.e.upgrades.length * 16;
            },
            effectDisplay(){
                return "+" + formatWhole(this.effect());
            },
            cost: new Decimal(2047.5),
            unlocked(){return hasChallenge("c", 111)},
        },
        41: {
            title: "enh4x1",
            description: "Increase the multiplier for each bought Tesseract by 0.10.",
            cost: new Decimal(2047.5),
            unlocked(){return hasUpgrade("e", 33)},
        },
        42: {
            title: "enh4x2",
            description: "Increase the multiplier for each bought Cube by 0.12.",
            cost: new Decimal(8191.5),
            unlocked(){return hasUpgrade("e", 33)},
        },
        43: {
            title: "enh4x3",
            description: "Increase the multiplier for each bought Square by 0.14.",
            cost: new Decimal(32767.5),
            unlocked(){return hasUpgrade("e", 33)},
        },
        44: {
            title: "enh4x4",
            description: "Increase the multiplier for each bought Line Segment by 0.16.",
            cost: new Decimal(131071.5),
            unlocked(){return hasUpgrade("e", 33)},
        },
        51: {
            title: "enh5x1",
            description: "Increase the multiplier for each bought Collapsed Triangle by 0.06.",
            cost: new Decimal(2).pow(21),
            unlocked(){return hasUpgrade("e", 44)},
        },
        52: {
            title: "enh5x2",
            description: "Increase the multiplier for each bought Collapsed Pyramid by 0.07.",
            cost: new Decimal(2).pow(25),
            unlocked(){return hasUpgrade("e", 44)},
        },
        53: {
            title: "enh5x3",
            description: "Increase the multiplier for each bought Collapsed Pentachoron by 0.08.",
            cost: new Decimal(2).pow(29),
            unlocked(){return hasUpgrade("e", 44)},
        },
    },
    
    componentStyles: {
        "upgrade"() { return {
            width:"160px",
            height:"160px",
        }},
    },
    tabFormat: [
        ["raw-html",
            function(){
                return "You have <h2 style='color:#7de8f6; text-shadow:#7de8f6 0px 0px 10px;'>" + formatWhole(player.e.points) + "</h2> enhancement points"
            }],
        ["raw-html",
            function(){
                return "You have gained a total of <b style='color:#7de8f6; text-shadow:#7de8f6 0px 0px 8px;'>" + formatWhole(player.e.total) + "</b> enhancement points"
            }],
        "blank",
        ["raw-html",
            function(){
                return "You are gaining <b style='color:#7de8f6; text-shadow:#7de8f6 0px 0px 8px;'>" + format(layers.e.gainRate()) + "</b> EP per second based on your IP."
            }],
        "blank",
        ["raw-html",
            function(){
                var result = "{ (unspent IP";
                if(hasUpgrade("c", 141)){
                    result = "{ (total IP"
                }
                return result + "^<b style='color:#7de8f6; text-shadow:#7de8f6 0px 0px 8px;'>" + format(layers.e.gainExp()) + "</b>) * <b style='color:#7de8f6; text-shadow:#7de8f6 0px 0px 8px;'>" + format(layers.e.gainMult()) + "</b> }"
            }],
        "blank", "blank",
        "upgrades",
    ],
    layerShown(){return hasUpgrade("c", 111)}
})