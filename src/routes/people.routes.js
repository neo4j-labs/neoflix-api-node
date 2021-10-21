import { Router } from 'express'
import passport from 'passport'
import MovieService from '../services/movie.service.js'
import PeopleService from '../services/people.service.js'
import { getPagination, getUserId } from '../utils.js'

const router = new Router()

router.use(passport.authenticate(['jwt', 'anonymous'], { session: false }))

router.get('/', async (req, res, next) => {
    try {
        const { orderBy, order, limit, skip } = getPagination(req)

        const peopleService = new PeopleService()
        const people = await peopleService.all(orderBy, order, limit, skip)

        res.json(people)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const peopleService = new PeopleService()
        const person = await peopleService.findById(id)

        res.json(person)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:id/similar', async (req, res, next) => {
    try {
        const { id } = req.params

        const peopleService = new PeopleService()
        const people = await peopleService.getSimilarPeople(id)

        res.json(people)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:id/acted', async (req, res, next) => {
    try {
        const { id } = req.params
        const userId = getUserId(req)
        const { orderBy, order, limit, skip } = getPagination(req)

        const movieService = new MovieService()
        const movies = await movieService.getForActor(id, orderBy, order,  limit, skip, userId)

        res.json(movies)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:id/directed', async (req, res, next) => {
    try {
        const { id } = req.params
        const userId = getUserId(req)
        const { orderBy, order, limit, skip } = getPagination(req)

        const movieService = new MovieService()
        const movies = await movieService.getForDirector(id, orderBy, order,  limit, skip, userId)

        res.json(movies)
    }
    catch(e) {
        next(e)
    }
})

export default router
