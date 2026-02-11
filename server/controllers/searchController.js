import { Blog } from "../models/blogModel.js"
import { Comment } from "../models/commentModel.js"


export const searchBlogByTextController = async(req,res) => {
    try{
        const {searchText} = req.body
        const blog = await Blog.find({})

        let filteredSearchedBlog = blog.filter(blog => blog?.title?.toLowerCase()?.includes(searchText?.toLowerCase()) || blog?._id == searchText)

        return res.json({
            status:true,
            count:filteredSearchedBlog?.length,
            data: filteredSearchedBlog
        })
    }catch(e){
         return res.json({
            status:false,
            message: e.message
        })
    }
}

export const searchUserByIdController = async(req,res) => {
    try{
        const {id} = req.params
        const comment = await Comment.find({})

        let filteredSearchedComment = comment.filter(comment => comment?._id == id  )

        return res.json({
            status:true,
            data: filteredSearchedComment
        })
    }catch(e){
         return res.json({
            status:false,
            message: e.message
        })
    }
}