import express from 'express'
import { addNutrientController, deleteNutrientController, getNutrientController, updateNutrientController } from '../controllers/nutrientController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
const nutrientRouter = express.Router()

nutrientRouter.post('/', authMiddleware, addNutrientController)
nutrientRouter.get('/', getNutrientController)
nutrientRouter.put('/:id', authMiddleware, updateNutrientController)
nutrientRouter.delete('/:id', authMiddleware, deleteNutrientController)


export default nutrientRouter