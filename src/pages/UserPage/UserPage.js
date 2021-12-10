import userApi from "../../api/userApi";
import { useState, useEffect } from "react";

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
    <div>
      <p> {userInfo.email}</p>
    </div>
  );
};

export default UserPage;
