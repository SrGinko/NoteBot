const { app , BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');

const creatWindow = () => {
    const win = new BrowserWindow({
        minwidth: 800,
        minheight: 600,
        simpleFullscreen:true,
        backgroundColor: '#1F1F1F',
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('./src/index.html');

    ipcMain.handle('window-control', (event, action) => {
        switch (action) {
            case 'minimize':
                win.minimize();
                break;
            case 'maximize':
                win.isMaximized() ? win.unmaximize() : win.maximize();
                break;
            case 'close':
                win.close();
                break;
            default:
                break;
        }
    })
}

app.whenReady().then(() => {
    creatWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

// Menu.setApplicationMenu(null)
