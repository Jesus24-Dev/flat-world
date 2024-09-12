const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    resizable: false,
    title: "Flat World",
    icon: "./src/assets/images/logo.png",
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("./src/renderer/index.html");
}

app.whenReady().then(() => {
  createWindow();
});
