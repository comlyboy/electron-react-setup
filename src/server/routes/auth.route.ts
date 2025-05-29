import express from 'express';

export const AuthRoute = express.Router();

AuthRoute.post('/signup', (req: express.Request, res: express.Response) => {
	try {

		// Business logic goes here

		res.status(201).json({
			message: 'Registered successfully!',
		});

	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong!',
		});
	}
});

AuthRoute.post('/signin', (req: express.Request, res: express.Response) => {
	try {
		// const { email, password }: AuthDto = req.body;

		// Business logic goes here

		res.status(200).json({
			message: 'logged in successfully'
		});

	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong!'
		});
	}

});
