import passport from 'passport'
import { user } from '../../test/fixtures/users.js'
import { Neo4jStrategy } from './neo4j.strategy.js'
import { JwtStrategy } from './jwt.strategy.js'

passport.use(Neo4jStrategy)
passport.use(JwtStrategy)

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((id, done) => {
    done(null, user)
})
