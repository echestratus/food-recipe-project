import { getProfileAction } from '@/configs/redux/actions/getProfileAction'
import axios from 'axios'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const pathname = usePathname()
    // const [isLogin, setIsLogin] = useState(false)
    const {profile, loading, login: isLogin} = useSelector((state) => state.getProfile)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getProfileAction())
    }, [])
  return (
    <nav className='
    max-sm:flex max-sm:w-[95%] max-sm:max-w-[640px] max-sm:bg-transparent max-sm:justify-between max-sm:items-center max-sm:py-7
    2xl:flex 2xl:w-[1720px] 2xl:h-auto 2xl:bg-transparent 2xl:justify-between 2xl:items-center 2xl:py-7
    '>
      <ul className='
      max-sm:flex max-sm:items-center max-sm:gap-6 max-sm:font-air max-sm:text-[14px] max-sm:font-medium max-sm:text-[#2E266F]
      2xl:flex 2xl:items-center 2xl:gap-20 2xl:font-air 2xl:text-[18px] 2xl:font-medium 2xl:text-[#2E266F]
      '>
        <li>
          <Link className={`${pathname === '/' ? 'border-b-2 border-[#2E266F]' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          {isLogin === true ? (
          <Link
            className={`${pathname === '/addrecipe' ? 'border-b-2 border-[#2E266F]' : ''}`}
            href="/addrecipe"
          >
            Add Recipe
          </Link>
          ) : (
            <Link
            className={`${pathname === '/addrecipe' ? 'border-b-2 border-[#2E266F]' : ''}`}
            href="/auth/login"
          >
            Add Recipe
          </Link>
          )}
        </li>
        <li>
          {isLogin === true ? (
          <Link
            className={`${pathname === '/profile' ? 'border-b-2 border-[#2E266F]' : ''}`}
            href="/profile"
          >
            Profile
          </Link>
          ) : (
            <Link
            className={`${pathname === '/profile' ? 'border-b-2 border-[#2E266F]' : ''}`}
            href="/auth/login"
          >
            Profile
          </Link>
          )}
        </li>
      </ul>
      {isLogin === false && (
      <div className='
      max-sm:flex max-sm:items-center max-sm:gap-2
      2xl:flex 2xl:items-center 2xl:gap-3
      '>
        <img id='user-icon' src="/user-icon.png" alt="user-icon" className='
        max-sm:w-[36px] max-sm:h-[36px]
        2xl:w-[52px] 2xl:h-[52px]
        ' />
        <label htmlFor="user-icon" className='
        max-sm:font-air max-sm:font-normal max-sm:text-[14px] max-sm:text-[#2E266F]
        2xl:font-air 2xl:font-normal 2xl:text-[16px] 2xl:text-[#FFFFFF]
        '><Link href="/auth/login" className={`${pathname !== '/' && '2xl:text-[#2E266F]'}`}>Login</Link></label>
      </div>
      )}
    </nav>
  )
}

export default Navbar