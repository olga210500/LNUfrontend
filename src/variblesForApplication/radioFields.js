const radioFileds = [
    {
      name: "IsAbroadTrip",
      title: "Вкажіть тип відрядження",
      options: [
        { label: "Відрядження по Україні", value: 0 },
        { label: "Відрядження за кордон", value: 1 },
      ],
      type:"radio"
    },
    {
        name:'RetentionType',
        title:'Вкажіть вид збереження заробітної плати',
        options:[
            {label:'зі збереженням середньої зарплати за основним місце праці',value:'зі збереженням середньої зарплати за основним місце праці'},
            {label:'зі збереженням середньої зарплати за основним місцем праці та за сумісництвом',value:'зі збереженням середньої зарплати за основним місцем праці та за сумісництвом'},
            {label:'без збереження заробітної плати (тривалість відрядження більше 10-ти днів)',value:'без збереження заробітної плати (тривалість відрядження більше 10-ти днів)'},
        ],
        type:"radio"
    },
  //   {
  //     name:'RetentionType',
  //     title:'Вкажіть вид збереження заробітної плати',
  //     options:[
  //         {label:'зі збереженням середньої зарплати за основним місце праці',value:'зі збереженням середньої зарплати за основним місце праці'},
  //         {label:'зі збереженням середньої зарплати за основним місцем праці та за сумісництвом',value:'зі збереженням середньої зарплати за основним місцем праці та за сумісництвом'},
  //         {label:'без збереження заробітної плати (тривалість відрядження більше 10-ти днів)',value:'без збереження заробітної плати (тривалість відрядження більше 10-ти днів)'},
  //         {label:'another'}
  //     ],
  //     type:"radio"
  // }
  ];
  export default radioFileds;