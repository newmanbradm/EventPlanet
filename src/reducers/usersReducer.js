const usersReducer = (state = { allUsers: [], user: null }, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                allUsers: action.payload,
                user: action.payload[0]
            }
        default:
            return state
    }
}

export default usersReducer