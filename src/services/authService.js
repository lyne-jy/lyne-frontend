import http from "./httpService";
import jwtDecode from 'jwt-decode';

const url = process.env.REACT_APP_API_URL + "/auth";

export function login(email, password) {
    return http.post(url, {email, password});
}

export function getUser() {
    const jwt = localStorage.getItem('token');
    if (!jwt) return null;
    try {
        const user = jwtDecode(jwt);
        return user;
    }
    catch (e) {
    }
}