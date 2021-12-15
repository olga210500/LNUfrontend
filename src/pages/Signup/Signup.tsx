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
    Email: '',
    Name: '',
    SurName: '',
    Password: '',
    ConfirmPassword: '',
  };

  const validationSchema = {
    Email: [
      { required: true, message: emptyInput() },
      { validator: checkEmail }
    ],
    Password: [
      { required: true, message: emptyInput() },
      { validator: checkPassword }
    ],
    Name: [
      { required: true, message: emptyInput() },
      { validator: checkNameSurName }
    ],
    SurName: [
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
                <Form.Item name="Email" className="mb-3" rules={validationSchema.Email}>
                  <Input className="form-control" placeholder="Електронна пошта" />
                </Form.Item>
                <Form.Item name="Password" className="mb-3" rules={validationSchema.Password}>
                  <Input.Password visibilityToggle={true} className="form-control" placeholder="Пароль" />
                </Form.Item>
                <Form.Item
                    name="ConfirmPassword"
                    className="mb-3"
                    dependencies={['Password']}
                    rules={[
                      {
                        required: true,
                        message: emptyInput(),
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('Password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('Паролі не співпадають'));
                        },
                      }),
                    ]}
                >
                  <Input.Password visibilityToggle={true} className="form-control" placeholder="Підтвердити пароль" />
                </Form.Item>
                <Form.Item name="Name" className="mb-3" rules={validationSchema.Name}>
                  <Input className="form-control" placeholder="Ім'я" />
                </Form.Item>
                <Form.Item name="SurName" className="mb-3" rules={validationSchema.SurName}>
                  <Input className="form-control" placeholder="Прізвище" />
                </Form.Item>
              </div>
              <div className="rememberMeContainer">
                <Form.Item>
                  <SubmitButton title="Зареєструватись" loading={!available} />
                </Form.Item>
                {googleLoading ? (
                    ''
                ) : (
                    <GoogleLoginWrapper signUp={true} googleId={googleId} handleGoogleResponse={handleGoogleResponse}/>
                )}
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
