// El AuthProvider usa el AuthContext para que se pueda proveer toda la información
// a la aplicación

import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

// const initialState = {
//     logged: false,
// }

const init = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user, // if user exists,
        user: user,
    }
}


// Seteas un valor inicial
export const AuthProvider = ({children}) => {

    // const [authState, authDispatch] = useReducer( authReducer, initialState)

    // init es la función de inicialización
    // const [authState, dispatch] = useReducer( authReducer, initialState, init)
    const [authState, dispatch] = useReducer( authReducer, {} , init)

    const login = async (name = "") => {

        const user = {
            id: 'ABC',
            name,
        }

        const action = {
            type: types.login,
            payload: user,
        }

        localStorage.setItem("user", JSON.stringify(user))

        dispatch(action)
    }

    const logout = async () => {

        const action = {
            type: types.logout,
        }

        localStorage.removeItem("user")

        dispatch(action)

    }

  return (
    <AuthContext.Provider value={{
        ...authState, // Podría hacer esto si quisiera
        // authState,

        // Methods
        login,
        logout,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
