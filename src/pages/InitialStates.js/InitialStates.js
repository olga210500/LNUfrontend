import { MDBBtn } from "mdbreact"
import DocumentApp from "../ApplicationPage/GeneratePDF/ApplicationDoc"

const ApplicationInitialState={
  "userId": "",
  "date": new Date(),
  "status": 2,
  "fullName": "",
  "fullTimePosition": "",
  "partTimePosition": "",
  "isAbroadTrip": true,
  "purpose": "",
  "retentionType": 0,
  "city": "",
  "country": "",
  "institution": "",
  "startDate":'',
  "endDate": '',
  "route": "",
  "transport": "",
  "expensesPayment": "",
  "tripReason": ""
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
    label: "Дії",
    field: "actions",
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
  width: 100,
  sort: "disabled",
},
{
  label: "Дії",
  width: 150,
  sort: "disabled",
  field:'generateApp'
  


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
  width: 50,
  sort: "disabled",



}]

export default {ApplicationInitialState,UsersTableColumn,AdminApplicationColumns,UserApplicationColumns}