import React, { memo, useState } from 'react'
import { createContext } from 'react'

export const userDataContext = createContext()  //to send the data everywhere

function UserContext({children}) {
    //const sampleData = 'hello'  //This is an data we have to send everywhere
    const [user, setUser] = useState({
        email:'',
        name:''
    });
    return (
        <>
            <userDataContext.Provider value={[user,setUser]}> 
                {/* used .Provider method to provide the data through all pages */}
                {/* Pass the data as value on the Provider in this case sampleData was passed*/}
                {/* Then use the useContext to use the data on any page (see login page console) */}
                {children}
            </userDataContext.Provider>
        </>
    )
}

export default UserContext
