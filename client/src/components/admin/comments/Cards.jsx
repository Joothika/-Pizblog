import React from 'react'
import { BlogIcon, CommentIcon } from '../../../utils/SvgImages'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { UseCommentContext } from '../../../context/CommentDataContext'
import { blogChartHeaderText, commentChartHeaderText } from '../../../assets/constant'
import { GetPizzaById } from '../../../hooks/GetPizzas'
import { GetCommentById } from '../../../hooks/GetComments'

const Cards = () => {
    const {pizzas, viewPizzaById} = UsePizzaContext()
    const {blogOptionId, setBlogOptionId, commentsById } = UseCommentContext()
    GetPizzaById(blogOptionId)
    GetCommentById(blogOptionId)
    
  return (
        <>
        <div className='grid rounded-md bg-white shadow-xl cursor-pointer grid-cols-2 px-6 md:px-10 py-5 md:py-6 '>
                <ul>
                    <li className='text-secondary text-sm md:text-xl'>{blogChartHeaderText}</li>
                    <li className='text-md md:text-lg mt-4 md:mt-6'>{ viewPizzaById?.title || pizzas[0]?.title}</li>
                </ul>
                <div>
                    <select className='cursor-pointer outline-none border-none ml-25' onChange={(e) => setBlogOptionId(e.target.value)}>
                        <option value=""></option>
                        {
                            pizzas?.map(pizza => <option key={pizza?._id} value={pizza?._id || pizzas[0]?._id } className='text-xs border-none' >{pizza?.title}</option>)
                        }
                    </select>
                    <BlogIcon w={'40'} h={'40'} style={'mt-5'} />
                    
                </div>
        </div> 
        <div className='grid rounded-md bg-white shadow-xl cursor-pointer grid-cols-2 px-6 md:px-10 py-5 md:py-6 '>
                <ul>
                    <li className='text-secondary text-sm md:text-xl'>{commentChartHeaderText}</li>
                    <li className='text-md md:text-lg mt-4 md:mt-6'>{ commentsById?.length || 0 }</li>
                </ul>
                {
                    <CommentIcon w={40} h={40} />
                }
        </div> 
        </>
    
  )
}

export default Cards