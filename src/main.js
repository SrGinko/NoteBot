const { app, BrowserWindow, ipcMain, Tray, Menu, Notification } = require('electron');

const path = require('path');

let win

function mostrarNotificacao(titulo, mensagem) {
    const notificacao = new Notification({
        title: titulo,
        body: mensagem,
        icon: path.join(__dirname, '../', 'Images', 'icos', 'app_icon.ico'),
    })

    return notificacao.show()
}

app.whenReady().then(() => {

    win = new BrowserWindow({
        minWidth: 1200,
        minHeight: 800,
        width: 1200,
        height: 800,
        simpleFullscreen: true,
        backgroundColor: '#1F1F1F',
        frame: false,
        icon: path.join(__dirname, '../', 'Images', 'icos', 'app_icon.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    const tray = new Tray(path.join(__dirname, '../', 'Images', 'icos', 'app_icon.ico'));

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

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Abrir', click: () => { win.show() } },
        { label: 'Fechar', click: () => { win.close() } },
        { label: 'Sair', click: () => {app.isQuitting = true, app.quit() } }
    ])

    tray.setToolTip('NotBot')
    tray.setContextMenu(contextMenu)

    tray.on('double-click', () => {
        win.show()
    })

    win.on('close', (event) => {
        if (!app.isQuitting) {
            event.preventDefault()
            mostrarNotificacao('NotBot', 'O NotBot está minimizado na bandeja do sistema. Clique duas vezes para abrir.')
            win.hide()
        }

        return false
    })
})

app.on('window-all-closed', (event) => {
    event.preventDefault()
    mostrarNotificacao('NotBot', 'O NotBot está minimizado na bandeja do sistema. Clique duas vezes para abrir.')
})

app.on('close', ()=>{
    app.quit()
})

// Menu.setApplicationMenu(null)
