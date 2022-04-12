const initialState = {
    loggined: false,
    users: [],
    activeUser: {},
    loading: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTO_LOGIN':
            return {...state, loggined: action.payload.loggined, activeUser: action.payload.activeUser}
        case 'REGISTER_USER':
            return {...state, users: [...state.users, {email: action.payload.email, password: action.payload.password}]}
        case 'LOGIN_USER':
            return {...state, loggined: true, activeUser: {email: action.payload.email, password: action.payload.password}}
        case 'CHANGE_PASSWORD':
            return {...state, users: [...action.payload.users], activeUser: {...state.activeUser, password: action.payload.password}}
        case 'LOGOUT_USER':
            return {...state, loggined: false, activeUser: {}}
        case 'LOADING_USERS':
            return {...state, users: [...action.payload.newUsers]}
        case 'SHOW_LOADER':
            return {...state, loading: true}
        case 'HIDE_LOADER':
            return {...state, loading: false}
        default:
            return state
    }
}