import './App.css';
import Home from './pages/Home';
import { Route,BrowserRouter ,Switch} from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
function App() {
  
  return (
      <>  
    
      
    

          
          <BrowserRouter>
         
           <Switch>

            <Route exact path='/' component={Home} />
            <Route  path='/about' component={About} />
            <Route path='/contact' component={Contact}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/signin' component={Signin}/>
            </Switch>
   


          </BrowserRouter>
      
    
    </>
    
        
  );
}

export default App;
