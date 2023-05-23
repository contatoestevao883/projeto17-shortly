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
    const { shortUrl } = req.params
    const { url } = res.locals.links
    try { 
        await db.query(`UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE "shortUrl"=$1`, [shortUrl])

        res.redirect(url)

    } catch (err) {
        res.status(500).send(err.message)
    }
}


export async function deleteUrls (req, res) {
   const { id } = req.params
    
    try {
        await db.query(`DELETE FROM urls WHERE id=$1`, [id])
        res.sendStatus(204)

    } catch (err) {
        res.status(500).send(err.message)
    }
}