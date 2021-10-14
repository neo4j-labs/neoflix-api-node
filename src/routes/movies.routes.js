import { Router } from 'express'
import NotFoundError from '../errors/not-found.error.js'
import MovieService from '../services/movie.service.js'
import RatingService from '../services/rating.service.js'
import { getPagination } from '../utils.js'

const router = new Router()

router.get('/', async (req, res) => {
    try {
        const movieService = new MovieService()
        const movies = await movieService.all()

        res.json(movies)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const movieService = new MovieService()
        const movie = await movieService.findById(req.params.id)

        if (!movie) {
            return next(new NotFoundError(`Movie with id ${req.params.id} not found`))
        }

        res.json(movie)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:id/ratings', async (req, res) => {
    try {
        const { limit, skip } = getPagination(req)

        const ratingService = new RatingService()
        const reviews = await ratingService.forMovie(req.params.id, limit, skip)

        res.json(reviews)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:id/similar', async (req, res, next) => {
    try {
        const { limit, skip } = getPagination(req)

        const movieService = new MovieService()
        const movie = await movieService.getSimilarMovies(req.params.id, limit, skip)

        if (!movie) {
            return next(new NotFoundError(`Movie with id ${req.params.id} not found`))
        }

        res.json(movie)
    }
    catch(e) {
        next(e)
    }
})

export default router
