import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {
    constructor(props) {
        super (props)
        this.state ={value : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSUbmit = this.handleSUbmit.bind(this);
    };
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers : PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }


    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSUbmit (event){
        console.log(this.state.value);
    event.preventDefault();
    if (this.state.value === ''){
        this.props.setAlert('Please enter something ','light');
    }else {
        this.props.searchUsers(this.state.value);
        this.setState({value:''});
    }
  
    }
    
    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form onSubmit= {this.handleSUbmit} className="form">
                    <input type="text" name="text" placeholder="Search Users" value={this.state.value} onChange={this.handleChange}/>
               <input type="submit" value="Submit" className="btn btn-dark btn-block"/>
                </form>
               {showClear &&  <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search;
