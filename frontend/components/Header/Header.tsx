import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar';
import Profile from './Profile';
const Header = () => {

    return (
       <div>
               <nav id="header" className="bg-gray-900 fixed w-full z-10 top-0 shadow">


                    <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">

                        <Logo/>

                        <Profile/>

                        <Navbar/>

                    </div>
                </nav>
       </div>
    )
}

export default Header;