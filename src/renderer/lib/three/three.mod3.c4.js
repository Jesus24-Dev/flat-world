import * as THREE from "three";

function crearCono(contenedor) {
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

  const geometry = new THREE.ConeGeometry(10, 15, 32);
  const material = new THREE.MeshBasicMaterial({
    color: 0x800080,
    wireframe: false,
    transparent: true,
    opacity: 0.7,
  });
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

  const cono = new THREE.Mesh(geometry, material);
  const conoEdges = new THREE.LineSegments(edges, lineMaterial);

  scene.add(cono);
  scene.add(conoEdges);

  camera.position.z = 20;

  function animate() {
    requestAnimationFrame(animate);

    cono.rotation.y += 0.01;
    conoEdges.rotation.y += 0.01;

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

const cono1 = document.querySelector("#cono1");
const cono2 = document.querySelector("#cono2");

crearCono(cono1);
crearCono(cono2);

const figuraCono = document.querySelector("#figuraCono");
const paper = Raphael(figuraCono);
const color = "#ED33D1";
const borde = "#390831";
const atributosTexto = {
  "font-weight": 500,
  "font-size": 32,
  fill: borde,
  stroke: borde,
};

const cono = paper
  .path("M300 400 C300 400 468 480 627 400 L468 30 Z")
  .attr({ fill: color, stroke: borde, "stroke-width": 5 });

let linea1 = paper
  .path("M300 400 C300 400 468 300 627 400")
  .attr({ "stroke-width": 2 });
let linea2 = paper.path("M468 30 L468 400").attr({ "stroke-width": 2 });
let linea3 = paper.path("M627 400 L468 400").attr({ "stroke-width": 2 });

let eje = paper.text(500, 250, "Eje").attr(atributosTexto);
let altura = paper.text(600, 200, "Altura").attr(atributosTexto);
let base = paper.text(400, 390, "Base").attr(atributosTexto);
