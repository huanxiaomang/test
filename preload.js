const { contextBridge, ipcRenderer, BrowserWindow } = require('electron')

ipcRenderer.send('counter-value');


contextBridge.exposeInMainWorld('electronAPI', {
    handleCounter: (callback) => {
        ipcRenderer.on('counter-value', (ev, key) => {
            callback(key);
        })

        // ipcRenderer.on('msg', (ev, message) => {
        //     console.log(message);
        // })

    },

})

