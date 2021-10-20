import { Router } from 'express'
import passport from 'passport'
import FavoriteService from '../services/favorite.service.js'

const router = new Router()

/**
 * Require jwt authentication for these routes
 */
router.use(passport.authenticate('jwt', { session: false }))

router.get('/', (req, res, next) => {
    try {
        res.json(req.user)
    }
    catch (e) {
        next(e)
    }
})

router.get('/favorites', async (req, res, next) => {
    try {
        const service = new FavoriteService()
        const favorites = await service.all(req.user.userId)

        res.json(favorites)
    }
    catch (e) {
        next(e)
    }
})

router.post('/favorites/:id', async (req, res, next) => {
    try {
        const service = new FavoriteService()
        const favorite = await service.add(req.user.userId, req.params.id)

        res.json(favorite)
    }
    catch (e) {
        next(e)
    }
})

router.delete('/favorites/:id', async (req, res, next) => {
    try {
        const service = new FavoriteService()
        const favorite = await service.remove(req.user.userId, req.params.id)

        res.json(favorite)
    }
    catch (e) {
        next(e)
    }
})

export default router
