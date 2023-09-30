import { types } from "../types/types"

// const initialState = {
//     logged: false,
//     // user: 'Alejandra'
// }


// ! No usar el local storage aquí, ni llamar funciones externas aquí
// ! Ni usar console.log aquí en realidad

// export const AuthReducer = (state = initialState, action) => {
    export const authReducer = (state = {}, action) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }

        case types.logout:
            return {
                // ...state,
                logged: false,
                // user: null,
            }

        default:
            return state
    }
}
