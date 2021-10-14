import { genres } from "../../test/fixtures/genres.js";

export default class GenreService {
    driver;

    constructor() {
        // Assign the driver here
    }

    all() {
        return Promise.resolve(genres)
    }

    find(name) {
        return Promise.resolve(genres.find(genre => genre.name === name))
    }

}