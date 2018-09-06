const eventsReducer = (state = { allEvents: [] }, action) => {
    switch (action.type) {
        case 'SET_EVENTS':
            return {
                ...state,
                allEvents: action.payload
            }
        default:
            return state
    }
}

export default eventsReducer