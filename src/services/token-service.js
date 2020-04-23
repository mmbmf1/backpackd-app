import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },

  saveUser(user_name) {
    window.sessionStorage.setItem(config.USER, user_name);
  },

  getUser() {
    return window.sessionStorage.getItem(config.USER);
  },

  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },

  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },

  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },

  clearUser() {
    window.sessionStorage.removeItem(config.USER);
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
};

export default TokenService;
