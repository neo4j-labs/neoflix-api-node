import { pacino, people } from "../../test/fixtures/people.js";

export default class PeopleService {
    driver;

    constructor() {
        // Assign the driver here
    }

    async all(orderBy, order, limit = 6, skip = 0) {
        return people.slice(skip, skip + limit)
    }

    async findById(id) {
        return pacino
    }

    async getSimilarPeople(id, limit = 6, skip = 0) {
        return people.slice(skip, skip + limit)
    }

}