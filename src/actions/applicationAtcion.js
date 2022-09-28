import Api from '../api/api';

export const sendApplication = async (appForm) => {
    console.log(appForm);
    return Api.post('/BusinessTripRequest', appForm)
        .then((response) => {
            if (response.status < 400) {
                alert('Вашу заявку відправлено!');
            }
            return response;
        })

        .catch((error) => {
            if (error.response.status === 400) {
                alert('Введені некоректні дані!');
            }
        });
};

export const getCurrentApplication = async (requestId) => {
    return Api.get(`/BusinessTripRequest/${requestId}`).then((response) => {
        return response;
    });
};

export const deleteAppFromTable = async (requestId) => {
    return Api.remove(`/BusinessTripRequest/${requestId}`)
        .then(
            (response) => {
                return response;
            }
        );
};
export const changeStatus = async (requestId, value) => {
    // if (value === 0) {
    //   return Api.put(`/BusinessTripRequest/cancel/${requestId}`)
    //   .then((response) => {
    //     console.log(response)
    //       return response;
    //     }
    //   )
    // }
    if (+value === 1 || +value === 0) {
        return Api.put(`/BusinessTripRequest/${requestId}`, {value})
            .then((response) => {
                    console.log(response);
                    return response;
                }
            );
    }
};
