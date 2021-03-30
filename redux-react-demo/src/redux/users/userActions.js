import axios from "axios";
import { FETCHED_SUCCESFULLY, FETCHED_WITH_ERROR, FETCH_USERS } from "./userTypes"

export const RequestUsers=()=>{
    return{
        type:FETCH_USERS
    }
};
export const fetchedSuccessfully=(users)=>{
    return{
        type:FETCHED_SUCCESFULLY,
        payload:users
    }
};
export const fetchedWithError=(error)=>{
    return{
        type:FETCHED_WITH_ERROR,
        payload:error
    }
};

export const fetchUsers=()=>{
    return function(dispatch){
        dispatch(RequestUsers());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(r=>{
                let users=r.data.map(u=>u.id);

                dispatch(fetchedSuccessfully(users));
            })
            .catch(e=>{
                dispatch(fetchedWithError(e));
            })
    }
}