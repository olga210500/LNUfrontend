import { MDBDataTableV5 } from "mdbreact";

import InitialStates from "../InitialStates.js/InitialStates";
import { useState ,useEffect} from "react";
import { Container } from "react-bootstrap";
import Navibar from "../../components/Navibar";
import { getApplicationsTable } from "../../actions/adminAction";

const UserApplications=()=>{
    const [datatable, setApplication] = useState({
        columns:InitialStates.UserApplicationColumns,
        rows: [],
      });
      
      useEffect(() => {
        getApplicationsTable().then((res) => {
          setApplication({ ...datatable, rows: [res.data.requests].flat() });
        

        })
      },[]);
    
      return (
        <>
         {console.log('hello',datatable.rows)}
         {/* {datatable.rows.push({generateApp:'lala'})} */}
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
}
export default UserApplications;