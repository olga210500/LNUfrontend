import './App.css';
import Home from './pages/Home';
import { Route,BrowserRouter ,Switch} from 'react-router-dom';
import Contact from './pages/Contact';
// import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Application from './pages/Application';
function App() {
  const fields = [
    {
      path:'/about',
      component:Application

                      
    },
    {
      path:'/contact',
      component:Contact
      
    },
    {
      path:'/signup',
      component:Signup
    },
    {
      path:'/signin',
      component:Signin
    }
  
  ];
  
  return (
      <>  
    
          
    

          
          <BrowserRouter>
         
           <Switch>

            <Route exact path='/' component={Home} />
            {fields.map(({ path,component}) => (
                    <Route path={path} component={component}/>
                  ))}
            </Switch>
   


          </BrowserRouter>
      
    
    </>
    
        
  );
}

export default App;
