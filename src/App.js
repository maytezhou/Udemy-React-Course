import React  from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Alert from './components/layouts/Alert'
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';


import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {   
 return (
      <GithubState>
        <AlertState>
          <Router>
      <div className="App">        
       <Navbar/>
       <div className="container">
         <Alert/>
         <Switch>
           <Route exact path='/' component={Home} />           
           <Route exact path ='/about' component={About}/>
           <Route exact path = '/user/:login' component ={User}/>
           <Route component = {NotFound}></Route>
         </Switch>        
       </div>    
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );

  
 
}
export default App;