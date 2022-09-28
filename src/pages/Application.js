import Navibar from "../components/Navibar";
import "../styles/style.css";
import { useState } from "react";
import InputField from "../components/InputField";
import fieldsForInput from "../variblesForApplication/fieldsForInput";
import SubmitButton from "../components/submitButton";
import AuthStore from "../stores/AuthStore";
import jwt_decode from "jwt-decode";
import {
  withInputFields,
  radioFields,
  radioFileds,
} from "../variblesForApplication/radioFields";
import InitialStates from "./InitialStates.js/InitialStates";
import { sendApplication } from "../actions/applicationAtcion";

const Application = () => {
  const [state, setState] = useState(InitialStates.ApplicationInitialState);

  function handleOnChange(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const onSubmit = (e) => {
    let jwt = AuthStore.getToken();
    let decodedJwt = jwt_decode(jwt);
    state.retentionType = parseInt(state.retentionType, 10);
    state.isAbroadTrip = Boolean(state.isAbroadTrip);
    state.userId = `${decodedJwt.userId}`;
    e.preventDefault();
    console.log(state);
    sendApplication(state);
  };
  return (
    <>
      <Navibar />
      <section className="contact">
        <div className="d-flex flex-column justify-content-center">
          <div className="titleContainer ">
            <h1> Заявка на відрядження</h1>
          </div>
          <div className="applicationForm">
            <form id="formApp" onSubmit={onSubmit}>
              {fieldsForInput.map(
                ({ title, type, name, id, placeholder, required }, i) => (
                  <div
                    key={i}
                    className="col-md-5 mb-3 php-email-form columnApp"
                  >
                    <h6>{title}</h6>
                    <InputField
                      key={i}
                      type={type}
                      name={name}
                      id={id}
                      placeholder={placeholder}
                      value={state[name]}
                      onChange={handleOnChange}
                      required={required}
                    />
                  </div>
                )
              )}
              {radioFileds.map(({ name, title, options, type }, i) => (
                <div
                  key={i}
                  className="col-md-5 php-email-form mt-3 mt-md-0 mb-3 columnApp"
                >
                  <h6>{title}</h6>
                  <div onChange={handleOnChange} key={i}>
                    {options.map(({ label, value }, i) => (
                      <div key={i} className="form-check">
                        <div className="header_6">
                          <input
                            type={type}
                            name={name}
                            value={value}
                            key={i}
                            required
                          />
                          <label
                            className="form-check-label px-2 mt-2"
                            htmlFor={name}
                          >
                            <h6> {label} </h6>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <SubmitButton title="Надіслати" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Application;
