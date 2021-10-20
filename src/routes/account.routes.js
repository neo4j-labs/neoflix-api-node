import { Router } from 'express'
import passport from 'passport'

const router = new Router()



router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    try {
        console.log('in');
        res.json(req.user)
    }
    catch (e) {
        next(e)
    }
})

router.get('/list', (req, res, next) => {
    try {
        console.log('in');
        res.json([])
    }
    catch (e) {
        next(e)
    }
})

// app.post('/profile', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         res.send(req.user.profile);
//     }
// );

export default router
