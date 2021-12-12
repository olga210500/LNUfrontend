import { connect } from "http2"
import userReducer from "../../reducer/userReducer"

const ShowApplications=({userReducer})=>{
    

}
const mapStateProps=(state)=>{
    return{
    userReducer:state.userReducer,
}
}
export default connect(mapStateProps)(ShowApplications)