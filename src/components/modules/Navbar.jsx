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
    lg:flex lg:min-w-[1024px] lg:max-w-[1720px] lg:w-[90%] lg:h-auto lg:bg-transparent lg:justify-between lg:items-center lg:py-7
    desktop:flex desktop:w-[1720px] desktop:h-auto desktop:bg-transparent desktop:justify-between desktop:items-center desktop:py-7
    '>
      <ul className='
      max-lg:flex max-lg:items-center max-lg:gap-6 max-lg:font-air max-lg:text-[14px] max-lg:font-medium max-lg:text-[#2E266F]
      lg:flex lg:items-center lg:gap-20 lg:font-air lg:text-[18px] lg:font-medium lg:text-[#2E266F]
      desktop:flex desktop:items-center desktop:gap-20 desktop:font-air desktop:text-[18px] desktop:font-medium desktop:text-[#2E266F]
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
      desktop:flex desktop:items-center desktop:gap-3
      '>
        <img id='user-icon' src="/user-icon.png" alt="user-icon" className='
        max-lg:w-[36px] max-lg:h-[36px]
        lg:w-[52px] lg:h-[52px]
        desktop:w-[52px] desktop:h-[52px]
        ' />
        <label htmlFor="user-icon" className='
        max-lg:font-air max-lg:font-normal max-lg:text-[14px] max-lg:text-[#2E266F]
        lg:font-air lg:font-normal lg:text-[16px] lg:text-[#FFFFFF]
        desktop:font-air desktop:font-normal desktop:text-[16px] desktop:text-[#FFFFFF]
        '><Link href="/auth/login" className={`${pathname !== '/' && 'text-[#2E266F]'}`}>Login</Link></label>
      </div>
      ) : (
        <div className='
      max-lg:flex max-lg:items-center max-lg:gap-2
      lg:flex lg:items-center lg:gap-3
      desktop:flex desktop:items-center desktop:gap-3
      '>
        <img id='user-icon' src="/user-icon.png" alt="user-icon" className='
        max-lg:w-[36px] max-lg:h-[36px]
        lg:w-[52px] lg:h-[52px]
        desktop:w-[52px] desktop:h-[52px]
        ' />
        <label htmlFor="user-icon" className='
        max-lg:font-air max-lg:font-normal max-lg:text-[14px] max-lg:text-[#FFFFFF] hover:cursor-pointer
        lg:font-air lg:font-normal lg:text-[16px] lg:text-[#FFFFFF]
        desktop:font-air desktop:font-normal desktop:text-[16px] desktop:text-[#FFFFFF]
        ' onClick={handleLogout}><span className={`${pathname !== '/' && 'text-[#2E266F]'}`}>Logout</span></label>
      </div>
      )}
    </nav>
  )
}

export default Navbar