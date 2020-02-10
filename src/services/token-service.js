import config from '../config'

const TokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token)
    },

    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`)
    },
}

export default TokenService