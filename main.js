const { app, BrowserWindow } = require('electron')

let mainWindow = null

function createWindow() {
    // Initialize the window
    mainWindow = new BrowserWindow({ width: 800, height: 600 })

    // Load the entry point
    mainWindow.loadURL('http://localhost:3000')

    // Show dev tools
    mainWindow.webContents.openDevTools()

    // Remove window once closed
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', () => {
    createWindow()
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
});