const path = require('path');
const { app, BrowserWindow } = require('electron');

const isMac = process.platform === 'darwin';

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Image Resizer',
    width: 500,
    height: 600
  });

  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

// (Lines below) these lines of code make sure your desktop app is cross-platform.
app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});