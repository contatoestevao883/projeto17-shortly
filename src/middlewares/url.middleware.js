import { db } from "../database/database.connection.js"

export async function validateURL (req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    
    try {
        const session = await db.query(`SELECT * FROM sessions WHERE token=$1`, [token])

        const sessionId = session.rows[0]

        res.locals.session = sessionId

        if (!authorization || !session.rows[0] || !token) return res.status(401).send({ message: "Token inexistente!" })

        next()

    } catch (err) {
        res.status(500).send(err.message)
    }
}
