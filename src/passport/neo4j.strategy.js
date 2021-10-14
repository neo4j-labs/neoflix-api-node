import { Strategy } from 'passport-local'
import AuthService from '../services/auth.service.js'

export const Neo4jStrategy = new Strategy({
    usernameField: 'email',  // Use email address as username field
    session: false,          // Session support is not necessary
    passReqToCallback: true, // Passing the request to the callback allows us to use the open transaction
 }, (req, email, password, done) => {
    try {
        const authService = new AuthService()
        const output = authService.authenticate(email, password)

        done(null, output)
    }
    catch(e) {
        console.log(e);
        done(e)
    }
})
