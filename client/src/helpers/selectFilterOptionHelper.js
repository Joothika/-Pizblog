import React from 'react'

const selectFilterOptionHelper = (e,f,setVariety,setIngredient) => {
        if(f?.valueTag == 'variety')
             return setVariety(e.target.value)
        else
          return setIngredient(e.target.value)
    
}

export default selectFilterOptionHelper