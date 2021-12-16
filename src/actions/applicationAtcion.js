import AuthStore from '../stores/AuthStore';
import jwt_decode from 'jwt-decode';
import Api from '../api/api';
import config from '../config';



  export const sendApplication =async (appForm)=> {
    let jwt = AuthStore.getToken();
    let decodedJwt = jwt_decode(jwt);
    appForm.retentionType=parseInt(appForm.retentionType,10)
    appForm.isAbroadTrip=Boolean(appForm.isAbroadTrip)
    appForm.userId=`${decodedJwt.nameid}`
    console.log(appForm)
    return await Api.post('BusinessTripRequest', appForm)
        .then((response) =>{
          if(response.status<400){
              alert("Вашу заявку відправлено!")
          }
        return response})
        
        .catch(error=>{
          if(error.response.status === 400){
            alert('Введені некоректні дані!')
          }
        })
       
      }

 
   

  export const getCurrentApplication=async(requestId)=>{
    return await Api.get(`BusinessTripRequest/${requestId}`)
    .then((response)=>{return response})
  }

