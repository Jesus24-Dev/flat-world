const romboEjemplo = document.querySelector("#romboEjemplo");
const paperRomboEjemplo = Raphael(romboEjemplo);
const romboAtributos = {
  fill: "#d3002d",
  stroke: "#f33961",
  "stroke-width": 5,
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

let romboCalculosPerimetro = paperRomboCalculos.path(
  "M682 32 L782 218 L682 428 L582 218 Z"
);
romboCalculosPerimetro.attr(romboAtributos);
