const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow();
}

app.whenReady().then(() => {
  createWindow();
});
