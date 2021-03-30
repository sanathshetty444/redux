import {createStore,combineReducers, applyMiddleware} from 'redux';
import CakeReducer from './cake/cakeReducer';
import IceCreamReducer from './IceCream/Reducer';
import UserReducer from './users/userReducer';
import reduxThunk from 'redux-thunk'
 
const combinedReducer=combineReducers({
    cake:CakeReducer,
    iceCream:IceCreamReducer,
    user:UserReducer
})
const store=createStore(combinedReducer,applyMiddleware(reduxThunk));

export default store;
