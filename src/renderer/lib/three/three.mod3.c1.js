const contenedorForma = document.getElementById("figuraPrisma");
const prisma2 = document.getElementById("prisma2");

function crearPrisma(contenedor) {
  // Escena, cámara y renderizador
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    contenedor.clientWidth / contenedor.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true }); // habilitar fondo transparente
  renderer.setSize(contenedor.clientWidth, contenedor.clientHeight);
  contenedor.appendChild(renderer.domElement);

  // Geometría del prisma
  const geometry = new THREE.CylinderGeometry(10, 10, 15, 6); // Prisma hexagonal
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: false,
    transparent: true,
    opacity: 0.7,
  });
  const edges = new THREE.EdgesGeometry(geometry); // Para mostrar los bordes del prisma
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

  const prisma = new THREE.Mesh(geometry, material);
  const prismaEdges = new THREE.LineSegments(edges, lineMaterial);

  scene.add(prisma);
  scene.add(prismaEdges);

  // Posicionamos la cámara
  camera.position.z = 20;

  // Animación
  function animate() {
    requestAnimationFrame(animate);

    // Rotamos el prisma
    prisma.rotation.y += 0.01;
    prisma.rotation.x += 0.01;
    prismaEdges.rotation.y += 0.01;
    prismaEdges.rotation.x += 0.01;

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

crearPrisma(contenedorForma);
crearPrisma(prisma2);

const color = "#00ff2e";
const borde = "#004b0e";
const figuraPartesPrisma = document.getElementById("figuraPartesPrisma");

let paper = Raphael(figuraPartesPrisma);
let cuadrado = paper
  .rect(350, 150, 250, 250)
  .attr({ fill: color, stroke: borde, "stroke-width": 2 });
let ladoIzq = paper
  .path("M350 400 L300 350 L300 100 L350 150")
  .attr({ fill: color, stroke: borde, "stroke-width": 2 });
const ladoDer = paper
  .path("M600 400 L650 350 L650 100 L600 150")
  .attr({ fill: color, stroke: borde, "stroke-width": 2 });
let ladoSup = paper
  .path("M300 100 L350 50 L600 50 L650 100 L600 150 L350 150")
  .attr({ fill: color, stroke: borde, "stroke-width": 2 });

let interior = paper.path("M300 350 L400 300 L550 300 L650 350");
let alt1 = paper.path("M400 300 L400 50");
let alt2 = paper.path("M550 300 L550 50");
let altura = paper
  .path("M480 350 L480 100")
  .attr({ stroke: "red", "stroke-width": 2 });

const atributosTexto = {
  "font-weight": 500,
  "font-size": 20,
  fill: color,
};

let baseSuperior = paper
  .path("M480 70 L550 10")
  .attr({ "stroke-width": 2, stroke: borde });
let baseSuperiorTexto = paper
  .text(620, 10, "Base Superior")
  .attr(atributosTexto);

let baseInferior = paper
  .path("M480 380 L450 420")
  .attr({ "stroke-width": 2, stroke: borde });
let baseInferiorTexto = paper
  .text(420, 440, "Base Inferior")
  .attr(atributosTexto);

let vertice = paper
  .path("M650 100 L700 100")
  .attr({ "stroke-width": 2, stroke: borde });
let verticeTexto = paper.text(740, 100, "Vertice").attr(atributosTexto);

let ejeTexto = paper
  .text(510, 225, "Eje")
  .attr({ fill: "black", "font-weight": 500, "font-size": 20 });

let arista = paper
  .path("M300 200 L250 200")
  .attr({ "stroke-width": 2, stroke: borde });
let aristaTexto = paper.text(220, 200, "Arista").attr(atributosTexto);
