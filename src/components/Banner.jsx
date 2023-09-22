import React, { useState } from 'react'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"

function Banner() {

    const data = [
        "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
        "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
        "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
        "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (next) => next + 1)
    }

    


    return (
        <div className='w-full h-auto overflow-hidden'>
            <div className='w-screen h-[650px] relative'>
                <div style={{transform:`translateX(-${currentSlide *100}vw)` , transition:`0.6s ease-in-out`}} className='w-[400vw] h-full flex'>
                    <img className='w-screen h-full object-cover ' src={data[1]} loading='eager' alt="" />
                    <img className='w-screen h-full object-cover ' src={data[3]} loading='eager' alt="" />
                    <img className='w-screen h-full object-cover ' src={data[0]} loading='eager' alt="" />
                    <img className='w-screen h-full object-cover ' src={data[2]} loading='eager' alt="" />
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                    <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'><BsArrowLeft /></div>
                    <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'><BsArrowRight /></div>
                </div>
            </div>
        </div>

    )
}

export default Banner