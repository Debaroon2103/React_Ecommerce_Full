import React from 'react'
import payment2 from "../assets/payment (2).png"

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa"
import { ImGithub } from "react-icons/im"


import {MdLocationOn} from "react-icons/md"
import {BsPersonFill,BsPaypal} from "react-icons/bs"







function Footer() {


    const submitHandler = (e) =>{
        e.preventDefault()
    }








    return (
        <div className='bg-black text-[#949494] py-20 overflow-hidden'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
                <div className='flex flex-col gap-7'>
                    <h1 className="text-2xl font-bold text-white">Ghost Store</h1>
                    <p className='text-white text-sm tracking-wide'>© Ghost Store Private Limited</p>
                    <img className='w-56 mx-1' src={payment2} alt="asdlkjsdl" />
                    <div className='flex gap-5 text-lg text-gray-400'>
                        <ImGithub className='hover:text-white duration-200 cursor-pointer ' />
                        <FaFacebookF className='hover:text-white duration-200 cursor-pointer' />
                        <FaInstagram className='hover:text-white duration-200 cursor-pointer' />
                        <FaTwitter className='hover:text-white duration-200 cursor-pointer' />
                        <FaYoutube className='hover:text-white duration-200 cursor-pointer' />
                    </div>
                </div>
                <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Kestopur</p>
                    <p>Mobile:- 999999999</p>
                    <p>Email: debaalksf@gmail.com</p>
                    
                </div>
                </div>

                <div >
                <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                <div className='flex flex-col gap-2 text-base'>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><BsPersonFill/> My Account</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><BsPaypal/>Checkout</p> <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><FaHome/> My Account</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><MdLocationOn/>Support</p>
                </div>
                </div>

                <div className='flex flex-col justify-center'>
                    
                      <form className='flex flex-col'>
                      <input type="text" className='bg-transparent border px-4 py-2 text-sm' placeholder='Email' required/>
                        <button onClick={submitHandler} type='submit' className='text-sm border text-white border-t-0 hover:bg-gray-900 active:text-black bg-white'>Subscribe</button>
                      </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer

