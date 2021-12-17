import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import { changeStatus } from "../../actions/applicationAtcion";
const ChangeStatus = (props) => {
  const [value, setValue] = useState(`${2}`);
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  const printStatus = (statusId) => {
    switch (statusId) {
      case 0:
        return "Не підтверджена";
      case 1:
        return "Підтверджена";
      default:
        return "На розляді";
    }
  };
  const onChangeStatus = (e) => {
    e.preventDefault();
    console.log(props.location.propsSearch, value);
    changeStatus(props.location.propsSearch, Number(value));
  };
  return (
    <section className="contact">
      <div className="containerSignin">
        <div className="col-lg-6">
          <div className="php-email-form">
            <h4>Змінити статус заявки</h4>
            <h5>Поточний статус: {`${printStatus(Number(value))}`}</h5>

            <DropdownButton
              alignCenter
              title="Статуси"
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item className="p-4" eventKey="0">
                Не підтверджена
              </Dropdown.Item>
              <Dropdown.Item className="p-4" eventKey="1">
                Підтверджена
              </Dropdown.Item>
              <Dropdown.Item className="p-4" eventKey="2">
                На розгляді
              </Dropdown.Item>
            </DropdownButton>
            <div className="text-center">
              <button
                type="submit"
                onClick={onChangeStatus}
                className="rounded"
              >
                Прийняти
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChangeStatus;
