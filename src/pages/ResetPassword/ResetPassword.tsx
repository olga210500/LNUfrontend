import React from "react";
import { Form, Input } from "antd";
import {resetPassword} from '../../actions/userActions';
import { checkEmail, checkPassword } from '../Signup/verification';
import { useLocation, useHistory } from "react-router-dom";
import {
  emptyInput,
  incorrectEmail,
} from "../../components/Notifications/Messages";
import Navibar from "../../components/Navibar";
import SubmitButton from "../../components/submitButton";

export default function () {
  const [form] = Form.useForm();
  const history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

    const validationSchema = {
        Email: [
            { required: true, message: incorrectEmail },
            { validator: checkEmail },
        ],
        Password: [
            { required: true, message: emptyInput() },
            { validator: checkPassword },
        ],
        ConfirmPassword: [
            { required: true, message: emptyInput() },
        ]
    };

    const handleSubmit = async (values: any) => {
        const newPassword = {
            email: values.Email,
            password: values.Password,
            confirmPassword: values.ConfirmPassword,
            code: query.get("token"),
        }
        await resetPassword(newPassword);
        history.push("/signin");
    };

  const initialValues = {
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Code: "",
  };

  return (
      <>
          <Navibar />
          <section className="contact">
              <div className="containerSignup">
                  <div className="col-lg-6">
                      <Form
                          name="ResetPasswordForm"
                          className="php-email-form"
                          initialValues={initialValues}
                          form={form}
                          onFinish={handleSubmit}
                      >
                          <h2> Скидання пароля</h2>
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
                          </div>
                          <div className="rememberMeContainer">
                              <Form.Item>
                                  <SubmitButton title="Скинути пароль"/>
                              </Form.Item>
                          </div>
                      </Form>
                  </div>
              </div>
          </section>
      </>
  );
}
