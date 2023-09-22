import React from 'react'
import ProductCard from './ProductCard'

const Products = ({products}) => {
    
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center text-center'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping Everyday</h1>
        <span className='w-20 h-[3px] bg-black my-2'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente consectetur deserunt itaque dolor quaerat nemo. Quisquam ea cumque expedita aut!</p>
            </div>
            <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
                {products.map((item)=>(
                    <ProductCard key={item.id} product={item}/>
                ))}
            </div>
        </div>
    )
}

export default Products