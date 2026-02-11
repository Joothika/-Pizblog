import { Blog } from "../models/blogModel.js"
import { Comment } from "../models/commentModel.js"


export const addCommentByIdController = async(req,res) => {

    try{
        let { id } = req.params
        const {userName, comment} = req.body
        const newComment = {blogId : id, userName, comment}

        let addComment = await new Comment(newComment)
        addComment.save()

        return res.json({
            status:true,
            message:'comment created'
        })
    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }
}

export const getCommentsController = async(req,res) => {

    try{
        let allComment = await Comment.find({})
        return res.json({
            status:true,
            data:allComment
        })
    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }
}

export const getCommentsByIdController = async(req,res) => {

    try{
        const {id} = req.params
        const getCommentByBlog = await Comment.find({blogId:id})
        const blog = await Blog.findById({_id:id})

        if(id != blog?._id)
             return res.json({
                status:true,
                blogId:id,
                message:`comments with this ${id} not found`,
            })

        return res.json({
            status:false,
            blogId:id,
            count:getCommentByBlog?.length,
            data:getCommentByBlog,
        })
    }catch(e){
         return res.json({
                status:false,
                message: e.message
        })
    }
}

export const deleteCommentByIdController = async(req,res) => {

    try{
        const {commentId} = req.params
        await Comment.findByIdAndDelete({_id: commentId})

        if(!commentId)
             return res.json({
                status:false,
                commentId,
                message:`No comments with this ${id} not found`,
            })

        return res.json({
            status:true,
            commentId,
            message:"comment deleted successfully",
        })

    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }
}