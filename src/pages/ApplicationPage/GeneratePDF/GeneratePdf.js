import ReactDOMServer from "react-dom/server";
import * as Icons from "react-bootstrap-icons";
import InitialStates from "../../InitialStates.js/InitialStates";
import jsPDF from "jspdf";
import DocumentApp from "./ApplicationDoc";
import html2canvas from "html2canvas";
import SubmitButton from "../../../components/submitButton";

const doc = new jsPDF();
const printDocument = () => {
  const input = document.getElementById("divToPrint");
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "JPEG", 0, 0);
    pdf.save("download.pdf");
  });
};

const GeneratePdf = (props) => {
  return (
    <>
      <div id="divToPrint" className="mt5">
        <div className="">
          <DocumentApp data={props.location.propsSearch} />
        </div>
      </div>
      <div className="text-center" id="buttonGenerate">
        <button onClick={printDocument} type="submit" className="rounded">
          Створити PDF
        </button>
      </div>
    </>
  );
};
export default GeneratePdf;
