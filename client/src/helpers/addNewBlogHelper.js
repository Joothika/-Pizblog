


export const insertInputBox = (e, placeholderCount, setPlaceholderCount, setInputBoxState) => {
 
    e.preventDefault()
    setPlaceholderCount(prev => prev + 1 )
    setInputBoxState(prev => [...prev , placeholderCount])

}

export const removeInputBox = (e, placeholderCount, setPlaceholderCount, setInputBoxState) => {
 
    e.preventDefault()
    setPlaceholderCount(prev => prev - 1 )
    setInputBoxState(prev => [...prev , placeholderCount])

}

export const insertInputData = (boxIndex , data, setData) => e => {

    let newArr = [...data]
    newArr[boxIndex] = e.target.value
    setData(newArr)
}


export const getNutrition = (addNutrient,addQuantity) => {

    let nutrition = addNutrient?.map((nutrient, i) => {
      let quantity =  addQuantity?.map((quantity) => quantity)
        return(
            {
                'nutrient': nutrient,
                'quantity': quantity[i]
            }
        )
        
    })

    return nutrition
}


export const getStatus = (status) => {
    let resStatus = (status == true) ? 'A' : 'NA'
    return resStatus
}