import { db } from "../database/database.connection.js"
import { nanoid } from 'nanoid'

export async function postUrls (req, res) {
    const { url } = req.body
    const { userId } = res.locals.session

    try {
        const shortUrl = nanoid()

        await db.query(`INSERT INTO urls (id, url, "shortUrl") VALUES ($1, $2, $3)`, [userId, url, shortUrl])

        res.status(201).send({
            id: userId,
            shortUrl: shortUrl
        })

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getUrlsById (req, res) {
    const { id } = req.params

    try {
        const url = await db.query(`SELECT * FROM urls WHERE id=$1`, [id])

        if (!url.rows[0].shortUrl) return res.status(404).send("URL não encontrada!")

        res.status(200).send(url.rows[0])

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function openUrls (req, res) {
   
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}


export async function deleteUrls (req, res) {
   const { id } = req.params
   const { authorization } = req.headers
   const token = authorization?.replace("Bearer ", "")
    
    try {
        const sessionsToken = await db.query(`SELECT * FROM sessions WHERE token=$1`, [token])
        if (!authorization || !sessionsToken ) return res.status(401).send({ message: "Token inexistente!" })

        const url = await db.query(`SELECT * FROM urls WHERE id=$1`, [id])
        if (!url.rows[0]) return res.status(401).send("URL não pertence ao usuário!")
        await db.query(`DELETE ONE FROM urls WHERE url=$1`, [url])
    } catch (err) {
        res.status(500).send(err.message)
    }
}