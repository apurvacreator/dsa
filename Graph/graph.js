// Graph using Adjacency list (Other approach is Adjacency matrix)
// {
//      A: [B, E],
//      B: [A, C],
//      C: [B, D],
//      D: [c, E]
//      E: [A, D]
// }


class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    // To view output
    printGraph() {
        if(Object.keys(this.adjacencyList).length){
            console.log("{");
            for(const [key, value] of Object.entries(this.adjacencyList)){
                console.log(" ", `${key}: ${value}`);
            }
            console.log("}");
        }else {
            console.log("{}");
        }
    }

    // Adds a new vertex in the Graph
    /**
     * If vertex exists -> return false else add vertex to adjacency list
     */
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    // Adds an undirected edge between given vertices
    /**
     * If both vertices exists -> update adjacency list for both vertices by adding the other vertex
     */
    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    // Removes an edge between given vertices
    /**
     * If both vertices exists -> update adjacency list for both vertices by filtering out the other vertex
     */
    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
            return true;
        }
        return false; 
    }

     // Removes a vertex from the Graph
    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return undefined;

        const edges = this.adjacencyList[vertex];
        for(let i = 0; i < edges.length; i++) {
            this.adjacencyList[edges[i]] = this.adjacencyList[edges[i]].filter(v  => v !== vertex);
        }
        delete this.adjacencyList[vertex];
        return true;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.printGraph();

graph.removeEdge("C", "D");

graph.printGraph();

graph.removeVertex("A");

graph.printGraph();