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
    const [state,dispacth] = useReducer (GithubReducer,initialState);
    // Search users
      //Search git hub users 
   const searchUsers = async value=> {
    setLoading();
     // console.log(value);
      const res = await axios.get(`https://api.github.com/search/users?q=${value}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data.items); // [{},{},{}]
     dispacth ({
         type:SEARCH_USERS,
        payload:res.data.items,
        })
   
    }
    //Get user 
    //Get repos
    //Clear users
    //Set loading
    const setLoading = () => dispacth({type:SET_LOADING});
    return(
<GithubContext.Provider
    value ={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        searchUsers,

    }}
    >
        {props.children}
    </GithubContext.Provider>
    ) ;
};
export default  GithubState;