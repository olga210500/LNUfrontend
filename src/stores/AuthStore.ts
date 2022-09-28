import axios from "axios";
import config from "../config";

export default class AuthStore {
    static STORAGE_KEY: string = "token";

    static getToken() {
        return window.localStorage.getItem(AuthStore.STORAGE_KEY);
    }

    static setToken(token: string) {
        window.localStorage.setItem(AuthStore.STORAGE_KEY, token);
    }

    static removeToken(): void {
        window.localStorage.removeItem(AuthStore.STORAGE_KEY);
    }

    static async checkAuth(): Promise<any> {
        const response = await axios.get(`${config.BASE_URL}/Auth/refresh`);
        const token = response.data.tokens;
        AuthStore.setToken(JSON.stringify(token));
    }
}