import express from 'express'
import { getFilterOptionController } from '../controllers/filterController.js'
const filterRouter = express.Router()

filterRouter.get('/', getFilterOptionController)


export default filterRouter