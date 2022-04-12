export const autoLogin = ({loggined, activeUser}) => {
    return {
        type: 'AUTO_LOGIN',
        payload: {loggined, activeUser}
    }
}

export const registerUser = (data) => {
    return async (dispatch, getState) => {
        dispatch(showLoader())
        setTimeout(() => {
            dispatch({type: 'REGISTER_USER', payload: {email: data.email, password: data.password}})
            console.log("Response", {status: 200, text: 'Successfully register'})
            dispatch(hideLoader())
            dispatch(showSuccess('Successfully register'))
            localStorage.setItem('regEmail', '')
            localStorage.setItem('regPassword', '')
            localStorage.setItem('regConfirm', '')
        }, 1000)
    }
}

export const loginUser = ({email, password}) => {
    return async (dispatch, getState) => {
        dispatch(showLoader())
        const users = getState().app.users
        console.log(users)
        setTimeout(() => {
            if (!users.length) {
                dispatch(showError('User not found!'))
                dispatch(hideLoader())
                return
            }
            for (let i = 0; i <= users.length-1; i++) {
                if (users[i].email === email) {
                    if (users[i].password === password) {
                        console.log(users[i].email, email)
                        dispatch({type: 'LOGIN_USER', payload: {email, password}})
                        console.log("Response", {status: 200, text: 'Successfully login'})
                        localStorage.setItem('activeUser', JSON.stringify(getState().app.activeUser))
                        localStorage.setItem('loggined', getState().app.loggined)
                        localStorage.setItem('loginEmail', '')
                        localStorage.setItem('loginPassword', '')
                        dispatch(showSuccess('Successfully login'))
                        dispatch(hideLoader())
                        return
                    }
                    dispatch(hideLoader())
                    dispatch(showError('Incorrect password!'))
                    return
                }
            }
            dispatch(hideLoader())
            dispatch(showError('User not found!'))
        }, 1000)
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch({type: 'LOGOUT_USER'})
        localStorage.setItem('activeUser', JSON.stringify({}))
        localStorage.setItem('loggined', false)
    }
}

export const changePassword = (users, password) => {
    return async dispatch => {
        dispatch(showLoader())
        setTimeout(() => {
            dispatch({type: 'CHANGE_PASSWORD', payload: {users, password}})
            console.log("Response", {status: 200, text: 'Successfully change password'})
            dispatch(showSuccess('Successfully change password'))
            dispatch(hideLoader())
        }, 1000)
    }
}

export const loadingUsers = (usersLocal) => {
    return async dispatch => {
        dispatch(showLoader())
        setTimeout(() => {
            dispatch({type: 'LOADING_USERS', payload: {newUsers: usersLocal}})
            dispatch(hideLoader())
        }, 1000)
    }
}

export const hideError = () => {
    return {
        type: 'HIDE_ERROR'
    }
}

export const hideSuccess = () => {
    return {
        type: 'HIDE_SUCCESS'
    }
}

export const showError = (message) => {
    return dispatch => {
        dispatch({type: 'SHOW_ERROR', payload: {errorMessage: message}})
        setTimeout(() => {
            dispatch(hideError())
        }, 2000)
    }
}

export const showSuccess = (message) => {
    return dispatch => {
        dispatch({type: 'SHOW_SUCCESS', payload: {successMessage: message}})
        setTimeout(() => {
            dispatch(hideSuccess())
        }, 2000)
    }
}

export const showLoader = () => {
    return {
        type: 'SHOW_LOADER'
    }
}

export const hideLoader = () => {
    return {
        type: 'HIDE_LOADER'
    }
}