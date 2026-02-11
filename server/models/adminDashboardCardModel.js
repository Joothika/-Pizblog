import {Schema, model} from 'mongoose'

const adminDashboardCardSchema = new Schema(
     {
        blogCount:{
            type:Number,
            default:0
        },
        approvedCount:{
            type:Number,
            default:0
        },
        userCount:{
            type:Number,
            default:0
        },
    }
)


export const AdminDashboardCard = new model('AdminDashboardCard',adminDashboardCardSchema)