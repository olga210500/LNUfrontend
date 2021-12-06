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
      name: "FullTimePosition",
      id: "FullTimePosition",
      placeholder: "Ваша відповідь",
      required:'required'
    },
    {
      title: "Вкажіть відділ та посаду за сумісництвом (за наявності)",
      type: "text",
      name: "PartTimePosition",
      id: "PartTimePosition",
      placeholder: "Ваша відповідь",
    },
    {
      title: "Вкажіть місто відрядження",
      type: "text",
      name: "City",
      id: "City",
      placeholder: "Ваша відповідь",
      required:'required'
    },
    {
      title: "Вкажіть країну відрядження (для закордонного відрядження)",
      type: "text",
      name: "Country",
      id: "Country",
      placeholder: "Ваша відповідь",
    },
    {
      title:"Вкажіть дату початку відрядження",
      type: "date",
      name: "StartDate",
      id: "StartDate",
      required:'required'
    },
    {
      title:"Вкажіть дату завершення відрядження",
      type: "date",
      name: "EndDate",
      id: "EndDate",
      required:'required'
    },
    {
      title:
        "Вкажіть маршрут поїздки (для відряджень по Україні). Наприклад: Львів-Київ-Львів",
      type: "text",
      name: "Route",
      id: "Route",
      placeholder: "Ваша відповідь",
    },

  ];
  export default fieldsForInput;