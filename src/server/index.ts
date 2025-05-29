import { app } from './app';


const PORT = process.env.PORT || 3030;
export function initServer() {
	app.listen(PORT, () => {
		console.log(`API running at http://localhost:${PORT}`)
	});
}
