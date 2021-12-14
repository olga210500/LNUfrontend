import ReactDOMServer from "react-dom/server";
import * as Icons from "react-bootstrap-icons";
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
const GeneratePdf = () => {
  return (
    <>
      <div id="divToPrint" className="mt4">
        <div>
          <DocumentApp />
        </div>
      </div>
      <div className="text-center">
        <button  onClick={printDocument} type="submit" className="rounded">
          Generate PDF
        </button>
      </div>
    </>
  );
};
export default GeneratePdf;
