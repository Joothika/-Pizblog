import React from 'react'
import { ApprovedIcon, BlogIcon, CalendarIcon, FeaturedIcon, SubscribedUserIcon, UserIcon, VarietyIcon } from '../../utils/SvgImages';

const Cards = ({cardDetail, index, sm, dashboard, blog}) => {
  const {cardName, cardCount} = cardDetail;
  return (  
    <div className='grid rounded-md bg-white shadow-xl cursor-pointer grid-cols-2 px-6 md:px-10 py-5 md:py-6 '>
                <ul>
                    <li className='text-secondary text-sm md:text-xl'>{cardName}</li>
                    <li className='font-semibold text-md md:text-lg mt-4 md:mt-6'>{cardCount}</li>
                </ul>
                { dashboard ?
                  index == 0 && <BlogIcon w={sm ? '35':'50'} h={sm ? '35':'50'} /> ||
                  index == 1 && <ApprovedIcon w={sm ? '35':'53'} h={sm ? '35':'53'} /> ||
                  index == 2 && <UserIcon w={sm ? '35':'55'} h={sm ? '35':'55'} /> ||
                  index == 3 && <SubscribedUserIcon w={sm ? '35':'85'} h={sm ? '35':'85'} />
                  :
                  ''
                }
                { blog ?
                  index == 0 && <BlogIcon w={sm ? '35': '50'} h={sm ? '35' : '50'} /> ||
                  index == 1 && <VarietyIcon w={sm ? '30' : '45'} h={sm ? '30' : '45'} /> ||
                  index == 2 && <CalendarIcon w={sm ? '39' : '52'} h={sm ? '39' : '52'} /> ||
                  index == 3 && <FeaturedIcon w={sm ? '39' : '55'} h={sm ? '39' : '55'} />
                  :
                  ''
                }
    </div> 
  )
}

export default Cards