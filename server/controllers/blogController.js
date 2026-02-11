import { Blog } from "../models/blogModel.js"


export const addBlogController = async(req,res) => {

   try{
       const {link,title,slug,ingredients,noIngredients,variety,instructions,nutrition,keywords,status} = req.body
       
       if( !link || !title || !slug || !ingredients || !noIngredients || !variety || !instructions || !nutrition || !keywords || !status)
        return res.json({
            status:false,
            message:'All fields required'
        })

    let newBlog = {
        link,title,slug,ingredients,noIngredients,variety,instructions,nutrition,keywords,status
    }

    const blog = await new Blog(newBlog)
    blog.save()

    return res.json({
        status:true,
        message: "blog added successfully"
    })

   }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
   }
}

export const getAllBlogController = async(req,res) => {

    try{
        const allBlogs = await Blog.find({})

        return res.json({
            status:true,
            count:allBlogs?.length,
            data: allBlogs
        })

    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }

}

export const getApprovedController = async(req,res) => {

    try{
        const approvedBlogs = await Blog.find({status: 'A', keywords:'all'})

        return res.json({
            status:true,
            count:approvedBlogs?.length,
            data: approvedBlogs
        })

    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }

}

export const getTodayBlogController = async(req,res) => {

    try{
        let todayBlogs = await Blog.find({status:'A'})
        
        const today = new Date(); 
        let dateOfBlog = today?.getDate()
        let monthOfBlog = today?.getMonth()
        let yearOfBlog = today?.getFullYear()
        let todayBlogDateFormat = `${dateOfBlog/monthOfBlog/yearOfBlog}`

        let blogDateFormat = todayBlogs.filter(blog => {
                let dateOfBlog = blog?.createdAt.getDate()
                let monthOfBlog = blog?.createdAt.getMonth()
                let yearOfBlog = blog?.createdAt.getFullYear()
                let blogDateFormat = `${dateOfBlog/monthOfBlog/yearOfBlog}`
                if(blogDateFormat == todayBlogDateFormat)
                        return blog
            })

        return res.json({
            status:true,
            count:blogDateFormat?.length,
            data: blogDateFormat
        })

    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }

}

export const getFeaturedBlogController = async(req,res) => {

    try{
        const featuredBlogs = await Blog.find({keywords:'featured', status:'A'})

        return res.json({
            status:true,
            count:featuredBlogs?.length,
            data: featuredBlogs
        })

    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }

}

export const getRecentBlogController = async(req,res) => {

    try{
        const recentBlogs = await Blog.find({}).sort({'createdAt': -1}).limit(5)

        return res.json({
            status:true,
            data: recentBlogs
        })

    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }

}

export const getBlogByIdController = async(req,res) => {

    try{
        let {id} = req.params
        let blogById = await Blog.findById(id)

         if(id != blogById?._id)
            return res.json({
                status:false,
                message: `No blog found with this ${id}`,
        }) 
        
        return res.json({
            status:true,
            data: blogById
        })
        
    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }
}

export const updateBlogByIdController = async(req,res) => {

    try{
        let {id} = req.params
        let updateBlog = await Blog.findByIdAndUpdate({_id:id}, req.body)

         if(id != updateBlog?._id)
            return res.json({
                status:false,
                message: `No blog found with this  ${id}`,
        }) 

        return res.json({
            status:true,
            message: 'blog updated successfully',
        })

    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }
}

export const deleteBlogByIdController = async(req,res) => {

    try{

        let {id} = req.params
        
        let deleteBlog = await Blog.findByIdAndDelete({_id: id})

        if(id != deleteBlog?._id)
            return res.json({
                status:false,
                message: `No blog found with this  ${id}`,
        }) 

        return res.json({
                status:true,
                message: 'blog deleted successfully'
        })
    }catch(e){
        return res.json({
                status:false,
                message: e.message
        })
    }
}