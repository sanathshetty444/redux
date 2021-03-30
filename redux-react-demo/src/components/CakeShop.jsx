import React from 'react'
import { buyCake } from '../redux/cake/cakeActions';
import {connect} from 'react-redux';

function CakeShop(props) {
    return (
        <div>
            HELLO ={props.noOfCakes}
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        noOfCakes:state.noOfCakes
    }
};
const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeShop);