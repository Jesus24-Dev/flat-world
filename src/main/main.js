const { app, BrowserWindow, ipcMain, Menu, dialog } = require("electron");
const path = require("path");
const Perfil = require("./db");

let win;
let loadingWindow;
let menuTemplate;
let isLoadingWindowClosed = false;

function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 450,
    height: 450,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  loadingWindow.loadFile("./src/renderer/loading.html");

  loadingWindow.on("closed", () => {
    loadingWindow = null;
  });
}

async function createWindow() {
  win = new BrowserWindow({
    alwaysOnTop: true,
    // resizable: false,
    alwaysOnTop: true,
    title: "Flat World",
    icon: "./src/assets/images/logo.png",
    // fullscreen: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile("./src/renderer/index.html");
  win.webContents.once("did-finish-load", () => {
    setTimeout(() => {
      if (loadingWindow && !isLoadingWindowClosed) {
        loadingWindow.close();
        isLoadingWindowClosed = true;
      }
      win.show();
    }, 1000);
  });

  await Perfil.crearConexion();
  win.on("closed", () => {
    win = null;
  });

  // ipcMain.on("login-exitoso", () => {
  //   menuTemplate[0].submenu[1].enabled = true;
  //   const menu = Menu.buildFromTemplate(menuTemplate);
  //   Menu.setApplicationMenu(menu);
  // });
}

function createMenu() {
  menuTemplate = [
    {
      label: "Salir",
      submenu: [
        {
          label: "Salir de aplicación",
          click() {
            const choice = dialog.showMessageBoxSync(win, {
              type: "question",
              buttons: ["Yes", "No"],
              title: "Confirmar",
              message: "¿Estás seguro de que quieres salir de la aplicación?",
            });

            if (choice === 0) {
              app.quit();
            }
          },
        },
        {
          label: "Salir de la lección",
          enabled: false,
          click() {
            const choice = dialog.showMessageBoxSync(win, {
              type: "question",
              buttons: ["Yes", "No"],
              title: "Confirmar",
              message: "¿Estás seguro de que quieres salir de la lección?",
            });

            if (choice === 0) {
              win.webContents.send("salir-leccion");
            }
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createLoadingWindow();
  // createMenu();
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  ipcMain.handle("registrarUsuario", async (event, datos) => {
    const { cedula, nombre, apellido, seccion } = datos;
    try {
      await Perfil.crearEstudiante(cedula, nombre, apellido, seccion);
      return true;
    } catch (err) {
      if (err.name == "SequelizeUniqueConstraintError") {
        return false;
      }
    }
  });

  ipcMain.handle("sesionUsuario", async (event, datos) => {
    const { cedula, seccion } = datos;
    try {
      return await Perfil.encontrarEstudiante(cedula, seccion);
    } catch (err) {
      return err;
    }
  });

  ipcMain.on("aumentarFallos", async (event, cedula) => {
    const fechaActual = obtenerFechaActual();
    await Perfil.aumentarFallos(cedula, fechaActual);
  });

  ipcMain.on("aumentarAciertos", async (event, cedula) => {
    const fechaActual = obtenerFechaActual();
    await Perfil.aumentarAciertos(cedula, fechaActual);
  });

  ipcMain.handle("obtener-resultados", async (event, cedula) => {
    const resultados = await Perfil.obtenerResultados(cedula);
    return resultados;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

function obtenerFechaActual() {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();

  const fechaCompleta = `${dia + 2}-${mes}-${anio}`;

  return fechaCompleta;
}
