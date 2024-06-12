import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-gray-900 min-h-screen">
            <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 mt-4 text-white'>
                <h1 className='text-5xl font-bold text-white'>Nav Bar</h1>
                <ul className='uppercase hidden md:flex gap-8'>
                    <li className='p-5 hover:text-gray-400 cursor-pointer'>Home</li>
                    <li className='p-5 hover:text-gray-400 cursor-pointer'>About</li>
                    <li className='p-5 hover:text-gray-400 cursor-pointer'>Research</li>
                    <li className='p-5 hover:text-gray-400 cursor-pointer'>Contact</li>
                    <li className='p-5 hover:text-gray-400 cursor-pointer'>Services</li>
                </ul>
                <div className='md:hidden block' onClick={toggleNav}>
                    {!nav ? <AiOutlineMenu size={22} /> : <AiOutlineClose size={22} />}
                </div>
            </nav>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 text-white ease-in-out duration-500' : 'hidden md:block fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500'}>
                <h1 className='text-5xl font-bold text-white m-8'>Nav Bar</h1>
                <ul className='uppercase p-4'>
                    <li className='p-5 border-b border-gray-700 hover:bg-gray-700 cursor-pointer'>Home</li>
                    <li className='p-5 border-b border-gray-700 hover:bg-gray-700 cursor-pointer'>About</li>
                    <li className='p-5 border-b border-gray-700 hover:bg-gray-700 cursor-pointer'>Research</li>
                    <li className='p-5 border-b border-gray-700 hover:bg-gray-700 cursor-pointer'>Contact</li>
                    <li className='p-5 hover:bg-gray-700 cursor-pointer'>Services</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
