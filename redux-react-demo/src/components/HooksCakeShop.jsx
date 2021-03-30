import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';

function HooksCakeShop() {
    const numOfCakes=useSelector(state=>state.cake.noOfCakes);
    const dispatch=useDispatch();
    return (
        <div>
            HELLO ={numOfCakes}
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeShop
