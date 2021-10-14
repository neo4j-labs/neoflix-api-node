import { Router } from 'express'
import passport from 'passport'
import AuthService from '../services/auth.service.js'

const router = new Router()

router.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        res.json(req.user)
    }
)

router.post('/register', (req, res, next) => {
    try {
        const { email, password, name } = req.body

        const authService = new AuthService()
        const output = authService.register(email, password, name)

        res.json(output)
    }
    catch(e) {
        next(e)
    }
})

export default router