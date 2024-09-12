import * as THREE from "three";

function crearCilindro(contenedor) {
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

  const geometry = new THREE.CylinderGeometry(10, 10, 15, 16);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffa500,
    wireframe: false,
    transparent: true,
    opacity: 0.7,
  });
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

  const cilindro = new THREE.Mesh(geometry, material);
  const cilindroEdges = new THREE.LineSegments(edges, lineMaterial);

  scene.add(cilindro);
  scene.add(cilindroEdges);

  camera.position.z = 20;

  function animate() {
    requestAnimationFrame(animate);

    cilindro.rotation.y += 0.01;
    cilindroEdges.rotation.y += 0.01;

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

const cilindro1 = document.querySelector("#cilindro1");
const cilindro2 = document.querySelector("#cilindro2");

crearCilindro(cilindro1);
crearCilindro(cilindro2);

const figuraCilindro = document.querySelector("#figuraCilindro");
const paper = Raphael(figuraCilindro);
const color = "#FFA845";
const borde = "#AB5B00";
const atributosTexto = {
  "font-weight": 500,
  "font-size": 32,
  fill: borde,
  stroke: borde,
};

const cilindroBase = paper
  .path("M327 400 C327 400 468 460 627 400 L627 100 C627 100 468 160 327 100 Z")
  .attr({ fill: color, stroke: borde, "stroke-width": 5 });

const cilindroArriba = paper
  .path("M327 100 C327 100 468 40 627 100 C627 100 468 160 327 100 Z")
  .attr({ fill: color, stroke: borde, "stroke-width": 5 });

const lineaDiametro = paper.path("M327 100 L627 100");

const lineaBase = paper
  .path("M327 400 C327 400 468 340 627 400")
  .attr({ stroke: borde });

const lineaAltura = paper.path("M480 75 L480 390");

let perimetro = paper.text(480, 450, "Perimetro").attr(atributosTexto);
let diametro = paper.text(480, 40, "Diametro").attr(atributosTexto);
let altura = paper.text(700, 250, "Altura").attr(atributosTexto);
