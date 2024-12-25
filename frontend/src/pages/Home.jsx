import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        
            <div className="container h-screen w-full"> 
                <div className="h-full w-full content-center text-center">
                    <Link to='/login'
                        className="bg-red-600 px-8 py-4 rounded-md text-2xl"
                    >Continue</Link>
                </div>
            </div>
    ) 
}

export default Home