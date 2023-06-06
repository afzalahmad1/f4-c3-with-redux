import React,{useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {clearUser} from '../redux/actions/userActions'
import {useNavigate} from 'react-router-dom'
import { setCurrentUser } from "../redux/actions/userActions"


const Profile = () => {
    const currentUser = useSelector(state => state.currentUser)

    console.log(currentUser)
    console.log("Loaded again")
     
    let dispatch = useDispatch()
    let navigate = useNavigate()

//     useEffect(()=>{
//         const user = localStorage.getItem('user') 
//          const accessToken = localStorage.getItem('accessToken') 
//          if(user && accessToken){
//               const currentUser = JSON.parse(user)

//               console.log(currentUser, accessToken)
 
//             dispatch(setCurrentUser({
//                currentUser, accessToken
//             }))
//          }
//    }, [dispatch]
//    )

    const logout = () => {
        // remove information from localstroage
        localStorage.removeItem('user')
        localStorage.removeItem('accessToken')

        dispatch(clearUser())
        navigate('/signup')
 
    }

    return(
        <div>
            {
              currentUser && 
              <div>
                <h1>Name: {currentUser.name}</h1>
                <h1>email: {currentUser.email}</h1>
                <h1>password: {currentUser.password}</h1>
              </div>
            }
              <button onClick={logout}> Logout </button>
        </div>
    )
}

export default Profile;


