import { Link } from "react-router-dom";
import "../../styles/style.css";
const InformationLoggedIn = () => (
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
            <h3> Ви увійшли в систему!</h3>
            <p className="parSize">
              Ви вже увійшли в систему. Перейдіть на сторінку{" "}
              <Link id="linkContact" to="/userPage">
                користувача
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InformationLoggedIn;
