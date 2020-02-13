import config from '../config'

const TokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token)
    },

    saveUser(user_name) {
        window.localStorage.setItem(config.USER, user_name)
    },

    getUser() {
        return window.localStorage.getItem(config.USER)
    },

    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY)
    },

    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`)
    },

    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY)
    },

    clearUser() {
        window.localStorage.removeItem(config.USER)
    },

    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
}

export default TokenService