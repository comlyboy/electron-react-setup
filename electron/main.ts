import { app, BrowserWindow } from 'electron';
import path from 'path';

import { getUIPath, isDev } from './utility';

let browserWindow: BrowserWindow;

function createWindow() {
	browserWindow = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		webPreferences: {
			contextIsolation: true,
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: false
		}
	});

	if (isDev()) {
		browserWindow.loadURL('http://localhost:5173');
		// browserWindow.webContents.openDevTools();
	} else {
		browserWindow.loadFile(getUIPath());
	}

	browserWindow.once('ready-to-show', () => {
		browserWindow.maximize();
		browserWindow.show();
	})
	browserWindow.webContents.openDevTools();

}


app.whenReady().then(() => createWindow());

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
});
