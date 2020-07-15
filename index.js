const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createWindow () {
    // Crea la ventana del navegador.
    const win = new BrowserWindow({
        width: 1080,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.removeMenu();

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // Abre las herramientas de desarrollo (DevTools).
    win.webContents.openDevTools()
}

// Este método se llamará cuando Electron haya finalizado
// la inicialización y esté preparado para crear la ventana del navegador.
// Algunas APIs pueden usarse sólo después de que este evento ocurra.
app.whenReady().then(createWindow);

// Finaliza cuando todas las ventanas estén cerradas.
app.on('window-all-closed', () => {
    // En macOS es común para las aplicaciones y sus barras de menú
    // que estén activas hasta que el usuario salga explicitamente con Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // En macOS es común volver a crear una ventana en la aplicación cuando el
    // icono del dock es clicado y no hay otras ventanas abiertas.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});




