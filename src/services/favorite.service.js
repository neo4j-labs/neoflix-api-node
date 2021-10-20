import { goodfellas, popular } from "../../test/fixtures/movies.js";

export default class FavoriteService {

    driver;

    constructor() {
        // Assign the driver here
    }

    async all(userId) {
        return popular
    }

    async add(userId, movieId) {
        return {
            ...goodfellas,
            favorite: true,
        }
    }

    async remove(userId, movieId) {
        return {
            ...goodfellas,
            favorite: false,
        }
    }

}