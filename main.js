const { app, BrowserWindow } = require('electron');

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
    width: 500,
    title: 'Image Resize & Optimiser',
    height: 600
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`)
}

app.on('ready', createMainWindow);
