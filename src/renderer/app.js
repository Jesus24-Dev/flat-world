const { ipcRenderer } = require("electron");
ipcRenderer.on("salir-leccion", () => {
  window.location.href = "../paginaPrincipal.html";
});
