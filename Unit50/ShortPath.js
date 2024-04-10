const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const source = "A";
const target = "F";


function bfsShortestPath(graph, source, target) {
  
  const queue = [];
  queue.push([source]);
  const visited = new Set();
  visited.add(source);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];
    if (current === target) {
      return path;
    }
    const neighbors = graph[current];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }


  return null;
}


const shortestPath = bfsShortestPath(graph, source, target);
console.log(`Shortest path from ${source} to ${target}:`, shortestPath);