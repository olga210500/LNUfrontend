import userApi from "../../api/userApi";
import { useState, useEffect } from "react";
import Navibar from "../../components/Navibar";
import "../../styles/style.css";
import jwt_decode from "jwt-decode";
import AuthStore from "../../stores/AuthStore";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/submitButton";
const UserPage = () => {
  const [userInfo, setuserInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  useEffect(() => {
    userApi.getCurrent().then((res) => {
      setuserInfo(res.data);
    });
  }, []);

  let jwt = AuthStore.getToken();
  let decodedJwt = jwt_decode(jwt);
  console.log(decodedJwt);
  return (
    <>
      <Navibar />
      <div className="userPage">
        <div className="d-flex justify-content-center">
          <h5>
            Вітаємо,{" "}
            {
              decodedJwt[
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
              ]
            }
          </h5>
        </div>
        <div className="d-flex flex-row justify-content-center mt-10px createApp">
          <Link className="btn-get-started createApp " to="/application">
            Створити заявку
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserPage;
