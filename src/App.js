import React,{Component} from 'react';
import './App.css';
import Users from './components/users/Users'
import Navbar from './components/layouts/Navbar'

class App extends Component{

  render(){
  
   
 /*  if(loading){
     return <h4>Loading</h4>
   }*/
    return (
      <div className="App">        
       <Navbar/>
       <div className="container">
       <Users/>
       </div>
    
      </div>
    );

  }
 
}

export default App;
