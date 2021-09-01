import { Component, createContext } from "react";
import Navbar from './Navbar'

interface ProfileProps {
    getIsHidden: (value: boolean) => void;
}
class Profile extends Component<ProfileProps> {
    
    state = {
        isUserMenu: false,
        isNavbar: false,
    }
    constructor(props: ProfileProps) {
        super(props)
    }
    
    NavbarComponent (self: any) {
        this.state.isNavbar ? this.setState({isNavbar: false}) : this.setState({isNavbar: true})
        this.props.getIsHidden(this.state.isNavbar)
    }
    userMenu () {
        return <div id="userMenu" className="bg-gray-900 rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30">
                    <ul className="list-reset">
            <li><a href="#" className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">My account</a></li>
            <li><a href="#" className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">Notifications</a></li>
            <li>
                <hr className="border-t mx-2 border-gray-400"/>
            </li>
            <li><a href="#" className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">Logout</a></li>
        </ul>
    </div>
    }
    render() {
    return (
        <div className="w-1/2 pr-0">
            <div className="flex relative inline-block float-right">

                <div className="relative text-sm text-gray-100">
                    <button id="userButton" onClick={() => this.state.isUserMenu ? this.setState({isUserMenu: false}) : this.setState({isUserMenu: true})} className="flex items-center focus:outline-none mr-3">
                    <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of User"/> <span className="hidden md:inline-block text-gray-100">Hi, User</span>
                    <svg className="pl-2 h-2 fill-current text-gray-100" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>
                </button>
                    { this.state.isUserMenu ? this.userMenu() : null}
                </div>


                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" onClick={() => this.NavbarComponent(this)} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                </div>
        </div>
        
    </div>
    )
}
}

export default Profile;