import { db } from "../database/database.connection.js"

export async function validateSignUp(req, res, next) {
   const { email } = req.body 
   
    try {
        const emailExist = await db.query(`SELECT * FROM users WHERE email=$1`, [email])

        if (emailExist.rows[0]) return res.status(409).send( {message: "E-mail já cadastrado!"})

        res.locals.user = emailExist.rows[0]

        next()

    } catch (err) {
        res.status(500).send(err.message)
    }
}