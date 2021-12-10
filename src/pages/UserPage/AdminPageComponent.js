import adminActions from "../../actions/adminActions";
import { useState, useEffect } from "react";
import "../../styles/style.css";
// import DatatablePage from "./TableComponent";
import { MDBDataTableV5 } from "mdbreact";
import { Container } from "react-bootstrap";
import Navibar from "../../components/Navibar";

const AdminPage = () => {
  const [datatable, setusersInfo] = useState({
    columns: [
      {
        label: "Прізвище",
        field: "lastName",
        width: "10vh",
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "FirstName",
        },
      },
      {
        label: "Ім'я",
        field: "firstName",
        width: 170,
        sort: "disabled",
      },
      {
        label: "По батькові",
        field: "fatherName",
        width: 200,
        sort: "disabled",
      },
      {
        label: "Телефон",
        field: "phoneNumber",
        width: 100,
        sort: "disabled",
      },
      {
        label: "Email",
        field: "email",
        width: 150,
      },

      {
        label: "Ім'я користувача",
        field: "userName",
        width: 150,
      },
    ],

    rows: [],
  });
  useEffect(() => {
    adminActions.getUsersTable().then((res) => {
      setusersInfo({ ...datatable, rows: [res.data].flat() });
    });
  }, []);

  return (
    <>
      <Navibar />
      <div className="table">
        <Container>
          <MDBDataTableV5
            hover
            responsive
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            materialSearch
          />
        </Container>
      </div>
    </>
    // <div className="d-flex">{console.log(usersInfo.users_info)}<DatatablePage data={usersInfo.users_info}/></div>
  );
};

export default AdminPage;
