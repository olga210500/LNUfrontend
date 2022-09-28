import axios, {Canceler} from "axios";
import config from "../config";
import AuthStore from '../stores/AuthStore';
import {createBrowserHistory} from 'history';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const history = createBrowserHistory();
let cancel: Canceler;

interface HttpResponse {
    headers: any;
    data: any;
}

axios.interceptors.request.use(
    (config: any) => {
        const token = AuthStore.getToken() as string;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

axios.interceptors.response.use(
    res => res,
    (err) => {
        // const originalRequest = err.config;
        // if (err.response.status === 401 && err.config && !originalRequest._isRetry){
        //     originalRequest._isRetry = true;
        //     try {
        //         const response = await axios.get(`${config.BASE_URL}/Auth/refresh`);
        //         const token = response.data.tokens;
        //         AuthStore.setToken(JSON.stringify(token));
        //         return
        //
        //     }catch (e) {
        //         console.log(e)
        //         console.log('не авторизований')
        //     }
        // }


        if (err.response?.status === 401) {
            cancelToken: new CancelToken(function executor(c) {
                cancel = c;
            })
            source.cancel();
            AuthStore.removeToken();
            const str = window.location.pathname
            if (str !== "/signin") {
                localStorage.setItem('pathName', str);
            }
            history.push("/signin");
            window.location.reload();

        }
        if (err.response?.status === 403) {
            history.push("/notAuthorized");
            window.location.reload();
        }
        return Promise.reject(err);
    }
);

const get = async (url: string, data?: any, paramsSerializer?: any): Promise<HttpResponse> => {
    return await axios.get(config.BASE_URL + url, {
        params: data,
        paramsSerializer: paramsSerializer
    });
};

const post = async (url: string, data?: any) => {
    return await axios.post(config.BASE_URL + url, data, {
        headers: {
            Accept: "application/json",
            "Content-Type": 'application/json',
        },
    });
};

const put = async (url: string, data?: any): Promise<HttpResponse> => {
    return await axios.put(config.BASE_URL + url, data, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

const remove = async (url: string, data?: any, options: any = {}): Promise<HttpResponse> => {
    return await axios.delete(config.BASE_URL + url, {
        ...options,
        params: data,
    });

};
export default {get, post, put, remove};
