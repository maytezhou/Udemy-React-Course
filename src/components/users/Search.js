import React, {useState} from 'react';
import PropTypes from 'prop-types';


const  Search = ({searchUsers,showClear, clearUsers,setAlert}) => {
    const [value,setValue]=useState(''); 
       
     const handleChange = (event) => {
        setValue(event.target.value);
    }

     const handleSubmit =  (event) => {
    
    event.preventDefault();
    if (value === ''){
       setAlert('Please enter something ','light');
    }else {
        searchUsers(value);
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
    searchUsers: PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search;