const postReducer = (state = {currentPost: {}}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_POST':
            return {
                ...state,
                currentPost: action.payload
            }
        default:
            return state
    }
}

export default postReducer