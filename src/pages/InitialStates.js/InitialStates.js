import AuthStore from "../../stores/AuthStore";
import jwt_decode from "jwt-decode";

let jwt = AuthStore.getToken();
let decodedJwt = jwt_decode(jwt);
const ApplicationInitialState={
    fullName: "",
    Status: 0,
    FullTimePosition: "", // повна зайнятість
    PartTimePosition: "", // за сумісництвом
    IsAbroadTrip: new Boolean(),
    Purpose: "",
    RetentionType: 1, //повернення коштів
    City: "",
    Country: "",
    Institution: "", //заклад куди направляєтесь
    StartDate: new Date(),
    EndDate: new Date(),
    Route: "", //маршут
    Transport: "", //нема в базі
    ExpensesPayment: "",
    TripReason: "",
    UserId: `${decodedJwt.nameid}`,
  }
const UsersTableColumn= [
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
]
export default {ApplicationInitialState,UsersTableColumn}