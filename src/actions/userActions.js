
const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})


export const fetchUser = (userInfo) => dispatch => {
    fetch('https://localhost:5001/api/Login/signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
       
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`https://localhost:5001/api/Auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
    
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}

export const logOut = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("https://localhost:5001/api​/Login​/logout", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            
          }
        })
          .then(resp => resp.json())
          .then(data => {
          
              localStorage.removeItem("token")
            
          })
      }
    }
  }