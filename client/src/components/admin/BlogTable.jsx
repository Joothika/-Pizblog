import React from 'react'
import { DeleteIcon, EditIcon } from '../../utils/SvgImages'

const BlogTable = ({tableHeadData, tableContentData, icon}) => {
  return (
    <table className=' w-full'>
      <thead>
        <tr className='grid grid-cols-[50px_80px_2fr_80px] md:grid-cols-[100px_300px_3fr_200px] gap-x-1 md:gap-x-0.5'>
            {
                tableHeadData?.map(data => <td key={data?._id} className='bg-primary text-white text-center max-sm:text-sm py-2 md:py-3'>{data?.title}</td>
)
            }
        </tr>
      </thead>
      <tbody>
            {
                tableContentData?.map((data,i) => {
                    return(
                        <tr className='grid grid-cols-[50px_80px_2fr_80px] md:grid-cols-[100px_300px_3fr_200px] gap-x-1 md:gap-x-0.5 mt-1'>
                            <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm py-2 md:py-3'>{i+1}</td>
                            <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm py-2 md:py-3'>{data?._id}</td>
                            <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm px-2 py-2 md:py-3'>{data?.title}</td>
                            {!icon && <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm py-2 md:py-3'>{data?.status}</td>}
                            {
                            icon && <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm py-2 md:py-3 grid grid-cols-2 gap-3'>
                                            <EditIcon w={20} h={20} style={'justify-self-end cursor-pointer'} />
                                            <DeleteIcon w={20} h={20} style={'cursor-pointer'} />
                                          </td>
                            }

                        </tr>
                    )
                })
            }
      </tbody>
    </table>
  )
}

export default BlogTable