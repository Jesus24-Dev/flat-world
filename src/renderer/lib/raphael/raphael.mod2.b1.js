const atributosTrapecio = {
  "stroke-width": 5,
  stroke: "#a85fed",
  fill: "#6a00cc",
};

const trapecioEjemplo = document.querySelector("#trapecioEjemplo");
const paperTrapecioEjemplo = Raphael(trapecioEjemplo);
let trapecioFigura = paperTrapecioEjemplo.path(
  "M64 307 L632 307 L568 64 L128 64 Z"
);
trapecioFigura.attr(atributosTrapecio);

const trapecioRectanguloForma = document.querySelector(
  "#trapecioRectanguloForma"
);
const paperTrapecioRectanguloForma = Raphael(trapecioRectanguloForma);
let trapecioRectangulo = paperTrapecioRectanguloForma.path(
  "M64 307 L632 307 L504 64 L64 64 Z"
);
trapecioRectangulo.attr(atributosTrapecio);

const trapecioIsoscelesForma = document.querySelector(
  "#trapecioIsoscelesForma"
);
const paperTrapecioIsoscelesForma = Raphael(trapecioIsoscelesForma);
let trapecioIsosceles = paperTrapecioIsoscelesForma.path(
  "M64 307 L632 307 L504 64 L192 64 Z"
);
trapecioIsosceles.attr(atributosTrapecio);

const trapecioEscalenoForma = document.querySelector("#trapecioEscalenoForma");
const papertrapecioEscalenoForma = Raphael(trapecioEscalenoForma);
let trapecioEscaleno = papertrapecioEscalenoForma.path(
  "M64 307 L632 307 L504 64 L256 64 Z"
);
trapecioEscaleno.attr(atributosTrapecio);

const trapecioArea = document.querySelector("#trapecioArea");
const paperTrapecioArea = Raphael(trapecioArea);
let trapecioAreaForma = paperTrapecioArea.path(
  "M32 261 L316 261 L252 48 L112 48 Z"
);
trapecioAreaForma.attr(atributosTrapecio);
let lineaAltura = paperTrapecioArea.path("M112 48 L112 261");
lineaAltura.attr({ "stroke-width": 5, stroke: "#a85fed" });
let baseMayor = paperTrapecioArea.text(160, 280, "B");
let baseMenor = paperTrapecioArea.text(160, 20, "b");
let altura = paperTrapecioArea.text(140, 140, "h");

let setLetrasArea = paperTrapecioArea.set();
setLetrasArea.push(baseMayor, baseMenor, altura);
setLetrasArea.forEach((letra) => {
  letra.attr({ "font-size": 20, "font-weight": "bold", fill: "#6a00cc" });
});
altura.attr({ fill: "white" });

const trapecioPerimetro = document.querySelector("#trapecioPerimetro");
const paperTrapecioPerimetro = Raphael(trapecioPerimetro);
let trapecioPerimetroForma = paperTrapecioPerimetro.path(
  "M32 261 L316 261 L252 48 L112 48 Z"
);
trapecioPerimetroForma.attr(atributosTrapecio);

let a = paperTrapecioPerimetro.text(180, 20, "a");
let b = paperTrapecioPerimetro.text(300, 140, "b");
let c = paperTrapecioPerimetro.text(170, 280, "c");
let d = paperTrapecioPerimetro.text(50, 140, "d");

let setLetrasPerimetro = paperTrapecioPerimetro.set();
setLetrasArea.push(a, b, c, d);
setLetrasArea.forEach((letra) => {
  letra.attr({ "font-size": 20, "font-weight": "bold", fill: "#6a00cc" });
});
