import path from "path";
import { app } from "electron";

export function isDev(): boolean {
	return process.env?.NODE_ENV === 'development';
}

export function getUIPath() {
	return path.join(app.getAppPath(), '/dist-ui/index.html');
}

export function getServerPath() {
	return path.join(app.getAppPath(), '/dist-server/index.');
}

export function getAssetPath() {
	return path.join(app.getAppPath(), isDev() ? '.' : '..', '/src/assets');
}
