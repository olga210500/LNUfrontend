import React, { Component } from "react";
import Navibar2 from "../components/Navibar2";
import "../styles/style.css";
import { connect } from "react-redux";
import { signUserUp } from "../actions/userActions";
import InputField from "../components/InputField";
class Signup extends Component {
  fields = [
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "First name",
    },
    {
      type: "text",
      name: "surname",
      id: "surname",
      placeholder: "Last name",
    },

    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Your Email",
    },

    {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Password",
    },
    {
      type: "password",
      name: "confirmPassword",
      id: "confirmPassword",
      placeholder: "Confirm password",
    },
  ];
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleOnChange = (fieldName) => (fieldValue) => {
    this.setState(() => ({
      [fieldName]: fieldValue,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUserUp(this.state);
  };

  render() {
    return (
      <>
        <script>AOS.init();</script>

        <Navibar2 />
        <section className="contact">
          <div className="containerSignup">
            <div className="col-lg-6">
              <form className="php-email-form" onSubmit={this.onSubmit}>
                <h2> Register</h2>
                <div className="row-md-2 form-group mb-3">
                  {this.fields.map(({ type, name, id, placeholder }) => (
                    <div className="mb-3">
                      <InputField
                        type={type}
                        name={name}
                        id={id}
                        placeholder={placeholder}
                        value={this.state[name]}
                        onChange={this.handleOnChange(name)}
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button type="submit">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};
export default connect(null, mapDispatchToProps)(Signup);
