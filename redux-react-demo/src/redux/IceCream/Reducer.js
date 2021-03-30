import { BUY_ICECREAM } from "./Types";

const initialState={
    noOfIceCreams:20
}
const IceCreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            console.log('inside ice');
            return{
            ...state,
            noOfIceCreams:state.noOfIceCreams-1
        }
        default: return state;
    }
}
export default IceCreamReducer;