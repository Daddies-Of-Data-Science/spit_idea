import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import {AiOutlineClose , AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav]=useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
     <h1 className=' w-full text-3xl font-bold text-black ml-6'>DODS.</h1>
     <ul className='hidden gap-10 font-medium text-black ml-16 md:flex'>
        <li className="p-4 cursor-pointer hover:text-green-700">Dashboard</li>
        <li className="p-4 cursor-pointer hover:text-green-700">Notifications</li>
        <li className="p-4 cursor-pointer hover:text-green-700"><Link to='/network'>NetworkHub</Link></li>
        <li className="p-4 cursor-pointer hover:text-green-700">Alumni</li>
        <li className="p-4 cursor-pointer hover:text-green-700">Exam</li>
        <li className="p-4 cursor-pointer hover:text-green-700"><Link to='/stream'>Learn</Link></li>
        <li className="p-4 cursor-pointer hover:text-green-700">Achievements</li>
     </ul>
     <div onClick={handleNav} className=' block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
     <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
     <h1 className=' w-full text-3xl font-bold text-[#00df9a] m-4 ml-7'>REACT.</h1>
        <ul className='uppercase p-4'>
        <li className="p-4 border-b border-gray-500">Company</li>
        <li className="p-4 border-b border-gray-500">Home</li>
        <li className="p-4 border-b border-gray-500">Resources</li>
        <li className="p-4 border-b border-gray-500">About</li>
        <li className="p-4">Contact</li>
        </ul>
     </div>
    </div>
    </div>
  )
}

export default Navbar