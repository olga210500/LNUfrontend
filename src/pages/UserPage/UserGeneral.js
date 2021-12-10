import jwt_decode from "jwt-decode";
import AuthStore from "../../stores/AuthStore";
import UserPage from "./UserPage";
import AdminPage from "./AdminPageComponent";
const GeneralPage = () => {
  let jwt = AuthStore.getToken();
  let decodedJwt = jwt_decode(jwt);
  if (
    decodedJwt[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ] === "Admin"
  ) {
    return <AdminPage />;
  }
  return <UserPage />;
};
export default GeneralPage;
