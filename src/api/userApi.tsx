import AuthStore from '../stores/AuthStore';
import jwt_decode from 'jwt-decode';
import Api from './api';


const getById = async (id: string | undefined) => {
    return await Api.get(`User/${id}`);
};

const getCurrent = async () => {
    let jwt = AuthStore.getToken() as string;
    let decodedJwt = jwt_decode(jwt) as any;
    return await Api.get(`/User/${decodedJwt.userId}`)
        .then((response) => {
            return response
    });
};

export default {
    getById,
    getCurrent,
};