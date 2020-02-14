import TokenService from "./token-service";
import config from "../config";

const BackpackApiService = {
  getBackpacks() {
    return fetch(`${config.API_ENDPOINT}/backpacks`, {
      headers: {
        // authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getUserBackpacks(user_name) {
    return fetch(`${config.API_ENDPOINT}/backpacks/${user_name}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  postBackpack(backpack) {
    console.log(typeof backpack)
    return fetch(`${config.API_ENDPOINT}/backpacks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(backpack)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteUserBackpack(id) {
    return fetch(`${config.API_ENDPOINT}/backpacks/${id}`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
        // 'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      // body: JSON.stringify(bpId),
    })
      // .then(res => {
      //   !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      // })
  }
};

export default BackpackApiService;
