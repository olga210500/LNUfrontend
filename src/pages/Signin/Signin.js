import "../../styles/style.css";
import { connect } from "react-redux";
import SignInComponent from "./SignInComponent";
import InformationLoggedIn from "../errors/loggedInError";

 const Singin=({userReducer})=>{
 return( <>{!userReducer.loggedIn?<SignInComponent/>:<InformationLoggedIn/>}</>)

 }
 const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}


export default connect(mapStateToProps)(Singin);