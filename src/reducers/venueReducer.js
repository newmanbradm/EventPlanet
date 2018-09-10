const venueReducer = (state = {currentVenue: {}}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_VENUE':
            return {
                ...state,
                currentVenue: action.payload
            }
        default:
            return state
    }
}

export default venueReducer