import jwt_decode from 'jwt-decode';
import Api from '../api/api';

// const URL = "https://localhost:5001/api";
export const getUsersTable = async () => {
    return await Api.get(`/Admin/usersTable`)
        .then((response) => {
            console.log(response);
            return response;
        });
};
export const getApplicationsTable = async () => {
    return Api.get('/BusinessTripRequest/form')
        .then((response) => {
            return response;
        });
};
