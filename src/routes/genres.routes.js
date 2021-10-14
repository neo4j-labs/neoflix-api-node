import { Router } from 'express'
import NotFoundError from '../errors/not-found.error.js'
import GenreService from '../services/genre.service.js'
import MovieService from '../services/movie.service.js'
import { getPagination } from '../utils.js'

const router = new Router()

router.get('/', async (req, res, next) => {
    try {
        const genreService = new GenreService()
        const genres = await genreService.all()

        res.json(genres)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:name', async (req, res, next) => {
    try {
        const genreService = new GenreService()
        const genre = await genreService.find(req.params.name)

        if (!genre) {
            return next(new NotFoundError(`Genre not found with name ${req.params.name}`))
        }

        res.json(genre)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:name/movies', async (req, res, next) => {
    try {
        const { limit, skip } = getPagination(req)

        const movieService = new MovieService()
        const movies = await movieService.getByGenre(req.params.name, limit, skip)

        res.json(movies)
    }
    catch(e) {
        next(e)
    }
})

export default router
