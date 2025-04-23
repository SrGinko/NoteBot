const { ipcRenderer } = require('electron');


document.querySelector('.btnClose').addEventListener('click', () => {
    ipcRenderer.invoke('window-control', 'close');
})

document.querySelector('.btnMinimize').addEventListener('click', () => {
    ipcRenderer.invoke('window-control', 'minimize');
})

document.querySelector('.btnMaximize').addEventListener('click', () => {
    ipcRenderer.invoke('window-control', 'maximize');
})