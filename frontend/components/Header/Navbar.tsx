import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import React, { useContext, useState } from 'react';
import ActiveLink from './ActiveLinke';

interface Props {
    hidden: string;
}
const Navbar = (props: Props) => {
    const [style, setStyle] = useState(props.hidden)
    const router = useRouter()
    return (
        <div className={"w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-gray-900 z-20 "+style} id="nav-content">
        <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
            
            <ActiveLink href="/">
            <li className="mr-6 my-2 md:my-0">
                    <i className="fas fa-home fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Home</span>
            </li>
            </ActiveLink>

            <ActiveLink href="/Tasks/Index">
            <li className="mr-6 my-2 md:my-0">
                    <i className="fas fa-tasks fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Tasks</span>
            </li>
            </ActiveLink>

            <ActiveLink href="/Messages/Index">
            <li className="mr-6 my-2 md:my-0">
                    <i className="fa fa-envelope fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Messages</span>
            </li>
            </ActiveLink>

            <ActiveLink href="/Analytics/Index">
            <li className="mr-6 my-2 md:my-0">
               
                    <i className="fas fa-chart-area fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Analytics</span>
                
            </li>
            </ActiveLink>

            <ActiveLink href="/Payments/Index">
            <li className="mr-6 my-2 md:my-0">
                
                    <i className="fa fa-wallet fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Payments</span>
               
            </li>
            </ActiveLink>
        </ul>

        <div className="relative pull-right pl-4 pr-4 md:pr-0">
            <input type="search" placeholder="Search" className="w-full bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal"/>
            <div className="absolute search-icon" style={{top: "0.375rem",left: "1.75rem"}}>
                <svg className="fill-current pointer-events-none text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
            </div>
        </div>

    </div>
    )
}
export default Navbar;