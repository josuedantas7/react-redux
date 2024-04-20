const initialState = {
    currentUser : null,
}

const userReducer = (state = initialState,action) => {
    switch(action.type){
        case 'user/login':
            return {
                ...state,
                currentUser: { name: 'Josué', age:25 }
            }
        case 'user/logout':
            return {
                ...state,
                currentUser: null
            }
        default:
            return state;
    }
}

export default userReducer;