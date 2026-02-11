import express from 'express'
import mongoose from 'mongoose'
import { addSubTextController, deleteSubTextController, getSubTextController, updateSubTextController } from '../controllers/subTextController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
const subTextRouter = express.Router()

subTextRouter.post('/', authMiddleware, addSubTextController)
subTextRouter.get('/',getSubTextController)
subTextRouter.put('/', authMiddleware, updateSubTextController)
subTextRouter.delete('/', authMiddleware, deleteSubTextController)


export default subTextRouter