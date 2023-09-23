const { contextBridge, ipcRenderer, BrowserWindow } = require('electron')

ipcRenderer.send('counter-value');


contextBridge.exposeInMainWorld('api', {
    handleCounter: (callback) => {
        ipcRenderer.on('counter-value', (ev, key) => {
            callback(key);
        })

    },


})

