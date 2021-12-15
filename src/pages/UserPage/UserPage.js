import userApi from "../../api/userApi";
import { useState, useEffect } from "react";
import Navibar from "../../components/Navibar";
import '../../styles/style.css'
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
    <>
    <Navibar/>
    <div className="userPage">
    Hello user
  </div>
    </>
  );
};

export default UserPage;
