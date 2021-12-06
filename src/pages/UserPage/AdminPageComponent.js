import React from "react";
import userApi from "../../api/userApi";


class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const response = userApi.getCurrent();

    // fetch(`${`https://localhost:5001/User/`}${decodedJwt.nameid}`,
    // {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // }
    // )
    //   .then(res => {
    //     const result=res.json();
    //     console.log("sssss", result);
    //     return result;
    //   })
    //   .then(result => {
    //     console.log(result);
    //     this.setState({
    //       isLoaded: true,
    //       items: result
    //     });
    //   });
  }

  render() {
    const { items } = this.state;
 
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      );
    }
  
}
export default AdminPage;