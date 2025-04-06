

// 1. Create a new context
import { useState, createContext } from 'react'

export const AuthContext = createContext()

// 2. Create a Provider para compartir el estado del usuario
export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}