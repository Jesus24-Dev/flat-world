const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;
let loadingWindow;

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

function createWindow() {
  win = new BrowserWindow({
    resizable: false,
    title: "Flat World",
    icon: "./src/assets/images/logo.png",
    fullscreen: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("./src/renderer/index.html");
  win.webContents.on("did-finish-load", () => {
    setTimeout(() => {
      loadingWindow.close();
      win.show();
    }, 1000);
  });

  win.on("closed", () => {
    win = null;
  });
}

app.whenReady().then(() => {
  createLoadingWindow();
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
