import React from 'react'

const HeaderMenu = () => {
    return (
        <ul className="flex items-center h-20">
            <li className="mr-4 group h-full flex hover:cursor-pointer">
                <a href='#' className="group-hover:text-orange-hover flex h-full items-center">Gaming / IGO</a>
            </li>
            <li className="mr-4 group h-full flex hover:cursor-pointer">
                <a href='#' className="group-hover:text-orange-hover flex h-full items-center">Explore</a>
            </li>
            <li className="mr-4 group h-full flex items-center hover:cursor-pointer relative">
                <a href='#' className="group-hover:text-orange-hover flex h-full items-center overflow-hidden">Stats</a>
                <i className='bx bxs-down-arrow text-gray-500 text-[10px] ml-1'></i>
                <div className="absolute hidden group-hover:block top-[100%] left-0 bg-white rounded-b-md overflow-hidden">
                    <ul className="w-[200px]">
                        <li className="h-12">
                            <a href='#' className='h-full flex items-center p-4 hover:bg-slate-100 hover:text-orange-hover text-sm'>
                                <i className='bx bxs-cube-alt text-yellow-500 mr-4'></i>
                                <span>Rankings</span>
                            </a>
                        </li>
                        <li className="h-12"> 
                            <a href='#' className='h-full flex items-center p-4 hover:bg-slate-100 hover:text-orange-hover text-sm'>
                                <i className='bx bxs-cube-alt text-yellow-500 mr-4'></i>
                                <span>Activities</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="mr-4 group h-full flex hover:cursor-pointer">
                <a href='#' className="group-hover:text-orange-hover flex h-full items-center">Mystery Boxes</a>
            </li>
            <li className="mr-4 group h-full flex hover:cursor-pointer">
                <a href='#' className="group-hover:text-orange-hover flex h-full items-center">Create</a>
            </li>
        </ul>
    )
}

export default HeaderMenu