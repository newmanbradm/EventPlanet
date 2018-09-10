const guestReducer = (state = {currentGuest: {}}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_GUEST':
            return {
                ...state,
                currentGuest: action.payload
            }
        default:
            return state
    }
}

export default guestReducer