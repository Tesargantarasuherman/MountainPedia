import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userProfile } from '../../features/userSlice';

function UserProfile() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user);
    const token = localStorage.getItem('token');

    useEffect(()=>{
        dispatch(userProfile(token))
    },[])
if(user ==null){
    return(
        <div>
            <p>error</p>
        </div>
    )
 }
  return (
    <div>
      UserProfile
    </div>
  )
}

export default UserProfile
