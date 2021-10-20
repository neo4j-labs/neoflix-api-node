import { ratings } from "../../test/fixtures/ratings.js";

export default class ReviewService {
    driver;

    constructor() {
        // Assign the driver here
    }

    forMovie(id, limit, skip) {
        return Promise.resolve(ratings)
    }

}

