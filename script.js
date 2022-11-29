function convertToChessNotation(coords){
    const [x, y] = coords;
    let letter;
    switch(x) {
        case 1:
            letter = 'a';
            break;
        case 2:
            letter = 'b';
            break;
        case 3:
            letter = 'c';
            break;
        case 4:
            letter = 'd';
            break;
        case 5:
            letter = 'e';
            break;
        case 6:
            letter = 'f';
            break;
        case 7:
            letter = 'g';
            break;
        case 8:
            letter = 'h';
            break;
    }
    return letter+y;
}

function knightMoves(spaceA, spaceB){
    //    
}