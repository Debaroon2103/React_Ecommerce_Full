import React from 'react'
import { BsArrowRight } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/bazarslice';
import { ToastContainer, toast } from 'react-toastify';
function ProductCard({ product }) {
  // const randomPrice = Math.floor(Math.random() * 1000) + 1; // Generate a random number between 1 and 1000


  const dispatch = useDispatch()

  const navigate = useNavigate()














  const id = product.title;


  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("")
  }

  const rootId = idString(id)
  // console.log(rootId)



  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      }
    })
  }



















  return (
    <div className='group'>
      <div onClick={handleDetails} className='w-full justify-end h-96 cursor-pointer overflow-hidden text-sm'>
        <img className='w-06 h-full object-fill group-hover:scale-110 duration-1000 ' src={product.image} alt="Product img" />
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
        <div className='flex justify-between items-center'>
          <h2 className='text-base font-bold'>{product.title.substring(0, 15)}</h2>

          <div className='flex gap-2 relative overflow-hidden w-28'>
            <div className='flex gap-2 transform group-hover:translate-x-28 transition-transform duration-500'>
              {/* <p className='font-semibold line-through text-gray-500'>₹{randomPrice}</p> */}
              <p className='font-semibold'>₹{product.price}</p>
              {/* <p className='font-semibold'>₹{product.oldPrice}</p> */}

            </div>
            <p onClick={() => dispatch(addToCart({
              id: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              quantity: 1,
              description: product.description
            })) & toast.success(`${product.title} is added`)
            } className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>Add To Cart <BsArrowRight className='absolute left-24' /></p>
          </div>
        </div>
        <p>{product.category}</p>
      </div>

      <ToastContainer position='top-left' autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
    </div>
  )
}

export default ProductCard


