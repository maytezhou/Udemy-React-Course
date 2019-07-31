import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';


const  Search = ({setAlert}) => {
    const githubContext = useContext(GithubContext);
    const [value,setValue]=useState(''); 
       
     const handleChange = (event) => {
        setValue(event.target.value);
    }

     const handleSubmit =  (event) => {
    
    event.preventDefault();
    if (value === ''){
       setAlert('Please enter something ','light');
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

Search.propTypes = {  
  
  
    setAlert: PropTypes.func.isRequired,
}

export default Search;