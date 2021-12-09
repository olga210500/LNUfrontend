import AuthStore from "../stores/AuthStore";
import Api from "../api/api";
import jwt_decode from "jwt-decode";
import store from "../store";

const URL = "https://localhost:5001/api";
const Front_URL='http://localhost:3000'

const setUser = (payload) => ({ type: '', payload });
const logUserOut = () => ({ type: "LOG_OUT" });


export const fetchUser = (userInfo) => async (dispatch) => {
  const response = await Api.post(`Login/signin`, userInfo)
      .then((response) => {
        if (response.data.token !== null) {
          AuthStore.setToken(response.data.token);
          dispatch(setUser(jwt_decode(response.data.token)))
          window.location =`${Front_URL}/userPage`;
        }


      }).catch(() => {
        alert("Неправильний логін або пароль!");
        
      });
        return response;

};

export const signUserUp = (userInfo)  => {

  fetch(`${URL}/Auth/signup`, {
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
        window.location =`${Front_URL}/informationPage`;
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

export const sendQuestion = (questionOption) => {
  fetch(`${URL}/Auth/sendQuestion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(questionOption),
  })
    .then(console.log(questionOption))
    .then((res) => res.json());
};
