const { BrowserWindow, app, globalShortcut, ipcMain, shell, screen } = require('electron');
const path = require('path');
const nodeAbi = require('node-abi');
const express = require('express');
const { log } = require('console');

//2.创建应用
const app1 = express()

//3.设置请求




const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const mainWindow = new BrowserWindow({
        width: 100,
        height: 300,
        minHeight: 80,
        minWidth: 240,
        maxHeight: 100,
        maxWidth: 300,
        // x: width - 400,
        // y: height - 200,
        alwaysOnTop: true,
        frame: false,
        transparent: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,

            sandbox: false,

        }
    })
    mainWindow.setAspectRatio(3)
    console.log(__dirname);
    // mainWindow.webContents.toggleDevTools();
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));


}
require('./ipcMain')
app.whenReady().then(() => {

    createWindow();

})
//4.开启服务器
app1.listen(8989, () => {
    console.log('server is running at http://localhost')
})

ipcMain.on('counter-value', (_event, value) => {
    app1.get('/', (req, res) => {
        console.log(req.query);
        res.send(200);
        BrowserWindow.fromWebContents(_event.sender).send('counter-value', req.query.key.split('-')[0]);
    })


})

