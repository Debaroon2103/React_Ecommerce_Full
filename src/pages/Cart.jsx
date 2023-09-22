import React, { useEffect, useState } from 'react'

import CartItem from "./CartItem.jsx"
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import StripeCheckout from 'react-stripe-checkout';

function Cart() {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  const [totalAmt, setTotalAmt] = useState("")
  const [paynow, setPayNow] = useState(false)



  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity

      return price
    })
    setTotalAmt(price.toFixed(2))

  }, [productData])




  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true)
      console.log("lets foooooooooooooooooooooooooooooooooooooo")
    } else {
      toast.error("Login in First")
    }
  }



  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token
    })

  }

































  return (
    <div>
      <img className='w-full h-60 object-cover' src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compres" loading='eager' alt="" />

      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />

        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart Total</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal <span className='font-bold text-lg'>₹{totalAmt}</span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, quos.</span>
            </p>
          </div>
          <p className='font-semibold flex justify-between mt-6'>Total <span className='text-xl font-bold'>₹{totalAmt}</span></p>
          <button onClick={handleCheckOut} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>Checkout</button>

          {
            paynow && <div>
              <StripeCheckout stripeKey='pk_test_51NRPUESJ9XjJX0GoQCrpRnNFVWka2yeuROOPGtjaPuwa6nyxolQrR1NJBgb8q2is8kUBHQbQqZbXmzlIdUsvqpoY00G2p8Pzct'
                name='Ghost Store Main'
                amount={totalAmt * 100}
                label='Pay To Ghost Store'
                description={`Your Payment amount is $${totalAmt}`}
                email={userInfo.email}
                token={payment}
              />
            </div>
          }
        </div>



      </div>
      <ToastContainer position='top-left' autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />

    </div>
  )
}

export default Cart