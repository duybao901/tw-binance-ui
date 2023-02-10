import React from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderSearch from './HeaderSearch'
import Logo from './Logo'


const Header = () => {
    return (
        <div className="flex h-20 bg-white items-center px-4 justify-between">
            <div className="flex items-center h-full">
                <div className="flex items-center" style={{ width: "684px" }}>
                    <i className="bx bxs-home text-2xl w-6"></i>
                    <a href="#" className="ml-6 block">
                        <Logo></Logo>
                    </a>
                    <div className="ml-8 mr-6">
                        <HeaderSearch></HeaderSearch>
                    </div>
                </div>
                <HeaderMenu />
            </div>

            <div className="justify-self-end flex ml-auto">
                <ul className="flex items-center">
                    <li className="mr-4">
                        <a href='#' className="block py-[6px] px-[12px] text-[15px] hover:text-orange-hover">
                            Login
                        </a>
                    </li>
                    <li className="mr-4">
                        <a href='#' className="block py-[6px] px-[12px] rounded-md bg-yellow-main text-[15px] hover:brightness-105">Register</a>
                    </li>
                </ul> 
                <ul className="flex items-center">
                    <li className="mr-2 flex items-center justify-center">
                        <a href='#' className="hover:text-orange-hover block">
                            <i className='bx bx-world text-[24px] mt-[2px]'></i>
                        </a>
                    </li>
                    <li className='mr-2 w-[1px] bg-slate-300 h-[35%]'></li>
                    <li className="mr-2 flex items-center justify-center">
                        <a href='#' className="hover:text-orange-hover block text-[15px]">USD</a>
                    </li>
                    <li className="mr-2 w-[1px] bg-slate-300 h-[35%]"></li>
                    <li className='flex items-center justify-center'>
                        <a href='#' className="hover:text-orange-hover block mt-[2px]">
                            <i className='bx bxs-moon' ></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header