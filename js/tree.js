var layoutInfo = {
    startTab: "none",
	showTree: true,

    treeLayout: ""

    
}


// Ghost nodes
addNode("g0", {
    row: 1,
    position: -1,
    layerShown(){
        if(layers.e.layerShown()){
            return "ghost";
        }
        return false;
    },
}, 
)
addNode("g1", {
    row: 2,
    position: 1,
    layerShown(){
        if(layers.e.layerShown()){
            return "ghost";
        }
        return false;
    },
}, 
)


addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]]
})