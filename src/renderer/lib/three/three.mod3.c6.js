function crearEsfera(contenedor) {
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

  const geometry = new THREE.SphereGeometry(10, 32, 32);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: false,
    transparent: true,
    opacity: 0.7,
  });
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

  const esfera = new THREE.Mesh(geometry, material);
  const esferaEdges = new THREE.LineSegments(edges, lineMaterial);

  scene.add(esfera);
  scene.add(esferaEdges);

  camera.position.z = 20;

  function animate() {
    requestAnimationFrame(animate);

    esfera.rotation.x += 0.01;
    esfera.rotation.y += 0.01;
    esferaEdges.rotation.x += 0.01;
    esferaEdges.rotation.y += 0.01;

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

const esfera1 = document.querySelector("#esfera1");
const esfera2 = document.querySelector("#esfera2");

crearEsfera(esfera1);
crearEsfera(esfera2);

const esferaFigura = document.querySelector("#esferaFigura");
const paper = Raphael(esferaFigura);
const color = "#EB0000";
const borde = "#830000 ";
const atributosTexto = {
  "font-weight": 500,
  "font-size": 32,
  fill: borde,
  stroke: borde,
};

const esfera = paper.circle(470, 250, 150);
esfera.attr({
  fill: color,
  stroke: borde,
  "stroke-width": 5,
});

const centro = paper
  .path("M320 250 C320 250 470 400 620 250 C620 250 470 100 320 250")
  .attr({ "stroke-width": 2, stroke: borde });

const lineaDiametro = paper.path("M470 100 L470 400");
const lineaRadio = paper.path("M620 250 L470 250");

let radio = paper.text(680, 250, "Radio").attr(atributosTexto);
let diametro = paper.text(470, 430, "Diametro").attr(atributosTexto);
