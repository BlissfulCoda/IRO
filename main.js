const { app, BrowserWindow } = require('electron');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 500,
    title: 'Image Resize & Optimiser',
    height: 600
  });
}

app.on('ready', createMainWindow);
