import API from '../../api/api';


export const login = (email , pass , token) => {
    return(dispatch) => {
        API.login(email , pass , res => {
            console.log("result" , res.data)
            dispatch({
                type : 'LOGIN',
                payload : { email , token : res.data.token}
            })
        })
    }
}

export const register = (email , pass ) => {
    return {
        type : 'REGISTER',
        payload : { email , pass }
    }
}