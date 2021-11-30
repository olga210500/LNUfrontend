import { Link } from "react-router-dom";
import "../../styles/style.css";
const InformationPage = () => (
  <section
    className="contact"
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-duration="500"
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col ">
          <div className="info-box">
            <h3> Вітаємо в системі LNUbiz</h3>
            <p className="parSize">
              Для підтвердження реєстрації перевірте електроyну скриньку.
              <br /> Якщо виникли питання можете{" "}
              <Link id="linkContact" to="/contact">
                зв'язатись{" "}
              </Link>{" "}
              з нами.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InformationPage;
