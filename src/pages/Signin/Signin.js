import React, { useState } from "react";
import Navibar from "../../components/Navibar";
import "../../styles/style.css";
import InputField from "../../components/InputField";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import SubmitButton from "../../components/submitButton";
import { fields } from "./signInFields";

const Signin = ({ fetchUser }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    rememberMe: true,
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
    console.log(JSON.stringify(state));
    fetchUser(state);
  };

  return (
    <>
      <Navibar />
      <section className="contact">
        <div className="containerSignin">
          <div className="col-lg-6">
            <form className="php-email-form" onSubmit={onSubmit}>
              <h2> Sign in</h2>
              <div className="row-md-2 form-group mt-3 mt-md-0 mb-3">
                {fields.map(({ type, name, id, placeholder }) => (
                  <div className="mb-3">
                    <InputField
                      type={type}
                      name={name}
                      id={id}
                      placeholder={placeholder}
                      value={state[name]}
                      onChange={handleOnChange}
                    />
                  </div>
                ))}
              </div>
              <SubmitButton title="Sign in" link="/about" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
