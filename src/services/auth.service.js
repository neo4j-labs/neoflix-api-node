import jwt from 'jsonwebtoken'
import { hash } from 'bcrypt'
import { user } from "../../test/fixtures/users.js";

export default class AuthService {
    driver;

    constructor() {
        // Assign the driver here
    }

    async authenticate(email, password) {
        if (email === 'graphacademy@neo4j.com' && password === 'letmein') {
            const { password, ...claims } = user.properties

            return {
                ...claims,
                token: jwt.sign(claims, process.env.JWT_SECRET)
            }
        }

        return false
    }

    async register(email, plainPassword, name) {
        const encrypted = hash(plainPassword)

        // TODO: Save user

        const { password, ...claims } = user.properties

        return {
            ...claims,
            token: jwt.sign(claims, process.env.JWT_SECRET)
        }
    }
}
