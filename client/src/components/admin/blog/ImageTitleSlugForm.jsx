import React from 'react'
import { ImageIcon, TitleIcon } from '../../../utils/SvgImages'
import {UsePizzaContext} from '../../../context/PizzaDataContext'

const ImageTitleSlugForm = () => {
  const {imageLink, setImageLink, title, setTitle, slug, setSlug} = UsePizzaContext()

  return (
    <>
            <div className='flex gap-x-3'>
                <ImageIcon w={35} h={35} style={'md:mt-[0.5px]'} />
                <input type="text" placeholder='link' className='outline-none border border-ternary indent-2 w-full py-2' value={imageLink} onChange={e => setImageLink(e.target.value)} />
            </div>
            <div className='flex gap-x-4.5 md:gap-x-5'>
                <TitleIcon w={28} h={28} style={'mt-2'} />
                <input type="text" placeholder='title' className='outline-none border border-ternary indent-2 w-full py-2' value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className='flex gap-x-5 md:gap-x-6'>
                <h1 className='font-ternary text-primary text-5xl -mt-2'>s</h1>
                <input type="text" placeholder='slug' className='outline-none border border-ternary indent-2 w-full py-2' value={slug} onChange={e => setSlug(e.target.value)} />
            </div>
    </>
  )
}

export default ImageTitleSlugForm