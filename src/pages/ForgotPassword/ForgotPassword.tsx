import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { checkEmail } from '../Signup/verification';
import {forgotPassword} from '../../actions/userActions';
import { useHistory } from 'react-router-dom';
import{ emptyInput } from "../../components/Notifications/Messages"
import Navibar from "../../components/Navibar";
import SubmitButton from "../../components/submitButton";

export default function () {
    const [form] = Form.useForm();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const validationSchema = {
        Email: [
            { required: true, message: emptyInput("електронна пошта") },
            { validator: checkEmail }
        ]
    };

    const handleSubmit = async (values: any) => {
        setLoading(true);
        await forgotPassword(values);
        history.push("/signin");
    };
    const initialValues = {
        Email: ''
    };

    return (
        <>
            <Navibar />
            <section className="contact">
                <div className="containerSignup">
                    <div className="col-lg-6">
                        <Form
                            name="ForgotPasswordForm"
                            className="php-email-form"
                            initialValues={initialValues}
                            form={form}
                            onFinish={handleSubmit}>
                            <h2> Відновлення пароля</h2>
                            <div className="row-md-2 form-group mb-3">
                                <Form.Item name="Email" className="mb-3" rules={validationSchema.Email}>
                                    <Input className="form-control" placeholder="Забули пароль? Введіть електронну пошту" />
                                </Form.Item>
                            </div>
                            <div className="rememberMeContainer">
                                <Form.Item>
                                    <SubmitButton title="Надіслати пароль" loading={loading} />
                                </Form.Item>
                                <Form.Item>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="rounded"
                                            disabled={loading}
                                            onClick={()=>history.push("/signin")}>
                                            Скасувати
                                        </button>
                                    </div>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    );
}