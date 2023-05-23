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

export async function redirectURL (req, res, next) {
    const { shortUrl } = req.params
    
    try {
        const shortUrlExist = await db.query(`SELECT * FROM urls WHERE "shortUrl"=$1`, [shortUrl])
        console.log(shortUrlExist.rows[0])
        res.locals.links = shortUrlExist.rows[0]

        if (!shortUrlExist.rows[0]) return res.status(404).send({ message: "URL não encontrada!" })

        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteURL (req, res, next) {
    const { id } = req.params
    const { authorization }= req.headers
    const token = authorization?.replace("Bearer ", "")
    try {
        const sessionsToken = await db.query(`SELECT * FROM sessions WHERE token=$1`, [token])

        console.log(sessionsToken.rows[0])

        const user = await db.query(`SELECT * FROM urls WHERE id=$1`, [sessionsToken.rows[0].userId])

        console.log(user.rows[0])
        
        if (!authorization || !sessionsToken.rows[0] || !token) return res.status(401).send({ message: "Token inexistente!" })
    
        if ( user.rows[0].id !== id) return res.status(401).send("URL não pertence ao usuário!")

        if (!user.rows[0].shortUrl) return res.status(404).send("URL não encontrada!")

        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}