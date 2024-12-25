import React,{useState} from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function UserSignUp(){
    const [name, setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [userData, setUserData] = useState({})

    const submitHandler=(event)=>{
        event.preventDefault()

        setUserData({
            name:name,
            email:email,
            password:password
        })
        console.log(userData)
        setName('')
        setEmail('')
        setPassword('')
    }
    return(
        <> 
            <div className="container h-screen w-full flex justify-center items-center text-white">
                <div className="md:w-full md:h-full w-full h-full lg:w-[22rem] lg:h-[90%] rounded-md lg:border-2 border-gray-600">
                    <div className="h-full w-full flex flex-col justify-between">
                        <div className="h-full w-full">
                            <Logo />
                            <form onSubmit={submitHandler} action="" className="pl-[10%] flex flex-col justify-center w-full mt-10 text-sm">
                                <p>Enter your name</p>
                                <input
                                value={name}
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }}
                                required type="text" placeholder="Alex" className="outline-none p-2 rounded-md bg-gray-600 h-max w-[90%] mb-4"/>
                                <p>What's your email</p>
                                <input 
                                value={email}
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                required type="Email" placeholder="example@mail.com" className="outline-none p-2 rounded-md bg-gray-600 h-max w-[90%] mb-4"/>
                                <p>Enter Password</p>
                                <input 
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                required type="Password" placeholder="Password" className="outline-none p-2 rounded-md bg-gray-600 h-max w-[90%] mb-4"/>
                                <button className="outline-none p-2 rounded-md bg-red-600 h-max w-[90%] mb-4">SignUp</button>
                                <p>Already a user? <Link to="/login" className="text-blue-400">Login</Link></p>  
                            </form>
                        </div>
                        <div className="w-full flex justify-center">
                            <p className="text-xs text-justify p-4"> 
                            By continuing, you agree to the <b className="underline">Terms Of Service</b> and acknowledge you've read <b className="underline">Privacy Policy. Notice at collection.</b>
                            </p>
                        </div>
                    </div>         
                </div>
            </div> 
        </>
    )
}

export default UserSignUp