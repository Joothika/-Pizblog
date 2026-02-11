import React, { useEffect } from 'react'
import { UseBlogContext } from '../context/BlogDataContext'
import { getRandomText } from '../service/randomTextService'

export const GetRandomText = () => {
    const {setBlogSubText} = UseBlogContext()

    useEffect(() => {

        const fetchData = async() => {
            const data = await getRandomText()
            setBlogSubText(data?.map(randomText => randomText?.subtext))
        }

        fetchData()

    }, [setBlogSubText])
 
}


export const GenerateRandomText = () => {
    const {blogSubText, setRandomText} = UseBlogContext()
    GetRandomText()

    const generateRandomText = () => {
            const randIndex = Math?.floor(Math?.random() * blogSubText?.length)
            const randData = blogSubText[randIndex]
            console.log(randIndex,randData)
            return randData
    }

    
    useEffect(() => {   

       setRandomText(generateRandomText())

        const intervalId = setInterval(() => {
                setRandomText(generateRandomText());
         }, 2000);

        return () => clearInterval(intervalId);
          
    }, [blogSubText])
 
}