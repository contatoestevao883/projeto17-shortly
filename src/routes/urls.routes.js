import { Router } from "express"
import { deleteUrls, getUrlsById, openUrls, postUrls } from "../controllers/urls.controllers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { urlSchema } from "../schemas/urls.schema.js"
import { deleteURL, redirectURL, validateURL } from "../middlewares/url.middleware.js"

const urlsRouter = Router()

urlsRouter.post("/urls/shorten", validateSchema(urlSchema), validateURL, postUrls)
urlsRouter.get("/urls/:id", getUrlsById)
urlsRouter.get("/urls/open/:shortUrl", redirectURL, openUrls)
urlsRouter.delete("/urls/:id", deleteURL, deleteUrls )

export default urlsRouter