var getGrid = function(gridSize){
    var tiles = "\n";
    for (var i = 0; i < gridSize; i++){
        for(var j = 0; j < gridSize; j++){
            if ((j+i)%2 === 0 ){
                tiles += " ";
            } else {
                tiles += "#";
            }
        }
        tiles+="\n";
    }
    return tiles;
};

console.log(getGrid(8));