import { app, BrowserWindow } from "electron";


function createWindow() {
	const browserWindow = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
	});
	browserWindow.loadURL('https://coventi.co');
	browserWindow.once('ready-to-show', () => {
		browserWindow.maximize();
		browserWindow.show();
	})
	// browserWindow.webContents.openDevTools();
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();
});
app.on("activate", () => {
	// to avoid double window
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});


app.on("window-all-closed", () => {
	// check for mac OS
	if (process.platform !== "darwin") {
		app.quit();
	}
});

process.on('uncaughtException', (error) => {
	console.log(error);
})