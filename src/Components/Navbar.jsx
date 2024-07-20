import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import SignGetter from './SignGetter';


function Navbar({status,setID}) {
    const [showSignUp,setShowSignup] = useState(false);
    const [showLogIn,setShowLogin] = useState(false);


  
    return (
        <>
            <nav className='text-white flex justify-between  items-center p-4 pb-0 bg-[#0000006e] sticky z-50' >
                <div className="logo flex">
                    <img src={Logo} className='w-10 pt-1' alt="logoPNG" />
                    <span className='text-red-600 font-bold text-5xl tracking-widest'> T</span><span className='text-2xl underline text-green-300'>odo</span>
                </div>
                <div className='flex'>
                <li 
                onClick={()=>setShowSignup(!showSignUp)}
                className='list-none font-bold text-green-500 text-xl px-4 py-2 relative after:absolute after:h-[2px] after:bg-green-600 after:w-0 after:left-0 after:bottom-0  hover:after:w-full after:transition-all cursor-pointer hover:text-red-500'
                >
                    Sign UP
                </li>

                
                <li 
                onClick={()=>setShowLogin(!showLogIn)}
                className='list-none font-bold text-green-500 text-xl px-4 py-2 relative after:absolute after:h-[2px] after:bg-green-600 after:w-0 after:left-0 after:bottom-0  hover:after:w-full after:transition-all cursor-pointer hover:text-red-500'
                >
                    Log In
                </li>
                </div>
                
            </nav>
            <hr />
            {showSignUp && <SignGetter title="Sign Up" setShow={setShowSignup} set_ID={setID}/>}
            {showLogIn && <SignGetter title="Log In" setShow={setShowLogin} set_ID={setID}/>}

        </>

    )
}

export default Navbar
