const initialState = {
    user: {},
    token: null
}
const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                token: 1
            }
        default:
            return state
    }
}


export default auth