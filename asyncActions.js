const redux=require('redux');
const logger=require('redux-logger');
const reduxThunk=require('redux-thunk').default
const axios=require('axios');

const createStore=redux.createStore;
const myLogger=logger.createLogger();
const applyMiddleware=redux.applyMiddleware;

const FETCH_USERS='FETCH_USERS';
const FETCHED_SUCCESFULLY='FETCHED_SUCCESFULLY';
const FETCHED_WITH_ERROR='FETCHED_WITH_ERROR';

const initialState={
    loading:'',
    users:[],
    error:''
}

const fetchedUsersRequest=()=>{
    return{
        type:FETCH_USERS,
    }
};

const fetchedSuccessfully=(users)=>{
    
    return{
        type:FETCHED_SUCCESFULLY,
        payload:users
    }
};
const fetchedWithError=(error)=>{
    return{
        type:FETCHED_WITH_ERROR,
        payload:error
    }
};

const reuducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS:return{
            ...state,
            loading:true,
            
        }
        case FETCHED_SUCCESFULLY:return{
            loading:false,
            users:action.payload,
            error:''
        }
        case FETCHED_WITH_ERROR:return{
            loading:false,
            users:[],
            error:action.payload
        }
        default : return state
    }
}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchedUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
              .then(r=>{
                let users=r.data.map(u=>u.id);

                dispatch(fetchedSuccessfully(users));
              })
              .catch(e=>{
                dispatch(fetchedWithError(e));
              })
    }
};

const store=createStore(reuducer,applyMiddleware(reduxThunk));
console.log("initial State",store.getState());
const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState())) //the common after effect like componentDidUpdate

store.dispatch(fetchUsers());
// unsubscribe();


