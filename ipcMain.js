const { ipcMain, dialog } = require('electron');

ipcMain.handle('selectFilePreload', async (event) => {
    const res = await dialog.showOpenDialog({
        title: '选择图片文件',
        properties: ['openFile'],
        filters: [{ name: 'image', extensions: ['jpg', 'png'] }]
    })
    return res;
})