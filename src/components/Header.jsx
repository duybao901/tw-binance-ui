import React from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderSearch from './HeaderSearch'
import Logo from './Logo'

const Header = () => {
    return (
        <div className="container flex h-20 bg-white items-center px-4 justify-between">
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


            <div className="justify-self-end">
                login
            </div>
        </div>
    )
}

export default Header