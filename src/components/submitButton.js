import {Spinner} from "react-bootstrap";

const SubmitButton=({loading= false, title })=>(
    <div className="text-center">
        <button type="submit" className="rounded" disabled={loading}>
            {loading && (<Spinner animation="border" size="sm" role="status"/>)}  {title}
        </button>
    </div>
)
export default SubmitButton;