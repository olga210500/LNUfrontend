import React, {useEffect, useState} from "react";
import {Checkbox, Form, Input} from 'antd';
import { Link } from 'react-router-dom';
import Navibar from "../../components/Navibar";
import "../../styles/style.css";
import GoogleLoginWrapper from './GoogleLoginWrapper';
import { connect } from "react-redux";
import { fetchUser, sendGoogleToken, getGoogleId } from "../../actions/userActions";
import SubmitButton from "../../components/submitButton";
import {emptyInput, minLength} from "../../components/Notifications/Messages";
import {checkEmail} from "../Signup/verification";

type Props={
  fetchUser: (userInfo: any)=>void,
  sendGoogleToken: (token: any)=>void
}

const Signin = (props: Props) => {
  const [form] = Form.useForm();
  const [googleId, setGoogleId] = useState("");
  const [googleLoading, setGoogleLoading] = useState(true);
  const [available, setAvailabe] = useState(true);

  const initialValues = {
    Email: "",
    Password: "",
    RememberMe: true,
  };

  const validationSchema = {
    Email: [
      { required: true, message: emptyInput() },
      { validator: checkEmail },
    ],
    Password: [
      { required: true, message: emptyInput() },
      { min: 8, message: minLength(8) },
    ]
  };

  const handleSubmit = (values: any) => {
    setAvailabe(false);
    props.fetchUser(values);
    setAvailabe(true);
    window.location.reload();
  };

  const handleGoogleResponse = async (response: any) => {
    await props.sendGoogleToken(response.tokenId);
    window.location.reload();
  }

  const getId = async () => {
    await getGoogleId().then(
        (data) => {
          setGoogleId(data.id);
        }
    ).catch(exc => { console.log(exc) });
    setGoogleLoading(false);
  }

  useEffect(() => {
    getId();
  }, []);

  return (
      <>
        <Navibar />
        <section className="contact">
          <div className="containerSignin">
            <div className="col-lg-6">
              <Form
                  name="SignInForm"
                  className="php-email-form"
                  initialValues={initialValues}
                  form={form}
                  onFinish={handleSubmit}
              >
                <h2> Увійти</h2>
                <div className="row-md-2 form-group mt-3 mt-md-0 mb-3">
                  <Form.Item name="Email" className="mb-3" rules={validationSchema.Email}>
                    <Input className="form-control" placeholder="Електронна пошта" />
                  </Form.Item>
                  <Form.Item name="Password" className="mb-3" rules={validationSchema.Password}>
                    <Input.Password visibilityToggle={true} className="form-control" placeholder="Пароль" />
                  </Form.Item>
                  <div className="rememberMeContainer">
                    <Form.Item name="RememberMe" valuePropName="checked">
                      <Checkbox className="RememberMe">Запам`ятати мене</Checkbox>
                    </Form.Item>
                    <Link className="forgot" to="/forgotPassword">Забули пароль?</Link>
                  </div>
                  <div className="rememberMeContainer">
                    <Form.Item>
                      <SubmitButton title="Увійти" loading={!available}/>
                    </Form.Item>
                  {googleLoading ? (
                      ''
                  ) : (
                      <GoogleLoginWrapper googleId={googleId} handleGoogleResponse={handleGoogleResponse}/>
                  )}
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </>
  );
};

export default connect(null, {fetchUser, sendGoogleToken})(Signin);