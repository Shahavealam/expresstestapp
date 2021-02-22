'use strict'
class Graph {
    constructor(v){
        this.vertices = v;
        //Initialize adajancy Matrix
        this.adj = [];
        for(let i=0;i<this.vertices;i++){
            this.adj[i] = [];
            this.adj[i].push(0); 
        }
        this.edges = 0;
        this.marked = [];
        this.edgeTo = [];
        for(let i=0;i<this.vertices;i++){
            this.marked[i]  = false;
        }
    }
    addEdges(v,w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph(){
        for(let i=0;i<this.vertices;i++) {
            console.log(`${i} -> `);
            let result= ' ' ;
            for(let j=0;j<this.vertices;j++) {
                if(this.adj[i][j] != undefined) {
                    result += this.adj[i][j]+',';
                }
            }
            console.log(result);   
        }
    }
    // dfs
    dfs(v){
        this.marked[v] = true;
        if(this.adj[v] != undefined){
            console.log(`Visited Vertex:  ${v}`);
        }
       this.adj[v].forEach((element)=>{
            if(!this.marked[element]){
                this.dfs(element);
            }
        }) 
    }
    //bfs
    bfs(s) {
        let queue = [];
        this.marked[s] = true;
        queue.push(s);
        while(queue.length>0){
            let v = queue.shift();
            if(v == undefined){
                console.log(`Visited vertex: ${v}`);
            }
            this.adj[v].forEach((element)=>{
                if(!this.marked[element]){
                    this.marked = true;
                    queue.push(element);
                }
            });
        }
    }
    pathTo(v){
        let source = 0;
        if(!this.hasPathTo(v)){
            return undefined;
        }
        var path = [];
        for(let i=v; i !=source; i=this.edgeTo[i]){
            path.push(i);
        }
        path.push(s);
        return path;
    }

    hasPathTo(v){
        return this.marked[v];
    }
}

let g = new Graph(5);
g.addEdges(0,1);
g.addEdges(0,2);
g.addEdges(1,3);
g.addEdges(2,4);
//g.addEdges(3,4);
//console.log(g.adj);
//g.showGraph();
//console.log('--------DFS------');
//g.dfs(0);
//console.log('---------BFS------');
//g.bfs(0);
let vertex = 4;
let paths = g.pathTo(vertex);
while(paths.length > 0){
    if(paths.length>1){
        console.log(paths.pop()+'-')
    }else {
        console.log(paths.pop());
    }
}
