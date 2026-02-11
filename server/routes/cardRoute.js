import express from 'express'
import { adminDashboardCardController, blogCardController, commentCardController, userDashboardCardController } from '../controllers/cardController.js'
const cardRouter = express.Router()

cardRouter.get('/admin', adminDashboardCardController)
cardRouter.get('/user', userDashboardCardController)
cardRouter.get('/blog', blogCardController)
cardRouter.get('/comment', commentCardController)


export default cardRouter