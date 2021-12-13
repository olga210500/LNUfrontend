import { useEffect } from "react";
import { getApplicationsTable } from "../../actions/adminAction";
import InitialStates from "../InitialStates.js/InitialStates";

const UsersApplicationPage=()=>{
    
    const [datatable, setApplication] = useState({
        columns:InitialStates.ApplicationColumns,
        rows: [],
      });
      

    useEffect(()=>{
        getApplicationsTable().then((res)=>{
            setApplication({ ...datatable, rows: [res.data].flat() });

        })

    },[])
    
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
export default UsersApplicationPage