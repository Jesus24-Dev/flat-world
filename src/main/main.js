const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const path = require("path");
const Perfil = require("./db");

let win;
let loadingWindow;
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
    resizable: false,
    title: "Flat World",
    icon: "./src/assets/images/logo.png",
    fullscreen: true,
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
}

function createMenu() {
  const menuTemplate = [
    {
      label: "Salir",
      click() {
        app.quit(); // Cierra la aplicación
      },
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu); // Establece el menú para la aplicación
}

app.whenReady().then(() => {
  createLoadingWindow();
  createMenu();
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
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
