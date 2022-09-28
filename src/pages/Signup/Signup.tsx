import React, {useEffect, useState} from "react";
import { Form, Input } from 'antd';
import Navibar from "../../components/Navibar";
import "../../styles/style.css";
import {getGoogleId, sendGoogleTokenToSignUp, signUserUp} from "../../actions/userActions";
import SubmitButton from "../../components/submitButton";
import { checkEmail, checkNameSurName, checkPassword } from './verification';
import { emptyInput, minLength} from "../../components/Notifications/Messages";
import GoogleLoginWrapper from "../Signin/GoogleLoginWrapper";


const Signup = () => {
  const [form] = Form.useForm();
  const [googleId, setGoogleId] = useState("");
  const [googleLoading, setGoogleLoading] = useState(true);
  const [available, setAvailable] = useState(true);

  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    ConfirmPassword: '',
  };

  const validationSchema = {
    email: [
      { required: true, message: emptyInput() },
      { validator: checkEmail }
    ],
    password: [
      { required: true, message: emptyInput() },
      { validator: checkPassword }
    ],
    firstName: [
      { required: true, message: emptyInput() },
      { validator: checkNameSurName }
    ],
    lastName: [
      { required: true, message: emptyInput() },
      { validator: checkNameSurName }
    ],
    ConfirmPassword: [
      { required: true, message: emptyInput() },
      { min: 8, message: minLength(8) },
    ],
  };

  const handleSubmit = async (values: any) => {
    setAvailable(false);
    await signUserUp(values);
    setAvailable(true);
  };

  const handleGoogleResponse = async (response: any) => {
    await sendGoogleTokenToSignUp(response.tokenId);
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
        <div className="containerSignup">
          <div className="col-lg-6">
            <Form
                name="SignUpForm"
                className="php-email-form"
                initialValues={initialValues}
                form={form}
                onFinish={handleSubmit}
            >
              <h2> Реєстрація</h2>
              <div className="row-md-2 form-group mb-3">
                <Form.Item name="email" className="mb-3" rules={validationSchema.email}>
                  <Input className="form-control" placeholder="Електронна пошта" />
                </Form.Item>
                <Form.Item name="password" className="mb-3" rules={validationSchema.password}>
                  <Input.Password visibilityToggle={true} className="form-control" placeholder="Пароль" />
                </Form.Item>
                <Form.Item
                    name="ConfirmPassword"
                    className="mb-3"
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: emptyInput(),
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('Паролі не співпадають'));
                        },
                      }),
                    ]}
                >
                  <Input.Password visibilityToggle={true} className="form-control" placeholder="Підтвердити пароль" />
                </Form.Item>
                <Form.Item name="firstName" className="mb-3" rules={validationSchema.firstName}>
                  <Input className="form-control" placeholder="Ім'я" />
                </Form.Item>
                <Form.Item name="lastName" className="mb-3" rules={validationSchema.lastName}>
                  <Input className="form-control" placeholder="Прізвище" />
                </Form.Item>
              </div>
              <div className="rememberMeContainer">
                <Form.Item>
                  <SubmitButton title="Зареєструватись" loading={!available} />
                </Form.Item>
                {/*{googleLoading ? (*/}
                {/*    ''*/}
                {/*) : (*/}
                {/*    <GoogleLoginWrapper signUp={true} googleId={googleId} handleGoogleResponse={handleGoogleResponse}/>*/}
                {/*)}*/}
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
