import jwt_decode from "jwt-decode";

const setUser = (payload) => ({ type: "SET_USER", payload });

const URL = "https://localhost:5001/api";
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
    });
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
    .then((res) => res.json())
    .then((data) => {
      dispatch(setUser(data.user));
    });
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
          dispatch(logUserOut())
        }
      });
    }
  };
};
