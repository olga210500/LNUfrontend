import AuthStore from '../stores/AuthStore';
import Api from '../api/api';
import jwt_decode from 'jwt-decode';
import store from '../store';
import config from '../config';
import notificationLogic from '../components/Notifications/Notification';


const setUser = (payload) => ({type: '', payload});
const logUserOut = () => ({type: 'LOG_OUT'});


export const fetchUser = (userInfo) => async (dispatch) => {
    return await Api.post('/Auth/signIn', userInfo)
        .then((response) => {
            if (response.data !== null) {
                const tokens = JSON.stringify(response.data);
                AuthStore.setToken(tokens);
                dispatch(setUser(jwt_decode(tokens)));
                window.location = `${config.Front_URL}`;
            }

        }).catch((error) => {
            if (error) {
                console.log(error);
                console.log('smth wrong!!!');
            }
            // if (error.response.status === 400) {
            //     notificationLogic("error", error.response.data.value);
            // }
        });
};

export const signUserUp = async (userInfo) => {
    return await Api.post(`/Auth/signup`, userInfo)
        .then((response) => {
            notificationLogic('success', response.data.value);
        })
        .catch((error) => {
            console.log('something went wrong');
            // if (error.response.status === 400) {
            //     notificationLogic("error", error.response.data.value);
            // }

        });
};

export const logOut = () => {
    return async (dispatch) => {
        const userStore = store.getState().userReducer;
        const tokens = JSON.parse(window.localStorage.getItem('token'));
        if (userStore.loggedIn) {
            await Api.get(`/Auth/logout`).then((res) => {
                if (res.status === 200) {
                    window.localStorage.removeItem('token');
                    dispatch(logUserOut());
                }
            });
        }
    };
};


export const sendQuestion = async (questionOption) => {
    return await Api.post('Auth/sendQuestion', questionOption)
        .then((response) => {
            notificationLogic('success', response.data.value);
        })
        .catch((error) => {
            if (error.response.status === 400) {
                notificationLogic('error', error.response.data.value);
            }
        });
};

export const sendGoogleToken = (token) => async (dispatch) => {
    return await Api.post(`Login/signin/google/?googleToken=${token}`)
        .then((response) => {
            if (response.data.token !== null) {
                AuthStore.setToken(response.data.token);
                dispatch(setUser(jwt_decode(response.data.token)));
                window.location = `${config.Front_URL}/userPage`;
            }
        })
        .catch((error) => {
            if (error.response.status === 400) {
                notificationLogic('error', error.response.data.value);
            }
        });
};

export const sendGoogleTokenToSignUp = async (token) => {
    return await Api.post(`Auth/signup/google/?googleToken=${token}`)
        .then((response) => {
            if (response.data.token !== null) {
                notificationLogic('success', response.data.value);
            }
        })
        .catch((error) => {
            if (error.response.status === 400) {
                notificationLogic('error', error.response.data.value);
            }
        });
};

export const getGoogleId = async () => {
    const response = await Api.get('Login/GoogleClientId');
    return response.data;
};

export const forgotPassword = async (data) => {
    return await Api.post('Password/forgotPassword', data)
        .then((response) => {
            notificationLogic('success', response.data.value);
        })
        .catch((error) => {
            if (error.response.status === 400) {
                notificationLogic('error', error.response.data.value);
            }
        });
};

export const resetPassword = async (data) => {
    return await Api.post('Password/resetPassword', data)
        .then((response) => {
            notificationLogic('success', response.data.value);
        })
        .catch((error) => {
            if (error.response.status === 400) {
                notificationLogic('error', error.response.data.value);
            }
        });
};

export const changePassword = async (data) => {
    return await Api.post('Password/changePassword', data)
        .then((response) => {
            notificationLogic('success', response.data.value);
        })
        .catch((error) => {
            if (error.response.status === 400) {
                notificationLogic('error', error.response.data.value);
            }
        });
};

export const getMyApplication = async () => {
    let jwt = AuthStore.getToken();
    let decodedJwt = jwt_decode(jwt);
    return await Api.get(`BusinessTripRequest/${decodedJwt.nameid}`)
        .then((response) => {
            console.log(response);
            return response;
        });
};
