import jwt_decode from "jwt-decode";
import Api from "../api/api";

const URL = "https://localhost:5001/api";
export const getUsersTable = async () => {
  return await Api.get(`Admin/usersTable`)
      .then((response) => {
      console.log(response)
      return response
  });
};


// export const usersTable = () => {
//   const token = localStorage.token;
//   console.log(jwt_decode(token));

//   if (token) {
//     return fetch(`${URL}​/api/Admin/usersTable`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     }).then((response) => response.json());
//   }
// };
