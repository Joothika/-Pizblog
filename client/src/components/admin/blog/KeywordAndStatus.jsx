import React from 'react'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { UseBlogContext } from '../../../context/BlogDataContext'
import { GetKeyword } from '../../../hooks/GetPizzas'

const KeywordAndStatus = () => {
  const {keywords, setKeywords, status, setStatus} = UsePizzaContext()
  const {keywordsService} = UseBlogContext()
  GetKeyword()

  return (
    <div className='grid md:grid-cols-[8fr_1fr]  self-center'>
        <div className='grid md:grid-cols-[50px_1fr] md:gap-x-8'>
            <label htmlFor="keywords" className='text-secondary md:text-md max-sm:mb-4'>Keywords</label>
            <select name="" id="" className='w-full outline-none border border-ternary h-8 indent-1 text-xs md:text-sm' value={keywords} onChange={e => setKeywords(e.target.value)}>
                <option value="choose the keyword">choose the keyword</option>
                {
                  keywordsService?.map((keyword) => <option key={keyword?._id} value={keyword?.keyword}>{keyword?.keyword}</option>)
                }
             </select>
        </div>
        <div className='md:justify-self-center max-sm:mt-5'>
            <input type="checkbox" name="" id="status" className='w-5 h-3' value={status} onClick={(e) => setStatus(e.target.checked)} />
            <label htmlFor="status" className='text-secondary md:text-md max-sm:mb-4 ml-1'>Approved</label>
        </div>
    </div>
  )
}

export default KeywordAndStatus