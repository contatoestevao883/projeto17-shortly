import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { signInSchema } from "../schemas/signin.schema.js"
import { signIn } from "../controllers/signIn.controllers.js"
import { validateSignIn } from "../middlewares/signIn.middleware.js"

const signInRouter = Router()

signInRouter.post("/signin", validateSchema(signInSchema), validateSignIn, signIn)



export default signInRouter