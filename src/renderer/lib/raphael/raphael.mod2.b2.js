const atributos = {
  "stroke-width": 5,
  stroke: "#005495",
  fill: "#6dcfff",
};
const atributosLetras = {
  fill: "#6dcfff",
  "font-weight": "bold",
  "font-size": 24,
};

const perimetroTrapecioContainer = document.querySelector(
  "#perimetroTrapecioContainer"
);
const paperPerimetroTrapecio = Raphael(perimetroTrapecioContainer);

const perimetroTrapecio = paperPerimetroTrapecio.path(
  "M64 275 L405 275 L355 64 L114 64 Z"
);

let lado1 = paperPerimetroTrapecio.text(230, 20, "8cm");
let lado2 = paperPerimetroTrapecio.text(230, 300, "12cm");
let lado3 = paperPerimetroTrapecio.text(50, 150, "5cm");
let lado4 = paperPerimetroTrapecio.text(420, 150, "5cm");
let setLados = paperPerimetroTrapecio.set();
setLados.push(lado1, lado2, lado3, lado4);
setLados.forEach((lado) => {
  lado.attr(atributosLetras);
});

perimetroTrapecio.attr(atributos);

const areaTrapecioContainer = document.querySelector("#areaTrapecioContainer");
const paperAreaTrapecio = Raphael(areaTrapecioContainer);

const areaTrapecio = paperAreaTrapecio.path(
  "M64 275 L405 275 L355 64 L114 64 Z"
);

areaTrapecio.attr(atributos);

lado1 = paperAreaTrapecio.text(230, 20, "8cm");
lado2 = paperAreaTrapecio.text(230, 300, "12cm");
lado3 = paperAreaTrapecio.text(50, 150, "5cm");
lado4 = paperAreaTrapecio.text(420, 150, "5cm");
setLados = paperAreaTrapecio.set();
setLados.push(lado1, lado2, lado3, lado4);
setLados.forEach((lado) => {
  lado.attr(atributosLetras);
});
