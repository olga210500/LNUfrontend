import React, {useState} from "react";
import {Form, Input} from 'antd';
import Navibar from "../../components/Navibar";
import "../../styles/style.css";
import jwt from 'jwt-decode';
import { connect } from "react-redux";
import { fetchUser} from "../../actions/userActions";
import SubmitButton from "../../components/submitButton";
import {emptyInput, minLength} from "../../components/Notifications/Messages";
import {checkEmail} from "../Signup/verification";
import AuthStore from "../../stores/AuthStore";

let user;
type Props={
  fetchUser: (userInfo: any)=>void
}

const Signin = (props: Props) => {
  const [form] = Form.useForm();
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
    const token = AuthStore.getToken() as string;
    user = jwt(token);
    setAvailabe(true);
    window.location.reload();
  };

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
                <Form.Item>
                  <SubmitButton title="Увійти" loading={!available}/>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default connect(null, {fetchUser})(Signin);