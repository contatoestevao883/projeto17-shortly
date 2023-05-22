import express from "express"
import cors from "cors"
import signUpRouter from "./routes/signup.routes"
import signInRouter from "./routes/signin.routes"
import urlsRouter from "./routes/urls.routes"
import usersRouter from "./routes/users.routes"
import rankingRouter from "./routes/ranking.routes"

const app = express()
app.use(cors())
app.use(express.json())
app.use(signUpRouter, signInRouter, urlsRouter, usersRouter, rankingRouter)

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))