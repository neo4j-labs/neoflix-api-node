import { config } from "dotenv";
import { Strategy, ExtractJwt } from "passport-jwt"

config()

export const JwtStrategy = new Strategy({
    secretOrKey: process.env.JWT_SECRET,
    ignoreExpiration: true,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, (token, done) => {


    // User.findOne({id: jwt_payload.sub}, function(err, user) {
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
    //         // or you could create a new account
    //     }
    // });

    const { iat, ...user } = token
    return done(null, user)
})