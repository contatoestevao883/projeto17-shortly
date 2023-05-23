import { Router } from "express"
import { getUrlsById, postUrls } from "../controllers/urls.controllers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { urlSchema } from "../schemas/urls.schema.js"
import { validateURL } from "../middlewares/url.middleware.js"

const urlsRouter = Router()

urlsRouter.post("/urls/shorten", validateSchema(urlSchema), validateURL, postUrls)
urlsRouter.get("/urls/:id", getUrlsById )
urlsRouter.get("/urls/open/:shortUrl" )
urlsRouter.delete("/urls/:id" )

export default urlsRouter