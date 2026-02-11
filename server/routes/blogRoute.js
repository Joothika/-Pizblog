import express from 'express'
import { addBlogController, deleteBlogByIdController, getAllBlogController, getApprovedController, getBlogByIdController, getFeaturedBlogController, getRecentBlogController, getTodayBlogController, updateBlogByIdController } from '../controllers/blogController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
const blogRouter = express.Router()

blogRouter.post('/',authMiddleware, addBlogController )
blogRouter.get('/', getAllBlogController )
blogRouter.get('/approved', getApprovedController)
blogRouter.get('/today', getTodayBlogController )
blogRouter.get('/featured', getFeaturedBlogController )
blogRouter.get('/recent', getRecentBlogController )
blogRouter.get('/:id', getBlogByIdController )
blogRouter.put('/:id', authMiddleware, updateBlogByIdController )
blogRouter.delete('/:id', authMiddleware, deleteBlogByIdController )


export default blogRouter