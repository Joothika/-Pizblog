import express from 'express'
import { addKeywordController, deleteKeywordController, getKeywordController, updateKeywordController } from '../controllers/keywordController.js'
import {authMiddleware} from '../middleware/authMiddleware.js'
const keywordRouter = express.Router()

keywordRouter.post('/', authMiddleware, addKeywordController)
keywordRouter.get('/', getKeywordController)
keywordRouter.put('/', authMiddleware, updateKeywordController)
keywordRouter.delete('/', authMiddleware, deleteKeywordController)


export default keywordRouter