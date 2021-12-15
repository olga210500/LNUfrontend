import { getCurrentApplication } from "../../../actions/applicationAtcion";
import { useEffect, useState } from "react";
import "../../../styles/style.css";
const DocumentApp = (data) => {
  const [currentApplicatin, setcurrentApplication] = useState({
    currentApp: {},
  });

  useEffect(() => {
    getCurrentApplication(Object.values(data)).then((res) => {
      setcurrentApplication({
        ...currentApplicatin,
        currentApp: res.data.request,
      });
      // console.log(res)
    });
  }, []);

  // console.log('alalal',  data)
  // const [datas, setdata] = useState({currentApp:{}})
  // setdata({ ...datas, currentApp:data.request });
  const arrData = Object.values(currentApplicatin);
  console.log(Object.values(currentApplicatin)[0].city);
  const retentionType = (type) => {
    if (type === 0) {
      return "зі збереженням середньої зарплати за основним місце праці";
    } else if (type === 1) {
      return "зі збереженням середньої зарплати за основним місцем праці та за сумісництвом";
    }
    return "без збереження заробітної плати (тривалість відрядження більше 10-ти днів)";
  };
  const calculateDate = (start, end) => {
    let second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    start = new Date(start);
    end = new Date(end);
    let timediff = end - start;
    if (isNaN(timediff)) return NaN;
    const days = Math.floor(timediff / day);
    switch (days) {
      case 1:
        return days.toString() + " день";
      case days < 5:
        return days.toString() + " дні";
      default:
        return days.toString() + " днів";
    }
    return;
  };

  return (
    <>
      <div className="pageBody"></div>

      <div className="document">
        <div className="appHead_part">
          <div className="space"></div>
          <div className="appHead">
            <p>
              Ректору
              <br />
              Львівського національного
              <br />
              університету
              <br />
              імені Івана Франка
              <br />
              проф. Мельнику В.П.
            </p>
            <p>
              {" "}
              {arrData[0].fullTimePosition}
              <br />
              {arrData[0].partTimePosition}(за сумісництвом)
            </p>
            <p>{arrData[0].fullName}</p>
          </div>
        </div>
        <div className="mainText">
          <h6>Заява</h6>
          <p>
            {"      "}Прошу відрятити мене{" "}
            {retentionType(arrData[0].retentionType)} у {arrData[0].institution}{" "}
            <br />
            {"  "}з метою {arrData[0].purpose} терміном на{" "}
            {calculateDate(arrData[0].startDate, arrData[0].endDate)} з{" "}
            {new Date(arrData[0].startDate).toLocaleDateString()} по{" "}
            {new Date(arrData[0].endDate).toLocaleDateString()}.
          </p>
          <p>
            {" "}
            {"     "}
            {arrData[0].expensesPayment}
          </p>
          <p>
            {"  "}Транспорт: {arrData[0].transport}.<br />
            {"  "}Маршрут руху: {arrData[0].route}.<br />
            {"  "}Підстава: {arrData[0].tripReason}.
          </p>
        </div>  
        <div className="signDate">
        <p>Дата</p>
        <p id='sign_'>Підпис</p>
        
      </div>
      </div>
    
    </>
  );
};
export default DocumentApp;
