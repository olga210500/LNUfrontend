
import { useState, useEffect } from "react";
import "../../styles/style.css";
import { MDBDataTableV5 } from "mdbreact";
import { Container } from "react-bootstrap";
import Navibar from "../../components/Navibar";
import InitialStates from "../InitialStates.js/InitialStates";
import { getUsersTable } from "../../actions/adminAction";

const AdminPage = () => {
  const [datatable, setusersInfo] = useState({
    columns:InitialStates.UsersTableColumn,
    rows: [],
  });
  
  useEffect(() => {
    getUsersTable().then((res) => {
      setusersInfo({ ...datatable, rows: [res.data].flat() });
    });
  });

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
  );
};

export default AdminPage;
