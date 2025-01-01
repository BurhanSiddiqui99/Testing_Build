import axios from 'axios'
import { Utils } from '..';

// base url from the env.
const BASE_URL = process.env.REACT_APP_BASE_URL;

// axios will set the baseurl before any api call so e.g baseurl/endpoint
axios.defaults.baseURL = BASE_URL;
// it will attach the auth token before making the request any.
axios.interceptors.request.use(
    (config) => {
        config.headers["x-auth-token"] = JSON.parse(localStorage.getItem('auth_token'));
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        if (error.response && error.response.status === 401) {
            // Use router.push() to navigate to the login screen
            localStorage.removeItem('user')
            localStorage.removeItem('auth_token')
            window.location.replace('/web')

            return Promise.reject('Unauthorized');
        }
        // Handle other errors here
        return Promise.reject(error);
    }
);
// api calls
export default class ApiCaller {

    static async Get(endpoint) {
        const resp = await axios.get(`${endpoint}`);
        return resp
    }

    static async Post(endpoint, body) {
        try {
            const resp = await axios.post(`${endpoint}`, body);
            return resp
        } catch (error) {
            console.log(error)
            Utils.showMessage('error', error?.response?.data?.error?.message ? error?.response?.data?.error?.message : error?.response?.error?.message ? error?.response?.error?.message : 'Internet not connected')
            return error
        }
    }

    static async Patch(endpoint, body) {
        const resp = await axios.patch(`${endpoint}`,  body );
        return resp
    }

    static async Delete(endpoint) {
        const resp = await axios.delete(`${endpoint}`);
        return resp
    }

}