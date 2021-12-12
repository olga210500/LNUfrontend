import ReactDOMServer from "react-dom/server";
import * as Icons from "react-bootstrap-icons";
import jsPDF from "jspdf";
const doc = new jsPDF();
const Foo = <b>foo</b>;
const GeneratePdf=()=>{
    const save = () => {
        doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
          callback: () => {
            doc.save("myDocument.pdf");
          }
        });
      };
    
      return (
        <div>
          {/* <button color="blue" onClick={save}>save</button> */}
          <button  onClick={save}>Generate</button>

        </div>
      );
}
export default GeneratePdf