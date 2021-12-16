import "./App.css";
import Home from "./pages/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About/About";
import { connect } from "react-redux";
import Signin from "./pages/Signin/Signin.tsx";
import Application from "./pages/Application";
import Signup from "./pages/Signup/Signup.tsx";
import InformationPage from "./pages/Signup/informationPage";
import InformationLoggedIn from "./pages/errors/loggedInError";
import GeneralPage from "./pages/UserPage/UserGeneral";
import GeneratePdf from "./pages/ApplicationPage/GeneratePDF/GeneratePdf";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

import UsersApplicationPage from "./pages/ApplicationPage/AdminApplications";


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
    {
      path: "/userPage",
      component: Signin,
    },
    {
      path: "/forgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/resetPassword",
      component: ResetPassword,
    },
  ];
  const signedInPages = [
    { path: "/signin", 
    component: InformationLoggedIn },
    {
      path: "/application",
      component: Application,
    },
    {
      path: "/userPage",
      component: GeneralPage,
    },
    {
      path:'/allApplications',
      component:UsersApplicationPage
    },
    {
      path: `/generatePdf`,
      component: GeneratePdf,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          {fields.map(({ path, component },i) => (
            <Route key={i} path={path} component={component} />
          ))}

          {!userReducer.loggedIn
            ? noSignedIn.map(({ path, component },i) => (
                <Route key={i} path={path} component={component} />
              ))
            : signedInPages.map(({ path, component },i) => (
                <Route key={i} path={path} component={component} />
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
