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
                return "???";
            },
            tooltip(){
                if(hasAchievement("ach", this.id)){
                    return "Bought a single Line Segment. Congratulations, I guess??? (1AP)";
                }
                return "Buy a single Line Segment. (1AP)";
            },
            done(){return getBuyableAmount("g", 11).gte(1)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            //images to be added later
            //image: "../images/ach11.jpg",
        },
        12: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Four Squared";
                }
                return "???";
            },
            tooltip(){
                if(hasAchievement("ach", this.id)){
                    return "Bought a single Square, demonstrating the patience required to wait 10.7 seconds. (1AP)";
                }
                return "Buy a single Square. (1AP)";
            },
            done(){return getBuyableAmount("g", 21).gte(1)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            //image: "../images/ach12.jpg",
        },
        13: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Wait, there's only 3?";
                }
                return "???";
            },
            tooltip(){
                if(hasAchievement("ach", this.id)){
                    return "Bought a single Cube. Row 2 draws near! (1AP)";
                }
                return "Buy a single Cube. (1AP)";
            },
            done(){return getBuyableAmount("g", 31).gte(1)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            //image: "../images/ach13.jpg",
        },
        14: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Intermediary Achievement";
                }
                return "???";
            },
            tooltip(){
                if(hasAchievement("ach", this.id)){
                    return "Reached 1,048,576 Points. (1AP)";
                }
                return "Get 1,048,576 Points. (1AP)";
            },
            done(){return player.points.gte(1048576)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            //image: "../images/ach14.jpg",
        },
        15: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "That wasn't so hard";
                }
                return "???";
            },
            tooltip(){
                if(player.ach.points.lt(4)){
                    return "Requirement shown at 4 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Got an Improvement Point. (1AP)";
                }
                return "Get an Improvement Point. (1AP)";
            },
            done(){return player.i.points.gte(1)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            //image: "../images/ach15.jpg",
        },
        16: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Hat Trick";
                }
                return "???";
            },
            tooltip(){
                if(player.ach.points.lt(4)){
                    return "Requirement shown at 4 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Reached 3 Improvement Points. No more cheap upgrades for you! (2AP)";
                }
                return "Get 3 Improvement Points. (2AP)";
            },
            done(){return player.i.points.gte(3)},
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            //image: "../images/ach16.jpg",
        },
        21: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Great Deal";
                }
                return "???";
            },
            tooltip(){
                if(player.ach.points.lt(7)){
                    return "Requirement shown at 7 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Got 128 total bonus bought Geometry buyables. (actually this just fires when you get i2x4 because i'm lazy) (1AP)";
                }
                return "Get 128 total bonus bought Geometry buyables. (1AP)";
            },
            done(){return hasUpgrade("i", 24)},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            //image: "../images/ach21.jpg",
        },
        22: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "[FOUR DIMENSIONS]";
                }
                return "???";
            },
            tooltip(){
                if(player.ach.points.lt(7)){
                    return "Requirement shown at 7 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Unlocked Tesseracts. (2AP)";
                }
                return "Buy the Improvement {imp90x1}. (2AP)";
            },
            done(){return player[this.layer].triggerAchievement22Dammit},
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            //image: "../images/ach22.jpg",
        },
        23: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Looks Kinda Like a Jewel Sorta";
                }
                return "???";
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
            onComplete(){player.ach.points = player.ach.points.plus(2)},
            //image: "../images/ach23.jpg",
        },
        24: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Extreme Inflation";
                }
                return "???";
            },
            tooltip(){
                if(player.ach.points.lt(10)){
                    return "Requirement shown at 10 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Witnessed a Geometry buyable jump up in cost dramatically. (1AP)";
                }
                return "Get a Geometry buyable's cost over 1e300. (1AP)";
            },
            done(){return (layers.g.buyables[11].cost().gte("1e400") || layers.g.buyables[21].cost().gte("1e400") || layers.g.buyables[31].cost().gte("1e400") || layers.g.buyables[41].cost().gte("1e400"))},
            onComplete(){player.ach.points = player.ach.points.plus(1)},
            //image: "../images/ach24.jpg",
        },
        25: {
            name(){
                if(hasAchievement("ach", this.id) || this.done()){
                    return "Ain't enough room for the 2^1,024 of us";
                }
                return "???";
            },
            tooltip(){
                if(player.ach.points.lt(10)){
                    return "Requirement shown at 10 Achievement Power.";
                }
                if(hasAchievement("ach", this.id)){
                    return "Collapse the universe. (5AP)";
                }
                return "Perform a row 3 reset. (5AP)";
            },
            //Haven't added Collapse yet - short circuit evaluation to the rescue!
            done(){return false && player.c.points.gte(1)},
            //image: "../images/ach24.jpg",
        }
    },
    tabFormat: [
        "main-display",
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
    }},
    color: "#206010",
    resource: "This shouldn't be visible", // Name of prestige currency
    tooltip(){ return "Geometry"},
    row: 0, // Row the layer is in on the tree (0 is the first row)
    //IMPORTANT: Number of currently implemented buyables on this layer.
    totalBuyables: 4,
    //[Max all]
    maxAll(){
        //Lag tracker. I feel like I'll need this later.
        var startTime = Date.now();
        for(var i = 1; i <= layers[this.layer].totalBuyables; i++){
            if(layers[this.layer].buyables[i * 10 + 1].unlocked()){
                while(layers[this.layer].buyables[i * 10 + 1].canAfford()){
                    this.buyAThing([i * 10 + 1], layers[this.layer].buyables[i * 10 + 1].cost());
                }
            }
        }
        if(Date.now() - startTime > 1){
            console.log("Maxed all Geometry buyables in " + (Date.now() - startTime) + "ms");
        }
    },
    clickables: {
        rows: 1,
        cols: 69,
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
            }
        }
    },
    
    //Some functions regarding buyables, to make this code less of a horrible violation of DRY.
    //Downside: Targeting specific buyables with effects is a bit unwieldy, but it's not /that/ bad.
    //Returns the multiplier for a given buyable.
    calcMult(id){
        var result = new Decimal(1.5);
        if(hasUpgrade("i", 21)){
            result = result.plus(0.15);
        }
        if(hasUpgrade("i", 51)){
            result = result.plus(0.033);
        }
        result = result.pow(layers[this.layer].calcEffBought(id));
        if(hasUpgrade("i", 11)){
            result = result.times(8);
        }
        if(hasUpgrade("i", 31)){
            result = result.times(upgradeEffect("i", 31));
        }
        return result;
    },
    //Returns the effective bought amount for a given buyable.
    //Featuring Tukkun levels of if() statements.
    calcEffBought(id){
        var result = player[this.layer].bought[Math.floor(id / 10)];
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
        return result;
    },
    //Returns the cost for a given buyable.
    calcCost(id, base, cml, cmi){
        var result = new Decimal(base);
        var cmult = new Decimal(cml);
        var cminc = new Decimal(cmi);
        result = result.times(cmult.pow(player[this.layer].bought[Math.floor(id / 10)]));
        if(result.gte(1e300)){
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
                return layers[this.layer].calcCost(this.id, 256, 1024, 0.014);
            },
            display() {
                return layers[this.layer].calcDisplay(this.id, "Cubes", 256, 1024, 0.014);
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                layers[this.layer].buyAThing(this.id, this.cost())
            },
            unlocked() { return getBuyableAmount(this.layer, 21).gte(1)}
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
            unlocked() { return getBuyableAmount(this.layer, 31).gte(1) && hasAchievement("ach", 22)}
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
    hotkeys: [
        {key: "m", description: "M: Max all (Geometry layer)", onPress(){layers[this.layer].maxAll()}},
    ],
    componentStyles: {
        "buyable"() { return {
            width:"600px",
            height:"60px",
            "margin-bottom":"10px",
        }}
    },
    tabFormat: [
        "clickables",
        "blank",
        "buyables"
    ],
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
    canBuyMax() {return true},
    onPrestige(gain){
        player[this.layer].unspent = player[this.layer].unspent.plus(gain);
    },
    upgrades: {
        rows: 99,
        cols: 5,
        11: {
            title: "imp1x1",
            description: "Multiplies all Geometry multipliers by 8.",
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
            description: "Increases the bought amount of all Geometry buyables based on total IP. {(x*10)^0.5}",
            effect(){
                var result = player.i.points.times(10).pow(0.5);
                if(result.gte(10)){
                    result = result.times(100).pow(1.0/3);
                }
                return result;
            },
            effectDisplay(){
                if(this.effect().gte(10)){
                    return "+" + format(this.effect()) + " (softcapped)";
                }
                return "+" + format(this.effect());
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(1),
            unlocked(){return hasUpgrade(this.layer, 11) && hasUpgrade(this.layer, 12)}
        },
        21: {
            title: "imp2x1",
            description: "Increases the multiplier for each bought Geometry buyable by 0.15.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(2),
            unlocked(){return hasUpgrade(this.layer, 13)}
        },
        22: {
            title: "imp2x2",
            description: "Increases the bought amount of Line Segments by 16.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(3),
            unlocked(){return hasUpgrade(this.layer, 21)}
        },
        23: {
            title: "imp2x3",
            description: "Increases the bought amount of Squares by 32.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(3),
            unlocked(){return hasUpgrade(this.layer, 22)}
        },
        24: {
            title: "imp2x4",
            description: "Increases the bought amount of Cubes by 64.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(4),
            unlocked(){return hasUpgrade(this.layer, 23)}
        },
        31: {
            title: "imp3x1",
            description: "Multiplies all Geometry multipliers by your IP.",
            effect(){return player.i.points},
            effectDisplay(){return "x" + formatWhole(player.i.points)},
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(9),
            unlocked(){return hasUpgrade(this.layer, 24)}
        },
        32: {
            title: "imp3x2",
            description: "Increases the bought amount of Tesseracts by 128.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(16),
            unlocked(){return hasAchievement("ach", 22) && hasUpgrade(this.layer, 31)}
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
                    return "+" + format(this.effect()) + " (softcapped)";
                }
                return "+" + format(this.effect());
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(23),
            unlocked(){return hasUpgrade(this.layer, 32)}
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
                    return "+" + format(this.effect()) + " (softcapped)";
                }
                return "+" + format(this.effect());
            },
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(11),
            unlocked(){return hasUpgrade(this.layer, 33)}
        },
        42: {
            title: "imp4x2",
            description: "Increases the bought amount of all Geometry buyables by 42.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(16),
            unlocked(){return hasUpgrade(this.layer, 33)}
        },
        51: {
            title: "imp5x1",
            description: "Increases the multiplier for each bought Geometry buyable by 0.033.",
            currencyLocation(){return player[this.layer]},
            currencyDisplayName: "unspent IP",
            currencyInternalName: "unspent",
            cost: new Decimal(36),
            unlocked(){return hasUpgrade(this.layer, 42)}
        },
        901: {
            title: "imp90x1",
            description: "Resets Geometry AND this layer, but PERMANENTLY unlocks Tesseracts and new Improvements.",
            cost: new Decimal(30),
            unlocked(){return hasUpgrade(this.layer, 31) && !hasAchievement("ach", 22)},
            onPurchase(){
                player.ach.triggerAchievement22Dammit = true;
                layerDataReset(this.layer);
            }
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["raw-html",
            function(){
                return "You have <h2 style='color:#add8e6; text-shadow:#add8e6 0px 0px 10px;'>" + formatWhole(player.i.unspent) + "</h2> unspent IP"
            }],
        "blank",
        "upgrades"
    ],
    layerShown(){return (getBuyableAmount("g", 31).gte(1) || hasAchievement("ach", "14"))}
})
