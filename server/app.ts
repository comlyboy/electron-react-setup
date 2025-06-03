// import express from 'express';
// import cors from 'cors';

// import { AuthRoute } from './routes/auth.route';

// // import { connect_DB } from './database/connection';

// export const app = express();

// app.use(cors());
// app.use(express.json());

// // Connecting to mongoDB database
// // connect_DB();

// // permissions
// app.use((req, res, next) => {
// 	res.setHeader("Access-Control-Allow-Origin", "*");
// 	res.setHeader("Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept, Authorization");
// 	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
// 	next();
// });

// // For various routes
// app.use('/api/auth', AuthRoute);