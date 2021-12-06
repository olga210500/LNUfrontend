import ProgressBar from "react-bootstrap/ProgressBar";
import '../../styles/style.css'
const fields = [
  {
    variant: "info",
    now: 80.4,
    label:'Java Script'
  },
  {
    variant: "warning",
    now: 15.1,
    label:'CSS'
  },
  {
    variant: "danger",
    now: 4.5,
    label:'HTML'
  },
  {
    variant: "success",
    now: 100,
    label:'C#'
  },
];
const OurSkills = () => (
  <>
    <section className="skills" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Технології</h2>
          <p>
           В даному проекті використовувались такі Технології
          </p>
        </div>

        <div className="skills-content">
        {fields.map(({variant,now,label})=>(

            <ProgressBar variant={variant} now={now} label={label} />
        ))}
        </div>
      </div>
    </section>
  </>
);
export default OurSkills;
