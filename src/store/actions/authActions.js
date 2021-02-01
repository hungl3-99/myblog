import API from '../../api/api';


export const login = (email , pass ) => {
    return(dispatch) => {
        API.login(email , pass , res => {
            console.log("result" , res.data)
            dispatch({
                type : 'LOGIN',
                payload : { email , pass }
            })
        })
    }
    /*return {
        type : 'LOGIN',
        payload : { email , pass }
    }*/
}

export const register = (email , pass ) => {
    return {
        type : 'REGISTER',
        payload : { email , pass }
    }
}