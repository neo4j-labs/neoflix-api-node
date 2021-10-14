import { goodfellas, popular } from "../../test/fixtures/movies.js";

export default class MovieService {
    driver;

    constructor() {
        // Assign the driver here
    }

    all() {
        return Promise.resolve(popular)
    }

    findById(id) {
        return Promise.resolve(goodfellas)
    }

    getSimilarMovies(id, limit = 6, skip = 0) {
        return Promise.resolve(popular.slice(skip, skip + limit))
    }

    getByGenre(name, limit = 6, skip = 0) {
        return Promise.resolve(popular.slice(skip, skip + limit))
    }

}