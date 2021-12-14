import userReducer from "../../reducer/userReducer"
import UsersApplicationPage from "./AdminApplications";
import UserApplications from "./UserApplications";
import AuthStore from "../../stores/AuthStore";
import jwt_decode from 'jwt-decode'
import { connect } from "react-redux";
const ShowApplications=({userReducer})=>{
    
    if (userReducer.loggedIn) {
        let jwt = AuthStore.getToken();
        let decodedJwt = jwt_decode(jwt);
        if (
          decodedJwt[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ] === "Admin"
        ) {
          return <UsersApplicationPage />;
          
        }
    
        return <UserApplications/>;
      }
     
    };


const mapStateProps=(state)=>{
    return{
    userReducer:state.userReducer,
}
}
export default connect(mapStateProps)(ShowApplications)