import express from "express"
import cors from "cors"
import signUpRouter from "./routes/signup.routes.js"
import signInRouter from "./routes/signin.routes.js"
import urlsRouter from "./routes/urls.routes.js"
import usersRouter from "./routes/users.routes.js"
import rankingRouter from "./routes/ranking.routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(signUpRouter, signInRouter, urlsRouter, usersRouter, rankingRouter)

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))