import express from 'express'
import { addSubscribedUserController, getSubscribedUserController } from '../controllers/subscribeController.js'
const subscribedRouter = express.Router()

subscribedRouter.post('/', addSubscribedUserController)
subscribedRouter.get('/', getSubscribedUserController)

export default subscribedRouter