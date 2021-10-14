import { reviews } from "../../test/fixtures/reviews.js";

export default class ReviewService {
    driver;

    constructor() {
        // Assign the driver here
    }

    forMovie(id, limit, skip) {
        return Promise.resolve(reviews)
    }

}

