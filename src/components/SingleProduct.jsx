import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { addToCart } from '../Redux/bazarslice';
import { ToastContainer, toast } from 'react-toastify';

function SingleProduct() {
    // const randomPrice = Math.floor(Math.random() * 1000) + 1; // Generate a random number between 1 and 1000

    const dispatch = useDispatch()
    const location = useLocation()
    const [details, setDetails] = useState({})
    useEffect(() => {
        setDetails(location.state.item)
    }, [location.state.item])

    const [baseqty, setBaseqty] = useState(1)
    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
                <div className='w-2/5 relative'>
                    <img className='w-[700px] h-[550px] object-contain' src={details.image} alt="" />
                </div>
                <div className='w-3/5 flex flex-col justify-center gap-12'>
                    <div>
                        <h2 className='text-4xl font-semibold'>{details.title}</h2>
                        <div className='flex items-center gap-4 mt-3'>
                            {/* <p className='font-semibold line-through text-gray-500'>₹{randomPrice}</p> */}
                            <p className='font-semibold'>₹{details.price}</p>
                        </div>

                    </div>
                    <div className='flex items-center gap-2 text-base'>
                        <div className='flex'>
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <p className='text-xs text-gray-500 ml-3'>(1 Customer Review)</p>
                        </div>
                    </div>
                    <p className='text-base text-gray-500 mt-3'>{details.description}</p>
                    <div className='flex gap-4'>
                        <div className='w-52 flex items-center justify-between
                            text-gray-500 gap-4 border p-3'>
                            <p className='text-sm'>Quantity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <button onClick={() => { setBaseqty(prevQty => prevQty > 1 ? prevQty - 1 : 1) }}>-</button>
                                <span>{baseqty}</span>
                                <button onClick={() => { setBaseqty(prevQty => prevQty + 1) }}>+</button>
                            </div>
                        </div>
                        <button
                            onClick={() => dispatch(addToCart({
                                id: details.id,
                                title: details.title,
                                image: details.image,
                                price: details.price,
                                quantity: baseqty,
                                description: details.description

                            })) & toast.success(`${details.title} is added`)

                            }
                            className='bg-black text-white py-3 px-6 active:bg-gray-800'>Add To Cart</button>
                    </div>

                    <p className='text-base text-gray-500'>Category: <span className='font-medium capitalize'>{details.category}</span></p>
                    <Link to="/">
                        <button className='bg-black text-white py-3 px-6 active:bg-gray-800'>Return Home</button>
                    </Link>
                </div>

            </div>
            <ToastContainer position='top-left' autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
        </div>
    )
}

export default SingleProduct