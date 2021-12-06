import "./App.css";
import Home from "./pages/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { connect } from "react-redux";
import Signin from "./pages/Signin/Signin";
import Application from "./pages/Application";
import Signup from "./pages/Signup/Signup";
import InformationPage from "./pages/Signup/informationPage";
// import UserPage from "./pages/UserPage/UserPage";
import InformationLoggedIn from "./pages/errors/loggedInError";
import AdminPage from "./pages/UserPage/AdminPageComponent";
const App = ({ userReducer }) => {
  const fields = [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/contact",
      component: Contact,
    },

  ];
  const noSignedIn = [
    {
      path: "/signup",
      component: Signup,
    },
    {
      path: "/signin",
      component: Signin,
    },
    {
      path: "/informationPage",
      component: InformationPage,
    },
    
  ];
  const signedInPages = [
    { path: "/signin", component: InformationLoggedIn },
    {
      path: "/application",
      component: Application,
    },
    {
      path: "/userPage",
      component: AdminPage,
    },

  ];

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {fields.map(({ path, component }) => (
            <Route path={path} component={component} />
          ))}
          {!userReducer.loggedIn
            ? noSignedIn.map(({ path, component }) => (
                <Route path={path} component={component} />
              ))
            : signedInPages.map(({ path, component }) => (
                <Route path={path} component={component} />
              ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps)(App);
