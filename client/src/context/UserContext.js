import { createContext, useState } from "react";


export const UserContext = createContext(null)


export const UserProvider = ({children}) => {
    const [user,setUser] = useState(false)

    return(
        <UserContext.Provider value={{user,setUser}} >
            {children}
        </UserContext.Provider>
    )
}