import React, { useState } from "react";
import Navibar from "../../components/Navibar";
import "../../styles/style.css";
import { connect } from "react-redux";
import { signUserUp } from "../../actions/userActions";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/submitButton";
import { signUpFields } from "./signUpFields";

const Signup = ({ signUserUp }) => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleOnChange(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    signUserUp(state);
  };

  return (
    <>
      <script>AOS.init();</script>
      <Navibar />
      <section className="contact">
        <div className="containerSignup">
          <div className="col-lg-6">
            <form className="php-email-form" onSubmit={onSubmit}>
              <h2> Register</h2>
              <div className="row-md-2 form-group mb-3">
                {signUpFields.map(({ type, name, id, placeholder,required }) => (
                  <div className="mb-3">
                    <InputField
                      type={type}
                      name={name}
                      id={id}
                      placeholder={placeholder}
                      value={state[name]}
                      onChange={handleOnChange}
                      required={required}
                    />
                  </div>
                ))}
              </div>
              <SubmitButton title="Sign up" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};
export default connect(null, mapDispatchToProps)(Signup);
