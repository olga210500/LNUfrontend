import jwt_decode from "jwt-decode";

const URL = "https://localhost:5001/api";

const setUser = (payload) => ({ type: "SET_USER", payload });
const logUserOut = () => ({ type: "LOG_OUT" });

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`${URL}/Login/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      data.user = jwt_decode(data.token);
      dispatch(setUser(data.user));
    })
    .catch(() => alert("Неправильний логін або пароль!"));
};

export const signUserUp = (userInfo) => (dispatch) => {
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
        window.location = "http://localhost:3000/informationPage";
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
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch(`${URL}​/Login​/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((data) => {
        if (data.ok) {
          dispatch(logUserOut());
        }
      });
    }
  };
};

export const sendQuestion = (questionOption) => (dispatch) => {
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
