import React from 'react';
import cartpng from "../assets/cart png.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const userInfo = useSelector((state) => state.bazar.userInfo);

    console.log(userInfo)
    return (
        <div className='w-full h-20 bg-white border-b-[3px] border-b-red-800 sticky top-0 z-10'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <div>
                    <Link to="/">
                        <h1 className="text-2xl font-bold text-black">Ghost Store</h1>
                    </Link>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className='hidden sm:flex items-center gap-8'>
                        <li className='text-black text-base font-bold hover:text-orange-600 decoration-[1px] cursor-pointer duration-600'>Home</li>
                        <li className='text-black text-base font-bold hover:text-orange-600 decoration-[1px] cursor-pointer transition-duration-600'>Pages</li>
                        <li className='text-black text-base font-bold hover:text-orange-600 decoration-[1px] cursor-pointer transition-duration-600'>Shop</li>
                        <li className='text-black text-base font-bold hover:text-orange-600 decoration-[1px] cursor-pointer transition-duration-600'>Element</li>
                        <li className='text-black text-base font-bold hover:text-orange-600 decoration-[1px] cursor-pointer transition-duration-600'>Blog</li>
                    </ul>
                    <Link to="/cart">
                        <div className='relative'>
                            <img src={cartpng} className='w-10' alt="" />
                            <span className='absolute w-6 top-2.5 left-3 text-xs flex items-center justify-center font-semibold'>{productData.length}</span>
                        </div>
                    </Link>
                    <Link to="/login">
                    <img className='w-8 h-8 rounded-full' src={
                        userInfo ? userInfo.photo : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    } alt="userLogo" />
                    </Link>
                    {
                        userInfo && <p>Hello <b>{userInfo.name}</b></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
