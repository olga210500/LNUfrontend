import { MDBBtn } from "mdbreact"
import DocumentApp from "../ApplicationPage/GeneratePDF/ApplicationDoc"

const ApplicationInitialState={
  "userId": "",
  "date": "",
  "fullName": "",
  "fullTimePosition": "",
  "partTimePosition": "",
  "isAbroadTrip": true,
  "purpose": "string",
  "retentionType": 0,
  "city": "",
  "country": "",
  "institution": "string",
  "startDate": "",
  "endDate": "",
  "route": "",
  "transport": "string",
  "expensesPayment": "string",
  "tripReason": "string"
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
const AdminApplicationColumns=[ {
  label: "Повне ім'я",
  field: "fullName",
  width: "10vh",
  attributes: {
    "aria-controls": "DataTable",
    "aria-label": "FirstName",
  },
},
{
  label: "Статус заявки",
  field: "status",
  width: 170,
  sort: "disabled",
},
{
  label: "Дата створення заявки",
  field: "date",
  width: 200,
  sort: "disabled",
},
{
  label: "Згенерувати заявку",
  width: 200,
  sort: "disabled",
  // edit:<DocumentApp/>
  field:'generateApp'
  // action:'generateApp'


}]


const UserApplicationColumns=[ {
  label: "Повне ім'я",
  field: "fullName",
  width: "10vh",
  attributes: {
    "aria-controls": "DataTable",
    "aria-label": "FirstName",
  },
},
{
  label: "Статус заявки",
  field: "status",
  width: 170,
  sort: "disabled",
},
{
  label: "Дата створення заявки",
  field: "date",
  width: 200,
  sort: "disabled",
},
{
  label: "Згенерувати заявку",
  width: 200,
  sort: "disabled",
  // edit:<DocumentApp/>
  // field:'generateApp'
  // action:'generateApp'


}]

export default {ApplicationInitialState,UsersTableColumn,AdminApplicationColumns,UserApplicationColumns}