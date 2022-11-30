function convertToChessNotation(coords){ // Convert coordinate notation to lettered chess notation.
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

function convertToCoordinates(chessNotion){ // Convert chess notation to an x,y array pair.
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

function getPossibleMoves(space) { // Return an array of legal moves for a knight from a space given as a parameter.
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

function clone (x) { // Create a deep clone of whatever data is given as a parameter.
    return JSON.parse(JSON.stringify(x));
}


function buildDecisionTree(space, decisionTree = {}){ // Recursively create an adjacency list of all possible knight moves.
    let possibleMoves = getPossibleMoves(convertToCoordinates(space));
    
    decisionTree[space] = [];
    possibleMoves.forEach(possibleSpace => {
        decisionTree[space].push(convertToChessNotation(possibleSpace));
    })

    for(let possibleMove of decisionTree[space]){
        if(decisionTree.hasOwnProperty(possibleMove)) continue; // If space is already in adj list, skip it.
        buildDecisionTree(possibleMove, decisionTree); // Else, recursively call the function on the space.
    }
    return decisionTree;
}

function knightMoves(spaceA, spaceB){ // Calculate and return the shortest path a knight can take using BFS
    let decisionTree = buildDecisionTree(spaceA);

    let queue = [
        {
            space: spaceA,
            step: 0,
            pastSteps: []
        }
    ];

    while(queue.length > 0){
        let current = queue.shift();

        let pastSteps = clone(current.pastSteps);
        pastSteps.push(current.space);

        if(current.space == spaceB){
            console.log(`You made it in ${current.step} moves. Here is your path: `)
            pastSteps.forEach(step => console.log(step));
            return;
        }
        
        decisionTree[current.space].forEach(space => {
            let step = current.step + 1;
            queue.push({
                space,
                step: step,
                pastSteps: pastSteps
            })
        })
    }
}