const URL = "https://localhost:5001/api";

export const sendApplication = (appForm) => (dispatch) => {
    fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(appForm),
    })
      .then((res) => res.json())
   
  };
  