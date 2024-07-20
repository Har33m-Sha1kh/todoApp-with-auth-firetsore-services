import React, { useRef, useState } from 'react'
import { SignUp, Login } from '../Firebase/auth';

function SignGetter({ title, setShow, set_ID }) {
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    const handleClick = async () => {
        let id;
        if (title === "Sign Up") {
            id = await SignUp(email, password);
        } else {
            id = await Login(email, password);
        }
        set_ID(id);
        setShow(false);
    };


    return (
        <>
            <div style={{ backgroundImage: "url(src/assets/backgroungImg.jpg)" }}
                className='flex justify-center items-center absolute w-full h-full top-0 left-0 z-40 bg-cover bg-left bg-no-repeat '>

                <div className='text-white flex flex-col items-center bg-[#0c0b0bd5] w-96 py-8' >
                    <h1 className='text-2xl text-center font-semibold my-4 underline '>{title}</h1>
                    <div>
                        <label className='italic text-xl' htmlFor="email">Email: </label>

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='rounded-2xl bg-transparent outline-none border-green-600 border-2 px-2 m-2'
                            id='email'
                            type="text"
                            required />

                    </div>
                    <br />
                    <div>
                        <label className='italic text-xl' htmlFor="password">Password: </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='rounded-2xl bg-transparent outline-none border-green-600 border-2 px-2 m-2'
                            id='password'
                            type="password"
                            required />
                    </div>
                    <br />
                    <button
                        onClick={handleClick}
                        className='bg-green-600 p-1 px-3 font-semibold rounded-2xl'>{title}</button>


                </div>

            </div>
        </>
    )
}

export default SignGetter
