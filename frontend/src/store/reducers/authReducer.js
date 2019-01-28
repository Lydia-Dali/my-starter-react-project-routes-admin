const defaultStates = {
    user: {
        userData: {
            user: '',
            isAdmin: false,
            id: 0,
            token: '',
            isConnected: false
        }
    }
}
export default (state = defaultStates, action) => {
    switch (action.type) {
        case 'AUTH_USER':
            return {
                user: action.payload
            };
        case 'LOGOUT_USER':
            return defaultStates
        default:
            return state
    }
}

