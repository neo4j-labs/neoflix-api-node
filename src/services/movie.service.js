import { goodfellas, popular } from "../../test/fixtures/movies.js";

export default class MovieService {
    driver;

    constructor() {
        // Assign the driver here
    }

    async all(userId) {
        return popular
    }

    async findById(id, userId) {
        return goodfellas
    }

    async getSimilarMovies(id, limit = 6, skip = 0) {
        return popular.slice(skip, skip + limit)
    }

    async getByGenre(name, limit = 6, skip = 0) {
        return popular.slice(skip, skip + limit)
    }

}