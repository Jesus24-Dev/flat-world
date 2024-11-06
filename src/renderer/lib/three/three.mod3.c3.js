function crearCubo(contenedor) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    contenedor.clientWidth / contenedor.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(contenedor.clientWidth, contenedor.clientHeight);
  contenedor.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(7, 7, 7);
  const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    wireframe: false,
    transparent: true,
    opacity: 0.7,
  });
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

  const cubo = new THREE.Mesh(geometry, material);
  const cuboEdges = new THREE.LineSegments(edges, lineMaterial);

  scene.add(cubo);
  scene.add(cuboEdges);

  camera.position.z = 10;

  function animate() {
    requestAnimationFrame(animate);
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;
    cuboEdges.rotation.x += 0.01;
    cuboEdges.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
  window.addEventListener("resize", () => {
    const width = contenedor.clientWidth;
    const height = contenedor.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}

const cubo1 = document.querySelector("#cubo1");
const cubo2 = document.querySelector("#cubo2");
crearCubo(cubo1);
crearCubo(cubo2);

const cuboFigura = document.querySelector("#cuboFigura");
const paper = Raphael(cuboFigura);
const color = "#4166ff";
const borde = "#021e93";
const atributosTexto = {
  "font-weight": 500,
  "font-size": 32,
  fill: color,
  stroke: borde,
};

const cara1 = paper
  .path("M550 400 L300 350 L300 100 L550 150 Z")
  .attr({ fill: color, stroke: borde });
const cara2 = paper
  .path("M300 100 L400 50 L650 100 L550 150 Z")
  .attr({ fill: color, stroke: borde });
const cara3 = paper
  .path("M550 400 L650 350 L650 100 L550 150 Z")
  .attr({ fill: color, stroke: borde });
let linea1 = paper.path("M650 350 L400 300");
let linea2 = paper.path("M400 300 L400 50");
let linea3 = paper.path("M400 300 L300 350");

let vertice = paper
  .path("M300 100 L250 100")
  .attr({ "stroke-width": 2, stroke: borde });

let verticeText = paper.text(190, 100, "Vértice").attr(atributosTexto);

let arista = paper
  .path("M550 200 L700 200")
  .attr({ "stroke-width": 2, stroke: borde });

let aristaText = paper.text(750, 200, "Arista").attr(atributosTexto);

let cara = paper
  .path("M370 300 L250 300")
  .attr({ "stroke-width": 2, stroke: borde });

let caraText = paper.text(200, 300, "Cara").attr(atributosTexto);
