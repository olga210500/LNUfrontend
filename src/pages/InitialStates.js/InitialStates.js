
const ApplicationInitialState={
    id:0,
    fullName: "",
    date:new Date(),
    status: 0,
    fullTimePosition: "", // повна зайнятість
    partTimePosition: "", // за сумісництвом
    isAbroadTrip: Boolean(),
    purpose: "hhhhh",
    retentionType:0, //повернення коштів
    city: "",
    country: "",
    institution: "hhhhh", //заклад куди направляєтесь
    startDate: new Date(),
    endDate: new Date(),
    route: "", //маршут
    transport: "hhhhh", //нема в базі
    expensesPayment: "hhhhhhh",
    tripReason: "hhhhhh",
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
export default {ApplicationInitialState,UsersTableColumn}