import AuthStore from "../stores/AuthStore";
import Api from "../api/api";
import jwt_decode from "jwt-decode";
import store from "../store";
import config from "../config";

const setUser = (payload) => ({ type: '', payload });
const logUserOut = () => ({ type: "LOG_OUT" });


export const fetchUser = (userInfo) => async (dispatch) => {
    return await Api.post(`Login/signin`, userInfo)
      .then((response) => {
        if (response.data.token !== null) {
          AuthStore.setToken(response.data.token);
          dispatch(setUser(jwt_decode(response.data.token)))
          window.location =`${config.Front_URL}/userPage`;
        }
      }).catch(() => {
        alert("Неправильний логін або пароль!");
      });
};

export const signUserUp = (userInfo)  => {

  fetch(`${config.BASE_URL}Auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => {
      if (res.status < 400) {
        res.json();
        window.location =`${config.Front_URL}/informationPage`;
      } else {
        throw new Error(
          "Користувач з такою електронною поштою вже зареєстрований в системі!"
        );
      }
      return true;
    })
    .catch((err) => alert(err));
};

export const logOut = () => {
  return async (dispatch) => {
    const userStore = store.getState().userReducer;
    if (userStore.loggedIn) {
      await Api.get(`Login/logout`).then((res) => {
        if (res.status === 200) {
          dispatch(logUserOut())
        }
      });
    }
  };
};


export const sendQuestion =async (questionOption)=> {
    return await Api.post(`Auth/sendQuestion`, questionOption)
      .then((response) =>{return response})
};

export const sendGoogleToken = (token) => async (dispatch) => {
    return await Api.post(`Login/signin/google/?googleToken=${token}`)
        .then((response) => {
            if (response.data.token !== null) {
                AuthStore.setToken(response.data.token);
                dispatch(setUser(jwt_decode(response.data.token)))
                window.location =`${config.Front_URL}/userPage`;
            }
        })
        .catch((error) => {
            if (error.response.status === 400) {
                alert(error.response.data.value);
                //notificationLogic("error", error.response.data.value);
            }
        });
};

export const getGoogleId = async () => {
    const response = await Api.get("Login/GoogleClientId");
    return response.data;
};

export const getMyApplication=async()=>{
  let jwt = AuthStore.getToken();
  let decodedJwt = jwt_decode(jwt);
  return await Api.get(`BusinessTripRequest/${decodedJwt.nameid}`)
      .then((response) => {
      console.log(response)
      return response
  });
};
