import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navibar from "../components/Navibar";
import "../styles/style.css";
const Home = ({ userReducer }) => {
  return (
    <>
     <Navibar /> 
      <section
        id="hero-no-slider"
        className="d-flex justify-cntent-center align-items-center"
      >
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <h2>Welcome to LNUbiz</h2>
              <p>
                Одним із важливих завдань при направленні у відрядження
                працівників є правильне документальне оформлення. Адже бувають
                випадки, коли з певних причин відрядження скасовують,
                відтерміновують або змінюють їх тривалість. Для оформлення
                заявки натисніть кнопку розпочати.
              </p>
              {!userReducer.loggedIn ? (
                <Link className="btn-get-started" to="/signin">
                  Розпочати
                </Link>
              ) : (
                <Link className="btn-get-started" to="/application">
                  Розпочати
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps)(Home);
