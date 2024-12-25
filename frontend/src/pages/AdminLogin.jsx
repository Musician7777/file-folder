import React,{useState} from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function AdminLogin(){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [adminData, setAdminData] = useState([])

    const submitHandler=(event)=>{
        event.preventDefault()
        setAdminData({
            email:email,
            password:password
        })
        console.log(adminData)
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
                                <p>What's your email</p>
                                <input
                                value={email}
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                required type="Email" placeholder="Enter email" className="outline-none p-2 rounded-md bg-gray-600 h-max w-[90%] placeholder-white mb-4"/>
                                <p>Enter Password</p>
                                <input
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                required type="Password" placeholder="Password" className="outline-none p-2 rounded-md bg-gray-600 h-max w-[90%] placeholder-white mb-4"/>
                                <button className="outline-none p-2 rounded-md bg-red-600 h-max w-[90%] mb-4">Login</button>
                                <p>As new admin <Link to="/signup" className="text-blue-400">Register</Link></p>  
                            </form>
                        </div>
                        <div className="w-full flex justify-center">
                            <Link to="/login" className="text-center outline-none p-2 rounded-md bg-yellow-600 h-max w-[90%] mb-4">Login as user</Link>
                        </div>
                    </div>         
                </div>
            </div> 
        </>
    )
}

export default AdminLogin