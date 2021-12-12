
const ApplicationInitialState={
    id:0,
    fullName: "",
    date:new Date(),
    status: 0,
    fullTimePosition: "", // повна зайнятість
    partTimePosition: "", // за сумісництвом
    isAbroadTrip: Boolean(),
    purpose: "",
    retentionType:0, //повернення коштів
    city: "",
    country: "",
    institution: "", //заклад куди направляєтесь
    startDate: new Date(),
    endDate: new Date(),
    route: "", //маршут
    transport: "", //нема в базі
    expensesPayment: "",
    tripReason: "",
    userId:'',
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
const ApplicationColumns=[ {
  label: "Повне ім'я",
  field: "FullName",
  width: "10vh",
  attributes: {
    "aria-controls": "DataTable",
    "aria-label": "FirstName",
  },
},
{
  label: "Статус заявки",
  field: "Status",
  width: 170,
  sort: "disabled",
},
{
  label: "Дата створення заявки",
  field: "Date",
  width: 200,
  sort: "disabled",
}]
export default {ApplicationInitialState,UsersTableColumn,ApplicationColumns}