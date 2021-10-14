import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import movies from './routes/movies.routes.js'
import genres from './routes/genres.routes.js'
import auth from './routes/auth.routes.js'
import errorMiddleware from './middleware/error.middleware.js'
import passport from 'passport'
import './passport/index.js'

// Load config from .env
config()

// Create Express instance
const app = express()

// Authentication
app.use(passport.initialize());

app.use(cors())
app.use(bodyParser.json())

// Serve the UI
app.use(express.static('public'))

app.use('/movies', movies)
app.use('/genres', genres)
app.use('/auth', auth)

// Handle Errors
app.use(errorMiddleware)

// Listen
app.listen(process.env.APP_PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.APP_PORT}/`)
})
