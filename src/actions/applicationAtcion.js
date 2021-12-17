import Api from "../api/api";
import config from "../config";

export const sendApplication = async (appForm) => {
  console.log(appForm);
  return await Api.post("BusinessTripRequest", appForm)
    .then((response) => {
      if (response.status < 400) {
        alert("Вашу заявку відправлено!");
      }
      return response;
    })

    .catch((error) => {
      if (error.response.status === 400) {
        alert("Введені некоректні дані!");
      }
    });
};

export const getCurrentApplication = async (requestId) => {
  return await Api.get(`BusinessTripRequest/${requestId}`).then((response) => {
    return response;
  });
};

export const deleteAppFromTable = async (requestId) => {
  return await Api.remove(`BusinessTripRequest/${requestId}`)
  .then(
    (response) => {
      return response;
    }
  );
};
export const changeStatus = async (requestId,value) => {
  if (value === 0) {
    return await Api.put(`BusinessTripRequest/cancel/${requestId}`)
    .then((response) => {
      console.log(response)
        return response;
      }
    )
  }
  if (value === 1) {
    return await Api.put(`BusinessTripRequest/confirm/${requestId}`)
    .then((response) => {
      console.log(response)
      return response;
    }
    )
  }
};
