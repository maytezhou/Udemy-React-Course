import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const  Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [value,setValue]=useState(''); 
       
     const handleChange = (event) => {
        setValue(event.target.value);
    }

     const handleSubmit =  (event) => {
    
    event.preventDefault();
    if (value === ''){
       alertContext.setAlert('Please enter something ','light');
    }else {
        githubContext.searchUsers(value);
        setValue('');
    }  
    }  
       return (
            <div>
                <form onSubmit= {handleSubmit} className="form">
                    <input type="text" name="value" placeholder="Search Users" value={value} onChange={handleChange}/>
               <input type="submit" value="Submit" className="btn btn-dark btn-block"/>
                </form>
               {githubContext.users.length > 0  && 
                 <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
                
            </div>
        )
    
}
export default Search;