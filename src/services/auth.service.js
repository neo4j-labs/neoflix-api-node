import { user } from "../../test/fixtures/users.js";

export default class AuthService {
    driver;

    constructor() {
        // Assign the driver here
    }

    authenticate(email, password) {
        if (email === 'graphacademy@neo4j.com' && password === 'letmein') {
            return user
        }

        return false
    }

    register(email, password, name) {
        return user
    }
}
