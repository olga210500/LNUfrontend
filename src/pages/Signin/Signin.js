import React, { Component } from "react";
import Navibar2 from "../../components/Navibar2";
import "../../styles/style.css";
import InputField from "../../components/InputField";
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