// import React, {useState} from "react";
// import {Form, Input} from 'antd';
// import Navibar from "../../components/Navibar";
// import "../../styles/style.css";
// import jwt from 'jwt-decode';
// import { connect } from "react-redux";
// import { fetchUser} from "../../actions/userActions";
// import SubmitButton from "../../components/submitButton";
// import {emptyInput, minLength} from "../../components/Notifications/Messages";
// import {checkEmail} from "../Signup/verification";
// import AuthStore from "../../stores/AuthStore";

// let user: any;

// const Signin = (fetchUser: any) => {
//   const [form] = Form.useForm();
//   const [available, setAvailabe] = useState(true);

//   const initialValues = {
//     Email: "",
//     Password: "",
//     RememberMe: true,
//   };

//   const validationSchema = {
//     Email: [
//       { required: true, message: emptyInput() },
//       { validator: checkEmail },
//     ],
//     Password: [
//       { required: true, message: emptyInput() },
//       { min: 8, message: minLength(8) },
//     ]
//   };

//   const handleSubmit = (values: any) => {
//     setAvailabe(false);
//     fetchUser(values);
//     const token = AuthStore.getToken() as string;
//     user = jwt(token);
//     setAvailabe(true);
//     window.location.reload();
//   };

//   return (
//     <>
//       <Navibar />
//       <section className="contact">
//         <div className="containerSignin">
//           <div className="col-lg-6">
//             <Form
//                 name="SignInForm"
//                 className="php-email-form"
//                 initialValues={initialValues}
//                 form={form}
//                 onFinish={handleSubmit}
//             >
//               <h2> Увійти</h2>
//               <div className="row-md-2 form-group mt-3 mt-md-0 mb-3">
//                     <Form.Item name="Email" className="mb-3" rules={validationSchema.Email}>
//                       <Input className="form-control" placeholder="Електронна пошта" />
//                     </Form.Item>
//                     <Form.Item name="Password" className="mb-3" rules={validationSchema.Password}>
//                       <Input.Password visibilityToggle={true} className="form-control" placeholder="Пароль" />
//                     </Form.Item>
//                 <Form.Item>
//                   <SubmitButton title="Увійти" loading={!available}/>
//                 </Form.Item>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default connect(null, { fetchUser })(Signin);
import React, { useState } from "react";
import Navibar from "../../components/Navibar";
import "../../styles/style.css";
import InputField from "../../components/InputField";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import SubmitButton from "../../components/submitButton";
import { fields } from "./signInFields";

const Signin = ({ fetchUser }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  function handleOnChange(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    fetchUser(state);

  };

  return (
    <>
      <Navibar />
      <section className="contact">
        <div className="containerSignin">
          <div className="col-lg-6">
            <form className="php-email-form" onSubmit={onSubmit}>
              <h2> Увійти</h2>
              <div className="row-md-2 form-group mt-3 mt-md-0 mb-3">
                {fields.map(({ type, name, id, placeholder }) => (
                  <div className="mb-3">
                    <InputField
                      type={type}
                      name={name}
                      id={id}
                      placeholder={placeholder}
                      value={state[name]}
                      onChange={handleOnChange}
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);