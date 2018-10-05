import express from 'express';
import passport from 'passport'; 

import { authController } from '../controllers';
import '../services/passport';

const authRouter = express.Router();
const passportAuth = passport.authenticate('jwt', { session: false });
const passportLogin = passport.authenticate('local', { session: false });

authRouter
	.route('/register')
	.post(authController.register);

authRouter
	.route('/login')
	.post(passportLogin, authController.login);

authRouter
	.route('/')
	.get(authController.getUsers);

authRouter
	.route('/me')
	.post(authController.getCurrentUser);

export default authRouter;
