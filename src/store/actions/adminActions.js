import API from '../../api/api';

export const getUsers = (token) => {
    API.getUsers(token , res => {
        dispatch({
            type : 'GOT_USERS', 
            payload : res.data
        })
    })

}
