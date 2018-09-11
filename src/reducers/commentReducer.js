const commentReducer = (state = {currentComment: {}}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_SUPPLY':
            return {
                ...state,
                currentComment: action.payload
            }
        default:
            return state
    }
}

export default commentReducer