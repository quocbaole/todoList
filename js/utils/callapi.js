import { API_URL } from "./../config/constants.js"

const callApi = (uri, method, data) => {
    return axios({
        url: API_URL + uri,
        method,
        data
    })
}

export {callApi}