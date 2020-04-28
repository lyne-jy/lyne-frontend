import axios from "axios";
import {toast} from "react-toastify";

axios.defaults.headers.post['x-auth-token'] = localStorage.getItem('token');

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status <= 500;

    if (!expectedError) {
        toast.error("发生了一个意料之外的错误。");
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}