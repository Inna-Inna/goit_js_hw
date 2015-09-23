var getGrid = function(gridSize){
    var tile = "\n";
    for (var i = 1; i < gridSize; i++){
        for(var j = 1; j <= gridSize; j++){
            if ((j+i)%2 ===0 ){
                tile += "#";
            } else {
                tile += " ";
            }
        }
        tile+="\n";
    }
    return tile;
};

console.log(getGrid(8));