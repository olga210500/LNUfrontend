import { MDBDataTableV5 } from "mdbreact";
import { getMyApplication } from "../../actions/userActions";
import InitialStates from "../InitialStates.js/InitialStates";
import { useState ,useEffect} from "react";
import { Container } from "react-bootstrap";
import Navibar from "../../components/Navibar";

const UserApplications=()=>{
    const [datatable, setApplication] = useState({
        columns:InitialStates.ApplicationColumns,
        rows: [],
      });
      
      useEffect(() => {
        getMyApplication().then((res) => {
          setApplication({ ...datatable, rows: [res.data].flat() });
        });
      },[]);
    
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
}
export default UserApplications;