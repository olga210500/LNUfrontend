const fieldsForInput = [
    {
      title: "Прізвище, ім'я, по батькові (в родовому відмінку)",
      type: "text",
      name: "fullName",
      id: "fullName",
      placeholder: "Прізвище, ім'я, по батькові",
      required:'required'
    },
    {
      title: "Вкажіть підрозділ та посаду за основним місцем праці",
      type: "text",
      name: "fullTimePosition",
      id: "fullTimePosition",
      placeholder: "Ваша відповідь",
      required:'required'
    },
    {
      title: "Вкажіть відділ та посаду за сумісництвом (за наявності)",
      type: "text",
      name: "partTimePosition",
      id: "partTimePosition",
      placeholder: "Ваша відповідь",
    },
    {
      title: "Вкажіть місто відрядження",
      type: "text",
      name: "city",
      id: "city",
      placeholder: "Ваша відповідь",
      required:'required'
    },
    {
      title: "Вкажіть країну відрядження (для закордонного відрядження)",
      type: "text",
      name: "country",
      id: "country",
      placeholder: "Ваша відповідь",
    },
    {
      title:"Вкажіть дату початку відрядження",
      type: "date",
      name: "startDate",
      id: "startDate",
      required:'required'
    },
    {
      title:"Вкажіть дату завершення відрядження",
      type: "date",
      name: "endDate",
      id: "endDate",
      required:'required'
    },
    {
      title:
        "Вкажіть маршрут поїздки (для відряджень по Україні). Наприклад: Львів-Київ-Львів",
      type: "text",
      name: "route",
      id: "route",
      placeholder: "Ваша відповідь",
    },

  ];
  export default fieldsForInput;