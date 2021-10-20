import jwt from 'jsonwebtoken'
import { hash } from 'bcrypt'
import { user } from "../../test/fixtures/users.js";
import ValidationError from '../errors/validation.error.js';

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
        if (email !== 'graphacademy@neo4j.com') {
            throw new ValidationError(`An account already exists with the email address ${email}`, {
                email: 'Email address taken'
            })
        }
        const encrypted = await hash(plainPassword, parseInt(process.env.SALT_ROUNDS))

        // TODO: Save user

        const { password, ...claims } = user.properties

        return {
            ...claims,
            token: jwt.sign(claims, process.env.JWT_SECRET)
        }
    }
}
