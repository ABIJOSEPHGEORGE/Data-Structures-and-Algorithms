function graphDFS(graph,source){
    let stack = [source];
    while(stack.length){
        let curr = stack.pop();
        console.log(curr);
        for(let adjacentVertex of graph[curr]){
            stack.push(adjacentVertex)
        }
    }
}