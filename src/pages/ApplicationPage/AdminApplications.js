import { MDBDataTableV5 } from "mdbreact";
import { getApplicationsTable } from "../../actions/adminAction";
import InitialStates from "../InitialStates.js/InitialStates";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navibar from "../../components/Navibar";
import { Link } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import { deleteAppFromTable } from "../../actions/applicationAtcion";
import openNotificationWithIcon from "../../components/Notifications/Notification";
import { successfulDeleteAction } from "../../components/Notifications/Messages";
import jwt_decode from "jwt-decode";
import AuthStore from "../../stores/AuthStore";


const UsersApplicationPage = () => {
  const [datatable, setApplication] = useState({
    columns: InitialStates.AdminApplicationColumns,
    rows: [],
  });
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getApplicationsTable().then((res) => {
      setApplication({ ...datatable, rows: [...res.data.forms] });
    });
    setUpdate(false);
  }, [update]);
  const onDelete = (requestId) => {
    deleteAppFromTable(requestId);
    setUpdate(true);
    openNotificationWithIcon("success", successfulDeleteAction("Заявку"));
  };

  const printStatus = (statusId) => {
    switch (statusId) {
      case 0:
        return "Не підтверджена";
      case 1:
        return "Підтверджена";
      case 2:
        return "На розгляді";
    }
  };
  let jwt = AuthStore.getToken();
  let decodedJwt = jwt_decode(jwt);
  return (
    <>
      <Navibar />
      {
        datatable.rows.forEach((element) => {
        element.status = printStatus(element.status);
        decodedJwt[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ] !== "Admin" ? (
          (element.generateApp = (
            <div>
              <Link
                title="Згенерувати заявку"
                className="generate"
                to={{
                  pathname: "/generatePdf",
                  propsSearch: element.id,
                }}
              >
                <Icons.FileEarmarkPdf
                  size={30}
                  xlinkTitle="Згенерувати заявку"
                />
              </Link>
              <Link
                title="Змінити статус"
                className="generate"
                to={{
                  pathname: "/editAppStatus",
                  propsSearch: element.id,
                }}
              >
                <Icons.PencilSquare
                  size={30}
                  xlinkTitle="Змінити статус"
                />
              </Link>
              <button
                title="Видалити заявку"
                className="deleteButton"
                onClick={() => onDelete(element.id)}
              >
                <Icons.XCircle xlinkTitle="Видалити заявку" size={30} />
              </button>
            </div>
          ))
        ) : element.generateApp =(
          <Link
            title="Згенерувати заявку"
            className="generate"
            to={{
              pathname: "/generatePdf",
              propsSearch: element.id,
            }}
          >
            <Icons.FileEarmarkPdf size={30} xlinkTitle="Згенерувати заявку" />
          </Link>
        );
      })}
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
