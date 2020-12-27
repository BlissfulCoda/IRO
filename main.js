const { app, BrowserWindow } = require('electron');

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
    width: 500,
    title: 'Image Resize & Optimiser',
    height: 600,
    icon: `${__dirname}/assets/icons/Icon_256x256.png`
  });

  mainWindow.loadFile('./app/index.html');
}

app.on('ready', createMainWindow);
