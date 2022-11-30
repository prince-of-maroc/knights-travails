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

function getLegalMoves(space) {
    const [x,y] = space;
    let legalMoves = [];
    let possibleMoves = [
        [x-2, y-1],
        [x-2, y+1],
        [x+2, y-1],
        [x+2, y+1],
        [x+1, y+2],
        [x-1, y+2],
        [x+1, y-2],
        [x-1, y-2]
    ]

    for(const position of possibleMoves){
        const [x, y] = position;

        if(x < 1 || y < 1 || x > 8 || y > 8){
            continue;
        }
        legalMoves.push(position);
    }
    return legalMoves;
}

function clone (src) {
    return JSON.parse(JSON.stringify(src));
}


function buildDecisionTree(space, decisionTree = {}){
    let possibleMoves = getLegalMoves(convertToCoordinates(space));
    
    decisionTree[space] = [];
    possibleMoves.forEach(move => {
        move = convertToChessNotation(move);
        decisionTree[space].push(move);
    })

    for(let possibleMove of decisionTree[space]){
        if(!decisionTree.hasOwnProperty(possibleMove)){
            buildDecisionTree(possibleMove, decisionTree)
        }
    }
    return decisionTree;
}

function knightMoves(spaceA, spaceB){
    let decisionTree = buildDecisionTree(spaceA);

    let queue = [
        {
            space: spaceA,
            step: 0,
            pastSteps: []
        }
    ];

    while(queue.length > 0){
        let currentObj = queue.shift();
        let pastStep = clone(currentObj.pastSteps);
        pastStep.push(currentObj.space);
        if(currentObj.space == spaceB){
            console.log(currentObj.space)
            return currentObj.pastSteps;
        }
        
        decisionTree[currentObj.space].forEach(space => {
            let step2 = currentObj.step + 1;
            queue.push({
                space,
                step: step2,
                pastSteps: pastStep
            })
        })
    }
}


console.log(knightMoves('a1', 'e4'))