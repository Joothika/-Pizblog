import {Schema, model} from 'mongoose'

const keywordSchema = new Schema({
    keyword:{
        type:String,
        required:true
    }
})

export const Keyword = new model('Keyword', keywordSchema)