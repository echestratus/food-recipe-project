import { getProfileAction } from '@/configs/redux/actions/getProfileAction'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    // const [isLogin, setIsLogin] = useState(false)
    const {login: isLogin} = useSelector((state) => state.getProfile)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getProfileAction())
    }, [])
    
    const handleLogout = () => {
      Cookies.remove('token')
      Cookies.remove('refreshToken')
      router.reload()
    }

  return (
    <nav className='
    max-lg:flex max-lg:w-[95%] max-lg:max-w-[1024px] max-lg:bg-transparent max-lg:justify-between max-lg:items-center max-lg:py-7
    lg:flex lg:min-w-[1024px] lg:max-w-[1536px] lg:h-auto lg:bg-transparent lg:justify-between lg:items-center lg:py-7
    2xl:flex 2xl:w-[1720px] 2xl:h-auto 2xl:bg-transparent 2xl:justify-between 2xl:items-center 2xl:py-7
    '>
      <ul className='
      max-lg:flex max-lg:items-center max-lg:gap-6 max-lg:font-air max-lg:text-[14px] max-lg:font-medium max-lg:text-[#2E266F]
      lg:flex lg:items-center lg:gap-20 lg:font-air lg:text-[18px] lg:font-medium lg:text-[#2E266F]
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
      {isLogin === false ? (
      <div className='
      max-lg:flex max-lg:items-center max-lg:gap-2
      lg:flex lg:items-center lg:gap-3
      2xl:flex 2xl:items-center 2xl:gap-3
      '>
        <img id='user-icon' src="/user-icon.png" alt="user-icon" className='
        max-lg:w-[36px] max-lg:h-[36px]
        lg:w-[52px] lg:h-[52px]
        2xl:w-[52px] 2xl:h-[52px]
        ' />
        <label htmlFor="user-icon" className='
        max-lg:font-air max-lg:font-normal max-lg:text-[14px] max-lg:text-[#2E266F]
        lg:font-air lg:font-normal lg:text-[16px] lg:text-[#FFFFFF]
        2xl:font-air 2xl:font-normal 2xl:text-[16px] 2xl:text-[#FFFFFF]
        '><Link href="/auth/login" className={`${pathname !== '/' && '2xl:text-[#2E266F]'}`}>Login</Link></label>
      </div>
      ) : (
        <div className='
      max-lg:flex max-lg:items-center max-lg:gap-2
      lg:flex lg:items-center lg:gap-3
      2xl:flex 2xl:items-center 2xl:gap-3
      '>
        <img id='user-icon' src="/user-icon.png" alt="user-icon" className='
        max-lg:w-[36px] max-lg:h-[36px]
        lg:w-[52px] lg:h-[52px]
        2xl:w-[52px] 2xl:h-[52px]
        ' />
        <label htmlFor="user-icon" className='
        max-lg:font-air max-lg:font-normal max-lg:text-[14px] max-lg:text-[#2E266F] hover:cursor-pointer
        lg:font-air lg:font-normal lg:text-[16px] lg:text-[#FFFFFF]
        2xl:font-air 2xl:font-normal 2xl:text-[16px] 2xl:text-[#FFFFFF]
        ' onClick={handleLogout}>Logout</label>
      </div>
      )}
    </nav>
  )
}

export default Navbar