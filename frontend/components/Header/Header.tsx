import React, { createContext, useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar';
import Profile from './Profile';
const Header = () => {

    const [isHidden, setIsHidden] = useState(false);

    const getBooleen = (isGeted: boolean) => {
        setIsHidden(isGeted);
        
    }

    return (
       <div>
               <nav id="header" className="bg-gray-900 fixed w-full z-10 top-0 shadow">


                    <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">

                        <Logo/>
                    
                        <Profile getIsHidden={(isGeted: boolean) => getBooleen(isGeted)} />

                        {isHidden ? <Navbar hidden=""/> : '' }
                        {!isHidden ? <Navbar hidden="hidden"/> : '' }
                         
                    </div>
                </nav>
       </div>
    )
}

export default Header;