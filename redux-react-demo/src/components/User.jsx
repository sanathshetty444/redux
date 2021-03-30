import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/users/userActions';

function User() {
    const users=useSelector(state=>state.user.users);
    const dispatch=useDispatch();
    return (
        <div>
            {users.map(u=>{
                return <div>{u}</div>
            })}
            <button onClick={()=>dispatch(fetchUsers())}></button>
        </div>
    )
}

export default User
