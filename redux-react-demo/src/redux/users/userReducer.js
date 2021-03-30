import { FETCHED_SUCCESFULLY, FETCHED_WITH_ERROR, FETCH_USERS } from "./userTypes";


const initialState={
    loading:'',
    users:[],
    error:''
}
const UserReducer=(state=initialState,action)=>{
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
        default: return state;

    }
}

export default UserReducer;