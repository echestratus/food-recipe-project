import { IconButton } from '@material-tailwind/react'
import React, { useState } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
const Pagination = ({pagination, setPagination}) => {


    const next = () => {
        if (pagination.currentPage === pagination.totalPage) return;
        setPagination({
            ...pagination,
            currentPage: pagination.currentPage + 1
        })
        console.log(pagination.currentPage);
    }

    const prev = () => {
        if (pagination.currentPage === 1) return;
        setPagination({
            ...pagination,
            currentPage: pagination.currentPage - 1
        })
        console.log(pagination.currentPage);
    }

  return (
    <div className='flex items-center gap-8 font-inter'>
        {pagination.currentPage === 1 ? (
        <button className='text-slate-400 w-8 h-8 flex items-center justify-center border border-slate-400 rounded-md'>
            <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />
        </button>
        ) : (
        <button onClick={prev} className='text-[#2E266F] w-8 h-8 flex items-center justify-center border border-[#2E266F] rounded-md'>
            <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />
        </button>
        )}
        <p className='text-[#2E266F] text-[20px]'>Page <span className='font-bold'>{pagination.currentPage}</span> of <span className='font-bold'>{pagination.totalPage}</span></p>
        {pagination.currentPage === pagination.totalPage ? (
        <button className='text-slate-400 w-8 h-8 flex items-center justify-center border border-slate-400 rounded-md'>
            <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
        </button>
        ) : (
        <button onClick={next} className='text-[#2E266F] w-8 h-8 flex items-center justify-center border border-[#2E266F] rounded-md'>
            <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
        </button>
        )}
    </div>
  )
}

export default Pagination