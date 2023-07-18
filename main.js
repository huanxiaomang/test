const { BrowserWindow, app, globalShortcut, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 100,
        height: 300,
        minHeight: 80,
        minWidth: 240,
        maxHeight: 100,
        maxWidth: 300,
        alwaysOnTop: true,
        frame: false,
        transparent: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true

        }
    })
    mainWindow.setAspectRatio(3)
    console.log(__dirname);
    // mainWindow.webContents.toggleDevTools();
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));


    // const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ',', '.', '/'];
    // keys.forEach((key) => {
    //     globalShortcut.register(key, () => {
    //         mainWindow.webContents.send('counter-value', key)
    //     })
    // })


}

app.whenReady().then(() => {

    createWindow();

})
ipcMain.on('counter-value', (_event, value) => {

})

ipcMain.on('file', (_event, value) => {
    BrowserWindow.fromWebContents(event.sender).send('msg', '文件上传完成');
})

