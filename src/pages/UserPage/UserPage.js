import userApi from "../../api/userApi";
import { useState, useEffect } from "react";
import UserApplications from "../ApplicationPage.js/UserApplications";

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

  return (
    <UserApplications/>
    // <div>
    //   <p> {userInfo.email}</p>
    // </div>
  );
};

export default UserPage;
