import React from 'react'
import HeaderSearch from './HeaderSearch'
import Logo from './Logo'

const Header = () => {
    return (
        <div className="container flex h-20 bg-white justify-between items-center p-4">
            <div className="flex items-center justify-between w-{684}">
                <i className="bx bxs-home text-2xl"></i>
                <Logo></Logo>
                <HeaderSearch></HeaderSearch>
            </div>

            <div>
                Menu
            </div>

            <div>
                login
            </div>
        </div>
    )
}

export default Header