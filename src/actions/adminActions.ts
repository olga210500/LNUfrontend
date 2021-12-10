import jwt_decode from "jwt-decode";
import AuthStore from "../stores/AuthStore";
import Api from "../api/api";

const getUsersTable = async () => {
  return await Api.get(`Admin/usersTable`)
      .then((response) => {
      console.log(response)
      return response
  });
};
export default{getUsersTable}
