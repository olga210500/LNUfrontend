import { MDBDataTableV5 } from "mdbreact";
import { getApplicationsTable } from "../../actions/adminAction";
import InitialStates from "../InitialStates.js/InitialStates";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navibar from "../../components/Navibar";
import { getMyApplication } from "../../actions/userActions";

const UsersApplicationPage = () => {
  const [datatable, setApplication] = useState({
    columns: InitialStates.AdminApplicationColumns,
    rows: [],
  });

  useEffect(() => {
    getApplicationsTable().then((res) => {
      setApplication({ ...datatable, rows: [res.data.requests].flat() });
    });
  }, []);

  return (
    <>
      <Navibar />

      <div className="table">
        <Container>
          <MDBDataTableV5
            btn
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
export default UsersApplicationPage;
