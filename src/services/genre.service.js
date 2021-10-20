import { genres } from "../../test/fixtures/genres.js";

export default class GenreService {
    driver;

    constructor() {
        // Assign the driver here
    }

    async all() {
        return genres
    }

    async find(name) {
        return genres.find(genre => genre.name === name)
    }

}