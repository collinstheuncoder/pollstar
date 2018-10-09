import jwt from 'jwt-simple';

import User from '../models/user';

import config from '../config';

const { auth_secret } = config;

function token(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, auth_secret);
}

export default {
  register: async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
      if (!email || !password)
        return res
          .status(403)
          .json({ error: 'You must provide both email and password' });
      // Check if there is a user with the same email
      const foundUser = await User.findOne({ email });
      if (foundUser)
        return res.status(403).json({ error: 'Email is already in use' });

      // If no user with email ceate a new user
      const newUser = new User({ name, email, password });
      await newUser.save();
      return res.status(200).json({ token: token(newUser) });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const user = req.user;
      return res.status(200).json({ token: token(user) });
    } catch (error) {
      next(error);
    }
  },

  getUsers: async (req, res, next) => {
    try {
      const users = await User.find();

      return res.status(200).json({ users });
    } catch (error) {
      next(error);
    }
  },

  getCurrentUser: async (req, res, next) => {
    const { token } = req.body;

    if (!token)
      return res
        .status(401)
        .json({ auth: false, message: 'No token provided.' });

    try {
      const response = await jwt.decode(token, auth_secret);
      const user = await User.findById(response.sub, { password: 0 }).populate([
        {
          path: 'createdPolls',
          select: 'title _id',
        },
        {
          path: 'votedInPolls',
          select: 'title _id',
        },
      ]);

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
