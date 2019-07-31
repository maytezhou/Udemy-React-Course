import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';


const  Search = ({showClear, clearUsers,setAlert}) => {
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
               {showClear &&  <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    
}

Search.propTypes = {  
    clearUsers : PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search;