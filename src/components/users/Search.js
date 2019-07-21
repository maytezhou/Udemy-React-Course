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
    }


    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSUbmit (event){
        console.log(this.state.value);
    event.preventDefault();
    this.props.searchUsers(this.state.value);
this.setState({value:''});
    }
   /* state = {
        text:''
    };*/
/*onSubmit = e => {
e.prevenDefault();
console.log(this.state.text);
/*this.props.searchUsers(this.state.text);
this.setState({text:''});
    };*/

/*onChange = e => this.setState({[e.target.name]: e.target.value});*/
    
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
