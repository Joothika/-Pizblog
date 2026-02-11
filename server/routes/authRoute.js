import express from 'express'
import { adminLoginController } from '../controllers/authController.js'
const authRouter = express.Router()

authRouter.post('/login', adminLoginController)


export default authRouter