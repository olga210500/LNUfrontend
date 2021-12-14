import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
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

  return (
    <>
      <div className="pageBody"></div>
      <page size="A4">
        <div className="document">
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
        <div className="mainText">Заява</div>
        </div>
      </page>

      {/*     
        <div  className="right">
          <p>{}</p>
          <p>Rectore</p>
          <p>Львівського національного</p>
          <p>університету</p>
          <p>імені Івана Франка</p>
          <p>проф. Мельнику В. П. </p>
    
        </div>
        <div>
          <p >Заява</p>
          <p >
            Прошу вас відрядити мене nnjbjbjbj терміном на hggh з gjhgjhgjgjg по
            hgvhhvhvhvhv.
          </p>
          <br />
          <p>JHJHJhfejrhejrh.</p>
          <br />
          <pre>
            Транспорт:
            <ul>
              <li>fjkfjkj</li>
            </ul>
          </pre>
        </div>
       
        <br /> */}
    </>
  );
};
export default DocumentApp;
