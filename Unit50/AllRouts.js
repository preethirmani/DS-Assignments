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


function dfsAllRoutes(graph, source, target) {
  const routes = [];

  function dfs(current, path) {
    if (current === target) {
      routes.push([...path, current]);
      return;
    }

    path.push(current);
  
    const neighbors = graph[current];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!path.includes(neighbor)) {
        dfs(neighbor, path);
      }
    }

    path.pop();
  }

  dfs(source, []);

  return routes;
}

const allRoutes = dfsAllRoutes(graph, source, target);

console.log(`All possible routes from ${source} to ${target}:`, allRoutes);