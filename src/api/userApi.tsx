import AuthStore from '../stores/AuthStore';
import jwt_decode from 'jwt-decode';
import Api from './api';


const getById = async (id: string | undefined) => {
    return await Api.get(`User/${id}`);
};

const getActiveUserRoles = ():string[] => {
    let jwt = AuthStore.getToken() as string;
    let decodedJwt = jwt_decode(jwt) as any;
    return [].concat(decodedJwt[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ]);
};

const getActiveUserId = () => {
    const token = AuthStore.getToken() as string;
    const user: any = jwt_decode(token);
    return user.nameid as string;
    return "";
};

const getUserProfileById = async (currentUserId: string | undefined, focusUserId: string | undefined) => {
    console.log("I'am here in getUserProfileById!!!!!!!!!!!");
    return await Api.get(`User/${currentUserId}/${focusUserId}`);
};

const getCurrent = async () => {
    let jwt = AuthStore.getToken() as string;
    let decodedJwt = jwt_decode(jwt) as any;
    return await Api.get(`User/${decodedJwt.nameid}`)
        .then((response) => {
        console.log(response)
        return response
    });
};

const getImage = async (imageName: string | undefined) => {
    return await Api.get(`User/getImage/${imageName}`);
};

const put = async (data: any) => {
    return await Api.put(`User/editbase64`, data);
};

export default {
    getActiveUserId,
    getActiveUserRoles,
    getUserProfileById,
    getById,
    getCurrent,
    getImage,
    put
};