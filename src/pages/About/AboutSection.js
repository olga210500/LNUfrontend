import "../../styles/style.css";
import image from "../../styles/img/gerb.jpg";
import "react-bootstrap";
const AboutSection = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={image}
                className="img-fluid"
                alt="Університет імені Івана Франка"
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>LNUbiz</h3>
              <p className="fst-italic">
                З плином часу все більше речей навколо нас піддаються
                автоатизації. Саме так виникла ідея розробки веб-сервісу LNUbiz.
                Основна ідея - спростити процедуру оформлення заявок на
                відрядження, економлячи при цьому, час співробітників та ресурси
                планети , скорочуючи обсяг паперових заяв.
              </p>
              <p>
                Відтепер можна подати заявку на коротко- та довгострокові
                відрядження онлай!
                <p>
                  Заповніть форму та наші модератори провірять виконання усіх
                  вимог. У разі порушення вимог щодо правил заповнення форми на
                  відрядження ви зможете відредагувати заявку просто біля свого
                  персонального комп'ютера.
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
