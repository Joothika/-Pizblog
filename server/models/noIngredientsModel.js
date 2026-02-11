import {Schema, model} from 'mongoose'

const ingredientSchema = new Schema({
    noIngredient:{
        type:String,
        required:true
    }
})

export const Ingredients = new model('Ingredients', ingredientSchema)