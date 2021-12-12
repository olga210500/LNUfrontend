import jwt_decode from "jwt-decode";
import AuthStore from "../../stores/AuthStore";
import UserPage from "./UserPage";
import AdminPage from "./AdminPageComponent";
import Signin from "../Signin/Signin";
import { connect } from "react-redux";
import UserApplications from "../ApplicationPage.js/UserApplications";
const GeneralPage = ({ userReducer }) => {
  if (userReducer.loggedIn) {
    let jwt = AuthStore.getToken();
    let decodedJwt = jwt_decode(jwt);
    if (
      decodedJwt[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ] === "Admin"
    ) {
      // return <AdminPage />;
      return <UserApplications/>
    }

    return <UserPage/>;
  }
  return <Signin />;
};
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps)(GeneralPage);
