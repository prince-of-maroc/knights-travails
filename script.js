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

function convertToCoordinates(chessNotion){
    const [letter, y] = chessNotion;
    let x;
    switch(letter){
        case 'a':
            x = 1;
            break;
        case 'b':
            x = 2;
            break;
        case 'c':
            x = 3;
            break;
        case 'd':
            x = 4;
            break;
        case 'e':
            x = 5;
            break;
        case 'f':
            x = 6;
            break;
        case 'g':
            x = 7;
            break;
        case 'h':
            x = 8;
            break;
    }
    return [x,parseInt(y)]
}

function NodeFactory(position){
    return {
        chessN: position,
        coordN: convertToCoordinates(position)
    }
}

function knightMoves(spaceA, spaceB, knightDecisionTree = {}){
    // Assume spaces are given in chess notation
    let positionA = NodeFactory(spaceA);
}

knightMoves('a1', 'e4')