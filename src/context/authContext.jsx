import { createContext } from "react";

const authContext = React.createContext([])

const AuthContextProvider = ({ children }) => {
    console.log(children)
    return (
        <authContext.Provider>
            {children}
        </authContext.Provider>)
}

export { authContext, AuthContextProvider }