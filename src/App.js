import React, { useEffect } from "react" 
import {Routes, Route} from "react-router-dom"
import Signup from "./Components/Signup"
import Profile from "./Components/Profile"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCurrentUser } from "./redux/actions/userActions"




const App = () =>{
  const currentUser = useSelector(state => state.currentUser)
  const accessToken = useSelector(state => state.accessToken)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // localstorage
  useEffect(()=>{
       const user = localStorage.getItem('user') 
        const accessToken = localStorage.getItem('accessToken') 
        if(user && accessToken){
             const currentUser = JSON.parse(user)

           dispatch(setCurrentUser({
            currentUser, accessToken
           }))
        }
  }, [dispatch]
  )
 


  useEffect(()=>{
       if(!accessToken && window.location.pathname == "/profile" ){
              navigate("/signup")
       }
       if(accessToken && window.location.pathname == "/signup" ){
              navigate("/profile")
       }
  }, [accessToken, navigate, currentUser]
  )
     
  return(
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}


export default App