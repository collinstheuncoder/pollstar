import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

import User from '../models/user';

// Local Setup Options
const localOptions = {
  usernameField: 'email',
};

// Local Strategy Creation
const localLogin = new LocalStrategy(
  localOptions,
  async (email, password, done) => {
    try {
      // Find user corresponding to email
      const user = await User.findOne({ email });
      if (!user) done(null, false);

      // Check if password is correct
      const isMatch = await user.comparePasswords(password);

      // If passwords do not match
      if (!isMatch) done(null, false);
      // Else if they match
      done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

// JWT Setup Options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: 'secret',
};

// JWT Strategy Creation
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);

    if (!user) done(null, false);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Passport Use
passport.use(localLogin);
passport.use(jwtLogin);
