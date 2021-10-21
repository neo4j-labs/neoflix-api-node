import { goodfellas, popular } from "../../test/fixtures/movies.js";
import { roles } from "../../test/fixtures/people.js";

export default class MovieService {
    driver;

    constructor() {
        // Assign the driver here
    }

    async all(orderBy, order, limit = 6, skip = 0, userId = undefined) {
        return popular
    }

    async findById(id, userId = undefined) {
        return goodfellas
    }

    async getSimilarMovies(id, limit = 6, skip = 0, userId = undefined) {
        return popular.slice(skip, skip + limit)
    }

    async getByGenre(name, limit = 6, skip = 0, userId = undefined) {
        return popular.slice(skip, skip + limit)
    }

    async getForActor(id, orderBy, order, limit = 6, skip = 0, userId = undefined) {
        return roles.slice(skip, skip + limit)
    }

    async getForDirector(id, orderBy, order, limit = 6, skip = 0, userId = undefined) {
        return popular.slice(skip, skip + limit)
    }

}