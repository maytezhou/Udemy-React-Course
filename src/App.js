import React,{useState, Fragment} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Alert from './components/layouts/Alert'
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios';
import Navbar from './components/layouts/Navbar';
import About from './components/layouts/pages/About';
import GithubState from './context/github/GithubState'

const App = () => {
  const [users,setUsers]=useState([]);
  const [user,setUser]=useState({});
  const [repos,setRepos]=useState([]);
  const [loading,setLoading]=useState(false);
  const [alert,setAlert]=useState(null);



// Get single Github User
 const getUser = async (username)=>{
  setLoading(true);
 // console.log(username);
  const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 console.log(res.data); // {}
  setUser(res.data);
  setLoading(false);
  
}
// Get users repos 
 const getUserRepos = async (username)=>{
  setLoading(true);
 // console.log(username);
  const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  console.log(res.data) // [{},{}] 
  setRepos(res.data);
  setLoading(false);  
}
  //Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }
  // SEt Alert
   const showAlert = (msg,type) =>{   
    setAlert({msg, type});
    setTimeout(() => setAlert(null),5000);

    }; 

    return (
      <GithubState>
      <Router>
      <div className="App">        
       <Navbar/>
       <div className="container">
         <Alert alert={alert}/>
         <Switch>
           <Route exact path='/' render = {props =>(
             <Fragment>
 <Search 
         clearUsers={clearUsers} 
         showClear ={users.length > 0 ? true :false }
         setAlert = {showAlert}
         />
       <Users loading={loading} users={users}/>
             </Fragment>
           )}/>
<Route exact path ='/about' component={About}/>
<Route exact path = '/user/:login' render ={props  => (
  <User {...props} 
  getUser = {getUser}  
  getUserRepos={getUserRepos} 
  user={user} 
  repos={repos}
  loading={loading}/>
)}/>

         </Switch>
        
       </div>
    
      </div>
      </Router>
      </GithubState>
    );

  
 
}
export default App;