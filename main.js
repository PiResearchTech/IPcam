const {Menu,app, BrowserWindow,webPreferences,ipcMain,ipc} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  

ipcMain.on('resize', function (e, x, y) {
   win.setSize(x, y);
   });
   //yarn add electron-builder --dev
function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600,transparent: true, frame: false,   webPreferences: {
      nativeWindowOpen: true,
      nodeIntegrationInWorker: true,
      nodeIntegration: true
    }}) 
  

   win.setMenuBarVisibility(true);
   win.setAlwaysOnTop(true, 'screen');
   win.setMenu(null)

   //win.maximize()
   win.setResizable(true);
   win.setIcon(path.join('F:/Electron/ipcam','/assets/eye.ico'));
   //win.on('unmaximize', () => win.maximize());

    win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index2.html'), 
      protocol: 'file:', 
      slashes: true
     
   })) 
}  
app.on('ready', createWindow) 
