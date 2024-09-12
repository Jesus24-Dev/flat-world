function crearPiramide(contenedor) {
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

  // Geometría de la pirámide
  const geometry = new THREE.ConeGeometry(10, 15, 4);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    wireframe: false,
    transparent: true,
    opacity: 0.7,
  });
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

  const piramide = new THREE.Mesh(geometry, material);
  const piramideEdges = new THREE.LineSegments(edges, lineMaterial);

  scene.add(piramide);
  scene.add(piramideEdges);

  camera.position.z = 20;

  function animate() {
    requestAnimationFrame(animate);

    piramide.rotation.y += 0.01;

    piramideEdges.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();

  // Redimensionar al cambiar tamaño de ventana
  window.addEventListener("resize", () => {
    const width = contenedor.clientWidth;
    const height = contenedor.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}

const piramide1 = document.querySelector("#piramide1");
const piramide2 = document.querySelector("#piramide2");

crearPiramide(piramide1);
crearPiramide(piramide2);

const figuraPiramide = document.querySelector("#figuraPiramide");
const color = "#f7ff00";
const borde = "#a0a502 ";
const atributosTexto = {
  "font-weight": 500,
  "font-size": 32,
  fill: color,
  stroke: borde,
};

const paper = Raphael(figuraPiramide);

let triangulo1 = paper
  .path("M450 400 L250 300 L470 50 Z")
  .attr({ fill: color, stroke: borde });
let triangulo2 = paper
  .path("M450 400 L700 350 L470 50 Z")
  .attr({ fill: color, stroke: borde });
let linea1 = paper.path("M250 300 L520 260 ");
let linea2 = paper.path("M520 260 L700 350");
let linea3 = paper.path("M520 260 L470 50");
let linea4 = paper.path("M470 320 L470 50").attr({ "stroke-width": 2 });

let base = paper
  .path("M520 320 570 450")
  .attr({ stroke: borde, "stroke-width": 2 });

let baseText = paper.text(610, 420, "Base").attr(atributosTexto);

let alturaText = paper.text(520, 280, "Altura").attr(atributosTexto);

let vertice = paper
  .path("M700 350 750 350")
  .attr({ stroke: borde, "stroke-width": 2 });

let verticeText = paper.text(800, 350, "Vertice").attr(atributosTexto);

let apice = paper
  .path("M470 50 L400 50")
  .attr({ stroke: borde, "stroke-width": 2 });

let apiceText = paper.text(340, 50, "Apice").attr(atributosTexto);

let caraLateral = paper
  .path("M420 150 L320 150")
  .attr({ stroke: borde, "stroke-width": 2 });

let caraLateralText = paper.text(220, 150, "Cara Lateral").attr(atributosTexto);
