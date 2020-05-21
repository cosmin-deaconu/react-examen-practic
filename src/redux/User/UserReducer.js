const initialState = {
    users: []
}

function userReducer(state=initialState, action){
    console.log('asdasda', action);
    switch(action.type){
        case 'ADD_USER':
            const newState = {...state, users: [...state.users, action.paylod.users]};
            return newState;
        default:
            return state;
    }
}

export default userReducer;
