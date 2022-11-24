function DFS(node, graph){
    console.log(node);
    graph[node].forEach(neighbour => DFS(neighbour, graph));
}

function BFS(node, graph){
    let queue = [node];
    while(queue.length > 0){
        let current = queue.shift();
        console.log(current);
        graph[current].forEach(neighbour => queue.push(neighbour));
    }
}