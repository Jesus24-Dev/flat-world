const romboEjemplo = document.querySelector("#romboEjemplo");
const paperRomboEjemplo = Raphael(romboEjemplo);
const romboAtributos = {
  fill: "#d3002d",
  stroke: "#f33961",
  "stroke-width": 5,
};

const atributosTexto = {
  "font-weight": 500,
  "font-size": 20,
  fill: "#f33961",
};

let romboEjemploFigura = paperRomboEjemplo.path(
  "M232 32 L332 246 L232 460 L132 246 Z"
);

romboEjemploFigura.attr(romboAtributos);

const romboCalculos = document.querySelector("#romboCalculos");
const paperRomboCalculos = Raphael(romboCalculos);

let romboCalculosArea = paperRomboCalculos.path(
  "M232 32 L332 218 L232 428 L132 218 Z"
);
romboCalculosArea.attr(romboAtributos);

let linea1 = paperRomboCalculos.path("M332 218 132 218");
let linea2 = paperRomboCalculos.path("M232 32 232 428");
let texto1 = paperRomboCalculos
  .text(350, 100, "Diagonal mayor")
  .attr(atributosTexto);
let texto2 = paperRomboCalculos
  .text(380, 300, "Diagonal menor")
  .attr(atributosTexto);

let romboCalculosPerimetro = paperRomboCalculos.path(
  "M682 32 L782 218 L682 428 L582 218 Z"
);
romboCalculosPerimetro.attr(romboAtributos);

let linea3 = paperRomboCalculos.path("M682 32 L682 428");
let linea4 = paperRomboCalculos.path("M782 218 L582 218");

let texto3 = paperRomboCalculos.text(600, 100, "Lado").attr(atributosTexto);
