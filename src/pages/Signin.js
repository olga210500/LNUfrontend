import React, { Component } from "react";
import Navibar2 from "../components/Navibar2";
import "../styles/style.css";

import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    rememberMe: true,
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    this.props.fetchUser(this.state);
  };

  render() {
    return (
      <>
        <Navibar2 />
        <section className="contact">
          <div className="containerSignin">
            <div className="col-lg-6">
              <form className="php-email-form" onSubmit={this.onSubmit}>
                <h2> Sign in</h2>
                <div className="row-md-2 form-group mt-3 mt-md-0 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    value={this.state.email}
                    onChange={this.handleOnChange}
                  />
                </div>

                <div className="row-md-2 form-group mt-3 mt-md-0 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={this.state.password}
                    onChange={this.handleOnChange}
                  />
                </div>

                <div className="text-center">
                  <button type="submit">Sign in</button>
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
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};
export default connect(null, mapDispatchToProps)(Signin);
