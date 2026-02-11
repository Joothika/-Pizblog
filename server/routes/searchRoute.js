import express from 'express'
import { searchBlogByTextController, searchUserByIdController } from '../controllers/searchController.js'
const searchRouter = express.Router()

searchRouter.post('/', searchBlogByTextController)
searchRouter.get('/user/:id', searchUserByIdController)



export default searchRouter