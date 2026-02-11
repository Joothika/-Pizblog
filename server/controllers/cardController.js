import { Blog } from "../models/blogModel.js"
import { Subscribe } from "../models/subscribedUserModel.js"
import { Comment } from "../models/commentModel.js"
import { Variety } from "../models/varietyModel.js"


export const adminDashboardCardController = async(req,res) => {
    try{
        const blogCount = await Blog.countDocuments({})
        const approvedCount = await Blog.countDocuments({})
        const userCount = await Comment.countDocuments({})
        const subscribedUserCount = await Subscribe.countDocuments({})

        const adminCards = [
            {
                _id:'blogDsCard',
                cardName: 'Blog',
                cardCount: blogCount,
            },
            {
                _id:'approvedDsCard',
                cardName: 'Approved',
                cardCount: approvedCount,
            },
            {
                _id:'userDsCard',
                cardName: 'Users',
                cardCount: userCount,
            },
            {
                _id:'subscribedUserDsCard',
                cardName: 'Subscribed',
                cardCount: subscribedUserCount,
            }

        ]

        return res.json({
            status:true,
            data:adminCards
        })

    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const userDashboardCardController = async(req,res) => {
    try{
        const blogCount = await Blog.countDocuments({})
        const varietyCount = await Variety.countDocuments({})
        
        const userCards = [
            {
                title:'Total Blog',
                count:blogCount
            },
            {
                title:'Total Variety',
                count:varietyCount
            },
        ]

        return res.json({
            status:true,
            data: userCards
        })

    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const blogCardController = async(req,res) => {
    try{
        const blogCount = await Blog.countDocuments({})
        const varietyCount = await Variety.countDocuments({})
        const todayCount = await Blog.countDocuments({ keywords:'today'})
        const featuredCount = await Blog.countDocuments({keywords:'featured'})

        const blogCards = [
            {
                _id:'blogCard1',
                cardName: 'Blog',
                cardCount: blogCount,
            },
            {
                _id:'blogCard2',
                cardName: 'Variety',
                cardCount: varietyCount,
            },
            {
                _id:'blogCard3',
                cardName: 'Today',
                cardCount: todayCount,
            },
            {
                _id:'blogCard4',
                cardName: 'Featured',
                cardCount: featuredCount
            }
        ]

        return res.json({
            status:true,
            data:blogCards
        })
        
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}


export const commentCardController = async(req,res) => {
    try{
        const {id} = req.body
        const blogTitle = await Blog.findById({_id:id})
        const commentCount = await Comment.find({blogId:id}).countDocuments()

        const commentCards = {
            title: blogTitle?.title ,
            commentCount
        }

        return res.json({
            status:true,
            data: commentCards
        })

    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}