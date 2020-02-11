import TokenService from "./token-service";
import config from "../config";

const BackpackApiService = {
  getBackpacks() {
    return fetch(`${config.API_ENDPOINT}/backpacks`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }).then(res =>
      !res.ok
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    );
  }
};

export default BackpackApiService;
