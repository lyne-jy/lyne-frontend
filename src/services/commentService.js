import http from "./httpService";

const url = process.env.REACT_APP_API_URL + "/comments/";

export function postComment(id, comment) {
    return http.post(url+id, comment)
}