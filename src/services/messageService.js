import http from "./httpService";

const url = process.env.REACT_APP_API_URL + "/message";

export function postMessage(message) {
    return http.post(url, {message});
}