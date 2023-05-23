import { db } from "../database/database.connection.js"
import bcrypt, { hash } from "bcrypt"

export async function validateSignIn(req, res, next) {
    const { email, password } = req.body 
   
    try {
        const user = await db.query(`SELECT * FROM users WHERE email=$1`, [email])

        if (!user.rows[0]) return res.status(401).send({ messsage: "Usuário ou senha não encontrados!"})
     
        const checkPassword = bcrypt.compareSync(password, user.rows[0].password)
        
        if (!checkPassword) return res.status(401).send({ messsage: "Usuário ou senha não encontrados!"})

        res.locals.user = user.rows[0]

        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}