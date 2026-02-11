import {Schema, model} from 'mongoose'

const varietySchema = new Schema({
    variety:{
        type:String,
        required:true
    }
})

export const Variety = new model('Variety', varietySchema)