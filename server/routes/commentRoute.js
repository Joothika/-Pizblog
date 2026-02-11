import express from 'express'
import { addCommentByIdController, deleteCommentByIdController, getCommentsByIdController, getCommentsController } from '../controllers/commentController.js'
import {authMiddleware} from '../middleware/authMiddleware.js'
const commentRouter = express.Router()

commentRouter.post('/:id', addCommentByIdController)
commentRouter.get('/', getCommentsController)
commentRouter.get('/:id', getCommentsByIdController)
commentRouter.delete('/:commentId', authMiddleware, deleteCommentByIdController)



export default commentRouter