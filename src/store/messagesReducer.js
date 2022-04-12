const initialState = {
    error: false,
    errorMessage: '',
    success: false,
    successMessage: ''
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ERROR':
            return {...state, error: true, errorMessage: action.payload.errorMessage}
        case 'HIDE_ERROR':
            return {...state, error: false}
        case 'SHOW_SUCCESS':
            return {...state, success: true, successMessage: action.payload.successMessage}
        case 'HIDE_SUCCESS':
            return {...state, success: false}
        default:
            return state
    }
}