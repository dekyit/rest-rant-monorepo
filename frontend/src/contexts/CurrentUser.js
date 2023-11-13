import { createContext, useEffect, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
    const getLoggedInUser = async () => {
        let response = await fetch (`${process.env.REACT_APP_SERVER_URL}authentication/profile`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        let user = await response.json()
        setCurrentUser(user)
    }
    useEffect(() => {

        getLoggedInUser()
})

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider