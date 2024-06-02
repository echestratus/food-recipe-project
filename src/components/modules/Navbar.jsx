import axios from 'axios'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}users/profile`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res)=>{
        console.log(res);
        setIsLogin(true)
      })
      .catch((err)=>{
        console.log(err.response);
        setIsLogin(false)
      })
    }, [])
  return (
    <nav className='flex w-[1720px] h-auto bg-transparent justify-between items-center py-7'>
      <ul className='flex items-center gap-20 font-air text-[18px] font-medium text-[#2E266F]'>
        <li>
          <Link className={`${pathname === '/' ? 'border-b-2 border-[#2E266F]' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === '/addrecipe' ? 'border-b-2 border-[#2E266F]' : ''}`}
            href="/addrecipe"
          >
            Add Recipe
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === '/profile' ? 'border-b-2 border-[#2E266F]' : ''}`}
            href="/profile"
          >
            Profile
          </Link>
        </li>
      </ul>
      {isLogin === false && (
      <div className='flex items-center gap-3'>
        <img id='user-icon' src="/user-icon.png" alt="user-icon" className='w-[52px] h-[52px]' />
        <label htmlFor="user-icon" className='font-air font-normal text-[16px] text-[#FFFFFF]'><Link href="/auth/login" className={`${pathname !== '/' && 'text-[#2E266F]'}`}>Login</Link></label>
      </div>
      )}
    </nav>
  )
}

export default Navbar