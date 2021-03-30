import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {buyIceCream} from '../redux/IceCream/Actions'


function IceCreamShop() {
    const noOfIceCream=useSelector(state=>state.iceCream.noOfIceCreams);
    const dispatch=useDispatch();
    return (
        <div>
            Hello {noOfIceCream}
            <button onClick={()=>dispatch(buyIceCream())}> Buy ICECREAM</button>
        </div>
    )
}

export default IceCreamShop
