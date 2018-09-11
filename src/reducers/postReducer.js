const postReducer = (state = {currentPost: {}}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_SUPPLY':
            return {
                ...state,
                currentPost: action.payload
            }
        default:
            return state
    }
}

export default postReducer