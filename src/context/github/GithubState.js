import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,

} from '../types';
const GithubState = props => {
    const initialState = {
        users:[],
        user:{},
        repos : [],
        loading:false ,
    }
    const [state,dispatch] = useReducer (GithubReducer,initialState);
    // Search users
      //Search git hub users 
   const searchUsers = async value=> {
    setLoading();
     // console.log(value);
      const res = await axios.get(`https://api.github.com/search/users?q=${value}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data.items); // [{},{},{}]
     dispatch ({
         type:SEARCH_USERS,
        payload:res.data.items,
        })
   
    }
    //Get user 
    const getUser = async (username)=>{
        setLoading();
       // console.log(username);
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
       console.log(res.data); // {}
       dispatch({
            type:GET_USER,
            payload:res.data,
        })
      };
    //Get repos
    const getUserRepos = async (username)=>{
        setLoading();
       // console.log(username);
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log(res.data) // [{},{}] 
       dispatch({
           type:GET_REPOS,
           payload:res.data,
       })
      };
       
    //Clear users
     //Clear users from state
  const clearUsers = () => dispatch({type:CLEAR_USERS});

    //Set loading
    const setLoading = () => dispatch({type:SET_LOADING});
    return(
<GithubContext.Provider
    value ={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,

    }}
    >
        {props.children}
    </GithubContext.Provider>
    ) ;
};
export default  GithubState;