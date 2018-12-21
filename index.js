const { app, BrowserWindow } = require('electron')

let win

function createWindow() {
    // Create the browser window
    win = new BrowserWindow({ width: 800, height: 600 })

    // Load the html file
    win.loadFile('html/index.html')

    // Open DevTools
    win.webContents.openDevTools()

    // Emitted when window is closed
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// When electron is finished initializing
app.on('ready', createWindow);

// When all windows are closed, quit the app entirely
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win == null) {
        createWindow()
    }
})