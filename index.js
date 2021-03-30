const redux=require('redux');
const logger=require('redux-logger');

const createStore =redux.createStore;
const combineReducers=redux.combineReducers;
const reduxLogger=logger.createLogger();
const applyMiddleware=redux.applyMiddleware;

const BUY_CAKE="BUY_CAKE";
const BUY_ICECREAM="BUY_ICECREAM";
const initialCakeState={ //state
    numberOfCakes:10
};
const initialIceCreamState={ //state
    numberOfIceCreams:20
};
function buyCake(){ //action object
    return{
        type:BUY_CAKE,
        info:'First action'
    }
}
function buyIceCream(){ //action object
    return{
        type:BUY_ICECREAM,
        info:'First action'
    }
}
const CakeReducer=(state=initialCakeState,action)=>{ //dispatcher
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numberOfCakes:state.numberOfCakes-1
        }
        default:return state
    }
};
const IceCreamReducer=(state=initialIceCreamState,action)=>{ //dispatcher
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numberOfIceCreams:state.numberOfIceCreams-1
        }
        default:return state
    }
};
const rootReducer=combineReducers({
    cake:CakeReducer,
    iceCream:IceCreamReducer
})
const store=createStore(rootReducer,applyMiddleware(reduxLogger));
console.log('Initial State',store.getState());

// const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState())) //the common after effect like componentDidUpdate
store.dispatch(buyCake()); //executing actions
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
// unsubscribe(); 
