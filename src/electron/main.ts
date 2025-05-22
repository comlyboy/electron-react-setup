import { app, BrowserWindow } from 'electron';

app.on('ready', () => {
	const mainWindow = new ({
		webPreferences: {
			preload: getPreloadPath(),
		},
		// disables default system frame (dont do this if you want a proper working menu bar)
		frame: false,
	});
	if (isDev()) {
		mainWindow.loadURL('http://localhost:3000');
	} else {
		mainWindow.loadFile(getUIPath());
	}



});

function handleCloseEvents(mainWindow: ) {
	let willClose = false;

	mainWindow.on('close', (e) => {
		if (willClose) {
			return;
		}
		e.preventDefault();
		mainWindow.hide();
		if (app.dock) {
			app.dock.hide();
		}
	});

	app.on('before-quit', () => {
		willClose = true;
	});

	mainWindow.on('show', () => {
		willClose = false;
	});
}
