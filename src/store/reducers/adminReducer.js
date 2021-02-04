const initialState = {
    users: [],
    posts: []
}

const admin = (state = initialState, action) => {
    switch (action.type) {
        case 'GOT_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}
export default admin ;