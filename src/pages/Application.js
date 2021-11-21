import React, { Component } from "react";
import Navibar2 from "../components/Navibar2";
import "../styles/style.css";
import { connect } from "react-redux";
import { signUserUp } from "../actions/userActions";

class Signup extends Component {
  state = {
    fullName: "",

    Date: new Date(),
    Status: "in progress",

    FullTimePosition: "",
    PartTimePosition: "",
    IsAbroadTrip: 0,
    Purpose: "",
    RetentionType: 1,
    City: "",
    Country: "",
    Institution: "",
    StartDate: new Date(),
    EndDate: new Date(),
    Route: "",
    Transport: "",
    ExpensesPayment: "",
    TripReason: "",
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUserUp(this.state);
  };

  render() {
    return (
      <>
        <Navibar2 />
        <section className="contact">
          <div className="d-flex flex-column justify-content-center">
            <div className="titleContainer ">
              <h1> Заявка на відрядження</h1>
            </div>
            <div className="applicationForm">
              <form id="formApp" onSubmit={this.onSubmit}>
                <div className="col-md-5 mb-3 php-email-form columnApp">
                  <h6>Прізвище, ім'я, по батькові (в родовому відмінку)</h6>

                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    id="fullName"
                    placeholder="Прізвище, ім'я, по батькові"
                    required
                  />
                </div>
                <div className="col-md-5 php-email-form mb-3 columnApp">
                  <h6>Вкажіть підрозділ та посаду за основним місцем праці </h6>

                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Ваша відповідь"
                    required
                  />
                </div>
                <div className="col-md-5 php-email-form mt-3 mt-md-0 mb-3 columnApp">
                  <h6>
                    Вкажіть відділ та посаду за сумісництвом (за наявності)
                  </h6>
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Ваша відповідь"
                  />
                </div>
                <div className="col-md-5 php-email-form mt-3 mt-md-0 mb-3 columnApp">
                  <h6>Вкажіть тип відрядження</h6>
                  <div className="form-check">
                    <input type="radio" name="typeTrip" id="" />
                    <label className="form-check-label px-2" htmlFor="typeTrip">
                      <h6> Відрядження по Україні </h6>
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="radio" name="typeTrip" id=""  />
                    <label className="form-check-label px-2" htmlFor="typeTrip">
                      <h6> Відрядження за кордон </h6>
                    </label>
                  </div>
                </div>

                <div className="col-md-5 php-email-form mt-3 mt-md-0 mb-3 columnApp">
                  <h6>Вкажіть вид відрядження</h6>
                  <div className="form-check">
                    <div className="header_6">
                      <input
                        className="float-left"
                        type="radio"
                        name="purposeTrip"
                        id=""
                      />
                      <label
                        className="form-check-label px-2"
                        htmlFor="purposeTrip"
                      >
                        <h6>
                          З метою реалізації права на мобільність відповідно до
                          Постанови Кабінету Міністрів України від 12.08.2019 р.
                          №579
                        </h6>
                      </label>
                    </div>
                  </div>
                  <div className="form-check">
                   
                    <div> 
                      <input type="radio" name="purposeTrip" id="" />
                      <label
                        className="form-check-label px-2"
                        htmlFor="purposeTrip">
                        <h6> проходження стажування </h6>
                      </label>
                    </div>
                  </div>
                  <div className="form-check">
                   <div> 
                     <input type="radio" name="purposeTrip" id="" />
                     <label
                       className="form-check-label px-2"
                       htmlFor="purposeTrip">
                       <h6> для викладу лекційного курсу </h6>
                     </label>
                   </div>
                 </div>
                 <div className="form-check">
                   <div> 
                     <input type="radio" name="purposeTrip" id="" />
                     <label
                       className="form-check-label px-2"
                       htmlFor="purposeTrip">
                       <h6> участь в проектній зустрічі </h6>
                     </label>
                   </div>
                 </div>
                 <div className="form-check">
                   <div> 
                     <input type="radio" name="purposeTrip" id="" />
                     <label
                       className="form-check-label px-2"
                       htmlFor="purposeTrip">
                       <h6> участь у тренінгу </h6>
                     </label>
                   </div>
                 </div>
                  
                 <div className="form-check">
                   <div> 
                     <input type="radio" name="purposeTrip" id="" />
                     <label
                       className="form-check-label px-2"
                       htmlFor="purposeTrip">
                       <h6> інше </h6>
                     </label>
                     <input type='text' name='purposeTrip' id=''></input>
                   </div>
                 </div>





                </div>
                

                <div className="col-md-5 php-email-form mt-3 mt-md-0 mb-3 columnApp">
                  <h6></h6>
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* <div className="col-md-5 php-email-form mt-3 mt-md-0 mb-3 columnApp">
                    <h6></h6>
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Your Email"
                    required
                  />
                </div> */}
                <div className="text-center ">
                  <button type="submit" className="rounded">
                    Надіслати
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
