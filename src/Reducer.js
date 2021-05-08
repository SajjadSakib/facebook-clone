const initialState = {
    user:''
}

export const setUser = (state=initialState,action={}) =>{
    switch (action.type){
        case 'CHANGE_USER':
            return Object.assign({},state, {user: action.payload});
        default:
            return state ;
    }
}