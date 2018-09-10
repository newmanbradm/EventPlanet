const supplyReducer = (state = {currentSupply: {}}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_SUPPLY':
            return {
                ...state,
                currentSupply: action.payload
            }
        default:
            return state
    }
}

export default supplyReducer