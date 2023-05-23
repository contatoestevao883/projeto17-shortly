import { db } from "../database/database.connection.js"
import { v4 as uuid } from "uuid"

export async function signIn (req, res) {
    
    try {
        const token = uuid()

        await db.query(`INSERT INTO sessions (token, name)VALUES ($1, $2)`,[token, res.locals.user.name])
        
        res.sendStatus(200)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

