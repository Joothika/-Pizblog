import express from 'express'
import { addNoIngredientController, deleteNoIngredientController, getNoIngredientController, updateNoIngredientController } from '../controllers/noIngredientsController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
const ingredientsRouter = express.Router()


ingredientsRouter.post('/', authMiddleware, addNoIngredientController)
ingredientsRouter.get('/', getNoIngredientController)
ingredientsRouter.put('/', authMiddleware, updateNoIngredientController)
ingredientsRouter.delete('/', authMiddleware, deleteNoIngredientController)


export default ingredientsRouter