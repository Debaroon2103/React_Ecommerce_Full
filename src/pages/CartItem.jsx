import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineClose } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../Redux/bazarslice'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi"

const CartItem = () => {
    const productData = useSelector((state) => state.bazar.productData)
    // const [baseqty, setBaseqty] = useState(1)
    const dispatch = useDispatch()

    if (productData.length === 0) {
        return (
            <div className="w-2/3 pr-10">
                <h2 className="text-2xl">Your cart is empty</h2>
            </div>
        );
    }
    return (
        <div className='w-2/3 pr-10'>
            <div className='w-full'>
                <h2 className='text-2xl'>Shopping Cart</h2>
            </div>
            <div>
                {
                    productData.map((item) => (
                        <div key={item.id} className='flex items-center justify-between gap-6 mt-6'>
                            <div className='flex items-center gap-2'>
                                <MdOutlineClose onClick={() => dispatch(deleteItem(item.id)) & toast.error(`${item.title} Is Removed`)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                                <img src={item.image} className='w-32 h-32 object-contain' alt="" />
                            </div>
                            <h2 className='w-52'>{item.title}</h2>
                            <p className='w-10'>₹{item.price}</p>
                            <p className="text-sm">Quantity</p>
                            <div className='flex items-center gap-4 text-sm font-semibold'>
                                <span onClick={() =>

                                    dispatch(decrementQuantity({
                                        id: item.id,
                                        title: item.title,
                                        image: item.image,
                                        price: item.price,
                                        quantity: 1,
                                        description: item.description,
                                    }))} className='border h-5 forn-normal text-lg flex items-center justify-center px-2 cursor-pointer'>-</span>
                                <h1>{item.quantity}</h1>
                                <span onClick={() => dispatch(incrementQuantity({
                                    id: item.id,
                                    title: item.title,
                                    image: item.image,
                                    price: item.price,
                                    quantity: 1,
                                    description: item.description,
                                }))} className='border h-5 forn-normal text-lg flex items-center justify-center px-2 cursor-pointer'>+</span>
                            </div>
                            <p className='w-14'>₹{item.quantity * item.price}</p>
                        </div>
                    ))
                }
            </div>
            <button className='bg-red-500 text-white mt-8 ml-7 py-1 px-6' onClick={() => dispatch(resetCart()) & toast.error("Your Car Is Empty")}>Delete All</button>
            <Link to="/">
                <span className='flex mt-16 items-center text-gray-400'>
                    <HiOutlineArrowLeft />
                    Go to Home
                </span>
            </Link>
            <ToastContainer position='top-left' autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
        </div>
    )
}

export default CartItem