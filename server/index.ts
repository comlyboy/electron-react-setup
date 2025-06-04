import express from 'express';
// import cors from 'cors';

import { AuthRoute } from './routes/auth.route';

export function initialiseServer() {
	const PORT = process.env.PORT || 3030;

	const app = express();

	// app.use(cors());
	app.use(express.json());

	app.use((req, res, next) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Authorization");
		res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
		next();
	});

	// For various routes
	app.use('/api/auth', AuthRoute);

	app.listen(PORT, () => {
		console.log(`API running at http://localhost:${PORT}/`)
	});
	return app;
}
