import express from 'express'
import { addVarietyController, deleteVarietyController, getVarietyController, updateVarietyController } from '../controllers/varietyController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
const varietyRouter = express.Router()


varietyRouter.post('/', authMiddleware , addVarietyController)
varietyRouter.get('/', getVarietyController)
varietyRouter.put('/', authMiddleware , updateVarietyController)
varietyRouter.delete('/', authMiddleware , deleteVarietyController)


export default varietyRouter