const user = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    email: action.email
                }
            ]
        case 'LOGOUT':
            return [
                ...state,
                {
                    id: null,
                    name: null, 
                    email: null
                }
            ]
        default:
            return state
    }
}

export default user