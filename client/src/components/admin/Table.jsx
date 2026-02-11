import React from 'react'
import { DeleteIcon, EditIcon } from '../../utils/SvgImages'
import { Link, useParams } from 'react-router'
import { DeletePizzasById, GetPizzaById } from '../../hooks/GetPizzas'
import { UseCommentContext } from '../../context/CommentDataContext'
import { DeleteCommentByUserId } from '../../hooks/GetComments'
import { UsePizzaContext } from '../../context/PizzaDataContext'

const Table = ({tableHeadData, tableContentData, icon, noEdit}) => {
  const { setUserId } = UseCommentContext()
  const { setPizzaId } = UsePizzaContext()
  const {id} = useParams()
  GetPizzaById(id)
  DeleteCommentByUserId()
  DeletePizzasById()

  return (
    <table className=' w-full'>
      <thead>
        <tr className='grid grid-cols-[50px_80px_2fr_50px] md:grid-cols-[100px_300px_3fr_100px] gap-x-1 md:gap-x-0.5'>
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
                        <tr key={data?._id} className='grid grid-cols-[50px_80px_2fr_50px] md:grid-cols-[100px_300px_3fr_100px] gap-x-1 md:gap-x-0.5 mt-1'>
                            <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm py-2 md:py-3'>{i+1}</td>
                            <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm py-2 md:py-3'>{data?._id || data?._id}</td>
                            <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm px-2 py-2 md:py-3'>{data?.title || data?.comment}</td>
                            {!icon && <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm py-2 md:py-3'>{data?.status}</td>}
                            {
                            icon && <td className='bg-ternary/10 text-secondary text-center max-sm:text-sm py-2 md:py-3 grid grid-cols-2 gap-3'>
                                           {!noEdit && 
                                            <Link to={`/admin/blog/update/${data?._id}`}>
                                              <EditIcon w={20} h={20} style={'justify-self-end cursor-pointer'} />
                                            </Link>
                                           }
                                            <button onClick={() => noEdit ? setUserId(data?._id) : setPizzaId(data?._id)}>
                                              <DeleteIcon w={20} h={20} style={`cursor-pointer ${noEdit && 'max-sm:ml-3 ml-10'}`} />
                                            </button>
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

export default Table