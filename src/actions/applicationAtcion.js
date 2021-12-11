import AuthStore from '../stores/AuthStore';
import jwt_decode from 'jwt-decode';
import Api from '../api/api';
import config from '../config';


  export const sendApplication =async (appForm)=> {
    const response = await Api.post(`BusinessTripRequest`, appForm)
        .then((response) =>{return response})
        return response;
      }





export const getUserApplications = async () => {
  let jwt = AuthStore.getToken();
  let decodedJwt = jwt_decode(jwt);
  return await Api.get(`BusinessTripRequest/${decodedJwt.nameid}`)
      .then((response) => {
      console.log(response)
      return response
  });
};

 
   

  


