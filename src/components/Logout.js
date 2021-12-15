import { logOut } from "../actions/userActions";
import { connect } from "react-redux";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Logout = ({ logOut }) => {
  const onSubmit = (e) => {
    logOut();
  };
  return (
    <>
      <Nav>
        <Nav className="pb-2">
          <Link to="/" onClick={onSubmit}>
            Вийти
          </Link>
        </Nav>
      </Nav>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
