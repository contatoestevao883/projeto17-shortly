import { Router } from "express"
import { signUp } from "../controllers/signUp.controllers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { signUpSchema } from "../schemas/signup.schema.js"
import { validateSignUp } from "../middlewares/signUp.middleware.js"

const signUpRouter = Router()

signUpRouter.post("/signup", validateSchema(signUpSchema), validateSignUp, signUp)



export default signUpRouter