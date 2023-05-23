import { db } from "../database/database.connection.js"
import bcrypt, { hash } from "bcrypt"

export async function signUp (req, res) {
    const { name, email, password } = req.body 
    
    try { 
        const hash = bcrypt.hashSync(password, 10)

        await db.query(`
            INSERT INTO \"users"\ (name, email, password)
            VALUES  ($1, $2, $3)
        `, [name, email, hash])

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

