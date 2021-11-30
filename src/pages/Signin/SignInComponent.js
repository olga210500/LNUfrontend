import React, { Component } from "react";
import Navibar from "../../components/Navibar";
import "../../styles/style.css";
import InputField from "../../components/InputField";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import SubmitButton from "../../components/submitButton";


class SigninComponent extends Component {
  fields = [
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
  ];
  state = {
    email: "",
    password: "",
    rememberMe: true,
  };

  handleOnChange = (fieldName) => (fieldValue) => {
    this.setState(() => ({
      [fieldName]: fieldValue,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    this.props.fetchUser(this.state);
    // this.props.history.push('/userpage')
  };

  render() {
    return (
      <>
   
        <Navibar />
        <section className="contact">
          <div className="containerSignin">
            <div className="col-lg-6">
              <form className="php-email-form" onSubmit={this.onSubmit}>
                <h2> Sign in</h2>
                <div className="row-md-2 form-group mt-3 mt-md-0 mb-3">
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
                <SubmitButton title="Sign in" link="/about" />
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
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};


export default connect(null, mapDispatchToProps)(SigninComponent);
